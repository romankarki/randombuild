import{d as X,a1 as Y,r as s,j as n,M as Z,U}from"./index-BRiPDprX.js";import{b as $,h as ee,a as _}from"./apiClient-BdZFA0eS.js";import{N as x,b as m}from"./Constants-C3A6Gqx3.js";import{R as te}from"./index-CwalaMAx.js";import{T as A}from"./TextField-B9RgCfUw.js";import{S as G}from"./Select-B1tC3DLq.js";import{M as l}from"./MenuItem-B0v1FVPj.js";import{B as H}from"./Button-CgWm9gs8.js";import"./InputLabel-BGqQE_mf.js";const ge=()=>{const j=X(),{id:d}=Y(),[c,W]=s.useState([]),[y,f]=s.useState(""),[h,v]=s.useState(0),[C,p]=s.useState("image"),[B,O]=s.useState(null),[z,g]=s.useState(""),[T,w]=s.useState(""),[J,I]=s.useState(".jpg,.jpeg,.png"),Q=async()=>{let e=new FormData;e.append("id",d),e.append("text",y),e.append("fileType",C),e.append("companyId",h),e.append("file",B),e.append("description",T);const t=m+"/NewsAndNotice/save-news-notice";await $(t,e),j(-1)},V=async()=>{var e=confirm("are you sure you want to permanently delete this record");if(!e)return;const t=m+"/NewsAndNotice/delete-news-notice/"+d;await ee(t,{}),j(-1)},q=async()=>{const e=m+"/Company/get-companies/",t=await _(e);W(t)},K=async()=>{var i,S,b,D,P,k,E,F,L,M,R;const e=m+"/NewsAndNotice/get-news-notice/"+d,t=await _(e);if(f(t.text),w(t.description),v(t.companyId),((i=t==null?void 0:t.docLink)==null?void 0:i.length)>1){const a=(D=(b=(S=t==null?void 0:t.docLink)==null?void 0:S.split("/"))==null?void 0:b.pop())==null?void 0:D.toString(),r=x+(t==null?void 0:t.companyId)+"/"+a;g(r),p("pdf"),u("pdf")}else if(((P=t==null?void 0:t.imageLink)==null?void 0:P.length)>1){const a=(F=(E=(k=t==null?void 0:t.imageLink)==null?void 0:k.split("/"))==null?void 0:E.pop())==null?void 0:F.toString(),r=x+(t==null?void 0:t.companyId)+"/"+a;g(r),p("image"),u("image")}else{const a=(R=(M=(L=t==null?void 0:t.videoLink)==null?void 0:L.split("/"))==null?void 0:M.pop())==null?void 0:R.toString(),r=x+(t==null?void 0:t.companyId)+"/"+a;g(r),p("video")}};s.useEffect(()=>{q()},[]),s.useEffect(()=>{K()},[d]);const N={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},u=e=>{e=="image"?I(".jpg,.jpeg,.png"):I(".pdf,.doc,.docx")},o=JSON.parse(sessionStorage.getItem("user"));return n.jsxs(Z,{title:"Add Record To News & Notice",children:[n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Title"}),n.jsx(A,{id:"outlined-basic",value:y,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return f((t=e==null?void 0:e.target)==null?void 0:t.value)}})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Description"}),n.jsx(te,{style:{height:"150px"},value:T,onChange:w}),n.jsx("br",{}),n.jsx("br",{})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Choose File "}),n.jsx("span",{style:{width:"2rem"},children:"      "}),n.jsx("a",{href:z,target:"_blank",children:"Uploaded File"}),n.jsx(A,{inputProps:{accept:J},id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return O((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(U,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),n.jsxs(G,{labelId:"demo-select-small-label",id:"demo-select-small",value:C,width:"300px",placeholder:"Choose your Content",MenuProps:N,onChange:e=>{var t,i;p((t=e==null?void 0:e.target)==null?void 0:t.value),u((i=e==null?void 0:e.target)==null?void 0:i.value)},children:[n.jsx(l,{value:"",children:n.jsx("em",{children:"None"})}),n.jsx(l,{value:"image",children:"Image"}),n.jsx(l,{value:"pdf",children:"PDF"})]})]})})}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(U,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),n.jsxs(G,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(h),width:"300px",placeholder:"Choose your Company",MenuProps:N,onChange:e=>{var t,i;v(Number((t=e==null?void 0:e.target)==null?void 0:t.value)),fetchBranch((i=e==null?void 0:e.target)==null?void 0:i.value)},children:[n.jsx(l,{value:"",children:n.jsx("em",{children:"None"})}),c==null?void 0:c.map(e=>(o==null?void 0:o.role)==="superadmin"?n.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):(e==null?void 0:e.id)===(o==null?void 0:o.companyId)?n.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id):null)]})]})})}),n.jsx("br",{}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx(H,{variant:"contained",onClick:()=>Q(),children:"Save Changes"}),n.jsx(H,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{V()},children:"Delete"})]})]})};export{ge as default};
