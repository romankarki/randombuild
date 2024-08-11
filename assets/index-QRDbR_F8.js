import{d as N,a1 as w,r,j as e,M as _,U as G}from"./index-BRiPDprX.js";import{h as C,a as h}from"./apiClient-BdZFA0eS.js";import{b as u}from"./Constants-C3A6Gqx3.js";import{T}from"./TextField-B9RgCfUw.js";import{S as H}from"./Select-B1tC3DLq.js";import{M as c}from"./MenuItem-B0v1FVPj.js";import{B as b}from"./Button-CgWm9gs8.js";import"./InputLabel-BGqQE_mf.js";const J=()=>{const f=N();let{id:a,compid:y}=w();r.useState(!1);const[l,x]=r.useState(""),[o,g]=r.useState(""),[d,v]=r.useState(0),[p,D]=r.useState([]),I=async()=>{if(!j())return;let s={id:a,title:l,description:o,companyId:d};const m=u+"/Branch/save-branch";await C(m,s),f(-1)},E=async()=>{if(!j())return;let s={id:a,title:l,description:o,companyId:d,isDeleted:!0};var m=confirm("are you sure you want to permanently delete this record");if(!m)return;const i=u+"/Branch/save-branch";await C(i,s),f(-1)},j=()=>{let t=[];d||t.push("Company is mandatory"),l==""&&t.push("Title Name is mandatory"),o==""&&t.push("Description is mandatory");let s=t.join(`
`);return t.length>0?(alert(s),!1):!0},P=async()=>{const t=u+"/Company/get-companies/",s=await h(t);D(s)};r.useEffect(()=>{P()},[]);const S=async()=>{const t=u+"/Branch/get-all-branches-for-company/"+y;let i=(await h(t)).filter(M=>M.id==a)[0];x(i.title),g(i.description),v(i.companyId)};r.useEffect(()=>{S()},[a,y]);const B={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}},n=JSON.parse(sessionStorage.getItem("user"));return e.jsxs(_,{title:"Creating new Employee",children:[e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Name"}),e.jsx(T,{id:"outlined-basic",value:l,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:t=>{var s;return x((s=t==null?void 0:t.target)==null?void 0:s.value)}})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Branch Description"}),e.jsx(T,{id:"outlined-basic",variant:"outlined",value:o,autoComplete:"off",fullWidth:!0,onChange:t=>{var s;return g((s=t==null?void 0:t.target)==null?void 0:s.value)}})]}),e.jsx("div",{style:{marginTop:"0rem"},children:e.jsx(G,{sx:{m:0,minWidth:120},size:"small",children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("p",{style:{marginRight:"2rem"},children:"Parent Company"}),e.jsxs(H,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(d),width:"300px",placeholder:"Choose your Company",MenuProps:B,onChange:t=>{var s;v(Number((s=t==null?void 0:t.target)==null?void 0:s.value))},children:[e.jsx(c,{value:"",children:e.jsx("em",{children:"None"})}),p==null?void 0:p.map(t=>(n==null?void 0:n.role)==="superadmin"?e.jsx(c,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):(t==null?void 0:t.id)===(n==null?void 0:n.companyId)?e.jsx(c,{value:t==null?void 0:t.id,children:t==null?void 0:t.name},t==null?void 0:t.id):null)]})]})})}),e.jsx("br",{}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx(b,{variant:"contained",onClick:()=>I(),children:"Save Changes"}),e.jsx(b,{color:"error",style:{marginLeft:"2rem"},variant:"contained",onClick:()=>{E()},children:"Delete"})]})]})};export{J as default};
