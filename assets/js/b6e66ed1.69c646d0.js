(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[7337],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3890:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={id:"placeholder",title:"Placeholder"},c={unversionedId:"advanced/placeholder",id:"advanced/placeholder",isDocsHomePage:!1,title:"Placeholder",description:"When no item is selected, the placeholder is displayed and prompts the user to select an item.",source:"@site/docs/advanced/placeholder.md",sourceDirName:"advanced",slug:"/advanced/placeholder",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/placeholder",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/docs/advanced/placeholder.md",version:"current",frontMatter:{id:"placeholder",title:"Placeholder"},sidebar:"someSidebar",previous:{title:"Item Schema",permalink:"/react-native-dropdown-picker-website/docs/next/item-schema"},next:{title:"Icons",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/icons"}},i=[{value:"Placeholder Text",id:"placeholder-text",children:[{value:"<code>placeholder</code>",id:"placeholder",children:[]},{value:"<code>translation</code>",id:"translation",children:[]}]},{value:"Styling",id:"styling",children:[{value:"<code>placeholderStyle</code>",id:"placeholderstyle",children:[]}]}],d={toc:i};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When no item is selected, the placeholder is displayed and prompts the user to select an item.",(0,l.kt)("br",{parentName:"p"}),"\n","The value for single item pickers is ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," and for multiple item pickers it's ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const [value, setValue] = useState(null); // Single\nconst [value, setValue] = useState([]); // Multiple\n\n<DropDownPicker\n  value={value}\n  ...\n/>\n")),(0,l.kt)("h2",{id:"placeholder-text"},"Placeholder Text"),(0,l.kt)("p",null,"Both of the following properties are available."),(0,l.kt)("h3",{id:"placeholder"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholder")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'placeholder="Select an item"\n')),(0,l.kt)("h3",{id:"translation"},(0,l.kt)("inlineCode",{parentName:"h3"},"translation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'translation={{\n  PLACEHOLDER: "Select an item"\n}}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"See: ",(0,l.kt)("a",{parentName:"strong",href:"localization"},"Localization")))),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"placeholderstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"placeholderStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'placeholderStyle={{\n  color: "grey",\n  fontWeight: "bold"\n}}\n')))}p.isMDXComponent=!0}}]);