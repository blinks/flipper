(this.webpackJsonpflipper=this.webpackJsonpflipper||[]).push([[0],{146:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(17),r=n.n(a),s=(n(63),n(18)),i=(n(64),n(57)),l=n.n(i),u=n(40),j=n(58),x=n(20),b=n(42),d=n(41),h=n(5),k={yes:"outline-success",no:"outline-danger",ok:"outline-secondary"},p=-2;function O(t){return Object(h.jsxs)(x.a,{border:t.type||"secondary",children:[Object(h.jsx)(x.a.Body,{children:Object(h.jsx)(x.a.Text,{children:t.children})}),Object(h.jsx)(x.a.Footer,{children:Object(h.jsx)(j.a,{className:"justify-content-between",children:t.options})})]})}var f={MG:{A:[{text:"Die roll \u2264 Available Troops?",yes:1,no:-1},{text:"Cubes exceed all Active non-Base adversaries in any spaces?",yes:1,no:2},{text:"#### Assault\n- Select spaces using **Remove.**",ok:p},{text:"Train.",ok:p}],B:[{text:"Train.",ok:p}],C:[{text:"Train.",ok:p}],D:[{text:"Secure.",ok:p}],E:[{text:"Recon.",ok:p}],F:[{text:"Assault.",ok:p}]},CORP:{G:[{text:"Logistics.",ok:p}],H:[{text:"Logistics.",ok:p}],J:[{text:"Logistics.",ok:p}],K:[{text:"Secure.",ok:p}],L:[{text:"Recon.",ok:p}],M:[{text:"Assault.",ok:p}]},RD:{N:[{text:"Rally.",ok:p}],P:[{text:"Rally.",ok:p}],Q:[{text:"Rally.",ok:p}],R:[{text:"March.",ok:p}],S:[{text:"Attack.",ok:p}],T:[{text:"Campaign.",ok:p}]},CR:{U:[{text:"Rally.",ok:p}],V:[{text:"Rally.",ok:p}],W:[{text:"Rally.",ok:p}],X:[{text:"Travel.",ok:p}],Y:[{text:"Attack.",ok:p}],Z:[{text:"Campaign.",ok:p}]}},y=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(null),r=Object(s.a)(a,2),i=r[0],j=(r[1],Object(c.useState)({})),x=Object(s.a)(j,2),y=x[0],v=x[1],g=Object(c.useState)(null),m=Object(s.a)(g,2),R=m[0],C=m[1],S=Object(c.useState)(0),T=Object(s.a)(S,2),w=T[0],A=T[1],F=function(){var t=y[i];t||(t=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=[t[n],t[e]];t[e]=c[0],t[n]=c[1]}return t}(Object.keys(f[i]))),A(0),C(t.pop()),y[i]=t,v(t)},L=function(t,e){var c,a=t[e];switch(c="".concat(i,"/").concat(R,"[").concat(w,"] ")+"-> ".concat(e," (").concat(function(t){switch(t){case-1:return"next card";case p:return"stop";default:return"down ".concat(t," box(es)")}}(a),")"),console.log(c),n.push(c),o(n),a){case-1:F();break;case p:C(0),A(0);break;default:!function(t){if(A(w+t),w>=f[i][R].length)throw new Error("Card ".concat(i,"/").concat(R," doesn't have ").concat(w," boxes."))}(a)}},B=null;if(i){var M;!function(){var t=f[i][R][w],e=[],n=function(){var n=M;t[n]&&e.push(Object(h.jsx)(u.a,{variant:k[n],onClick:function(e){return L(t,n)},children:n},n))};for(M in k)n();B=Object(h.jsxs)(O,{type:e.length>1?"primary":"secondary",options:e,children:[Object(h.jsxs)("b",{children:["(",i,"/",R,".",w,")"]}),Object(h.jsx)(l.a,{children:t.text})]})}()}else{var D=Object.keys(f).map((function(t){return Object(h.jsx)(u.a,{onClick:function(e){return C(y[n=t]||f[n].length),void F();var n},children:t},t)}));B=Object(h.jsx)(O,{type:"primary",options:D,children:"Faction to act?"})}return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)(d.a,{bg:"light",children:[Object(h.jsx)(d.a.Brand,{children:"Flipper"}),Object(h.jsx)(b.a,{className:"mr-auto",children:Object(h.jsx)(b.a.Link,{href:"https://github.com/blinks/flipper",children:"Source"})})]}),B," ",Object(h.jsx)("hr",{}),Object(h.jsx)("ul",{children:n.map((function(t,e){return Object(h.jsx)("li",{children:t},e)}))})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),v()},63:function(t,e,n){},64:function(t,e,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.bf919e37.chunk.js.map