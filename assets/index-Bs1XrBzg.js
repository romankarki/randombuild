import{r,j as e,e as C,d as P,M as y}from"./index-BRiPDprX.js";import{b as v}from"./Constants-C3A6Gqx3.js";import{T as w,a as T,e as k,c,d as m,b as R}from"./TableRow-CbL5wReq.js";import{T as W}from"./TablePagination-B-yfh3Wz.js";import{B as E}from"./Button-CgWm9gs8.js";import"./Select-B1tC3DLq.js";import"./MenuItem-B0v1FVPj.js";const h=[{id:"name",label:"Name",minWidth:170},{id:"id",label:"Id",minWidth:100},{id:"address",label:"Address",minWidth:170,align:"right"},{id:"logo",label:"Url",minWidth:170,align:"right"}],S=()=>{const[s,i]=r.useState(0),[o,g]=r.useState(10),[l,p]=r.useState([]);r.useEffect(()=>{async function a(){const t=sessionStorage.getItem("user")||{},n=JSON.parse(t),u=(n==null?void 0:n.token)||"",j=v+"/Company/get-companies",d=await fetch(j,{method:"GET",headers:{Authorization:"Bearer "+u}});d.ok||alert("someting went wrong");const f=await d.json();p(f)}a()},[]);const b=(a,t)=>{i(t)},x=a=>{g(+a.target.value),i(0)};return e.jsxs(C,{sx:{width:"100%",overflow:"hidden"},children:[e.jsx(w,{sx:{maxHeight:440},children:e.jsxs(T,{stickyHeader:!0,"aria-label":"sticky table",children:[e.jsx(k,{children:e.jsx(c,{children:h.map(a=>e.jsx(m,{align:a.align,style:{minWidth:a.minWidth},children:a.label},a.id))})}),e.jsx(R,{children:l.slice(s*o,s*o+o).map(a=>e.jsx(c,{hover:!0,role:"checkbox",tabIndex:-1,children:h.map(t=>{const n=a[t.id];return e.jsx(m,{align:t.align,children:t.format&&typeof n=="number"?t.format(n):n},t.id)})},a.Id))})]})}),e.jsx(W,{rowsPerPageOptions:[10,25,100],component:"div",count:l.length,rowsPerPage:o,page:s,onPageChange:b,onRowsPerPageChange:x})]})},B=S;function L(){const s=P(),i=()=>{s("/add/company")};return e.jsxs(y,{title:"Manage your Company",children:[e.jsx("div",{children:e.jsx(E,{variant:"contained",onClick:i,disableElevation:!0,children:"Add New Company"})}),e.jsx("br",{}),e.jsx(B,{})]})}export{L as default};
