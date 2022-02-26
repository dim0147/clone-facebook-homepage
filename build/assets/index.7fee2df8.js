var we=Object.defineProperty,Me=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var $=(i,r,o)=>r in i?we(i,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[r]=o,h=(i,r)=>{for(var o in r||(r={}))T.call(r,o)&&$(i,o,r[o]);if(N)for(var o of N(r))G.call(r,o)&&$(i,o,r[o]);return i},u=(i,r)=>Me(i,ke(r));var D=(i,r)=>{var o={};for(var a in i)T.call(i,a)&&r.indexOf(a)<0&&(o[a]=i[a]);if(i!=null&&N)for(var a of N(i))r.indexOf(a)<0&&G.call(i,a)&&(o[a]=i[a]);return o};import{s as n,U as q,r as g,j as t,a as e,F as _,b as C,u as Pe,c as O,P as ye,R as W,d as Ce,e as ee,f as ie,g as te,h as Se,i as Q,k as ne,l as re,B as ze,m as je,n as Ye,o as Ne,T as Ee,p as Ze,q as Re,t as oe,v as Le,w as ce,x as V,y as Ie,z as Be,A as Ue,C as Fe,D as De,E as qe,G as Oe,H as We,I as Qe,J as Ve,K as He,L as Ke,M as Je,N as ae,O as Xe,Q as Te,S as de,V as Ge,W as se,X as $e,Y as E,Z as _e,_ as ei,$ as le,a0 as ii,a1 as ti,a2 as ni,a3 as ri,a4 as oi,a5 as ci,a6 as ai,a7 as di,a8 as si,a9 as li,aa as Ai,ab as hi}from"./vendor.0b6f3d55.js";const pi=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(c){if(c.ep)return;c.ep=!0;const d=o(c);fetch(c.href,d)}};pi();var gi="https://dim0147.github.io/clone-facebook-homepage/build/assets/Facebook.7f46c1e2.png";const fi=n.div`
  display: flex;
  padding-top: 10px;
  margin-left: 16px;
  gap: 0 10px;
  width: 320px;
`,ui=n.div`
  display: flex;
  align-self: center;
`,mi=n.input`
  border-radius: 50px;
  height: 40px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 5px 10px;
  padding-left: ${i=>i.isFocus?"16px":"40px"};
  font-size: 15px;
  width: 100%;
  max-width: 270px;
  transition: padding 0.2s ease;
`,vi=q`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translate(0px)
  }
`,xi=n.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`,bi=n.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: #8c8d90;
  cursor: pointer;
  padding: 10px;
  :hover {
    border-radius: 50%;
    background-color: #f2f2f2;
  }
  animation: ${vi} 0.3s ease;
`,wi=()=>{const[i,r]=g.exports.useState(!1);return t(fi,{children:[!i&&e("img",{width:40,height:40,src:gi,alt:""}),t(ui,{children:[!i&&e(xi,{children:e(_,{color:"#606770"})}),i&&e(bi,{children:e(C,{})}),e(mi,{isFocus:i,placeholder:"Search Facebook",onFocus:()=>r(!0),onBlur:()=>r(!1)})]})]})};function Mi(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"})}))}function ki(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"})}))}function Pi(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"})}))}function yi(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"})}))}function Ci(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"})}))}const Si=n.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 0px 10px;
`,S=n.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 130px;
  min-width: 50px;
  margin: 5px 0px;
  padding: 10px 0px;
  border-bottom: ${i=>i.active?"3px solid #1B74E4":"unset"};
  :hover {
    background: ${i=>i.active?"unset":"#f2f2f2"};
  }
`,zi=()=>t(Si,{children:[e(S,{active:!0,children:e(Mi,{fill:"blue",width:28,height:28})}),e(S,{children:e(ki,{width:28,height:28})}),e(S,{children:e(Pi,{width:28,height:28})}),e(S,{children:e(yi,{width:28,height:28})}),e(S,{children:e(Ci,{width:28,height:28})})]});function ji(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"})}))}function Yi(i){var r,o;return e("svg",u(h({width:(r=i.width)!=null?r:28,height:(o=i.height)!=null?o:28,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},i),{children:e("path",{d:"M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"})}))}function Ni(a){var c=a,{disclosure:i,basePopover:r}=c,o=D(c,["disclosure","basePopover"]);const d=Pe();return t(O,{children:[e(ye,u(h(u(h({},d),{ref:i.ref}),i.props),{children:f=>W.cloneElement(i,f)})),t(Ce,u(h(h({style:r},d),o),{children:[e("p",{style:{}}),o.children]}))]})}function w({disclosure:i,content:r,basePopover:o}){return e(Ni,{disclosure:i,basePopover:o,children:r})}const Ei=n.input`
  border-radius: 50px;
  height: 40px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 15px;
  width: ${({inputWidth:i})=>i||"unset"};
`,Zi=n.span`
  position: absolute;
  padding: 11px 15px;
  width: 40px;
  color: #65676b;
`,Ri=a=>{var c=a,{placeholder:i,inputWidth:r}=c,o=D(c,["placeholder","inputWidth"]);return t("div",u(h({},o),{children:[e(Zi,{children:e(_,{color:"#606770"})}),e(Ei,{inputWidth:r,placeholder:i})]}))},M=n.div`
  z-index: ${i=>{var r;return(r=i.zIndex)!=null?r:1}};
  position: relative;
  border-radius: 10px;
  box-shadow: 0 12px 28px 0 #d8d9dc;
  width: 370px;
  margin-right: 20px;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #bcc0c4;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,k=n.div`
  width: ${i=>i.width?i.width:"unset"};
  border-top: 1px solid #dadcdf;
`,Li=n.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`,P=n.div`
  font-weight: 600;
  padding: 10px;
  :hover {
    background: #f2f2f2;
  }
  display: flex;
  gap: 0px 10px;
  align-items: center;
  cursor: pointer;
`,Ii=n.div`
  border-top: 1px solid #dadcdf;
`,Bi=({setHover:i})=>e(M,{onMouseEnter:()=>i(!0),children:t(Li,{children:[t(P,{children:[e(ee,{}),"Mark as read"]}),t(P,{children:[e(ie,{}),"Open In Message"]}),t(P,{children:[e(te,{}),"Mute conversation"]}),e(Ii,{}),t(P,{children:[e(Se,{}),"Audio Call"]}),t(P,{children:[e(Q,{}),"Video Call"]}),t(P,{children:[e(ne,{}),"Leave Group"]})]})}),Ui=n.div`
  width: 100%;
  padding: 0px 10px;
  position: relative;
`,Fi=n.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`,Di=n.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  & > img {
    width: 100%;
    border-radius: inherit;
  }
`,qi=i=>{switch(i.status){case"read":return 400;case"unread":return 600;default:return 400}},Oi=n.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  & > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: ${qi};
  }
`,Wi=n.div`
  display: flex;
  max-width: 100%;
  gap: 0px 3px;

  span:last-child {
    font-size: .8em;
  }
`,Qi=i=>{switch(i.status){case"read":return"#858689";case"unread":return"#6FA9F7";default:return"#858689"}},Vi=i=>{switch(i.status){case"read":return 400;case"unread":return 700;default:return 400}},Hi=n.div`
  margin-top: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8em;
  color: ${Qi};
  font-weight: ${Vi};
`,Ae=n.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`,Ki=n.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  color: #626972;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  cursor: pointer;
  :hover {
    background: #f2f2f2;
  }
`,Ji=({avatarSrc:i,name:r,lastMessage:o,time:a,status:c})=>{const[d,f]=g.exports.useState(!1);return t(Ui,{children:[t(Fi,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e(Di,{children:e("img",{src:i,alt:""})}),t(Oi,{status:c,children:[e("p",{children:r}),t(Wi,{children:[e(Hi,{status:c,children:o}),e("span",{children:"\xB7"}),e("span",{children:a})]})]}),t(Ae,{children:[c==="notification-off"&&e(te,{color:"#BEC3C9"}),c==="unread"&&e(re,{color:"#1876F2"})]})]}),d&&e(w,{disclosure:e(Ki,{onMouseEnter:()=>f(!0),children:e(ze,{})}),content:e(Bi,{setHover:f}),basePopover:{zIndex:2}})]})},Xi=n.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  padding: 10px 0px;
  border-top: 1px solid #e5e5e5;
  background-color: #FFFFFF;
`,Ti=n.p`
  color: #216FDB;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`,Gi=()=>e(Xi,{children:e(Ti,{children:"See all in Messenger"})}),m=n.div`
  font-weight: 600;
  padding: 10px;
  display: flex;
  gap: 0px 10px;
  align-items: center;
  :hover {
    background: #f2f2f2;
  }
  cursor: pointer;
`,$i=n.div`
  padding: 10px;
  & > span {
    font-size: 0.9em;
    color: #999a9d;
  }
`,_i=n.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`,H=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: #f2f2f2;
  }
  cursor: pointer;
`,K=n.label`
  margin-right: 5px;
  display: inline-block;
  position: relative;
  width: 48px;
  height: 28px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & > span {
    cursor: pointer;
    background-color: #ced0d4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 20px;

    ::before {
      position: absolute;
      content: '';
      width: 20px;
      height: 20px;
      left: 4px;
      bottom: 4px;
      background: #fff;
      transition: transform 0.4s;
      border-radius: 50%;
    }
  }

  & > input:checked + span {
    background-color: #1876f2;
    ::before {
      transform: translateX(20px);
    }
  }
`,et=()=>t(M,{children:[t($i,{children:[e("h3",{children:"Chat Settings"}),e("span",{children:"Customize your Messenger experiences"})]}),t(_i,{children:[e(k,{}),t(H,{children:[t(m,{children:[e(je,{}),"Incoming call sound"]}),t(K,{children:[e("input",{type:"checkbox"}),e("span",{})]})]}),t(H,{children:[t(m,{children:[e(Ye,{}),"Message Sound"]}),t(K,{children:[e("input",{type:"checkbox"}),e("span",{})]})]}),t(H,{children:[t(m,{children:[e(ie,{}),"Popup new message"]}),t(K,{children:[e("input",{type:"checkbox"}),e("span",{})]})]}),e(k,{}),t(m,{children:[e(Ne,{}),"Turn off active status"]}),t(m,{children:[e(Ee,{}),"Message request"]}),t(m,{children:[e(Ze,{}),"Message delivery settings"]}),t(m,{children:[e(Re,{}),"Block settings"]})]})]}),it=n.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 15px;
`,tt=n.div`
  display: flex;
  gap: 0px 5px;
`,Z=n.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  color: #7a8087;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  :hover {
    background-color: #f2f2f2;
  }
`,nt=n.div`
  padding: 10px 20px;
`,rt=n.div`
  margin-bottom: 10px;
`,ot=()=>t(M,{children:[t(O,{children:[t(it,{children:[e("h1",{style:{fontWeight:700},children:"Message"}),t(tt,{children:[e(w,{disclosure:e(Z,{children:e(oe,{})}),content:e(et,{}),basePopover:{zIndex:2}}),e(Z,{children:e(Le,{})}),e(Z,{children:e(Q,{})}),e(Z,{children:e(ce,{})})]})]}),e(nt,{children:e(Ri,{placeholder:"Search Messages",inputWidth:"100%"})}),e(rt,{children:[{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim",lastMessage:"This is Facebook Home Page Clone by dim0147",time:"3d",status:"unread"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"notification-off"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"unread"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"unread"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"unread"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"read"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"read"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"read"},{avatarSrc:"https://avatars.githubusercontent.com/u/44487221?v=4",name:"Dim's Brother",lastMessage:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a illo assumenda tempora distinctio consectetur nemo nam veritatis molestias dolor possimus, exercitationem quis debitis. Eum velit voluptatem inventore maxime quidem.",time:"3d",status:"read"}].map((r,o)=>e(Ji,h({},r),o))})]}),e(Gi,{})]}),ct=n.div`
  padding: 0px 10px;
  :not(::first-child) {
    margin-top: 20px;
  }
`,at=n.div`
border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  :hover {
    background-color: ${i=>i.theme.bgMenuHover};
  }
`,dt=n.div`
  border-radius: 50%;
  min-width: 0;
  width: 56px;
  height: 56px;
  position: relative;

  > img {
    border-radius: 50%;
    width: 100%;
    /* height: 100%; */
  }

  > div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ec2949;
    color: white;

    bottom: -5px;
    right: -10px;
  }
`,st=n.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-left: 20px;
  min-width: 0;

  > div {
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & > span {
    font-weight: 700;
    font-size: 0.8em;
    color: ${i=>i.theme.linkColor};
  }
`,lt=({avatar:i,content:r,isRead:o,time:a,type:c})=>e(ct,{children:t(at,{children:[t(dt,{children:[e("img",{src:i,alt:""}),e("div",{children:e(Q,{})})]}),t(st,{children:[e("div",{dangerouslySetInnerHTML:{__html:r}}),e("span",{children:a})]}),e(Ae,{children:e(re,{color:"#1876F2"})})]})}),At=n.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 5px 0px;
`,ht=()=>e(M,{children:t(At,{children:[t(m,{children:[e(ee,{}),"Mark all as read"]}),t(m,{children:[e(V,{}),"Notification settings"]}),t(m,{children:[e(Ie,{}),"Open notifications"]})]})});var J="https://dim0147.github.io/clone-facebook-homepage/build/assets/RomanReigns.fdd46002.jpg";const pt=n.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-left: 15px;
`,gt=n.div`
  display: flex;
  padding: 10px;
  gap: 0 10px;
`,he=n.div`
  cursor: pointer;
  padding: 8px 10px;
  font-weight: 600;
  border-radius: 18px;
  background: ${({active:i})=>i?"#E7F3FF":"#e4e6eb"};
  color: ${({active:i})=>i?"#3789F4":"#000"};
  :hover {
    background: ${({active:i})=>i?"#DBE7F2":"#d8dadf"};
  }
`,ft=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  div {
    padding: 10px;
    cursor: pointer;
    color: ${i=>i.theme.linkColor};
    :hover {
      background: ${i=>i.theme.bgMenuHover};
    }
  }
`,ut=n.div`
  display: flex;
  gap: 0px 5px;
  padding: 0px 10px;
`;n.div`
  margin-bottom: 10px;
`;const mt=()=>t(M,{children:[t(pt,{children:[e("h1",{style:{fontWeight:700},children:" Notifications"}),e(ut,{children:e(w,{disclosure:e(m,{children:e(oe,{})}),content:e(ht,{}),basePopover:{zIndex:2}})})]}),t(gt,{children:[e(he,{active:!0,children:"All"}),e(he,{children:"Unread"})]}),t(ft,{children:[e("h4",{children:"New"}),e("div",{children:"See all"})]}),[{avatar:J,content:'<strong>Roman Reign</strong> is live now: "Dont miss a third of the action on the Survivor Series Kickoff as Sh...".',isRead:!1,time:"5 minutes ago",type:"live"},{avatar:J,content:'<strong>Roman Reign</strong> is live now: "Dont miss a second of the action on the Survivor Series Kickoff as Sh...".',isRead:!1,time:"15 minutes ago",type:"live"},{avatar:J,content:'<strong>Roman Reign</strong> is live now: "Dont miss a first of the action on the Survivor Series Kickoff as Sh...".',isRead:!1,time:"25 minutes ago",type:"live"}].map(r=>e(lt,h({},r))),e("div",{style:{marginBottom:10}})]}),vt=n.div`
  padding: 10px;
`,v=n.div`
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #f4f4f4;
  }
`,x=n.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
`,b=n.div`
  > p {
    font-weight: 600;
  }

  > span {
    color: #65676b;
    font-size: 0.8rem;
    font-weight: 200;
  }
`,xt=()=>t(M,{style:{paddingLeft:10,paddingBottom:5},children:[e(vt,{children:e("h2",{children:"Create"})}),t(v,{children:[e(x,{children:e(ce,{})}),t(b,{children:[e("p",{children:"Post"}),e("span",{children:"Share a post on New Feed"})]})]}),t(v,{children:[e(x,{children:e(Be,{})}),t(b,{children:[e("p",{children:"Story"}),e("span",{children:"Share a photo or write something"})]})]}),t(v,{children:[e(x,{children:e(Ue,{})}),t(b,{children:[e("p",{children:"Room"}),e("span",{children:"Video chat with anyone, on or off Facebook, without time limits"})]})]}),t(v,{children:[e(x,{children:e(Fe,{})}),t(b,{children:[e("p",{children:"Group Posts"}),e("span",{children:"Share a post in your group"})]})]}),e(k,{style:{margin:"15px 10px 10px 10px",borderWidth:"2px"}}),t(v,{children:[e(x,{children:e(De,{})}),t(b,{children:[e("p",{children:"Page"}),e("span",{children:"Connect and share with customer or fan"})]})]}),t(v,{children:[e(x,{children:e(qe,{})}),t(b,{children:[e("p",{children:"Ad"}),e("span",{children:"Advertise your business, brand or organization"})]})]}),t(v,{children:[e(x,{children:e(Oe,{})}),t(b,{children:[e("p",{children:"Group"}),e("span",{children:"Connect with people and share your interests"})]})]}),t(v,{children:[e(x,{children:e(We,{})}),t(b,{children:[e("p",{children:"Event"}),e("span",{children:"Bring people together with a public or private event"})]})]}),t(v,{children:[e(x,{children:e(Qe,{})}),t(b,{children:[e("p",{children:"Marketplace Listing"}),e("span",{children:"Sell item to people in your community"})]})]}),t(v,{children:[e(x,{children:e(Ve,{})}),t(b,{children:[e("p",{children:"Job"}),e("span",{children:"Post a job and reach nearby applicants for free"})]})]})]}),y=W.createContext(i=>null),s=n.div`
  border-radius: 10px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: ${i=>i.noBackground?"unset":"pointer"};
  display: flex;
  align-items: center;
  :hover {
    background: ${i=>i.noBackground?"unset":"#f4f4f4"};
  }
`,l=n.div`
  align-self: ${i=>i.noCenter?"flex-start":"unset"};
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-color: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
`,A=n.div`
  flex: 1;
  > p {
    font-weight: 600;
  }

  > span {
    color: #65676b;
    font-size: 0.8rem;
    font-weight: 200;
  }
`,R=n.div`
  display: flex;
  gap: 0px 10px;
  margin-bottom: 15px;
`,L=n.div`
  cursor: pointer;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50%;
  :hover {
    background: #e4e6eb;
  }
`,bt=n.div`
  padding: 10px 15px;
`,wt=()=>{const i=g.exports.useContext(y);return t(bt,{children:[t(R,{children:[e(L,{onClick:()=>{i!==null&&i(e(U,{}),"from-left")},children:e(C,{})}),e("h2",{children:"Settings & Privacy"})]}),t(s,{children:[e(l,{children:e(V,{})}),e(A,{children:e("p",{children:"Settings"})})]}),t(s,{children:[e(l,{children:e(He,{})}),e(A,{children:e("p",{children:"Privacy Checkup"})})]}),t(s,{children:[e(l,{children:e(Ke,{})}),e(A,{children:e("p",{children:"Activity Log"})})]}),t(s,{children:[e(l,{children:e(Je,{})}),e(A,{children:e("p",{children:"Language"})})]})]})},Mt=n.div`
    padding: 10px 15px;
  `,kt=()=>{const i=g.exports.useContext(y);return t(Mt,{children:[t(R,{children:[e(L,{onClick:()=>{i!==null&&i(e(U,{}),"from-left")},children:e(C,{})}),e("h2",{children:"Help & Support"})]}),t(s,{children:[e(l,{children:e(ae,{})}),e(A,{children:e("p",{children:"Help Center"})})]}),t(s,{children:[e(l,{children:e(Xe,{})}),e(A,{children:e("p",{children:"Support Inbox"})})]}),t(s,{children:[e(l,{children:e(Te,{})}),e(A,{children:e("p",{children:"Report a Problem"})})]})]})},Pt=n.div`
  padding: 10px 15px;
`,yt=n.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`,pe=n.div`
  border-radius: 10px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: #F2F2F2;
  }
`,ge=n.label`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid
    ${i=>i.isActive?" #1172E2":"#8B9096"};
  padding: 2px;
  input {
    display: none;
  }
  div {
    display: ${i=>i.isActive?" block":"none"};
    width: 100%;
    height: 100%;
    background-color: #056be1;
    border-radius: 50%;
  }
`;n.div`
  padding-left: 5px;
`;const Ct=()=>{const i=g.exports.useContext(y);return t(Pt,{children:[t(R,{children:[e(L,{onClick:()=>{i!==null&&i(e(ue,{}),"from-left")},children:e(C,{})}),e("h2",{children:"Keyboard"})]}),t(s,{children:[e(l,{children:e(de,{})}),e(A,{children:e("p",{children:"See All Keyboard Shortcuts"})})]}),t(s,{noBackground:!0,children:[e(l,{noCenter:!0,children:e(Ge,{})}),t(A,{children:[e("p",{children:"Use Single-Character Keyboard Shortcuts"}),e("span",{children:"Use single-character shortcuts to perform common actions."}),t(yt,{children:[t(pe,{children:[e("h5",{children:"Off"}),t(ge,{isActive:!0,children:[e("input",{type:"checkbox"}),e("div",{})]})]}),t(pe,{children:[e("h5",{children:"On"}),t(ge,{children:[e("input",{type:"checkbox"}),e("div",{})]})]})]})]})]})]})},St=n.div`
  padding: 10px 15px;
`,fe=n.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`,I=n.div`
  border-radius: 10px;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: #F2F2F2;
  }
`,B=n.label`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid
    ${i=>i.isActive?" #1172E2":"#8B9096"};
  padding: 2px;
  input {
    display: none;
  }
  div {
    display: ${i=>i.isActive?" block":"none"};
    width: 100%;
    height: 100%;
    background-color: #056be1;
    border-radius: 50%;
  }
`,zt=n.div`
  padding-left: 5px;
`,ue=()=>{const i=g.exports.useContext(y);return t(St,{children:[t(R,{children:[e(L,{onClick:()=>{i!==null&&i(e(U,{}),"from-left")},children:e(C,{})}),e("h2",{children:"Display & Accessibility"})]}),t(s,{noBackground:!0,children:[e(l,{noCenter:!0,children:e(se,{})}),t(A,{children:[e("p",{children:"Dark Mode"}),e("span",{children:"Adjust the appearance of Facebook to reduce glare and give your eyes a break."}),t(fe,{children:[t(I,{children:[e("h5",{children:"Off"}),t(B,{isActive:!0,children:[e("input",{type:"checkbox"}),e("div",{})]})]}),t(I,{children:[e("h5",{children:"On"}),t(B,{children:[e("input",{type:"checkbox"}),e("div",{})]})]})]})]})]}),t(s,{noBackground:!0,children:[e(l,{noCenter:!0,children:e($e,{})}),t(A,{children:[e("p",{children:"Compact Mode"}),e("span",{children:"Make your font size smaller so more content can fit on the screen."}),t(fe,{children:[t(I,{children:[e("h5",{children:"Off"}),t(B,{children:[e("input",{type:"checkbox"}),e("div",{})]})]}),t(I,{children:[e("h5",{children:"On"}),t(B,{isActive:!0,children:[e("input",{type:"checkbox"}),e("div",{})]})]})]})]})]}),t(s,{onClick:()=>{i(e(Ct,{}),"from-right")},children:[e(l,{children:e(de,{})}),e(A,{children:e("p",{children:"Keyboard"})}),e(zt,{children:e(E,{})})]})]})},jt=n.div`
  padding: 10px 15px;
`,Yt=n.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  :hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`,Nt=n.div`
  margin-left: 15px;
  > p {
    color: #929495;
  }
`,X=n.div`
  padding-left: 5px;
`,U=()=>{const i=g.exports.useContext(y);return t(jt,{children:[t(Yt,{children:[e("img",{src:"https://avatars.githubusercontent.com/u/44487221?v=4"}),t(Nt,{children:[e("h4",{children:"Ham Tru Van"}),e("p",{children:"See your profile"})]})]}),e(k,{style:{margin:"10px 0px",borderWidth:2}}),t(s,{children:[e(l,{children:e(_e,{})}),t(A,{children:[e("p",{children:"Give us feedback"}),e("span",{children:"Help us improve the new Facebook"})]})]}),e(k,{style:{margin:"10px 0px",borderWidth:2}}),t(s,{onClick:()=>{i(e(wt,{}),"from-right")},children:[e(l,{children:e(V,{})}),e(A,{children:e("p",{children:"Setting & Privacy"})}),e(X,{children:e(E,{})})]}),t(s,{onClick:()=>{i(e(kt,{}),"from-right")},children:[e(l,{children:e(ae,{})}),e(A,{children:e("p",{children:"Help & Support"})}),e(X,{children:e(E,{})})]}),t(s,{onClick:()=>{i(e(ue,{}),"from-right")},children:[e(l,{children:e(se,{})}),e(A,{children:e("p",{children:"Display & Accessibility"})}),e(X,{children:e(E,{})})]}),t(s,{children:[e(l,{children:e(ne,{})}),e(A,{children:e("p",{children:"Logout"})})]})]})},Et=q`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`,Zt=q`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`,Rt=n.div`
  animation: ${i=>i.direction?i.direction==="from-left"?Zt:Et:"unset"}
    .2s;
`,Lt=()=>{const i=g.exports.useRef(void 0),[r,o]=g.exports.useState(e(U,{})),[a,c]=g.exports.useState(1),[d,f]=g.exports.useState("auto"),[ve,xe]=g.exports.useState(),be=(j,Y)=>{o(j),xe(Y)};return g.exports.useEffect(()=>{var Y;c(Math.random());const j=(Y=i.current)==null?void 0:Y.offsetHeight;j&&f(j)},[r]),e(y.Provider,{value:be,children:e(M,{children:e(ei,{height:d,children:e(Rt,{ref:i,direction:ve,children:r},a)})})})},It=n.div`
  display: flex;
  gap: 0px 10px;
  padding: 10px 0px;
  margin-right: 10px;
`,Bt=n.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  border-radius: 18px;
  align-self: center;
  padding: 5px;
  :hover {
    background: #f2f2f2;
  }
`,Ut=n.img`
  width: 28px;
  height: 28px;
  border-radius: 18px;
`,Ft=n.div`
  margin: 0px 10px;
`,F=n.div`
  position: relative;
  border-radius: 50%;
  background: #e4e6eb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  :hover {
    background: #d8dadf;
  }
  padding-top: ${({isDropDown:i})=>i?"-5px":"unset"};
`,me=n.div`
  position: absolute;
  display: flex;
  background-color: red;
  border-radius: 50%;
  padding: 3px 7px;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  top: -10px;
  right: -10px;
`,Dt=()=>t(It,{children:[t(Bt,{children:[e(Ut,{src:"https://avatars.githubusercontent.com/u/44487221?v=4",alt:""}),e(Ft,{children:e("span",{children:"Dim"})})]}),e(w,{disclosure:e(F,{children:e(le,{})}),content:e(xt,{})}),e(w,{disclosure:t(F,{children:[e(me,{children:"5"}),e(ji,{width:20,height:20})]}),content:e(ot,{})}),e(w,{disclosure:t(F,{children:[e(me,{children:"3"}),e(Yi,{width:20,height:20})]}),content:e(mt,{})}),e(w,{disclosure:e(F,{style:{color:"#050505"},children:e(ii,{width:20,height:20})}),content:e(Lt,{})})]}),qt=n.div`
  background: ${({theme:i})=>i.background};
  color: ${({theme:i})=>i.text};
  display: flex;
  position: sticky;
  top: 0;
  height: 60px;
`,Ot=()=>t(qt,{children:[e(wi,{}),e(zi,{}),e(Dt,{})]});var Wt="data:image/png;base64,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",Qt="data:image/png;base64,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",Vt="data:image/png;base64,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",Ht="data:image/png;base64,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",Kt="data:image/png;base64,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",Jt="data:image/png;base64,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",Xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAFl0lEQVR4AWKgKRgFo2AUALq1glU5iih6bs9TQX1EUJM4IyjkayRf4A+4y8JN1voFgi8rf8AvEL9DXAcimJdkp7iKma5jmuKQw6GgHZjnDF5ouubVOVV1um7de7t59T9cG8fk8xdVLmBsYJ27qPg9RV9zMUE6e1HVBWFjvyVkuWZ0gXRxFzhfk4jNvR+v729u3b1C1Q5u5NP5z+cPHn+5/WkR6Ds3nbEoXRebyzuPSOzYCDRguS8XWLulb8E455yF+Zm6IGsLvnG4YkngAtkuGGk5f1e0syVRi7EIEqjqIhuIBdOxki5hJ8gzK+P6NbERhepk9iEioE/BwcUJ8kxF36rIYoHapn7vvwMXrniSPHOQOM7sjNbvbERpVuYaUtjN55lDxWmsvkkEKBfs9/4blXgJO0Ke+eH6ft26fUVgJ3dZrKqe8o8XDx5/lXnmwAfYCHqPRNpcweV0jDxTlx8/ag07NADKMQTazB3e/3CYZw6w0t4zxufc20NXPEaeaawtwL6GRnMygtgoz+y1a4dG1r746sOytxUdFS2PJszPVg/HXYacjRIaeWYQ+svbQ7FN4znR5jyCsGGeQestRWTLN76zyjW54270OfyvZY+A7BPq9zGEjUUS6C5Y8nkpHEXPFkIFZFzigbPG1L6aW/KYwlJcg21Tn0vhuQbB5rPvnnyx+eCT7wlV66XocN1eV+u/ff35z/AlM+9cDa3TEcI92JqiFrwCL/3WbkFR9O4VWbtepRuf07Yu71wtGOeAgLC6+9/SjldS0aKhdakM8py3zAnWls1Dh/MVRUF3Rbm2DjOrhLg5V1RUhLmf5vSSR+LYgCpqkY71KLr3PEYSnpOdf3xhsobIXT3rsHdmephKCwVQ4hk/o6jymCz5NyeMioruKuqDrHyH9egblma4clYpfLMz7DzjrwsrHGxey2nnuitqoTUIOL2otX0lnZ95DJypo6qdcv5Y2Lqo9cqA7U15Q3Zn1C4QheRUQ7hpOT+t9KC6ceDmY2E1EHJwZaCDT3etfCGUria5civn5xosKrLfG4M/EnbQ+9VKZVDlRatO+TjY+Auj8OKnyXVJG9P4a8IkYvPpt0/u1+XtK6gykC7ymn89f/D7N/dGlYEqb6eMjQRZasqSPyiCS5Ez+ePKI0sevPvRIzTsaO8+YIGsbb03rgxUcaCpTYifRuHUH/w0za9xk7/qinq/AqctZBHhuPRlZdDMPciVcCRv8oQb/DDONr84xh/ZNP6OZzXfzD7pTAmAzp94wqhMSv5ox5yT/LScPznjHRu+XxHMQ0Il36gM1GdhHhzw0wPUXQN+Gn1+atSDasWyyiAWQiTOhZEe4cQfWu+Gu23y0xVj/gr+ujCVPPJ9RnEewmRNUU334I+inG/XSoQDkdHW+WvCBjsAz59cqe7LMc5PAxOP/L3+zcPwB5RUkZcIqRMy8YPvEGt5yZN3BT+MLean+Ie9QVs0rE72b3gNaYZlbwd/uFBFWDL5SMv5k98R4x3j0FXkRzozvZ14SryMDH7gi+rrOIBCDPGLKJ+/kPzkSpgHVffpcrc0FWoOzoA4yfcWW7Pj3NvOTzyY8zP4sf5x9Y5WrT1joyVBioalb8HoEh4knKP2CM95fqbx5K7ic78f4PfCZyGAahSeax8s55fPf3k4LQR9bWL1++sJlj4Ae3tC++Vv3M/Pin2R4mCeh/j24teHy2L7udEDAZY5X73uA8Z46GGx9BA0/pzCavCq8haAd5Yr3tfYJ8TfAF5auTp1LN4+Ef5lv/DK/zUiz1jrncvgaPbNHeozcoOs4+cT4fcuaFh5yBWNuIn+Nhik2TX/x/jZ/s61cK9BpxxIuxqcsonrRHjGFeFeZoDwabsH7/R4OncjYNqYoPsZ4q0tYVgVNyCeOZ7TvwGN+88Tr75/AC0WPi34ZHN6AAAAAElFTkSuQmCC",Tt="data:image/png;base64,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",Gt="data:image/png;base64,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",$t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAC9FBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqJ4OJHmrSLqKRKIdpJ4pTHjysNb+6JYDgLZlKJ4xwOdIZDiuhoaHTL6PJMquIIneQMrHPK5e2MKbULZyMNLu+L6atMbDALaDEMa+bM7mZNsi8MrGMNcPWLJahNbzfLZzWK5ClJXbcLZ54Pd51O9/WK5RyPNquNLlnNsZRH3B4PuXjLJjeK5TbK5RtN8uROdI/IXF/Pd9ZTWZxN8f9/f08I1/i0vL5+fl9OtXJL6OpMafILqOpL6emNcCuMrSuMrOmNb6BNL+ANb6HOM2HOs3///+0NLqxNLy5M7a7MrSpNcKnNsOaOM3WLqLQL6WhN8fTL6O2M7iuNL6kNsXZLqCROdN/POC+MrLOMKefN8mcOMt8PeKEPNysNcDLMKmXOc+UOdCrNb+WOM6POtTBMrHGMa3gLJqHO9qUOdHEMq+CPN7AMbCvNb7bLp7+/P6fOMl6PeOcN8reLZzdLZv+/v7JMau3NLjbLZ358/uBPN3SYsG+M7OKOtikN8aNOtb8+v6CPN3RMKbIMKuTRNf34fP78vrNL6f26vjTLqPcuu3gyvTxzuvOM6nDN7L67vjno9rAObX38fzOa8m5NLbShNXaLZ25X9D15veiN8d6PuS8adPYLZ/89vzFmunQnuWzfOSYUNunWNaOQNnk0vbt4fnCmerOPq7bh9Hkvenca8DquuTVZ8LFUr/56/fWU7bswujZXrvAWsjEhN2sO8PGOLHXl9y2M7fu2fSlR87MkN/Fid+VP9SSPdS6guKdQdCOOdSLRt3LrfCoauD12vDhis7deMbSRrHin9q3WMvtxenIQ7Xv0u/JiNzpteLHQLTHeNTFc9Py4vbMZMa0Vs3QOqvXi9XVp+bYlNnEZ8zVmt/CYsrDk+blzfKqYdrQpumvY9erW9WjYt65c9r69v3avvDUs+7Cm+yreeeqd+bCB7JyAAAAWHRSTlMBCAkKBQQGAAIDDxILFxQVHRkhOiHjPEMR9DfeS7IjSfT3LYuQmcidqa6S/bDi4a2ox/2DKfjj35bJ3ZA59fTEq6H5PfkymvUz5eXMyIjIiN3Gxt2YmczMEgvHxwAABQhJREFUeF6tlmdUFUcUx9l9723CLvv2PRSQbu+9995NrxNNTNCnJCIJUh5JEOSBigKPBIygBiyAMRoBpVlL7MYao6b33ntM+5J7Z2bdPW7kQ07+szt778z57b139uzuBNz0n/Q/YgHXqQXMwtxMpXstYwYRGBjocEBnsNdhVijQIUmiaAOJoiQ5Aq0gxwwKGcEWMWDsmMjRoyPHjB0QYROQ5JwV45EkMWJo5FMmRQ6NECUe0YJxyC4M7Nt/2bLly+GAcxk9+vcdKNg5aGDmUG06DnoxOz+bKT8/Gxz0B3VsYwQ0Ybyq1p3j42vja2vxBAN77ndujRUamIkSWoU8ckOFtBJMXICZajv3+bkouDCZ/bYGxzBaF2QYEhcX91wc75ht9kMgT1qfgeFq3LI2IWFtAmjD4f1Hv0igzltH9x/egAbqNlwXjnHKHtR9EdOeyk0EVPbmog1vlKH1cuUePtU9yM45jjmE9u1Wr1gBx8E1hGv967q1yb96BbZ27QWHgWGKctcnqQ6WIOHL04k8H/Z1fjbbVYY0GQY0rGJoj8Wo9zDBD/0nN/rX04D+xSf9BzDRj+h0j1BYTQAAY5V1Sk/PykrPqgRqbxaaG98l5MjGdBhO3wvc22y+E1anYw5J7r0AVFRVR8iBImouqCorqwKzCNoRQtbgaFFRb1nC6vgy2kIfpNoMwQ6BwZzNunUIhj9jZqiNhuOrf+ssqi/httR4YRa/MEESW5h/O38GLMduHs/KlR7PKULe93Ch73nFg73nNCFfM78bZskxQbnrAaothGwDw6J1EI1ZdyoCx+DdVIbPpPoGijg206JjMPwdM4cr8Mby0mxK+Lx5S+BYArfdBwYKfbxA2wdJcD9cwTXhmDM8KTUJjtRvIdwn1ORdampq0scweIr74U4DE7U7HmI6sY2QgnfQMrS1gJBPT3Dnbk00MGe/2Vw1PkLWfT7bJKR8NbrXz2nClJ7zn50Pgu4sZFS9FUzu1wBFPrjm91TMWIc5oJfmoL4Cru647p/FN2InGNzvQDH+AOSwnIWgHGgLc3YSUPkZ6peD6TuHo3w+TMYHwB+37O6VuBRaIp5Lz2GE6uNon9lZUPdbIo6z+V5uGR43x6QgrcvDJv28jYB++AXti43mmS5akISYXlxYcnJaWnJaMlygXfzJB1xeeSPzcYrNh7HSOCbIap+UjJSMjBTosaX8eJqAfOWN3GczfVRZ4F8hlqUycvyjus43QHfh+2qCan71/LWJ8SMVzNH4KIiyeq+XqrT+96tXd1zwvuYt3cHA6j/qS73ge733qDLLkX+CMFzM/cVNV3ZXlBDUrl+LQTpISip2Xyktvi8Gg/FPkB5OmzQNEZSvor7pGaqm+oo8wtFpkzQ9GMVYdbIaO4VON+9ueNqkhj+bfYhNiVVlWhnH+GIGye7Y6bsu/33pCYsu/XV51/RYtxwkmD7mOicr6tQZqwpXZRZmZtKuEJruz5iqKrJOmX9UdhG4mMkTH/sXTZwcA5RoN35Upl+wKMuqa0L04xZFT3CpsixK5t+iwWF9Trcratzg3Nzc7bms2z54XJTL7cS6DIphZk7R3K7gqBHRw4aMGjVkWPSIqGCXW1PMlHWDYZdEAJ2q2+UKpnK53KoTIFGyWzcYBuegIJBOTVNVTXMCQyGHZTtjAQUguZARDKiFrRqAQAoilQAMQPwVa3FjiCSgTA5kADKolrehqBtvQ/8BhwGb7q6w1nQAAAAASUVORK5CYII=",_t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAFdElEQVR4AexaA7A0RxDu7n2svxyXY6OMsBTbtlOKWYptFGLbtm3btpPDbue6Xk/ly9Tc481tNFX9emYxO999rdm39H/7hzXOcV+GprkXyH0Aq70AyDMExaCT56cBQl26n+8hMO4ylo4UPpbo3HSZqrxfet/PTQ3cwLT8y4GsNMfiw2fNucNeIzyyntDAYso0pI638ktNEzOp9dX7PrahKoWx3ddsU/nqr9S47pBPTzrx/q9eaSC4XvsYdwN1zpx73FbIwHJKsFCT0GdxcL4qljEgFMC4MID0cVvLhw/49MjVAJxG4DQHY8VJc+y8N8vQcqUDQWbIgVXkY/bzNmY/DkABkF9vUix38Dz77X3/V9scg6Cw9QoYgwyMyuh6JQswBZoZTMwkmCWbIiX581qBa00D+4PFrPWI6AT3N0amegcM2DJhGVq0TeosSPAfMEMCthhN0llFFoFxMFdhXjQ8D1jLwBiAaxMPERdUqdoSfHFKBCBNqWKw8OMAyjUwJmEe+zvkoODZvWWM4+BRcTG2cDEggR0hRQbA1MiPKfoX+KezG+Z085SQUhhAcZ5w7wDbwRdwoRxCOvoYaAdfRWFe0SShb5KK3Fl8zIVKLnyhHunUwICp+ZoAFKYB1xhBHXgAqIjJT+QChq0kwehngJAx1+KL9n7EEmrCJA4/DLaM4R6AsYxVGBwvMKo2oK94LYdrESQTCZhzeg2akzEuuYD8A+YFPlfZCWTN81ccJas4jzGkgxRt+U0Rf31w/BDpWBLhHSKimgAQU4FFBWr6CaxNggkZdbpOtD6EdPRBZCs21f4BQx8DJqCo9b0HmhqbBuDAjuL9BGbI9TBWUREWgv6TDCTK6HeEFQiUUzFr9TGGvoNBAUwQWEjuxxImiexRPcAgLMNCgx8pAIoqeQSPQO1cFW1Uawse6foPfSbauiAb6fsRaA2MJaIiBgwwMRcso8CEo/qywvMidZhigb88mmUXfwEd9bFaiUJ/TYw5IFxcsk5MFMAYJfHHwUStWmNUJEmDc0DpkgsjKEc5D0FyTYylKgWs+4glBRR21mCa4FvAWn2MKfqFQinFShoCDDLVvcqIfNb7tdeKHHxOrY+vA5IBpmL0vUTOsyHXEBUrLsB/cMshITDE7zLcvATqwwle3dVbeQSNi0R/m2gTCvs23I85+zUED2OMIP/ERTDBC5lu+zEYx3nP/bUGH2PwMdx3SdpnMKQ7KEIwijmPoUysofKIE3SysmCoE3GvFvxNdTpblPx5jJgwqcZ1YMrvIG/RtADlj4qmsWKA/OQJOHrFrdmA9M7HQhTDl56uI9Yy/Js6qyliJMRwzpkx5A/3YGI5Ww0JerKNiatfWl/fav1Zg7OvrqSSG5jk/qCk0f7h3uc/u2Dt0x9bci8T69uxHM/CJrke0Cp/efz1r6/f+JRHF93xjrcOeJGIfjWxvh2zc43y58dz/aAyjYm9yNDfkyZa/f7i+9/fu+1Jjyy4+Y2v7v4oEf3m8rtJGNu5Ux5ZaHO7tlX99mKXx/2Oz+yLKZbaeoMQkDbe+uTHJ/c44eH51rvyxS3vNnYcSKMjzUgafu5Xu/akh+dfz+61Of46Z/OtvKYIgFzaX//8ymFK1RelNl/94pcX9znjqWVWueT5dW8kol8CIJAWCp7za3/p3HuDzWFzVdp8zeb+5tfXD7NnwXOzfMDC8ImRRdPhjgz5scql7bo0gePoH+xaYL7C+wNwvAJ22zCf5viARWHhTdec/AbKxyDYGOYK8xUOQOBZJQLKmcfUBdnBRSJAlNQ8HAMEJuPj2pdvqaAPv26ksT+xiWMfNTIVg9NeAoNx+t4JAE0EcPLzTTB/MfmHT6rpJI/zHyNXL7GBBgAqaDCvJVt7zwAAAABJRU5ErkJggg==";const en=n.div``,tn=n.div`
display: flex;
flex-direction: column;
  position: fixed;
  left: 0;
  top: 60px;
  padding: 15px 7px;
  width: 360px;
  padding-right: 0;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    :hover {
      background: #bcc0c4;
    }
  }
  :hover {
    ::-webkit-scrollbar-thumb {
      background: #bcc0c4;
    }
  }
`,p=n.div`
  display: flex;
  gap: 0px 10px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 12px;
  :hover {
    background-color: #e4e6e9;
  }

  > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  > p {
    font-size: 15px;
    font-weight: 600;
  }

  :hover > div {
    background-color: #d8dadf;
  }
`,nn=n.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e6eb;
  color: black;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #d8dadf;
  }
`,rn=n.div`
  :hover {
    #shortcut-edit {
      display: block;
    }
  }
`,on=n.div`
  padding-left: 10px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 17px;
    font-weight: 600;
    color: #6d6f73;
  }

  > div {
    display: none;
    color: #6394d9;
    cursor: pointer;
    font-weight: 500;
    :hover {
      background-color: #e4e6e9;
    }
    padding: 10px;
  }
`,cn=n.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
  a {
    color: rgb(101, 103, 107);
    font-size: 13px;
    text-decoration: none;
    text-decoration-color: rgb(101, 103, 107);
    :hover {
      text-decoration: underline;
    }
  }
`,an=()=>{const[i,r]=g.exports.useState(!1);return e(en,{children:t(tn,{children:[t(p,{children:[e("img",{src:"https://avatars.githubusercontent.com/u/44487221?v=4",alt:""}),e("p",{children:"Dim"})]}),t(p,{children:[e("img",{src:Wt}),e("p",{children:"Friends"})]}),t(p,{children:[e("img",{src:Qt}),e("p",{children:"Memories"})]}),t(p,{children:[e("img",{src:Vt}),e("p",{children:"Groups"})]}),t(p,{children:[e("img",{src:Ht}),e("p",{children:"Watch"})]}),i&&t(O,{children:[t(p,{children:[e("img",{src:Kt}),e("p",{children:"Marketplace"})]}),t(p,{children:[e("img",{src:Jt}),e("p",{children:"Ad Center"})]}),t(p,{children:[e("img",{src:Xt}),e("p",{children:"Ads Manager"})]}),t(p,{children:[e("img",{src:Tt}),e("p",{children:"Blood donations"})]}),t(p,{children:[e("img",{src:Gt}),e("p",{children:"Campus"})]}),t(p,{children:[e("img",{src:$t}),e("p",{children:"COVID-19 Information Center"})]}),t(p,{children:[e("img",{src:_t}),e("p",{children:"Saved"})]})]}),t(p,{onClick:()=>r(!i),children:[e(nn,{children:i?e(ti,{}):e(ni,{})}),t("p",{children:[" ",i?"See less":"See more"]})]}),e(k,{style:{borderWidth:2,marginTop:5}}),t(rn,{children:[t(on,{children:[e("p",{children:"Your Shortcuts"}),e("div",{id:"shortcut-edit",children:"Edit"})]}),t(p,{children:[e("img",{src:"https://avatars.githubusercontent.com/u/44487221?v=4",alt:""}),e("p",{children:"Github Group"})]}),t(p,{children:[e("img",{src:"https://dim0147.github.io/dyl-editor/en/update/images/bg.jpg",alt:""}),e("p",{children:"DYL Extension"})]}),t(p,{children:[e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png",alt:""}),e("p",{children:"Facebook Group"})]})]}),t(cn,{children:[e("a",{href:"#",children:"Privacy"}),e("span",{children:" \xB7 "}),e("a",{href:"#",children:"Terms"}),e("span",{children:" \xB7 "}),e("a",{href:"#",children:"Advertising"}),e("span",{children:" \xB7 "}),t("a",{href:"#",children:["Ad Choices ",e(ri,{})]}),e("span",{children:" \xB7 "}),e("a",{href:"#",children:"Cookies"}),e("span",{children:" \xB7 "}),e("a",{href:"#",children:"More"}),e("span",{children:" \xB7 "}),e("a",{href:"#",children:"Meta 2021"})]})]})})},dn=n.div`
  position: relative;
  flex-shrink: 0;
  width: 110px;
  height: 200px;
  cursor: pointer;
  > img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,sn=n.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;

  /* Profile image */
  > div {
    margin-top: 10px;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #1876f2;
    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
  > p {
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,ln=({storyImg:i,profileImg:r,profileName:o})=>t(dn,{children:[e("img",{src:i,alt:""}),t(sn,{children:[e("div",{children:e("img",{src:r,alt:""})}),t("p",{children:[o," "]})]})]});var An="https://dim0147.github.io/clone-facebook-homepage/build/assets/Story_1.26306a45.jpg",hn="https://dim0147.github.io/clone-facebook-homepage/build/assets/Story_2.c6c30567.jpg",pn="https://dim0147.github.io/clone-facebook-homepage/build/assets/Story_3.9a27612e.jpg",gn="https://dim0147.github.io/clone-facebook-homepage/build/assets/Story_4.f33a59b2.jpg",z="https://dim0147.github.io/clone-facebook-homepage/build/assets/Profile.b225f01d.jpg";const fn=n.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 200px;
  cursor: pointer;
  border-radius: 15px;
  overflow: hidden;
  > div {
    height: 150px;
    > img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
`,un=n.div`
  position: relative;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  > p {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`,mn=n.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  border: 5px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`,vn=({profileImg:i})=>t(fn,{children:[e("div",{children:e("img",{src:i,alt:""})}),t(un,{children:[e("p",{children:"Create Story"}),e(mn,{children:e(le,{})})]})]}),xn=n.div`
  position: relative;
  width: 590px;
  margin-top: 40px;
  display: flex;
  gap: 0 10px;
`,bn=n.div`
  width: 40px;
  height: 40px;
  background-color: white;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6A6C70;
  cursor: pointer;
`,wn=[{storyImg:An,profileName:"Dim",profileImg:z},{storyImg:hn,profileName:"Dim Brother",profileImg:z},{storyImg:pn,profileName:"Dim Sister",profileImg:z},{storyImg:gn,profileName:"Dim Cousin",profileImg:z}],Mn=()=>t(xn,{children:[e(vn,{profileImg:z}),wn.map((i,r)=>e(ln,h({},i),r)),e(bn,{children:e(oi,{})})]}),kn=n.div`
  min-width: 744px;
  max-width: 800px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pn=()=>e(kn,{children:e(Mn,{})}),yn=n.div`
  background-color: blue;
`,Cn=()=>e(yn,{children:"Right"}),Sn=n.div`
    display: grid;
    grid-template-columns: 360px 1fr 360px;
    background-color: #F0F2F5;
    height: calc(100vh - 60px);
`,zn=()=>t(Sn,{children:[e(an,{}),e(Pn,{}),e(Cn,{})]}),jn={background:"#ffffff",text:"#000000",bgMenuHover:"#f2f2f2",linkColor:"#6098E5"},Yn={background:"#000000",text:"#ffffff",bgMenuHover:"#f2f2f2",linkColor:"#6098E5"},Nn=ci`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${i=>i.theme.background};
        color: ${i=>i.theme.text};
        transition: background 0.5s linear,
                    color 0.5s ease;
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif;
    }

    input {
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif; 
    }
`,En={value:"light"},Zn=ai({name:"theme",initialState:En,reducers:{changeTheme:(i,r)=>{i.value=r.payload}}});var Rn=Zn.reducer;const Ln=di({reducer:{theme:Rn}}),In=si;function Bn({children:i}){const o=In(a=>a.theme).value==="light"?jn:Yn;return t(li,{theme:o,children:[e(Nn,{}),i]})}const Un=()=>t(Bn,{children:[e(Ot,{}),e(zn,{})]});Ai.render(e(W.StrictMode,{children:e(hi,{store:Ln,children:e(Un,{})})}),document.getElementById("root"));
