import{d as te,a1 as le,r as n,j as l,M as ne,U as y}from"./index-By_f7ebx.js";import{b as A,a as h}from"./apiClient-BLOXFteY.js";import{a as ae,b as o}from"./Constants-DuPyYaCq.js";import{T as i}from"./TextField-CDYINz3D.js";import{S as g}from"./Select-DQrKUjfe.js";import{M as s}from"./MenuItem-CHD6a2KY.js";import{B as O}from"./Button-oHaFgI0G.js";import"./InputLabel-RhM-iev9.js";const ge=()=>{const w=te();let{id:d}=le();const[q,se]=n.useState(!1),[m,D]=n.useState(""),[x,N]=n.useState(""),[p,M]=n.useState(0),[v,W]=n.useState(0),[j,B]=n.useState(0),[f,G]=n.useState("male"),[L,J]=n.useState(null),[u,R]=n.useState(""),[C,F]=n.useState(""),[E,b]=n.useState(""),[I,U]=n.useState(0),[_,H]=n.useState(""),[T,K]=n.useState([]),[P,Q]=n.useState([]),X=async()=>{if(!z())return;let t=new FormData;if(t.append("Id",d),t.append("CompanyId",p),t.append("EmployeeName",m),t.append("EmployeeType",x),t.append("Level",v),t.append("Priority",j),t.append("Gender",f),t.append("Photo",L),t.append("Phonenumber",u),t.append("Email",C),t.append("Designation",E),t.append("BranchId",I),q){t.append("IsDeleted",!0);var a=confirm("are you sure you want to permanently delete this record");if(!a)return}const r=o+"/Employee/save-employee-record";await A(r,t),w(-1)},Y=async()=>{if(!z())return;let t=new FormData;t.append("Id",d),t.append("CompanyId",p),t.append("EmployeeName",m),t.append("EmployeeType",x),t.append("Level",v),t.append("Priority",j),t.append("Gender",f),t.append("Photo",L),t.append("Phonenumber",u),t.append("Email",C),t.append("Designation",E),t.append("BranchId",I),t.append("IsDeleted",!0);var a=confirm("are you sure you want to permanently delete this record");if(!a)return;const r=o+"/Employee/save-employee-record";await A(r,t),w(-1)},z=()=>{let e=[];p||e.push("Company is mandatory"),m==""&&e.push("Employee Name is mandatory"),u==""&&e.push("Phonenumber is mandatory");let t=e.join(`
`);return e.length>0?(alert(t),!1):!0},Z=async()=>{const e=o+"/Company/get-companies/",t=await h(e);K(t)},V=async e=>{const t=o+"/Branch/get-all-branches-for-company/"+e;let a=await h(t);Q(a)},[S,$]=n.useState([]),k=async e=>{const t=o+"/Employee/get-all-company-employee-category/"+e,a=await h(t);$(a)};n.useEffect(()=>{Z()},[]);const ee=async()=>{const e=o+"/Employee/get-employee-by-id/"+d;let t=await h(e);console.log("all the results are here",t),D(t.employeeName),b(t.designation),R(t.phonenumber),F(t.email),b(t.designation),G(t.gender),M(t.companyId),await V(t.companyId),await k(t.companyId),U(t.branchId),B(t.priority),W(Number(t.level)),N(t.employeeType),setTimeout(()=>{let a=t.photo.split("/"),r=ae+t.companyId+"/"+a.pop();H(r)},500)};n.useEffect(()=>{ee()},[d]);const c={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return l.jsxs(ne,{title:"Creating new Employee",children:[l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Name"}),l.jsx(i,{id:"outlined-basic",value:m,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return D((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Level"}),l.jsx(i,{id:"outlined-basic",value:v,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return W((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Priority"}),l.jsx(i,{id:"outlined-basic",value:j,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return B((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Photo"}),l.jsx("div",{children:_&&l.jsx("img",{src:_,alt:"employeeimage",width:"300",height:"200"})}),l.jsx(i,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;J((t=e==null?void 0:e.target)==null?void 0:t.files[0]),H(null)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Designation"}),l.jsx(i,{id:"outlined-basic",variant:"outlined",value:E,autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return b((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Email"}),l.jsx(i,{id:"outlined-basic",variant:"outlined",value:C,autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return F((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx("span",{children:"Employee Phonenumber"}),l.jsx(i,{id:"outlined-basic",variant:"outlined",value:u,autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return R((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),l.jsx("div",{style:{marginTop:"0rem"},children:l.jsx(y,{sx:{m:0,minWidth:120},size:"small",children:l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[l.jsx("p",{style:{marginRight:"2rem"},children:"Employee Gender"}),l.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:f,width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var t;return G((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[l.jsx(s,{value:"",children:l.jsx("em",{children:"None"})}),l.jsx(s,{value:"male",children:"Male"}),l.jsx(s,{value:"female",children:"Female"})]})]})})}),l.jsx("div",{style:{marginTop:"0rem"},children:l.jsx(y,{sx:{m:0,minWidth:120},size:"small",children:l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[l.jsx("p",{style:{marginRight:"2rem"},children:"Employee Company"}),l.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(p),width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var t,a,r;M(Number((t=e==null?void 0:e.target)==null?void 0:t.value)),V((a=e==null?void 0:e.target)==null?void 0:a.value),k((r=e==null?void 0:e.target)==null?void 0:r.value)},children:[l.jsx(s,{value:"",children:l.jsx("em",{children:"None"})}),T==null?void 0:T.map(e=>l.jsx(s,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),l.jsx("div",{style:{marginTop:"0rem"},children:l.jsx(y,{sx:{m:0,minWidth:120},size:"small",children:l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[l.jsx("p",{style:{marginRight:"2rem"},children:"Employee Branch"}),l.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(I),width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var t;return U((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[l.jsx(s,{value:"",children:l.jsx("em",{children:"None"})}),P==null?void 0:P.map(e=>l.jsx(s,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),l.jsx("div",{style:{marginTop:"0rem"},children:l.jsx(y,{sx:{m:0,minWidth:120},size:"small",children:l.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[l.jsx("p",{style:{marginRight:"2rem"},children:"Employee Category"}),l.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:x,width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var t;return N((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[l.jsx(s,{value:"",children:l.jsx("em",{children:"None"})}),S==null?void 0:S.map(e=>l.jsx(s,{value:e==null?void 0:e.title,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),l.jsx("br",{}),l.jsxs("div",{style:{marginTop:"0.9rem"},children:[l.jsx(O,{variant:"contained",onClick:()=>X(),children:"Save Changes"}),l.jsx(O,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{Y()},children:"Delete"})]})]})};export{ge as default};
