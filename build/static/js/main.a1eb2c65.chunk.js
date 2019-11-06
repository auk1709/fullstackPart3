(window.webpackJsonppart2=window.webpackJsonppart2||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),i=n(14),u=n(2),l=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return a.a.createElement("li",{className:"note"},e.content,a.a.createElement("button",{onClick:n},r))},f=n(3),m=n.n(f),s=function(){var t=m.a.get("/api/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},p=function(t){return m.a.post("/api/notes",t).then(function(t){return t.data})},d=function(t,e){return m.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})},b=function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var O=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)},g=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),f=Object(u.a)(c,2),m=f[0],g=f[1],E=Object(r.useState)(!0),h=Object(u.a)(E,2),j=h[0],y=h[1],w=Object(r.useState)(null),S=Object(u.a)(w,2),k=S[0],P=S[1];Object(r.useEffect)(function(){s().then(function(t){o(t)})},[]),console.log("render",n.length,"notes");var D=j?n:n.filter(function(t){return t.important}),N=function(t){var e=n.find(function(e){return e.id===t}),r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,{important:void 0!==e?!e.important:void 0});d(t,r).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(e){P("Note was already deleted from server"),setTimeout(function(){P(null)},5e3),o(n.filter(function(e){return e.id!==t}))})};return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(O,{message:k}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return y(!j)}},"show ",j?"important":"all")),a.a.createElement("ul",null,D.map(function(t){return a.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return N(t.id)}})})),a.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault();var e={id:n.length+1,content:m,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then(function(t){o(n.concat(t)),g("")})}},a.a.createElement("input",{type:"text",value:m,onChange:function(t){console.log(t.target.value),g(t.target.value)}}),a.a.createElement("button",{type:"submit"},"save")),a.a.createElement(b,null))};n(37);c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a1eb2c65.chunk.js.map