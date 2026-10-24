(function(){var d=document,CT=['Ayodhya','Delhi','Lucknow','Basti','Bhopal','Indore','Gorakhpur','Noida'],WA='https://wa.me/919453886029';
var bar=d.createElement('div');bar.className='pg';bar.setAttribute('aria-hidden','true');d.body.appendChild(bar);
function pr(){var h=d.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}addEventListener('scroll',pr,{passive:true});pr();
var f=d.getElementById('enq');if(f){var k='rs-draft',els=f.querySelectorAll('[name]');try{var s=JSON.parse(localStorage.getItem(k)||'{}');els.forEach(function(e){if(s[e.name])e.value=s[e.name]});f.addEventListener('input',function(){var o={};els.forEach(function(e){o[e.name]=e.value});localStorage.setItem(k,JSON.stringify(o))});f.addEventListener('submit',function(){setTimeout(function(){if(f.n.value&&f.m.value)localStorage.removeItem(k)},50)})}catch(e){}}
var L=function(a,t){return '<a href="'+a+'">'+t+'</a>'},W='<a href="'+WA+'" target="_blank" rel="noopener">WhatsApp 9453886029</a>';
var R=[[/\b(hi|hello|hey|namaste|namaskar)\b/,'Namaste! Ask me about our services, cities, process or how to start a project.'],
[/price|cost|charge|quote|budget|rate|fee|kitna|daam|paise/,'Pricing depends on pages, features and timeline. Share your idea on the '+L('contact.html','enquiry form')+' or '+W+' and we will send a quote.'],
[/seo|google|rank|search/,'SEO: technical SEO, schema, sitemaps, speed and local SEO. '+L('services.html#s2','See SEO details')+'.'],
[/market|ads|social|instagram|campaign/,'Digital marketing: social media, Google and Meta ads, content and lead tracking. '+L('services.html#s3','Details')+'.'],
[/brand|logo|identity/,'Branding: logo, colours, typography and creatives. '+L('services.html#s4','Details')+'.'],
[/design|ui|ux|layout/,'UI/UX: wireframes, modern mobile-first design and review before development. '+L('services.html#s1','Details')+'.'],
[/web|website|develop|app|store|ecommerce|shop|portfolio site/,'We build fast, responsive, SEO-ready websites, web apps and online stores. '+L('services.html#s0','Web development details')+'.'],
[/service|offer|what do you|kya karte/,'We offer 5 services: web development, UI/UX design, SEO, digital marketing and branding. '+L('services.html','See all services')+'.'],
[/city|cities|where|location|area|serve|delhi|lucknow|basti|bhopal|indore|gorakhpur|noida|ayodhya/,function(q){var c=CT.filter(function(x){return q.indexOf(x.toLowerCase())>-1})[0];return (c?'Yes, we work with clients in '+c+'. ':'')+'We are based in Ayodhya and serve '+CT.join(', ')+' and other cities. '+L('areas.html','Service areas')+'.'}],
[/client|experience|live|trust|proof/,'We have served 87 clients and have 110 websites live. '+L('about.html','About us')+'.'],
[/process|how long|time|deliver|steps|start/,'Our 5 steps: discovery, design, development, SEO setup, launch. Timelines are agreed upfront. '+L('process.html','See the process')+'.'],
[/contact|call|phone|number|whatsapp|email|mail|address|reach/,'Call or WhatsApp 9453886029, email standsquadz@gmail.com, Ayodhya, Uttar Pradesh. '+W+' or '+L('contact.html','send an enquiry')+'.']];
var fab=d.createElement('button');fab.className='fab';fab.setAttribute('aria-label','Ask Rishi Squadz assistant');fab.setAttribute('aria-expanded','false');fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12z"/></svg>';
var p=d.createElement('div');p.className='ai';p.setAttribute('role','dialog');p.setAttribute('aria-label','Rishi Squadz assistant');
p.innerHTML='<h2>Rishi Squadz assistant<button type="button" aria-label="Close">&times;</button></h2><div class="ml" aria-live="polite"></div><div class="ch"></div><form><input type="text" aria-label="Ask a question" placeholder="Ask about services, cities..." autocomplete="off"><button type="submit">Send</button></form>';
d.body.appendChild(p);d.body.appendChild(fab);
var ml=p.querySelector('.ml'),ch=p.querySelector('.ch'),inp=p.querySelector('input');
function add(c,h){var e=d.createElement('p');e.className=c;if(c==='u')e.textContent=h;else e.innerHTML=h;ml.appendChild(e);ml.scrollTop=ml.scrollHeight}
function ans(q){q=q.toLowerCase();for(var i=0;i<R.length;i++)if(R[i][0].test(q)){var r=R[i][1];return typeof r==='function'?r(q):r}return 'I can help with services, cities, process and contact. For anything else, '+W+' and our team will reply.'}
function ask(q){q=q.trim();if(!q)return;add('u',q);setTimeout(function(){add('b',ans(q))},350)}
['Services','Cities we serve','How it works','Get a quote','Contact'].forEach(function(t){var b=d.createElement('button');b.type='button';b.textContent=t;b.onclick=function(){ask({'Services':'services','Cities we serve':'cities','How it works':'process','Get a quote':'quote','Contact':'contact'}[t])};ch.appendChild(b)});
add('b','Namaste! I am the Rishi Squadz assistant. Tap a topic or type a question.');
function tg(o){p.classList.toggle('o',o);fab.setAttribute('aria-expanded',o);if(o)inp.focus()}
fab.onclick=function(){tg(!p.classList.contains('o'))};p.querySelector('h2 button').onclick=function(){tg(false);fab.focus()};
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&p.classList.contains('o'))tg(false)});
p.querySelector('form').onsubmit=function(e){e.preventDefault();ask(inp.value);inp.value=''}})();
