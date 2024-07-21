import{d as E,a1 as F,r as n,j as t,M,U as x}from"./index-Bz6Q7mkc.js";import{b as R,a as _}from"./apiClient-FbcIhW2M.js";import{b as h}from"./Constants-D_b9nDxE.js";import{R as A}from"./index-CJO7IKie.js";import{T as g}from"./TextField-CqcfMrm6.js";import{S as j}from"./Select-CisjQ6sL.js";import{M as a}from"./MenuItem-DWTedjKg.js";import{B as G}from"./Button-CDpLXtAP.js";import"./InputLabel-DAB9vEt8.js";const J=()=>{const f=E(),{compid:y}=F(),[l,v]=n.useState([]),[o,C]=n.useState(""),[r,d]=n.useState(0),[m,T]=n.useState("image"),[I,b]=n.useState(null),[p,N]=n.useState(""),[P,c]=n.useState(".jpg,.jpeg,.png"),S=async()=>{let e=new FormData;e.append("text",o),e.append("fileType",m),e.append("companyId",r),e.append("file",I),e.append("description",p);const s=h+"/NewsAndNotice/save-news-notice";await R(s,e),f(-1)},w=e=>{e=="image"?c(".jpg,.jpeg,.png"):c(".pdf,.doc,.docx")},D=async()=>{const e=h+"/Company/get-companies/",s=await _(e);v(s),d(y)};n.useEffect(()=>{D()},[]);const u={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(M,{title:"Add Record To News & Notice",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Title"}),t.jsx(g,{id:"outlined-basic",value:o,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return C((s=e==null?void 0:e.target)==null?void 0:s.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Description"}),t.jsx(A,{style:{height:"150px"},value:p,onChange:N}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Choose File "}),t.jsx(g,{id:"outlined-basic",inputProps:{accept:P},variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return b((s=e==null?void 0:e.target)==null?void 0:s.files[0])}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),t.jsxs(j,{labelId:"demo-select-small-label",id:"demo-select-small",value:m,width:"300px",placeholder:"Choose your Content",MenuProps:u,onChange:e=>{var s,i;T((s=e==null?void 0:e.target)==null?void 0:s.value),w((i=e==null?void 0:e.target)==null?void 0:i.value)},children:[t.jsx(a,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(a,{value:"image",children:"Image"}),t.jsx(a,{value:"pdf",children:"PDF"})]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(x,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),t.jsxs(j,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(r),width:"300px",placeholder:"Choose your Company",MenuProps:u,onChange:e=>{var s,i;d(Number((s=e==null?void 0:e.target)==null?void 0:s.value)),fetchBranch((i=e==null?void 0:e.target)==null?void 0:i.value)},children:[t.jsx(a,{value:"",children:t.jsx("em",{children:"None"})}),l==null?void 0:l.map(e=>t.jsx(a,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("br",{}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(G,{variant:"contained",onClick:()=>S(),children:"Save Changes"})})]})};export{J as default};
