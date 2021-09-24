var r=Object.defineProperty,a=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,t=(a,e,o)=>e in a?r(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o,n=(r,n)=>{for(var i in n||(n={}))e.call(n,i)&&t(r,i,n[i]);if(a)for(var i of a(n))o.call(n,i)&&t(r,i,n[i]);return r};import{an as i,ay as s,az as d,D as c,y as _,b as l,aA as p,s as u,C as b,T as m,m as E,aB as g}from"./vendor.f825c847.js";let f;const w={},y=function(r,a){if(!a)return r();if(void 0===f){const r=document.createElement("link").relList;f=r&&r.supports&&r.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((r=>{if(r in w)return;w[r]=!0;const a=r.endsWith(".css"),e=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${e}`))return;const o=document.createElement("link");return o.rel=a?"stylesheet":f,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a?new Promise(((r,a)=>{o.addEventListener("load",r),o.addEventListener("error",a)})):void 0}))).then((()=>r()))};function h(r,a,e){const o=s(a)(r);return e?i(o):o}const v={"Open Sans":{name:"Open Sans",load:async()=>{await y((()=>import("./300.c8d5eba4.js")),["/revite/refs/pull/6/merge/assets/300.c8d5eba4.js","/revite/refs/pull/6/merge/assets/300.04836e24.css"]),await y((()=>import("./400.03233984.js")),["/revite/refs/pull/6/merge/assets/400.03233984.js","/revite/refs/pull/6/merge/assets/400.84de02d4.css"]),await y((()=>import("./600.9e068c0d.js")),["/revite/refs/pull/6/merge/assets/600.9e068c0d.js","/revite/refs/pull/6/merge/assets/600.a13f2a70.css"]),await y((()=>import("./700.02b6b72f.js")),["/revite/refs/pull/6/merge/assets/700.02b6b72f.js","/revite/refs/pull/6/merge/assets/700.ff7b5ab1.css"]),await y((()=>import("./400-italic.917b74da.js")),["/revite/refs/pull/6/merge/assets/400-italic.917b74da.js","/revite/refs/pull/6/merge/assets/400-italic.d179ff7f.css"])}},Inter:{name:"Inter",load:async()=>{await y((()=>import("./300.240c1e94.js")),["/revite/refs/pull/6/merge/assets/300.240c1e94.js","/revite/refs/pull/6/merge/assets/300.975485d9.css"]),await y((()=>import("./400.6aac8f6f.js")),["/revite/refs/pull/6/merge/assets/400.6aac8f6f.js","/revite/refs/pull/6/merge/assets/400.11b619de.css"]),await y((()=>import("./600.c160f6a3.js")),["/revite/refs/pull/6/merge/assets/600.c160f6a3.js","/revite/refs/pull/6/merge/assets/600.3394e24b.css"]),await y((()=>import("./700.4550977f.js")),["/revite/refs/pull/6/merge/assets/700.4550977f.js","/revite/refs/pull/6/merge/assets/700.187a1014.css"])}},"Atkinson Hyperlegible":{name:"Atkinson Hyperlegible",load:async()=>{await y((()=>import("./400.145d6858.js")),["/revite/refs/pull/6/merge/assets/400.145d6858.js","/revite/refs/pull/6/merge/assets/400.13cf7b96.css"]),await y((()=>import("./700.1420caea.js")),["/revite/refs/pull/6/merge/assets/700.1420caea.js","/revite/refs/pull/6/merge/assets/700.42cec4ab.css"]),await y((()=>import("./400-italic.629b793d.js")),["/revite/refs/pull/6/merge/assets/400-italic.629b793d.js","/revite/refs/pull/6/merge/assets/400-italic.ae685b4c.css"])}},Roboto:{name:"Roboto",load:async()=>{await y((()=>import("./400.d4b78713.js")),["/revite/refs/pull/6/merge/assets/400.d4b78713.js","/revite/refs/pull/6/merge/assets/400.faba6755.css"]),await y((()=>import("./700.1be9b99b.js")),["/revite/refs/pull/6/merge/assets/700.1be9b99b.js","/revite/refs/pull/6/merge/assets/700.b233058e.css"]),await y((()=>import("./400-italic.5f376ec1.js")),["/revite/refs/pull/6/merge/assets/400-italic.5f376ec1.js","/revite/refs/pull/6/merge/assets/400-italic.3709634e.css"])}},"Noto Sans":{name:"Noto Sans",load:async()=>{await y((()=>import("./400.9ec706f8.js")),["/revite/refs/pull/6/merge/assets/400.9ec706f8.js","/revite/refs/pull/6/merge/assets/400.90f45c78.css"]),await y((()=>import("./700.4f6e54d3.js")),["/revite/refs/pull/6/merge/assets/700.4f6e54d3.js","/revite/refs/pull/6/merge/assets/700.69182a4e.css"]),await y((()=>import("./400-italic.a52174c8.js")),["/revite/refs/pull/6/merge/assets/400-italic.a52174c8.js","/revite/refs/pull/6/merge/assets/400-italic.6ba6dd0e.css"])}},"Bree Serif":{name:"Bree Serif",load:()=>y((()=>import("./400.b3afc853.js")),["/revite/refs/pull/6/merge/assets/400.b3afc853.js","/revite/refs/pull/6/merge/assets/400.b7d93487.css"])},Lato:{name:"Lato",load:async()=>{await y((()=>import("./300.919dd209.js")),["/revite/refs/pull/6/merge/assets/300.919dd209.js","/revite/refs/pull/6/merge/assets/300.6d692a27.css"]),await y((()=>import("./400.11f34de9.js")),["/revite/refs/pull/6/merge/assets/400.11f34de9.js","/revite/refs/pull/6/merge/assets/400.01e2e084.css"]),await y((()=>import("./700.9c15aec1.js")),["/revite/refs/pull/6/merge/assets/700.9c15aec1.js","/revite/refs/pull/6/merge/assets/700.8684c813.css"]),await y((()=>import("./400-italic.8b51a912.js")),["/revite/refs/pull/6/merge/assets/400-italic.8b51a912.js","/revite/refs/pull/6/merge/assets/400-italic.97c5304a.css"])}},Montserrat:{name:"Montserrat",load:async()=>{await y((()=>import("./300.54bd98c9.js")),["/revite/refs/pull/6/merge/assets/300.54bd98c9.js","/revite/refs/pull/6/merge/assets/300.25b55f56.css"]),await y((()=>import("./400.eb6d7585.js")),["/revite/refs/pull/6/merge/assets/400.eb6d7585.js","/revite/refs/pull/6/merge/assets/400.2fe25fa3.css"]),await y((()=>import("./600.b59fbe35.js")),["/revite/refs/pull/6/merge/assets/600.b59fbe35.js","/revite/refs/pull/6/merge/assets/600.ac4f0074.css"]),await y((()=>import("./700.e61b00f3.js")),["/revite/refs/pull/6/merge/assets/700.e61b00f3.js","/revite/refs/pull/6/merge/assets/700.3a731f1d.css"]),await y((()=>import("./400-italic.31a4ee31.js")),["/revite/refs/pull/6/merge/assets/400-italic.31a4ee31.js","/revite/refs/pull/6/merge/assets/400-italic.82d1f6ad.css"])}},Poppins:{name:"Poppins",load:async()=>{await y((()=>import("./300.5ffb7278.js")),["/revite/refs/pull/6/merge/assets/300.5ffb7278.js","/revite/refs/pull/6/merge/assets/300.3aa6a724.css"]),await y((()=>import("./400.8b133220.js")),["/revite/refs/pull/6/merge/assets/400.8b133220.js","/revite/refs/pull/6/merge/assets/400.a2935a70.css"]),await y((()=>import("./600.453d27d3.js")),["/revite/refs/pull/6/merge/assets/600.453d27d3.js","/revite/refs/pull/6/merge/assets/600.e6211bfd.css"]),await y((()=>import("./700.24c1d786.js")),["/revite/refs/pull/6/merge/assets/700.24c1d786.js","/revite/refs/pull/6/merge/assets/700.3780a3b3.css"]),await y((()=>import("./400-italic.99e3fd80.js")),["/revite/refs/pull/6/merge/assets/400-italic.99e3fd80.js","/revite/refs/pull/6/merge/assets/400-italic.e1781aa8.css"])}},Raleway:{name:"Raleway",load:async()=>{await y((()=>import("./300.bc90cd81.js")),["/revite/refs/pull/6/merge/assets/300.bc90cd81.js","/revite/refs/pull/6/merge/assets/300.ba993aa5.css"]),await y((()=>import("./400.b47d2a6c.js")),["/revite/refs/pull/6/merge/assets/400.b47d2a6c.js","/revite/refs/pull/6/merge/assets/400.4ffce468.css"]),await y((()=>import("./600.b6a3c795.js")),["/revite/refs/pull/6/merge/assets/600.b6a3c795.js","/revite/refs/pull/6/merge/assets/600.60d503f0.css"]),await y((()=>import("./700.d2edc5b0.js")),["/revite/refs/pull/6/merge/assets/700.d2edc5b0.js","/revite/refs/pull/6/merge/assets/700.c11749eb.css"]),await y((()=>import("./400-italic.9ae828dc.js")),["/revite/refs/pull/6/merge/assets/400-italic.9ae828dc.js","/revite/refs/pull/6/merge/assets/400-italic.5b5e4d15.css"])}},Ubuntu:{name:"Ubuntu",load:async()=>{await y((()=>import("./300.dce4fb1c.js")),["/revite/refs/pull/6/merge/assets/300.dce4fb1c.js","/revite/refs/pull/6/merge/assets/300.26f73f4a.css"]),await y((()=>import("./400.da1ed4b9.js")),["/revite/refs/pull/6/merge/assets/400.da1ed4b9.js","/revite/refs/pull/6/merge/assets/400.04e58701.css"]),await y((()=>import("./500.e5931e9b.js")),["/revite/refs/pull/6/merge/assets/500.e5931e9b.js","/revite/refs/pull/6/merge/assets/500.ae636015.css"]),await y((()=>import("./700.c7848d58.js")),["/revite/refs/pull/6/merge/assets/700.c7848d58.js","/revite/refs/pull/6/merge/assets/700.d03b7718.css"]),await y((()=>import("./400-italic.ede948a0.js")),["/revite/refs/pull/6/merge/assets/400-italic.ede948a0.js","/revite/refs/pull/6/merge/assets/400-italic.5a1c03bf.css"])}},"Comic Neue":{name:"Comic Neue",load:async()=>{await y((()=>import("./300.77606003.js")),["/revite/refs/pull/6/merge/assets/300.77606003.js","/revite/refs/pull/6/merge/assets/300.4486b1f1.css"]),await y((()=>import("./400.3bcfaf45.js")),["/revite/refs/pull/6/merge/assets/400.3bcfaf45.js","/revite/refs/pull/6/merge/assets/400.eae1bd1b.css"]),await y((()=>import("./700.e5555d49.js")),["/revite/refs/pull/6/merge/assets/700.e5555d49.js","/revite/refs/pull/6/merge/assets/700.5841caef.css"]),await y((()=>import("./400-italic.17224921.js")),["/revite/refs/pull/6/merge/assets/400-italic.17224921.js","/revite/refs/pull/6/merge/assets/400-italic.eba59681.css"])}}},k={"Fira Code":{name:"Fira Code",load:()=>y((()=>import("./400.29a99972.js")),["/revite/refs/pull/6/merge/assets/400.29a99972.js","/revite/refs/pull/6/merge/assets/400.a3074735.css"])},"Roboto Mono":{name:"Roboto Mono",load:()=>y((()=>import("./400.83bb2b24.js")),["/revite/refs/pull/6/merge/assets/400.83bb2b24.js","/revite/refs/pull/6/merge/assets/400.dfeb6382.css"])},"Source Code Pro":{name:"Source Code Pro",load:()=>y((()=>import("./400.dd2159c0.js")),["/revite/refs/pull/6/merge/assets/400.dd2159c0.js","/revite/refs/pull/6/merge/assets/400.a772ef5f.css"])},"Space Mono":{name:"Space Mono",load:()=>y((()=>import("./400.9eff5afc.js")),["/revite/refs/pull/6/merge/assets/400.9eff5afc.js","/revite/refs/pull/6/merge/assets/400.1f4d298d.css"])},"Ubuntu Mono":{name:"Ubuntu Mono",load:()=>y((()=>import("./400.f96c9d43.js")),["/revite/refs/pull/6/merge/assets/400.f96c9d43.js","/revite/refs/pull/6/merge/assets/400.42600637.css"])}},A=Object.keys(v).sort(),D=Object.keys(k).sort(),O="Open Sans",P="Fira Code",j={light:{light:!0,accent:"#FD6671",background:"#F6F6F6",foreground:"#000000",block:"#414141","message-box":"#F1F1F1",mention:"rgba(251, 255, 0, 0.40)",success:"#65E572",warning:"#FAA352",error:"#ED4245",hover:"rgba(0, 0, 0, 0.2)","scrollbar-thumb":"#CA525A","scrollbar-track":"transparent","primary-background":"#FFFFFF","primary-header":"#F1F1F1","secondary-background":"#F1F1F1","secondary-foreground":"#1f1f1f","secondary-header":"#F1F1F1","tertiary-background":"#4D4D4D","tertiary-foreground":"#3a3a3a","status-online":"#3ABF7E","status-away":"#F39F00","status-busy":"#F84848","status-streaming":"#977EFF","status-invisible":"#A5A5A5"},dark:{light:!1,accent:"#FD6671",background:"#191919",foreground:"#F6F6F6",block:"#2D2D2D","message-box":"#363636",mention:"rgba(251, 255, 0, 0.06)",success:"#65E572",warning:"#FAA352",error:"#ED4245",hover:"rgba(0, 0, 0, 0.1)","scrollbar-thumb":"#CA525A","scrollbar-track":"transparent","primary-background":"#242424","primary-header":"#363636","secondary-background":"#1E1E1E","secondary-foreground":"#C8C8C8","secondary-header":"#2D2D2D","tertiary-background":"#4D4D4D","tertiary-foreground":"#848484","status-online":"#3ABF7E","status-away":"#F39F00","status-busy":"#F84848","status-streaming":"#977EFF","status-invisible":"#A5A5A5"}},L=Object.keys(j.dark),R=d`
:root {
	${r=>I(r.theme)}
}
`,I=r=>{const a=n(n({},j[r.light?"light":"dark"]),r);return Object.keys(a).map((r=>{if(L.includes(r))return`--${r}: ${a[r]};`}))},T=c(j.dark);var V=h((function({children:r,options:a}){var e;const o=n(n(n({},j.dark),j[null!=(e=null==a?void 0:a.preset)?e:""]),null==a?void 0:a.custom),t=document.documentElement.style;return _((()=>{var r;const a=null!=(r=o.font)?r:"Open Sans";t.setProperty("--font",`"${a}"`),v[a].load()}),[t,o.font]),_((()=>{var r;const a=null!=(r=o.monospaceFont)?r:"Fira Code";t.setProperty("--monospace-font",`"${a}"`),k[a].load()}),[t,o.monospaceFont]),_((()=>{t.setProperty("--ligatures",(null==a?void 0:a.ligatures)?"normal":"none")}),[t,null==a?void 0:a.ligatures]),_((()=>{const r=()=>t.setProperty("--app-height",`${window.innerHeight}px`);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)}),[t]),l(T.Provider,{value:o},l(p,null,l("meta",{name:"theme-color",content:o.background})),l(R,{theme:o}),o.css&&l("style",{dangerouslySetInnerHTML:{__html:o.css}}),r)}),(r=>({options:r.settings.theme}))),F=u.button`
    z-index: 1;
    display: flex;
    height: 38px;
    min-width: 96px;
    align-items: center;
    justify-content: center;
    padding: 2px 16px;
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 500;

    transition: 0.2s ease opacity;
    transition: 0.2s ease background-color;

    background: var(--primary-background);
    color: var(--foreground);

    border-radius: var(--border-radius);
    cursor: pointer;
    border: none;

    &:hover {
        background: var(--secondary-header);
    }

    &:disabled {
        cursor: not-allowed;
        background: var(--primary-background);
    }

    &:active {
        background: var(--secondary-background);
    }

    ${r=>r.compact&&b`
            height: 32px !important;
            padding: 2px 12px !important;
            font-size: 13px;
        `}

    ${r=>r.iconbutton&&b`
            height: 38px !important;
            width: 38px !important;
            min-width: unset !important;
        `}

    ${r=>r.accent&&b`
            background: var(--accent) !important;
        `}

    ${r=>r.plain&&b`
            background: transparent !important;

            &:hover {
                text-decoration: underline;
            }

            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }

            &:active {
                background: var(--secondary-background);
            }
        `}

    ${r=>r.contrast&&b`
            padding: 4px 8px;
            background: var(--secondary-header);

            &:hover {
                background: var(--primary-header);
            }

            &:disabled {
                cursor: not-allowed;
                background: var(--secondary-header);
            }

            &:active {
                background: var(--secondary-background);
            }
        `}

    ${r=>r.error&&b`
            color: white;
            font-weight: 600;
            background: var(--error);

            &:hover {
                filter: brightness(1.2);
                background: var(--error);
            }

            &:disabled {
                cursor: not-allowed;
                background: var(--error);
            }
        `}
    
    ${r=>r.gold&&b`
            color: black;
            font-weight: 600;
            background: goldenrod;

            &:hover {
                filter: brightness(1.2);
                background: goldenrod;
            }

            &:disabled {
                cursor: not-allowed;
                background: goldenrod;
            }
        `}
`,x=u.input`
    z-index: 1;
    font-size: 1rem;
    padding: 8px 16px;
    border-radius: var(--border-radius);

    font-family: inherit;
    color: var(--foreground);
    background: var(--primary-background);
    transition: 0.2s ease background-color;

    border: none;
    outline: 2px solid transparent;
    transition: outline-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        background: var(--secondary-background);
    }

    &:focus {
        box-shadow: 0 0 0 1.5pt var(--accent);
    }

    ${r=>r.contrast&&b`
            color: var(--secondary-foreground);
            background: var(--secondary-background);

            &:hover {
                background: var(--hover);
            }
        `}
`;const $=u.div`
    display: inline;

    ${r=>!r.noMargin&&b`
            margin: 0.4em 0;
        `}

    ${r=>r.spaced&&b`
            margin-top: 0.8em;
        `}

    font-size: 14px;
    font-weight: 600;
    color: var(--foreground);
    text-transform: uppercase;

    ${r=>"subtle"===r.type&&b`
            font-size: 12px;
            color: var(--secondary-foreground);
        `}

    ${r=>"error"===r.type&&b`
            font-size: 12px;
            font-weight: 400;
            color: var(--error);
        `}

    ${r=>r.block&&b`
            display: block;
        `}
`;function S(r){return l($,n({},r),r.children,r.children&&r.error&&l(E,null," · "),r.error&&l(S,{type:"error"},l(m,{id:`error.${r.error}`},r.error)))}const C=u.label`
    gap: 4px;
    z-index: 1;
    padding: 4px;
    display: flex;
    cursor: pointer;
    align-items: center;

    font-size: 1rem;
    font-weight: 600;
    user-select: none;
    transition: 0.2s ease all;
    border-radius: var(--border-radius);

    &:hover {
        background: var(--hover);
    }

    > input {
        display: none;
    }

    > div {
        margin: 4px;
        width: 24px;
        height: 24px;
        display: grid;
        place-items: center;
        background: var(--foreground);
        border-radius: var(--border-radius-half);

        svg {
            color: var(--foreground);
            /*stroke-width: 2;*/
        }
    }

    ${r=>r.selected&&b`
            color: white;
            cursor: default;
            background: var(--accent);

            > div {
                background: white;
            }

            > div svg {
                color: var(--accent);
            }

            &:hover {
                background: var(--accent);
            }
        `}
`,z=u.span`
    font-size: 0.8em;
    font-weight: 400;
    color: var(--secondary-foreground);

    ${r=>r.selected&&b`
            color: white;
        `}
`;function M(r){return l(C,{selected:r.checked,disabled:r.disabled,onClick:()=>!r.disabled&&r.onSelect&&r.onSelect()},l("div",null,l(g,{size:12})),l("input",{type:"radio",checked:r.checked}),l("span",null,l("span",null,r.children),r.description&&l(z,{selected:r.checked},r.description)))}export{F as B,P as D,A as F,x as I,D as M,S as O,M as R,T,y as _,V as a,k as b,h as c,O as d,v as e,I as g};
//# sourceMappingURL=Radio.2c134f7f.js.map
