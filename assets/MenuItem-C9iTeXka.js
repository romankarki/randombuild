import{z as P,D as T,E,ag as F,ah as G,_ as r,ai as C,a1 as d,aj as x,ak as $,r as c,I as L,J as _,al as I,q as w,x as U,j as M,K as O,N as z}from"./index-ZDD_OGMu.js";function D(e){return T("MuiMenuItem",e)}const n=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=(e,a)=>{const{ownerState:s}=e;return[a.root,s.dense&&a.dense,s.divider&&a.divider,!s.disableGutters&&a.gutters]},W=e=>{const{disabled:a,dense:s,divider:t,disableGutters:l,selected:p,classes:o}=e,i=z({root:["root",s&&"dense",a&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},D,o);return r({},o,i)},q=E(F,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:S})(({theme:e,ownerState:a})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${x.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${x.inset}`]:{marginLeft:52},[`& .${$.root}`]:{marginTop:0,marginBottom:0},[`& .${$.inset}`]:{paddingLeft:36},[`& .${C.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${C.root} svg`]:{fontSize:"1.25rem"}}))),K=c.forwardRef(function(a,s){const t=L({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:v,className:j}=t,B=_(t,H),f=c.useContext(I),m=c.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),u=c.useRef(null);w(()=>{l&&u.current&&u.current.focus()},[l]);const N=r({},t,{dense:m.dense,divider:g,disableGutters:i}),b=W(t),V=U(u,s);let y;return t.disabled||(y=v!==void 0?v:-1),M.jsx(I.Provider,{value:m,children:M.jsx(q,r({ref:V,role:R,tabIndex:y,component:p,focusVisibleClassName:O(b.focusVisible,k),className:O(b.root,j)},B,{ownerState:N,classes:b}))})});export{K as M};
