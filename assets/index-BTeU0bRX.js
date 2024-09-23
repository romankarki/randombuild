import{r as c,d as T,j as a,e as k,R as w,M as I}from"./index-_AWSBuUU.js";import"./EmployeeTable-CkHZvKUl.js";import{b as B}from"./Constants-DGXMJ-DT.js";import{R as S,G as E,A}from"./GetValuesFromLocalStorage-idXzu9Sl.js";import{T as L,a as N,e as W,c as v,d as C,b as G}from"./TableRow-DhcXuOZB.js";import{T as O}from"./TablePagination-BxifiRkg.js";import{B as U}from"./Button-CJj7kHSd.js";import{T as H}from"./TextField-BObO4OcV.js";import"./Select-eC4K4ZSx.js";import"./MenuItem-CallC8N8.js";import"./InputLabel-B7cXIkNh.js";const P=[{id:"id",label:"Id",minWidth:170},{id:"title",label:"Branch Name",minWidth:100},{id:"description",label:"Description",minWidth:170,align:"right"},{id:"companyName",label:"Company Name",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],z=({companyid:s})=>{const[h,p]=c.useState(0),[i,g]=c.useState(10),[m,f]=c.useState([]);async function u(){console.log("this is companyid",s);const e=sessionStorage.getItem("user")||{},t=JSON.parse(e),o=(t==null?void 0:t.token)||"",l=B+"/Branch/get-all-branches-for-company/"+s,d=await fetch(l,{method:"GET",headers:{Authorization:"Bearer "+o}});d.ok||alert("someting went wrong");const r=await d.json();f(r)}c.useEffect(()=>{u()},[s]);const b=(e,t)=>{p(t)},x=e=>{g(+e.target.value),p(0)},j=T(),n=(e,t)=>{console.log("currently selected item is ....",e),j("/edit/branches/"+e.id+"/"+s)};return a.jsxs(k,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(L,{sx:{maxHeight:440},children:a.jsxs(N,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(W,{children:a.jsx(v,{children:P.map(e=>a.jsx(C,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),a.jsx(G,{children:m.slice(h*i,h*i+i).map(e=>a.jsx(v,{hover:!0,role:"checkbox",tabIndex:-1,children:P.map(t=>{if(t.id=="action")return a.jsx(C,{align:t.align,children:a.jsx(S,{onClick:()=>n(e)})},t.id);const o=e[t.id];return a.jsx(C,{align:t.align,children:t.format&&typeof o=="number"?t.format(o):o},t.id)})},e.id))})]})}),a.jsx(O,{rowsPerPageOptions:[10,25,100],component:"div",count:m.length,rowsPerPage:i,page:h,onPageChange:b,onRowsPerPageChange:x})]})},J=z;function _(){const[s,h]=w.useState([]),[p,i]=c.useState(""),[g,m]=c.useState(1),f=(n,e)=>{i(e);let t=s==null?void 0:s.filter(o=>o.name==e)[0];t&&m(t.id)};async function u(){const n=sessionStorage.getItem("user")||{},e=JSON.parse(n),t=(e==null?void 0:e.token)||"",o=B+"/Company/get-companies",y=await fetch(o,{method:"GET",headers:{Authorization:"Bearer "+t}});y.ok||alert("someting went wrong");const l=await y.json();h(l);let d=l==null?void 0:l.filter(R=>R.id==e.companyId),r=d==null?void 0:d.pop();r&&(i(r.name),m(r==null?void 0:r.id))}w.useEffect(()=>{u()},[]),c.useEffect(()=>{},[g]);const b=T(),x=()=>{b("/add/branches")},j=E();return a.jsxs(I,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[a.jsx(U,{onClick:x,variant:"contained",disableElevation:!0,children:"Add New"}),j.toLowerCase()==="superadmin"?a.jsx(A,{inputValue:p,onInputChange:(n,e)=>f(n,e),sx:{width:"400px"},id:"disable-close-on-select",options:s.map(n=>n.name),getOptionLabel:n=>n,renderInput:n=>a.jsx(H,{...n,variant:"standard"})}):null]}),a.jsx(J,{companyid:g})]})}export{_ as default};
