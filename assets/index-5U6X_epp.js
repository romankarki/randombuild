import{r as c,d as P,j as a,e as R,R as C,M as k}from"./index-ZDD_OGMu.js";import"./EmployeeTable-BrR0gz29.js";import{b as T}from"./Constants-Ctlr_h4s.js";import{T as I,a as S,e as E,c as w,d as j,b as A}from"./TableRow-DfXL96tg.js";import{R as N}from"./EditOutlined-BJGFf2lr.js";import{T as W}from"./TablePagination-CCgkuc_D.js";import{B as L}from"./Button-BJQZiDvD.js";import{A as O}from"./Autocomplete-BVhc5dfA.js";import{T as H}from"./TextField-D33VU5iS.js";import"./Select-CIif3pin.js";import"./MenuItem-C9iTeXka.js";import"./InputLabel-Dw3maVgU.js";const v=[{id:"id",label:"Id",minWidth:170},{id:"title",label:"Branch Name",minWidth:100},{id:"description",label:"Description",minWidth:170,align:"right"},{id:"companyName",label:"Company Name",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],U=({companyid:o})=>{const[l,m]=c.useState(0),[r,p]=c.useState(10),[d,f]=c.useState([]);async function u(){console.log("this is companyid",o);const e=localStorage.getItem("user")||{},t=JSON.parse(e),i=(t==null?void 0:t.token)||"",g=T+"/Branch/get-all-branches-for-company/"+o,y=await fetch(g,{method:"GET",headers:{Authorization:"Bearer "+i}});y.ok||alert("someting went wrong");const B=await y.json();f(B)}c.useEffect(()=>{u()},[o]);const b=(e,t)=>{m(t)},x=e=>{p(+e.target.value),m(0)},n=P(),s=(e,t)=>{console.log("currently selected item is ....",e),n("/edit/branches/"+e.id+"/"+o)};return a.jsxs(R,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(I,{sx:{maxHeight:440},children:a.jsxs(S,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(E,{children:a.jsx(w,{children:v.map(e=>a.jsx(j,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),a.jsx(A,{children:d.slice(l*r,l*r+r).map(e=>a.jsx(w,{hover:!0,role:"checkbox",tabIndex:-1,children:v.map(t=>{if(t.id=="action")return a.jsx(j,{align:t.align,children:a.jsx(N,{onClick:()=>s(e)})},t.id);const i=e[t.id];return a.jsx(j,{align:t.align,children:t.format&&typeof i=="number"?t.format(i):i},t.id)})},e.id))})]})}),a.jsx(W,{rowsPerPageOptions:[10,25,100],component:"div",count:d.length,rowsPerPage:r,page:l,onPageChange:b,onRowsPerPageChange:x})]})},z=U;function Z(){const[o,l]=C.useState([]),[m,r]=c.useState(""),[p,d]=c.useState(1),f=(n,s)=>{r(s);let e=o==null?void 0:o.filter(t=>t.name==s)[0];e&&d(e.id)};async function u(){var g;const n=localStorage.getItem("user")||{},s=JSON.parse(n),e=(s==null?void 0:s.token)||"",t=T+"/Company/get-companies",i=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}});i.ok||alert("someting went wrong");const h=await i.json();l(h),h.length>0&&(r(h[0].name),d((g=h[0])==null?void 0:g.id))}C.useEffect(()=>{u()},[]);const b=P(),x=()=>{b("/add/branches")};return a.jsxs(k,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[a.jsx(L,{onClick:x,variant:"contained",disableElevation:!0,children:"Add New"}),a.jsx(O,{inputValue:m,onInputChange:(n,s)=>f(n,s),sx:{width:"400px"},id:"disable-close-on-select",options:o.map(n=>n.name),getOptionLabel:n=>n,renderInput:n=>a.jsx(H,{...n,variant:"standard"})})]}),a.jsx(z,{companyid:p})]})}export{Z as default};
