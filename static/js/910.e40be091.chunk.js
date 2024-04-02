"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{1986:function(n,e,r){r.d(e,{Z:function(){return v}});var t,i,s=r(3433),a=r(249),o=(r(2791),r(184)),c=function(n){var e=n.review;return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"grey-text-color",children:e.reviewer_name}),(0,o.jsxs)("p",{children:[(0,o.jsx)(a.Z,{className:"star",id:"star"}),e.reviewer_rating]}),(0,o.jsx)("p",{children:e.comment})]})},l=function(n){var e=n.level;return(0,o.jsx)("div",{children:(0,o.jsx)("span",{children:e})})},d=r(2304),p=r(7119),x=r(168),u=r(1572).default,h=u.div(t||(t=(0,x.Z)(["\n  display: flex;\n  gap: 48px;\n\n  img {\n    width: 96px;\n    border-radius: 50%;\n    border: 1 solid #fbe9ba;\n    box-shadow: 0 0 0px 9px #ffff, 0 0 0px 12px #fbe9ba;\n  }\n  line-height: 1.5;\n  color: var(--text-color-black);\n  font-weight: 500;\n\n  .languages {\n    text-decoration: underline;\n    margin-bottom: 8px;\n  }\n\n  .grey-text-color {\n    color: #8a8a89;\n  }\n  .all-content {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n  .card-main-content {\n    position: relative;\n    padding-top: 4px;\n  }\n\n  .statistics-favorites {\n    position: absolute;\n    top: 0;\n    left: 192px;\n    display: flex;\n    align-items: center;\n  }\n  .statistics {\n    display: flex;\n    align-items: center;\n    font-weight: 500;\n  }\n\n  .info {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 16px;\n  }\n  .reviews {\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n  }\n\n  .lessons-online,\n  .rating {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n  .fill-heart {\n    fill: var(--primary-orange);\n    color: var(--primary-orange);\n    stroke: var(--primary-orange);\n    height: 26px;\n    width: 26px;\n  }\n  .heart-button {\n    padding-left: 0;\n    margin-left: 64px;\n    background: transparent;\n    border: none;\n    /* height: 26px;\n    width: 26px; */\n  }\n  .transparent-heart {\n    height: 26px;\n    width: 26px;\n  }\n  .ellipse-container {\n    padding: 13px;\n    position: relative;\n  }\n  .ellipse {\n    position: absolute;\n    z-index: 100;\n    top: 18px;\n    left: 85px;\n    height: 12px;\n    width: 12px;\n  }\n  .book-open {\n    height: 16px;\n    width: 16px;\n  }\n  .star {\n    height: 16px;\n    width: 16px;\n  }\n  .price {\n    color: #38cd3e;\n  }\n  .item {\n    font-size: 16px;\n\n    border-right: 1px solid rgba(18, 20, 23, 0.2);\n    :not(:last-child) {\n      margin-right: 16px;\n    }\n    padding-right: 16px;\n  }\n"]))),f=u.button(i||(i=(0,x.Z)(["\n  height: 60px;\n  width: 232px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"]))),v=function(n){var e=n.teacher,r=n.favorite,t=n.removeFromFavorites,i=(0,p.aC)().user,x=Array.isArray(null===i||void 0===i?void 0:i.favorites)?i.favorites:[],u=x.some((function(n){return n.id===e.id}));return(0,o.jsxs)(h,{children:[(0,o.jsxs)("div",{className:"ellipse-container",children:[(0,o.jsx)(a.Z,{className:"ellipse",id:"ellipse"}),(0,o.jsx)("img",{src:e.avatar_url,alt:e.name})]}),(0,o.jsxs)("div",{className:"all-content",children:[(0,o.jsxs)("div",{className:"card-main-content",children:[(0,o.jsxs)("div",{className:"statistics-favorites",children:[(0,o.jsxs)("div",{className:"statistics",children:[(0,o.jsxs)("span",{className:"lessons-online item",children:[(0,o.jsx)(a.Z,{className:"book-open",id:"book-open"}),(0,o.jsx)("span",{children:"Lessons online"})]}),(0,o.jsxs)("span",{className:"item",children:["Lessons done: ",e.lessons_done]}),(0,o.jsxs)("span",{className:"rating item",children:[(0,o.jsx)(a.Z,{className:"star",id:"star"}),(0,o.jsxs)("span",{children:["Rating: ",e.rating]})]}),(0,o.jsxs)("span",{className:"item",children:["Price/1hour:",(0,o.jsxs)("span",{className:"price",children:[" ",e.price_per_hour,"$"]})]})]}),i&&!r&&(0,o.jsx)("button",{className:"heart-button",onClick:function(){var n;n=x.some((function(n){return n.id===e.id}))?x.filter((function(n){return n.id!==e.id})):[].concat((0,s.Z)(x),[e]),(0,d.VO)(i.id,n)},children:u?(0,o.jsx)(a.Z,{id:"fill-heart",className:"fill-heart"}):(0,o.jsx)(a.Z,{id:"heart",className:"transparent-heart"})}),!i&&!r&&(0,o.jsx)("button",{className:"heart-button",onClick:function(){return alert("Please register or sign in")},children:u?(0,o.jsx)(a.Z,{id:"fill-heart",className:"fill-heart"}):(0,o.jsx)(a.Z,{id:"heart",className:"transparent-heart"})}),i&&r&&(0,o.jsx)("button",{className:"heart-button",onClick:function(){return t(e.id)},children:(0,o.jsx)(a.Z,{id:"fill-heart",className:"fill-heart"})})]}),(0,o.jsx)("p",{className:"grey-text-color",children:"Languages"}),(0,o.jsxs)("h2",{children:[e.name," ",e.surname]}),(0,o.jsxs)("div",{className:"info",children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"grey-text-color ",children:"Speaks: "}),(0,o.jsx)("span",{className:"languages",children:e.languages.join(", ")})]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"grey-text-color",children:"Lesson Info: "}),e.lesson_info]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"grey-text-color",children:"Conditions: "}),e.conditions.join(" ")]})]}),(0,o.jsx)("p",{className:"experience",children:e.experience})]}),(0,o.jsxs)("div",{className:"other-content",children:[(0,o.jsx)("div",{className:"reviews",children:e.reviews.map((function(n,e){return(0,o.jsx)(c,{review:n},e)}))}),(0,o.jsx)("div",{className:"levels",children:e.levels.map((function(n,e){return(0,o.jsx)(l,{level:n},e)}))}),(0,o.jsx)(f,{children:"Book trial lesson"})]})]})]})}},9337:function(n,e,r){r.d(e,{L:function(){return o},n:function(){return c}});var t,i,s=r(168),a=r(1572),o=a.default.div(t||(t=(0,s.Z)(["\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"]))),c=a.default.button(i||(i=(0,s.Z)(["\n  height: 60px;\n  width: 183px;\n  line-height: 1.375;\n  font-size: 18px;\n  font-weight: bold;\n  color: var(--text-color-black);\n  border: none;\n  border-radius: 12px;\n  background-color: var(--primary-orange);\n  &:hover,\n  &:active {\n    background-color: var(--secondary-orange);\n  }\n"])))},1910:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t=r(3433),i=r(1413),s=r(5861),a=r(9439),o=r(4687),c=r.n(o),l=r(2791),d=r(3268),p=r(2685),x=r(1986),u=r(7119),h=r(9337),f=r(184),v=function(n){var e=n.favorite,r=(0,l.useState)([]),o=(0,a.Z)(r,2),v=o[0],m=o[1],g=(0,l.useState)(null),j=(0,a.Z)(g,2),b=j[0],N=j[1],k=(0,u.aC)().user;(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(c().mark((function n(){var e,r,t,s,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=(0,p.IO)((0,p.iH)(d.Fs,"users/".concat(k.id,"/favorites")),(0,p.R)(),(0,p.Kk)(4)),n.next=4,(0,p.U2)(e);case 4:r=n.sent,t=r.val(),r.exists()&&(o=Object.entries(t).map((function(n){var e=(0,a.Z)(n,2),r=e[0],t=e[1];return(0,i.Z)({id:r},t)})),m(o),N(null===(s=o[o.length-1])||void 0===s?void 0:s.id)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Error fetching favorite teachers:",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[k.id]);var w=function(){var n=(0,s.Z)(c().mark((function n(){var e,r,s,o,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,p.IO)((0,p.iH)(d.Fs,"users/".concat(k.id,"/favorites")),(0,p.R)(),(0,p.TQ)(b),(0,p.Kk)(4)),n.next=3,(0,p.U2)(e);case 3:r=n.sent,s=r.val(),r.exists()&&(l=Object.entries(s).map((function(n){var e=(0,a.Z)(n,2),r=e[0],t=e[1];return(0,i.Z)({id:r},t)})),m((function(n){return[].concat((0,t.Z)(n),(0,t.Z)(l))})),N(null===(o=l[l.length-1])||void 0===o?void 0:o.id));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,s.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Od)((0,p.iH)(d.Fs,"users/".concat(k.id,"/favorites/").concat(e)));case 3:m((function(n){return n.filter((function(n){return n.id!==e}))})),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Error removing teacher from favorites:",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[k.favorites&&v.map((function(n){return(0,f.jsx)("div",{children:(0,f.jsx)(x.Z,{removeFromFavorites:Z,favorite:e,teacher:n})},n.id)})),k.favorites&&k.favorites.length>v.length&&(0,f.jsx)(h.n,{onClick:w,children:"LOAD MORE"}),!k.favorites&&(0,f.jsx)("p",{children:"There no favorite teachers"})]})},m=function(){return(0,f.jsx)("section",{children:(0,f.jsx)(v,{favorite:!0})})}}}]);
//# sourceMappingURL=910.e40be091.chunk.js.map