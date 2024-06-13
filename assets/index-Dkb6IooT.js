import{f as me,h as S,i as ge,k as xe,l as fe,m as he,o as ve,n as be,s as Ce,q as ye,t as Z,v as je,w as Se,x as De,y as ke,z as M,D as R,r as p,E as y,F as Te,H as Pe,_ as x,e as z,I as N,u as we,J as B,j as o,K as k,N as _,O as Ie,T as ee,Q as We,U as Me,R as W,d as te,V as Re,W as q,X as Y,Y as Ne,M as Be}from"./index-ZDD_OGMu.js";import{B as V}from"./Button-BJQZiDvD.js";import{S as K}from"./Select-CIif3pin.js";import{M as I}from"./MenuItem-C9iTeXka.js";import{T as oe}from"./TextField-D33VU5iS.js";import{b as se}from"./Constants-Ctlr_h4s.js";import{T as _e,a as $e,e as Ae,c as X,d as F,b as Ee}from"./TableRow-DfXL96tg.js";import{R as Fe}from"./EditOutlined-BJGFf2lr.js";import{T as Oe}from"./TablePagination-CCgkuc_D.js";import{A as Ue}from"./Autocomplete-BVhc5dfA.js";import"./InputLabel-Dw3maVgU.js";function ze(e,t){return()=>null}function Le(e,t){return()=>null}function He(e,t,a,n,c){return null}const Ge={configure:e=>{me.configure(e)}},qe=Object.freeze(Object.defineProperty({__proto__:null,capitalize:S,createChainedFunction:ge,createSvgIcon:xe,debounce:fe,deprecatedPropType:ze,isMuiElement:he,ownerDocument:ve,ownerWindow:be,requirePropFactory:Le,setRef:Ce,unstable_ClassNameGenerator:Ge,unstable_useEnhancedEffect:ye,unstable_useId:Z,unsupportedProp:He,useControlled:je,useEventCallback:Se,useForkRef:De,useIsFocusVisible:ke},Symbol.toStringTag,{value:"Module"}));function Ye(e){return R("MuiDialog",e)}const O=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),ae=p.createContext({}),Ve=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Ke=y(Te,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),Xe=e=>{const{classes:t,scroll:a,maxWidth:n,fullWidth:c,fullScreen:d}=e,m={root:["root"],container:["container",`scroll${S(a)}`],paper:["paper",`paperScroll${S(a)}`,`paperWidth${S(String(n))}`,c&&"paperFullWidth",d&&"paperFullScreen"]};return _(m,Ye,t)},Je=y(Pe,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Qe=y("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.container,t[`scroll${S(a.scroll)}`]]}})(({ownerState:e})=>x({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Ze=y(z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.paper,t[`scrollPaper${S(a.scroll)}`],t[`paperWidth${S(String(a.maxWidth))}`],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>x({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${O.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),et=p.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialog"}),c=we(),d={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":u,BackdropComponent:r,BackdropProps:g,children:v,className:C,disableEscapeKeyDown:b=!1,fullScreen:i=!1,fullWidth:l=!1,maxWidth:f="sm",onBackdropClick:T,onClick:s,onClose:h,open:j,PaperComponent:P=z,PaperProps:H={},scroll:ie="paper",TransitionComponent:re=Ie,transitionDuration:G=d,TransitionProps:le}=n,ce=B(n,Ve),w=x({},n,{disableEscapeKeyDown:b,fullScreen:i,fullWidth:l,maxWidth:f,scroll:ie}),$=Xe(w),A=p.useRef(),de=D=>{A.current=D.target===D.currentTarget},pe=D=>{s&&s(D),A.current&&(A.current=null,T&&T(D),h&&h(D,"backdropClick"))},E=Z(u),ue=p.useMemo(()=>({titleId:E}),[E]);return o.jsx(Je,x({className:k($.root,C),closeAfterTransition:!0,components:{Backdrop:Ke},componentsProps:{backdrop:x({transitionDuration:G,as:r},g)},disableEscapeKeyDown:b,onClose:h,open:j,ref:a,onClick:pe,ownerState:w},ce,{children:o.jsx(re,x({appear:!0,in:j,timeout:G,role:"presentation"},le,{children:o.jsx(Qe,{className:k($.container),onMouseDown:de,ownerState:w,children:o.jsx(Ze,x({as:P,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":E},H,{className:k($.paper,H.className),ownerState:w,children:o.jsx(ae.Provider,{value:ue,children:v})}))})}))}))});function tt(e){return R("MuiDialogActions",e)}M("MuiDialogActions",["root","spacing"]);const ot=["className","disableSpacing"],st=e=>{const{classes:t,disableSpacing:a}=e;return _({root:["root",!a&&"spacing"]},tt,t)},at=y("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:e})=>x({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),nt=p.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogActions"}),{className:c,disableSpacing:d=!1}=n,m=B(n,ot),u=x({},n,{disableSpacing:d}),r=st(u);return o.jsx(at,x({className:k(r.root,c),ownerState:u,ref:a},m))});function it(e){return R("MuiDialogContent",e)}M("MuiDialogContent",["root","dividers"]);function rt(e){return R("MuiDialogTitle",e)}const lt=M("MuiDialogTitle",["root"]),ct=["className","dividers"],dt=e=>{const{classes:t,dividers:a}=e;return _({root:["root",a&&"dividers"]},it,t)},pt=y("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>x({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${lt.root} + &`]:{paddingTop:0}})),ut=p.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogContent"}),{className:c,dividers:d=!1}=n,m=B(n,ct),u=x({},n,{dividers:d}),r=dt(u);return o.jsx(pt,x({className:k(r.root,c),ownerState:u,ref:a},m))}),mt=["className","id"],gt=e=>{const{classes:t}=e;return _({root:["root"]},rt,t)},xt=y(ee,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),ft=p.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogTitle"}),{className:c,id:d}=n,m=B(n,mt),u=n,r=gt(u),{titleId:g=d}=p.useContext(ae);return o.jsx(xt,x({component:"h2",className:k(r.root,c),ownerState:u,ref:a,variant:"h6",id:d??g},m))});var L={},U={};const ht=We(qe);var J;function vt(){return J||(J=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=ht}(U)),U}var bt=Me;Object.defineProperty(L,"__esModule",{value:!0});var ne=L.default=void 0,Ct=bt(vt()),yt=o;ne=L.default=(0,Ct.default)((0,yt.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const jt=y(et)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}));function St(){const[e,t]=W.useState(!1),[a,n]=p.useState(0),[c,d]=p.useState([]),[m,u]=p.useState(null),[r,g]=p.useState([]),v=te(),C=()=>{v("/add/services")},b=()=>{t(!1)},f={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},T=()=>{};return o.jsxs(W.Fragment,{children:[o.jsx(V,{variant:"contained",onClick:C,children:"Add New Service"}),o.jsxs(jt,{onClose:b,"aria-labelledby":"customized-dialog-title",open:e,children:[o.jsx(ft,{sx:{m:0,p:2},id:"customized-dialog-title",color:"blue",children:"Create New Service"}),o.jsx(Re,{"aria-label":"close",onClick:b,sx:{position:"absolute",right:8,top:8,color:s=>s.palette.grey[500]},children:o.jsx(ne,{})}),o.jsxs(ut,{dividers:!0,children:[o.jsx(ee,{gutterBottom:!0,style:{fontSize:"0.7rem",width:"700px"},children:"Fill the form to create a new service. Note all fields are mandatory."}),o.jsx("br",{}),o.jsx("div",{style:{marginTop:"0rem"},children:o.jsx(q,{sx:{m:0,minWidth:120},size:"small",children:o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[o.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),o.jsxs(K,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(a),width:"300px",placeholder:"Choose your Company",MenuProps:f,onChange:s=>{var h,j,P;n(Number((h=s==null?void 0:s.target)==null?void 0:h.value)),fetchBranch((j=s==null?void 0:s.target)==null?void 0:j.value),fetchEmployees((P=s==null?void 0:s.target)==null?void 0:P.value)},children:[o.jsx(I,{value:"",children:o.jsx("em",{children:"None"})}),c==null?void 0:c.map(s=>o.jsx(I,{value:s==null?void 0:s.id,children:s==null?void 0:s.name},s==null?void 0:s.id))]})]})})}),o.jsx("div",{style:{marginTop:"0rem"},children:o.jsx(q,{sx:{m:0,minWidth:120},size:"small",children:o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[o.jsx("p",{style:{marginRight:"2rem"},children:"Branch"}),o.jsxs(K,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(m),width:"300px",placeholder:"Choose your Company",MenuProps:f,onChange:s=>{var h;u((h=s==null?void 0:s.target)==null?void 0:h.value)},children:[o.jsx(I,{value:"",children:o.jsx("em",{children:"None"})}),r==null?void 0:r.map(s=>o.jsx(I,{value:s==null?void 0:s.id,children:s==null?void 0:s.title},s==null?void 0:s.id))]})]})})}),o.jsx("br",{}),o.jsx(oe,{id:"filled-multiline-static",label:"Service Title",multiline:!0,fullWidth:!0,rows:4,placeholder:"Your Service Name here ..."}),o.jsx("br",{})]}),o.jsx(nt,{children:o.jsx(V,{variant:"contained",autoFocus:!0,onClick:T(),children:"Add Service"})})]})]})}const Q=[{id:"id",label:"Id",minWidth:170},{id:"title",label:"Service Title",minWidth:100},{id:"companyId",label:"Company Code",minWidth:170},{id:"action",label:"Action",minWidth:170,align:"center"}],Dt=({companyId:e})=>{const[t,a]=p.useState(0),[n,c]=p.useState(10),[d,m]=p.useState([]),u=te(),r=(i,l)=>{const f=i.id;u("/servicedetail/"+f+"/"+i.companyId)};async function g(){const i=localStorage.getItem("user")||{},l=JSON.parse(i),f=(l==null?void 0:l.token)||"",s=se+"/KioskService/get-all-company-services/"+e,h=await fetch(s,{method:"GET",headers:{Authorization:"Bearer "+f}});h.ok||alert("someting went wrong");const j=await h.json();m(j)}p.useEffect(()=>{g()},[e]);const v=(i,l)=>{a(l)},C=i=>{c(+i.target.value),a(0)},b=(i,l)=>{console.log("currently selected item is ....",i),u("/edit/services/"+i.id+"/"+e)};return o.jsxs(z,{sx:{width:"100%",overflow:"hidden"},children:[o.jsx(_e,{sx:{maxHeight:440},children:o.jsxs($e,{stickyHeader:!0,"aria-label":"sticky table",children:[o.jsx(Ae,{children:o.jsx(X,{children:Q.map(i=>o.jsx(F,{align:i.align,style:{minWidth:i.minWidth},children:i.label},i.id))})}),o.jsx(Ee,{children:d.slice(t*n,t*n+n).map(i=>o.jsx(X,{hover:!0,role:"checkbox",tabIndex:-1,children:Q.map(l=>{if(l.id=="action")return o.jsxs(F,{align:l.align,children:[o.jsx(Y,{title:"Edit Service",arrow:!0,children:o.jsx(Fe,{onClick:()=>b(i)})}),"  ",o.jsx(Y,{title:"View all Service details",arrow:!0,children:o.jsx(Ne,{onClick:()=>r(i),style:{cursor:"pointer",marginLeft:"0.4rem"}})})]},l.id);const f=i[l.id];return o.jsx(F,{align:l.align,children:l.format&&typeof f=="number"?l.format(f):f},l.id)})},i.id))})]})}),o.jsx(Oe,{rowsPerPageOptions:[10,25,100],component:"div",count:d.length,rowsPerPage:n,page:t,onPageChange:v,onRowsPerPageChange:C})]})},kt=Dt;function At(){const[e,t]=W.useState([]),[a,n]=p.useState(""),[c,d]=p.useState(1),m=(r,g)=>{n(g);let v=e==null?void 0:e.filter(C=>C.name==g)[0];v&&d(v.id)};async function u(){var l;const r=localStorage.getItem("user")||{},g=JSON.parse(r),v=(g==null?void 0:g.token)||"",C=se+"/Company/get-companies",b=await fetch(C,{method:"GET",headers:{Authorization:"Bearer "+v}});b.ok||alert("someting went wrong");const i=await b.json();t(i),i.length>0&&(n(i[0].name),d((l=i[0])==null?void 0:l.id))}return W.useEffect(()=>{u()},[]),o.jsxs(Be,{title:"Manage Your Services",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[o.jsx(St,{}),o.jsx(Ue,{inputValue:a,onInputChange:(r,g)=>m(r,g),sx:{width:"400px"},id:"disable-close-on-select",options:e.map(r=>r.name),getOptionLabel:r=>r,renderInput:r=>o.jsx(oe,{...r,variant:"standard"})})]}),o.jsx(kt,{companyId:c})]})}export{At as default};
