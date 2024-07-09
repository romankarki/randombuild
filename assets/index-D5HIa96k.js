import{a1 as ge,r,d as xe,j as n,M as Te,T as ye,U as E}from"./index-BTRZstNR.js";import{a as g,b as Se,h as k}from"./apiClient-BLOXFteY.js";import{T as je,c as w,b as c}from"./Constants-BUFMHqTz.js";import{R as fe}from"./index-B8y9y9tp.js";import{T as m}from"./TextField-GCBK3T6O.js";import{S as L}from"./Select-Xs8P-wOv.js";import{M as p}from"./MenuItem-BkcVvT_A.js";import{B as P}from"./Button-CrGA_dfM.js";import"./InputLabel-XzrnmkSq.js";const We=()=>{let{id:d,compid:l}=ge();const[i,ee]=r.useState(null),[R,te]=r.useState(""),[x,ne]=r.useState([]),[T,W]=r.useState(""),[ie,y]=r.useState(""),[Ce,se]=r.useState(null),[S,U]=r.useState(0),[j,re]=r.useState([]),[f,M]=r.useState(""),[C,_]=r.useState(""),[b,B]=r.useState(""),[I,H]=r.useState(null),[N,oe]=r.useState([]),[F,D]=r.useState(l),h=xe();function le(e){const t=new DOMParser().parseFromString(e,"text/html"),a=document.createTreeWalker(t.body,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let s="";for(;a.nextNode();){const o=a.currentNode;o.nodeType===Node.TEXT_NODE?s+=o.nodeValue:o.nodeType===Node.ELEMENT_NODE&&(o.tagName==="BR"||o.tagName==="P"||o.tagName==="DIV"||o.tagName==="UL"||o.tagNameg=="LI")&&(s+=`
`)}return s=s.replace(/^\n+|\n+$/g,""),s=s.replace(/\n{2,}/g,`
`),s}const ae=async()=>{var s,o,z,A,V,X,Y,$,q,Q,J,Z;const e=c+"/KioskServiceDetail/get-service-detail-by-id/"+d,t=await g(e);ee(t);const a=je+l+"/"+((z=(o=(s=t==null?void 0:t.blobLink)==null?void 0:s.split("/"))==null?void 0:o.pop())==null?void 0:z.toString());if(te(a),W(t==null?void 0:t.htmlTranscript),D(t==null?void 0:t.companyId),U(t==null?void 0:t.serviceId),B(t==null?void 0:t.title),M(t==null?void 0:t.timeForService),_(t==null?void 0:t.chargeForService),H(t==null?void 0:t.branchId),t!=null&&t.imageLink){const u=(X=(V=(A=t==null?void 0:t.imageLink)==null?void 0:A.split("/"))==null?void 0:V.pop())==null?void 0:X.toString(),v=w+l+"/"+u;y(v)}else if(t!=null&&t.docLink){const u=(q=($=(Y=t==null?void 0:t.docLink)==null?void 0:Y.split("/"))==null?void 0:$.pop())==null?void 0:q.toString(),v=w+l+"/"+u;y(v)}else{const u=(Z=(J=(Q=t==null?void 0:t.blobLink)==null?void 0:Q.split("/"))==null?void 0:J.pop())==null?void 0:Z.toString(),v=w+l+"/"+u;y(v)}},ce=async()=>{const e=c+"/KioskService/get-all-company-department/"+l,t=await g(e);ne(t)},O="use-uuid-if-multiple-on-page";r.useEffect(()=>{const e=document.querySelector(`#${O}`);e&&e.load()}),r.useEffect(()=>{ce(),ae()},[d,R,l]);const de=async()=>{const e=c+"/Company/get-companies/",t=await g(e);re(t),D(l),me(l)},me=async e=>{const t=c+"/Branch/get-all-branches-for-company/"+e;let a=await g(t);oe(a)};r.useEffect(()=>{de()},[]);const G={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},pe=async()=>{if(!(i!=null&&i.isTTSContent)){let s=new FormData;s.append("id",d),s.append("title",b),s.append("companyID",F),s.append("serviceId",S),s.append("timeForService",f),s.append("chargeForService",C),s.append("branchId",I);const o=c+"/KioskServiceDetail/save-service-detail";await Se(o,s),h(-1);return}let e=le(T),t={id:d,title:b,HTMLTranscript:T,transcript:e,companyId:F,serviceId:S,timeForService:f,chargeForService:C,branchId:I};const a=c+"/KioskServiceDetail/save-tts-service-detail";await k(a,t),h(-1)},ue=async()=>{var e=confirm("are you sure you want to permanently delete this record");if(!e)return;const t=c+"/KioskServiceDetail/delete-service-detail/"+d;await k(t,{}),h(-1)},[ve,K]=r.useState(!1),he=async()=>{const e=c+"/KioskServiceDetail/convert-tts-service-detail/"+d;var t=confirm("are you sure you want to use this service");t&&(K(!0),await k(e,{}),K(!1),h(-1))};return n.jsxs(Te,{title:"Editing Service Detail",children:[n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Title"}),n.jsx(m,{id:"outlined-basic",value:b,onChange:e=>{var t;B((t=e==null?void 0:e.target)==null?void 0:t.value)},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Is Text To Speech Content:  "}),(i==null?void 0:i.isTTSContent)&&n.jsx("span",{style:{fontWeight:"bold",color:"green"},children:"Yes"}),!(i!=null&&i.isTTSContent)&&n.jsx("span",{style:{fontWeight:"bold",color:"red"},children:"No"})]}),(i==null?void 0:i.isTTSContent)&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{marginTop:"0.9rem"},children:n.jsx("span",{children:"Transcript"})}),n.jsx(fe,{value:T,onChange:W})]}),!(i!=null&&i.isTTSContent)&&n.jsx(n.Fragment,{children:n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{style:{marginRight:"1rem"},children:"Chosen File"}),n.jsx("span",{style:{width:"2rem"},children:"      "}),n.jsx("a",{href:ie,target:"_blank",children:"Uploaded File"}),n.jsx(m,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return se((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]})}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Time For Service"}),n.jsx(m,{variant:"outlined",multiline:!0,value:f,onChange:e=>{var t;M((t=e==null?void 0:e.target)==null?void 0:t.value)},fullWidth:!0})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Charge For Service"}),n.jsx(m,{variant:"outlined",multiline:!0,value:C,onChange:e=>{var t;_((t=e==null?void 0:e.target)==null?void 0:t.value)},fullWidth:!0})]}),(i==null?void 0:i.isTTSContent)&&n.jsxs(n.Fragment,{children:[n.jsx(ye,{variant:"body1",style:{marginTop:"0.9rem"},children:"Generated Speech :"}),n.jsxs("audio",{id:O,controls:!0,children:[n.jsx("source",{src:R,type:"audio/mpeg"}),"Your browser does not support the audio element."]},123)]}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(E,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),n.jsxs(L,{disabled:!0,labelId:"demo-select-small-label",id:"demo-select-small",value:Number(F),width:"300px",placeholder:"Choose your Company",MenuProps:G,onChange:e=>{var t;D(Number((t=e==null?void 0:e.target)==null?void 0:t.value))},children:[n.jsx(p,{value:"",children:n.jsx("em",{children:"None"})}),j==null?void 0:j.map(e=>n.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(E,{sx:{m:0,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Service Branch"}),n.jsxs(L,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(I),width:"300px",placeholder:"Choose your Company",MenuProps:G,onChange:e=>{var t;return H((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[n.jsx(p,{value:"",children:n.jsx("em",{children:"None"})}),N==null?void 0:N.map(e=>n.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),n.jsx("div",{style:{marginTop:"0rem"},children:n.jsx(E,{sx:{m:1,minWidth:120},size:"small",children:n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[n.jsx("p",{style:{marginRight:"2rem"},children:"Service Department"}),n.jsxs(L,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(S),width:"300px",onChange:e=>{var t;U((t=e==null?void 0:e.target)==null?void 0:t.value)},children:[n.jsx(p,{value:"",children:n.jsx("em",{children:"None"})}),x==null?void 0:x.map(e=>n.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.departmentName},e==null?void 0:e.id))]})]})})}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Grievance Person"}),n.jsx(m,{id:"outlined-basic",value:i==null?void 0:i.grievancePerson,disabled:!0,variant:"outlined",autoComplete:"off",fullWidth:!0})]}),n.jsxs("div",{style:{marginTop:"0.9rem"},children:[n.jsx("span",{children:"Responsible Person"}),n.jsx(m,{id:"outlined-basic",value:i==null?void 0:i.responsiblePerson,disabled:!0,fullWidth:!0})]}),ve?n.jsx("div",{children:n.jsx("p",{style:{color:"gray",fontWeight:"bold",fontSize:"1.1rem"},children:"Converting Text To Speech ...."})}):n.jsxs("div",{style:{marginTop:"1.2rem"},children:[n.jsx(P,{variant:"contained",onClick:()=>pe(),children:"Save Changes"}),(i==null?void 0:i.isTTSContent)&&n.jsx(P,{color:"info",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>he(),children:"Convert TTS"}),n.jsx(P,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{ue()},children:"Delete"})]})]})};export{We as default};
