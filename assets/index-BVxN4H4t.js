import{d as O,a1 as V,r as s,j as n,M as q,U as E}from"./index-By_f7ebx.js";import{b as J,h as K,a as F}from"./apiClient-BLOXFteY.js";import{N as h,b as c}from"./Constants-DuPyYaCq.js";import{T as L}from"./TextField-CDYINz3D.js";import{S as M}from"./Select-DQrKUjfe.js";import{M as i}from"./MenuItem-CHD6a2KY.js";import{B as R}from"./Button-oHaFgI0G.js";import"./InputLabel-RhM-iev9.js";const ae=()=>{const u=O(),{id:r}=V(),[m,U]=s.useState([]),[x,f]=s.useState(""),[g,y]=s.useState(0),[j,d]=s.useState("image"),[_,A]=s.useState(null),[G,p]=s.useState(""),H=async()=>{let t=new FormData;t.append("id",r),t.append("text",x),t.append("fileType",j),t.append("companyId",g),t.append("file",_);const e=c+"/NewsAndNotice/save-news-notice";await J(e,t),u(-1)},W=async()=>{var t=confirm("are you sure you want to permanently delete this record");if(!t)return;const e=c+"/NewsAndNotice/delete-news-notice/"+r;await K(e,{}),u(-1)},B=async()=>{const t=c+"/Company/get-companies/",e=await F(t);U(e)},z=async()=>{var a,C,I,T,w,N,b,S,P,k,D;const t=c+"/NewsAndNotice/get-news-notice/"+r,e=await F(t);if(f(e.text),y(e.companyId),((a=e==null?void 0:e.docLink)==null?void 0:a.length)>1){const o=(T=(I=(C=e==null?void 0:e.docLink)==null?void 0:C.split("/"))==null?void 0:I.pop())==null?void 0:T.toString(),l=h+(e==null?void 0:e.companyId)+"/"+o;p(l),d("pdf")}else if(((w=e==null?void 0:e.imageLink)==null?void 0:w.length)>1){const o=(S=(b=(N=e==null?void 0:e.imageLink)==null?void 0:N.split("/"))==null?void 0:b.pop())==null?void 0:S.toString(),l=h+(e==null?void 0:e.companyId)+"/"+o;p(l),d("image")}else{const o=(D=(k=(P=e==null?void 0:e.videoLink)==null?void 0:P.split("/"))==null?void 0:k.pop())==null?void 0:D.toString(),l=h+(e==null?void 0:e.companyId)+"/"+o;p(l),d("video")}};s.useEffect(()=>{B()},[]),s.useEffect(()=>{z()},[r]);const v={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return n.jsxs(q,{title:"Add Record To News & Notice",children:[n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Title"}),n.jsx(L,{id:"outlined-basic",value:x,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return f((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Choose File "}),n.jsx("span",{style:{width:"2rem"},children:"      "}),n.jsx("a",{href:G,target:"_blank",children:"Uploaded File"}),n.jsx(L,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return A((e=t==null?void 0:t.target)==null?void 0:e.files[0])}})]}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(E,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),n.jsxs(M,{labelId:"demo-select-small-label",id:"demo-select-small",value:j,width:"300px",placeholder:"Choose your Content",MenuProps:v,onChange:t=>{var e;return d((e=t==null?void 0:t.target)==null?void 0:e.value)},children:[n.jsx(i,{value:"",children:n.jsx("em",{children:"None"})}),n.jsx(i,{value:"image",children:"Image"}),n.jsx(i,{value:"pdf",children:"PDF"}),n.jsx(i,{values:"video",children:"Video"})]})]})})}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(E,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),n.jsxs(M,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(g),width:"300px",placeholder:"Choose your Company",MenuProps:v,onChange:t=>{var e,a;y(Number((e=t==null?void 0:t.target)==null?void 0:e.value)),fetchBranch((a=t==null?void 0:t.target)==null?void 0:a.value)},children:[n.jsx(i,{value:"",children:n.jsx("em",{children:"None"})}),m==null?void 0:m.map(t=>n.jsx(i,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id))]})]})})}),n.jsx("br",{}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx(R,{variant:"contained",onClick:()=>H(),children:"Save Changes"}),n.jsx(R,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{W()},children:"Delete"})]})]})};export{ae as default};
