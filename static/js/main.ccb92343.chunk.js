(this["webpackJsonpps-pwa"]=this["webpackJsonpps-pwa"]||[]).push([[0],{14:function(e,t){e.exports={primaryColor:"#03A64A",primaryHoverColor:"#038C4C"}},82:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n.n(a),i=n(10),c=n.n(i),s=(n(82),n(19)),l=n(18),j=n(121),d=n(126),u=n(124),b=n(14),m=Object(j.a)({btn:{backgroundColor:b.primaryColor,border:"2px solid ".concat(b.primaryColor),fontSize:"1rem",fontWeight:"bold",marginTop:"2rem",padding:"1rem 2rem",width:"100%","&:hover":{backgroundColor:b.primaryHoverColor}}});function p(e){var t=e.text,n=e.fn,a=m();return Object(r.jsx)(u.a,{className:a.btn,onClick:n,children:t})}var h=Object(j.a)({btn:{backgroundColor:"#FFF",border:"2px solid ".concat(b.primaryColor),fontSize:"1rem",fontWeight:"bold",marginTop:"2rem",padding:"1rem 2rem",width:"100%","&:hover":{borderColor:b.primaryHoverColor,backgroundColor:b.primaryHoverColor}}});function x(e){var t=e.text,n=e.fn,a=h();return Object(r.jsx)(u.a,{className:a.btn,onClick:n,children:t})}var g=Object(j.a)((function(e){return{title:{color:b.primaryColor,fontSize:"1.75rem",fontWeight:"bold",padding:"10px 0",textTransform:"uppercase"}}}));function O(e){var t=e.fontSize,n=g();return Object(r.jsx)(d.a,{variant:"body1",component:"h1",className:n.title,style:{fontSize:t},children:"Popsicle Sticks"})}var f=Object(j.a)((function(e){return{container:Object(s.a)({margin:"10% auto",maxWidth:"85%",maxHeight:"100vh",textAlign:"center"},e.breakpoints.up("sm"),{maxWidth:"50%"}),links:{textDecoration:"none"},title:{color:"#038C4C",fontSize:"2rem",padding:"10px 0",textTransform:"uppercase"},versionTitle:{marginTop:"10%"}}}));function v(){var e=f();return Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(O,{}),Object(r.jsx)(l.b,{to:"/signup",className:e.links,children:Object(r.jsx)(p,{text:"Sign up"})}),Object(r.jsx)(l.b,{to:"/login",className:e.links,children:Object(r.jsx)(x,{text:"Login"})}),Object(r.jsx)(d.a,{variant:"body2",component:"h2",className:e.versionTitle,children:"Version 2.0"})]})}var w=n(127),k=n(128),C=n(129),y=n(130),S=n(69),N=n.n(S),W=n(68),A=n.n(W),F=Object(j.a)((function(e){return{appBar:{top:"auto",bottom:0,backgroundColor:b.primaryColor},toolbar:{display:"flex",justifyContent:"space-evenly"}}}));function H(){var e=F();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w.a,{}),Object(r.jsx)(k.a,{position:"fixed",color:"primary",className:e.appBar,children:Object(r.jsxs)(C.a,{className:e.toolbar,children:[Object(r.jsx)(y.a,{color:"inherit",children:Object(r.jsx)(A.a,{})}),Object(r.jsx)(y.a,{color:"inherit",children:Object(r.jsx)(N.a,{})})]})})]})}var D=n(30),P=n(17),z=n(133),T=n(134),B=n(71),E=n(137),L=n(70),M=n.n(L),I=n(4),R=n(131),U=n(132),J=Object(j.a)((function(e){return{item:{display:"flex",justifyContent:"center",alignItems:"center"},image:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"80%",textAlign:"center",padding:"1rem",width:"80%"},mobileLink:{color:"#333",fontSize:"1.75rem",lineHeight:"1.43",letterSpacing:"0.01071em",width:"50vw"}}}));function q(e){e.signOut;var t=J(),n=Object(a.useState)(!1),o=Object(P.a)(n,2),i=(o[0],o[1]);return Object(r.jsxs)(R.a,{onClick:function(){i(!1)},children:[Object(r.jsx)(U.a,{className:t.item,children:Object(r.jsx)(O,{fontSize:"2rem"})}),Object(r.jsx)(U.a,{className:t.item,children:Object(r.jsx)(x,{text:"Account"})}),Object(r.jsx)(U.a,{children:Object(r.jsx)(p,{text:"Sign out"})})]})}var G=Object(j.a)((function(e){return{appbar:{backgroundColor:"#FFF"},grow:{flexGrow:1},menuButton:{color:b.primaryColor,marginRight:"16px"},hide:{display:"none"},drawer:{width:V,flexShrink:0},drawerPaper:{width:V}}})),V="100%";function $(e){var t=e.children,n=e.window,a=Object(z.a)(n);return Object(r.jsx)(T.a,{appear:!1,direction:"down",in:!a,children:t})}function K(e){var t=e.props,n=(e.signedIn,e.signOut),o=G(),i=Object(a.useState)([]),c=Object(P.a)(i,2),s=c[0],l=(c[1],Object(a.useState)(!1)),j=Object(P.a)(l,2),d=j[0],u=j[1],b=function(){u(!1)},m=Object(a.useState)(null),p=Object(P.a)(m,2),h=p[0],x=(p[1],Object(a.useState)(null)),g=Object(P.a)(x,2),f=g[0],v=(g[1],Boolean(h),Boolean(f)),w=Object(r.jsx)(B.a,{anchorEl:f,anchorOrigin:{vertical:"top",horizontal:"right"},id:"menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClick:b,"aria-label":"open drawer",children:Object(r.jsx)(E.a,{className:o.drawer,anchor:"right",open:d,classes:{paper:o.drawerPaper},onClose:b,children:Object(r.jsx)(q,{profilePic:s,signOut:n})})});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)($,Object(D.a)(Object(D.a)({},t),{},{children:Object(r.jsxs)("div",{className:o.grow,children:[Object(r.jsx)(k.a,{className:o.appbar,children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{className:o.grow}),Object(r.jsx)(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"end",className:Object(I.a)(o.menuButton,d&&o.hide),children:Object(r.jsx)(M.a,{})})]})}),w]})})),Object(r.jsx)(C.a,{})]})}function Q(){return console.log("Home"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(K,{}),Object(r.jsx)("div",{children:"Home"}),Object(r.jsx)(H,{})]})}var X=n(11),Y=n(5),Z=n(135),_=Object(j.a)((function(e){return{container:{marginTop:"2rem"},errorMsg:{color:"#A61003",textAlign:"right"},title:{textAlign:"left"}}})),ee=Object(Y.a)({root:{"& .MuiOutlinedInput-input":{fontSize:"1.15rem",padding:"1rem"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:b.primaryColor},"&:hover fieldset":{borderColor:b.primaryHoverColor,borderWidth:"3px"},"&.Mui-focused fieldset":{borderColor:b.primaryHoverColor}}}})(Z.a);function te(e){var t=e.type,n=e.text,a=e.name,o=e.value,i=e.fn,c=_();return Object(r.jsxs)("div",{className:c.container,children:[Object(r.jsx)(d.a,{variant:"body1",component:"h2",className:c.title,children:n}),Object(r.jsx)(ee,{type:t,name:a,value:o,onChange:i,fullWidth:!0,required:!0,focused:!0,inputProps:{"aria-label":"".concat(n)},variant:"outlined"}),Object(r.jsx)(d.a,{variant:"body1",component:"h2",className:c.errorMsg,children:"Error here"})]})}var ne=Object(j.a)((function(e){return{container:Object(s.a)({margin:"10% auto",maxWidth:"85%",maxHeight:"100vh",textAlign:"center"},e.breakpoints.up("sm"),{maxWidth:"50%"}),links:{textDecoration:"none"},linkContainer:{margin:"2rem"},linkStyle:{margin:"2rem",color:"#000"}}}));function re(){var e=Object(X.f)(),t=ne(),n=Object(a.useState)({email:"",password:""}),o=Object(P.a)(n,2),i=o[0],c=o[1],j=function(e){e.preventDefault(),c(Object(D.a)(Object(D.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))};return console.log(i),Object(r.jsxs)("form",{className:t.container,children:[Object(r.jsx)(O,{}),Object(r.jsx)(te,{type:"email",text:"Email Address",name:"email",value:i.email,fn:j}),Object(r.jsx)(te,{type:"password",text:"Password",name:"password",value:i.password,fn:j}),Object(r.jsx)(p,{text:"Login",fn:function(t){t.preventDefault(),console.log("login clicked"),e.push("/")}}),Object(r.jsxs)("div",{className:t.linkContainer,children:[Object(r.jsx)(l.b,{to:"/resetpassword",className:t.links,children:Object(r.jsx)(d.a,{className:t.linkStyle,children:"Forgot password?"})}),Object(r.jsx)(l.b,{to:"/signup",className:t.links,children:Object(r.jsxs)(d.a,{className:t.linkStyle,children:[Object(r.jsx)("div",{style:{display:"block"},children:"Don't have an account?"}),"Sign up"]})})]})]})}var ae=Object(j.a)((function(e){return{container:Object(s.a)({margin:"10% auto",maxWidth:"85%",maxHeight:"100vh",textAlign:"center"},e.breakpoints.up("sm"),{maxWidth:"50%"}),divider:{backgroundColor:"#038C4C",margin:"2rem 0",height:"2px",width:"100%"},links:{textDecoration:"none"},linkStyle:{margin:"2rem",color:"#000"}}}));function oe(){var e=Object(X.f)(),t=ae(),n=Object(a.useState)({}),o=Object(P.a)(n,2),i=o[0],c=o[1],j=function(e){e.preventDefault(),c(Object(D.a)(Object(D.a)({},i),{},Object(s.a)({},e.target.name,e.target.value)))};return console.log(i),Object(r.jsxs)("div",{className:t.container,children:[Object(r.jsx)(O,{}),Object(r.jsx)(te,{type:"email",text:"Email Address",name:"email",value:i.email,fn:j}),Object(r.jsx)(te,{type:"password",text:"Password",name:"password",value:i.password,fn:j}),Object(r.jsx)(p,{text:"Sign up",fn:function(t){t.preventDefault(),console.log("signup clicked"),e.push("/signupconfirmation")}}),Object(r.jsx)(l.b,{to:"/login",className:t.links,children:Object(r.jsx)(d.a,{className:t.linkStyle,children:"Already have an account? Log in"})})]})}var ie=Object(j.a)((function(e){return{container:Object(s.a)({margin:"10% auto",maxWidth:"85%",maxHeight:"100vh",textAlign:"center"},e.breakpoints.up("sm"),{maxWidth:"50%"}),divider:{backgroundColor:"#038C4C",margin:"2rem 0",height:"2px",width:"100%"},links:{margin:"2rem"}}}));function ce(){var e=Object(X.f)(),t=ie(),n=Object(a.useState)(""),o=Object(P.a)(n,2),i=o[0],c=o[1];return console.log(i),Object(r.jsxs)("div",{className:t.container,children:[Object(r.jsx)(O,{}),Object(r.jsx)(te,{type:"email",text:"Email Address",name:"email",value:i,fn:function(e){e.preventDefault(),c(e.target.value)}}),Object(r.jsx)(p,{text:"Send Reset Code",fn:function(t){t.preventDefault(),console.log("login clicked"),e.push("/login")}})]})}var se=Object(j.a)((function(e){return{container:Object(s.a)({margin:"10% auto",maxWidth:"85%",maxHeight:"100vh",textAlign:"center"},e.breakpoints.up("sm"),{maxWidth:"50%"}),divider:{backgroundColor:"#038C4C",margin:"2rem 0",height:"2px",width:"100%"},links:{margin:"2rem"}}}));function le(){var e=Object(X.f)(),t=se(),n=Object(a.useState)(""),o=Object(P.a)(n,2),i=o[0],c=o[1];return console.log(i),Object(r.jsxs)("div",{className:t.container,children:[Object(r.jsx)(O,{}),Object(r.jsx)(d.a,{className:t.links,variant:"body1",component:"h2",color:"inherit",children:"We emailed you a confirmation code. Please enter it below."}),Object(r.jsx)(te,{type:"text",text:"Confirmation Code",name:"Confirmation Code",value:i,fn:function(e){e.preventDefault(),c(e.target.value)}}),Object(r.jsx)(p,{text:"Confirm",fn:function(t){t.preventDefault(),console.log("signupconfirmation clicked"),e.push("/")}})]})}function je(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(X.c,{children:[Object(r.jsx)(X.a,{exact:!0,path:"/",component:Q}),Object(r.jsx)(X.a,{exact:!0,path:"/login",component:re}),Object(r.jsx)(X.a,{exact:!0,path:"/signup",component:oe}),Object(r.jsx)(X.a,{exact:!0,path:"/ps-pwa",component:v}),Object(r.jsx)(X.a,{exact:!0,path:"/resetpassword",component:ce}),Object(r.jsx)(X.a,{exact:!0,path:"/signupconfirmation",component:le})]})})}function de(){return Object(r.jsx)("main",{children:Object(r.jsx)(je,{})})}var ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(de,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ps-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ps-pwa","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(t,e)}))}}(),me()}},[[89,1,2]]]);
//# sourceMappingURL=main.ccb92343.chunk.js.map