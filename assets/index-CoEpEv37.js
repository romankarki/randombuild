import{f as ue,h as S,i as me,k as ge,l as xe,m as fe,o as he,n as ve,s as be,q as Ce,t as ye,v as je,w as Se,x as M,y as R,r as d,z as j,D as De,E as ke,_ as f,e as z,F as N,u as Te,H as B,j as o,I as k,J as _,K as Pe,T as Q,N as we,O as Ie,R as W,d as Z,Q as We,U as q,M as Me}from"./index-CpCWadZh.js";import{u as ee,S as Y}from"./Select-D4PcgPVA.js";import{u as Re,b as te}from"./Constants-Bro63_Lq.js";import{B as K}from"./Button-DLaKrcGl.js";import{M as I}from"./MenuItem-4edqsSKK.js";import{T as oe}from"./TextField-1kVY69qX.js";import{T as Ne,a as Be,e as _e,c as J,d as F,b as $e}from"./TableRow-BKMUfiBY.js";import{T as Ae}from"./Tooltip-BvPKjKmy.js";import{R as Ee,G as Fe,A as Oe}from"./GetValuesFromLocalStorage-DJA5M7Dr.js";import{T as Ue}from"./TablePagination-DOw4zX9r.js";import"./InputLabel-B9cEyF0g.js";function ze(e,t){return()=>null}function Le(e,t){return()=>null}function He(e,t,a,n,l){return null}const Ge={configure:e=>{ue.configure(e)}},qe=Object.freeze(Object.defineProperty({__proto__:null,capitalize:S,createChainedFunction:me,createSvgIcon:ge,debounce:xe,deprecatedPropType:ze,isMuiElement:fe,ownerDocument:he,ownerWindow:ve,requirePropFactory:Le,setRef:be,unstable_ClassNameGenerator:Ge,unstable_useEnhancedEffect:Ce,unstable_useId:ee,unsupportedProp:He,useControlled:Re,useEventCallback:ye,useForkRef:je,useIsFocusVisible:Se},Symbol.toStringTag,{value:"Module"}));function Ye(e){return R("MuiDialog",e)}const O=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),se=d.createContext({}),Ke=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Je=j(De,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),Ve=e=>{const{classes:t,scroll:a,maxWidth:n,fullWidth:l,fullScreen:c}=e,m={root:["root"],container:["container",`scroll${S(a)}`],paper:["paper",`paperScroll${S(a)}`,`paperWidth${S(String(n))}`,l&&"paperFullWidth",c&&"paperFullScreen"]};return _(m,Ye,t)},Xe=j(ke,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),Qe=j("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.container,t[`scroll${S(a.scroll)}`]]}})(({ownerState:e})=>f({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Ze=j(z,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.paper,t[`scrollPaper${S(a.scroll)}`],t[`paperWidth${S(String(a.maxWidth))}`],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})(({theme:e,ownerState:t})=>f({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},t.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},t.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},t.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.maxWidth&&t.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,[`&.${O.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${O.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),et=d.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialog"}),l=Te(),c={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":u,BackdropComponent:g,BackdropProps:p,children:x,className:C,disableEscapeKeyDown:i=!1,fullScreen:r=!1,fullWidth:h=!1,maxWidth:y="sm",onBackdropClick:v,onClick:s,onClose:b,open:T,PaperComponent:P=z,PaperProps:H={},scroll:ne="paper",TransitionComponent:ie=Pe,transitionDuration:G=c,TransitionProps:re}=n,le=B(n,Ke),w=f({},n,{disableEscapeKeyDown:i,fullScreen:r,fullWidth:h,maxWidth:y,scroll:ne}),$=Ve(w),A=d.useRef(),ce=D=>{A.current=D.target===D.currentTarget},de=D=>{s&&s(D),A.current&&(A.current=null,v&&v(D),b&&b(D,"backdropClick"))},E=ee(u),pe=d.useMemo(()=>({titleId:E}),[E]);return o.jsx(Xe,f({className:k($.root,C),closeAfterTransition:!0,components:{Backdrop:Je},componentsProps:{backdrop:f({transitionDuration:G,as:g},p)},disableEscapeKeyDown:i,onClose:b,open:T,ref:a,onClick:de,ownerState:w},le,{children:o.jsx(ie,f({appear:!0,in:T,timeout:G,role:"presentation"},re,{children:o.jsx(Qe,{className:k($.container),onMouseDown:ce,ownerState:w,children:o.jsx(Ze,f({as:P,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":E},H,{className:k($.paper,H.className),ownerState:w,children:o.jsx(se.Provider,{value:pe,children:x})}))})}))}))});function tt(e){return R("MuiDialogActions",e)}M("MuiDialogActions",["root","spacing"]);const ot=["className","disableSpacing"],st=e=>{const{classes:t,disableSpacing:a}=e;return _({root:["root",!a&&"spacing"]},tt,t)},at=j("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})(({ownerState:e})=>f({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),nt=d.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogActions"}),{className:l,disableSpacing:c=!1}=n,m=B(n,ot),u=f({},n,{disableSpacing:c}),g=st(u);return o.jsx(at,f({className:k(g.root,l),ownerState:u,ref:a},m))});function it(e){return R("MuiDialogContent",e)}M("MuiDialogContent",["root","dividers"]);function rt(e){return R("MuiDialogTitle",e)}const lt=M("MuiDialogTitle",["root"]),ct=["className","dividers"],dt=e=>{const{classes:t,dividers:a}=e;return _({root:["root",a&&"dividers"]},it,t)},pt=j("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>f({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${lt.root} + &`]:{paddingTop:0}})),ut=d.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogContent"}),{className:l,dividers:c=!1}=n,m=B(n,ct),u=f({},n,{dividers:c}),g=dt(u);return o.jsx(pt,f({className:k(g.root,l),ownerState:u,ref:a},m))}),mt=["className","id"],gt=e=>{const{classes:t}=e;return _({root:["root"]},rt,t)},xt=j(Q,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),ft=d.forwardRef(function(t,a){const n=N({props:t,name:"MuiDialogTitle"}),{className:l,id:c}=n,m=B(n,mt),u=n,g=gt(u),{titleId:p=c}=d.useContext(se);return o.jsx(xt,f({component:"h2",className:k(g.root,l),ownerState:u,ref:a,variant:"h6",id:c??p},m))});var L={},U={};const ht=we(qe);var V;function vt(){return V||(V=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=ht}(U)),U}var bt=Ie;Object.defineProperty(L,"__esModule",{value:!0});var ae=L.default=void 0,Ct=bt(vt()),yt=o;ae=L.default=(0,Ct.default)((0,yt.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const jt=j(et)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}));function St(){const[e,t]=W.useState(!1),[a,n]=d.useState(0),[l,c]=d.useState([]),[m,u]=d.useState(null),[g,p]=d.useState([]),x=Z(),C=()=>{x("/add/services")},i=()=>{t(!1)},y={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},v=()=>{};return o.jsxs(W.Fragment,{children:[o.jsx(K,{variant:"contained",onClick:C,children:"Add New Service Department"}),o.jsxs(jt,{onClose:i,"aria-labelledby":"customized-dialog-title",open:e,children:[o.jsx(ft,{sx:{m:0,p:2},id:"customized-dialog-title",color:"blue",children:"Create New Service"}),o.jsx(We,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:s=>s.palette.grey[500]},children:o.jsx(ae,{})}),o.jsxs(ut,{dividers:!0,children:[o.jsx(Q,{gutterBottom:!0,style:{fontSize:"0.7rem",width:"700px"},children:"Fill the form to create a new service. Note all fields are mandatory."}),o.jsx("br",{}),o.jsx("div",{style:{marginTop:"0rem"},children:o.jsx(q,{sx:{m:0,minWidth:120},size:"small",children:o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[o.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),o.jsxs(Y,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(a),width:"300px",placeholder:"Choose your Company",MenuProps:y,onChange:s=>{var b,T,P;n(Number((b=s==null?void 0:s.target)==null?void 0:b.value)),fetchBranch((T=s==null?void 0:s.target)==null?void 0:T.value),fetchEmployees((P=s==null?void 0:s.target)==null?void 0:P.value)},children:[o.jsx(I,{value:"",children:o.jsx("em",{children:"None"})}),l==null?void 0:l.map(s=>o.jsx(I,{value:s==null?void 0:s.id,children:s==null?void 0:s.name},s==null?void 0:s.id))]})]})})}),o.jsx("div",{style:{marginTop:"0rem"},children:o.jsx(q,{sx:{m:0,minWidth:120},size:"small",children:o.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[o.jsx("p",{style:{marginRight:"2rem"},children:"Branch"}),o.jsxs(Y,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(m),width:"300px",placeholder:"Choose your Company",MenuProps:y,onChange:s=>{var b;u((b=s==null?void 0:s.target)==null?void 0:b.value)},children:[o.jsx(I,{value:"",children:o.jsx("em",{children:"None"})}),g==null?void 0:g.map(s=>o.jsx(I,{value:s==null?void 0:s.id,children:s==null?void 0:s.title},s==null?void 0:s.id))]})]})})}),o.jsx("br",{}),o.jsx(oe,{id:"filled-multiline-static",label:"Service Title",multiline:!0,fullWidth:!0,rows:4,placeholder:"Your Service Name here ..."}),o.jsx("br",{})]}),o.jsx(nt,{children:o.jsx(K,{variant:"contained",autoFocus:!0,onClick:v(),children:"Add Service"})})]})]})}const X=[{id:"id",label:"Id",minWidth:170},{id:"departmentName",label:"Service Department",minWidth:100},{id:"companyName",label:"Company Name",minWidth:170},{id:"action",label:"Action",minWidth:170,align:"center"}],Dt=({companyId:e})=>{const[t,a]=d.useState(0),[n,l]=d.useState(10),[c,m]=d.useState([]),u=Z();async function g(){const i=sessionStorage.getItem("user")||{},r=JSON.parse(i),h=(r==null?void 0:r.token)||"",v=te+"/KioskService/get-all-company-department/"+e,s=await fetch(v,{method:"GET",headers:{Authorization:"Bearer "+h}});s.ok||alert("someting went wrong");const b=await s.json();m(b)}d.useEffect(()=>{g()},[e]);const p=(i,r)=>{a(r)},x=i=>{l(+i.target.value),a(0)},C=(i,r)=>{console.log("currently selected item is ....",i),u("/edit/services/"+i.id+"/"+e)};return o.jsxs(z,{sx:{width:"100%",overflow:"hidden"},children:[o.jsx(Ne,{sx:{maxHeight:440},children:o.jsxs(Be,{stickyHeader:!0,"aria-label":"sticky table",children:[o.jsx(_e,{children:o.jsx(J,{children:X.map(i=>o.jsx(F,{align:i.align,style:{minWidth:i.minWidth},children:i.label},i.id))})}),o.jsx($e,{children:c.slice(t*n,t*n+n).map(i=>o.jsx(J,{hover:!0,role:"checkbox",tabIndex:-1,children:X.map(r=>{if(r.id=="action")return o.jsx(F,{align:r.align,children:o.jsx(Ae,{title:"Edit Service",arrow:!0,children:o.jsx(Ee,{onClick:()=>C(i)})})},r.id);const h=i[r.id];return o.jsx(F,{align:r.align,children:r.format&&typeof h=="number"?r.format(h):h},r.id)})},i.id))})]})}),o.jsx(Ue,{rowsPerPageOptions:[10,25,100],component:"div",count:c.length,rowsPerPage:n,page:t,onPageChange:p,onRowsPerPageChange:x})]})},kt=Dt;function At(){const[e,t]=W.useState([]),[a,n]=d.useState(""),[l,c]=d.useState(1),m=(p,x)=>{n(x);let C=e==null?void 0:e.filter(i=>i.name==x)[0];C&&c(C.id)};async function u(){const p=sessionStorage.getItem("user")||{},x=JSON.parse(p),C=(x==null?void 0:x.token)||"",i=te+"/Company/get-companies",r=await fetch(i,{method:"GET",headers:{Authorization:"Bearer "+C}});r.ok||alert("someting went wrong");const h=await r.json();t(h);let y=h==null?void 0:h.filter(s=>s.Id==x.companyId),v=(y==null?void 0:y.pop())||null;v&&(n(v.name),c(v==null?void 0:v.id))}W.useEffect(()=>{u()},[]);const g=Fe();return o.jsxs(Me,{title:"Manage Your Service Department",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[o.jsx(St,{}),g.toLowerCase()==="superadmin"?o.jsx(Oe,{inputValue:a,onInputChange:(p,x)=>m(p,x),sx:{width:"400px"},id:"disable-close-on-select",options:e.map(p=>p.name),getOptionLabel:p=>p,renderInput:p=>o.jsx(oe,{...p,variant:"standard"})}):null]}),o.jsx(kt,{companyId:l})]})}export{At as default};
