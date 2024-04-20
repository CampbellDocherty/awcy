(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var di={},og={get exports(){return di},set exports(e){di=e}},So={},oe={},ag={get exports(){return oe},set exports(e){oe=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),lg=Symbol.for("react.portal"),ug=Symbol.for("react.fragment"),cg=Symbol.for("react.strict_mode"),dg=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),pg=Symbol.for("react.forward_ref"),mg=Symbol.for("react.suspense"),gg=Symbol.for("react.memo"),vg=Symbol.for("react.lazy"),hc=Symbol.iterator;function yg(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var _f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wf=Object.assign,Sf={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=Sf,this.updater=n||_f}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ef(){}Ef.prototype=Rr.prototype;function ql(e,t,n){this.props=e,this.context=t,this.refs=Sf,this.updater=n||_f}var Yl=ql.prototype=new Ef;Yl.constructor=ql;wf(Yl,Rr.prototype);Yl.isPureReactComponent=!0;var pc=Array.isArray,kf=Object.prototype.hasOwnProperty,Ql={current:null},If={key:!0,ref:!0,__self:!0,__source:!0};function Tf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)kf.call(t,r)&&!If.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Di,type:e,key:s,ref:o,props:i,_owner:Ql.current}}function _g(e,t){return{$$typeof:Di,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Di}function wg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mc=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wg(""+e.key):t.toString(36)}function vs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Di:case lg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qo(o,0):r,pc(i)?(n="",e!=null&&(n=e.replace(mc,"$&/")+"/"),vs(i,t,n,"",function(u){return u})):i!=null&&(Xl(i)&&(i=_g(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",pc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Qo(s,a);o+=vs(s,t,n,l,i)}else if(l=yg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Qo(s,a++),o+=vs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yi(e,t,n){if(e==null)return e;var r=[],i=0;return vs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Sg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},ys={transition:null},Eg={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:ys,ReactCurrentOwner:Ql};L.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Rr;L.Fragment=ug;L.Profiler=dg;L.PureComponent=ql;L.StrictMode=cg;L.Suspense=mg;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)kf.call(t,l)&&!If.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Di,type:e.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:hg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fg,_context:e},e.Consumer=e};L.createElement=Tf;L.createFactory=function(e){var t=Tf.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:pg,render:e}};L.isValidElement=Xl;L.lazy=function(e){return{$$typeof:vg,_payload:{_status:-1,_result:e},_init:Sg}};L.memo=function(e,t){return{$$typeof:gg,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=ys.transition;ys.transition={};try{e()}finally{ys.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return _e.current.useCallback(e,t)};L.useContext=function(e){return _e.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};L.useEffect=function(e,t){return _e.current.useEffect(e,t)};L.useId=function(){return _e.current.useId()};L.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return _e.current.useMemo(e,t)};L.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};L.useRef=function(e){return _e.current.useRef(e)};L.useState=function(e){return _e.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return _e.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(ag);const fi=sg(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=oe,Ig=Symbol.for("react.element"),Tg=Symbol.for("react.fragment"),Cg=Object.prototype.hasOwnProperty,Rg=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pg={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cg.call(t,r)&&!Pg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ig,type:e,key:s,ref:o,props:i,_owner:Rg.current}}So.Fragment=Tg;So.jsx=Cf;So.jsxs=Cf;(function(e){e.exports=So})(og);const Ma=di.Fragment,D=di.jsx,ot=di.jsxs;var ba={},Fa={},Ag={get exports(){return Fa},set exports(e){Fa=e}},Ue={},za={},Ng={get exports(){return za},set exports(e){za=e}},Rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,P){var N=T.length;T.push(P);e:for(;0<N;){var z=N-1>>>1,$=T[z];if(0<i($,P))T[z]=P,T[N]=$,N=z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],N=T.pop();if(N!==P){T[0]=N;e:for(var z=0,$=T.length,mn=$>>>1;z<mn;){var We=2*(z+1)-1,Nt=T[We],Ae=We+1,ft=T[Ae];if(0>i(Nt,N))Ae<$&&0>i(ft,Nt)?(T[z]=ft,T[Ae]=N,z=Ae):(T[z]=Nt,T[We]=N,z=We);else if(Ae<$&&0>i(ft,N))T[z]=ft,T[Ae]=N,z=Ae;else break e}}return P}function i(T,P){var N=T.sortIndex-P.sortIndex;return N!==0?N:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,p=null,m=3,v=!1,y=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=T)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function g(T){if(_=!1,d(T),!y)if(n(l)!==null)y=!0,Dr(E);else{var P=n(u);P!==null&&pn(g,P.startTime-T)}}function E(T,P){y=!1,_&&(_=!1,h(I),I=-1),v=!0;var N=m;try{for(d(P),p=n(l);p!==null&&(!(p.expirationTime>P)||T&&!Pe());){var z=p.callback;if(typeof z=="function"){p.callback=null,m=p.priorityLevel;var $=z(p.expirationTime<=P);P=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(l)&&r(l),d(P)}else r(l);p=n(l)}if(p!==null)var mn=!0;else{var We=n(u);We!==null&&pn(g,We.startTime-P),mn=!1}return mn}finally{p=null,m=N,v=!1}}var S=!1,w=null,I=-1,U=5,x=-1;function Pe(){return!(e.unstable_now()-x<U)}function fn(){if(w!==null){var T=e.unstable_now();x=T;var P=!0;try{P=w(!0,T)}finally{P?hn():(S=!1,w=null)}}else S=!1}var hn;if(typeof c=="function")hn=function(){c(fn)};else if(typeof MessageChannel<"u"){var Ki=new MessageChannel,qo=Ki.port2;Ki.port1.onmessage=fn,hn=function(){qo.postMessage(null)}}else hn=function(){R(fn,0)};function Dr(T){w=T,S||(S=!0,hn())}function pn(T,P){I=R(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Dr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var N=m;m=P;try{return T()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=m;m=T;try{return P()}finally{m=N}},e.unstable_scheduleCallback=function(T,P,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=N+$,T={id:f++,callback:P,priorityLevel:T,startTime:N,expirationTime:$,sortIndex:-1},N>z?(T.sortIndex=N,t(u,T),n(l)===null&&T===n(u)&&(_?(h(I),I=-1):_=!0,pn(g,N-z))):(T.sortIndex=$,t(l,T),y||v||(y=!0,Dr(E))),T},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(T){var P=m;return function(){var N=m;m=P;try{return T.apply(this,arguments)}finally{m=N}}}})(Rf);(function(e){e.exports=Rf})(Ng);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=oe,De=za;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Af=new Set,hi={};function Fn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(hi[e]=t,e=0;e<t.length;e++)Af.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,Og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},vc={};function xg(e){return $a.call(vc,e)?!0:$a.call(gc,e)?!1:Og.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function Lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dg(e,t,n,r){if(t===null||typeof t>"u"||Lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function Zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,Zl);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,Zl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,Zl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function eu(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dg(t,n,i,r)&&(n=null),r||i===null?xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),tu=Symbol.for("react.strict_mode"),ja=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Of=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),ru=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Mr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Xo;function Gr(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Jo=!1;function Zo(e,t){if(!e||Jo)return"";Jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Ug(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Va(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Vn:return"Portal";case ja:return"Profiler";case tu:return"StrictMode";case Ba:return"Suspense";case Ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Of:return(e.displayName||"Context")+".Consumer";case Nf:return(e._context.displayName||"Context")+".Provider";case nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ru:return t=e.displayName||null,t!==null?t:Va(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Va(e(t))}catch{}}return null}function Mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Va(t);case 8:return t===tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bg(e){var t=Lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=bg(e))}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uf(e,t){t=t.checked,t!=null&&eu(e,"checked",t,!1)}function Ga(e,t){Uf(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ka(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ka(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ka(e,t,n){(t!=="number"||Fs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Kr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function Mf(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ec(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ji,Ff=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fg=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){Fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function zf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zg=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,t){if(t){if(zg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,sr=null,or=null;function kc(e){if(e=bi(e)){if(typeof Za!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Co(t),Za(e.stateNode,e.type,t))}}function jf(e){sr?or?or.push(e):or=[e]:sr=e}function Bf(){if(sr){var e=sr,t=or;if(or=sr=null,kc(e),t)for(e=0;e<t.length;e++)kc(t[e])}}function Hf(e,t){return e(t)}function Vf(){}var ea=!1;function Wf(e,t,n){if(ea)return e(t,n);ea=!0;try{return Hf(e,t,n)}finally{ea=!1,(sr!==null||or!==null)&&(Vf(),Bf())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var el=!1;if(kt)try{var br={};Object.defineProperty(br,"passive",{get:function(){el=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{el=!1}function $g(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ei=!1,zs=null,$s=!1,tl=null,jg={onError:function(e){ei=!0,zs=e}};function Bg(e,t,n,r,i,s,o,a,l){ei=!1,zs=null,$g.apply(jg,arguments)}function Hg(e,t,n,r,i,s,o,a,l){if(Bg.apply(this,arguments),ei){if(ei){var u=zs;ei=!1,zs=null}else throw Error(k(198));$s||($s=!0,tl=u)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ic(e){if(zn(e)!==e)throw Error(k(188))}function Vg(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ic(i),e;if(s===r)return Ic(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Kf(e){return e=Vg(e),e!==null?qf(e):null}function qf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qf(e);if(t!==null)return t;e=e.sibling}return null}var Yf=De.unstable_scheduleCallback,Tc=De.unstable_cancelCallback,Wg=De.unstable_shouldYield,Gg=De.unstable_requestPaint,Z=De.unstable_now,Kg=De.unstable_getCurrentPriorityLevel,su=De.unstable_ImmediatePriority,Qf=De.unstable_UserBlockingPriority,js=De.unstable_NormalPriority,qg=De.unstable_LowPriority,Xf=De.unstable_IdlePriority,Eo=null,lt=null;function Yg(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Jg,Qg=Math.log,Xg=Math.LN2;function Jg(e){return e>>>=0,e===0?32:31-(Qg(e)/Xg|0)|0}var Zi=64,es=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=qr(a):(s&=o,s!==0&&(r=qr(s)))}else o=n&~i,o!==0?r=qr(o):s!==0&&(r=qr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Qe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zg(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jf(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Zf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eh,au,th,nh,rh,rl=!1,ts=[],Gt=null,Kt=null,qt=null,gi=new Map,vi=new Map,bt=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function Fr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=bi(t),t!==null&&au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rv(e,t,n,r,i){switch(t){case"focusin":return Gt=Fr(Gt,e,t,n,r,i),!0;case"dragenter":return Kt=Fr(Kt,e,t,n,r,i),!0;case"mouseover":return qt=Fr(qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return gi.set(s,Fr(gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vi.set(s,Fr(vi.get(s)||null,e,t,n,r,i)),!0}return!1}function ih(e){var t=wn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gf(n),t!==null){e.blockedOn=t,rh(e.priority,function(){th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return t=bi(n),t!==null&&au(t),e.blockedOn=n,!1;t.shift()}return!0}function Rc(e,t,n){_s(e)&&n.delete(t)}function iv(){rl=!1,Gt!==null&&_s(Gt)&&(Gt=null),Kt!==null&&_s(Kt)&&(Kt=null),qt!==null&&_s(qt)&&(qt=null),gi.forEach(Rc),vi.forEach(Rc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,iv)))}function yi(e){function t(i){return zr(i,e)}if(0<ts.length){zr(ts[0],e);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&zr(Gt,e),Kt!==null&&zr(Kt,e),qt!==null&&zr(qt,e),gi.forEach(t),vi.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)ih(n),n.blockedOn===null&&bt.shift()}var ar=Pt.ReactCurrentBatchConfig,Hs=!0;function sv(e,t,n,r){var i=F,s=ar.transition;ar.transition=null;try{F=1,lu(e,t,n,r)}finally{F=i,ar.transition=s}}function ov(e,t,n,r){var i=F,s=ar.transition;ar.transition=null;try{F=4,lu(e,t,n,r)}finally{F=i,ar.transition=s}}function lu(e,t,n,r){if(Hs){var i=il(e,t,n,r);if(i===null)da(e,t,r,Vs,n),Cc(e,r);else if(rv(i,e,t,n,r))r.stopPropagation();else if(Cc(e,r),t&4&&-1<nv.indexOf(e)){for(;i!==null;){var s=bi(i);if(s!==null&&eh(s),s=il(e,t,n,r),s===null&&da(e,t,r,Vs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var Vs=null;function il(e,t,n,r){if(Vs=null,e=iu(r),e=wn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vs=e,null}function sh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case su:return 1;case Qf:return 4;case js:case qg:return 16;case Xf:return 536870912;default:return 16}default:return 16}}var Vt=null,uu=null,ws=null;function oh(){if(ws)return ws;var e,t=uu,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ws=i.slice(e,1<r?1-r:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ns(){return!0}function Pc(){return!1}function Me(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ns:Pc,this.isPropagationStopped=Pc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=Me(Pr),Mi=Q({},Pr,{view:0,detail:0}),av=Me(Mi),na,ra,$r,ko=Q({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(na=e.screenX-$r.screenX,ra=e.screenY-$r.screenY):ra=na=0,$r=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),Ac=Me(ko),lv=Q({},ko,{dataTransfer:0}),uv=Me(lv),cv=Q({},Mi,{relatedTarget:0}),ia=Me(cv),dv=Q({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Me(dv),hv=Q({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pv=Me(hv),mv=Q({},Pr,{data:0}),Nc=Me(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yv[e])?!!t[e]:!1}function du(){return _v}var wv=Q({},Mi,{key:function(e){if(e.key){var t=gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sv=Me(wv),Ev=Q({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=Me(Ev),kv=Q({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Iv=Me(kv),Tv=Q({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Me(Tv),Rv=Q({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Me(Rv),Av=[9,13,27,32],fu=kt&&"CompositionEvent"in window,ti=null;kt&&"documentMode"in document&&(ti=document.documentMode);var Nv=kt&&"TextEvent"in window&&!ti,ah=kt&&(!fu||ti&&8<ti&&11>=ti),xc=String.fromCharCode(32),Lc=!1;function lh(e,t){switch(e){case"keyup":return Av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Ov(e,t){switch(e){case"compositionend":return uh(t);case"keypress":return t.which!==32?null:(Lc=!0,xc);case"textInput":return e=t.data,e===xc&&Lc?null:e;default:return null}}function xv(e,t){if(Gn)return e==="compositionend"||!fu&&lh(e,t)?(e=oh(),ws=uu=Vt=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function ch(e,t,n,r){jf(r),t=Ws(t,"onChange"),0<t.length&&(n=new cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ni=null,_i=null;function Dv(e){Sh(e,0)}function Io(e){var t=Yn(e);if(Df(t))return e}function Uv(e,t){if(e==="change")return t}var dh=!1;if(kt){var sa;if(kt){var oa="oninput"in document;if(!oa){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),oa=typeof Uc.oninput=="function"}sa=oa}else sa=!1;dh=sa&&(!document.documentMode||9<document.documentMode)}function Mc(){ni&&(ni.detachEvent("onpropertychange",fh),_i=ni=null)}function fh(e){if(e.propertyName==="value"&&Io(_i)){var t=[];ch(t,_i,e,iu(e)),Wf(Dv,t)}}function Mv(e,t,n){e==="focusin"?(Mc(),ni=t,_i=n,ni.attachEvent("onpropertychange",fh)):e==="focusout"&&Mc()}function bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(_i)}function Fv(e,t){if(e==="click")return Io(t)}function zv(e,t){if(e==="input"||e==="change")return Io(t)}function $v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:$v;function wi(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$a.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,t){var n=bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function hh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ph(){for(var e=window,t=Fs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fs(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jv(e){var t=ph(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hh(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Fc(n,s);var o=Fc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bv=kt&&"documentMode"in document&&11>=document.documentMode,Kn=null,sl=null,ri=null,ol=!1;function zc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ol||Kn==null||Kn!==Fs(r)||(r=Kn,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ri&&wi(ri,r)||(ri=r,r=Ws(sl,"onSelect"),0<r.length&&(t=new cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function rs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},aa={},mh={};kt&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function To(e){if(aa[e])return aa[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mh)return aa[e]=t[n];return e}var gh=To("animationend"),vh=To("animationiteration"),yh=To("animationstart"),_h=To("transitionend"),wh=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){wh.set(e,t),Fn(t,[e])}for(var la=0;la<$c.length;la++){var ua=$c[la],Hv=ua.toLowerCase(),Vv=ua[0].toUpperCase()+ua.slice(1);ln(Hv,"on"+Vv)}ln(gh,"onAnimationEnd");ln(vh,"onAnimationIteration");ln(yh,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(_h,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hg(r,t,void 0,e),e.currentTarget=null}function Sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;jc(i,a,u),s=l}}}if($s)throw e=tl,$s=!1,tl=null,e}function H(e,t){var n=t[dl];n===void 0&&(n=t[dl]=new Set);var r=e+"__bubble";n.has(r)||(Eh(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),Eh(n,e,r,t)}var is="_reactListening"+Math.random().toString(36).slice(2);function Si(e){if(!e[is]){e[is]=!0,Af.forEach(function(n){n!=="selectionchange"&&(Wv.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[is]||(t[is]=!0,ca("selectionchange",!1,t))}}function Eh(e,t,n,r){switch(sh(t)){case 1:var i=sv;break;case 4:i=ov;break;default:i=lu}n=i.bind(null,t,n,e),i=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function da(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Wf(function(){var u=s,f=iu(n),p=[];e:{var m=wh.get(e);if(m!==void 0){var v=cu,y=e;switch(e){case"keypress":if(Ss(n)===0)break e;case"keydown":case"keyup":v=Sv;break;case"focusin":y="focus",v=ia;break;case"focusout":y="blur",v=ia;break;case"beforeblur":case"afterblur":v=ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Iv;break;case gh:case vh:case yh:v=fv;break;case _h:v=Cv;break;case"scroll":v=av;break;case"wheel":v=Pv;break;case"copy":case"cut":case"paste":v=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Oc}var _=(t&4)!==0,R=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,h!==null&&(g=mi(c,h),g!=null&&_.push(Ei(c,g,d)))),R)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,f),p.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ja&&(y=n.relatedTarget||n.fromElement)&&(wn(y)||y[It]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?wn(y):null,y!==null&&(R=zn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Ac,g="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Oc,g="onPointerLeave",h="onPointerEnter",c="pointer"),R=v==null?m:Yn(v),d=y==null?m:Yn(y),m=new _(g,c+"leave",v,n,f),m.target=R,m.relatedTarget=d,g=null,wn(f)===u&&(_=new _(h,c+"enter",y,n,f),_.target=d,_.relatedTarget=R,g=_),R=g,v&&y)t:{for(_=v,h=y,c=0,d=_;d;d=jn(d))c++;for(d=0,g=h;g;g=jn(g))d++;for(;0<c-d;)_=jn(_),c--;for(;0<d-c;)h=jn(h),d--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=jn(_),h=jn(h)}_=null}else _=null;v!==null&&Bc(p,m,v,_,!1),y!==null&&R!==null&&Bc(p,R,y,_,!0)}}e:{if(m=u?Yn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Uv;else if(Dc(m))if(dh)E=zv;else{E=bv;var S=Mv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Fv);if(E&&(E=E(e,u))){ch(p,E,n,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Ka(m,"number",m.value)}switch(S=u?Yn(u):window,e){case"focusin":(Dc(S)||S.contentEditable==="true")&&(Kn=S,sl=u,ri=null);break;case"focusout":ri=sl=Kn=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,zc(p,n,f);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":zc(p,n,f)}var w;if(fu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Gn?lh(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(ah&&n.locale!=="ko"&&(Gn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Gn&&(w=oh()):(Vt=f,uu="value"in Vt?Vt.value:Vt.textContent,Gn=!0)),S=Ws(u,I),0<S.length&&(I=new Nc(I,e,null,n,f),p.push({event:I,listeners:S}),w?I.data=w:(w=uh(n),w!==null&&(I.data=w)))),(w=Nv?Ov(e,n):xv(e,n))&&(u=Ws(u,"onBeforeInput"),0<u.length&&(f=new Nc("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=w))}Sh(p,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ws(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=mi(e,n),s!=null&&r.unshift(Ei(e,s,i)),s=mi(e,t),s!=null&&r.push(Ei(e,s,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=mi(n,s),l!=null&&o.unshift(Ei(n,l,a))):i||(l=mi(n,s),l!=null&&o.push(Ei(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Hc(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Kv,"")}function ss(e,t,n){if(t=Hc(t),Hc(e)!==t&&n)throw Error(k(425))}function Gs(){}var al=null,ll=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Vc=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Vc<"u"?function(e){return Vc.resolve(null).then(e).catch(Qv)}:cl;function Qv(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),st="__reactFiber$"+Ar,ki="__reactProps$"+Ar,It="__reactContainer$"+Ar,dl="__reactEvents$"+Ar,Xv="__reactListeners$"+Ar,Jv="__reactHandles$"+Ar;function wn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wc(e);e!==null;){if(n=e[st])return n;e=Wc(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[st]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Co(e){return e[ki]||null}var fl=[],Qn=-1;function un(e){return{current:e}}function W(e){0>Qn||(e.current=fl[Qn],fl[Qn]=null,Qn--)}function B(e,t){Qn++,fl[Qn]=e.current,e.current=t}var an={},pe=un(an),Te=un(!1),An=an;function pr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Ks(){W(Te),W(pe)}function Gc(e,t,n){if(pe.current!==an)throw Error(k(168));B(pe,t),B(Te,n)}function kh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Mg(e)||"Unknown",i));return Q({},n,r)}function qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,An=pe.current,B(pe,e),B(Te,Te.current),!0}function Kc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=kh(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,W(Te),W(pe),B(pe,e)):W(Te),B(Te,n)}var mt=null,Ro=!1,ha=!1;function Ih(e){mt===null?mt=[e]:mt.push(e)}function Zv(e){Ro=!0,Ih(e)}function cn(){if(!ha&&mt!==null){ha=!0;var e=0,t=F;try{var n=mt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Ro=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Yf(su,cn),i}finally{F=t,ha=!1}}return null}var Xn=[],Jn=0,Ys=null,Qs=0,Fe=[],ze=0,Nn=null,gt=1,vt="";function vn(e,t){Xn[Jn++]=Qs,Xn[Jn++]=Ys,Ys=e,Qs=t}function Th(e,t,n){Fe[ze++]=gt,Fe[ze++]=vt,Fe[ze++]=Nn,Nn=e;var r=gt;e=vt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var s=32-Qe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gt=1<<32-Qe(t)+i|n<<i|r,vt=s+e}else gt=1<<s|n<<i|r,vt=e}function pu(e){e.return!==null&&(vn(e,1),Th(e,1,0))}function mu(e){for(;e===Ys;)Ys=Xn[--Jn],Xn[Jn]=null,Qs=Xn[--Jn],Xn[Jn]=null;for(;e===Nn;)Nn=Fe[--ze],Fe[ze]=null,vt=Fe[--ze],Fe[ze]=null,gt=Fe[--ze],Fe[ze]=null}var Le=null,Oe=null,G=!1,Ye=null;function Ch(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,Oe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,Oe=null,!0):!1;default:return!1}}function hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(G){var t=Oe;if(t){var n=t;if(!qc(e,t)){if(hl(e))throw Error(k(418));t=Yt(n.nextSibling);var r=Le;t&&qc(e,t)?Ch(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(hl(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function os(e){if(e!==Le)return!1;if(!G)return Yc(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Oe)){if(hl(e))throw Rh(),Error(k(418));for(;t;)Ch(e,t),t=Yt(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Le?Yt(e.stateNode.nextSibling):null;return!0}function Rh(){for(var e=Oe;e;)e=Yt(e.nextSibling)}function mr(){Oe=Le=null,G=!1}function gu(e){Ye===null?Ye=[e]:Ye.push(e)}var ey=Pt.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xs=un(null),Js=null,Zn=null,vu=null;function yu(){vu=Zn=Js=null}function _u(e){var t=Xs.current;W(Xs),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){Js=e,vu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(vu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Js===null)throw Error(k(308));Zn=e,Js.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Sn=null;function wu(e){Sn===null?Sn=[e]:Sn.push(e)}function Ph(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,wu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function Es(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}function Qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zs(e,t,n,r){var i=e.updateQueue;Mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,f=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=Q({},p,m);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=p):f=f.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);xn|=o,e.lanes=o,e.memoizedState=p}}function Xc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Nh=new Pf.Component().refs;function gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Jt(e),s=Et(r,i);s.payload=t,n!=null&&(s.callback=n),t=Qt(e,s,i),t!==null&&(Xe(t,e,i,r),Es(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Jt(e),s=Et(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Qt(e,s,i),t!==null&&(Xe(t,e,i,r),Es(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Jt(e),i=Et(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(Xe(t,e,r,n),Es(t,e,r))}};function Jc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(i,s):!0}function Oh(e,t,n){var r=!1,i=an,s=t.contextType;return typeof s=="object"&&s!==null?s=Be(s):(i=Ce(t)?An:pe.current,r=t.contextTypes,s=(r=r!=null)?pr(e,i):an),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Nh,Su(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Be(s):(s=Ce(t)?An:pe.current,i.context=pr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(gl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Po.enqueueReplaceState(i,i.state,null),Zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Nh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function as(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function xh(e){function t(h,c){if(e){var d=h.deletions;d===null?(h.deletions=[c],h.flags|=16):d.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Zt(h,c),h.index=0,h.sibling=null,h}function s(h,c,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<c?(h.flags|=2,c):d):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,d,g){return c===null||c.tag!==6?(c=wa(d,h.mode,g),c.return=h,c):(c=i(c,d),c.return=h,c)}function l(h,c,d,g){var E=d.type;return E===Wn?f(h,c,d.props.children,g,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ut&&ed(E)===c.type)?(g=i(c,d.props),g.ref=jr(h,c,d),g.return=h,g):(g=Ps(d.type,d.key,d.props,null,h.mode,g),g.ref=jr(h,c,d),g.return=h,g)}function u(h,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Sa(d,h.mode,g),c.return=h,c):(c=i(c,d.children||[]),c.return=h,c)}function f(h,c,d,g,E){return c===null||c.tag!==7?(c=Tn(d,h.mode,g,E),c.return=h,c):(c=i(c,d),c.return=h,c)}function p(h,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=wa(""+c,h.mode,d),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qi:return d=Ps(c.type,c.key,c.props,null,h.mode,d),d.ref=jr(h,null,c),d.return=h,d;case Vn:return c=Sa(c,h.mode,d),c.return=h,c;case Ut:var g=c._init;return p(h,g(c._payload),d)}if(Kr(c)||Mr(c))return c=Tn(c,h.mode,d,null),c.return=h,c;as(h,c)}return null}function m(h,c,d,g){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(h,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qi:return d.key===E?l(h,c,d,g):null;case Vn:return d.key===E?u(h,c,d,g):null;case Ut:return E=d._init,m(h,c,E(d._payload),g)}if(Kr(d)||Mr(d))return E!==null?null:f(h,c,d,g,null);as(h,d)}return null}function v(h,c,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return h=h.get(d)||null,a(c,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qi:return h=h.get(g.key===null?d:g.key)||null,l(c,h,g,E);case Vn:return h=h.get(g.key===null?d:g.key)||null,u(c,h,g,E);case Ut:var S=g._init;return v(h,c,d,S(g._payload),E)}if(Kr(g)||Mr(g))return h=h.get(d)||null,f(c,h,g,E,null);as(c,g)}return null}function y(h,c,d,g){for(var E=null,S=null,w=c,I=c=0,U=null;w!==null&&I<d.length;I++){w.index>I?(U=w,w=null):U=w.sibling;var x=m(h,w,d[I],g);if(x===null){w===null&&(w=U);break}e&&w&&x.alternate===null&&t(h,w),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x,w=U}if(I===d.length)return n(h,w),G&&vn(h,I),E;if(w===null){for(;I<d.length;I++)w=p(h,d[I],g),w!==null&&(c=s(w,c,I),S===null?E=w:S.sibling=w,S=w);return G&&vn(h,I),E}for(w=r(h,w);I<d.length;I++)U=v(w,h,I,d[I],g),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?I:U.key),c=s(U,c,I),S===null?E=U:S.sibling=U,S=U);return e&&w.forEach(function(Pe){return t(h,Pe)}),G&&vn(h,I),E}function _(h,c,d,g){var E=Mr(d);if(typeof E!="function")throw Error(k(150));if(d=E.call(d),d==null)throw Error(k(151));for(var S=E=null,w=c,I=c=0,U=null,x=d.next();w!==null&&!x.done;I++,x=d.next()){w.index>I?(U=w,w=null):U=w.sibling;var Pe=m(h,w,x.value,g);if(Pe===null){w===null&&(w=U);break}e&&w&&Pe.alternate===null&&t(h,w),c=s(Pe,c,I),S===null?E=Pe:S.sibling=Pe,S=Pe,w=U}if(x.done)return n(h,w),G&&vn(h,I),E;if(w===null){for(;!x.done;I++,x=d.next())x=p(h,x.value,g),x!==null&&(c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return G&&vn(h,I),E}for(w=r(h,w);!x.done;I++,x=d.next())x=v(w,h,I,x.value,g),x!==null&&(e&&x.alternate!==null&&w.delete(x.key===null?I:x.key),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return e&&w.forEach(function(fn){return t(h,fn)}),G&&vn(h,I),E}function R(h,c,d,g){if(typeof d=="object"&&d!==null&&d.type===Wn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Qi:e:{for(var E=d.key,S=c;S!==null;){if(S.key===E){if(E=d.type,E===Wn){if(S.tag===7){n(h,S.sibling),c=i(S,d.props.children),c.return=h,h=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ut&&ed(E)===S.type){n(h,S.sibling),c=i(S,d.props),c.ref=jr(h,S,d),c.return=h,h=c;break e}n(h,S);break}else t(h,S);S=S.sibling}d.type===Wn?(c=Tn(d.props.children,h.mode,g,d.key),c.return=h,h=c):(g=Ps(d.type,d.key,d.props,null,h.mode,g),g.ref=jr(h,c,d),g.return=h,h=g)}return o(h);case Vn:e:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(h,c.sibling),c=i(c,d.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Sa(d,h.mode,g),c.return=h,h=c}return o(h);case Ut:return S=d._init,R(h,c,S(d._payload),g)}if(Kr(d))return y(h,c,d,g);if(Mr(d))return _(h,c,d,g);as(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,d),c.return=h,h=c):(n(h,c),c=wa(d,h.mode,g),c.return=h,h=c),o(h)):n(h,c)}return R}var gr=xh(!0),Lh=xh(!1),Fi={},ut=un(Fi),Ii=un(Fi),Ti=un(Fi);function En(e){if(e===Fi)throw Error(k(174));return e}function Eu(e,t){switch(B(Ti,t),B(Ii,e),B(ut,Fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ya(t,e)}W(ut),B(ut,t)}function vr(){W(ut),W(Ii),W(Ti)}function Dh(e){En(Ti.current);var t=En(ut.current),n=Ya(t,e.type);t!==n&&(B(Ii,e),B(ut,n))}function ku(e){Ii.current===e&&(W(ut),W(Ii))}var q=un(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function Iu(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var ks=Pt.ReactCurrentDispatcher,ma=Pt.ReactCurrentBatchConfig,On=0,Y=null,ne=null,ie=null,to=!1,ii=!1,Ci=0,ty=0;function de(){throw Error(k(321))}function Tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,s){if(On=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?sy:oy,e=n(r,i),ii){s=0;do{if(ii=!1,Ci=0,25<=s)throw Error(k(301));s+=1,ie=ne=null,t.updateQueue=null,ks.current=ay,e=n(r,i)}while(ii)}if(ks.current=no,t=ne!==null&&ne.next!==null,On=0,ie=ne=Y=null,to=!1,t)throw Error(k(300));return e}function Ru(){var e=Ci!==0;return Ci=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function He(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Ri(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=He(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((On&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Y.lanes|=f,xn|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ze(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,xn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=He(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ze(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Uh(){}function Mh(e,t){var n=Y,r=He(),i=t(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,Pu(zh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Fh.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));On&30||bh(n,t,i)}return i}function bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fh(e,t,n,r){t.value=n,t.getSnapshot=r,$h(t)&&jh(e)}function zh(e,t,n){return n(function(){$h(t)&&jh(e)})}function $h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function jh(e){var t=Tt(e,1);t!==null&&Xe(t,e,1,-1)}function td(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=iy.bind(null,Y,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bh(){return He().memoizedState}function Is(e,t,n,r){var i=rt();Y.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var i=He();r=r===void 0?null:r;var s=void 0;if(ne!==null){var o=ne.memoizedState;if(s=o.destroy,r!==null&&Tu(r,o.deps)){i.memoizedState=Pi(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Pi(1|t,n,s,r)}function nd(e,t){return Is(8390656,8,e,t)}function Pu(e,t){return Ao(2048,8,e,t)}function Hh(e,t){return Ao(4,2,e,t)}function Vh(e,t){return Ao(4,4,e,t)}function Wh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gh(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,Wh.bind(null,t,e),n)}function Au(){}function Kh(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yh(e,t,n){return On&21?(Ze(n,t)||(n=Jf(),Y.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function ny(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{F=n,ma.transition=r}}function Qh(){return He().memoizedState}function ry(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xh(e))Jh(t,n);else if(n=Ph(e,t,n,r),n!==null){var i=ye();Xe(n,e,r,i),Zh(n,t,r)}}function iy(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Jh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ze(a,o)){var l=t.interleaved;l===null?(i.next=i,wu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ph(e,t,i,r),n!==null&&(i=ye(),Xe(n,e,r,i),Zh(n,t,r))}}function Xh(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Jh(e,t){ii=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}var no={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},sy={readContext:Be,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Is(4194308,4,Wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ry.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:td,useDebugValue:Au,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=td(!1),t=e[0];return e=ny.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=rt();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));On&30||bh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,nd(zh.bind(null,r,s,e),[e]),r.flags|=2048,Pi(9,Fh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(G){var n=vt,r=gt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ty++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},oy={readContext:Be,useCallback:Kh,useContext:Be,useEffect:Pu,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:qh,useReducer:ga,useRef:Bh,useState:function(){return ga(Ri)},useDebugValue:Au,useDeferredValue:function(e){var t=He();return Yh(t,ne.memoizedState,e)},useTransition:function(){var e=ga(Ri)[0],t=He().memoizedState;return[e,t]},useMutableSource:Uh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1},ay={readContext:Be,useCallback:Kh,useContext:Be,useEffect:Pu,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:qh,useReducer:va,useRef:Bh,useState:function(){return va(Ri)},useDebugValue:Au,useDeferredValue:function(e){var t=He();return ne===null?t.memoizedState=e:Yh(t,ne.memoizedState,e)},useTransition:function(){var e=va(Ri)[0],t=He().memoizedState;return[e,t]},useMutableSource:Uh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=Ug(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function ep(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,Pl=r),yl(e,t)},n}function tp(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yl(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function rd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ly;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ey.bind(null,e,t,n),t.then(e,e))}function id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var uy=Pt.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?Lh(t,null,n,r):gr(t,e.child,n,r)}function od(e,t,n,r,i){n=n.render;var s=t.ref;return lr(t,i),r=Cu(e,t,n,r,s,i),n=Ru(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(G&&n&&pu(t),t.flags|=1,ve(e,t,r,i),t.child)}function ad(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!bu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,np(e,t,s,r,i)):(e=Ps(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(o,r)&&e.ref===t.ref)return Ct(e,t,i)}return t.flags|=1,e=Zt(s,r),e.ref=t.ref,e.return=t,t.child=e}function np(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(wi(s,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,Ct(e,t,i)}return _l(e,t,n,r,i)}function rp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(tr,Ne),Ne|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(tr,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(tr,Ne),Ne|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(tr,Ne),Ne|=r;return ve(e,t,i,n),t.child}function ip(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var s=Ce(n)?An:pe.current;return s=pr(t,s),lr(t,i),n=Cu(e,t,n,r,s,i),r=Ru(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ct(e,t,i)):(G&&r&&pu(t),t.flags|=1,ve(e,t,n,i),t.child)}function ld(e,t,n,r,i){if(Ce(n)){var s=!0;qs(t)}else s=!1;if(lr(t,i),t.stateNode===null)Ts(e,t),Oh(t,n,r),vl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ce(n)?An:pe.current,u=pr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zc(t,o,r,u),Mt=!1;var m=t.memoizedState;o.state=m,Zs(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Te.current||Mt?(typeof f=="function"&&(gl(t,n,f,r),l=t.memoizedState),(a=Mt||Jc(t,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ah(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ke(t.type,a),o.props=u,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Be(l):(l=Ce(n)?An:pe.current,l=pr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Zc(t,o,r,l),Mt=!1,m=t.memoizedState,o.state=m,Zs(t,r,o,i);var y=t.memoizedState;a!==p||m!==y||Te.current||Mt?(typeof v=="function"&&(gl(t,n,v,r),y=t.memoizedState),(u=Mt||Jc(t,n,u,r,m,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wl(e,t,n,r,s,i)}function wl(e,t,n,r,i,s){ip(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Kc(t,n,!1),Ct(e,t,s);r=t.stateNode,uy.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gr(t,e.child,null,s),t.child=gr(t,null,a,s)):ve(e,t,a,s),t.memoizedState=r.state,i&&Kc(t,n,!0),t.child}function sp(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Eu(e,t.containerInfo)}function ud(e,t,n,r,i){return mr(),gu(i),t.flags|=256,ve(e,t,n,r),t.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function El(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(q,i&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xo(o,r,0,null),e=Tn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=El(n),t.memoizedState=Sl,e):Nu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zt(a,s):(s=Tn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?El(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Sl,r}return s=e.child,e=s.sibling,r=Zt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,r){return r!==null&&gu(r),gr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ya(Error(k(422))),ls(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xo({mode:"visible",children:r.children},i,0,null),s=Tn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gr(t,e.child,null,o),t.child.memoizedState=El(o),t.memoizedState=Sl,s);if(!(t.mode&1))return ls(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=ya(s,r,void 0),ls(e,t,o,r)}if(a=(o&e.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tt(e,i),Xe(r,e,i,-1))}return Mu(),r=ya(Error(k(421))),ls(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ky.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Oe=Yt(i.nextSibling),Le=t,G=!0,Ye=null,e!==null&&(Fe[ze++]=gt,Fe[ze++]=vt,Fe[ze++]=Nn,gt=e.id,vt=e.overflow,Nn=t),t=Nu(t,r.children),t.flags|=4096,t)}function cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function _a(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ap(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,n,t);else if(e.tag===19)cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,s);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dy(e,t,n){switch(t.tag){case 3:sp(t),mr();break;case 5:Dh(t);break;case 1:Ce(t.type)&&qs(t);break;case 4:Eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?op(e,t,n):(B(q,q.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);B(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ap(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,rp(e,t,n)}return Ct(e,t,n)}var lp,kl,up,cp;lp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kl=function(){};up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,En(ut.current);var s=null;switch(n){case"input":i=Wa(e,i),r=Wa(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=qa(e,i),r=qa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gs)}Qa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fy(e,t,n){var r=t.pendingProps;switch(mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&Ks(),fe(t),null;case 3:return r=t.stateNode,vr(),W(Te),W(pe),Iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(os(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(Ol(Ye),Ye=null))),kl(e,t),fe(t),null;case 5:ku(t);var i=En(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=En(ut.current),os(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[ki]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)H(Yr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":_c(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Sc(r,s),H("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,a,e),i=["children",""+a]):hi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Xi(r),wc(r,s,!0);break;case"textarea":Xi(r),Ec(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[st]=t,e[ki]=r,lp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Xa(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)H(Yr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":_c(e,r),i=Wa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Sc(e,r),i=qa(e,r),H("invalid",e);break;default:i=r}Qa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$f(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ff(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(e,l):typeof l=="number"&&pi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&eu(e,s,l,o))}switch(n){case"input":Xi(e),wc(e,r,!1);break;case"textarea":Xi(e),Ec(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ir(e,!!r.multiple,s,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=En(Ti.current),En(ut.current),os(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:ss(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ss(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return fe(t),null;case 13:if(W(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Oe!==null&&t.mode&1&&!(t.flags&128))Rh(),mr(),t.flags|=98560,s=!1;else if(s=os(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[st]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),s=!1}else Ye!==null&&(Ol(Ye),Ye=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?re===0&&(re=3):Mu())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return vr(),kl(e,t),e===null&&Si(t.stateNode.containerInfo),fe(t),null;case 10:return _u(t.type._context),fe(t),null;case 17:return Ce(t.type)&&Ks(),fe(t),null;case 19:if(W(q),s=t.memoizedState,s===null)return fe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Br(s,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,Br(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>_r&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304)}else{if(!r)if(e=eo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return fe(t),null}else 2*Z()-s.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,B(q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function hy(e,t){switch(mu(t),t.tag){case 1:return Ce(t.type)&&Ks(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),W(Te),W(pe),Iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ku(t),null;case 13:if(W(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(q),null;case 4:return vr(),null;case 10:return _u(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var us=!1,he=!1,py=typeof WeakSet=="function"?WeakSet:Set,C=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){X(e,t,r)}}var dd=!1;function my(e,t){if(al=Hs,e=ph(),hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++f===r&&(l=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},Hs=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,R=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ke(t.type,_),R);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){X(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=dd,dd=!1,y}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Il(t,n,s)}i=i.next}while(i!==r)}}function No(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dp(e){var t=e.alternate;t!==null&&(e.alternate=null,dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[ki],delete t[dl],delete t[Xv],delete t[Jv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fp(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gs));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var le=null,qe=!1;function xt(e,t,n){for(n=n.child;n!==null;)hp(e,t,n),n=n.sibling}function hp(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:he||er(n,t);case 6:var r=le,i=qe;le=null,xt(e,t,n),le=r,qe=i,le!==null&&(qe?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(qe?(e=le,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),yi(e)):fa(le,n.stateNode));break;case 4:r=le,i=qe,le=n.stateNode.containerInfo,qe=!0,xt(e,t,n),le=r,qe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Il(n,t,o),i=i.next}while(i!==r)}xt(e,t,n);break;case 1:if(!he&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}xt(e,t,n);break;case 21:xt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,xt(e,t,n),he=r):xt(e,t,n);break;default:xt(e,t,n)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new py),t.forEach(function(r){var i=Iy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,qe=!1;break e;case 3:le=a.stateNode.containerInfo,qe=!0;break e;case 4:le=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(le===null)throw Error(k(160));hp(s,o,i),le=null,qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pp(t,e),t=t.sibling}function pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{si(3,e,e.return),No(3,e)}catch(_){X(e,e.return,_)}try{si(5,e,e.return)}catch(_){X(e,e.return,_)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(_){X(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uf(i,s),Xa(a,o);var u=Xa(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?$f(i,p):f==="dangerouslySetInnerHTML"?Ff(i,p):f==="children"?pi(i,p):eu(i,f,p,u)}switch(a){case"input":Ga(i,s);break;case"textarea":Mf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ir(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ir(i,!!s.multiple,s.defaultValue,!0):ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[ki]=s}catch(_){X(e,e.return,_)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){X(e,e.return,_)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(_){X(e,e.return,_)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=Z())),r&4&&hd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ge(t,e),he=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(p=C=f;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:si(4,m,m.return);break;case 1:er(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){X(r,n,_)}}break;case 5:er(m,m.return);break;case 22:if(m.memoizedState!==null){md(p);continue}}v!==null?(v.return=m,C=v):md(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zf("display",o))}catch(_){X(e,e.return,_)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){X(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&hd(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var s=fd(e);Rl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fd(e);Cl(e,a,o);break;default:throw Error(k(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gy(e,t,n){C=e,mp(e)}function mp(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||us;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=us;var u=he;if(us=o,(he=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?gd(i):l!==null?(l.return=o,C=l):gd(i);for(;s!==null;)C=s,mp(s),s=s.sibling;C=i,us=a,he=u}pd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):pd(e)}}function pd(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||No(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&yi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&Tl(t)}catch(m){X(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function md(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function gd(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{No(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var s=t.return;try{Tl(t)}catch(l){X(t,s,l)}break;case 5:var o=t.return;try{Tl(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var vy=Math.ceil,ro=Pt.ReactCurrentDispatcher,Ou=Pt.ReactCurrentOwner,je=Pt.ReactCurrentBatchConfig,M=0,ae=null,te=null,ue=0,Ne=0,tr=un(0),re=0,Ai=null,xn=0,Oo=0,xu=0,oi=null,Ee=null,Lu=0,_r=1/0,ht=null,io=!1,Pl=null,Xt=null,cs=!1,Wt=null,so=0,ai=0,Al=null,Cs=-1,Rs=0;function ye(){return M&6?Z():Cs!==-1?Cs:Cs=Z()}function Jt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:ey.transition!==null?(Rs===0&&(Rs=Jf()),Rs):(e=F,e!==0||(e=window.event,e=e===void 0?16:sh(e.type)),e):1}function Xe(e,t,n,r){if(50<ai)throw ai=0,Al=null,Error(k(185));Ui(e,n,r),(!(M&2)||e!==ae)&&(e===ae&&(!(M&2)&&(Oo|=n),re===4&&Ft(e,ue)),Re(e,r),n===1&&M===0&&!(t.mode&1)&&(_r=Z()+500,Ro&&cn()))}function Re(e,t){var n=e.callbackNode;ev(e,t);var r=Bs(e,e===ae?ue:0);if(r===0)n!==null&&Tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tc(n),t===1)e.tag===0?Zv(vd.bind(null,e)):Ih(vd.bind(null,e)),Yv(function(){!(M&6)&&cn()}),n=null;else{switch(Zf(r)){case 1:n=su;break;case 4:n=Qf;break;case 16:n=js;break;case 536870912:n=Xf;break;default:n=js}n=kp(n,gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gp(e,t){if(Cs=-1,Rs=0,M&6)throw Error(k(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=Bs(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=M;M|=2;var s=yp();(ae!==e||ue!==t)&&(ht=null,_r=Z()+500,In(e,t));do try{wy();break}catch(a){vp(e,a)}while(1);yu(),ro.current=s,M=i,te!==null?t=0:(ae=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=nl(e),i!==0&&(r=i,t=Nl(e,i))),t===1)throw n=Ai,In(e,0),Ft(e,r),Re(e,Z()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!yy(i)&&(t=oo(e,r),t===2&&(s=nl(e),s!==0&&(r=s,t=Nl(e,s))),t===1))throw n=Ai,In(e,0),Ft(e,r),Re(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:yn(e,Ee,ht);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Lu+500-Z(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cl(yn.bind(null,e,Ee,ht),t);break}yn(e,Ee,ht);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Qe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vy(r/1960))-r,10<r){e.timeoutHandle=cl(yn.bind(null,e,Ee,ht),r);break}yn(e,Ee,ht);break;case 5:yn(e,Ee,ht);break;default:throw Error(k(329))}}}return Re(e,Z()),e.callbackNode===n?gp.bind(null,e):null}function Nl(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Ol(t)),e}function Ol(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function yy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~xu,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if(M&6)throw Error(k(327));ur();var t=Bs(e,0);if(!(t&1))return Re(e,Z()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Nl(e,r))}if(n===1)throw n=Ai,In(e,0),Ft(e,t),Re(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ee,ht),Re(e,Z()),null}function Du(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(_r=Z()+500,Ro&&cn())}}function Ln(e){Wt!==null&&Wt.tag===0&&!(M&6)&&ur();var t=M;M|=1;var n=je.transition,r=F;try{if(je.transition=null,F=1,e)return e()}finally{F=r,je.transition=n,M=t,!(M&6)&&cn()}}function Uu(){Ne=tr.current,W(tr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ks();break;case 3:vr(),W(Te),W(pe),Iu();break;case 5:ku(r);break;case 4:vr();break;case 13:W(q);break;case 19:W(q);break;case 10:_u(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(ae=e,te=e=Zt(e.current,null),ue=Ne=t,re=0,Ai=null,xu=Oo=xn=0,Ee=oi=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return e}function vp(e,t){do{var n=te;try{if(yu(),ks.current=no,to){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(On=0,ie=ne=Y=null,ii=!1,Ci=0,Ou.current=null,n===null||n.return===null){re=1,Ai=t,te=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=id(o);if(v!==null){v.flags&=-257,sd(v,o,a,s,t),v.mode&1&&rd(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){rd(s,u,t),Mu();break e}l=Error(k(426))}}else if(G&&a.mode&1){var R=id(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),sd(R,o,a,s,t),gu(yr(l,a));break e}}s=l=yr(l,a),re!==4&&(re=2),oi===null?oi=[s]:oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=ep(s,l,t);Qc(s,h);break e;case 1:a=l;var c=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xt===null||!Xt.has(d)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=tp(s,a,t);Qc(s,g);break e}}s=s.return}while(s!==null)}wp(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function yp(){var e=ro.current;return ro.current=no,e===null?no:e}function Mu(){(re===0||re===3||re===2)&&(re=4),ae===null||!(xn&268435455)&&!(Oo&268435455)||Ft(ae,ue)}function oo(e,t){var n=M;M|=2;var r=yp();(ae!==e||ue!==t)&&(ht=null,In(e,t));do try{_y();break}catch(i){vp(e,i)}while(1);if(yu(),M=n,ro.current=r,te!==null)throw Error(k(261));return ae=null,ue=0,re}function _y(){for(;te!==null;)_p(te)}function wy(){for(;te!==null&&!Wg();)_p(te)}function _p(e){var t=Ep(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?wp(e):te=t,Ou.current=null}function wp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hy(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=fy(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function yn(e,t,n){var r=F,i=je.transition;try{je.transition=null,F=1,Sy(e,t,n,r)}finally{je.transition=i,F=r}return null}function Sy(e,t,n,r){do ur();while(Wt!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(tv(e,s),e===ae&&(te=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,kp(js,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=je.transition,je.transition=null;var o=F;F=1;var a=M;M|=4,Ou.current=null,my(e,n),pp(n,e),jv(ll),Hs=!!al,ll=al=null,e.current=n,gy(n),Gg(),M=a,F=o,je.transition=s}else e.current=n;if(cs&&(cs=!1,Wt=e,so=i),s=e.pendingLanes,s===0&&(Xt=null),Yg(n.stateNode),Re(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=Pl,Pl=null,e;return so&1&&e.tag!==0&&ur(),s=e.pendingLanes,s&1?e===Al?ai++:(ai=0,Al=e):ai=0,cn(),null}function ur(){if(Wt!==null){var e=Zf(so),t=je.transition,n=F;try{if(je.transition=null,F=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,so=0,M&6)throw Error(k(331));var i=M;for(M|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:si(8,f,s)}var p=f.child;if(p!==null)p.return=f,C=p;else for(;C!==null;){f=C;var m=f.sibling,v=f.return;if(dp(f),f===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:si(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:No(9,a)}}catch(E){X(a,a.return,E)}if(a===o){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(M=i,cn(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{F=n,je.transition=t}}return!1}function yd(e,t,n){t=yr(n,t),t=ep(e,t,1),e=Qt(e,t,1),t=ye(),e!==null&&(Ui(e,1,t),Re(e,t))}function X(e,t,n){if(e.tag===3)yd(e,e,n);else for(;t!==null;){if(t.tag===3){yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=yr(n,e),e=tp(t,e,1),t=Qt(t,e,1),e=ye(),t!==null&&(Ui(t,1,e),Re(t,e));break}}t=t.return}}function Ey(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>Z()-Lu?In(e,0):xu|=n),Re(e,t)}function Sp(e,t){t===0&&(e.mode&1?(t=es,es<<=1,!(es&130023424)&&(es=4194304)):t=1);var n=ye();e=Tt(e,t),e!==null&&(Ui(e,t,n),Re(e,n))}function ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sp(e,n)}function Iy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Sp(e,n)}var Ep;Ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,dy(e,t,n);ke=!!(e.flags&131072)}else ke=!1,G&&t.flags&1048576&&Th(t,Qs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ts(e,t),e=t.pendingProps;var i=pr(t,pe.current);lr(t,n),i=Cu(null,t,r,e,i,n);var s=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(s=!0,qs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Su(t),i.updater=Po,t.stateNode=i,i._reactInternals=t,vl(t,r,e,n),t=wl(null,t,r,!0,s,n)):(t.tag=0,G&&s&&pu(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ts(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cy(r),e=Ke(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=ld(null,t,r,e,n);break e;case 11:t=od(null,t,r,e,n);break e;case 14:t=ad(null,t,r,Ke(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),ld(e,t,r,i,n);case 3:e:{if(sp(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ah(e,t),Zs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yr(Error(k(423)),t),t=ud(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(k(424)),t),t=ud(e,t,r,n,i);break e}else for(Oe=Yt(t.stateNode.containerInfo.firstChild),Le=t,G=!0,Ye=null,n=Lh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Ct(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Dh(t),e===null&&pl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ul(r,i)?o=null:s!==null&&ul(r,s)&&(t.flags|=32),ip(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&pl(t),null;case 13:return op(e,t,n);case 4:return Eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),od(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(Xs,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!Te.current){t=Ct(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Et(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ml(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ml(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=Be(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),ad(e,t,r,i,n);case 15:return np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ts(e,t),t.tag=1,Ce(r)?(e=!0,qs(t)):e=!1,lr(t,n),Oh(t,r,i),vl(t,r,i,n),wl(null,t,r,!0,e,n);case 19:return ap(e,t,n);case 22:return rp(e,t,n)}throw Error(k(156,t.tag))};function kp(e,t){return Yf(e,t)}function Ty(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Ty(e,t,n,r)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cy(e){if(typeof e=="function")return bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nu)return 11;if(e===ru)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")bu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wn:return Tn(n.children,i,s,t);case tu:o=8,i|=8;break;case ja:return e=$e(12,n,t,i|2),e.elementType=ja,e.lanes=s,e;case Ba:return e=$e(13,n,t,i),e.elementType=Ba,e.lanes=s,e;case Ha:return e=$e(19,n,t,i),e.elementType=Ha,e.lanes=s,e;case xf:return xo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nf:o=10;break e;case Of:o=9;break e;case nu:o=11;break e;case ru:o=14;break e;case Ut:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=$e(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Tn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ry(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,i,s,o,a,l){return e=new Ry(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=$e(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(s),e}function Py(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return an;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ce(n))return kh(e,n,t)}return t}function Tp(e,t,n,r,i,s,o,a,l){return e=Fu(n,r,!0,e,i,s,o,a,l),e.context=Ip(null),n=e.current,r=ye(),i=Jt(n),s=Et(r,i),s.callback=t??null,Qt(n,s,i),e.current.lanes=i,Ui(e,i,r),Re(e,r),e}function Lo(e,t,n,r){var i=t.current,s=ye(),o=Jt(i);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,o),e!==null&&(Xe(e,i,o,s),Es(e,i,o)),o}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zu(e,t){_d(e,t),(e=e.alternate)&&_d(e,t)}function Ay(){return null}var Cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $u(e){this._internalRoot=e}Do.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Lo(e,t,null,null)};Do.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Lo(null,e,null,null)}),t[It]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=nh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&ih(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function Ny(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ao(o);s.call(u)}}var o=Tp(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=o,e[It]=o.current,Si(e.nodeType===8?e.parentNode:e),Ln(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ao(l);a.call(u)}}var l=Fu(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=l,e[It]=l.current,Si(e.nodeType===8?e.parentNode:e),Ln(function(){Lo(t,l,n,r)}),l}function Mo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ao(o);a.call(l)}}Lo(t,o,e,i)}else o=Ny(n,t,e,i,r);return ao(o)}eh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(ou(t,n|1),Re(t,Z()),!(M&6)&&(_r=Z()+500,cn()))}break;case 13:Ln(function(){var r=Tt(e,1);if(r!==null){var i=ye();Xe(r,e,1,i)}}),zu(e,1)}};au=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=ye();Xe(t,e,134217728,n)}zu(e,134217728)}};th=function(e){if(e.tag===13){var t=Jt(e),n=Tt(e,t);if(n!==null){var r=ye();Xe(n,e,t,r)}zu(e,t)}};nh=function(){return F};rh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Za=function(e,t,n){switch(t){case"input":if(Ga(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Co(r);if(!i)throw Error(k(90));Df(r),Ga(r,i)}}}break;case"textarea":Mf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};Hf=Du;Vf=Ln;var Oy={usingClientEntryPoint:!1,Events:[bi,Yn,Co,jf,Bf,Du]},Hr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xy={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kf(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Eo=ds.inject(xy),lt=ds}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(t))throw Error(k(200));return Py(e,t,null,n)};Ue.createRoot=function(e,t){if(!ju(e))throw Error(k(299));var n=!1,r="",i=Cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fu(e,1,!1,null,null,n,!1,r,i),e[It]=t.current,Si(e.nodeType===8?e.parentNode:e),new $u(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Kf(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return Ln(e)};Ue.hydrate=function(e,t,n){if(!Uo(t))throw Error(k(200));return Mo(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!ju(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Tp(t,null,e,1,n??null,i,!1,s,o),e[It]=t.current,Si(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Do(t)};Ue.render=function(e,t,n){if(!Uo(t))throw Error(k(200));return Mo(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(k(40));return e._reactRootContainer?(Ln(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Ue.unstable_batchedUpdates=Du;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Mo(e,t,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ue})(Ag);var Sd=Fa;ba.createRoot=Sd.createRoot,ba.hydrateRoot=Sd.hydrateRoot;const Ly="modulepreload",Dy=function(e,t){return new URL(e,t).href},Ed={},Uy=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Dy(s,r),s in Ed)return;Ed[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ly,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},My=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):My(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new by;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class by extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fy=function(e){const t=Rp(e);return Pp.encodeByteArray(t,!0)},lo=function(e){return Fy(e).replace(/\./g,"")},Ap=function(e){try{return Pp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=()=>zy().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},By=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ap(e[1]);return t&&JSON.parse(t)},Bu=()=>{try{return $y()||jy()||By()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Np=e=>{var t,n;return(n=(t=Bu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Hy=e=>{const t=Np(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Op=()=>{var e;return(e=Bu())===null||e===void 0?void 0:e.config},xp=e=>{var t;return(t=Bu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Ky(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function qy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yy(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Qy(){try{return typeof indexedDB=="object"}catch{return!1}}function Xy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="FirebaseError";class At extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jy,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Zy(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function Zy(e,t){return e.replace(e0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const e0=/\{\$([^}]+)}/g;function t0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function uo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(kd(s)&&kd(o)){if(!uo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Qr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Xr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function n0(e,t){const n=new r0(e,t);return n.subscribe.bind(n)}class r0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");i0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return e&&e._delegate?e._delegate:e}class Dn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Vy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(a0(t))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=_n){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=_n){return this.instances.has(t)}getOptions(t=_n){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=_n){return this.component?this.component.multipleInstances?t:_n:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(e){return e===_n?void 0:e}function a0(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new s0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const u0={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},c0=j.INFO,d0={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},f0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=d0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lp{constructor(t){this.name=t,this._logLevel=c0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?u0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const h0=(e,t)=>t.some(n=>e instanceof n);let Id,Td;function p0(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return Td||(Td=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dp=new WeakMap,xl=new WeakMap,Up=new WeakMap,ka=new WeakMap,Hu=new WeakMap;function g0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(en(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dp.set(n,e)}).catch(()=>{}),Hu.set(t,e),t}function v0(e){if(xl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});xl.set(e,t)}let Ll={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Up.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function y0(e){Ll=e(Ll)}function _0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ia(this),t,...n);return Up.set(r,t.sort?t.sort():[t]),en(r)}:m0().includes(e)?function(...t){return e.apply(Ia(this),t),en(Dp.get(this))}:function(...t){return en(e.apply(Ia(this),t))}}function w0(e){return typeof e=="function"?_0(e):(e instanceof IDBTransaction&&v0(e),h0(e,p0())?new Proxy(e,Ll):e)}function en(e){if(e instanceof IDBRequest)return g0(e);if(ka.has(e))return ka.get(e);const t=w0(e);return t!==e&&(ka.set(e,t),Hu.set(t,e)),t}const Ia=e=>Hu.get(e);function S0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=en(o);return r&&o.addEventListener("upgradeneeded",l=>{r(en(o.result),l.oldVersion,l.newVersion,en(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const E0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],Ta=new Map;function Cd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ta.get(t))return Ta.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ta.set(t,s),s}y0(e=>({...e,get:(t,n,r)=>Cd(t,n)||e.get(t,n,r),has:(t,n)=>!!Cd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dl="@firebase/app",Rd="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Lp("@firebase/app"),C0="@firebase/app-compat",R0="@firebase/analytics-compat",P0="@firebase/analytics",A0="@firebase/app-check-compat",N0="@firebase/app-check",O0="@firebase/auth",x0="@firebase/auth-compat",L0="@firebase/database",D0="@firebase/database-compat",U0="@firebase/functions",M0="@firebase/functions-compat",b0="@firebase/installations",F0="@firebase/installations-compat",z0="@firebase/messaging",$0="@firebase/messaging-compat",j0="@firebase/performance",B0="@firebase/performance-compat",H0="@firebase/remote-config",V0="@firebase/remote-config-compat",W0="@firebase/storage",G0="@firebase/storage-compat",K0="@firebase/firestore",q0="@firebase/firestore-compat",Y0="firebase",Q0="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="[DEFAULT]",X0={[Dl]:"fire-core",[C0]:"fire-core-compat",[P0]:"fire-analytics",[R0]:"fire-analytics-compat",[N0]:"fire-app-check",[A0]:"fire-app-check-compat",[O0]:"fire-auth",[x0]:"fire-auth-compat",[L0]:"fire-rtdb",[D0]:"fire-rtdb-compat",[U0]:"fire-fn",[M0]:"fire-fn-compat",[b0]:"fire-iid",[F0]:"fire-iid-compat",[z0]:"fire-fcm",[$0]:"fire-fcm-compat",[j0]:"fire-perf",[B0]:"fire-perf-compat",[H0]:"fire-rc",[V0]:"fire-rc-compat",[W0]:"fire-gcs",[G0]:"fire-gcs-compat",[K0]:"fire-fst",[q0]:"fire-fst-compat","fire-js":"fire-js",[Y0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map,J0=new Map,Ml=new Map;function Pd(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wr(e){const t=e.name;if(Ml.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;Ml.set(t,e);for(const n of co.values())Pd(n,e);for(const n of J0.values())Pd(n,e);return!0}function Vu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function yt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},tn=new zi("app","Firebase",Z0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=Q0;function Mp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ul,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(n||(n=Op()),!n)throw tn.create("no-options");const s=co.get(i);if(s){if(uo(n,s.options)&&uo(r,s.config))return s;throw tn.create("duplicate-app",{appName:i})}const o=new l0(i);for(const l of Ml.values())o.addComponent(l);const a=new e_(n,r,o);return co.set(i,a),a}function bp(e=Ul){const t=co.get(e);if(!t&&e===Ul&&Op())return Mp();if(!t)throw tn.create("no-app",{appName:e});return t}function nn(e,t,n){var r;let i=(r=X0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}wr(new Dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="firebase-heartbeat-database",n_=1,Ni="firebase-heartbeat-store";let Ca=null;function Fp(){return Ca||(Ca=S0(t_,n_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(e=>{throw tn.create("idb-open",{originalErrorMessage:e.message})})),Ca}async function r_(e){try{const n=(await Fp()).transaction(Ni),r=await n.objectStore(Ni).get(zp(e));return await n.done,r}catch(t){if(t instanceof At)Un.warn(t.message);else{const n=tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Un.warn(n.message)}}}async function Ad(e,t){try{const r=(await Fp()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(t,zp(e)),await r.done}catch(n){if(n instanceof At)Un.warn(n.message);else{const r=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function zp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=1024,s_=30*24*60*60*1e3;class o_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=s_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nd(),{heartbeatsToSend:r,unsentEntries:i}=a_(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nd(){return new Date().toISOString().substring(0,10)}function a_(e,t=i_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Od(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Od(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qy()?Xy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await r_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ad(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ad(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Od(e){return lo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(e){wr(new Dn("platform-logger",t=>new I0(t),"PRIVATE")),wr(new Dn("heartbeat",t=>new o_(t),"PRIVATE")),nn(Dl,Rd,e),nn(Dl,Rd,"esm2017"),nn("fire-js","")}u_("");function Wu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c_=$p,jp=new zi("auth","Firebase",$p());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Lp("@firebase/auth");function d_(e,...t){fo.logLevel<=j.WARN&&fo.warn(`Auth (${Nr}): ${e}`,...t)}function As(e,...t){fo.logLevel<=j.ERROR&&fo.error(`Auth (${Nr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,...t){throw Gu(e,...t)}function ct(e,...t){return Gu(e,...t)}function Bp(e,t,n){const r=Object.assign(Object.assign({},c_()),{[t]:n});return new zi("auth","Firebase",r).create(t,{appName:e.name})}function rn(e){return Bp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jp.create(e,...t)}function A(e,t,...n){if(!e)throw Gu(t,...n)}function _t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw As(t),new Error(t)}function Rt(e,t){e||_t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function f_(){return xd()==="http:"||xd()==="https:"}function xd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||Ky()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Rt(n>t,"Short delay should be less than long delay!"),this.isMobile=Gy()||qy()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t){Rt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new ji(3e4,6e4);function $n(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function dn(e,t,n,r,i={}){return Vp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=$i(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Hp.fetch()(Wp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Vp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},m_),t);try{const i=new y_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw fs(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bp(e,f,u);et(e,f)}}catch(i){if(i instanceof At)throw i;et(e,"network-request-failed",{message:String(i)})}}async function bo(e,t,n,r,i={}){const s=await dn(e,t,n,r,i);return"mfaPendingCredential"in s&&et(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Wp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ku(e.config,i):`${e.config.apiScheme}://${i}`}function v_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class y_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),g_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(e,t,r);return i.customData._tokenResponse=n,i}function Ld(e){return e!==void 0&&e.enterprise!==void 0}class __{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return v_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function w_(e,t){return dn(e,"GET","/v2/recaptchaConfig",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(e,t){return dn(e,"POST","/v1/accounts:delete",t)}async function Gp(e,t){return dn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function E_(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=qu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:li(Ra(i.auth_time)),issuedAtTime:li(Ra(i.iat)),expirationTime:li(Ra(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ra(e){return Number(e)*1e3}function qu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return As("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ap(n);return i?JSON.parse(i):(As("Failed to decode base64 JWT payload"),null)}catch(i){return As("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dd(e){const t=qu(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof At&&k_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function k_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Oi(e,Gp(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Kp(s.providerUserInfo):[],a=C_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function T_(e){const t=tt(e);await ho(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function C_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Kp(e){return e.map(t=>{var{providerId:n}=t,r=Wu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(e,t){const n=await Vp(e,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Wp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function P_(e,t){return dn(e,"POST","/v2/accounts:revokeToken",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Dd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=Dd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cr;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class wt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Wu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return E_(this,t)}reload(){return T_(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(rn(this.auth));const t=await this.getIdToken();return await Oi(this,S_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:d,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:w}=n;A(d&&w,t,"internal-error");const I=cr.fromJSON(this.name,w);A(typeof d=="string",t,"internal-error"),Lt(p,t.name),Lt(m,t.name),A(typeof g=="boolean",t,"internal-error"),A(typeof E=="boolean",t,"internal-error"),Lt(v,t.name),Lt(y,t.name),Lt(_,t.name),Lt(R,t.name),Lt(h,t.name),Lt(c,t.name);const U=new wt({uid:d,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:I,createdAt:h,lastLoginAt:c});return S&&Array.isArray(S)&&(U.providerData=S.map(x=>Object.assign({},x))),R&&(U._redirectEventId=R),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new cr;i.updateFromServerResponse(n);const s=new wt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ho(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new cr;a.updateFromIdToken(r);const l=new wt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Map;function St(e){Rt(e instanceof Function,"Expected a class definition");let t=Ud.get(e);return t?(Rt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ud.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qp.type="NONE";const Md=qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t,n){return`firebase:${e}:${t}:${n}`}class dr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ns(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ns("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?wt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new dr(St(Md),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||St(Md);const o=Ns(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const p=wt._fromJSON(t,f);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new dr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new dr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zp(t))return"Blackberry";if(em(t))return"Webos";if(Yu(t))return"Safari";if((t.includes("chrome/")||Qp(t))&&!t.includes("edge/"))return"Chrome";if(Jp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yp(e=me()){return/firefox\//i.test(e)}function Yu(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qp(e=me()){return/crios\//i.test(e)}function Xp(e=me()){return/iemobile/i.test(e)}function Jp(e=me()){return/android/i.test(e)}function Zp(e=me()){return/blackberry/i.test(e)}function em(e=me()){return/webos/i.test(e)}function Fo(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function A_(e=me()){var t;return Fo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function N_(){return Yy()&&document.documentMode===10}function tm(e=me()){return Fo(e)||Jp(e)||em(e)||Zp(e)||/windows phone/i.test(e)||Xp(e)}function O_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e,t=[]){let n;switch(e){case"Browser":n=bd(me());break;case"Worker":n=`${bd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(e,t={}){return dn(e,"GET","/v2/passwordPolicy",$n(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=6;class U_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fd(this),this.idTokenSubscription=new Fd(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gp(this,{idToken:t}),r=await wt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ho(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(yt(this.app))return Promise.reject(rn(this));const n=t?tt(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return yt(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await L_(this),n=new U_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await P_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&St(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&d_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(e){return tt(e)}class Fd{constructor(t){this.auth=t,this.observer=null,this.addObserver=n0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function b_(e){zo=e}function rm(e){return zo.loadJS(e)}function F_(){return zo.recaptchaEnterpriseScript}function z_(){return zo.gapiScript}function $_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const j_="recaptcha-enterprise",B_="NO_RECAPTCHA";class H_{constructor(t){this.type=j_,this.auth=Or(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{w_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new __(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(B_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ld(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=F_();l.length!==0&&(l+=a),rm(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function zd(e,t,n,r=!1){const i=new H_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function $d(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await zd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zd(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(e,t){const n=Vu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(uo(s,t??{}))return i;et(i,"already-initialized")}return n.initialize({options:t})}function W_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(St);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function G_(e,t,n){const r=Or(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=im(t),{host:o,port:a}=K_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||q_()}function im(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function K_(e){const t=im(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jd(o)}}}function jd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function q_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(t){return _t("not implemented")}_linkToIdToken(t,n){return _t("not implemented")}_getReauthenticationResolver(t){return _t("not implemented")}}async function Y_(e,t){return dn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(e,t){return bo(e,"POST","/v1/accounts:signInWithPassword",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,t){return bo(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))}async function J_(e,t){return bo(e,"POST","/v1/accounts:signInWithEmailLink",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Qu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new xi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(t,n,"signInWithPassword",Q_);case"emailLink":return X_(t,{email:this._email,oobCode:this._password});default:et(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $d(t,r,"signUpPassword",Y_);case"emailLink":return J_(t,{idToken:n,email:this._email,oobCode:this._password});default:et(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(e,t){return bo(e,"POST","/v1/accounts:signInWithIdp",$n(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="http://localhost";class Mn extends Qu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Wu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fr(t,n)}buildRequest(){const t={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$i(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tw(e){const t=Qr(Xr(e)).link,n=t?Qr(Xr(t)).deep_link_id:null,r=Qr(Xr(e)).deep_link_id;return(r?Qr(Xr(r)).link:null)||r||n||t||e}class Xu{constructor(t){var n,r,i,s,o,a;const l=Qr(Xr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=ew((i=l.mode)!==null&&i!==void 0?i:null);A(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=tw(t);try{return new Xu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(t,n){return xi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Xu.parseLink(n);return A(r,"argument-error"),xi._fromEmailAndCode(t,r.code,r.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends sm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Bi{constructor(){super("facebook.com")}static credential(t){return Mn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return zt.credential(t.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Mn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Bi{constructor(){super("github.com")}static credential(t){return Mn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Bi{constructor(){super("twitter.com")}static credential(t,n){return Mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await wt._fromIdTokenResponse(t,r,i),o=Bd(r);return new Sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Bd(r);return new Sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Bd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends At{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,po.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new po(t,n,r,i)}}function om(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(e,s,t,r):s})}async function nw(e,t,n=!1){const r=await Oi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(e,t,n=!1){const{auth:r}=e;if(yt(r.app))return Promise.reject(rn(r));const i="reauthenticate";try{const s=await Oi(e,om(r,i,t,e),n);A(s.idToken,r,"internal-error");const o=qu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(e.uid===a,r,"user-mismatch"),Sr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(e,t,n=!1){if(yt(e.app))return Promise.reject(rn(e));const r="signIn",i=await om(e,r,t),s=await Sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function iw(e,t){return am(Or(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(e){const t=Or(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function ow(e,t,n){return yt(e.app)?Promise.reject(rn(e)):iw(tt(e),xr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sw(e),r})}function aw(e,t,n,r){return tt(e).onIdTokenChanged(t,n,r)}function lw(e,t,n){return tt(e).beforeAuthStateChanged(t,n)}function uw(e,t,n,r){return tt(e).onAuthStateChanged(t,n,r)}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){const e=me();return Yu(e)||Fo(e)}const dw=1e3,fw=10;class um extends lm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cw()&&O_(),this.fallbackToPolling=tm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);N_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,fw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}um.type="LOCAL";const hw=um;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends lm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cm.type="SESSION";const dm=cm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new $o(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$o.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ju("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function gw(e){dt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function _w(){return fm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebaseLocalStorageDb",ww=1,go="firebaseLocalStorage",pm="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jo(e,t){return e.transaction([go],t?"readwrite":"readonly").objectStore(go)}function Sw(){const e=indexedDB.deleteDatabase(hm);return new Hi(e).toPromise()}function zl(){const e=indexedDB.open(hm,ww);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(go,{keyPath:pm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(go)?t(r):(r.close(),await Sw(),t(await zl()))})})}async function Hd(e,t,n){const r=jo(e,!0).put({[pm]:t,value:n});return new Hi(r).toPromise()}async function Ew(e,t){const n=jo(e,!1).get(t),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function Vd(e,t){const n=jo(e,!0).delete(t);return new Hi(n).toPromise()}const kw=800,Iw=3;class mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Iw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$o._getInstance(_w()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await vw(),!this.activeServiceWorker)return;this.sender=new mw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zl();return await Hd(t,mo,"1"),await Vd(t,mo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Ew(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=jo(i,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mm.type="LOCAL";const Tw=mm;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e,t){return t?St(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Qu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Rw(e){return am(e.auth,new Zu(e),e.bypassAuthState)}function Pw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),rw(n,new Zu(e),e.bypassAuthState)}async function Aw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),nw(n,new Zu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Rw;case"linkViaPopup":case"linkViaRedirect":return Aw;case"reauthViaPopup":case"reauthViaRedirect":return Pw;default:et(this.auth,"internal-error")}}resolve(t){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=new ji(2e3,1e4);class nr extends gm{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const t=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Nw.get())};t()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="pendingRedirect",Os=new Map;class xw extends gm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Os.get(this.auth._key());if(!t){try{const r=await Lw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Os.set(this.auth._key(),t)}return this.bypassAuthState||Os.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lw(e,t){const n=Mw(t),r=Uw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Dw(e,t){Os.set(e._key(),t)}function Uw(e){return St(e._redirectPersistence)}function Mw(e){return Ns(Ow,e.config.apiKey,e.name)}async function bw(e,t,n=!1){if(yt(e.app))return Promise.reject(rn(e));const r=Or(e),i=Cw(r,t),o=await new xw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=10*60*1e3;class zw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$w(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Fw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wd(t))}saveEventToCache(t){this.cachedEventUids.add(Wd(t)),this.lastProcessedEventTime=Date.now()}}function Wd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $w(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(e,t={}){return dn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hw=/^https?/;async function Vw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jw(e);for(const n of t)try{if(Ww(n))return}catch{}et(e,"unauthorized-domain")}function Ww(e){const t=bl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hw.test(n))return!1;if(Bw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new ji(3e4,6e4);function Gd(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kw(e){return new Promise((t,n)=>{var r,i,s;function o(){Gd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gd(),n(ct(e,"network-request-failed"))},timeout:Gw.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const a=$_("iframefcb");return dt()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},rm(`${z_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw xs=null,t})}let xs=null;function qw(e){return xs=xs||Kw(e),xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new ji(5e3,15e3),Qw="__/auth/iframe",Xw="emulator/auth/iframe",Jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e1(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ku(t,Xw):`https://${e.config.authDomain}/${Qw}`,r={apiKey:t.apiKey,appName:e.name,v:Nr},i=Zw.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$i(r).slice(1)}`}async function t1(e){const t=await qw(e),n=dt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:e1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=dt().setTimeout(()=>{s(o)},Yw.get());function l(){dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r1=500,i1=600,s1="_blank",o1="http://localhost";class Kd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a1(e,t,n,r=r1,i=i1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},n1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=me().toLowerCase();n&&(a=Qp(u)?s1:n),Yp(u)&&(t=t||o1,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(A_(u)&&a!=="_self")return l1(t||"",a),new Kd(null);const p=window.open(t||"",a,f);A(p,e,"popup-blocked");try{p.focus()}catch{}return new Kd(p)}function l1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="__/auth/handler",c1="emulator/auth/handler",d1=encodeURIComponent("fac");async function qd(e,t,n,r,i,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Nr,eventId:i};if(t instanceof sm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",t0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(t instanceof Bi){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${d1}=${encodeURIComponent(l)}`:"";return`${f1(e)}?${$i(a).slice(1)}${u}`}function f1({config:e}){return e.emulator?Ku(e,c1):`https://${e.authDomain}/${u1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class h1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=bw,this._overrideRedirectResult=Dw}async _openPopup(t,n,r,i){var s;Rt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await qd(t,n,r,bl(),i);return a1(t,o,Ju())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await qd(t,n,r,bl(),i);return gw(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await t1(t),r=new zw(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&n(!!o),et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return tm()||Yu()||Fo()}}const p1=h1;var Yd="@firebase/auth",Qd="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function v1(e){wr(new Dn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nm(e)},u=new M_(r,i,s,l);return W_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),wr(new Dn("auth-internal",t=>{const n=Or(t.getProvider("auth").getImmediate());return(r=>new m1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Yd,Qd,g1(e)),nn(Yd,Qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=5*60,_1=xp("authIdTokenMaxAge")||y1;let Xd=null;const w1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_1)return;const i=n==null?void 0:n.token;Xd!==i&&(Xd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S1(e=bp()){const t=Vu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=V_(e,{popupRedirectResolver:p1,persistence:[Tw,hw,dm]}),r=xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=w1(s.toString());lw(n,o,()=>o(n.currentUser)),aw(n,a=>o(a))}}const i=Np("auth");return i&&G_(n,`http://${i}`),n}function E1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}b_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",E1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});v1("Browser");var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ie.apply(this,arguments)};function vo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var V="-ms-",ui="-moz-",b="-webkit-",ym="comm",Bo="rule",ec="decl",k1="@import",_m="@keyframes",I1="@layer",wm=Math.abs,tc=String.fromCharCode,$l=Object.assign;function T1(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Sm(e){return e.trim()}function pt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ls(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Em(e){return e.length}function Jr(e,t){return t.push(e),e}function C1(e,t){return e.map(t).join("")}function Jd(e,t){return e.filter(function(n){return!pt(n,t)})}var Ho=1,kr=1,km=0,Ve=0,ee=0,Lr="";function Vo(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ho,column:kr,length:o,return:"",siblings:a}}function Dt(e,t){return $l(Vo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Bn(e){for(;e.root;)e=Dt(e.root,{children:[e]});Jr(e,e.siblings)}function R1(){return ee}function P1(){return ee=Ve>0?se(Lr,--Ve):0,kr--,ee===10&&(kr=1,Ho--),ee}function Je(){return ee=Ve<km?se(Lr,Ve++):0,kr++,ee===10&&(kr=1,Ho++),ee}function Cn(){return se(Lr,Ve)}function Ds(){return Ve}function Wo(e,t){return Er(Lr,e,t)}function jl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A1(e){return Ho=kr=1,km=it(Lr=e),Ve=0,[]}function N1(e){return Lr="",e}function Aa(e){return Sm(Wo(Ve-1,Bl(e===91?e+2:e===40?e+1:e)))}function O1(e){for(;(ee=Cn())&&ee<33;)Je();return jl(e)>2||jl(ee)>3?"":" "}function x1(e,t){for(;--t&&Je()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Wo(e,Ds()+(t<6&&Cn()==32&&Je()==32))}function Bl(e){for(;Je();)switch(ee){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Bl(ee);break;case 40:e===41&&Bl(e);break;case 92:Je();break}return Ve}function L1(e,t){for(;Je()&&e+ee!==47+10;)if(e+ee===42+42&&Cn()===47)break;return"/*"+Wo(t,Ve-1)+"*"+tc(e===47?e:Je())}function D1(e){for(;!jl(Cn());)Je();return Wo(e,Ve)}function U1(e){return N1(Us("",null,null,null,[""],e=A1(e),0,[0],e))}function Us(e,t,n,r,i,s,o,a,l){for(var u=0,f=0,p=o,m=0,v=0,y=0,_=1,R=1,h=1,c=0,d="",g=i,E=s,S=r,w=d;R;)switch(y=c,c=Je()){case 40:if(y!=108&&se(w,p-1)==58){Ls(w+=O(Aa(c),"&","&\f"),"&\f",wm(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=Aa(c);break;case 9:case 10:case 13:case 32:w+=O1(y);break;case 92:w+=x1(Ds()-1,7);continue;case 47:switch(Cn()){case 42:case 47:Jr(M1(L1(Je(),Ds()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=it(w)*h;case 125*_:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+f:h==-1&&(w=O(w,/\f/g,"")),v>0&&it(w)-p&&Jr(v>32?ef(w+";",r,n,p-1,l):ef(O(w," ","")+";",r,n,p-2,l),l);break;case 59:w+=";";default:if(Jr(S=Zd(w,t,n,u,f,i,a,d,g=[],E=[],p,s),s),c===123)if(f===0)Us(w,t,S,S,g,s,p,a,E);else switch(m===99&&se(w,3)===110?100:m){case 100:case 108:case 109:case 115:Us(e,S,S,r&&Jr(Zd(e,S,S,0,0,i,a,d,i,g=[],p,E),E),i,E,p,a,r?g:E);break;default:Us(w,S,S,S,[""],E,0,a,E)}}u=f=v=0,_=h=1,d=w="",p=o;break;case 58:p=1+it(w),v=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&P1()==125)continue}switch(w+=tc(c),c*_){case 38:h=f>0?1:(w+="\f",-1);break;case 44:a[u++]=(it(w)-1)*h,h=1;break;case 64:Cn()===45&&(w+=Aa(Je())),m=Cn(),f=p=it(d=w+=D1(Ds())),c++;break;case 45:y===45&&it(w)==2&&(_=0)}}return s}function Zd(e,t,n,r,i,s,o,a,l,u,f,p){for(var m=i-1,v=i===0?s:[""],y=Em(v),_=0,R=0,h=0;_<r;++_)for(var c=0,d=Er(e,m+1,m=wm(R=o[_])),g=e;c<y;++c)(g=Sm(R>0?v[c]+" "+d:O(d,/&\f/g,v[c])))&&(l[h++]=g);return Vo(e,t,n,i===0?Bo:a,l,u,f,p)}function M1(e,t,n,r){return Vo(e,t,n,ym,tc(R1()),Er(e,2,-2),0,r)}function ef(e,t,n,r,i){return Vo(e,t,n,ec,Er(e,0,r),Er(e,r+1,-1),r,i)}function Im(e,t,n){switch(T1(e,t)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 4789:return ui+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+ui+e+V+e+e;case 5936:switch(se(e,t+11)){case 114:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return b+e+V+e+e;case 6165:return b+e+V+"flex-"+e+e;case 5187:return b+e+O(e,/(\w+).+(:[^]+)/,b+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return b+e+V+"flex-item-"+O(e,/flex-|-self/g,"")+(pt(e,/flex-|baseline/)?"":V+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return b+e+V+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return b+e+V+O(e,"shrink","negative")+e;case 5292:return b+e+V+O(e,"basis","preferred-size")+e;case 6060:return b+"box-"+O(e,"-grow","")+b+e+V+O(e,"grow","positive")+e;case 4554:return b+O(e,/([^-])(transform)/g,"$1"+b+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4200:if(!pt(e,/flex-|baseline/))return V+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return V+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pt(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span",0)?e:V+O(e,"-start","")+e+V+"grid-row-span:"+(~Ls(n,"span",0)?pt(n,/\d+/):+pt(n,/\d+/)-+pt(e,/\d+/))+";":V+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pt(r.props,/grid-\w+-start/)})?e:V+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+ui+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch",0)?Im(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return V+i+":"+s+u+(o?V+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(se(e,t+6)===121)return O(e,":",":"+b)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(se(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+V+"$2box$3")+e;case 100:return O(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function yo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function b1(e,t,n,r){switch(e.type){case I1:if(e.children.length)break;case k1:case ec:return e.return=e.return||e.value;case ym:return"";case _m:return e.return=e.value+"{"+yo(e.children,r)+"}";case Bo:if(!it(e.value=e.props.join(",")))return""}return it(n=yo(e.children,r))?e.return=e.value+"{"+n+"}":""}function F1(e){var t=Em(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function z1(e){return function(t){t.root||(t=t.return)&&e(t)}}function $1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ec:e.return=Im(e.value,e.length,n);return;case _m:return yo([Dt(e,{value:O(e.value,"@","@"+b)})],r);case Bo:if(e.length)return C1(n=e.props,function(i){switch(pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(Dt(e,{props:[O(i,/:(read-\w+)/,":"+ui+"$1")]})),Bn(Dt(e,{props:[i]})),$l(e,{props:Jd(n,r)});break;case"::placeholder":Bn(Dt(e,{props:[O(i,/:(plac\w+)/,":"+b+"input-$1")]})),Bn(Dt(e,{props:[O(i,/:(plac\w+)/,":"+ui+"$1")]})),Bn(Dt(e,{props:[O(i,/:(plac\w+)/,V+"input-$1")]})),Bn(Dt(e,{props:[i]})),$l(e,{props:Jd(n,r)});break}return""})}}var j1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ir=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tm="active",Cm="data-styled-version",Go="6.1.8",nc=`/*!sc*/
`,rc=typeof window<"u"&&"HTMLElement"in window,B1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Ko=Object.freeze([]),Tr=Object.freeze({});function H1(e,t,n){return n===void 0&&(n=Tr),e.theme!==n.theme&&e.theme||t||n.theme}var Rm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),V1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W1=/(^-|-$)/g;function tf(e){return e.replace(V1,"-").replace(W1,"")}var G1=/(a)(d)/gi,hs=52,nf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Hl(e){var t,n="";for(t=Math.abs(e);t>hs;t=t/hs|0)n=nf(t%hs)+n;return(nf(t%hs)+n).replace(G1,"$1-$2")}var Na,Pm=5381,rr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Am=function(e){return rr(Pm,e)};function K1(e){return Hl(Am(e)>>>0)}function q1(e){return e.displayName||e.name||"Component"}function Oa(e){return typeof e=="string"&&!0}var Nm=typeof Symbol=="function"&&Symbol.for,Om=Nm?Symbol.for("react.memo"):60115,Y1=Nm?Symbol.for("react.forward_ref"):60112,Q1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J1=((Na={})[Y1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Na[Om]=xm,Na);function rf(e){return("type"in(t=e)&&t.type.$$typeof)===Om?xm:"$$typeof"in e?J1[e.$$typeof]:Q1;var t}var Z1=Object.defineProperty,eS=Object.getOwnPropertyNames,sf=Object.getOwnPropertySymbols,tS=Object.getOwnPropertyDescriptor,nS=Object.getPrototypeOf,of=Object.prototype;function Lm(e,t,n){if(typeof t!="string"){if(of){var r=nS(t);r&&r!==of&&Lm(e,r,n)}var i=eS(t);sf&&(i=i.concat(sf(t)));for(var s=rf(e),o=rf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in X1||n&&n[l]||o&&l in o||s&&l in s)){var u=tS(t,l);try{Z1(e,l,u)}catch{}}}}return e}function Cr(e){return typeof e=="function"}function ic(e){return typeof e=="object"&&"styledComponentId"in e}function kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function af(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Li(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Vl(e,t,n){if(n===void 0&&(n=!1),!n&&!Li(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Vl(e[r],t[r]);else if(Li(t))for(var r in t)e[r]=Vl(e[r],t[r]);return e}function sc(e,t){Object.defineProperty(e,"toString",{value:t})}function Vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Vi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(nc);return n},e}(),Ms=new Map,_o=new Map,bs=1,ps=function(e){if(Ms.has(e))return Ms.get(e);for(;_o.has(bs);)bs++;var t=bs++;return Ms.set(e,t),_o.set(t,e),t},iS=function(e,t){bs=t+1,Ms.set(e,t),_o.set(t,e)},sS="style[".concat(Ir,"][").concat(Cm,'="').concat(Go,'"]'),oS=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aS=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},lS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(nc),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(oS);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(iS(f,u),aS(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function uS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ir,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ir,Tm),r.setAttribute(Cm,Go);var o=uS();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},cS=function(){function e(t){this.element=Dm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),dS=function(){function e(t){this.element=Dm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),lf=rc,hS={isServer:!rc,useCSSOMInjection:!B1},Um=function(){function e(t,n,r){t===void 0&&(t=Tr),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},hS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rc&&lf&&(lf=!1,function(s){for(var o=document.querySelectorAll(sS),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ir)!==Tm&&(lS(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(p){var m=function(h){return _o.get(h)}(p);if(m===void 0)return"continue";var v=s.names.get(m),y=o.getGroup(p);if(v===void 0||y.length===0)return"continue";var _="".concat(Ir,".g").concat(p,'[id="').concat(m,'"]'),R="";v!==void 0&&v.forEach(function(h){h.length>0&&(R+="".concat(h,","))}),l+="".concat(y).concat(_,'{content:"').concat(R,'"}').concat(nc)},f=0;f<a;f++)u(f);return l}(i)})}return e.registerId=function(t){return ps(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fS(i):r?new cS(i):new dS(i)}(this.options),new rS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ps(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ps(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ps(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pS=/&/g,mS=/^\s*\/\/.*$/gm;function Mm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Mm(n.children,t)),n})}function gS(e){var t,n,r,i=e===void 0?Tr:e,s=i.options,o=s===void 0?Tr:s,a=i.plugins,l=a===void 0?Ko:a,u=function(m,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===Bo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(pS,n).replace(r,u))}),o.prefix&&f.push($1),f.push(b1);var p=function(m,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(mS,""),h=U1(y||v?"".concat(y," ").concat(v," { ").concat(R," }"):R);o.namespace&&(h=Mm(h,o.namespace));var c=[];return yo(h,F1(f.concat(z1(function(d){return c.push(d)})))),c};return p.hash=l.length?l.reduce(function(m,v){return v.name||Vi(15),rr(m,v.name)},Pm).toString():"",p}var vS=new Um,Wl=gS(),bm=fi.createContext({shouldForwardProp:void 0,styleSheet:vS,stylis:Wl});bm.Consumer;fi.createContext(void 0);function uf(){return oe.useContext(bm)}var yS=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Wl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sc(this,function(){throw Vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Wl),this.name+t.hash},e}(),_S=function(e){return e>="A"&&e<="Z"};function cf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_S(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Fm=function(e){return e==null||e===!1||e===""},zm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Fm(s)&&(Array.isArray(s)&&s.isCss||Cr(s)?r.push("".concat(cf(i),":"),s,";"):Li(s)?r.push.apply(r,vo(vo(["".concat(i," {")],zm(s),!1),["}"],!1)):r.push("".concat(cf(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in j1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rn(e,t,n,r){if(Fm(e))return[];if(ic(e))return[".".concat(e.styledComponentId)];if(Cr(e)){if(!Cr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Rn(i,t,n,r)}var s;return e instanceof yS?n?(e.inject(n,r),[e.getName(r)]):[e]:Li(e)?zm(e):Array.isArray(e)?Array.prototype.concat.apply(Ko,e.map(function(o){return Rn(o,t,n,r)})):[e.toString()]}function wS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Cr(n)&&!ic(n))return!1}return!0}var SS=Am(Go),ES=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wS(t),this.componentId=n,this.baseHash=rr(SS,n),this.baseStyle=r,Um.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=kn(i,this.staticRulesId);else{var s=af(Rn(this.rules,t,n,r)),o=Hl(rr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=kn(i,o),this.staticRulesId=o}else{for(var l=rr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var m=af(Rn(p,t,n,r));l=rr(l,m+f),u+=m}}if(u){var v=Hl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=kn(i,v)}}return i},e}(),$m=fi.createContext(void 0);$m.Consumer;var xa={};function kS(e,t,n){var r=ic(e),i=e,s=!Oa(e),o=t.attrs,a=o===void 0?Ko:o,l=t.componentId,u=l===void 0?function(g,E){var S=typeof g!="string"?"sc":tf(g);xa[S]=(xa[S]||0)+1;var w="".concat(S,"-").concat(K1(Go+S+xa[S]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,f=t.displayName,p=f===void 0?function(g){return Oa(g)?"styled.".concat(g):"Styled(".concat(q1(g),")")}(e):f,m=t.displayName&&t.componentId?"".concat(tf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;y=function(g,E){return _(g,E)&&R(g,E)}}else y=_}var h=new ES(n,m,r?i.componentStyle:void 0);function c(g,E){return function(S,w,I){var U=S.attrs,x=S.componentStyle,Pe=S.defaultProps,fn=S.foldedComponentIds,hn=S.styledComponentId,Ki=S.target,qo=fi.useContext($m),Dr=uf(),pn=S.shouldForwardProp||Dr.shouldForwardProp,T=H1(w,qo,Pe)||Tr,P=function(Nt,Ae,ft){for(var Ur,gn=Ie(Ie({},Ae),{className:void 0,theme:ft}),Yo=0;Yo<Nt.length;Yo+=1){var qi=Cr(Ur=Nt[Yo])?Ur(gn):Ur;for(var Ot in qi)gn[Ot]=Ot==="className"?kn(gn[Ot],qi[Ot]):Ot==="style"?Ie(Ie({},gn[Ot]),qi[Ot]):qi[Ot]}return Ae.className&&(gn.className=kn(gn.className,Ae.className)),gn}(U,w,T),N=P.as||Ki,z={};for(var $ in P)P[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&P.theme===T||($==="forwardedAs"?z.as=P.forwardedAs:pn&&!pn($,N)||(z[$]=P[$]));var mn=function(Nt,Ae){var ft=uf(),Ur=Nt.generateAndInjectStyles(Ae,ft.styleSheet,ft.stylis);return Ur}(x,P),We=kn(fn,hn);return mn&&(We+=" "+mn),P.className&&(We+=" "+P.className),z[Oa(N)&&!Rm.has(N)?"class":"className"]=We,z.ref=I,oe.createElement(N,z)}(d,g,E)}c.displayName=p;var d=fi.forwardRef(c);return d.attrs=v,d.componentStyle=h,d.displayName=p,d.shouldForwardProp=y,d.foldedComponentIds=r?kn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=m,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(E){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var I=0,U=S;I<U.length;I++)Vl(E,U[I],!0);return E}({},i.defaultProps,g):g}}),sc(d,function(){return".".concat(d.styledComponentId)}),s&&Lm(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function df(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ff=function(e){return Object.assign(e,{isCss:!0})};function IS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Cr(e)||Li(e))return ff(Rn(df(Ko,vo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Rn(r):ff(Rn(df(r,t)))}function Gl(e,t,n){if(n===void 0&&(n=Tr),!t)throw Vi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,IS.apply(void 0,vo([i],s,!1)))};return r.attrs=function(i){return Gl(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gl(e,t,Ie(Ie({},n),i))},r}var jm=function(e){return Gl(kS,e)},be=jm;Rm.forEach(function(e){be[e]=jm(e)});const TS=be.article`
  margin-bottom: 30px;
  min-height: 300px;
  background: #fff;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
  position: relative;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 50px;
`,CS=be.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,mk=be.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gk=be.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,RS=be.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,PS=()=>D(TS,{children:D(CS,{children:D(RS,{})})});var AS="firebase",NS="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(AS,NS,"app");const OS={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},Bm=Mp(OS),Hm=S1(Bm),xS=async(e,t)=>{try{return await ow(Hm,e,t)}catch{return{error:!0,type:"Something went wrong"}}},LS=()=>{const[e,t]=oe.useState("eantwibawua1@gmail.com"),[n,r]=oe.useState("");return ot("div",{children:[D("h1",{children:"Hey Eman 🙂"}),D("p",{children:"Please sign-in:"}),ot("form",{onSubmit:async s=>{s.preventDefault(),await xS(e,n)},children:[ot("div",{children:[D("label",{htmlFor:"email-address",children:"Email address"}),D("input",{type:"email",id:"email-address",value:e,onChange:s=>t(s.target.value),required:!0,placeholder:"Email address"})]}),ot("div",{children:[D("label",{htmlFor:"password",children:"Password"}),D("input",{type:"password",id:"password",value:n,onChange:s=>r(s.target.value),required:!0,placeholder:"Password"})]}),D("button",{type:"submit",children:"Sign in"})]})]})},DS=""+new URL("one-487c1466.jpeg",import.meta.url).href,US=""+new URL("two-e3020c9f.jpeg",import.meta.url).href,MS=""+new URL("three-1cf22c5f.jpeg",import.meta.url).href,bS=""+new URL("four-b88c12ca.jpeg",import.meta.url).href,FS=""+new URL("t-video-5188165f.mp4",import.meta.url).href;var zS=(e=>(e.JPEG="jpeg",e.MP4="video/mp4",e))(zS||{});const $S=[{src:FS,alt:"animation for t",contentType:"video/mp4"},{src:DS,alt:"one",contentType:"jpeg"},{src:US,alt:"two",contentType:"jpeg"},{src:MS,alt:"three",contentType:"jpeg"},{src:bS,alt:"four",contentType:"jpeg"}],jS=""+new URL("tee-647bc5ea.png",import.meta.url).href,BS=be.p`
  margin-top: 10px;
  color: rgba(12, 0, 0, 0.7);
  display: block;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,HS=be.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,VS=be.header`
  padding: 1px 20px;
  padding-top: 140px;
`,WS=be.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,GS=be.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 0;
    margin-top: 10px;
  }
`,KS=be.main`
  max-width: 502px;
  flex: auto;
  display: flex;
  flex-direction: column;
  color: #444;

  & > article {
    margin-bottom: 30px;
  }
`,qS=be.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,YS=""+new URL("plus-70c42e58.svg",import.meta.url).href;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebasestorage.googleapis.com",Wm="storageBucket",QS=2*60*1e3,XS=10*60*1e3,JS=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends At{constructor(t,n,r=0){super(La(t),`Firebase Storage: ${n} (${La(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,J.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return La(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function La(e){return"storage/"+e}function oc(){const e="An unknown error occurred, please check the error payload for server response.";return new J(K.UNKNOWN,e)}function ZS(e){return new J(K.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function eE(e){return new J(K.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tE(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new J(K.UNAUTHENTICATED,e)}function nE(){return new J(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rE(e){return new J(K.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Gm(){return new J(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Km(){return new J(K.CANCELED,"User canceled the upload/download.")}function iE(e){return new J(K.INVALID_URL,"Invalid URL '"+e+"'.")}function sE(e){return new J(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function oE(){return new J(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wm+"' property when initializing the app?")}function qm(){return new J(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aE(){return new J(K.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lE(e){return new J(K.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Kl(e){return new J(K.INVALID_ARGUMENT,e)}function Ym(){return new J(K.APP_DELETED,"The Firebase app was deleted.")}function uE(e){return new J(K.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ci(e,t){return new J(K.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Vr(e){throw new J(K.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=xe.makeFromUrl(t,n)}catch{return new xe(t,"")}if(r.path==="")return r;throw sE(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===Vm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",h=new RegExp(`^https?://${_}/${i}/${R}`,"i"),d=[{regex:a,indices:l,postModify:s},{regex:v,indices:y,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<d.length;g++){const E=d[g],S=E.regex.exec(t);if(S){const w=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new xe(w,I),E.postModify(r);break}}if(r==null)throw iE(t);return r}}class cE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...R){u||(u=!0,t.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,e(v,l())},R)}function m(){s&&clearTimeout(s)}function v(R,...h){if(u){m();return}if(R){m(),f.call(null,R,...h);return}if(l()||o){m(),f.call(null,R,...h);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,p(d)}let y=!1;function _(R){y||(y=!0,m(),!u&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function fE(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(e){return e!==void 0}function pE(e){return typeof e=="function"}function mE(e){return typeof e=="object"&&!Array.isArray(e)}function ac(e){return typeof e=="string"||e instanceof String}function hf(e){return lc()&&e instanceof Blob}function lc(){return typeof Blob<"u"}function pf(e,t,n,r){if(r<t)throw Kl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Kl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function gE(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Pn||(Pn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(t,n,r,i,s,o,a,l,u,f,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ms(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Pn.NO_ERROR,l=s.getStatus();if(!a||Qm(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Pn.ABORT;r(!1,new ms(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ms(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hE(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=oc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ym():Km();o(l)}else{const l=Gm();o(l)}};this.canceled_?n(!1,new ms(!1,null,!0)):this.backoffId_=dE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&fE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ms{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function yE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function _E(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function SE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function EE(e,t,n,r,i,s,o=!0){const a=gE(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return wE(u,t),yE(u,n),_E(u,s),SE(u,r),new vE(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IE(...e){const t=kE();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(lc())return new Blob(e);throw new J(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TE(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(e){if(typeof atob>"u")throw lE("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Da{constructor(t,n){this.data=t,this.contentType=n||null}}function RE(e,t){switch(e){case at.RAW:return new Da(Xm(t));case at.BASE64:case at.BASE64URL:return new Da(Jm(e,t));case at.DATA_URL:return new Da(AE(t),NE(t))}throw oc()}function Xm(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function PE(e){let t;try{t=decodeURIComponent(e)}catch{throw ci(at.DATA_URL,"Malformed data URL.")}return Xm(t)}function Jm(e,t){switch(e){case at.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw ci(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case at.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw ci(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CE(t)}catch(i){throw i.message.includes("polyfill")?i:ci(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Zm{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ci(at.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=OE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function AE(e){const t=new Zm(e);return t.base64?Jm(at.BASE64,t.rest):PE(t.rest)}function NE(e){return new Zm(e).contentType}function OE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n){let r=0,i="";hf(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(hf(this.data_)){const r=this.data_,i=TE(r,t,n);return i===null?null:new Ht(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Ht(r,!0)}}static getBlob(...t){if(lc()){const n=t.map(r=>r instanceof Ht?r.data_:r);return new Ht(IE.apply(null,n))}else{const n=t.map(o=>ac(o)?RE(at.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ht(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e){let t;try{t=JSON.parse(e)}catch{return null}return mE(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function DE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function eg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(e,t){return t}class ge{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||UE}}let gs=null;function ME(e){return!ac(e)||e.length<2?e:eg(e)}function bE(){if(gs)return gs;const e=[];e.push(new ge("bucket")),e.push(new ge("generation")),e.push(new ge("metageneration")),e.push(new ge("name","fullPath",!0));function t(s,o){return ME(o)}const n=new ge("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ge("size");return i.xform=r,e.push(i),e.push(new ge("timeCreated")),e.push(new ge("updated")),e.push(new ge("md5Hash",null,!0)),e.push(new ge("cacheControl",null,!0)),e.push(new ge("contentDisposition",null,!0)),e.push(new ge("contentEncoding",null,!0)),e.push(new ge("contentLanguage",null,!0)),e.push(new ge("contentType",null,!0)),e.push(new ge("metadata","customMetadata",!0)),gs=e,gs}function FE(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new xe(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function zE(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return FE(r,e),r}function $E(e,t,n){const r=xE(t);return r===null?null:zE(e,r,n)}function tg(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class Wi{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){if(!e)throw oc()}function cc(e,t){function n(r,i){const s=$E(e,i,t);return sn(s!==null),s}return n}function Gi(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=nE():i=tE():n.getStatus()===402?i=eE(e.bucket):n.getStatus()===403?i=rE(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function jE(e){const t=Gi(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=ZS(e.path)),s.serverResponse=i.serverResponse,s}return n}function BE(e,t,n){const r=t.fullServerUrl(),i=uc(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Wi(i,s,cc(e,n),o);return a.errorHandler=jE(t),a}function HE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function ng(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=HE(null,t)),r}function VE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let d="";for(let g=0;g<2;g++)d=d+Math.random().toString().slice(2);return d}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=ng(t,r,i),f=tg(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Ht.getBlob(p,r,m);if(v===null)throw qm();const y={name:u.fullPath},_=uc(s,e.host,e._protocol),R="POST",h=e.maxUploadRetryTime,c=new Wi(_,R,cc(e,n),h);return c.urlParams=y,c.headers=o,c.body=v.uploadData(),c.errorHandler=Gi(t),c}class wo{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function dc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{sn(!1)}return sn(!!n&&(t||["active"]).indexOf(n)!==-1),n}function WE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=ng(t,r,i),a={name:o.fullPath},l=uc(s,e.host,e._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=tg(o,n),m=e.maxUploadRetryTime;function v(_){dc(_);let R;try{R=_.getResponseHeader("X-Goog-Upload-URL")}catch{sn(!1)}return sn(ac(R)),R}const y=new Wi(l,u,v,m);return y.urlParams=a,y.headers=f,y.body=p,y.errorHandler=Gi(t),y}function GE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const f=dc(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{sn(!1)}p||sn(!1);const m=Number(p);return sn(!isNaN(m)),new wo(m,r.size(),f==="final")}const o="POST",a=e.maxUploadRetryTime,l=new Wi(n,o,s,a);return l.headers=i,l.errorHandler=Gi(t),l}const mf=256*1024;function KE(e,t,n,r,i,s,o,a){const l=new wo(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw aE();const u=l.total-l.current;let f=u;i>0&&(f=Math.min(f,i));const p=l.current,m=p+f;let v="";f===0?v="finalize":u===f?v="upload, finalize":v="upload";const y={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(p,m);if(_===null)throw qm();function R(g,E){const S=dc(g,["active","final"]),w=l.current+f,I=r.size();let U;return S==="final"?U=cc(t,s)(g,E):U=null,new wo(w,I,S==="final",U)}const h="POST",c=t.maxUploadRetryTime,d=new Wi(n,h,R,c);return d.headers=y,d.body=_.uploadData(),d.progressCallback=a||null,d.errorHandler=Gi(e),d}const Se={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ua(e){switch(e){case"running":case"pausing":case"canceling":return Se.RUNNING;case"paused":return Se.PAUSED;case"success":return Se.SUCCESS;case"canceled":return Se.CANCELED;case"error":return Se.ERROR;default:return Se.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,n,r){if(pE(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const s=t;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class YE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Pn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Pn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Pn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Vr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class QE extends YE{initXhr(){this.xhr_.responseType="text"}}function Wr(){return new QE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=bE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(K.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Qm(i.status,[]))if(s)i=Gm();else{this.sleepTime=Math.max(this.sleepTime*2,JS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(K.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=WE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wr,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=GE(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,Wr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=mf*this._chunkMultiplier,n=new wo(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=KE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Wr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){mf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=BE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Wr,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=VE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wr,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Km(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ua(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const s=new qE(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ua(this._state)){case Se.SUCCESS:Hn(this._resolve.bind(null,this.snapshot))();break;case Se.CANCELED:case Se.ERROR:const n=this._reject;Hn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ua(this._state)){case Se.RUNNING:case Se.PAUSED:t.next&&Hn(t.next.bind(t,this.snapshot))();break;case Se.SUCCESS:t.complete&&Hn(t.complete.bind(t))();break;case Se.CANCELED:case Se.ERROR:t.error&&Hn(t.error.bind(t,this._error))();break;default:t.error&&Hn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n){this._service=t,n instanceof xe?this._location=n:this._location=xe.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new bn(t,n)}get root(){const t=new xe(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eg(this._location.path)}get storage(){return this._service}get parent(){const t=LE(this._location.path);if(t===null)return null;const n=new xe(this._location.bucket,t);return new bn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw uE(t)}}function JE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new XE(e,new Ht(t),n)}function ZE(e,t){const n=DE(e._location.path,t),r=new xe(e._location.bucket,n);return new bn(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(e){return/^[A-Za-z]+:\/\//.test(e)}function tk(e,t){return new bn(e,t)}function rg(e,t){if(e instanceof fc){const n=e;if(n._bucket==null)throw oE();const r=new bn(n,n._bucket);return t!=null?rg(r,t):r}else return t!==void 0?ZE(e,t):e}function nk(e,t){if(t&&ek(t)){if(e instanceof fc)return tk(e,t);throw Kl("To use ref(service, url), the first argument must be a Storage instance.")}else return rg(e,t)}function gf(e,t){const n=t==null?void 0:t[Wm];return n==null?null:xe.makeFromBucketSpec(n,e)}function rk(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Wy(i,e.app.options.projectId))}class fc{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Vm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QS,this._maxUploadRetryTime=XS,this._requests=new Set,i!=null?this._bucket=xe.makeFromBucketSpec(i,this._host):this._bucket=gf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=xe.makeFromBucketSpec(this._url,t):this._bucket=gf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){pf("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){pf("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new bn(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new cE(Ym());{const o=EE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const vf="@firebase/storage",yf="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="storage";function ik(e,t,n){return e=tt(e),JE(e,t,n)}function sk(e,t){return e=tt(e),nk(e,t)}function ok(e=bp(),t){e=tt(e);const r=Vu(e,ig).getImmediate({identifier:t}),i=Hy("storage");return i&&ak(r,...i),r}function ak(e,t,n,r={}){rk(e,t,n,r)}function lk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new fc(n,r,i,t,Nr)}function uk(){wr(new Dn(ig,lk,"PUBLIC").setMultipleInstances(!0)),nn(vf,yf,""),nn(vf,yf,"esm2017")}uk();const ck=ok(Bm),dk=(e,t)=>{const n=sk(ck,t.name);ik(n,e,{contentType:e.type,customMetadata:t})},fk=()=>{const[e,t]=oe.useState(!1),[n,r]=oe.useState(""),[i,s]=oe.useState(""),[o,a]=oe.useState(null);return ot(Ma,{children:[D(qS,{onClick:()=>t(!e),src:YS,alt:"Add more content"}),e&&D(Ma,{children:ot("form",{style:{marginBottom:"30px"},onSubmit:async f=>{f.preventDefault(),o&&(dk(o,{name:i,caption:n}),a(null),r(""),s(""),t(!1))},children:[D("div",{children:D("label",{htmlFor:"caption",children:"Caption"})}),ot("div",{children:[D("input",{id:"caption",value:n,onChange:f=>r(f.target.value)}),D("div",{children:D("label",{htmlFor:"name",children:"Name"})}),D("div",{children:D("input",{id:"name",value:i,onChange:f=>s(f.target.value),required:!0})})]}),D("div",{children:D("label",{htmlFor:"file",children:"Choose a file"})}),D("div",{children:D("input",{id:"file",type:"file",required:!0,onChange:f=>{f.target.files&&a(f.target.files[0])}})}),o&&D("button",{type:"submit",children:"Upload a file"})]})})]})},hk=oe.lazy(()=>Uy(()=>import("./LazyContent-d7257c55.js"),[],import.meta.url)),pk=()=>{const[e,t]=oe.useState(0),[n,r]=oe.useState(null);return oe.useEffect(()=>{uw(Hm,i=>{r(i)})},[]),e>=10&&!n?D(LS,{}):ot(Ma,{children:[ot(VS,{children:[D(WS,{onClick:()=>t(e+1),children:D("img",{src:jS,alt:"are we cool yet t-shirt"})}),D(HS,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),D(BS,{children:"YOU'RE ALL WELCOME"})]}),D(GS,{children:ot(KS,{children:[n&&D(fk,{}),$S.map(i=>D(oe.Suspense,{fallback:D(PS,{}),children:D(hk,{content:i})},i.src))]})})]})};ba.createRoot(document.getElementById("root")).render(D(pk,{}));export{TS as A,gk as B,zS as C,CS as S,ot as a,mk as b,D as j};
