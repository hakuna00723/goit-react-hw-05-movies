"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{510:function(t,e,n){n.d(e,{e:function(){return u}});var r="MovieList_item__tDivI",a="MovieList_list__yjDCC",c="MovieList_navLink__Y0vr9",o=n(87),i=n(184),u=function(t){var e=t.movies,n=t.location;return(0,i.jsx)("ul",{className:a,children:e.map((function(t){var e=t.id,a=t.title;return(0,i.jsx)("li",{className:r,children:(0,i.jsx)(o.OL,{className:c,to:"/movies/".concat(e),state:{from:n},children:a})},e)}))})}},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),o=n.n(c),i=n(791),u=n(292),s=n(689),p=n(510),l="Home_title__L087v",v=n(521),f=n(184),h=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],h=(0,s.TH)(),d=(0,i.useState)(!1),m=(0,a.Z)(d,2),_=m[0],g=m[1];return(0,i.useEffect)((function(){g(!0);var t=function(){var t=(0,r.Z)(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u._L)();case 3:e=t.sent,n=e.films,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:l,children:"Trending today"}),_?(0,f.jsx)(v.Z,{}):n.length>0&&(0,f.jsx)(p.e,{movies:n,location:h})]})}},292:function(t,e,n){n.d(e,{Ph:function(){return f},YJ:function(){return l},_L:function(){return s},sR:function(){return h},yo:function(){return v}});var r=n(861),a=n(757),c=n.n(a),o=n(243),i="8a1b3ad75f8d6d96df0b528cd3b953bf",u="https://api.themoviedb.org/3",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i,"&page=",1));case 3:return e=t.sent,n=e.data.results,r=n.map((function(t){return{title:t.title,id:t.id,overview:t.overview}})),t.abrupt("return",{films:r});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),p=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:"https://cdn-icons-png.flaticon.com/512/25/25634.png"},l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,s,l,v,f,h,d,m,_;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i));case 3:return n=t.sent,r=n.data,a=r.poster_path,s=r.title,l=r.release_date,v=r.overview,f=r.genres,h=r.vote_average,d=r.vote_count,m=r.popularity,_=r.original_title,t.abrupt("return",{poster_path:p(a),title:s,release_date:l,overview:v,genres:f&&f.map((function(t){return t.name})).join(" "),vote_average:h,vote_count:d,popularity:m,original_title:_});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,profile_path:p(a)}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.6e61f4a2.chunk.js.map