import{d as K,r as n,j as t,M as Q,F as m}from"./index-DRQ6_V5g.js";import{b as X,a as v}from"./apiClient-BdZFA0eS.js";import{b as p}from"./Constants-CKiQFZHc.js";import{T as r}from"./TextField-BJxCmcBS.js";import{S as u}from"./Select-DzrpZOsU.js";import{M as s}from"./MenuItem-CAejK8zD.js";import{B as Y}from"./Button-DqR8CO8c.js";import"./InputLabel-BfdBC-nT.js";const oe=()=>{const P=K(),[y,N]=n.useState(""),[h,w]=n.useState(""),[o,M]=n.useState(0),[f,W]=n.useState(0),[C,D]=n.useState(0),[E,B]=n.useState("male"),[G,F]=n.useState(null),[x,R]=n.useState(""),[b,_]=n.useState(""),[T,H]=n.useState(""),[I,z]=n.useState(0),[c,L]=n.useState([]),[g,A]=n.useState([]),O=async()=>{if(!V())return;let l=new FormData;l.append("CompanyId",o),l.append("EmployeeName",y),l.append("EmployeeType",h),l.append("Level",f),l.append("Priority",C),l.append("Gender",E),l.append("Photo",G),l.append("Phonenumber",x),l.append("Email",b),l.append("Designation",T),l.append("BranchId",I);const i=p+"/Employee/save-employee-record";await X(i,l),P(-1)},V=()=>{console.log("companydid",o);let e=[];o||e.push("Company is mandatory"),y==""&&e.push("Employee Name is mandatory"),x==""&&e.push("Phonenumber is mandatory");let l=e.join(`
`);return e.length>0?(alert(l),!1):!0},k=async()=>{const e=p+"/Company/get-companies/",l=await v(e);L(l)},[j,J]=n.useState([]),U=async e=>{const l=p+"/Employee/get-all-company-employee-category/"+e,i=await v(l);J(i)},q=async e=>{const l=p+"/Branch/get-all-branches-for-company/"+e;let i=await v(l);A(i)};n.useEffect(()=>{k()},[]);const a=JSON.parse(sessionStorage.getItem("user")),d={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(Q,{title:"Creating new Employee",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Name"}),t.jsx(r,{id:"outlined-basic",value:y,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return N((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Level"}),t.jsx(r,{id:"outlined-basic",value:f,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return W((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Priority"}),t.jsx(r,{id:"outlined-basic",value:C,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return D((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Photo"}),t.jsx(r,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return F((l=e==null?void 0:e.target)==null?void 0:l.files[0])}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Designation"}),t.jsx(r,{id:"outlined-basic",variant:"outlined",value:T,autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return H((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Email"}),t.jsx(r,{id:"outlined-basic",variant:"outlined",value:b,autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return _((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Phonenumber"}),t.jsx(r,{id:"outlined-basic",variant:"outlined",value:x,autoComplete:"off",fullWidth:!0,onChange:e=>{var l;return R((l=e==null?void 0:e.target)==null?void 0:l.value)}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(m,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Gender"}),t.jsxs(u,{labelId:"demo-select-small-label",id:"demo-select-small",value:E,width:"300px",placeholder:"Choose your Company",MenuProps:d,onChange:e=>{var l;return B((l=e==null?void 0:e.target)==null?void 0:l.value)},children:[t.jsx(s,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(s,{value:"male",children:"Male"}),t.jsx(s,{value:"female",children:"Female"})]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(m,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Company"}),t.jsxs(u,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:d,onChange:e=>{var l,i,S;M(Number((l=e==null?void 0:e.target)==null?void 0:l.value)),q((i=e==null?void 0:e.target)==null?void 0:i.value),U((S=e==null?void 0:e.target)==null?void 0:S.value)},children:[t.jsx(s,{value:"",children:t.jsx("em",{children:"None"})}),c==null?void 0:c.map(e=>(a==null?void 0:a.role)==="superadmin"?t.jsx(s,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):(e==null?void 0:e.id)===(a==null?void 0:a.companyId)?t.jsx(s,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):null)]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(m,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Branch"}),t.jsxs(u,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(I),width:"300px",placeholder:"Choose your Company",MenuProps:d,onChange:e=>{var l;return z((l=e==null?void 0:e.target)==null?void 0:l.value)},children:[t.jsx(s,{value:"",children:t.jsx("em",{children:"None"})}),g==null?void 0:g.map(e=>t.jsx(s,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(m,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Category"}),t.jsxs(u,{labelId:"demo-select-small-label",id:"demo-select-small",value:h,width:"300px",placeholder:"Choose your Company",MenuProps:d,onChange:e=>{var l;return w((l=e==null?void 0:e.target)==null?void 0:l.value)},children:[t.jsx(s,{value:"",children:t.jsx("em",{children:"None"})}),j==null?void 0:j.map(e=>t.jsx(s,{value:e==null?void 0:e.title,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(Y,{variant:"contained",onClick:()=>O(),children:"Save Changes"})})]})};export{oe as default};
