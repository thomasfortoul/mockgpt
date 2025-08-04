#!/usr/bin/env python3
"""
clean_chat.py

1. Reads 'chato.html'
2. Removes non-visual <meta> tags
3. Rewrites leading-slash JS/CSS to remote chat.openai.com
4. Detects your local CSS dump folder (css/ or *_files/)
5. Strips out the old broken <link> tags pointing to that folder
6. Appends fresh <link> tags for each .css in that folder
7. Prettifies and writes to 'chat.html'
"""

import os
from bs4 import BeautifulSoup, Doctype

INPUT_FILE  = 'chato.html'
OUTPUT_FILE = 'chat.html'
BASE_URL    = 'https://chat.openai.com'


def find_css_dir():
    """Look for either 'css/' or any folder ending in '_files/'."""
    for name in sorted(os.listdir('.')):
        if os.path.isdir(name) and (name.lower() == 'css' or name.lower().endswith('_files')):
            return name
    return None


def extract_doctype(soup):
    for item in soup.contents:
        if isinstance(item, Doctype):
            return f"<!DOCTYPE {item}>"
    return "<!DOCTYPE html>"


def clean_and_augment(html: str, css_dir: str) -> str:
    soup = BeautifulSoup(html, 'html.parser')

    # --- 1) Remove non-visual <meta> tags ---
    for meta in soup.find_all('meta'):
        name = (meta.get('name') or '').lower()
        prop = (meta.get('property') or '').lower()
        if name in ('description', 'keyword', 'dd-trace-id', 'dd-trace-time') or prop.startswith('og:'):
            meta.decompose()

    # --- 2) Rewrite remote JS/CSS asset URLs ---
    for tag in soup.find_all(['script', 'link']):
        # scripts
        if tag.name == 'script' and tag.get('src', '').startswith('/'):
            tag['src'] = BASE_URL + tag['src']
        # CSS, preload, icons, etc.
        if tag.name == 'link' and tag.get('href', '').startswith('/'):
            tag['href'] = BASE_URL + tag['href']

    # --- 3) Remove old <link> tags pointing to the broken local folder ---
    if css_dir and soup.head:
        for link in soup.head.find_all('link', href=True):
            if css_dir in link['href'] and link['href'].lower().endswith('.css'):
                link.decompose()

    # --- 4) Append fresh <link> tags for every .css in css_dir ---
    if css_dir and soup.head:
        for fname in sorted(os.listdir(css_dir)):
            if fname.lower().endswith('.css'):
                href = os.path.join(css_dir, fname).replace('\\', '/')
                new_link = soup.new_tag('link', rel='stylesheet', href=href)
                soup.head.append(new_link)

    # --- 5) Reattach doctype + prettify ---
    doctype = extract_doctype(soup)
    pretty  = soup.prettify(formatter="html")
    return f"{doctype}\n{pretty}"


def main():
    css_dir = find_css_dir()
    if not css_dir:
        print("⚠️  Warning: no 'css/' or '*_files/' folder found. Local CSS won't be appended.")
    else:
        print(f"👉  Detected local CSS folder: '{css_dir}/'")

    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        raw = f.read()

    out = clean_and_augment(raw, css_dir)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(out)

    print(f"✅  Wrote cleaned + augmented HTML to '{OUTPUT_FILE}'.")
    print("Now open it (or serve with `python3 -m http.server`) and your bubbles should size correctly,")
    print("with all local CSS loading from your dump folder.")

if __name__ == '__main__':
    main()
