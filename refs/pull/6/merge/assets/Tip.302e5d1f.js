var r=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,a,o)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o;import{s as i,C as d,b as t,aC as l,ak as c,aD as s,aE as p,m as u}from"./vendor.f825c847.js";var g=i.div`
    padding: 8px;
    font-size: 14px;
    text-align: center;

    color: var(--accent);
    background: var(--primary-background);
`;const v=i.label`
    gap: 4px;
    z-index: 1;
    display: flex;
    margin-top: 20px;
    align-items: center;
    border-radius: var(--border-radius);

    cursor: pointer;
    font-size: 18px;
    user-select: none;

    transition: 0.2s ease all;

    input {
        display: none;
    }

    &:hover {
        .check {
            background: var(--background);
        }
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
            background: unset;
        }
    }
`,h=i.span`
    display: flex;
    flex-grow: 1;
    font-size: 1rem;
    font-weight: 600;
    flex-direction: column;
`,b=i.span`
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--secondary-foreground);
`,x=i.div`
    margin: 4px;
    width: 24px;
    height: 24px;
    display: grid;
    flex-shrink: 0;
    place-items: center;
    transition: 0.2s ease all;
    border-radius: var(--border-radius);
    background: var(--secondary-background);

    svg {
        color: var(--secondary-background);
    }

    ${r=>r.contrast&&d`
            background: var(--primary-background);

            svg {
                color: var(--primary-background);
            }
        `}

    ${r=>r.checked&&d`
            background: var(--accent) !important;
        `}
`;function f(r){return t(v,{disabled:r.disabled,className:r.className},t(h,null,t("span",null,r.children),r.description&&t(b,null,r.description)),t("input",{type:"checkbox",checked:r.checked,onChange:()=>!r.disabled&&r.onChange(!r.checked)}),t(x,{checked:r.checked,contrast:r.contrast,className:"check"},t(l,{size:20})))}const y=[["#7B68EE","#3498DB","#1ABC9C","#F1C40F","#FF7F50","#FD6671","#E91E63","#D468EE"],["#594CAD","#206694","#11806A","#C27C0E","#CD5B45","#FF424F","#AD1457","#954AA8"]],k=i.div`
    /*gap: 8px;*/
    display: flex;

    input {
        width: 0;
        height: 0;
        top: 72px;
        opacity: 0;
        padding: 0;
        border: 0;
        position: relative;
        pointer-events: none;
    }

    .overlay {
        position: relative;
        width: 0;

        div {
            width: 8px;
            height: 68px;
            background: linear-gradient(
                to right,
                var(--primary-background),
                transparent
            );
        }
    }
`,m=i.div`
    flex-shrink: 0;
    cursor: pointer;
    border-radius: var(--border-radius);
    background-color: ${r=>r.colour};

    display: grid;
    place-items: center;

    &:hover {
        border: 3px solid var(--foreground);
        transition: border ease-in-out 0.07s;
    }

    svg {
        color: white;
    }

    ${r=>"small"===r.type?d`
                  width: 30px;
                  height: 30px;

                  svg {
                      /*stroke-width: 2;*/
                  }
              `:d`
                  width: 68px;
                  height: 68px;
              `}
`,w=i.div`
    gap: 8px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 4px;

    > div {
        gap: 8px;
        display: flex;
        flex-direction: row;
        padding-inline-start: 8px;
    }
`;function C({value:r,onChange:e}){const a=c();return t(k,null,t("input",{type:"color",value:r,ref:a,onChange:r=>e(r.currentTarget.value)}),t(m,{colour:r,type:"large",onClick:()=>{var r;return null==(r=a.current)?void 0:r.click()}},t(s,{size:32})),t("div",{class:"overlay"},t("div",null)),t(w,null,y.map(((a,o)=>t("div",{key:o},a.map(((a,o)=>t(m,{colour:a,type:"small",key:o,onClick:()=>e(a)},a===r&&t(l,{size:22})))))))))}const z=i.div`
    height: 1px;
    width: calc(100% - 10px);
    background: var(--secondary-header);
    margin: 18px auto;
`,E=i.div`
    display: flex;
    padding: 12px;
    overflow: hidden;
    align-items: center;

    font-size: 14px;
    background: var(--primary-header);
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary-header);

    a {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    svg {
        flex-shrink: 0;
        margin-inline-end: 10px;
    }

    ${r=>r.warning&&d`
            color: var(--warning);
            border: 2px solid var(--warning);
            background: var(--secondary-header);
        `}

    ${r=>r.error&&d`
            color: var(--error);
            border: 2px solid var(--error);
            background: var(--secondary-header);
        `}
`;function F(r){const i=r,{children:d,hideSeparator:l}=i,c=((r,n)=>{var i={};for(var d in r)a.call(r,d)&&n.indexOf(d)<0&&(i[d]=r[d]);if(null!=r&&e)for(var d of e(r))n.indexOf(d)<0&&o.call(r,d)&&(i[d]=r[d]);return i})(i,["children","hideSeparator"]);return t(u,null,!l&&t(z,null),t(E,((r,i)=>{for(var d in i||(i={}))a.call(i,d)&&n(r,d,i[d]);if(e)for(var d of e(i))o.call(i,d)&&n(r,d,i[d]);return r})({},c),t(p,{size:20}),t("span",null,d)))}export{g as B,f as C,F as T,C as a};
//# sourceMappingURL=Tip.302e5d1f.js.map
