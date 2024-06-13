import{d as k,r as l,j as t,M as V,W as h}from"./index-ZDD_OGMu.js";import{b as U,a as T}from"./apiClient-OPmdi5JO.js";import{b as y}from"./Constants-Ctlr_h4s.js";import{T as s}from"./TextField-D33VU5iS.js";import{S as x}from"./Select-CIif3pin.js";import{M as a}from"./MenuItem-C9iTeXka.js";import{S as q}from"./Switch-B809M7HV.js";import{B as J}from"./Button-BJQZiDvD.js";import"./InputLabel-Dw3maVgU.js";import"./SwitchBase-CpVo7noB.js";const ie=()=>{const I=k(),[r,P]=l.useState(""),[d,g]=l.useState("bod"),[o,S]=l.useState(0),[j,N]=l.useState(0),[v,W]=l.useState(0),[f,D]=l.useState("male"),[M,w]=l.useState(null),[m,B]=l.useState(""),[C,G]=l.useState(""),[b,_]=l.useState(""),[E,F]=l.useState(0),[p,H]=l.useState([]),[u,L]=l.useState([]),R=async()=>{if(!z())return;let n=new FormData;n.append("CompanyId",o),n.append("EmployeeName",r),n.append("EmployeeType",d=="bod"?1:2),n.append("Level",j),n.append("Priority",v),n.append("Gender",f),n.append("Photo",M),n.append("Phonenumber",m),n.append("Email",C),n.append("Designation",b),n.append("BranchId",E);const i=y+"/Employee/save-employee-record";await U(i,n),I(-1)},z=()=>{console.log("companydid",o);let e=[];o||e.push("Company is mandatory"),r==""&&e.push("Employee Name is mandatory"),m==""&&e.push("Phonenumber is mandatory");let n=e.join(`
`);return e.length>0?(alert(n),!1):!0},A=async()=>{const e=y+"/Company/get-companies/",n=await T(e);H(n)},O=async e=>{const n=y+"/Branch/get-all-branches-for-company/"+e;let i=await T(n);L(i)};l.useEffect(()=>{A()},[]);const c={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(V,{title:"Creating new Employee",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Name"}),t.jsx(s,{id:"outlined-basic",value:r,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return P((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Level"}),t.jsx(s,{id:"outlined-basic",value:j,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return N((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Priority"}),t.jsx(s,{id:"outlined-basic",value:v,variant:"outlined",type:"number",autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return W((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Photo"}),t.jsx(s,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return w((n=e==null?void 0:e.target)==null?void 0:n.files[0])}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Designation"}),t.jsx(s,{id:"outlined-basic",variant:"outlined",value:b,autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return _((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Email"}),t.jsx(s,{id:"outlined-basic",variant:"outlined",value:C,autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return G((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Phonenumber"}),t.jsx(s,{id:"outlined-basic",variant:"outlined",value:m,autoComplete:"off",fullWidth:!0,onChange:e=>{var n;return B((n=e==null?void 0:e.target)==null?void 0:n.value)}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(h,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Gender"}),t.jsxs(x,{labelId:"demo-select-small-label",id:"demo-select-small",value:f,width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var n;return D((n=e==null?void 0:e.target)==null?void 0:n.value)},children:[t.jsx(a,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(a,{value:"male",children:"Male"}),t.jsx(a,{value:"female",children:"Female"})]})]})})}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Employee Type "}),t.jsx("span",{style:{fontWeight:"bold",marginLeft:"2rem"},children:"Is BOD"}),t.jsx(q,{checked:d=="bod",onChange:()=>{d=="bod"?g("nbod"):g("bod")},inputProps:{"aria-label":"controlled"}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(h,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Company"}),t.jsxs(x,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var n,i;S(Number((n=e==null?void 0:e.target)==null?void 0:n.value)),O((i=e==null?void 0:e.target)==null?void 0:i.value)},children:[t.jsx(a,{value:"",children:t.jsx("em",{children:"None"})}),p==null?void 0:p.map(e=>t.jsx(a,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(h,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Branch"}),t.jsxs(x,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(E),width:"300px",placeholder:"Choose your Company",MenuProps:c,onChange:e=>{var n;return F((n=e==null?void 0:e.target)==null?void 0:n.value)},children:[t.jsx(a,{value:"",children:t.jsx("em",{children:"None"})}),u==null?void 0:u.map(e=>t.jsx(a,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(J,{variant:"contained",onClick:()=>R(),children:"Save Changes"})})]})};export{ie as default};
