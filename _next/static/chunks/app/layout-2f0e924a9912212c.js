(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8576:function(e,t,n){Promise.resolve().then(n.bind(n,3716))},3716:function(e,t,n){"use strict";n.d(t,{default:function(){return j}});var r=n(7437),a=n(2265);let i=()=>"ontouchstart"in document.documentElement,l=()=>{var e;return(null===(e=window)||void 0===e?void 0:e.innerWidth)<=768||!!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)},s=e=>-1!==navigator.userAgent.indexOf(e),o=()=>{for(let e of["Chrome","Edge","Safari","Firefox","Opera","OPR","MSIE"])if(s(e))return"OPR"==e?"Opera":e;return""};function c(e){let{extraClasses:t,children:n}=e,[s,c]=(0,a.useState)(!1),[d,h]=(0,a.useState)(!1),[u,m]=(0,a.useState)("");return(0,a.useEffect)(()=>{c(i()),h(l()),m(o())}),(0,r.jsx)("body",{className:"nk-body body-wider mode-onepage\n        ".concat(u.toLowerCase(),"\n        ").concat(d?"as-mobile":""," \n        ").concat(s?"has-touch":"no-touch"," \n        ").concat(t||""," "),children:n})}var d=n(2824),h=n(360),u=n(4463),m=n(6548),f=n(3313),x=JSON.parse('{"o":7,"e":[{"title":"Home","url":"/"},{"title":"About","url":"#about"},{"title":"Platform","url":"#platform"},{"title":"MVP","url":"#mvp"},{"title":"Tokens","url":"#tokens"},{"title":"Roadmap","url":"#roadmap"},{"title":"Contact","url":"#contact"},{"title":"Docs","url":"#docs"},{"title":"Team","url":"#team"},{"title":"Faqs","url":"#faqs"}]}'),g=JSON.parse('{"jY":{"r":"https://ico.themenio.com/images/logo-s2-white.png","f":""}}');let v=e=>{let{title:t,url:n,isActivate:a}=e;return(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link nav-link ".concat(a?"active":""),href:n,children:t})})},w=e=>{let{logo:t,text:n}=e;return(0,r.jsx)("div",{className:"header-logo logo",children:(0,r.jsxs)(u.Z,{href:"./",className:"logo-link navbar-brand",style:{color:"white"},children:[(0,r.jsx)("img",{src:t,className:"logo-light d-inline-block align-text-middle",style:{marginRight:"5px"}}),n]})})};var b=e=>{let{activate:t,children:n}=e,i=x.e,l=x.o,s=(0,a.useRef)(null);return(0,r.jsx)(h.Z,{fixed:"top",expand:"lg",className:"header-main",style:{zIndex:999},children:(0,r.jsx)(d.Z,{className:"container-xxl",children:(0,r.jsxs)("div",{className:"header-wrap",children:[(0,r.jsx)(w,{logo:g.jY.r,text:g.jY.f}),(0,r.jsx)(m.Z,{"aria-controls":"basic-navbar-nav",className:"navbar-toggle toggle-line",style:{color:"#fff",border:0},ref:s}),(0,r.jsxs)(f.Z,{id:"basic-navbar-nav",className:"header-nav-toggle",style:{flexGrow:0},children:[(0,r.jsx)("div",{className:"navbar-header-overlay",onClick:()=>{var e;null===(e=s.current)||void 0===e||e.click()}}),(0,r.jsx)("div",{className:"header-navbar menu-mobile",children:(0,r.jsxs)("nav",{className:"header-menu",id:"header-menu",children:[(0,r.jsxs)("ul",{className:"menu",children:[i.slice(0,l).map(e=>(0,r.jsx)(v,{title:e.title,url:e.url,isActivate:e.title===t},e.title)),i.length>l&&(0,r.jsxs)("div",{className:"menu-item dropdown has-sub",children:[(0,r.jsx)("a",{className:"menu-link nav-link menu-toggle",onMouseEnter:e=>{if(window.innerWidth<992)return;let t=e.currentTarget;t.classList.add("show"),t.childNodes.forEach(e=>{e instanceof HTMLElement&&e.classList.add("show")})},onMouseLeave:e=>{if(window.innerWidth<992)return;let t=e.currentTarget;t.classList.remove("show"),t.childNodes.forEach(e=>{e instanceof HTMLElement&&e.classList.remove("show")})},onClick:e=>{if(window.innerWidth>992)return;let t=e.currentTarget;t.classList.toggle("show"),t.childNodes.forEach(e=>{e instanceof HTMLElement&&e.classList.toggle("show")})},href:"#",children:"More"}),(0,r.jsx)("ul",{className:"menu-sub menu-drop",children:i.slice(l).map(e=>(0,r.jsx)(v,{title:e.title,url:e.url,isActivate:e.title===t},e.title))})]})]}),(0,r.jsx)("ul",{className:"menu-btns",children:n})]})})]})]})})})};n(3374),n(594),n(3253);var p=e=>{let{count:t=100,color:n="#ffffff",maxRadius:i=3,minRadius:l=1,speed:s=.5,lineColor:o="255, 255, 255",lineOpacity:c=.1,linksDistance:d=150}=e,h=(0,a.useRef)(null),u=(0,a.useRef)([]),m=e=>{if(e.startsWith("#"));else{let t=e.split(",").map(e=>e.trim());if(3===t.length)return"rgb(".concat(t.join(","),")");if(4===t.length)return"rgba(".concat(t.join(","),")")}return e},f=e=>({x:Math.random()*e.width,y:Math.random()*e.height,radius:Math.random()*(i-l)+l,color:m(n),vx:(Math.random()-.5)*s,vy:(Math.random()-.5)*s}),x=(e,t)=>{e.beginPath(),e.arc(t.x,t.y,t.radius,0,2*Math.PI),e.fillStyle=t.color,e.fill()},g=e=>{for(let t=0;t<u.current.length;t++)for(let n=t+1;n<u.current.length;n++){let r=u.current[t].x-u.current[n].x,a=u.current[t].y-u.current[n].y;Math.sqrt(r*r+a*a)<d&&(e.beginPath(),e.moveTo(u.current[t].x,u.current[t].y),e.lineTo(u.current[n].x,u.current[n].y),e.strokeStyle="rgba(".concat(o,", ").concat(c,")"),e.stroke())}},v=e=>{u.current.forEach(t=>{t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>e.width)&&(t.vx*=-1),(t.y<0||t.y>e.height)&&(t.vy*=-1)})},w=()=>{let e=h.current,t=null==e?void 0:e.getContext("2d");e&&t&&(t.clearRect(0,0,e.width,e.height),v(e),u.current.forEach(e=>x(t,e)),g(t),requestAnimationFrame(w))};return(0,a.useEffect)(()=>{let e=h.current;if(!e||!e.getContext("2d"))return;let n=()=>{e.width=window.innerWidth,e.height=window.innerHeight,u.current=Array.from({length:t},()=>f(e))};return n(),w(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t,n,i,l,s,o,c,d]),(0,r.jsx)("canvas",{ref:h,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})},j=e=>{let{children:t}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=()=>{var e,t;window.scrollY>0?null===(e=n.current)||void 0===e||e.classList.add("has-fixed"):null===(t=n.current)||void 0===t||t.classList.remove("has-fixed")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)("html",{lang:"en",children:(0,r.jsxs)(c,{extraClasses:"bg-theme page-loaded nk-nio-theme",children:[(0,r.jsxs)("div",{className:"nk-wrap has-ovm",children:[(0,r.jsx)("header",{id:"header",ref:n,className:"nk-header page-header is-transparent is-sticky is-dark",children:(0,r.jsx)(b,{activate:"home",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#login-popup",className:"btn btn-md btn-thin btn-outline btn-auto btn-round btn-primary no-change",children:(0,r.jsx)("span",{children:"Sign In"})})})})}),(0,r.jsx)("main",{className:"nk-pages tc-light",children:t})]}),(0,r.jsx)(p,{count:30,color:"255, 255, 255, 0.02",maxRadius:8,minRadius:2,speed:.8,lineColor:"255, 255, 255",lineOpacity:.02,linksDistance:200}),(0,r.jsx)("div",{className:"nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i",style:{zIndex:"-99",height:"100vh"},children:(0,r.jsx)("div",{className:"ovm-line"})})]})})}},3253:function(){},3374:function(){}},function(e){e.O(0,[313,610,647,75,971,23,744],function(){return e(e.s=8576)}),_N_E=e.O()}]);