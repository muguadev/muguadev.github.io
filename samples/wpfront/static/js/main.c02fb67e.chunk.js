(this["webpackJsonpcerbero-wp"]=this["webpackJsonpcerbero-wp"]||[]).push([[0],[,,,,,,,,,,function(n,e,t){},,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var a=t(0),c=t(1),o=t.n(c),i=t(4),s=t.n(i),r=(t(18),t(19),t(5)),l=t(8),d=t(2),u=function(n){var e=n.children,t=document.getElementById("modal");t||((t=document.createElement("div")).setAttribute("id","modal"),document.getElementById("root").appendChild(t));var a=document.createElement("div");return a.classList.add("modal"),Object(c.useEffect)((function(){return t.appendChild(a),function(){return t.removeChild(a)}})),Object(i.createPortal)(e,a)},p=(t(20),function(n){return n.replaceAll(/\[.*\]/g,"").replaceAll("<p></p>","")}),b=function(n,e){return"\n    <style>\n      ".concat(n,"\n    </style>\n    ").concat(e,"\n    ")},m=function(n){var e=n.close,t=n.page||{title:"",html:"",styles:""},c=t.title,o=t.html,i=t.styles;return Object(a.jsxs)(u,{children:[Object(a.jsx)("div",{className:"x",onClick:e}),Object(a.jsx)("h1",{className:"modal-title",children:c.toLowerCase()}),Object(a.jsx)("div",{className:"contents",dangerouslySetInnerHTML:{__html:b(i,p(o))}})]})},j=function(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(!1),i=Object(d.a)(o,2),s=i[0],r=i[1];return{open:t,close:s,openModal:function(){a(!0)},closeModal:function(){r(!0),a(!1)}}},f=t(9),v=t.n(f),h=t(11),g=function(){var n=Object(h.a)(v.a.mark((function n(e){var t,a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://editorialcerbero.com/wp-json/wp/v2/").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=(t(22),function(){var n=Object(c.useState)(!0),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(c.useState)({}),s=Object(d.a)(i,2),u=s[0],p=s[1],b=j(),f=b.open,v=b.openModal,h=b.closeModal,O=Object(c.useState)({}),x=Object(d.a)(O,2),y=x[0],N=x[1],k={all:"\n      h3 {\n        padding: 1em 0;\n      }\n      \n      li {\n        padding-top: 0.5em;\n        margin-left: 3em;\n      }\n      \n      ul {\n        padding-bottom: 1em;\n      }",contact:"\n    .HYPE_element {\n      margin: 0.5em 0;\n    }\n    \n    .HYPE_element > div {\n      margin-bottom: 0.5em;\n    }\n    \n    hr {\n      margin: 1.5em 0;\n    }\n    \n    div > strong {\n      display: block;\n      margin: 0.5em 0\n    }\n    \n    input[type='submit'] {\n      cursor: pointer;\n      padding: 0.5em;\n      border-radius: 0.5em;\n      background-color: rgb(77, 77, 179);\n      color: whitesmoke;\n      font-weight: bold;\n    }"},w={originals:"pages/2878",contact:"pages/11"},S=function(n){var e=n.target.getAttribute("data-option");y[e]?p(e):(document.querySelector("#root").classList.add("loading"),g(w[e]).then((function(n){document.querySelector("#root").classList.remove("loading"),N(Object(l.a)(Object(l.a)({},y),{},Object(r.a)({},e,{title:n.title.rendered,html:n.content.rendered,styles:"".concat(k.all," ").concat(k[e]||"")})))})).then((function(){return p(e)}))),v(),o(!t)};return Object(a.jsxs)("div",{className:"collapsible ".concat(t?"collapsed":""," noselect"),children:[Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("p",{onClick:S,"data-option":"originals",children:"Manuscritos"}),Object(a.jsx)("p",{onClick:S,"data-option":"contact",children:"Contacto"}),Object(a.jsx)("p",{children:"Mi cuenta"})]}),Object(a.jsx)("div",{className:"tab",onClick:function(){return o(!t)}}),f&&u?Object(a.jsx)(m,{close:h,page:y[u]}):null]})}),x=(t(23),function(n){var e=n.ids,t=Object(c.useState)(null),o=Object(d.a)(t,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){(function(n){var e="tags?include=".concat(n.join(","));return g(e).then((function(n){return n.map((function(n){return Object(a.jsx)("span",{className:"tag",children:n.name},n.id)}))}))})(e).then((function(n){return s(n)}))})),e&&0!==e.length?Object(a.jsx)("div",{className:"tags",children:i}):null}),y=function(n){var e=n.post,t=function(n){var e=function(n,e,t){var a=new Date(n);return{date:"".concat(a.toLocaleDateString("es-ES",e)),time:"".concat(a.toLocaleTimeString("es-ES",t))}}(n.timestamp,{weekday:"long",month:"2-digit",year:"numeric",day:"numeric"},{hour:"2-digit",minute:"2-digit"}),t=e.date,c=e.time;return Object(a.jsx)("div",{className:"timestamp",children:"Publicado el ".concat(t," a las ").concat(c)})},c=e.excerpt,o=e.title,i=e.tags,s=e.modified,r=e.content,l=j(),d=l.open,u=l.openModal,p=l.closeModal;return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsxs)("h2",{children:[o.rendered,Object(a.jsx)("div",{className:"fullscreen",onClick:u})]}),Object(a.jsx)("span",{className:"content",dangerouslySetInnerHTML:{__html:c.rendered}}),Object(a.jsx)(t,{timestamp:s}),Object(a.jsx)(x,{ids:i}),d?Object(a.jsx)(m,{close:p,page:{title:o.rendered,html:r.rendered}}):null]})},N=function(n){var e=n.collapsed,t=Object(c.useState)([]),o=Object(d.a)(t,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){var n;0===i.length&&(n=1,g("posts?page=".concat(n,"&per_page=").concat(5)).then((function(n){return n.map((function(n){return Object(a.jsx)(y,{post:n},n.id)}))}))).then((function(n){return s(n)}))})),Object(a.jsx)("div",{className:"feed ".concat(e?"collapsed":""),children:i})},k=(t(24),function(){var n=Object(c.useState)(!1),e=Object(d.a)(n,2),t=e[0],o=e[1];return Object(a.jsxs)("div",{className:"posts-container noselect",children:[Object(a.jsxs)("div",{className:"caption ".concat(t?"collapsed":""),children:["Posts m\xe1s recientes",Object(a.jsx)("div",{className:"toggle ".concat(t?"expand":""),onClick:function(){return o(!t)}})]}),Object(a.jsx)(N,{collapsed:t})]})}),w=t(12),S=(t(10),function(n){var e=n.title,t=n.first,o=n.last,i=n.service,s=n.excluding,r=n.selectors,l=n.callback,u=n.slided,p=Object(c.useState)([]),b=Object(d.a)(p,2),m=b[0],j=b[1],f=(r||[]).map((function(n){return n.value})),v=Object(c.useState)(f),h=Object(d.a)(v,2),O=h[0],x=h[1];Object(c.useEffect)((function(){if(0===m.length)return g(i).then((function(n){return(new DOMParser).parseFromString(n.content.rendered,"text/html")})).then((function(n){var e=(s||[]).map((function(n){return":not(.".concat(n,")")})).join("");j(m.concat(Array.from(n.querySelectorAll("li.type-product".concat(e)))))}))}));var y=function(n){var e=n.title,t=n.first,c=n.last;return Object(a.jsxs)("div",{className:"heading",children:[!t&&Object(a.jsx)("div",{className:"slider prev",onClick:l}),Object(a.jsx)("h1",{children:e}),!c&&Object(a.jsx)("div",{className:"slider next",onClick:l})]})},N=function(n){var e=n.values;return Object(a.jsxs)("div",{className:"selectors",children:[e.map((function(n){var e=n.value,t=n.label;return Object(a.jsx)("div",{className:"selector ".concat(e," ").concat(O.includes(e)?"on":""),onClick:function(){return n=e,void x(O.includes(n)?O.filter((function(e){return e!==n})):[].concat(Object(w.a)(O),[n]));var n},children:t},e)})),O.length!=f.length?Object(a.jsx)("div",{className:"clear",onClick:function(){return x(f)}}):null]})};return Object(a.jsxs)("div",{className:"showcase noselect ".concat(t?"first":""," ").concat(o?"last":""," ").concat(u?"slided":""),children:[Object(a.jsx)(y,{title:e,first:t,last:o}),r&&Object(a.jsx)(N,{values:r}),Object(a.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:function(n){return n.map((function(n){var e=n.querySelector(".product-image > a > .inner"),t=n.querySelector(".description"),a=(r||[]).filter((function(e){return n.classList.contains(e.value)})),c=O.length>0&&!a.some((function(n){var e=n.value;return O.includes(e)}));return'\n        <div class="product '.concat(a.map((function(n){return n.value})).join(" ")," ").concat(c?"hidden":"",'">\n          <div class="product-inner">\n            <div class="front">\n              ').concat(e.innerHTML,'\n            </div>\n            <div class="back">\n              ').concat(t.innerHTML,"\n            </div>\n          </div>\n        </div>")})).join(" ")}(m)}})]})}),C=function(){var n=Object(c.useState)(!0),e=Object(d.a)(n,2),t=e[0],o=e[1],i=function(){o(!t)};return Object(a.jsxs)("div",{className:"shop",children:[Object(a.jsx)(S,{title:"Nuestros libros",slided:!t,first:!0,service:"pages/37",excluding:["product_cat-merchandising"],selectors:[{value:"product_cat-fantasia",label:"Fantas\xeda"},{value:"product_cat-juvenil",label:"Juvenil"},{value:"product_cat-ciencia-ficcion",label:"Ciencia-Ficci\xf3n"},{value:"product_cat-terror",label:"Terror"}],callback:i}),Object(a.jsx)(S,{title:"Merchandising",slided:!t,last:!0,service:"pages/777",callback:i})]})};var M=function(){var n=j(),e=n.open,t=n.openModal,c=n.closeModal;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"info",onClick:t}),Object(a.jsx)(O,{}),Object(a.jsx)(k,{}),Object(a.jsx)(C,{}),Object(a.jsxs)("div",{className:"signature noselect",children:[Object(a.jsx)("b",{children:"m\xf9 gu\u0101"}),"\xa0perpetr\xf3 esta web"]}),e?Object(a.jsx)(m,{close:c,page:{title:"\xbfQu\xe9 es esto?",html:'\n  <div class="info-container noselect">\n    <div class="what">\n      Se trata de una aplicaci\xf3n Web semi-est\xe1tica que demuestra una interacci\xf3n b\xe1sica con WordPress.\n    </div>\n    <div class="bubble posts">\n      Esta es una lista con los posts m\xe1s recientes. En una aplicaci\xf3n real, podr\xeda a\xf1adirse <i>scroll</i> infinito, filtrado por etiquetas, b\xfasqueda por fecha, t\xedtulo, autor o texto, personalizaci\xf3n del\n      orden o del n\xfamero de posts recuperados cada vez&hellip;\n    </div>\n    <div class="bubble products">\n      Esta informaci\xf3n sale de las p\xe1ginas de los productos. En un caso real podr\xeda mostrarse la p\xe1gina de detalle o incluso interactuar con WooCommerce para disponer de la\n      funcionalidad de tienda online.\n    </div>\n    <div class="bubble menu">\n      Desde el men\xfa se abren p\xe1ginas est\xe1ticas de WordPress, superponi\xe9ndolas a la p\xe1gina principal de la aplicaci\xf3n.\n    </div>\n    <div class="bubble solution">\n      Una soluci\xf3n de este tipo tiene varias ventajas:\n      <ul>\n        <li>No tienes que cambiar la forma en la que gestionas tus contenidos, puedes seguir usando WordPress para a\xf1adir art\xedculos o productos.</li>\n        <li>No es necesario desarrollar un servidor para la aplicaci\xf3n que presenta los contenidos, por lo que no supone un coste adicional para alojarla.</li>\n        <li>Tienes absoluta libertad de decidir c\xf3mo quieres mostrar tus contenidos, sin las limitaciones que puedan imponer las plantillas de WordPress.</li>\n      </ul>\n    </div>\n  </div>\n',styles:'\n.modal {\n  background-color: transparent;\n}\n\n.modal-title, .what {\n  background-color: rgba(245, 245, 245, 0.9);\n}\n\n@keyframes fade-in {\n  from  { opacity: 0%; }\n  to    { opacity: 100%; }\n}\n\n.bubble {\n  position: absolute;\n  background-color: rgb(245, 222, 179);\n  text-align: justify;\n  font-size: 0.8em;\n  width: 15vw;\n  padding: 1.5em;\n  border-radius: 1em;\n  opacity: 0;\n  animation-name: fade-in;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n}\n\n.posts {\n  bottom: 5%;\n  left: 20%;\n  animation-delay: 1s;\n}\n\n.posts:before {\n  content: "";\n  position: absolute;\n  top: -45px;\n  left: 0;\n  height: 45px;\n  width: 40px;\n  border-bottom-left-radius: 50%;\n  background: transparent;\n  box-shadow: 0 20px 0 0 rgb(245, 222, 179);\n}\n\n\n.products {\n  top: 5%;\n  left: 20%;\n  animation-delay: 2s;\n}\n\n.products::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  right: -40px;\n  height: 45px;\n  width: 40px;\n  border-bottom-left-radius: 50%;\n  background: transparent;\n  box-shadow: -20px 0 0 0 rgb(245, 222, 179);\n}\n\n.modal .menu {\n  bottom: 5%;\n  left: 1em;\n  animation-delay: 3s;\n}\n\n.modal .menu::before {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: -40px;\n  height: 45px;\n  width: 40px;\n  border-bottom-right-radius: 50%;\n  background: transparent;\n  box-shadow: 20px 0 0 0 rgb(245, 222, 179);\n}\n\n.solution {\n  animation-delay: 4.5s;\n  left: 50%;\n  top: 40%;\n  width: 40%;\n}\n\n.solution li {\n  margin-left: 2em;\n  margin-top: 0.5em;\n}\n\n.info-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n'}}):null]})},E=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),o(n),i(n)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),E()}],[[25,1,2]]]);
//# sourceMappingURL=main.c02fb67e.chunk.js.map