import{d as f,r as n,j as a,M as v}from"./index-By_f7ebx.js";import{h as g}from"./apiClient-BLOXFteY.js";import{b as x}from"./Constants-DuPyYaCq.js";import{T as i}from"./TextField-CDYINz3D.js";import{B as j}from"./Button-oHaFgI0G.js";import"./Select-DQrKUjfe.js";import"./InputLabel-RhM-iev9.js";const M=()=>{const l=f(),[s,d]=n.useState(""),[r,u]=n.useState(""),[o,m]=n.useState(""),p=async()=>{if(!c())return;let e={name:s,address:r,logo:o};const h=x+"/Company/save-company";await g(h,e),l(-1)},c=()=>{let t=[];s||t.push("Name is mandatory"),r||t.push("Address is mandatory");let e=t.join(`
`);return t.length>0?(alert(e),!1):!0};return a.jsxs(v,{title:"Creating new Service",children:[a.jsxs("div",{style:{marginTop:"0.9rem"},children:[a.jsx("span",{children:"Company Name"}),a.jsx(i,{id:"outlined-basic",value:s,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return d((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),a.jsxs("div",{style:{marginTop:"0.9rem"},children:[a.jsx("span",{children:"Company Address"}),a.jsx(i,{id:"outlined-basic",value:r,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return u((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),a.jsxs("div",{style:{marginTop:"0.9rem"},children:[a.jsx("span",{children:"Company URL"}),a.jsx(i,{id:"outlined-basic",value:o,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var e;return m((e=t==null?void 0:t.target)==null?void 0:e.value)}})]}),a.jsx("br",{}),a.jsx("div",{style:{marginTop:"0.9rem"},children:a.jsx(j,{variant:"contained",onClick:()=>p(),children:"Save Changes"})})]})};export{M as default};
