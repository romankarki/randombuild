import{d as C,r as a,j as e,M as T,U as I}from"./index-CpCWadZh.js";import{h as b,a as M}from"./apiClient-BLOXFteY.js";import{b as l}from"./Constants-Bro63_Lq.js";import{T as d}from"./TextField-1kVY69qX.js";import{S as P}from"./Select-D4PcgPVA.js";import{M as m}from"./MenuItem-4edqsSKK.js";import{B as D}from"./Button-DLaKrcGl.js";import"./InputLabel-B9cEyF0g.js";const W=()=>{const u=C(),[n,p]=a.useState(""),[r,c]=a.useState(""),[i,h]=a.useState(0),[o,x]=a.useState([]);a.useState([]);const f=async()=>{if(!g())return;let s={title:n,description:r,companyId:i};const y=l+"/Branch/save-branch";await b(y,s),u(-1)},g=()=>{let t=[];i||t.push("Company is mandatory"),n==""&&t.push("Title Name is mandatory"),r==""&&t.push("Description is mandatory");let s=t.join(`
`);return t.length>0?(alert(s),!1):!0},j=async()=>{const t=l+"/Company/get-companies/",s=await M(t);x(s)};a.useEffect(()=>{j()},[]);const v={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return e.jsxs(T,{title:"Creating new Branch",children:[e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Name"}),e.jsx(d,{id:"outlined-basic",value:n,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var s;return p((s=t==null?void 0:t.target)==null?void 0:s.value)}})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Description"}),e.jsx(d,{id:"outlined-basic",variant:"outlined",value:r,autoComplete:"off",fullWidth:!0,onChange:t=>{var s;return c((s=t==null?void 0:t.target)==null?void 0:s.value)}})]}),e.jsx("div",{style:{marginTop:"0rem"},children:e.jsx(I,{sx:{m:0,minWidth:120},size:"small",children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),e.jsxs(P,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(i),width:"300px",placeholder:"Choose your Company",MenuProps:v,onChange:t=>{var s;h(Number((s=t==null?void 0:t.target)==null?void 0:s.value))},children:[e.jsx(m,{value:"",children:e.jsx("em",{children:"None"})}),o==null?void 0:o.map(t=>e.jsx(m,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id))]})]})})}),e.jsx("div",{style:{marginTop:"0.9rem"},children:e.jsx(D,{variant:"contained",onClick:()=>f(),children:"Save Changes"})})]})};export{W as default};
