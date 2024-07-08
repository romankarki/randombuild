import{r as a,j as i,R as X,d as te,M as ne}from"./index-By_f7ebx.js";import"./EmployeeTable-aEUFEYHA.js";import{D as f,b}from"./Constants-DuPyYaCq.js";import{G as oe,A as le}from"./GetValuesFromLocalStorage-D0gTPTAy.js";import{a as ae,b as Y}from"./apiClient-BLOXFteY.js";import{T as o}from"./TextField-CDYINz3D.js";import{B as Z}from"./Button-oHaFgI0G.js";import"./TableRow-IW3sEstG.js";import"./TablePagination-D8H4BjBt.js";import"./Select-DQrKUjfe.js";import"./MenuItem-CHD6a2KY.js";import"./InputLabel-RhM-iev9.js";const se=({companyId:l,setIsAddDisabled:x})=>{var I,V,F,A,D,R,_;const[n,d]=a.useState(null);a.useState({});const[y,L]=a.useState(""),[S,w]=a.useState(""),[j,v]=a.useState(null),[C,s]=a.useState(null),[r,c]=a.useState(null),[m,h]=a.useState(null),[u,g]=a.useState(null),[p,k]=a.useState(null),[W,B]=a.useState(null),T=async()=>{var E,G,P,U,K,N,M,O,z,J,$,q,H,Q;let e=b+"/Dashboard/get-dashboard-info/"+l,t=await ae(e);t&&(t.imageLink1&&(t.imageLink1=f+l+"/"+((G=(E=t.imageLink1)==null?void 0:E.split("/"))==null?void 0:G.pop())),t.imageLink2&&(t.imageLink2=f+l+"/"+((U=(P=t.imageLink2)==null?void 0:P.split("/"))==null?void 0:U.pop())),t.imageLink3&&(t.imageLink1=f+l+"/"+((N=(K=t.imageLink3)==null?void 0:K.split("/"))==null?void 0:N.pop())),t.videoLink1&&(t.videoLink1=f+l+"/"+((O=(M=t.videoLink1)==null?void 0:M.split("/"))==null?void 0:O.pop())),t.videoLink2&&(t.videoLink2=f+l+"/"+((J=(z=t.videoLink2)==null?void 0:z.split("/"))==null?void 0:J.pop())),t.docLink1&&(t.docLink1=f+l+"/"+((q=($=t.docLink1)==null?void 0:$.split("/"))==null?void 0:q.pop())),t.docLink2&&(t.docLink2=f+l+"/"+((Q=(H=t.docLink2)==null?void 0:H.split("/"))==null?void 0:Q.pop()))),d(t),console.log("this is dashboard link",t),x(!!t)};a.useEffect(()=>{T()},[l]);const ee=async()=>{const e=new FormData;e.append("Id",n==null?void 0:n.id),e.append("Title",n==null?void 0:n.title),e.append("CompanyId",l),e.append("Description",n==null?void 0:n.description),e.append("Image1",j),e.append("Image2",C),e.append("Image3",r),e.append("Video1",m),e.append("Video2",u),e.append("Doc1",p),e.append("Doc2",W);const t=b+"/Dashboard/save-dashboard-info";await Y(t,e),alert("Successfully saved your Changes"),T()},ie=async()=>{const e=new FormData;e.append("Title",y),e.append("Description",S),e.append("CompanyId",l),e.append("Image1",j),e.append("Image2",C),e.append("Image3",r),e.append("Video1",m),e.append("Video2",u),e.append("Doc1",p),e.append("Doc2",W);const t=b+"/Dashboard/save-dashboard-info";await Y(t,e),alert("Successfully added your Changes"),T()};return i.jsxs(i.Fragment,{children:[!n&&i.jsx(i.Fragment,{children:i.jsxs("div",{children:[i.jsx("p",{children:"Adding a new Dashboard data"}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Dashboard Title"}),i.jsx(o,{id:"outlined-basic",value:n==null?void 0:n.title,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return d({...n,title:(t=e==null?void 0:e.target)==null?void 0:t.value})}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Description"}),i.jsx(o,{id:"outlined-basic",value:n==null?void 0:n.description,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return d({...n,description:(t=e==null?void 0:e.target)==null?void 0:t.value})}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 1 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return v((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 2 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return s((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 3 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return c((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Video 1 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return h((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Video 2 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return g((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Document 1 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return k((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Document 2 (optional)"}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return B((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsx("div",{style:{marginTop:"0.9rem"},children:i.jsx(Z,{variant:"contained",onClick:()=>ie(),children:"Save Changes"})})]})}),!!n&&i.jsx(i.Fragment,{children:i.jsxs("div",{children:[i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Dashboard Title"}),i.jsx(o,{id:"outlined-basic",value:n==null?void 0:n.title,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return d({...n,title:(t=e==null?void 0:e.target)==null?void 0:t.value})}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Description"}),i.jsx(o,{id:"outlined-basic",value:n==null?void 0:n.description,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return d({...n,description:(t=e==null?void 0:e.target)==null?void 0:t.value})}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 1 (optional)"}),((I=n==null?void 0:n.imageLink1)==null?void 0:I.length)>1&&i.jsx("p",{children:i.jsx("a",{target:"_blank",href:n.imageLink1,children:"view current file"})}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return v((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 2 (optional)"}),((V=n==null?void 0:n.imageLink2)==null?void 0:V.length)>1&&i.jsxs("p",{children:[" ",i.jsx("a",{target:"_blank",href:n.imageLink2,children:"view current file"})]}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return s((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Image 3 (optional)"}),((F=n==null?void 0:n.imageLink3)==null?void 0:F.length)>1&&i.jsx("p",{children:i.jsx("a",{target:"_blank",href:n.imageLink3,children:"view current file"})}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return c((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Video 1 (optional)"}),((A=n==null?void 0:n.videoLink1)==null?void 0:A.length)>1&&i.jsx("p",{children:i.jsx("a",{_target:"blank",href:n.videoLink1,children:"view current file"})}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return h((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Video 2 (optional)"}),((D=n==null?void 0:n.videoLink2)==null?void 0:D.length)>1&&i.jsxs("p",{children:[" ",i.jsx("a",{target:"_blank",href:n.videoLink2,children:"show current file"})]}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return g((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Document 1 (optional)"}),((R=n==null?void 0:n.docLink1)==null?void 0:R.length)>1&&i.jsx("p",{children:i.jsx("a",{target:"_blank",href:n.docLink1,children:"show current file"})}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return k((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsxs("div",{style:{marginTop:"0.9rem"},children:[i.jsx("span",{children:"Document 2 (optional)"}),((_=n==null?void 0:n.docLink2)==null?void 0:_.length)>1&&i.jsx("p",{children:i.jsx("a",{target:"_blank",href:n.docLink2,children:"show current file"})}),i.jsx(o,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var t;return B((t=e==null?void 0:e.target)==null?void 0:t.files[0])}})]}),i.jsx("div",{style:{marginTop:"0.9rem"},children:i.jsx(Z,{variant:"contained",onClick:()=>ee(),children:"Save Changes"})})]})})]})},re=se;function ke(){const[l,x]=X.useState([]),[n,d]=a.useState(""),[y,L]=a.useState(1),[S,w]=a.useState(!1),j=(s,r)=>{d(r);let c=l==null?void 0:l.filter(m=>m.name==r)[0];c&&L(c.id)};async function v(){const s=sessionStorage.getItem("user")||{},r=JSON.parse(s),c=(r==null?void 0:r.token)||"",m=b+"/Company/get-companies",h=await fetch(m,{method:"GET",headers:{Authorization:"Bearer "+c}});h.ok||alert("someting went wrong");const u=await h.json();x(u);let g=u==null?void 0:u.filter(k=>k.id==r.companyId),p=(g==null?void 0:g.pop())||null;p&&(d(p.name),L(p==null?void 0:p.id))}X.useEffect(()=>{v()},[]),te();const C=oe();return a.useEffect(()=>{},[n]),i.jsxs(ne,{children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.3rem"},children:[i.jsx("p",{}),C.toLowerCase()==="superadmin"?i.jsx(le,{inputValue:n,onInputChange:(s,r)=>j(s,r),sx:{width:"400px"},id:"disable-close-on-select",options:l.map(s=>s.name),getOptionLabel:s=>s,renderInput:s=>(s.inputProps.value||(s.inputProps.value="Admin"),i.jsx(o,{...s,placeholder:"Showing Default Company",variant:"standard"}))}):null]}),i.jsx(re,{companyId:y,setIsAddDisabled:w})]})}export{ke as default};
