(this.webpackJsonpflipper=this.webpackJsonpflipper||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(10),r=n.n(a),s=(n(28),n(11)),i=(n(29),n(20)),l=n(23),u=n(12),x=n(22),j=n(21),b=n(5),d={yes:"outline-success",no:"outline-danger",ok:"outline-secondary"},h=-2;function k(t){return Object(b.jsxs)(u.a,{border:t.type||"secondary",children:[Object(b.jsx)(u.a.Body,{children:Object(b.jsx)(u.a.Text,{children:t.children})}),Object(b.jsx)(u.a.Footer,{children:Object(b.jsx)(l.a,{className:"justify-content-between",children:t.options})})]})}var O={MG:{A:[{text:"Die roll \u2264 Available Troops?",yes:1,no:-1},{text:"Cubes exceed all Active non-Base adversaries in any spaces?",yes:1,no:2},{text:"Assault.",ok:h},{text:"Train.",ok:h}],B:[{text:"Train.",ok:h}],C:[{text:"Train.",ok:h}],D:[{text:"Secure.",ok:h}],E:[{text:"Recon.",ok:h}],F:[{text:"Assault.",ok:h}]},CORP:{G:[{text:"Logistics.",ok:h}],H:[{text:"Logistics.",ok:h}],J:[{text:"Logistics.",ok:h}],K:[{text:"Secure.",ok:h}],L:[{text:"Recon.",ok:h}],M:[{text:"Assault.",ok:h}]},RD:{N:[{text:"Rally.",ok:h}],P:[{text:"Rally.",ok:h}],Q:[{text:"Rally.",ok:h}],R:[{text:"March.",ok:h}],S:[{text:"Attack.",ok:h}],T:[{text:"Campaign.",ok:h}]},CR:{U:[{text:"Rally.",ok:h}],V:[{text:"Rally.",ok:h}],W:[{text:"Rally.",ok:h}],X:[{text:"Travel.",ok:h}],Y:[{text:"Attack.",ok:h}],Z:[{text:"Campaign.",ok:h}]}},p=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],a=function(t){console.log(t),n.push(t),o(n)},r=Object(c.useState)(null),l=Object(s.a)(r,2),u=l[0],p=l[1],f=Object(c.useState)({}),y=Object(s.a)(f,2),v=y[0],g=y[1],m=Object(c.useState)(null),R=Object(s.a)(m,2),S=R[0],C=R[1],T=Object(c.useState)(0),A=Object(s.a)(T,2),w=A[0],F=A[1],L=function(){var t=v[u];t||(t=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=[t[n],t[e]];t[e]=c[0],t[n]=c[1]}return t}(Object.keys(O[u]))),F(0),C(t.pop()),v[u]=t,g(t)},B=function(t,e){var n=t[e];switch(a("".concat(u,"/").concat(S,"[").concat(w,"]: ")+"".concat(t.text," -> ").concat(e," (").concat(function(t){switch(t){case-1:return"next card";case h:return"stop";default:return"down ".concat(t," box(es)")}}(n),")")),n){case-1:L();break;case h:a("[".concat(u," STOP]")),p(null),C(0),F(0);break;default:!function(t){if(F(w+t),w>=O[u][S].length)throw new Error("Card ".concat(u,"/").concat(S," doesn't have ").concat(w," boxes."))}(n)}},M=null;if(u){var P;!function(){var t=O[u][S][w],e=[],n=function(){var n=P;t[n]&&e.push(Object(b.jsx)(i.a,{variant:d[n],onClick:function(e){return B(t,n)},children:n},n))};for(P in d)n();M=Object(b.jsxs)(k,{type:e.length>1?"primary":"secondary",options:e,children:[Object(b.jsxs)("b",{children:["(",u,"/",S,".",w,")"]})," ",t.text]})}()}else{var D=Object.keys(O).map((function(t){return Object(b.jsx)(i.a,{onClick:function(e){return a("[".concat(n=t," START]")),u=n,p(n),C(v[n]||O[n].length),void L();var n},children:t},t)}));M=Object(b.jsx)(k,{type:"primary",options:D,children:"Faction to act?"})}return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(j.a,{bg:"light",children:[Object(b.jsx)(j.a.Brand,{children:"Flipper"}),Object(b.jsx)(x.a,{className:"mr-auto",children:Object(b.jsx)(x.a.Link,{href:"https://github.com/blinks/flipper",children:"Source"})})]}),M," ",Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{children:n.map((function(t,e){return Object(b.jsx)("li",{children:t},e)}))})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),f()}},[[37,1,2]]]);
//# sourceMappingURL=main.aad5d716.chunk.js.map