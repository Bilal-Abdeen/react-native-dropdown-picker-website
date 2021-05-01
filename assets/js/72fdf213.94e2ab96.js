(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[7377],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7521:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p},default:function(){return s}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),c={id:"multiple-pickers",title:"Multiple Pickers"},a={unversionedId:"tutorials/multiple-pickers",id:"version-5.0.0/tutorials/multiple-pickers",isDocsHomePage:!1,title:"Multiple Pickers",description:"In order to avoid overlapping, don't forget the zIndex and zIndexInverse properties.",source:"@site/versioned_docs/version-5.0.0/tutorials/multiple-pickers.md",sourceDirName:"tutorials",slug:"/tutorials/multiple-pickers",permalink:"/react-native-dropdown-picker-website/docs/tutorials/multiple-pickers",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/versioned_docs/version-5.0.0/tutorials/multiple-pickers.md",version:"5.0.0",frontMatter:{id:"multiple-pickers",title:"Multiple Pickers"},sidebar:"version-5.0.0/someSidebar",previous:{title:"Close other pickers",permalink:"/react-native-dropdown-picker-website/docs/tutorials/close-other-pickers"},next:{title:"Donation",permalink:"/react-native-dropdown-picker-website/docs/donation"}},p=[],l={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to avoid overlapping, don't forget the ",(0,i.kt)("inlineCode",{parentName:"p"},"zIndex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"zIndexInverse")," properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<DropDownPicker\n    zIndex={3000}\n    zIndexInverse={1000}\n    ...\n/>\n\n<DropDownPicker\n    zIndex={2000}\n    zIndexInverse={2000}\n    ...\n/>\n\n<DropDownPicker\n    zIndex={1000}\n    zIndexInverse={3000}\n    ...\n/>\n")))}s.isMDXComponent=!0}}]);