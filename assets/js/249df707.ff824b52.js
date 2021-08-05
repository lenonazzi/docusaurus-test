"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],c={sidebar_position:1},p="Utilizando Context API",i={unversionedId:"react/utilizando-context-api",id:"react/utilizando-context-api",isDocsHomePage:!1,title:"Utilizando Context API",description:"Compartilhando informa\xe7\xf5es globais dentro de um app.",source:"@site/docs/react/utilizando-context-api.md",sourceDirName:"react",slug:"/react/utilizando-context-api",permalink:"/docusaurus-test/docs/react/utilizando-context-api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/react/utilizando-context-api.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Traduzindo Alguns componentes no vtex IO",permalink:"/docusaurus-test/docs/vtex-io/traduzindo-mensagens"},next:{title:"Test doc",permalink:"/docusaurus-test/docs/react/test"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"utilizando-context-api"},"Utilizando Context API"),(0,a.kt)("p",null,"Compartilhando informa\xe7\xf5es globais dentro de um app."),(0,a.kt)("p",null,"Vamos criar uma pasta na raiz chamada de ",(0,a.kt)("strong",{parentName:"p"},"context."),"\nEm seguida criamos o arquivo ",(0,a.kt)("strong",{parentName:"p"},"index.tsx")," e vamos importar o React e o hook ",(0,a.kt)("strong",{parentName:"p"},"createContext")," nele:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { createContext } from 'react'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc46Tamb\xe9m adicionamos o hook de useState para usarmos mais tarde no exemplo.")),(0,a.kt)("p",null,"Agora vamos criar uma interface para o nosso ",(0,a.kt)("strong",{parentName:"p"},"provider")," onde apenas vamos passar a informa\xe7\xe3o que vamos receber os components filhos dele (no caso, de todo nosso app)",(0,a.kt)("strong",{parentName:"p"},".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IContextProvider {\n  children?: React.ReactNode\n}\n")),(0,a.kt)("p",null,"Criamos uma interface para o ",(0,a.kt)("strong",{parentName:"p"},"context,")," onde temos uma vari\xe1vel do tipo ",(0,a.kt)("em",{parentName:"p"},"boolean")," e uma fun\xe7\xe3o que ",(0,a.kt)("em",{parentName:"p"},"n\xe3o tem retorno"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IContext {\n  foo: boolean\n  toggleAccess(): void\n}\n")),(0,a.kt)("p",null,"Vamos criar o nosso ",(0,a.kt)("strong",{parentName:"p"},"context")," e ",(0,a.kt)("strong",{parentName:"p"},"exportar")," ele:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const MyContext = createContext<IContext>(\n  {} as IContext\n)\n")),(0,a.kt)("p",null,"Por fim, exportamos nosso ",(0,a.kt)("strong",{parentName:"p"},"context provider")," com seus respectivos ",(0,a.kt)("strong",{parentName:"p"},"values"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export const MyContextProvider = ({ children }: IContextProvider) => {\n  const [access, setAccess] = useState<boolean>(false)\n\n  const foo = false\n\n  function toggleAccess() {\n    setAccess(!access)\n  }\n\n  const values = {\n    foo,\n    toggleAccess\n  }\n\n  return (\n    <MyContext.Provider value={values}>\n      {children}\n    </MyContext.Provider>\n  )\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"C\xf3digo completo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { createContext, useState } from 'react'\n\ninterface IContextProvider {\n  children?: React.ReactNode\n}\n\ninterface IContext {\n  foo: boolean\n  toggleAccess(): void\n}\n\nexport const MyContext = createContext<IContext>(\n  {} as IContext\n)\n\nexport const MyContextProvider = ({ children }: IContextProvider) => {\n  const [access, setAccess] = useState<boolean>(false)\n\n  const foo = false\n\n  function toggleAccess() {\n    setAccess(!access)\n  }\n\n  const values = {\n    foo,\n    toggleAccess\n  }\n\n  return (\n    <MyContext.Provider value={values}>\n      {children}\n    </MyContext.Provider>\n  )\n}\n"))),(0,a.kt)("p",null,"Voltando a raiz do projeto, no arquivo ",(0,a.kt)("strong",{parentName:"p"},"index.tsx,")," devemos importar nosso ",(0,a.kt)("strong",{parentName:"p"},"provider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MyContextProvider } from './context'\n")),(0,a.kt)("p",null,"Em seguida, no ",(0,a.kt)("strong",{parentName:"p"},"return")," do nosso app, vamos encapsular dentro do nosso ",(0,a.kt)("strong",{parentName:"p"},"provider")," todos os componentes filhos, que v\xe3o ter acesso aos ",(0,a.kt)("strong",{parentName:"p"},"values")," do nosso context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"return (\n  <MyContextProvider>\n    <MyFirstComponent />\n    <MySecondComponent />\n  </MyContextProvider>\n)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udc46Dessa forma, ambos ",(0,a.kt)("em",{parentName:"p"},"MyFirstComponent")," e ",(0,a.kt)("em",{parentName:"p"},"MySecondComponent")," ter\xe3o acesso aos valores do context.")),(0,a.kt)("p",null,"Dentro do componente (no casso deste exemplo, o componente ",(0,a.kt)("em",{parentName:"p"},"MyFirstComponent"),") onde vamos acessar algum valor vindo do nosso context, precisamos importar junto com o React, o hook ",(0,a.kt)("strong",{parentName:"p"},"useContext"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { useContext } from 'react'\n")),(0,a.kt)("p",null,"Agora importamos nosso context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { MyContext } from '../context'\n")),(0,a.kt)("p",null,"J\xe1 ",(0,a.kt)("em",{parentName:"p"},"dentro da fun\xe7\xe3o")," do componente, vamos chamar os values que precisamos acessar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { foo } = useContext(MyContext)\n")),(0,a.kt)("p",null,"Agora basta chamar ",(0,a.kt)("strong",{parentName:"p"},"foo")," onde necess\xe1rio dentro do componente."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pronto"),", agora voc\xea tem acesso aos dados compartilhados dentro da sua aplica\xe7\xe3o! \ud83d\ude80"))}m.isMDXComponent=!0}}]);