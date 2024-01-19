import{s as G,n as O,r as W,c as F}from"../chunks/scheduler.6775f91d.js";import{z as N,A as J,S as q,i as K,g as b,s as k,m as A,h as w,j as L,x as $,c as H,n as P,f as x,k as g,l as R,a as j,y as m,B as U,o as z,r as Q,C as X,u as Y,v as Z,d as ee,t as te,w as se}from"../chunks/index.15516d7b.js";import{w as ne}from"../chunks/index.b9d65fdf.js";const ae=!0,oe="always",ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae,trailingSlash:oe},Symbol.toStringTag,{value:"Module"}));function V(e){return Object.prototype.toString.call(e)==="[object Date]"}function D(e,s,t,o){if(typeof t=="number"||V(t)){const r=o-t,n=(t-s)/(e.dt||1/60),a=e.opts.stiffness*r,l=e.opts.damping*n,u=(a-l)*e.inv_mass,c=(n+u)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(r)<e.opts.precision?o:(e.settled=!1,V(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((r,n)=>D(e,s[n],t[n],o[n]));if(typeof t=="object"){const r={};for(const n in t)r[n]=D(e,s[n],t[n],o[n]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function re(e,s={}){const t=ne(e),{stiffness:o=.15,damping:r=.8,precision:n=.01}=s;let a,l,u,c=e,d=e,f=1,i=0,h=!1;function y(T,M={}){d=T;const S=u={};return e==null||M.hard||v.stiffness>=1&&v.damping>=1?(h=!0,a=N(),c=T,t.set(e=d),Promise.resolve()):(M.soft&&(i=1/((M.soft===!0?.5:+M.soft)*60),f=0),l||(a=N(),h=!1,l=J(_=>{if(h)return h=!1,l=null,!1;f=Math.min(f+i,1);const p={inv_mass:f,opts:v,settled:!0,dt:(_-a)*60/1e3},C=D(p,c,e,d);return a=_,c=e,t.set(e=C),p.settled&&(l=null),!p.settled})),new Promise(_=>{l.promise.then(()=>{S===u&&_()})}))}const v={set:y,update:(T,M)=>y(T(d,e),M),subscribe:t.subscribe,stiffness:o,damping:r,precision:n};return v}function le(e){let s,t,o='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5" class="svelte-y96mxt"></path></svg>',r,n,a,l,u=Math.floor(e[1]+1)+"",c,d,f,i=Math.floor(e[1])+"",h,y,v,T='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-y96mxt"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-y96mxt"></path></svg>',M,S;return{c(){s=b("div"),t=b("button"),t.innerHTML=o,r=k(),n=b("div"),a=b("div"),l=b("strong"),c=A(u),d=k(),f=b("strong"),h=A(i),y=k(),v=b("button"),v.innerHTML=T,this.h()},l(_){s=w(_,"DIV",{class:!0});var p=L(s);t=w(p,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),$(t)!=="svelte-97ppyc"&&(t.innerHTML=o),r=H(p),n=w(p,"DIV",{class:!0});var C=L(n);a=w(C,"DIV",{class:!0,style:!0});var E=L(a);l=w(E,"STRONG",{class:!0,"aria-hidden":!0});var B=L(l);c=P(B,u),B.forEach(x),d=H(E),f=w(E,"STRONG",{class:!0});var I=L(f);h=P(I,i),I.forEach(x),E.forEach(x),C.forEach(x),y=H(p),v=w(p,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),$(v)!=="svelte-irev0c"&&(v.innerHTML=T),p.forEach(x),this.h()},h(){g(t,"aria-label","Decrease the counter by one"),g(t,"class","svelte-y96mxt"),g(l,"class","hidden svelte-y96mxt"),g(l,"aria-hidden","true"),g(f,"class","svelte-y96mxt"),g(a,"class","counter-digits svelte-y96mxt"),R(a,"transform","translate(0, "+100*e[2]+"%)"),g(n,"class","counter-viewport svelte-y96mxt"),g(v,"aria-label","Increase the counter by one"),g(v,"class","svelte-y96mxt"),g(s,"class","counter svelte-y96mxt")},m(_,p){j(_,s,p),m(s,t),m(s,r),m(s,n),m(n,a),m(a,l),m(l,c),m(a,d),m(a,f),m(f,h),m(s,y),m(s,v),M||(S=[U(t,"click",e[4]),U(v,"click",e[5])],M=!0)},p(_,[p]){p&2&&u!==(u=Math.floor(_[1]+1)+"")&&z(c,u),p&2&&i!==(i=Math.floor(_[1])+"")&&z(h,i),p&4&&R(a,"transform","translate(0, "+100*_[2]+"%)")},i:O,o:O,d(_){_&&x(s),M=!1,W(S)}}}function ie(e,s){return(e%s+s)%s}function ce(e,s,t){let o,r,n=0;const a=re();F(e,a,c=>t(1,r=c));const l=()=>t(0,n-=1),u=()=>t(0,n+=1);return e.$$.update=()=>{e.$$.dirty&1&&a.set(n),e.$$.dirty&2&&t(2,o=ie(r,1))},[n,r,o,a,l,u]}class de extends q{constructor(s){super(),K(this,s,ce,le,G,{})}}const fe=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,pe=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function me(e){let s,t,o,r,n=`<span class="welcome svelte-19xx0bt"><picture><source srcset="${fe}" type="image/webp"/> <img src="${pe}" alt="Welcome" class="svelte-19xx0bt"/></picture></span>

		to your new<br/>SvelteKit app`,a,l,u="try editing <strong>src/routes/+page.svelte</strong>",c,d,f;return d=new de({}),{c(){s=b("meta"),t=k(),o=b("section"),r=b("h1"),r.innerHTML=n,a=k(),l=b("h2"),l.innerHTML=u,c=k(),Q(d.$$.fragment),this.h()},l(i){const h=X("svelte-t32ptj",document.head);s=w(h,"META",{name:!0,content:!0}),h.forEach(x),t=H(i),o=w(i,"SECTION",{class:!0});var y=L(o);r=w(y,"H1",{class:!0,"data-svelte-h":!0}),$(r)!=="svelte-11s73ib"&&(r.innerHTML=n),a=H(y),l=w(y,"H2",{"data-svelte-h":!0}),$(l)!=="svelte-1e36z0s"&&(l.innerHTML=u),c=H(y),Y(d.$$.fragment,y),y.forEach(x),this.h()},h(){document.title="Home",g(s,"name","description"),g(s,"content","Svelte demo app"),g(r,"class","svelte-19xx0bt"),g(o,"class","svelte-19xx0bt")},m(i,h){m(document.head,s),j(i,t,h),j(i,o,h),m(o,r),m(o,a),m(o,l),m(o,c),Z(d,o,null),f=!0},p:O,i(i){f||(ee(d.$$.fragment,i),f=!0)},o(i){te(d.$$.fragment,i),f=!1},d(i){i&&(x(t),x(o)),x(s),se(d)}}}class ge extends q{constructor(s){super(),K(this,s,null,me,G,{})}}export{ge as component,ve as universal};
