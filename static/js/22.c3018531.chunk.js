(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{245:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},248:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(0),c=t.n(n),s=t(1),o=t.n(s),i=t(240),m=t.n(i),u=t(241),d={tag:u.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.m)(m()(a,n?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(l.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},249:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(245),c=t.n(n),s=t(0),o=t.n(s),i=t(1),m=t.n(i),u=t(240),d=t.n(u),f=t(241),b=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(f.h)(b,'Please use the prop "order"'),pull:Object(f.h)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:f.q,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach(function(a,l){var r=e[a];if(delete i[a],r||""===r){var n=!l;if(c()(r)){var s,o=n?"-":"-"+a+"-",u=N(n,a,r.size);m.push(Object(f.m)(d()(((s={})[u]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s)),t))}else{var b=N(n,a,r);m.push(b)}}}),m.length||m.push("col");var u=Object(f.m)(d()(a,m),t);return o.a.createElement(s,Object(l.a)({},i,{className:u}))};h.propTypes=g,h.defaultProps=E,a.a=h},250:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(243),c=t(244),s=t(0),o=t.n(s),i=t(1),m=t.n(i),u=t(240),d=t.n(u),f=t(241),b={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(Object(c.a)(t))),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,b=e.size,p=e.tag,g=e.innerRef,E=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+m,h=Object(f.m)(d()(c,{close:s},s||"btn",s||N,!!b&&"btn-"+b,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===p&&(p="a");var y=s?"Close":null;return o.a.createElement(p,Object(l.a)({type:"button"===p&&E.onClick?"button":void 0},E,{className:h,ref:g,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);p.propTypes=b,p.defaultProps={color:"secondary",tag:"button"},a.a=p},251:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(0),c=t.n(n),s=t(1),o=t.n(s),i=t(240),m=t.n(i),u=t(241),d={tag:u.q,inverse:o.a.bool,color:o.a.string,block:Object(u.h)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.block,o=e.body,i=e.inverse,d=e.outline,f=e.tag,b=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(u.m)(m()(a,"card",!!i&&"text-white",!(!s&&!o)&&"card-body",!!n&&(d?"border":"bg")+"-"+n),t);return c.a.createElement(f,Object(l.a)({},p,{className:g,ref:b}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},252:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(0),c=t.n(n),s=t(1),o=t.n(s),i=t(240),m=t.n(i),u=t(241),d={tag:u.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(m()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},o,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},253:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(0),c=t.n(n),s=t(1),o=t.n(s),i=t(240),m=t.n(i),u=t(241),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},269:function(e,a,t){"use strict";var l=t(33),r=t(242),n=t(0),c=t.n(n),s=t(1),o=t.n(s),i=t(240),m=t.n(i),u=t(241),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(l.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},486:function(e,a,t){"use strict";t.r(a);var l=t(85),r=t(86),n=t(89),c=t(87),s=t(88),o=t(0),i=t.n(o),m=t(248),u=t(249),d=t(251),f=t(253),b=t(252),p=t(450),g=t(269),E=t(250),N=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(b.a,null,i.a.createElement("h1",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New")),i.a.createElement("h2",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New")),i.a.createElement("h3",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New")),i.a.createElement("h4",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New")),i.a.createElement("h5",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New")),i.a.createElement("h6",null,"Heading ",i.a.createElement(p.a,{color:"secondary"},"New"))),i.a.createElement(g.a,null,i.a.createElement(E.a,{color:"primary",outline:!0},"Notifications ",i.a.createElement(p.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),i.a.createElement(u.a,{xs:"12",md:"6"},i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"contextual variations")),i.a.createElement(b.a,null,i.a.createElement(p.a,{className:"mr-1",color:"primary"},"Primary"),i.a.createElement(p.a,{className:"mr-1",color:"secondary"},"Secondary"),i.a.createElement(p.a,{className:"mr-1",color:"success"},"Success"),i.a.createElement(p.a,{className:"mr-1",color:"danger"},"Danger"),i.a.createElement(p.a,{className:"mr-1",color:"warning"},"Warning"),i.a.createElement(p.a,{className:"mr-1",color:"info"},"Info"),i.a.createElement(p.a,{className:"mr-1",color:"light"},"Light"),i.a.createElement(p.a,{className:"mr-1",color:"dark"},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"pill badges")),i.a.createElement(b.a,null,i.a.createElement(p.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),i.a.createElement(p.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),i.a.createElement(p.a,{className:"mr-1",color:"success",pill:!0},"Success"),i.a.createElement(p.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),i.a.createElement(p.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),i.a.createElement(p.a,{className:"mr-1",color:"info",pill:!0},"Info"),i.a.createElement(p.a,{className:"mr-1",color:"light",pill:!0},"Light"),i.a.createElement(p.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Badges")," ",i.a.createElement("small",null,"links")),i.a.createElement(b.a,null,i.a.createElement(p.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"success"},"Success"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"info"},"Info"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"light"},"Light"),i.a.createElement(p.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}]),a}(o.Component);a.default=N}}]);
//# sourceMappingURL=22.c3018531.chunk.js.map