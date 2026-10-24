(function(){var cv=document.getElementById('net');if(!cv)return;var c=cv.getContext('2d'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches,W,H,dpr,mx=0,my=0,tx=0,ty=0,vis=true,raf=0;
var C=[['Ayodhya',82.2,26.79,70,-26,1],['Delhi',77.21,28.61,46,-18,0],['Noida',77.4,28.54,38,18,0],['Lucknow',80.95,26.85,46,-22,0],['Basti',82.73,26.8,36,22,0],['Gorakhpur',83.37,26.76,42,-10,0],['Bhopal',77.41,23.26,40,-20,0],['Indore',75.86,22.72,40,-20,0]];
function size(){dpr=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;c.setTransform(dpr,0,0,dpr,0,0);if(rm)draw(0)}
function pill(x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function draw(t){var K=Math.min(W/11.2,H/6),a=Math.sin(t*.3)*.22+mx*.3,b=1.05+my*.1,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);
function P(lo,la,z){var x=(lo-79.6)*K,y=(la-25.7)*K,x1=x*ca-y*sa,y1=x*sa+y*ca,y2=y1*cb-z*sb,z2=y1*sb+z*cb,s=2000/(2000-z2);return[W/2+x1*s,H*.56-y2*s,s]}
c.clearRect(0,0,W,H);c.lineWidth=1;c.strokeStyle='rgba(70,150,255,.13)';
for(var lo=75;lo<=84;lo++){c.beginPath();for(var la=22;la<=29;la+=1){var p=P(lo,la,0);la==22?c.moveTo(p[0],p[1]):c.lineTo(p[0],p[1])}c.stroke()}
for(var la=22;la<=29;la++){c.beginPath();for(var lo=75;lo<=84;lo+=1){var p=P(lo,la,0);lo==75?c.moveTo(p[0],p[1]):c.lineTo(p[0],p[1])}c.stroke()}
var h=C[0];
C.forEach(function(k,i){if(!i)return;var g=c.createLinearGradient(P(h[1],h[2],0)[0],0,P(k[1],k[2],0)[0],0);g.addColorStop(0,'rgba(0,212,255,.55)');g.addColorStop(1,'rgba(138,92,255,.4)');c.strokeStyle=g;c.lineWidth=1;c.beginPath();for(var j=0;j<=32;j++){var u=j/32,p=P(h[1]+(k[1]-h[1])*u,h[2]+(k[2]-h[2])*u,h[3]+(k[3]-h[3])*u+55*Math.sin(Math.PI*u));j?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1])}c.stroke();
var u=(t*.18+i*.13)%1,q=P(h[1]+(k[1]-h[1])*u,h[2]+(k[2]-h[2])*u,h[3]+(k[3]-h[3])*u+55*Math.sin(Math.PI*u));c.fillStyle='#fff';c.globalAlpha=.9;c.beginPath();c.arc(q[0],q[1],1.8,0,7);c.fill();c.globalAlpha=1});
var L=[];
C.forEach(function(k,i){var f=P(k[1],k[2],0),tp=P(k[1],k[2],k[3]),g=c.createLinearGradient(0,f[1],0,tp[1]);g.addColorStop(0,'rgba(30,144,255,0)');g.addColorStop(1,'rgba(0,212,255,.8)');c.strokeStyle=g;c.lineWidth=1.5;c.beginPath();c.moveTo(f[0],f[1]);c.lineTo(tp[0],tp[1]);c.stroke();
if(!i){var pr=(t*.4)%1;c.strokeStyle='rgba(0,212,255,'+.5*(1-pr)+')';c.beginPath();c.ellipse(f[0],f[1],(8+pr*30)*f[2],(8+pr*30)*f[2]*sb,0,0,7);c.stroke()}
var gl=c.createRadialGradient(tp[0],tp[1],0,tp[0],tp[1],i?12:20);gl.addColorStop(0,i?'rgba(0,212,255,.55)':'rgba(255,255,255,.6)');gl.addColorStop(1,'rgba(0,212,255,0)');c.fillStyle=gl;c.beginPath();c.arc(tp[0],tp[1],i?12:20,0,7);c.fill();
c.fillStyle=i?'#7fe3ff':'#fff';c.beginPath();c.arc(tp[0],tp[1],i?3.6:6,0,7);c.fill();L.push([k[0],tp[0],tp[1]+k[4],i?1:0])});
var R=[];L.forEach(function(l){c.font=(l[3]?'700 13px':'600 12px')+' system-ui,sans-serif';var w=c.measureText(l[0]).width+18,x=Math.max(6,Math.min(W-w-6,l[1]-w/2)),y=l[2]-10,n=0;
while(n++<8&&R.some(function(r){return x<r[0]+r[2]+4&&x+w+4>r[0]&&y<r[1]+r[3]+3&&y+22+3>r[1]}))y+=l[3]?-24:24;
R.push([x,y,w,22]);pill(x,y,w,22,11);c.fillStyle=l[3]?'rgba(30,144,255,.85)':'rgba(5,16,50,.85)';c.fill();c.strokeStyle='rgba(120,190,255,.35)';c.lineWidth=1;c.stroke();c.fillStyle='#eaf2ff';c.textAlign='center';c.textBaseline='middle';c.fillText(l[0],x+w/2,y+11.5)})}
function loop(n){if(!vis){raf=0;return}mx+=(tx-mx)*.05;my+=(ty-my)*.05;draw(n/1000);raf=requestAnimationFrame(loop)}
addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();tx=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2));ty=Math.max(-1,Math.min(1,((e.clientY-r.top)/r.height-.5)*2))},{passive:true});
addEventListener('resize',size);size();if(rm)return;if('IntersectionObserver'in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis&&!raf)raf=requestAnimationFrame(loop)}).observe(cv);raf=requestAnimationFrame(loop)})();
