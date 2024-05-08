(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rs={},bw={get exports(){return Rs},set exports(t){Rs=t}},rl={},P={},Ow={get exports(){return P},set exports(t){P=t}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Dw=Symbol.for("react.portal"),Lw=Symbol.for("react.fragment"),Mw=Symbol.for("react.strict_mode"),Uw=Symbol.for("react.profiler"),Fw=Symbol.for("react.provider"),zw=Symbol.for("react.context"),Bw=Symbol.for("react.forward_ref"),$w=Symbol.for("react.suspense"),Ww=Symbol.for("react.memo"),Hw=Symbol.for("react.lazy"),hf=Symbol.iterator;function jw(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function bi(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=bi.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var pd=fd.prototype=new gg;pd.constructor=fd;pg(pd,bi.prototype);pd.isPureReactComponent=!0;var ff=Array.isArray,_g=Object.prototype.hasOwnProperty,md={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_g.call(e,r)&&!yg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:eo,type:t,key:s,ref:o,props:i,_owner:md.current}}function Vw(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Gw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pf=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gw(""+t.key):e.toString(36)}function Ho(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case eo:case Dw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vl(o,0):r,ff(i)?(n="",t!=null&&(n=t.replace(pf,"$&/")+"/"),Ho(i,e,n,"",function(u){return u})):i!=null&&(gd(i)&&(i=Vw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ff(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vl(s,a);o+=Ho(s,e,n,l,i)}else if(l=jw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vl(s,a++),o+=Ho(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var r=[],i=0;return Ho(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},jo={transition:null},Kw={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:jo,ReactCurrentOwner:md};F.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=bi;F.Fragment=Lw;F.Profiler=Uw;F.PureComponent=fd;F.StrictMode=Mw;F.Suspense=$w;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_g.call(e,l)&&!yg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:eo,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:zw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fw,_context:t},t.Consumer=t};F.createElement=vg;F.createFactory=function(t){var e=vg.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Bw,render:t}};F.isValidElement=gd;F.lazy=function(t){return{$$typeof:Hw,_payload:{_status:-1,_result:t},_init:qw}};F.memo=function(t,e){return{$$typeof:Ww,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(t,e){return $e.current.useCallback(t,e)};F.useContext=function(t){return $e.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};F.useEffect=function(t,e){return $e.current.useEffect(t,e)};F.useId=function(){return $e.current.useId()};F.useImperativeHandle=function(t,e,n){return $e.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return $e.current.useMemo(t,e)};F.useReducer=function(t,e,n){return $e.current.useReducer(t,e,n)};F.useRef=function(t){return $e.current.useRef(t)};F.useState=function(t){return $e.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return $e.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return $e.current.useTransition()};F.version="18.2.0";(function(t){t.exports=F})(Ow);const As=Pw(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw=P,Qw=Symbol.for("react.element"),Xw=Symbol.for("react.fragment"),Jw=Object.prototype.hasOwnProperty,Zw=Yw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eE={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Jw.call(e,r)&&!eE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Qw,type:t,key:s,ref:o,props:i,_owner:Zw.current}}rl.Fragment=Xw;rl.jsx=wg;rl.jsxs=wg;(function(t){t.exports=rl})(bw);const Wn=Rs.Fragment,v=Rs.jsx,oe=Rs.jsxs;var zu={},Bu={},tE={get exports(){return Bu},set exports(t){Bu=t}},it={},$u={},nE={get exports(){return $u},set exports(t){$u=t}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,b){var D=N.length;N.push(b);e:for(;0<D;){var K=D-1>>>1,Y=N[K];if(0<i(Y,b))N[K]=b,N[D]=Y,D=K;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],D=N.pop();if(D!==b){N[0]=D;e:for(var K=0,Y=N.length,tr=Y>>>1;K<tr;){var mt=2*(K+1)-1,pn=N[mt],Ze=mt+1,Wt=N[Ze];if(0>i(pn,D))Ze<Y&&0>i(Wt,pn)?(N[K]=Wt,N[Ze]=D,K=Ze):(N[K]=pn,N[mt]=D,K=mt);else if(Ze<Y&&0>i(Wt,D))N[K]=Wt,N[Ze]=D,K=Ze;else break e}}return b}function i(N,b){var D=N.sortIndex-b.sortIndex;return D!==0?D:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,_=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=N)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function y(N){if(w=!1,p(N),!_)if(n(l)!==null)_=!0,ji(C);else{var b=n(u);b!==null&&er(y,b.startTime-N)}}function C(N,b){_=!1,w&&(w=!1,m(A),A=-1),g=!0;var D=h;try{for(p(b),d=n(l);d!==null&&(!(d.expirationTime>b)||N&&!Je());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Y=K(d.expirationTime<=b);b=t.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),p(b)}else r(l);d=n(l)}if(d!==null)var tr=!0;else{var mt=n(u);mt!==null&&er(y,mt.startTime-b),tr=!1}return tr}finally{d=null,h=D,g=!1}}var S=!1,E=null,A=-1,B=5,M=-1;function Je(){return!(t.unstable_now()-M<B)}function Jn(){if(E!==null){var N=t.unstable_now();M=N;var b=!0;try{b=E(!0,N)}finally{b?Zn():(S=!1,E=null)}}else S=!1}var Zn;if(typeof f=="function")Zn=function(){f(Jn)};else if(typeof MessageChannel<"u"){var go=new MessageChannel,Hl=go.port2;go.port1.onmessage=Jn,Zn=function(){Hl.postMessage(null)}}else Zn=function(){I(Jn,0)};function ji(N){E=N,S||(S=!0,Zn())}function er(N,b){A=I(function(){N(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ji(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var D=h;h=b;try{return N()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=h;h=N;try{return b()}finally{h=D}},t.unstable_scheduleCallback=function(N,b,D){var K=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,N){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,N={id:c++,callback:b,priorityLevel:N,startTime:D,expirationTime:Y,sortIndex:-1},D>K?(N.sortIndex=D,e(u,N),n(l)===null&&N===n(u)&&(w?(m(A),A=-1):w=!0,er(y,D-K))):(N.sortIndex=Y,e(l,N),_||g||(_=!0,ji(C))),N},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(N){var b=h;return function(){var D=h;h=b;try{return N.apply(this,arguments)}finally{h=D}}}})(Eg);(function(t){t.exports=Eg})(nE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=P,rt=$u;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,Ns={};function Pr(t,e){pi(t,e),pi(t+"Capture",e)}function pi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,rE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},gf={};function iE(t){return Wu.call(gf,t)?!0:Wu.call(mf,t)?!1:rE.test(t)?gf[t]=!0:(mf[t]=!0,!1)}function sE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oE(t,e,n,r){if(e===null||typeof e>"u"||sE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,yd);Ae[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,yd);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,yd);Ae[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oE(e,n,i,r)&&(n=null),r||i===null?iE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var un=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),_f=Symbol.iterator;function Gi(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Gl;function ss(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var ql=!1;function Kl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function aE(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case $r:return"Portal";case Hu:return"Profiler";case wd:return"StrictMode";case ju:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case Ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case vn:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function lE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uE(t){var e=Rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=uE(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ng(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function Ku(t,e){Ng(t,e);var n=Hn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,Hn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var os=Array.isArray;function ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(os(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hn(n)}}function xg(t,e){var n=Hn(e.value),r=Hn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cE=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(t){cE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hs[e]=hs[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hs.hasOwnProperty(t)&&hs[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Og(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dE=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(dE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,ri=null,ii=null;function Sf(t){if(t=ro(t)){if(typeof tc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=ll(e),tc(t.stateNode,t.type,e))}}function Lg(t){ri?ii?ii.push(t):ii=[t]:ri=t}function Mg(){if(ri){var t=ri,e=ii;if(ii=ri=null,Sf(t),e)for(t=0;t<e.length;t++)Sf(e[t])}}function Ug(t,e){return t(e)}function Fg(){}var Yl=!1;function zg(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return Ug(t,e,n)}finally{Yl=!1,(ri!==null||ii!==null)&&(Fg(),Mg())}}function Ps(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var nc=!1;if(tn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){nc=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{nc=!1}function hE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fs=!1,da=null,ha=!1,rc=null,fE={onError:function(t){fs=!0,da=t}};function pE(t,e,n,r,i,s,o,a,l){fs=!1,da=null,hE.apply(fE,arguments)}function mE(t,e,n,r,i,s,o,a,l){if(pE.apply(this,arguments),fs){if(fs){var u=da;fs=!1,da=null}else throw Error(k(198));ha||(ha=!0,rc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cf(t){if(br(t)!==t)throw Error(k(188))}function gE(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cf(i),t;if(s===r)return Cf(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function $g(t){return t=gE(t),t!==null?Wg(t):null}function Wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wg(t);if(e!==null)return e;t=t.sibling}return null}var Hg=rt.unstable_scheduleCallback,kf=rt.unstable_cancelCallback,_E=rt.unstable_shouldYield,yE=rt.unstable_requestPaint,de=rt.unstable_now,vE=rt.unstable_getCurrentPriorityLevel,kd=rt.unstable_ImmediatePriority,jg=rt.unstable_UserBlockingPriority,fa=rt.unstable_NormalPriority,wE=rt.unstable_LowPriority,Vg=rt.unstable_IdlePriority,il=null,Lt=null;function EE(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:kE,SE=Math.log,CE=Math.LN2;function kE(t){return t>>>=0,t===0?32:31-(SE(t)/CE|0)|0}var So=64,Co=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=as(a):(s&=o,s!==0&&(r=as(s)))}else o=n&~i,o!==0?r=as(o):s!==0&&(r=as(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function IE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=IE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gg(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function RE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kg,Td,Yg,Qg,Xg,sc=!1,ko=[],xn=null,Pn=null,bn=null,bs=new Map,Os=new Map,En=[],AE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function If(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function Ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ro(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NE(t,e,n,r,i){switch(e){case"focusin":return xn=Ki(xn,t,e,n,r,i),!0;case"dragenter":return Pn=Ki(Pn,t,e,n,r,i),!0;case"mouseover":return bn=Ki(bn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bs.set(s,Ki(bs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Os.set(s,Ki(Os.get(s)||null,t,e,n,r,i)),!0}return!1}function Jg(t){var e=ar(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Bg(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ec=r,n.target.dispatchEvent(r),ec=null}else return e=ro(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Tf(t,e,n){Vo(t)&&n.delete(e)}function xE(){sc=!1,xn!==null&&Vo(xn)&&(xn=null),Pn!==null&&Vo(Pn)&&(Pn=null),bn!==null&&Vo(bn)&&(bn=null),bs.forEach(Tf),Os.forEach(Tf)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,xE)))}function Ds(t){function e(i){return Yi(i,t)}if(0<ko.length){Yi(ko[0],t);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xn!==null&&Yi(xn,t),Pn!==null&&Yi(Pn,t),bn!==null&&Yi(bn,t),bs.forEach(e),Os.forEach(e),n=0;n<En.length;n++)r=En[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&En.shift()}var si=un.ReactCurrentBatchConfig,ma=!0;function PE(t,e,n,r){var i=V,s=si.transition;si.transition=null;try{V=1,Rd(t,e,n,r)}finally{V=i,si.transition=s}}function bE(t,e,n,r){var i=V,s=si.transition;si.transition=null;try{V=4,Rd(t,e,n,r)}finally{V=i,si.transition=s}}function Rd(t,e,n,r){if(ma){var i=oc(t,e,n,r);if(i===null)ou(t,e,r,ga,n),If(t,r);else if(NE(i,t,e,n,r))r.stopPropagation();else if(If(t,r),e&4&&-1<AE.indexOf(t)){for(;i!==null;){var s=ro(i);if(s!==null&&Kg(s),s=oc(t,e,n,r),s===null&&ou(t,e,r,ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ou(t,e,r,null,n)}}var ga=null;function oc(t,e,n,r){if(ga=null,t=Cd(r),t=ar(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ga=t,null}function Zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case kd:return 1;case jg:return 4;case fa:case wE:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var An=null,Ad=null,Go=null;function e_(){if(Go)return Go;var t,e=Ad,n=e.length,r,i="value"in An?An.value:An.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Go=i.slice(t,1<r?1-r:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Rf(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Rf,this.isPropagationStopped=Rf,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=st(Oi),no=le({},Oi,{view:0,detail:0}),OE=st(no),Xl,Jl,Qi,sl=le({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(Xl=t.screenX-Qi.screenX,Jl=t.screenY-Qi.screenY):Jl=Xl=0,Qi=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Af=st(sl),DE=le({},sl,{dataTransfer:0}),LE=st(DE),ME=le({},no,{relatedTarget:0}),Zl=st(ME),UE=le({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=st(UE),zE=le({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BE=st(zE),$E=le({},Oi,{data:0}),Nf=st($E),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jE[t])?!!e[t]:!1}function xd(){return VE}var GE=le({},no,{key:function(t){if(t.key){var e=WE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qE=st(GE),KE=le({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=st(KE),YE=le({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),QE=st(YE),XE=le({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=st(XE),ZE=le({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=st(ZE),tS=[9,13,27,32],Pd=tn&&"CompositionEvent"in window,ps=null;tn&&"documentMode"in document&&(ps=document.documentMode);var nS=tn&&"TextEvent"in window&&!ps,t_=tn&&(!Pd||ps&&8<ps&&11>=ps),Pf=String.fromCharCode(32),bf=!1;function n_(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function rS(t,e){switch(t){case"compositionend":return r_(e);case"keypress":return e.which!==32?null:(bf=!0,Pf);case"textInput":return t=e.data,t===Pf&&bf?null:t;default:return null}}function iS(t,e){if(Hr)return t==="compositionend"||!Pd&&n_(t,e)?(t=e_(),Go=Ad=An=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t_&&e.locale!=="ko"?null:e.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sS[t.type]:e==="textarea"}function i_(t,e,n,r){Lg(r),e=_a(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ms=null,Ls=null;function oS(t){m_(t,0)}function ol(t){var e=Gr(t);if(Ag(e))return t}function aS(t,e){if(t==="change")return e}var s_=!1;if(tn){var eu;if(tn){var tu="oninput"in document;if(!tu){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),tu=typeof Df.oninput=="function"}eu=tu}else eu=!1;s_=eu&&(!document.documentMode||9<document.documentMode)}function Lf(){ms&&(ms.detachEvent("onpropertychange",o_),Ls=ms=null)}function o_(t){if(t.propertyName==="value"&&ol(Ls)){var e=[];i_(e,Ls,t,Cd(t)),zg(oS,e)}}function lS(t,e,n){t==="focusin"?(Lf(),ms=e,Ls=n,ms.attachEvent("onpropertychange",o_)):t==="focusout"&&Lf()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Ls)}function cS(t,e){if(t==="click")return ol(e)}function dS(t,e){if(t==="input"||t==="change")return ol(e)}function hS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:hS;function Ms(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wu.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function Mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,e){var n=Mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mf(n)}}function a_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?a_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l_(){for(var t=window,e=ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ca(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fS(t){var e=l_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&a_(n.ownerDocument.documentElement,n)){if(r!==null&&bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Uf(n,s);var o=Uf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=tn&&"documentMode"in document&&11>=document.documentMode,jr=null,ac=null,gs=null,lc=!1;function Ff(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||jr==null||jr!==ca(r)||(r=jr,"selectionStart"in r&&bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gs&&Ms(gs,r)||(gs=r,r=_a(ac,"onSelect"),0<r.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jr)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},nu={},u_={};tn&&(u_=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function al(t){if(nu[t])return nu[t];if(!Vr[t])return t;var e=Vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u_)return nu[t]=e[n];return t}var c_=al("animationend"),d_=al("animationiteration"),h_=al("animationstart"),f_=al("transitionend"),p_=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(t,e){p_.set(t,e),Pr(e,[t])}for(var ru=0;ru<zf.length;ru++){var iu=zf[ru],mS=iu.toLowerCase(),gS=iu[0].toUpperCase()+iu.slice(1);qn(mS,"on"+gS)}qn(c_,"onAnimationEnd");qn(d_,"onAnimationIteration");qn(h_,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(f_,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Bf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mE(r,e,void 0,t),t.currentTarget=null}function m_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bf(i,a,u),s=l}}}if(ha)throw t=rc,ha=!1,rc=null,t}function X(t,e){var n=e[fc];n===void 0&&(n=e[fc]=new Set);var r=t+"__bubble";n.has(r)||(g_(e,t,2,!1),n.add(r))}function su(t,e,n){var r=0;e&&(r|=4),g_(n,t,r,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[Ro]){t[Ro]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,su("selectionchange",!1,e))}}function g_(t,e,n,r){switch(Zg(e)){case 1:var i=PE;break;case 4:i=bE;break;default:i=Rd}n=i.bind(null,e,n,t),i=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ou(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}zg(function(){var u=s,c=Cd(n),d=[];e:{var h=p_.get(t);if(h!==void 0){var g=Nd,_=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":g=qE;break;case"focusin":_="focus",g=Zl;break;case"focusout":_="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=LE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=QE;break;case c_:case d_:case h_:g=FE;break;case f_:g=JE;break;case"scroll":g=OE;break;case"wheel":g=eS;break;case"copy":case"cut":case"paste":g=BE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xf}var w=(e&4)!==0,I=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,m!==null&&(y=Ps(f,m),y!=null&&w.push(Fs(f,y,p)))),I)break;f=f.return}0<w.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ec&&(_=n.relatedTarget||n.fromElement)&&(ar(_)||_[nn]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?ar(_):null,_!==null&&(I=br(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(w=Af,y="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=xf,y="onPointerLeave",m="onPointerEnter",f="pointer"),I=g==null?h:Gr(g),p=_==null?h:Gr(_),h=new w(y,f+"leave",g,n,c),h.target=I,h.relatedTarget=p,y=null,ar(c)===u&&(w=new w(m,f+"enter",_,n,c),w.target=p,w.relatedTarget=I,y=w),I=y,g&&_)t:{for(w=g,m=_,f=0,p=w;p;p=Ur(p))f++;for(p=0,y=m;y;y=Ur(y))p++;for(;0<f-p;)w=Ur(w),f--;for(;0<p-f;)m=Ur(m),p--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ur(w),m=Ur(m)}w=null}else w=null;g!==null&&$f(d,h,g,w,!1),_!==null&&I!==null&&$f(d,I,_,w,!0)}}e:{if(h=u?Gr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=aS;else if(Of(h))if(s_)C=dS;else{C=uS;var S=lS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=cS);if(C&&(C=C(t,u))){i_(d,C,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Yu(h,"number",h.value)}switch(S=u?Gr(u):window,t){case"focusin":(Of(S)||S.contentEditable==="true")&&(jr=S,ac=u,gs=null);break;case"focusout":gs=ac=jr=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Ff(d,n,c);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Ff(d,n,c)}var E;if(Pd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Hr?n_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(t_&&n.locale!=="ko"&&(Hr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Hr&&(E=e_()):(An=c,Ad="value"in An?An.value:An.textContent,Hr=!0)),S=_a(u,A),0<S.length&&(A=new Nf(A,t,null,n,c),d.push({event:A,listeners:S}),E?A.data=E:(E=r_(n),E!==null&&(A.data=E)))),(E=nS?rS(t,n):iS(t,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(c=new Nf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}m_(d,e)})}function Fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ps(t,n),s!=null&&r.unshift(Fs(t,s,i)),s=Ps(t,e),s!=null&&r.push(Fs(t,s,i))),t=t.return}return r}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $f(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ps(n,s),l!=null&&o.unshift(Fs(n,l,a))):i||(l=Ps(n,s),l!=null&&o.push(Fs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Wf(t){return(typeof t=="string"?t:""+t).replace(yS,`
`).replace(vS,"")}function Ao(t,e,n){if(e=Wf(e),Wf(t)!==e&&n)throw Error(k(425))}function ya(){}var uc=null,cc=null;function dc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(t){return Hf.resolve(null).then(t).catch(SS)}:hc;function SS(t){setTimeout(function(){throw t})}function au(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ds(e)}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Di,zs="__reactProps$"+Di,nn="__reactContainer$"+Di,fc="__reactEvents$"+Di,CS="__reactListeners$"+Di,kS="__reactHandles$"+Di;function ar(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nn]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jf(t);t!==null;){if(n=t[Pt])return n;t=jf(t)}return e}t=n,n=t.parentNode}return null}function ro(t){return t=t[Pt]||t[nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function ll(t){return t[zs]||null}var pc=[],qr=-1;function Kn(t){return{current:t}}function te(t){0>qr||(t.current=pc[qr],pc[qr]=null,qr--)}function Q(t,e){qr++,pc[qr]=t.current,t.current=e}var jn={},De=Kn(jn),Ke=Kn(!1),vr=jn;function mi(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function va(){te(Ke),te(De)}function Vf(t,e,n){if(De.current!==jn)throw Error(k(168));Q(De,e),Q(Ke,n)}function __(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,lE(t)||"Unknown",i));return le({},n,r)}function wa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,vr=De.current,Q(De,t),Q(Ke,Ke.current),!0}function Gf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=__(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,te(Ke),te(De),Q(De,t)):te(Ke),Q(Ke,n)}var Vt=null,ul=!1,lu=!1;function y_(t){Vt===null?Vt=[t]:Vt.push(t)}function IS(t){ul=!0,y_(t)}function Yn(){if(!lu&&Vt!==null){lu=!0;var t=0,e=V;try{var n=Vt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vt=null,ul=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(t+1)),Hg(kd,Yn),i}finally{V=e,lu=!1}}return null}var Kr=[],Yr=0,Ea=null,Sa=0,ot=[],at=0,wr=null,Gt=1,qt="";function rr(t,e){Kr[Yr++]=Sa,Kr[Yr++]=Ea,Ea=t,Sa=e}function v_(t,e,n){ot[at++]=Gt,ot[at++]=qt,ot[at++]=wr,wr=t;var r=Gt;t=qt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gt=1<<32-St(e)+i|n<<i|r,qt=s+t}else Gt=1<<s|n<<i|r,qt=t}function Od(t){t.return!==null&&(rr(t,1),v_(t,1,0))}function Dd(t){for(;t===Ea;)Ea=Kr[--Yr],Kr[Yr]=null,Sa=Kr[--Yr],Kr[Yr]=null;for(;t===wr;)wr=ot[--at],ot[at]=null,qt=ot[--at],ot[at]=null,Gt=ot[--at],ot[at]=null}var nt=null,tt=null,ie=!1,vt=null;function w_(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=On(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:Gt,overflow:qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(ie){var e=tt;if(e){var n=e;if(!qf(t,e)){if(mc(t))throw Error(k(418));e=On(n.nextSibling);var r=nt;e&&qf(t,e)?w_(r,n):(t.flags=t.flags&-4097|2,ie=!1,nt=t)}}else{if(mc(t))throw Error(k(418));t.flags=t.flags&-4097|2,ie=!1,nt=t}}}function Kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function No(t){if(t!==nt)return!1;if(!ie)return Kf(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dc(t.type,t.memoizedProps)),e&&(e=tt)){if(mc(t))throw E_(),Error(k(418));for(;e;)w_(t,e),e=On(e.nextSibling)}if(Kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=On(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?On(t.stateNode.nextSibling):null;return!0}function E_(){for(var t=tt;t;)t=On(t.nextSibling)}function gi(){tt=nt=null,ie=!1}function Ld(t){vt===null?vt=[t]:vt.push(t)}var TS=un.ReactCurrentBatchConfig;function _t(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ca=Kn(null),ka=null,Qr=null,Md=null;function Ud(){Md=Qr=ka=null}function Fd(t){var e=Ca.current;te(Ca),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oi(t,e){ka=t,Md=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if(ka===null)throw Error(k(308));Qr=t,ka.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var lr=null;function zd(t){lr===null?lr=[t]:lr.push(t)}function S_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,rn(t,r)}function rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wn=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,rn(t,n)}return i=r.interleaved,i===null?(e.next=e,zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,rn(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}function Yf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ia(t,e,n,r){var i=t.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=le({},d,h);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=o,t.lanes=o,t.memoizedState=d}}function Qf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var k_=new Sg.Component().refs;function yc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=Mn(t),s=Zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Ct(e,t,i,r),Ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=Mn(t),s=Zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Ct(e,t,i,r),Ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=Mn(t),i=Zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,r),e!==null&&(Ct(e,t,r,n),Ko(e,t,r))}};function Xf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,r)||!Ms(i,s):!0}function I_(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ye(e)?vr:De.current,r=e.contextTypes,s=(r=r!=null)?mi(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cl.enqueueReplaceState(e,e.state,null)}function vc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=k_,Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ye(e)?vr:De.current,i.context=mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cl.enqueueReplaceState(i,i.state,null),Ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===k_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function xo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zf(t){var e=t._init;return e(t._payload)}function T_(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Un(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,p,y){return f===null||f.tag!==6?(f=mu(p,m.mode,y),f.return=m,f):(f=i(f,p),f.return=m,f)}function l(m,f,p,y){var C=p.type;return C===Wr?c(m,f,p.props.children,y,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vn&&Zf(C)===f.type)?(y=i(f,p.props),y.ref=Xi(m,f,p),y.return=m,y):(y=ea(p.type,p.key,p.props,null,m.mode,y),y.ref=Xi(m,f,p),y.return=m,y)}function u(m,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=gu(p,m.mode,y),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function c(m,f,p,y,C){return f===null||f.tag!==7?(f=pr(p,m.mode,y,C),f.return=m,f):(f=i(f,p),f.return=m,f)}function d(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mu(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return p=ea(f.type,f.key,f.props,null,m.mode,p),p.ref=Xi(m,null,f),p.return=m,p;case $r:return f=gu(f,m.mode,p),f.return=m,f;case vn:var y=f._init;return d(m,y(f._payload),p)}if(os(f)||Gi(f))return f=pr(f,m.mode,p,null),f.return=m,f;xo(m,f)}return null}function h(m,f,p,y){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(m,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:return p.key===C?l(m,f,p,y):null;case $r:return p.key===C?u(m,f,p,y):null;case vn:return C=p._init,h(m,f,C(p._payload),y)}if(os(p)||Gi(p))return C!==null?null:c(m,f,p,y,null);xo(m,p)}return null}function g(m,f,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(p)||null,a(f,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:return m=m.get(y.key===null?p:y.key)||null,l(f,m,y,C);case $r:return m=m.get(y.key===null?p:y.key)||null,u(f,m,y,C);case vn:var S=y._init;return g(m,f,p,S(y._payload),C)}if(os(y)||Gi(y))return m=m.get(p)||null,c(f,m,y,C,null);xo(f,y)}return null}function _(m,f,p,y){for(var C=null,S=null,E=f,A=f=0,B=null;E!==null&&A<p.length;A++){E.index>A?(B=E,E=null):B=E.sibling;var M=h(m,E,p[A],y);if(M===null){E===null&&(E=B);break}t&&E&&M.alternate===null&&e(m,E),f=s(M,f,A),S===null?C=M:S.sibling=M,S=M,E=B}if(A===p.length)return n(m,E),ie&&rr(m,A),C;if(E===null){for(;A<p.length;A++)E=d(m,p[A],y),E!==null&&(f=s(E,f,A),S===null?C=E:S.sibling=E,S=E);return ie&&rr(m,A),C}for(E=r(m,E);A<p.length;A++)B=g(E,m,A,p[A],y),B!==null&&(t&&B.alternate!==null&&E.delete(B.key===null?A:B.key),f=s(B,f,A),S===null?C=B:S.sibling=B,S=B);return t&&E.forEach(function(Je){return e(m,Je)}),ie&&rr(m,A),C}function w(m,f,p,y){var C=Gi(p);if(typeof C!="function")throw Error(k(150));if(p=C.call(p),p==null)throw Error(k(151));for(var S=C=null,E=f,A=f=0,B=null,M=p.next();E!==null&&!M.done;A++,M=p.next()){E.index>A?(B=E,E=null):B=E.sibling;var Je=h(m,E,M.value,y);if(Je===null){E===null&&(E=B);break}t&&E&&Je.alternate===null&&e(m,E),f=s(Je,f,A),S===null?C=Je:S.sibling=Je,S=Je,E=B}if(M.done)return n(m,E),ie&&rr(m,A),C;if(E===null){for(;!M.done;A++,M=p.next())M=d(m,M.value,y),M!==null&&(f=s(M,f,A),S===null?C=M:S.sibling=M,S=M);return ie&&rr(m,A),C}for(E=r(m,E);!M.done;A++,M=p.next())M=g(E,m,A,M.value,y),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?A:M.key),f=s(M,f,A),S===null?C=M:S.sibling=M,S=M);return t&&E.forEach(function(Jn){return e(m,Jn)}),ie&&rr(m,A),C}function I(m,f,p,y){if(typeof p=="object"&&p!==null&&p.type===Wr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:e:{for(var C=p.key,S=f;S!==null;){if(S.key===C){if(C=p.type,C===Wr){if(S.tag===7){n(m,S.sibling),f=i(S,p.props.children),f.return=m,m=f;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vn&&Zf(C)===S.type){n(m,S.sibling),f=i(S,p.props),f.ref=Xi(m,S,p),f.return=m,m=f;break e}n(m,S);break}else e(m,S);S=S.sibling}p.type===Wr?(f=pr(p.props.children,m.mode,y,p.key),f.return=m,m=f):(y=ea(p.type,p.key,p.props,null,m.mode,y),y.ref=Xi(m,f,p),y.return=m,m=y)}return o(m);case $r:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=gu(p,m.mode,y),f.return=m,m=f}return o(m);case vn:return S=p._init,I(m,f,S(p._payload),y)}if(os(p))return _(m,f,p,y);if(Gi(p))return w(m,f,p,y);xo(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=mu(p,m.mode,y),f.return=m,m=f),o(m)):n(m,f)}return I}var _i=T_(!0),R_=T_(!1),io={},Mt=Kn(io),Bs=Kn(io),$s=Kn(io);function ur(t){if(t===io)throw Error(k(174));return t}function $d(t,e){switch(Q($s,e),Q(Bs,t),Q(Mt,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}te(Mt),Q(Mt,e)}function yi(){te(Mt),te(Bs),te($s)}function A_(t){ur($s.current);var e=ur(Mt.current),n=Xu(e,t.type);e!==n&&(Q(Bs,t),Q(Mt,n))}function Wd(t){Bs.current===t&&(te(Mt),te(Bs))}var se=Kn(0);function Ta(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uu=[];function Hd(){for(var t=0;t<uu.length;t++)uu[t]._workInProgressVersionPrimary=null;uu.length=0}var Yo=un.ReactCurrentDispatcher,cu=un.ReactCurrentBatchConfig,Er=0,ae=null,me=null,ve=null,Ra=!1,_s=!1,Ws=0,RS=0;function Ne(){throw Error(k(321))}function jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(Er=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?PS:bS,t=n(r,i),_s){s=0;do{if(_s=!1,Ws=0,25<=s)throw Error(k(301));s+=1,ve=me=null,e.updateQueue=null,Yo.current=OS,t=n(r,i)}while(_s)}if(Yo.current=Aa,e=me!==null&&me.next!==null,Er=0,ve=me=ae=null,Ra=!1,e)throw Error(k(300));return t}function Gd(){var t=Ws!==0;return Ws=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=t:ve=ve.next=t,ve}function ht(){if(me===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=ve===null?ae.memoizedState:ve.next;if(e!==null)ve=e,me=t;else{if(t===null)throw Error(k(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ae.memoizedState=ve=t:ve=ve.next=t}return ve}function Hs(t,e){return typeof e=="function"?e(t):e}function du(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ae.lanes|=c,Sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hu(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N_(){}function x_(t,e){var n=ae,r=ht(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,qd(O_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,js(9,b_.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));Er&30||P_(n,e,i)}return i}function P_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b_(t,e,n,r){e.value=n,e.getSnapshot=r,D_(e)&&L_(t)}function O_(t,e,n){return n(function(){D_(e)&&L_(t)})}function D_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function L_(t){var e=rn(t,1);e!==null&&Ct(e,t,1,-1)}function ep(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,ae,t),[e.memoizedState,t]}function js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function M_(){return ht().memoizedState}function Qo(t,e,n,r){var i=Nt();ae.flags|=t,i.memoizedState=js(1|e,n,void 0,r===void 0?null:r)}function dl(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&jd(r,o.deps)){i.memoizedState=js(e,n,s,r);return}}ae.flags|=t,i.memoizedState=js(1|e,n,s,r)}function tp(t,e){return Qo(8390656,8,t,e)}function qd(t,e){return dl(2048,8,t,e)}function U_(t,e){return dl(4,2,t,e)}function F_(t,e){return dl(4,4,t,e)}function z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B_(t,e,n){return n=n!=null?n.concat([t]):null,dl(4,4,z_.bind(null,e,t),n)}function Kd(){}function $_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function H_(t,e,n){return Er&21?(Tt(n,e)||(n=Gg(),ae.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function AS(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=cu.transition;cu.transition={};try{t(!1),e()}finally{V=n,cu.transition=r}}function j_(){return ht().memoizedState}function NS(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V_(t))G_(e,n);else if(n=S_(t,e,n,r),n!==null){var i=Be();Ct(n,t,r,i),q_(n,e,r)}}function xS(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V_(t))G_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,zd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=S_(t,e,i,r),n!==null&&(i=Be(),Ct(n,t,r,i),q_(n,e,r))}}function V_(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function G_(t,e){_s=Ra=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Id(t,n)}}var Aa={readContext:dt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},PS={readContext:dt,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4194308,4,z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qo(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:Kd,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=AS.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Nt();if(ie){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));Er&30||P_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tp(O_.bind(null,r,s,t),[t]),r.flags|=2048,js(9,b_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=Se.identifierPrefix;if(ie){var n=qt,r=Gt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bS={readContext:dt,useCallback:$_,useContext:dt,useEffect:qd,useImperativeHandle:B_,useInsertionEffect:U_,useLayoutEffect:F_,useMemo:W_,useReducer:du,useRef:M_,useState:function(){return du(Hs)},useDebugValue:Kd,useDeferredValue:function(t){var e=ht();return H_(e,me.memoizedState,t)},useTransition:function(){var t=du(Hs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:x_,useId:j_,unstable_isNewReconciler:!1},OS={readContext:dt,useCallback:$_,useContext:dt,useEffect:qd,useImperativeHandle:B_,useInsertionEffect:U_,useLayoutEffect:F_,useMemo:W_,useReducer:hu,useRef:M_,useState:function(){return hu(Hs)},useDebugValue:Kd,useDeferredValue:function(t){var e=ht();return me===null?e.memoizedState=t:H_(e,me.memoizedState,t)},useTransition:function(){var t=hu(Hs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:x_,useId:j_,unstable_isNewReconciler:!1};function vi(t,e){try{var n="",r=e;do n+=aE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xa||(xa=!0,xc=r),wc(t,e)},n}function Y_(t,e,n){n=Zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wc(t,e),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function np(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KS.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zt(-1,1),e.tag=2,Dn(n,e,1))),n.lanes|=1),t)}var LS=un.ReactCurrentOwner,Ve=!1;function Ue(t,e,n,r){e.child=t===null?R_(e,null,n,r):_i(e,t.child,n,r)}function sp(t,e,n,r,i){n=n.render;var s=e.ref;return oi(e,i),r=Vd(t,e,n,r,s,i),n=Gd(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(ie&&n&&Od(e),e.flags|=1,Ue(t,e,r,i),e.child)}function op(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Q_(t,e,s,r,i)):(t=ea(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ms,n(o,r)&&t.ref===e.ref)return sn(t,e,i)}return e.flags|=1,t=Un(s,r),t.ref=e.ref,t.return=e,e.child=t}function Q_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ms(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,sn(t,e,i)}return Ec(t,e,n,r,i)}function X_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Jr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Jr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Jr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Jr,et),et|=r;return Ue(t,e,i,n),e.child}function J_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ec(t,e,n,r,i){var s=Ye(n)?vr:De.current;return s=mi(e,s),oi(e,i),n=Vd(t,e,n,r,s,i),r=Gd(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,sn(t,e,i)):(ie&&r&&Od(e),e.flags|=1,Ue(t,e,n,i),e.child)}function ap(t,e,n,r,i){if(Ye(n)){var s=!0;wa(e)}else s=!1;if(oi(e,i),e.stateNode===null)Xo(t,e),I_(e,n,r),vc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ye(n)?vr:De.current,u=mi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Jf(e,o,r,u),wn=!1;var h=e.memoizedState;o.state=h,Ia(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ke.current||wn?(typeof c=="function"&&(yc(e,n,c,r),l=e.memoizedState),(a=wn||Xf(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_t(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Ye(n)?vr:De.current,l=mi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Jf(e,o,r,l),wn=!1,h=e.memoizedState,o.state=h,Ia(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||Ke.current||wn?(typeof g=="function"&&(yc(e,n,g,r),_=e.memoizedState),(u=wn||Xf(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Sc(t,e,n,r,s,i)}function Sc(t,e,n,r,i,s){J_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gf(e,n,!1),sn(t,e,s);r=e.stateNode,LS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_i(e,t.child,null,s),e.child=_i(e,null,a,s)):Ue(t,e,a,s),e.memoizedState=r.state,i&&Gf(e,n,!0),e.child}function Z_(t){var e=t.stateNode;e.pendingContext?Vf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vf(t,e.context,!1),$d(t,e.containerInfo)}function lp(t,e,n,r,i){return gi(),Ld(i),e.flags|=256,Ue(t,e,n,r),e.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ey(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(se,i&1),t===null)return gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pl(o,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kc(n),e.memoizedState=Cc,t):Yd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Un(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Un(a,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cc,r}return s=t.child,t=s.sibling,r=Un(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Po(t,e,n,r){return r!==null&&Ld(r),_i(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fu(Error(k(422))),Po(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_i(e,t.child,null,o),e.child.memoizedState=kc(o),e.memoizedState=Cc,s);if(!(e.mode&1))return Po(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=fu(s,r,void 0),Po(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ve||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(t,i),Ct(r,t,i,-1))}return th(),r=fu(Error(k(421))),Po(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=On(i.nextSibling),nt=e,ie=!0,vt=null,t!==null&&(ot[at++]=Gt,ot[at++]=qt,ot[at++]=wr,Gt=t.id,qt=t.overflow,wr=e),e=Yd(e,r.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_c(t.return,e,n)}function pu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ty(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ue(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ta(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ta(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function US(t,e,n){switch(e.tag){case 3:Z_(e),gi();break;case 5:A_(e);break;case 1:Ye(e.type)&&wa(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Ca,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?ey(t,e,n):(Q(se,se.current&1),t=sn(t,e,n),t!==null?t.sibling:null);Q(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ty(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return sn(t,e,n)}var ny,Ic,ry,iy;ny=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ic=function(){};ry=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(Mt.current);var s=null;switch(n){case"input":i=qu(t,i),r=qu(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Qu(t,i),r=Qu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ya)}Ju(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ji(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FS(t,e,n){var r=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(e),null;case 1:return Ye(e.type)&&va(),xe(e),null;case 3:return r=e.stateNode,yi(),te(Ke),te(De),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(Oc(vt),vt=null))),Ic(t,e),xe(e),null;case 5:Wd(e);var i=ur($s.current);if(n=e.type,t!==null&&e.stateNode!=null)ry(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return xe(e),null}if(t=ur(Mt.current),No(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pt]=e,r[zs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)X(ls[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":yf(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":wf(r,s),X("invalid",r)}Ju(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ao(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ao(r.textContent,a,t),i=["children",""+a]):Ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":wo(r),vf(r,s,!0);break;case"textarea":wo(r),Ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pt]=e,t[zs]=r,ny(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zu(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)X(ls[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":yf(t,r),i=qu(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),X("invalid",t);break;case"textarea":wf(t,r),i=Qu(t,r),X("invalid",t);break;default:i=r}Ju(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xs(t,l):typeof l=="number"&&xs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&vd(t,s,l,o))}switch(n){case"input":wo(t),vf(t,r,!1);break;case"textarea":wo(t),Ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xe(e),null;case 6:if(t&&e.stateNode!=null)iy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ur($s.current),ur(Mt.current),No(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Ao(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return xe(e),null;case 13:if(te(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&tt!==null&&e.mode&1&&!(e.flags&128))E_(),gi(),e.flags|=98560,s=!1;else if(s=No(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Pt]=e}else gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xe(e),s=!1}else vt!==null&&(Oc(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?_e===0&&(_e=3):th())),e.updateQueue!==null&&(e.flags|=4),xe(e),null);case 4:return yi(),Ic(t,e),t===null&&Us(e.stateNode.containerInfo),xe(e),null;case 10:return Fd(e.type._context),xe(e),null;case 17:return Ye(e.type)&&va(),xe(e),null;case 19:if(te(se),s=e.memoizedState,s===null)return xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ji(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ta(t),o!==null){for(e.flags|=128,Ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>wi&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ta(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return xe(e),null}else 2*de()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=se.current,Q(se,r?n&1|2:n&1),e):(xe(e),null);case 22:case 23:return eh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(xe(e),e.subtreeFlags&6&&(e.flags|=8192)):xe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function zS(t,e){switch(Dd(e),e.tag){case 1:return Ye(e.type)&&va(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),te(Ke),te(De),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(te(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(se),null;case 4:return yi(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var bo=!1,Pe=!1,BS=typeof WeakSet=="function"?WeakSet:Set,x=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Tc(t,e,n){try{n()}catch(r){ce(t,e,r)}}var cp=!1;function $S(t,e){if(uc=ma,t=l_(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},ma=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,I=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:_t(e.type,w),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){ce(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return _=cp,cp=!1,_}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tc(e,n,s)}i=i.next}while(i!==r)}}function hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sy(t){var e=t.alternate;e!==null&&(t.alternate=null,sy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[zs],delete e[fc],delete e[CS],delete e[kS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oy(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ac(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ya));else if(r!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var ke=null,yt=!1;function gn(t,e,n){for(n=n.child;n!==null;)ay(t,e,n),n=n.sibling}function ay(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:Pe||Xr(n,e);case 6:var r=ke,i=yt;ke=null,gn(t,e,n),ke=r,yt=i,ke!==null&&(yt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(yt?(t=ke,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),Ds(t)):au(ke,n.stateNode));break;case 4:r=ke,i=yt,ke=n.stateNode.containerInfo,yt=!0,gn(t,e,n),ke=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tc(n,e,o),i=i.next}while(i!==r)}gn(t,e,n);break;case 1:if(!Pe&&(Xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,e,a)}gn(t,e,n);break;case 21:gn(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,gn(t,e,n),Pe=r):gn(t,e,n);break;default:gn(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(r){var i=QS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,yt=!1;break e;case 3:ke=a.stateNode.containerInfo,yt=!0;break e;case 4:ke=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(ke===null)throw Error(k(160));ay(s,o,i),ke=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ly(e,t),e=e.sibling}function ly(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),At(t),r&4){try{ys(3,t,t.return),hl(3,t)}catch(w){ce(t,t.return,w)}try{ys(5,t,t.return)}catch(w){ce(t,t.return,w)}}break;case 1:gt(e,t),At(t),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(gt(e,t),At(t),r&512&&n!==null&&Xr(n,n.return),t.flags&32){var i=t.stateNode;try{xs(i,"")}catch(w){ce(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ng(i,s),Zu(a,o);var u=Zu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Dg(i,d):c==="dangerouslySetInnerHTML"?bg(i,d):c==="children"?xs(i,d):vd(i,c,d,u)}switch(a){case"input":Ku(i,s);break;case"textarea":xg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ni(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?ni(i,!!s.multiple,s.defaultValue,!0):ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[zs]=s}catch(w){ce(t,t.return,w)}}break;case 6:if(gt(e,t),At(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ce(t,t.return,w)}}break;case 3:if(gt(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ds(e.containerInfo)}catch(w){ce(t,t.return,w)}break;case 4:gt(e,t),At(t);break;case 13:gt(e,t),At(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jd=de())),r&4&&hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||c,gt(e,t),Pe=u):gt(e,t),At(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(d=x=c;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:ys(4,h,h.return);break;case 1:Xr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){ce(r,n,w)}}break;case 5:Xr(h,h.return);break;case 22:if(h.memoizedState!==null){pp(d);continue}}g!==null?(g.return=h,x=g):pp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(w){ce(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ce(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(e,t),At(t),r&4&&hp(t);break;case 21:break;default:gt(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var s=dp(t);Nc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=dp(t);Ac(t,a,o);break;default:throw Error(k(161))}}catch(l){ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WS(t,e,n){x=t,uy(t)}function uy(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=bo;var u=Pe;if(bo=o,(Pe=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?mp(i):l!==null?(l.return=o,x=l):mp(i);for(;s!==null;)x=s,uy(s),s=s.sibling;x=i,bo=a,Pe=u}fp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):fp(t)}}function fp(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ds(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Pe||e.flags&512&&Rc(e)}catch(h){ce(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function pp(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function mp(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hl(4,e)}catch(l){ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ce(e,i,l)}}var s=e.return;try{Rc(e)}catch(l){ce(e,s,l)}break;case 5:var o=e.return;try{Rc(e)}catch(l){ce(e,o,l)}}}catch(l){ce(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var HS=Math.ceil,Na=un.ReactCurrentDispatcher,Qd=un.ReactCurrentOwner,ct=un.ReactCurrentBatchConfig,W=0,Se=null,pe=null,Re=0,et=0,Jr=Kn(0),_e=0,Vs=null,Sr=0,fl=0,Xd=0,vs=null,je=null,Jd=0,wi=1/0,Ht=null,xa=!1,xc=null,Ln=null,Oo=!1,Nn=null,Pa=0,ws=0,Pc=null,Jo=-1,Zo=0;function Be(){return W&6?de():Jo!==-1?Jo:Jo=de()}function Mn(t){return t.mode&1?W&2&&Re!==0?Re&-Re:TS.transition!==null?(Zo===0&&(Zo=Gg()),Zo):(t=V,t!==0||(t=window.event,t=t===void 0?16:Zg(t.type)),t):1}function Ct(t,e,n,r){if(50<ws)throw ws=0,Pc=null,Error(k(185));to(t,n,r),(!(W&2)||t!==Se)&&(t===Se&&(!(W&2)&&(fl|=n),_e===4&&Sn(t,Re)),Qe(t,r),n===1&&W===0&&!(e.mode&1)&&(wi=de()+500,ul&&Yn()))}function Qe(t,e){var n=t.callbackNode;TE(t,e);var r=pa(t,t===Se?Re:0);if(r===0)n!==null&&kf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kf(n),e===1)t.tag===0?IS(gp.bind(null,t)):y_(gp.bind(null,t)),ES(function(){!(W&6)&&Yn()}),n=null;else{switch(qg(r)){case 1:n=kd;break;case 4:n=jg;break;case 16:n=fa;break;case 536870912:n=Vg;break;default:n=fa}n=_y(n,cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cy(t,e){if(Jo=-1,Zo=0,W&6)throw Error(k(327));var n=t.callbackNode;if(ai()&&t.callbackNode!==n)return null;var r=pa(t,t===Se?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ba(t,r);else{e=r;var i=W;W|=2;var s=hy();(Se!==t||Re!==e)&&(Ht=null,wi=de()+500,fr(t,e));do try{GS();break}catch(a){dy(t,a)}while(1);Ud(),Na.current=s,W=i,pe!==null?e=0:(Se=null,Re=0,e=_e)}if(e!==0){if(e===2&&(i=ic(t),i!==0&&(r=i,e=bc(t,i))),e===1)throw n=Vs,fr(t,0),Sn(t,r),Qe(t,de()),n;if(e===6)Sn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jS(i)&&(e=ba(t,r),e===2&&(s=ic(t),s!==0&&(r=s,e=bc(t,s))),e===1))throw n=Vs,fr(t,0),Sn(t,r),Qe(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ir(t,je,Ht);break;case 3:if(Sn(t,r),(r&130023424)===r&&(e=Jd+500-de(),10<e)){if(pa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hc(ir.bind(null,t,je,Ht),e);break}ir(t,je,Ht);break;case 4:if(Sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HS(r/1960))-r,10<r){t.timeoutHandle=hc(ir.bind(null,t,je,Ht),r);break}ir(t,je,Ht);break;case 5:ir(t,je,Ht);break;default:throw Error(k(329))}}}return Qe(t,de()),t.callbackNode===n?cy.bind(null,t):null}function bc(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ba(t,e),t!==2&&(e=je,je=n,e!==null&&Oc(e)),t}function Oc(t){je===null?je=t:je.push.apply(je,t)}function jS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sn(t,e){for(e&=~Xd,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function gp(t){if(W&6)throw Error(k(327));ai();var e=pa(t,0);if(!(e&1))return Qe(t,de()),null;var n=ba(t,e);if(t.tag!==0&&n===2){var r=ic(t);r!==0&&(e=r,n=bc(t,r))}if(n===1)throw n=Vs,fr(t,0),Sn(t,e),Qe(t,de()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,je,Ht),Qe(t,de()),null}function Zd(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(wi=de()+500,ul&&Yn())}}function Cr(t){Nn!==null&&Nn.tag===0&&!(W&6)&&ai();var e=W;W|=1;var n=ct.transition,r=V;try{if(ct.transition=null,V=1,t)return t()}finally{V=r,ct.transition=n,W=e,!(W&6)&&Yn()}}function eh(){et=Jr.current,te(Jr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Dd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&va();break;case 3:yi(),te(Ke),te(De),Hd();break;case 5:Wd(r);break;case 4:yi();break;case 13:te(se);break;case 19:te(se);break;case 10:Fd(r.type._context);break;case 22:case 23:eh()}n=n.return}if(Se=t,pe=t=Un(t.current,null),Re=et=e,_e=0,Vs=null,Xd=fl=Sr=0,je=vs=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}lr=null}return t}function dy(t,e){do{var n=pe;try{if(Ud(),Yo.current=Aa,Ra){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ra=!1}if(Er=0,ve=me=ae=null,_s=!1,Ws=0,Qd.current=null,n===null||n.return===null){_e=1,Vs=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=rp(o);if(g!==null){g.flags&=-257,ip(g,o,a,s,e),g.mode&1&&np(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){np(s,u,e),th();break e}l=Error(k(426))}}else if(ie&&a.mode&1){var I=rp(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ip(I,o,a,s,e),Ld(vi(l,a));break e}}s=l=vi(l,a),_e!==4&&(_e=2),vs===null?vs=[s]:vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=K_(s,l,e);Yf(s,m);break e;case 1:a=l;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ln===null||!Ln.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Y_(s,a,e);Yf(s,y);break e}}s=s.return}while(s!==null)}py(n)}catch(C){e=C,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function hy(){var t=Na.current;return Na.current=Aa,t===null?Aa:t}function th(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(Sr&268435455)&&!(fl&268435455)||Sn(Se,Re)}function ba(t,e){var n=W;W|=2;var r=hy();(Se!==t||Re!==e)&&(Ht=null,fr(t,e));do try{VS();break}catch(i){dy(t,i)}while(1);if(Ud(),W=n,Na.current=r,pe!==null)throw Error(k(261));return Se=null,Re=0,_e}function VS(){for(;pe!==null;)fy(pe)}function GS(){for(;pe!==null&&!_E();)fy(pe)}function fy(t){var e=gy(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?py(t):pe=e,Qd.current=null}function py(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zS(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,pe=null;return}}else if(n=FS(n,e,et),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);_e===0&&(_e=5)}function ir(t,e,n){var r=V,i=ct.transition;try{ct.transition=null,V=1,qS(t,e,n,r)}finally{ct.transition=i,V=r}return null}function qS(t,e,n,r){do ai();while(Nn!==null);if(W&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RE(t,s),t===Se&&(pe=Se=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,_y(fa,function(){return ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=V;V=1;var a=W;W|=4,Qd.current=null,$S(t,n),ly(n,t),fS(cc),ma=!!uc,cc=uc=null,t.current=n,WS(n),yE(),W=a,V=o,ct.transition=s}else t.current=n;if(Oo&&(Oo=!1,Nn=t,Pa=i),s=t.pendingLanes,s===0&&(Ln=null),EE(n.stateNode),Qe(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,t=xc,xc=null,t;return Pa&1&&t.tag!==0&&ai(),s=t.pendingLanes,s&1?t===Pc?ws++:(ws=0,Pc=t):ws=0,Yn(),null}function ai(){if(Nn!==null){var t=qg(Pa),e=ct.transition,n=V;try{if(ct.transition=null,V=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,Pa=0,W&6)throw Error(k(331));var i=W;for(W|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:ys(8,c,s)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var h=c.sibling,g=c.return;if(sy(c),c===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,x=p;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(C){ce(a,a.return,C)}if(a===o){x=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,x=y;break e}x=a.return}}if(W=i,Yn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(il,t)}catch{}r=!0}return r}finally{V=n,ct.transition=e}}return!1}function _p(t,e,n){e=vi(n,e),e=K_(t,e,1),t=Dn(t,e,1),e=Be(),t!==null&&(to(t,1,e),Qe(t,e))}function ce(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){t=vi(n,t),t=Y_(e,t,1),e=Dn(e,t,1),t=Be(),e!==null&&(to(e,1,t),Qe(e,t));break}}e=e.return}}function KS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Re&n)===n&&(_e===4||_e===3&&(Re&130023424)===Re&&500>de()-Jd?fr(t,0):Xd|=n),Qe(t,e)}function my(t,e){e===0&&(t.mode&1?(e=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):e=1);var n=Be();t=rn(t,e),t!==null&&(to(t,e,n),Qe(t,n))}function YS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),my(t,n)}function QS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),my(t,n)}var gy;gy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,US(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ie&&e.flags&1048576&&v_(e,Sa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xo(t,e),t=e.pendingProps;var i=mi(e,De.current);oi(e,n),i=Vd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,wa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(e),i.updater=cl,e.stateNode=i,i._reactInternals=e,vc(e,r,t,n),e=Sc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Od(e),Ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JS(r),t=_t(r,t),i){case 0:e=Ec(null,e,r,t,n);break e;case 1:e=ap(null,e,r,t,n);break e;case 11:e=sp(null,e,r,t,n);break e;case 14:e=op(null,e,r,_t(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Ec(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),ap(t,e,r,i,n);case 3:e:{if(Z_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C_(t,e),Ia(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(k(423)),e),e=lp(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(k(424)),e),e=lp(t,e,r,n,i);break e}else for(tt=On(e.stateNode.containerInfo.firstChild),nt=e,ie=!0,vt=null,n=R_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){e=sn(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return A_(e),t===null&&gc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dc(r,i)?o=null:s!==null&&dc(r,s)&&(e.flags|=32),J_(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&gc(e),null;case 13:return ey(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_i(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),sp(t,e,r,i,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Ca,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!Ke.current){e=sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Zt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oi(e,n),i=dt(i),r=r(i),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,i=_t(r,e.pendingProps),i=_t(r.type,i),op(t,e,r,i,n);case 15:return Q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Xo(t,e),e.tag=1,Ye(r)?(t=!0,wa(e)):t=!1,oi(e,n),I_(e,r,i),vc(e,r,i,n),Sc(null,e,r,!0,t,n);case 19:return ty(t,e,n);case 22:return X_(t,e,n)}throw Error(k(156,e.tag))};function _y(t,e){return Hg(t,e)}function XS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new XS(t,e,n,r)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JS(t){if(typeof t=="function")return nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ed)return 11;if(t===Sd)return 14}return 2}function Un(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ea(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wr:return pr(n.children,i,s,e);case wd:o=8,i|=8;break;case Hu:return t=lt(12,n,e,i|2),t.elementType=Hu,t.lanes=s,t;case ju:return t=lt(13,n,e,i),t.elementType=ju,t.lanes=s,t;case Vu:return t=lt(19,n,e,i),t.elementType=Vu,t.lanes=s,t;case Tg:return pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:o=10;break e;case Ig:o=9;break e;case Ed:o=11;break e;case Sd:o=14;break e;case vn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rh(t,e,n,r,i,s,o,a,l){return t=new ZS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function e1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yy(t){if(!t)return jn;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ye(n))return __(t,n,e)}return e}function vy(t,e,n,r,i,s,o,a,l){return t=rh(n,r,!0,t,i,s,o,a,l),t.context=yy(null),n=t.current,r=Be(),i=Mn(n),s=Zt(r,i),s.callback=e??null,Dn(n,s,i),t.current.lanes=i,to(t,i,r),Qe(t,r),t}function ml(t,e,n,r){var i=e.current,s=Be(),o=Mn(i);return n=yy(n),e.context===null?e.context=n:e.pendingContext=n,e=Zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dn(i,e,o),t!==null&&(Ct(t,i,o,s),Ko(t,i,o)),o}function Oa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ih(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function t1(){return null}var wy=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}gl.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));ml(t,e,null,null)};gl.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){ml(null,t,null,null)}),e[nn]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&Jg(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function n1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oa(o);s.call(u)}}var o=vy(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[nn]=o.current,Us(t.nodeType===8?t.parentNode:t),Cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Oa(l);a.call(u)}}var l=rh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[nn]=l.current,Us(t.nodeType===8?t.parentNode:t),Cr(function(){ml(e,l,n,r)}),l}function yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Oa(o);a.call(l)}}ml(e,o,t,i)}else o=n1(n,e,t,i,r);return Oa(o)}Kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(Id(e,n|1),Qe(e,de()),!(W&6)&&(wi=de()+500,Yn()))}break;case 13:Cr(function(){var r=rn(t,1);if(r!==null){var i=Be();Ct(r,t,1,i)}}),ih(t,1)}};Td=function(t){if(t.tag===13){var e=rn(t,134217728);if(e!==null){var n=Be();Ct(e,t,134217728,n)}ih(t,134217728)}};Yg=function(t){if(t.tag===13){var e=Mn(t),n=rn(t,e);if(n!==null){var r=Be();Ct(n,t,e,r)}ih(t,e)}};Qg=function(){return V};Xg=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};tc=function(t,e,n){switch(e){case"input":if(Ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(k(90));Ag(r),Ku(r,i)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&ni(t,!!n.multiple,e,!1)}};Ug=Zd;Fg=Cr;var r1={usingClientEntryPoint:!1,Events:[ro,Gr,ll,Lg,Mg,Zd]},Zi={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i1={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{il=Do.inject(i1),Lt=Do}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(e))throw Error(k(200));return e1(t,e,null,n)};it.createRoot=function(t,e){if(!oh(t))throw Error(k(299));var n=!1,r="",i=wy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rh(t,1,!1,null,null,n,!1,r,i),t[nn]=e.current,Us(t.nodeType===8?t.parentNode:t),new sh(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return Cr(t)};it.hydrate=function(t,e,n){if(!_l(e))throw Error(k(200));return yl(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!oh(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=wy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vy(e,null,t,1,n??null,i,!1,s,o),t[nn]=e.current,Us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gl(e)};it.render=function(t,e,n){if(!_l(e))throw Error(k(200));return yl(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!_l(t))throw Error(k(40));return t._reactRootContainer?(Cr(function(){yl(null,null,t,!1,function(){t._reactRootContainer=null,t[nn]=null})}),!0):!1};it.unstable_batchedUpdates=Zd;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_l(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return yl(t,e,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=it})(tE);var wp=Bu;zu.createRoot=wp.createRoot,zu.hydrateRoot=wp.hydrateRoot;/**
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
 */const Ey={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+Ey.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new o1;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cy=function(t){const e=Sy(t);return ah.encodeByteArray(e,!0)},Da=function(t){return Cy(t).replace(/\./g,"")},La=function(t){try{return ah.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a1(t){return ky(void 0,t)}function ky(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!l1(n)||(t[n]=ky(t[n],e[n]));return t}function l1(t){return t!=="__proto__"}/**
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
 */function u1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const c1=()=>u1().__FIREBASE_DEFAULTS__,d1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},lh=()=>{try{return c1()||d1()||h1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iy=t=>{var e,n;return(n=(e=lh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ty=t=>{const e=Iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ry=()=>{var t;return(t=lh())===null||t===void 0?void 0:t.config},Ay=t=>{var e;return(e=lh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ny(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Da(JSON.stringify(n)),Da(JSON.stringify(o)),a].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function f1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function p1(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Py(){return Ey.NODE_ADMIN===!0}function m1(){try{return typeof indexedDB=="object"}catch{return!1}}function g1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const _1="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_1,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function y1(t,e){return t.replace(v1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v1=/\{\$([^}]+)}/g;/**
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
 */function Gs(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const by=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Gs(La(s[0])||""),n=Gs(La(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},w1=function(t){const e=by(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},E1=function(t){const e=by(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ma(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ep(s)&&Ep(o)){if(!Ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ep(t){return t!==null&&typeof t=="object"}/**
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
 */function Mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class S1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function C1(t,e){const n=new k1(t,e);return n.subscribe.bind(n)}class k1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");I1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_u),i.error===void 0&&(i.error=_u),i.complete===void 0&&(i.complete=_u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _u(){}function ch(t,e){return`${t} failed: ${e} argument `}/**
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
 */const T1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function he(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class R1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N1(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A1(t){return t===sr?void 0:t}function N1(t){return t.instantiationMode==="EAGER"}/**
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
 */class x1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const P1={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},b1=G.INFO,O1={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},D1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=O1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const L1=(t,e)=>e.some(n=>t instanceof n);let Sp,Cp;function M1(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U1(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,Lc=new WeakMap,Dy=new WeakMap,yu=new WeakMap,hh=new WeakMap;function F1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),hh.set(e,t),e}function z1(t){if(Lc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lc.set(t,e)}let Mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B1(t){Mc=t(Mc)}function $1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vu(this),e,...n);return Dy.set(r,e.sort?e.sort():[e]),Fn(r)}:U1().includes(t)?function(...e){return t.apply(vu(this),e),Fn(Oy.get(this))}:function(...e){return Fn(t.apply(vu(this),e))}}function W1(t){return typeof t=="function"?$1(t):(t instanceof IDBTransaction&&z1(t),L1(t,M1())?new Proxy(t,Mc):t)}function Fn(t){if(t instanceof IDBRequest)return F1(t);if(yu.has(t))return yu.get(t);const e=W1(t);return e!==t&&(yu.set(t,e),hh.set(e,t)),e}const vu=t=>hh.get(t);function H1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const j1=["get","getKey","getAll","getAllKeys","count"],V1=["put","add","delete","clear"],wu=new Map;function kp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wu.get(e))return wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=V1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wu.set(e,s),s}B1(t=>({...t,get:(e,n,r)=>kp(e,n)||t.get(e,n,r),has:(e,n)=>!!kp(e,n)||t.has(e,n)}));/**
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
 */class G1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(q1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function q1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",Ip="0.10.1";/**
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
 */const kr=new dh("@firebase/app"),K1="@firebase/app-compat",Y1="@firebase/analytics-compat",Q1="@firebase/analytics",X1="@firebase/app-check-compat",J1="@firebase/app-check",Z1="@firebase/auth",eC="@firebase/auth-compat",tC="@firebase/database",nC="@firebase/database-compat",rC="@firebase/functions",iC="@firebase/functions-compat",sC="@firebase/installations",oC="@firebase/installations-compat",aC="@firebase/messaging",lC="@firebase/messaging-compat",uC="@firebase/performance",cC="@firebase/performance-compat",dC="@firebase/remote-config",hC="@firebase/remote-config-compat",fC="@firebase/storage",pC="@firebase/storage-compat",mC="@firebase/firestore",gC="@firebase/firestore-compat",_C="firebase",yC="10.11.0";/**
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
 */const Fc="[DEFAULT]",vC={[Uc]:"fire-core",[K1]:"fire-core-compat",[Q1]:"fire-analytics",[Y1]:"fire-analytics-compat",[J1]:"fire-app-check",[X1]:"fire-app-check-compat",[Z1]:"fire-auth",[eC]:"fire-auth-compat",[tC]:"fire-rtdb",[nC]:"fire-rtdb-compat",[rC]:"fire-fn",[iC]:"fire-fn-compat",[sC]:"fire-iid",[oC]:"fire-iid-compat",[aC]:"fire-fcm",[lC]:"fire-fcm-compat",[uC]:"fire-perf",[cC]:"fire-perf-compat",[dC]:"fire-rc",[hC]:"fire-rc-compat",[fC]:"fire-gcs",[pC]:"fire-gcs-compat",[mC]:"fire-fst",[gC]:"fire-fst-compat","fire-js":"fire-js",[_C]:"fire-js-all"};/**
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
 */const Fa=new Map,wC=new Map,zc=new Map;function Tp(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(zc.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of Fa.values())Tp(n,t);for(const n of wC.values())Tp(n,t);return!0}function El(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t.settings!==void 0}/**
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
 */const EC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},zn=new so("app","Firebase",EC);/**
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
 */class SC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=yC;function Ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zn.create("bad-app-name",{appName:String(i)});if(n||(n=Ry()),!n)throw zn.create("no-options");const s=Fa.get(i);if(s){if(Ua(n,s.options)&&Ua(r,s.config))return s;throw zn.create("duplicate-app",{appName:i})}const o=new x1(i);for(const l of zc.values())o.addComponent(l);const a=new SC(n,r,o);return Fa.set(i,a),a}function fh(t=Fc){const e=Fa.get(t);if(!e&&t===Fc&&Ry())return Ly();if(!e)throw zn.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let i=(r=vC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(a.join(" "));return}Ir(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CC="firebase-heartbeat-database",kC=1,qs="firebase-heartbeat-store";let Eu=null;function My(){return Eu||(Eu=H1(CC,kC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qs)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function IC(t){try{const n=(await My()).transaction(qs),r=await n.objectStore(qs).get(Uy(t));return await n.done,r}catch(e){if(e instanceof cn)kr.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function Rp(t,e){try{const r=(await My()).transaction(qs,"readwrite");await r.objectStore(qs).put(e,Uy(t)),await r.done}catch(n){if(n instanceof cn)kr.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function Uy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TC=1024,RC=30*24*60*60*1e3;class AC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ap();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=RC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ap(),{heartbeatsToSend:r,unsentEntries:i}=NC(this._heartbeatsCache.heartbeats),s=Da(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ap(){return new Date().toISOString().substring(0,10)}function NC(t,e=TC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Np(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m1()?g1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Np(t){return Da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PC(t){Ir(new Vn("platform-logger",e=>new G1(e),"PRIVATE")),Ir(new Vn("heartbeat",e=>new AC(e),"PRIVATE")),Ut(Uc,Ip,t),Ut(Uc,Ip,"esm2017"),Ut("fire-js","")}PC("");/**
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
 */const Fy="firebasestorage.googleapis.com",zy="storageBucket",bC=2*60*1e3,OC=10*60*1e3,DC=1e3;/**
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
 */class ue extends cn{constructor(e,n,r=0){super(Su(e),`Firebase Storage: ${n} (${Su(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Su(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ne||(ne={}));function Su(t){return"storage/"+t}function ph(){const t="An unknown error occurred, please check the error payload for server response.";return new ue(ne.UNKNOWN,t)}function LC(t){return new ue(ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function MC(t){return new ue(ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ue(ne.UNAUTHENTICATED,t)}function FC(){return new ue(ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zC(t){return new ue(ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function By(){return new ue(ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $y(){return new ue(ne.CANCELED,"User canceled the upload/download.")}function BC(t){return new ue(ne.INVALID_URL,"Invalid URL '"+t+"'.")}function $C(t){return new ue(ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WC(){return new ue(ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zy+"' property when initializing the app?")}function Wy(){return new ue(ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HC(){return new ue(ne.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function jC(){return new ue(ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VC(t){return new ue(ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bc(t){return new ue(ne.INVALID_ARGUMENT,t)}function Hy(){return new ue(ne.APP_DELETED,"The Firebase app was deleted.")}function GC(t){return new ue(ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Es(t,e){return new ue(ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function es(t){throw new ue(ne.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ze.makeFromUrl(e,n)}catch{return new ze(e,"")}if(r.path==="")return r;throw $C(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},w=n===Fy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${I}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<p.length;y++){const C=p[y],S=C.regex.exec(e);if(S){const E=S[C.indices.bucket];let A=S[C.indices.path];A||(A=""),r=new ze(E,A),C.postModify(r);break}}if(r==null)throw BC(e);return r}}class qC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KC(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function d(I){i=setTimeout(()=>{i=null,t(g,l())},I)}function h(){s&&clearTimeout(s)}function g(I,...m){if(u){h();return}if(I){h(),c.call(null,I,...m);return}if(l()||o){h(),c.call(null,I,...m);return}r<64&&(r*=2);let p;a===1?(a=2,p=0):p=(r+Math.random())*1e3,d(p)}let _=!1;function w(I){_||(_=!0,h(),!u&&(i!==null?(I||(a=2),clearTimeout(i),d(0)):I||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function YC(t){t(!1)}/**
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
 */function QC(t){return t!==void 0}function XC(t){return typeof t=="function"}function JC(t){return typeof t=="object"&&!Array.isArray(t)}function Sl(t){return typeof t=="string"||t instanceof String}function xp(t){return mh()&&t instanceof Blob}function mh(){return typeof Blob<"u"}function $c(t,e,n,r){if(r<e)throw Bc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Qn(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(mr||(mr={}));/**
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
 */function Vy(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZC{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===mr.NO_ERROR,l=s.getStatus();if(!a||Vy(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===mr.ABORT;r(!1,new Lo(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Lo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QC(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ph();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Hy():$y();o(l)}else{const l=By();o(l)}};this.canceled_?n(!1,new Lo(!1,null,!0)):this.backoffId_=KC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ek(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ik(t,e,n,r,i,s,o=!0){const a=jy(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return nk(u,e),ek(u,n),tk(u,s),rk(u,r),new ZC(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function sk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ok(...t){const e=sk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(mh())return new Blob(t);throw new ue(ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ak(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lk(t){if(typeof atob>"u")throw VC("base-64");return atob(t)}/**
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
 */const Ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cu{constructor(e,n){this.data=e,this.contentType=n||null}}function uk(t,e){switch(t){case Ot.RAW:return new Cu(Gy(e));case Ot.BASE64:case Ot.BASE64URL:return new Cu(qy(t,e));case Ot.DATA_URL:return new Cu(dk(e),hk(e))}throw ph()}function Gy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ck(t){let e;try{e=decodeURIComponent(t)}catch{throw Es(Ot.DATA_URL,"Malformed data URL.")}return Gy(e)}function qy(t,e){switch(t){case Ot.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Es(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ot.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Es(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lk(e)}catch(i){throw i.message.includes("polyfill")?i:Es(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Es(Ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dk(t){const e=new Ky(t);return e.base64?qy(Ot.BASE64,e.rest):ck(e.rest)}function hk(t){return new Ky(t).contentType}function fk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cn{constructor(e,n){let r=0,i="";xp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(xp(this.data_)){const r=this.data_,i=ak(r,e,n);return i===null?null:new Cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(r,!0)}}static getBlob(...e){if(mh()){const n=e.map(r=>r instanceof Cn?r.data_:r);return new Cn(ok.apply(null,n))}else{const n=e.map(o=>Sl(o)?uk(Ot.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function gh(t){let e;try{e=JSON.parse(t)}catch{return null}return JC(e)?e:null}/**
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
 */function pk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Yy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gk(t,e){return e}class Me{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gk}}let Mo=null;function _k(t){return!Sl(t)||t.length<2?t:Yy(t)}function Cl(){if(Mo)return Mo;const t=[];t.push(new Me("bucket")),t.push(new Me("generation")),t.push(new Me("metageneration")),t.push(new Me("name","fullPath",!0));function e(s,o){return _k(o)}const n=new Me("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Me("size");return i.xform=r,t.push(i),t.push(new Me("timeCreated")),t.push(new Me("updated")),t.push(new Me("md5Hash",null,!0)),t.push(new Me("cacheControl",null,!0)),t.push(new Me("contentDisposition",null,!0)),t.push(new Me("contentEncoding",null,!0)),t.push(new Me("contentLanguage",null,!0)),t.push(new Me("contentType",null,!0)),t.push(new Me("metadata","customMetadata",!0)),Mo=t,Mo}function yk(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vk(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yk(r,t),r}function Qy(t,e,n){const r=gh(e);return r===null?null:vk(t,r,n)}function wk(t,e,n,r){const i=gh(e);if(i===null||!Sl(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),g=Qn(h,n,r),_=jy({alt:"media",token:u});return g+_})[0]}function _h(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const Pp="prefixes",bp="items";function Ek(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Pp])for(const i of n[Pp]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ze(e,s));r.prefixes.push(o)}if(n[bp])for(const i of n[bp]){const s=t._makeStorageReference(new ze(e,i.name));r.items.push(s)}return r}function Sk(t,e,n){const r=gh(n);return r===null?null:Ek(t,e,r)}class hn{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ft(t){if(!t)throw ph()}function kl(t,e){function n(r,i){const s=Qy(t,i,e);return Ft(s!==null),s}return n}function Ck(t,e){function n(r,i){const s=Sk(t,e,i);return Ft(s!==null),s}return n}function kk(t,e){function n(r,i){const s=Qy(t,i,e);return Ft(s!==null),wk(s,i,t.host,t._protocol)}return n}function Ui(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=FC():i=UC():n.getStatus()===402?i=MC(t.bucket):n.getStatus()===403?i=zC(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Il(t){const e=Ui(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=LC(t.path)),s.serverResponse=i.serverResponse,s}return n}function Xy(t,e,n){const r=e.fullServerUrl(),i=Qn(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hn(i,s,kl(t,n),o);return a.errorHandler=Il(e),a}function Ik(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Qn(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new hn(a,l,Ck(t,e.bucket),u);return c.urlParams=s,c.errorHandler=Ui(e),c}function Tk(t,e,n){const r=e.fullServerUrl(),i=Qn(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new hn(i,s,kk(t,n),o);return a.errorHandler=Il(e),a}function Rk(t,e,n,r){const i=e.fullServerUrl(),s=Qn(i,t.host,t._protocol),o="PATCH",a=_h(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,c=new hn(s,o,kl(t,r),u);return c.headers=l,c.body=a,c.errorHandler=Il(e),c}function Ak(t,e){const n=e.fullServerUrl(),r=Qn(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new hn(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Il(e),a}function Nk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Jy(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Nk(null,e)),r}function xk(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let p="";for(let y=0;y<2;y++)p=p+Math.random().toString().slice(2);return p}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Jy(e,r,i),c=_h(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Cn.getBlob(d,r,h);if(g===null)throw Wy();const _={name:u.fullPath},w=Qn(s,t.host,t._protocol),I="POST",m=t.maxUploadRetryTime,f=new hn(w,I,kl(t,n),m);return f.urlParams=_,f.headers=o,f.body=g.uploadData(),f.errorHandler=Ui(e),f}class za{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function yh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Ft(!1)}return Ft(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Pk(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Jy(e,r,i),a={name:o.fullPath},l=Qn(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=_h(o,n),h=t.maxUploadRetryTime;function g(w){yh(w);let I;try{I=w.getResponseHeader("X-Goog-Upload-URL")}catch{Ft(!1)}return Ft(Sl(I)),I}const _=new hn(l,u,g,h);return _.urlParams=a,_.headers=c,_.body=d,_.errorHandler=Ui(e),_}function bk(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=yh(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ft(!1)}d||Ft(!1);const h=Number(d);return Ft(!isNaN(h)),new za(h,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new hn(n,o,s,a);return l.headers=i,l.errorHandler=Ui(e),l}const Op=256*1024;function Ok(t,e,n,r,i,s,o,a){const l=new za(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw HC();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,h=d+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(d,h);if(w===null)throw Wy();function I(y,C){const S=yh(y,["active","final"]),E=l.current+c,A=r.size();let B;return S==="final"?B=kl(e,s)(y,C):B=null,new za(E,A,S==="final",B)}const m="POST",f=e.maxUploadRetryTime,p=new hn(n,m,I,f);return p.headers=_,p.body=w.uploadData(),p.progressCallback=a||null,p.errorHandler=Ui(t),p}const He={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ku(t){switch(t){case"running":case"pausing":case"canceling":return He.RUNNING;case"paused":return He.PAUSED;case"success":return He.SUCCESS;case"canceled":return He.CANCELED;case"error":return He.ERROR;default:return He.ERROR}}/**
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
 */class Dk{constructor(e,n,r){if(XC(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Fr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Lk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw es("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw es("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw es("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw es("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw es("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mk extends Lk{initXhr(){this.xhr_.responseType="text"}}function bt(){return new Mk}/**
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
 */class Uk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Cl(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ne.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Vy(i.status,[]))if(s)i=By();else{this.sleepTime=Math.max(this.sleepTime*2,DC),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ne.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Pk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bt,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=bk(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,bt,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Op*this._chunkMultiplier,n=new za(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=Ok(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,bt,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Op*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Xy(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,bt,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=xk(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bt,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=$y(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ku(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new Dk(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ku(this._state)){case He.SUCCESS:Fr(this._resolve.bind(null,this.snapshot))();break;case He.CANCELED:case He.ERROR:const n=this._reject;Fr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ku(this._state)){case He.RUNNING:case He.PAUSED:e.next&&Fr(e.next.bind(e,this.snapshot))();break;case He.SUCCESS:e.complete&&Fr(e.complete.bind(e))();break;case He.CANCELED:case He.ERROR:e.error&&Fr(e.error.bind(e,this._error))();break;default:e.error&&Fr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Tr{constructor(e,n){this._service=e,n instanceof ze?this._location=n:this._location=ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tr(e,n)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yy(this._location.path)}get storage(){return this._service}get parent(){const e=pk(this._location.path);if(e===null)return null;const n=new ze(this._location.bucket,e);return new Tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GC(e)}}function Fk(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Uk(t,new Cn(e),n)}function zk(t){const e={prefixes:[],items:[]};return Zy(t,e).then(()=>e)}async function Zy(t,e,n){const i=await Bk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Zy(t,e,i.nextPageToken)}function Bk(t,e){e!=null&&typeof e.maxResults=="number"&&$c("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Ik(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,bt)}function $k(t){t._throwIfRoot("getMetadata");const e=Xy(t.storage,t._location,Cl());return t.storage.makeRequestWithTokens(e,bt)}function Wk(t,e){t._throwIfRoot("updateMetadata");const n=Rk(t.storage,t._location,e,Cl());return t.storage.makeRequestWithTokens(n,bt)}function Hk(t){t._throwIfRoot("getDownloadURL");const e=Tk(t.storage,t._location,Cl());return t.storage.makeRequestWithTokens(e,bt).then(n=>{if(n===null)throw jC();return n})}function jk(t){t._throwIfRoot("deleteObject");const e=Ak(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bt)}function Vk(t,e){const n=mk(t._location.path,e),r=new ze(t._location.bucket,n);return new Tr(t.storage,r)}/**
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
 */function Gk(t){return/^[A-Za-z]+:\/\//.test(t)}function qk(t,e){return new Tr(t,e)}function ev(t,e){if(t instanceof vh){const n=t;if(n._bucket==null)throw WC();const r=new Tr(n,n._bucket);return e!=null?ev(r,e):r}else return e!==void 0?Vk(t,e):t}function Kk(t,e){if(e&&Gk(e)){if(t instanceof vh)return qk(t,e);throw Bc("To use ref(service, url), the first argument must be a Storage instance.")}else return ev(t,e)}function Dp(t,e){const n=e==null?void 0:e[zy];return n==null?null:ze.makeFromBucketSpec(n,t)}function Yk(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Ny(i,t.app.options.projectId))}class vh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Fy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bC,this._maxUploadRetryTime=OC,this._requests=new Set,i!=null?this._bucket=ze.makeFromBucketSpec(i,this._host):this._bucket=Dp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=Dp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$c("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$c("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new qC(Hy());{const o=ik(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Lp="@firebase/storage",Mp="0.12.4";/**
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
 */const tv="storage";function Qk(t,e,n){return t=he(t),Fk(t,e,n)}function Xk(t){return t=he(t),$k(t)}function nv(t,e){return t=he(t),Wk(t,e)}function Jk(t){return t=he(t),zk(t)}function rv(t){return t=he(t),Hk(t)}function Zk(t){return t=he(t),jk(t)}function Si(t,e){return t=he(t),Kk(t,e)}function eI(t=fh(),e){t=he(t);const r=El(t,tv).getImmediate({identifier:e}),i=Ty("storage");return i&&tI(r,...i),r}function tI(t,e,n,r={}){Yk(t,e,n,r)}function nI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vh(n,r,i,e,Or)}function rI(){Ir(new Vn(tv,nI,"PUBLIC").setMultipleInstances(!0)),Ut(Lp,Mp,""),Ut(Lp,Mp,"esm2017")}rI();var iI="firebase",sI="10.11.0";/**
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
 */Ut(iI,sI,"app");function wh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=iv,sv=new so("auth","Firebase",iv());/**
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
 */const Ba=new dh("@firebase/auth");function aI(t,...e){Ba.logLevel<=G.WARN&&Ba.warn(`Auth (${Or}): ${t}`,...e)}function ta(t,...e){Ba.logLevel<=G.ERROR&&Ba.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Rt(t,...e){throw Eh(t,...e)}function zt(t,...e){return Eh(t,...e)}function ov(t,e,n){const r=Object.assign(Object.assign({},oI()),{[e]:n});return new so("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return ov(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sv.create(t,...e)}function O(t,e,...n){if(!t)throw Eh(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ta(e),new Error(e)}function on(t,e){t||Yt(e)}/**
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
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lI(){return Up()==="http:"||Up()==="https:"}function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lI()||f1()||"connection"in navigator)?navigator.onLine:!0}function cI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=uh()||xy()}get(){return uI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sh(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class av{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hI=new oo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return lv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Mi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),av.fetch()(uv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dI),e);try{const i=new pI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ov(t,c,u);Rt(t,c)}}catch(i){if(i instanceof cn)throw i;Rt(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await Xn(t,e,n,r,i);return"mfaPendingCredential"in s&&Rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sh(t.config,i):`${t.config.apiScheme}://${i}`}function fI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),hI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}function Fp(t){return t!==void 0&&t.enterprise!==void 0}class mI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gI(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function _I(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function cv(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ss(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yI(t,e=!1){const n=he(t),r=await n.getIdToken(e),i=Ch(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ss(Iu(i.auth_time)),issuedAtTime:Ss(Iu(i.iat)),expirationTime:Ss(Iu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Iu(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=La(n);return i?JSON.parse(i):(ta("Failed to decode base64 JWT payload"),null)}catch(i){return ta("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zp(t){const e=Ch(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&vI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ks(t,cv(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dv(s.providerUserInfo):[],a=SI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hc(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function EI(t){const e=he(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dv(t){return t.map(e=>{var{providerId:n}=e,r=wh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CI(t,e){const n=await lv(t,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",av.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=zp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new li;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function _n(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yI(this,e)}reload(){return EI(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Ks(this,_I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:y,isAnonymous:C,providerData:S,stsTokenManager:E}=n;O(p&&E,e,"internal-error");const A=li.fromJSON(this.name,E);O(typeof p=="string",e,"internal-error"),_n(d,e.name),_n(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),_n(g,e.name),_n(_,e.name),_n(w,e.name),_n(I,e.name),_n(m,e.name),_n(f,e.name);const B=new Qt({uid:p,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:A,createdAt:m,lastLoginAt:f});return S&&Array.isArray(S)&&(B.providerData=S.map(M=>Object.assign({},M))),I&&(B._redirectEventId=I),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new li;i.updateFromServerResponse(n);const s=new Qt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new li;a.updateFromIdToken(r);const l=new Qt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const Bp=new Map;function Xt(t){on(t instanceof Function,"Expected a class definition");let e=Bp.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bp.set(t,e),e)}/**
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
 */class hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hv.type="NONE";const $p=hv;/**
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
 */function na(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=na(this.userKey,i.apiKey,s),this.fullPersistenceKey=na("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ui(Xt($p),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt($p);const o=na(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Qt._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ui(s,e,r))}}/**
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
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_v(e))return"Blackberry";if(yv(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||pv(e))&&!e.includes("edge/"))return"Chrome";if(gv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fv(t=Le()){return/firefox\//i.test(t)}function kh(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pv(t=Le()){return/crios\//i.test(t)}function mv(t=Le()){return/iemobile/i.test(t)}function gv(t=Le()){return/android/i.test(t)}function _v(t=Le()){return/blackberry/i.test(t)}function yv(t=Le()){return/webos/i.test(t)}function Rl(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function II(t=Le()){var e;return Rl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TI(){return p1()&&document.documentMode===10}function vv(t=Le()){return Rl(t)||gv(t)||yv(t)||_v(t)||/windows phone/i.test(t)||mv(t)}function RI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wv(t,e=[]){let n;switch(t){case"Browser":n=Wp(Le());break;case"Worker":n=`${Wp(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class AI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function NI(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const xI=6;class PI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class bI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cv(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Bn(this));const n=e?he(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NI(this),n=new PI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return he(t)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=C1(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OI(t){Al=t}function Ev(t){return Al.loadJS(t)}function DI(){return Al.recaptchaEnterpriseScript}function LI(){return Al.gapiScript}function MI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UI="recaptcha-enterprise",FI="NO_RECAPTCHA";class zI{constructor(e){this.type=UI,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Fp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(FI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Fp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DI();l.length!==0&&(l+=a),Ev(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function jp(t,e,n,r=!1){const i=new zI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function BI(t,e){const n=El(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ua(s,e??{}))return i;Rt(i,"already-initialized")}return n.initialize({options:e})}function $I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WI(t,e,n){const r=Fi(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Sv(e),{host:o,port:a}=HI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jI()}function Sv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HI(t){const e=Sv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gp(o)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function VI(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GI(t,e){return Tl(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function qI(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function KI(t,e){return Tl(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class Ys extends Ih{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ys(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ys(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,n,"signInWithPassword",GI);case"emailLink":return qI(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,r,"signUpPassword",VI);case"emailLink":return KI(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ci(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const YI="http://localhost";class Rr extends Ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:YI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mi(n)}return e}}/**
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
 */function QI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XI(t){const e=us(cs(t)).link,n=e?us(cs(e)).deep_link_id:null,r=us(cs(t)).deep_link_id;return(r?us(cs(r)).link:null)||r||n||e||t}class Th{constructor(e){var n,r,i,s,o,a;const l=us(cs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=QI((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XI(e);try{return new Th(n)}catch{return null}}}/**
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
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return Ys._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Th.parseLink(n);return O(r,"argument-error"),Ys._fromEmailAndCode(e,r.code,r.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ao extends Cv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends ao{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class In extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Tn extends ao{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class Rn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class Ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qt._fromIdTokenResponse(e,r,i),o=qp(r);return new Ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qp(r);return new Ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wa extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wa(e,n,r,i)}}function kv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,s,e,r):s})}async function JI(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ci._forOperation(t,"link",r)}/**
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
 */async function ZI(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(Bn(r));const i="reauthenticate";try{const s=await Ks(t,kv(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Ch(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
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
 */async function Iv(t,e,n=!1){if(Kt(t.app))return Promise.reject(Bn(t));const r="signIn",i=await kv(t,r,e),s=await Ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function eT(t,e){return Iv(Fi(t),e)}/**
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
 */async function tT(t){const e=Fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nT(t,e,n){return Kt(t.app)?Promise.reject(Bn(t)):eT(he(t),zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tT(t),r})}function rT(t,e,n,r){return he(t).onIdTokenChanged(e,n,r)}function iT(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function sT(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}const Ha="__sak";/**
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
 */class Tv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function oT(){const t=Le();return kh(t)||Rl(t)}const aT=1e3,lT=10;class Rv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oT()&&RI(),this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rv.type="LOCAL";const uT=Rv;/**
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
 */class Av extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Av.type="SESSION";const Nv=Av;/**
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
 */function cT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nl.receivers=[];/**
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
 */function Rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function hT(t){Bt().location.href=t}/**
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
 */function xv(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function fT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mT(){return xv()?self:null}/**
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
 */const Pv="firebaseLocalStorageDb",gT=1,ja="firebaseLocalStorage",bv="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function _T(){const t=indexedDB.deleteDatabase(Pv);return new lo(t).toPromise()}function jc(){const t=indexedDB.open(Pv,gT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:bv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await _T(),e(await jc()))})})}async function Kp(t,e,n){const r=xl(t,!0).put({[bv]:e,value:n});return new lo(r).toPromise()}async function yT(t,e){const n=xl(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function Yp(t,e){const n=xl(t,!0).delete(e);return new lo(n).toPromise()}const vT=800,wT=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(mT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await Kp(e,Ha,"1"),await Yp(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const ET=Ov;new oo(3e4,6e4);/**
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
 */function ST(t,e){return e?Xt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ah extends Ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CT(t){return Iv(t.auth,new Ah(t),t.bypassAuthState)}function kT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),ZI(n,new Ah(t),t.bypassAuthState)}async function IT(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),JI(n,new Ah(t),t.bypassAuthState)}/**
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
 */class Dv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return IT;case"reauthViaPopup":case"reauthViaRedirect":return kT;default:Rt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TT=new oo(2e3,1e4);class Zr extends Dv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const RT="pendingRedirect",ra=new Map;class AT extends Dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ra.get(this.auth._key());if(!e){try{const r=await NT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ra.set(this.auth._key(),e)}return this.bypassAuthState||ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NT(t,e){const n=bT(e),r=PT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xT(t,e){ra.set(t._key(),e)}function PT(t){return Xt(t._redirectPersistence)}function bT(t){return na(RT,t.config.apiKey,t.name)}async function OT(t,e,n=!1){if(Kt(t.app))return Promise.reject(Bn(t));const r=Fi(t),i=ST(r,e),o=await new AT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DT=10*60*1e3;class LT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(t);default:return!1}}/**
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
 */async function UT(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const FT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zT=/^https?/;async function BT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UT(t);for(const n of e)try{if($T(n))return}catch{}Rt(t,"unauthorized-domain")}function $T(t){const e=Wc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zT.test(n))return!1;if(FT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WT=new oo(3e4,6e4);function Xp(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HT(t){return new Promise((e,n)=>{var r,i,s;function o(){Xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xp(),n(zt(t,"network-request-failed"))},timeout:WT.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)o();else{const a=MI("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},Ev(`${LI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ia=null,e})}let ia=null;function jT(t){return ia=ia||HT(t),ia}/**
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
 */const VT=new oo(5e3,15e3),GT="__/auth/iframe",qT="emulator/auth/iframe",KT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QT(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sh(e,qT):`https://${t.config.authDomain}/${GT}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=YT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mi(r).slice(1)}`}async function XT(t){const e=await jT(t),n=Bt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:QT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Bt().setTimeout(()=>{s(o)},VT.get());function l(){Bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const JT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZT=500,eR=600,tR="_blank",nR="http://localhost";class Jp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rR(t,e,n,r=ZT,i=eR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(a=pv(u)?tR:n),fv(u)&&(e=e||nR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(II(u)&&a!=="_self")return iR(e||"",a),new Jp(null);const d=window.open(e||"",a,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Jp(d)}function iR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function Zp(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof Cv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ao){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${aR}=${encodeURIComponent(l)}`:"";return`${lR(t)}?${Mi(a).slice(1)}${u}`}function lR({config:t}){return t.emulator?Sh(t,oR):`https://${t.authDomain}/${sR}`}/**
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
 */const Tu="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=OT,this._overrideRedirectResult=xT}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zp(e,n,r,Wc(),i);return rR(e,o,Rh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zp(e,n,r,Wc(),i);return hT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XT(e),r=new LT(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tu,{type:Tu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tu];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||kh()||Rl()}}const cR=uR;var em="@firebase/auth",tm="1.7.1";/**
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
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fR(t){Ir(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wv(t)},u=new bI(r,i,s,l);return $I(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new Vn("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(em,tm,hR(t)),Ut(em,tm,"esm2017")}/**
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
 */const pR=5*60,mR=Ay("authIdTokenMaxAge")||pR;let nm=null;const gR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mR)return;const i=n==null?void 0:n.token;nm!==i&&(nm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _R(t=fh()){const e=El(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(t,{popupRedirectResolver:cR,persistence:[ET,uT,Nv]}),r=Ay("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gR(s.toString());iT(n,o,()=>o(n.currentUser)),rT(n,a=>o(a))}}const i=Iy("auth");return i&&WI(n,`http://${i}`),n}function yR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fR("Browser");const vR={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",databaseURL:"https://awcy-12b0e-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},Nh=Ly(vR),xh=_R(Nh),wR=async(t,e)=>{try{return await nT(xh,t,e)}catch{return{error:!0,type:"Something went wrong"}}},ki=eI(Nh),ER=async(t,e)=>{const n=Si(ki,e.name);return await Qk(n,t,{contentType:t.type,cacheControl:"public,max-age=3600",customMetadata:e}).then(async s=>{const o=await rv(s.ref),a=s.metadata;return{downloadUrl:o,metadata:a}})},SR=async()=>{const e=(await Jk(Si(ki))).items.map(async r=>{const i=Si(ki,r.fullPath),s=await rv(i),o=await Xk(i);return{downloadUrl:s,metadata:o}});return await Promise.all(e)},RO=async t=>{const e=Si(ki,t);await Zk(e)},AO=async(t,e)=>{const n=Si(ki,t);await nv(n,{customMetadata:{caption:e}})},NO=async(t,e)=>{const n=Si(ki,t);await nv(n,{customMetadata:{pinned:e?"true":"false",pinnedAt:`${Date.now()}`}})},CR="modulepreload",kR=function(t,e){return new URL(t,e).href},rm={},IR=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=kR(s,r),s in rm)return;rm[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":CR,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Mv=P.createContext(null),TR=({children:t})=>{const[e,n]=P.useState(null);return P.useEffect(()=>{sT(xh,r=>{n(r)})},[]),v(Mv.Provider,{value:e,children:t})};var Ge=function(){return Ge=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ge.apply(this,arguments)};function Qs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var J="-ms-",Cs="-moz-",H="-webkit-",Uv="comm",Pl="rule",Ph="decl",RR="@import",Fv="@keyframes",AR="@layer",zv=Math.abs,bh=String.fromCharCode,Vc=Object.assign;function NR(t,e){return we(t,0)^45?(((e<<2^we(t,0))<<2^we(t,1))<<2^we(t,2))<<2^we(t,3):0}function Bv(t){return t.trim()}function jt(t,e){return(t=e.exec(t))?t[0]:t}function L(t,e,n){return t.replace(e,n)}function sa(t,e,n){return t.indexOf(e,n)}function we(t,e){return t.charCodeAt(e)|0}function Ii(t,e,n){return t.slice(e,n)}function xt(t){return t.length}function $v(t){return t.length}function ds(t,e){return e.push(t),t}function xR(t,e){return t.map(e).join("")}function im(t,e){return t.filter(function(n){return!jt(n,e)})}var bl=1,Ti=1,Wv=0,ft=0,fe=0,Bi="";function Ol(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:bl,column:Ti,length:o,return:"",siblings:a}}function yn(t,e){return Vc(Ol("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function zr(t){for(;t.root;)t=yn(t.root,{children:[t]});ds(t,t.siblings)}function PR(){return fe}function bR(){return fe=ft>0?we(Bi,--ft):0,Ti--,fe===10&&(Ti=1,bl--),fe}function kt(){return fe=ft<Wv?we(Bi,ft++):0,Ti++,fe===10&&(Ti=1,bl++),fe}function gr(){return we(Bi,ft)}function oa(){return ft}function Dl(t,e){return Ii(Bi,t,e)}function Gc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function OR(t){return bl=Ti=1,Wv=xt(Bi=t),ft=0,[]}function DR(t){return Bi="",t}function Ru(t){return Bv(Dl(ft-1,qc(t===91?t+2:t===40?t+1:t)))}function LR(t){for(;(fe=gr())&&fe<33;)kt();return Gc(t)>2||Gc(fe)>3?"":" "}function MR(t,e){for(;--e&&kt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Dl(t,oa()+(e<6&&gr()==32&&kt()==32))}function qc(t){for(;kt();)switch(fe){case t:return ft;case 34:case 39:t!==34&&t!==39&&qc(fe);break;case 40:t===41&&qc(t);break;case 92:kt();break}return ft}function UR(t,e){for(;kt()&&t+fe!==47+10;)if(t+fe===42+42&&gr()===47)break;return"/*"+Dl(e,ft-1)+"*"+bh(t===47?t:kt())}function FR(t){for(;!Gc(gr());)kt();return Dl(t,ft)}function zR(t){return DR(aa("",null,null,null,[""],t=OR(t),0,[0],t))}function aa(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,_=0,w=1,I=1,m=1,f=0,p="",y=i,C=s,S=r,E=p;I;)switch(_=f,f=kt()){case 40:if(_!=108&&we(E,d-1)==58){sa(E+=L(Ru(f),"&","&\f"),"&\f",zv(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Ru(f);break;case 9:case 10:case 13:case 32:E+=LR(_);break;case 92:E+=MR(oa()-1,7);continue;case 47:switch(gr()){case 42:case 47:ds(BR(UR(kt(),oa()),e,n,l),l);break;default:E+="/"}break;case 123*w:a[u++]=xt(E)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+c:m==-1&&(E=L(E,/\f/g,"")),g>0&&xt(E)-d&&ds(g>32?om(E+";",r,n,d-1,l):om(L(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(ds(S=sm(E,e,n,u,c,i,a,p,y=[],C=[],d,s),s),f===123)if(c===0)aa(E,e,S,S,y,s,d,a,C);else switch(h===99&&we(E,3)===110?100:h){case 100:case 108:case 109:case 115:aa(t,S,S,r&&ds(sm(t,S,S,0,0,i,a,p,i,y=[],d,C),C),i,C,d,a,r?y:C);break;default:aa(E,S,S,S,[""],C,0,a,C)}}u=c=g=0,w=m=1,p=E="",d=o;break;case 58:d=1+xt(E),g=_;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&bR()==125)continue}switch(E+=bh(f),f*w){case 38:m=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(xt(E)-1)*m,m=1;break;case 64:gr()===45&&(E+=Ru(kt())),h=gr(),c=d=xt(p=E+=FR(oa())),f++;break;case 45:_===45&&xt(E)==2&&(w=0)}}return s}function sm(t,e,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,g=i===0?s:[""],_=$v(g),w=0,I=0,m=0;w<r;++w)for(var f=0,p=Ii(t,h+1,h=zv(I=o[w])),y=t;f<_;++f)(y=Bv(I>0?g[f]+" "+p:L(p,/&\f/g,g[f])))&&(l[m++]=y);return Ol(t,e,n,i===0?Pl:a,l,u,c,d)}function BR(t,e,n,r){return Ol(t,e,n,Uv,bh(PR()),Ii(t,2,-2),0,r)}function om(t,e,n,r,i){return Ol(t,e,n,Ph,Ii(t,0,r),Ii(t,r+1,-1),r,i)}function Hv(t,e,n){switch(NR(t,e)){case 5103:return H+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+t+t;case 4789:return Cs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return H+t+Cs+t+J+t+t;case 5936:switch(we(t,e+11)){case 114:return H+t+J+L(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return H+t+J+L(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return H+t+J+L(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return H+t+J+t+t;case 6165:return H+t+J+"flex-"+t+t;case 5187:return H+t+L(t,/(\w+).+(:[^]+)/,H+"box-$1$2"+J+"flex-$1$2")+t;case 5443:return H+t+J+"flex-item-"+L(t,/flex-|-self/g,"")+(jt(t,/flex-|baseline/)?"":J+"grid-row-"+L(t,/flex-|-self/g,""))+t;case 4675:return H+t+J+"flex-line-pack"+L(t,/align-content|flex-|-self/g,"")+t;case 5548:return H+t+J+L(t,"shrink","negative")+t;case 5292:return H+t+J+L(t,"basis","preferred-size")+t;case 6060:return H+"box-"+L(t,"-grow","")+H+t+J+L(t,"grow","positive")+t;case 4554:return H+L(t,/([^-])(transform)/g,"$1"+H+"$2")+t;case 6187:return L(L(L(t,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),t,"")+t;case 5495:case 3959:return L(t,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return L(L(t,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+t+t;case 4200:if(!jt(t,/flex-|baseline/))return J+"grid-column-align"+Ii(t,e)+t;break;case 2592:case 3360:return J+L(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,jt(r.props,/grid-\w+-end/)})?~sa(t+(n=n[e].value),"span",0)?t:J+L(t,"-start","")+t+J+"grid-row-span:"+(~sa(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(t,/\d+/))+";":J+L(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?t:J+L(L(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return L(t,/(.+)-inline(.+)/,H+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(t)-1-e>6)switch(we(t,e+1)){case 109:if(we(t,e+4)!==45)break;case 102:return L(t,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+Cs+(we(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~sa(t,"stretch",0)?Hv(L(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return L(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return J+i+":"+s+u+(o?J+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(we(t,e+6)===121)return L(t,":",":"+H)+t;break;case 6444:switch(we(t,we(t,14)===45?18:11)){case 120:return L(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(we(t,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+J+"$2box$3")+t;case 100:return L(t,":",":"+J)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(t,"scroll-","scroll-snap-")+t}return t}function Va(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $R(t,e,n,r){switch(t.type){case AR:if(t.children.length)break;case RR:case Ph:return t.return=t.return||t.value;case Uv:return"";case Fv:return t.return=t.value+"{"+Va(t.children,r)+"}";case Pl:if(!xt(t.value=t.props.join(",")))return""}return xt(n=Va(t.children,r))?t.return=t.value+"{"+n+"}":""}function WR(t){var e=$v(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function HR(t){return function(e){e.root||(e=e.return)&&t(e)}}function jR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ph:t.return=Hv(t.value,t.length,n);return;case Fv:return Va([yn(t,{value:L(t.value,"@","@"+H)})],r);case Pl:if(t.length)return xR(n=t.props,function(i){switch(jt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(yn(t,{props:[L(i,/:(read-\w+)/,":"+Cs+"$1")]})),zr(yn(t,{props:[i]})),Vc(t,{props:im(n,r)});break;case"::placeholder":zr(yn(t,{props:[L(i,/:(plac\w+)/,":"+H+"input-$1")]})),zr(yn(t,{props:[L(i,/:(plac\w+)/,":"+Cs+"$1")]})),zr(yn(t,{props:[L(i,/:(plac\w+)/,J+"input-$1")]})),zr(yn(t,{props:[i]})),Vc(t,{props:im(n,r)});break}return""})}}var VR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ri=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",jv="active",Vv="data-styled-version",Ll="6.1.8",Oh=`/*!sc*/
`,Dh=typeof window<"u"&&"HTMLElement"in window,GR=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Ml=Object.freeze([]),Ai=Object.freeze({});function qR(t,e,n){return n===void 0&&(n=Ai),t.theme!==n.theme&&t.theme||e||n.theme}var Gv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),KR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YR=/(^-|-$)/g;function am(t){return t.replace(KR,"-").replace(YR,"")}var QR=/(a)(d)/gi,Fo=52,lm=function(t){return String.fromCharCode(t+(t>25?39:97))};function Kc(t){var e,n="";for(e=Math.abs(t);e>Fo;e=e/Fo|0)n=lm(e%Fo)+n;return(lm(e%Fo)+n).replace(QR,"$1-$2")}var Au,qv=5381,ei=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Kv=function(t){return ei(qv,t)};function Yv(t){return Kc(Kv(t)>>>0)}function XR(t){return t.displayName||t.name||"Component"}function Nu(t){return typeof t=="string"&&!0}var Qv=typeof Symbol=="function"&&Symbol.for,Xv=Qv?Symbol.for("react.memo"):60115,JR=Qv?Symbol.for("react.forward_ref"):60112,ZR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tA=((Au={})[JR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Au[Xv]=Jv,Au);function um(t){return("type"in(e=t)&&e.type.$$typeof)===Xv?Jv:"$$typeof"in t?tA[t.$$typeof]:ZR;var e}var nA=Object.defineProperty,rA=Object.getOwnPropertyNames,cm=Object.getOwnPropertySymbols,iA=Object.getOwnPropertyDescriptor,sA=Object.getPrototypeOf,dm=Object.prototype;function Zv(t,e,n){if(typeof e!="string"){if(dm){var r=sA(e);r&&r!==dm&&Zv(t,r,n)}var i=rA(e);cm&&(i=i.concat(cm(e)));for(var s=um(t),o=um(e),a=0;a<i.length;++a){var l=i[a];if(!(l in eA||n&&n[l]||o&&l in o||s&&l in s)){var u=iA(e,l);try{nA(t,l,u)}catch{}}}}return t}function Ni(t){return typeof t=="function"}function Lh(t){return typeof t=="object"&&"styledComponentId"in t}function cr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Yc(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Xs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Qc(t,e,n){if(n===void 0&&(n=!1),!n&&!Xs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Qc(t[r],e[r]);else if(Xs(e))for(var r in e)t[r]=Qc(t[r],e[r]);return t}function Mh(t,e){Object.defineProperty(t,"toString",{value:e})}function uo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oA=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw uo(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Oh);return n},t}(),la=new Map,Ga=new Map,ua=1,zo=function(t){if(la.has(t))return la.get(t);for(;Ga.has(ua);)ua++;var e=ua++;return la.set(t,e),Ga.set(e,t),e},aA=function(t,e){ua=e+1,la.set(t,e),Ga.set(e,t)},lA="style[".concat(Ri,"][").concat(Vv,'="').concat(Ll,'"]'),uA=new RegExp("^".concat(Ri,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},dA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Oh),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(uA);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(aA(c,u),cA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function hA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ri,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ri,jv),r.setAttribute(Vv,Ll);var o=hA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},fA=function(){function t(e){this.element=e0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw uo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),pA=function(){function t(e){this.element=e0(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),mA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),hm=Dh,gA={isServer:!Dh,useCSSOMInjection:!GR},t0=function(){function t(e,n,r){e===void 0&&(e=Ai),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},gA),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dh&&hm&&(hm=!1,function(s){for(var o=document.querySelectorAll(lA),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ri)!==jv&&(dA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Mh(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(m){return Ga.get(m)}(d);if(h===void 0)return"continue";var g=s.names.get(h),_=o.getGroup(d);if(g===void 0||_.length===0)return"continue";var w="".concat(Ri,".g").concat(d,'[id="').concat(h,'"]'),I="";g!==void 0&&g.forEach(function(m){m.length>0&&(I+="".concat(m,","))}),l+="".concat(_).concat(w,'{content:"').concat(I,'"}').concat(Oh)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return zo(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ge(Ge({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mA(i):r?new fA(i):new pA(i)}(this.options),new oA(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(zo(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(zo(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(zo(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),_A=/&/g,yA=/^\s*\/\/.*$/gm;function n0(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=n0(n.children,e)),n})}function vA(t){var e,n,r,i=t===void 0?Ai:t,s=i.options,o=s===void 0?Ai:s,a=i.plugins,l=a===void 0?Ml:a,u=function(h,g,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):h},c=l.slice();c.push(function(h){h.type===Pl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(_A,n).replace(r,u))}),o.prefix&&c.push(jR),c.push($R);var d=function(h,g,_,w){g===void 0&&(g=""),_===void 0&&(_=""),w===void 0&&(w="&"),e=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var I=h.replace(yA,""),m=zR(_||g?"".concat(_," ").concat(g," { ").concat(I," }"):I);o.namespace&&(m=n0(m,o.namespace));var f=[];return Va(m,WR(c.concat(HR(function(p){return f.push(p)})))),f};return d.hash=l.length?l.reduce(function(h,g){return g.name||uo(15),ei(h,g.name)},qv).toString():"",d}var wA=new t0,Xc=vA(),r0=As.createContext({shouldForwardProp:void 0,styleSheet:wA,stylis:Xc});r0.Consumer;As.createContext(void 0);function fm(){return P.useContext(r0)}var i0=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Xc);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Mh(this,function(){throw uo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Xc),this.name+e.hash},t}(),EA=function(t){return t>="A"&&t<="Z"};function pm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;EA(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var s0=function(t){return t==null||t===!1||t===""},o0=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!s0(s)&&(Array.isArray(s)&&s.isCss||Ni(s)?r.push("".concat(pm(i),":"),s,";"):Xs(s)?r.push.apply(r,Qs(Qs(["".concat(i," {")],o0(s),!1),["}"],!1)):r.push("".concat(pm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in VR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _r(t,e,n,r){if(s0(t))return[];if(Lh(t))return[".".concat(t.styledComponentId)];if(Ni(t)){if(!Ni(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return _r(i,e,n,r)}var s;return t instanceof i0?n?(t.inject(n,r),[t.getName(r)]):[t]:Xs(t)?o0(t):Array.isArray(t)?Array.prototype.concat.apply(Ml,t.map(function(o){return _r(o,e,n,r)})):[t.toString()]}function SA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ni(n)&&!Lh(n))return!1}return!0}var CA=Kv(Ll),kA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&SA(e),this.componentId=n,this.baseHash=ei(CA,n),this.baseStyle=r,t0.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=cr(i,this.staticRulesId);else{var s=Yc(_r(this.rules,e,n,r)),o=Kc(ei(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=cr(i,o),this.staticRulesId=o}else{for(var l=ei(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=Yc(_r(d,e,n,r));l=ei(l,h+c),u+=h}}if(u){var g=Kc(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=cr(i,g)}}return i},t}(),a0=As.createContext(void 0);a0.Consumer;var xu={};function IA(t,e,n){var r=Lh(t),i=t,s=!Nu(t),o=e.attrs,a=o===void 0?Ml:o,l=e.componentId,u=l===void 0?function(y,C){var S=typeof y!="string"?"sc":am(y);xu[S]=(xu[S]||0)+1;var E="".concat(S,"-").concat(Yv(Ll+S+xu[S]));return C?"".concat(C,"-").concat(E):E}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(y){return Nu(y)?"styled.".concat(y):"Styled(".concat(XR(y),")")}(t):c,h=e.displayName&&e.componentId?"".concat(am(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;_=function(y,C){return w(y,C)&&I(y,C)}}else _=w}var m=new kA(n,h,r?i.componentStyle:void 0);function f(y,C){return function(S,E,A){var B=S.attrs,M=S.componentStyle,Je=S.defaultProps,Jn=S.foldedComponentIds,Zn=S.styledComponentId,go=S.target,Hl=As.useContext(a0),ji=fm(),er=S.shouldForwardProp||ji.shouldForwardProp,N=qR(E,Hl,Je)||Ai,b=function(pn,Ze,Wt){for(var Vi,nr=Ge(Ge({},Ze),{className:void 0,theme:Wt}),jl=0;jl<pn.length;jl+=1){var _o=Ni(Vi=pn[jl])?Vi(nr):Vi;for(var mn in _o)nr[mn]=mn==="className"?cr(nr[mn],_o[mn]):mn==="style"?Ge(Ge({},nr[mn]),_o[mn]):_o[mn]}return Ze.className&&(nr.className=cr(nr.className,Ze.className)),nr}(B,E,N),D=b.as||go,K={};for(var Y in b)b[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&b.theme===N||(Y==="forwardedAs"?K.as=b.forwardedAs:er&&!er(Y,D)||(K[Y]=b[Y]));var tr=function(pn,Ze){var Wt=fm(),Vi=pn.generateAndInjectStyles(Ze,Wt.styleSheet,Wt.stylis);return Vi}(M,b),mt=cr(Jn,Zn);return tr&&(mt+=" "+tr),b.className&&(mt+=" "+b.className),K[Nu(D)&&!Gv.has(D)?"class":"className"]=mt,K.ref=A,P.createElement(D,K)}(p,y,C)}f.displayName=d;var p=As.forwardRef(f);return p.attrs=g,p.componentStyle=m,p.displayName=d,p.shouldForwardProp=_,p.foldedComponentIds=r?cr(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(C){for(var S=[],E=1;E<arguments.length;E++)S[E-1]=arguments[E];for(var A=0,B=S;A<B.length;A++)Qc(C,B[A],!0);return C}({},i.defaultProps,y):y}}),Mh(p,function(){return".".concat(p.styledComponentId)}),s&&Zv(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function mm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var gm=function(t){return Object.assign(t,{isCss:!0})};function l0(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ni(t)||Xs(t))return gm(_r(mm(Ml,Qs([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?_r(r):gm(_r(mm(r,e)))}function Jc(t,e,n){if(n===void 0&&(n=Ai),!e)throw uo(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,l0.apply(void 0,Qs([i],s,!1)))};return r.attrs=function(i){return Jc(t,e,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jc(t,e,Ge(Ge({},n),i))},r}var u0=function(t){return Jc(IA,t)},T=u0;Gv.forEach(function(t){T[t]=u0(t)});function $t(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Yc(l0.apply(void 0,Qs([t],e,!1))),i=Yv(r);return new i0(i,r)}const TA=$t`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,RA=T.article`
  margin-bottom: 30px;
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
  padding-bottom: 30px;
  animation: ${TA} 0.75s ease-in;
  position: relative;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`,xO=T.button`
  position: absolute;
  bottom: 0;
  right: 0;
`,PO=T.button`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
`,bO=T.button`
  position: absolute;
  bottom: 0;
  left: 0;
`,OO=T.input`
  position: absolute;
  bottom: 0;
  left: 50%;
`,AA=T.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,DO=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,LO=T.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,NA=T.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,MO=T.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`,UO=T.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 7%, 0.92);
`,FO=T.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 0px 20px;

  & > img,
  & > video {
    position: absolute;
    object-fit: scale-down;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 85%;
    max-width: 85%;
  }
`,xA=()=>v(RA,{children:v(AA,{children:v(NA,{})})}),PA=T.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,bA=T.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`,OA=T.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  color: #444;
  margin: 0px 30px 30px 30px;

  @media (max-width: 660px) {
    margin: 0px;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media (max-width: 1319px) and (min-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1320px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`,DA=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,LA=T.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,MA=""+new URL("plus-70c42e58.svg",import.meta.url).href,UA=({onUpload:t})=>{const[e,n]=P.useState(!1),[r,i]=P.useState(""),[s,o]=P.useState(""),[a,l]=P.useState(null);return oe(Wn,{children:[v(LA,{onClick:()=>n(!e),src:MA,alt:"Add more content"}),e&&v(Wn,{children:oe(PA,{onSubmit:async d=>{if(d.preventDefault(),a){const h=await ER(a,{name:s,caption:r});t(h),l(null),i(""),o(""),n(!1)}},children:[v("div",{children:v("label",{htmlFor:"caption",children:"Caption"})}),oe("div",{children:[v("input",{id:"caption",value:r,onChange:d=>i(d.target.value)}),v("div",{children:v("label",{htmlFor:"name",children:"Name"})}),v("div",{children:v("input",{id:"name",value:s,onChange:d=>o(d.target.value),required:!0})})]}),v("div",{children:v("label",{htmlFor:"file",children:"Choose a file"})}),v("div",{children:v("input",{id:"file",type:"file",required:!0,onChange:d=>{d.target.files&&l(d.target.files[0])}})}),a&&v("button",{type:"submit",children:"Upload a file"})]})})]})},c0=""+new URL("raffle-ticket-8fc36264.png",import.meta.url).href,FA=T.div`
  position: fixed;
  width: 10%;
  top: 5px;
  left: 5px;
  z-index: 600;

  @media screen and (max-device-width: 568px) {
    width: 30%;
  }
`,zA=T.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,BA=T.p`
  font-family: Nokia;
  position: absolute;
  font-size: ${({$expanded:t})=>t?"30px":"20px"};
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-device-width: 950px) {
    font-size: ${({$expanded:t})=>t?"30px":"12px"};
  }
`,$A=T.img`
  width: 100%;
`,WA=({raffleNumber:t})=>v(FA,{children:oe(zA,{children:[v(BA,{children:t}),v($A,{src:c0,alt:"raffle ticket"})]})}),HA=()=>{const[t,e]=P.useState("eantwibawua1@gmail.com"),[n,r]=P.useState("");return oe("div",{children:[v("h1",{children:"Hey Eman 🙂"}),v("p",{children:"Please sign-in:"}),oe("form",{onSubmit:async s=>{s.preventDefault(),await wR(t,n)},children:[oe("div",{children:[v("label",{htmlFor:"email-address",children:"Email address"}),v("input",{type:"email",id:"email-address",value:t,onChange:s=>e(s.target.value),required:!0,placeholder:"Email address"})]}),oe("div",{children:[v("label",{htmlFor:"password",children:"Password"}),v("input",{type:"password",id:"password",value:n,onChange:s=>r(s.target.value),required:!0,placeholder:"Password"})]}),v("button",{type:"submit",children:"Sign in"})]})]})},_m=990,jA=1320,ym=()=>window.innerWidth<=_m?2:window.innerWidth<=jA&&window.innerWidth>_m?3:4,vm=(t,e)=>{const n=Math.floor(t.length/e),r=t.length%e;let i=0;const s=[];for(let o=0;o<e;o++){const a=i+n+(o<r?1:0);s.push(t.slice(i,a)),i=a}return s},wm=(t,e)=>{const n=t.filter(a=>{var l;return((l=a.metadata.customMetadata)==null?void 0:l.pinned)==="true"}).sort((a,l)=>{var u,c;return!((u=a.metadata.customMetadata)!=null&&u.pinnedAt)||!((c=l.metadata.customMetadata)!=null&&c.pinnedAt)?0:parseInt(a.metadata.customMetadata.pinnedAt)-parseInt(l.metadata.customMetadata.pinnedAt)}),r=t.filter(a=>{var l;return((l=a.metadata.customMetadata)==null?void 0:l.pinned)!=="true"}),i=vm(n,e),s=vm(r,e);return i.map((a,l)=>a.concat(s[l]))},Em=""+new URL("awcy-ad680841.mp3",import.meta.url).href,VA=""+new URL("tee-647bc5ea.png",import.meta.url).href,co=$t`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,GA=T.p`
  color: rgba(12, 0, 0, 0.7);
  flex: 1;
  display: block;
  animation: ${co} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,qA=T.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
  animation: ${co} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,KA=T.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,YA=$t`
0% {
  opacity: 0.85;
  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  -o-transform: scale(0.5);
  transform: scale(0.5);
}
100% {
  opacity: 1;
  -webkit-transform: translate(1);
  -moz-transform: translate(1);
  -o-transform: translate(1);
  transform: translate(1);
}`,QA=T.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${YA} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,XA=T.button`
  font-weight: 700;
  border-radius: 15px;
  width: 150px;
  height: 45px;
  background-color: #61c433;
  border: none;
  outline: none;
  color: black;
  animation: ${co} 0.5s ease-in-out;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`,JA=T.audio`
  width: 300px;
  max-width: 300px;
  animation: ${co} 0.5s ease-in-out;

  &::-webkit-media-controls-panel {
    background-color: #fefafa;
    color: #fefafa;
  }

  &::-webkit-media-controls-current-time-display {
    display: none;
  }

  &::-webkit-media-controls-time-remaining-display {
    display: none;
  }
`,ZA=T.p`
  margin-top: 5px;
  animation: ${co} 0.5s ease-in-out;
`,eN=({onTitleClick:t})=>oe(KA,{children:[v(QA,{children:v("img",{src:VA,alt:"are we cool yet t-shirt"})}),v(qA,{onClick:t,children:"arewecoolyet.blog"}),v(GA,{children:"YOU'RE ALL WELCOME"}),v("a",{href:"https://forms.gle/8dzX8f76mTJm69iw7",target:"_blank",rel:"noreferrer",children:v(XA,{children:"PLEASE RSVP! CLICK HERE"})}),v(JA,{controlsList:"nodownload noplaybackrate",controls:!0,src:Em,children:v("track",{default:!0,kind:"captions",src:Em})}),v(ZA,{children:"stu$h Auntie - Pattern [Up]"})]});var Fe=(t=>(t.LOGIN="login",t.OUTSIDE_CLUB="outside-club",t.INSIDE_CLUB="inside-club",t.HOME="home",t))(Fe||{});const Uh={id:null,name:"",email:"",health:2,outfit:null,stage:Fe.LOGIN,mission:null,raffleNumber:null,hasAccessToClub:!1,hasCompletedClub:!1,update:()=>{}},fn=P.createContext(Uh),tN=({children:t})=>{const[e,n]=P.useState(Uh),r=localStorage.getItem("raffleNumber"),i=localStorage.getItem("awcyId"),s=P.useCallback(a=>{n({...e,...a})},[e]),o={...e,update:s,raffleNumber:r,id:i};return v(fn.Provider,{value:o,children:t})},nN=""+new URL("following-20746ba2.png",import.meta.url).href,rN=""+new URL("outside-club-85fbd6df.jpg",import.meta.url).href,iN=""+new URL("pop-up-outside-club-1-6042d44b.png",import.meta.url).href,sN=""+new URL("pop-up-outside-club-2-b5a2f161.png",import.meta.url).href,d0=""+new URL("character-cc76f9ba.png",import.meta.url).href,oN=$t`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
    -moz-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,Zc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==",aN=T.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
  margin: 30px auto;

  @media screen and (max-device-width: 568px) {
    width: 95%;
  }
`,lN=T.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`,uN=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,cN=T.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`,Fh=T.img`
  width: 100%;
  object-fit: cover;
`,dN=T.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${Zc});
  color: #96e3ff;
  border: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`,hN=T.form`
  width: 70%;
  padding: 20px;

  background: white;
  background-image: url(${Zc});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  & > label {
    margin-bottom: 5px;
    width: 70%;
    align-self: center;
    text-align: left;
  }

  & > input,
  input:focus {
    margin-bottom: 15px;
    width: 100%;
    border-radius: 0;
    height: 25px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    width: 70%;
    align-self: center;
  }

  & > button {
    border: 2px solid #93bae3;
    padding: 4px;
    background: #005f9f;
    background-image: url(${Zc});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
  }
`,Sm=T.div`
  max-height: 60%;
  object-fit: contain;
  align-self: center;
  @media screen and (max-device-width: 568px) {
    max-height: 50%;
  }
`,Cm=T.img`
  height: 100%;
`,fN=T.div`
  width: 12%;
  height: 27%;
  position: absolute;
  left: 43.5%;
  top: 58%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,h0=$t`
0% {
    top: 50%;
}

50% {
  top: 51%
}

100% {
    top: 50%;
}`,pN=T.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  transform: scaleX(-1);
  animation: ${h0} 1.5s infinite;
`,mN=T.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transform: scaleX(1);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  animation: ${h0} 1.5s infinite;
`,gN=T.img`
  position: absolute;
  bottom: 0;
  right: 3%;
`,_N=T.div`
  margin-left: auto;
  margin-right: auto;
  top: 2%;
  left: 0;
  right: 0;
  max-width: 30%;
  height: 14%;
  animation: ${oN} 0.5s ease-in-out;
  position: absolute;
`,yN=T.div`
  width: 100%;
  height: 100%;
  position: relative;
`,vN=T.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`,wN=T.img`
  width: 107%;
  position: absolute;
  top: -5%;
  left: -3%;
  z-index: 1;
`,EN=T.div`
  left: ${t=>t.$left};
  bottom: 32%;
  background-color: #57df00;
  width: 6%;
  height: 49%;
  position: absolute;
  z-index: 1;
`,SN=$t`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,CN=T.div`
  background: black;
  position: absolute;
  bottom: 3%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: white;
  width: 40%;
  border-radius: 3%;
  word-wrap: break-word;
  animation: ${SN} 0.5s ease-in-out;
`,kN=T.p`
  font-size: 20px;
  margin: 12px;
  @media screen and (max-device-width: 900px) {
    font-size: 12px;
    margin: 4px;
  }
`,IN=T.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`,TN=T.img`
  position: absolute;
  right: 10%;
  top: 43%;
  opacity: 0.9;
  transform: translateY(-50%);
  cursor: pointer;
  width: 8%;
`,RN=T.img`
  position: relative;
  height: 100%;
`,AN=T.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  top: 60.7%;
  left: 29.2%;
  z-index: 500;
  height: 13%;
`,NN=T.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  top: 60.7%;
  right: 29.7%;
  z-index: 500;
  height: 13%;
`,xN=T.div`
  position: absolute;
  width: 17.4%;
  cursor: pointer;
  bottom: 8.7%;
  left: 29.1%;
  z-index: 500;
  height: 13%;
`,PN=T.div`
  position: absolute;
  width: 100%;
  height: 40%;
  background-color: white;
  bottom: 0;
`,bN=T.div`
  position: absolute;
  width: 18%;
  height: 20%;
  top: 42%;
  right: 36%;
  z-index: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,ON=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 800;
  background-color: rgb(0, 0, 0, 0.9);
  padding: 4px;
  word-wrap: wrap;
`,DN=T.div`
  width: 60%;
`,LN=T.h2`
  font-family: Nokia;
  font-size: 40px;
  margin: 0;
  margin-bottom: 8px;
  color: ${t=>t.$win?"yellow":"red"};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media screen and (max-device-width: 900px) {
    font-size: 18px;
  }
`,MN=T.h4`
  font-family: Nokia;
  font-size: 20px;
  color: white;
  margin: 0;
  @media screen and (max-device-width: 900px) {
    font-size: 12px;
  }
`,UN=T.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,FN=T.p`
  font-family: Nokia;
  position: absolute;
  font-size: 18px;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-device-width: 568px) {
    font-size: 8px;
  }
`,zN=T.img`
  width: 100%;
`,BN=T.button`
  font-family: Nokia;
  font-size: 16px;
  color: white;
  margin: 0;
  background: transparent;
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  margin-top: 8px;
  cursor: pointer;

  @media screen and (max-device-width: 568px) {
    font-size: 8px;
  }
`,$N=T.div`
  position: absolute;
  width: 12%;
  height: 20%;
  top: 63%;
  right: 35%;
  z-index: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,WN={width:"25%",height:"38%"},HN={width:"15%",height:"24%"},jN={width:"20%",height:"30%",left:"5%"},VN=t=>t===Fe.INSIDE_CLUB?jN:t===Fe.OUTSIDE_CLUB?HN:WN,zh=()=>{const{stage:t,outfit:e}=P.useContext(fn),n=e||d0,r=VN(t);return v(gN,{style:r,src:n,alt:"character"})},GN=()=>$t`
0% {
    opacity: 1;
    top: 50%;
    left: 46%;
}

80% {
    opacity: 1;
}

100% {
    top: 3%;
    left: 46%;
    opacity: 0;
}`,qN=T.p`
  font-family: Nokia;
  font-size: 28px;
  position: absolute;
  opacity: 0;
  color: ${t=>t.$color};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  animation: ${GN} 1.5s ease;

  @media screen and (max-device-width: 568px) {
    font-size: 18px;
  }
`,Bh=({healthChange:t})=>{const e=t>0?"#57df00":"red",n=t>0?"+":"";return v(qN,{$color:e,children:`${n+t}hp`})},km=""+new URL("arrow-134fdc26.png",import.meta.url).href,qa=({onClick:t,right:e=!1})=>e?v(pN,{src:km,alt:"right arrow",onClick:t}):v(mN,{src:km,alt:"left arrow",onClick:t}),KN=""+new URL("pixel-click-c51f700e.png",import.meta.url).href,YN=$t`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,QN=T.img`
  width: 40%;
  animation: ${YN} 2s infinite;
`,Ka=()=>v(QN,{src:KN,alt:"pointer"}),XN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlRJREFUeJzt3TFqFVEYhuFPcQUiNuIKLLSwdRHuIUJ2EZAswkVE92BnI2QLmja6hVjENl90GP7RmeeBU93iP/cyL5ziMDcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEkebL2Bg3iR5M3AnIsk1wNzYFWnSW4G1qupL3QUD7feAPzLBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKB4tPUGWNVZkh8Dc04GZnAgU5cVp9ZhOGJBIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFy4oscTkw4yLJ+cCcSiAs8XJgxpeBGfdyxIJCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBIolfwN9luTt2hvZuSdJnm29if/MzyRXA3PeJ/l014dLLis+z8xlNY7t8e81MedOjlhQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFEvei/Utyde1N7JzT3P7PjH+3HVun7WJOWzsNMmN9Vfrw6JfemWOWFAIBAqBQCEQKAQChUCgEAgUAoFCIFAIBAqBQLHksiJMXFb9PjDjXgJhiddbb2CKIxYUAoFCIFAIBAqBQCEQKAQChUCgEAgUAoFCIFC4i7UvH+NNgasSyL6cJ7ncehN74ogFhUCgEAgUAoFCIFAIBAqBQCEQKAQChUCgEAgU7mLN+Jzk3cCcq4EZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzQL8uwsQEab8FKAAAAAElFTkSuQmCC",f0=({popUps:t,onFirstOptionClick:e,onSecondOptionClick:n,onThirdOptionClick:r})=>{const[i,s]=P.useState(0),o=()=>{i!==t.length-1&&s(i+1)},a=i===t.length-1;return oe(IN,{children:[!a&&v(TN,{onClick:o,src:XN,alt:"right arrow"}),v(RN,{src:t[i],alt:"pop up screen for bouncer"}),a?oe(Wn,{children:[v(AN,{onClick:e}),v(NN,{onClick:n}),v(xN,{onClick:r})]}):v(PN,{})]})},JN=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 800;
  background-color: rgb(0, 0, 0, 0.4);
`,Pu=$t`
0% {
  opacity: 0.85;
  -webkit-transform: scale(0.2);
  -moz-transform: scale(0.2);
  -o-transform: scale(0.2);
  transform: scale(0.2);
}
100% {
  opacity: 1;
  -webkit-transform: translate(1);
  -moz-transform: translate(1);
  -o-transform: translate(1);
  transform: translate(1);
}`,ZN=T.img`
  width: 30%;
  cursor: pointer;

  &:nth-of-type(1) {
    animation: ${Pu} 1s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: ${Pu} 1.5s ease-in-out;
  }

  &:nth-of-type(3) {
    animation: ${Pu} 2s ease-in-out;
  }
`,ex=$t`
0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,tx=T.img`
  max-width: 20%;
  position: absolute;
  bottom: -15%;
  left: 6%;
  animation: ${ex} 0.5s ease-in-out;
  cursor: pointer;
  z-index: 190;
`,p0=T.img`
  width: 100%;
  position: absolute;
  top: -15%;
  left: 0;
  cursor: pointer;
  z-index: 500;
`,nx=T.div`
  width: 18.5%;
  cursor: pointer;
  position: absolute;
  left: 8.2%;
  top: 32%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`,rx=()=>{const{update:t,health:e,hasAccessToClub:n}=P.useContext(fn),[r,i]=P.useState(!1),[s,o]=P.useState(!1),[a,l]=P.useState(!0),[u,c]=P.useState(null),d=()=>{i(!0)};return P.useEffect(()=>{n||t({mission:"Talk to the bouncer"})},[]),oe(Wn,{children:[u&&v(Bh,{healthChange:u}),v(qa,{right:!1,onClick:()=>t({stage:Fe.HOME,mission:null})}),n&&v(qa,{right:!0,onClick:()=>t({stage:Fe.INSIDE_CLUB})}),r&&v(f0,{popUps:[iN,sN],onFirstOptionClick:()=>{i(!1),c(1),t({mission:null}),l(!1),setTimeout(()=>{t({mission:null,health:e+1,hasAccessToClub:!0})},1500)},onSecondOptionClick:()=>{i(!1),c(-1),t({mission:null}),l(!1),setTimeout(()=>{t({mission:null,health:e-1,hasAccessToClub:!0})},1500)},onThirdOptionClick:()=>{o(!0)}}),s&&v(p0,{src:nN,onClick:()=>{o(!1),i(!1),c(-2),t({mission:null}),l(!1),setTimeout(()=>{t({mission:null,health:e-2,hasAccessToClub:!0})},1500)},alt:"instagram followers"}),v(Fh,{src:rN,alt:"club"}),v(zh,{}),(!n||a)&&v(fN,{onClick:d,children:v(Ka,{})})]})},Im=""+new URL("aol-dial-up-fae80fce.mp3",import.meta.url).href,Tm=""+new URL("login-graphic-b249ee60.png",import.meta.url).href;let Bo;const ix=new Uint8Array(16);function sx(){if(!Bo&&(Bo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Bo))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Bo(ix)}const Ce=[];for(let t=0;t<256;++t)Ce.push((t+256).toString(16).slice(1));function ox(t,e=0){return Ce[t[e+0]]+Ce[t[e+1]]+Ce[t[e+2]]+Ce[t[e+3]]+"-"+Ce[t[e+4]]+Ce[t[e+5]]+"-"+Ce[t[e+6]]+Ce[t[e+7]]+"-"+Ce[t[e+8]]+Ce[t[e+9]]+"-"+Ce[t[e+10]]+Ce[t[e+11]]+Ce[t[e+12]]+Ce[t[e+13]]+Ce[t[e+14]]+Ce[t[e+15]]}const ax=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Rm={randomUUID:ax};function lx(t,e,n){if(Rm.randomUUID&&!e&&!t)return Rm.randomUUID();t=t||{};const r=t.random||(t.rng||sx)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return ox(r)}const ux=()=>{const{name:t,update:e,email:n}=P.useContext(fn),r=a=>{if(a.preventDefault(),!t||!n)return;const l=lx();localStorage.setItem("awcyId",l),e({name:t,stage:Fe.HOME,id:l})},i=window.innerWidth<=900,s=P.useRef(null),o=()=>{s&&s.current&&s.current.play&&s.current.play()};return oe(Wn,{children:[v("audio",{ref:s,controls:!1,src:Im,children:v("track",{default:!0,kind:"captions",src:Im})}),oe(dN,{children:[v("p",{children:"AWCY"}),i&&v(Sm,{children:v(Cm,{src:Tm,alt:"aol mock graphic"})}),v("p",{children:"version 1.0"})]}),oe(hN,{onSubmit:r,onClick:()=>o(),children:[!i&&v(Sm,{children:v(Cm,{src:Tm,alt:"aol mock graphic"})}),v("label",{htmlFor:"name",children:"Name:"}),v("input",{required:!0,id:"name",onChange:a=>e({name:a.target.value}),value:t}),v("label",{htmlFor:"email",children:"Email:"}),v("input",{required:!0,id:"email",onChange:a=>e({email:a.target.value}),value:n}),v("button",{type:"submit",children:"Play"})]})]})},cx=""+new URL("hp-clout-2cc94eb9.png",import.meta.url).href,dx=""+new URL("white-health-bar-2ce7d914.png",import.meta.url).href,m0=({health:t})=>{const e=P.useMemo(()=>t>0?`${46-6.5*(t-1)}%`:`${53+6.5*Math.abs(t)}%`,[t]);return v(_N,{children:oe(yN,{children:[v(vN,{src:cx,alt:"stat bar"}),v(wN,{src:dx,alt:"stat background"}),v(EN,{$left:e})]})})},hx=""+new URL("message-1b61b993.png",import.meta.url).href,fx=""+new URL("phone-f2fde0e2.png",import.meta.url).href,px=""+new URL("room-005b6ed8.jpg",import.meta.url).href,Am=""+new URL("sms-tone-58b1a562.mp3",import.meta.url).href,mx=""+new URL("big-drip-front-6601948a.png",import.meta.url).href,gx=""+new URL("steady-front-762c139a.png",import.meta.url).href,_x=[{src:mx,alt:"drippy outfit",health:-2},{src:gx,alt:"steady outfit",health:-1},{src:d0,alt:"original outfit",health:1}],yx=()=>{const t=P.useRef(null),{update:e,outfit:n,health:r}=P.useContext(fn),[i,s]=P.useState(!1),[o,a]=P.useState(null),l=()=>{e({health:2}),s(!0)},[u,c]=P.useState(!1);P.useEffect(()=>{setTimeout(()=>{n||t&&t.current&&t.current.play&&("vibrator"in navigator&&navigator.vibrate(500),t.current.play())},2e3),setTimeout(()=>{n||c(!0)},2500)},[]);const[d,h]=P.useState(!1),[g,_]=P.useState(!1),w=()=>{h(!0)},I=()=>{c(!1),h(!1),e({mission:"Get changed and head to the club"}),_(!0)},m=f=>{s(!1),a(f.health),e({outfit:f.src}),setTimeout(()=>{e({health:r+f.health,outfit:f.src}),a(null)},1e3)};return oe(Wn,{children:[v("audio",{ref:t,controls:!1,src:Am,children:v("track",{default:!0,kind:"captions",src:Am})}),o&&v(Bh,{healthChange:o}),n&&v(qa,{right:!0,onClick:()=>e({stage:Fe.OUTSIDE_CLUB,mission:null})}),u&&v(tx,{onClick:w,src:fx,alt:"message received"}),d&&v(p0,{src:hx,onClick:I,alt:"Yo what are you up to! Come whisky it's live"}),v(Fh,{src:px,alt:"home"}),v(zh,{}),g&&v(nx,{"data-testid":"cupboard",onClick:l,children:v(Ka,{})}),i&&v(JN,{children:_x.map(f=>v(ZN,{onClick:()=>m(f),src:f.src,alt:f.alt},f.src))})]})},vx=()=>{const{mission:t}=P.useContext(fn);return v(CN,{children:v(kN,{children:t})})},wx=""+new URL("inside-club-bc7db19a.jpg",import.meta.url).href,Ex=""+new URL("pop-up-inside-club-1-a72c2b1d.png",import.meta.url).href,Sx=""+new URL("pop-up-inside-club-2-711073c5.png",import.meta.url).href,Cx=""+new URL("pop-up-inside-club-3-4c140912.png",import.meta.url).href,Nm="@firebase/database",xm="1.0.4";/**
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
 */let g0="";function kx(t){g0=t}/**
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
 */class Ix{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Tx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const _0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ix(e)}}catch{}return new Tx},dr=_0("localStorage"),ed=_0("sessionStorage");/**
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
 */const di=new dh("@firebase/database"),Rx=function(){let t=1;return function(){return t++}}(),y0=function(t){const e=T1(t),n=new S1;n.update(e);const r=n.digest();return ah.encodeByteArray(r)},ho=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ho.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let yr=null,Pm=!0;const Ax=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(di.logLevel=G.VERBOSE,yr=di.log.bind(di),e&&ed.set("logging_enabled",!0)):typeof t=="function"?yr=t:(yr=null,ed.remove("logging_enabled"))},be=function(...t){if(Pm===!0&&(Pm=!1,yr===null&&ed.get("logging_enabled")===!0&&Ax(!0)),yr){const e=ho.apply(null,t);yr(e)}},fo=function(t){return function(...e){be(t,...e)}},td=function(...t){const e="FIREBASE INTERNAL ERROR: "+ho(...t);di.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${ho(...t)}`;throw di.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+ho(...t);di.warn(e)},Nx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},v0=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xi="[MIN_NAME]",Ar="[MAX_NAME]",$i=function(t,e){if(t===e)return 0;if(t===xi||e===Ar)return-1;if(e===xi||t===Ar)return 1;{const n=bm(t),r=bm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Px=function(t,e){return t===e?0:t<e?-1:1},ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},$h=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=$h(t[e[r]]);return n+="}",n},w0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const E0=function(t){R(!v0(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},bx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ox=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Dx=new RegExp("^-?(0*)\\d{1,10}$"),Lx=-2147483648,Mx=2147483647,bm=function(t){if(Dx.test(t)){const e=Number(t);if(e>=Lx&&e<=Mx)return e}return null},Wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ux=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Fx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hi.OWNER="owner";/**
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
 */const Wh="5",S0="v",C0="s",k0="r",I0="f",T0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,R0="ls",A0="p",nd="ac",N0="websocket",x0="long_polling";/**
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
 */class P0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Bx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function b0(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===N0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===x0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bx(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class $x{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return a1(this.counters_)}}/**
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
 */const bu={},Ou={};function Hh(t){const e=t.toString();return bu[e]||(bu[e]=new $x),bu[e]}function Wx(t,e){const n=t.toString();return Ou[n]||(Ou[n]=e()),Ou[n]}/**
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
 */class Hx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Om="start",jx="close",Vx="pLPCommand",Gx="pRTLPCB",O0="id",D0="pw",L0="ser",qx="cb",Kx="seg",Yx="ts",Qx="d",Xx="dframe",M0=1870,U0=30,Jx=M0-U0,Zx=25e3,eP=3e4;class ti{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fo(e),this.stats_=Hh(n),this.urlFn=l=>(this.appCheckToken&&(l[nd]=this.appCheckToken),b0(n,x0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Hx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eP)),xx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jh((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Om)this.id=a,this.password=l;else if(o===jx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Om]="t",r[L0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[S0]=Wh,this.transportSessionId&&(r[C0]=this.transportSessionId),this.lastSessionId&&(r[R0]=this.lastSessionId),this.applicationId&&(r[A0]=this.applicationId),this.appCheckToken&&(r[nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&T0.test(location.hostname)&&(r[k0]=I0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bx()&&!Ox()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Cy(n),i=w0(r,Jx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Xx]="t",r[O0]=e,r[D0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Rx(),window[Vx+this.uniqueCallbackIdentifier]=e,window[Gx+this.uniqueCallbackIdentifier]=n,this.myIFrame=jh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[O0]=this.myID,e[D0]=this.myPW,e[L0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U0+r.length<=M0;){const o=this.pendingSegs.shift();r=r+"&"+Kx+i+"="+o.seg+"&"+Yx+i+"="+o.ts+"&"+Qx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Zx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const tP=16384,nP=45e3;let Ya=null;typeof MozWebSocket<"u"?Ya=MozWebSocket:typeof WebSocket<"u"&&(Ya=WebSocket);class wt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fo(this.connId),this.stats_=Hh(n),this.connURL=wt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[S0]=Wh,typeof location<"u"&&location.hostname&&T0.test(location.hostname)&&(o[k0]=I0),n&&(o[C0]=n),r&&(o[R0]=r),i&&(o[nd]=i),s&&(o[A0]=s),b0(e,N0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let r;Py(),this.mySock=new Ya(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ya!==null&&!wt.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Gs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=w0(n,tP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
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
 */class Js{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ti,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const i=this.transports_=[];for(const s of Js.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Js.globalTransportInitialized_=!1;/**
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
 */const rP=6e4,iP=5e3,sP=10*1024,oP=100*1024,Du="t",Dm="d",aP="s",Lm="r",lP="e",Mm="o",Um="a",Fm="n",zm="p",uP="h";class cP{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fo("c:"+this.id+":"),this.transportManager_=new Js(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Du in e){const n=e[Du];n===Um?this.upgradeIfSecondaryHealthy_():n===Lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),r=ts("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(Du,e);if(Dm in e){const r=e[Dm];if(n===uP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aP?this.onConnectionShutdown_(r):n===Lm?this.onReset_(r):n===lP?td("Server Error: "+r):n===Mm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):td("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wh!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class F0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class z0{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qa extends z0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qa}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Bm=32,$m=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new re("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function B0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function W0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function ut(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return ut(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function H0(t,e){if(Gn(t)!==Gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Et(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gn(t)>Gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hP{constructor(e,n){this.errorPrefix_=n,this.parts_=$0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=wl(this.parts_[r]);j0(this)}}function fP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wl(e),j0(t)}function pP(t){const e=t.parts_.pop();t.byteLength_-=wl(e),t.parts_.length>0&&(t.byteLength_-=1)}function j0(t){if(t.byteLength_>$m)throw new Error(t.errorPrefix_+"has a key path longer than "+$m+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bm+") or object contains a cycle "+or(t))}function or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Vh extends z0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vh}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ns=1e3,mP=60*5*1e3,Wm=30*1e3,gP=1.3,_P=3e4,yP="server_kill",Hm=3;class en extends F0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=en.nextPersistentConnectionId_++,this.log_=fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=mP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Py())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new vl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;en.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const r=Ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||E1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=w1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):td("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_P&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+en.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new cP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Xe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yP)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Xe(d),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dc(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>$h(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hm&&(this.reconnectDelay_=Wm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+g0.replace(/\./g,"-")]=1,uh()?e["framework.cordova"]=1:xy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qa.getInstance().currentlyOnline();return Dc(this.interruptReasons_)&&e}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(xi,e),i=new $(xi,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
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
 */let $o;class V0 extends Ul{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,n){return $i(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Ar,$o)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,$o)}toString(){return".key"}}const fi=new V0;/**
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
 */class Wo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class vP{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wo(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new vP;/**
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
 */function wP(t,e){return $i(t.name,e.name)}function Gh(t,e){return $i(t,e)}/**
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
 */let rd;function EP(t){rd=t}const G0=function(t){return typeof t=="number"?"number:"+E0(t):"string:"+t},q0=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else R(t===rd||t.isEmpty(),"priority of unexpected type.");R(t===rd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jm;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q0(this.priorityNode_)}static set __childrenNodeConstructor(e){jm=e}static get __childrenNodeConstructor(){return jm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:U(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=E0(this.value_):e+=this.value_,this.lazyHash_=y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let K0,Y0;function SP(t){K0=t}function CP(t){Y0=t}class kP extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?$i(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Ar,new ye("[PRIORITY-POST]",Y0))}makePost(e,n){const r=K0(e);return new $(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Oe=new kP;/**
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
 */const IP=Math.log(2);class TP{constructor(e){const n=s=>parseInt(Math.log(s)/IP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xa=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new Ee(h,d.node,Ee.BLACK,null,null);{const g=parseInt(c/2,10)+l,_=i(l,g),w=i(g+1,u);return d=t[g],h=n?n(d):d,new Ee(h,d.node,Ee.BLACK,_,w)}},s=function(l){let u=null,c=null,d=t.length;const h=function(_,w){const I=d-_,m=d;d-=_;const f=i(I+1,m),p=t[I],y=n?n(p):p;g(new Ee(y,p.node,w,null,f))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));w?h(I,Ee.BLACK):(h(I,Ee.BLACK),h(I,Ee.RED))}return c},o=new TP(t.length),a=s(o);return new qe(r||e,a)};/**
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
 */let Lu;const Br={};class Jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Br&&Oe,"ChildrenNode.ts has not been loaded"),Lu=Lu||new Jt({".priority":Br},{".priority":Oe}),Lu}get(e){const n=Ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Xa(r,e.getCompare()):a=Br;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Jt(c,u)}addToIndexes(e,n){const r=Ma(this.indexes_,(i,s)=>{const o=Ei(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Br)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator($.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xa(a,o.getCompare())}else return Br;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new $(e.name,a))),l.insert(e,e.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ma(this.indexes_,i=>{if(i===Br)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let rs;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&q0(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rs||(rs=new j(new qe(Gh),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?rs:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{R(U(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G0(this.getPriority().val())+":"),this.forEachChild(Oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":y0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Oe),i=n.getIterator(Oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RP extends j{constructor(){super(new qe(Gh),j.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const po=new RP;Object.defineProperties($,{MIN:{value:new $(xi,j.EMPTY_NODE)},MAX:{value:new $(Ar,po)}});V0.__EMPTY_NODE=j.EMPTY_NODE;ye.__childrenNodeConstructor=j;EP(po);CP(po);/**
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
 */const AP=!0;function Ie(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ie(e))}if(!(t instanceof Array)&&AP){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new $(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Xa(n,wP,o=>o.name,Gh);if(r){const o=Xa(n,Oe.getCompare());return new j(s,Ie(e),new Jt({".priority":o},{".priority":Oe}))}else return new j(s,Ie(e),Jt.Default)}else{let n=j.EMPTY_NODE;return pt(t,(r,i)=>{if(dn(t,r)&&r.substring(0,1)!=="."){const s=Ie(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ie(e))}}SP(Ie);/**
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
 */class NP extends Ul{constructor(e){super(),this.indexPath_=e,R(!z(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?$i(e.name,n.name):s}makePost(e,n){const r=Ie(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,po);return new $(Ar,e)}toString(){return $0(this.indexPath_,0).join("/")}}/**
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
 */class xP extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?$i(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=Ie(e);return new $(n,r)}toString(){return".value"}}const PP=new xP;/**
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
 */function bP(t){return{type:"value",snapshotNode:t}}function OP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function DP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class qh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xi}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new qh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===PP?n="$value":t.index_===fi?n="$key":(R(t.index_ instanceof NP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
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
 */class Ja extends F0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=fo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ja.getListenId_(e,r),a={};this.listens_[o]=a;const l=Gm(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ei(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ja.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gm(e._queryParams),r=e._path.toString(),i=new vl;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gs(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class MP{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Za(){return{value:null,children:new Map}}function Q0(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Za());const i=t.children.get(r);e=ee(e),Q0(i,e,n)}}function id(t,e,n){t.value!==null?n(e,t.value):UP(t,(r,i)=>{const s=new re(e.toString()+"/"+r);id(i,s,n)})}function UP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class FP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Km=10*1e3,zP=30*1e3,BP=5*60*1e3;class $P{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FP(e);const r=Km+(zP-Km)*Math.random();ks(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&dn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*BP))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function X0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function J0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Z0(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class el{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=X0()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new el(q(),n,this.revert)}}else return R(U(this.path)===e,"operationForChild called for unrelated child."),new el(ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class Nr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(e){return z(this.path)?new Nr(this.source,q(),this.snap.getImmediateChild(e)):new Nr(this.source,ee(this.path),this.snap)}}/**
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
 */class Zs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new Nr(this.source,q(),n.value):new Zs(this.source,q(),n)}else return R(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Kh{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LP(o.childName,o.snapshotNode))}),is(t,i,"child_removed",e,r,n),is(t,i,"child_added",e,r,n),is(t,i,"child_moved",s,r,n),is(t,i,"child_changed",e,r,n),is(t,i,"value",e,r,n),i}function is(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>jP(t,a,l)),o.forEach(a=>{const l=HP(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function HP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jP(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ew(t,e){return{eventCache:t,serverCache:e}}function Is(t,e,n,r){return ew(new Kh(e,n,r),t.serverCache)}function tw(t,e,n,r){return ew(t.eventCache,new Kh(e,n,r))}function sd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mu;const VP=()=>(Mu||(Mu=new qe(Px)),Mu);class Z{constructor(e,n=VP()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return pt(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(z(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ee(e),n);return s!=null?{path:ge(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(z(e))return new Z(n,this.children);{const r=U(e),s=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(z(e))return n;{const r=U(e),s=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(ee(e),ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(ee(e),ge(n,i),r):new Z(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new Z(null))}}function Ts(t,e,n){if(z(e))return new It(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ut(i,e);return s=s.updateChild(o,n),new It(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new It(s)}}}function Ym(t,e,n){let r=t;return pt(n,(i,s)=>{r=Ts(r,ge(e,i),s)}),r}function Qm(t,e){if(z(e))return It.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new It(n)}}function od(t,e){return Lr(t,e)!=null}function Lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ut(n.path,e)):null}function Xm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function $n(t,e){if(z(e))return t;{const n=Lr(t,e);return n!=null?new It(new Z(n)):new It(t.writeTree_.subtree(e))}}function ad(t){return t.writeTree_.isEmpty()}function Pi(t,e){return nw(q(),t.writeTree_,e)}function nw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=nw(ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ge(t,".priority"),r)),n}}/**
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
 */function rw(t,e){return lw(e,t)}function GP(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ts(t.visibleWrites,e,n)),t.lastWriteId=r}function qP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function KP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YP(a,r.path)?i=!1:Et(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return QP(t),!0;if(r.snap)t.visibleWrites=Qm(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=Qm(t.visibleWrites,ge(r.path,l))})}return!0}else return!1}function YP(t,e){if(t.snap)return Et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Et(ge(t.path,n),e))return!0;return!1}function QP(t){t.visibleWrites=iw(t.allWrites,XP,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XP(t){return t.visible}function iw(t,e,n){let r=It.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Et(n,o)?(a=ut(n,o),r=Ts(r,a,s.snap)):Et(o,n)&&(a=ut(o,n),r=Ts(r,q(),s.snap.getChild(a)));else if(s.children){if(Et(n,o))a=ut(n,o),r=Ym(r,a,s.children);else if(Et(o,n))if(a=ut(o,n),z(a))r=Ym(r,q(),s.children);else{const l=Ei(s.children,U(a));if(l){const u=l.getChild(ee(a));r=Ts(r,q(),u)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function sw(t,e,n,r,i){if(!r&&!i){const s=Lr(t.visibleWrites,e);if(s!=null)return s;{const o=$n(t.visibleWrites,e);if(ad(o))return n;if(n==null&&!od(o,q()))return null;{const a=n||j.EMPTY_NODE;return Pi(o,a)}}}else{const s=$n(t.visibleWrites,e);if(!i&&ad(s))return n;if(!i&&n==null&&!od(s,q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Et(u.path,e)||Et(e,u.path))},a=iw(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Pi(a,l)}}}function JP(t,e,n){let r=j.EMPTY_NODE;const i=Lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$n(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=Pi($n(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),Xm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$n(t.visibleWrites,e);return Xm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZP(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(od(t.visibleWrites,s))return null;{const o=$n(t.visibleWrites,s);return ad(o)?i.getChild(n):Pi(o,i.getChild(n))}}function eb(t,e,n,r){const i=ge(e,n),s=Lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$n(t.visibleWrites,i);return Pi(o,r.getNode().getImmediateChild(n))}else return null}function tb(t,e){return Lr(t.visibleWrites,e)}function nb(t,e,n,r,i,s,o){let a;const l=$n(t.visibleWrites,e),u=Lr(l,q());if(u!=null)a=u;else if(n!=null)a=Pi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function rb(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function ld(t,e,n,r){return sw(t.writeTree,t.treePath,e,n,r)}function ow(t,e){return JP(t.writeTree,t.treePath,e)}function Jm(t,e,n,r){return ZP(t.writeTree,t.treePath,e,n,r)}function tl(t,e){return tb(t.writeTree,ge(t.treePath,e))}function ib(t,e,n,r,i,s){return nb(t.writeTree,t.treePath,e,n,r,i,s)}function Yh(t,e,n){return eb(t.writeTree,t.treePath,e,n)}function aw(t,e){return lw(ge(t.treePath,e),t.writeTree)}function lw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class sb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Vm(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,DP(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,OP(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Vm(r,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ob{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uw=new ob;class Qh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),s=ib(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function ab(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lb(t,e,n,r,i){const s=new sb;let o,a;if(n.type===Dt.OVERWRITE){const u=n;u.source.fromUser?o=ud(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=nl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Dt.MERGE){const u=n;u.source.fromUser?o=cb(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=cd(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Dt.ACK_USER_WRITE){const u=n;u.revert?o=fb(t,e,u.path,r,i,s):o=db(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Dt.LISTEN_COMPLETE)o=hb(t,e,n.path,r,s);else throw Li("Unknown operation type: "+n.type);const l=s.getChanges();return ub(e,o,l),{viewCache:o,changes:l}}function ub(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(bP(sd(e)))}}function cw(t,e,n,r,i,s){const o=e.eventCache;if(tl(r,n)!=null)return e;{let a,l;if(z(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),c=u instanceof j?u:j.EMPTY_NODE,d=ow(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=ld(r,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){R(Gn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Jm(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ee(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Jm(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Yh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Is(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function nl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=U(n);if(!l.isCompleteForPath(n)&&Gn(n)>1)return e;const _=ee(n),I=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(l.getNode(),I):u=c.updateChild(l.getNode(),g,I,_,uw,null)}const d=tw(e,u,l.isFullyInitialized()||z(n),c.filtersNodes()),h=new Qh(i,d,s);return cw(t,d,n,i,h,a)}function ud(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Qh(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Is(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Is(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ee(n),g=a.getNode().getImmediateChild(d);let _;if(z(h))_=r;else{const w=c.getCompleteChild(d);w!=null?B0(h)===".priority"&&w.getChild(W0(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=j.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),d,_,h,c,o);l=Is(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Zm(t,e){return t.eventCache.isCompleteForChild(e)}function cb(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ge(n,l);Zm(e,U(c))&&(a=ud(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ge(n,l);Zm(e,U(c))||(a=ud(t,a,c,u,i,s,o))}),a}function eg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function cd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;z(n)?u=r:u=new Z(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=eg(t,g,h);l=nl(t,l,new re(d),_,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),w=eg(t,_,h);l=nl(t,l,new re(d),w,i,s,o,a)}}),l}function db(t,e,n,r,i,s,o){if(tl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let u=new Z(null);return l.getNode().forEachChild(fi,(c,d)=>{u=u.set(new re(c),d)}),cd(t,e,n,u,i,s,a,o)}else return e}else{let u=new Z(null);return r.foreach((c,d)=>{const h=ge(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),cd(t,e,n,u,i,s,a,o)}}function hb(t,e,n,r,i){const s=e.serverCache,o=tw(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return cw(t,o,n,r,uw,i)}function fb(t,e,n,r,i,s){let o;if(tl(r,n)!=null)return e;{const a=new Qh(r,e,i),l=e.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ld(r,xr(e));else{const d=e.serverCache.getNode();R(d instanceof j,"serverChildren would be complete if leaf node"),c=ow(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=U(n);let d=Yh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ee(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,j.EMPTY_NODE,ee(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ld(r,xr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||tl(r,q())!=null,Is(e,u,o,t.filter.filtersNodes())}}function pb(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function tg(t,e,n,r){e.type===Dt.MERGE&&e.source.queryId!==null&&(R(xr(t.viewCache_),"We should always have a full cache before handling merges"),R(sd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=lb(t.processor_,i,e,n,r);return ab(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return WP(t.eventGenerator_,e,n,i)}/**
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
 */let ng;function gb(t){R(!ng,"__referenceConstructor has already been defined"),ng=t}function Xh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),tg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tg(o,e,n,r));return s}}function Jh(t,e){let n=null;for(const r of t.views.values())n=n||pb(r,e);return n}/**
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
 */let rg;function _b(t){R(!rg,"__referenceConstructor has already been defined"),rg=t}class ig{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=rb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dw(t,e,n,r,i){return GP(t.pendingWriteTree_,e,n,r,i),i?zl(t,new Nr(X0(),e,n)):[]}function hr(t,e,n=!1){const r=qP(t.pendingWriteTree_,e);if(KP(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(q(),!0):pt(r.children,o=>{s=s.set(new re(o),!0)}),zl(t,new el(r.path,s,n))}else return[]}function Fl(t,e,n){return zl(t,new Nr(J0(),e,n))}function yb(t,e,n){const r=Z.fromObject(n);return zl(t,new Zs(J0(),e,r))}function vb(t,e,n,r){const i=pw(t,r);if(i!=null){const s=mw(i),o=s.path,a=s.queryId,l=ut(o,e),u=new Nr(Z0(a),l,n);return gw(t,o,u)}else return[]}function wb(t,e,n,r){const i=pw(t,r);if(i){const s=mw(i),o=s.path,a=s.queryId,l=ut(o,e),u=Z.fromObject(n),c=new Zs(Z0(a),l,u);return gw(t,o,c)}else return[]}function Zh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ut(o,e),u=Jh(a,l);if(u)return u});return sw(i,e,s,n,!0)}function zl(t,e){return hw(e,t.syncPointTree_,null,rw(t.pendingWriteTree_,q()))}function hw(t,e,n,r){if(z(t.path))return fw(t,e,n,r);{const i=e.get(q());n==null&&i!=null&&(n=Jh(i,q()));let s=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=aw(r,o);s=s.concat(hw(a,l,u,c))}return i&&(s=s.concat(Xh(i,t,r,n))),s}}function fw(t,e,n,r){const i=e.get(q());n==null&&i!=null&&(n=Jh(i,q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=aw(r,o),c=t.operationForChild(o);c&&(s=s.concat(fw(c,a,l,u)))}),i&&(s=s.concat(Xh(i,t,r,n))),s}function pw(t,e){return t.tagToQueryMap.get(e)}function mw(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function gw(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=rw(t.pendingWriteTree_,e);return Xh(r,n,i,null)}/**
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
 */class ef{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ef(n)}node(){return this.node_}}class tf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new tf(this.syncTree_,n)}node(){return Zh(this.syncTree_,this.path_)}}const Eb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sg=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Sb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Cb(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Sb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},Cb=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},kb=function(t,e,n,r){return nf(e,new tf(n,t),r)},_w=function(t,e,n){return nf(t,new ef(e),n)};function nf(t,e,n){const r=t.getPriority().val(),i=sg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,Ie(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(Oe,(a,l)=>{const u=nf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class rf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sf(t,e){let n=e instanceof re?e:new re(e),r=t,i=U(n);for(;i!==null;){const s=Ei(r.node.children,i)||{children:{},childCount:0};r=new rf(i,r,s),n=ee(n),i=U(n)}return r}function Hi(t){return t.node.value}function yw(t,e){t.node.value=e,dd(t)}function vw(t){return t.node.childCount>0}function Ib(t){return Hi(t)===void 0&&!vw(t)}function Bl(t,e){pt(t.node.children,(n,r)=>{e(new rf(n,t,r))})}function ww(t,e,n,r){n&&!r&&e(t),Bl(t,i=>{ww(i,e,!0,r)}),n&&r&&e(t)}function Tb(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mo(t){return new re(t.parent===null?t.name:mo(t.parent)+"/"+t.name)}function dd(t){t.parent!==null&&Rb(t.parent,t.name,t)}function Rb(t,e,n){const r=Ib(n),i=dn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,dd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,dd(t))}/**
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
 */const Ab=/[\[\].#$\/\u0000-\u001F\u007F]/,Nb=/[\[\].#$\u0000-\u001F\u007F]/,Uu=10*1024*1024,Ew=function(t){return typeof t=="string"&&t.length!==0&&!Ab.test(t)},Sw=function(t){return typeof t=="string"&&t.length!==0&&!Nb.test(t)},xb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Sw(t)},Pb=function(t,e,n,r){r&&e===void 0||of(ch(t,"value"),e,n)},of=function(t,e,n){const r=n instanceof re?new hP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+or(r));if(typeof e=="function")throw new Error(t+"contains a function "+or(r)+" with contents = "+e.toString());if(v0(e))throw new Error(t+"contains "+e.toString()+" "+or(r));if(typeof e=="string"&&e.length>Uu/3&&wl(e)>Uu)throw new Error(t+"contains a string greater than "+Uu+" utf8 bytes "+or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ew(o)))throw new Error(t+" contains an invalid key ("+o+") "+or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fP(r,o),of(t,a,r),pP(r)}),i&&s)throw new Error(t+' contains ".value" child '+or(r)+" in addition to actual children.")}},Cw=function(t,e,n,r){if(!(r&&n===void 0)&&!Sw(n))throw new Error(ch(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cw(t,e,n,r)},Ob=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Db=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ew(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xb(n))throw new Error(ch(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Lb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kw(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!H0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ln(t,e,n){kw(t,n),Mb(t,r=>Et(r,e)||Et(e,r))}function Mb(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Ub(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ub(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();yr&&be("event: "+n.toString()),Wi(r)}}}/**
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
 */const Fb="repo_interrupt",zb=25;class Bb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Za(),this.transactionQueueTree_=new rf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $b(t,e,n){if(t.stats_=Hh(t.repoInfo_),t.forceRestClient_||Ux())t.server_=new Ja(t.repoInfo_,(r,i,s,o)=>{og(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ag(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new en(t.repoInfo_,e,(r,i,s,o)=>{og(t,r,i,s,o)},r=>{ag(t,r)},r=>{Hb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Wx(t.repoInfo_,()=>new $P(t.stats_,t.server_)),t.infoData_=new MP,t.infoSyncTree_=new ig({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Fl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),lf(t,"connected",!1),t.serverSyncTree_=new ig({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ln(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Wb(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function af(t){return Eb({timestamp:Wb(t)})}function og(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ma(n,u=>Ie(u));o=wb(t.serverSyncTree_,s,l,i)}else{const l=Ie(n);o=vb(t.serverSyncTree_,s,l,i)}else if(r){const l=Ma(n,u=>Ie(u));o=yb(t.serverSyncTree_,s,l)}else{const l=Ie(n);o=Fl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=$l(t,s)),ln(t.eventQueue_,a,o)}function ag(t,e){lf(t,"connected",e),e===!1&&Vb(t)}function Hb(t,e){pt(e,(n,r)=>{lf(t,n,r)})}function lf(t,e,n){const r=new re("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(r,i);const s=Fl(t.infoSyncTree_,r,i);ln(t.eventQueue_,r,s)}function Iw(t){return t.nextWriteId_++}function jb(t,e,n,r,i){uf(t,"set",{path:e.toString(),value:n,priority:r});const s=af(t),o=Ie(n,r),a=Zh(t.serverSyncTree_,e),l=_w(o,a,s),u=Iw(t),c=dw(t.serverSyncTree_,e,l,u,!0);kw(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Xe("set at "+e+" failed: "+h);const w=hr(t.serverSyncTree_,u,!_);ln(t.eventQueue_,e,w),qb(t,i,h,g)});const d=xw(t,e);$l(t,d),ln(t.eventQueue_,d,[])}function Vb(t){uf(t,"onDisconnectEvents");const e=af(t),n=Za();id(t.onDisconnect_,q(),(i,s)=>{const o=kb(i,s,t.serverSyncTree_,e);Q0(n,i,o)});let r=[];id(n,q(),(i,s)=>{r=r.concat(Fl(t.serverSyncTree_,i,s));const o=xw(t,i);$l(t,o)}),t.onDisconnect_=Za(),ln(t.eventQueue_,q(),r)}function Gb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Fb)}function uf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function qb(t,e,n,r){e&&Wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Tw(t,e,n){return Zh(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function cf(t,e=t.transactionQueueTree_){if(e||Wl(t,e),Hi(e)){const n=Aw(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Kb(t,mo(e),n)}else vw(e)&&Bl(e,n=>{cf(t,n)})}function Kb(t,e,n){const r=n.map(u=>u.currentWriteId),i=Tw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ut(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{uf(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(hr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Wl(t,sf(t.transactionQueueTree_,e)),cf(t,t.transactionQueueTree_),ln(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Wi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Xe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}$l(t,e)}},o)}function $l(t,e){const n=Rw(t,e),r=mo(n),i=Aw(t,n);return Yb(t,i,r),r}function Yb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ut(n,l.path);let c=!1,d;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=zb)c=!0,d="maxretry",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Tw(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){of("transaction failed: Data returned ",g,l.path);let _=Ie(g);typeof g=="object"&&g!=null&&dn(g,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,m=af(t),f=_w(_,h,m);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=f,l.currentWriteId=Iw(t),o.splice(o.indexOf(I),1),i=i.concat(dw(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(hr(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(hr(t.serverSyncTree_,l.currentWriteId,!0))}ln(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Wl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Wi(r[a]);cf(t,t.transactionQueueTree_)}function Rw(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Hi(r)===void 0;)r=sf(r,n),e=ee(e),n=U(e);return r}function Aw(t,e){const n=[];return Nw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Nw(t,e,n){const r=Hi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Bl(e,i=>{Nw(t,i,n)})}function Wl(t,e){const n=Hi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yw(e,n.length>0?n:void 0)}Bl(e,r=>{Wl(t,r)})}function xw(t,e){const n=mo(Rw(t,e)),r=sf(t.transactionQueueTree_,e);return Tb(r,i=>{Fu(t,i)}),Fu(t,r),ww(r,i=>{Fu(t,i)}),n}function Fu(t,e){const n=Hi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yw(e,void 0):n.length=s+1,ln(t.eventQueue_,mo(e),i);for(let o=0;o<r.length;o++)Wi(r[o])}}/**
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
 */function Qb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Xb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const lg=function(t,e){const n=Jb(t),r=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Nx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new P0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},Jb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Qb(t.substring(c,d)));const h=Xb(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class df{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:B0(this._path)}get ref(){return new Mr(this._repo,this._path)}get _queryIdentifier(){const e=qm(this._queryParams),n=$h(e);return n==="{}"?"default":n}get _queryObject(){return qm(this._queryParams)}isEqual(e){if(e=he(e),!(e instanceof df))return!1;const n=this._repo===e._repo,r=H0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dP(this._path)}}class Mr extends df{constructor(e,n){super(e,n,new qh,!1)}get parent(){const e=W0(this._path);return e===null?null:new Mr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Zb(t,e){return t=he(t),t._checkNotDeleted("ref"),e!==void 0?eO(t._root,e):t._root}function eO(t,e){return t=he(t),U(t._path)===null?bb("child","path",e,!1):Cw("child","path",e,!1),new Mr(t._repo,ge(t._path,e))}function tO(t,e){t=he(t),Ob("set",t._path),Pb("set",e,t._path,!1);const n=new vl;return jb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}gb(Mr);_b(Mr);/**
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
 */const nO="FIREBASE_DATABASE_EMULATOR_HOST",hd={};let rO=!1;function iO(t,e,n,r){t.repoInfo_=new P0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function sO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lg(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[nO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=lg(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new hi(hi.OWNER):new zx(t.name,t.options,e);Db("Invalid Firebase Database URL",o),z(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const d=aO(a,t,c,new Fx(t.name,n));return new lO(d,t)}function oO(t,e){const n=hd[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Gb(t),delete n[t.key]}function aO(t,e,n,r){let i=hd[e.name];i||(i={},hd[e.name]=i);let s=i[t.toURLString()];return s&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Bb(t,rO,n,r),i[t.toURLString()]=s,s}class lO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($b(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mr(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function uO(t=fh(),e){const n=El(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ty("database");r&&cO(n,...r)}return n}function cO(t,e,n,r={}){t=he(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&an("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&an('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new hi(hi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ny(r.mockUserToken,t.app.options.projectId);s=new hi(o)}iO(i,e,n,s)}/**
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
 */function dO(t){kx(Or),Ir(new Vn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return sO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ut(Nm,xm,t),Ut(Nm,xm,"esm2017")}en.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};en.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dO();const hO=uO(Nh),fO=async(t,e)=>{await tO(Zb(hO,"users/"+t),e)},pO=()=>(Math.floor(Math.random()*9999)+1).toString().padStart(4,"0"),mO=()=>{const{health:t,update:e,raffleNumber:n,id:r,email:i,name:s}=P.useContext(fn),o=n||pO();P.useEffect(()=>{localStorage.setItem("raffleNumber",`${o}`),e({raffleNumber:o}),(async()=>{r&&await fO(r,{email:i,name:s,raffleNumber:o})})()},[]);const a=t>0,{title:l,subtitle:u}=P.useMemo(()=>a?{title:"Congrats",subtitle:"You made some good decisions"}:{title:"Game over",subtitle:"Ouch! The DJ's think you're doing too much, your night ends here"},[t]);return v(ON,{children:oe(DN,{children:[v(m0,{health:t}),v(LN,{$win:a,children:l}),v(MN,{children:u}),a&&oe(UN,{children:[v(FN,{children:o}),v(zN,{src:c0,alt:"raffle ticket"})]}),v(BN,{onClick:()=>{e(Uh)},children:"Restart"})]})})},gO=()=>{const{update:t,health:e,hasCompletedClub:n,mission:r}=P.useContext(fn),[i,s]=P.useState(!1),[o,a]=P.useState(!1),[l,u]=P.useState(null);P.useEffect(()=>{if(n){t({mission:"Talk to the DJ's try to get back stage"});return}else t({mission:"Chat to your friend E"})},[]);const c=()=>s(!1);return oe(Wn,{children:[o&&v(mO,{}),l&&v(Bh,{healthChange:l}),r==="Chat to your friend E"&&v($N,{onClick:()=>s(!0),children:v(Ka,{})}),n&&v(bN,{onClick:()=>{t({mission:null}),a(!0)},children:v(Ka,{})}),i&&v(f0,{popUps:[Ex,Sx,Cx],onFirstOptionClick:()=>{c(),u(-2),setTimeout(()=>{t({health:e-2,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)},onSecondOptionClick:()=>{c(),u(1),setTimeout(()=>{t({health:e+1,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)},onThirdOptionClick:()=>{c(),u(-1),setTimeout(()=>{t({health:e-1,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)}}),v(qa,{right:!1,onClick:()=>t({stage:Fe.OUTSIDE_CLUB,mission:null})}),v(Fh,{src:wx,alt:"club"}),v(zh,{})]})},_O=()=>{const{health:t,stage:e,mission:n}=P.useContext(fn);return v(aN,{children:v(lN,{children:v(uN,{children:oe(cN,{children:[e===Fe.LOGIN&&v(ux,{}),e===Fe.OUTSIDE_CLUB&&v(rx,{}),e===Fe.INSIDE_CLUB&&v(gO,{}),e===Fe.HOME&&v(yx,{}),e!==Fe.LOGIN&&v(m0,{health:t}),n&&e!==Fe.LOGIN&&v(vx,{})]})})})})},yO=()=>v(tN,{children:v(_O,{})}),vO=P.lazy(()=>IR(()=>import("./index-69edae4f.js"),[],import.meta.url)),wO=({files:t})=>{const[e,n]=P.useState(null),[r,i]=P.useState(0),s=P.useContext(Mv),[o,a]=P.useState(ym());P.useEffect(()=>{const c=wm(t,o);n(c)},[]),P.useEffect(()=>{const c=()=>{const d=ym();a(d)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),P.useEffect(()=>{if(!e)return;const c=wm(e.flat(),o);n(c)},[o]);const l=()=>{i(0),xh.signOut()};if(r>=10&&!s)return v(HA,{});const u=localStorage.getItem("raffleNumber");return oe(Wn,{children:[u&&v(WA,{raffleNumber:u}),v(eN,{onTitleClick:()=>i(r+1)}),s&&oe("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[v(UA,{onUpload:c=>{if(!e){n([[c]]);return}const d=e[e.length-1];n([...e.slice(0,-1),[...d,c]])}}),v("button",{onClick:l,children:"Log out"})]}),s&&v(yO,{}),v(bA,{children:v(OA,{children:e&&e.map(c=>v(DA,{children:c.map(d=>v(P.Suspense,{fallback:v(xA,{}),children:v(vO,{content:d,onDelete:h=>{const g=e.map(_=>_.filter(w=>w!==h));n(g)}})},d.downloadUrl))},c[0].downloadUrl))})})]})},EO=T.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`,SO=T.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`,CO=T.img`
  width: 100%;
  opacity: ${({$show:t})=>t?1:0};
`,ug=""+new URL("A-967cb442.png",import.meta.url).href,cg=""+new URL("C-3c3e16d1.png",import.meta.url).href,dg=""+new URL("W-17eb2e7f.png",import.meta.url).href,hg=""+new URL("Y-967b8d34.png",import.meta.url).href,kO=({onEnded:t})=>{const[i,s]=P.useState([ug,dg,cg,hg]),[o,a]=P.useState(!1),[l,u]=P.useState(0);return P.useEffect(()=>{const c=setTimeout(()=>{t()},4500);return()=>clearTimeout(c)},[]),P.useEffect(()=>{const c=setInterval(()=>{u(d=>(d+1)%4)},500);return setTimeout(()=>{s([ug,dg,cg,hg]),a(!0),clearInterval(c)},4e3),()=>clearInterval(c)},[]),v(EO,{children:v(SO,{children:[0,1,2,3].map(c=>{const d=o?c:(l+c)%4;return v(CO,{$show:!0,src:i[d],alt:`loading computer ${c}`},c)})})})},IO=()=>{const[t,e]=P.useState(null);P.useEffect(()=>{(async()=>{const s=await SR();e(s)})()},[]);const[n,r]=P.useState(!1);return!t||!n?v(kO,{onEnded:()=>r(!0)}):v(wO,{files:t})},TO=()=>v(TR,{children:v(IO,{})});zu.createRoot(document.getElementById("root")).render(v(TO,{}));export{RA as A,LO as B,MO as C,xO as D,OO as E,Wn as F,UO as M,PO as P,AA as S,Mv as U,v as a,bO as b,FO as c,RO as d,DO as e,oe as j,NO as p,P as r,AO as u};
