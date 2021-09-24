var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,s=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&i(e,n,t[n]);return e},l=(e,a)=>t(e,n(a)),c=e=>"symbol"==typeof e?e:e+"",d=(e,t)=>{var n={};for(var i in e)r.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&o.call(e,i)&&(n[i]=e[i]);return n};import{v as u,n as p,e as h,l as m,y as _,a as f,b as g,P as v,D as b,d as y,c as w,U as V,s as A,C as k,A as x,W as C,T as E,f as S,F as T,g as O,u as z,h as N,L as M,i as I,I as L,t as j,j as B,k as P,o as R,m as D,V as F,M as q,p as $,q as H,r as U,w as K,x as W,z as Y,B as Q,E as G,G as J,H as X,J as Z,K as ee,N as te,O as ne,Q as ae,R as re,S as oe,X as ie,Y as se,Z as le,_ as ce,$ as de,a0 as ue,a1 as pe,a2 as he,a3 as me,a4 as _e,a5 as fe,a6 as ge,a7 as ve,a8 as be,a9 as ye,aa as we,ab as Ve,ac as Ae,ad as ke,ae as xe,af as Ce,ag as Ee,ah as Se,ai as Te,aj as Oe,ak as ze,al as Ne,am as Me,an as Ie,ao as Le,ap as je,aq as Be}from"./vendor.182b0579.js";import{d as Pe,s as Re,c as De,D as Fe,B as qe,O as $e,I as He,_ as Ue,T as Ke,a as We,E as Ye,R as Qe,g as Ge,b as Je,L as Xe}from"./Radio.cb2de5b8.js";const Ze=new h;function et(e,t,n){return Ze.addListener(`${e}/${t}`,n),()=>Ze.removeListener(`${e}/${t}`,n)}function tt(e,t,...n){Ze.emit(`${e}/${t}`,...n)}function nt(e){const[t,n]=m(!1);return _((()=>{f.getItem("state").then((e=>{null!==e&&Pe({type:"__INIT",state:e}),n(!0)}))}),[]),t?g(v,{store:Re},e.children):null}const at={message:"/revite/refs/pull/10/merge/assets/message.1da7350f.mp3",outbound:"data:audio/mpeg;base64,SUQzBABAAAAAOAAAAAwBIAUKfnE8PlRYWFgAAAAiAAAAU29mdHdhcmUATE1NUyAobGlic25kZmlsZS0xLjAuMjgp//uQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAHAAAM1QBKSkpKSkpKSkpKSkpKSm9vb29vb29vb29vb29vlJSUlJSUlJSUlJSUlJTDw8PDw8PDw8PDw8PDw8Po6Ojo6Ojo6Ojo6Ojo6Pb29vb29vb29vb29vb2//////////////////8AAABQTEFNRTMuMTAwBLkAAAAAAAAAADUgJAPETQAB4AAADNWb/QITAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vQZAAAAdcKWlUgQAgAAA/woAABJzYjXfncgIAAAD/DAAAAQAAZxc1EB3d3d3dEkXBuAuAuDew4GD4Pg+DhwoCDgQqOCQMf9uD7/+CAIF3//4nP/8EwfB8//8pg4CEgBAAIDRRAoGVQdKcSAAAA6HhgaE+zA0NRCIhxEIIiCAwGEQwbDQwKGsxkIExoFYSOUwnBYxWBgWCMxJBcHA4ARQdi4YhiOLkz9Kqp0Bb7oTgMEOHqUtBQXX698ZFjnadFyJTEZMwJLmRtMZfN0ToqYzVMwKHrj24P3G6kNS5827wOoqiS+rssxfNW1M3Ls/H6exFoxuW1aB2pTSy2tl38qtxwpz5/DUPxuX4z0ptVqalh2iuuLFZBRah+mZFO8mJp3JyH7UqiLoWcdciUWprW/po1f1rKrjz8aysbJOf+833WO3kM42L8oeGDpm/+6CS0GP/vLpKIrQsMRL3HhB0IoKDpYE/9/8Unqlt2pZ9jmHK8v///////////+aqU+eP/XxiH/////////+98rNKL1MJW9nQJcwK1JTAAEBd+r5LcEAvMYDDhhURGHaIYNEIQGVzIrIbMKAoELfJFMSh573BayOcQdFRPFw+RQzFaFYzWy3URRqSaSkj6SzEumqOXjIPdNW1F0oB0pFjZ1kFICKBHCTpeLyklOkqeTRUlUtG9dJSupJJJK6RNDFOE/rdEYJiRCpIyLyKP////6RNECELDMlVIvJkyCCQsoixiaosZARKJ1IKavWTJOmv////+ij6jEckt/WOo1wVCQABO/XFX8RqAAYEAKHCmY2FkZHTAZqAcUBGTAat4GSEohQaKQIKWUYe9ztLwct+Mq798s4tFYLHMXbtxeft2aqkzdabEkv65ULIYrJNs4cEICEU+XEEFrPmB91IomFmUaU03RZFNSnv/WqtMTAyFaGho5gRwucdBEUG/b/////1s5aAYMBMgstZAEx8CUAMji+gn///////qcoh76XUUAumeIAacvImfmJAADQgRWNCwOYynwoDH0H/MQABcaAOAwFo8AOAgAGCgIAuWpmJTF2UHi4zLmuwRWhnB+3ad6A4DsxV94xIo3Sy6hqzedLdpKKNb5zuspv/7kGTVAPWbdlB/cmAIAAAP8OAAARQ12Tfu4mfgAAA/wAAABJ/oZiCw0lnohK2BQ/O1rX+9uhkblS5uZO1UiiDZHP6VaiaDkgwUPIzYzBARtBZEHzCli8mzer/9////Us4SoBhMDYMwBCAcQOAMDghGAhIgZgKQi2///////XSZITcJkOwmysOYMIXMfMDOZuqqf69kyDhSXLMC0JowXwCwcByYFoAgcBCEABLpKwA0GxIAZgLF4u88y4sVC7iFGsWJ1ZeKRqbmZuSJdOmRkkTTUvDDF4li6cKzY3dRkkZLMVy8I8eRsikuuieMjY2ZmL1JBIdxJLNXZEzZRNSMjJFFkVdXRrqdjIaxPDIfzMuJMlrt1a1pdFf///+mdNzMehdCzLpstS////////65SLBW9QACAEEDADODNJIFAKAwAADYJKfMSEIg9hyczFPFsMRMYYx9xqDB4AXlRkKCOGOYHoYtQpZjfDWqDOMYFIPoNAUMW8AkwyggqB/gcJ0hDhKnM1j+D555m4vxYO3oEoFixpdTTX2ZmUQ5eMAgMwSDTP/7kGTpAPXudkz7w6cYAAAP8AAAARSZ0TH15oAgAAA/woAABCYFf5/oDUrCBYhSiWXoMAABVUEhsUDQBB7PEba+u569/2BucwSpxDAwkBzCYSCBwYSBwOBG/7z/3/df3ealgKB790aDiKhaz+frbQaX/u0/3HYnJTJ4cIgGXwQBp9MxfREEhACW+993/N///LM///1zOXNhfl34u4lj6iqiAww2FwwJf+2mhUHd//1nz9epeBh2BAQlYGCUQgkMB4OE6gFDAlPruZiQPDgQMGgEoBCaKCUDAowaHDAwLMNgUmALJ9RfPX9w7+GlU2OfXw//////////1j+ok/LBy7bS1mJiM5TX//////////ziDOJwFAALgMvI1hymyp1FnUuuBZQAH7+42AIAzKXZyM5iWrXVLDBKMURqINABwVCylQFFVIlQU0nKx/EGLkomZRMr2LV7qErozcxK59bMFlVqu3Be1zaCkSx6rWmXFckmezfP9nz6uLPmJXK5XT2tvf//tuCrVayvYMW3r//nOarG7Y/8rFaP//b4tvfrWu4L1//7oGT2AAtkiMv+e4SAAAAP8MAAABe110W9l4AgAAA/w4AABLFrWtfa0JiTyinexssKtVqti4fVta3yeudf/1VFv/8Wtb1evnzErk8rn1v////7PrWta1ra////+9f//y8SqnAHlqh6n1y0IBD0CBpEMw9QTMQNZwYHBJcgwKA0AcmFQSXppIb+P3KiEz6a9DdLXgMFA+XVbnK1NElCp7DnN4cc21nr+fjakVIurndSrCdUdl3L31W9g+SkAvmrp6uqPPfEFe/L9Tf3qUN+TqtkRbTEgy3Wyexlv1I/r/r/q+iZA24Jq1bTALvQX9/7f3/V//2rH8q/WQw/QG9RVVNepSBAGFhAlGtXMyrQEQkQwHF4cCGGgIJBY4YEEjxW2KcEAEpg8M6YqFwa8EgZ9DHIABgRDM64Lf1uvG1qY/UjzzqPbYhLeWdBICCxI1LCUKl+wpjkdoCA35Ec9HGwKMeRDzIwY59czFvvfuFcW67KEckKkNolS439KiR/v/Pfr/q+swAKxgvzoSqf7a//v/b+//j63qWSS7ZKqaqam+61sBUwAiOgLPmhK9AjZZwSGvd3ASISU7r7Sd9XdeFQWKQ9HX9f2WwEzmQRZ9WfGwq8MlkZKsmhKy8puIj7JEyi2/KSpCi1VmMY0mi2rQwaTZ8aRXiKceqhrVcaMUv+gk5S7oLKxlbt1Z1crf/7kGTTgPS/dkt7hocYAAAP8AAAAROl1yvtoblgAAA/wAAABKlR////jQFFfoJP//VVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7MGT3j/P5WUx7CS1YAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EETdj/AAAH+AAAAIAAAP8AAAAQAAAf4AAAAgAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",call_join:"/revite/refs/pull/10/merge/assets/call_join.584596d3.mp3",call_leave:"/revite/refs/pull/10/merge/assets/call_leave.73de5878.mp3"},rt=["message","outbound","call_join","call_leave"];const ot=b({}),it=b(null);var st=De((function({settings:e,children:t}){const n=y((()=>{var t,n;const a=w(null!=(n=null==(t=e.notification)?void 0:t.sounds)?n:{},Fe);return e=>{a[e]&&function(e){const t=at[e],n=new Audio(t);try{n.play()}catch(a){console.error("Failed to play audio file",t,a)}}(e)}}),[e.notification]);return g(ot.Provider,{value:e},g(it.Provider,{value:n},t))}),(e=>({settings:e.settings})));const lt=[location.hostname,"app.revolt.chat","nightly.revolt.chat","local.revolt.chat"],ct=/^\/server\/[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}\/channel\/[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}$/;function dt(e){let t,n=null;if(e){try{if(n=new URL(e,location.href),lt.includes(n.hostname)){const e=n.pathname;if(!e.startsWith("/@"))return ct.test(e)?{type:"navigate",path:e,navigation_type:"channel",channel_id:e.slice(43)}:{type:"navigate",path:e};{const t=e.substr(2);if(/[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{26}/.test(t))return{type:"profile",id:t}}t=!0}}catch(a){}if(!t&&n)return{type:"external",href:e,url:n}}return{type:"none"}}const ut=V`
    0% {opacity: 0;}
    70% {opacity: 0;}
    100% {opacity: 1;}
`,pt=V`
    0% {opacity: 1;}
    70% {opacity: 0;}
    100% {opacity: 0;}
`,ht=V`
    0% {transform: scale(0.5);}
    98% {transform: scale(1.01);}
    100% {transform: scale(1);}
`,mt=V`
    0% {transform: scale(1);}
    100% {transform: scale(0.5);}
`,_t=A.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    max-height: 100%;
    user-select: none;

    animation-name: ${ut};
    animation-duration: 0.2s;

    display: grid;
    overflow-y: auto;
    place-items: center;

    color: var(--foreground);
    background: rgba(0, 0, 0, 0.8);

    &.closing {
        animation-name: ${pt};
    }

    &.closing > div {
        animation-name: ${mt};
    }
`,ft=A.div`
    overflow: hidden;
    max-width: calc(100vw - 20px);
    border-radius: var(--border-radius);

    animation-name: ${ht};
    animation-duration: 0.25s;
    animation-timing-function: cubic-bezier(0.3, 0.3, 0.18, 1.1);
`,gt=A.div`
    text-overflow: ellipsis;
    border-radius: var(--border-radius);

    h3 {
        margin-top: 0;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    ${e=>!e.noBackground&&k`
            background: var(--secondary-header);
        `}

    ${e=>e.padding&&k`
            padding: 1.5em;
        `}

    ${e=>e.attachment&&k`
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        `}

    ${e=>e.border&&k`
            border-radius: var(--border-radius);
            border: 2px solid var(--secondary-background);
        `}
`,vt=A.div`
    gap: 8px;
    display: flex;
    flex-direction: row-reverse;

    padding: 1em 1.5em;
    background: var(--secondary-background);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
`;let bt=!1;function yt(e){var t,n;if(!e.visible)return null;const a=g(gt,{attachment:!!e.actions,noBackground:e.noBackground,border:e.border,padding:null!=(t=e.padding)?t:!e.dontModal},e.title&&g("h3",null,e.title),e.children);if(e.dontModal)return a;const[r,o]=m(!1);bt=r;const i=x((()=>{o(!0),setTimeout((()=>{var t;return null==(t=e.onClose)?void 0:t.call(e)}),200)}),[o,e]);_((()=>et("Modal","close",i)),[i]),_((()=>{if(!e.disallowClosing)return document.body.addEventListener("keydown",t),()=>document.body.removeEventListener("keydown",t);function t(e){"Escape"===e.key&&i()}}),[e.disallowClosing,i]);const c=null==(n=e.actions)?void 0:n.find((e=>e.confirmation));return _((()=>{if(c)return document.body.addEventListener("keydown",e),()=>document.body.removeEventListener("keydown",e);function e(e){"Enter"===e.key&&c.onClick()}}),[c]),C(g(_t,{className:r?"closing":void 0,onClick:!e.disallowClosing&&e.onClose||void 0},g(ft,{onClick:e=>e.cancelBubble=!0},a,e.actions&&g(vt,null,e.actions.map(((t,n)=>g(qe,l(s({key:n},t),{disabled:e.disabled}))))))),document.body)}function wt({onClose:e,text:t}){return g(yt,{visible:!0,onClose:e,title:g(E,{id:"app.special.modals.clipboard.unavailable"}),actions:[{onClick:e,confirmation:!0,children:g(E,{id:"app.special.modals.actions.close"})}]},"https:"!==location.protocol&&g("p",null,g(E,{id:"app.special.modals.clipboard.https"})),g(E,{id:"app.special.modals.clipboard.copy"})," ",g("code",{style:{userSelect:"all"}},t))}function Vt({onClose:e,error:t}){return g(yt,{visible:!0,onClose:()=>!1,title:g(E,{id:"app.special.modals.error"}),actions:[{onClick:e,confirmation:!0,children:g(E,{id:"app.special.modals.actions.ok"})},{onClick:()=>location.reload(),children:g(E,{id:"app.special.modals.actions.reload"})}]},g(E,{id:`error.${t}`},t))}const At=V`
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
`,kt=V`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`,xt=A.div`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    .spinner {
        width: 58px;
        display: flex;
        text-align: center;
        margin: 100px auto 0;
        justify-content: space-between;
    }

    .spinner > div {
        width: 14px;
        height: 14px;
        background-color: var(--tertiary-foreground);

        border-radius: 100%;
        display: inline-block;
        animation: ${At} 1.4s infinite ease-in-out both;
    }

    .spinner div:nth-child(1) {
        animation-delay: -0.32s;
    }

    .spinner div:nth-child(2) {
        animation-delay: -0.16s;
    }

    .ring {
        display: inline-block;
        position: relative;
        width: 48px;
        height: 52px;
    }

    .ring div {
        width: 32px;
        margin: 8px;
        height: 32px;
        display: block;
        position: absolute;
        box-sizing: border-box;
        border: 2px solid #fff;
        border-radius: var(--border-radius-half);
        animation: ${kt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    .ring div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .ring div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;function Ct({type:e}){return g(xt,null,g("div",{class:e},g("div",null),g("div",null),g("div",null)))}let Et=!1,St=0;function Tt(e){Et=e}function Ot(e){var t,n,a,r;const o=null==(n=null==(t=null==e?void 0:e.response)?void 0:t.data)?void 0:n.type;return o?o:401===(null==(a=null==e?void 0:e.response)?void 0:a.status)||403===(null==(r=null==e?void 0:e.response)?void 0:r.status)?"Unauthorized":e&&e.isAxiosError&&!e.response?"NetworkError":(console.error(e),"UnknownError")}function zt(e,t){return"SavedMessages"===e.channel_type?g(E,{id:"app.navigation.tabs.saved"}):"DirectMessage"===e.channel_type?g(S,null,t&&"@",e.recipient.username):"TextChannel"===e.channel_type&&t?g(S,null,"#",e.name):g(S,null,e.name)}var Nt,Mt;(Mt=Nt||(Nt={}))[Mt.INIT=0]="INIT",Mt[Mt.LOADING=1]="LOADING",Mt[Mt.READY=2]="READY",Mt[Mt.OFFLINE=3]="OFFLINE",Mt[Mt.DISCONNECTED=4]="DISCONNECTED",Mt[Mt.CONNECTING=5]="CONNECTING",Mt[Mt.RECONNECTING=6]="RECONNECTING",Mt[Mt.ONLINE=7]="ONLINE";const It=b(null),Lt=b(null),jt=b(null);var Bt=De((function({auth:e,children:t}){const{openScreen:n}=oi(),[a,r]=m(0),[o,i]=m(void 0);if(_((()=>{(async()=>{const e=new O.Client({autoReconnect:!1,apiURL:"https://api.revolt.chat",debug:!1});i(e),r(1)})()}),[]),0===a)return null;const s=y((()=>({login:async e=>{Tt(!0);try{const t=await o.login(e);Tt(!1);const a=()=>Pe({type:"LOGIN",session:o.session});t?n({id:"onboarding",callback:async e=>t(e,!0).then(a)}):a()}catch(t){throw Tt(!1),t}},logout:async e=>{if(Pe({type:"LOGOUT"}),o.reset(),Pe({type:"RESET"}),n({id:"none"}),r(2),o.websocket.disconnect(),e)try{await o.logout()}catch(t){console.error(t)}},loggedIn:()=>void 0!==e.active,ready:()=>s.loggedIn()&&void 0!==o.user})),[o,e.active,n]);return _((()=>function({operations:e},t,n){function a(){function e(){St=+new Date+2e3,n.websocket.connect().catch((e=>console.error(e)))}Et||(+new Date>St?setTimeout(e,2e3):e())}let r={connecting:()=>e.ready()&&t(Nt.CONNECTING),dropped:()=>{e.ready()&&(t(Nt.DISCONNECTED),a())},packet:e=>{switch(e.type){case"ChannelAck":Pe({type:"UNREADS_MARK_READ",channel:e.id,message:e.message_id})}},message:e=>{var t;(null==(t=e.mention_ids)?void 0:t.includes(n.user._id))&&Pe({type:"UNREADS_MENTION",channel:e.channel_id,message:e._id})},ready:()=>t(Nt.ONLINE)};for(const s in r)n.addListener(s,r[s]);const o=()=>{e.ready()&&(t(Nt.RECONNECTING),Tt(!1),a())},i=()=>{e.ready()&&(Tt(!0),n.websocket.disconnect(),t(Nt.OFFLINE))};return window.addEventListener("online",o),window.addEventListener("offline",i),()=>{for(const e in r)n.removeListener(e,r[e]);window.removeEventListener("online",o),window.removeEventListener("offline",i)}}({operations:s},r,o)),[o,s]),_((()=>{(async()=>{if(e.active){Pe({type:"QUEUE_FAIL_ALL"});const a=e.accounts[e.active];if(o.user=o.users.get(a.session.user_id),!navigator.onLine)return r(3);s.ready()&&r(5),navigator.onLine&&await o.fetchConfiguration().catch((()=>console.error("Failed to connect to API server.")));try{await o.fetchConfiguration();const e=await o.useExistingSession(a.session);e&&n({id:"onboarding",callback:e})}catch(t){r(4);const e=Ot(t);"Forbidden"===e||"Unauthorized"===e?(s.logout(!0),n({id:"signed_out"})):n({id:"error",error:e})}}else{try{await o.fetchConfiguration()}catch(t){console.error("Failed to connect to API server.")}r(2)}})()}),[]),1===a?g(Ct,{type:"spinner"}):g(It.Provider,{value:o},g(Lt.Provider,{value:a},g(jt.Provider,{value:s},t)))}),(e=>({auth:e.auth,sync:e.sync})));const Pt=()=>T(It);function Rt({onClose:e,question:t,field:n,defaultValue:a,callback:r}){const[o,i]=m(!1),[s,l]=m(null!=a?a:""),[c,d]=m(void 0);return g(yt,{visible:!0,title:t,disabled:o,actions:[{confirmation:!0,children:g(E,{id:"app.special.modals.actions.ok"}),onClick:()=>{i(!0),r(s).then(e).catch((e=>{d(Ot(e)),i(!1)}))}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:e}],onClose:e},n?g($e,{error:c,block:!0},n):c&&g($e,{error:c,type:"error",block:!0}),g(He,{value:s,onChange:e=>l(e.currentTarget.value)}))}function Dt(e){var t,n;const a=z(),r=T(It),{onClose:o}=e;switch(e.type){case"create_group":return g(Rt,{onClose:o,question:g(E,{id:"app.main.groups.create"}),field:g(E,{id:"app.main.groups.name"}),callback:async e=>{const t=await r.channels.createGroup({name:e,nonce:N(),users:[]});a.push(`/channel/${t._id}`)}});case"create_server":return g(Rt,{onClose:o,question:g(E,{id:"app.main.servers.create"}),field:g(E,{id:"app.main.servers.name"}),callback:async e=>{const t=await r.servers.createServer({name:e,nonce:N()});a.push(`/server/${t._id}`)}});case"create_role":return g(Rt,{onClose:o,question:g(E,{id:"app.settings.permissions.create_role"}),field:g(E,{id:"app.settings.permissions.role_name"}),callback:async t=>{const n=await e.server.createRole(t);e.callback(n.id)}});case"set_custom_status":return g(Rt,{onClose:o,question:g(E,{id:"app.context_menu.set_custom_status"}),field:g(E,{id:"app.context_menu.custom_status"}),defaultValue:null==(n=null==(t=r.user)?void 0:t.status)?void 0:n.text,callback:e=>{var t;return r.users.edit({status:l(s({},null==(t=r.user)?void 0:t.status),{text:e.trim().length>0?e:void 0})})}});case"add_friend":return g(Rt,{onClose:o,question:"Add Friend",callback:e=>r.req("PUT",`/users/${e}/friend`).then(void 0)});default:return null}}var Ft="_onboarding_1p0lx_1",qt="_header_1p0lx_10",$t="_form_1p0lx_19",Ht="/revite/refs/pull/10/merge/assets/wide.fe712d4a.svg";function Ut({type:e,register:t,showOverline:n,error:a,name:r}){return g(S,null,n&&g($e,{error:a},g(E,{id:`login.${e}`})),g(M,null,g(He,{placeholder:g(E,{id:`login.enter.${e}`}),name:"current_password"===e?"password":null!=r?r:e,type:"invite"===e||"username"===e?"text":"current_password"===e?"password":e,className:"fbc-has-badge",ref:t("password"===e||"current_password"===e?{validate:e=>0===e.length?"RequiredField":e.length<8?"TooShort":e.length>1024?"TooLong":void 0}:"email"===e?{required:"RequiredField",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"InvalidEmail"}}:"username"===e?{validate:e=>0===e.length?"RequiredField":e.length<2?"TooShort":e.length>32?"TooLong":void 0}:{required:"RequiredField"})})))}function Kt({onClose:e,callback:t}){const{handleSubmit:n,register:a}=I(),[r,o]=m(!1),[i,s]=m(void 0);return g("div",{className:Ft},g("div",{className:qt},g("h1",null,g(E,{id:"app.special.modals.onboarding.welcome"}),g("img",{src:Ht,loading:"eager"}))),g("div",{className:$t},r?g(Ct,{type:"spinner"}):g(S,null,g("p",null,g(E,{id:"app.special.modals.onboarding.pick"})),g("form",{onSubmit:n((({username:n})=>{o(!0),t(n,!0).then((()=>e())).catch((e=>{s(Ot(e)),o(!1)}))}))},g("div",null,g(Ut,{type:"username",register:a,showOverline:!0,error:i})),g(qe,{type:"submit"},g(E,{id:"app.special.modals.actions.continue"}))))),g("div",null))}var Wt="_invite_1it0z_1",Yt="_column_1it0z_13";function Qt(e,t){const n=Object.keys(t)[0];if(n){const a=t,{[n]:r}=a,o=d(a,[c(n)]);if(void 0===r)return[e];const i=e.split(`{{${n}}}`).map((e=>Qt(e,o)));for(let e=i.length-1;e>0;e-=2)i.splice(e,0,r);return i.flat()}return[e]}function Gt({id:e,fields:t}){const{intl:n}=T(L),a=e.split(".");let r=n.dictionary[a.shift()];for(const o of a)r=r[o];return g(S,null,Qt(r,t))}function Jt(){const{intl:e}=T(L);return(t,n,a,r)=>j(t,"",e.dictionary,n,a,r)}const Xt=B((()=>Ue((()=>import("./Renderer.e87d6612.js")),["/revite/refs/pull/10/merge/assets/Renderer.e87d6612.js","/revite/refs/pull/10/merge/assets/Renderer.51731ebb.css","/revite/refs/pull/10/merge/assets/vendor.182b0579.js","/revite/refs/pull/10/merge/assets/Radio.cb2de5b8.js","/revite/refs/pull/10/merge/assets/Radio.1c3711df.css"])));function Zt(e){return g(P,{fallback:e.content},g(Xt,s({},e)))}var en=A.svg`
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        ${e=>e.borderRadius&&k`
                border-radius: var(${e.borderRadius});
            `}
    }

    ${e=>e.hover&&k`
            &:hover .icon {
                filter: brightness(0.8);
            }
        `}
`;const tn=A.img`
    flex-shrink: 0;
    object-fit: cover;

    ${e=>e.borderRadius&&k`
            border-radius: var(${e.borderRadius});
        `}

    ${e=>e.hover&&k`
            &:hover img {
                filter: brightness(0.8);
            }
        `}
`;function nn(e){var t,n,a;const r=T(Ke);return(null==e?void 0:e.online)&&(null==(t=null==e?void 0:e.status)?void 0:t.presence)!==$.Invisible?(null==(n=null==e?void 0:e.status)?void 0:n.presence)===$.Idle?r["status-away"]:(null==(a=null==e?void 0:e.status)?void 0:a.presence)===$.Busy?r["status-busy"]:r["status-online"]:r["status-invisible"]}const an=A.div`
    width: 10px;
    height: 10px;
    border-radius: var(--border-radius-half);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        stroke: white;
    }

    ${e=>("muted"===e.status||"deaf"===e.status)&&k`
            background: var(--error);
        `}
`;var rn=R((e=>{var t,n;const a=Pt(),r=e,{target:o,attachment:i,size:c,status:u,animate:p,mask:h,hover:m,showServerIdentity:_}=r,f=d(r,["target","attachment","size","status","animate","mask","hover","showServerIdentity"]);let v;if(o&&_){const{server:e}=D();if(e){const t=a.members.getKey({server:e,user:o._id});(null==t?void 0:t.avatar)&&(v=null==t?void 0:t.avatar)}}const b=null!=(n=a.generateFileURL(null!=(t=null!=v?v:null==o?void 0:o.avatar)?t:i,{max_side:256},p))?n:o?o.defaultAvatarURL:"/revite/refs/pull/10/merge/assets/user.c61b8717.png";return g(en,l(s({},f),{width:c,height:c,hover:m,borderRadius:"--border-radius-user-icon","aria-hidden":"true",viewBox:"0 0 32 32"}),g("foreignObject",{x:"0",y:"0",width:"32",height:"32",class:"icon",mask:null!=h?h:u?"url(#user)":void 0},g("img",{src:b,draggable:!1,loading:"lazy"})),e.status&&g("circle",{cx:"27",cy:"27",r:"5",fill:nn(o)}),e.voice&&g("foreignObject",{x:"22",y:"22",width:"10",height:"10"},g(an,{status:e.voice},"deaf"===e.voice&&g(F,{size:6})||"muted"===e.voice&&g(q,{size:6}))))}));const on=A.div`
    display: inline-block;

    height: 1.4em;
    padding: 0 4px;
    font-size: 0.6em;
    user-select: none;
    margin-inline-start: 2px;
    text-transform: uppercase;

    color: var(--foreground);
    background: var(--accent);
    border-radius: calc(var(--border-radius) / 2);
`,sn=R((e=>{var t=e,{user:n,prefixAt:a,showServerIdentity:r}=t,o=d(t,["user","prefixAt","showServerIdentity"]);let i,c=null==n?void 0:n.username;if(n&&r){const{server:e}=D();if(e){const t=Pt(),a=t.members.getKey({server:e,user:n._id});if(a&&(a.nickname&&(c=a.nickname),a.roles&&a.roles.length>0)){const e=t.servers.get(a._id.server);if(null==e?void 0:e.roles)for(const t of a.roles){const n=e.roles[t].colour;n&&(i=n)}}}}return(null==n?void 0:n.bot)?g(S,null,g("span",l(s({},o),{style:{color:i}}),null!=c?c:g(E,{id:"app.main.channel.unknown_user"})),g(on,null,g(E,{id:"app.main.channel.bot"}))):g("span",l(s({},o),{style:{color:i}}),a?"@":void 0,null!=c?c:g(E,{id:"app.main.channel.unknown_user"}))}));function ln({user:e,size:t,prefixAt:n,showServerIdentity:a}){const{openScreen:r}=oi(),o=t=>{t.shiftKey&&(null==e?void 0:e._id)?(t.preventDefault(),tt("MessageBox","append",`<@${null==e?void 0:e._id}>`,"mention")):e&&r({id:"profile",user_id:e._id})};return g(S,null,g(rn,{size:null!=t?t:24,target:e,onClick:o,showServerIdentity:a}),g(sn,{user:e,showServerIdentity:a,onClick:o,prefixAt:n}))}const cn=!H&&!U&&("undefined"!=typeof window&&navigator.maxTouchPoints>0||K);function dn(e){const t=e,{children:n,content:a}=t,r=d(t,["children","content"]);return g(W,s({content:a},r),g("div",{style:"display: flex;"},n))}const un=A.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--secondary-foreground);
    }

    code {
        font-family: var(--monospace-font);
    }
`;function pn(e){const t=e,{permission:n}=t,a=d(t,["permission"]);return g(dn,s({content:g(un,null,g("span",null,g(E,{id:"app.permissions.required"})),g("code",null,n))},a))}const hn=V`
    0% { background: var(--mention); }
    66% { background: var(--mention); }
    100% { background: transparent; }
`;var mn=A.div`
    display: flex;
    overflow: none;
    padding: 0.125rem;
    flex-direction: row;
    padding-inline-end: 16px;

    ${()=>cn&&k`
            user-select: none;
        `}

    ${e=>e.contrast&&k`
            padding: 0.3rem;
            background: var(--hover);
            border-radius: var(--border-radius);
        `}

    ${e=>e.head&&k`
            margin-top: 12px;
        `}

    ${e=>e.mention&&k`
            background: var(--mention);
        `}

    ${e=>e.blocked&&k`
            filter: blur(4px);
            transition: 0.2s ease filter;

            &:hover {
                filter: none;
            }
        `}

    ${e=>e.sending&&k`
            opacity: 0.8;
            color: var(--tertiary-foreground);
        `}

    ${e=>e.failed&&k`
            color: var(--error);
        `}

    ${e=>e.highlight&&k`
            animation-name: ${hn};
            animation-timing-function: ease;
            animation-duration: 3s;
        `}

    .detail {
        gap: 8px;
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .author {
        overflow: hidden;
        cursor: pointer;
        font-weight: 600 !important;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;

        &:hover {
            text-decoration: underline;
        }
    }

    .copy {
        display: block;
        overflow: hidden;
    }

    &:hover {
        background: var(--hover);

        time {
            opacity: 1;
        }

        .system-message-icon {
            display: none;
        }
    }
`;const _n=A.div`
    width: 62px;
    display: flex;
    flex-shrink: 0;
    padding-top: 2px;
    flex-direction: row;
    justify-content: center;

    .copyBracket {
        opacity: 0;
        position: absolute;
    }

    .copyTime {
        opacity: 0;
        position: absolute;
    }

    svg {
        user-select: none;
        cursor: pointer;

        &:active {
            transform: translateY(1px);
        }
    }

    time {
        opacity: 0;
    }

    time,
    .edited {
        margin-top: 1px;
        cursor: default;
        display: inline;
        font-size: 10px;
        color: var(--tertiary-foreground);
    }

    time,
    .edited > div {
        &::selection {
            background-color: transparent;
            color: var(--tertiary-foreground);
        }
    }

    .header {
        cursor: pointer;
    }

    .systemIcon {
        height: 1.33em;
        width: 1.33em;
        margin-right: 0.5em;
        color: var(--tertiary-foreground);
    }
`,fn=A.div`
    min-width: 0;
    flex-grow: 1;
    display: flex;
    // overflow: hidden;
    flex-direction: column;
    justify-content: center;
    font-size: var(--text-size);
`,gn=A.div`
    flex-shrink: 0;
    gap: 4px;
    font-size: 10px;
    display: inline-flex;
    color: var(--tertiary-foreground);

    .edited {
        cursor: default;
        &::selection {
            background-color: transparent;
            color: var(--tertiary-foreground);
        }
    }
`,vn=R((({message:e,position:t})=>{var n,a;const r=function(){const{intl:e}=T(L);return e.dictionary}();return"left"===t?e.edited?g(S,null,g("time",{className:"copyTime"},g("i",{className:"copyBracket"},"["),We(Y(e._id)).format(null==(n=r.dayjs)?void 0:n.timeFormat),g("i",{className:"copyBracket"},"]")),g("span",{className:"edited"},g(dn,{content:We(e.edited).format("LLLL")},g(E,{id:"app.main.channel.edited"})))):g(S,null,g("time",null,g("i",{className:"copyBracket"},"["),We(Y(e._id)).format(null==(a=r.dayjs)?void 0:a.timeFormat),g("i",{className:"copyBracket"},"]"))):g(gn,null,g("time",null,We(Y(e._id)).calendar()),e.edited&&g(dn,{content:We(e.edited).format("LLLL")},g("span",{className:"edited"},g(E,{id:"app.main.channel.edited"}))))}));var bn="_attachment_197qa_1",yn="_audio_197qa_13",wn="_file_197qa_25",Vn="_text_197qa_33",An="_textContent_197qa_39",kn="_margin_197qa_60",xn="_container_197qa_64",Cn="_image_197qa_75",En="_loading_197qa_84",Sn=Q((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)t.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/var Tn={actions:"_actions_iu4oa_1",imageAction:"_imageAction_iu4oa_1",filesize:"_filesize_iu4oa_21",downloadIcon:"_downloadIcon_iu4oa_26",externalType:"_externalType_iu4oa_29",iconType:"_iconType_iu4oa_32"};function On(e){return e>1e6?`${(e/1e6).toFixed(2)} MB`:e>1e3?`${(e/1e3).toFixed(2)} KB`:`${e} B`}const zn="var(--secondary-foreground)",Nn="var(--foreground)";var Mn=A.div`
    z-index: 1;
    display: grid;
    cursor: pointer;
    place-items: center;

    transition: 0.1s ease all;

    fill: ${zn};
    color: ${zn};

    a {
        color: ${zn};
    }

    svg {
        transition: 0.2s ease transform;
    }

    &:hover {
        fill: ${Nn};
        color: ${Nn};

        a {
            color: ${Nn};
        }
    }

    ${e=>"circle"===e.type&&k`
            padding: 4px;
            border-radius: var(--border-radius-half);
            background-color: var(--secondary-header);

            &:hover {
                background-color: var(--primary-header);
            }
        `}

    ${e=>e.rotate&&k`
            svg {
                transform: rotateZ(${e.rotate});
            }
        `}
`;function In({attachment:e}){const t=T(It),{filename:n,metadata:a,size:r}=e,o=t.generateFileURL(e),i=`${o}/${n}`,s=o.replace("attachments","attachments/download"),l=On(r);switch(a.type){case"Image":return g("div",{className:Sn(Tn.actions,Tn.imageAction)},g("span",{className:Tn.filename},n),g("span",{className:Tn.filesize},`${a.width}x${a.height}`," (",l,")"),g("a",{href:i,target:"_blank",className:Tn.iconType,rel:"noreferrer"},g(Mn,null,g(J,{size:24}))),g("a",{href:s,className:Tn.downloadIcon,download:!0,target:"_blank",rel:"noreferrer"},g(Mn,null,g(G,{size:24}))));case"Audio":return g("div",{className:Sn(Tn.actions,Tn.audioAction)},g(ee,{size:24,className:Tn.iconType}),g("span",{className:Tn.filename},n),g("span",{className:Tn.filesize},l),g("a",{href:s,className:Tn.downloadIcon,download:!0,target:"_blank",rel:"noreferrer"},g(Mn,null,g(G,{size:24}))));case"Video":return g("div",{className:Sn(Tn.actions,Tn.videoAction)},g(Z,{size:24,className:Tn.iconType}),g("span",{className:Tn.filename},n),g("span",{className:Tn.filesize},`${a.width}x${a.height}`," (",l,")"),g("a",{href:s,className:Tn.downloadIcon,download:!0,target:"_blank",rel:"noreferrer"},g(Mn,null,g(G,{size:24}))));default:return g("div",{className:Tn.actions},g(X,{size:24,className:Tn.iconType}),g("span",{className:Tn.filename},n),g("span",{className:Tn.filesize},l),"Text"===a.type&&g("a",{href:i,target:"_blank",className:Tn.externalType,rel:"noreferrer"},g(Mn,null,g(J,{size:24}))),g("a",{href:s,className:Tn.downloadIcon,download:!0,target:"_blank",rel:"noreferrer"},g(Mn,null,g(G,{size:24}))))}}const Ln=A.div`
    --width: ${e=>e.width};
    --height: ${e=>e.height};
    --width-px: calc(var(--width) * 1px);
    --height-px: calc(var(--height) * 1px);
    --fixed-width-px: min(var(--width-px), var(--attachment-max-width), 100%);
    --fixed-height-px: min(var(--height-px), var(--attachment-max-height), 100%);
    --aspect: calc(var(--width) / var(--height));
    --aspect-width-px: calc(var(--fixed-height-px) * var(--aspect));
    --aspect-height-px: calc(var(--fixed-width-px) * var(--aspect));
    
    aspect-ratio: var(--width) / var(--height);
    
    ${e=>e.width>e.height&&k`width: var(--fixed-width-px)`};
    ${e=>e.width<=e.height&&k`
        width: var(--aspect-width-px);
        height: var(--fixed-height-px);
    `};
  
    max-width: 100%;
    
    display: grid;

    // This is a hack for browsers not supporting aspect-ratio.
    // Stolen from https://codepen.io/una/pen/BazyaOM.
    @supports not (
        aspect-ratio: ${e=>e.width} / ${e=>e.height}
    ) {
        div::before {
            float: left;
            padding-top: ${e=>e.height/e.width*100}%;
            content: "";
        }

        div::after {
            display: block;
            content: "";
            clear: both;
        }
    }

    img,
    video {
        grid-area: 1 / 1;

        display: block;

        max-width: 100%;
        max-height: 100%;

        overflow: hidden;

        object-fit: contain;
        
        // It's something
        object-position: left;
    }

    video {
        width: 100%;
        height: 100%;
    }

    &.spoiler {
        img,
        video {
            filter: blur(44px);
        }

        border-radius: var(--border-radius);
    }
`;function jn(e){const t=e,{width:n,height:a,children:r}=t,o=d(t,["width","height","children"]);return g(Ln,l(s({},o),{width:n,height:a}),r)}const Bn=A.div`
    display: grid;
    place-items: center;

    z-index: 1;
    grid-area: 1 / 1;

    cursor: pointer;
    user-select: none;
    text-transform: uppercase;

    span {
        padding: 8px;
        color: var(--foreground);
        background: var(--primary-background);
        border-radius: calc(var(--border-radius) * 4);
    }
`;function Pn({set:e}){return g(Bn,{onClick:()=>e(!1)},g("span",null,g(E,{id:"app.main.channel.misc.spoiler_attachment"})))}const Rn=A.div`
    gap: 16px;
    padding: 1em;
    display: flex;
    user-select: none;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: var(--tertiary-foreground);
    background: var(--secondary-header);

    > div {
        font-size: 18px;
    }
`;function Dn(e){const t=T(Lt);return t===Nt.CONNECTING?g(Ct,{type:"ring"}):t!==Nt.ONLINE&&t!==Nt.READY?g(Rn,null,g(te,{size:16}),g("div",null,g(E,{id:"app.special.requires_online"}))):g(S,null,e.children)}const Fn={};function qn({attachment:e}){const[t,n]=m(void 0),[a,r]=m(!1),o=T(Lt),i=T(It).generateFileURL(e);return _((()=>{if(void 0!==t)return;if(a)return;if(e.size>1e5)return void n("This file is > 100 KB, for your sake I did not load it.\nSee tracking issue here for previews: https://github.com/revoltchat/revite/issues/35");r(!0);const o=Fn[e._id];o?(n(o),r(!1)):ne.get(i,{transformResponse:[]}).then((t=>{n(t.data),Fn[e._id]=t.data,r(!1)})).catch((()=>{console.error("Failed to load text file. [",e._id,"]"),r(!1)}))}),[t,a,o,e._id,e.size,i]),g("div",{className:An,"data-loading":void 0===t},t?g("pre",null,g("code",null,t)):g(Dn,null,g(Ct,{type:"ring"})))}var $n,Hn;function Un(e){var t=e,{attachment:n}=t,a=d(t,["attachment"]);const[r,o]=m(0),i=T(It),{openScreen:c}=oi(),u=i.generateFileURL(n);return g("img",l(s({},a),{src:u,alt:n.filename,loading:"lazy",className:Sn(Cn,{[En]:1!==r}),onClick:()=>c({id:"image_viewer",attachment:n}),onMouseDown:e=>1===e.button&&window.open(u,"_blank"),onLoad:()=>o(1),onError:()=>o(2)}))}(Hn=$n||($n={}))[Hn.Loading=0]="Loading",Hn[Hn.Loaded=1]="Loaded",Hn[Hn.Error=2]="Error";function Kn({attachment:e,hasContent:t}){const n=T(It),{filename:a,metadata:r}=e,[o,i]=m(a.startsWith("SPOILER_")),s=n.generateFileURL(e,{width:720},!0);switch(r.type){case"Image":return g(jn,{width:r.width,height:r.height,className:Sn({[kn]:t,spoiler:o})},g(Un,{attachment:e,width:r.width,height:r.height}),o&&g(Pn,{set:i}));case"Video":return g("div",{className:Sn(xn,{[kn]:t}),style:{"--width":`${r.width}px`}},g(In,{attachment:e}),g(jn,{width:r.width,height:r.height,className:Sn({spoiler:o})},g("video",{src:s,alt:a,controls:!0,loading:"lazy",width:r.width,height:r.height,onMouseDown:e=>1===e.button&&window.open(s,"_blank")}),o&&g(Pn,{set:i})));case"Audio":return g("div",{className:Sn(bn,yn),"data-has-content":t},g(In,{attachment:e}),g("audio",{src:s,controls:!0}));case"Text":return g("div",{className:Sn(bn,Vn),"data-has-content":t},g(qn,{attachment:e}),g(In,{attachment:e}));default:return g("div",{className:Sn(bn,wn),"data-has-content":t},g(In,{attachment:e}))}}const Wn={init:async(e,t,n)=>{e.channel.client.websocket.connected?t?e.channel.fetchMessagesWithUsers({nearby:t,limit:100}).then((({messages:n})=>{n.sort(((e,t)=>e._id.localeCompare(t._id))),ae((()=>{e.state="RENDER",e.messages=n,e.atTop=!1,e.atBottom=!1,e.emitScroll({type:"ScrollToView",id:t})}))})):e.channel.fetchMessagesWithUsers({}).then((({messages:t})=>{t.reverse(),ae((()=>{e.state="RENDER",e.messages=t,e.atTop=t.length<50,e.atBottom=!0,e.emitScroll({type:"ScrollToBottom",smooth:n})}))})):ae((()=>{e.state="WAITING_FOR_NETWORK"}))},receive:async(e,t)=>{if(t.channel_id!==e.channel._id)return;if("RENDER"!==e.state)return;if(e.messages.find((e=>e._id===t._id)))return;if(!e.atBottom)return;let n=[...e.messages,t],a=e.atTop;n.length>150&&(n=n.slice(n.length-150),a=!1),ae((()=>{e.messages=n,e.atTop=a,e.emitScroll({type:"StayAtBottom",smooth:Jn})}))},edit:async e=>{e.emitScroll({type:"StayAtBottom",smooth:!1})},delete:async(e,t)=>{if(!e.channel)return;if("RENDER"!==e.state)return;const n=e.messages.findIndex((e=>e._id===t));n>-1&&ae((()=>{e.messages.splice(n,1),e.emitScroll({type:"StayAtBottom"})}))},loadTop:async(e,t)=>{if(!e.channel)return!0;if("RENDER"!==e.state)return!0;if(e.atTop)return!0;const{messages:n}=await e.channel.fetchMessagesWithUsers({before:e.messages[0]._id});ae((()=>{0!==n.length?(n.reverse(),e.messages=[...n,...e.messages],n.length<50&&(e.atTop=!0),e.messages.length>150&&(e.messages=e.messages.slice(0,150),e.atBottom=!1),e.emitScroll(t(e.messages[e.messages.length-1]._id))):e.atTop=!0}))},loadBottom:async(e,t)=>{if(!e.channel)return!0;if("RENDER"!==e.state)return!0;if(e.atBottom)return!0;const{messages:n}=await e.channel.fetchMessagesWithUsers({after:e.messages[e.messages.length-1]._id,sort:"Oldest"});ae((()=>{0!==n.length?(e.messages.splice(e.messages.length,0,...n),n.length<50&&(e.atBottom=!0),e.messages.length>150&&(e.messages.splice(0,e.messages.length-150),e.atTop=!1),e.emitScroll(t(e.messages[0]._id))):e.atBottom=!0}))}};var Yn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Gn=(e,t,n,a)=>{for(var r,o=a>1?void 0:a?Qn(t,n):t,i=e.length-1;i>=0;i--)(r=e[i])&&(o=(a?r(t,n,o):r(o))||o);return a&&o&&Yn(t,n,o),o};const Jn=!1;class Xn{constructor(e){this.state="LOADING",this.scrollState={type:"ScrollToBottom"},this.atTop=null,this.atBottom=null,this.messages=[],this.currentRenderer=Wn,this.stale=!1,this.fetching=!1,this.scrollPosition=0,this.scrollAnchored=!1,this.channel=e,oe(this,{channel:!1,currentRenderer:!1,scrollPosition:!1,scrollAnchored:!1}),this.receive=this.receive.bind(this),this.edit=this.edit.bind(this),this.delete=this.delete.bind(this);const t=this.channel.client;t.addListener("message",this.receive),t.addListener("message/update",this.edit),t.addListener("message/delete",this.delete)}destroy(){const e=this.channel.client;e.removeListener("message",this.receive),e.removeListener("message/update",this.edit),e.removeListener("message/delete",this.delete)}receive(e){this.currentRenderer.receive(this,e)}edit(e,t){this.currentRenderer.edit(this,e,t)}delete(e){this.currentRenderer.delete(this,e)}async init(e){if(e&&"RENDER"===this.state){if(this.messages.find((t=>t._id===e)))return void this.emitScroll({type:"ScrollToView",id:e})}this.stale=!1,this.state="LOADING",this.currentRenderer.init(this,e)}emitScroll(e){this.scrollState=e}markStale(){this.stale=!0}complete(){this.fetching=!1}async reloadStale(){this.stale&&(this.stale=!1,await this.init())}async loadTop(e){this.fetching||(this.fetching=!0,await this.currentRenderer.loadTop(this,(function(t){var n;if(e){let a=0,r=!1;const o=e.children[0];if(o)for(const e of Array.from(o.children))(r||26===(null==(n=e.id)?void 0:n.length)&&1===e.id.localeCompare(t))&&(r=!0,a+=e.clientHeight+parseInt(window.getComputedStyle(e).marginTop.slice(0,-2),10));return{type:"OffsetTop",previousHeight:e.scrollHeight-a}}return{type:"OffsetTop",previousHeight:0}}))&&(this.fetching=!1))}async loadBottom(e){this.fetching||(this.fetching=!0,await this.currentRenderer.loadBottom(this,(function(t){var n;if(e){let a=0,r=!0;const o=e.children[0];if(o)for(const e of Array.from(o.children))r&&(a+=e.clientHeight+parseInt(window.getComputedStyle(e).marginTop.slice(0,-2),10)),26===(null==(n=e.id)?void 0:n.length)&&-1!==e.id.localeCompare(t)&&(r=!1);return{type:"ScrollTop",y:e.scrollTop-a}}return{type:"ScrollToBottom"}}))&&(this.fetching=!1))}async jumpToBottom(e){"RENDER"===this.state&&this.atBottom?this.emitScroll({type:"ScrollToBottom",smooth:e}):await this.currentRenderer.init(this,void 0,!0)}}Gn([re],Xn.prototype,"init",1),Gn([re],Xn.prototype,"emitScroll",1),Gn([re],Xn.prototype,"markStale",1),Gn([re],Xn.prototype,"complete",1);const Zn={};function ea(e){let t=Zn[e._id];return t||(t=new Xn(e),Zn[e._id]=t),t}const ta=A.div`
    gap: 4px;
    display: flex;
    padding: 2px 0;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
`,na={user_added:le,user_remove:ce,user_joined:de,user_left:ue,user_kicked:pe,user_banned:he,channel_renamed:me,channel_description_changed:_e,channel_icon_changed:fe,text:ie},aa=R((({attachContext:e,message:t,highlight:n,hideInfo:a})=>{var r;const o=t.asSystemMessage,i=null!=(r=na[o.type])?r:ie;let s;switch(o.type){case"text":s=g("span",null,o.content);break;case"user_added":case"user_remove":s=g(Gt,{id:"app.main.channel.system."+("user_added"===o.type?"added_by":"removed_by"),fields:{user:g(ln,{user:o.user}),other_user:g(ln,{user:o.by})}});break;case"user_joined":case"user_left":case"user_kicked":case"user_banned":s=g(Gt,{id:`app.main.channel.system.${o.type}`,fields:{user:g(ln,{user:o.user})}});break;case"channel_renamed":s=g(Gt,{id:"app.main.channel.system.channel_renamed",fields:{user:g(ln,{user:o.by}),name:g("b",null,o.name)}});break;case"channel_description_changed":case"channel_icon_changed":s=g(Gt,{id:`app.main.channel.system.${o.type}`,fields:{user:g(ln,{user:o.by})}})}return g(mn,{highlight:n,onContextMenu:e?se("Menu",{message:t,contextualChannel:t.channel}):void 0},!a&&g(_n,null,g(vn,{message:t,position:"left"}),g(i,{className:"systemIcon"})),g(ta,null,s))})),ra=A.div`
    gap: 4px;
    min-width: 0;
    display: flex;
    margin-inline-start: 30px;
    margin-inline-end: 12px;
    font-size: 0.8em;
    user-select: none;
    align-items: center;
    color: var(--secondary-foreground);

    /* nizune's Discord replies,
        does not scale properly with messages,
        reverted temporarily
    &::before {
        content: "";
        height: 10px;
        width: 28px;
        margin-inline-end: 2px;
        align-self: flex-end;
        display: flex;
        border-top: 2.2px solid var(--tertiary-foreground);
        border-inline-start: 2.2px solid var(--tertiary-foreground);
        border-start-start-radius: 6px;
    }*/

    * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .user {
        gap: 6px;
        display: flex;
        flex-shrink: 0;
        font-weight: 600;
        overflow: visible;
        align-items: center;
        padding: 2px 0;

        span {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }

        /*&::before {
            position:relative;
            width: 50px;
            height: 2px;
            background: red;
        }*/
    }

    .content {
        padding: 2px 0;
        gap: 4px;
        display: flex;
        cursor: pointer;
        align-items: center;
        flex-direction: row;
        transition: filter 1s ease-in-out;
        transition: transform ease-in-out 0.1s;
        filter: brightness(1);

        &:hover {
            filter: brightness(2);
        }

        &:active {
            transform: translateY(1px);
        }

        > * {
            pointer-events: none;
        }

        /*> span > p {
            display: flex;
        }*/
    }

    > svg:first-child {
        flex-shrink: 0;
        transform: scaleX(-1);
        color: var(--tertiary-foreground);
    }

    ${e=>e.fail&&k`
            color: var(--tertiary-foreground);
        `}

    ${e=>e.head&&k`
            margin-top: 12px;
        `}

    ${e=>e.preview&&k`
            margin-left: 0;
        `}
`,oa=R((({index:e,channel:t,id:n,parent_mentions:a})=>{var r;const o=ea(t);if("RENDER"!==o.state)return null;const[i,s]=m(void 0);if(ge((()=>{const e=t.client.messages.get(n);e?s(e):t.fetchMessage(n).then(s)}),[n,t,o.messages]),!i)return g(ra,{head:0===e,fail:!0},g(ve,{size:16}),g("span",null,g(E,{id:"app.main.channel.misc.failed_load"})));const l=z();return g(ra,{head:0===e},g(ve,{size:16}),(null==(r=i.author)?void 0:r.relationship)===be.Blocked?g(E,{id:"app.main.channel.misc.blocked_user"}):g(S,null,"00000000000000000000000000"===i.author_id?g(aa,{message:i,hideInfo:!0}):g(S,null,g("div",{className:"user"},g(ln,{user:i.author,size:16,showServerIdentity:!0,prefixAt:a.includes(i.author_id)})),g("div",{className:"content",onClick:()=>{const e=i.channel;"TextChannel"===e.channel_type?l.push(`/server/${e.server_id}/channel/${e._id}/${i._id}`):l.push(`/channel/${e._id}/${i._id}`)}},i.attachments&&g(S,null,g(ye,{size:16}),g("em",null,i.attachments.length>1?g(E,{id:"app.main.channel.misc.sent_multiple_files"}):g(E,{id:"app.main.channel.misc.sent_file"}))),g(Zt,{disallowBigEmoji:!0,content:i.content.replace(/\n/g," ")})))))}));var ia={embed:"_embed_x54sc_1",image:"_image_x54sc_8",website:"_website_x54sc_11",siteinfo:"_siteinfo_x54sc_28",favicon:"_favicon_x54sc_34",site:"_site_x54sc_28",author:"_author_x54sc_46",title:"_title_x54sc_54",description:"_description_x54sc_65",footer:"_footer_x54sc_74",actions:"_actions_x54sc_83",filesize:"_filesize_x54sc_99",openIcon:"_openIcon_x54sc_104"},sa=/^\s+|\s+$/g,la=/^[-+]0x[0-9a-f]+$/i,ca=/^0b[01]+$/i,da=/^0o[0-7]+$/i,ua=parseInt,pa="object"==typeof we&&we&&we.Object===Object&&we,ha="object"==typeof self&&self&&self.Object===Object&&self,ma=pa||ha||Function("return this")(),_a=Object.prototype.toString,fa=Math.max,ga=Math.min,va=function(){return ma.Date.now()};function ba(e,t,n){var a,r,o,i,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=a,o=r;return a=r=void 0,c=t,i=e.apply(o,n)}function m(e){return c=e,s=setTimeout(f,t),d?h(e):i}function _(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function f(){var e=va();if(_(e))return g(e);s=setTimeout(f,function(e){var n=t-(e-l);return u?ga(n,o-(e-c)):n}(e))}function g(e){return s=void 0,p&&a?h(e):(a=r=void 0,i)}function v(){var e=va(),n=_(e);if(a=arguments,r=this,l=e,n){if(void 0===s)return m(l);if(u)return s=setTimeout(f,t),h(l)}return void 0===s&&(s=setTimeout(f,t)),i}return t=wa(t)||0,ya(n)&&(d=!!n.leading,o=(u="maxWait"in n)?fa(wa(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},v.flush=function(){return void 0===s?i:g(va())},v}function ya(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function wa(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==_a.call(e)}(e))return NaN;if(ya(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ya(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(sa,"");var n=ca.test(e);return n||da.test(e)?ua(e.slice(2),n?2:8):la.test(e)?NaN:+e}var Va,Aa=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ya(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),ba(e,t,{leading:a,maxWait:t,trailing:r})},ka=Q((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.addPassiveEventListener=function(e,t,n){var a=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!a&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}})),xa=(Va=Aa)&&Va.__esModule?Va:{default:Va};var Ca={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,xa.default)(e,t)}((function(t){Ca.scrollHandler(e)}),t);Ca.scrollSpyContainers.push(e),(0,ka.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==Ca.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(Ca.scrollSpyContainers[Ca.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(Ca.currentPositionX(e),Ca.currentPositionY(e))}))},addStateHandler:function(e){Ca.spySetState.push(e)},addSpyHandler:function(e,t){var n=Ca.scrollSpyContainers[Ca.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(Ca.currentPositionX(t),Ca.currentPositionY(t))},updateStates:function(){Ca.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){Ca.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),Ca.spySetState&&Ca.spySetState.length&&Ca.spySetState.splice(Ca.spySetState.indexOf(e),1),document.removeEventListener("scroll",Ca.scrollHandler)},update:function(){return Ca.scrollSpyContainers.forEach((function(e){return Ca.scrollHandler(e)}))}},Ea=Ca,Sa=Object.defineProperty({default:Ea},"__esModule",{value:!0}),Ta=function(e,t){for(var n=e.offsetTop,a=e.offsetParent;a&&!t(a);)n+=a.offsetTop,a=a.offsetParent;return{offsetTop:n,offsetParent:a}},Oa={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,a=n?"#"+n:"",r=window&&window.location,o=a?r.pathname+r.search+a:r.pathname+r.search;t?history.pushState(null,"",o):history.replaceState(null,"",o)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,n){if(n)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var a=Ta(t,(function(t){return t===e||t===document})),r=a.offsetTop;if(a.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return r}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var o=function(e){return e===document};return Ta(t,o).offsetTop-Ta(e,o).offsetTop}},za=Object.defineProperty({default:Oa},"__esModule",{value:!0}),Na={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},Ma=Object.defineProperty({default:Na},"__esModule",{value:!0}),Ia=["mousedown","mousewheel","touchmove","keydown"],La={subscribe:function(e){return"undefined"!=typeof document&&Ia.forEach((function(t){return(0,ka.addPassiveEventListener)(document,t,e)}))}},ja=Object.defineProperty({default:La},"__esModule",{value:!0}),Ba={registered:{},scrollEvent:{register:function(e,t){Ba.registered[e]=t},remove:function(e){Ba.registered[e]=null}}},Pa=Ba,Ra=Object.defineProperty({default:Pa},"__esModule",{value:!0}),Da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};Ha(za);var Fa=Ha(Ma),qa=Ha(ja),$a=Ha(Ra);function Ha(e){return e&&e.__esModule?e:{default:e}}var Ua=function(e){return Fa.default[e.smooth]||Fa.default.defaultEasing},Ka=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},Wa=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},Ya=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,a="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},Qa=function e(t,n,a){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=a),r.progress=a-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var o=e.bind(null,t,n);Ka.call(window,o)}else $a.default.registered.end&&$a.default.registered.end(r.to,r.target,r.currentPosition);else $a.default.registered.end&&$a.default.registered.end(r.to,r.target,r.currentPositionY)},Ga=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},Ja=function(e,t,n,a){if(t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),qa.default.subscribe((function(){t.data.cancel=!0})),Ga(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?Wa(t):Ya(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=a;var o=Ua(t),i=Qa.bind(null,o,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){$a.default.registered.begin&&$a.default.registered.begin(t.data.to,t.data.target),Ka.call(window,i)}),t.delay):($a.default.registered.begin&&$a.default.registered.begin(t.data.to,t.data.target),Ka.call(window,i))}else $a.default.registered.end&&$a.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},Xa=function(e){return(e=Da({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e},Za={animateTopScroll:Ja,getAnimationType:Ua,scrollToTop:function(e){Ja(0,Xa(e))},scrollToBottom:function(e){e=Xa(e),Ga(e),Ja(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,a=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,a=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)}(e),e)},scrollTo:function(e,t){Ja(e,Xa(t))},scrollMore:function(e,t){t=Xa(t),Ga(t);var n=t.horizontal?Wa(t):Ya(t);Ja(e+n,t)}},er=Object.defineProperty({default:Za},"__esModule",{value:!0}),tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},nr=or(za),ar=or(er),rr=or(Ra);function or(e){return e&&e.__esModule?e:{default:e}}var ir={},sr=void 0,lr={unmount:function(){ir={}},register:function(e,t){ir[e]=t},unregister:function(e){delete ir[e]},get:function(e){return ir[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return sr=e},getActiveLink:function(){return sr},scrollTo:function(e,t){var n=this.get(e);if(n){var a=(t=tr({},t,{absolute:!1})).containerId,r=t.container,o=void 0;o=a?document.getElementById(a):r&&r.nodeType?r:document,t.absolute=!0;var i=t.horizontal,s=nr.default.scrollOffset(o,n,i)+(t.offset||0);if(!t.smooth)return rr.default.registered.begin&&rr.default.registered.begin(e,n),o===document?t.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):o.scrollTop=s,void(rr.default.registered.end&&rr.default.registered.end(e,n));ar.default.animateTopScroll(s,t,e,n)}else console.warn("target Element not found")}},cr=Object.defineProperty({default:lr},"__esModule",{value:!0}),dr=function(e){return e&&e.__esModule?e:{default:e}}(za);var ur={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var a=this.containers[e]||document;n.scrollTo(e,{container:a})}},getHash:function(){return dr.default.getHash()},changeHash:function(e,t){this.isInitialized()&&dr.default.getHash()!==e&&dr.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}},pr=Object.defineProperty({default:ur},"__esModule",{value:!0}),hr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},mr=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_r=yr(Ae),fr=yr(Sa),gr=yr(cr),vr=yr(Ve),br=yr(pr);function yr(e){return e&&e.__esModule?e:{default:e}}var wr={to:vr.default.string.isRequired,containerId:vr.default.string,container:vr.default.object,activeClass:vr.default.string,spy:vr.default.bool,horizontal:vr.default.bool,smooth:vr.default.oneOfType([vr.default.bool,vr.default.string]),offset:vr.default.number,delay:vr.default.number,isDynamic:vr.default.bool,onClick:vr.default.func,duration:vr.default.oneOfType([vr.default.number,vr.default.func]),absolute:vr.default.bool,onSetActive:vr.default.func,onSetInactive:vr.default.func,ignoreCancelEvents:vr.default.bool,hashSpy:vr.default.bool,saveHashHistory:vr.default.bool,spyThrottle:vr.default.number},Vr=Object.defineProperty({default:function(e,t){var n=t||gr.default,a=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return r.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,_r.default.PureComponent),mr(a,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();fr.default.isMounted(e)||fr.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(br.default.isMounted()||br.default.mount(n),br.default.mapContainer(this.props.to,e)),fr.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){fr.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=hr({},this.props);for(var a in wr)n.hasOwnProperty(a)&&delete n[a];return n.className=t,n.onClick=this.handleClick,_r.default.createElement(e,n)}}]),a}(),r=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,hr({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,a){var r=e.getScrollSpyContainer();if(!br.default.isMounted()||br.default.isInitialized()){var o=e.props.horizontal,i=e.props.to,s=null,l=void 0,c=void 0;if(o){var d=0,u=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var h=s.getBoundingClientRect();u=(d=h.left-p+t)+h.width}var m=t-e.props.offset;l=m>=Math.floor(d)&&m<Math.floor(u),c=m<Math.floor(d)||m>=Math.floor(u)}else{var _=0,f=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!s||e.props.isDynamic){if(!(s=n.get(i)))return;var v=s.getBoundingClientRect();f=(_=v.top-g+a)+v.height}var b=a-e.props.offset;l=b>=Math.floor(_)&&b<Math.floor(f),c=b<Math.floor(_)||b>=Math.floor(f)}var y=n.getActiveLink();if(c){if(i===y&&n.setActiveLink(void 0),e.props.hashSpy&&br.default.getHash()===i){var w=e.props.saveHashHistory,V=void 0!==w&&w;br.default.changeHash("",V)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,s))}if(l&&(y!==i||!1===e.state.active)){n.setActiveLink(i);var A=e.props.saveHashHistory,k=void 0!==A&&A;e.props.hashSpy&&br.default.changeHash(i,k),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,s))}}}};return a.propTypes=wr,a.defaultProps={offset:0},a}},"__esModule",{value:!0}),Ar=xr(Ae),kr=xr(Vr);function xr(e){return e&&e.__esModule?e:{default:e}}function Cr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Er(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var Sr=function(e){function t(){var e,n,a;Cr(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=Er(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.render=function(){return Ar.default.createElement("a",a.props,a.props.children)},Er(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Ar.default.Component),t}(),Tr=(0,kr.default)(Sr),Or=Object.defineProperty({default:Tr},"__esModule",{value:!0}),zr=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Nr=Ir(Ae),Mr=Ir(Vr);function Ir(e){return e&&e.__esModule?e:{default:e}}function Lr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jr(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var Br=function(e){function t(){return Lr(this,t),jr(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Nr.default.Component),zr(t,[{key:"render",value:function(){return Nr.default.createElement("input",this.props,this.props.children)}}]),t}(),Pr=(0,Mr.default)(Br),Rr=Object.defineProperty({default:Pr},"__esModule",{value:!0}),Dr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Fr=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),qr=Ur(Ae);Ur(Ae);var $r=Ur(cr),Hr=Ur(Ve);function Ur(e){return e&&e.__esModule?e:{default:e}}var Kr=Object.defineProperty({default:function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,qr.default.Component),Fr(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;$r.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){$r.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return qr.default.createElement(e,Dr({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:Hr.default.string,id:Hr.default.string},t}},"__esModule",{value:!0}),Wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Yr=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Qr=Xr(Ae),Gr=Xr(Kr),Jr=Xr(Ve);function Xr(e){return e&&e.__esModule?e:{default:e}}function Zr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function eo(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var to=function(e){function t(){return Zr(this,t),eo(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Qr.default.Component),Yr(t,[{key:"render",value:function(){var e=this,t=Wr({},this.props);return t.parentBindings&&delete t.parentBindings,Qr.default.createElement("div",Wr({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}();to.propTypes={name:Jr.default.string,id:Jr.default.string};var no=(0,Gr.default)(to),ao=Object.defineProperty({default:no},"__esModule",{value:!0}),ro=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oo=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function io(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function so(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function lo(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var co={to:Ve.string.isRequired,containerId:Ve.string,container:Ve.object,activeClass:Ve.string,spy:Ve.bool,smooth:Ve.oneOfType([Ve.bool,Ve.string]),offset:Ve.number,delay:Ve.number,isDynamic:Ve.bool,onClick:Ve.func,duration:Ve.oneOfType([Ve.number,Ve.func]),absolute:Ve.bool,onSetActive:Ve.func,onSetInactive:Ve.func,ignoreCancelEvents:Ve.bool,hashSpy:Ve.bool,spyThrottle:Ve.number},uo={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||cr,a=function(t){function a(e){io(this,a);var t=so(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return r.call(t),t.state={active:!1},t}return lo(a,Ae.Component),oo(a,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();Sa.isMounted(e)||Sa.mount(e,this.props.spyThrottle),this.props.hashSpy&&(pr.isMounted()||pr.mount(n),pr.mapContainer(this.props.to,e)),this.props.spy&&Sa.addStateHandler(this.stateHandler),Sa.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){Sa.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=ro({},this.props);for(var a in co)n.hasOwnProperty(a)&&delete n[a];return n.className=t,n.onClick=this.handleClick,Ae.createElement(e,n)}}]),a}(),r=function(){var e=this;this.scrollTo=function(t,a){n.scrollTo(t,ro({},e.state,a))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var a=e.getScrollSpyContainer();if(!pr.isMounted()||pr.isInitialized()){var r=e.props.to,o=null,i=0,s=0,l=0;if(a.getBoundingClientRect)l=a.getBoundingClientRect().top;if(!o||e.props.isDynamic){if(!(o=n.get(r)))return;var c=o.getBoundingClientRect();s=(i=c.top-l+t)+c.height}var d=t-e.props.offset,u=d>=Math.floor(i)&&d<Math.floor(s),p=d<Math.floor(i)||d>=Math.floor(s),h=n.getActiveLink();return p?(r===h&&n.setActiveLink(void 0),e.props.hashSpy&&pr.getHash()===r&&pr.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),Sa.updateStates()):u&&h!==r?(n.setActiveLink(r),e.props.hashSpy&&pr.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),Sa.updateStates()):void 0}}};return a.propTypes=co,a.defaultProps={offset:0},a},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){io(this,n);var t=so(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return lo(n,Ae.Component),oo(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;cr.unregister(this.props.name)}},{key:"registerElems",value:function(e){cr.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return Ae.createElement(e,ro({},this.props,{parentBindings:this.childBindings}))}}]),n}();return t.propTypes={name:Ve.string,id:Ve.string},t}},po=Q((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var n=p(Or),a=p(Rr),r=p(ao),o=p(cr),i=p(Ra),s=p(Sa),l=p(er),c=p(Vr),d=p(Kr),u=p(uo);function p(e){return e&&e.__esModule?e:{default:e}}t.Link=n.default,t.Button=a.default,t.Element=r.default,t.scroller=o.default,t.Events=i.default,t.scrollSpy=s.default,t.animateScroll=l.default,t.ScrollLink=c.default,t.ScrollElement=d.default,t.Helpers=u.default,t.default={Link:n.default,Button:a.default,Element:r.default,scroller:o.default,Events:i.default,scrollSpy:s.default,animateScroll:l.default,ScrollLink:c.default,ScrollElement:d.default,Helpers:u.default}}));var ho=function(e,t,n){return e[t]?e[t][0]?e[t][0][n]:e[t][n]:"contentBoxSize"===t?e.contentRect["inlineSize"===n?"width":"height"]:void 0};function mo(e){void 0===e&&(e={});var t=e.onResize,n=ke(void 0);n.current=t;var a=e.round||Math.round,r=ke(),o=m({width:void 0,height:void 0}),i=o[0],s=o[1],l=ke(!1);_((function(){return function(){l.current=!0}}),[]);var c,d,u,p,h,f,g=ke({width:void 0,height:void 0}),v=(c=x((function(t){return r.current&&r.current.box===e.box&&r.current.round===a||(r.current={box:e.box,round:a,instance:new ResizeObserver((function(t){var r=t[0],o="border-box"===e.box?"borderBoxSize":"device-pixel-content-box"===e.box?"devicePixelContentBoxSize":"contentBoxSize",i=ho(r,o,"inlineSize"),c=ho(r,o,"blockSize"),d=i?a(i):void 0,u=c?a(c):void 0;if(g.current.width!==d||g.current.height!==u){var p={width:d,height:u};g.current.width=d,g.current.height=u,n.current?n.current(p):l.current||s(p)}}))}),r.current.instance.observe(t,{box:e.box}),function(){r.current&&r.current.instance.unobserve(t)}}),[e.box,a]),d=e.ref,u=ke(null),p=ke(null),h=ke(),f=x((function(){var e=null;u.current?e=u.current:d&&(e=d instanceof HTMLElement?d:d.current),p.current&&p.current.element===e&&p.current.reporter===f||(h.current&&(h.current(),h.current=null),p.current={reporter:f,element:e},e&&(h.current=c(e)))}),[d,c]),_((function(){f()}),[f]),x((function(e){u.current=e,f()}),[f]));return y((function(){return{ref:v,width:i.width,height:i.height}}),[v,i?i.width:null,i?i.height:null])}const _o=e=>setTimeout(e,0),fo=A.div`
    margin: 18px 16px 10px 16px;

    h1 {
        font-size: 23px;
        margin: 0 0 8px 0;
    }

    h4 {
        font-weight: 400;
        margin: 0;
        font-size: 14px;
    }
`;var go=R((({channel:e})=>g(fo,null,g("h1",null,zt(e,!0)),g("h4",null,g(E,{id:"app.main.channel.start.group"})))));const vo=A.div`
    height: 0;
    display: flex;
    user-select: none;
    align-items: center;
    margin: 17px 12px 5px;
    border-top: thin solid var(--tertiary-foreground);

    time {
        margin-top: -2px;
        font-size: 0.6875rem;
        line-height: 0.6875rem;
        padding: 2px 0 2px 0;
        padding-inline-end: 5px;
        color: var(--tertiary-foreground);
        background: var(--primary-background);
    }

    ${e=>e.unread&&k`
            border-top: thin solid var(--accent);
        `}
`,bo=A.div`
    background: var(--accent);
    color: white;
    padding: 5px 8px;
    border-radius: 60px;
    font-weight: 600;
`;function yo(e){return g(vo,{unread:e.unread},e.unread&&g(bo,null,"NEW"),g("time",null,We(e.date).format("LL")))}var wo=A.textarea`
    width: 100%;
    resize: none;
    display: block;
    color: var(--foreground);
    background: var(--secondary-background);
    padding: ${e=>{var t;return null!=(t=e.padding)?t:"var(--textarea-padding)"}};
    line-height: ${e=>{var t;return null!=(t=e.lineHeight)?t:"var(--textarea-line-height)"}};

    ${e=>e.hideBorder&&k`
            border: none;
        `}

    ${e=>!e.hideBorder&&k`
            border-radius: var(--border-radius);
            transition: border-color 0.2s ease-in-out;
            border: var(--input-border-width) solid transparent;
        `}

    &:focus {
        outline: none;

        ${e=>!e.hideBorder&&k`
                border: var(--input-border-width) solid var(--accent);
            `}
    }

    ${e=>e.code?k`
                  font-family: var(--monospace-font), monospace;
              `:k`
                  font-family: inherit;
              `}

    font-variant-ligatures: var(--ligatures);
`;const Vo=A.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`,Ao=A.div`
    flex: 0;
    width: 100%;
    overflow: hidden;
    visibility: hidden;
    position: relative;

    > div {
        width: 100%;
        white-space: pre-wrap;
        word-break: break-all;

        top: 0;
        position: absolute;
        font-size: var(--text-size);
        line-height: ${e=>e.lineHeight};

        max-height: calc(
            calc(${e=>e.lineHeight} * ${e=>e.maxRows})
        );
    }
`;function ko(e){const t=e,{autoFocus:n,minHeight:a,maxRows:r,value:o,padding:i,lineHeight:l,hideBorder:c,forceFocus:u,onChange:p}=t,h=d(t,["autoFocus","minHeight","maxRows","value","padding","lineHeight","hideBorder","forceFocus","onChange"]),m=ke(),f=ke();ge((()=>{m.current&&f.current&&(m.current.style.height=`${f.current.clientHeight}px`)}),[f,e.value]),_((()=>{cn||n&&m.current&&m.current.focus()}),[o,n]);const v=()=>{var e,t;return["TEXTAREA","INPUT"].includes(null!=(t=null==(e=document.activeElement)?void 0:e.nodeName)?t:"")};return _((()=>{if(m.current&&(u&&m.current.focus(),!cn&&(n&&!v()&&m.current.focus(),n)))return document.body.addEventListener("keydown",e),()=>document.body.removeEventListener("keydown",e);function e(e){e.ctrlKey&&"v"!==e.key||e.altKey||e.metaKey||1===e.key.length&&m&&!v()&&m.current.focus()}}),[m,n,u,o]),_((()=>{if(m.current)return et("TextArea","focus",(function(t){t===e.id&&m.current.focus()}))}),[e.id,m]),g(Vo,null,g(wo,s({ref:m,value:o,padding:i,style:{minHeight:a},hideBorder:c,lineHeight:l,onChange:e=>{p&&p(e)}},h)),g(Ao,{lineHeight:null!=l?l:"var(--textarea-line-height)",maxRows:null!=r?r:5},g("div",{ref:f,style:{padding:i}},e.value?e.value.split("\n").map((e=>`‎${e}`)).join("\n"):"‎\n")))}const xo={100:"💯",1234:"🔢",grinning:"😀",smiley:"😃",smile:"😄",grin:"😁",laughing:"😆",satisfied:"😆",sweat_smile:"😅",rofl:"🤣",joy:"😂",slightly_smiling_face:"🙂",upside_down_face:"🙃",wink:"😉",blush:"😊",innocent:"😇",smiling_face_with_three_hearts:"🥰",heart_eyes:"😍",star_struck:"🤩",kissing_heart:"😘",kissing:"😗",relaxed:"☺️",kissing_closed_eyes:"😚",kissing_smiling_eyes:"😙",smiling_face_with_tear:"🥲",yum:"😋",stuck_out_tongue:"😛",stuck_out_tongue_winking_eye:"😜",zany_face:"🤪",stuck_out_tongue_closed_eyes:"😝",money_mouth_face:"🤑",hugs:"🤗",hand_over_mouth:"🤭",shushing_face:"🤫",thinking:"🤔",zipper_mouth_face:"🤐",raised_eyebrow:"🤨",neutral_face:"😐",expressionless:"😑",no_mouth:"😶",smirk:"😏",unamused:"😒",roll_eyes:"🙄",grimacing:"😬",lying_face:"🤥",relieved:"😌",pensive:"😔",sleepy:"😪",drooling_face:"🤤",sleeping:"😴",mask:"😷",face_with_thermometer:"🤒",face_with_head_bandage:"🤕",nauseated_face:"🤢",vomiting_face:"🤮",sneezing_face:"🤧",hot_face:"🥵",cold_face:"🥶",woozy_face:"🥴",dizzy_face:"😵",exploding_head:"🤯",cowboy_hat_face:"🤠",partying_face:"🥳",disguised_face:"🥸",sunglasses:"😎",nerd_face:"🤓",monocle_face:"🧐",confused:"😕",worried:"😟",slightly_frowning_face:"🙁",frowning_face:"☹️",open_mouth:"😮",hushed:"😯",astonished:"😲",flushed:"😳",pleading_face:"🥺",frowning:"😦",anguished:"😧",fearful:"😨",cold_sweat:"😰",disappointed_relieved:"😥",cry:"😢",sob:"😭",scream:"😱",confounded:"😖",persevere:"😣",disappointed:"😞",sweat:"😓",weary:"😩",tired_face:"😫",yawning_face:"🥱",triumph:"😤",rage:"😡",pout:"😡",angry:"😠",cursing_face:"🤬",smiling_imp:"😈",imp:"👿",skull:"💀",skull_and_crossbones:"☠️",hankey:"💩",poop:"💩",shit:"💩",clown_face:"🤡",japanese_ogre:"👹",japanese_goblin:"👺",ghost:"👻",alien:"👽",space_invader:"👾",robot:"🤖",smiley_cat:"😺",smile_cat:"😸",joy_cat:"😹",heart_eyes_cat:"😻",smirk_cat:"😼",kissing_cat:"😽",scream_cat:"🙀",crying_cat_face:"😿",pouting_cat:"😾",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",kiss:"💋",love_letter:"💌",cupid:"💘",gift_heart:"💝",sparkling_heart:"💖",heartpulse:"💗",heartbeat:"💓",revolving_hearts:"💞",two_hearts:"💕",heart_decoration:"💟",heavy_heart_exclamation:"❣️",broken_heart:"💔",heart:"❤️",orange_heart:"🧡",yellow_heart:"💛",green_heart:"💚",blue_heart:"💙",purple_heart:"💜",brown_heart:"🤎",black_heart:"🖤",white_heart:"🤍",anger:"💢",boom:"💥",collision:"💥",dizzy:"💫",sweat_drops:"💦",dash:"💨",hole:"🕳️",bomb:"💣",speech_balloon:"💬",eye_speech_bubble:"👁️‍🗨️",left_speech_bubble:"🗨️",right_anger_bubble:"🗯️",thought_balloon:"💭",zzz:"💤",wave:"👋",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐️",hand:"✋",raised_hand:"✋",vulcan_salute:"🖖",ok_hand:"👌",pinched_fingers:"🤌",pinching_hand:"🤏",v:"✌️",crossed_fingers:"🤞",love_you_gesture:"🤟",metal:"🤘",call_me_hand:"🤙",point_left:"👈",point_right:"👉",point_up_2:"👆",middle_finger:"🖕",fu:"🖕",point_down:"👇",point_up:"☝️","+1":"👍",thumbsup:"👍","-1":"👎",thumbsdown:"👎",fist_raised:"✊",fist:"✊",fist_oncoming:"👊",facepunch:"👊",punch:"👊",fist_left:"🤛",fist_right:"🤜",clap:"👏",raised_hands:"🙌",open_hands:"👐",palms_up_together:"🤲",handshake:"🤝",pray:"🙏",writing_hand:"✍️",nail_care:"💅",selfie:"🤳",muscle:"💪",mechanical_arm:"🦾",mechanical_leg:"🦿",leg:"🦵",foot:"🦶",ear:"👂",ear_with_hearing_aid:"🦻",nose:"👃",brain:"🧠",anatomical_heart:"🫀",lungs:"🫁",tooth:"🦷",bone:"🦴",eyes:"👀",eye:"👁️",tongue:"👅",lips:"👄",baby:"👶",child:"🧒",boy:"👦",girl:"👧",adult:"🧑",blond_haired_person:"👱",man:"👨",bearded_person:"🧔",red_haired_man:"👨‍🦰",curly_haired_man:"👨‍🦱",white_haired_man:"👨‍🦳",bald_man:"👨‍🦲",woman:"👩",red_haired_woman:"👩‍🦰",person_red_hair:"🧑‍🦰",curly_haired_woman:"👩‍🦱",person_curly_hair:"🧑‍🦱",white_haired_woman:"👩‍🦳",person_white_hair:"🧑‍🦳",bald_woman:"👩‍🦲",person_bald:"🧑‍🦲",blond_haired_woman:"👱‍♀️",blonde_woman:"👱‍♀️",blond_haired_man:"👱‍♂️",older_adult:"🧓",older_man:"👴",older_woman:"👵",frowning_person:"🙍",frowning_man:"🙍‍♂️",frowning_woman:"🙍‍♀️",pouting_face:"🙎",pouting_man:"🙎‍♂️",pouting_woman:"🙎‍♀️",no_good:"🙅",no_good_man:"🙅‍♂️",ng_man:"🙅‍♂️",no_good_woman:"🙅‍♀️",ng_woman:"🙅‍♀️",ok_person:"🙆",ok_man:"🙆‍♂️",ok_woman:"🙆‍♀️",tipping_hand_person:"💁",information_desk_person:"💁",tipping_hand_man:"💁‍♂️",sassy_man:"💁‍♂️",tipping_hand_woman:"💁‍♀️",sassy_woman:"💁‍♀️",raising_hand:"🙋",raising_hand_man:"🙋‍♂️",raising_hand_woman:"🙋‍♀️",deaf_person:"🧏",deaf_man:"🧏‍♂️",deaf_woman:"🧏‍♀️",bow:"🙇",bowing_man:"🙇‍♂️",bowing_woman:"🙇‍♀️",facepalm:"🤦",man_facepalming:"🤦‍♂️",woman_facepalming:"🤦‍♀️",shrug:"🤷",man_shrugging:"🤷‍♂️",woman_shrugging:"🤷‍♀️",health_worker:"🧑‍⚕️",man_health_worker:"👨‍⚕️",woman_health_worker:"👩‍⚕️",student:"🧑‍🎓",man_student:"👨‍🎓",woman_student:"👩‍🎓",teacher:"🧑‍🏫",man_teacher:"👨‍🏫",woman_teacher:"👩‍🏫",judge:"🧑‍⚖️",man_judge:"👨‍⚖️",woman_judge:"👩‍⚖️",farmer:"🧑‍🌾",man_farmer:"👨‍🌾",woman_farmer:"👩‍🌾",cook:"🧑‍🍳",man_cook:"👨‍🍳",woman_cook:"👩‍🍳",mechanic:"🧑‍🔧",man_mechanic:"👨‍🔧",woman_mechanic:"👩‍🔧",factory_worker:"🧑‍🏭",man_factory_worker:"👨‍🏭",woman_factory_worker:"👩‍🏭",office_worker:"🧑‍💼",man_office_worker:"👨‍💼",woman_office_worker:"👩‍💼",scientist:"🧑‍🔬",man_scientist:"👨‍🔬",woman_scientist:"👩‍🔬",technologist:"🧑‍💻",man_technologist:"👨‍💻",woman_technologist:"👩‍💻",singer:"🧑‍🎤",man_singer:"👨‍🎤",woman_singer:"👩‍🎤",artist:"🧑‍🎨",man_artist:"👨‍🎨",woman_artist:"👩‍🎨",pilot:"🧑‍✈️",man_pilot:"👨‍✈️",woman_pilot:"👩‍✈️",astronaut:"🧑‍🚀",man_astronaut:"👨‍🚀",woman_astronaut:"👩‍🚀",firefighter:"🧑‍🚒",man_firefighter:"👨‍🚒",woman_firefighter:"👩‍🚒",police_officer:"👮",cop:"👮",policeman:"👮‍♂️",policewoman:"👮‍♀️",detective:"🕵️",male_detective:"🕵️‍♂️",female_detective:"🕵️‍♀️",guard:"💂",guardsman:"💂‍♂️",guardswoman:"💂‍♀️",ninja:"🥷",construction_worker:"👷",construction_worker_man:"👷‍♂️",construction_worker_woman:"👷‍♀️",prince:"🤴",princess:"👸",person_with_turban:"👳",man_with_turban:"👳‍♂️",woman_with_turban:"👳‍♀️",man_with_gua_pi_mao:"👲",woman_with_headscarf:"🧕",person_in_tuxedo:"🤵",man_in_tuxedo:"🤵‍♂️",woman_in_tuxedo:"🤵‍♀️",person_with_veil:"👰",man_with_veil:"👰‍♂️",woman_with_veil:"👰‍♀️",bride_with_veil:"👰‍♀️",pregnant_woman:"🤰",breast_feeding:"🤱",woman_feeding_baby:"👩‍🍼",man_feeding_baby:"👨‍🍼",person_feeding_baby:"🧑‍🍼",angel:"👼",santa:"🎅",mrs_claus:"🤶",mx_claus:"🧑‍🎄",superhero:"🦸",superhero_man:"🦸‍♂️",superhero_woman:"🦸‍♀️",supervillain:"🦹",supervillain_man:"🦹‍♂️",supervillain_woman:"🦹‍♀️",mage:"🧙",mage_man:"🧙‍♂️",mage_woman:"🧙‍♀️",fairy:"🧚",fairy_man:"🧚‍♂️",fairy_woman:"🧚‍♀️",vampire:"🧛",vampire_man:"🧛‍♂️",vampire_woman:"🧛‍♀️",merperson:"🧜",merman:"🧜‍♂️",mermaid:"🧜‍♀️",elf:"🧝",elf_man:"🧝‍♂️",elf_woman:"🧝‍♀️",genie:"🧞",genie_man:"🧞‍♂️",genie_woman:"🧞‍♀️",zombie:"🧟",zombie_man:"🧟‍♂️",zombie_woman:"🧟‍♀️",massage:"💆",massage_man:"💆‍♂️",massage_woman:"💆‍♀️",haircut:"💇",haircut_man:"💇‍♂️",haircut_woman:"💇‍♀️",walking:"🚶",walking_man:"🚶‍♂️",walking_woman:"🚶‍♀️",standing_person:"🧍",standing_man:"🧍‍♂️",standing_woman:"🧍‍♀️",kneeling_person:"🧎",kneeling_man:"🧎‍♂️",kneeling_woman:"🧎‍♀️",person_with_probing_cane:"🧑‍🦯",man_with_probing_cane:"👨‍🦯",woman_with_probing_cane:"👩‍🦯",person_in_motorized_wheelchair:"🧑‍🦼",man_in_motorized_wheelchair:"👨‍🦼",woman_in_motorized_wheelchair:"👩‍🦼",person_in_manual_wheelchair:"🧑‍🦽",man_in_manual_wheelchair:"👨‍🦽",woman_in_manual_wheelchair:"👩‍🦽",runner:"🏃",running:"🏃",running_man:"🏃‍♂️",running_woman:"🏃‍♀️",woman_dancing:"💃",dancer:"💃",man_dancing:"🕺",business_suit_levitating:"🕴️",dancers:"👯",dancing_men:"👯‍♂️",dancing_women:"👯‍♀️",sauna_person:"🧖",sauna_man:"🧖‍♂️",sauna_woman:"🧖‍♀️",climbing:"🧗",climbing_man:"🧗‍♂️",climbing_woman:"🧗‍♀️",person_fencing:"🤺",horse_racing:"🏇",skier:"⛷️",snowboarder:"🏂",golfing:"🏌️",golfing_man:"🏌️‍♂️",golfing_woman:"🏌️‍♀️",surfer:"🏄",surfing_man:"🏄‍♂️",surfing_woman:"🏄‍♀️",rowboat:"🚣",rowing_man:"🚣‍♂️",rowing_woman:"🚣‍♀️",swimmer:"🏊",swimming_man:"🏊‍♂️",swimming_woman:"🏊‍♀️",bouncing_ball_person:"⛹️",bouncing_ball_man:"⛹️‍♂️",basketball_man:"⛹️‍♂️",bouncing_ball_woman:"⛹️‍♀️",basketball_woman:"⛹️‍♀️",weight_lifting:"🏋️",weight_lifting_man:"🏋️‍♂️",weight_lifting_woman:"🏋️‍♀️",bicyclist:"🚴",biking_man:"🚴‍♂️",biking_woman:"🚴‍♀️",mountain_bicyclist:"🚵",mountain_biking_man:"🚵‍♂️",mountain_biking_woman:"🚵‍♀️",cartwheeling:"🤸",man_cartwheeling:"🤸‍♂️",woman_cartwheeling:"🤸‍♀️",wrestling:"🤼",men_wrestling:"🤼‍♂️",women_wrestling:"🤼‍♀️",water_polo:"🤽",man_playing_water_polo:"🤽‍♂️",woman_playing_water_polo:"🤽‍♀️",handball_person:"🤾",man_playing_handball:"🤾‍♂️",woman_playing_handball:"🤾‍♀️",juggling_person:"🤹",man_juggling:"🤹‍♂️",woman_juggling:"🤹‍♀️",lotus_position:"🧘",lotus_position_man:"🧘‍♂️",lotus_position_woman:"🧘‍♀️",bath:"🛀",sleeping_bed:"🛌",people_holding_hands:"🧑‍🤝‍🧑",two_women_holding_hands:"👭",couple:"👫",two_men_holding_hands:"👬",couplekiss:"💏",couplekiss_man_woman:"👩‍❤️‍💋‍👨",couplekiss_man_man:"👨‍❤️‍💋‍👨",couplekiss_woman_woman:"👩‍❤️‍💋‍👩",couple_with_heart:"💑",couple_with_heart_woman_man:"👩‍❤️‍👨",couple_with_heart_man_man:"👨‍❤️‍👨",couple_with_heart_woman_woman:"👩‍❤️‍👩",family:"👪",family_man_woman_boy:"👨‍👩‍👦",family_man_woman_girl:"👨‍👩‍👧",family_man_woman_girl_boy:"👨‍👩‍👧‍👦",family_man_woman_boy_boy:"👨‍👩‍👦‍👦",family_man_woman_girl_girl:"👨‍👩‍👧‍👧",family_man_man_boy:"👨‍👨‍👦",family_man_man_girl:"👨‍👨‍👧",family_man_man_girl_boy:"👨‍👨‍👧‍👦",family_man_man_boy_boy:"👨‍👨‍👦‍👦",family_man_man_girl_girl:"👨‍👨‍👧‍👧",family_woman_woman_boy:"👩‍👩‍👦",family_woman_woman_girl:"👩‍👩‍👧",family_woman_woman_girl_boy:"👩‍👩‍👧‍👦",family_woman_woman_boy_boy:"👩‍👩‍👦‍👦",family_woman_woman_girl_girl:"👩‍👩‍👧‍👧",family_man_boy:"👨‍👦",family_man_boy_boy:"👨‍👦‍👦",family_man_girl:"👨‍👧",family_man_girl_boy:"👨‍👧‍👦",family_man_girl_girl:"👨‍👧‍👧",family_woman_boy:"👩‍👦",family_woman_boy_boy:"👩‍👦‍👦",family_woman_girl:"👩‍👧",family_woman_girl_boy:"👩‍👧‍👦",family_woman_girl_girl:"👩‍👧‍👧",speaking_head:"🗣️",bust_in_silhouette:"👤",busts_in_silhouette:"👥",people_hugging:"🫂",footprints:"👣",monkey_face:"🐵",monkey:"🐒",gorilla:"🦍",orangutan:"🦧",dog:"🐶",dog2:"🐕",guide_dog:"🦮",service_dog:"🐕‍🦺",poodle:"🐩",wolf:"🐺",fox_face:"🦊",raccoon:"🦝",cat:"🐱",cat2:"🐈",black_cat:"🐈‍⬛",lion:"🦁",tiger:"🐯",tiger2:"🐅",leopard:"🐆",horse:"🐴",racehorse:"🐎",unicorn:"🦄",zebra:"🦓",deer:"🦌",bison:"🦬",cow:"🐮",ox:"🐂",water_buffalo:"🐃",cow2:"🐄",pig:"🐷",pig2:"🐖",boar:"🐗",pig_nose:"🐽",ram:"🐏",sheep:"🐑",goat:"🐐",dromedary_camel:"🐪",camel:"🐫",llama:"🦙",giraffe:"🦒",elephant:"🐘",mammoth:"🦣",rhinoceros:"🦏",hippopotamus:"🦛",mouse:"🐭",mouse2:"🐁",rat:"🐀",hamster:"🐹",rabbit:"🐰",rabbit2:"🐇",chipmunk:"🐿️",beaver:"🦫",hedgehog:"🦔",bat:"🦇",bear:"🐻",polar_bear:"🐻‍❄️",koala:"🐨",panda_face:"🐼",sloth:"🦥",otter:"🦦",skunk:"🦨",kangaroo:"🦘",badger:"🦡",feet:"🐾",paw_prints:"🐾",turkey:"🦃",chicken:"🐔",rooster:"🐓",hatching_chick:"🐣",baby_chick:"🐤",hatched_chick:"🐥",bird:"🐦",penguin:"🐧",dove:"🕊️",eagle:"🦅",duck:"🦆",swan:"🦢",owl:"🦉",dodo:"🦤",feather:"🪶",flamingo:"🦩",peacock:"🦚",parrot:"🦜",frog:"🐸",crocodile:"🐊",turtle:"🐢",lizard:"🦎",snake:"🐍",dragon_face:"🐲",dragon:"🐉",sauropod:"🦕","t-rex":"🦖",whale:"🐳",whale2:"🐋",dolphin:"🐬",flipper:"🐬",seal:"🦭",fish:"🐟",tropical_fish:"🐠",blowfish:"🐡",shark:"🦈",octopus:"🐙",shell:"🐚",snail:"🐌",butterfly:"🦋",bug:"🐛",ant:"🐜",bee:"🐝",honeybee:"🐝",beetle:"🪲",lady_beetle:"🐞",cricket:"🦗",cockroach:"🪳",spider:"🕷️",spider_web:"🕸️",scorpion:"🦂",mosquito:"🦟",fly:"🪰",worm:"🪱",microbe:"🦠",bouquet:"💐",cherry_blossom:"🌸",white_flower:"💮",rosette:"🏵️",rose:"🌹",wilted_flower:"🥀",hibiscus:"🌺",sunflower:"🌻",blossom:"🌼",tulip:"🌷",seedling:"🌱",potted_plant:"🪴",evergreen_tree:"🌲",deciduous_tree:"🌳",palm_tree:"🌴",cactus:"🌵",ear_of_rice:"🌾",herb:"🌿",shamrock:"☘️",four_leaf_clover:"🍀",maple_leaf:"🍁",fallen_leaf:"🍂",leaves:"🍃",grapes:"🍇",melon:"🍈",watermelon:"🍉",tangerine:"🍊",orange:"🍊",mandarin:"🍊",lemon:"🍋",banana:"🍌",pineapple:"🍍",mango:"🥭",apple:"🍎",green_apple:"🍏",pear:"🍐",peach:"🍑",cherries:"🍒",strawberry:"🍓",blueberries:"🫐",kiwi_fruit:"🥝",tomato:"🍅",olive:"🫒",coconut:"🥥",avocado:"🥑",eggplant:"🍆",potato:"🥔",carrot:"🥕",corn:"🌽",hot_pepper:"🌶️",bell_pepper:"🫑",cucumber:"🥒",leafy_green:"🥬",broccoli:"🥦",garlic:"🧄",onion:"🧅",mushroom:"🍄",peanuts:"🥜",chestnut:"🌰",bread:"🍞",croissant:"🥐",baguette_bread:"🥖",flatbread:"🫓",pretzel:"🥨",bagel:"🥯",pancakes:"🥞",waffle:"🧇",cheese:"🧀",meat_on_bone:"🍖",poultry_leg:"🍗",cut_of_meat:"🥩",bacon:"🥓",hamburger:"🍔",fries:"🍟",pizza:"🍕",hotdog:"🌭",sandwich:"🥪",taco:"🌮",burrito:"🌯",tamale:"🫔",stuffed_flatbread:"🥙",falafel:"🧆",egg:"🥚",fried_egg:"🍳",shallow_pan_of_food:"🥘",stew:"🍲",fondue:"🫕",bowl_with_spoon:"🥣",green_salad:"🥗",popcorn:"🍿",butter:"🧈",salt:"🧂",canned_food:"🥫",bento:"🍱",rice_cracker:"🍘",rice_ball:"🍙",rice:"🍚",curry:"🍛",ramen:"🍜",spaghetti:"🍝",sweet_potato:"🍠",oden:"🍢",sushi:"🍣",fried_shrimp:"🍤",fish_cake:"🍥",moon_cake:"🥮",dango:"🍡",dumpling:"🥟",fortune_cookie:"🥠",takeout_box:"🥡",crab:"🦀",lobster:"🦞",shrimp:"🦐",squid:"🦑",oyster:"🦪",icecream:"🍦",shaved_ice:"🍧",ice_cream:"🍨",doughnut:"🍩",cookie:"🍪",birthday:"🎂",cake:"🍰",cupcake:"🧁",pie:"🥧",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",custard:"🍮",honey_pot:"🍯",baby_bottle:"🍼",milk_glass:"🥛",coffee:"☕",teapot:"🫖",tea:"🍵",sake:"🍶",champagne:"🍾",wine_glass:"🍷",cocktail:"🍸",tropical_drink:"🍹",beer:"🍺",beers:"🍻",clinking_glasses:"🥂",tumbler_glass:"🥃",cup_with_straw:"🥤",bubble_tea:"🧋",beverage_box:"🧃",mate:"🧉",ice_cube:"🧊",chopsticks:"🥢",plate_with_cutlery:"🍽️",fork_and_knife:"🍴",spoon:"🥄",hocho:"🔪",knife:"🔪",amphora:"🏺",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",globe_with_meridians:"🌐",world_map:"🗺️",japan:"🗾",compass:"🧭",mountain_snow:"🏔️",mountain:"⛰️",volcano:"🌋",mount_fuji:"🗻",camping:"🏕️",beach_umbrella:"🏖️",desert:"🏜️",desert_island:"🏝️",national_park:"🏞️",stadium:"🏟️",classical_building:"🏛️",building_construction:"🏗️",bricks:"🧱",rock:"🪨",wood:"🪵",hut:"🛖",houses:"🏘️",derelict_house:"🏚️",house:"🏠",house_with_garden:"🏡",office:"🏢",post_office:"🏣",european_post_office:"🏤",hospital:"🏥",bank:"🏦",hotel:"🏨",love_hotel:"🏩",convenience_store:"🏪",school:"🏫",department_store:"🏬",factory:"🏭",japanese_castle:"🏯",european_castle:"🏰",wedding:"💒",tokyo_tower:"🗼",statue_of_liberty:"🗽",church:"⛪",mosque:"🕌",hindu_temple:"🛕",synagogue:"🕍",shinto_shrine:"⛩️",kaaba:"🕋",fountain:"⛲",tent:"⛺",foggy:"🌁",night_with_stars:"🌃",cityscape:"🏙️",sunrise_over_mountains:"🌄",sunrise:"🌅",city_sunset:"🌆",city_sunrise:"🌇",bridge_at_night:"🌉",hotsprings:"♨️",carousel_horse:"🎠",ferris_wheel:"🎡",roller_coaster:"🎢",barber:"💈",circus_tent:"🎪",steam_locomotive:"🚂",railway_car:"🚃",bullettrain_side:"🚄",bullettrain_front:"🚅",train2:"🚆",metro:"🚇",light_rail:"🚈",station:"🚉",tram:"🚊",monorail:"🚝",mountain_railway:"🚞",train:"🚋",bus:"🚌",oncoming_bus:"🚍",trolleybus:"🚎",minibus:"🚐",ambulance:"🚑",fire_engine:"🚒",police_car:"🚓",oncoming_police_car:"🚔",taxi:"🚕",oncoming_taxi:"🚖",car:"🚗",red_car:"🚗",oncoming_automobile:"🚘",blue_car:"🚙",pickup_truck:"🛻",truck:"🚚",articulated_lorry:"🚛",tractor:"🚜",racing_car:"🏎️",motorcycle:"🏍️",motor_scooter:"🛵",manual_wheelchair:"🦽",motorized_wheelchair:"🦼",auto_rickshaw:"🛺",bike:"🚲",kick_scooter:"🛴",skateboard:"🛹",roller_skate:"🛼",busstop:"🚏",motorway:"🛣️",railway_track:"🛤️",oil_drum:"🛢️",fuelpump:"⛽",rotating_light:"🚨",traffic_light:"🚥",vertical_traffic_light:"🚦",stop_sign:"🛑",construction:"🚧",anchor:"⚓",boat:"⛵",sailboat:"⛵",canoe:"🛶",speedboat:"🚤",passenger_ship:"🛳️",ferry:"⛴️",motor_boat:"🛥️",ship:"🚢",airplane:"✈️",small_airplane:"🛩️",flight_departure:"🛫",flight_arrival:"🛬",parachute:"🪂",seat:"💺",helicopter:"🚁",suspension_railway:"🚟",mountain_cableway:"🚠",aerial_tramway:"🚡",artificial_satellite:"🛰️",rocket:"🚀",flying_saucer:"🛸",bellhop_bell:"🛎️",luggage:"🧳",hourglass:"⌛",hourglass_flowing_sand:"⏳",watch:"⌚",alarm_clock:"⏰",stopwatch:"⏱️",timer_clock:"⏲️",mantelpiece_clock:"🕰️",clock12:"🕛",clock1230:"🕧",clock1:"🕐",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",new_moon:"🌑",waxing_crescent_moon:"🌒",first_quarter_moon:"🌓",moon:"🌔",waxing_gibbous_moon:"🌔",full_moon:"🌕",waning_gibbous_moon:"🌖",last_quarter_moon:"🌗",waning_crescent_moon:"🌘",crescent_moon:"🌙",new_moon_with_face:"🌚",first_quarter_moon_with_face:"🌛",last_quarter_moon_with_face:"🌜",thermometer:"🌡️",sunny:"☀️",full_moon_with_face:"🌝",sun_with_face:"🌞",ringed_planet:"🪐",star:"⭐",star2:"🌟",stars:"🌠",milky_way:"🌌",cloud:"☁️",partly_sunny:"⛅",cloud_with_lightning_and_rain:"⛈️",sun_behind_small_cloud:"🌤️",sun_behind_large_cloud:"🌥️",sun_behind_rain_cloud:"🌦️",cloud_with_rain:"🌧️",cloud_with_snow:"🌨️",cloud_with_lightning:"🌩️",tornado:"🌪️",fog:"🌫️",wind_face:"🌬️",cyclone:"🌀",rainbow:"🌈",closed_umbrella:"🌂",open_umbrella:"☂️",umbrella:"☔",parasol_on_ground:"⛱️",zap:"⚡",snowflake:"❄️",snowman_with_snow:"☃️",snowman:"⛄",comet:"☄️",fire:"🔥",droplet:"💧",ocean:"🌊",jack_o_lantern:"🎃",christmas_tree:"🎄",fireworks:"🎆",sparkler:"🎇",firecracker:"🧨",sparkles:"✨",balloon:"🎈",tada:"🎉",confetti_ball:"🎊",tanabata_tree:"🎋",bamboo:"🎍",dolls:"🎎",flags:"🎏",wind_chime:"🎐",rice_scene:"🎑",red_envelope:"🧧",ribbon:"🎀",gift:"🎁",reminder_ribbon:"🎗️",tickets:"🎟️",ticket:"🎫",medal_military:"🎖️",trophy:"🏆",medal_sports:"🏅","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉",soccer:"⚽",baseball:"⚾",softball:"🥎",basketball:"🏀",volleyball:"🏐",football:"🏈",rugby_football:"🏉",tennis:"🎾",flying_disc:"🥏",bowling:"🎳",cricket_game:"🏏",field_hockey:"🏑",ice_hockey:"🏒",lacrosse:"🥍",ping_pong:"🏓",badminton:"🏸",boxing_glove:"🥊",martial_arts_uniform:"🥋",goal_net:"🥅",golf:"⛳",ice_skate:"⛸️",fishing_pole_and_fish:"🎣",diving_mask:"🤿",running_shirt_with_sash:"🎽",ski:"🎿",sled:"🛷",curling_stone:"🥌",dart:"🎯",yo_yo:"🪀",kite:"🪁","8ball":"🎱",crystal_ball:"🔮",magic_wand:"🪄",nazar_amulet:"🧿",video_game:"🎮",joystick:"🕹️",slot_machine:"🎰",game_die:"🎲",jigsaw:"🧩",teddy_bear:"🧸",pinata:"🪅",nesting_dolls:"🪆",spades:"♠️",hearts:"♥️",diamonds:"♦️",clubs:"♣️",chess_pawn:"♟️",black_joker:"🃏",mahjong:"🀄",flower_playing_cards:"🎴",performing_arts:"🎭",framed_picture:"🖼️",art:"🎨",thread:"🧵",sewing_needle:"🪡",yarn:"🧶",knot:"🪢",eyeglasses:"👓",dark_sunglasses:"🕶️",goggles:"🥽",lab_coat:"🥼",safety_vest:"🦺",necktie:"👔",shirt:"👕",tshirt:"👕",jeans:"👖",scarf:"🧣",gloves:"🧤",coat:"🧥",socks:"🧦",dress:"👗",kimono:"👘",sari:"🥻",one_piece_swimsuit:"🩱",swim_brief:"🩲",shorts:"🩳",bikini:"👙",womans_clothes:"👚",purse:"👛",handbag:"👜",pouch:"👝",shopping:"🛍️",school_satchel:"🎒",thong_sandal:"🩴",mans_shoe:"👞",shoe:"👞",athletic_shoe:"👟",hiking_boot:"🥾",flat_shoe:"🥿",high_heel:"👠",sandal:"👡",ballet_shoes:"🩰",boot:"👢",crown:"👑",womans_hat:"👒",tophat:"🎩",mortar_board:"🎓",billed_cap:"🧢",military_helmet:"🪖",rescue_worker_helmet:"⛑️",prayer_beads:"📿",lipstick:"💄",ring:"💍",gem:"💎",mute:"🔇",speaker:"🔈",sound:"🔉",loud_sound:"🔊",loudspeaker:"📢",mega:"📣",postal_horn:"📯",bell:"🔔",no_bell:"🔕",musical_score:"🎼",musical_note:"🎵",notes:"🎶",studio_microphone:"🎙️",level_slider:"🎚️",control_knobs:"🎛️",microphone:"🎤",headphones:"🎧",radio:"📻",saxophone:"🎷",accordion:"🪗",guitar:"🎸",musical_keyboard:"🎹",trumpet:"🎺",violin:"🎻",banjo:"🪕",drum:"🥁",long_drum:"🪘",iphone:"📱",calling:"📲",phone:"☎️",telephone:"☎️",telephone_receiver:"📞",pager:"📟",fax:"📠",battery:"🔋",electric_plug:"🔌",computer:"💻",desktop_computer:"🖥️",printer:"🖨️",keyboard:"⌨️",computer_mouse:"🖱️",trackball:"🖲️",minidisc:"💽",floppy_disk:"💾",cd:"💿",dvd:"📀",abacus:"🧮",movie_camera:"🎥",film_strip:"🎞️",film_projector:"📽️",clapper:"🎬",tv:"📺",camera:"📷",camera_flash:"📸",video_camera:"📹",vhs:"📼",mag:"🔍",mag_right:"🔎",candle:"🕯️",bulb:"💡",flashlight:"🔦",izakaya_lantern:"🏮",lantern:"🏮",diya_lamp:"🪔",notebook_with_decorative_cover:"📔",closed_book:"📕",book:"📖",open_book:"📖",green_book:"📗",blue_book:"📘",orange_book:"📙",books:"📚",notebook:"📓",ledger:"📒",page_with_curl:"📃",scroll:"📜",page_facing_up:"📄",newspaper:"📰",newspaper_roll:"🗞️",bookmark_tabs:"📑",bookmark:"🔖",label:"🏷️",moneybag:"💰",coin:"🪙",yen:"💴",dollar:"💵",euro:"💶",pound:"💷",money_with_wings:"💸",credit_card:"💳",receipt:"🧾",chart:"💹",envelope:"✉️",email:"📧","e-mail":"📧",incoming_envelope:"📨",envelope_with_arrow:"📩",outbox_tray:"📤",inbox_tray:"📥",package:"📦",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",postbox:"📮",ballot_box:"🗳️",pencil2:"✏️",black_nib:"✒️",fountain_pen:"🖋️",pen:"🖊️",paintbrush:"🖌️",crayon:"🖍️",memo:"📝",pencil:"📝",briefcase:"💼",file_folder:"📁",open_file_folder:"📂",card_index_dividers:"🗂️",date:"📅",calendar:"📆",spiral_notepad:"🗒️",spiral_calendar:"🗓️",card_index:"📇",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",bar_chart:"📊",clipboard:"📋",pushpin:"📌",round_pushpin:"📍",paperclip:"📎",paperclips:"🖇️",straight_ruler:"📏",triangular_ruler:"📐",scissors:"✂️",card_file_box:"🗃️",file_cabinet:"🗄️",wastebasket:"🗑️",lock:"🔒",unlock:"🔓",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",old_key:"🗝️",hammer:"🔨",axe:"🪓",pick:"⛏️",hammer_and_pick:"⚒️",hammer_and_wrench:"🛠️",dagger:"🗡️",crossed_swords:"⚔️",gun:"🔫",boomerang:"🪃",bow_and_arrow:"🏹",shield:"🛡️",carpentry_saw:"🪚",wrench:"🔧",screwdriver:"🪛",nut_and_bolt:"🔩",gear:"⚙️",clamp:"🗜️",balance_scale:"⚖️",probing_cane:"🦯",link:"🔗",chains:"⛓️",hook:"🪝",toolbox:"🧰",magnet:"🧲",ladder:"🪜",alembic:"⚗️",test_tube:"🧪",petri_dish:"🧫",dna:"🧬",microscope:"🔬",telescope:"🔭",satellite:"📡",syringe:"💉",drop_of_blood:"🩸",pill:"💊",adhesive_bandage:"🩹",stethoscope:"🩺",door:"🚪",elevator:"🛗",mirror:"🪞",window:"🪟",bed:"🛏️",couch_and_lamp:"🛋️",chair:"🪑",toilet:"🚽",plunger:"🪠",shower:"🚿",bathtub:"🛁",mouse_trap:"🪤",razor:"🪒",lotion_bottle:"🧴",safety_pin:"🧷",broom:"🧹",basket:"🧺",roll_of_paper:"🧻",bucket:"🪣",soap:"🧼",toothbrush:"🪥",sponge:"🧽",fire_extinguisher:"🧯",shopping_cart:"🛒",smoking:"🚬",coffin:"⚰️",headstone:"🪦",funeral_urn:"⚱️",moyai:"🗿",placard:"🪧",atm:"🏧",put_litter_in_its_place:"🚮",potable_water:"🚰",wheelchair:"♿",mens:"🚹",womens:"🚺",restroom:"🚻",baby_symbol:"🚼",wc:"🚾",passport_control:"🛂",customs:"🛃",baggage_claim:"🛄",left_luggage:"🛅",warning:"⚠️",children_crossing:"🚸",no_entry:"⛔",no_entry_sign:"🚫",no_bicycles:"🚳",no_smoking:"🚭",do_not_litter:"🚯","non-potable_water":"🚱",no_pedestrians:"🚷",no_mobile_phones:"📵",underage:"🔞",radioactive:"☢️",biohazard:"☣️",arrow_up:"⬆️",arrow_upper_right:"↗️",arrow_right:"➡️",arrow_lower_right:"↘️",arrow_down:"⬇️",arrow_lower_left:"↙️",arrow_left:"⬅️",arrow_upper_left:"↖️",arrow_up_down:"↕️",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",arrow_right_hook:"↪️",arrow_heading_up:"⤴️",arrow_heading_down:"⤵️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",back:"🔙",end:"🔚",on:"🔛",soon:"🔜",top:"🔝",place_of_worship:"🛐",atom_symbol:"⚛️",om:"🕉️",star_of_david:"✡️",wheel_of_dharma:"☸️",yin_yang:"☯️",latin_cross:"✝️",orthodox_cross:"☦️",star_and_crescent:"☪️",peace_symbol:"☮️",menorah:"🕎",six_pointed_star:"🔯",aries:"♈",taurus:"♉",gemini:"♊",cancer:"♋",leo:"♌",virgo:"♍",libra:"♎",scorpius:"♏",sagittarius:"♐",capricorn:"♑",aquarius:"♒",pisces:"♓",ophiuchus:"⛎",twisted_rightwards_arrows:"🔀",repeat:"🔁",repeat_one:"🔂",arrow_forward:"▶️",fast_forward:"⏩",next_track_button:"⏭️",play_or_pause_button:"⏯️",arrow_backward:"◀️",rewind:"⏪",previous_track_button:"⏮️",arrow_up_small:"🔼",arrow_double_up:"⏫",arrow_down_small:"🔽",arrow_double_down:"⏬",pause_button:"⏸️",stop_button:"⏹️",record_button:"⏺️",eject_button:"⏏️",cinema:"🎦",low_brightness:"🔅",high_brightness:"🔆",signal_strength:"📶",vibration_mode:"📳",mobile_phone_off:"📴",female_sign:"♀️",male_sign:"♂️",transgender_symbol:"⚧️",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",infinity:"♾️",bangbang:"‼️",interrobang:"⁉️",question:"❓",grey_question:"❔",grey_exclamation:"❕",exclamation:"❗",heavy_exclamation_mark:"❗",wavy_dash:"〰️",currency_exchange:"💱",heavy_dollar_sign:"💲",medical_symbol:"⚕️",recycle:"♻️",fleur_de_lis:"⚜️",trident:"🔱",name_badge:"📛",beginner:"🔰",o:"⭕",white_check_mark:"✅",ballot_box_with_check:"☑️",heavy_check_mark:"✔️",x:"❌",negative_squared_cross_mark:"❎",curly_loop:"➰",loop:"➿",part_alternation_mark:"〽️",eight_spoked_asterisk:"✳️",eight_pointed_black_star:"✴️",sparkle:"❇️",copyright:"©️",registered:"®️",tm:"™️",hash:"#️⃣",asterisk:"*️⃣",zero:"0️⃣",one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣",six:"6️⃣",seven:"7️⃣",eight:"8️⃣",nine:"9️⃣",keycap_ten:"🔟",capital_abcd:"🔠",abcd:"🔡",symbols:"🔣",abc:"🔤",a:"🅰️",ab:"🆎",b:"🅱️",cl:"🆑",cool:"🆒",free:"🆓",information_source:"ℹ️",id:"🆔",m:"Ⓜ️",new:"🆕",ng:"🆖",o2:"🅾️",ok:"🆗",parking:"🅿️",sos:"🆘",up:"🆙",vs:"🆚",koko:"🈁",sa:"🈂️",u6708:"🈷️",u6709:"🈶",u6307:"🈯",ideograph_advantage:"🉐",u5272:"🈹",u7121:"🈚",u7981:"🈲",accept:"🉑",u7533:"🈸",u5408:"🈴",u7a7a:"🈳",congratulations:"㊗️",secret:"㊙️",u55b6:"🈺",u6e80:"🈵",red_circle:"🔴",orange_circle:"🟠",yellow_circle:"🟡",green_circle:"🟢",large_blue_circle:"🔵",purple_circle:"🟣",brown_circle:"🟤",black_circle:"⚫",white_circle:"⚪",red_square:"🟥",orange_square:"🟧",yellow_square:"🟨",green_square:"🟩",blue_square:"🟦",purple_square:"🟪",brown_square:"🟫",black_large_square:"⬛",white_large_square:"⬜",black_medium_square:"◼️",white_medium_square:"◻️",black_medium_small_square:"◾",white_medium_small_square:"◽",black_small_square:"▪️",white_small_square:"▫️",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹",small_red_triangle:"🔺",small_red_triangle_down:"🔻",diamond_shape_with_a_dot_inside:"💠",radio_button:"🔘",white_square_button:"🔳",black_square_button:"🔲",checkered_flag:"🏁",triangular_flag_on_post:"🚩",crossed_flags:"🎌",black_flag:"🏴",white_flag:"🏳️",rainbow_flag:"🏳️‍🌈",transgender_flag:"🏳️‍⚧️",pirate_flag:"🏴‍☠️",ascension_island:"🇦🇨",andorra:"🇦🇩",united_arab_emirates:"🇦🇪",afghanistan:"🇦🇫",antigua_barbuda:"🇦🇬",anguilla:"🇦🇮",albania:"🇦🇱",armenia:"🇦🇲",angola:"🇦🇴",antarctica:"🇦🇶",argentina:"🇦🇷",american_samoa:"🇦🇸",austria:"🇦🇹",australia:"🇦🇺",aruba:"🇦🇼",aland_islands:"🇦🇽",azerbaijan:"🇦🇿",bosnia_herzegovina:"🇧🇦",barbados:"🇧🇧",bangladesh:"🇧🇩",belgium:"🇧🇪",burkina_faso:"🇧🇫",bulgaria:"🇧🇬",bahrain:"🇧🇭",burundi:"🇧🇮",benin:"🇧🇯",st_barthelemy:"🇧🇱",bermuda:"🇧🇲",brunei:"🇧🇳",bolivia:"🇧🇴",caribbean_netherlands:"🇧🇶",brazil:"🇧🇷",bahamas:"🇧🇸",bhutan:"🇧🇹",bouvet_island:"🇧🇻",botswana:"🇧🇼",belarus:"🇧🇾",belize:"🇧🇿",canada:"🇨🇦",cocos_islands:"🇨🇨",congo_kinshasa:"🇨🇩",central_african_republic:"🇨🇫",congo_brazzaville:"🇨🇬",switzerland:"🇨🇭",cote_divoire:"🇨🇮",cook_islands:"🇨🇰",chile:"🇨🇱",cameroon:"🇨🇲",cn:"🇨🇳",colombia:"🇨🇴",clipperton_island:"🇨🇵",costa_rica:"🇨🇷",cuba:"🇨🇺",cape_verde:"🇨🇻",curacao:"🇨🇼",christmas_island:"🇨🇽",cyprus:"🇨🇾",czech_republic:"🇨🇿",de:"🇩🇪",diego_garcia:"🇩🇬",djibouti:"🇩🇯",denmark:"🇩🇰",dominica:"🇩🇲",dominican_republic:"🇩🇴",algeria:"🇩🇿",ceuta_melilla:"🇪🇦",ecuador:"🇪🇨",estonia:"🇪🇪",egypt:"🇪🇬",western_sahara:"🇪🇭",eritrea:"🇪🇷",es:"🇪🇸",ethiopia:"🇪🇹",eu:"🇪🇺",european_union:"🇪🇺",finland:"🇫🇮",fiji:"🇫🇯",falkland_islands:"🇫🇰",micronesia:"🇫🇲",faroe_islands:"🇫🇴",fr:"🇫🇷",gabon:"🇬🇦",gb:"🇬🇧",uk:"🇬🇧",grenada:"🇬🇩",georgia:"🇬🇪",french_guiana:"🇬🇫",guernsey:"🇬🇬",ghana:"🇬🇭",gibraltar:"🇬🇮",greenland:"🇬🇱",gambia:"🇬🇲",guinea:"🇬🇳",guadeloupe:"🇬🇵",equatorial_guinea:"🇬🇶",greece:"🇬🇷",south_georgia_south_sandwich_islands:"🇬🇸",guatemala:"🇬🇹",guam:"🇬🇺",guinea_bissau:"🇬🇼",guyana:"🇬🇾",hong_kong:"🇭🇰",heard_mcdonald_islands:"🇭🇲",honduras:"🇭🇳",croatia:"🇭🇷",haiti:"🇭🇹",hungary:"🇭🇺",canary_islands:"🇮🇨",indonesia:"🇮🇩",ireland:"🇮🇪",israel:"🇮🇱",isle_of_man:"🇮🇲",india:"🇮🇳",british_indian_ocean_territory:"🇮🇴",iraq:"🇮🇶",iran:"🇮🇷",iceland:"🇮🇸",it:"🇮🇹",jersey:"🇯🇪",jamaica:"🇯🇲",jordan:"🇯🇴",jp:"🇯🇵",kenya:"🇰🇪",kyrgyzstan:"🇰🇬",cambodia:"🇰🇭",kiribati:"🇰🇮",comoros:"🇰🇲",st_kitts_nevis:"🇰🇳",north_korea:"🇰🇵",kr:"🇰🇷",kuwait:"🇰🇼",cayman_islands:"🇰🇾",kazakhstan:"🇰🇿",laos:"🇱🇦",lebanon:"🇱🇧",st_lucia:"🇱🇨",liechtenstein:"🇱🇮",sri_lanka:"🇱🇰",liberia:"🇱🇷",lesotho:"🇱🇸",lithuania:"🇱🇹",luxembourg:"🇱🇺",latvia:"🇱🇻",libya:"🇱🇾",morocco:"🇲🇦",monaco:"🇲🇨",moldova:"🇲🇩",montenegro:"🇲🇪",st_martin:"🇲🇫",madagascar:"🇲🇬",marshall_islands:"🇲🇭",macedonia:"🇲🇰",mali:"🇲🇱",myanmar:"🇲🇲",mongolia:"🇲🇳",macau:"🇲🇴",northern_mariana_islands:"🇲🇵",martinique:"🇲🇶",mauritania:"🇲🇷",montserrat:"🇲🇸",malta:"🇲🇹",mauritius:"🇲🇺",maldives:"🇲🇻",malawi:"🇲🇼",mexico:"🇲🇽",malaysia:"🇲🇾",mozambique:"🇲🇿",namibia:"🇳🇦",new_caledonia:"🇳🇨",niger:"🇳🇪",norfolk_island:"🇳🇫",nigeria:"🇳🇬",nicaragua:"🇳🇮",netherlands:"🇳🇱",norway:"🇳🇴",nepal:"🇳🇵",nauru:"🇳🇷",niue:"🇳🇺",new_zealand:"🇳🇿",oman:"🇴🇲",panama:"🇵🇦",peru:"🇵🇪",french_polynesia:"🇵🇫",papua_new_guinea:"🇵🇬",philippines:"🇵🇭",pakistan:"🇵🇰",poland:"🇵🇱",st_pierre_miquelon:"🇵🇲",pitcairn_islands:"🇵🇳",puerto_rico:"🇵🇷",palestinian_territories:"🇵🇸",portugal:"🇵🇹",palau:"🇵🇼",paraguay:"🇵🇾",qatar:"🇶🇦",reunion:"🇷🇪",romania:"🇷🇴",serbia:"🇷🇸",ru:"🇷🇺",rwanda:"🇷🇼",saudi_arabia:"🇸🇦",solomon_islands:"🇸🇧",seychelles:"🇸🇨",sudan:"🇸🇩",sweden:"🇸🇪",singapore:"🇸🇬",st_helena:"🇸🇭",slovenia:"🇸🇮",svalbard_jan_mayen:"🇸🇯",slovakia:"🇸🇰",sierra_leone:"🇸🇱",san_marino:"🇸🇲",senegal:"🇸🇳",somalia:"🇸🇴",suriname:"🇸🇷",south_sudan:"🇸🇸",sao_tome_principe:"🇸🇹",el_salvador:"🇸🇻",sint_maarten:"🇸🇽",syria:"🇸🇾",swaziland:"🇸🇿",tristan_da_cunha:"🇹🇦",turks_caicos_islands:"🇹🇨",chad:"🇹🇩",french_southern_territories:"🇹🇫",togo:"🇹🇬",thailand:"🇹🇭",tajikistan:"🇹🇯",tokelau:"🇹🇰",timor_leste:"🇹🇱",turkmenistan:"🇹🇲",tunisia:"🇹🇳",tonga:"🇹🇴",tr:"🇹🇷",trinidad_tobago:"🇹🇹",tuvalu:"🇹🇻",taiwan:"🇹🇼",tanzania:"🇹🇿",ukraine:"🇺🇦",uganda:"🇺🇬",us_outlying_islands:"🇺🇲",united_nations:"🇺🇳",us:"🇺🇸",uruguay:"🇺🇾",uzbekistan:"🇺🇿",vatican_city:"🇻🇦",st_vincent_grenadines:"🇻🇨",venezuela:"🇻🇪",british_virgin_islands:"🇻🇬",us_virgin_islands:"🇻🇮",vietnam:"🇻🇳",vanuatu:"🇻🇺",wallis_futuna:"🇼🇫",samoa:"🇼🇸",kosovo:"🇽🇰",yemen:"🇾🇪",mayotte:"🇾🇹",south_africa:"🇿🇦",zambia:"🇿🇲",zimbabwe:"🇿🇼",england:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",scotland:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",wales:"🏴󠁧󠁢󠁷󠁬󠁳󠁿"};var Co=R((e=>{var t;const n=T(It),a=e,{size:r,target:o,attachment:i,isServerChannel:c,animate:u}=a,p=d(a,["size","target","attachment","isServerChannel","animate"]),h=n.generateFileURL(null!=(t=null==o?void 0:o.icon)?t:i,{max_side:256},u),m=c||o&&("TextChannel"===o.channel_type||"VoiceChannel"===o.channel_type);if(void 0===h&&m)return"VoiceChannel"===(null==o?void 0:o.channel_type)?g(xe,{size:r}):g(Ce,{size:r});let _="--border-radius-channel-icon";return m&&(_=void 0),g(tn,l(s({},p),{width:r,height:r,loading:"lazy","aria-hidden":"true",borderRadius:_,src:null!=h?h:"/revite/refs/pull/10/merge/assets/group.c7824522.png"}))}));function Eo(e,t){const[n,a]=m({type:"none"}),[r,o]=m(!1),i=Pt();function c(e){if(e.selectionStart===e.selectionEnd){const t=e.selectionStart,n=e.value.slice(0,t),a=/\w/;let r=n.length-1;if("@"===n[r])return["user","",r];if("#"===n[r])return["channel","",r];for(;r>=0&&a.test(n[r]);)r--;if(-1===r)return;const o=n[r];if(":"===o||"@"===o||"#"===o){const e=n.slice(r+1,n.length);if(e.length>0)return["#"===o?"channel":":"===o?"emoji":"user",e.toLowerCase(),r+1]}}}function d(e){var r;const o=c(e.currentTarget);if(o){const[e,s]=o,l=new RegExp(s,"i");if("emoji"===e){const e=Object.keys(xo).filter((e=>e.match(l))).splice(0,5);if(e.length>0){const t="none"!==n.type?n.selected:0;return void a({type:"emoji",matches:e,selected:Math.min(t,e.length-1),within:!1})}}if("user"===e&&(null==t?void 0:t.users)){let e=[];switch(t.users.type){case"all":e=[...i.users.values()];break;case"channel":{const n=i.channels.get(t.users.id);switch(null==n?void 0:n.channel_type){case"Group":case"DirectMessage":e=n.recipients.filter((e=>void 0!==e));break;case"TextChannel":{const t=n.server_id;e=[...i.members.keys()].map((e=>JSON.parse(e))).filter((e=>e.server===t)).map((e=>i.users.get(e.user))).filter((e=>void 0!==e))}break;default:return}}}e=e.filter((e=>"00000000000000000000000000"!==e._id));const r=(s.length>0?e.filter((e=>e.username.toLowerCase().match(l))):e).splice(0,5).filter((e=>void 0!==e));if(r.length>0){const e="none"!==n.type?n.selected:0;return void a({type:"user",matches:r,selected:Math.min(e,r.length-1),within:!1})}}if("channel"===e&&(null==t?void 0:t.channels)){const e=null==(r=i.servers.get(t.channels.server))?void 0:r.channels.filter((e=>void 0!==e)),o=(s.length>0?e.filter((e=>e.name.toLowerCase().match(l))):e).splice(0,5).filter((e=>void 0!==e));if(o.length>0){const e="none"!==n.type?n.selected:0;return void a({type:"channel",matches:o,selected:Math.min(e,o.length-1),within:!1})}}}"none"!==n.type&&a({type:"none"})}function u(t){if("none"!==n.type){const a=c(t);if(a){const[r,o,i]=a,s=t.value.split("");"emoji"===n.type?s.splice(i,o.length,n.matches[n.selected],": "):"user"===n.type?s.splice(i-1,o.length+1,"<@",n.matches[n.selected]._id,"> "):s.splice(i-1,o.length+1,"<#",n.matches[n.selected]._id,"> "),e(s.join(""))}}}return{state:r?n:{type:"none"},setState:a,onClick:function(e){e.preventDefault(),u(document.querySelector("#message")),o(!1)},onChange:d,onKeyUp:function(e){null!==e.currentTarget&&d(e)},onKeyDown:function(e){if(r&&"none"!==n.type){if("ArrowUp"===e.key)return e.preventDefault(),n.selected>0&&a(l(s({},n),{selected:n.selected-1})),!0;if("ArrowDown"===e.key)return e.preventDefault(),n.selected<n.matches.length-1&&a(l(s({},n),{selected:n.selected+1})),!0;if("Enter"===e.key||"Tab"===e.key)return e.preventDefault(),u(e.currentTarget),!0}return!1},onFocus:function(e){o(!0),d(e)},onBlur:function(){"none"!==n.type&&n.within||o(!1)}}}const So=A.div`
    position: relative;

    > div {
        bottom: 0;
        width: 100%;
        position: absolute;
        background: var(--primary-header);
    }

    button {
        gap: 8px;
        margin: 4px;
        padding: 6px;
        border: none;
        display: flex;
        font-size: 1em;
        cursor: pointer;
        align-items: center;
        flex-direction: row;
        font-family: inherit;
        background: transparent;
        color: var(--foreground);
        width: calc(100% - 12px);
        border-radius: var(--border-radius);

        span {
            display: grid;
            place-items: center;
        }

        &.active {
            background: var(--primary-background);
        }
    }

    ${e=>e.detached&&k`
            bottom: 8px;

            > div {
                border-radius: var(--border-radius);
            }
        `}
`;function To({detached:e,state:t,setState:n,onClick:a}){return g(So,{detached:e},g("div",null,"emoji"===t.type&&t.matches.map(((e,r)=>g("button",{key:e,className:r===t.selected?"active":"",onMouseEnter:()=>(r!==t.selected||!t.within)&&n(l(s({},t),{selected:r,within:!0})),onMouseLeave:()=>t.within&&n(l(s({},t),{within:!1})),onClick:a},g(Ye,{emoji:xo[e],size:20}),":",e,":"))),"user"===t.type&&t.matches.map(((e,r)=>g("button",{key:e,className:r===t.selected?"active":"",onMouseEnter:()=>(r!==t.selected||!t.within)&&n(l(s({},t),{selected:r,within:!0})),onMouseLeave:()=>t.within&&n(l(s({},t),{within:!1})),onClick:a},g(rn,{size:24,target:e,status:!0}),e.username))),"channel"===t.type&&t.matches.map(((e,r)=>g("button",{key:e,className:r===t.selected?"active":"",onMouseEnter:()=>(r!==t.selected||!t.within)&&n(l(s({},t),{selected:r,within:!0})),onMouseLeave:()=>t.within&&n(l(s({},t),{within:!1})),onClick:a},g(Co,{size:24,target:e}),e.name)))))}const Oo=A.div`
    display: flex;
    flex-direction: column;

    textarea {
        resize: none;
        padding: 12px;
        white-space: pre-wrap;
        font-size: var(--text-size);
        border-radius: var(--border-radius);
        background: var(--secondary-header);
    }

    .caption {
        padding: 2px;
        font-size: 11px;
        color: var(--tertiary-foreground);

        a {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;function zo({message:e,finish:t}){var n;const[a,r]=m(null!=(n=e.content)?n:""),{focusTaken:o}=T(ni),{openScreen:i}=oi();async function l(){t(),0===a.length?i({id:"special_prompt",type:"delete_message",target:e}):a!==e.content&&await e.edit({content:a})}_((()=>{function e(e){"Escape"!==e.key||o||t()}return document.body.addEventListener("keyup",e),()=>document.body.removeEventListener("keyup",e)}),[o,t]);const c=Eo((e=>r(null!=e?e:"")),{users:{type:"all"}}),{onChange:u,onKeyUp:p,onKeyDown:h,onFocus:f,onBlur:v}=c,b=d(c,["onChange","onKeyUp","onKeyDown","onFocus","onBlur"]);return g(Oo,null,g(To,s({detached:!0},b)),g(ko,{forceFocus:!0,maxRows:10,value:a,maxLength:2e3,padding:"var(--message-box-padding)",onChange:e=>{u(e),r(e.currentTarget.value)},onKeyDown:e=>{h(e)||e.shiftKey||"Enter"!==e.key||cn||(e.preventDefault(),l())},onKeyUp:p,onFocus:f,onBlur:v}),g("span",{className:"caption"},"escape to ",g("a",{onClick:t},"cancel")," · enter to"," ",g("a",{onClick:l},"save")))}const No=A.div`
    font-size: 0.8em;
    margin-top: 6px;
    padding: 4px 64px;
    color: var(--tertiary-foreground);

    &:hover {
        background: var(--hover);
    }
`;var Mo=Ee(De(R((({renderer:e,queue:t,highlight:n})=>{var a;const r=Pt(),o=r.user._id,[i,c]=m(void 0),d=()=>{c(void 0),tt("TextArea","focus","message")};_((()=>{const t=[et("MessageRenderer","edit_last",(function(){if("RENDER"===e.state)for(let t=e.messages.length-1;t>=0;t--)if(e.messages[t].author_id===o)return c(e.messages[t]._id),void tt("MessageArea","jump_to_bottom")})),et("MessageRenderer","edit_message",c)];return()=>t.forEach((e=>e()))}),[e.messages,e.state,o]);const u=[];let p;e.atTop?u.push(g(go,{channel:e.channel})):u.push(g(Dn,null,g(Ct,{type:"ring"})));let h=!0;function f(e,t,n,a){const r=Y(e),o=new Date(r),i=Y(n),s=new Date(i);o.getFullYear()===s.getFullYear()&&o.getMonth()===s.getMonth()&&o.getDate()===s.getDate()||(u.push(g(yo,{date:o})),h=!0),h=t!==a||Math.abs(i-r)>=42e4}let v=0;function b(){u.push(g(No,null,g(Te,{size:16})," ",g(E,{id:"app.main.channel.misc.blocked_messages",fields:{count:v}}))),v=0}for(const s of e.messages)p&&f(s._id,s.author_id,p._id,p.author_id),"00000000000000000000000000"===s.author_id?u.push(g(aa,{key:s._id,message:s,attachContext:!0,highlight:n===s._id})):(null==(a=s.author)?void 0:a.relationship)===be.Blocked?v++:(v>0&&b(),u.push(g(Qo,{message:s,key:s._id,head:h,content:i===s._id?g(zo,{message:s,finish:d}):void 0,attachContext:!0,highlight:n===s._id}))),p=s;v>0&&b();const y=e.messages.map((e=>e.nonce));if(e.atBottom)for(const m of t)m.channel===e.channel._id&&(y.includes(m.id)||(p&&(f(m.id,o,p._id,p.author_id),p={_id:m.id,author_id:o}),u.push(g(Qo,{message:new Se.Message(r,l(s({},m.data),{replies:m.data.replies.map((e=>e.id))})),key:m.id,queued:m,head:h,attachContext:!0}))));else u.push(g(Dn,null,g(Ct,{type:"ring"})));return g(S,null,u)})),(e=>({queue:e.queue}))));const Io=A.div`
    height: 100%;
    flex-grow: 1;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    word-break: break-word;

    > div {
        display: flex;
        min-height: 100%;
        padding-bottom: 24px;
        flex-direction: column;
        justify-content: flex-end;
    }
`,Lo=b(0),jo=R((({channel:e})=>{const t=z(),n=T(Lt),{focusTaken:a}=T(ni),{message:r}=D(),[o,i]=m(void 0),s=ke(null),{width:l,height:c}=mo({ref:s}),d=ea(e),u=ke({type:"Free"}),p=x((e=>{"StayAtBottom"===e.type?"Bottom"===u.current.type||h()?u.current={type:"ScrollToBottom",smooth:e.smooth}:u.current={type:"Free"}:u.current=e,_o((()=>{var e;"ScrollToBottom"===u.current.type?(p({type:"Bottom",scrollingUntil:+new Date+150}),po.animateScroll.scrollToBottom({container:s.current,duration:u.current.smooth?150:0})):"ScrollToView"===u.current.type?(null==(e=document.getElementById(u.current.id))||e.scrollIntoView({block:"center"}),p({type:"Free"})):"OffsetTop"===u.current.type?(po.animateScroll.scrollTo(Math.max(101,s.current?s.current.scrollTop+(s.current.scrollHeight-u.current.previousHeight):101),{container:s.current,duration:0}),p({type:"Free"})):"ScrollTop"===u.current.type&&(po.animateScroll.scrollTo(u.current.y,{container:s.current,duration:0}),p({type:"Free"})),_o((()=>d.complete()))}))}),[u]),h=(e=0)=>{var t,n,a;return!s.current||Math.floor((null==(t=s.current)?void 0:t.scrollHeight)-(null==(n=s.current)?void 0:n.scrollTop))-e<=(null==(a=s.current)?void 0:a.clientHeight)};_((()=>et("MessageArea","jump_to_bottom",(()=>p({type:"ScrollToBottom"})))),[p]),ge((()=>p(d.scrollState)),[d.scrollState]),_((()=>{r||("RENDER"===d.state?(ae((()=>d.fetching=!0)),d.scrollAnchored?p({type:"ScrollToBottom"}):p({type:"ScrollTop",y:d.scrollPosition})):d.init())}),[]),_((()=>{r&&(i(r),d.init(r),"TextChannel"===e.channel_type?t.push(`/server/${e.server_id}/channel/${e._id}`):t.push(`/channel/${e._id}`))}),[r]),_((()=>{switch(n){case Nt.ONLINE:"WAITING_FOR_NETWORK"===d.state?d.init():d.reloadStale();break;case Nt.OFFLINE:case Nt.DISCONNECTED:case Nt.CONNECTING:d.markStale()}}),[d,n]),_((()=>{const e=s.current;if(e)return e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t);async function t(){if("Free"===u.current.type&&h())p({type:"Bottom"});else if("Bottom"===u.current.type&&!h()){if(u.current.scrollingUntil&&u.current.scrollingUntil>+new Date)return;p({type:"Free"})}}}),[s,u,p]),_((()=>{const e=s.current;if(e)return e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t);async function t(){d.scrollPosition=e.scrollTop,((e=0)=>!!s.current&&s.current.scrollTop<=e)(100)&&d.loadTop(e),h(100)&&d.loadBottom(e),h()?d.scrollAnchored=!0:d.scrollAnchored=!1}}),[s,d]);const f=x((()=>{h()||"Bottom"!==u.current.type||(po.animateScroll.scrollToBottom({container:s.current,duration:0}),p({type:"Bottom"}))}),[p]);return ge((()=>{f()}),[f,c]),ge((()=>(document.addEventListener("resize",f),()=>document.removeEventListener("resize",f))),[s,u,f]),_((()=>{function e(e){"Escape"!==e.key||a||(d.jumpToBottom(!0),tt("TextArea","focus","message"))}return document.body.addEventListener("keyup",e),()=>document.body.removeEventListener("keyup",e)}),[d,s,a]),g(Lo.Provider,{value:(null!=l?l:0)-82},g(Io,{ref:s},g("div",null,"LOADING"===d.state&&g(Ct,{type:"ring"}),"WAITING_FOR_NETWORK"===d.state&&g(Dn,null,g(Ct,{type:"ring"})),"RENDER"===d.state&&g(Mo,{renderer:d,highlight:o}),"EMPTY"===d.state&&g(go,{channel:e}))))}));function Bo({embed:e,width:t,height:n}){var a;if("Website"!==e.type)return null;const{openScreen:r}=oi(),o=Pt();switch(null==(a=e.special)?void 0:a.type){case"YouTube":{let t="";return e.special.timestamp&&(t=`&start=${e.special.timestamp}`),g("iframe",{loading:"lazy",src:`https://www.youtube-nocookie.com/embed/${e.special.id}?modestbranding=1${t}`,allowFullScreen:!0,style:{height:n}})}case"Twitch":return g("iframe",{src:`https://player.twitch.tv/?${e.special.content_type.toLowerCase()}=${e.special.id}&parent=${window.location.hostname}&autoplay=false`,frameBorder:"0",allowFullScreen:!0,scrolling:"no",loading:"lazy",style:{height:n}});case"Spotify":return g("iframe",{src:`https://open.spotify.com/embed/${e.special.content_type}/${e.special.id}`,loading:"lazy",frameBorder:"0",allowFullScreen:!0,allowTransparency:!0,style:{height:n}});case"Soundcloud":return g("iframe",{src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(e.url)}&color=%23FF7F50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`,frameBorder:"0",scrolling:"no",loading:"lazy",style:{height:n}});case"Bandcamp":return g("iframe",{src:`https://bandcamp.com/EmbeddedPlayer/${e.special.content_type.toLowerCase()}=${e.special.id}/size=large/bgcol=181a1b/linkcol=056cc4/tracklist=false/transparent=true/`,seamless:!0,loading:"lazy",style:{height:n}});default:if(e.image){const a=e.image.url;return g("img",{className:ia.image,src:o.proxyFile(a),loading:"lazy",style:{width:t,height:n},onClick:()=>r({id:"image_viewer",embed:e.image}),onMouseDown:e=>1===e.button&&window.open(a,"_blank")})}}return null}function Po({embed:e}){var t,n,a,r,o,i,s,l,c,d,u,p,h,m,_,f,v;const b=Pt(),{openScreen:y,openLink:w}=oi(),V=Math.min(T(Lo)-24,480);function A(e,t){const n=Math.min(V,e),a=Math.min(640,t);return{width:Math.min(n,a*(e/t)),height:Math.min(a,n*(t/e))}}switch(e.type){case"Website":{let y,V;const k=e.special&&"None"!==e.special.type||"Large"===(null==(t=e.image)?void 0:t.size);switch(null==(n=e.special)?void 0:n.type){case"YouTube":case"Bandcamp":y=null!=(r=null==(a=e.video)?void 0:a.width)?r:1280,V=null!=(i=null==(o=e.video)?void 0:o.height)?i:720;break;case"Twitch":y=1280,V=720;break;default:"Preview"===(null==(s=e.image)?void 0:s.size)?(y=480,V=Math.min(null!=(l=e.image.height)?l:0,150)):(y=null!=(d=null==(c=e.image)?void 0:c.width)?d:480,V=null!=(p=null==(u=e.image)?void 0:u.height)?p:0)}const{width:x,height:C}=A(y,V);return g("div",{className:Sn(ia.embed,ia.website),style:{borderInlineStartColor:null!=(h=e.colour)?h:"var(--tertiary-background)",width:x+24}},g("div",null,e.site_name&&g("div",{className:ia.siteinfo},e.icon_url&&g("img",{loading:"lazy",className:ia.favicon,src:b.proxyFile(e.icon_url),draggable:!1,onError:e=>e.currentTarget.style.display="none"}),g("div",{className:ia.site},e.site_name," ")),e.title&&g("span",null,g("a",{onClick:e=>w(e.currentTarget.href)&&e.preventDefault(),href:e.url,target:"_blank",className:ia.title,rel:"noreferrer"},e.title)),e.description&&g("div",{className:ia.description},e.description),k&&g(Bo,{embed:e,height:C})),!k&&g("div",null,g(Bo,{embed:e,width:C*((null!=(_=null==(m=e.image)?void 0:m.width)?_:0)/(null!=(v=null==(f=e.image)?void 0:f.height)?v:0)),height:C})))}case"Image":return g("img",{className:Sn(ia.embed,ia.image),style:A(e.width,e.height),src:b.proxyFile(e.url),type:"text/html",frameBorder:"0",loading:"lazy",onClick:()=>y({id:"image_viewer",embed:e}),onMouseDown:t=>1===t.button&&window.open(e.url,"_blank")});default:return null}}const Ro=A.div`
    display: grid;
    padding: 0.2em;
    overflow: hidden;
    place-items: center;
    color: var(--foreground);
    background: var(--primary-background);
    border-radius: var(--border-radius-half);
`;var Do=R((e=>{var t,n,a;const r=T(It),o=e,{target:i,attachment:c,size:u,animate:p,server_name:h}=o,m=d(o,["target","attachment","size","animate","server_name"]),_=r.generateFileURL(null!=(t=null==i?void 0:i.icon)?t:c,{max_side:256},p);if(void 0===_){const e=null!=(a=null!=(n=null==i?void 0:i.name)?n:h)?a:"";return g(Ro,{style:{width:u,height:u}},e.split(" ").map((e=>e[0])).filter((e=>void 0!==e)))}return g(tn,l(s({},m),{width:u,height:u,borderRadius:"--border-radius-server-icon",src:_,loading:"lazy","aria-hidden":"true"}))}));const Fo=A.div`
    width: 400px;
    height: 80px;
    background-color: var(--secondary-background);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin-top: 2px;
`,qo=A.div`
    flex-grow: 1;
    padding-left: 12px;
`,$o=A.div`
    font-weight: bold;
`,Ho=A.div`
    font-size: 0.8em;
`;function Uo(e){const t=z(),n=T(It),a=T(Lt),r=e.code,[o,i]=m(!1),[s,l]=m(void 0),[c,d]=m(void 0);return _((()=>{void 0!==c||a!==Nt.ONLINE&&a!==Nt.READY||n.fetchInvite(r).then((e=>d(e))).catch((e=>l(Ot(e))))}),[n,r,c,a]),void 0===c?s?g(Fo,null,g(Do,{size:55}),g(qo,null,g($o,null,"Invalid invite!"))):g(Fo,null,g(Ct,{type:"ring"})):g(Fo,null,g(Do,{attachment:c.server_icon,server_name:c.server_name,size:55}),g(qo,null,g($o,null,c.server_name),g(Ho,null,c.member_count.toLocaleString()," members")),o?g("div",null,g(Ct,{type:"ring"})):g(qe,{onClick:async()=>{try{if(i(!0),"Server"===c.type){n.servers.get(c.server_id)&&t.push(`/server/${c.server_id}/channel/${c.channel_id}`);const e=Oe((()=>{const a=n.servers.get(c.server_id);_o((()=>{a&&(Pe({type:"UNREADS_MARK_MULTIPLE_READ",channels:a.channel_ids}),t.push(`/server/${a._id}/channel/${c.channel_id}`))})),e()}))}await n.joinInvite(r),i(!1)}catch(e){l(Ot(e)),i(!1)}}},n.servers.get(c.server_id)?"Joined":"Join"))}const Ko=[`${location.hostname}/invite`,"app.revolt.chat/invite","nightly.revolt.chat/invite","local.revolt.chat/invite","rvlt.gg"],Wo=new RegExp(`(?:${Ko.map((e=>e.replaceAll(".","\\."))).join("|")})/([A-Za-z0-9]*)`,"g");var Yo=R((({message:e})=>{if("string"!=typeof e.content)return null;const t=[...e.content.matchAll(Wo)];if(t.length>0){const e=[...new Set(t.slice(0,5).map((e=>e[1])))].slice(0,5);return g(S,null,e.map((e=>g(Uo,{key:e,code:e}))))}return null}));var Qo=Ee(R((({highlight:e,attachContext:t,message:n,contrast:a,content:r,head:o,queued:i,hideReply:s})=>{var l,c,d,u,p;const h=Pt(),_=n.author,{openScreen:f}=oi(),v=n.content,b=o||n.reply_ids&&n.reply_ids.length>0,y=t?se("Menu",{user:n.author_id,contextualChannel:n.channel_id}):void 0,w=e=>{e.shiftKey&&(null==_?void 0:_._id)?tt("MessageBox","append",`<@${_._id}>`,"mention"):f({id:"profile",user_id:n.author_id})},[V,A]=m(!1);return g("div",{id:n._id},!s&&(null==(l=n.reply_ids)?void 0:l.map(((e,t)=>{var a;return g(oa,{key:e,index:t,id:e,channel:n.channel,parent_mentions:null!=(a=n.mention_ids)?a:[]})}))),g(mn,{highlight:e,head:!s&&(null!=(c=b&&!(n.reply_ids&&n.reply_ids.length>0))&&c),contrast:a,sending:void 0!==i,mention:null==(d=n.mention_ids)?void 0:d.includes(h.user._id),failed:void 0!==(null==i?void 0:i.error),onContextMenu:t?se("Menu",{message:n,contextualChannel:n.channel_id,queued:i}):void 0,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1)},g(_n,null,b?g(rn,{target:_,size:36,onContextMenu:y,onClick:w,animate:V,showServerIdentity:!0}):g(vn,{message:n,position:"left"})),g(fn,null,b&&g("span",{className:"detail"},g(sn,{className:"author",user:_,onContextMenu:y,onClick:w,showServerIdentity:!0}),g(vn,{message:n,position:"top"})),null!=r?r:g(Zt,{content:v}),!i&&g(Yo,{message:n}),(null==i?void 0:i.error)&&g($e,{type:"error",error:i.error}),null==(u=n.attachments)?void 0:u.map(((e,t)=>g(Kn,{key:t,attachment:e,hasContent:t>0||v.length>0}))),null==(p=n.embeds)?void 0:p.map(((e,t)=>g(Po,{key:t,embed:e}))))))})));function Go({onClose:e,question:t,content:n,actions:a,disabled:r,error:o}){return g(yt,{visible:!0,title:t,actions:a,onClose:e,disabled:r},o&&g($e,{error:o,type:"error"}),n)}const Jo=R((e=>{var t,n,a;const r=T(It),[o,i]=m(!1),[s,l]=m(void 0),{onClose:c}=e;switch(e.type){case"leave_group":case"close_dm":case"leave_server":case"delete_server":case"delete_channel":case"unfriend_user":case"block_user":{const n={close_dm:["confirm_close_dm","close"],delete_server:["confirm_delete","delete"],delete_channel:["confirm_delete","delete"],leave_group:["confirm_leave","leave"],leave_server:["confirm_leave","leave"],unfriend_user:["unfriend_user","remove"],block_user:["block_user","block"]}[e.type];let a;switch(e.type){case"unfriend_user":case"block_user":a=e.target.username;break;case"close_dm":a=null==(t=e.target.recipient)?void 0:t.username;break;default:a=e.target.name}return g(Go,{onClose:c,question:g(E,{id:`app.special.modals.prompt.${n[0]}`,fields:{name:a}}),actions:[{confirmation:!0,contrast:!0,error:!0,children:g(E,{id:`app.special.modals.actions.${n[1]}`}),onClick:async()=>{i(!0);try{switch(e.type){case"unfriend_user":await e.target.removeFriend();break;case"block_user":await e.target.blockUser();break;case"leave_group":case"close_dm":case"delete_channel":e.target.delete();break;case"leave_server":case"delete_server":e.target.delete()}c()}catch(t){l(Ot(t)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c}],content:g(Gt,{id:`app.special.modals.prompt.${n[0]}_long`,fields:{name:g("b",null,a)}}),disabled:o,error:s})}case"delete_message":return g(Go,{onClose:c,question:g(E,{id:"app.context_menu.delete_message"}),actions:[{confirmation:!0,contrast:!0,error:!0,children:g(E,{id:"app.special.modals.actions.delete"}),onClick:async()=>{i(!0);try{e.target.delete(),c()}catch(t){l(Ot(t)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c,plain:!0}],content:g(S,null,g(E,{id:"app.special.modals.prompt.confirm_delete_message_long"}),g(Qo,{message:e.target,head:!0,contrast:!0})),disabled:o,error:s});case"create_invite":{const[t,n]=m("abcdef"),{writeClipboard:a}=oi();return _((()=>{i(!0),e.target.createInvite().then((e=>n(e))).catch((e=>l(Ot(e)))).finally((()=>i(!1)))}),[e.target]),g(Go,{onClose:c,question:g(E,{id:"app.context_menu.create_invite"}),actions:[{children:g(E,{id:"app.special.modals.actions.ok"}),confirmation:!0,onClick:c},{children:g(E,{id:"app.context_menu.copy_link"}),onClick:()=>a(`${window.location.protocol}//${window.location.host}/invite/${t}`)}],content:o?g(E,{id:"app.special.modals.prompt.create_invite_generate"}):g("div",{className:Wt},g(E,{id:"app.special.modals.prompt.create_invite_created"}),g("code",null,t)),disabled:o,error:s})}case"kick_member":return g(Go,{onClose:c,question:g(E,{id:"app.context_menu.kick_member"}),actions:[{children:g(E,{id:"app.special.modals.actions.kick"}),contrast:!0,error:!0,confirmation:!0,onClick:async()=>{var t;i(!0);try{null==(t=r.members.getKey({server:e.target._id,user:e.user._id}))||t.kick(),c()}catch(n){l(Ot(n)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c}],content:g("div",{className:Yt},g(rn,{target:e.user,size:64}),g(E,{id:"app.special.modals.prompt.confirm_kick",fields:{name:null==(n=e.user)?void 0:n.username}})),disabled:o,error:s});case"ban_member":{const[t,n]=m(void 0);return g(Go,{onClose:c,question:g(E,{id:"app.context_menu.ban_member"}),actions:[{children:g(E,{id:"app.special.modals.actions.ban"}),contrast:!0,error:!0,confirmation:!0,onClick:async()=>{i(!0);try{await e.target.banUser(e.user._id,{reason:t}),c()}catch(n){l(Ot(n)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c}],content:g("div",{className:Yt},g(rn,{target:e.user,size:64}),g(E,{id:"app.special.modals.prompt.confirm_ban",fields:{name:null==(a=e.user)?void 0:a.username}}),g($e,null,g(E,{id:"app.special.modals.prompt.confirm_ban_reason"})),g(He,{value:null!=t?t:"",onChange:e=>n(e.currentTarget.value)})),disabled:o,error:s})}case"create_channel":{const[t,n]=m(""),[a,r]=m("Text"),d=z();return g(Go,{onClose:c,question:g(E,{id:"app.context_menu.create_channel"}),actions:[{confirmation:!0,contrast:!0,children:g(E,{id:"app.special.modals.actions.create"}),onClick:async()=>{i(!0);try{const n=await e.target.createChannel({type:a,name:t,nonce:N()});d.push(`/server/${e.target._id}/channel/${n._id}`),c()}catch(n){l(Ot(n)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c}],content:g(S,null,g($e,{block:!0,type:"subtle"},g(E,{id:"app.main.servers.channel_type"})),g(Qe,{checked:"Text"===a,onSelect:()=>r("Text")},g(E,{id:"app.main.servers.text_channel"})),g(Qe,{checked:"Voice"===a,onSelect:()=>r("Voice")},g(E,{id:"app.main.servers.voice_channel"})),g($e,{block:!0,type:"subtle"},g(E,{id:"app.main.servers.channel_name"})),g(He,{value:t,onChange:e=>n(e.currentTarget.value)})),disabled:o,error:s})}case"create_category":{const[t,n]=m("");return z(),g(Go,{onClose:c,question:g(E,{id:"app.context_menu.create_category"}),actions:[{confirmation:!0,contrast:!0,children:g(E,{id:"app.special.modals.actions.create"}),onClick:async()=>{var n;i(!0);try{e.target.edit({categories:[...null!=(n=e.target.categories)?n:[],{id:N(),title:t,channels:[]}]}),c(),i(!1)}catch(a){l(Ot(a)),i(!1)}}},{children:g(E,{id:"app.special.modals.actions.cancel"}),onClick:c}],content:g(S,null,g($e,{block:!0,type:"subtle"},g(E,{id:"app.main.servers.channel_name"})),g(He,{value:t,onChange:e=>n(e.currentTarget.value)})),disabled:o,error:s})}default:return null}}));function Xo({onClose:e}){return g(yt,{visible:!0,onClose:e,title:g(E,{id:"app.special.modals.signed_out"}),actions:[{onClick:e,confirmation:!0,children:g(E,{id:"app.special.modals.actions.ok"})}]})}function Zo({onClose:e,link:t}){return g(yt,{visible:!0,onClose:e,title:g(E,{id:"app.special.modals.external_links.title"}),actions:[{onClick:()=>{window.open(t,"_blank","noreferrer"),e()},confirmation:!0,contrast:!0,accent:!0,children:"Continue"},{onClick:e,confirmation:!1,children:"Cancel"},{onClick:()=>{try{const e=new URL(t);Pe({type:"TRUSTED_LINKS_ADD_DOMAIN",domain:e.hostname})}catch(n){}window.open(t,"_blank","noreferrer"),e()},plain:!0,children:g(E,{id:"app.special.modals.external_links.trust_domain"})}]},g(E,{id:"app.special.modals.external_links.short"})," ",g("br",null),g("a",null,t))}function ei({onClose:e,token:t,username:n}){return g(yt,{visible:!0,onClose:e,title:g(E,{id:"app.special.modals.token_reveal",fields:{name:n}}),actions:[{onClick:e,confirmation:!0,children:g(E,{id:"app.special.modals.actions.close"})}]},g("code",{style:{userSelect:"all"}},t))}function ti({screen:e,openScreen:t}){const n=()=>bt||"onboarding"===e.id?t({id:"none"}):tt("Modal","close");switch(e.id){case"_prompt":return g(Go,s({onClose:n},e));case"_input":return g(Rt,s({onClose:n},e));case"error":return g(Vt,s({onClose:n},e));case"signed_out":return g(Xo,s({onClose:n},e));case"clipboard":return g(wt,s({onClose:n},e));case"token_reveal":return g(ei,s({onClose:n},e));case"onboarding":return g(Kt,s({onClose:n},e));case"external_link_prompt":return g(Zo,s({onClose:n},e))}return null}const ni=b({screen:{id:"none"},focusTaken:!1}),ai=b({openLink:null,openScreen:null,writeClipboard:null});function ri(e){const[t,n]=m({id:"none"}),a=z(),r={screen:t,focusTaken:"none"!==t.id},o=y((()=>({openLink:e=>{var t;const r=dt(e);switch(r.type){case"profile":return n({id:"profile",user_id:r.id}),!0;case"navigate":return a.push(r.path),!0;case"external":{const{trustedLinks:e}=Ge();return!(null==(t=e.domains)?void 0:t.includes(r.url.hostname))&&(n({id:"external_link_prompt",link:r.href}),!0)}}return!0},openScreen:e=>n(e),writeClipboard:e=>{navigator.clipboard?navigator.clipboard.writeText(e):o.openScreen({id:"clipboard",text:e})}})),[]);return _((()=>{const e=[et("Intermediate","openProfile",(e=>n({id:"profile",user_id:e}))),et("Intermediate","navigate",(e=>a.push(e)))];return()=>e.map((e=>e()))}),[a]),g(ni.Provider,{value:r},g(ai.Provider,{value:o},"onboarding"!==t.id&&e.children,g(ti,l(s(s({},r),o),{key:t.id})),g(ze,{when:["modify_account","special_prompt","special_input","image_viewer","profile","channel_info","pending_requests","user_picker"].includes(t.id),message:(e,t)=>"POP"!==t||(n({id:"none"}),setTimeout((()=>a.push(a.location)),0),!1)})))}const oi=()=>T(ai);function ii({children:e}){return g(Ne,{basename:"/revite/refs/pull/10/merge/"},g(nt,null,g(Je,null,g(st,null,g(Xe,null,g(ri,null,g(Bt,null,e)))))))}const si=e=>{const t=T(jt);return e.auth&&!t.ready()?g(Me,{to:"/login"}):!e.auth&&t.ready()?g(Me,{to:"/"}):g(S,null,e.children)};function li(){return g("svg",{width:0,height:0,style:{position:"fixed"}},g("defs",null,g("mask",{id:"server"},g("rect",{x:"0",y:"0",width:"32",height:"32",fill:"white"}),g("circle",{cx:"27",cy:"5",r:"7",fill:"black"})),g("mask",{id:"user"},g("rect",{x:"0",y:"0",width:"32",height:"32",fill:"white"}),g("circle",{cx:"27",cy:"27",r:"7",fill:"black"})),g("mask",{id:"session"},g("rect",{x:"0",y:"0",width:"32",height:"32",fill:"white"}),g("circle",{cx:"26",cy:"28",r:"10",fill:"black"})),g("mask",{id:"overlap"},g("rect",{x:"0",y:"0",width:"32",height:"32",fill:"white"}),g("circle",{cx:"32",cy:"16",r:"18",fill:"black"}))))}var ci="_invite_605sm_1",di="_icon_605sm_15",ui="_leave_605sm_25",pi="_details_605sm_31",hi="_preloader_605sm_62";function mi(){const e=z(),t=T(It),n=T(Lt),{code:a}=D(),[r,o]=m(!1),[i,s]=m(void 0),[l,c]=m(void 0);return _((()=>{void 0!==l||n!==Nt.ONLINE&&n!==Nt.READY||t.fetchInvite(a).then((e=>c(e))).catch((e=>s(Ot(e))))}),[t,a,l,n]),void 0===a?g(Me,{to:"/"}):void 0===l?g("div",{className:hi},g(Dn,null,i?g("div",{className:ci,style:{backgroundImage:"url('https://autumn.revolt.chat/banners/yMurJiXf45VJpbal0X2zQkm4vaXsXGaRtoPUIcvPcH')",width:"100%",height:"100%"}},g("div",{className:pi},g("h1",null,g(E,{id:"app.special.invite.invalid"})),g("h2",null,g(E,{id:"app.special.invite.invalid_desc"})),g("div",{style:"cursor: pointer;"},g(qe,{contrast:!0},g(Ie,{size:32,onClick:()=>e.push("/")}))))):g(Ct,{type:"spinner"}))):g("div",{className:ci,style:{backgroundImage:l.server_banner?`url('${t.generateFileURL(l.server_banner)}')`:void 0}},g("div",{className:ui},g(Ie,{size:32,onClick:()=>e.push("/")})),!r&&g("div",{className:di},g(Do,{attachment:l.server_icon,server_name:l.server_name,size:64})),g("div",{className:pi},r?g(Ct,{type:"ring"}):g(S,null,g("h1",null,l.server_name),g("h2",null,"#",l.channel_name," •"," ",g(E,{id:"app.special.invite.user_count",fields:{member_count:l.member_count}})),g("h3",null,g(Gt,{id:"app.special.invite.invited_by",fields:{user:g(S,null,g(rn,{size:24,attachment:l.user_avatar})," ",l.user_name)}})),g($e,{type:"error",error:i}),g(qe,{contrast:!0,onClick:async()=>{if(n===Nt.READY)return e.push("/");try{if(o(!0),"Server"===l.type){t.servers.get(l.server_id)&&e.push(`/server/${l.server_id}/channel/${l.channel_id}`);const n=Oe((()=>{const a=t.servers.get(l.server_id);_o((()=>{a&&(Pe({type:"UNREADS_MARK_MULTIPLE_READ",channels:a.channel_ids}),e.push(`/server/${a._id}/channel/${l.channel_id}`))})),n()}))}await t.joinInvite(a)}catch(r){s(Ot(r)),o(!1)}}},n===Nt.READY?g(E,{id:"app.special.invite.login"}):g(E,{id:"app.special.invite.accept"})))))}const _i=B((()=>Ue((()=>import("./Login.dab38bc9.js")),["/revite/refs/pull/10/merge/assets/Login.dab38bc9.js","/revite/refs/pull/10/merge/assets/Login.8b64bab8.css","/revite/refs/pull/10/merge/assets/vendor.182b0579.js","/revite/refs/pull/10/merge/assets/Radio.cb2de5b8.js","/revite/refs/pull/10/merge/assets/Radio.1c3711df.css","/revite/refs/pull/10/merge/assets/ComboBox.ad5d9601.js","/revite/refs/pull/10/merge/assets/version.03e139dd.js"]))),fi=B((()=>Ue((()=>import("./RevoltApp.29cfb9e7.js")),["/revite/refs/pull/10/merge/assets/RevoltApp.29cfb9e7.js","/revite/refs/pull/10/merge/assets/RevoltApp.80137598.css","/revite/refs/pull/10/merge/assets/vendor.182b0579.js","/revite/refs/pull/10/merge/assets/Radio.cb2de5b8.js","/revite/refs/pull/10/merge/assets/Radio.1c3711df.css","/revite/refs/pull/10/merge/assets/Tip.2159a1b9.js","/revite/refs/pull/10/merge/assets/version.03e139dd.js","/revite/refs/pull/10/merge/assets/ComboBox.ad5d9601.js"])));function gi(){return g(ii,null,g(li,null),g(P,{fallback:g(Ct,{type:"spinner"})},g(Le,null,g(je,{path:"/login/verify/:token"},g(_i,null)),g(je,{path:"/login/reset/:token"},g(_i,null)),g(je,{path:"/invite/:code"},g(mi,null)),g(je,{path:"/login"},g(si,null,g(_i,null))),g(je,{path:"/"},g(si,{auth:!0},g(fi,null))))))}const vi=function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:a}=e;let r,o;if("serviceWorker"in navigator){r=new u("/revite/refs/pull/10/merge/sw.js",{scope:"/revite/refs/pull/10/merge/"}),r.addEventListener("activated",(e=>{e.isUpdate||null==a||a()}));{const e=()=>{null==n||n()};r.addEventListener("waiting",e),r.addEventListener("externalwaiting",e)}r.register({immediate:t}).then((e=>o=e))}return async(e=!0)=>{e&&(null==r||r.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),o&&o.waiting&&await p(o.waiting,{type:"SKIP_WAITING"})}}({onNeedRefresh(){tt("PWA","update")},onOfflineReady(){console.info("Ready to work offline.")}});Be(g(gi,null),document.getElementById("app"));export{It as A,aa as B,Nt as C,pn as D,Eo as E,Ut as F,ko as G,To as H,Mn as I,_o as J,Jn as K,nn as L,Zt as M,jo as N,jt as O,Ct as P,Gt as Q,ra as R,Lt as S,dn as T,rn as U,Dn as V,rt as W,mi as X,dt as Y,xo as Z,oi as a,tt as b,yt as c,Pt as d,In as e,Sn as f,zt as g,On as h,et as i,sn as j,Co as k,Do as l,ni as m,Dt as n,Jo as o,bt as p,Jt as q,it as r,ia as s,Ot as t,vi as u,cn as v,Ht as w,Qo as x,ea as y,ln as z};
//# sourceMappingURL=main.5d3a6076.js.map
