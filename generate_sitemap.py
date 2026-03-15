from pathlib import Path
from datetime import date
import xml.etree.ElementTree as ET
import tempfile
import os

# =========================
# Configuration
# =========================
DOMAIN = "https://therpia.cl"
PROJECT_ROOT = Path("/Users/NickA/8. Therpia").resolve()
SITEMAP_FILENAME = "sitemap.xml"

# Directories to exclude completely
EXCLUDE_DIRS = {
    ".git",
    ".github",
    ".vscode",
    "__pycache__",
    "node_modules",
    "strategy",
    "partials",
}

# Specific files to exclude
EXCLUDE_FILES = {
    "404.html",
    "og-image.html",
    SITEMAP_FILENAME,
}

# Exclude files that start with these prefixes
EXCLUDE_PREFIXES = (
    "test-",
    "_",
    "draft-",
    "backup-",
)

# Only include these file types
INCLUDE_EXTENSIONS = {".html"}


def should_exclude_dir(path: Path) -> bool:
    return path.name in EXCLUDE_DIRS or path.name.startswith(".")


def should_include_file(path: Path) -> bool:
    if path.suffix.lower() not in INCLUDE_EXTENSIONS:
        return False
    if path.name in EXCLUDE_FILES:
        return False
    if path.name.startswith("."):
        return False
    if any(path.name.startswith(prefix) for prefix in EXCLUDE_PREFIXES):
        return False
    return True


def file_path_to_url(file_path: Path, root: Path, domain: str) -> str:
    rel_path = file_path.relative_to(root).as_posix()

    # Homepage
    if rel_path == "index.html":
        return f"{domain}/"

    # Folder index pages
    if rel_path.endswith("/index.html"):
        folder_path = rel_path[:-10].rstrip("/")
        return f"{domain}/{folder_path}/"

    # Standard html pages
    return f"{domain}/{rel_path}"


def get_priority(url: str) -> str:
    """
    Optional sitemap priority values.
    These are hints only. Google may ignore them.
    """
    path = url.replace(DOMAIN, "")

    if path == "/":
        return "1.0"

    high_priority_sections = (
        "/servicios/",
        "/guias-espirituales/",
        "/comunidad/",
        "/contacto/",
        "/que-es-therpia/",
    )

    if path in high_priority_sections:
        return "0.9"

    if path.startswith("/servicios/"):
        return "0.8"

    if path.startswith("/guias-espirituales/"):
        return "0.8"

    return "0.7"


def collect_html_files(root: Path) -> list[Path]:
    html_files = []

    for current_root, dirs, files in os.walk(root):
        current_root_path = Path(current_root)

        # Filter directories in-place so os.walk skips them
        dirs[:] = sorted(
            d for d in dirs
            if not should_exclude_dir(current_root_path / d)
        )

        for filename in sorted(files):
            file_path = current_root_path / filename

            if not should_include_file(file_path):
                continue

            if file_path.is_symlink():
                continue

            html_files.append(file_path.resolve())

    return sorted(html_files)


def generate_sitemap(root: Path = PROJECT_ROOT, domain: str = DOMAIN) -> Path:
    root = root.resolve()

    if not root.exists() or not root.is_dir():
        raise ValueError(f"Invalid project root: {root}")

    urlset = ET.Element(
        "urlset",
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    )

    seen_urls = set()
    files = collect_html_files(root)

    for file_path in files:
        try:
            loc = file_path_to_url(file_path, root, domain)

            if loc in seen_urls:
                print(f"Skipping duplicate URL: {loc}")
                continue

            seen_urls.add(loc)

            mtime = file_path.stat().st_mtime
            lastmod = date.fromtimestamp(mtime).isoformat()

            url_elem = ET.SubElement(urlset, "url")
            ET.SubElement(url_elem, "loc").text = loc
            ET.SubElement(url_elem, "lastmod").text = lastmod
            ET.SubElement(url_elem, "priority").text = get_priority(loc)

            print(f"Added: {loc}")

        except Exception as e:
            print(f"Skipping {file_path} because of error: {e}")

    if hasattr(ET, "indent"):
        ET.indent(urlset, space="    ", level=0)

    sitemap_path = root / SITEMAP_FILENAME

    # Atomic write: temp file first, then replace
    with tempfile.NamedTemporaryFile(
        mode="wb",
        delete=False,
        dir=root,
        prefix="sitemap_",
        suffix=".xml"
    ) as tmp_file:
        temp_path = Path(tmp_file.name)
        tree = ET.ElementTree(urlset)
        tree.write(tmp_file, encoding="utf-8", xml_declaration=True)

    temp_path.replace(sitemap_path)

    print(f"\nSitemap generated successfully at: {sitemap_path}")
    print(f"Total URLs indexed: {len(seen_urls)}")

    return sitemap_path


if __name__ == "__main__":
    generate_sitemap()