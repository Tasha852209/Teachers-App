"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{7515:function(n,e,r){r.d(e,{Z:function(){return E}});var a,i,s,t,l,o=r(3433),c=r(9439),d=r(249),p=r(2791),h=r(184),x=function(n){var e=n.review;return(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"grey-text-color",children:e.reviewer_name}),(0,h.jsx)("p",{children:(0,h.jsxs)("span",{className:"reviewers",children:[(0,h.jsx)(d.Z,{className:"star",id:"star"}),(0,h.jsx)("span",{children:e.reviewer_rating})]})}),(0,h.jsx)("p",{children:e.comment})]})},u=function(n){var e=n.level;return(0,h.jsx)("div",{children:(0,h.jsxs)("span",{className:"level",children:["#",e]})})},f=r(2304),m=r(7119),g=r(168),v=r(1572).default,j=v.div(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 48px;\n  padding: 24px;\n  width: 1184px;\n\n  background-color: #ffff;\n\n  border-radius: 24px;\n\n  img {\n    width: 96px;\n    border-radius: 50%;\n    border: 1 solid #fbe9ba;\n    box-shadow: 0 0 0px 9px #ffff, 0 0 0px 12px #fbe9ba;\n  }\n  line-height: 1.5;\n  color: var(--text-color-black);\n  font-weight: 500;\n\n  h2 {\n    margin-bottom: 32px;\n  }\n\n  .languages {\n    text-decoration: underline;\n    margin-bottom: 8px;\n  }\n\n  .grey-text-color {\n    color: #8a8a89;\n  }\n  .all-content,\n  .other-content {\n    width: 968px;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n\n  .card-main-content {\n    position: relative;\n    padding-top: 4px;\n  }\n\n  .experience {\n    font-weight: 400;\n  }\n\n  .statistics-favorites {\n    position: absolute;\n    top: 0;\n    right: 0px;\n    display: flex;\n    align-items: center;\n  }\n  .statistics {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 16px;\n  }\n  .reviews {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n  .levels {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n  .level {\n    padding: 8px 12px;\n    border: 1px solid #12141733;\n    border-radius: 35px;\n  }\n\n  .lessons-online,\n  .rating,\n  .reviewers {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .fill-heart {\n    fill: var(--primary-orange);\n    color: var(--primary-orange);\n    stroke: var(--primary-orange);\n    height: 26px;\n    width: 26px;\n  }\n  .heart-button {\n    padding-left: 0;\n    margin-left: 64px;\n    background: transparent;\n    border: none;\n    /* height: 26px;\n    width: 26px; */\n  }\n  .transparent-heart {\n    height: 26px;\n    width: 26px;\n  }\n  .ellipse-container {\n    padding: 13px;\n    position: relative;\n  }\n  .ellipse {\n    position: absolute;\n    z-index: 100;\n    top: 18px;\n    left: 85px;\n    height: 12px;\n    width: 12px;\n  }\n  .book-open {\n    height: 16px;\n    width: 16px;\n  }\n  .star {\n    height: 16px;\n    width: 16px;\n  }\n  .price {\n    color: #38cd3e;\n  }\n  .item {\n    font-size: 16px;\n\n    border-right: 1px solid rgba(18, 20, 23, 0.2);\n    :not(:last-child) {\n      margin-right: 16px;\n    }\n    padding-right: 16px;\n  }\n"]))),b=v.button(i||(i=(0,g.Z)(["\n  width: 80px;\n  margin-top: 8px;\n  padding: 0;\n  border: none;\n  text-decoration: underline;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 500;\n  background: transparent;\n"]))),y=v.button(s||(s=(0,g.Z)(["\n  height: 60px;\n  width: 232px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"]))),w=r(6018),N=r(3246),k=r(5705),C=r(203),Z=r(1572),z=Z.default.div(t||(t=(0,g.Z)(["\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 438px;\n  gap: 20px;\n  font-size: 16px;\n  font-weight: 400;\n  h2 {\n    font-size: 40px;\n    font-weight: 500;\n    margin-bottom: 0;\n  }\n  .text {\n    flex-direction: column;\n    display: flex;\n    gap: 20px;\n  }\n  .question {\n    margin-top: 20px;\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.33;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n  }\n\n  input {\n    width: 100%;\n    height: 54px;\n    padding: 16px;\n    line-height: 1.375;\n    border: 1px solid #1214171a;\n    border-radius: 12px;\n    font-size: 16px;\n    &::placeholder {\n      font-size: 16px;\n      color: var(--text-color-black);\n    }\n  }\n  .inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    width: 438px;\n  }\n  .radio-input {\n    color: var(--primary-orange);\n  }\n\n  .radio-label {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 0;\n    height: 22px;\n  }\n\n  #radio-inputs {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 40px;\n  }\n\n  input[type='radio'] {\n    width: 24px;\n\n    accent-color: #1214171a;\n  }\n  input[type='radio']:checked {\n    accent-color: #f4c550;\n  }\n"]))),L=Z.default.div(l||(l=(0,g.Z)(["\n  .img-text {\n    display: flex;\n    flex-direction: row;\n    gap: 14px;\n  }\n\n  .teacher-text {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n    width: 150px;\n  }\n\n  #teacher-img {\n    display: block;\n    box-shadow: none;\n    width: 44px;\n    height: 44px;\n    border-radius: 50%;\n  }\n  .text-your-teacher {\n    font-size: 12px;\n    line-height: 1.33;\n  }\n  .teacher-name {\n    width: 100%;\n    font-size: 16px;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n"]))),_=r(7694),B=function(n){n.setVisible;var e=n.teacher,r=(0,m.aC)(),a=r.user,i=r.error,s=(0,k.TA)({initialValues:{fullName:"",email:"",phone:"",reason:"Career and business"},validationSchema:C.AY});return(0,h.jsxs)(z,{children:[(0,h.jsxs)("div",{className:"text",children:[(0,h.jsx)("h2",{children:"Book trial lesson"}),(0,h.jsx)("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."})]}),(0,h.jsx)(L,{children:(0,h.jsxs)("div",{className:"img-text",children:[(0,h.jsx)("img",{id:"teacher-img",src:e.avatar_url,alt:e.name}),(0,h.jsxs)("div",{className:"teacher-text",children:[(0,h.jsx)("p",{className:"text-your-teacher",children:"Your teacher"}),(0,h.jsxs)("p",{className:"teacher-name",children:[e.name," ",e.surname]})]})]})}),(0,h.jsx)("p",{className:"question",children:"What is your main reason for learning English?"}),(0,h.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,h.jsxs)("div",{className:"inputs",children:[(0,h.jsxs)("div",{id:"radio-inputs",children:[(0,h.jsxs)("label",{className:"radio-label",children:[(0,h.jsx)("input",{name:"reason",type:"radio",onChange:s.handleChange,checked:"Career and business"===s.values.reason,value:"Career and business"}),(0,h.jsx)("span",{children:"Career and business"})]}),(0,h.jsxs)("label",{className:"radio-label",children:[(0,h.jsx)("input",{name:"reason",type:"radio",onChange:s.handleChange,checked:"Lesson for kids"===s.values.reason,value:"Lesson for kids"}),(0,h.jsx)("span",{children:"Lesson for kids"})]}),(0,h.jsxs)("label",{className:"radio-label",children:[(0,h.jsx)("input",{name:"reason",type:"radio",onChange:s.handleChange,checked:"Living abroad"===s.values.reason,value:"Living abroad"}),(0,h.jsx)("span",{children:"Living abroad"})]}),(0,h.jsxs)("label",{className:"radio-label",children:[(0,h.jsx)("input",{name:"reason",type:"radio",onChange:s.handleChange,checked:"Exams and coursework"===s.values.reason,value:"Exams and coursework"}),(0,h.jsx)("span",{children:"Exams and coursework"})]}),(0,h.jsxs)("label",{className:"radio-label",children:[(0,h.jsx)("input",{className:"radio-input",name:"reason",type:"radio",onChange:s.handleChange,checked:"Culture, travel or hobby"===s.values.reason,value:"Culture, travel or hobby"}),(0,h.jsx)("span",{children:"Culture, travel or hobby"})]})]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("input",{name:"fullName",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.fullName,placeholder:"Full Name"}),s.touched.name&&s.errors.name?(0,h.jsx)("div",{children:s.errors.name}):null]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("input",{name:"email",type:"email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email,placeholder:"Email"}),s.touched.email&&s.errors.email?(0,h.jsx)("div",{children:s.errors.email}):null]}),(0,h.jsxs)("label",{children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)("input",{name:"phone",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.phone,placeholder:"Phone Number"})}),s.touched.phone&&s.errors.phone?(0,h.jsx)("div",{children:s.errors.phone}):null]})]}),(0,h.jsx)(N.Mm,{type:"submit",onClick:function(){return a?window.location.href="tel:+380730000000":_.Notify.warning("Please signIn or signUp!")},children:"Book"}),i?(0,h.jsx)("p",{children:i}):null]})]})},E=function(n){var e=n.teacher,r=n.favorite,a=n.removeFromFavorites,i=(0,p.useState)(!1),s=(0,c.Z)(i,2),t=s[0],l=s[1],g=(0,p.useState)(!1),v=(0,c.Z)(g,2),N=v[0],k=v[1],C=(0,m.aC)().user,Z=Array.isArray(null===C||void 0===C?void 0:C.favorites)?C.favorites:[],z=Z.some((function(n){return n.id===e.id}));return(0,h.jsxs)(j,{children:[(0,h.jsxs)("div",{className:"ellipse-container",children:[(0,h.jsx)(d.Z,{className:"ellipse",id:"ellipse"}),(0,h.jsx)("img",{src:e.avatar_url,alt:e.name})]}),(0,h.jsxs)("div",{className:"all-content",children:[(0,h.jsxs)("div",{className:"card-main-content",children:[(0,h.jsxs)("div",{className:"statistics-favorites",children:[(0,h.jsxs)("div",{className:"statistics",children:[(0,h.jsxs)("span",{className:"lessons-online item",children:[(0,h.jsx)(d.Z,{className:"book-open",id:"book-open"}),(0,h.jsx)("span",{children:"Lessons online"})]}),(0,h.jsxs)("span",{className:"item",children:["Lessons done: ",e.lessons_done]}),(0,h.jsxs)("span",{className:"rating item",children:[(0,h.jsx)(d.Z,{className:"star",id:"star"}),(0,h.jsxs)("span",{children:["Rating: ",e.rating]})]}),(0,h.jsxs)("span",{className:"item",children:["Price/1hour:",(0,h.jsxs)("span",{className:"price",children:[" ",e.price_per_hour,"$"]})]})]}),C&&!r&&(0,h.jsx)("button",{className:"heart-button",onClick:function(){var n;Z.some((function(n){return n.id===e.id}))?(n=Z.filter((function(n){return n.id!==e.id})),_.Notify.info("Deleted from favorites")):(n=[].concat((0,o.Z)(Z),[e]),_.Notify.info("Added to favorites")),(0,f.VO)(C.id,n)},children:z?(0,h.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"}):(0,h.jsx)(d.Z,{id:"heart",className:"transparent-heart"})}),!C&&!r&&(0,h.jsx)("button",{className:"heart-button",onClick:function(){return _.Notify.info("Please register or sign in")},children:z?(0,h.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"}):(0,h.jsx)(d.Z,{id:"heart",className:"transparent-heart"})}),C&&r&&(0,h.jsx)("button",{className:"heart-button",onClick:function(){return a(e.id)},children:(0,h.jsx)(d.Z,{id:"fill-heart",className:"fill-heart"})})]}),(0,h.jsx)("p",{className:"grey-text-color",children:"Languages"}),(0,h.jsxs)("h2",{children:[e.name," ",e.surname]}),(0,h.jsxs)("div",{className:"info",children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"grey-text-color ",children:"Speaks: "}),(0,h.jsx)("span",{className:"languages",children:e.languages.join(", ")})]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"grey-text-color",children:"Lesson Info: "}),e.lesson_info]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{className:"grey-text-color",children:"Conditions: "}),e.conditions.join(" ")]}),(0,h.jsx)(b,{onClick:function(){l(!t)},children:t?"Read less":"Read more"})]}),t&&(0,h.jsx)("p",{className:"experience",children:e.experience})]}),(0,h.jsxs)("div",{className:"other-content",children:[t&&(0,h.jsx)("div",{className:"reviews",children:e.reviews.map((function(n,e){return(0,h.jsx)(x,{review:n},e)}))}),(0,h.jsx)("div",{className:"levels",children:e.levels.map((function(n,e){return(0,h.jsx)(u,{level:n},e)}))}),t&&(0,h.jsx)(y,{type:"button",onClick:function(){k(!0)},children:"Book trial lesson"})]})]}),N&&(0,h.jsx)(w.Z,{visible:N,setVisible:k,children:(0,h.jsx)(B,{setVisible:k,teacher:e})})]})}},9337:function(n,e,r){r.d(e,{L:function(){return l},n:function(){return o}});var a,i,s=r(168),t=r(1572),l=t.default.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  align-items: center;\n"]))),o=t.default.button(i||(i=(0,s.Z)(["\n  height: 60px;\n  width: 183px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"])))},9347:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var a,i=r(3433),s=r(1413),t=r(5861),l=r(9439),o=r(4687),c=r.n(o),d=r(2791),p=r(3268),h=r(2685),x=r(7515),u=r(7119),f=r(9337),m=r(168),g=r(1572).default.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  align-items: center;\n"]))),v=r(7694),j=r(184),b=function(n){var e=n.favorite,r=(0,d.useState)([]),a=(0,l.Z)(r,2),o=a[0],m=a[1],b=(0,d.useState)(null),y=(0,l.Z)(b,2),w=y[0],N=y[1],k=(0,u.aC)().user;(0,d.useEffect)((function(){var n=function(){var n=(0,t.Z)(c().mark((function n(){var e,r,a,i,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=(0,h.IO)((0,h.iH)(p.Fs,"users/".concat(k.id,"/favorites")),(0,h.R)(),(0,h.Kk)(4)),n.next=4,(0,h.U2)(e);case 4:r=n.sent,a=r.val(),r.exists()&&(t=Object.entries(a).map((function(n){var e=(0,l.Z)(n,2),r=e[0],a=e[1];return(0,s.Z)({id:r},a)})),m(t),N(null===(i=t[t.length-1])||void 0===i?void 0:i.id)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),v.Notify.failure("Error fetching favorite teachers:",n.t0);case 12:return n.abrupt("return",(function(){e&&(0,h.S1)(e)}));case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[k.id]);var C=function(){var n=(0,t.Z)(c().mark((function n(){var e,r,a,t,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,h.IO)((0,h.iH)(p.Fs,"users/".concat(k.id,"/favorites")),(0,h.R)(),(0,h.TQ)(w),(0,h.Kk)(4)),n.next=3,(0,h.U2)(e);case 3:r=n.sent,a=r.val(),r.exists()&&(o=Object.entries(a).map((function(n){var e=(0,l.Z)(n,2),r=e[0],a=e[1];return(0,s.Z)({id:r},a)})),m((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(o))})),N(null===(t=o[o.length-1])||void 0===t?void 0:t.id));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,t.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Od)((0,h.iH)(p.Fs,"users/".concat(k.id,"/favorites/").concat(e)));case 3:m((function(n){return n.filter((function(n){return n.id!==e}))})),v.Notify.info("Deleted from favorites"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),v.Notify.failure("Error removing teacher from favorites:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsxs)(g,{children:[k.favorites&&o.map((function(n){return(0,j.jsx)("div",{children:(0,j.jsx)(x.Z,{removeFromFavorites:Z,favorite:e,teacher:n})},n.id)})),k.favorites&&k.favorites.length>o.length&&(0,j.jsx)(f.n,{onClick:C,children:"LOAD MORE"}),!k.favorites&&(0,j.jsx)("p",{children:"There no favorite teachers"})]})},y=function(){return(0,j.jsx)("section",{children:(0,j.jsx)(b,{favorite:!0})})}}}]);
//# sourceMappingURL=347.a029fcea.chunk.js.map