(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[9218],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||c;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3657:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s},default:function(){return l}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),i={id:"close-other-pickers",title:"Close other pickers"},a={unversionedId:"tutorials/close-other-pickers",id:"tutorials/close-other-pickers",isDocsHomePage:!1,title:"Close other pickers",description:"As a rule, all other pickers should be closed when another picker opens.",source:"@site/docs/tutorials/close-other-pickers.md",sourceDirName:"tutorials",slug:"/tutorials/close-other-pickers",permalink:"/react-native-dropdown-picker-website/docs/next/tutorials/close-other-pickers",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/docs/tutorials/close-other-pickers.md",version:"current",frontMatter:{id:"close-other-pickers",title:"Close other pickers"},sidebar:"someSidebar",previous:{title:"Themes",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/themes"},next:{title:"Multiple Pickers",permalink:"/react-native-dropdown-picker-website/docs/next/tutorials/multiple-pickers"}},s=[],p={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"As a rule, all other pickers should be closed when another picker opens.",(0,c.kt)("br",{parentName:"p"}),"\n","In the following example, two state variables are defined for country and city pickers. When the country picker opens, the city picker closes, and the same happens inside the ",(0,c.kt)("inlineCode",{parentName:"p"},"onOpen")," callback of the city picker."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const [countryOpen, setCountryOpen] = useState(false);\n  const [cityOpen, setCityOpen] = useState(false);\n\n  const onCountryOpen = useCallback(() => {\n    setCityCountry(false);\n  }, []);\n\n  const onCityOpen = useCallback(() => {\n    setCountryOpen(false);\n  }, []);\n\n  return (\n    // Country\n    <DropDownPicker\n      open={countryOpen}\n      onOpen={onCountryOpen}\n      ...\n    />\n\n    // City\n    <DropDownPicker\n      open={cityOpen}\n      onOpen={onCityOpen}\n      ...\n    />\n  );\n}\n")))}l.isMDXComponent=!0}}]);