let e,t,n,l=!1,o=!1,s=!1,i=!1,r=!1;const c="undefined"!=typeof window?window:{},f=c.document||{head:{}},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),$=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=p(e,n),i=h(t,o),r=y(n);a.ael(s,l,i,r),(t.o=t.o||[]).push((()=>a.rel(s,l,i,r)))}))},h=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){de(e)}},p=(e,t)=>8&t?c:e,y=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",m=new WeakMap,w=e=>"sc-"+e.$,g={},v=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1;const c=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!v(l))&&(l+=""),i&&r?c[c.length-1].h+=l:c.push(i?j(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,O);const a=j(e,null);return a.p=t,c.length>0&&(a.m=c),a.g=o,a.v=s,a},j=(e,t)=>({t:0,k:e,h:t,j:null,m:null,p:null,g:null,v:null}),S={},O={forEach:(e,t)=>e.map(C).forEach(t),map:(e,t)=>e.map(C).map(t).map(M)},C=e=>({vattrs:e.p,vchildren:e.m,vkey:e.g,vname:e.v,vtag:e.k,vtext:e.h}),M=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),k(e.vtag,t,...e.vchildren||[])}const t=j(e.vtag,e.vtext);return t.p=e.vattrs,t.m=e.vchildren,t.g=e.vkey,t.v=e.vname,t},x=(e,t,n,l,o,s)=>{if(n!==l){let i=ue(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=P(n),s=P(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=v(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(b,t):e.removeAttribute(t)):(!i||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ue(c,r)?r.slice(2):r[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},R=/\s/,P=e=>e?e.split(R):[],T=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.p||g,i=t.p||g;for(l in s)l in i||x(o,l,s[l],void 0,n,t.t);for(l in i)x(o,l,s[l],i[l],n,t.t)},E=(o,r,c,a)=>{const u=r.m[c];let d,$,h,p=0;if(l||(s=!0,"slot"===u.k&&(e&&a.classList.add(e+"-s"),u.t|=u.m?2:1)),null!==u.h)d=u.j=f.createTextNode(u.h);else if(1&u.t)d=u.j=f.createTextNode("");else{if(i||(i="svg"===u.k),d=u.j=f.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.t?"slot-fb":u.k),i&&"foreignObject"===u.k&&(i=!1),T(null,u,i),null!=e&&d["s-si"]!==e&&d.classList.add(d["s-si"]=e),u.m)for(p=0;p<u.m.length;++p)$=E(o,u,p,d),$&&d.appendChild($);"svg"===u.k?i=!1:"foreignObject"===d.tagName&&(i=!0)}return d["s-hn"]=n,3&u.t&&(d["s-sr"]=!0,d["s-cr"]=t,d["s-sn"]=u.v||"",h=o&&o.m&&o.m[c],h&&h.k===u.k&&o.j&&L(o.j,!1)),d},L=(e,t)=>{a.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(F(o).insertBefore(o,D(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&L(o,t)}a.t&=-2},N=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=E(null,l,s,e),r&&(o[s].j=r,c.insertBefore(r,D(t))))},W=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,z(l),o=!0,s["s-ol"]?s["s-ol"].remove():L(s,!0),s.remove())},A=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.g===t.g),D=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t)=>{const n=t.j=e.j,l=e.m,o=t.m,s=t.k,r=t.h;let c;null===r?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||T(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],$=l.length-1,h=l[0],p=l[$];for(;i<=a&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==h)h=l[++r];else if(null==p)p=l[--$];else if(A(u,h))H(u,h),u=t[++i],h=l[++r];else if(A(d,p))H(d,p),d=t[--a],p=l[--$];else if(A(u,p))"slot"!==u.k&&"slot"!==p.k||L(u.j.parentNode,!1),H(u,p),e.insertBefore(u.j,d.j.nextSibling),u=t[++i],p=l[--$];else if(A(d,h))"slot"!==u.k&&"slot"!==p.k||L(d.j.parentNode,!1),H(d,h),e.insertBefore(d.j,u.j),d=t[--a],h=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].g&&t[f].g===h.g){c=f;break}c>=0?(s=t[c],s.k!==h.k?o=E(t&&t[r],n,c,e):(H(s,h),t[c]=void 0,o=s.j),h=l[++r]):(o=E(t&&t[r],n,r,e),h=l[++r]),o&&F(u.j).insertBefore(o,D(u.j))}i>a?N(e,null==l[$+1]?null:l[$+1].j,n,l,r,$):r>$&&W(t,i,a)})(n,l,t,o):null!==o?(null!==e.h&&(n.textContent=""),N(n,null,t,o,0,o.length-1)):null!==l&&W(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.h!==r&&(n.data=r)},U=e=>{const t=e.childNodes;let n,l,o,s,i,r;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(r=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==i){if(1===r&&i===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t[s].textContent.trim()){n.hidden=!0;break}U(n)}},q=[],V=e=>{let t,n,l,s,i,r,c=0;const f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(_(n,s)?(i=q.find((e=>e.S===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.O=t:q.push({O:t,S:n}),n["s-sr"]&&q.map((e=>{_(e.S,n["s-sn"])&&(i=q.find((e=>e.S===n)),i&&!e.O&&(e.O=i.O))}))):q.some((e=>e.S===n))||q.push({S:n}));1===t.nodeType&&V(t)}},_=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,z=e=>{e.p&&e.p.ref&&e.p.ref(null),e.m&&e.m.map(z)},B=e=>ce(e).C,G=(e,t,n)=>{const l=B(e);return{emit:e=>I(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},I=(e,t,n)=>{const l=a.ce(t,n);return e.dispatchEvent(l),l},J=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.R),ke((()=>Q(e,t)));e.t|=512},Q=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>te(n,e,t))),e.u=null),l=te(n,"componentWillLoad")),ne(l,(()=>X(e,n,t)))},X=async(e,t,n)=>{const l=e.C,o=l["s-rc"];n&&(e=>{const t=e.P,n=e.C,l=t.t,o=((e,t)=>{let n=w(t);const l=pe.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=m.get(e=e.head||e);o||m.set(e,o=new Set),o.has(n)||(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);Y(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(i,r)=>{try{r=r.render(),i.t&=-17,i.t|=2,((i,r)=>{const c=i.C,u=i.P,d=i.T||j(null,null),$=(e=>e&&e.k===S)(r)?r:k(null,null,r);if(n=c.tagName,$.k=null,$.t|=4,i.T=$,$.j=d.j=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&u.t),o=!1,H(d,$),a.t|=1,s){let e,t,n,l,o,s;V($.j);let i=0;for(;i<q.length;i++)e=q[i],t=e.S,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<q.length;i++)if(e=q[i],t=e.S,e.O){for(l=e.O.parentNode,o=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&U($.j),a.t&=-2,q.length=0})(i,r)}catch(e){de(e,i.C)}return null},Z=e=>{const t=e.C,n=e.i,l=e.R;te(n,"componentDidRender"),64&e.t||(e.t|=64,le(t),te(n,"componentDidLoad"),e.L(t),l||ee()),e.N(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ve((()=>K(e,!1))),e.t&=-517},ee=()=>{le(f.documentElement),ve((()=>I(c,"appload",{detail:{namespace:"oec"}})))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){de(e)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.classList.add("hydrated"),oe=(e,t,n)=>{if(t.W){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.W),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>ce(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ce(e),s=o.C,i=o.D.get(t),r=o.t,c=o.i;if(n=((e,t)=>null==e||v(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.D.set(t,n),c)){if(l.A&&128&r){const e=l.A[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){de(e,s)}}))}2==(18&r)&&K(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=ce(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){a.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},se=e=>{te(e,"connectedCallback")},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,i=s.querySelector("meta[charset]"),r=f.createElement("style"),u=[];let h,p=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],$:t[1],W:t[2],H:t[3]};s.W=t[2],s.H=t[3],s.A={};const i=s.$,r=class extends HTMLElement{constructor(e){super(e),ae(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?u.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=ce(e),n=t.P,l=()=>{};if(1&t.t)$(e,t,n.H),se(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){J(t,t.R=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=he(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.A=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){de(e)}t.t&=-9,t.t|=128,e(),se(t.i)}if(o.style){let e=o.style;const t=w(n);if(!pe.has(t)){const l=()=>{};((e,t,n)=>{let l=pe.get(e);d&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,pe.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.R,i=()=>K(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){a.jmp((()=>(()=>{if(0==(1&a.t)){const e=ce(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),te(t,"disconnectedCallback")}})()))}componentOnReady(){return ce(this).U}};s.q=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,oe(r,s,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),p=!1,u.length?u.map((e=>e.connectedCallback())):a.jmp((()=>h=setTimeout(ee,30)))},re=new WeakMap,ce=e=>re.get(e),fe=(e,t)=>re.set(t.i=e,t),ae=(e,t)=>{const n={t:0,C:e,P:t,D:new Map};return n.F=new Promise((e=>n.N=e)),n.U=new Promise((e=>n.L=e)),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.H),re.set(e,n)},ue=(e,t)=>t in e,de=(e,t)=>(0,console.error)(e,t),$e=new Map,he=e=>{const t=e.$.replace(/-/g,"_"),n=e.q,l=$e.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>($e.set(n,e),e[t])),de)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},pe=new Map,ye=[],be=[],me=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&a.t?ve(ge):a.raf(ge))},we=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){de(e)}e.length=0},ge=()=>{we(ye),we(be),(r=ye.length>0)&&a.raf(ge)},ve=e=>u().then(e),ke=me(be,!0);export{S as H,ie as b,G as c,B as g,k as h,u as p,fe as r}