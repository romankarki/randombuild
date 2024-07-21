import{d as V,a1 as W,r as n,j as t,M as k,U as x}from"./index-Bz6Q7mkc.js";import{h as N,a as v}from"./apiClient-FbcIhW2M.js";import{b as a}from"./Constants-D_b9nDxE.js";import{S as g}from"./Select-CisjQ6sL.js";import{M as r}from"./MenuItem-DWTedjKg.js";import{B}from"./Button-CDpLXtAP.js";const Q=()=>{const C=V();let{id:i,compid:o}=W();n.useState(!1);const[d,I]=n.useState(o),[m,b]=n.useState(0),[c,T]=n.useState(""),[h,P]=n.useState([]),[p,E]=n.useState(null),[j,D]=n.useState([]),[f,M]=n.useState([]),R=async()=>{if(!w())return;let s={id:i,grievannceType:c,branchId:p,companyId:d,employeeId:m};const l=a+"/Grievance/save-company-grivance-info";await N(l,s),C(-1)},_=async()=>{if(!w())return;let s={id:i,grievannceType:c,branchId:p,companyId:d,employeeId:m,isDeleted:!0};var l=confirm("are you sure you want to permanently delete this record");if(!l)return;const y=a+"/Grievance/save-company-grivance-info";await N(y,s),C(-1)},w=()=>{let e=[];d||e.push("Company is mandatory"),p||e.push("Branch is mandatory"),m||e.push("Employee is mandatory"),c==""&&e.push("Grievance Type is required");let s=e.join(`
`);return e.length>0?(alert(s),!1):!0},H=async()=>{const e=a+"/Company/get-companies/",s=await v(e);P(s)},G=async e=>{const s=a+"/Branch/get-all-branches-for-company/"+e;let l=await v(s);D(l)},S=async e=>{const s=a+"/Employee/get-all-company-employees/"+e;let l=await v(s);M(l)};n.useEffect(()=>{H()},[]);const z=async()=>{await G(o),await S(o);const e=a+"/Grievance/get-grievance/"+i;let s=await v(e);console.log("this is employee id",s.employeeId),E(s.branchId),I(s.companyId),b(s.employeeId),T(s.grievanceType)};n.useEffect(()=>{z()},[i,o]);const u={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(k,{title:"Creating new Employee",children:[t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),t.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(d),width:"300px",placeholder:"Choose your Company",MenuProps:u,onChange:e=>{var s,l,y;I(Number((s=e==null?void 0:e.target)==null?void 0:s.value)),G((l=e==null?void 0:e.target)==null?void 0:l.value),S((y=e==null?void 0:e.target)==null?void 0:y.value)},children:[t.jsx(r,{value:"",children:t.jsx("em",{children:"None"})}),h==null?void 0:h.map(e=>t.jsx(r,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Employee Branch"}),t.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(p),width:"300px",placeholder:"Choose your Company",MenuProps:u,onChange:e=>{var s;E((s=e==null?void 0:e.target)==null?void 0:s.value)},children:[t.jsx(r,{value:"",children:t.jsx("em",{children:"None"})}),j==null?void 0:j.map(e=>t.jsx(r,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Select Employee"}),t.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(m),width:"300px",placeholder:"Choose your Company",MenuProps:u,onChange:e=>{var s;b((s=e==null?void 0:e.target)==null?void 0:s.value)},children:[t.jsx(r,{value:"",children:t.jsx("em",{children:"None"})}),f==null?void 0:f.map(e=>t.jsx(r,{value:e==null?void 0:e.id,children:e==null?void 0:e.employeeName},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Select Grievance Type"}),t.jsxs(g,{labelId:"demo-select-small-label",id:"demo-select-small",value:c,width:"300px",placeholder:"Choose your Company",MenuProps:u,onChange:e=>{var s;T((s=e==null?void 0:e.target)==null?void 0:s.value)},children:[t.jsx(r,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(r,{value:"greivance",children:"Grievance"}),t.jsx(r,{value:"responsible",children:"Responsible"})]})]})})}),t.jsx("br",{}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx(B,{variant:"contained",onClick:()=>R(),children:"Save Changes"}),t.jsx(B,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{_()},children:"Delete"})]})]})};export{Q as default};
