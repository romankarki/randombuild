import{r as l,d as P,j as a,e as k,R as C,M as I}from"./index-DXOqlz8S.js";import"./EmployeeTable-S8HYYyDR.js";import{b as R}from"./Constants-DP-d7XJz.js";import{T as G,a as N,e as S,c as w,d as j,b as B}from"./TableRow-L_Xm83yX.js";import{R as W,G as A,A as L}from"./GetValuesFromLocalStorage-DrF4OU4q.js";import{T as O}from"./TablePagination-b35qWub_.js";import{B as U}from"./Button-K3mHJVKx.js";import{T as H}from"./TextField-Dwy0TTj8.js";import"./Select-B0zV3ojE.js";import"./MenuItem-DDRGYG7L.js";import"./InputLabel-CjDmApQ-.js";const T=[{id:"id",label:"Id",minWidth:170},{id:"employeeName",label:"Employee Name",minWidth:100},{id:"grievanceType",label:"Grievance Type",minWidth:170,align:"right"},{id:"branchName",label:"Branch Name",minWidth:170,align:"right"},{id:"companyName",label:"Company Name",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],z=({companyid:s=1})=>{const[d,p]=l.useState(0),[r,h]=l.useState(10),[m,f]=l.useState([]);async function u(){console.log("this is companyid",s);const e=sessionStorage.getItem("user")||{},t=JSON.parse(e),i=(t==null?void 0:t.token)||"",c=R+"/Grievance/get-company-grievance-info/"+s,o=await fetch(c,{method:"GET",headers:{Authorization:"Bearer "+i}});o.ok||alert("someting went wrong");const g=await o.json();f(g)}l.useEffect(()=>{u()},[s]);const x=(e,t)=>{p(t)},b=e=>{h(+e.target.value),p(0)},y=P(),n=(e,t)=>{console.log("currently selected item is ....",e),y("/edit/grievance/"+e.id+"/"+s)};return a.jsxs(k,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(G,{sx:{maxHeight:440},children:a.jsxs(N,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(S,{children:a.jsx(w,{children:T.map(e=>a.jsx(j,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),a.jsx(B,{children:m.slice(d*r,d*r+r).map(e=>a.jsx(w,{hover:!0,role:"checkbox",tabIndex:-1,children:T.map(t=>{if(t.id=="action")return a.jsx(j,{align:t.align,children:a.jsx(W,{onClick:()=>n(e)})},t.id);const i=e[t.id];return a.jsx(j,{align:t.align,children:t.format&&typeof i=="number"?t.format(i):i},t.id)})},e.id))})]})}),a.jsx(O,{rowsPerPageOptions:[10,25,100],component:"div",count:m.length,rowsPerPage:r,page:d,onPageChange:x,onRowsPerPageChange:b})]})},J=z;function _(){const[s,d]=C.useState([]),[p,r]=l.useState(""),[h,m]=l.useState(1),f=(n,e)=>{r(e);let t=s==null?void 0:s.filter(i=>i.name==e)[0];t&&m(t.id)};async function u(){var g;const n=sessionStorage.getItem("user")||{},e=JSON.parse(n),t=(e==null?void 0:e.token)||"",i=R+"/Company/get-companies",v=await fetch(i,{method:"GET",headers:{Authorization:"Bearer "+t}});v.ok||alert("someting went wrong");const c=await v.json();d(c);let o=(g=c==null?void 0:c.filter(E=>E.id==e.companyId))==null?void 0:g.pop();o&&(r(o.name),m(o==null?void 0:o.id))}C.useEffect(()=>{u()},[]),l.useEffect(()=>{},[]);const x=P(),b=()=>{x("/add/grievance")},y=A();return a.jsxs(I,{title:"Grievances",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[a.jsx(U,{onClick:b,variant:"contained",disableElevation:!0,children:"Add New"}),y.toLowerCase()==="superadmin"?a.jsx(L,{inputValue:p,onInputChange:(n,e)=>f(n,e),sx:{width:"400px"},id:"disable-close-on-select",options:s.map(n=>n.name),getOptionLabel:n=>n,renderInput:n=>a.jsx(H,{...n,variant:"standard"})}):null]}),a.jsx(J,{companyid:h})]})}export{_ as default};
