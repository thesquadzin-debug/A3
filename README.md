# Rishi Squadz website

Static site (HTML, CSS, JS). No build step.

## Go live (GitHub Pages)
1. Upload all files to the repository root (keep css/, js/, img/ folders, .nojekyll).
2. Settings > Pages > Deploy from a branch > main > / (root).
3. Own domain: buy it, then run `python3 set-domain.py https://www.yourdomain.com`, upload the changed files,
   add the domain in Settings > Pages, set DNS (4 A records 185.199.108-111.153, CNAME www -> avil45.github.io), enable HTTPS.
4. Google Search Console: add the site, submit sitemap.xml. Create a Google Business Profile for Ayodhya.

## Update content
Edit the .html files. Contact details are in the header, footer, contact.html, js/smart.js and JSON-LD blocks.
