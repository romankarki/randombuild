import{k as V,j as e,r as G,H as Y,X as nt,Q as F,a8 as at,a9 as lt,_ as s,x as it,y as ct,z as m,aa as rt,F as ut,ab as pt,I as D,ac as dt,J as gt}from"./index-CehL7CKG.js";import{d as K}from"./TableRow-Ba-Rw638.js";import{S as bt,u as X}from"./Select-DH0DuH6B.js";import{M as Bt}from"./MenuItem-Bwj8UeyX.js";const ht=V(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),mt=V(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),Pt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],xt=G.forwardRef(function(o,B){var R,P,y,M,k,$,x,u;const{backIconButtonProps:_,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:z,onPageChange:v,page:a,rowsPerPage:g,showFirstButton:b,showLastButton:L,slots:d={},slotProps:n={}}=o,H=Y(o,Pt),l=nt(),U=h=>{v(h,0)},E=h=>{v(h,a-1)},S=h=>{v(h,a+1)},i=h=>{v(h,Math.max(0,Math.ceil(I/g)-1))},c=(R=d.firstButton)!=null?R:F,T=(P=d.lastButton)!=null?P:F,w=(y=d.nextButton)!=null?y:F,A=(M=d.previousButton)!=null?M:F,j=(k=d.firstButtonIcon)!=null?k:ht,N=($=d.lastButtonIcon)!=null?$:mt,r=(x=d.nextButtonIcon)!=null?x:at,J=(u=d.previousButtonIcon)!=null?u:lt,Z=l?T:c,O=l?w:A,tt=l?A:w,ot=l?c:T,et=l?n.lastButton:n.firstButton,Q=l?n.nextButton:n.previousButton,W=l?n.previousButton:n.nextButton,st=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},H,{children:[b&&e.jsx(Z,s({onClick:U,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},et,{children:l?e.jsx(N,s({},n.lastButtonIcon)):e.jsx(j,s({},n.firstButtonIcon))})),e.jsx(O,s({onClick:E,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},Q??_,{children:l?e.jsx(r,s({},n.nextButtonIcon)):e.jsx(J,s({},n.previousButtonIcon))})),e.jsx(tt,s({onClick:S,disabled:f||(I!==-1?a>=Math.ceil(I/g)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},W??z,{children:l?e.jsx(J,s({},n.previousButtonIcon)):e.jsx(r,s({},n.nextButtonIcon))})),L&&e.jsx(ot,s({onClick:i,disabled:f||a>=Math.ceil(I/g)-1,"aria-label":p("last",a),title:p("last",a)},st,{children:l?e.jsx(j,s({},n.firstButtonIcon)):e.jsx(N,s({},n.lastButtonIcon))}))]}))});function It(t){return ct("MuiTablePagination",t)}const C=it("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var q;const ft=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],vt=m(K,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),Rt=m(rt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${C.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${C.actions}`]:{flexShrink:0,marginLeft:20}})),Lt=m("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),St=m("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),Tt=m(bt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${C.selectIcon}`]:o.selectIcon,[`& .${C.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${C.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),wt=m(Bt,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),jt=m("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function Ct({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function yt(t){return`Go to ${t} page`}const Mt=t=>{const{classes:o}=t;return gt({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},It,o)},Nt=G.forwardRef(function(o,B){var R;const P=ut({props:o,name:"MuiTablePagination"}),{ActionsComponent:y=xt,backIconButtonProps:M,className:k,colSpan:$,component:x=K,count:u,disabled:_=!1,getItemAriaLabel:I=yt,labelDisplayedRows:f=Ct,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:z,onPageChange:v,onRowsPerPageChange:a,page:g,rowsPerPage:b,rowsPerPageOptions:L=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:H=!1,slotProps:l={},slots:U={}}=P,E=Y(P,ft),S=P,i=Mt(S),c=(R=l==null?void 0:l.select)!=null?R:d,T=c.native?"option":wt;let w;(x===K||x==="td")&&(w=$||1e3);const A=X(c.id),j=X(c.labelId),N=()=>u===-1?(g+1)*b:b===-1?u:Math.min(u,(g+1)*b);return e.jsx(vt,s({colSpan:w,ref:B,as:x,ownerState:S,className:D(i.root,k)},E,{children:e.jsxs(Rt,{className:i.toolbar,children:[e.jsx(Lt,{className:i.spacer}),L.length>1&&e.jsx(St,{className:i.selectLabel,id:j,children:p}),L.length>1&&e.jsx(Tt,s({variant:"standard"},!c.variant&&{input:q||(q=e.jsx(pt,{}))},{value:b,onChange:a,id:A,labelId:j},c,{classes:s({},c.classes,{root:D(i.input,i.selectRoot,(c.classes||{}).root),select:D(i.select,(c.classes||{}).select),icon:D(i.selectIcon,(c.classes||{}).icon)}),disabled:_,children:L.map(r=>G.createElement(T,s({},!dt(T)&&{ownerState:S},{className:i.menuItem,key:r.label?r.label:r,value:r.value?r.value:r}),r.label?r.label:r))})),e.jsx(jt,{className:i.displayedRows,children:f({from:u===0?0:g*b+1,to:N(),count:u===-1?-1:u,page:g})}),e.jsx(y,{className:i.actions,backIconButtonProps:M,count:u,nextIconButtonProps:z,onPageChange:v,page:g,rowsPerPage:b,showFirstButton:n,showLastButton:H,slotProps:l.actions,slots:U.actions,getItemAriaLabel:I,disabled:_})]})}))});export{Nt as T};
