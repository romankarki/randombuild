import{d as c,r as n,j as e,M as C,F as T}from"./index-_AWSBuUU.js";import{h as S,a as I}from"./apiClient-BdZFA0eS.js";import{b as m}from"./Constants-DGXMJ-DT.js";import{T as M}from"./TextField-BObO4OcV.js";import{S as N}from"./Select-eC4K4ZSx.js";import{M as o}from"./MenuItem-CallC8N8.js";import{B as b}from"./Button-CJj7kHSd.js";import"./InputLabel-B7cXIkNh.js";const O=()=>{const d=c(),[i,p]=n.useState(""),[a,u]=n.useState(0),[l,x]=n.useState([]),v=async()=>{if(!g())return;let s={departmentName:i,companyId:a};const y=m+"/KioskService/save-company-service-department";await S(y,s),d(-1)},g=()=>{let t=[];a||t.push("Company is mandatory"),i==""&&t.push("Department Name is required");let s=t.join(`
`);return t.length>0?(alert(s),!1):!0},f=async()=>{const t=m+"/Company/get-companies/",s=await I(t);x(s)};n.useEffect(()=>{f()},[]);const j={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},r=JSON.parse(sessionStorage.getItem("user"));return e.jsxs(C,{title:"Creating new Service",children:[e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Service Department Name"}),e.jsx(M,{id:"outlined-basic",value:i,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var s;return p((s=t==null?void 0:t.target)==null?void 0:s.value)}})]}),e.jsx("div",{style:{marginTop:"0rem"},children:e.jsx(T,{sx:{m:0,minWidth:120},size:"small",children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),e.jsxs(N,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(a),width:"300px",placeholder:"Choose your Company",MenuProps:j,onChange:t=>{var s;u(Number((s=t==null?void 0:t.target)==null?void 0:s.value))},children:[e.jsx(o,{value:"",children:e.jsx("em",{children:"None"})}),l==null?void 0:l.map(t=>(r==null?void 0:r.role)==="superadmin"?e.jsx(o,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):(t==null?void 0:t.id)===(r==null?void 0:r.companyId)?e.jsx(o,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):null)]})]})})}),e.jsx("br",{}),e.jsx("div",{style:{marginTop:"0.9rem"},children:e.jsx(b,{variant:"contained",onClick:()=>v(),children:"Save Changes"})})]})};export{O as default};
