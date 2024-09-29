import{d as E,Z as M,r as n,j as t,M as R,F as g}from"./index-DRQ6_V5g.js";import{b as _,a as A}from"./apiClient-BdZFA0eS.js";import{b as j}from"./Constants-CKiQFZHc.js";import{R as G}from"./index-Dd5SIQRx.js";import{T as y}from"./TextField-BJxCmcBS.js";import{S as f}from"./Select-DzrpZOsU.js";import{M as l}from"./MenuItem-CAejK8zD.js";import{B as H}from"./Button-DqR8CO8c.js";import"./InputLabel-BfdBC-nT.js";const q=()=>{const v=E(),{compid:C}=M(),[r,h]=n.useState([]),[a,T]=n.useState(""),[d,m]=n.useState(0),[p,I]=n.useState("image"),[b,N]=n.useState(null),[u,S]=n.useState(""),[P,c]=n.useState(".jpg,.jpeg,.png"),w=async()=>{let e=new FormData;e.append("text",a),e.append("fileType",p),e.append("companyId",d),e.append("file",b),e.append("description",u);const s=j+"/NewsAndNotice/save-news-notice";await _(s,e),v(-1)},D=e=>{e=="image"?c(".jpg,.jpeg,.png"):c(".pdf,.doc,.docx")},F=async()=>{const e=j+"/Company/get-companies/",s=await A(e);h(s),m(C)};n.useEffect(()=>{F()},[]);const x={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},i=JSON.parse(sessionStorage.getItem("user"));return t.jsxs(R,{title:"Add Record To News & Notice",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Title"}),t.jsx(y,{id:"outlined-basic",value:a,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return T((s=e==null?void 0:e.target)==null?void 0:s.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Description"}),t.jsx(G,{style:{height:"150px"},value:u,onChange:S}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Choose File "}),t.jsx(y,{id:"outlined-basic",inputProps:{accept:P},variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var s;return N((s=e==null?void 0:e.target)==null?void 0:s.files[0])}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(g,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),t.jsxs(f,{labelId:"demo-select-small-label",id:"demo-select-small",value:p,width:"300px",placeholder:"Choose your Content",MenuProps:x,onChange:e=>{var s,o;I((s=e==null?void 0:e.target)==null?void 0:s.value),D((o=e==null?void 0:e.target)==null?void 0:o.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(l,{value:"image",children:"Image"}),t.jsx(l,{value:"pdf",children:"PDF"})]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(g,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),t.jsxs(f,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(d),width:"300px",placeholder:"Choose your Company",MenuProps:x,onChange:e=>{var s,o;m(Number((s=e==null?void 0:e.target)==null?void 0:s.value)),fetchBranch((o=e==null?void 0:e.target)==null?void 0:o.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),r==null?void 0:r.map(e=>(i==null?void 0:i.role)==="superadmin"?t.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):(e==null?void 0:e.id)===(i==null?void 0:i.companyId)?t.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):null)]})]})})}),t.jsx("br",{}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(H,{variant:"contained",onClick:()=>w(),children:"Save Changes"})})]})};export{q as default};
