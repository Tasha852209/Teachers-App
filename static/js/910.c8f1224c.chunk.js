"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{7305:function(e,n,r){r.d(n,{Z:function(){return u}});var s=r(3433),t=(r(2791),r(184)),i=function(e){var n=e.review;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:n.reviewer_name}),(0,t.jsx)("p",{children:n.reviewer_rating}),(0,t.jsx)("p",{children:n.comment})]})},c=function(e){var n=e.level;return(0,t.jsx)("div",{children:(0,t.jsx)("span",{children:n})})},a=r(2304),o=r(7119),u=function(e){var n=e.teacher,r=(0,o.aC)().user,u=Array.isArray(null===r||void 0===r?void 0:r.favorites)?r.favorites:[],l=u.some((function(e){return e.id===n.id}));return(0,t.jsxs)("section",{children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:n.avatar_url,alt:n.name,width:50})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Lessons online"}),(0,t.jsxs)("span",{children:["Lessons done: ",n.lessons_done]}),(0,t.jsxs)("span",{children:["Rating: ",n.rating]}),(0,t.jsxs)("span",{children:["Price/1hour: ",n.price_per_hour]}),(0,t.jsx)("span",{})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Languages"}),(0,t.jsxs)("h2",{children:[n.name," ",n.surname]}),(0,t.jsxs)("p",{children:["Speaks: ",n.languages.join(", ")]}),(0,t.jsxs)("p",{children:["Lesson Info: ",n.lesson_info]}),(0,t.jsx)("p",{children:n.experience})]}),(0,t.jsx)("div",{children:n.reviews.map((function(e,n){return(0,t.jsx)(i,{review:e},n)}))}),(0,t.jsx)("div",{children:n.levels.map((function(e,n){return(0,t.jsx)(c,{level:e},n)}))}),(0,t.jsx)("button",{onClick:function(){var e;e=u.some((function(e){return e.id===n.id}))?u.filter((function(e){return e.id!==n.id})):[].concat((0,s.Z)(u),[n]),(0,a.VO)(r.id,e)},children:l?"Remove from favorites":"Add to favorites"}),(0,t.jsx)("button",{children:"Book trial lesson"})]})}},1910:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var s=r(3433),t=r(1413),i=r(5861),c=r(9439),a=r(4687),o=r.n(a),u=r(2791),l=r(3268),d=r(2685),f=r(7305),h=r(7119),v=r(184),p=function(){var e=(0,u.useState)([]),n=(0,c.Z)(e,2),r=n[0],a=n[1],p=(0,u.useState)(null),x=(0,c.Z)(p,2),j=x[0],m=x[1],k=(0,h.aC)().user,w=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(r[r.length-1].id);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=(0,u.useRef)(!0);return(0,u.useEffect)((function(){if(Z.current)Z.current=!1;else{var e=function(){var e=(0,i.Z)(o().mark((function e(){var n,r,i,u,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[(0,d.R)(),(0,d.Kk)(4)],j&&n.push((0,d.TQ)(j)),e.prev=2,r=d.IO.apply(void 0,[(0,d.iH)(l.Fs,"users/".concat(k.id,"/favorites"))].concat(n)),e.next=6,(0,d.U2)(r);case 6:i=e.sent,u=i.val(),i.exists()&&(f=Object.entries(u).map((function(e){var n=(0,c.Z)(e,2),r=n[0],s=n[1];return(0,t.Z)({id:r},s)})),a((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(f))}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error("Error fetching teachers:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j,k.id]),(0,v.jsxs)("div",{children:[r.map((function(e){return(0,v.jsx)(f.Z,{teacher:e},e.id)})),(0,v.jsx)("button",{onClick:function(){w()},children:"LOAD MORE"})]})},x=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(p,{})})}}}]);
//# sourceMappingURL=910.c8f1224c.chunk.js.map