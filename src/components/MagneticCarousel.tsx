"use client";

import { useEffect, useRef, useState } from "react";

const RenderTarget = {
    current: () => "preview",
    canvas: "canvas",
    export: "export",
    thumbnail: "thumbnail",
    preview: "preview",
};

const EASE_PRESETS: Record<string, string> = {
    linear: "linear",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
};

// Shown when the user hasn't added their own Content images.
const DEFAULT_IMAGES = [
    {
        src: "/portfolio-bridal-1.png",
    },
    {
        src: "/portfolio-bridal-2.png",
    },
    {
        src: "/services-bridal-1.png",
    },
    {
        src: "/about-artist.png",
    },
    {
        src: "/bride-story-1.png",
    },
    {
        src: "/hero-model.png",
    },
    {
        src: "/portfolio-editorial-1.png",
    },
    {
        src: "/portfolio-editorial-2.png",
    },
];

// Turn a Framer Transition object into { dur, ease } for CSS.
function parseTransition(t: any) {
    const dur = Math.max(0.05, (t && t.duration) || 0.5);
    let ease = "cubic-bezier(0.44, 0, 0.56, 1)";
    if (t && Array.isArray(t.ease) && t.ease.length === 4) {
        ease = `cubic-bezier(${t.ease.join(", ")})`;
    } else if (t && typeof t.ease === "string" && EASE_PRESETS[t.ease]) {
        ease = EASE_PRESETS[t.ease];
    } else if (t && t.type === "spring") {
        ease = "cubic-bezier(0.34, 1.56, 0.64, 1)"; // overshoot approximation
    }
    return { dur, ease };
}

const COMPONENT_DEFAULTS = {
    images: DEFAULT_IMAGES,
    collapsedWidth: 100,
    hoverWidth: 200,
    collapsedHeight: 340,
    hoverHeight: 400,
    openSize: 600,
    gap: 16,
    influence: 200,
    blur: 2,
    transition: {
        type: "tween",
        duration: 0.3,
        delay: 0,
        ease: "easeInOut",
    },
};

