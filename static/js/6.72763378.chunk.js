(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[6],{140:function(e,t,a){"use strict";var n=a(153),r=a.n(n),i=a(154),c=a(47),o=a(155),s=a.n(o),l=a(0);t.a=function(e){var t=Object(l.useState)(null),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(l.useState)(!1),d=Object(c.a)(u,2),m=d[0],h=d[1],p=Object(l.useState)(),j=Object(c.a)(p,2),b=j[0],f=j[1];return Object(l.useEffect)((function(){var t=!0;return h(!0),function(){var a=Object(i.a)(r.a.mark((function a(){var n,i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s.a.get(e);case 3:n=a.sent,i=n.data,t&&(h(!1),o(i)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),h(!1),f(a.t0.response.data);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()(),function(){t=!1}}),[e]),{data:n,isLoading:m,error:b}}},143:function(e,t,a){"use strict";t.a=function(){return function(e){return null!==e&&e.length>0?"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)):""}}},149:function(e,t,a){"use strict";var n=a(3),r=(a(0),a(110)),i=a(125),c=a(85),o=Object(r.a)((function(e){return{backdrop:{zIndex:999}}}));t.a=function(e){var t=e.open,a=o();return Object(n.jsx)(i.a,{className:a.backdrop,open:t,children:Object(n.jsx)(c.a,{color:"secondary"})})}},167:function(e,t,a){"use strict";var n=a(3),r=(a(0),a(110)),i=a(120),c=a(313),o=a(314),s=a(81),l=a(316),u=a(317),d=a(529),m=a(7),h=a(140),p=a(315),j=a(143),b=Object(r.a)({imageStyles:{height:200,objectFit:"contain"},elementalTypesButton:{margin:"20px 0"}});t.a=function(e){var t=e.data,a=b(),r=Object(m.f)().push,f=Object(h.a)(t.url),g=f.data,O=f.isLoading,v=f.error,x=Object(j.a)();return v?Object(n.jsx)(i.a,{xs:12,sm:6,lg:3,item:!0,children:Object(n.jsx)(c.a,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a,{variant:"h5",children:"Error during loading Pokemon, Try Again!"})})})}):Object(n.jsx)(i.a,{item:!0,xs:12,sm:6,lg:3,children:O?Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{variant:"text"}),Object(n.jsx)(p.a,{variant:"circle",width:40,height:40}),Object(n.jsx)(p.a,{variant:"rect",width:210,height:118})]}):null!==g&&Object(n.jsxs)(c.a,{children:[Object(n.jsxs)(l.a,{onClick:function(){return r("/pokemon/".concat(g.id))},children:[Object(n.jsx)(u.a,{className:a.imageStyles,component:"img",image:g.sprites.other["official-artwork"].front_default,title:x(g.name)}),Object(n.jsx)(o.a,{children:Object(n.jsxs)(i.a,{container:!0,justify:"space-around",children:[Object(n.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"h2",children:x(g.name)}),Object(n.jsxs)(s.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["#",g.id]})]})})]}),Object(n.jsx)(i.a,{justify:"space-around",container:!0,children:g.types.map((function(e){return Object(n.jsx)(d.a,{className:a.elementalTypesButton,variant:"contained",color:"secondary",children:e.type.name},e.type.name)}))})]})})}},313:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),c=(a(5),a(4)),o=a(80),s=a(6),l=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,u=void 0!==l&&l,d=Object(r.a)(e,["classes","className","raised"]);return i.createElement(o.a,Object(n.a)({className:Object(c.a)(a.root,s),elevation:u?8:1,ref:t},d))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},314:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),c=(a(5),a(4)),o=a(6),s=i.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,u=Object(r.a)(e,["classes","className","component"]);return i.createElement(l,Object(n.a)({className:Object(c.a)(a.root,o),ref:t},u))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},315:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),c=a(4),o=(a(5),a(17)),s=a(6),l=i.forwardRef((function(e,t){var a=e.animation,o=void 0===a?"pulse":a,s=e.classes,l=e.className,u=e.component,d=void 0===u?"span":u,m=e.height,h=e.variant,p=void 0===h?"text":h,j=e.width,b=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),f=Boolean(b.children);return i.createElement(d,Object(n.a)({ref:t,className:Object(c.a)(s.root,s[p],l,f&&[s.withChildren,!j&&s.fitContent,!m&&s.heightAuto],!1!==o&&s[o])},b,{style:Object(n.a)({width:j,height:m},b.style)}))}));t.a=Object(s.a)((function(e){return{root:{display:"block",backgroundColor:Object(o.b)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(l)},316:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),c=(a(5),a(4)),o=a(6),s=a(63),l=i.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,u=e.focusVisibleClassName,d=Object(r.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(s.a,Object(n.a)({className:Object(c.a)(o.root,l),focusVisibleClassName:Object(c.a)(u,o.focusVisible),ref:t},d),a,i.createElement("span",{className:o.focusHighlight}))}));t.a=Object(o.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},317:function(e,t,a){"use strict";var n=a(1),r=a(2),i=a(0),c=(a(5),a(4)),o=a(6),s=["video","audio","picture","iframe","img"],l=i.forwardRef((function(e,t){var a=e.children,o=e.classes,l=e.className,u=e.component,d=void 0===u?"div":u,m=e.image,h=e.src,p=e.style,j=Object(r.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==s.indexOf(d),f=!b&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},p):p;return i.createElement(d,Object(n.a)({className:Object(c.a)(o.root,l,b&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:f,src:b?m||h:void 0},j),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},528:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(0),a(110)),i=a(120),c=a(81),o=a(529),s=a(140),l=a(167),u=a(149),d=a(7),m=Object(r.a)({typographyStyles:{marginTop:"30px"},pokemonCardStyles:{marginTop:"20px",padding:"20px"},pageContainerStyles:{margin:"20px auto",padding:"0 20px",textAlign:"center"}});t.default=function(){var e=m(),t=Object(d.f)().push,a=Object(s.a)("https://pokeapi.co/api/v2/pokemon/?limit=8"),r=a.data,h=a.isLoading,p=a.error;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(i.a,{className:e.pageContainerStyles,justify:"center",container:!0,children:[Object(n.jsx)(i.a,{xs:12,item:!0,children:Object(n.jsx)(c.a,{color:"secondary",className:e.typographyStyles,variant:"h3",children:"Check each of Pokemon!"})}),Object(n.jsx)(i.a,{xs:12,item:!0,children:Object(n.jsx)(c.a,{className:e.typographyStyles,paragraph:!0,children:"This simple page is made for fans of Pokemon. There You can check Your favorites Pokemon, their types, id of Pokedex and more!"})}),h&&Object(n.jsx)(u.a,{open:h}),p&&Object(n.jsx)(i.a,{justify:"center",container:!0,children:Object(n.jsx)(c.a,{variant:"h3",children:"Error during loading Pokemons"})}),Object(n.jsx)(i.a,{className:e.pokemonCardStyles,spacing:1,justify:"center",container:!0,children:!h&&null!==r&&r.results.map((function(e){return Object(n.jsx)(l.a,{data:e},e.name)}))}),Object(n.jsx)(o.a,{variant:"outlined",color:"secondary",onClick:function(){return t("/pokemon")},size:"large",children:"Search for Pokemon"})]})})}}}]);
//# sourceMappingURL=6.72763378.chunk.js.map