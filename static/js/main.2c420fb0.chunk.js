(this.webpackJsonpmyape=this.webpackJsonpmyape||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),s=c.n(n),r=c(14),i=c.n(r),d=(c(22),c(5)),l=c(4),o=c(15),j=c.n(o),b=c(16),h=c.n(b);c(42);var u=function(){var e=Object(n.useState)([[]]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],b=i[1];return Object(n.useEffect)((function(){o||s([[]]),h.a.get("https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=".concat(o)).then((function(e){var t=e.data.data;t&&s(j.a.chunk(t,5))})).catch((function(e){return console.log(e)}))}),[o]),Object(a.jsxs)("div",{className:"App container-fluid",children:[Object(a.jsx)("h1",{className:"mt-4 mb-2",children:"Music Search Engine"}),Object(a.jsx)("p",{className:"container",children:"This search engine will be able to register an artist's name and get trailers for his songs."}),Object(a.jsx)("input",Object(d.a)(Object(d.a)({},{onChange:function(e){var t=e.target.value;b(t)},value:o}),{},{className:"form-control w-50 m-2 container",placeholder:"Type name of artist"})),Object(a.jsx)("table",{style:{border:"1px solid black"},className:"container-fluid",children:Object(a.jsx)("tbody",{className:"container-fluid",children:c.map((function(e,t){return Object(a.jsx)("tr",{className:"container-fluid",children:e.map((function(e){var t=e.id,c=e.title,n=e.preview,s=e.artist,r=s.picture,i=s.name;return Object(a.jsx)("td",{style:{width:"15%"},children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:r,alt:c,className:"card-img-top",style:{width:"18rem"}}),Object(a.jsxs)("div",{className:"card-body",style:{height:"150px"},children:[" ",Object(a.jsx)("h5",{className:"card-title",children:i}),Object(a.jsx)("p",{className:"card-text",children:c})]}),Object(a.jsx)("div",{className:"card-footer bg-secondary",children:Object(a.jsx)("audio",{controls:!0,style:{width:"90%"},children:Object(a.jsx)("source",{src:n,type:"audio/ogg"})})})]})},t)}))},t)}))})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.2c420fb0.chunk.js.map