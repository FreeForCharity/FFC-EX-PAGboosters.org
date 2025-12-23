import os

files = [
    "index.html",
    "about.html",
    "fundraising.html",
    "membership.html",
    "team.html",
    "contact.html"
]

replacements = {
    "https://pagbooster.org/about/": "about.html",
    "https://pagbooster.org/fundraising/": "fundraising.html",
    "https://pagbooster.org/membership/": "membership.html",
    "https://pagbooster.org/team/": "team.html",
    "https://pagbooster.org/contact/": "contact.html",
    "https://pagbooster.org/": "index.html",
    # Handle non-trailing slash versions just in case
    "https://pagbooster.org/about": "about.html",
    "https://pagbooster.org/fundraising": "fundraising.html",
    "https://pagbooster.org/membership": "membership.html",
    "https://pagbooster.org/team": "team.html",
    "https://pagbooster.org/contact": "contact.html"
}

for filename in files:
    if os.path.exists(filename):
        print(f"Processing {filename}...")
        with open(filename, "r", encoding="utf-8") as f:
            content = f.read()
        
        for old, new in replacements.items():
            content = content.replace(old, new)
        
        # Also fix the specific email protection link if present in index.html to be robust
        # But mostly we care about navigation.
            
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed links in {filename}")
    else:
        print(f"File {filename} not found.")
