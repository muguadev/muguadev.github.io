(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{16:function(e,a,s){},17:function(e,a,s){},18:function(e,a,s){"use strict";s.r(a);var n=s(0),t=s(1),r=s.n(t),c=s(9),o=s.n(c),i=(s(16),s(7),s(17),function(e){var a=e.children;return Object(n.jsx)("div",{className:"content",children:a})}),l=function(e){var a=e.children;return Object(n.jsx)("div",{className:"cover",children:a})},d=s(4),u=s(3),j=s(10),p=(s(8),function(e){var a=e.id,s=e.children,t=e.turned,r=e.containerClass,c="container ".concat(r," turnable ").concat(t?"turned":""),o=Object(u.a)(s,2),i=o[0],l=o[1];return Object(n.jsxs)("div",{className:c,id:a,children:[Object(n.jsx)("div",{className:"front",children:i}),Object(n.jsx)("div",{className:"back",children:l})]})}),b=function(e){return e.type===l},m=function(e){var a=e.children,s=function(e){var a=e.id;return Object(n.jsx)("div",{id:a,className:"container empty"})},c=function(e){return e.type===s},o=function(e){var a=e.page;return c(a)?a:Object(n.jsx)(m,{id:"previous",page:a,turned:!0},"previous")},i=function(e){var a=e.page;return c(a)?a:Object(n.jsx)(m,{id:"next",page:a,turned:!1},"next")},m=function(e){var a=e.page,s=e.id,t=e.turned;return Object(n.jsx)("div",{id:s,className:"container clickable ".concat(b(a)?"cover":"page"," ").concat(t?"turned":""),children:a})},h=r.a.Children.toArray(a),g=h.slice(-1)[0],x=b(h[0])?[h[0],Object(n.jsx)(l,{})]:[h[0]],O=b(g)?[Object(n.jsx)(l,{}),g]:[g],v=h.slice(1,-1),f=[Object(n.jsx)(s,{id:"previous"})].concat(x,Object(j.a)(v),O,[Object(n.jsx)(s,{id:"next"})]),N=Object(t.useState)({current:0,flipped:!1,mustFlip:!1}),q=Object(u.a)(N,2),y=q[0],k=q[1],A=y.current,z=y.flipped,T=y.mustFlip,S=f.slice(A,A+4),F=Object(u.a)(S,4),C=F[0],E=F[1],J=F[2],L=F[3];return Object(t.useEffect)((function(){T&&k(Object(d.a)(Object(d.a)({},y),{},{flipped:!z,mustFlip:!1}))}),[k,y,z,T]),Object(n.jsxs)("div",{className:"book",onClick:function(e){var a=e.target.closest(".container").id;"next"===a&&!z||"previous"===a&&z?k(Object(d.a)(Object(d.a)({},y),{},{mustFlip:!0})):"next"===a&&A<h.length?k({current:A+2,flipped:!1,mustFlip:!0}):"previous"===a&&A>0&&k({current:A-2,flipped:!0,mustFlip:!0})},children:[Object(n.jsx)(o,{page:C}),Object(n.jsx)(i,{page:L}),Object(n.jsx)(p,{id:"flippable",containerClass:b(E)?"cover":"page",turned:z,children:[E,J]},"page-".concat(A.toString().padStart(4,"0")))]})},h=function(e){var a=e.children;return 0===a.length?Object(n.jsx)("div",{className:"desk noselect empty",children:Object(n.jsx)("p",{children:"No hay nada que mostrar"})}):Object(n.jsx)("div",{className:"desk noselect",children:Object(n.jsx)(m,{children:a})})};h.defaultProps={children:[]};var g=h,x=s.p+"static/media/tuga.9db72ee8.png",O=s.p+"static/media/bye.bdc0f11b.png",v=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g,{children:[Object(n.jsxs)(l,{children:[Object(n.jsx)("img",{src:x,className:"front-cover"}),Object(n.jsx)("h1",{className:"book-title",children:"Tuga"}),Object(n.jsx)("h3",{className:"book-author",children:"Jorge Sosa"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("p",{className:"opening broken",children:"La tortuga es un animal que se caracteriza por tener, en su parte exterior, un caparaz\xf3n y, en su parte interior, una o m\xe1s tortugas. Estos dos (o m\xe1s) elementos constituyen uno de los animales m\xe1s prodigiosos de la creaci\xf3n. La tortuga puede, dados el tama\xf1o y constituci\xf3n adecuados, soportar sobre su espalda toda una variedad de objetos: una insustancial brizna de hierba, un"}),Object(n.jsx)("span",{className:"footer odd",children:"1"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("p",{className:"trailing",children:"caracol audaz, un halc\xf3n perezoso, un halc\xf3n hambriento, un halc\xf3n disfrazado de caracol, o incluso cuatro elefantes que a su vez soporten en sus lomos el peso del mundo."}),Object(n.jsx)("p",{className:"broken",children:"El momento en que la peque\xf1a Ati encontr\xf3 a su primera tortuga fue, por todo esto, el momento m\xe1s feliz de sus vidas. Si no hab\xe9is visto nunca la cara de una (o m\xe1s) tortugas felices, os ayudar\xe1 saber que, cuando una tortuga est\xe1 verdadera y exultantemente"}),Object(n.jsx)("span",{className:"footer even",children:"2"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header title",children:"Tuga"}),Object(n.jsx)("p",{className:"trailing",children:"contenta, loca de alegr\xeda, su gesto es el de un canto rodado que por fin para un momento en la orilla a descansar. Si tampoco hab\xe9is visto nunca ese gesto, fijaos en \xe9l la pr\xf3xima vez que vay\xe1is al campo con Ati."}),Object(n.jsx)("p",{className:"broken",children:"La peque\xf1a Ati es un animal que se caracteriza por tener, en su parte exterior, una personita con menos a\xf1os que orejas y, en su parte interior, una o m\xe1s\u2026 Atis. El encuentro entre los dos seres m\xe1s prodigiosos del mundo se produjo,"}),Object(n.jsx)("span",{className:"footer odd",children:"3"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header author",children:"Jorge Sosa"}),Object(n.jsx)("p",{className:"broken",children:"como todos los hechos ins\xf3litos de la historia, cuando no hab\xeda nadie delante para grabarlo.  La ni\xf1a inici\xf3 la conversaci\xf3n, invitando a Tuga a adoptar ese nombre y a ser su mejor amiga para siempre, durante el resto de la tarde, o hasta que alguna se quedara dormida; lo que llegara antes. Tuga, con gesto de aquiescencia c\xf3mplice, consinti\xf3 a condici\xf3n de que cualquiera de las dos que hubiera credico m\xe1s que la otra se comprometiera a llevar a su amiga a cuestas para"}),Object(n.jsx)("span",{className:"footer even",children:"4"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header title",children:"Tuga"}),Object(n.jsx)("p",{className:"trailing",children:"siempre, durante el resto de la tarde, o hasta que se cansara; lo que llegara antes."}),Object(n.jsx)("p",{children:"Si nunca hab\xe9is visto el gesto de aquiescencia c\xf3mplice de una (o m\xe1s) tortugas, os ayudar\xe1 saber que es como el del canto rodado, s\xf3lo que esta vez ha parado en la orilla izquierda."}),Object(n.jsx)("p",{className:"broken",children:"El resto de la tarde dur\xf3, como siempre, menos de lo que Ati hubiera querido. Jugaron a carreras (siempre ganaban las dos, porque Ati llevaba a Tuga)."}),Object(n.jsx)("span",{className:"footer odd",children:"5"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header author",children:"Jorge Sosa"}),Object(n.jsx)("p",{className:"trailing",children:"Intentaron el escondite, pero a Ati no se le daba bien meter la cabeza en el cuerpo. Luego hablaron largo y tendido, y se contaron historias de ni\xf1as y tortugas y de pap\xe1s tortuga y de pap\xe1s persona. Y luego se acab\xf3 el resto de la tarde, y Ati tuvo que volver a su casa, lejos de all\xed."}),Object(n.jsx)("p",{className:"broken",children:"En otras circunstancias, Ati habr\xeda hecho lo imposible para solucionar la duraci\xf3n de las tardes. Habr\xeda pensado que, ya que las cosas buenas marcan"}),Object(n.jsx)("span",{className:"footer even",children:"6"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header title",children:"Tuga"}),Object(n.jsx)("p",{className:"trailing",children:"siempre la frontera entre la tarde y el resto, el comienzo del resto de la tarde deber\xeda adelantarse para que hubiera menos tarde y m\xe1s resto, y por tanto m\xe1s cosas buenas. Como a Ati le bastaba con un dedo para contar su edad, no se entretuvo en estos debates est\xe9riles y se limit\xf3 a despedirse emocionada de Tuga."}),Object(n.jsx)("p",{className:"broken",children:"En otras circunstancias, Tuga habr\xeda hecho lo imposible para retener a Ati como amiga inseparable. Habr\xeda hecho"}),Object(n.jsx)("span",{className:"footer odd",children:"7"})]}),Object(n.jsxs)(i,{children:[Object(n.jsx)("span",{className:"header author",children:"Jorge Sosa"}),Object(n.jsx)("p",{className:"trailing",children:"pucheros, ojitos, habr\xeda berreado o pataleado; habr\xeda seguido a Ati corriendo hasta el fin del mundo. Como Tuga era una tortuga, se limit\xf3 a contemplar la marcha de Ati con un gesto cargado de a\xf1oranza agradecida (pensad en un canto rodado sec\xe1ndose al sol)."}),Object(n.jsx)("p",{children:"As\xed fue como Tuga lleg\xf3 a ser el prodigioso anima que ten\xeda, en su parte exterior, un caparaz\xf3n y, en su parte interior, una o m\xe1s tortugas y una \xfanica, maravillosa, Ati."}),Object(n.jsx)("span",{className:"footer even",children:"8"})]}),Object(n.jsx)(l,{children:Object(n.jsx)("img",{src:O,className:"back-cover"})})]})})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(a){var s=a.getCLS,n=a.getFID,t=a.getFCP,r=a.getLCP,c=a.getTTFB;s(e),n(e),t(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),f()},7:function(e,a,s){},8:function(e,a,s){}},[[18,1,2]]]);
//# sourceMappingURL=main.efaac954.chunk.js.map