import{d as D,r,j as s,M as E,F as I}from"./index-DXOqlz8S.js";import{h as S,a as M}from"./apiClient-BdZFA0eS.js";import{b as m}from"./Constants-DP-d7XJz.js";import{T as u}from"./TextField-Dwy0TTj8.js";import{S as P}from"./Select-B0zV3ojE.js";import{M as d}from"./MenuItem-DDRGYG7L.js";import{B as b}from"./Button-K3mHJVKx.js";import"./InputLabel-CjDmApQ-.js";const W=()=>{const p=D(),[i,f]=r.useState(""),[x,w]=r.useState(""),[a,y]=r.useState(""),[o,g]=r.useState(0),[l,j]=r.useState([]),v=async()=>{if(!C())return;let e={details:i,links:x,companyId:o,noOfDaysForExpiry:a};const N=m+"/NewsAndNotice/save-flash-news";await S(N,e),p(-1)},C=()=>{let t=[];o||t.push("Company is mandatory"),i==""&&t.push("Detail is mandatory"),a==""&&t.push("No of day for expiry is mandatory");let e=t.join(`
`);return t.length>0?(alert(e),!1):!0},c=async()=>{const t=m+"/Company/get-companies/",e=await M(t);j(e)};r.useEffect(()=>{c()},[]);const T={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},n=JSON.parse(sessionStorage.getItem("user"));return s.jsxs(E,{title:"Creating new Flash news",children:[s.jsxs("div",{style:{marginTop:"0.9rem"},children:[s.jsx("span",{children:"Details"}),s.jsx(u,{id:"outlined-basic",value:i,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return f((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),s.jsxs("div",{style:{marginTop:"0.9rem"},children:[s.jsx("span",{children:"No of Days for Expiry"}),s.jsx(u,{id:"outlined-basic",variant:"outlined",value:a,autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return y((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),s.jsx("div",{style:{marginTop:"0rem"},children:s.jsx(I,{sx:{m:0,minWidth:120},size:"small",children:s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[s.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),s.jsxs(P,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:T,onChange:t=>{var e;g(Number((e=t==null?void 0:t.target)==null?void 0:e.value))},children:[s.jsx(d,{value:"",children:s.jsx("em",{children:"None"})}),l==null?void 0:l.map(t=>(n==null?void 0:n.role)==="superadmin"?s.jsx(d,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):(t==null?void 0:t.id)===(n==null?void 0:n.companyId)?s.jsx(d,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):null)]})]})})}),s.jsx("div",{style:{marginTop:"0.9rem"},children:s.jsx(b,{variant:"contained",onClick:()=>v(),children:"Save Changes"})})]})};export{W as default};
