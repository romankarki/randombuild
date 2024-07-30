import{d as S,a1 as w,r as s,j as e,M as N,U as _}from"./index-BelM-Cwh.js";import{h as g,a as v}from"./apiClient-BdZFA0eS.js";import{b as m}from"./Constants-B45_vLd7.js";import{T as j}from"./TextField-DJwYcjoN.js";import{S as G}from"./Select-BZ9ul-t8.js";import{M as C}from"./MenuItem-FEZJac9C.js";import{B as T}from"./Button-DyCpSJgt.js";import"./InputLabel-B05guniO.js";const z=()=>{const u=S();let{id:n,compid:p}=w();s.useState(!1);const[i,h]=s.useState(""),[l,f]=s.useState(""),[o,y]=s.useState(0),[c,I]=s.useState([]),b=async()=>{if(!x())return;let a={id:n,title:i,description:l,companyId:o};const d=m+"/Branch/save-branch";await g(d,a),u(-1)},D=async()=>{if(!x())return;let a={id:n,title:i,description:l,companyId:o,isDeleted:!0};var d=confirm("are you sure you want to permanently delete this record");if(!d)return;const r=m+"/Branch/save-branch";await g(r,a),u(-1)},x=()=>{let t=[];o||t.push("Company is mandatory"),i==""&&t.push("Title Name is mandatory"),l==""&&t.push("Description is mandatory");let a=t.join(`
`);return t.length>0?(alert(a),!1):!0},E=async()=>{const t=m+"/Company/get-companies/",a=await v(t);I(a)};s.useEffect(()=>{E()},[]);const P=async()=>{const t=m+"/Branch/get-all-branches-for-company/"+p;let r=(await v(t)).filter(M=>M.id==n)[0];h(r.title),f(r.description),y(r.companyId)};s.useEffect(()=>{P()},[n,p]);const B={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return e.jsxs(N,{title:"Creating new Employee",children:[e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Name"}),e.jsx(j,{id:"outlined-basic",value:i,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var a;return h((a=t==null?void 0:t.target)==null?void 0:a.value)}})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Description"}),e.jsx(j,{id:"outlined-basic",variant:"outlined",value:l,autoComplete:"off",fullWidth:!0,onChange:t=>{var a;return f((a=t==null?void 0:t.target)==null?void 0:a.value)}})]}),e.jsx("div",{style:{marginTop:"0rem"},children:e.jsx(_,{sx:{m:0,minWidth:120},size:"small",children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),e.jsxs(G,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(o),width:"300px",placeholder:"Choose your Company",MenuProps:B,onChange:t=>{var a;y(Number((a=t==null?void 0:t.target)==null?void 0:a.value))},children:[e.jsx(C,{value:"",children:e.jsx("em",{children:"None"})}),c==null?void 0:c.map(t=>e.jsx(C,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id))]})]})})}),e.jsx("br",{}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx(T,{variant:"contained",onClick:()=>b(),children:"Save Changes"}),e.jsx(T,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{D()},children:"Delete"})]})]})};export{z as default};
