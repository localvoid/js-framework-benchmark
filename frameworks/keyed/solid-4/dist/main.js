!function(){"use strict";function e(e,n){v(e,n,!1,!1)}const n=(e,n)=>e===n;function t(e,t,l){null===b&&console.warn("computations created without a root or parent will never be disposed"),l||(l=n);const[o,i]=function(e,n){const t=new r(e);let l;if(n){let o=-1;l=l=>{if(!n(e,l)){const n=h.time;if(n===o)throw new Error(`Conflicting value update: ${l} is not the same as ${e}`);o=n,e=l,t.next(l)}}}else l=t.next.bind(t);return[t.current.bind(t),l]}(e(void 0),l);return v(n=>(i(n=e(n)),n),t,!1,!1),o}function l(e,n){var t,l=b,o=0===e.length?null:function(){null===r||(null!==p?h.disposes.add(r):j(r))},r=null===o?f:m();let i=n||b;r!==i&&(r.owner=i),b=r;try{t=null===o?e():e(o)}finally{b=l}return null!==o&&w(r,null,void 0,!0)&&(r=null),t}function o(e){var n,t=g;return g=null,n=e(),g=t,n}class r{constructor(e){this.value=e,this.pending=u,this.log=null}current(){return null!==g&&function(e){null===e.log&&(e.log={node1:null,node1slot:0,nodes:null,nodeslots:null});!function(e){var n,t=g,l=null===t.source1?-1:null===t.sources?0:t.sources.length;null===e.node1?(e.node1=t,e.node1slot=l,n=-1):null===e.nodes?(e.nodes=[t],e.nodeslots=[l],n=0):(n=e.nodes.length,e.nodes.push(t),e.nodeslots.push(l));null===t.source1?(t.source1=e,t.source1slot=n):null===t.sources?(t.sources=[e],t.sourceslots=[n]):(t.sources.push(e),t.sourceslots.push(n))}(e.log)}(this),this.value}next(e){if(null!==p)if(this.pending!==u){if(e!==this.pending)throw new Error("conflicting changes: "+e+" !== "+this.pending)}else this.pending=e,h.changes.add(this);else null!==this.log?(this.pending=e,h.changes.add(this),C()):this.value=e;return e}}class i{constructor(){this.fn=null,this.age=-1,this.state=c,this.source1=null,this.source1slot=0,this.sources=null,this.sourceslots=null,this.owner=b,this.owned=null,this.cleanups=null}}class s{constructor(){this.items=[],this.count=0}reset(){this.count=0}add(e){this.items[this.count++]=e}run(e){for(var n=this.items,t=0;t<this.count;t++)e(n[t]),n[t]=null;this.count=0}}var u={},c=0,a=1,d=2,f=new i,h={time:0,changes:new s,updates:new s,disposes:new s},p=null,g=null,b=null,y=null;function v(e,n,t,l){var o=m(),r=b,i=g,s=null===p;b=o,g=l?null:o,n=s?function(e,n){p=h,h.changes.reset(),h.updates.reset();try{return e(n)}finally{b=g=p=null}}(e,n):e(n),b=r,g=i,w(o,e,n,t),s&&function(e,n){if(h.changes.count>0||h.updates.count>0){h.time++;try{x(h)}finally{p=null,b=e,g=n}}}(r,i)}function m(){var e=y;return null===e?e=new i:y=null,e}function w(e,n,t,l){var o,r=l||null===b||b===f?null:b,i=!e.noRecycle&&null===e.source1&&(null===e.owned&&null===e.cleanups||null!==r);if(i){if(y=e,e.owner=null,null!==r){if(null!==e.owned){if(null===r.owned)r.owned=e.owned;else for(o=0;o<e.owned.length;o++)r.owned.push(e.owned[o]);e.owned=null}if(null!==e.cleanups){if(null===r.cleanups)r.cleanups=e.cleanups;else for(o=0;o<e.cleanups.length;o++)r.cleanups.push(e.cleanups[o]);e.cleanups=null}}}else e.fn=n,e.value=t,e.age=h.time,null!==r&&(null===r.owned?r.owned=[e]:r.owned.push(e));return i}function C(){var e=b;h.updates.reset(),h.time++;try{x(h)}finally{p=g=null,b=e}}function x(e){var n=p,t=0;for(p=e,e.disposes.reset();0!==e.changes.count||0!==e.updates.count||0!==e.disposes.count;)if(t>0&&e.time++,e.changes.run(N),e.updates.run(A),e.disposes.run(j),t++>1e5)throw new Error("Runaway clock detected");p=n}function N(e){e.value=e.pending,e.pending=u,e.log&&function(e){var n=e.node1,t=e.nodes;null!==n&&S(n);if(null!==t)for(var l=0,o=t.length;l<o;l++)S(t[l])}(e.log)}function S(e){var n=h.time;e.age<n&&(e.age=n,e.state=a,h.updates.add(e),null!==e.owned&&function e(n){for(var t=0;t<n.length;t++){var l=n[t];l.age=h.time,l.state=c,null!==l.owned&&e(l.owned)}}(e.owned))}function A(e){if(e.state===a){var n=b,t=g;b=g=e,e.state=d,k(e,!1),e.value=e.fn(e.value),e.state=c,b=n,g=t}}function k(e,n){var t,l,o=e.source1,r=e.sources,i=e.sourceslots,s=e.cleanups,u=e.owned;if(null!==s){for(t=0;t<s.length;t++)s[t](n);e.cleanups=null}if(null!==u){for(t=0;t<u.length;t++)j(u[t]);e.owned=null}if(null!==o&&(_(o,e.source1slot),e.source1=null),null!==r)for(t=0,l=r.length;t<l;t++)_(r.pop(),i.pop())}function _(e,n){var t,l,o=e.nodes,r=e.nodeslots;-1===n?e.node1=null:(t=o.pop(),l=r.pop(),n!==o.length&&(o[n]=t,r[n]=l,-1===l?t.source1slot=n:t.sourceslots[l]=n))}function j(e){e.fn=null,e.owner=null,k(e,!0)}const T=Symbol("solid-node"),O=Symbol("solid-proxy");function B(e){return e[O]||(e[O]=new Proxy(e,z))}function E(e){return null!==e&&"object"==typeof e&&(e.__proto__===Object.prototype||Array.isArray(e))}function P(e){let n,t,l;if(n=null!=e&&e._state)return n;if(!E(e))return e;if(Array.isArray(e)){Object.isFrozen(e)&&(e=e.slice(0));for(let n=0,o=e.length;n<o;n++)(t=P(l=e[n]))!==l&&(e[n]=t)}else{Object.isFrozen(e)&&(e=Object.assign({},e));let n=Object.keys(e);for(let o=0,r=n.length;o<r;o++)(t=P(l=e[n[o]]))!==l&&(e[n[o]]=t)}return e}function $(e){let n=e[T];return n||(e[T]=n={}),n}const z={get(e,n){if("_state"===n)return e;if(n===O||n===T)return;const t=e[n],l=E(t);if(null!==g&&"function"!=typeof t){let o,i;l&&(o=$(t))&&(i=o._self||(o._self=new r(void 0))).current(),(i=(o=$(e))[n]||(o[n]=new r(void 0))).current()}return l?B(t):t},set:()=>!0,deleteProperty:()=>!0};function R(e,n,t){if(t=P(t),e[n]===t)return;const l=Array.isArray(e)||!(n in e);void 0===t?delete e[n]:e[n]=t;let o,r=$(e);(o=r[n])&&o.next(),l&&(o=r._self)&&o.next()}function M(e,n){const t=Object.keys(n);for(let l=0;l<t.length;l+=1){const o=t[l];R(e,o,n[o])}}function F(e,n,t=[]){if(1===n.length){let l=n[0];if("function"==typeof l&&void 0===(l=l(B(e),t)))return;return void M(e,l)}const l=n.shift(),o=typeof l,r=Array.isArray(e);if(Array.isArray(l))for(let o=0;o<l.length;o++)F(e,[l[o]].concat(n),t.concat([l[o]]));else if(r&&"function"===o)for(let o=0;o<e.length;o++)l(e[o],o)&&F(e,[o].concat(n),t.concat([o]));else if(r&&"object"===o){const{from:o=0,to:r=e.length-1,by:i=1}=l;for(let l=o;l<=r;l+=i)F(e,[l].concat(n),t.concat([l]))}else if(1===n.length){let o=n[0];if("function"==typeof o){const n=e[l];o=o(E(n)?B(n):n,t.concat([l]))}E(e[l])&&E(o)&&!Array.isArray(o)?M(e[l],o):R(e,l,o)}else F(e[l],n,t.concat([l]))}function q(e){return[B(e=P(e||{})),function(){const n=arguments;!function(e){if(null!==p)e();else{(p=h).changes.reset();try{e(),C()}finally{p=null}}}(()=>{if(Array.isArray(n[0]))for(let t=0;t<n.length;t+=1)F(e,n[t]);else F(e,Array.prototype.slice.call(n))})}]}const I="__rGroup",L="nextSibling",D="previousSibling";let G=0;function H(e){const n=document.createElement("template");return n.innerHTML=e,n}function J(n,t,l,o,r){if(Array.isArray(t)){if(!t.length)return;let e=(t=function e(n,t){for(let l=0,o=t.length;l<o;l++){let o=t[l];o instanceof Node?11===o.nodeType?e(n,o.childNodes):n.push(o):null==o||!0===o||!1===o||(Array.isArray(o)?e(n,o):"string"==typeof o?n.push(document.createTextNode(o)):n.push(document.createTextNode(o.toString())))}return n}([],t))[0];1!==t.length&&(e[I]=t[t.length-1][I]=o);for(let e=0;e<t.length;e++)l?n.insertBefore(t[e],l):n.appendChild(t[e]);return e}let i,s=typeof t;if(null==t||"string"===s||"number"===s)t=document.createTextNode(t||"");else{if("function"===s)return e(()=>{const e=t();if(e){let t=l;i&&(t=i.nextSibling,n.removeChild(i)),i=J(n,e,t,o,r)}}),i||(i=document.createTextNode(""),l?n.insertBefore(i,l):n.appendChild(i)),i;11===t.nodeType&&(i=t.firstChild)&&i!==t.lastChild&&(i[I]=t.lastChild[I]=o)}return l?n.insertBefore(t,l):n.appendChild(t),r&&r(i||t),i||t}function K(e,n,t){const l=e[I];if(l)for(e=e[n];e&&e[I]!==l;)e=e[n];return t?e:e[n]}function U(e,n,t){let l;for(;n!==t;)l=n.nextSibling,e.removeChild(n),n=l}function Q(e,n,t,l){return void 0===t?e.textContent="":(Array.isArray(n)?l=n[0]:null!=n&&""!=n&&null==l&&(l=K(t&&t.previousSibling||e.lastChild,D,!0)),l&&U(e,l,t),"")}function V(e,n,t,l,o){if(n===t)return t;e=l&&l.parentNode||o&&o.parentNode||e;const r=typeof n;if("string"===r||"number"===r)if("number"===r&&(n=n.toString()),void 0!==l){const r=l&&l.previousSibling||o&&o.nextSibling||e.lastChild;if(""===n)Q(e,t,l);else if(""!==t&&"string"==typeof t)r.data=n;else{const o=document.createTextNode(n);""!==t&&null!=t?e.replaceChild(o,r):e.insertBefore(o,l)}t=n}else t=""!==t&&"string"==typeof t?e.firstChild.data=n:e.textContent=n;else if(null==n||"boolean"===r)t=Q(e,t,l);else{if(!(n instanceof Node||Array.isArray(n)))throw new Error("content must be Node, stringable, or array of same");""!==t&&null!=t&&Q(e,t,l),J(e,n,l,++G),t=n}return t}function W(n,t,l,o){if("function"!=typeof t)return V(n,t,o,l);let r;void 0!==l&&(r=l?l.previousSibling:n.lastChild),e((e=o)=>V(n,t(),e,l,r))}function X(e,n){const t=e[n];Object.defineProperty(e,n,{get:()=>t(),enumerable:!0})}const Y=new Set;function Z(e){return e&&(e.model||Z(e.host||e.parentNode))}function ee(e){const n=`__${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t});null!==t;){const l=t[n];if(l){if(l(e,l.length>1?Z(t):void 0),e.cancelBubble)return}t=t.host&&t.host instanceof Node?t.host:t.parentNode}}function ne(e,n,t,l){let o;for(;n!==t;)o=n.nextSibling,e.insertBefore(n,l),n=o}function te(e,n){let t;(t=e.get(n))&&t(),e.delete(n)}function le(e,n){let t=-1,l=e.length;if(l>0&&e[l-1]<=n)return l-1;for(;l-t>1;){let o=Math.floor((t+l)/2);e[o]>n?l=o:t=o}return t}function oe(n,t,r,i,s){let u=new Map,c=!1,a=s?s.previousSibling:null;const{afterRender:d,fallback:f}=i;function h(e,t,o){return l(l=>J(n,r(e,t),o,++G,e=>u.set(e,l)))}function p(){d&&d(a?a.nextSibling:n.firstChild,s)}function g(){for(let e of u.keys())u.get(e)();u.clear()}var y;y=g,null===b?console.warn("cleanups created without a root or parent will never be run"):null===b.cleanups?b.cleanups=[y]:b.cleanups.push(y),e((e=[])=>{const r=t()||[];return o(()=>{n=s&&s.parentNode||a&&a.parentNode||n;const t=r.length;if(0===t||c){if(void 0!==s){let e=a?a.nextSibling:n.firstChild;U(n,e,s||null)}else n.textContent="";if(g(),0===t)return p(),f&&(c=!0,l(e=>J(n,f(),s,++G,n=>u.set(n,e)))),[];c=!1}if(0===e.length){for(let e=0;e<t;e++)h(r[e],e,s);return p(),r.slice(0)}let o,i,d=0,b=0,y=!0,v=e.length-1,m=t-1,w=a?a.nextSibling:n.firstChild,C=w,x=s?s.previousSibling:n.lastChild,N=s;e:for(;y;){let t;for(y=!1,o=e[d],i=r[b];o===i;){if(d++,b++,C=w=K(w,L),v<d||m<b)break e;o=e[d],i=r[b]}for(o=e[v],i=r[m];o===i;){if(v--,m--,x=(N=K(x,D,!0)).previousSibling,v<d||m<b)break e;o=e[v],i=r[m]}for(o=e[v],i=r[b];o===i;){y=!0;let l=K(x,D,!0);if(t=l.previousSibling,C!==l&&(ne(n,l,x.nextSibling,C),x=t),b++,--v<d||m<b)break e;o=e[v],i=r[b]}for(o=e[d],i=r[m];o===i;){if(y=!0,t=K(w,L),w!==N){let e=t.previousSibling;ne(n,w,t,N),N=e,w=t}if(m--,v<++d||m<b)break e;o=e[d],i=r[m]}}if(m<b){if(d<=v){let e,t;for(;d<=v;)e=(t=K(x,D,!0)).previousSibling,U(n,t,x.nextSibling),te(u,t),x=e,v--}return p(),r.slice(0)}if(v<d){if(b<=m)for(;b<=m;)h(r[b],b,N),b++;return p(),r.slice(0)}const S=new Array(m+1-b);for(let e=b;e<=m;e++)S[e]=-1;const A=new Map;for(let e=b;e<=m;e++)A.set(r[e],e);let k=0,_=[];for(let n=d;n<=v;n++)A.has(e[n])?(S[A.get(e[n])]=n,k++):_.push(n);if(0===k){const e=w!==n.firstChild||x!==n.lastChild;let t,l=w;for(N=x.nextSibling;l!==N;)t=K(l,L),te(u,l),e&&U(n,l,t),l=t,d++;!e&&(n.textContent="");for(let e=b;e<=m;e++)h(r[e],e,N);return p(),r.slice(0)}const j=function(e,n){let t=[],l=[],o=-1,r=new Array(e.length);for(let i=n,s=e.length;i<s;i++){let n=e[i];if(n<0)continue;let s=le(t,n);-1!==s&&(r[i]=l[s]),s===o?(t[++o]=n,l[o]=i):n<t[s+1]&&(t[s+1]=n,l[s+1]=i)}for(let e=l[o];o>=0;e=r[e],o--)t[o]=e;return t}(S,b),T=[];let O,B=w,E=j.length-1;for(let e=d;e<=v;e++)T[e]=B,B=K(B,L);for(let e=0;e<_.length;e++){let t=T[_[e]];U(n,t,K(t,L)),te(u,t)}for(let e=m;e>=b;e--)j[E]===e?(N=T[S[j[E]]],E--):(-1===S[e]?O=h(r[e],e,N):(O=T[S[e]],ne(n,O,K(O,L),N)),N=O);return p(),r.slice(0)})})}const re=H("<div class='col-sm-6 smallpad'><button class='btn btn-primary btn-block' type='button'></button></div>"),ie=H("<span aria-hidden='true'></span>"),se=H("<td></td>"),ue=H("<a></a>"),ce=H("<tr></tr>"),ae=H("<div class='container'><div class='jumbotron'><div class='row'><div class='col-md-6'><h1>SolidJS Keyed</h1></div><div class='col-md-6'><div class='row'></div></div></div></div><table class='table table-hover table-striped test-data'><tbody></tbody></table></div>");let de=1;const fe=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],he=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],pe=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let ge=0;const be=e=>ge++%e;function ye(e){let n=new Array(e);for(let t=0;t<e;t++)n[t]={id:de++,label:`${fe[be(fe.length)]} ${he[be(he.length)]} ${pe[be(pe.length)]}`};return n}const ve=({id:e,text:n,fn:t})=>(function(){const l=re.content.firstChild.cloneNode(!0),o=l.firstChild;return o.__click=t,o.id=e,W(o,n),l})(),me=({preload:n})=>(function(){const t=ie.content.firstChild.cloneNode(!0);return e(()=>t.className=n?"preloadicon glyphicon glyphicon-remove":"glyphicon glyphicon-remove"),t})(),we=({className:n,children:l})=>(function(){const r=document.createDocumentFragment(),i=r.insertBefore(document.createTextNode(""),r.firstChild);return function(n,l,r,i,s){let u,c;const{afterRender:a,fallback:d}=i,f=t(l);void 0!==s&&(u=s?s.previousSibling:n.lastChild),e(()=>{const e=f();o(()=>{Q(n=s&&s.parentNode||u&&u.parentNode||n,c,s,u&&u.nextSibling),c=null,null==e||!1===e?(a&&a(c,s),d&&J(n,d(),s,++G,e=>c=e)):J(n,r(e),s,++G,e=>(c=e,a&&a(e,s)))})})}(r,()=>n,()=>(function(){const t=se.content.firstChild.cloneNode(!0);return e(()=>t.className=n),W(t,l),t})(),{},i),r})(),Ce=({state:n,row:t,select:l,remove:o})=>(function(){const r=ce.content.firstChild.cloneNode(!0);return e(()=>r.className=n.selected===t.id?"danger":""),W(r,function(e,n,t){if(t)for(let e=0;e<t.length;e++)X(n,t[e]);return e(n)}(we,{className:"col-md-1",children:()=>t.id},["children"]),null),W(r,we({className:"col-md-4",children:(()=>{const e=ue.content.firstChild.cloneNode(!0);return e.__click=()=>{l(t.id)},W(e,()=>t.label),e})()}),null),W(r,we({className:"col-md-1",children:(()=>{const e=ue.content.firstChild.cloneNode(!0);return e.__click=()=>{o(t.id)},W(e,me({preload:!1})),e})()}),null),W(r,we({className:"col-md-6"}),null),r})();l(()=>document.getElementById("main").appendChild((()=>{const[e,n]=q({data:[],selected:null}),t=()=>n({data:ye(1e3),selected:null}),l=()=>n({data:ye(1e4),selected:null}),o=()=>n("data",e=>[...e,...ye(1e3)]),r=()=>n("data",{by:10},"label",e=>e+" !!!"),i=()=>n("data",e=>e.length>998?{1:e[998],998:e[1]}:e),s=()=>n({data:[],selected:null}),u=e=>n("selected",e),c=e=>n("data",n=>{const t=n.findIndex(n=>n.id===e);return[...n.slice(0,t),...n.slice(t+1)]});return function(){const n=ae.content.firstChild.cloneNode(!0),a=n.firstChild,d=a.firstChild.firstChild.nextSibling.firstChild,f=a.nextSibling.firstChild;return W(d,ve({id:"run",text:"Create 1,000 rows",fn:t}),null),W(d,ve({id:"runlots",text:"Create 10,000 rows",fn:l}),null),W(d,ve({id:"add",text:"Append 1,000 rows",fn:o}),null),W(d,ve({id:"update",text:"Update every 10th row",fn:r}),null),W(d,ve({id:"clear",text:"Clear",fn:s}),null),W(d,ve({id:"swaprows",text:"Swap Rows",fn:i}),null),oe(f,()=>e.data,n=>Ce({state:e,row:n,select:u,remove:c}),{}),W(n,me({preload:!0}),null),n}()})())),function(e){for(let n=0,t=e.length;n<t;n++){const t=e[n];Y.has(t)||(Y.add(t),document.addEventListener(t,ee))}}(["click"])}();