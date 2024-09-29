import{k as E,j as e,D as _,E as D,z as N,ad as K,h as v,_ as u,J as X,r as w,K as H,N as V,U as M,X as W,at as Q,au as Y,T as S,S as I,R as T,d as Z,G as m,ag as A,aH as ee,I as oe,aM as se,aN as re,P as ae}from"./index-DRQ6_V5g.js";import{F as te,E as ne,a as le,A as ie}from"./EyeInvisibleOutlined-28fID49p.js";import{b as ce}from"./Constants-CKiQFZHc.js";import{c as de,a as O}from"./index.esm-BPx32Hc0.js";import{I as U,F as R}from"./InputLabel-BfdBC-nT.js";import{S as pe}from"./SwitchBase-UwyU8-RP.js";import{L as me}from"./Link-Cdfl57C3.js";import{B as ue}from"./Button-DqR8CO8c.js";const he=E(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),be=E(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),xe=E(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function fe(o){return D("MuiCheckbox",o)}const B=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ge=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],je=o=>{const{classes:s,indeterminate:a,color:n,size:l}=o,t={root:["root",a&&"indeterminate",`color${v(n)}`,`size${v(l)}`]},c=W(t,fe,s);return u({},s,c)},Ce=N(pe,{shouldForwardProp:o=>K(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:a}=o;return[s.root,a.indeterminate&&s.indeterminate,s[`size${v(a.size)}`],a.color!=="default"&&s[`color${v(a.color)}`]]}})(({theme:o,ownerState:s})=>u({color:(o.vars||o).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${s.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[s.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:X(s.color==="default"?o.palette.action.active:o.palette[s.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${B.checked}, &.${B.indeterminate}`]:{color:(o.vars||o).palette[s.color].main},[`&.${B.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),ve=e.jsx(be,{}),ke=e.jsx(he,{}),ye=e.jsx(xe,{}),Pe=w.forwardRef(function(s,a){var n,l;const t=H({props:s,name:"MuiCheckbox"}),{checkedIcon:c=ve,color:k="primary",icon:h=ke,indeterminate:r=!1,indeterminateIcon:b=ye,inputProps:x,size:d="medium",className:p}=t,i=V(t,ge),g=r?b:h,f=r?b:c,y=u({},t,{color:k,indeterminate:r,size:d}),j=je(y);return e.jsx(Ce,u({type:"checkbox",inputProps:u({"data-indeterminate":r},x),icon:w.cloneElement(g,{fontSize:(n=g.props.fontSize)!=null?n:d}),checkedIcon:w.cloneElement(f,{fontSize:(l=f.props.fontSize)!=null?l:d}),ownerState:y,ref:a,className:M(j.root,p)},i,{classes:j}))});function we(o){return D("MuiFormControlLabel",o)}const P=_("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Ie=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Le=o=>{const{classes:s,disabled:a,labelPlacement:n,error:l,required:t}=o,c={root:["root",a&&"disabled",`labelPlacement${v(n)}`,l&&"error",t&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",l&&"error"]};return W(c,we,s)},Se=N("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:a}=o;return[{[`& .${P.label}`]:s.label},s.root,s[`labelPlacement${v(a.labelPlacement)}`]]}})(({theme:o,ownerState:s})=>u({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${P.disabled}`]:{cursor:"default"}},s.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},s.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},s.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${P.label}`]:{[`&.${P.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),$e=N("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,s)=>s.asterisk})(({theme:o})=>({[`&.${P.error}`]:{color:(o.vars||o).palette.error.main}})),Fe=w.forwardRef(function(s,a){var n,l;const t=H({props:s,name:"MuiFormControlLabel"}),{className:c,componentsProps:k={},control:h,disabled:r,disableTypography:b,label:x,labelPlacement:d="end",required:p,slotProps:i={}}=t,g=V(t,Ie),f=Q(),y=(n=r??h.props.disabled)!=null?n:f==null?void 0:f.disabled,j=p??h.props.required,q={disabled:y,required:j};["checked","name","onChange","value","inputRef"].forEach(L=>{typeof h.props[L]>"u"&&typeof t[L]<"u"&&(q[L]=t[L])});const G=Y({props:t,muiFormControl:f,states:["error"]}),$=u({},t,{disabled:y,labelPlacement:d,required:j,error:G.error}),F=Le($),z=(l=i.typography)!=null?l:k.typography;let C=x;return C!=null&&C.type!==S&&!b&&(C=e.jsx(S,u({component:"span"},z,{className:M(F.label,z==null?void 0:z.className),children:C}))),e.jsxs(Se,u({className:M(F.root,c),ownerState:$,ref:a},g,{children:[w.cloneElement(h,q),j?e.jsxs(I,{display:"block",children:[C,e.jsxs($e,{ownerState:$,"aria-hidden":!0,className:F.asterisk,children:[" ","*"]})]}):C]}))});function J({isDemo:o=!1}){const[s,a]=T.useState(!1),[n,l]=T.useState(!1),t=()=>{l(!n)},c=r=>{r.preventDefault()},k=Z(),h=async(r,{resetForm:b})=>{let x={username:r.email,password:r.password};const d=ce+"/User/authenticate-user",p=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});if(!p.ok){alert("Failed to Authenticate");return}const i=await p.json();sessionStorage.setItem("user",JSON.stringify(i)),k("/")};return e.jsx(e.Fragment,{children:e.jsx(te,{initialValues:{email:"",password:"",submit:null},validationSchema:de().shape({email:O().email("Must be a valid email").max(255).required("Email is required"),password:O().max(255).required("Password is required")}),onSubmit:h,children:({errors:r,handleBlur:b,handleChange:x,handleSubmit:d,isSubmitting:p,touched:i,values:g})=>e.jsx("form",{noValidate:!0,onSubmit:d,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{item:!0,xs:12,children:[e.jsxs(I,{spacing:1,children:[e.jsx(U,{htmlFor:"email-login",children:"Email Address"}),e.jsx(A,{id:"email-login",type:"email",value:g.email,name:"email",onBlur:b,onChange:x,placeholder:"Enter email address",fullWidth:!0,error:!!(i.email&&r.email)})]}),i.email&&r.email&&e.jsx(R,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),e.jsxs(m,{item:!0,xs:12,children:[e.jsxs(I,{spacing:1,children:[e.jsx(U,{htmlFor:"password-login",children:"Password"}),e.jsx(A,{fullWidth:!0,error:!!(i.password&&r.password),id:"-password-login",type:n?"text":"password",value:g.password,name:"password",onBlur:b,onChange:x,endAdornment:e.jsx(ee,{position:"end",children:e.jsx(oe,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:c,edge:"end",color:"secondary",children:n?e.jsx(ne,{}):e.jsx(le,{})})}),placeholder:"Enter password"})]}),i.password&&r.password&&e.jsx(R,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),e.jsx(m,{item:!0,xs:12,sx:{mt:-1},children:e.jsxs(I,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[e.jsx(Fe,{control:e.jsx(Pe,{checked:s,onChange:f=>a(f.target.checked),name:"checked",color:"primary",size:"small"}),label:e.jsx(S,{variant:"h6",children:"Keep me sign in"})}),e.jsx(me,{variant:"h6",component:se,color:"text.primary",children:"Forgot Password?"})]})}),r.submit&&e.jsx(m,{item:!0,xs:12,children:e.jsx(R,{error:!0,children:r.submit})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(re,{children:e.jsx(ue,{disableElevation:!0,disabled:p,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})})})}J.propTypes={isDemo:ae.bool};function Ae(){return e.jsx(ie,{children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,children:e.jsx(I,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:e.jsx(S,{variant:"h3",children:"Login"})})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(J,{})})]})})}export{Ae as default};
