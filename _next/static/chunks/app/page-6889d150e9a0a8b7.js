(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2893:function(e,a,s){Promise.resolve().then(s.bind(s,6301))},6301:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return M}});var i,t,l,n,c,r,o,d,m=s(7437),h=s(2265);(i=c||(c={})).Xxs="xxs",i.Xs="xs",i.Sm="sm",i.Md="md",i.Lg="lg",i.Xl="xl",i.Small="small",i.Medium="medium",i.Large="large",i.Full="full",i.S2="s2",i.S3="s3",i.S4="s4",i.Thin="thin",i.Regular="regular",i.H1="h1",i.H2="h2",i.H3="h3",i.H4="h4",i.H5="h5",i.H6="h6",(t=r||(r={})).Container="container",t.Title="title",t.BorderRadius="round",t.Text="text",t.Button="btn",t.PLayButton="btn-play",t.Badge="badge",t.Countdown="countdown",t.Alert="alert",t.Lead="lead",t.ProgressBar="progress-bar",t.Capitalize="ttc",t.Uppercase="ttu",t.Lowercase="ttl",t.NoneTrans="ttn",t.PageHeader="banner-page",t.Modal="modal";let p=(e,a,s)=>e+(a?"-".concat(a):"")+(s?"-alt":"");(l=o||(o={})).Default="default",l.Theme="theme",l.Light="light",l.Dark="dark",l.Gradient="grad",l.Alternet="alternet",l.Primary="primary",l.Secondary="secondary",l.Success="success",l.Info="info",l.Warning="warning",l.Danger="danger",l.Outline="outline",(n=d||(d={})).Text="tc",n.Button="btn",n.Background="bg",n.ThemeBackground="bg-theme",n.Badge="badge",n.OnBackground="on-bg",n.Border="bd";let x=(e,a,s,i)=>e+(a?"-".concat(a):"")+(i?"-dark":"")+(s?"-alt":"");var u=e=>{let{title:a,size:s,colorStyle:i,bgImage:t=!1,children:l}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:{zIndex:0},className:"header-banner ".concat(i===o.Light?x(d.Background,i):""," has-ovm ").concat(t?"has-bg-image":""),children:[(0,m.jsx)("div",{className:"nk-banner",children:(0,m.jsx)("div",{className:"banner banner-page ".concat(p(r.PageHeader,s)),children:(0,m.jsx)("div",{className:"banner-wrap",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsx)("div",{className:"col-xl-6 col-lg-9",children:(0,m.jsx)("div",{className:"banner-caption tc-light cpn text-center",children:(0,m.jsxs)("div",{className:"cpn-head",children:[(0,m.jsx)("h2",{className:"title ttu",children:a}),(0,m.jsx)("div",{children:l})," "]})})})})})})})}),(0,m.jsx)("div",{className:"nk-ovm shape-a-sm"})]})})},j=e=>{let{children:a,variant:s=o.Default,outline:i,icon:t,backgroundClass:l,borderRadius:n,badgeText:c,badgeVariant:h=o.Primary,badgeOutline:u=o.Outline,badgeSize:j,size:g,onClick:f}=e,v="".concat(d.Button,"\n        ").concat(x(d.Button,s,!1),"\n        ").concat(i?x(d.Button,i):"","\n        ").concat(n?p(r.Button,n):"","\n        ").concat(l||"","\n        ").concat(p(r.Button,g)),N=c?"".concat(d.Badge,"\n        ").concat(x(d.Badge,h),"\n        ").concat(u?x(d.Badge,u):"","\n        ").concat(p(r.Badge,j)):"";return(0,m.jsxs)("a",{href:"#",className:v.trim(),onClick:f,children:[t&&(0,m.jsx)("em",{className:"icon ".concat(t)})," ",a,c&&(0,m.jsx)("span",{className:N,children:c})," "]})},g=e=>{let{title:a,percent:s,caption:i,subtitle:t,endDate:l}=e,n=new Date(l).getTime(),[c,r]=(0,h.useState)({days:0,hours:0,minutes:0,seconds:0});return(0,h.useEffect)(()=>{let e=setInterval(()=>{let a=n-new Date().getTime();if(a<0){clearInterval(e),r({days:0,hours:0,minutes:0,seconds:0});return}r({days:Math.floor(a/864e5),hours:Math.floor(a%864e5/36e5),minutes:Math.floor(a%36e5/6e4),seconds:Math.floor(a%6e4/1e3)})},1e3);return()=>clearInterval(e)},[n]),(0,m.jsxs)("div",{className:"row justify-content-around gutter-vr-30px",children:[(0,m.jsx)("div",{className:"col-sm-4 col-md-6 col-lg-4 col-xl-5",children:(0,m.jsxs)("div",{className:"status-info",children:[(0,m.jsx)("h6",{className:"title title-xxs tc-default status-title ttu",children:a}),(0,m.jsx)("h3",{className:"fz-3 fw-3 status-percent",children:s}),(0,m.jsx)("div",{className:"fz-8",children:i})]})}),(0,m.jsx)("div",{className:"col-sm-8 col-md-6 col-lg-7 col-xl-7",children:(0,m.jsxs)("div",{className:"status-countdown float-sm-end",children:[(0,m.jsx)("h6",{className:"title title-xxs tc-default status-title ttu",children:t}),(0,m.jsxs)("div",{className:"countdown justify-content-center justify-content-sm-start countdown-s3 countdown-s3-alt","data-date":l,children:[(0,m.jsxs)("div",{className:"countdown-item",children:[(0,m.jsx)("span",{className:"countdown-time",children:c.days<10?"0"+c.days:c.days}),(0,m.jsx)("span",{className:"countdown-text",children:"Days"})]}),(0,m.jsxs)("div",{className:"countdown-item",children:[(0,m.jsx)("span",{className:"countdown-time",children:c.hours<10?"0"+c.hours:c.hours}),(0,m.jsx)("span",{className:"countdown-text",children:"Hours"})]}),(0,m.jsxs)("div",{className:"countdown-item",children:[(0,m.jsx)("span",{className:"countdown-time",children:c.minutes<10?"0"+c.minutes:c.minutes}),(0,m.jsx)("span",{className:"countdown-text",children:"Minutes"})]}),(0,m.jsxs)("div",{className:"countdown-item",children:[(0,m.jsx)("span",{className:"countdown-time countdown-time-last",children:c.seconds<10?"0"+c.seconds:c.seconds}),(0,m.jsx)("span",{className:"countdown-text",children:"Seconds"})]})]})]})})]})},f=e=>{let{title:a,percentage:s,color:i=o.Primary,size:t=c.Md}=e,l=Math.min(100,Math.max(0,s)),n=p(r.ProgressBar,t),h=x(d.Background,i);return(0,m.jsxs)("div",{className:"progress-wrap",children:[(0,m.jsxs)("div",{className:"progress-title",children:[a,(0,m.jsxs)("span",{className:"progress-amount",children:[" ",l,"%"]})]}),(0,m.jsx)("div",{className:"\n                ".concat(r.ProgressBar," ").concat(n," bg-light-alt"),children:(0,m.jsx)("div",{className:"progress-percent ".concat(h),style:{width:"".concat(l,"%")},"data-percent":l})})]})};let v=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",s=s=>{let{children:i,color:t,size:l,alt:n,dark:c}=s,o=x(d.Text,t,n,c),h=p(r.Text,l,n);return(0,m.jsx)(a,{className:"".concat(e," ").concat(o," ").concat(h),children:i})};return s.displayName="Content".concat(a.charAt(0).toUpperCase()+a.slice(1)),s};v("title","h2"),v("nk-block-text"),v("section-head text-center wide-auto-sm"),v("title title-lg title-dark","h4"),v("title title-md","h4"),v("title title-xs tc-primary","h6"),v("title title-light","h2"),v("title-xs title-light","h6"),v("title title-s2","h2"),v("title title-s3","h2"),v("lead","p"),v("text-center"),v("list list-dot","ul"),v("list list-check","ul");let N=e=>{let{children:a,color:s,size:i,alt:t,dark:l}=e;return(0,m.jsx)("h2",{className:"title ".concat(x(d.Text,s,t,l)," ").concat(p(r.Text,i,t)),children:h.Children.map(a,(e,a)=>(0,m.jsxs)(h.Fragment,{children:[e,(0,m.jsx)("br",{className:"d-none d-md-block"},"br-".concat(a))]},"fragment-".concat(a)))})},b=e=>{let{children:a,title:s,mainTitle:i}=e;return(0,m.jsxs)("div",{className:"section-head section-head-s2 text-center",children:[(0,m.jsx)("h2",{className:"title title-xl",title:s,children:i}),a]})};var y=s(6648),w=e=>{let{children:a,heading:s,color:i,size:t,textTransform:l=r.NoneTrans,className:n=""}=e,c="".concat(x(d.Text,i)," ").concat(p(r.Text,t)," ").concat(l," ").concat(n);return s?(0,m.jsx)(s,{className:c,children:a}):(0,m.jsx)("span",{className:c,children:a})};let k=e=>{let{title:a,children:s}=e;return(0,m.jsx)(m.Fragment,{children:s})},I=e=>{let{children:a,variant:s}=e,[i,t]=(0,h.useState)("tab-1"),l=e=>{t(a=>a===e?"":e)},n=(e,a)=>"".concat("S1"===s?"":e," accordion-item-").concat(s.toLowerCase()," ").concat(a?"current":"");return(0,m.jsx)("div",{className:"col-lg-10 accordion accordion-".concat(s.toLowerCase()),id:"acc-".concat(s.toLowerCase()),children:h.Children.map(a,(e,a)=>{let t="tab-".concat(a+1),c=i===t;return(0,m.jsxs)("div",{className:n("accordion-item",c),children:[(0,m.jsxs)("h5",{className:"accordion-title accordion-title-sm ".concat(c?"":"collapsed"),onClick:()=>l(t),children:[e.props.title,(0,m.jsx)("span",{className:"accordion-icon accordion-icon-".concat(s.toLowerCase())})]}),(0,m.jsx)("div",{id:t,className:"collapse ".concat(c?"show":""),children:(0,m.jsx)("div",{className:"accordion-content",children:e.props.children})})]})})})},T=e=>{let{title:a,children:s}=e;return(0,m.jsx)(m.Fragment,{children:s})},S=e=>{var a;let{children:s}=e,i=h.Children.toArray(s),[t,l]=(0,h.useState)(null===(a=i[0])||void 0===a?void 0:a.props.id);return(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsx)("div",{className:"col-lg-10",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-4 mb-4 mb-lg-0",children:(0,m.jsx)("ul",{className:"nav tab-nav tab-nav-vr tab-nav-bdr me-lg-3",children:i.map(e=>(0,m.jsx)("li",{children:(0,m.jsxs)("a",{className:t===e.props.id?"active":"",onClick:()=>l(e.props.id),href:"#".concat(e.props.id),"data-bs-toggle":"tab",children:[(0,m.jsx)("em",{className:"fas fa-caret-right"}),e.props.title]})},e.props.id))})}),(0,m.jsx)("div",{className:"col-md-8",children:(0,m.jsx)("div",{className:"tab-content",children:i.map(e=>(0,m.jsx)("div",{className:"tab-pane fade ".concat(t===e.props.id?"show active":""),id:e.props.id,children:e.props.children},e.props.id))})})]})})})},U=e=>{var a;let{children:s}=e,[i,t]=(0,h.useState)(null===(a=s[0])||void 0===a?void 0:a.props.id);return(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsxs)("div",{className:"col-lg-10",children:[(0,m.jsx)("ul",{className:"nav tab-nav tab-nav-btn tab-nav-btn-bdr tab-nav-center pdb-r",children:h.Children.map(s,e=>e.props?(0,m.jsx)("li",{children:(0,m.jsx)("a",{className:i===e.props.id?"active":"",onClick:()=>t(e.props.id),href:"#".concat(e.props.id),"data-bs-toggle":"tab",children:e.props.title})},e.props.id):null)}),(0,m.jsx)("div",{className:"tab-content",children:h.Children.map(s,e=>e.props?(0,m.jsx)("div",{className:"tab-pane fade ".concat(i===e.props.id?"show active":""),id:e.props.id,children:e.props.children},e.props.id):null)})]})})},C=e=>{var a;let{children:s}=e,[i,t]=(0,h.useState)(null===(a=s[0])||void 0===a?void 0:a.props.id);return(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsxs)("div",{className:"col-lg-10",children:[(0,m.jsx)("ul",{className:"nav tab-nav tab-nav-s2 tab-nav-center",children:h.Children.map(s,e=>e.props?(0,m.jsx)("li",{children:(0,m.jsxs)("a",{className:i===e.props.id?"active":"",onClick:()=>t(e.props.id),href:"#".concat(e.props.id),"data-bs-toggle":"tab",children:[(0,m.jsx)("em",{className:"fas fa-caret-right"}),e.props.title]})},e.props.id):null)}),(0,m.jsx)("div",{className:"tab-content",children:h.Children.map(s,e=>e.props?(0,m.jsx)("div",{className:"tab-pane fade ".concat(i===e.props.id?"show active":""),id:e.props.id,children:e.props.children},e.props.id):null)})]})})},O=e=>{var a;let{children:s}=e,[i,t]=(0,h.useState)(null===(a=s[0])||void 0===a?void 0:a.props.id);return(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsxs)("div",{className:"col-lg-10",children:[(0,m.jsx)("ul",{className:"nav tab-nav tab-nav-line tab-nav-center",children:h.Children.map(s,e=>e.props?(0,m.jsx)("li",{children:(0,m.jsxs)("a",{className:i===e.props.id?"active":"",onClick:()=>t(e.props.id),href:"#".concat(e.props.id),"data-bs-toggle":"tab",children:[(0,m.jsx)("em",{className:"fas fa-caret-right"}),e.props.title]})},e.props.id):null)}),(0,m.jsx)("div",{className:"tab-content",children:h.Children.map(s,e=>e.props?(0,m.jsx)("div",{className:"tab-pane fade ".concat(i===e.props.id?"show active":""),id:e.props.id,children:e.props.children},e.props.id):null)})]})})},D=e=>{let{tabs:a,color:s="default",style:i="",dark:t=!1,variant:l="S1"}=e,n="S1"===l?"S1":"S2"===l?"S3":"S3"===l?"S2":"S4"===l?"S4":"S1";return(0,m.jsx)("section",{className:"section ".concat(i||""," ").concat(s||"default"," ").concat(t?"dark":""),children:(0,m.jsx)("S1"===l?S:"S2"===l?U:"S3"===l?C:"S4"===l?O:S,{children:a.map(e=>(0,m.jsx)(T,{id:e.id,title:e.title,children:(0,m.jsx)(I,{variant:n,children:e.faqs.map((e,a)=>(0,m.jsx)(k,{title:e.title,children:(0,m.jsx)("p",{children:e.content})},a))})},e.id))})})},E=e=>{let{member:a,teamType:s}=e;return(0,m.jsxs)("div",{className:"team team-s2 team-sm-s2 team-".concat(s%2!=0?"even":"odd"," animated fadeInUp fadeInUp"),"data-animate":"fadeInUp","data-delay":a.delay,style:{visibility:"visible",animationDelay:"".concat(a.delay,"s")},children:[(0,m.jsx)("div",{className:"team-photo team-photo-s2",children:(0,m.jsx)(y.default,{src:a.imageUrl,width:140,height:150,alt:"image of team-c"})}),(0,m.jsx)("h5",{className:"team-name title title-sm",children:a.name}),(0,m.jsx)("span",{className:"team-position team-position-sm",children:a.position}),(0,m.jsx)("ul",{className:"team-social team-social-s2",children:a.socialLinks.map((e,a)=>(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:e.url,children:(0,m.jsx)("em",{className:e.icon})})},a))})]})},B=e=>{let{members:a}=e;return(0,m.jsx)("div",{className:"row",children:a.map((e,a)=>(0,m.jsx)("div",{className:"col-md-4 col-lg-2 col-6",children:(0,m.jsx)(E,{member:e,teamType:a})},a))})},P=e=>{let{}=e;return(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-6",children:[(0,m.jsx)(N,{children:"We build fully Decentralized Marketplace that Augments Access to Blockchain Technologies"}),(0,m.jsx)("p",{children:"We have developed a state-of-the-art marketplace where you can securely and reliably buy and sell any items. The fastest and most flexible asset platform in existence. It will include easy cryptocurrency payments integration and a digital arbitration system. Our aim is to integrate all companies, employees, and business assets into a unified blockchain ecosystem, making business truly efficient, transparent, and reliable."}),(0,m.jsxs)("div",{className:"d-flex p-2",style:{gap:"20px"},children:[(0,m.jsxs)(j,{variant:o.Primary,borderRadius:r.BorderRadius,children:[(0,m.jsx)("span",{children:"White Paper"}),(0,m.jsx)("em",{className:"icon ti ti-arrow-down"})]}),(0,m.jsx)("p",{className:"animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.7",style:{visibility:"visible",animationDelay:"0.7s"},children:(0,m.jsx)("a",{href:"#ecosystems",className:"menu-link btn btn-underline",children:"See the Ecosystems"})})]})]}),(0,m.jsx)("div",{className:"col-6",style:{position:"relative",height:"400px"},children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/azalea/gfx-e.png",alt:"image of gfx-e",width:500,height:500})})]})},L=e=>{let{}=e;return(0,m.jsxs)("div",{className:"nk-block has-bg-image",children:[(0,m.jsxs)("div",{className:"row text-center align-items-lg-start gutter-vr-40px",children:[(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsx)("div",{className:"feature feature-s6 feature-s6-1 animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.3",style:{visibility:"visible",animationDelay:"0.3s"},children:(0,m.jsxs)("div",{className:"feature-text",children:[(0,m.jsx)("h5",{className:"title title-sm ttu",children:"ONE MARKETPLACE"}),(0,m.jsx)("p",{children:"One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."})]})})}),(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsx)("div",{className:"feature feature-s6 feature-s6-2 animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.4",style:{visibility:"visible",animationDelay:"0.4s"},children:(0,m.jsxs)("div",{className:"feature-text",children:[(0,m.jsx)("h5",{className:"title title-sm ttu",children:"Transparency and Trust"}),(0,m.jsx)("p",{children:"One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."})]})})}),(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsx)("div",{className:"feature feature-s6 feature-s6-3 animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.5",style:{visibility:"visible",animationDelay:"0.5s"},children:(0,m.jsxs)("div",{className:"feature-text",children:[(0,m.jsx)("h5",{className:"title title-sm ttu",children:"Blockchain Based Profiles"}),(0,m.jsx)("p",{children:"One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."})]})})}),(0,m.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,m.jsx)("div",{className:"feature feature-s6 feature-s6-4 animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.6",style:{visibility:"visible",animationDelay:"0.6s"},children:(0,m.jsxs)("div",{className:"feature-text",children:[(0,m.jsx)("h5",{className:"title title-sm ttu",children:"PAYMENT FLEXIBILITY"}),(0,m.jsx)("p",{children:"One International Marketplace that combines online store and services around the world. Buy any goods or services with our tokens."})]})})})]}),(0,m.jsx)("div",{className:"bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block overlay-fall bg-image-loaded fadeInUp","data-animate":"fadeInUp","data-delay":"0.2",style:{backgroundImage:"url('https://ico.themenio.com/images/globe-particle.png')",visibility:"visible",animationDelay:"0.2s"},children:(0,m.jsx)("img",{src:"https://ico.themenio.com/images/globe-particle.png",alt:"globe"})})]})};function M(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u,{title:"WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE",children:[(0,m.jsx)("span",{children:"The first decentralized Marketplace which simplifies and standardizes data with blockchain technology. We provide user-friendly, efficient, and secure crypto solutions utilizing blockchain technology."}),(0,m.jsxs)("div",{style:{justifyContent:"center",display:"flex",gap:"20px",marginTop:"5%"},children:[(0,m.jsx)(j,{variant:o.Primary,borderRadius:r.BorderRadius,children:"Private Sale"}),(0,m.jsx)(j,{outline:o.Outline,variant:o.Primary,borderRadius:r.BorderRadius,children:"Private Token"})]})]}),(0,m.jsxs)("section",{style:{padding:"2% 10%"},children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(f,{title:"Test",percentage:20,color:o.Primary,size:c.Sm})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsx)(g,{title:"Test",percent:"20",caption:"test",subtitle:"The Bonus ends in",endDate:"2024/10/01"})})]}),(0,m.jsxs)("div",{className:"row",style:{marginTop:"5%"},children:[(0,m.jsx)("div",{className:"col-sm-7 d-flex justify-content-center justify-content-sm-start",children:(0,m.jsxs)("ul",{className:"btn-grp btn-grp-break justify-content-center justify-content-sm-start gutter-vr-20px",children:[(0,m.jsx)("li",{className:"animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.8",style:{visibility:"visible",animationDelay:"0.8s"},children:(0,m.jsxs)("a",{href:"https://www.youtube.com/watch?v=SSo_EIwHSd4",className:"link link-light link-break video-popup",children:[(0,m.jsx)("em",{className:"icon-circle icon-border icon-animation fas fa-play"}),(0,m.jsx)("span",{children:"How it Works"})]})}),(0,m.jsx)("li",{className:"animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.9",style:{visibility:"visible",animationDelay:"0.9s"},children:(0,m.jsxs)("a",{href:"#",className:"link link-light link-break",children:[(0,m.jsx)("em",{className:"icon-circle icon-border far fa-lightbulb"}),(0,m.jsx)("span",{children:"Why buy Tokens now?"})]})})]})}),(0,m.jsx)("div",{className:"col-sm-5",children:(0,m.jsxs)("ul",{className:"social-links social-links-s2 justify-content-center justify-content-sm-end animated fadeInUp","data-animate":"fadeInUp","data-delay":"1",style:{visibility:"visible",animationDelay:"1s"},children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-twitter"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-medium-m"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-facebook-f"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-youtube"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-bitcoin"})})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"#",children:(0,m.jsx)("em",{className:"fab fa-github"})})})]})})]})]}),(0,m.jsx)(b,{title:"WHAT AND WHY",mainTitle:"ABOUT"}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)(P,{})}),(0,m.jsx)(b,{title:"CORE ECOSYSTEMS",mainTitle:"ECOSYSTEMS"}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)(L,{})}),(0,m.jsx)(b,{title:"ICOX PRODUCTS",mainTitle:"PLATFORM"}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)("div",{className:"container container-xxl",children:(0,m.jsxs)("div",{className:"nk-block",children:[(0,m.jsx)("div",{className:"row justify-content-center",children:(0,m.jsx)("div",{className:"col-xl-6 col-lg-8",children:(0,m.jsxs)("ul",{className:"nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5",children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{className:"active","data-bs-toggle":"tab",href:"#tab-1-1",children:"FOR Participators"})}),(0,m.jsx)("li",{className:"tab-nav-sap d-none d-sm-block"}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{"data-bs-toggle":"tab",href:"#tab-1-2",children:"For Traders"})})]})})}),(0,m.jsx)("div",{className:"tab-content",children:["tab-1-1","tab-1-2"].map((e,a)=>(0,m.jsx)("div",{className:"tab-pane fade".concat(0===a?" show active":""),id:e,children:(0,m.jsxs)("div",{className:"row align-items-center justify-content-between gutter-vr-40px",children:[(0,m.jsx)("div",{className:"col-lg-6 order-lg-last",children:(0,m.jsxs)("div",{className:"nk-block-img nk-block-ca",children:[(0,m.jsx)("div",{className:"nk-circle-animation nk-df-center fast"}),(0,m.jsx)("div",{className:"shadow rounded",style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"auto"},children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/app-screens/sc-medium-a.png",alt:"image sc-medium-a",width:450,height:450})})]})}),(0,m.jsx)("div",{className:"col-lg-5",children:(0,m.jsxs)("div",{className:"nk-block-text mgb-m30",children:[(0,m.jsx)("h2",{className:"title title-md",children:"A Open Platform for our Participators"}),(0,m.jsx)("p",{children:"Each participator can choose the trader and to sign a contract."}),[{icon:"ikon-bulb",text:"User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{icon:"ikon-paricle",text:"Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum."},{icon:"ikon-bulb-2",text:"Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodie."},{icon:"ikon-document-2",text:"Sign a smart-contract to allow our trader’s access for live trading corporis cryptocurrency susci pitlabo riosam, nisi ut."}].map((e,a)=>(0,m.jsxs)("div",{className:"feature feature-inline feature-middle",children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-md icon-grd ikon ".concat(e.icon)})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:e.text})})]},a))]})})]})},e))})]})})}),(0,m.jsx)(b,{title:"MVP APPS",mainTitle:"MVP",children:"Our project is based on an existing cryptocurrency exchange."}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)("div",{className:"container container-xxl",children:(0,m.jsx)("div",{className:"nk-block",children:(0,m.jsxs)("div",{className:"row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px",children:[(0,m.jsx)("div",{className:"col-xxl-6 col-xl-6 col-lg-8",children:(0,m.jsxs)("div",{className:"nk-block-img nk-block-plx animated","data-animate":"fadeInUp","data-delay":"0.3",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)(y.default,{className:"shadow rounded",src:"https://ico.themenio.com/images/app-screens/sc-medium-b.png",alt:"",width:500,height:300}),(0,m.jsx)(y.default,{className:"nk-block-img-plx plx-screen shadow rounded",src:"https://ico.themenio.com/images/app-screens/sc-small-d.jpg",alt:"",width:500,height:300}),(0,m.jsx)(y.default,{className:"nk-block-img-plx plx-circle plx-circle-s1",src:"https://ico.themenio.com/images/gfx/circle-a.png",alt:"",width:100,height:100}),(0,m.jsx)(y.default,{className:"nk-block-img-plx plx-polygon plx-polygon-s1",src:"https://ico.themenio.com/images/gfx/polygon-a.png",alt:"",width:100,height:100}),(0,m.jsx)(y.default,{className:"nk-block-img-plx plx-triangle plx-triangle-s1",src:"https://ico.themenio.com/images/gfx/triangle-a.png",alt:"",width:100,height:100})]})}),(0,m.jsx)("div",{className:"col-xxl-5 col-xl-6 col-lg-8",children:(0,m.jsxs)("div",{className:"nk-block-text",children:[(0,m.jsxs)("div",{className:"feature feature-inline animated","data-animate":"fadeInUp","data-delay":"0.4",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-xs icon-circle fas fa-check"})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:"Powered by DAP, NEX lets you easily trade crypto-currencies & other digital."})})]}),(0,m.jsxs)("div",{className:"feature feature-inline animated","data-animate":"fadeInUp","data-delay":"0.5",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-xs icon-circle fas fa-check"})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:"User have full access to trading consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),(0,m.jsxs)("div",{className:"feature feature-inline animated","data-animate":"fadeInUp","data-delay":"0.6",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-xs icon-circle fas fa-check"})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:"Our multi-cryptocurrency exchange will uis aute irure dolor in reprehenderit in voluptate velit uuntur magni dolores esse cillum."})})]}),(0,m.jsxs)("div",{className:"feature feature-inline animated","data-animate":"fadeInUp","data-delay":"0.7",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-xs icon-circle fas fa-check"})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:"Traders able to trade with voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."})})]}),(0,m.jsxs)("div",{className:"feature feature-inline animated","data-animate":"fadeInUp","data-delay":"0.8",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"feature-icon feature-icon-md",children:(0,m.jsx)("em",{className:"icon icon-xs icon-circle fas fa-check"})}),(0,m.jsx)("div",{className:"feature-text",children:(0,m.jsx)("p",{children:"Users will be able to take quis nostrum exercitationem ullam corporis susci pitlabo riosam, nisi ut aliquid ex ea commodi consequatur."})})]}),(0,m.jsx)("div",{className:"text-center text-sm-start animated","data-animate":"fadeInUp","data-delay":"0.9",style:{visibility:"visible",animationDelay:"0.3s"},children:(0,m.jsx)("a",{href:"#",className:"btn btn-round btn-primary",children:"Try Demo Free"})})]})})]})})})}),(0,m.jsx)(b,{title:"TOKEN DETAILS",mainTitle:"TOKENS"}),(0,m.jsx)("section",{className:"container"}),(0,m.jsx)(b,{title:"TIMELINE",mainTitle:"ROADMAP"}),(0,m.jsx)("section",{className:"container"}),(0,m.jsx)(b,{title:"CORE TEAM",mainTitle:"OUR TEAM"}),(0,m.jsx)("section",{className:"container"}),(0,m.jsx)(b,{title:"ADVISORS",mainTitle:"BOARD MEMBER",children:"Our advisors and board members are great part of our team."}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)(B,{members:[{name:"Ron Glabischnig",position:"General manager, Coindexin",imageUrl:"https://ico.themenio.com/images/azalea/team-c.jpg",delay:"0.3",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]},{name:"Stefan Zakrisson",position:"Legal Advisor, TokenWiz Project",imageUrl:"https://ico.themenio.com/images/azalea/team-b.jpg",delay:"0.35",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]},{name:"Moises Teare",position:"Managing Director, ICOCrypto",imageUrl:"https://ico.themenio.com/images/azalea/team-a.jpg",delay:"0.4",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]},{name:"Michiel Berende",position:"Insurance Lead &amp; Financial Advisor",imageUrl:"https://ico.themenio.com/images/azalea/team-d.jpg",delay:"0.35",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]},{name:"Noack Waylon",position:"Ecosystem Manager &amp; DevOps Engineer",imageUrl:"https://ico.themenio.com/images/azalea/team-b.jpg",delay:"0.5",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]},{name:"Tobias Dalton",position:"Member of the Oparation Board",imageUrl:"https://ico.themenio.com/images/azalea/team-c.jpg",delay:"0.55",socialLinks:[{icon:"fab fa-facebook-f",url:"#"},{icon:"fab fa-linkedin-in",url:"#"},{icon:"fab fa-twitter",url:"#"}]}]})}),(0,m.jsxs)("div",{className:"nk-block block-partners",style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,m.jsx)(w,{heading:"h4",children:"OUR PARTNERS"}),(0,m.jsxs)("ul",{className:"has-carousel partner-list justify-content-center animated fadeInUp","data-items":"7","data-items-mobile":"2","data-auto":"true","data-loop":"true","data-animate":"fadeInUp","data-delay":"0.75",style:{visibility:"visible",animationDelay:"0.75s"},children:[(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/a-light.png",width:111,height:30,alt:"image of a-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/b-light.png",width:111,height:30,alt:"image of b-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/c-light.png",width:111,height:30,alt:"image of c-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/d-light.png",width:111,height:30,alt:"image of d-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/e-light.png",width:111,height:30,alt:"image of e-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/f-light.png",width:111,height:30,alt:"image of f-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/g-light.png",width:111,height:30,alt:"image of g-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/a-light.png",width:111,height:30,alt:"image of a-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/b-light.png",width:111,height:30,alt:"image of b-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/c-light.png",width:111,height:30,alt:"image of c-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/d-light.png",width:111,height:30,alt:"image of d-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/e-light.png",width:111,height:30,alt:"image of e-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/f-light.png",width:111,height:30,alt:"image of f-light"})}),(0,m.jsx)("li",{className:"partner-logo",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/partners/g-light.png",width:111,height:30,alt:"image of g-light"})})]})]}),(0,m.jsx)(b,{title:"DOWNLOADS",mainTitle:"DOCUMENTS",children:"Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors."}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)("div",{className:"container container-xxl",children:(0,m.jsx)("div",{className:"nk-block",children:(0,m.jsxs)("div",{className:"row gutter-vr-50px",children:[(0,m.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,m.jsxs)("div",{className:"doc animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.3",style:{visibility:"visible",animationDelay:"0.3s"},children:[(0,m.jsx)("div",{className:"doc-photo doc-shape doc-shape-a",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/azalea/doc-a.jpg",width:175,height:236,alt:"image of doc-a"})}),(0,m.jsxs)("div",{className:"doc-text",children:[(0,m.jsxs)("h5",{className:"doc-title title-sm",children:["White Paper ",(0,m.jsx)("small",{children:"(2022)"})]}),(0,m.jsx)("a",{className:"doc-download",href:"#",children:(0,m.jsx)("em",{className:"ti ti-import"})}),(0,m.jsx)("div",{className:"doc-lang",children:"ENGLISH"})]})]})}),(0,m.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,m.jsxs)("div",{className:"doc animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.4",style:{visibility:"visible",animationDelay:"0.4s"},children:[(0,m.jsx)("div",{className:"doc-photo doc-shape doc-shape-b",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/azalea/doc-b.jpg",width:175,height:236,alt:"image of doc-a"})}),(0,m.jsxs)("div",{className:"doc-text",children:[(0,m.jsxs)("h5",{className:"doc-title title-sm",children:["Two Pager ",(0,m.jsx)("small",{children:"(2022)"})]}),(0,m.jsx)("a",{className:"doc-download",href:"#",children:(0,m.jsx)("em",{className:"ti ti-import"})}),(0,m.jsx)("div",{className:"doc-lang",children:"ENGLISH"})]})]})}),(0,m.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,m.jsxs)("div",{className:"doc animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.5",style:{visibility:"visible",animationDelay:"0.5s"},children:[(0,m.jsx)("div",{className:"doc-photo doc-shape doc-shape-c",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/azalea/doc-c.jpg",width:175,height:236,alt:"image of doc-a"})}),(0,m.jsxs)("div",{className:"doc-text",children:[(0,m.jsxs)("h5",{className:"doc-title title-sm",children:["One Pager ",(0,m.jsx)("small",{children:"(2022)"})]}),(0,m.jsx)("a",{className:"doc-download",href:"#",children:(0,m.jsx)("em",{className:"ti ti-import"})}),(0,m.jsx)("div",{className:"doc-lang",children:"ENGLISH"})]})]})}),(0,m.jsx)("div",{className:"col-sm-6 col-lg-3",children:(0,m.jsxs)("div",{className:"doc animated fadeInUp","data-animate":"fadeInUp","data-delay":"0.6",style:{visibility:"visible",animationDelay:"0.6s"},children:[(0,m.jsx)("div",{className:"doc-photo doc-shape doc-shape-d",children:(0,m.jsx)(y.default,{src:"https://ico.themenio.com/images/azalea/doc-d.jpg",width:175,height:236,alt:"image of doc-a"})}),(0,m.jsxs)("div",{className:"doc-text",children:[(0,m.jsxs)("h5",{className:"doc-title title-sm",children:["Presentation ",(0,m.jsx)("small",{children:"(2022)"})]}),(0,m.jsx)("a",{className:"doc-download",href:"#",children:(0,m.jsx)("em",{className:"ti ti-import"})}),(0,m.jsx)("div",{className:"doc-lang",children:"ENGLISH"})]})]})})]})})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-6",children:[(0,m.jsx)(b,{title:"PRESS",mainTitle:"IN PRESS"}),(0,m.jsx)("section",{className:"container"})]}),(0,m.jsxs)("div",{className:"col-6",children:[(0,m.jsx)(b,{title:"UPDATE",mainTitle:"NEWS"}),(0,m.jsx)("section",{className:"container"})]})]}),(0,m.jsx)(b,{title:"UPDATE",mainTitle:"FAQS",children:"Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others. If you have any other questions, please get in touch."}),(0,m.jsx)("section",{className:"container",children:(0,m.jsx)(D,{tabs:[{id:"tab1",title:"General Questions",faqs:[{title:"What is ICO Crypto?",content:"Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa."},{title:"What cryptocurrencies can I use to purchase?",content:"Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa."},{title:"How can I participate in the ICO Token sale?",content:"Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa."},{title:"How do I benefit from the ICO Token?",content:"Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa."}]},{id:"tab2",title:"Technical Support",faqs:[{title:"How to reset my password?",content:"Click on 'Forgot Password' and follow the instructions."},{title:"How to contact support?",content:"You can reach us via our support email."}]}],variant:"S2"})})]})}}},function(e){e.O(0,[648,971,23,744],function(){return e(e.s=2893)}),_N_E=e.O()}]);