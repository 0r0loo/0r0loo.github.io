(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var l=u[s];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(8936),l=r(7091),c=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function g(t,e){return e.decode?l(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function b(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&g(r,t).includes(t.arrayFormatSeparator);r=a?g(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)})):null===r?r:g(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return g(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?g(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var s=a.value;if(""!==s){var l=c(e.decode?s.replace(/\+/g," "):s,"="),f=o(l,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?m:g(m,e),r(g(p,e),m,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var b=v[x],w=n[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=h(w[Z],e)}else n[b]=h(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=b,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[",o,"]"].join("")]:[[m(e,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[m(e,t),"[]"].join("")]:[[m(e,t),"[]=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,t),e,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[m(e,t)]:[[m(e,t),"=",m(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var s=u[i];r(s)||(o[s]=t[s])}var l=Object.keys(o);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var o=t[r];return void 0===o?"":null===o?m(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?m(r,e)+"[]":o.reduce(n(r),[]).join("&"):m(r,e)+"="+m(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=c(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=x(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),s=e.stringify(u,r);s&&(s="?".concat(s));var l=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(l="#".concat(r[p]?m(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(s).concat(l)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,s=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:s},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},1717:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(7294),o=r(6771),a=r(1496),i=r(3431);var u=(0,o.Z)(a.Z,{target:"e119msv80"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),s=function(t){var e=t.profileImage;return(0,i.tZ)(u,{fluid:e,alt:"Profile Image"})};var l=(0,o.Z)("div",{target:"enz2r8l3"})({name:"1uuapos",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#fff"}),c=(0,o.Z)("div",{target:"enz2r8l2"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),f=(0,o.Z)("div",{target:"enz2r8l1"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),p=(0,o.Z)("div",{target:"enz2r8l0"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),d=function(t){var e=t.profileImage;return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(l,null,(0,i.tZ)(c,null,(0,i.tZ)(s,{profileImage:e}),(0,i.tZ)("div",null,(0,i.tZ)(f,null,"안녕하세요 ~ 👋"),(0,i.tZ)(p,null,"자바스크립트 주니어 개발자 조태규입니다! 😎")))))},m=r(2122);var g=r(5444),y=["active","to"];var x=(0,o.Z)("div",{target:"e1jhqxdr1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),v=(0,o.Z)((function(t){t.active;var e=t.to,r=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,y);return(0,i.tZ)(g.rU,(0,m.Z)({to:e},r))}),{target:"e1jhqxdr0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:list-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),h=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,i.tZ)(x,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,i.tZ)(v,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))};var b=(0,o.Z)(g.rU,{target:"e9s2t7y7"})({name:"1ywcj48",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:box-shadow 0.3s;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),w=(0,o.Z)(a.Z,{target:"e9s2t7y6"})({name:"pxpl23",styles:"width:100%;height:200px;border-radius:10px 10px 0 0;object-fit:cover"}),k=(0,o.Z)("div",{target:"e9s2t7y5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),j=(0,o.Z)("div",{target:"e9s2t7y4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),Z=(0,o.Z)("div",{target:"e9s2t7y3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),I=(0,o.Z)("div",{target:"e9s2t7y2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),S=(0,o.Z)("div",{target:"e9s2t7y1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),O=(0,o.Z)("div",{target:"e9s2t7y0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),A=function(t){var e=t.title,r=t.date,o=t.categories,a=t.summary,u=t.thumbnail.childImageSharp.fluid,s=t.link;return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(b,{to:s},(0,i.tZ)(w,{fluid:u,alt:"Post Item Image"}),(0,i.tZ)(k,null,(0,i.tZ)(j,null,e),(0,i.tZ)(Z,null,r),(0,i.tZ)(I,null,o.map((function(t){return(0,i.tZ)(S,{key:t},t)}))),(0,i.tZ)(O,null,a))))},F=function(t,e){var r=(0,n.useRef)(null),o=(0,n.useRef)(null),a=(0,n.useState)(1),i=a[0],u=a[1],s=(0,n.useMemo)((function(){return e.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]);return(0,n.useEffect)((function(){o.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(u((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return u(1)}),[t]),(0,n.useEffect)((function(){10*i>=s.length||null===r.current||0===r.current.children.length||null===o.current||o.current.observe(r.current.children[r.current.children.length-1])}),[i,t]),{containerRef:r,postList:s.slice(0,10*i)}};var _=(0,o.Z)("div",{target:"e1fl66hn0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),E=function(t){var e=t.posts,r=t.selectedCategory,n=F(r,e),o=n.containerRef,a=n.postList;return(0,i.tZ)(_,{ref:o},a.map((function(t){var e=t.node,r=e.id,n=e.fields.slug,o=e.frontmatter;return(0,i.tZ)(A,(0,m.Z)({},o,{link:n,key:r}))})))},C=r(2203),U=r(4553),M=function(t){var e=t.location.search,r=t.data,o=r.site.siteMetadata,a=o.title,u=o.description,s=o.siteUrl,l=r.allMarkdownRemark.edges,c=r.file,f=c.publicURL,p=c.childImageSharp.fluid,m=C.parse(e),g="string"==typeof m.category&&m.category?m.category:"All",y=(0,n.useMemo)((function(){return l.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,i.tZ)(n.Fragment,null,(0,i.tZ)(U.Z,{title:a,description:u,url:s,image:f},(0,i.tZ)(d,{profileImage:p}),(0,i.tZ)(h,{selectedCategory:g,categoryList:y}),(0,i.tZ)(E,{selectedCategory:g,posts:l})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c04969bea46f0a15cf25.js.map