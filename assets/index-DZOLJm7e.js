import{r as d,j as e,M as m,U as u}from"./index-CehL7CKG.js";import{h as c}from"./apiClient-BdZFA0eS.js";import{b as p}from"./Constants-CXd7ttqJ.js";import{T as i}from"./TextField-I3LJLRlG.js";import{S as h}from"./Select-DH0DuH6B.js";import{M as o}from"./MenuItem-Bwj8UeyX.js";import{B as f}from"./Button-Dmepa2Q6.js";import"./InputLabel-BFbdLjQg.js";function N(){const[s,t]=d.useState({emailAddress:"",password:"",confirmPassword:"",userName:"",firstName:"",lastName:"",companyId:1}),l=async()=>{console.log("Data being submitted is",s),s.password!=s.confirmPassword&&alert("Password and Confirm Password should match");const r=p+"/User/register-user";let a=await c(r,s);a!=null&&a.userID&&(alert("Successfully Created Your User"),t({emailAddress:"",password:"",confirmPassword:"",userName:"",firstName:"",lastName:"",companyId:1}))},n={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return e.jsxs(m,{title:"Add a new User",children:[e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Email Address"}),e.jsx(i,{id:"outlined-basic",value:s==null?void 0:s.emailAddress,onChange:r=>{var a;t({...s,emailAddress:(a=r==null?void 0:r.target)==null?void 0:a.value})},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Password"}),e.jsx(i,{type:"password",id:"outlined-basic",value:s==null?void 0:s.password,onChange:r=>{var a;t({...s,password:(a=r==null?void 0:r.target)==null?void 0:a.value})},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Confirm Password"}),e.jsx(i,{type:"password",id:"outlined-basic",value:s==null?void 0:s.confirmPassword,onChange:r=>{var a;t({...s,confirmPassword:(a=r==null?void 0:r.target)==null?void 0:a.value})},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"First Name"}),e.jsx(i,{id:"outlined-basic",value:s==null?void 0:s.firstName,onChange:r=>{var a;t({...s,firstName:(a=r==null?void 0:r.target)==null?void 0:a.value})},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),e.jsxs("div",{style:{marginTop:"0.9rem"},children:[e.jsx("span",{children:"Last Name"}),e.jsx(i,{id:"outlined-basic",value:s==null?void 0:s.lastName,onChange:r=>{var a;t({...s,lastName:(a=r==null?void 0:r.target)==null?void 0:a.value})},variant:"outlined",autoComplete:"off",fullWidth:!0})]}),e.jsx("div",{style:{marginTop:"0rem"},children:e.jsx(u,{sx:{m:1,minWidth:120},size:"small",children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),e.jsxs(h,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(s==null?void 0:s.companyId),width:"300px",placeholder:"Choose your Company",MenuProps:n,onChange:r=>{var a;return setCompanyId((a=r==null?void 0:r.target)==null?void 0:a.value)},children:[e.jsx(o,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(o,{value:1,children:"Admin"})]})]})})}),e.jsx("div",{style:{marginTop:"0.9rem"},children:e.jsx(f,{variant:"contained",onClick:()=>l(),children:"Save Changes"})})]})}export{N as default};
