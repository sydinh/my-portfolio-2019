(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{33:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(9),c=a(8),o=a(10),l=a(0),s=a.n(l);t.a=function(e){return function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),a}(s.a.Component)}},34:function(e,t,a){e.exports=a.p+"static/media/portrait.eb197767.jpg"},35:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("h1",{className:"page__title"},r.a.Children.toArray(t))}},36:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children;return r.a.createElement("h2",{className:"page__subtitle"},r.a.Children.toArray(t))}},37:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(9),c=a(8),o=a(10),l=a(0),s=a.n(l),m=a(12),u=a.n(m),d=function(e){var t=e.onClick,a=e.close,n=u()({"menu-btn":!0,close:a});return s.a.createElement("div",{className:n,onClick:t},s.a.createElement("div",{className:"menu-btn__item"}),s.a.createElement("div",{className:"menu-btn__item"}),s.a.createElement("div",{className:"menu-btn__item"}))},v=a(60),b=a(34),_=a.n(b),h=a(5),f=function(e){var t=e.active,a=u()({menu:!0,active:t}),n={className:"menu__nav-link",activeClassName:"active"};return s.a.createElement("section",{className:a},s.a.createElement("div",{className:"menu__brand"},s.a.createElement("img",{src:_.a,alt:"My portrait",className:"menu__brand-img"})),s.a.createElement("ul",{className:"menu__nav"},s.a.createElement("li",{className:"menu__nav-item"},s.a.createElement(v.a,Object.assign({exact:!0,to:h.c},n),"Home")),s.a.createElement("li",{className:"menu__nav-item"},s.a.createElement(v.a,Object.assign({to:h.a},n),"About Me")),s.a.createElement("li",{className:"menu__nav-item"},s.a.createElement(v.a,Object.assign({to:h.d},n),"My Work")),s.a.createElement("li",{className:"menu__nav-item"},s.a.createElement(v.a,Object.assign({to:h.b},n),"How To Reach Me"))))};t.a=function(e){return function(t){function a(){var e;return Object(n.a)(this,a),(e=Object(i.a)(this,Object(c.a)(a).call(this))).handleMenuBtnClick=function(){e.setState(function(e){return{isSidenavActive:!e.isSidenavActive}})},e.state={isSidenavActive:!1},e}return Object(o.a)(a,t),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.body.classList.remove("menu-active")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{onClick:this.handleMenuBtnClick,close:this.state.isSidenavActive}),s.a.createElement(f,{active:this.state.isSidenavActive}),s.a.createElement(e,this.props))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.isSidenavActive?document.body.classList.add("menu-active"):document.body.classList.remove("menu-active"),null}}]),a}(s.a.Component)}},39:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=function(){return r.a.createElement("footer",{role:"contentinfo",className:"footer"},"Copyright \xa9 2019")};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.Children.toArray(t),r.a.createElement(i,null))}},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(38),c=a(40),o=a(33),l=a(37),s=a(39),m=a(13),u=a(35),d=a(36),v=a(34),b=a.n(v),_=function(){return r.a.createElement("div",{className:"about__bio"},r.a.createElement("img",{src:b.a,alt:"My portrait",className:"about__bio-img"}),r.a.createElement("div",{className:"about__bio-content"},r.a.createElement("h2",{className:"about__bio-title text-brand"},"Bio"),r.a.createElement("p",{className:"about__bio-desc"},'I believe in "HTML for the content, CSS for the presentation, JavaScript for the interaction".'),r.a.createElement("p",{className:"about__bio-desc"},"And, I am here to do all these interesting things.")))},h=function(e){return r.a.createElement("div",{className:"job"},r.a.createElement("h4",{className:"job__title"},e.title),r.a.createElement("h6",{className:"job__subtitle"},e.subtitle),r.a.createElement("p",{className:"job__desc"},e.desc))},f=[{id:0,worked_at:"Passerelles num\xe9riques Vietnam",worked_with_role:"Student",description:"This is my university where I am inspired, follow and develop my passion in front-end development field. I feel this as my second family, I was trained there about all of things to become a skillful front-end developer. I have had a total of two years to complete my course from 2014 to 2016."},{id:1,worked_at:"Seadev",worked_with_role:"Trainee",description:"After graduating, I had about three months to intern at Seadev company. It may a short time, but everything was very nice. I get training again and do some interesting tasks, I completed my internship in September 2016."},{id:2,worked_at:"Framgia Inc.",worked_with_role:"Frontend Developer",description:'Currently, I am working here. Everything is going well, I work and contribute a lots for my team as well as my company. I am so proud to be a part of Framgia Inc so far. We work with the slogan "WE MAKE IT AWESOME !"'}],E=function(){return r.a.createElement("div",{className:"about__jobs"},f.map(function(e){return r.a.createElement("div",{key:e.id,className:"about__jobs-item"},r.a.createElement(h,{title:e.worked_at,subtitle:e.worked_with_role,desc:e.description}))}))};t.default=Object(c.a)(o.a,l.a)(function(){return r.a.createElement(s.a,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"About Me")),r.a.createElement(m.a,{hasFooter:!0,page:"about"},r.a.createElement(u.a,null,"About ",r.a.createElement("span",{className:"text-brand"},"Me")),r.a.createElement(d.a,null,"Let me tell you a few things..."),r.a.createElement(_,null),r.a.createElement(E,null)))})}}]);
//# sourceMappingURL=4.132cf779.chunk.js.map