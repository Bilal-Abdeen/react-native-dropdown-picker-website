(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,h=s["".concat(o,".").concat(b)]||s[b]||u[b]||l;return r?a.a.createElement(h,c(c({ref:t},p),{},{components:r})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),l=(r(0),r(113)),o={id:"placeholder",title:"Placeholder"},c={unversionedId:"placeholder",id:"placeholder",isDocsHomePage:!1,title:"Placeholder",description:"When no item is selected, the placeholder is displayed and prompts the user to select an item.",source:"@site/docs/placeholder.md",sourceDirName:".",slug:"/placeholder",permalink:"/react-native-dropdown-picker-website/docs/placeholder",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/placeholder.md",version:"current",frontMatter:{id:"placeholder",title:"Placeholder"},sidebar:"someSidebar",previous:{title:"Basic Usage",permalink:"/react-native-dropdown-picker-website/docs/basic-usage"},next:{title:"Search",permalink:"/react-native-dropdown-picker-website/docs/search"}},i=[{value:"Placeholder Text",id:"placeholder-text",children:[{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>translation</code>",id:"translation",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]}]}],p={toc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"When no item is selected, the placeholder is displayed and prompts the user to select an item.",Object(l.b)("br",{parentName:"p"}),"\n","The value for single item pickers is ",Object(l.b)("inlineCode",{parentName:"p"},"null")," and for multiple item picker it's ",Object(l.b)("inlineCode",{parentName:"p"},"[]"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useState(null); // Single\nconst [value, setValue] = useState([]); // Multiple\n\n<DropDownPicker\n  value={value}\n  ...\n/>\n")),Object(l.b)("h2",{id:"placeholder-text"},"Placeholder Text"),Object(l.b)("p",null,"Both of the following properties are available."),Object(l.b)("h3",{id:"placeholder"},Object(l.b)("inlineCode",{parentName:"h3"},"placeholder")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'placeholder="Select an item"\n')),Object(l.b)("h3",{id:"translation"},Object(l.b)("inlineCode",{parentName:"h3"},"translation")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'translation={{\n    PLACEHOLDER: "Select an item"\n}}\n')),Object(l.b)("h2",{id:"styling"},"Styling"),Object(l.b)("p",null,"You can style the placeholder text."),Object(l.b)("h3",{id:"placeholderstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"placeholderStyle")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'placeholderStyle={{\n    color: "grey",\n    fontWeight: "bold"\n}}\n')))}d.isMDXComponent=!0}}]);