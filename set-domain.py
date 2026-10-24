#!/usr/bin/env python3
"""Usage: python3 set-domain.py https://www.yourdomain.com
Replaces the old site address in every page, sitemap and robots.txt, and writes CNAME."""
import sys,glob,re
OLD='https://avil45.github.io/Portfolio'
if len(sys.argv)!=2 or not sys.argv[1].startswith('http'): sys.exit(__doc__)
new=sys.argv[1].rstrip('/')
for f in glob.glob('*.html')+['sitemap.xml','robots.txt']:
    s=open(f,encoding='utf-8').read();open(f,'w',encoding='utf-8').write(s.replace(OLD,new))
if '/' not in new.split('//',1)[1]: open('CNAME','w').write(new.split('//',1)[1]+'\n')
print('Done. Address is now',new)
