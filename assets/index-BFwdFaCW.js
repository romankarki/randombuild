import{d as w,a1 as M,r as s,j as a,M as N,U as P}from"./index-371WFPPX.js";import{h as v,a as d}from"./apiClient-BLOXFteY.js";import{b as n}from"./Constants-D0E4tgva.js";import{T as B}from"./TextField-6EwJ1WRj.js";import{S as _}from"./Select-ZezECQ10.js";import{M as h}from"./MenuItem-BWD5zmyq.js";import{B as x}from"./Button-BdF-a1jo.js";import"./InputLabel-DPYABPbC.js";const W=()=>{const c=w();let{id:i,compid:u}=M();s.useState(!1);const[l,p]=s.useState(""),[o,f]=s.useState(0),[m,g]=s.useState([]);s.useState(null);const[k,j]=s.useState([]),C=async()=>{if(!y())return;let t={id:i,departmentName:l,companyId:o};const r=n+"/KioskService/save-company-service-department";await v(r,t),c(-1)},S=async()=>{if(!y())return;let t={id:i,departmentName:l,companyId:o,isDeleted:!0};var r=confirm("are you sure you want to permanently delete this record");if(!r)return;const D=n+"/KioskService/save-company-service-department";await v(D,t),c(-1)},y=()=>{let e=[];o||e.push("Company is mandatory"),l==""&&e.push("Department Name is required");let t=e.join(`
`);return e.length>0?(alert(t),!1):!0},T=async()=>{const e=n+"/Company/get-companies/",t=await d(e);g(t)},I=async e=>{const t=n+"/Branch/get-all-branches-for-company/"+e;let r=await d(t);j(r)};s.useEffect(()=>{T()},[]);const E=async()=>{await I(u);const e=n+"/KioskService/get-company-service-department/"+i;let t=await d(e);f(t.companyId),p(t.departmentName)};s.useEffect(()=>{E()},[i,u]);const b={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return a.jsxs(N,{title:"Creating new Employee",children:[a.jsxs("div",{style:{marginTop:"0.9rem"},children:[a.jsx("span",{children:"Service Title"}),a.jsx(B,{id:"outlined-basic",value:l,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return p((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),a.jsx("div",{style:{marginTop:"0rem"},children:a.jsx(P,{sx:{m:0,minWidth:120},size:"small",children:a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[a.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),a.jsxs(_,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:b,onChange:e=>{var t;f(Number((t=e==null?void 0:e.target)==null?void 0:t.value))},children:[a.jsx(h,{value:"",children:a.jsx("em",{children:"None"})}),m==null?void 0:m.map(e=>a.jsx(h,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),a.jsx("br",{}),a.jsxs("div",{style:{marginTop:"0.9rem"},children:[a.jsx(x,{variant:"contained",onClick:()=>C(),children:"Save Changes"}),a.jsx(x,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{S()},children:"Delete"})]})]})};export{W as default};
