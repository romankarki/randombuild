import{y as J,x as W,z as F,af as $,_ as i,ag as A,r as D,H as G,aw as K,j as C,I as M,h as Q,J as T}from"./index-By_f7ebx.js";import{u as V}from"./Constants-DuPyYaCq.js";function X(e){return J("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:t,checked:d,disabled:l,edge:a}=e,r={root:["root",d&&"checked",l&&"disabled",a&&`edge${Q(a)}`],input:["input"]};return T(r,X,t)},ee=F($)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ae=D.forwardRef(function(t,d){const{autoFocus:l,checked:a,checkedIcon:r,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:R=!1,icon:P,id:S,inputProps:I,inputRef:v,name:j,onBlur:f,onChange:g,onFocus:m,readOnly:z,required:E=!1,tabIndex:N,type:c,value:b}=t,U=G(t,Y),[k,_]=V({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),o=K(),L=s=>{m&&m(s),o&&o.onFocus&&o.onFocus(s)},q=s=>{f&&f(s),o&&o.onBlur&&o.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const x=s.target.checked;_(x),g&&g(s,x)};let n=y;o&&typeof n>"u"&&(n=o.disabled);const H=c==="checkbox"||c==="radio",u=i({},t,{checked:k,disabled:n,disableFocusRipple:p,edge:R}),B=Z(u);return C.jsxs(ee,i({component:"span",className:M(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:L,onBlur:q,ownerState:u,ref:d},U,{children:[C.jsx(se,i({autoFocus:l,checked:a,defaultChecked:h,className:B.input,disabled:n,id:H?S:void 0,name:j,onChange:O,readOnly:z,ref:v,required:E,ownerState:u,tabIndex:N,type:c},c==="checkbox"&&b===void 0?{}:{value:b},I)),k?r:P]}))});export{ae as S};
