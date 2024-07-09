import{d as w,a1 as D,r as n,j as t,M as S,U as u}from"./index-BTRZstNR.js";import{b as E,a as M}from"./apiClient-BLOXFteY.js";import{b as x}from"./Constants-BUFMHqTz.js";import{R as F}from"./index-B8y9y9tp.js";import{T as h}from"./TextField-GCBK3T6O.js";import{S as j}from"./Select-Xs8P-wOv.js";import{M as i}from"./MenuItem-BkcVvT_A.js";import{B as R}from"./Button-CrGA_dfM.js";import"./InputLabel-XzrnmkSq.js";const Q=()=>{const g=w(),{compid:y}=D(),[l,f]=n.useState([]),[a,v]=n.useState(""),[o,r]=n.useState(0),[d,C]=n.useState("image"),[T,I]=n.useState(null),[m,b]=n.useState(""),N=async()=>{let e=new FormData;e.append("text",a),e.append("fileType",d),e.append("companyId",o),e.append("file",T),e.append("description",m);const s=x+"/NewsAndNotice/save-news-notice";await E(s,e),g(-1)},P=async()=>{const e=x+"/Company/get-companies/",s=await M(e);f(s),r(y)};n.useEffect(()=>{P()},[]);const p={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(S,{title:"Add Record To News & Notice",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Title"}),t.jsx(h,{id:"outlined-basic",value:a,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return v((s=e==null?void 0:e.target)==null?void 0:s.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Description"}),t.jsx(F,{style:{height:"150px"},value:m,onChange:b}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Choose File "}),t.jsx(h,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return I((s=e==null?void 0:e.target)==null?void 0:s.files[0])}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(u,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),t.jsxs(j,{labelId:"demo-select-small-label",id:"demo-select-small",value:d,width:"300px",placeholder:"Choose your Content",MenuProps:p,onChange:e=>{var s;return C((s=e==null?void 0:e.target)==null?void 0:s.value)},children:[t.jsx(i,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(i,{value:"image",children:"Image"}),t.jsx(i,{value:"pdf",children:"PDF"}),t.jsx(i,{values:"video",children:"Video"})]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(u,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),t.jsxs(j,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:p,onChange:e=>{var s,c;r(Number((s=e==null?void 0:e.target)==null?void 0:s.value)),fetchBranch((c=e==null?void 0:e.target)==null?void 0:c.value)},children:[t.jsx(i,{value:"",children:t.jsx("em",{children:"None"})}),l==null?void 0:l.map(e=>t.jsx(i,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("br",{}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(R,{variant:"contained",onClick:()=>N(),children:"Save Changes"})})]})};export{Q as default};
