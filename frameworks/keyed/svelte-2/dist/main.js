function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function a(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t}function s(e,t,n){const r=t.subscribe(n);e.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}function l(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function i(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function p(){return f(" ")}function m(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}let b;function h(e){b=e}const y=[],v=Promise.resolve();let w=!1;const N=[],x=[],k=[];function _(e){x.push(e)}function E(){const e=new Set;do{for(;y.length;){const e=y.shift();h(e),L(e.$$)}for(;N.length;)N.shift()();for(;x.length;){const t=x.pop();e.has(t)||(t(),e.add(t))}}while(y.length);for(;k.length;)k.pop()();w=!1}function L(e){e.fragment&&(e.update(e.dirty),o(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(_))}let M;function S(e,t){var n;n=()=>{!function(e,t){e.d(1),t.delete(e.key)}(e,t)},M.callbacks.push(n),e.o(1)}function A(e,t,r){const{fragment:c,on_mount:s,on_destroy:l,after_render:i}=e.$$;c.m(t,r),_(()=>{const t=s.map(n).filter(a);l?l.push(...t):o(t),e.$$.on_mount=[]}),i.forEach(_)}function C(e,t){e.$$.dirty||(y.push(e),w||(w=!0,v.then(E)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function j(t,n,a,c,s,l){const i=b;h(t);const $=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let u=!1;d.ctx=a?a(t,$,(e,n)=>{d.ctx&&s(d.ctx[e],d.ctx[e]=n)&&(d.bound[e]&&d.bound[e](n),u&&C(t,e))}):$,d.update(),u=!0,o(d.before_render),d.fragment=c(d.ctx),n.target&&(n.hydrate?d.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):d.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),A(t,n.target,n.anchor),E()),h(i)}class q{$destroy(){var t,n;n=!0,(t=this).$$&&(o(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function O(t,n=e){let r;const o=[];function a(e){if(a=e,(n=t)!=n?a==a:n!==a||n&&"object"==typeof n||"function"==typeof n){if(t=e,!r)return;o.forEach(e=>e[1]()),o.forEach(e=>e[0](t))}var n,a}return{set:a,update:function(e){a(e(t))},subscribe:function(c,s=e){const l=[c,s];return o.push(l),1===o.length&&(r=n(a)||e),c(t),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&r()}}}}const z=O([]),T=O(-1);function B(t){var n,r,o,a;return{c(){n=u("div"),r=u("button"),o=f(t.title),r.type="button",r.className="btn btn-primary btn-block",r.id=t.id,n.className="col-sm-6 smallpad",a=m(r,"click",t.cb)},m(e,t){$(e,n,t),i(n,r),i(r,o)},p(e,t){e.title&&g(o,t.title),e.id&&(r.id=t.id)},i:e,o:e,d(e){e&&d(n),a()}}}function H(e,t,n){let{id:r,title:o,cb:a}=t;return e.$set=e=>{"id"in e&&n("id",r=e.id),"title"in e&&n("title",o=e.title),"cb"in e&&n("cb",a=e.cb)},{id:r,title:o,cb:a}}class I extends q{constructor(e){super(),j(this,e,H,B,c,["id","title","cb"])}}function P(t){var n,r;return{c(){var e,o,a;(n=u("span")).className=r=t.preload?"preloadicon glyphicon glyphicon-remove":"glyphicon glyphicon-remove",e=n,o="aria-hidden",null==(a="true")?e.removeAttribute(o):e.setAttribute(o,a)},m(e,t){$(e,n,t)},p(e,t){e.preload&&r!==(r=t.preload?"preloadicon glyphicon glyphicon-remove":"glyphicon glyphicon-remove")&&(n.className=r)},i:e,o:e,d(e){e&&d(n)}}}function R(e,t,n){let{preload:r=!1}=t;return e.$set=e=>{"preload"in e&&n("preload",r=e.preload)},{preload:r}}class U extends q{constructor(e){super(),j(this,e,R,P,c,["preload"])}}function D(e){var n,r;const o=e.$$slots.default,a=function(e,t,n){if(e){const r=l(e,t,n);return e[0](r)}}(o,e,null);return{c(){n=u("td"),a&&a.c(),n.className=e.className},l(e){a&&a.l(td_nodes)},m(e,t){$(e,n,t),a&&a.m(n,null),r=!0},p(e,c){a&&a.p&&e.$$scope&&a.p(function(e,n,r,o){return e[1]?t({},t(n.$$scope.changed||{},e[1](o?o(r):{}))):n.$$scope.changed||{}}(o,c,e,null),l(o,c,null)),r&&!e.className||(n.className=c.className)},i(e){r||(a&&a.i&&a.i(e),r=!0)},o(e){a&&a.o&&a.o(e),r=!1},d(e){e&&d(n),a&&a.d(e)}}}function F(e,t,n){let{className:r}=t,{$$slots:o={},$$scope:a}=t;return e.$set=e=>{"className"in e&&n("className",r=e.className),"$$scope"in e&&n("$$scope",a=e.$$scope)},{className:r,$$slots:o,$$scope:a}}class G extends q{constructor(e){super(),j(this,e,F,D,c,["className"])}}function J(e){var t;return{c(){t=f(e.id)},m(e,n){$(e,t,n)},p(e,n){e.id&&g(t,n.id)},d(e){e&&d(t)}}}function K(e){var t,n,r;return{c(){t=u("a"),n=f(e.label),r=m(t,"click",e.select)},m(e,r){$(e,t,r),i(t,n)},p(e,t){e.label&&g(n,t.label)},d(e){e&&d(t),r()}}}function Q(t){var n,r,o,a=new U({});return{c(){n=u("a"),a.$$.fragment.c(),o=m(n,"click",t.remove)},m(e,t){$(e,n,t),A(a,n,null),r=!0},p:e,i(e){r||(a.$$.fragment.i(e),r=!0)},o(e){a.$$.fragment.o(e),r=!1},d(e){e&&d(n),a.$destroy(),o()}}}function V(e){var t,n,r,o,a,c,s=new G({props:{className:"col-md-1",$$slots:{default:[J]},$$scope:{ctx:e}}}),l=new G({props:{className:"col-md-4",$$slots:{default:[K]},$$scope:{ctx:e}}}),f=new G({props:{className:"col-md-1",$$slots:{default:[Q]},$$scope:{ctx:e}}}),m=new G({props:{className:"col-md-6"}});return{c(){t=u("tr"),s.$$.fragment.c(),n=p(),l.$$.fragment.c(),r=p(),f.$$.fragment.c(),o=p(),m.$$.fragment.c(),t.className=a=e.$selected===e.id?"danger":""},m(e,a){$(e,t,a),A(s,t,null),i(t,n),A(l,t,null),i(t,r),A(f,t,null),i(t,o),A(m,t,null),c=!0},p(e,n){var r={};(e.$$scope||e.id)&&(r.$$scope={changed:e,ctx:n}),s.$set(r);var o={};(e.$$scope||e.label)&&(o.$$scope={changed:e,ctx:n}),l.$set(o);var i={};e.$$scope&&(i.$$scope={changed:e,ctx:n}),f.$set(i),c&&!e.$selected&&!e.id||a===(a=n.$selected===n.id?"danger":"")||(t.className=a)},i(e){c||(s.$$.fragment.i(e),l.$$.fragment.i(e),f.$$.fragment.i(e),m.$$.fragment.i(e),c=!0)},o(e){s.$$.fragment.o(e),l.$$.fragment.o(e),f.$$.fragment.o(e),m.$$.fragment.o(e),c=!1},d(e){e&&d(t),s.$destroy(),l.$destroy(),f.$destroy(),m.$destroy()}}}function W(e,t,n){let r;s(e,T,e=>{n("$selected",r=e)});let{id:o,label:a}=t;return e.$set=e=>{"id"in e&&n("id",o=e.id),"label"in e&&n("label",a=e.label)},{id:o,label:a,select:function(){T.set(o)},remove:function(){z.update(e=>{const t=e.findIndex(e=>e.id===o),n=e.slice();return n.splice(t,1),n})},$selected:r}}class X extends q{constructor(e){super(),j(this,e,W,V,c,["id","label"])}}function Y(e,t,n){const r=Object.create(e);return r.row=t[n],r.num=n,r}function Z(e,t){var n,r,o=new X({props:{id:t.row.id,label:t.row.label}});return{key:e,first:null,c(){n=f(""),o.$$.fragment.c(),this.first=n},m(e,t){$(e,n,t),A(o,e,t),r=!0},p(e,t){var n={};e.$data&&(n.id=t.row.id),e.$data&&(n.label=t.row.label),o.$set(n)},i(e){r||(o.$$.fragment.i(e),r=!0)},o(e){o.$$.fragment.o(e),r=!1},d(e){e&&d(n),o.$destroy(e)}}}function ee(e){var t,n,r,a,c,s,l,f,m,g,b,h,y,v,w,N,x=[],k=new Map,_=new I({props:{id:"run",title:"Create 1,000 rows",cb:e.run}}),E=new I({props:{id:"runlots",title:"Create 10,000 rows",cb:e.runLots}}),L=new I({props:{id:"add",title:"Append 1,000 rows",cb:e.add}}),C=new I({props:{id:"update",title:"Update every 10th row",cb:te}}),j=new I({props:{id:"clear",title:"Clear",cb:ne}}),q=new I({props:{id:"swaprows",title:"Swap rows",cb:re}}),O=e.$data;const z=e=>e.row.id;for(var T=0;T<O.length;T+=1){let t=Y(e,O,T),n=z(t);k.set(n,x[T]=Z(n,t))}var B=new U({props:{preload:!0}});return{c(){for(t=u("div"),n=u("div"),(r=u("div")).innerHTML="<h1>Svelte (keyed)</h1>",a=p(),c=u("div"),s=u("div"),_.$$.fragment.c(),l=p(),E.$$.fragment.c(),f=p(),L.$$.fragment.c(),m=p(),C.$$.fragment.c(),g=p(),j.$$.fragment.c(),b=p(),q.$$.fragment.c(),h=p(),y=u("table"),v=u("tbody"),T=0;T<x.length;T+=1)x[T].c();w=p(),B.$$.fragment.c(),r.className="col-md-6",s.className="row",c.className="col-md-6",n.className="row",t.className="jumbotron",y.className="table table-hover table-striped test-data"},m(e,o){for($(e,t,o),i(t,n),i(n,r),i(n,a),i(n,c),i(c,s),A(_,s,null),i(s,l),A(E,s,null),i(s,f),A(L,s,null),i(s,m),A(C,s,null),i(s,g),A(j,s,null),i(s,b),A(q,s,null),$(e,h,o),$(e,y,o),i(y,v),T=0;T<x.length;T+=1)x[T].m(v,null);$(e,w,o),A(B,e,o),N=!0},p(e,t){var n={};e.run&&(n.cb=t.run),_.$set(n);var r={};e.runLots&&(r.cb=t.runLots),E.$set(r);var a={};e.add&&(a.cb=t.add),L.$set(a);var c={};e.update&&(c.cb=te),C.$set(c);var s={};e.clear&&(s.cb=ne),j.$set(s);var l={};e.swapRows&&(l.cb=re),q.$set(l);const i=t.$data;M={remaining:0,callbacks:[]},x=function(e,t,n,r,o,a,c,s,l,i,$,d){let u=e.length,f=a.length,p=u;const m={};for(;p--;)m[e[p].key]=p;const g=[],b=new Map,h=new Map;for(p=f;p--;){const e=d(o,a,p),s=n(e);let l=c.get(s);l?r&&l.p(t,e):(l=i(s,e)).c(),b.set(s,g[p]=l),s in m&&h.set(s,Math.abs(p-m[s]))}const y=new Set,v=new Set;function w(e){e.i&&e.i(1),e.m(s,$),c.set(e.key,e),$=e.first,f--}for(;u&&f;){const t=g[f-1],n=e[u-1],r=t.key,o=n.key;t===n?($=t.first,u--,f--):b.has(o)?!c.has(r)||y.has(r)?w(t):v.has(o)?u--:h.get(r)>h.get(o)?(v.add(r),w(t)):(y.add(o),u--):(l(n,c),u--)}for(;u--;){const t=e[u];b.has(t.key)||l(t,c)}for(;f;)w(g[f-1]);return g}(x,e,z,1,t,i,k,v,S,Z,null,Y),M.remaining||o(M.callbacks)},i(e){if(!N){_.$$.fragment.i(e),E.$$.fragment.i(e),L.$$.fragment.i(e),C.$$.fragment.i(e),j.$$.fragment.i(e),q.$$.fragment.i(e);for(var t=0;t<O.length;t+=1)x[t].i();B.$$.fragment.i(e),N=!0}},o(e){for(_.$$.fragment.o(e),E.$$.fragment.o(e),L.$$.fragment.o(e),C.$$.fragment.o(e),j.$$.fragment.o(e),q.$$.fragment.o(e),T=0;T<x.length;T+=1)x[T].o();B.$$.fragment.o(e),N=!1},d(e){for(e&&d(t),_.$destroy(),E.$destroy(),L.$destroy(),C.$destroy(),j.$destroy(),q.$destroy(),e&&(d(h),d(y)),T=0;T<x.length;T+=1)x[T].d();e&&d(w),B.$destroy(e)}}}function te(){z.update(e=>{e=e.slice();for(let t=0;t<e.length;t+=10){const n=e[t];e[t]={id:n.id,label:n.label+" !!!"}}return e})}function ne(){z.set([]),T.set(-1)}function re(){z.update(e=>{const t=(e=e.slice())[1];return e[1]=e[998],e[998]=t,e})}function oe(e,t,n){let r;s(e,z,e=>{n("$data",r=e)});let o=0;const a=e=>{return o++%e},c=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],l=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],i=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"];let $=1;function d(e){const t=Array(e);for(let n=0;n<e;n++)t[n]={id:$++,label:`${c[a(c.length)]} ${l[a(l.length)]} ${i[a(i.length)]}`};return t}return{run:function(){z.set(d(1e3))},add:function(){z.update(e=>e.concat(d(1e3)))},runLots:function(){z.set(d(1e4)),T.set(-1)},$data:r}}new class extends q{constructor(e){super(),j(this,e,oe,ee,c,[])}}({target:document.querySelector("#main")});