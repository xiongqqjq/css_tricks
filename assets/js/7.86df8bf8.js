(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(e,t,n){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},s=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var s={};for(var r in t[n.util.objId(e)]=s,e)e.hasOwnProperty(r)&&(s[r]=n.util.clone(e[r],t));return s;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];s=[];return t[n.util.objId(e)]=s,e.forEach(function(e,a){s[a]=n.util.clone(e,t)}),s}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var s in t)a[s]=t[s];return a},insertBefore:function(e,t,a,s){var r=(s=s||n.languages)[e];if(2==arguments.length){for(var i in a=arguments[1])a.hasOwnProperty(i)&&(r[i]=a[i]);return r}var l={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);l[o]=r[o]}return n.languages.DFS(n.languages,function(t,n){n===s[e]&&t!=e&&(this[t]=l)}),s[e]=l},DFS:function(e,t,a,s){for(var r in s=s||{},e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],a||r),"Object"!==n.util.type(e[r])||s[n.util.objId(e[r])]?"Array"!==n.util.type(e[r])||s[n.util.objId(e[r])]||(s[n.util.objId(e[r])]=!0,n.languages.DFS(e[r],t,r,s)):(s[n.util.objId(e[r])]=!0,n.languages.DFS(e[r],t,null,s)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var s={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s);for(var r,i=s.elements||e.querySelectorAll(s.selector),l=0;r=i[l++];)n.highlightElement(r,!0===t,s.callback)},highlightElement:function(t,s,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i));var c={element:t,language:i,grammar:l,code:t.textContent};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(n.hooks.run("before-highlight",c),c.element.textContent=c.code,n.hooks.run("after-highlight",c)),void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),s&&a.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,a){var r={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",r),r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),s.stringify(n.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,a,s,r,i,l){var o=n.Token;for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==l)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var g=0;g<u.length;++g){var d=u[g],f=d.inside,p=!!d.lookbehind,h=!!d.greedy,m=0,y=d.alias;if(h&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var b=s,k=r;b<t.length;k+=t[b].length,++b){var x=t[b];if(t.length>e.length)return;if(!(x instanceof o)){if(h&&b!=t.length-1){if(d.lastIndex=k,!(I=d.exec(e)))break;for(var w=I.index+(p?I[1].length:0),S=I.index+I[0].length,_=b,C=k,F=t.length;_<F&&(C<S||!t[_].type&&!t[_-1].greedy);++_)w>=(C+=t[_].length)&&(++b,k=C);if(t[b]instanceof o)continue;A=_-b,x=e.slice(k,C),I.index-=k}else{d.lastIndex=0;var I=d.exec(x),A=1}if(I){p&&(m=I[1]?I[1].length:0);S=(w=I.index+m)+(I=I[0].slice(m)).length;var j=x.slice(0,w),$=x.slice(S),T=[b,A];j&&(++b,k+=j.length,T.push(j));var N=new o(c,f?n.tokenize(I,f):I,y,I,h);if(T.push(N),$&&T.push($),Array.prototype.splice.apply(t,T),1!=A&&n.matchGrammar(e,t,a,b,k,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,t,a){var s=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,s,t,0,0,!1),s},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var s,r=0;s=a[r++];)s(t)}}},s=n.Token=function(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s};if(s.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return s.stringify(n,t,e)}).join("");var r={type:e.type,content:s.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,i)}n.hooks.run("wrap",r);var l=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(l?" "+l:"")+">"+r.content+"</"+r.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),s=t.language,r=t.code,i=t.immediateClose;a.postMessage(n.highlight(r,n.languages[s],s)),i&&a.close()},!1),a.Prism):a.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();e.exports&&(e.exports=s),"undefined"!=typeof global&&(global.Prism=s),s.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),s.languages.xml=s.languages.markup,s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},s.languages.css.atrule.inside.rest=s.languages.css,s.languages.markup&&(s.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:s.languages.css,alias:"language-css",greedy:!0}}),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:s.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},s.languages.markup.tag)),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),s.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),s.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),s.languages.javascript["template-string"].inside.interpolation.inside.rest=s.languages.javascript,s.languages.markup&&s.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:s.languages.javascript,alias:"language-javascript",greedy:!0}}),s.languages.js=s.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),r=t,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(i)||[,""])[1]),!n){var l=(a.match(/\.(\w+)$/)||[,""])[1];n=e[l]||l}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading…",t.appendChild(o);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,s.highlightElement(o)):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}),s.plugins.toolbar&&s.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))},278:function(e,t,n){},344:function(e,t,n){"use strict";var a=n(278);n.n(a).a},461:function(e,t,n){"use strict";n.r(t);var a=n(268),s=n.n(a),r={name:"flex",data:function(){return{containerStyle:{"flex-direction":"row","flex-wrap":"nowrap","justify-content":"flex-start","align-items":"flex-start","align-content":"flex-start"},itemStyles:[{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"},{order:0,"flex-grow":0,"flex-shrink":1,"flex-basis":"auto","align-self":"stretch"}],choosenItemIndex:-1,choosenItem:{},hideTop:!1,flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around"],alignItems:["flex-start","flex-end","center","baseline","stretch"],alignContent:["flex-start","flex-end","center","space-between","space-around"],flexGrow:[0,1],flexShrink:[0,1],alignSelf:["auto","flex-start","flex-end","center","baseline"]}},watch:{containerStyle:{handler:function(){this.setContainerStyleStr()},deep:!0}},computed:{order:function(){for(var e=[],t=0;t<this.itemStyles.length;t++)e.push(t);return e}},methods:{styleToString:function(e){var t="";for(var n in e)t+="".concat(n,": ").concat(e[n],";\n");return t},setContainerStyleStr:function(){this.$refs.flexContainer.innerHTML=s.a.highlight(this.styleToString(this.containerStyle),s.a.languages.css)},changeItemCss:function(e,t){this.$refs.flexItem.innerHTML=s.a.highlight(this.styleToString(e),s.a.languages.css),this.choosenItem=e,this.choosenItemIndex=t}},mounted:function(){this.setContainerStyleStr()}},i=(n(344),n(1)),l=Object(i.a)(r,function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"live-flex"},[a("p",{staticClass:"tip"},[t._v("click item to change stlye")]),t._v(" "),a("div",{staticClass:"flex-container",style:t.containerStyle},t._l(t.itemStyles,function(e,n){return a("div",{key:n,staticClass:"flex-item",style:e,on:{click:function(a){t.changeItemCss(e,n)}}},[t._v("item-"+t._s(n+1)+"\n    ")])})),t._v(" "),a("p",{staticClass:"title"},[a("span",[t._v("style of container")]),t._v(" "),a("span",{staticClass:"tip hide-btn",on:{click:function(){return e.hideTop=!e.hideTop}}},[a("i",{class:t.hideTop?"el-icon-arrow-up":"el-icon-arrow-down"}),t._v(" "+t._s(t.hideTop?"show":"hide"))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideTop,expression:"!hideTop"}],staticClass:"bottom-border"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"flexContainer"})]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-direction:")]),t._v(" "),t._l(t.flexDirection,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-direction"],callback:function(e){t.$set(t.containerStyle,"flex-direction",e)},expression:"containerStyle['flex-direction']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-wrap:")]),t._v(" "),t._l(t.flexWrap,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["flex-wrap"],callback:function(e){t.$set(t.containerStyle,"flex-wrap",e)},expression:"containerStyle['flex-wrap']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("justify-content:")]),t._v(" "),t._l(t.justifyContent,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["justify-content"],callback:function(e){t.$set(t.containerStyle,"justify-content",e)},expression:"containerStyle['justify-content']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-items:")]),t._v(" "),t._l(t.alignItems,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-items"],callback:function(e){t.$set(t.containerStyle,"align-items",e)},expression:"containerStyle['align-items']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-content:")]),t._v(" "),t._l(t.alignContent,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.containerStyle["align-content"],callback:function(e){t.$set(t.containerStyle,"align-content",e)},expression:"containerStyle['align-content']"}})})],2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:-1!=t.choosenItemIndex,expression:"choosenItemIndex != -1"}],staticClass:"bottom-border"},[a("p",{staticClass:"title"},[t._v("style of item-"+t._s(t.choosenItemIndex+1))]),t._v(" "),a("pre",{staticClass:"language-css"},[a("code",{ref:"flexItem"})]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("order:")]),t._v(" "),t._l(t.order,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem.order,callback:function(e){t.$set(t.choosenItem,"order",e)},expression:"choosenItem['order']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-grow:")]),t._v(" "),t._l(t.flexGrow,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-grow"],callback:function(e){t.$set(t.choosenItem,"flex-grow",e)},expression:"choosenItem['flex-grow']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("flex-shrink:")]),t._v(" "),t._l(t.flexShrink,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["flex-shrink"],callback:function(e){t.$set(t.choosenItem,"flex-shrink",e)},expression:"choosenItem['flex-shrink']"}})})],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",{staticClass:"key"},[t._v("align-self:")]),t._v(" "),t._l(t.alignSelf,function(e,n){return a("el-radio",{key:n,attrs:{label:e},model:{value:t.choosenItem["align-self"],callback:function(e){t.$set(t.choosenItem,"align-self",e)},expression:"choosenItem['align-self']"}})})],2)])])},[],!1,null,"afe0a26a",null);l.options.__file="flex.vue";t.default=l.exports}}]);