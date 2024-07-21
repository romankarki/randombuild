import{r as l,d as T,j as n,e as k,R as C,M as I}from"./index-Bz6Q7mkc.js";import{b as R}from"./Constants-D_b9nDxE.js";import{T as S,a as E,e as A,c as v,d as y,b as B}from"./TableRow-D_fEnAwa.js";import{R as L,G as W,A as G}from"./GetValuesFromLocalStorage-DmvbEdkW.js";import{T as O}from"./TablePagination-Ba4HJYAm.js";import{B as U}from"./Button-CDpLXtAP.js";import{T as H}from"./TextField-CqcfMrm6.js";import"./Select-CisjQ6sL.js";import"./MenuItem-DWTedjKg.js";import"./InputLabel-DAB9vEt8.js";const P=[{id:"id",label:"Id",minWidth:170},{id:"text",label:"Details",minWidth:100},{id:"companyName",label:"Company Name",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],z=({companyid:o})=>{const[m,p]=l.useState(0),[i,h]=l.useState(10),[g,u]=l.useState([]);async function f(){const e=sessionStorage.getItem("user")||{},t=JSON.parse(e),s=(t==null?void 0:t.token)||"",c=R+"/NewsAndNotice/get-company-news-notices/"+o,d=await fetch(c,{method:"GET",headers:{Authorization:"Bearer "+s}});d.ok||alert("someting went wrong");const r=await d.json();u(r)}l.useEffect(()=>{f()},[o]);const x=(e,t)=>{p(t)},w=e=>{h(+e.target.value),p(0)},b=T(),a=(e,t)=>{console.log("currently selected item is ....",e),b("/edit/news/"+e.id)};return n.jsxs(k,{sx:{width:"100%",overflow:"hidden"},children:[n.jsx(S,{sx:{maxHeight:440},children:n.jsxs(E,{stickyHeader:!0,"aria-label":"sticky table",children:[n.jsx(A,{children:n.jsx(v,{children:P.map(e=>n.jsx(y,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),n.jsx(B,{children:g.slice(m*i,m*i+i).map(e=>n.jsx(v,{hover:!0,role:"checkbox",tabIndex:-1,children:P.map(t=>{if(t.id=="action")return n.jsx(y,{align:t.align,children:n.jsx(L,{onClick:()=>a(e)})},t.id);const s=e[t.id];return n.jsx(y,{align:t.align,children:t.format&&typeof s=="number"?t.format(s):s},t.id)})},e.id))})]})}),n.jsx(O,{rowsPerPageOptions:[10,25,100],component:"div",count:g.length,rowsPerPage:i,page:m,onPageChange:x,onRowsPerPageChange:w})]})},D=z;function Z(){const[o,m]=C.useState([]),[p,i]=l.useState(""),[h,g]=l.useState(1),u=(a,e)=>{i(e);let t=o==null?void 0:o.filter(s=>s.name==e)[0];t&&g(t.id)};async function f(){const a=sessionStorage.getItem("user")||{},e=JSON.parse(a),t=(e==null?void 0:e.token)||"",s=R+"/Company/get-companies",j=await fetch(s,{method:"GET",headers:{Authorization:"Bearer "+t}});j.ok||alert("someting went wrong");const c=await j.json();m(c);let d=c==null?void 0:c.filter(N=>N.id==e.companyId),r=(d==null?void 0:d.pop())||null;r&&(i(r.name),g(r==null?void 0:r.id))}C.useEffect(()=>{f()},[]);const x=T(),w=()=>{x("/add/news")},b=W();return l.useEffect(()=>{},[p]),n.jsxs(I,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[n.jsx(U,{onClick:w,variant:"contained",disableElevation:!0,children:"Add New"}),b.toLowerCase()==="superadmin"?n.jsx(G,{inputValue:p,onInputChange:(a,e)=>u(a,e),sx:{width:"400px"},id:"disable-close-on-select",options:o.map(a=>a.name),getOptionLabel:a=>a,renderInput:a=>n.jsx(H,{...a,placeholder:"Showing Default Company",variant:"standard"})}):null]}),n.jsx(D,{companyid:h})]})}export{Z as default};
