(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{33:function(e,t,a){"use strict";var n=a(6),c=a(7),r=a(9),i=a(8),l=a(10),s=a(0),m=a.n(s);t.a=function(e){return function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return m.a.createElement(e,this.props)}}]),a}(m.a.Component)}},34:function(e,t,a){e.exports=a.p+"static/media/portrait.eb197767.jpg"},35:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children;return c.a.createElement("h1",{className:"page__title"},c.a.Children.toArray(t))}},36:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){var t=e.children;return c.a.createElement("h2",{className:"page__subtitle"},c.a.Children.toArray(t))}},37:function(e,t,a){"use strict";var n=a(6),c=a(7),r=a(9),i=a(8),l=a(10),s=a(0),m=a.n(s),o=a(12),u=a.n(o),v=function(e){var t=e.onClick,a=e.close,n=u()({"menu-btn":!0,close:a});return m.a.createElement("div",{className:n,onClick:t},m.a.createElement("div",{className:"menu-btn__item"}),m.a.createElement("div",{className:"menu-btn__item"}),m.a.createElement("div",{className:"menu-btn__item"}))},d=a(34),E=a.n(d),b=function(){return m.a.createElement("div",{className:"menu__brand"},m.a.createElement("img",{src:E.a,alt:"My portrait",className:"menu__brand-img"}))},f=a(60),_=a(5),h=function(){var e={className:"menu__nav-link",activeClassName:"active"};return m.a.createElement("ul",{className:"menu__nav"},m.a.createElement("li",{className:"menu__nav-item"},m.a.createElement(f.a,Object.assign({exact:!0,to:_.c},e),"Home")),m.a.createElement("li",{className:"menu__nav-item"},m.a.createElement(f.a,Object.assign({to:_.a},e),"About Me")),m.a.createElement("li",{className:"menu__nav-item"},m.a.createElement(f.a,Object.assign({to:_.d},e),"My Work")),m.a.createElement("li",{className:"menu__nav-item"},m.a.createElement(f.a,Object.assign({to:_.b},e),"How To Reach Me")))},p=function(e){var t=e.active,a=u()({menu:!0,active:t});return m.a.createElement("section",{className:a},m.a.createElement(b,null),m.a.createElement(h,null))};t.a=function(e){return function(t){function a(){var e;return Object(n.a)(this,a),(e=Object(r.a)(this,Object(i.a)(a).call(this))).handleMenuBtnClick=function(){e.setState(function(e){return{isSidenavActive:!e.isSidenavActive}})},e.state={isSidenavActive:!1},e}return Object(l.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){document.body.classList.remove("menu-active")}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(v,{onClick:this.handleMenuBtnClick,close:this.state.isSidenavActive}),m.a.createElement(p,{active:this.state.isSidenavActive}),m.a.createElement(e,this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.isSidenavActive?document.body.classList.add("menu-active"):document.body.classList.remove("menu-active"),null}}]),a}(m.a.Component)}},39:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=function(){return c.a.createElement("footer",{role:"contentinfo",className:"footer"},"Copyright \xa9 2019")};t.a=function(e){var t=e.children;return c.a.createElement(c.a.Fragment,null,c.a.Children.toArray(t),c.a.createElement(r,null))}},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),i=a(40),l=a(33),s=a(37),m=a(39),o=a(13),u=a(35),v=a(36),d=function(){return c.a.createElement("div",{className:"contact__list"},c.a.createElement("div",{className:"contact__item"},c.a.createElement("span",{className:"text-brand"},"Email:"),"sydinh.dev@gmail.com"),c.a.createElement("div",{className:"contact__item"},c.a.createElement("span",{className:"text-brand"},"Phone:"),"(+84) 348 019 521"),c.a.createElement("div",{className:"contact__item"},c.a.createElement("span",{className:"text-brand"},"Address:"),"Da nang, Viet nam"))};t.default=Object(i.a)(l.a,s.a)(function(){return c.a.createElement(m.a,null,c.a.createElement(r.Helmet,null,c.a.createElement("title",null,"Contact Me")),c.a.createElement(o.a,{hasFooter:!0,page:"contact"},c.a.createElement(u.a,null,"Contact ",c.a.createElement("span",{className:"text-brand"},"Me")),c.a.createElement(v.a,null,"This is how you can reach me..."),c.a.createElement(d,null)))})}}]);
//# sourceMappingURL=6.18b39fc0.chunk.js.map