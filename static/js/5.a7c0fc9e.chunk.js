(this.webpackJsonpSKJLogin=this.webpackJsonpSKJLogin||[]).push([[5],{35:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(36);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},36:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(35);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){c=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(e,t,n){"use strict";n.r(t);var r=n(41),c=n(0),a=n(1),o=n(40),s=n(34),l=n(2),i=function(){var e=Object(a.g)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],u=n[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),d=b[0],m=b[1],h=function(){console.log("login ",i,d),i&&d?(console.log("login success ",i,d),localStorage.setItem("username",i),localStorage.setItem("password",d),localStorage.setItem("token",i+","+d),localStorage.setItem("time",new Date),e.push("/home")):alert(" Invalid email or passord! ")};return Object(l.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",style:{backgroundColor:"#0046bb"},children:Object(l.jsx)(o.k,{children:Object(l.jsx)(o.t,{className:"justify-content-center",children:Object(l.jsx)(o.i,{md:"6",children:Object(l.jsx)(o.g,{children:Object(l.jsx)(o.e,{className:"p-4",children:Object(l.jsx)(o.f,{children:Object(l.jsxs)(o.m,{onSubmit:h,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(l.jsxs)(o.o,{className:"mb-3",children:[Object(l.jsx)(o.q,{children:Object(l.jsx)(o.r,{children:Object(l.jsx)(s.a,{name:"cil-user"})})}),Object(l.jsx)(o.n,{type:"text",placeholder:"Username",autoComplete:"username",name:"username",onChange:function(e){return u(e.target.value)},values:i})]}),Object(l.jsxs)(o.o,{className:"mb-4",children:[Object(l.jsx)(o.q,{children:Object(l.jsx)(o.r,{children:Object(l.jsx)(s.a,{name:"cil-lock-locked"})})}),Object(l.jsx)(o.n,{type:"password",placeholder:"Password",autoComplete:"current-password",name:"password",onChange:function(e){return m(e.target.value)},value:d})]}),Object(l.jsx)(o.t,{children:Object(l.jsx)(o.i,{xs:"6",children:Object(l.jsx)(o.d,{color:"primary",className:"px-4",onClick:function(){return h()},children:"login"})})})]})})})})})})})})};t.default=i}}]);
//# sourceMappingURL=5.a7c0fc9e.chunk.js.map