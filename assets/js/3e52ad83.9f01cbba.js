"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[2003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=o.createContext({}),a=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=a(e.components);return o.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=a(n),h=l,g=d["".concat(r,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=h;var u={};for(var r in t)hasOwnProperty.call(t,r)&&(u[r]=t[r]);u.originalType=e,u[d]="string"==typeof e?e:l,s[1]=u;for(var a=2;a<i;a++)s[a]=n[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var o=n(7462),l=(n(7294),n(3905));const i={},s=void 0,u={unversionedId:"globals/Sounds/Sound",id:"globals/Sounds/Sound",title:"Sound",description:"This page is a WIP!",source:"@site/docs/globals/Sounds/Sound.md",sourceDirName:"globals/Sounds",slug:"/globals/Sounds/Sound",permalink:"/globals/Sounds/Sound",draft:!1,editUrl:"https://github.com/figuramc/wiki/tree/main/docs/globals/Sounds/Sound.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sounds",permalink:"/globals/Sounds/"},next:{title:"Textures",permalink:"/globals/Textures/"}},r={},a=[{value:"stop",id:"stop",level:3},{value:"play",id:"play",level:3},{value:"pause",id:"pause",level:3},{value:"setPos(vec3)",id:"setposvec3",level:3},{value:"getPos",id:"getpos",level:3},{value:"isPlaying",id:"isplaying",level:3},{value:"setVolume(number)",id:"setvolumenumber",level:3},{value:"getVolume",id:"getvolume",level:3},{value:"setPitch(number)",id:"setpitchnumber",level:3},{value:"getPitch",id:"getpitch",level:3},{value:"setLoop(bool)",id:"setloopbool",level:3},{value:"isLooping",id:"islooping",level:3},{value:"setAttenuation(number)",id:"setattenuationnumber",level:3},{value:"getAttenuation",id:"getattenuation",level:3},{value:"setSubtitle(string)",id:"setsubtitlestring",level:3},{value:"getSubtitle",id:"getsubtitle",level:3}],p={toc:a},d="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page is a WIP!"),(0,l.kt)("h3",{id:"stop"},"stop"),(0,l.kt)("p",null,"Stops the sound"),(0,l.kt)("h3",{id:"play"},"play"),(0,l.kt)("p",null,"Plays the sound"),(0,l.kt)("h3",{id:"pause"},"pause"),(0,l.kt)("p",null,"Pauses the sound"),(0,l.kt)("h3",{id:"setposvec3"},"setPos(vec3)"),(0,l.kt)("p",null,"Sets the position of the sound"),(0,l.kt)("h3",{id:"getpos"},"getPos"),(0,l.kt)("p",null,"Gets the position of the sound as set by ",(0,l.kt)("code",null,"setPos")),(0,l.kt)("h3",{id:"isplaying"},"isPlaying"),(0,l.kt)("p",null,"Gets if the sound is playing, but this is an unreliable function. A workaround is to stop the sound before you play it (even if it isn't playing) so you can reset the playing state."),(0,l.kt)("h3",{id:"setvolumenumber"},"setVolume(number)"),(0,l.kt)("p",null,"Sets the volume of the sound"),(0,l.kt)("h3",{id:"getvolume"},"getVolume"),(0,l.kt)("p",null,"Gets the volume of the sound"),(0,l.kt)("h3",{id:"setpitchnumber"},"setPitch(number)"),(0,l.kt)("p",null,"Sets the pitch of the sound"),(0,l.kt)("h3",{id:"getpitch"},"getPitch"),(0,l.kt)("p",null,"Gets the pitch of the sound"),(0,l.kt)("h3",{id:"setloopbool"},"setLoop(bool)"),(0,l.kt)("p",null,"Sets if the sound will loop or not"),(0,l.kt)("h3",{id:"islooping"},"isLooping"),(0,l.kt)("p",null,"Gets if the sound is set to loop or not"),(0,l.kt)("h3",{id:"setattenuationnumber"},"setAttenuation(number)"),(0,l.kt)("p",null,"Sets the attenuation of the sound"),(0,l.kt)("h3",{id:"getattenuation"},"getAttenuation"),(0,l.kt)("p",null,"Gets the attenuation of the sound"),(0,l.kt)("h3",{id:"setsubtitlestring"},"setSubtitle(string)"),(0,l.kt)("p",null,"Sets the subtitle (the name that Minecraft's subtitle function will call the sound)"),(0,l.kt)("h3",{id:"getsubtitle"},"getSubtitle"),(0,l.kt)("p",null,"Gets the subtitle"))}c.isMDXComponent=!0}}]);