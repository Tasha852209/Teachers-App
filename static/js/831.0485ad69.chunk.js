"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[831],{7305:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(3433),i=(r(2791),r(184)),s=function(e){var n=e.review;return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:n.reviewer_name}),(0,i.jsx)("p",{children:n.reviewer_rating}),(0,i.jsx)("p",{children:n.comment})]})},c=function(e){var n=e.level;return(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:n})})},a=r(2304),o=r(7119),u=function(e){var n=e.teacher,r=e.favorite,u=(0,o.aC)().user,l=Array.isArray(null===u||void 0===u?void 0:u.favorites)?u.favorites:[],d=l.some((function(e){return e.id===n.id}));return(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:n.avatar_url,alt:n.name,width:50})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Lessons online"}),(0,i.jsxs)("span",{children:["Lessons done: ",n.lessons_done]}),(0,i.jsxs)("span",{children:["Rating: ",n.rating]}),(0,i.jsxs)("span",{children:["Price/1hour: ",n.price_per_hour]}),(0,i.jsx)("span",{})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Languages"}),(0,i.jsxs)("h2",{children:[n.name," ",n.surname]}),(0,i.jsxs)("p",{children:["Speaks: ",n.languages.join(", ")]}),(0,i.jsxs)("p",{children:["Lesson Info: ",n.lesson_info]}),(0,i.jsx)("p",{children:n.experience})]}),(0,i.jsx)("div",{children:n.reviews.map((function(e,n){return(0,i.jsx)(s,{review:e},n)}))}),(0,i.jsx)("div",{children:n.levels.map((function(e,n){return(0,i.jsx)(c,{level:e},n)}))}),!r&&(0,i.jsx)("button",{onClick:function(){var e;e=l.some((function(e){return e.id===n.id}))?l.filter((function(e){return e.id!==n.id})):[].concat((0,t.Z)(l),[n]),(0,a.VO)(u.id,e)},children:d?"Remove from favorites":"Add to favorites"}),(0,i.jsx)("button",{children:"Book trial lesson"})]})}},3831:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(3433),i=r(1413),s=r(5861),c=r(9439),a=r(4687),o=r.n(a),u=r(2791),l=r(3268),d=r(2685),v=r(7305),f=r(184),h=function(e){var n=e.favorite,r=(0,u.useState)([]),a=(0,c.Z)(r,2),h=a[0],x=a[1],p=(0,u.useState)(null),j=(0,c.Z)(p,2),m=j[0],k=j[1],Z=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,s,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,d.IO)((0,d.iH)(l.Fs,"teachers"),(0,d.R)(),(0,d.TQ)(m),(0,d.Kk)(4)),e.next=3,(0,d.U2)(n);case 3:r=e.sent,s=r.val(),r.exists()&&(u=Object.entries(s).map((function(e){var n=(0,c.Z)(e,2),r=n[0],t=n[1];return(0,i.Z)({id:r},t)})),x((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(u))})),k(null===(a=u[u.length-1])||void 0===a?void 0:a.id));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var n,r,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,d.IO)((0,d.iH)(l.Fs,"teachers"),(0,d.R)(),(0,d.Kk)(4)),e.next=4,(0,d.U2)(n);case 4:r=e.sent,s=r.val(),r.exists()&&(a=Object.entries(s).map((function(e){var n=(0,c.Z)(e,2),r=n[0],t=n[1];return(0,i.Z)({id:r},t)})),x((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(a))})),k(a[a.length-1].id)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching teachers:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[h.map((function(e){return(0,f.jsx)(v.Z,{favorites:n,teacher:e},e.id)})),(0,f.jsx)("button",{onClick:function(){Z()},children:"LOAD MORE"})]})},x=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(h,{favorite:!1})})}}}]);
//# sourceMappingURL=831.0485ad69.chunk.js.map