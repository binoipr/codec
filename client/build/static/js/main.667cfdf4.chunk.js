(this.webpackJsonpcode_c=this.webpackJsonpcode_c||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(22),a=n.n(s),r=n(5),i=n(12),l=n(4),o=n(13),j=n.n(o),d=n(16),u=n(23),h=n(3),b=n(6),O=n(14),p=n.n(O),x="GET_COUNTRIES",f="ITEMS_LOADING",m="GET_COUNTRY",g="AUTH_ERROR",_="LOGIN_SUCCESS",v="LOGIN_FAIL",y="LOGOUT_SUCCESS",N="SIGNUP_SUCCESS",w="SIGNUP_FAIL",S="GET_ERRORS",C="CLEAR_ERRORS",L="ROLLING_PRICE",I="BALANCE",A="USER_LOADING",R="USER_LOADED",E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:S,payload:{msg:e,status:t,id:n}}},k=function(e){var t=e.name,n=e.email,c=e.password;return function(e){var s=JSON.stringify({name:t,email:n,password:c});p.a.post("http://localhost:5000/auth/signup",s,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:N,payload:t.data})})).catch((function(t){e(E(t.response.data,t.response.status,"SIGNUP_FAIL")),e({type:w})}))}},F=function(e){var t=e.email,n=e.password;return function(e){var c=JSON.stringify({email:t,password:n});p.a.post("http://localhost:5000/auth/login",c,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:_,payload:t.data})})).catch((function(t){e(E(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:v})}))}},P=function(e){var t=e().auth.token,n={headers:{"Content-type":"application/json"}};return t&&(n.headers["x-auth-token"]=t),n},T=(n(71),n(0)),U={name:"",email:"",password:"",confirmPassword:""},G=function(){var e=Object(r.b)(),t=Object(c.useState)(U),n=Object(b.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),l=Object(b.a)(i,2),o=l[0],O=l[1],p=Object(c.useState)(""),x=Object(b.a)(p,2),f=x[0],m=x[1],g=Object(r.c)((function(e){return e.error}));Object(c.useEffect)((function(){"LOGIN_FAIL"===g.id||"SIGNUP_FAIL"===g.id?(m(g.msg.msg),null!==f&&(alert(f),window.location.reload())):m(null)}));var _=function(e){a(Object(h.a)(Object(h.a)({},s),{},Object(u.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(d.a)(j.a.mark((function t(n){var c,a,r,i,l,d;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),o?(c=s.name,a=s.email,r=s.password,i=s.confirmpassword,r===i?(e(k({name:c,email:a,password:r})),y()):alert("Password mismatch!")):(l=s.email,d=s.password,e(F({email:l,password:d})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){a({name:"",email:"",password:"",confirmPassword:""})};return Object(T.jsxs)("div",{className:"auth__form-container",children:[Object(T.jsx)("div",{className:"auth__form-container_fields",children:Object(T.jsxs)("div",{className:"auth__form-container_fields-content",children:[Object(T.jsx)("p",{children:o?"Sign Up":"Sign In"}),Object(T.jsxs)("form",{onSubmit:v,children:[o&&Object(T.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(T.jsx)("label",{htmlFor:"name",children:"Name"}),Object(T.jsx)("input",{type:"text",name:"name",placeholder:"name",onChange:_,required:!0})]}),Object(T.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(T.jsx)("label",{htmlFor:"email",children:"email"}),Object(T.jsx)("input",{type:"email",name:"email",placeholder:"email",onChange:_,required:!0})]}),Object(T.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:_,required:!0})]}),o&&Object(T.jsxs)("div",{className:"auth__form-container_fields-content_input",children:[Object(T.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(T.jsx)("input",{type:"password",name:"confirmpassword",placeholder:"Confirm Password",onChange:_,required:!0})]}),Object(T.jsx)("div",{className:"auth__form-container_fields-content_button",children:Object(T.jsx)("button",{children:o?"Sign Up":"Sign In"})})]}),Object(T.jsx)("div",{className:"auth__form-container_fields-account",children:Object(T.jsxs)("p",{children:[o?"Already have an account: ":"Don't have an account: ",Object(T.jsx)("span",{onClick:function(){O((function(e){return!e}))},children:o?"Sign In":"Sign Up"})]})})]})}),Object(T.jsx)("div",{className:"auth__form-container_image",children:Object(T.jsx)("img",{src:"/Images/bg.png",alt:""})})]})},D=(n(36),function(){return Object(T.jsxs)("div",{className:"home-body",children:[Object(T.jsx)(i.b,{to:"/slotmachine",className:"home-button",children:"Slot Machine"}),Object(T.jsx)(i.b,{to:"/countries",className:"home-button",children:"Country List"}),Object(T.jsx)(i.b,{to:"/country/search",className:"home-button",children:"Search Country"})]})}),M=function(e){return{type:I,payload:e}};function q(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(j.a.mark((function e(t,n,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:t,url:"http://localhost:5000"+n,headers:{"Content-type":"application/json"},params:c}).then((function(e){return e.data})).catch((function(e){console.error(e)}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(77);var B=[{fruits:["\ud83c\udf52","\ud83c\udf4b","\ud83c\udf4e","\ud83c\udf4b","\ud83c\udf4c","\ud83c\udf4c","\ud83c\udf4b","\ud83c\udf4b"]},{fruits:["\ud83c\udf4b","\ud83c\udf4e","\ud83c\udf4b","\ud83c\udf4b","\ud83c\udf52","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf4b"]},{fruits:["\ud83c\udf4b","\ud83c\udf4e","\ud83c\udf4b","\ud83c\udf4e","\ud83c\udf52","\ud83c\udf4b","\ud83c\udf4c","\ud83c\udf4b"]}],W=function(){var e=Object(c.useState)("\ud83c\udf52"),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("\ud83c\udf4b"),i=Object(b.a)(a,2),l=i[0],o=i[1],u=Object(c.useState)("\ud83c\udf4b"),h=Object(b.a)(u,2),O=h[0],p=h[1],x=Object(c.useState)(!1),f=Object(b.a)(x,2),m=f[0],g=f[1],_=Object(c.useState)(0),v=Object(b.a)(_,2),y=v[0],N=v[1],w=Object(r.c)((function(e){return e.slotMachine.coins})),S=[Object(c.createRef)(),Object(c.createRef)(),Object(c.createRef)()],C=Object(r.b)();Object(c.useEffect)((function(){Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=6;break}return e.next=3,q("POST","/slotmachine/result",{coins:w,fruit1:n,fruit2:l,fruit3:O});case 3:t=e.sent,C(M(t.awardCoin)),N(w);case 6:case"end":return e.stop()}}),e)})))()}),[m]);var I=function(e){var t,n=e.children,c=Math.floor(Math.random()*B[e.id].fruits.length),s=n[c];return t=2-s.offsetTop,e.style.top="".concat(t,"px"),B[e.id].fruits[c]};return Object(T.jsxs)("div",{className:"slot__app",children:[Object(T.jsxs)("div",{className:"slot__app-containers",children:[Object(T.jsx)("section",{className:"slot__app-section",children:Object(T.jsx)("div",{className:"slot__app-single-container",id:"0",ref:S[0],children:B[0].fruits.map((function(e,t){return Object(T.jsx)("div",{children:Object(T.jsx)("span",{id:"slot__app-span",children:e})},t)}))})}),Object(T.jsx)("section",{className:"slot__app-section",children:Object(T.jsx)("div",{className:"slot__app-single-container",id:"1",ref:S[1],children:B[1].fruits.map((function(e){return Object(T.jsx)("div",{children:Object(T.jsx)("span",{id:"slot__app-span",children:e})})}))})}),Object(T.jsx)("section",{className:"slot__app-section",children:Object(T.jsx)("div",{className:"slot__app-single-container",id:"2",ref:S[2],children:B[2].fruits.map((function(e){return Object(T.jsx)("div",{children:Object(T.jsx)("span",{id:"slot__app-span",children:e})})}))})})]}),Object(T.jsx)("div",{className:m?"roll":"roll rolling",onClick:!m&&function(){g(!0),C({type:L}),setTimeout((function(){g(!1)}),700),S.forEach((function(e,t){var n=I(e.current);t+1===1?s(n):t+1===2?o(n):p(n)}))},disabled:m,children:m?"Rolling...":"ROLL"}),Object(T.jsxs)("p",{class:"slot__app-info",children:["Your score is :"," ",Object(T.jsx)("span",{className:"slot__app-result-span",children:y>0?y:0})," "]}),Object(T.jsx)("div",{className:"slot__app-info",children:Object(T.jsxs)("table",{children:[Object(T.jsxs)("tr",{children:["\ud83c\udf52 \ud83c\udf52 \ud83c\udf52 = ",Object(T.jsx)("strong",{children:"50"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf4e \ud83c\udf4e \ud83c\udf4e = ",Object(T.jsx)("strong",{children:"20"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf4c \ud83c\udf4c \ud83c\udf4c = ",Object(T.jsx)("strong",{children:"15"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf4b \ud83c\udf4b \ud83c\udf4b = ",Object(T.jsx)("strong",{children:"3"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf52 \ud83c\udf52 = ",Object(T.jsx)("strong",{children:"40"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf4e \ud83c\udf4e = ",Object(T.jsx)("strong",{children:"10"})," coins"]}),Object(T.jsxs)("tr",{children:["\ud83c\udf4c \ud83c\udf4c = ",Object(T.jsx)("strong",{children:"5"})," coins"]})]})})]})},Y=function(){var e=Object(r.c)((function(e){return e.auth.isAuthenticated})),t=Object(r.c)((function(e){return e.auth.user}));return e?Object(T.jsx)("div",{children:Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("header",{className:"header",children:[Object(T.jsx)("div",{children:Object(T.jsx)(i.b,{to:"/home",className:"home-link",children:Object(T.jsx)("i",{className:"fa fa-home"})})}),Object(T.jsxs)("span",{style:{fontSize:"20px",fontWeight:700,color:"yellow"},children:[t?"Welcome : "+"".concat(t.name):""," "]}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{to:"/",className:"home-link",onClick:function(){localStorage.removeItem("token"),window.location.reload()},children:Object(T.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})})})]})})}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(G,{})})},z=(n(37),function(e){var t=e.search,n=e.setSearch,c=e.setFiltered,s=e.countries;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("form",{className:"filter__form",id:"filter__form",onSubmit:function(e){e.preventDefault()},children:Object(T.jsx)("input",{type:"search",name:"search",id:"search",autoComplete:"off",placeholder:"Search Country",onChange:function(e){return function(e){if(n(e),t){var a=s.filter((function(e){return Object.values(e).join("").toLowerCase().includes(t.toLowerCase())}));c(a)}else c(s)}(e.target.value)}})})})}),H=function(){return function(e){e(K()),p.a.get("https://restcountries.com/v2/all").then((function(t){return e({type:x,payload:t.data})})).catch((function(e){return console.log(e)}))}},K=function(){return{type:f}},Q=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),l=Object(b.a)(a,2),o=l[0],j=l[1],d=Object(c.useState)([]),u=Object(b.a)(d,2),h=u[0],O=u[1],p=Object(c.useState)(!0),x=Object(b.a)(p,2),f=x[0],m=x[1],g=Object(r.b)();Object(c.useEffect)((function(){g(H()),s(_),m(!1)}));var _=Object(r.c)((function(e){return e.countries.Countries}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(z,{search:o,setSearch:j,setFiltered:O,countries:n}),f?Object(T.jsx)("h1",{className:"loading",children:"Loading..."}):o.length>1?Object(T.jsx)("section",{className:"countries__list",children:h.map((function(e){var t=e.numericCode,n=e.name,c=e.flag,s=e.population,a=e.region,r=e.capital;return Object(T.jsx)(i.b,{to:"/countries/".concat(n),children:Object(T.jsxs)("article",{children:[Object(T.jsx)("div",{className:"countries__list-flag",children:Object(T.jsx)("img",{src:c,alt:n})}),Object(T.jsxs)("div",{className:"countries__list-details",children:[Object(T.jsxs)("h4",{children:["Name: ",Object(T.jsx)("span",{children:n})]}),Object(T.jsxs)("h4",{children:["Population: ",Object(T.jsx)("span",{children:s.toLocaleString()})]}),Object(T.jsxs)("h4",{children:["Region: ",Object(T.jsx)("span",{children:a})]}),Object(T.jsxs)("h4",{children:["Capital: ",Object(T.jsx)("span",{children:r})]})]})]})},t)}))}):Object(T.jsx)("section",{className:"countries__list",children:n.map((function(e){var t=e.numericCode,n=e.name,c=e.flag,s=e.population,a=e.region,r=e.capital;return Object(T.jsx)(i.b,{to:"/countries/".concat(n),children:Object(T.jsxs)("article",{children:[Object(T.jsx)("div",{className:"countries__list-flag",children:Object(T.jsx)("img",{src:c,alt:n})}),Object(T.jsxs)("div",{className:"countries__list-details",children:[Object(T.jsxs)("h4",{children:["Name: ",Object(T.jsx)("span",{children:n})]}),Object(T.jsxs)("h4",{children:["Population: ",Object(T.jsx)("span",{children:s})]}),Object(T.jsxs)("h4",{children:["Region: ",Object(T.jsx)("span",{children:a})]}),Object(T.jsxs)("h4",{children:["Capital: ",Object(T.jsx)("span",{children:r})]})]})]})},t)}))})]})},V=(n(38),function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(b.a)(a,2),l=i[0],o=i[1],j=Object(c.useState)(!1),d=Object(b.a)(j,2),u=d[0],h=d[1],O=Object(r.b)(),x=Object(r.c)((function(e){return e.country.Country}));Object(c.useEffect)((function(){O(H())}),[]);return l?Object(T.jsx)(Z,{list:n}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"country__search",children:[Object(T.jsx)("input",{type:"search",className:"country__search-input",onChange:function(e){s(e.target.value)},placeholder:"please enter country name "}),n?Object(T.jsx)("button",{onClick:function(e){if(e.preventDefault(),n.includes(",")){var t=n.replace(/\s+/g,"").split(",");s(t),o((function(e){return!e}))}else O((c=n,function(e){e(K()),p.a.get("https://restcountries.com/v2/name/".concat(c,"?fullText=true"),{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then((function(t){return e({type:m,payload:t.data}),console.log(t.data)})).catch((function(e){return alert("Please enter the correct name!")}),window.location.reload())})),h((function(e){return!e}));var c},className:"country__search-button",children:Object(T.jsx)("i",{className:"fa fa-search"})}):""]}),u&n.length>3?Object(T.jsx)("section",{className:"country__list",children:x.map((function(e){var t=e.numericCode,n=e.flag,c=e.name,s=e.nativeName,a=e.population,r=e.region,i=e.subregion,l=e.capital,o=e.topLevelDomain,j=e.currencies,d=e.languages,u=e.borders;return Object(T.jsxs)("article",{children:[Object(T.jsxs)("div",{className:"country__list-inner",children:[Object(T.jsx)("div",{className:"country__list-flag",children:Object(T.jsx)("img",{src:n,alt:c})}),Object(T.jsxs)("div",{className:"country__list-details",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:c}),Object(T.jsxs)("h5",{children:["Native Name: ",Object(T.jsx)("span",{children:s})]}),Object(T.jsxs)("h5",{children:["Population: ",Object(T.jsx)("span",{children:a})]}),Object(T.jsxs)("h5",{children:["Region: ",Object(T.jsx)("span",{children:r})]}),Object(T.jsxs)("h5",{children:["Sub Region: ",Object(T.jsx)("span",{children:i})]}),Object(T.jsxs)("h5",{children:["Capital: ",Object(T.jsx)("span",{children:l})," "]})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("h5",{children:["Top Level Domain: ",Object(T.jsx)("span",{children:o})]}),Object(T.jsxs)("h5",{children:["Currencies:",Object(T.jsx)("span",{children:j[0].name})]}),Object(T.jsxs)("h5",{children:["Languages: ",Object(T.jsx)("span",{children:d[0].name})]})]})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Border Countries: "}),Object(T.jsx)("div",{className:"country__list-borders",children:u?u.map((function(e){return Object(T.jsx)("ul",{children:Object(T.jsx)("li",{children:e})},e)})):""})]})]},t)}))}):""]})}),X=n(42),Z=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),s=n[0],a=n[1],i=e.list.map((function(e){return e.toLowerCase()})),l=Object(r.c)((function(e){return e.countries.Countries}));return Object(c.useEffect)((function(){l.map((function(e){i.includes(e.name.replace(/\s+/g,"").toLowerCase())&&a((function(t){return[].concat(Object(X.a)(t),[e])}))}))}),[]),Object(T.jsx)("div",{children:Object(T.jsxs)("section",{className:"countries-list",children:[Object(T.jsx)("table",{className:"list-table-heading",children:Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{style:{width:"40px"},children:"#"}),Object(T.jsx)("th",{style:{width:"100px"},children:"Flag"}),Object(T.jsx)("th",{style:{width:"150px"},children:"Name"}),Object(T.jsx)("th",{style:{width:"150px"},children:"Population"}),Object(T.jsx)("th",{style:{width:"150px"},children:"Capital"}),Object(T.jsx)("th",{style:{width:"150px"},children:"Region"}),Object(T.jsx)("th",{style:{width:"100px"},children:"Calling Code"})]})})}),s.map((function(e,t){var n=e.name,c=e.population,s=e.region,a=e.capital,r=e.flag,i=e.callingCodes;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("table",{className:"list-table-body",children:Object(T.jsx)("tbody",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{style:{width:"40px",textAlign:"center"},children:t+1}),Object(T.jsx)("td",{style:{width:"100px",textAlign:"center"},children:Object(T.jsx)("img",{src:r,alt:n,className:"list-flag"})}),Object(T.jsx)("td",{style:{width:"150px",textAlign:"center"},children:n}),Object(T.jsx)("td",{style:{width:"150px",textAlign:"center"},children:c}),Object(T.jsx)("td",{style:{width:"150px",textAlign:"center"},children:a}),Object(T.jsx)("td",{style:{width:"150px",textAlign:"center"},children:s}),Object(T.jsx)("td",{style:{width:"100px",textAlign:"center"},children:i})]})})})})}))]})})},$=n(17),ee=n(41),te={Countries:[],loading:!1},ne={Country:[],loading:!1},ce={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:null,user:null},se={msg:{},status:null,id:null},ae={loading:!1,coins:20,balance:0,error:"",status:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(h.a)(Object(h.a)({},e),{},{loading:!0,status:!1,coins:e.coins-1});case I:return Object(h.a)(Object(h.a)({},e),{},{loading:!0,status:t.payload>0,coins:e.coins+t.payload});default:return e}},ie=Object($.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(h.a)(Object(h.a)({},e),{},{isLoading:!0});case R:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case _:case N:return localStorage.setItem("token",t.payload.token),window.location.reload(),Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case g:case v:case y:case w:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case C:return{msg:{},status:null,id:null};default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(h.a)(Object(h.a)({},e),{},{Countries:t.payload,loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});default:return e}},country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)(Object(h.a)({},e),{},{Country:t.payload,loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});default:return e}},slotMachine:re}),le=[ee.a],oe=Object($.d)(ie,{},Object($.c)($.a.apply(void 0,le))),je=localStorage.getItem("token");var de=function(){return Object(c.useEffect)((function(){oe.dispatch((function(e,t){e({type:A}),p.a.get("http://localhost:5000/auth/user",P(t)).then((function(t){return e({type:R,payload:t.data})})).catch((function(t){e(E(t.response.data,t.response.status)),e({type:g})}))}))}),[]),je?Object(T.jsx)(r.a,{store:oe,children:Object(T.jsxs)(i.a,{children:[Object(T.jsx)(Y,{}),Object(T.jsx)(l.a,{from:"/",to:"/home"}),Object(T.jsx)(l.b,{path:"/home",children:Object(T.jsx)(D,{})}),Object(T.jsx)(l.b,{path:"/slotmachine",children:Object(T.jsx)(W,{})}),Object(T.jsx)(l.b,{path:"/countries",children:Object(T.jsx)(Q,{})}),Object(T.jsx)(l.b,{path:"/country/search",children:Object(T.jsx)(V,{})})]})}):Object(T.jsx)(r.a,{store:oe,children:Object(T.jsx)(G,{})})};a.a.render(Object(T.jsx)(de,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.667cfdf4.chunk.js.map