(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[3085],{9366:function(e,n,t){"use strict";t.r(n);var a=t(7294),r=t(5421),c=t(3905),l=t(3541),o=t(571),s=t(6700);n.default=function(e){var n=e.content,t=n.frontMatter,i=n.metadata,u=t.title,d=t.description,m=t.wrapperClassName,f=t.hide_table_of_contents,h=i.permalink;return a.createElement(r.Z,{title:u,description:d,permalink:h,wrapperClassName:null!=m?m:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",null,a.createElement("div",{className:"container container--fluid"},a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--8 col--offset-2"},a.createElement("div",{className:"container"},a.createElement(c.Zo,{components:l.Z},a.createElement(n,null)))),!f&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(o.Z,{toc:n.toc})))))))}},571:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010);var c=function(e,n,t){var r=(0,a.useState)(void 0),c=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),n=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(n){if(n.getBoundingClientRect().top>=t){var a=e[e.indexOf(n)-1];return null!=a?a:n}return n}return e[e.length-1]}();if(a)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var i=s[r],u=i.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));a.id===d&&(c&&c.classList.remove(n),i.classList.add(n),l(i),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_35-E",o="table-of-contents__link";function s(e){var n=e.toc,t=e.isChild;return n.length?a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var n=e.toc;return c(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(s,{toc:n}))}},6979:function(e,n,t){"use strict";var a=t(7294),r=t(4184),c=t.n(r),l=t(5977),o=t(2263);n.Z=function(e){var n=(0,a.useRef)(!1),r=(0,a.useRef)(null),s=(0,l.k6)(),i=(0,o.default)().siteConfig,u=(void 0===i?{}:i).baseUrl,d=function(){n.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(9878),t.e(4452)]).then(t.bind(t,7780)),Promise.all([t.e(532),t.e(3343)]).then(t.bind(t,3343))]).then((function(e){!function(e,n,t){new t({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,t){var a=u+t.url;document.createElement("a").href=a,s.push(a)}})}(e[0],e[1],e[2].default)})),n.current=!0)},m=(0,a.useCallback)((function(n){r.current.contains(n.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return a.createElement("div",{className:"navbar__search",key:"search-box"},a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:m,onBlur:m,ref:r}))}}}]);