"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{7515:function(n,e,r){r.d(e,{Z:function(){return B}});var i,a,t,s,l,o=r(3433),c=r(9439),d=r(249),p=r(2791),x=r(184),h=function(n){var e=n.review;return(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"grey-text-color",children:e.reviewer_name}),(0,x.jsx)("p",{children:(0,x.jsxs)("span",{className:"reviewers",children:[(0,x.jsx)(d.Z,{className:"star",id:"star"}),(0,x.jsx)("span",{children:e.reviewer_rating})]})}),(0,x.jsx)("p",{children:e.comment})]})},u=function(n){var e=n.level;return(0,x.jsx)("div",{children:(0,x.jsxs)("span",{className:"level",children:["#",e]})})},f=r(2304),m=r(7119),g=r(168),v=r(1572).default,j=v.div(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 48px;\n  padding: 24px;\n  width: 1184px;\n\n  background-color: #ffff;\n\n  border-radius: 24px;\n\n  img {\n    width: 96px;\n    border-radius: 50%;\n    border: 1 solid #fbe9ba;\n    box-shadow: 0 0 0px 9px #ffff, 0 0 0px 12px #fbe9ba;\n  }\n  line-height: 1.5;\n  color: var(--text-color-black);\n  font-weight: 500;\n\n  h2 {\n    margin-bottom: 32px;\n  }\n\n  .languages {\n    text-decoration: underline;\n    margin-bottom: 8px;\n  }\n\n  .grey-text-color {\n    color: #8a8a89;\n  }\n  .all-content,\n  .other-content {\n    width: 968px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n\n  .card-main-content {\n    position: relative;\n    padding-top: 4px;\n  }\n\n  .experience {\n    font-weight: 400;\n  }\n\n  .statistics-favorites {\n    position: absolute;\n    top: 0;\n    right: 0px;\n    display: flex;\n    align-items: center;\n  }\n  .statistics {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 16px;\n  }\n  .reviews {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n  .levels {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n  .level {\n    padding: 8px 12px;\n    border: 1px solid #12141733;\n    border-radius: 35px;\n  }\n\n  .lessons-online,\n  .rating,\n  .reviewers {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .fill-heart {\n    fill: var(--primary-orange);\n    color: var(--primary-orange);\n    stroke: var(--primary-orange);\n    height: 26px;\n    width: 26px;\n  }\n  .heart-button {\n    padding-left: 0;\n    margin-left: 64px;\n    background: transparent;\n    border: none;\n    /* height: 26px;\n    width: 26px; */\n  }\n  .transparent-heart {\n    height: 26px;\n    width: 26px;\n  }\n  .ellipse-container {\n    padding: 13px;\n    position: relative;\n  }\n  .ellipse {\n    position: absolute;\n    z-index: 100;\n    top: 18px;\n    left: 85px;\n    height: 12px;\n    width: 12px;\n  }\n  .book-open {\n    height: 16px;\n    width: 16px;\n  }\n  .star {\n    height: 16px;\n    width: 16px;\n  }\n  .price {\n    color: #38cd3e;\n  }\n  .item {\n    font-size: 16px;\n\n    border-right: 1px solid rgba(18, 20, 23, 0.2);\n    :not(:last-child) {\n      margin-right: 16px;\n    }\n    padding-right: 16px;\n  }\n"]))),b=v.button(a||(a=(0,g.Z)(["\n  width: 80px;\n  margin-top: 8px;\n  padding: 0;\n  border: none;\n  text-decoration: underline;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 500;\n  background: transparent;\n"]))),y=v.button(t||(t=(0,g.Z)(["\n  height: 60px;\n  width: 232px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"]))),w=r(6018),N=r(3246),k=r(5705),Z=r(203),C=r(1572),z=C.default.div(s||(s=(0,g.Z)(["\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 438px;\n  gap: 20px;\n  font-size: 16px;\n  font-weight: 400;\n  h2 {\n    font-size: 40px;\n    font-weight: 500;\n    margin-bottom: 0;\n  }\n  .text {\n    flex-direction: column;\n    display: flex;\n    gap: 20px;\n  }\n  .question {\n    margin-top: 20px;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n  }\n\n  input {\n    width: 100%;\n    height: 54px;\n    padding: 16px;\n    line-height: 1.375;\n    border: 1px solid #1214171a;\n    border-radius: 12px;\n    font-size: 16px;\n    &::placeholder {\n      font-size: 16px;\n      color: var(--text-color-black);\n    }\n  }\n  .inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    width: 438px;\n  }\n  .radio-input {\n    color: var(--primary-orange);\n  }\n\n  .radio-label {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 0;\n    height: 22px;\n  }\n\n  #radio-inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 40px;\n  }\n\n  input[type='radio'] {\n    width: 24px;\n\n    accent-color: #1214171a;\n  }\n  input[type='radio']:checked {\n    accent-color: #f4c550;\n  }\n"]))),_=C.default.div(l||(l=(0,g.Z)(["\n  .img-text {\n    display: flex;\n    flex-direction: row;\n    gap: 14px;\n  }\n\n  .teacher-text {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    width: 81px;\n  }\n\n  #teacher-img {\n    display: block;\n    box-shadow: none;\n    width: 44px;\n    border-radius: 50%;\n  }\n  .text-your-teacher {\n    font-size: 12px;\n    line-height: 1.33;\n  }\n  .teacher-name {\n    font-size: 16px;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n"]))),L=function(n){n.setVisible;var e=n.teacher,r=(0,m.aC)(),i=r.user,a=r.error,t=(0,k.TA)({initialValues:{fullName:"",email:"",phone:"",reason:"",validationSchema:Z.AY}});return(0,x.jsxs)(z,{children:[(0,x.jsxs)("div",{className:"text",children:[(0,x.jsx)("h2",{children:"Book trial lesson"}),(0,x.jsx)("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."})]}),(0,x.jsx)(_,{children:(0,x.jsxs)("div",{className:"img-text",children:[(0,x.jsx)("img",{id:"teacher-img",src:e.avatar_url,alt:e.name}),(0,x.jsxs)("div",{className:"teacher-text",children:[(0,x.jsx)("p",{className:"text-your-teacher",children:"Your teacher"}),(0,x.jsxs)("p",{className:"teacher-name",children:[e.name," ",e.surname]})]})]})}),(0,x.jsx)("p",{className:"question",children:"What is your main reason for learning English?"}),(0,x.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,x.jsxs)("div",{className:"inputs",children:[(0,x.jsxs)("div",{id:"radio-inputs",children:[(0,x.jsxs)("label",{className:"radio-label",children:[(0,x.jsx)("input",{name:"reason",type:"radio",value:"Career and business"}),(0,x.jsx)("span",{children:"Career and business"})]}),(0,x.jsxs)("label",{className:"radio-label",children:[(0,x.jsx)("input",{name:"reason",type:"radio",value:"Lesson for kids"}),(0,x.jsx)("span",{children:"Lesson for kids"})]}),(0,x.jsxs)("label",{className:"radio-label",children:[(0,x.jsx)("input",{name:"reason",type:"radio",value:"Living abroad"}),(0,x.jsx)("span",{children:"Living abroad"})]}),(0,x.jsxs)("label",{className:"radio-label",children:[(0,x.jsx)("input",{name:"reason",type:"radio",value:"Exams and coursework"}),(0,x.jsx)("span",{children:"Exams and coursework"})]}),(0,x.jsxs)("label",{className:"radio-label",children:[(0,x.jsx)("input",{className:"radio-input",name:"reason",type:"radio",value:"Culture, travel or hobby"}),(0,x.jsx)("span",{children:"Culture, travel or hobby"})]})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{name:"fullName",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.fullName,placeholder:"Full Name"}),t.touched.name&&t.errors.name?(0,x.jsx)("div",{children:t.errors.name}):null]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{name:"email",type:"email",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email,placeholder:"Email"}),t.touched.email&&t.errors.email?(0,x.jsx)("div",{children:t.errors.email}):null]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("div",{className:"",children:(0,x.jsx)("input",{name:"phone",type:"text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phone,placeholder:"Phone Number"})}),t.touched.phone&&t.errors.phone?(0,x.jsx)("div",{children:t.errors.phone}):null]})]}),(0,x.jsx)(N.Mm,{type:"submit",onClick:function(){return i?window.location.href="tel:+380730000000":alert("Please signIn or signUp!")},children:"Book"}),a?(0,x.jsx)("p",{children:a}):null]})]})},B=function(n){var e=n.teacher,r=n.favorite,i=n.removeFromFavorites,a=(0,p.useState)(!1),t=(0,c.Z)(a,2),s=t[0],l=t[1],g=(0,p.useState)(!1),v=(0,c.Z)(g,2),N=v[0],k=v[1],Z=(0,m.aC)().user,C=Array.isArray(null===Z||void 0===Z?void 0:Z.favorites)?Z.favorites:[],z=C.some((function(n){return n.id===e.id}));return(0,x.jsxs)(j,{children:[(0,x.jsxs)("div",{className:"ellipse-container",children:[(0,x.jsx)(d.Z,{className:"ellipse",id:"ellipse"}),(0,x.jsx)("img",{src:e.avatar_url,alt:e.name})]}),(0,x.jsxs)("div",{className:"all-content",children:[(0,x.jsxs)("div",{className:"card-main-content",children:[(0,x.jsxs)("div",{className:"statistics-favorites",children:[(0,x.jsxs)("div",{className:"statistics",children:[(0,x.jsxs)("span",{className:"lessons-online item",children:[(0,x.jsx)(d.Z,{className:"book-open",id:"book-open"}),(0,x.jsx)("span",{children:"Lessons online"})]}),(0,x.jsxs)("span",{className:"item",children:["Lessons done: ",e.lessons_done]}),(0,x.jsxs)("span",{className:"rating item",children:[(0,x.jsx)(d.Z,{className:"star",id:"star"}),(0,x.jsxs)("span",{children:["Rating: ",e.rating]})]}),(0,x.jsxs)("span",{className:"item",children:["Price/1hour:",(0,x.jsxs)("span",{className:"price",children:[" ",e.price_per_hour,"$"]})]})]}),Z&&!r&&(0,x.jsx)("button",{className:"heart-button",onClick:function(){var n;n=C.some((function(n){return n.id===e.id}))?C.filter((function(n){return n.id!==e.id})):[].concat((0,o.Z)(C),[e]),(0,f.VO)(Z.id,n)},children:z?(0,x.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"}):(0,x.jsx)(d.Z,{id:"heart",className:"transparent-heart"})}),!Z&&!r&&(0,x.jsx)("button",{className:"heart-button",onClick:function(){return alert("Please register or sign in")},children:z?(0,x.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"}):(0,x.jsx)(d.Z,{id:"heart",className:"transparent-heart"})}),Z&&r&&(0,x.jsx)("button",{className:"heart-button",onClick:function(){return i(e.id)},children:(0,x.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"})})]}),(0,x.jsx)("p",{className:"grey-text-color",children:"Languages"}),(0,x.jsxs)("h2",{children:[e.name," ",e.surname]}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"grey-text-color ",children:"Speaks: "}),(0,x.jsx)("span",{className:"languages",children:e.languages.join(", ")})]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"grey-text-color",children:"Lesson Info: "}),e.lesson_info]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"grey-text-color",children:"Conditions: "}),e.conditions.join(" ")]}),(0,x.jsx)(b,{onClick:function(){l(!s)},children:s?"Read less":"Read more"})]}),s&&(0,x.jsx)("p",{className:"experience",children:e.experience})]}),(0,x.jsxs)("div",{className:"other-content",children:[s&&(0,x.jsx)("div",{className:"reviews",children:e.reviews.map((function(n,e){return(0,x.jsx)(h,{review:n},e)}))}),(0,x.jsx)("div",{className:"levels",children:e.levels.map((function(n,e){return(0,x.jsx)(u,{level:n},e)}))}),s&&(0,x.jsx)(y,{type:"button",onClick:function(){k(!0)},children:"Book trial lesson"})]})]}),N&&(0,x.jsx)(w.Z,{visible:N,setVisible:k,children:(0,x.jsx)(L,{setVisible:k,teacher:e})})]})}},9337:function(n,e,r){r.d(e,{L:function(){return l},n:function(){return o}});var i,a,t=r(168),s=r(1572),l=s.default.div(i||(i=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  align-items: center;\n"]))),o=s.default.button(a||(a=(0,t.Z)(["\n  height: 60px;\n  width: 183px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"])))},9347:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var i,a=r(3433),t=r(1413),s=r(5861),l=r(9439),o=r(4687),c=r.n(o),d=r(2791),p=r(3268),x=r(2685),h=r(7515),u=r(7119),f=r(9337),m=r(168),g=r(1572).default.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  align-items: center;\n"]))),v=r(184),j=function(n){var e,r=n.favorite,i=(0,d.useState)([]),o=(0,l.Z)(i,2),m=o[0],j=o[1],b=(0,d.useState)(null),y=(0,l.Z)(b,2),w=y[0],N=y[1],k=(0,u.aC)().user;(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(c().mark((function n(){var r,i,a,s,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=(0,x.IO)((0,x.iH)(p.Fs,"users/".concat(k.id,"/favorites")),(0,x.R)(),(0,x.Kk)(4)),n.next=4,(0,x.U2)(r);case 4:i=n.sent,a=i.val(),i.exists()&&(o=Object.entries(a).map((function(n){var e=(0,l.Z)(n,2),r=e[0],i=e[1];return(0,t.Z)({id:r},i)})),j(o),N(null===(s=o[o.length-1])||void 0===s?void 0:s.id)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error fetching favorite teachers:",n.t0);case 12:return n.abrupt("return",(function(){e}));case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[k.id,e]);var Z=function(){var n=(0,s.Z)(c().mark((function n(){var e,r,i,s,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,x.IO)((0,x.iH)(p.Fs,"users/".concat(k.id,"/favorites")),(0,x.R)(),(0,x.TQ)(w),(0,x.Kk)(4)),n.next=3,(0,x.U2)(e);case 3:r=n.sent,i=r.val(),r.exists()&&(o=Object.entries(i).map((function(n){var e=(0,l.Z)(n,2),r=e[0],i=e[1];return(0,t.Z)({id:r},i)})),j((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(o))})),N(null===(s=o[o.length-1])||void 0===s?void 0:s.id));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(){var n=(0,s.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Od)((0,x.iH)(p.Fs,"users/".concat(k.id,"/favorites/").concat(e)));case 3:j((function(n){return n.filter((function(n){return n.id!==e}))})),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Error removing teacher from favorites:",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,v.jsxs)(g,{children:[k.favorites&&m.map((function(n){return(0,v.jsx)("div",{children:(0,v.jsx)(h.Z,{removeFromFavorites:C,favorite:r,teacher:n})},n.id)})),k.favorites&&k.favorites.length>m.length&&(0,v.jsx)(f.n,{onClick:Z,children:"LOAD MORE"}),!k.favorites&&(0,v.jsx)("p",{children:"There no favorite teachers"})]})},b=function(){return(0,v.jsx)("section",{children:(0,v.jsx)(j,{favorite:!0})})}}}]);
//# sourceMappingURL=347.0b08d570.chunk.js.map