export default function MagneticCarousel(props: any) {
    props = { ...COMPONENT_DEFAULTS, ...props };
    const {
        images = DEFAULT_IMAGES,
        collapsedWidth = 100,
        hoverWidth = 200,
        collapsedHeight = 340,
        hoverHeight: originalHoverHeight = 400,
        openSize: originalOpenSize = 600,
        gap = 16,
        influence = 200,
        blur = 2,
        transition = { type: "tween", duration: 0.3, ease: "easeInOut" },
        style = {},
    } = props;

    // Responsive adjustments
    const [windowWidth, setWindowWidth] = useState(1200);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    
    // Scale down dimensions on mobile
    const cWidth = isMobile ? Math.min(collapsedWidth, 40) : collapsedWidth;
    const hWidth = isMobile ? Math.min(hoverWidth, 120) : hoverWidth;
    const cHeight = isMobile ? Math.min(collapsedHeight, 200) : collapsedHeight;
    const hoverHeight = isMobile ? Math.min(originalHoverHeight, 260) : originalHoverHeight;
    const openSize = isMobile ? Math.min(originalOpenSize, windowWidth - 32) : originalOpenSize;
    const actualGap = isMobile ? Math.min(gap, 8) : gap;

    const items: any[] =
        Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES;
    const count = items.length;

    const containerRef = useRef<HTMLDivElement>(null);
    const [factors, setFactors] = useState<number[]>(() => items.map(() => 0));
    const [open, setOpen] = useState<number | null>(null);
    const [closing, setClosing] = useState(false);

    const isCanvas = RenderTarget.current() === RenderTarget.canvas;

    // Continuous easing loop: cur eases toward target each frame.
    const targetRef = useRef<number[]>(items.map(() => 0));
    const curRef = useRef<number[]>(items.map(() => 0));
    const loopRef = useRef(0);
    const closeTimer = useRef<any>(0);

    useEffect(() => {
        targetRef.current = items.map(() => 0);
        curRef.current = items.map(() => 0);
        setFactors(items.map(() => 0));
    }, [count]);

    useEffect(
        () => () => {
            cancelAnimationFrame(loopRef.current);
            clearTimeout(closeTimer.current);
        },
        []
    );

    const startLoop = () => {
        if (loopRef.current) return;
        const step = () => {
            const tgt = targetRef.current;
            const cur = curRef.current;
            let moving = false;
            for (let i = 0; i < cur.length; i++) {
                const d = (tgt[i] ?? 0) - cur[i];
                if (Math.abs(d) > 0.001) {
                    cur[i] += d * 0.2; // lerp toward target
                    moving = true;
                } else {
                    cur[i] = tgt[i] ?? 0;
                }
            }
            setFactors([...cur]);
            loopRef.current = moving ? requestAnimationFrame(step) : 0;
        };
        loopRef.current = requestAnimationFrame(step);
    };

    const setTargetFromCursor = (clientX: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = clientX - rect.left;
        const n = items.length;
        // Stable collapsed-layout slot centers so the magnify peak tracks the
        // cursor without feedback jitter.
        const totalBase = n * cWidth + (n - 1) * actualGap;
        const startX = (rect.width - totalBase) / 2;
        targetRef.current = items.map((_, i) => {
            const center =
                startX + i * (cWidth + actualGap) + cWidth / 2;
            const dist = Math.abs(cx - center);
            const f = Math.max(0, 1 - dist / influence);
            return f * f * (3 - 2 * f); // smoothstep falloff
        });
        startLoop();
    };

    const onMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (isCanvas || open !== null) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setTargetFromCursor(clientX);
    };

    const onLeave = () => {
        if (open !== null) return;
        targetRef.current = items.map(() => 0);
        startLoop();
    };

    const close = () => {
        targetRef.current = items.map(() => 0);
        curRef.current = items.map(() => 0);
        setFactors(items.map(() => 0));
        setClosing(true);
        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setClosing(false), dur * 1000);
        setOpen(null);
    };

    const sizeFor = (i: number) => {
        if (open !== null) {
            return i === open
                ? { width: openSize, height: openSize }
                : { width: cWidth, height: cHeight };
        }
        const f = factors[i] ?? 0;
        return {
            width: cWidth + (hWidth - cWidth) * f,
            height: cHeight + (hoverHeight - cHeight) * f,
        };
    };

    const { dur, ease } = parseTransition(transition);
    const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
    const barTransition = open !== null || closing ? openEase : "none";

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: actualGap,
                position: "relative",
                overflow: "visible",
            }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            onTouchMove={onMove}
            onTouchEnd={onLeave}
        >
            {/* Transparent backdrop — click to close when a bar is open. */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: open !== null ? "auto" : "none",
                }}
                onClick={close}
            />
            {items.map((img, i) => {
                const { width, height } = sizeFor(i);
                const blurred = open !== null && i !== open;
                return (
                    <div
                        key={i}
                        onClick={(e) => {
                            if (isCanvas) return;
                            e.stopPropagation();
                            if (open === i) close();
                            else setOpen(i);
                        }}
                        style={{
                            flex: "none",
                            width,
                            height,
                            overflow: "hidden",
                            borderRadius: "16px",
                            cursor: isCanvas ? "default" : "pointer",
                            transition: barTransition,
                            willChange: "width, height",
                            position: "relative",
                            zIndex: open === i ? 3 : 2,
                            filter: blurred ? `blur(${blur}px)` : "none",
                            opacity: blurred ? 0.6 : 1,
                            backgroundColor: img
                                ? "transparent"
                                : `hsl(${(i * 360) / count}, 70%, 58%)`,
                            backgroundImage: img
                                ? `url(${img.src})`
                                : undefined,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                );
            })}
        </div>
    );
}

MagneticCarousel.displayName = "Magnetic Carousel";
