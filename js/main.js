(function(){var d=document,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var mb=d.getElementById('mb'),nv=d.getElementById('nav');
if(mb)mb.addEventListener('click',function(){var o=nv.classList.toggle('o');mb.setAttribute('aria-expanded',o)});
d.querySelectorAll('.yr').forEach(function(e){e.textContent=new Date().getFullYear()});
if(rm)return;
var st=d.querySelector('.stage');
if(st)addEventListener('pointermove',function(e){var r=st.getBoundingClientRect();st.style.setProperty('--x',((e.clientX-r.left)/r.width-.5)*2);st.style.setProperty('--y',((e.clientY-r.top)/r.height-.5)*2)},{passive:true});
d.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateX('+(-y*10)+'deg) rotateY('+(x*12)+'deg) translateY(-4px)'});c.addEventListener('pointerleave',function(){c.style.transform=''})});
})();
(function(){var f=document.getElementById('enq');if(!f)return;
f.addEventListener('submit',function(e){e.preventDefault();var n=f.n.value.trim(),s=f.s.value,m=f.m.value.trim(),t=document.getElementById('st');
if(!n||!m){t.style.color='#ffb4b4';t.textContent='Please add your name and project details.';return}
var txt='Hello Rishi Squadz, I am '+n+'. Service: '+s+'. City: '+(f.c?f.c.value:'')+'. Timeline: '+(f.t?f.t.value:'')+'. Project: '+m;
t.style.color='#9fe0b0';t.textContent='Opening WhatsApp. Press send to deliver your enquiry.';
window.open('https://wa.me/919453886029?text='+encodeURIComponent(txt),'_blank','noopener')})})();
(function(){var d=document,n=d.getElementById('nav'),b=d.getElementById('mb');
function cl(){if(n&&n.classList.contains('o')){n.classList.remove('o');b.setAttribute('aria-expanded','false')}}
if(n){n.addEventListener('click',function(e){if(e.target.closest('a'))cl()});d.addEventListener('keydown',function(e){if(e.key==='Escape')cl()});d.addEventListener('click',function(e){if(!e.target.closest('.bar'))cl()})}
d.querySelectorAll('.card,.stat,.fc').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver'in window))return;
var fired=false,io=new IntersectionObserver(function(es){fired=true;es.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in')},1000)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
d.querySelectorAll('main h2,main .card,main .stat,main .two>*,main .cta,main details,main .tags,main .fc').forEach(function(e,i){e.classList.add('rv');e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});setTimeout(function(){if(!fired)d.querySelectorAll(".rv").forEach(function(e){e.classList.remove("rv")})},1500)})();
(function(){var b=document.getElementById('em'),f=document.getElementById('enq');if(!b||!f)return;b.addEventListener('click',function(){var n=f.n.value.trim(),m=f.m.value.trim(),t=document.getElementById('st');if(!n||!m){t.style.color='#ffb4b4';t.textContent='Please add your name and project details.';return}var body='Name: '+n+'\nService: '+f.s.value+'\nCity: '+f.c.value+'\nTimeline: '+f.t.value+'\n\n'+m;location.href='mailto:standsquadz@gmail.com?subject='+encodeURIComponent('Website enquiry from '+n)+'&body='+encodeURIComponent(body)})})();
(function(){var s=document.querySelector('.sl-track');if(!s)return;var d=document,sl=[].slice.call(s.children),n=sl.length,i=0,t,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,box=d.querySelector('.sl-in'),dots=d.querySelector('.dots'),paused=false;
sl.forEach(function(e,k){var b=d.createElement('button');b.type='button';b.setAttribute('aria-label','Go to slide '+(k+1));b.onclick=function(){go(k,1)};dots.appendChild(b)});
function go(k,u){i=(k+n)%n;s.style.transform='translateX(-'+i*100+'%)';sl.forEach(function(e,j){e.setAttribute('aria-hidden',j!==i);e.inert=j!==i});[].forEach.call(dots.children,function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-current',j===i)});if(u)rs()}
function rs(){clearInterval(t);if(!rm)t=setInterval(function(){if(!paused&&!d.hidden)go(i+1)},6000)}
box.querySelector('.prev').onclick=function(){go(i-1,1)};box.querySelector('.next').onclick=function(){go(i+1,1)};
box.addEventListener('mouseenter',function(){paused=true});box.addEventListener('mouseleave',function(){paused=false});box.addEventListener('focusin',function(){paused=true});box.addEventListener('focusout',function(){paused=false});
var x0=null;box.addEventListener('pointerdown',function(e){x0=e.clientX});box.addEventListener('pointerup',function(e){if(x0!==null&&Math.abs(e.clientX-x0)>50)go(i+(e.clientX<x0?1:-1),1);x0=null});
go(0);rs()})();
