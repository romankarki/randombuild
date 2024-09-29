import{d as A,Z as k,r,j as s,M as B,F as _}from"./index-DRQ6_V5g.js";import{h as S,a as u}from"./apiClient-BdZFA0eS.js";import{b as a}from"./Constants-CKiQFZHc.js";import{T as G}from"./TextField-BJxCmcBS.js";import{S as H}from"./Switch-BZZrRvO0.js";import{S as V}from"./Select-DzrpZOsU.js";import{M as p}from"./MenuItem-CAejK8zD.js";import{B as C}from"./Button-DqR8CO8c.js";import"./InputLabel-BfdBC-nT.js";import"./SwitchBase-UwyU8-RP.js";const Y=()=>{const v=A();let{id:l,compid:y}=k();r.useState(!1);const[o,f]=r.useState(""),[d,x]=r.useState(0),[m,g]=r.useState(!0),[c,h]=r.useState([]);r.useState(null);const[F,I]=r.useState([]),T=async()=>{if(!j())return;let t={id:l,departmentName:o,companyId:d,isActive:m};const i=a+"/KioskService/save-company-service-department";await S(i,t),v(-1)},b=async()=>{if(!j())return;let t={id:l,departmentName:o,companyId:d,isDeleted:!0,isActive:m};var i=confirm("are you sure you want to permanently delete this record");if(!i)return;const M=a+"/KioskService/save-company-service-department";await S(M,t),v(-1)},j=()=>{let e=[];d||e.push("Company is mandatory"),o==""&&e.push("Department Name is required");let t=e.join(`
`);return e.length>0?(alert(t),!1):!0},E=async()=>{const e=a+"/Company/get-companies/",t=await u(e);h(t)},w=async e=>{const t=a+"/Branch/get-all-branches-for-company/"+e;let i=await u(t);I(i)};r.useEffect(()=>{E()},[]);const D=async()=>{await w(y);const e=a+"/KioskService/get-company-service-department/"+l;let t=await u(e);x(t.companyId),f(t.departmentName),g(t==null?void 0:t.isActive)};r.useEffect(()=>{D()},[l,y]);const N={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},n=JSON.parse(sessionStorage.getItem("user")),P=e=>{g(e.target.checked)};return s.jsxs(B,{title:"Creating new Employee",children:[s.jsxs("div",{style:{marginTop:"0.9rem"},children:[s.jsx("span",{children:"Service Title"}),s.jsx(G,{id:"outlined-basic",value:o,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return f((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),s.jsxs("div",{style:{marginTop:"0.9rem"},children:[s.jsx("span",{children:"Is Active? "}),s.jsx(H,{checked:m,onChange:P,inputProps:{"aria-label":"controlled"}})]}),s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(_,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),s.jsxs(V,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(d),width:"300px",placeholder:"Choose your Company",MenuProps:N,onChange:e=>{var t;x(Number((t=e==null?void 0:e.target)==null?void 0:t.value))},children:[s.jsx(p,{value:"",children:s.jsx("em",{children:"None"})}),c==null?void 0:c.map(e=>(n==null?void 0:n.role)==="superadmin"?s.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):(e==null?void 0:e.id)===(n==null?void 0:n.companyId)?s.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):null)]})]})})}),s.jsx("br",{}),s.jsxs("div",{style:{marginTop:"0.9rem"},children:[s.jsx(C,{variant:"contained",onClick:()=>T(),children:"Save Changes"}),s.jsx(C,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{b()},children:"Delete"})]})]})};export{Y as default};
