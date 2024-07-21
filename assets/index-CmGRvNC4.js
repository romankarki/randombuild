import{d as P,r as l,j as s,M as R,U as a}from"./index-Bz6Q7mkc.js";import{h as D,a as j}from"./apiClient-FbcIhW2M.js";import{b as o}from"./Constants-D_b9nDxE.js";import{S as d}from"./Select-CisjQ6sL.js";import{M as n}from"./MenuItem-DWTedjKg.js";import{B as _}from"./Button-CDpLXtAP.js";const q=()=>{const h=P();l.useState(""),l.useState("");const[m,f]=l.useState(0),[c,C]=l.useState(0),[p,I]=l.useState(""),[u,b]=l.useState([]),[y,T]=l.useState(null),[x,E]=l.useState([]),[v,S]=l.useState([]),G=async()=>{if(!N())return;let t={grievannceType:p,branchId:y,companyId:m,employeeId:c};const r=o+"/Grievance/save-company-grivance-info";await D(r,t),h(-1)},N=()=>{let e=[];m||e.push("Company is mandatory"),y||e.push("Branch is mandatory"),c||e.push("Employee is mandatory"),p==""&&e.push("Grievance Type is required");let t=e.join(`
`);return e.length>0?(alert(t),!1):!0},B=async()=>{const e=o+"/Company/get-companies/",t=await j(e);b(t)};l.useEffect(()=>{B()},[]);const i={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},w=async e=>{const t=o+"/Branch/get-all-branches-for-company/"+e;let r=await j(t);E(r)},M=async e=>{const t=o+"/Employee/get-all-company-employees/"+e;let r=await j(t);S(r)};return s.jsxs(R,{title:"Creating new Grievance",children:[s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(a,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),s.jsxs(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(m),width:"300px",placeholder:"Choose your Company",MenuProps:i,onChange:e=>{var t,r,g;f(Number((t=e==null?void 0:e.target)==null?void 0:t.value)),w((r=e==null?void 0:e.target)==null?void 0:r.value),M((g=e==null?void 0:e.target)==null?void 0:g.value)},children:[s.jsx(n,{value:"",children:s.jsx("em",{children:"None"})}),u==null?void 0:u.map(e=>s.jsx(n,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(a,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Employee Branch"}),s.jsxs(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(y),width:"300px",placeholder:"Choose your Company",MenuProps:i,onChange:e=>{var t;T((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[s.jsx(n,{value:"",children:s.jsx("em",{children:"None"})}),x==null?void 0:x.map(e=>s.jsx(n,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(a,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Select Employee"}),s.jsxs(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(c),width:"300px",placeholder:"Choose your Company",MenuProps:i,onChange:e=>{var t;C((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[s.jsx(n,{value:"",children:s.jsx("em",{children:"None"})}),v==null?void 0:v.map(e=>s.jsx(n,{value:e==null?void 0:e.id,children:e==null?void 0:e.employeeName},e==null?void 0:e.id))]})]})})}),s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(a,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Select Grievance Type"}),s.jsxs(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:p,width:"300px",placeholder:"Choose your Company",MenuProps:i,onChange:e=>{var t;I((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[s.jsx(n,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(n,{value:"greivance",children:"Grievance"}),s.jsx(n,{value:"responsible",children:"Responsible"})]})]})})}),s.jsx("br",{}),s.jsx("div",{style:{marginTop:"0.9rem"},children:s.jsx(_,{variant:"contained",onClick:()=>G(),children:"Save Changes"})})]})};export{q as default};
