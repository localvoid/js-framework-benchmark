!function(){"use strict";function e(e,n){!function(e,n,t,l){var o=g(),r=h,i=f,s=null===d;h=o,f=l?null:o,n=s?function(e,n){d=a,a.changes.reset(),a.updates.reset();try{return e(n)}finally{h=f=d=null}}(e,n):e(n);h=r,f=i,y(o,e,n,t),s&&function(e,n){if(a.changes.count>0||a.updates.count>0){a.time++;try{v(a)}finally{d=null,h=e,f=n}}}(r,i)}(e,n,!1,!1)}function n(e,n){var t,l=h,o=0===e.length?null:function(){null===r||(null!==d?a.disposes.add(r):A(r))},r=null===o?c:g();let i=n||h;r!==i&&(r.owner=i),h=r;try{t=null===o?e():e(o)}finally{h=l}return null!==o&&y(r,null,void 0,!0)&&(r=null),t}class t{constructor(e){this.value=e,this.pending=r,this.log=null}current(){return null!==f&&function(e){null===e.log&&(e.log={node1:null,node1slot:0,nodes:null,nodeslots:null});!function(e){var n,t=f,l=null===t.source1?-1:null===t.sources?0:t.sources.length;null===e.node1?(e.node1=t,e.node1slot=l,n=-1):null===e.nodes?(e.nodes=[t],e.nodeslots=[l],n=0):(n=e.nodes.length,e.nodes.push(t),e.nodeslots.push(l));null===t.source1?(t.source1=e,t.source1slot=n):null===t.sources?(t.sources=[e],t.sourceslots=[n]):(t.sources.push(e),t.sourceslots.push(n))}(e.log)}(this),this.value}next(e){if(null!==d)if(this.pending!==r){if(e!==this.pending)throw new Error("conflicting changes: "+e+" !== "+this.pending)}else this.pending=e,a.changes.add(this);else null!==this.log?(this.pending=e,a.changes.add(this),b()):this.value=e;return e}}class l{constructor(){this.fn=null,this.age=-1,this.state=i,this.source1=null,this.source1slot=0,this.sources=null,this.sourceslots=null,this.owner=h,this.owned=null,this.cleanups=null}}class o{constructor(){this.items=[],this.count=0}reset(){this.count=0}add(e){this.items[this.count++]=e}run(e){for(var n=this.items,t=0;t<this.count;t++)e(n[t]),n[t]=null;this.count=0}}var r={},i=0,s=1,u=2,c=new l,a={time:0,changes:new o,updates:new o,disposes:new o},d=null,f=null,h=null,p=null;function g(){var e=p;return null===e?e=new l:p=null,e}function y(e,n,t,l){var o,r=l||null===h||h===c?null:h,i=!e.noRecycle&&null===e.source1&&(null===e.owned&&null===e.cleanups||null!==r);if(i){if(p=e,e.owner=null,null!==r){if(null!==e.owned){if(null===r.owned)r.owned=e.owned;else for(o=0;o<e.owned.length;o++)r.owned.push(e.owned[o]);e.owned=null}if(null!==e.cleanups){if(null===r.cleanups)r.cleanups=e.cleanups;else for(o=0;o<e.cleanups.length;o++)r.cleanups.push(e.cleanups[o]);e.cleanups=null}}}else e.fn=n,e.value=t,e.age=a.time,null!==r&&(null===r.owned?r.owned=[e]:r.owned.push(e));return i}function b(){var e=h;a.updates.reset(),a.time++;try{v(a)}finally{d=f=null,h=e}}function v(e){var n=d,t=0;for(d=e,e.disposes.reset();0!==e.changes.count||0!==e.updates.count||0!==e.disposes.count;)if(t>0&&e.time++,e.changes.run(w),e.updates.run(x),e.disposes.run(A),t++>1e5)throw new Error("Runaway clock detected");d=n}function w(e){e.value=e.pending,e.pending=r,e.log&&function(e){var n=e.node1,t=e.nodes;null!==n&&m(n);if(null!==t)for(var l=0,o=t.length;l<o;l++)m(t[l])}(e.log)}function m(e){var n=a.time;e.age<n&&(e.age=n,e.state=s,a.updates.add(e),null!==e.owned&&function e(n){for(var t=0;t<n.length;t++){var l=n[t];l.age=a.time,l.state=i,null!==l.owned&&e(l.owned)}}(e.owned))}function x(e){if(e.state===s){var n=h,t=f;h=f=e,e.state=u,C(e,!1),e.value=e.fn(e.value),e.state=i,h=n,f=t}}function C(e,n){var t,l,o=e.source1,r=e.sources,i=e.sourceslots,s=e.cleanups,u=e.owned;if(null!==s){for(t=0;t<s.length;t++)s[t](n);e.cleanups=null}if(null!==u){for(t=0;t<u.length;t++)A(u[t]);e.owned=null}if(null!==o&&(S(o,e.source1slot),e.source1=null),null!==r)for(t=0,l=r.length;t<l;t++)S(r.pop(),i.pop())}function S(e,n){var t,l,o=e.nodes,r=e.nodeslots;-1===n?e.node1=null:(t=o.pop(),l=r.pop(),n!==o.length&&(o[n]=t,r[n]=l,-1===l?t.source1slot=n:t.sourceslots[l]=n))}function A(e){e.fn=null,e.owner=null,C(e,!0)}const N=Symbol("solid-node"),k=Symbol("solid-proxy");function _(e){return e[k]||(e[k]=new Proxy(e,B))}function j(e){return null!==e&&"object"==typeof e&&(e.__proto__===Object.prototype||Array.isArray(e))}function T(e){let n,t,l;if(n=null!=e&&e._state)return n;if(!j(e))return e;if(Array.isArray(e)){Object.isFrozen(e)&&(e=e.slice(0));for(let n=0,o=e.length;n<o;n++)(t=T(l=e[n]))!==l&&(e[n]=t)}else{Object.isFrozen(e)&&(e=Object.assign({},e));let n=Object.keys(e);for(let o=0,r=n.length;o<r;o++)(t=T(l=e[n[o]]))!==l&&(e[n[o]]=t)}return e}function O(e){let n=e[N];return n||(e[N]=n={}),n}const B={get(e,n){if("_state"===n)return e;if(n===k||n===N)return;const l=e[n],o=j(l);if(null!==f&&"function"!=typeof l){let r,i;o&&(r=O(l))&&(i=r._self||(r._self=new t(void 0))).current(),(i=(r=O(e))[n]||(r[n]=new t(void 0))).current()}return o?_(l):l},set:()=>!0,deleteProperty:()=>!0};function E(e,n,t){if(t=T(t),e[n]===t)return;const l=Array.isArray(e)||!(n in e);void 0===t?delete e[n]:e[n]=t;let o,r=O(e);(o=r[n])&&o.next(),l&&(o=r._self)&&o.next()}function P(e,n){const t=Object.keys(n);for(let l=0;l<t.length;l+=1){const o=t[l];E(e,o,n[o])}}function z(e,n,t=[]){if(1===n.length){let l=n[0];if("function"==typeof l&&void 0===(l=l(_(e),t)))return;return void P(e,l)}const l=n.shift(),o=typeof l,r=Array.isArray(e);if(Array.isArray(l))for(let o=0;o<l.length;o++)z(e,[l[o]].concat(n),t.concat([l[o]]));else if(r&&"function"===o)for(let o=0;o<e.length;o++)l(e[o],o)&&z(e,[o].concat(n),t.concat([o]));else if(r&&"object"===o){const{from:o=0,to:r=e.length-1,by:i=1}=l;for(let l=o;l<=r;l+=i)z(e,[l].concat(n),t.concat([l]))}else if(1===n.length){let o=n[0];if("function"==typeof o){const n=e[l];o=o(j(n)?_(n):n,t.concat([l]))}j(e[l])&&j(o)&&!Array.isArray(o)?P(e[l],o):E(e,l,o)}else z(e[l],n,t.concat([l]))}function M(e){return[_(e=T(e||{})),function(){const n=arguments;!function(e){if(null!==d)e();else{(d=a).changes.reset();try{e(),b()}finally{d=null}}}(()=>{if(Array.isArray(n[0]))for(let t=0;t<n.length;t+=1)z(e,n[t]);else z(e,Array.prototype.slice.call(n))})}]}const R="__rGroup",$="nextSibling",q="previousSibling";let F=0;function I(e){const n=document.createElement("template");return n.innerHTML=e,n}function L(n,t,l,o,r){if(Array.isArray(t)){if(!t.length)return;let e=(t=function e(n,t){for(let l=0,o=t.length;l<o;l++){let o=t[l];o instanceof Node?11===o.nodeType?e(n,o.childNodes):n.push(o):null==o||!0===o||!1===o||(Array.isArray(o)?e(n,o):"string"==typeof o?n.push(document.createTextNode(o)):n.push(document.createTextNode(o.toString())))}return n}([],t))[0];1!==t.length&&(e[R]=t[t.length-1][R]=o);for(let e=0;e<t.length;e++)l?n.insertBefore(t[e],l):n.appendChild(t[e]);return e}let i,s=typeof t;if(null==t||"string"===s||"number"===s)t=document.createTextNode(t||"");else{if("function"===s)return e(()=>{const e=t();if(e){let t=l;i&&(t=i.nextSibling,n.removeChild(i)),i=L(n,e,t,o,r)}}),i||(i=document.createTextNode(""),l?n.insertBefore(i,l):n.appendChild(i)),i;11===t.nodeType&&(i=t.firstChild)&&i!==t.lastChild&&(i[R]=t.lastChild[R]=o)}return l?n.insertBefore(t,l):n.appendChild(t),r&&r(i||t),i||t}function G(e,n,t){const l=e[R];if(l)for(e=e[n];e&&e[R]!==l;)e=e[n];return t?e:e[n]}function H(e,n,t){let l;for(;n!==t;)l=n.nextSibling,e.removeChild(n),n=l}function J(e,n,t,l){return void 0===t?e.textContent="":(Array.isArray(n)?l=n[0]:null!=n&&""!=n&&null==l&&(l=G(t&&t.previousSibling||e.lastChild,q,!0)),l&&H(e,l,t),"")}function K(e,n,t,l,o){if(n===t)return t;e=l&&l.parentNode||o&&o.parentNode||e;const r=typeof n;if("string"===r||"number"===r)if("number"===r&&(n=n.toString()),void 0!==l){const r=l&&l.previousSibling||o&&o.nextSibling||e.lastChild;if(""===n)J(e,t,l);else if(""!==t&&"string"==typeof t)r.data=n;else{const o=document.createTextNode(n);""!==t&&null!=t?e.replaceChild(o,r):e.insertBefore(o,l)}t=n}else t=""!==t&&"string"==typeof t?e.firstChild.data=n:e.textContent=n;else if(null==n||"boolean"===r)t=J(e,t,l);else{if(!(n instanceof Node||Array.isArray(n)))throw new Error("content must be Node, stringable, or array of same");""!==t&&null!=t&&J(e,t,l),L(e,n,l,++F),t=n}return t}function U(n,t,l,o){if("function"!=typeof t)return K(n,t,o,l);let r;void 0!==l&&(r=l?l.previousSibling:n.lastChild),e((e=o)=>K(n,t(),e,l,r))}const D=new Set;function Q(e){return e&&(e.model||Q(e.host||e.parentNode))}function V(e){const n=`__${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t});null!==t;){const l=t[n];if(l){if(l(e,l.length>1?Q(t):void 0),e.cancelBubble)return}t=t.host&&t.host instanceof Node?t.host:t.parentNode}}function W(e,n,t,l){let o;for(;n!==t;)o=n.nextSibling,e.insertBefore(n,l),n=o}function X(e,n){let t;(t=e.get(n))&&t(),e.delete(n)}function Y(e,n){let t=-1,l=e.length;if(l>0&&e[l-1]<=n)return l-1;for(;l-t>1;){let o=Math.floor((t+l)/2);e[o]>n?l=o:t=o}return t}function Z(t,l,o,r,i){let s=new Map,u=!1,c=i?i.previousSibling:null;const{afterRender:a,fallback:d}=r;function p(e,l,r){return n(n=>L(t,o(e,l),r,++F,e=>s.set(e,n)))}function g(){a&&a(c?c.nextSibling:t.firstChild,i)}function y(){for(let e of s.keys())s.get(e)();s.clear()}var b;b=y,null===h?console.warn("cleanups created without a root or parent will never be run"):null===h.cleanups?h.cleanups=[b]:h.cleanups.push(b),e((e=[])=>{const o=l()||[];return function(e){var n,t=f;return f=null,n=e(),f=t,n}(()=>{t=i&&i.parentNode||c&&c.parentNode||t;const l=o.length;if(0===l||u){if(void 0!==i){let e=c?c.nextSibling:t.firstChild;H(t,e,i||null)}else t.textContent="";if(y(),0===l)return g(),d&&(u=!0,n(e=>L(t,d(),i,++F,n=>s.set(n,e)))),[];u=!1}if(0===e.length){for(let e=0;e<l;e++)p(o[e],e,i);return g(),o.slice(0)}let r,a,f=0,h=0,b=!0,v=e.length-1,w=l-1,m=c?c.nextSibling:t.firstChild,x=m,C=i?i.previousSibling:t.lastChild,S=i;e:for(;b;){let n;for(b=!1,r=e[f],a=o[h];r===a;){if(f++,h++,x=m=G(m,$),v<f||w<h)break e;r=e[f],a=o[h]}for(r=e[v],a=o[w];r===a;){if(v--,w--,C=(S=G(C,q,!0)).previousSibling,v<f||w<h)break e;r=e[v],a=o[w]}for(r=e[v],a=o[h];r===a;){b=!0;let l=G(C,q,!0);if(n=l.previousSibling,x!==l&&(W(t,l,C.nextSibling,x),C=n),h++,--v<f||w<h)break e;r=e[v],a=o[h]}for(r=e[f],a=o[w];r===a;){if(b=!0,n=G(m,$),m!==S){let e=n.previousSibling;W(t,m,n,S),S=e,m=n}if(w--,v<++f||w<h)break e;r=e[f],a=o[w]}}if(w<h){if(f<=v){let e,n;for(;f<=v;)e=(n=G(C,q,!0)).previousSibling,H(t,n,C.nextSibling),X(s,n),C=e,v--}return g(),o.slice(0)}if(v<f){if(h<=w)for(;h<=w;)p(o[h],h,S),h++;return g(),o.slice(0)}const A=new Array(w+1-h);for(let e=h;e<=w;e++)A[e]=-1;const N=new Map;for(let e=h;e<=w;e++)N.set(o[e],e);let k=0,_=[];for(let n=f;n<=v;n++)N.has(e[n])?(A[N.get(e[n])]=n,k++):_.push(n);if(0===k){const e=m!==t.firstChild||C!==t.lastChild;let n,l=m;for(S=C.nextSibling;l!==S;)n=G(l,$),X(s,l),e&&H(t,l,n),l=n,f++;!e&&(t.textContent="");for(let e=h;e<=w;e++)p(o[e],e,S);return g(),o.slice(0)}const j=function(e,n){let t=[],l=[],o=-1,r=new Array(e.length);for(let i=n,s=e.length;i<s;i++){let n=e[i];if(n<0)continue;let s=Y(t,n);-1!==s&&(r[i]=l[s]),s===o?(t[++o]=n,l[o]=i):n<t[s+1]&&(t[s+1]=n,l[s+1]=i)}for(let e=l[o];o>=0;e=r[e],o--)t[o]=e;return t}(A,h),T=[];let O,B=m,E=j.length-1;for(let e=f;e<=v;e++)T[e]=B,B=G(B,$);for(let e=0;e<_.length;e++){let n=T[_[e]];H(t,n,G(n,$)),X(s,n)}for(let e=w;e>=h;e--)j[E]===e?(S=T[A[j[E]]],E--):(-1===A[e]?O=p(o[e],e,S):(O=T[A[e]],W(t,O,G(O,$),S)),S=O);return g(),o.slice(0)})})}const ee=I("<div class='col-sm-6 smallpad'><button class='btn btn-primary btn-block' type='button'></button></div>"),ne=I("<div class='container'><div class='jumbotron'><div class='row'><div class='col-md-6'><h1>SolidJS Keyed</h1></div><div class='col-md-6'><div class='row'></div></div></div></div><table class='table table-hover table-striped test-data'><tbody></tbody></table><span class='preloadicon glyphicon glyphicon-remove' aria-hidden='true'></span></div>"),te=I("<tr><td class='col-md-1'></td><td class='col-md-4'><a></a></td><td class='col-md-1'><a><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a></td><td class='col-md-6'></td></tr>");let le=1;const oe=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],re=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],ie=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let se=0;const ue=e=>se++%e;function ce(e){let n=new Array(e);for(let t=0;t<e;t++)n[t]={id:le++,label:`${oe[ue(oe.length)]} ${re[ue(re.length)]} ${ie[ue(ie.length)]}`};return n}const ae=({id:e,text:n,fn:t})=>(function(){const l=ee.content.firstChild.cloneNode(!0),o=l.firstChild;return o.__click=t,o.id=e,U(o,n),l})(),de=()=>{const[n,t]=M({data:[],selected:null}),l=()=>t({data:ce(1e3),selected:null}),o=()=>t({data:ce(1e4),selected:null}),r=()=>t("data",e=>[...e,...ce(1e3)]),i=()=>t("data",{by:10},"label",e=>e+" !!!"),s=()=>t("data",e=>e.length>998?{1:e[998],998:e[1]}:e),u=()=>t({data:[],selected:null});return function(){const c=ne.content.firstChild.cloneNode(!0),a=c.firstChild,d=a.firstChild.firstChild.nextSibling.firstChild,f=a.nextSibling.firstChild;return U(d,ae({id:"run",text:"Create 1,000 rows",fn:l}),null),U(d,ae({id:"runlots",text:"Create 10,000 rows",fn:o}),null),U(d,ae({id:"add",text:"Append 1,000 rows",fn:r}),null),U(d,ae({id:"update",text:"Update every 10th row",fn:i}),null),U(d,ae({id:"clear",text:"Clear",fn:u}),null),U(d,ae({id:"swaprows",text:"Swap Rows",fn:s}),null),Z(f,()=>n.data,l=>(function(){const o=te.content.firstChild.cloneNode(!0),r=o.firstChild,i=r.nextSibling,s=i.firstChild,u=i.nextSibling.firstChild;return e(()=>o.className=n.selected===l.id?"danger":""),U(r,()=>l.id),s.__click=()=>{(e=>t("selected",e))(l.id)},U(s,()=>l.label),u.__click=()=>{(e=>t("data",n=>{const t=n.findIndex(n=>n.id===e);return[...n.slice(0,t),...n.slice(t+1)]}))(l.id)},o})(),{}),c}()};n(()=>document.getElementById("main").appendChild(de())),function(e){for(let n=0,t=e.length;n<t;n++){const t=e[n];D.has(t)||(D.add(t),document.addEventListener(t,V))}}(["click"])}();
