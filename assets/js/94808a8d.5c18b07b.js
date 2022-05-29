"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5262],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},l=void 0,c={unversionedId:"entity-helper",id:"version-2.7/entity-helper",title:"EntityHelper and Decorated Entities",description:"Updating entity values with IEntity.assign()",source:"@site/versioned_docs/version-2.7/entity-helper.md",sourceDirName:".",slug:"/entity-helper",permalink:"/docs/2.7/entity-helper",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/entity-helper.md",tags:[],version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1656503560,formattedLastUpdatedAt:"6/29/2022",frontMatter:{title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},sidebar:"version-2.7/docs",previous:{title:"Serializing",permalink:"/docs/2.7/serializing"},next:{title:"Property validation",permalink:"/docs/2.7/property-validation"}},p={},u=[{value:"Updating entity values with IEntity.assign()",id:"updating-entity-values-with-ientityassign",level:2}],d={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"updating-entity-values-with-ientityassign"},"Updating entity values with IEntity.assign()"),(0,i.kt)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),(0,i.kt)("p",null,"Same result can be easily achieved with ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntity.assign()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"book.assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntity.assign(data)")," behaves same way as ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties,\nuse second parameter to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\n\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nbook.assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")))}y.isMDXComponent=!0}}]);