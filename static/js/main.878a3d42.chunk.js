(this.webpackJsonpairbnb=this.webpackJsonpairbnb||[]).push([[0],{105:function(A,e){},114:function(A,e,t){},118:function(A,e,t){},119:function(A,e,t){},166:function(A,e,t){},167:function(A,e,t){},168:function(A,e,t){},169:function(A,e,t){},170:function(A,e,t){},172:function(A,e,t){"use strict";t.r(e);var c=t(0),s=t.n(c),a=t(28),n=t.n(a),i=(t(114),t(106)),r=t(76),o=t(54),j={cardId:null},l=(t(97),t(118),t(59)),d=t(18),b=t(22),x=(t(119),t(95)),h=t.n(x),g=t(180),O=(t(120),t(185)),C=(t(98),t(2));function m(A){return Object(C.jsxs)(O.a,Object(o.a)(Object(o.a)({},A),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(C.jsx)(O.a.Header,{children:Object(C.jsxs)(O.a.Title,{id:"contained-modal-title-vcenter",children:["Modal heading",Object(C.jsx)("button",{onClick:A.onHide,type:"button",class:"btn-close","aria-label":"Close"})]})}),Object(C.jsxs)(O.a.Body,{children:[Object(C.jsx)("h4",{children:"Book your trip"}),Object(C.jsxs)("p",{children:["$",A.price," * ",A.rentalDays," days = $",A.price*A.rentalDays]})]}),Object(C.jsx)(O.a.Footer,{children:Object(C.jsx)(g.a,{onClick:A.onHide,children:"Book"})})]}))}var p=function(){var A=Object(c.useState)([]),e=Object(b.a)(A,2),t=e[0],s=e[1],a=Object(c.useState)(null),n=Object(b.a)(a,2),i=n[0],r=n[1],o=Object(c.useState)(null),j=Object(b.a)(o,2),l=j[0],x=j[1],O=Object(c.useState)(!1),p=Object(b.a)(O,2),u=p[0],B=p[1],E=Date.parse(i),y=864e5,w=(Date.parse(l)-E+y)/y;Object(c.useEffect)((function(){fetch("/fakeHost/data.json").then((function(A){return A.json()})).then((function(A){var e=A.data;s(e)}))}),[]);var D=Object(d.f)().id;return t.filter((function(A){return A.id==D})).map((function(A){return Object(C.jsx)("div",{className:"title",children:Object(C.jsxs)("div",{className:"adpage",children:[Object(C.jsxs)("div",{className:"cardbox",children:[Object(C.jsx)("div",{className:"img-div-card",children:Object(C.jsx)("img",{src:A.image,alt:"photo"})}),Object(C.jsxs)("div",{className:"span-div",children:[Object(C.jsx)("span",{children:A.city})," | | ",Object(C.jsx)("span",{children:A.adress})]}),Object(C.jsx)("p",{className:"p-p-p",children:A.title}),Object(C.jsx)("hr",{}),Object(C.jsx)("p",{children:"User Name"}),Object(C.jsx)("hr",{}),Object(C.jsx)("p",{className:"p-p",children:"About this space"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{className:"btn-listcard",children:A.hometype}),Object(C.jsxs)("button",{className:"btn-listcard1",children:[A.guests," Guests"]})]}),Object(C.jsx)("div",{className:"div-dis",children:A.description})]}),Object(C.jsx)("div",{className:"bookingbox",children:Object(C.jsxs)("div",{className:"bookpadding",children:[Object(C.jsxs)("p",{className:"price",children:["$",A.price,"/day"]}),Object(C.jsx)("hr",{}),Object(C.jsx)("b",{children:Object(C.jsx)("p",{children:"Check In"})}),Object(C.jsx)(h.a,{selected:i,onChange:function(A){r(A)},dateFormat:"yyyy/MM/dd",minDate:new Date,maxDate:l,placeholderText:"Select date"}),Object(C.jsx)("b",{children:Object(C.jsx)("p",{children:"Check Out"})}),Object(C.jsx)(h.a,{selected:l,onChange:function(A){x(A)},dateFormat:"yyyy/MM/dd",disabled:null===i,minDate:i,placeholderText:"Select date"}),Object(C.jsx)("hr",{}),Object(C.jsx)(g.a,{className:null===l||null===i?"btn disabled btn-secondary btn-mg ":"btn active btn-primary btn-mg",onClick:function(){return B(null!==l&&null!==i)},children:"Request to book"}),Object(C.jsx)("p",{className:"p-button",children:"You won't be charged yet"})]})}),Object(C.jsx)(m,{rentalDays:w,price:A.price,show:u,onHide:function(){return B(!1)}})]})})}))},u=t(188),B=t(181),E=t(187),y=t(186),w=t(103),D=t.p+"static/media/search3.6b619d13.svg",Q=t(56),I={apiKey:"AIzaSyASq-skDQTzae1Kcx-SHvOZttlflyoLYT8",authDomain:"auth-project-ce8be.firebaseapp.com",projectId:"auth-project-ce8be",storageBucket:"auth-project-ce8be.appspot.com",messagingSenderId:"825876359082",appId:"1:825876359082:web:d6d5a5b82c328b926a6dd3",measurementId:"G-GTK6CMNW9P"},S=t(102);Object(S.a)(I);var J=function(){var A=new Q.a,e=Object(Q.b)();return Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){Object(Q.c)(e,A).then((function(A){var e=Q.a.credentialFromResult(A);localStorage.setItem("idToken",e.idToken),console.log(e.idToken)})).catch((function(A){A.code,A.message,A.email,Q.a.credentialFromError(A)}))},children:"Sign in"})})},v=t(96),k=t.n(v),f=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(u.a,{className:k.a.Nav,fixed:"top",expand:"lg",children:[Object(C.jsx)(u.a.Brand,{href:"/",children:Object(C.jsx)(B.a,{style:{margin:"0px 10px",width:"44px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABICAYAAACp+JiNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgB7ZvPcdNAFMa/ZTjkhm/JLaYDUgFJBeAKCBUgVUCowKICSAemAlyCO8hySgwXc0ouZPn22WLEv4xs7W5g5vvNOJpV5Iz10763Ty+yO2hCQDrmV5U7QWb4mS+4GSMN/gEEJAGSYEgCJMGQBEiCIQmQBEMSIAmGJEASDEmAJBiSAEkwJAGSYEgCJMGQBEiCIQmQBOMh0jI+mIZTZIb/Mhs5pCO5BDi8Q2ZSCogoHCAJhiRAEgxJgCQYkgBJMCQBkmBIAiTBkARIgnGfEuZsDLz8FnAUtxx73BOp+wm9cAH1Ze2azq4FmzFz5zBlw+Q5ClN+JvCq/yLAuKqdv+bv2DCZoTDFJPAKr/jjhCf7/m/HrGq3uqzchDPlLQpSSoK/XQuY9zmYM6WisDcoRAkJPs6AL7VbbPMmCjsrJSKrBMb3YhMCHjsQRXAGTSyUMpJPQsD59QABLZ9rN4uhhIxLaBYJgYmNJ38aEx0SYKGUUUR6CYzjZUxsibEZlUlEUgmxCLKEloko4oYVZoi5JiFJJGxqgD8WQamJIbas3FHKWiJF2RxrgEmfJXA0DaM9btrxDc8pnhRL5nH3uD7JNNYSfN+KS9BrDGToTNiqBqCAhh/6on1xvM4dDh+7+3lyx33+Xgw9JuEaAxkiwSPBEjgUJuHG7kQHJMydJbj1MujxDxBn4u2AGbFzTggOr/abcEgZXzu7/V03SDGBus4V61SCHlsQn4HYPKMwYvgccteY4yfYEaevCcMXbarYUywOT9sxp/CHWBbvT0PDhsqjHwey4CoZaqU7S8d8vWgHTEifuJlRwDP8fGXPUbDdpkYrJMEoGg6sEKu9gLPO2FaHeNfpOpUkCneei0rY3Fr/dnu9LHDPcRcKB0iCIQmQBEMSEFeHgMf431j3GpPxHWSq7xBvwxLFAAAAAElFTkSuQmCC",thumbnail:!0})}),Object(C.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(C.jsxs)(u.a.Collapse,{id:"navbarScroll",children:[Object(C.jsx)(E.a,{className:"mr-auto my-2 my-lg-10",style:{maxHeight:"100px"},navbarScroll:!0}),Object(C.jsxs)(y.a,{style:{width:"480px",height:"30px"},className:"d-flex",children:[Object(C.jsx)(w.a,{type:"search",placeholder:"Search 'San Fransisco'",className:"mr-2","aria-label":"Search"}),Object(C.jsx)(g.a,{children:Object(C.jsx)(B.a,{style:{width:"50px",height:"18px","margin-bottom":"10px"},src:D})})]})]}),Object(C.jsxs)(E.a,{children:[Object(C.jsxs)(E.a.Link,{style:{"margin-top":"8px",marginRight:"15px"},href:"/submitads",children:[Object(C.jsx)(B.a,{style:{margin:"0px 12px","margin-bottom":"4px",width:"17px"},src:"data:image/png;base64,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"}),"Host"]}),Object(C.jsx)("div",{className:k.a.signin,children:Object(C.jsx)(J,{})})]})]})})},Y=(t(166),t(167),t(182)),M=t(183),K=t(104),N=t(189),F=t.p+"static/media/toronto.5c221cf7.jpg",G=t.p+"static/media/dubai.a6c56bca.jpg",H=t.p+"static/media/los-angeles.44220702.jpg",T=t.p+"static/media/london.16fb9b9d.jpg",L=function(){return Object(C.jsx)("div",{className:"main-div",children:Object(C.jsxs)("div",{className:"div1",children:[Object(C.jsx)("h1",{children:"Find a place you'll love to stay at"}),Object(C.jsxs)(y.a,{style:{width:"660px",height:"40px",marginBottom:"30px",marginLeft:"13px"},className:"d-flex",children:[Object(C.jsx)(w.a,{type:"search",placeholder:"Search 'San Fransisco'",className:"mr-2","aria-label":"Search"}),Object(C.jsx)(g.a,{children:Object(C.jsx)(B.a,{style:{width:"50px",height:"25px","margin-bottom":"10px"},src:D})})]}),Object(C.jsx)(Y.a,{style:{paddingTop:"1.20rem",paddingBottom:"2rem",marginRight:"80px"},children:Object(C.jsxs)(M.a,{children:[Object(C.jsx)(K.a,{children:Object(C.jsxs)(N.a,{style:{width:"15.5rem",height:"20rem"},children:[Object(C.jsx)(N.a.Img,{variant:"top",src:F}),Object(C.jsx)(N.a.Title,{className:"T",children:"Toronto"})]})}),Object(C.jsx)(K.a,{children:Object(C.jsxs)(N.a,{style:{width:"15.5rem",height:"20rem"},children:[Object(C.jsx)(N.a.Img,{variant:"top",src:G}),Object(C.jsx)(N.a.Title,{className:"D",children:"Dubai"})]})}),Object(C.jsx)(K.a,{children:Object(C.jsxs)(N.a,{style:{width:"15.5rem",height:"20rem"},children:[Object(C.jsx)(N.a.Img,{variant:"top",src:H}),Object(C.jsx)(N.a.Title,{className:"LA",children:"Los Angeles"})]})}),Object(C.jsx)(K.a,{children:Object(C.jsxs)(N.a,{style:{width:"15.5rem",height:"20rem"},children:[Object(C.jsx)(N.a.Img,{variant:"top",src:T}),Object(C.jsx)(N.a.Title,{className:"L",children:"London"})]})})]})})]})})},z=(t(168),function(){var A=Object(c.useState)([]),e=Object(b.a)(A,2),t=e[0],s=e[1],a=Object(r.b)(),n=function(A){a({type:"GET_IDCARD",cardId:A})};return Object(c.useEffect)((function(){fetch("/fakeHost/data.json").then((function(A){return A.json()})).then((function(A){var e=A.data;s(e)}))}),[]),Object(C.jsx)("div",{className:"myCards",children:t.map((function(A){return Object(C.jsx)(P,{getCards:n,data:A},A.id)}))})}),P=function(A){var e=A.data;return Object(C.jsx)(l.b,{to:"/product/".concat(e.id),children:Object(C.jsx)(Y.a,{children:Object(C.jsx)(M.a,{children:Object(C.jsx)(K.a,{children:Object(C.jsxs)(N.a,{class:"card-apart",children:[Object(C.jsx)(N.a.Img,{variant:"top",src:e.image,style:{width:"15.4rem",height:"10rem"}}),Object(C.jsxs)(N.a.Body,{children:[Object(C.jsxs)("span",{className:"price",children:["$",e.price,"/day"]}),Object(C.jsx)("b",{children:Object(C.jsx)(N.a.Title,{class:"card-title-house",children:e.title})}),Object(C.jsx)(N.a.Header,{class:"card-header-adress",children:e.adress}),Object(C.jsx)(N.a.Footer,{class:"card-footer",children:e.guests})]})]})})})})})},U=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(Y.a,{style:{paddingTop:"2.8rem",paddingBottom:"2rem",width:"72rem"},children:Object(C.jsxs)(M.a,{children:[Object(C.jsxs)(N.a.Text,{style:{fontSize:"20px",color:"rgb(44, 23, 138)"},children:[" ",Object(C.jsx)("b",{children:" Listings of any kind "})]}),Object(C.jsx)(K.a,{children:Object(C.jsx)(N.a,{style:{width:"34.1rem"},children:Object(C.jsx)(N.a.Img,{variant:"top",src:"https://tinyhouse-blacksonic.herokuapp.com/static/media/san-fransisco.bc8599ab.jpg"})})}),Object(C.jsx)(K.a,{children:Object(C.jsx)(N.a,{style:{width:"34.1rem"},children:Object(C.jsx)(N.a.Img,{variant:"top",src:"https://tinyhouse-blacksonic.herokuapp.com/static/media/cancun.7009e472.jpg"})})})]})})})},Z=(t(169),function(){return Object(C.jsx)("div",{className:"pop-container",children:Object(C.jsxs)("div",{className:"min-div",children:[Object(C.jsx)("h3",{className:"pop-h3",children:"Your guide for all things rental"}),Object(C.jsx)("p",{className:"pop-p",children:"Helping you make the best decisions in renting your last minute locations"}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",children:"Popular listings in the United States"})]})})}),R=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(L,{}),Object(C.jsx)(Z,{}),Object(C.jsx)("div",{className:"list",children:Object(C.jsx)(z,{})}),Object(C.jsx)(U,{})]})},W=t(105),X=t.n(W),V=(t(170),t(184)),q=function(){var A=Object(c.useState)("white"),e=Object(b.a)(A,2),t=(e[0],e[1]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(Y.a,{className:"Submit--Ads",children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)("h2",{className:"sub--text",children:"Hi! Let's get started listing your place."}),Object(C.jsx)("p",{className:"sub-mini-text",children:"In this form, we'll collect some basic and additional information about your listing."}),Object(C.jsxs)("p",{children:[Object(C.jsx)("span",{children:"*"})," Home type"]}),Object(C.jsxs)(V.a,{"aria-label":"Basic example",className:"mb-3",children:[Object(C.jsx)(g.a,{onClick:function(){return t("blue")},variant:"outline-primary",children:"Apartment"}),Object(C.jsx)(g.a,{variant:"outline-primary",children:"House"})]}),Object(C.jsxs)(y.a.Group,{className:"mb-3",controlId:"formGroupGuest",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Max # of Guests"]}),Object(C.jsx)(y.a.Control,{style:{width:"100px"},type:"number",placeholder:"4"})]}),Object(C.jsxs)(y.a.Group,{className:"mb-3",controlId:"formGroupTitle",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Title"]}),Object(C.jsx)(y.a.Control,{style:{width:"500px"},type:"text",placeholder:"The iconic and luxurious Bel-Air mansion"})]}),Object(C.jsxs)(y.a.Group,{className:"mb-3",controlId:"formGroupArea",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Description of listing"]}),Object(C.jsx)(y.a.Control,{as:"textarea",placeholder:"\r Modern, clean, and iconic home of the Fresh Prince.\r Situated in the heart of Bel-Air, Los Angeles.\r ",style:{height:"100px",width:"500px"}})]}),Object(C.jsxs)(y.a.Group,{className:"mb-3",controlId:"formGroupAddress",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Address"]}),Object(C.jsx)(y.a.Control,{style:{width:"500px"},type:"text",placeholder:"Address"})]}),Object(C.jsxs)(y.a.Group,{controlId:"formGridState",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Town/Province"]}),Object(C.jsxs)(y.a.Control,{as:"select",style:{width:"500px"},defaultValue:"Choose...",children:[Object(C.jsx)("option",{children:"\u0411\u0438\u0448\u043a\u0435\u043a"}),Object(C.jsx)("option",{children:"\u041e\u0448"}),Object(C.jsx)("option",{children:"\u041d\u0430\u0440\u044b\u043d"}),Object(C.jsx)("option",{children:"\u0411\u0430\u0442\u043a\u0435\u043d"}),Object(C.jsx)("option",{children:"\u0416\u0430\u043b\u0430\u043b-\u0430\u0431\u0430\u0434"}),Object(C.jsx)("option",{children:"\u0422\u0430\u043b\u0430\u0441"})]}),Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsxs)("p",{children:[Object(C.jsx)("span",{children:"*"})," Image"]}),Object(C.jsx)("input",{type:"file",className:"custom-file-input"})]})]}),Object(C.jsxs)(y.a.Group,{className:"mb-3",controlId:"formGroupPrice",children:[Object(C.jsxs)(y.a.Label,{children:[Object(C.jsx)("span",{children:"*"})," Price"]}),Object(C.jsx)(y.a.Control,{style:{width:"100px"},type:"number",placeholder:"120"})]}),Object(C.jsx)(g.a,{variant:"primary",children:"Submit"})]})})})},_=function(){return Object(C.jsx)(l.a,{children:Object(C.jsx)(d.c,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"myn",children:Object(C.jsx)(f,{})}),Object(C.jsx)(d.a,{exact:!0,path:"/",component:R}),Object(C.jsx)(d.a,{path:"/submitads",component:q}),Object(C.jsx)(d.a,{path:"/profile",component:X.a}),Object(C.jsx)(d.a,{path:"/product/:id",component:p})]})})})};function $(){return Object(C.jsx)("div",{children:Object(C.jsx)(_,{})})}var AA=Object(i.a)((function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;return"GET_IDCARD"===e.type?Object(o.a)(Object(o.a)({},A),{},{cardId:e.cardId}):A}));n.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(r.a,{store:AA,children:Object(C.jsx)($,{})})}),document.getElementById("root"))},96:function(A,e,t){A.exports={Nav:"MyNavbar_Nav___njyF",signin:"MyNavbar_signin__1XTF4"}}},[[172,1,2]]]);
//# sourceMappingURL=main.878a3d42.chunk.js.map