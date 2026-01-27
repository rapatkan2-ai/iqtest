import os
import re
import urllib.request
import urllib.error

# Configuration
URLS = [
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&family=Inter:wght@400..600&display=swap",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
    "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
]

OUTPUT_DIR = "assets/fonts"
CSS_FILENAME = "fonts.css"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def ensure_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def download_file(url, filepath):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        print(f"Downloaded: {filepath}")
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def process_css(url):
    print(f"Processing: {url}")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
        with urllib.request.urlopen(req) as response:
            css_content = response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching CSS from {url}: {e}")
        return ""

    # Regex to find URLs in CSS: src: url(https://...) ...;
    # We want to extract the URL, download it, and replace it.
    
    # This regex is a bit simplistic but works for Google Fonts typical output
    # It looks for url(...)
    url_pattern = re.compile(r'url\((https?://[^)]+)\)')
    
    def replace_and_download(match):
        font_url = match.group(1)
        # Generate a safe filename
        # font_url often looks like .../fontfile.woff2 or .../fontfile.ttf
        # Sometimes query params exist? Google Fonts usually clean filenames mostly.
        # Let's clean the filename.
        filename = font_url.split('/')[-1]
        
        # Handle Material Symbols specific weirdness if any, mostly they are hashed filenames.
        # Clean query params if any
        if '?' in filename:
            filename = filename.split('?')[0]
            
        # If no extension, assume woff2 for safety as we requested with modern UA
        if '.' not in filename:
            filename += ".woff2"

        local_path = os.path.join(OUTPUT_DIR, filename)
        
        # Download if not exists (or overwrite to be safe)
        download_file(font_url, local_path)
        
        # Return relative path for CSS (assets/fonts/filename)
        # Since fonts.css will be in root (deployment/), path is assets/fonts/...
        return f"url('assets/fonts/{filename}')"

    new_css = url_pattern.sub(replace_and_download, css_content)
    return new_css

def main():
    ensure_dir(OUTPUT_DIR)
    
    final_css = "/* Auto-generated local fonts */\n"
    
    for url in URLS:
        final_css += f"\n/* Source: {url} */\n"
        final_css += process_css(url)
        final_css += "\n"
        
    with open(CSS_FILENAME, 'w', encoding='utf-8') as f:
        f.write(final_css)
        
    print(f"Generated {CSS_FILENAME}")

if __name__ == "__main__":
    main()
