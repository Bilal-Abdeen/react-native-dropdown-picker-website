(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9156],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7719:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"category",title:"Category"},o={unversionedId:"advanced/category",id:"version-5.0.0/advanced/category",isDocsHomePage:!1,title:"Category",description:"You can categorize your items easily.",source:"@site/versioned_docs/version-5.0.0/advanced/category.md",sourceDirName:"advanced",slug:"/advanced/category",permalink:"/react-native-dropdown-picker-website/docs/advanced/category",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/versioned_docs/version-5.0.0/advanced/category.md",version:"5.0.0",frontMatter:{id:"category",title:"Category"},sidebar:"version-5.0.0/someSidebar",previous:{title:"Search",permalink:"/react-native-dropdown-picker-website/docs/advanced/search"},next:{title:"Modes",permalink:"/react-native-dropdown-picker-website/docs/advanced/modes"}},c=[{value:"Props",id:"props",children:[{value:"<code>categorySelectable</code>",id:"categoryselectable",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>listParentContainerStyle</code>",id:"listparentcontainerstyle",children:[]},{value:"<code>listParentLabelStyle</code>",id:"listparentlabelstyle",children:[]},{value:"<code>listChildContainerStyle</code>",id:"listchildcontainerstyle",children:[]},{value:"<code>listChildLabelStyle</code>",id:"listchildlabelstyle",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can categorize your items easily."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const [items, setItems] = useState([\n  {label: 'North America', value: 'na'},\n  {label: 'United States', value: 'usa', parent: 'na'},\n  {label: 'Canada', value: 'canada', parent: 'na'},\n\n  {label: 'Europe', value: 'eu'},\n  {label: 'Norway', value: 'norway', parent: 'eu'},\n  {label: 'Belgium', value: 'belgium', parent: 'eu'},\n]);\n")),(0,l.kt)("p",null,"The children have the parent's ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," as their ",(0,l.kt)("inlineCode",{parentName:"p"},"parent")," key."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The items don't need to be sorted, This will be done automatically."))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"categoryselectable"},(0,l.kt)("inlineCode",{parentName:"h3"},"categorySelectable")),(0,l.kt)("p",null,"Specifies if the categories can be selected."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"categorySelectable={true}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"listparentcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"listParentContainerStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'listParentContainerStyle={{\n  justifyContent: "center",\n  alignItems: "center"\n}}\n')),(0,l.kt)("h3",{id:"listparentlabelstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"listParentLabelStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'listParentLabelStyle={{\n  fontWeight: "bold"\n}}\n')),(0,l.kt)("h3",{id:"listchildcontainerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"listChildContainerStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"listChildContainerStyle={{\n  paddingLeft: 20\n}}\n")),(0,l.kt)("h3",{id:"listchildlabelstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"listChildLabelStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'listChildLabelStyle={{\n  color: "grey"\n}}\n')))}s.isMDXComponent=!0}}]);