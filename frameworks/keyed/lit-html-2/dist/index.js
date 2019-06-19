!function(){"use strict";const e=new WeakMap,t=t=>"function"==typeof t&&e.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i={},o={},l=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${l}--\x3e`,a=new RegExp(`${l}|${r}`),d="$lit$";class c{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,c=0;const{strings:u,values:{length:g}}=e;for(;c<g;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let n=0;for(let e=0;e<s;e++)h(t[e].name,d)&&n++;for(;n-- >0;){const t=u[c],s=m.exec(t)[2],n=s.toLowerCase()+d,i=e.getAttribute(n);e.removeAttribute(n);const o=i.split(a);this.parts.push({type:"attribute",index:r,name:s,strings:o}),c+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const n=e.parentNode,i=t.split(a),o=i.length-1;for(let t=0;t<o;t++){let s,o=i[t];if(""===o)s=p();else{const e=m.exec(o);null!==e&&h(e[2],d)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-d.length)+e[3]),s=document.createTextNode(o)}n.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===i[o]?(n.insertBefore(p(),e),s.push(e)):e.data=i[o],c+=o}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(p(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),c++}}else i.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const h=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},u=e=>-1!==e.index,p=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class g{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o,l=0,r=0,a=i.nextNode();for(;l<n.length;)if(o=n[l],u(o)){for(;r<o.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));l++}else this.__parts.push(void 0),l++;return s&&(document.adoptNode(e),customElements.upgrade(e)),e}}class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const o=m.exec(e);t+=null===o?e+(s?l:r):e.substr(0,o.index)+o[1]+o[2]+d+o[3]+l}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const v=e=>null===e||!("object"==typeof e||"function"==typeof e),f=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(v(e)||!f(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===i||v(e)&&e===this.value||(this.value=e,t(e)||(this.committer.dirty=!0))}commit(){for(;t(this.value);){const e=this.value;this.value=i,e(this)}this.value!==i&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}const e=this.__pendingValue;e!==i&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):f(e)?this.__commitIterable(e):e===o?(this.value=o,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const s=new g(t,e.processor,this.options),n=s._clone();s.update(e.values),this.__commitNode(n),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class y{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}if(this.__pendingValue===i)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=i}}class w extends x{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends N{}let $=!1;try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=i,e(this)}if(this.__pendingValue===i)return;const e=this.__pendingValue,s=this.value,n=null==e||null!=s&&(e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive),o=null!=e&&(null==s||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=i}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const A=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new w(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new y(e,t.slice(1),s)]:new x(e,t,s).parts}handleTextExpression(e){return new b(e)}};function k(e){let t=S.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},S.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(l);return void 0===(s=t.keyString.get(n))&&(s=new c(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const S=new Map,M=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const C=(e,...t)=>new _(e,t,"html",A),L=(e,t)=>{const s=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,i=s.insertBefore(p(),n);s.insertBefore(p(),n);const o=new b(e.options);return o.insertAfterNode(i),o},B=(e,t)=>(e.setValue(t),e.commit(),e),H=(e,t,s)=>{const n=e.startNode.parentNode,i=s?s.startNode:e.endNode,o=t.endNode.nextSibling;o!==i&&((e,t,s=null,n=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,n),t=s}})(n,t.startNode,o,i)},I=e=>{n(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},P=(e,t,s)=>{const n=new Map;for(let i=t;i<=s;i++)n.set(e[i],i);return n},W=new WeakMap,F=new WeakMap,O=(t=>(...s)=>{const n=t(...s);return e.set(n,!0),n})((e,t,s)=>{let n;return void 0===s?s=t:void 0!==t&&(n=t),t=>{if(!(t instanceof b))throw new Error("repeat can only be used in text bindings");const i=W.get(t)||[],o=F.get(t)||[],l=[],r=[],a=[];let d,c,h=0;for(const t of e)a[h]=n?n(t,h):h,r[h]=s(t,h),h++;let u=0,p=i.length-1,m=0,g=r.length-1;for(;u<=p&&m<=g;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===a[m])l[m]=B(i[u],r[m]),u++,m++;else if(o[p]===a[g])l[g]=B(i[p],r[g]),p--,g--;else if(o[u]===a[g])l[g]=B(i[u],r[g]),H(t,i[u],l[g+1]),u++,g--;else if(o[p]===a[m])l[m]=B(i[p],r[m]),H(t,i[p],i[u]),p--,m++;else if(void 0===d&&(d=P(a,m,g),c=P(o,u,p)),d.has(o[u]))if(d.has(o[p])){const e=c.get(a[m]),s=void 0!==e?i[e]:null;if(null===s){const e=L(t,i[u]);B(e,r[m]),l[m]=e}else l[m]=B(s,r[m]),H(t,s,i[u]),i[e]=null;m++}else I(i[p]),p--;else I(i[u]),u++;for(;m<=g;){const e=L(t,l[g+1]);B(e,r[m]),l[m++]=e}for(;u<=p;){const e=i[u++];null!==e&&I(e)}W.set(t,l),F.set(t,a)}}),j=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],R=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],z=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let q=0;const U=e=>q++%e,D=e=>{const t=[];for(let s=0;s<e;s++)t.push({id:J++,label:`${j[U(j.length)]} ${R[U(R.length)]} ${z[U(z.length)]}`,selected:!1});return t};let G=[],J=1,K=0;const Q=()=>{G=G.concat(D(1e3)),ne()},X=()=>{G=D(1e3),K=0,ne()},Y=()=>{G=D(1e4),K=0,ne()},Z=()=>{G=[],K=0,ne()},ee=()=>{if(G.length>998){const e=G[1];G[1]=G[998],G[998]=e}ne()},te=()=>{for(let e=0;e<G.length;e+=10)G[e].label+=" !!!";ne()},se=document.getElementById("container"),ne=()=>{((e,t,s)=>{let i=M.get(t);void 0===i&&(n(t,t.firstChild),M.set(t,i=new b(Object.assign({templateFactory:k},s))),i.appendInto(t)),i.setValue(e),i.commit()})(ae(),se)},ie=(e,t,s)=>C`<div class="col-sm-6 smallpad"><button type=button class="btn btn-primary btn-block" id=${e} @click=${t}>${s}</button></div>`,oe=e=>C`<span class=${e?"preloadicon glyphicon glyphicon-remove":"glyphicon glyphicon-remove"} aria-hidden=true></span>`,le=(e,t)=>C`<td class=${e}>${t}</td>`,re=({id:e,label:t})=>C`<tr class=${K===e?"danger":""}>${le("col-md-1",e)} ${le("col-md-4",C`<a @click=${()=>{(e=>{K=e,ne()})(e)}}>${t}</a>`)} ${le("col-md-1",C`<a @click=${()=>{(e=>{G.splice(G.findIndex(t=>t.id===e),1),ne()})(e)}}>${oe()}</a>`)} ${le("col-md-6")}</tr>`,ae=()=>C`<div class=container><div class=jumbotron><div class=row><div class=col-md-6><h1>Lit-HTML</h1></div><div class=col-md-6><div class=row>${ie("run",X,"Create 1,000 rows")} ${ie("runlots",Y,"Create 10,000 rows")} ${ie("add",Q,"Append 1,000 rows")} ${ie("update",te,"Update every 10th row")} ${ie("clear",Z,"Clear")} ${ie("swaprows",ee,"Swap Rows")}</div></div></div></div><table class="table table-hover table-striped test-data"><tbody>${O(G,e=>e.id,e=>re(e))}</tbody></table>${oe(!0)}</div>`;ne()}();
