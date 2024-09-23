import{r as c,d as R,j as a,e as M,R as v,M as k}from"./index-_AWSBuUU.js";import{b as I}from"./Constants-DGXMJ-DT.js";import{d as E}from"./dayjs.min-CNlYnCsP.js";import{T as S,a as D,e as W,c as T,d as P,b as A}from"./TableRow-DhcXuOZB.js";import{R as B,G as L,A as $}from"./GetValuesFromLocalStorage-idXzu9Sl.js";import{T as G}from"./TablePagination-BxifiRkg.js";import{B as O}from"./Button-CJj7kHSd.js";import{T as U}from"./TextField-BObO4OcV.js";import"./Select-eC4K4ZSx.js";import"./MenuItem-CallC8N8.js";import"./InputLabel-B7cXIkNh.js";const N=[{id:"id",label:"Id",minWidth:170},{id:"topicName",label:"Name of Topic",minWidth:100},{id:"startDate",label:"Start Date",minWidth:170,align:"right"},{id:"endDate",label:"End Date",minWidth:170,align:"right"},{id:"venue",label:"Venue",minWidth:170,align:"right"},{id:"coordinatorName",label:"Coordinator",minWidth:170,align:"right"},{id:"assistantCoordinatorName",label:"Assistant Coordinator",minWidth:170,align:"right"},{id:"action",label:"Action",minWidth:170,align:"center"}],Y=({companyid:i=1})=>{const[g,f]=c.useState(0),[d,b]=c.useState(10),[m,x]=c.useState([]);async function j(){console.log("this is companyid",i);const e=sessionStorage.getItem("user")||{},t=JSON.parse(e),r=(t==null?void 0:t.token)||"",l=I+"/Meetings/get-company-meeting-info/"+i,p=await fetch(l,{method:"GET",headers:{Authorization:"Bearer "+r}});p.ok||alert("someting went wrong");let u=await p.json();u.forEach(s=>{s.startDate=o(s.startDate),s.endDate=o(s.endDate),s.coordinatorName=`${s.coordinatorName} (${s.coordinatorPhoneNumber})`,s.assistantCoordinatorName=`${s.assistantCoordinatorName} (${s.assistantCoordinatorPhoneNumber})`}),x(u)}c.useEffect(()=>{j()},[i]);const C=(e,t)=>{f(t)},y=e=>{b(+e.target.value),f(0)},w=R(),n=(e,t)=>{console.log("currently selected item is ....",e),w("/edit/meetinginfo/"+e.id+"/"+i)},o=e=>E(e).format("MMMM D, YYYY h:mm A");return a.jsxs(M,{sx:{width:"100%",overflow:"hidden"},children:[a.jsx(S,{sx:{maxHeight:440},children:a.jsxs(D,{stickyHeader:!0,"aria-label":"sticky table",children:[a.jsx(W,{children:a.jsx(T,{children:N.map(e=>a.jsx(P,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id))})}),a.jsx(A,{children:m.slice(g*d,g*d+d).map(e=>a.jsx(T,{hover:!0,role:"checkbox",tabIndex:-1,children:N.map(t=>{if(t.id=="action")return a.jsx(P,{align:t.align,children:a.jsx(B,{onClick:()=>n(e)})},t.id);const r=e[t.id];return a.jsx(P,{align:t.align,children:t.format&&typeof r=="number"?t.format(r):r},t.id)})},e.id))})]})}),a.jsx(G,{rowsPerPageOptions:[10,25,100],component:"div",count:m.length,rowsPerPage:d,page:g,onPageChange:C,onRowsPerPageChange:y})]})},H=Y;function te(){const[i,g]=v.useState([]),[f,d]=c.useState(""),[b,m]=c.useState(1),x=(n,o)=>{d(o);let e=i==null?void 0:i.filter(t=>t.name==o)[0];e&&m(e.id)};async function j(){var p;const n=sessionStorage.getItem("user")||{},o=JSON.parse(n),e=(o==null?void 0:o.token)||"",t=I+"/Company/get-companies",r=await fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e}});r.ok||alert("someting went wrong");const h=await r.json();g(h);let l=(p=h==null?void 0:h.filter(u=>u.id==o.companyId))==null?void 0:p.pop();l&&(d(l.name),m(l==null?void 0:l.id))}v.useEffect(()=>{j()},[]),c.useEffect(()=>{},[]);const C=R(),y=()=>{C("/add/meetinginfo")},w=L();return a.jsxs(k,{title:"Meeting Info",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[a.jsx(O,{onClick:y,variant:"contained",disableElevation:!0,children:"Add New"}),w.toLowerCase()==="superadmin"?a.jsx($,{inputValue:f,onInputChange:(n,o)=>x(n,o),sx:{width:"400px"},id:"disable-close-on-select",options:i.map(n=>n.name),getOptionLabel:n=>n,renderInput:n=>a.jsx(U,{...n,variant:"standard"})}):null]}),a.jsx(H,{companyid:b})]})}export{te as default};
