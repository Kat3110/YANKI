(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2GiN":function(e,a){"use strict";a.a={box:"box__bbCCC",slideUp:"slideUp__nML3j",title:"title__0RlG-",span:"span__5liz8",subtitle:"subtitle__lYCR0"}},"458g":function(e,a,t){"use strict";a.a=t.p+"08171c376388d7e237215d7511436f49.svg"},"D/Ix":function(e,a,t){"use strict";(function(e){var s=t("wr1z");a.a=()=>e("section",{className:s.a.subscribe},e("h2",{className:s.a.title},"Узнайте первым о новинках"),e("input",{className:s.a.input,type:"text",placeholder:"Ваш e-mail*"}),e("button",{className:s.a.btn,type:"button"},"Подписаться"),e("p",{className:s.a.subtitle},"Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих",e("br",null),"персональных данных и ознакомлен(а) с условиями конфиденциальности."))}).call(this,t("hosL").h)},EmwX:function(e,a,t){"use strict";(function(e,s){var l=t("2GiN");a.a=()=>e(s,null,e("div",{className:l.a.box},e("span",null,e("h1",{className:l.a.title},"Новая коллекция"),e("span",{className:l.a.span}),e("a",{className:l.a.subtitle},"СМОТРЕТЬ НОВИНКИ"))))}).call(this,t("hosL").h,t("hosL").Fragment)},RxWe:function(e,a,t){"use strict";a.a=t.p+"3e022144186375e7ebd761cfbe505615.svg"},bpXN:function(e,a,t){"use strict";t.r(a),function(e){var s=t("hosL"),l=t("cRkd"),i=t("xLca"),c=t("EmwX"),n=t("AQkY"),r=t("D/Ix"),o=t("qinx");a.default=()=>Object(s.h)(e,null,Object(s.h)("div",{className:l.a.main},Object(s.h)(i.a,null),Object(s.h)(c.a,null)),Object(s.h)(n.a,null),Object(s.h)(r.a,null),Object(s.h)(o.a,null))}.call(this,t("hosL").Fragment)},cRkd:function(e,a){"use strict";a.a={main:"main__GGVJm"}},"ox/y":function(e,a,t){"use strict";function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}Object.defineProperty(a,"__esModule",{value:!0}),a.Link=a.Match=void 0;var l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},i=t("hosL"),c=t("Y3FI"),n=a.Match=function(e){function a(){for(var a,t,l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return a=t=s(this,e.call.apply(e,[this].concat(i))),t.update=function(e){t.nextUrl=e,t.setState({})},s(t,a)}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),a.prototype.componentDidMount=function(){c.subscribers.push(this.update)},a.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},a.prototype.render=function(e){var a=this.nextUrl||(0,c.getCurrentUrl)(),t=a.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:a,path:t,matches:!1!==(0,c.exec)(t,e.path,{})})},a}(i.Component),r=function(e){var a=e.activeClassName,t=e.path,s=function(e,a){var t={};for(var s in e)a.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}(e,["activeClassName","path"]);return(0,i.h)(n,{path:t||s.href},(function(e){return(0,i.h)(c.Link,l({},s,{class:[s.class||s.className,e.matches&&a].filter(Boolean).join(" ")}))}))};a.Link=r,a.default=n,n.Link=r},qinx:function(e,a,t){"use strict";(function(e){var s=t("rS5q"),l=t("458g"),i=t("RxWe");a.a=()=>e("footer",{className:s.a.footer},e("nav",{className:s.a.list},e("div",{className:s.a.menu},e("h2",{className:s.a.title},"КОМПАНИЯ"),e("ul",{className:s.a.menulist},e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"./about"},"О нас")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"#"},"Контакты")))),e("div",{className:s.a.menu},e("h2",{className:s.a.title},"ПОЛЕЗНОЕ"),e("ul",{className:s.a.menulist},e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"#"},"Оплата и доставка")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"#"},"Условия возврата")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"#"},"Бонусная система")))),e("div",{className:s.a.menu},e("h2",{className:s.a.title},"ПОКУПАТЕЛЮ"),e("ul",{className:s.a.menulist},e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:""},"Избранное")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:""},"Публичная оферта")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"#"},"Политика конфиденциальности")))),e("div",{className:s.a.menu},e("h2",{className:s.a.title},"КОНТАКТЫ"),e("ul",{className:s.a.menulist},e("li",{className:s.a.listtext},e("div",{className:s.a.imgdisplay},e("a",{className:s.a.listlink,href:"https://www.instagram.com/",target:"_blank"},e("div",{className:s.a.listlinkbox},e("img",{className:s.a.listlinkbox,src:l.a,alt:"соцсети"}))),e("a",{className:s.a.listlink,href:"https://web.telegram.org/",target:"_blank"},e("div",{className:s.a.listlinkbox},e("img",{className:s.a.listlinkbox,src:i.a,alt:"соцсети"}))))),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"tel:+380730963644"},"+38(073) 096 36 44")),e("li",{className:s.a.listtext},e("a",{className:s.a.listlink,href:"mailto:info@yanki.com"},"info@yanki.com"))))),e("span",{className:s.a.reserved},"© 2022 Yanki. All rights reserved"))}).call(this,t("hosL").h)},rS5q:function(e,a){"use strict";a.a={footer:"footer__DGBa9",list:"list__sMz7m",menu:"menu__GBgXp",title:"title__-bK7z",menulist:"menulist__fe2IJ",listtext:"listtext__exSiT",listlink:"listlink__npLhb",imgdisplay:"imgdisplay__JGRsZ",reserved:"reserved__e4isE"}},wr1z:function(e,a){"use strict";a.a={subscribe:"subscribe__1wy-8",title:"title__1hRYo",input:"input__7wiy8",btn:"btn__iREmG",subtitle:"subtitle__X+JxP"}},xLca:function(e,a,t){"use strict";var s=t("hosL"),l=t("ox/y"),i="header__UsxLc",c="listItem__hUdAS",n="listItemLink__kEamk",r=t.p+"db4a902eb79c0b92a962bef8b0d58c39.svg",o=t.p+"68d954075393c82dfb861393b8a340c0.svg",u=t.p+"eefbef4ed306b3e4c62571407b567faa.svg",m=t.p+"0d3c61672cabfcbfc20b9a299dc14b7b.svg",h=t.p+"44411cc066abd0828de3363fdf13fc95.svg";a.a=()=>Object(s.h)("header",{className:i},Object(s.h)("nav",{className:c},Object(s.h)("div",null,Object(s.h)(l.Link,{className:n,href:"/new"},"new"),Object(s.h)(l.Link,{className:n,href:"/catalog"},"каталог"),Object(s.h)(l.Link,{className:n,href:"/about"},"о наc")),Object(s.h)(l.Link,{className:n,href:"/"},Object(s.h)("img",{src:r,alt:"логотип"})),Object(s.h)("div",null,Object(s.h)(l.Link,{className:n,href:"/"},Object(s.h)("img",{src:o,alt:"поиск"})),Object(s.h)(l.Link,{className:n,href:"/"},Object(s.h)("img",{src:m,alt:"личный кабинет"})),Object(s.h)(l.Link,{className:n,href:"/"},Object(s.h)("img",{src:u,alt:"избранное"})),Object(s.h)(l.Link,{className:n,href:"/"},Object(s.h)("img",{src:h,alt:"корзина"})))))}}]);
//# sourceMappingURL=route-main.chunk.2a1cf.esm.js.map