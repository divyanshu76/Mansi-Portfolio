import os
from PIL import Image, ImageDraw, ImageFont

def generate_placeholder(filename, size, text, bg_color, text_color):
    img = Image.new('RGB', size, color=bg_color)
    d = ImageDraw.Draw(img)
    # Just draw some abstract elegant shapes instead of standard text, or a subtle text
    # Draw a thin border
    d.rectangle([(20, 20), (size[0]-20, size[1]-20)], outline=text_color, width=2)
    
    # Try to load a generic font or use default
    font = None
    try:
        font = ImageFont.truetype("arial.ttf", 36)
    except IOError:
        font = ImageFont.load_default()
        
    text_bbox = d.textbbox((0, 0), text, font=font)
    text_w = text_bbox[2] - text_bbox[0]
    text_h = text_bbox[3] - text_bbox[1]
    
    d.text(((size[0]-text_w)/2, (size[1]-text_h)/2), text, font=font, fill=text_color)
    
    public_dir = r"c:\Users\prati\Downloads\MAKEUP PORTFOLIO\mansi-beauty\public"
    os.makedirs(public_dir, exist_ok=True)
    img.save(os.path.join(public_dir, filename))

# Light theme colors
bg = (241, 233, 223) # #F1E9DF
fg = (183, 110, 121) # #B76E79 rose gold

generate_placeholder("hero-model-placeholder.png", (800, 1200), "HERO MODEL", bg, fg)
generate_placeholder("services-editorial-placeholder.png", (800, 1200), "SERVICES", bg, fg)
generate_placeholder("about-artist-placeholder.png", (800, 1200), "MANSI", bg, fg)
generate_placeholder("portfolio-bridal-1.png", (800, 1000), "BRIDAL", bg, fg)
generate_placeholder("portfolio-editorial-1.png", (800, 1000), "EDITORIAL", bg, fg)
generate_placeholder("portfolio-runway-1.png", (800, 1000), "RUNWAY", bg, fg)
generate_placeholder("story-bride-1.png", (1000, 1200), "TESTIMONIAL", bg, fg)

# Favicon
img = Image.new('RGB', (256, 256), color=(250, 246, 241)) # #FAF6F1
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("times.ttf", 150)
except IOError:
    font = ImageFont.load_default()
    
text_bbox = d.textbbox((0, 0), "M", font=font)
text_w = text_bbox[2] - text_bbox[0]
text_h = text_bbox[3] - text_bbox[1]
d.text(((256-text_w)/2, (256-text_h)/2 - 20), "M", font=font, fill=fg)
img.save(r"c:\Users\prati\Downloads\MAKEUP PORTFOLIO\mansi-beauty\src\app\icon.png")

print("Generated placeholders.")
