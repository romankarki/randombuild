import{x as Y,y as Z,z as I,h as j,W as _,a2 as ee,a3 as te,r as n,H as se,_ as k,j as t,I as ae,a4 as re,J as ie,d as ne,a1 as oe,M as le,U as C}from"./index-371WFPPX.js";import{b as ce,h as de,a as P}from"./apiClient-BLOXFteY.js";import{b}from"./Constants-D0E4tgva.js";import{R as pe}from"./index-Bjx3CTx3.js";import{T as w}from"./TextField-6EwJ1WRj.js";import{S as me}from"./SwitchBase-DYpJ3rEJ.js";import{S as T}from"./Select-ZezECQ10.js";import{M as p}from"./MenuItem-BWD5zmyq.js";import{B as ue}from"./Button-BdF-a1jo.js";import"./InputLabel-DPYABPbC.js";function he(s){return Z("MuiSwitch",s)}const l=Y("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ge=["className","color","edge","size","sx"],ve=re(),xe=s=>{const{classes:a,edge:o,size:g,color:v,checked:S,disabled:x}=s,f={root:["root",o&&`edge${j(o)}`,`size${j(g)}`],switchBase:["switchBase",`color${j(v)}`,S&&"checked",x&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=ie(f,he,a);return k({},a,c)},ye=I("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:o}=s;return[a.root,o.edge&&a[`edge${j(o.edge)}`],a[`size${j(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${l.thumb}`]:{width:16,height:16},[`& .${l.switchBase}`]:{padding:4,[`&.${l.checked}`]:{transform:"translateX(16px)"}}}}]}),je=I(me,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(s,a)=>{const{ownerState:o}=s;return[a.switchBase,{[`& .${l.input}`]:a.input},o.color!=="default"&&a[`color${j(o.color)}`]]}})(({theme:s})=>({position:"absolute",top:0,left:0,zIndex:1,color:s.vars?s.vars.palette.Switch.defaultColor:`${s.palette.mode==="light"?s.palette.common.white:s.palette.grey[300]}`,transition:s.transitions.create(["left","transform"],{duration:s.transitions.duration.shortest}),[`&.${l.checked}`]:{transform:"translateX(20px)"},[`&.${l.disabled}`]:{color:s.vars?s.vars.palette.Switch.defaultDisabledColor:`${s.palette.mode==="light"?s.palette.grey[100]:s.palette.grey[600]}`},[`&.${l.checked} + .${l.track}`]:{opacity:.5},[`&.${l.disabled} + .${l.track}`]:{opacity:s.vars?s.vars.opacity.switchTrackDisabled:`${s.palette.mode==="light"?.12:.2}`},[`& .${l.input}`]:{left:"-100%",width:"300%"}}),({theme:s})=>({"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:_(s.palette.action.active,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(s.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${l.checked}`]:{color:(s.vars||s).palette[a].main,"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette[a].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:_(s.palette[a].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${l.disabled}`]:{color:s.vars?s.vars.palette.Switch[`${a}DisabledColor`]:`${s.palette.mode==="light"?ee(s.palette[a].main,.62):te(s.palette[a].main,.55)}`}},[`&.${l.checked} + .${l.track}`]:{backgroundColor:(s.vars||s).palette[a].main}}}))]})),Se=I("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(s,a)=>a.track})(({theme:s})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:s.transitions.create(["opacity","background-color"],{duration:s.transitions.duration.shortest}),backgroundColor:s.vars?s.vars.palette.common.onBackground:`${s.palette.mode==="light"?s.palette.common.black:s.palette.common.white}`,opacity:s.vars?s.vars.opacity.switchTrack:`${s.palette.mode==="light"?.38:.3}`})),fe=I("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(s,a)=>a.thumb})(({theme:s})=>({boxShadow:(s.vars||s).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),be=n.forwardRef(function(a,o){const g=ve({props:a,name:"MuiSwitch"}),{className:v,color:S="primary",edge:x=!1,size:f="medium",sx:c}=g,N=se(g,ge),m=k({},g,{color:S,edge:x,size:f}),h=xe(m),y=t.jsx(fe,{className:h.thumb,ownerState:m});return t.jsxs(ye,{className:ae(h.root,v),sx:c,ownerState:m,children:[t.jsx(je,k({type:"checkbox",icon:y,checkedIcon:y,ref:o,ownerState:m},N,{classes:k({},h,{root:h.switchBase})})),t.jsx(Se,{className:h.track,ownerState:m})]})}),Pe=()=>{const s=ne(),{compid:a}=oe(),[o,g]=n.useState([]),[v,S]=n.useState(""),[x,f]=n.useState(""),[c,N]=n.useState(!0),[m,h]=n.useState(0),[y,W]=n.useState(0),[$,O]=n.useState([]),[D,H]=n.useState(""),[E,L]=n.useState(""),[R,U]=n.useState("image"),[A,G]=n.useState(null),[F,X]=n.useState(0),[M,K]=n.useState([]);function V(e){const r=new DOMParser().parseFromString(e,"text/html"),u=document.createTreeWalker(r.body,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let i="";for(;u.nextNode();){const d=u.currentNode;d.nodeType===Node.TEXT_NODE?i+=d.nodeValue:d.nodeType===Node.ELEMENT_NODE&&(d.tagName==="BR"||d.tagName==="P"||d.tagName==="DIV"||d.tagName==="UL"||d.tagNameg=="LI")&&(i+=`
`)}return i=i.replace(/^\n+|\n+$/g,""),i=i.replace(/\n{2,}/g,`
`),i}const J=async()=>{if(!c){let i=new FormData;i.append("title",v),i.append("companyID",m),i.append("serviceId",y),i.append("timeForService",D),i.append("chargeForService",E),i.append("serviceFile",A),i.append("fileType",R),i.append("isTTSContent",!1),i.append("branchId",F);const d=b+"/KioskServiceDetail/save-service-detail";await ce(d,i),s(-1);return}let e=V(x);const r={HTMLTranscript:x,Transcript:e,title:v,isTTSContent:c,companyID:m,serviceId:y,timeForService:D,chargeForService:E,branchId:F},u=b+"/KioskServiceDetail/save-tts-service-detail";await de(u,r),s(-1)},Q=async()=>{const e=b+"/KioskService/get-all-company-department/"+a,r=await P(e);O(r)};n.useEffect(()=>{Q()},[a]);const q=async()=>{const e=b+"/Company/get-companies/",r=await P(e);g(r),h(a),B(a)},B=async e=>{const r=b+"/Branch/get-all-branches-for-company/"+e;let u=await P(r);K(u)};n.useEffect(()=>{q()},[]);const z={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(le,{title:"Create New Service Detail",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Title"}),t.jsx(w,{id:"outlined-basic",value:v,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var r;return S((r=e==null?void 0:e.target)==null?void 0:r.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Is Text To Speech Content"}),t.jsx(be,{checked:c,onChange:()=>{N(!c)},inputProps:{"aria-label":"controlled"}})]}),c&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx("span",{children:"Transcript"})}),t.jsx(pe,{style:{height:"150px"},value:x,onChange:f}),t.jsx("br",{}),t.jsx("br",{})]}),!c&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Choose File "}),t.jsx(w,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var r;return G((r=e==null?void 0:e.target)==null?void 0:r.files[0])}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(C,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),t.jsxs(T,{labelId:"demo-select-small-label",id:"demo-select-small",value:R,width:"300px",placeholder:"Choose your Content",MenuProps:z,onChange:e=>{var r;return U((r=e==null?void 0:e.target)==null?void 0:r.value)},children:[t.jsx(p,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(p,{value:"image",children:"Image"}),t.jsx(p,{value:"pdf",children:"PDF"}),t.jsx(p,{values:"video",children:"Video"})]})]})})})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Time For Service"}),t.jsx(w,{id:"outlined-basic",value:D,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var r;return H((r=e==null?void 0:e.target)==null?void 0:r.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Charge For Service"}),t.jsx(w,{id:"outlined-basic",value:E,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var r;return L((r=e==null?void 0:e.target)==null?void 0:r.value)}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(C,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),t.jsxs(T,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(m),width:"300px",placeholder:"Choose your Company",MenuProps:z,onChange:e=>{var r,u;h(Number((r=e==null?void 0:e.target)==null?void 0:r.value)),B((u=e==null?void 0:e.target)==null?void 0:u.value)},children:[t.jsx(p,{value:"",children:t.jsx("em",{children:"None"})}),o==null?void 0:o.map(e=>t.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(C,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Service Branch"}),t.jsxs(T,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(F),width:"300px",placeholder:"Choose your Company",MenuProps:z,onChange:e=>{var r;return X((r=e==null?void 0:e.target)==null?void 0:r.value)},children:[t.jsx(p,{value:"",children:t.jsx("em",{children:"None"})}),M==null?void 0:M.map(e=>t.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(C,{sx:{m:1,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Service Department"}),t.jsxs(T,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(y),width:"300px",onChange:e=>{var r;W((r=e==null?void 0:e.target)==null?void 0:r.value)},children:[t.jsx(p,{value:"",children:t.jsx("em",{children:"None"})}),$==null?void 0:$.map(e=>t.jsx(p,{value:e==null?void 0:e.id,children:e==null?void 0:e.departmentName},e==null?void 0:e.id))]})]})})}),t.jsx("br",{}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(ue,{variant:"contained",onClick:()=>J(),children:"Save Changes"})})]})};export{Pe as default};
