import{r as c,d as T,j as a,e as I,R as C,M as k}from"./index-DCeAPTtK.js";import{b as N}from"./Constants-BcLiUPXy.js";import{T as S,a as A,e as E,c as v,d as y,b as F}from"./TableRow-CZGX-GhC.js";import{R as B,G as L,A as W}from"./GetValuesFromLocalStorage-Dbl3lL23.js";import{T as G}from"./TablePagination-CMRdn5aV.js";import{B as O}from"./Button-grK8t_s-.js";import{T as U}from"./TextField-DmNwSYEK.js";import"./Select-DnlpMmdM.js";import"./MenuItem-Do8fBNbv.js";import"./InputLabel-BOqOrIZB.js";const P=[{id:"id",label:"Id",minWidth:170},{id:"content",label:"Flash News",minWidth:100},{id:"expiryDate",label:"Expiry Date",minWidth:170,align:"right"},{id:"companyName",label:"Company Name",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],H=({companyid:o})=>{const[d,m]=c.useState(0),[r,g]=c.useState(10),[h,f]=c.useState([]);async function u(){console.log("this is companyid",o);const e=sessionStorage.getItem("user")||{},t=JSON.parse(e),n=(t==null?void 0:t.token)||"",l=N+"/NewsAndNotice/get-flash-news/"+o+"?status=all",i=await fetch(l,{method:"GET",headers:{Authorization:"Bearer "+n}});i.ok||alert("someting went wrong");const p=await i.json();f(p)}c.useEffect(()=>{u()},[o]);const x=(e,t)=>{m(t)},w=e=>{g(+e.target.value),m(0)},b=T(),s=(e,t)=>{console.log("currently selected item is ....",e),b("/edit/flashnews/"+e.id)};return a.jsxs(I,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(S,{sx:{maxHeight:440},children:a.jsxs(A,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(E,{children:a.jsx(v,{children:P.map(e=>a.jsx(y,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),a.jsx(F,{children:h.slice(d*r,d*r+r).map(e=>a.jsx(v,{hover:!0,role:"checkbox",tabIndex:-1,children:P.map(t=>{if(t.id=="action")return a.jsx(y,{align:t.align,children:a.jsx(B,{onClick:()=>s(e)})},t.id);const n=e[t.id];return a.jsx(y,{align:t.align,children:t.format&&typeof n=="number"?t.format(n):n},t.id)})},e.id))})]})}),a.jsx(G,{rowsPerPageOptions:[10,25,100],component:"div",count:h.length,rowsPerPage:r,page:d,onPageChange:x,onRowsPerPageChange:w})]})},z=H;function Z(){const[o,d]=C.useState([]),[m,r]=c.useState(""),[g,h]=c.useState(1),f=(s,e)=>{r(e);let t=o==null?void 0:o.filter(n=>n.name==e)[0];t&&h(t.id)};async function u(){var p;const s=sessionStorage.getItem("user")||{},e=JSON.parse(s),t=(e==null?void 0:e.token)||"",n=N+"/Company/get-companies",j=await fetch(n,{method:"GET",headers:{Authorization:"Bearer "+t}});j.ok||alert("someting went wrong");const l=await j.json();d(l);let i=(p=l==null?void 0:l.filter(R=>R.Id==e.companyId))==null?void 0:p.pop();i&&(r(i.name),h(i==null?void 0:i.id))}C.useEffect(()=>{u()},[]);const x=T(),w=()=>{x("/add/flashNews")},b=L();return a.jsxs(k,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[a.jsx(O,{onClick:w,variant:"contained",disableElevation:!0,children:"Add New"}),b.toLowerCase()==="superadmin"?a.jsx(W,{inputValue:m,onInputChange:(s,e)=>f(s,e),sx:{width:"400px"},id:"disable-close-on-select",options:o.map(s=>s.name),getOptionLabel:s=>s,renderInput:s=>a.jsx(U,{...s,variant:"standard"})}):null]}),a.jsx(z,{companyid:g})]})}export{Z as default};
