import os
import xml.etree.ElementTree as ET
from datetime import datetime

# Define the base domain for the sitemap URLs
DOMAIN = "https://www.therpia.com"

# Define directories that should be excluded from search
EXCLUDE_DIRS = {'.git', 'strategy'}

def generate_sitemap(directory_path="."):
    """
    Generates a sitemap.xml file by finding all HTML files in the given directory and subdirectories.
    """
    print(f"Generating sitemap for {directory_path}...")
    
    # Create the root xml element
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    # Walk through the directory
    for root, dirs, files in os.walk(directory_path):
        # Modify dirs in-place to skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith('.')]
        
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                
                # Get the relative path from the base directory
                rel_path = os.path.relpath(file_path, directory_path)
                
                # Convert the relative path to a URL path format
                url_path = rel_path.replace(os.path.sep, '/')
                
                # Standardize index.html paths to just the trailing slash
                if url_path == "index.html":
                    loc = DOMAIN + "/"
                elif url_path.endswith("/index.html"):
                    loc = f"{DOMAIN}/{url_path[:-10]}"
                else:
                    loc = f"{DOMAIN}/{url_path}"
                
                # Get last modified time of the html file
                try:
                    mtime = os.path.getmtime(file_path)
                    lastmod = datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')
                except Exception as e:
                    print(f"Could not read mtime for {file_path}: {e}")
                    lastmod = datetime.now().strftime('%Y-%m-%d')
                
                # Add the URL element to the sitemap XML
                url_elem = ET.SubElement(urlset, "url")
                ET.SubElement(url_elem, "loc").text = loc
                ET.SubElement(url_elem, "lastmod").text = lastmod
                print(f"Added {loc}")

    # Generate the XML string with proper declaration
    # In python 3.9+ we could use ET.indent, but string replace is safer across versions
    xml_str = '<?xml version="1.0" encoding="UTF-8"?>\n' + ET.tostring(urlset, encoding='unicode', method='xml')

    sitemap_path = os.path.join(directory_path, "sitemap.xml")
    with open(sitemap_path, "w", encoding='utf-8') as f:
        f.write(xml_str)
        
    print(f"Sitemap generated successfully at {sitemap_path}")

if __name__ == "__main__":
    # Point this to the root of the Therpia project
    generate_sitemap("/Users/NickA/8. Therpia")
