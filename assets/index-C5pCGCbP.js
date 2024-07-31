import{x as Z,y as ee,z as I,h as y,W as O,a2 as te,a3 as se,r,H as ae,_ as k,j as t,I as ie,a4 as re,J as ne,d as oe,a1 as le,M as de,U as T}from"./index-BGoJ6V2n.js";import{b as H,a as E}from"./apiClient-BdZFA0eS.js";import{b as C}from"./Constants-BSkrcWBr.js";import{R as ce}from"./index-CTg4aVPW.js";import{T as b}from"./TextField-DmZzRM4l.js";import{S as pe}from"./SwitchBase-CGyzPt46.js";import{S as w}from"./Select-9NQuWRVp.js";import{M as l}from"./MenuItem-DGDIYitf.js";import{B as ue}from"./Button-CXsKykIg.js";import"./InputLabel-aAXcJRu9.js";function me(s){return ee("MuiSwitch",s)}const o=Z("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),he=["className","color","edge","size","sx"],ge=re(),ve=s=>{const{classes:i,edge:n,size:g,color:x,checked:j,disabled:v}=s,f={root:["root",n&&`edge${y(n)}`,`size${y(g)}`],switchBase:["switchBase",`color${y(x)}`,j&&"checked",v&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=ne(f,me,i);return k({},i,d)},xe=I("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(s,i)=>{const{ownerState:n}=s;return[i.root,n.edge&&i[`edge${y(n.edge)}`],i[`size${y(n.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),ye=I(pe,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(s,i)=>{const{ownerState:n}=s;return[i.switchBase,{[`& .${o.input}`]:i.input},n.color!=="default"&&i[`color${y(n.color)}`]]}})(({theme:s})=>({position:"absolute",top:0,left:0,zIndex:1,color:s.vars?s.vars.palette.Switch.defaultColor:`${s.palette.mode==="light"?s.palette.common.white:s.palette.grey[300]}`,transition:s.transitions.create(["left","transform"],{duration:s.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:s.vars?s.vars.palette.Switch.defaultDisabledColor:`${s.palette.mode==="light"?s.palette.grey[100]:s.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:s.vars?s.vars.opacity.switchTrackDisabled:`${s.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:s})=>({"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:O(s.palette.action.active,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(s.palette).filter(([,i])=>i.main&&i.light).map(([i])=>({props:{color:i},style:{[`&.${o.checked}`]:{color:(s.vars||s).palette[i].main,"&:hover":{backgroundColor:s.vars?`rgba(${s.vars.palette[i].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:O(s.palette[i].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:s.vars?s.vars.palette.Switch[`${i}DisabledColor`]:`${s.palette.mode==="light"?te(s.palette[i].main,.62):se(s.palette[i].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(s.vars||s).palette[i].main}}}))]})),je=I("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(s,i)=>i.track})(({theme:s})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:s.transitions.create(["opacity","background-color"],{duration:s.transitions.duration.shortest}),backgroundColor:s.vars?s.vars.palette.common.onBackground:`${s.palette.mode==="light"?s.palette.common.black:s.palette.common.white}`,opacity:s.vars?s.vars.opacity.switchTrack:`${s.palette.mode==="light"?.38:.3}`})),fe=I("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(s,i)=>i.thumb})(({theme:s})=>({boxShadow:(s.vars||s).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Se=r.forwardRef(function(i,n){const g=ge({props:i,name:"MuiSwitch"}),{className:x,color:j="primary",edge:v=!1,size:f="medium",sx:d}=g,N=ae(g,he),u=k({},g,{color:j,edge:v,size:f}),m=ve(u),S=t.jsx(fe,{className:m.thumb,ownerState:u});return t.jsxs(xe,{className:ie(m.root,x),sx:d,ownerState:u,children:[t.jsx(ye,k({type:"checkbox",icon:S,checkedIcon:S,ref:n,ownerState:u},N,{classes:k({},m,{root:m.switchBase})})),t.jsx(je,{className:m.track,ownerState:u})]})}),Re=()=>{const s=oe(),{compid:i}=le(),[n,g]=r.useState([]),[x,j]=r.useState(""),[v,f]=r.useState(""),[d,N]=r.useState(!0),[u,m]=r.useState(0),[S,L]=r.useState(0),[$,U]=r.useState([]),[M,A]=r.useState(""),[R,G]=r.useState(""),[z,X]=r.useState("image"),[P,B]=r.useState(null),[_,K]=r.useState(0),[F,V]=r.useState([]);function J(e){const a=new DOMParser().parseFromString(e,"text/html"),c=document.createTreeWalker(a.body,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let p="";for(;c.nextNode();){const h=c.currentNode;h.nodeType===Node.TEXT_NODE?p+=h.nodeValue:h.nodeType===Node.ELEMENT_NODE&&(h.tagName==="BR"||h.tagName==="P"||h.tagName==="DIV"||h.tagName==="UL"||h.tagNameg=="LI")&&(p+=`
`)}return p=p.replace(/^\n+|\n+$/g,""),p=p.replace(/\n{2,}/g,`
`),p}const Q=async()=>{let e=new FormData;if(e.append("title",x),e.append("companyID",u),e.append("serviceId",S),e.append("timeForService",M),e.append("chargeForService",R),e.append("serviceFile",P),e.append("fileType",z),e.append("branchId",_),!d){e.append("isTTSContent",!1);const p=C+"/KioskServiceDetail/save-service-detail";await H(p,e),s(-1);return}let a=J(v);e.append("isTTSContent",!0),e.append("transcript",a),e.append("HTMLTranscript",v),e.append("supportingFile",P);const c=C+"/KioskServiceDetail/save-tts-service-detail";await H(c,e),s(-1)},q=async()=>{const e=C+"/KioskService/get-all-company-department/"+i,a=await E(e);U(a)};r.useEffect(()=>{q()},[i]);const Y=async()=>{const e=C+"/Company/get-companies/",a=await E(e);g(a),m(i),W(i)},W=async e=>{const a=C+"/Branch/get-all-branches-for-company/"+e;let c=await E(a);V(c)};r.useEffect(()=>{Y()},[]);const D={PaperProps:{style:{maxHeight:48*4.5+8,width:250}}};return t.jsxs(de,{title:"Create New Service Detail",children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Title"}),t.jsx(b,{id:"outlined-basic",value:x,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var a;return j((a=e==null?void 0:e.target)==null?void 0:a.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Is Text To Speech Content"}),t.jsx(Se,{checked:d,onChange:()=>{N(!d)},inputProps:{"aria-label":"controlled"}})]}),d&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx("span",{children:"Transcript"})}),t.jsx(ce,{style:{height:"150px"},value:v,onChange:f}),t.jsx("br",{}),t.jsx("br",{})]}),d?t.jsx(t.Fragment,{children:t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{style:{marginRight:"1rem"},children:"Chosen Supporting File"}),t.jsx("span",{style:{width:"2rem"},children:"      "}),t.jsx(b,{id:"outlined-basic",inputProps:{accept:".docx,.doc,.pdf"},variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var a;return B((a=e==null?void 0:e.target)==null?void 0:a.files[0])}})]})}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Choose File "}),t.jsx(b,{id:"outlined-basic",variant:"outlined",type:"file",autoComplete:"off",fullWidth:!0,onChange:e=>{var a;return B((a=e==null?void 0:e.target)==null?void 0:a.files[0])}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(T,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Content"}),t.jsxs(w,{labelId:"demo-select-small-label",id:"demo-select-small",value:z,width:"300px",placeholder:"Choose your Content",MenuProps:D,onChange:e=>{var a;return X((a=e==null?void 0:e.target)==null?void 0:a.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),t.jsx(l,{value:"image",children:"Image"}),t.jsx(l,{value:"pdf",children:"PDF"}),t.jsx(l,{values:"video",children:"Video"})]})]})})})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Time For Service"}),t.jsx(b,{id:"outlined-basic",value:M,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var a;return A((a=e==null?void 0:e.target)==null?void 0:a.value)}})]}),t.jsxs("div",{style:{marginTop:"0.9rem"},children:[t.jsx("span",{children:"Charge For Service"}),t.jsx(b,{id:"outlined-basic",value:R,variant:"outlined",autoComplete:"off",fullWidth:!0,onChange:e=>{var a;return G((a=e==null?void 0:e.target)==null?void 0:a.value)}})]}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(T,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Company"}),t.jsxs(w,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(u),width:"300px",placeholder:"Choose your Company",MenuProps:D,onChange:e=>{var a,c;m(Number((a=e==null?void 0:e.target)==null?void 0:a.value)),W((c=e==null?void 0:e.target)==null?void 0:c.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),n==null?void 0:n.map(e=>t.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.name},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(T,{sx:{m:0,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Service Branch"}),t.jsxs(w,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(_),width:"300px",placeholder:"Choose your Company",MenuProps:D,onChange:e=>{var a;return K((a=e==null?void 0:e.target)==null?void 0:a.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),F==null?void 0:F.map(e=>t.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.title},e==null?void 0:e.id))]})]})})}),t.jsx("div",{style:{marginTop:"0rem"},children:t.jsx(T,{sx:{m:1,minWidth:120},size:"small",children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("p",{style:{marginRight:"2rem"},children:"Service Department"}),t.jsxs(w,{labelId:"demo-select-small-label",id:"demo-select-small",value:Number(S),width:"300px",onChange:e=>{var a;L((a=e==null?void 0:e.target)==null?void 0:a.value)},children:[t.jsx(l,{value:"",children:t.jsx("em",{children:"None"})}),$==null?void 0:$.map(e=>t.jsx(l,{value:e==null?void 0:e.id,children:e==null?void 0:e.departmentName},e==null?void 0:e.id))]})]})})}),t.jsx("br",{}),t.jsx("div",{style:{marginTop:"0.9rem"},children:t.jsx(ue,{variant:"contained",onClick:()=>Q(),children:"Save Changes"})})]})};export{Re as default};
