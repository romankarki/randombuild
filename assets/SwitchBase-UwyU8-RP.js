import{E as W,D as X,z as F,ac as $,_ as d,ad as A,r as G,N as H,at as J,j as x,U as K,h as M,X as Q}from"./index-DRQ6_V5g.js";import{u as T}from"./Constants-CKiQFZHc.js";function V(e){return W("PrivateSwitchBase",e)}X("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:i,disabled:l,edge:a}=e,r={root:["root",i&&"checked",l&&"disabled",a&&`edge${M(a)}`],input:["input"]};return Q(r,V,o)},ee=F($)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=G.forwardRef(function(o,i){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:P,id:S,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:z,required:E=!1,tabIndex:N,type:c,value:b}=o,U=H(o,Y),[k,_]=T({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=J(),L=s=>{m&&m(s),t&&t.onFocus&&t.onFocus(s)},q=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;_(C),g&&g(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const D=c==="checkbox"||c==="radio",u=d({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return x.jsxs(ee,d({component:"span",className:K(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:q,ownerState:u,ref:i},U,{children:[x.jsx(se,d({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:n,id:D?S:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:P]}))});export{ae as S};
