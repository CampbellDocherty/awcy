(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Si={},n0={get exports(){return Si},set exports(e){Si=e}},Ns={},A={},r0={get exports(){return A},set exports(e){A=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),i0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),s0=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),h0=Symbol.for("react.lazy"),Uc=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ih=Object.assign,oh={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sh(){}sh.prototype=Mr.prototype;function fu(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}var hu=fu.prototype=new sh;hu.constructor=fu;ih(hu,Mr.prototype);hu.isPureReactComponent=!0;var Mc=Array.isArray,ah=Object.prototype.hasOwnProperty,pu={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ah.call(t,r)&&!lh.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vi,type:e,key:o,ref:s,props:i,_owner:pu.current}}function m0(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function g0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fc=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g0(""+e.key):t.toString(36)}function xo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vi:case i0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+da(s,0):r,Mc(i)?(n="",e!=null&&(n=e.replace(Fc,"$&/")+"/"),xo(i,t,n,"",function(u){return u})):i!=null&&(mu(i)&&(i=m0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Fc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Mc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+da(o,a);s+=xo(o,t,n,l,i)}else if(l=p0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+da(o,a++),s+=xo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function oo(e,t,n){if(e==null)return e;var r=[],i=0;return xo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function y0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Po={transition:null},v0={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Po,ReactCurrentOwner:pu};U.Children={map:oo,forEach:function(e,t,n){oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oo(e,function(){t++}),t},toArray:function(e){return oo(e,function(t){return t})||[]},only:function(e){if(!mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Mr;U.Fragment=o0;U.Profiler=a0;U.PureComponent=fu;U.StrictMode=s0;U.Suspense=d0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ih({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ah.call(t,l)&&!lh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:u0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};U.createElement=uh;U.createFactory=function(e){var t=uh.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:c0,render:e}};U.isValidElement=mu;U.lazy=function(e){return{$$typeof:h0,_payload:{_status:-1,_result:e},_init:y0}};U.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Ie.current.useCallback(e,t)};U.useContext=function(e){return Ie.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ie.current.useEffect(e,t)};U.useId=function(){return Ie.current.useId()};U.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ie.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};U.useRef=function(e){return Ie.current.useRef(e)};U.useState=function(e){return Ie.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ie.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(r0);const ki=t0(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=A,w0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),k0=Object.prototype.hasOwnProperty,E0=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)k0.call(t,r)&&!I0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w0,type:e,key:o,ref:s,props:i,_owner:E0.current}}Ns.Fragment=S0;Ns.jsx=ch;Ns.jsxs=ch;(function(e){e.exports=Ns})(n0);const dn=Si.Fragment,_=Si.jsx,X=Si.jsxs;var Ja={},Za={},C0={get exports(){return Za},set exports(e){Za=e}},ze={},el={},T0={get exports(){return el},set exports(e){el=e}},dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var b=T.length;T.push(O);e:for(;0<b;){var B=b-1>>>1,j=T[B];if(0<i(j,O))T[B]=O,T[b]=j,b=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],b=T.pop();if(b!==O){T[0]=b;e:for(var B=0,j=T.length,kn=j>>>1;B<kn;){var Ke=2*(B+1)-1,Ut=T[Ke],Le=Ke+1,gt=T[Le];if(0>i(Ut,b))Le<j&&0>i(gt,Ut)?(T[B]=gt,T[Le]=b,B=Le):(T[B]=Ut,T[Ke]=b,B=Ke);else if(Le<j&&0>i(gt,b))T[B]=gt,T[Le]=b,B=Le;else break e}}return O}function i(T,O){var b=T.sortIndex-O.sortIndex;return b!==0?b:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,g=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(T){if(w=!1,h(T),!v)if(n(l)!==null)v=!0,Vr(E);else{var O=n(u);O!==null&&Sn(y,O.startTime-T)}}function E(T,O){v=!1,w&&(w=!1,p(C),C=-1),g=!0;var b=m;try{for(h(O),f=n(l);f!==null&&(!(f.expirationTime>O)||T&&!be());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var j=B(f.expirationTime<=O);O=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&r(l),h(O)}else r(l);f=n(l)}if(f!==null)var kn=!0;else{var Ke=n(u);Ke!==null&&Sn(y,Ke.startTime-O),kn=!1}return kn}finally{f=null,m=b,g=!1}}var k=!1,S=null,C=-1,M=5,D=-1;function be(){return!(e.unstable_now()-D<M)}function _n(){if(S!==null){var T=e.unstable_now();D=T;var O=!0;try{O=S(!0,T)}finally{O?wn():(k=!1,S=null)}}else k=!1}var wn;if(typeof d=="function")wn=function(){d(_n)};else if(typeof MessageChannel<"u"){var ro=new MessageChannel,ua=ro.port2;ro.port1.onmessage=_n,wn=function(){ua.postMessage(null)}}else wn=function(){x(_n,0)};function Vr(T){S=T,k||(k=!0,wn())}function Sn(T,O){C=x(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Vr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var b=m;m=O;try{return T()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=m;m=T;try{return O()}finally{m=b}},e.unstable_scheduleCallback=function(T,O,b){var B=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?B+b:B):b=B,T){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=b+j,T={id:c++,callback:O,priorityLevel:T,startTime:b,expirationTime:j,sortIndex:-1},b>B?(T.sortIndex=b,t(u,T),n(l)===null&&T===n(u)&&(w?(p(C),C=-1):w=!0,Sn(y,b-B))):(T.sortIndex=j,t(l,T),v||g||(v=!0,Vr(E))),T},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(T){var O=m;return function(){var b=m;m=O;try{return T.apply(this,arguments)}finally{m=b}}}})(dh);(function(e){e.exports=dh})(T0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh=A,Fe=el;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hh=new Set,Ei={};function Vn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(Ei[e]=t,e=0;e<t.length;e++)hh.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},$c={};function x0(e){return tl.call($c,e)?!0:tl.call(zc,e)?!1:R0.test(e)?$c[e]=!0:(zc[e]=!0,!1)}function P0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A0(e,t,n,r){if(t===null||typeof t>"u"||P0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var gu=/[\-:]([a-z])/g;function yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gu,yu);fe[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gu,yu);fe[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gu,yu);fe[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function vu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A0(t,n,i,r)&&(n=null),r||i===null?x0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),ph=Symbol.for("react.provider"),mh=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),gh=Symbol.for("react.offscreen"),Bc=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,fa;function ni(e){if(fa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fa=t&&t[1]||""}return`
`+fa+e}var ha=!1;function pa(e,t){if(!e||ha)return"";ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ha=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ni(e):""}function O0(e){switch(e.tag){case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 2:case 15:return e=pa(e.type,!1),e;case 11:return e=pa(e.type.render,!1),e;case 1:return e=pa(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Xn:return"Portal";case nl:return"Profiler";case _u:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mh:return(e.displayName||"Context")+".Consumer";case ph:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Su:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b0(e){var t=yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=b0(e))}function vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _h(e,t){t=t.checked,t!=null&&vu(e,"checked",t,!1)}function al(e,t){_h(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||Yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ri=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ri(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function wh(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lo,kh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){L0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function Eh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function Ih(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Eh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var D0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(D0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,fr=null,hr=null;function Gc(e){if(e=Ki(e)){if(typeof pl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ms(t),pl(e.stateNode,e.type,t))}}function Ch(e){fr?hr?hr.push(e):hr=[e]:fr=e}function Th(){if(fr){var e=fr,t=hr;if(hr=fr=null,Gc(e),t)for(e=0;e<t.length;e++)Gc(t[e])}}function Rh(e,t){return e(t)}function xh(){}var ma=!1;function Ph(e,t,n){if(ma)return e(t,n);ma=!0;try{return Rh(e,t,n)}finally{ma=!1,(fr!==null||hr!==null)&&(xh(),Th())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=Ms(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var ml=!1;if(Rt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{ml=!1}function U0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ci=!1,Qo=null,Xo=!1,gl=null,M0={onError:function(e){ci=!0,Qo=e}};function F0(e,t,n,r,i,o,s,a,l){ci=!1,Qo=null,U0.apply(M0,arguments)}function z0(e,t,n,r,i,o,s,a,l){if(F0.apply(this,arguments),ci){if(ci){var u=Qo;ci=!1,Qo=null}else throw Error(I(198));Xo||(Xo=!0,gl=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ah(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qc(e){if(Gn(e)!==e)throw Error(I(188))}function $0(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qc(i),e;if(o===r)return qc(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Oh(e){return e=$0(e),e!==null?Nh(e):null}function Nh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nh(e);if(t!==null)return t;e=e.sibling}return null}var bh=Fe.unstable_scheduleCallback,Kc=Fe.unstable_cancelCallback,B0=Fe.unstable_shouldYield,j0=Fe.unstable_requestPaint,ne=Fe.unstable_now,H0=Fe.unstable_getCurrentPriorityLevel,Eu=Fe.unstable_ImmediatePriority,Lh=Fe.unstable_UserBlockingPriority,Jo=Fe.unstable_NormalPriority,W0=Fe.unstable_LowPriority,Dh=Fe.unstable_IdlePriority,bs=null,ct=null;function V0(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(bs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:K0,G0=Math.log,q0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(G0(e)/q0|0)|0}var uo=64,co=4194304;function ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ii(a):(o&=s,o!==0&&(r=ii(o)))}else s=n&~i,s!==0?r=ii(s):o!==0&&(r=ii(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Y0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Y0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uh(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function X0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Mh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fh,Cu,zh,$h,Bh,vl=!1,fo=[],Jt=null,Zt=null,en=null,Ti=new Map,Ri=new Map,Ht=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function Yr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z0(e,t,n,r,i){switch(t){case"focusin":return Jt=Yr(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=Yr(Zt,e,t,n,r,i),!0;case"mouseover":return en=Yr(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ti.set(o,Yr(Ti.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ri.set(o,Yr(Ri.get(o)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=Rn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ah(n),t!==null){e.blockedOn=t,Bh(e.priority,function(){zh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Ki(n),t!==null&&Cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Qc(e,t,n){Ao(e)&&n.delete(t)}function ey(){vl=!1,Jt!==null&&Ao(Jt)&&(Jt=null),Zt!==null&&Ao(Zt)&&(Zt=null),en!==null&&Ao(en)&&(en=null),Ti.forEach(Qc),Ri.forEach(Qc)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,ey)))}function xi(e){function t(i){return Qr(i,e)}if(0<fo.length){Qr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Qr(Jt,e),Zt!==null&&Qr(Zt,e),en!==null&&Qr(en,e),Ti.forEach(t),Ri.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Ht.shift()}var pr=Nt.ReactCurrentBatchConfig,es=!0;function ty(e,t,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=1,Tu(e,t,n,r)}finally{$=i,pr.transition=o}}function ny(e,t,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=4,Tu(e,t,n,r)}finally{$=i,pr.transition=o}}function Tu(e,t,n,r){if(es){var i=_l(e,t,n,r);if(i===null)Ta(e,t,r,ts,n),Yc(e,r);else if(Z0(i,e,t,n,r))r.stopPropagation();else if(Yc(e,r),t&4&&-1<J0.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&Fh(o),o=_l(e,t,n,r),o===null&&Ta(e,t,r,ts,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var ts=null;function _l(e,t,n,r){if(ts=null,e=ku(r),e=Rn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ah(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ts=e,null}function Hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H0()){case Eu:return 1;case Lh:return 4;case Jo:case W0:return 16;case Dh:return 536870912;default:return 16}default:return 16}}var Qt=null,Ru=null,Oo=null;function Wh(){if(Oo)return Oo;var e,t=Ru,n=t.length,r,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Oo=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function Xc(){return!1}function $e(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:Xc,this.isPropagationStopped=Xc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=$e(Fr),qi=Z({},Fr,{view:0,detail:0}),ry=$e(qi),ya,va,Xr,Ls=Z({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(ya=e.screenX-Xr.screenX,va=e.screenY-Xr.screenY):va=ya=0,Xr=e),ya)},movementY:function(e){return"movementY"in e?e.movementY:va}}),Jc=$e(Ls),iy=Z({},Ls,{dataTransfer:0}),oy=$e(iy),sy=Z({},qi,{relatedTarget:0}),_a=$e(sy),ay=Z({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=$e(ay),uy=Z({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cy=$e(uy),dy=Z({},Fr,{data:0}),Zc=$e(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=py[e])?!!t[e]:!1}function Pu(){return my}var gy=Z({},qi,{key:function(e){if(e.key){var t=fy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yy=$e(gy),vy=Z({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=$e(vy),_y=Z({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),wy=$e(_y),Sy=Z({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=$e(Sy),Ey=Z({},Ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=$e(Ey),Cy=[9,13,27,32],Au=Rt&&"CompositionEvent"in window,di=null;Rt&&"documentMode"in document&&(di=document.documentMode);var Ty=Rt&&"TextEvent"in window&&!di,Vh=Rt&&(!Au||di&&8<di&&11>=di),td=String.fromCharCode(32),nd=!1;function Gh(e,t){switch(e){case"keyup":return Cy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function Ry(e,t){switch(e){case"compositionend":return qh(t);case"keypress":return t.which!==32?null:(nd=!0,td);case"textInput":return e=t.data,e===td&&nd?null:e;default:return null}}function xy(e,t){if(Zn)return e==="compositionend"||!Au&&Gh(e,t)?(e=Wh(),Oo=Ru=Qt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vh&&t.locale!=="ko"?null:t.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Py[e.type]:t==="textarea"}function Kh(e,t,n,r){Ch(r),t=ns(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fi=null,Pi=null;function Ay(e){op(e,0)}function Ds(e){var t=nr(e);if(vh(t))return e}function Oy(e,t){if(e==="change")return t}var Yh=!1;if(Rt){var wa;if(Rt){var Sa="oninput"in document;if(!Sa){var id=document.createElement("div");id.setAttribute("oninput","return;"),Sa=typeof id.oninput=="function"}wa=Sa}else wa=!1;Yh=wa&&(!document.documentMode||9<document.documentMode)}function od(){fi&&(fi.detachEvent("onpropertychange",Qh),Pi=fi=null)}function Qh(e){if(e.propertyName==="value"&&Ds(Pi)){var t=[];Kh(t,Pi,e,ku(e)),Ph(Ay,t)}}function Ny(e,t,n){e==="focusin"?(od(),fi=t,Pi=n,fi.attachEvent("onpropertychange",Qh)):e==="focusout"&&od()}function by(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ds(Pi)}function Ly(e,t){if(e==="click")return Ds(t)}function Dy(e,t){if(e==="input"||e==="change")return Ds(t)}function Uy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uy;function Ai(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,t){var n=sd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function Xh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jh(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yo(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function My(e){var t=Jh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xh(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ad(n,o);var s=ad(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fy=Rt&&"documentMode"in document&&11>=document.documentMode,er=null,wl=null,hi=null,Sl=!1;function ld(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||er==null||er!==Yo(r)||(r=er,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Ai(hi,r)||(hi=r,r=ns(wl,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},ka={},Zh={};Rt&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Us(e){if(ka[e])return ka[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zh)return ka[e]=t[n];return e}var ep=Us("animationend"),tp=Us("animationiteration"),np=Us("animationstart"),rp=Us("transitionend"),ip=new Map,ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){ip.set(e,t),Vn(t,[e])}for(var Ea=0;Ea<ud.length;Ea++){var Ia=ud[Ea],zy=Ia.toLowerCase(),$y=Ia[0].toUpperCase()+Ia.slice(1);pn(zy,"on"+$y)}pn(ep,"onAnimationEnd");pn(tp,"onAnimationIteration");pn(np,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(rp,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));function cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,z0(r,t,void 0,e),e.currentTarget=null}function op(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;cd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;cd(i,a,u),o=l}}}if(Xo)throw e=gl,Xo=!1,gl=null,e}function V(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(sp(t,e,2,!1),n.add(r))}function Ca(e,t,n){var r=0;t&&(r|=4),sp(n,e,r,t)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[mo]){e[mo]=!0,hh.forEach(function(n){n!=="selectionchange"&&(By.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mo]||(t[mo]=!0,Ca("selectionchange",!1,t))}}function sp(e,t,n,r){switch(Hh(t)){case 1:var i=ty;break;case 4:i=ny;break;default:i=Tu}n=i.bind(null,t,n,e),i=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ph(function(){var u=o,c=ku(n),f=[];e:{var m=ip.get(e);if(m!==void 0){var g=xu,v=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":g=yy;break;case"focusin":v="focus",g=_a;break;case"focusout":v="blur",g=_a;break;case"beforeblur":case"afterblur":g=_a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wy;break;case ep:case tp:case np:g=ly;break;case rp:g=ky;break;case"scroll":g=ry;break;case"wheel":g=Iy;break;case"copy":case"cut":case"paste":g=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ed}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=Ci(d,p),y!=null&&w.push(Ni(d,y,h)))),x)break;d=d.return}0<w.length&&(m=new g(m,v,null,n,c),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==hl&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[xt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Rn(v):null,v!==null&&(x=Gn(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Jc,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ed,y="onPointerLeave",p="onPointerEnter",d="pointer"),x=g==null?m:nr(g),h=v==null?m:nr(v),m=new w(y,d+"leave",g,n,c),m.target=x,m.relatedTarget=h,y=null,Rn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=h,w.relatedTarget=x,y=w),x=y,g&&v)t:{for(w=g,p=v,d=0,h=w;h;h=Kn(h))d++;for(h=0,y=p;y;y=Kn(y))h++;for(;0<d-h;)w=Kn(w),d--;for(;0<h-d;)p=Kn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Kn(w),p=Kn(p)}w=null}else w=null;g!==null&&dd(f,m,g,w,!1),v!==null&&x!==null&&dd(f,x,v,w,!0)}}e:{if(m=u?nr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=Oy;else if(rd(m))if(Yh)E=Dy;else{E=by;var k=Ny}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Ly);if(E&&(E=E(e,u))){Kh(f,E,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ll(m,"number",m.value)}switch(k=u?nr(u):window,e){case"focusin":(rd(k)||k.contentEditable==="true")&&(er=k,wl=u,hi=null);break;case"focusout":hi=wl=er=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,ld(f,n,c);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":ld(f,n,c)}var S;if(Au)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Zn?Gh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Vh&&n.locale!=="ko"&&(Zn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Zn&&(S=Wh()):(Qt=c,Ru="value"in Qt?Qt.value:Qt.textContent,Zn=!0)),k=ns(u,C),0<k.length&&(C=new Zc(C,e,null,n,c),f.push({event:C,listeners:k}),S?C.data=S:(S=qh(n),S!==null&&(C.data=S)))),(S=Ty?Ry(e,n):xy(e,n))&&(u=ns(u,"onBeforeInput"),0<u.length&&(c=new Zc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}op(f,t)})}function Ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ns(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ci(e,n),o!=null&&r.unshift(Ni(e,o,i)),o=Ci(e,t),o!=null&&r.push(Ni(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ci(n,o),l!=null&&s.unshift(Ni(n,l,a))):i||(l=Ci(n,o),l!=null&&s.push(Ni(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function fd(e){return(typeof e=="string"?e:""+e).replace(jy,`
`).replace(Hy,"")}function go(e,t,n){if(t=fd(t),fd(e)!==t&&n)throw Error(I(425))}function rs(){}var kl=null,El=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,hd=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof hd<"u"?function(e){return hd.resolve(null).then(e).catch(Gy)}:Cl;function Gy(e){setTimeout(function(){throw e})}function Ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),at="__reactFiber$"+zr,bi="__reactProps$"+zr,xt="__reactContainer$"+zr,Tl="__reactEvents$"+zr,qy="__reactListeners$"+zr,Ky="__reactHandles$"+zr;function Rn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pd(e);e!==null;){if(n=e[at])return n;e=pd(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ms(e){return e[bi]||null}var Rl=[],rr=-1;function mn(e){return{current:e}}function q(e){0>rr||(e.current=Rl[rr],Rl[rr]=null,rr--)}function W(e,t){rr++,Rl[rr]=e.current,e.current=t}var hn={},ge=mn(hn),Ae=mn(!1),Un=hn;function kr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function is(){q(Ae),q(ge)}function md(e,t,n){if(ge.current!==hn)throw Error(I(168));W(ge,t),W(Ae,n)}function ap(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,N0(e)||"Unknown",i));return Z({},n,r)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Un=ge.current,W(ge,e),W(Ae,Ae.current),!0}function gd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=ap(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,q(Ae),q(ge),W(ge,e)):q(Ae),W(Ae,n)}var _t=null,Fs=!1,xa=!1;function lp(e){_t===null?_t=[e]:_t.push(e)}function Yy(e){Fs=!0,lp(e)}function gn(){if(!xa&&_t!==null){xa=!0;var e=0,t=$;try{var n=_t;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Fs=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),bh(Eu,gn),i}finally{$=t,xa=!1}}return null}var ir=[],or=0,ss=null,as=0,Be=[],je=0,Mn=null,wt=1,St="";function In(e,t){ir[or++]=as,ir[or++]=ss,ss=e,as=t}function up(e,t,n){Be[je++]=wt,Be[je++]=St,Be[je++]=Mn,Mn=e;var r=wt;e=St;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,wt=1<<32-Ze(t)+i|n<<i|r,St=o+e}else wt=1<<o|n<<i|r,St=e}function Nu(e){e.return!==null&&(In(e,1),up(e,1,0))}function bu(e){for(;e===ss;)ss=ir[--or],ir[or]=null,as=ir[--or],ir[or]=null;for(;e===Mn;)Mn=Be[--je],Be[je]=null,St=Be[--je],Be[je]=null,wt=Be[--je],Be[je]=null}var Me=null,Ue=null,Y=!1,Je=null;function cp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ue=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:wt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ue=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(Y){var t=Ue;if(t){var n=t;if(!yd(e,t)){if(xl(e))throw Error(I(418));t=tn(n.nextSibling);var r=Me;t&&yd(e,t)?cp(r,n):(e.flags=e.flags&-4097|2,Y=!1,Me=e)}}else{if(xl(e))throw Error(I(418));e.flags=e.flags&-4097|2,Y=!1,Me=e}}}function vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function yo(e){if(e!==Me)return!1;if(!Y)return vd(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=Ue)){if(xl(e))throw dp(),Error(I(418));for(;t;)cp(e,t),t=tn(t.nextSibling)}if(vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Me?tn(e.stateNode.nextSibling):null;return!0}function dp(){for(var e=Ue;e;)e=tn(e.nextSibling)}function Er(){Ue=Me=null,Y=!1}function Lu(e){Je===null?Je=[e]:Je.push(e)}var Qy=Nt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ls=mn(null),us=null,sr=null,Du=null;function Uu(){Du=sr=us=null}function Mu(e){var t=ls.current;q(ls),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){us=e,Du=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Du!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(us===null)throw Error(I(308));sr=e,us.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var xn=null;function Fu(e){xn===null?xn=[e]:xn.push(e)}function fp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Fu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cs(e,t,n,r){var i=e.updateQueue;jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(m=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(g,f,m):v,m==null)break e;f=Z({},f,m);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=f}}function wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var pp=new fh.Component().refs;function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=on(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(et(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=on(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(et(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=on(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,r),t!==null&&(et(t,e,r,n),bo(t,e,r))}};function Sd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,o):!0}function mp(e,t,n){var r=!1,i=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Oe(t)?Un:ge.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function kd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function Nl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=pp,zu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Oe(t)?Un:ge.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ol(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zs.enqueueReplaceState(i,i.state,null),cs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===pp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ed(e){var t=e._init;return t(e._payload)}function gp(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=sn(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,y){return d===null||d.tag!==6?(d=Da(h,p.mode,y),d.return=p,d):(d=i(d,h),d.return=p,d)}function l(p,d,h,y){var E=h.type;return E===Jn?c(p,d,h.props.children,y,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&Ed(E)===d.type)?(y=i(d,h.props),y.ref=Jr(p,d,h),y.return=p,y):(y=zo(h.type,h.key,h.props,null,p.mode,y),y.ref=Jr(p,d,h),y.return=p,y)}function u(p,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Ua(h,p.mode,y),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function c(p,d,h,y,E){return d===null||d.tag!==7?(d=Nn(h,p.mode,y,E),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Da(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case so:return h=zo(d.type,d.key,d.props,null,p.mode,h),h.ref=Jr(p,null,d),h.return=p,h;case Xn:return d=Ua(d,p.mode,h),d.return=p,d;case Bt:var y=d._init;return f(p,y(d._payload),h)}if(ri(d)||qr(d))return d=Nn(d,p.mode,h,null),d.return=p,d;vo(p,d)}return null}function m(p,d,h,y){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(p,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case so:return h.key===E?l(p,d,h,y):null;case Xn:return h.key===E?u(p,d,h,y):null;case Bt:return E=h._init,m(p,d,E(h._payload),y)}if(ri(h)||qr(h))return E!==null?null:c(p,d,h,y,null);vo(p,h)}return null}function g(p,d,h,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,a(d,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return p=p.get(y.key===null?h:y.key)||null,l(d,p,y,E);case Xn:return p=p.get(y.key===null?h:y.key)||null,u(d,p,y,E);case Bt:var k=y._init;return g(p,d,h,k(y._payload),E)}if(ri(y)||qr(y))return p=p.get(h)||null,c(d,p,y,E,null);vo(d,y)}return null}function v(p,d,h,y){for(var E=null,k=null,S=d,C=d=0,M=null;S!==null&&C<h.length;C++){S.index>C?(M=S,S=null):M=S.sibling;var D=m(p,S,h[C],y);if(D===null){S===null&&(S=M);break}e&&S&&D.alternate===null&&t(p,S),d=o(D,d,C),k===null?E=D:k.sibling=D,k=D,S=M}if(C===h.length)return n(p,S),Y&&In(p,C),E;if(S===null){for(;C<h.length;C++)S=f(p,h[C],y),S!==null&&(d=o(S,d,C),k===null?E=S:k.sibling=S,k=S);return Y&&In(p,C),E}for(S=r(p,S);C<h.length;C++)M=g(S,p,C,h[C],y),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?C:M.key),d=o(M,d,C),k===null?E=M:k.sibling=M,k=M);return e&&S.forEach(function(be){return t(p,be)}),Y&&In(p,C),E}function w(p,d,h,y){var E=qr(h);if(typeof E!="function")throw Error(I(150));if(h=E.call(h),h==null)throw Error(I(151));for(var k=E=null,S=d,C=d=0,M=null,D=h.next();S!==null&&!D.done;C++,D=h.next()){S.index>C?(M=S,S=null):M=S.sibling;var be=m(p,S,D.value,y);if(be===null){S===null&&(S=M);break}e&&S&&be.alternate===null&&t(p,S),d=o(be,d,C),k===null?E=be:k.sibling=be,k=be,S=M}if(D.done)return n(p,S),Y&&In(p,C),E;if(S===null){for(;!D.done;C++,D=h.next())D=f(p,D.value,y),D!==null&&(d=o(D,d,C),k===null?E=D:k.sibling=D,k=D);return Y&&In(p,C),E}for(S=r(p,S);!D.done;C++,D=h.next())D=g(S,p,C,D.value,y),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?C:D.key),d=o(D,d,C),k===null?E=D:k.sibling=D,k=D);return e&&S.forEach(function(_n){return t(p,_n)}),Y&&In(p,C),E}function x(p,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case so:e:{for(var E=h.key,k=d;k!==null;){if(k.key===E){if(E=h.type,E===Jn){if(k.tag===7){n(p,k.sibling),d=i(k,h.props.children),d.return=p,p=d;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&Ed(E)===k.type){n(p,k.sibling),d=i(k,h.props),d.ref=Jr(p,k,h),d.return=p,p=d;break e}n(p,k);break}else t(p,k);k=k.sibling}h.type===Jn?(d=Nn(h.props.children,p.mode,y,h.key),d.return=p,p=d):(y=zo(h.type,h.key,h.props,null,p.mode,y),y.ref=Jr(p,d,h),y.return=p,p=y)}return s(p);case Xn:e:{for(k=h.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Ua(h,p.mode,y),d.return=p,p=d}return s(p);case Bt:return k=h._init,x(p,d,k(h._payload),y)}if(ri(h))return v(p,d,h,y);if(qr(h))return w(p,d,h,y);vo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=Da(h,p.mode,y),d.return=p,p=d),s(p)):n(p,d)}return x}var Ir=gp(!0),yp=gp(!1),Yi={},dt=mn(Yi),Li=mn(Yi),Di=mn(Yi);function Pn(e){if(e===Yi)throw Error(I(174));return e}function $u(e,t){switch(W(Di,t),W(Li,e),W(dt,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cl(t,e)}q(dt),W(dt,t)}function Cr(){q(dt),q(Li),q(Di)}function vp(e){Pn(Di.current);var t=Pn(dt.current),n=cl(t,e.type);t!==n&&(W(Li,e),W(dt,n))}function Bu(e){Li.current===e&&(q(dt),q(Li))}var Q=mn(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function ju(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var Lo=Nt.ReactCurrentDispatcher,Aa=Nt.ReactCurrentBatchConfig,Fn=0,J=null,oe=null,ae=null,fs=!1,pi=!1,Ui=0,Xy=0;function he(){throw Error(I(321))}function Hu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Wu(e,t,n,r,i,o){if(Fn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?tv:nv,e=n(r,i),pi){o=0;do{if(pi=!1,Ui=0,25<=o)throw Error(I(301));o+=1,ae=oe=null,t.updateQueue=null,Lo.current=rv,e=n(r,i)}while(pi)}if(Lo.current=hs,t=oe!==null&&oe.next!==null,Fn=0,ae=oe=J=null,fs=!1,t)throw Error(I(300));return e}function Vu(){var e=Ui!==0;return Ui=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?J.memoizedState=ae=e:ae=ae.next=e,ae}function Ge(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ae===null?J.memoizedState:ae.next;if(t!==null)ae=t,oe=e;else{if(e===null)throw Error(I(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ae===null?J.memoizedState=ae=e:ae=ae.next=e}return ae}function Mi(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=Ge(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,J.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=Ge(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _p(){}function wp(e,t){var n=J,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,xe=!0),r=r.queue,Gu(Ep.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Fi(9,kp.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(I(349));Fn&30||Sp(n,t,i)}return i}function Sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kp(e,t,n,r){t.value=n,t.getSnapshot=r,Ip(t)&&Cp(e)}function Ep(e,t,n){return n(function(){Ip(t)&&Cp(e)})}function Ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Cp(e){var t=Pt(e,1);t!==null&&et(t,e,1,-1)}function Id(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},t.queue=e,e=e.dispatch=ev.bind(null,J,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tp(){return Ge().memoizedState}function Do(e,t,n,r){var i=ot();J.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function $s(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Hu(r,s.deps)){i.memoizedState=Fi(t,n,o,r);return}}J.flags|=e,i.memoizedState=Fi(1|t,n,o,r)}function Cd(e,t){return Do(8390656,8,e,t)}function Gu(e,t){return $s(2048,8,e,t)}function Rp(e,t){return $s(4,2,e,t)}function xp(e,t){return $s(4,4,e,t)}function Pp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,n){return n=n!=null?n.concat([e]):null,$s(4,4,Pp.bind(null,t,e),n)}function qu(){}function Op(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Np(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bp(e,t,n){return Fn&21?(nt(n,t)||(n=Uh(),J.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Jy(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{$=n,Aa.transition=r}}function Lp(){return Ge().memoizedState}function Zy(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dp(e))Up(t,n);else if(n=fp(e,t,n,r),n!==null){var i=Ee();et(n,e,r,i),Mp(n,t,r)}}function ev(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dp(e))Up(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,Fu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=fp(e,t,i,r),n!==null&&(i=Ee(),et(n,e,r,i),Mp(n,t,r))}}function Dp(e){var t=e.alternate;return e===J||t!==null&&t===J}function Up(e,t){pi=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}var hs={readContext:Ve,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},tv={readContext:Ve,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,Pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zy.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:Id,useDebugValue:qu,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=Id(!1),t=e[0];return e=Jy.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=ot();if(Y){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ue===null)throw Error(I(349));Fn&30||Sp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Cd(Ep.bind(null,r,o,e),[e]),r.flags|=2048,Fi(9,kp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=ue.identifierPrefix;if(Y){var n=St,r=wt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nv={readContext:Ve,useCallback:Op,useContext:Ve,useEffect:Gu,useImperativeHandle:Ap,useInsertionEffect:Rp,useLayoutEffect:xp,useMemo:Np,useReducer:Oa,useRef:Tp,useState:function(){return Oa(Mi)},useDebugValue:qu,useDeferredValue:function(e){var t=Ge();return bp(t,oe.memoizedState,e)},useTransition:function(){var e=Oa(Mi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:wp,useId:Lp,unstable_isNewReconciler:!1},rv={readContext:Ve,useCallback:Op,useContext:Ve,useEffect:Gu,useImperativeHandle:Ap,useInsertionEffect:Rp,useLayoutEffect:xp,useMemo:Np,useReducer:Na,useRef:Tp,useState:function(){return Na(Mi)},useDebugValue:qu,useDeferredValue:function(e){var t=Ge();return oe===null?t.memoizedState=e:bp(t,oe.memoizedState,e)},useTransition:function(){var e=Na(Mi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:_p,useSyncExternalStore:wp,useId:Lp,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Fp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ms||(ms=!0,Hl=r),bl(e,t)},n}function zp(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vv.bind(null,e,t,n),t.then(e,e))}function Rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var ov=Nt.ReactCurrentOwner,xe=!1;function we(e,t,n,r){t.child=e===null?yp(t,null,n,r):Ir(t,e.child,n,r)}function Pd(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=Wu(e,t,n,r,o,i),n=Vu(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Y&&n&&Nu(t),t.flags|=1,we(e,t,r,i),t.child)}function Ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$p(e,t,o,r,i)):(e=zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(s,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,At(e,t,i)}return Ll(e,t,n,r,i)}function Bp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(lr,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(lr,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(lr,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(lr,De),De|=r;return we(e,t,i,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,i){var o=Oe(n)?Un:ge.current;return o=kr(t,o),mr(t,i),n=Wu(e,t,n,r,o,i),r=Vu(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(Y&&r&&Nu(t),t.flags|=1,we(e,t,n,i),t.child)}function Od(e,t,n,r,i){if(Oe(n)){var o=!0;os(t)}else o=!1;if(mr(t,i),t.stateNode===null)Uo(e,t),mp(t,n,r),Nl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Oe(n)?Un:ge.current,u=kr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&kd(t,s,r,u),jt=!1;var m=t.memoizedState;s.state=m,cs(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ae.current||jt?(typeof c=="function"&&(Ol(t,n,c,r),l=t.memoizedState),(a=jt||Sd(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Oe(n)?Un:ge.current,l=kr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&kd(t,s,r,l),jt=!1,m=t.memoizedState,s.state=m,cs(t,r,s,i);var v=t.memoizedState;a!==f||m!==v||Ae.current||jt?(typeof g=="function"&&(Ol(t,n,g,r),v=t.memoizedState),(u=jt||Sd(t,n,u,r,m,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,o,i)}function Dl(e,t,n,r,i,o){jp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&gd(t,n,!1),At(e,t,o);r=t.stateNode,ov.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,a,o)):we(e,t,a,o),t.memoizedState=r.state,i&&gd(t,n,!0),t.child}function Hp(e){var t=e.stateNode;t.pendingContext?md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&md(e,t.context,!1),$u(e,t.containerInfo)}function Nd(e,t,n,r,i){return Er(),Lu(i),t.flags|=256,we(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wp(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Hs(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ml(n),t.memoizedState=Ul,e):Ku(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=sn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=sn(a,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return o=e.child,e=o.sibling,r=sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ku(e,t){return t=Hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Lu(r),Ir(t,e.child,null,n),e=Ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ba(Error(I(422))),_o(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Hs({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ir(t,e.child,null,s),t.child.memoizedState=Ml(s),t.memoizedState=Ul,o);if(!(t.mode&1))return _o(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=ba(o,r,void 0),_o(e,t,s,r)}if(a=(s&e.childLanes)!==0,xe||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),et(r,e,i,-1))}return ec(),r=ba(Error(I(421))),_o(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_v.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=tn(i.nextSibling),Me=t,Y=!0,Je=null,e!==null&&(Be[je++]=wt,Be[je++]=St,Be[je++]=Mn,wt=e.id,St=e.overflow,Mn=t),t=Ku(t,r.children),t.flags|=4096,t)}function bd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function La(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,t);else if(e.tag===19)bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ds(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ds(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,o);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function av(e,t,n){switch(t.tag){case 3:Hp(t),Er();break;case 5:vp(t);break;case 1:Oe(t.type)&&os(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ls,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Wp(e,t,n):(W(Q,Q.current&1),e=At(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Bp(e,t,n)}return At(e,t,n)}var Gp,Fl,qp,Kp;Gp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};qp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(dt.current);var o=null;switch(n){case"input":i=sl(e,i),r=sl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),r=ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rs)}dl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ei.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ei.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Kp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lv(e,t,n){var r=t.pendingProps;switch(bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Oe(t.type)&&is(),pe(t),null;case 3:return r=t.stateNode,Cr(),q(Ae),q(ge),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Gl(Je),Je=null))),Fl(e,t),pe(t),null;case 5:Bu(t);var i=Pn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)qp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return pe(t),null}if(e=Pn(dt.current),yo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[bi]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<oi.length;i++)V(oi[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":jc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Wc(r,o),V("invalid",r)}dl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,e),i=["children",""+a]):Ei.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":ao(r),Hc(r,o,!0);break;case"textarea":ao(r),Vc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[bi]=r,Gp(e,t,!1,!1),t.stateNode=e;e:{switch(s=fl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<oi.length;i++)V(oi[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":jc(e,r),i=sl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":Wc(e,r),i=ul(e,r),V("invalid",e);break;default:i=r}dl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ih(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ii(e,l):typeof l=="number"&&Ii(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ei.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&vu(e,o,l,s))}switch(n){case"input":ao(e),Hc(e,r,!1);break;case"textarea":ao(e),Vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Kp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Pn(Di.current),Pn(dt.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return pe(t),null;case 13:if(q(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ue!==null&&t.mode&1&&!(t.flags&128))dp(),Er(),t.flags|=98560,o=!1;else if(o=yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[at]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Je!==null&&(Gl(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?se===0&&(se=3):ec())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Cr(),Fl(e,t),e===null&&Oi(t.stateNode.containerInfo),pe(t),null;case 10:return Mu(t.type._context),pe(t),null;case 17:return Oe(t.type)&&is(),pe(t),null;case 19:if(q(Q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Zr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ds(e),s!==null){for(t.flags|=128,Zr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>Rr&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ds(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return pe(t),null}else 2*ne()-o.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function uv(e,t){switch(bu(t),t.tag){case 1:return Oe(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),q(Ae),q(ge),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return Cr(),null;case 10:return Mu(t.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var wo=!1,me=!1,cv=typeof WeakSet=="function"?WeakSet:Set,R=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){te(e,t,r)}}var Ld=!1;function dv(e,t){if(kl=es,e=Jh(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},es=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){te(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=Ld,Ld=!1,v}function mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&zl(t,n,o)}i=i.next}while(i!==r)}}function Bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yp(e){var t=e.alternate;t!==null&&(e.alternate=null,Yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[bi],delete t[Tl],delete t[qy],delete t[Ky])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qp(e){return e.tag===5||e.tag===3||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rs));else if(r!==4&&(e=e.child,e!==null))for(Bl(e,t,n),e=e.sibling;e!==null;)Bl(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var ce=null,Xe=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Xp(e,t,n),n=n.sibling}function Xp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(bs,n)}catch{}switch(n.tag){case 5:me||ar(n,t);case 6:var r=ce,i=Xe;ce=null,Ft(e,t,n),ce=r,Xe=i,ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?Ra(e.parentNode,n):e.nodeType===1&&Ra(e,n),xi(e)):Ra(ce,n.stateNode));break;case 4:r=ce,i=Xe,ce=n.stateNode.containerInfo,Xe=!0,Ft(e,t,n),ce=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&zl(n,t,s),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!me&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Ft(e,t,n),me=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cv),t.forEach(function(r){var i=wv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Xe=!1;break e;case 3:ce=a.stateNode.containerInfo,Xe=!0;break e;case 4:ce=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(ce===null)throw Error(I(160));Xp(o,s,i),ce=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jp(t,e),t=t.sibling}function Jp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),it(e),r&4){try{mi(3,e,e.return),Bs(3,e)}catch(w){te(e,e.return,w)}try{mi(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:Ye(t,e),it(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(Ye(t,e),it(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(w){te(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&_h(i,o),fl(a,s);var u=fl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Ih(i,f):c==="dangerouslySetInnerHTML"?kh(i,f):c==="children"?Ii(i,f):vu(i,c,f,u)}switch(a){case"input":al(i,o);break;case"textarea":wh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?dr(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[bi]=o}catch(w){te(e,e.return,w)}}break;case 6:if(Ye(t,e),it(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){te(e,e.return,w)}}break;case 3:if(Ye(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:Ye(t,e),it(e);break;case 13:Ye(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xu=ne())),r&4&&Ud(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||c,Ye(t,e),me=u):Ye(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(f=R=c;R!==null;){switch(m=R,g=m.child,m.tag){case 0:case 11:case 14:case 15:mi(4,m,m.return);break;case 1:ar(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:ar(m,m.return);break;case 22:if(m.memoizedState!==null){Fd(f);continue}}g!==null?(g.return=m,R=g):Fd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Eh("display",s))}catch(w){te(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){te(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ye(t,e),it(e),r&4&&Ud(e);break;case 21:break;default:Ye(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=Dd(e);jl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Dd(e);Bl(e,a,s);break;default:throw Error(I(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fv(e,t,n){R=e,Zp(e)}function Zp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=wo;var u=me;if(wo=s,(me=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?zd(i):l!==null?(l.return=s,R=l):zd(i);for(;o!==null;)R=o,Zp(o),o=o.sibling;R=i,wo=a,me=u}Md(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Md(e)}}function Md(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&xi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}me||t.flags&512&&$l(t)}catch(m){te(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Fd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function zd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bs(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var o=t.return;try{$l(t)}catch(l){te(t,o,l)}break;case 5:var s=t.return;try{$l(t)}catch(l){te(t,s,l)}}}catch(l){te(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var hv=Math.ceil,ps=Nt.ReactCurrentDispatcher,Yu=Nt.ReactCurrentOwner,We=Nt.ReactCurrentBatchConfig,F=0,ue=null,ie=null,de=0,De=0,lr=mn(0),se=0,zi=null,zn=0,js=0,Qu=0,gi=null,Re=null,Xu=0,Rr=1/0,yt=null,ms=!1,Hl=null,rn=null,So=!1,Xt=null,gs=0,yi=0,Wl=null,Mo=-1,Fo=0;function Ee(){return F&6?ne():Mo!==-1?Mo:Mo=ne()}function on(e){return e.mode&1?F&2&&de!==0?de&-de:Qy.transition!==null?(Fo===0&&(Fo=Uh()),Fo):(e=$,e!==0||(e=window.event,e=e===void 0?16:Hh(e.type)),e):1}function et(e,t,n,r){if(50<yi)throw yi=0,Wl=null,Error(I(185));Gi(e,n,r),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&(js|=n),se===4&&Wt(e,de)),Ne(e,r),n===1&&F===0&&!(t.mode&1)&&(Rr=ne()+500,Fs&&gn()))}function Ne(e,t){var n=e.callbackNode;Q0(e,t);var r=Zo(e,e===ue?de:0);if(r===0)n!==null&&Kc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kc(n),t===1)e.tag===0?Yy($d.bind(null,e)):lp($d.bind(null,e)),Vy(function(){!(F&6)&&gn()}),n=null;else{switch(Mh(r)){case 1:n=Eu;break;case 4:n=Lh;break;case 16:n=Jo;break;case 536870912:n=Dh;break;default:n=Jo}n=am(n,em.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function em(e,t){if(Mo=-1,Fo=0,F&6)throw Error(I(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Zo(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ys(e,r);else{t=r;var i=F;F|=2;var o=nm();(ue!==e||de!==t)&&(yt=null,Rr=ne()+500,On(e,t));do try{gv();break}catch(a){tm(e,a)}while(1);Uu(),ps.current=o,F=i,ie!==null?t=0:(ue=null,de=0,t=se)}if(t!==0){if(t===2&&(i=yl(e),i!==0&&(r=i,t=Vl(e,i))),t===1)throw n=zi,On(e,0),Wt(e,r),Ne(e,ne()),n;if(t===6)Wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!pv(i)&&(t=ys(e,r),t===2&&(o=yl(e),o!==0&&(r=o,t=Vl(e,o))),t===1))throw n=zi,On(e,0),Wt(e,r),Ne(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Cn(e,Re,yt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=Xu+500-ne(),10<t)){if(Zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cl(Cn.bind(null,e,Re,yt),t);break}Cn(e,Re,yt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hv(r/1960))-r,10<r){e.timeoutHandle=Cl(Cn.bind(null,e,Re,yt),r);break}Cn(e,Re,yt);break;case 5:Cn(e,Re,yt);break;default:throw Error(I(329))}}}return Ne(e,ne()),e.callbackNode===n?em.bind(null,e):null}function Vl(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=ys(e,t),e!==2&&(t=Re,Re=n,t!==null&&Gl(t)),e}function Gl(e){Re===null?Re=e:Re.push.apply(Re,e)}function pv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Qu,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function $d(e){if(F&6)throw Error(I(327));gr();var t=Zo(e,0);if(!(t&1))return Ne(e,ne()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=zi,On(e,0),Wt(e,t),Ne(e,ne()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,Re,yt),Ne(e,ne()),null}function Ju(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Rr=ne()+500,Fs&&gn())}}function $n(e){Xt!==null&&Xt.tag===0&&!(F&6)&&gr();var t=F;F|=1;var n=We.transition,r=$;try{if(We.transition=null,$=1,e)return e()}finally{$=r,We.transition=n,F=t,!(F&6)&&gn()}}function Zu(){De=lr.current,q(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wy(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&is();break;case 3:Cr(),q(Ae),q(ge),ju();break;case 5:Bu(r);break;case 4:Cr();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Mu(r.type._context);break;case 22:case 23:Zu()}n=n.return}if(ue=e,ie=e=sn(e.current,null),de=De=t,se=0,zi=null,Qu=js=zn=0,Re=gi=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}xn=null}return e}function tm(e,t){do{var n=ie;try{if(Uu(),Lo.current=hs,fs){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fs=!1}if(Fn=0,ae=oe=J=null,pi=!1,Ui=0,Yu.current=null,n===null||n.return===null){se=1,zi=t,ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Rd(s);if(g!==null){g.flags&=-257,xd(g,s,a,o,t),g.mode&1&&Td(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Td(o,u,t),ec();break e}l=Error(I(426))}}else if(Y&&a.mode&1){var x=Rd(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),xd(x,s,a,o,t),Lu(Tr(l,a));break e}}o=l=Tr(l,a),se!==4&&(se=2),gi===null?gi=[o]:gi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Fp(o,l,t);_d(o,p);break e;case 1:a=l;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rn===null||!rn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=zp(o,a,t);_d(o,y);break e}}o=o.return}while(o!==null)}im(n)}catch(E){t=E,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function nm(){var e=ps.current;return ps.current=hs,e===null?hs:e}function ec(){(se===0||se===3||se===2)&&(se=4),ue===null||!(zn&268435455)&&!(js&268435455)||Wt(ue,de)}function ys(e,t){var n=F;F|=2;var r=nm();(ue!==e||de!==t)&&(yt=null,On(e,t));do try{mv();break}catch(i){tm(e,i)}while(1);if(Uu(),F=n,ps.current=r,ie!==null)throw Error(I(261));return ue=null,de=0,se}function mv(){for(;ie!==null;)rm(ie)}function gv(){for(;ie!==null&&!B0();)rm(ie)}function rm(e){var t=sm(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?im(e):ie=t,Yu.current=null}function im(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uv(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=lv(n,t,De),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Cn(e,t,n){var r=$,i=We.transition;try{We.transition=null,$=1,yv(e,t,n,r)}finally{We.transition=i,$=r}return null}function yv(e,t,n,r){do gr();while(Xt!==null);if(F&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(X0(e,o),e===ue&&(ie=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,am(Jo,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var s=$;$=1;var a=F;F|=4,Yu.current=null,dv(e,n),Jp(n,e),My(El),es=!!kl,El=kl=null,e.current=n,fv(n),j0(),F=a,$=s,We.transition=o}else e.current=n;if(So&&(So=!1,Xt=e,gs=i),o=e.pendingLanes,o===0&&(rn=null),V0(n.stateNode),Ne(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ms)throw ms=!1,e=Hl,Hl=null,e;return gs&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===Wl?yi++:(yi=0,Wl=e):yi=0,gn(),null}function gr(){if(Xt!==null){var e=Mh(gs),t=We.transition,n=$;try{if(We.transition=null,$=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,gs=0,F&6)throw Error(I(331));var i=F;for(F|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:mi(8,c,o)}var f=c.child;if(f!==null)f.return=c,R=f;else for(;R!==null;){c=R;var m=c.sibling,g=c.return;if(Yp(c),c===u){R=null;break}if(m!==null){m.return=g,R=m;break}R=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:mi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){s=R;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,R=h;else e:for(s=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bs(9,a)}}catch(E){te(a,a.return,E)}if(a===s){R=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,R=y;break e}R=a.return}}if(F=i,gn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(bs,e)}catch{}r=!0}return r}finally{$=n,We.transition=t}}return!1}function Bd(e,t,n){t=Tr(n,t),t=Fp(e,t,1),e=nn(e,t,1),t=Ee(),e!==null&&(Gi(e,1,t),Ne(e,t))}function te(e,t,n){if(e.tag===3)Bd(e,e,n);else for(;t!==null;){if(t.tag===3){Bd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=Tr(n,e),e=zp(t,e,1),t=nn(t,e,1),e=Ee(),t!==null&&(Gi(t,1,e),Ne(t,e));break}}t=t.return}}function vv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>ne()-Xu?On(e,0):Qu|=n),Ne(e,t)}function om(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=Ee();e=Pt(e,t),e!==null&&(Gi(e,t,n),Ne(e,n))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),om(e,n)}function wv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),om(e,n)}var sm;sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,av(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&up(t,as,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var i=kr(t,ge.current);mr(t,n),i=Wu(null,t,r,e,i,n);var o=Vu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(o=!0,os(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zu(t),i.updater=zs,t.stateNode=i,i._reactInternals=t,Nl(t,r,e,n),t=Dl(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Nu(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kv(r),e=Qe(r,e),i){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=Od(null,t,r,e,n);break e;case 11:t=Pd(null,t,r,e,n);break e;case 14:t=Ad(null,t,r,Qe(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Ll(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Od(e,t,r,i,n);case 3:e:{if(Hp(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hp(e,t),cs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(I(423)),t),t=Nd(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(I(424)),t),t=Nd(e,t,r,n,i);break e}else for(Ue=tn(t.stateNode.containerInfo.firstChild),Me=t,Y=!0,Je=null,n=yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=At(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return vp(t),e===null&&Pl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Il(r,i)?s=null:o!==null&&Il(r,o)&&(t.flags|=32),jp(e,t),we(e,t,s,n),t.child;case 6:return e===null&&Pl(t),null;case 13:return Wp(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Pd(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(ls,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!Ae.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Al(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Al(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=Ve(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Ad(e,t,r,i,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Uo(e,t),t.tag=1,Oe(r)?(e=!0,os(t)):e=!1,mr(t,n),mp(t,r,i),Nl(t,r,i,n),Dl(null,t,r,!0,e,n);case 19:return Vp(e,t,n);case 22:return Bp(e,t,n)}throw Error(I(156,t.tag))};function am(e,t){return bh(e,t)}function Sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Sv(e,t,n,r)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kv(e){if(typeof e=="function")return tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===Su)return 14}return 2}function sn(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")tc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jn:return Nn(n.children,i,o,t);case _u:s=8,i|=8;break;case nl:return e=He(12,n,t,i|2),e.elementType=nl,e.lanes=o,e;case rl:return e=He(13,n,t,i),e.elementType=rl,e.lanes=o,e;case il:return e=He(19,n,t,i),e.elementType=il,e.lanes=o,e;case gh:return Hs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ph:s=10;break e;case mh:s=9;break e;case wu:s=11;break e;case Su:s=14;break e;case Bt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Hs(e,t,n,r){return e=He(22,e,r,t),e.elementType=gh,e.lanes=n,e.stateNode={isHidden:!1},e}function Da(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ua(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nc(e,t,n,r,i,o,s,a,l){return e=new Ev(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(o),e}function Iv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lm(e){if(!e)return hn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Oe(n))return ap(e,n,t)}return t}function um(e,t,n,r,i,o,s,a,l){return e=nc(n,r,!0,e,i,o,s,a,l),e.context=lm(null),n=e.current,r=Ee(),i=on(n),o=Tt(r,i),o.callback=t??null,nn(n,o,i),e.current.lanes=i,Gi(e,i,r),Ne(e,r),e}function Ws(e,t,n,r){var i=t.current,o=Ee(),s=on(i);return n=lm(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(i,t,s),e!==null&&(et(e,i,s,o),bo(e,i,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rc(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function Cv(){return null}var cm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ic(e){this._internalRoot=e}Vs.prototype.render=ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Ws(e,t,null,null)};Vs.prototype.unmount=ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){Ws(null,e,null,null)}),t[xt]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=$h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&jh(e)}};function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Tv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vs(s);o.call(u)}}var s=um(t,r,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=s,e[xt]=s.current,Oi(e.nodeType===8?e.parentNode:e),$n(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vs(l);a.call(u)}}var l=nc(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=l,e[xt]=l.current,Oi(e.nodeType===8?e.parentNode:e),$n(function(){Ws(t,l,n,r)}),l}function qs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vs(s);a.call(l)}}Ws(t,s,e,i)}else s=Tv(n,t,e,i,r);return vs(s)}Fh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ii(t.pendingLanes);n!==0&&(Iu(t,n|1),Ne(t,ne()),!(F&6)&&(Rr=ne()+500,gn()))}break;case 13:$n(function(){var r=Pt(e,1);if(r!==null){var i=Ee();et(r,e,1,i)}}),rc(e,1)}};Cu=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ee();et(t,e,134217728,n)}rc(e,134217728)}};zh=function(e){if(e.tag===13){var t=on(e),n=Pt(e,t);if(n!==null){var r=Ee();et(n,e,t,r)}rc(e,t)}};$h=function(){return $};Bh=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};pl=function(e,t,n){switch(t){case"input":if(al(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ms(r);if(!i)throw Error(I(90));vh(r),al(r,i)}}}break;case"textarea":wh(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Rh=Ju;xh=$n;var Rv={usingClientEntryPoint:!1,Events:[Ki,nr,Ms,Ch,Th,Ju]},ei={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xv={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oh(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{bs=ko.inject(xv),ct=ko}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(t))throw Error(I(200));return Iv(e,t,null,n)};ze.createRoot=function(e,t){if(!oc(e))throw Error(I(299));var n=!1,r="",i=cm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nc(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new ic(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Oh(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $n(e)};ze.hydrate=function(e,t,n){if(!Gs(t))throw Error(I(200));return qs(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!oc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=cm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=um(t,null,e,1,n??null,i,!1,o,s),e[xt]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vs(t)};ze.render=function(e,t,n){if(!Gs(t))throw Error(I(200));return qs(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(I(40));return e._reactRootContainer?($n(function(){qs(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};ze.unstable_batchedUpdates=Ju;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gs(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return qs(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ze})(C0);var Wd=Za;Ja.createRoot=Wd.createRoot,Ja.hydrateRoot=Wd.hydrateRoot;const sc=A.createContext(null);/**
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
 */const dm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Pv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[c],n[f],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Pv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new Av;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Av extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ov=function(e){const t=dm(e);return fm.encodeByteArray(t,!0)},_s=function(e){return Ov(e).replace(/\./g,"")},hm=function(e){try{return fm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bv=()=>Nv().__FIREBASE_DEFAULTS__,Lv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Dv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&hm(e[1]);return t&&JSON.parse(t)},ac=()=>{try{return bv()||Lv()||Dv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pm=e=>{var t,n;return(n=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Uv=e=>{const t=pm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},mm=()=>{var e;return(e=ac())===null||e===void 0?void 0:e.config},gm=e=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Fv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[_s(JSON.stringify(n)),_s(JSON.stringify(s)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function $v(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jv(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Hv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Vv="FirebaseError";class bt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Vv,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Gv(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new bt(i,a,r)}}function Gv(e,t){return e.replace(qv,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qv=/\{\$([^}]+)}/g;function Kv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ws(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Vd(o)&&Vd(s)){if(!ws(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vd(e){return e!==null&&typeof e=="object"}/**
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
 */function Xi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function si(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ai(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Yv(e,t){const n=new Qv(e,t);return n.subscribe.bind(n)}class Qv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xv(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ma(){}/**
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
 */function ve(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class Jv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Mv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(e_(t))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tn){return this.instances.has(t)}getOptions(t=Tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Tn){return this.component?this.component.multipleInstances?t:Tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zv(e){return e===Tn?void 0:e}function e_(e){return e.instantiationMode==="EAGER"}/**
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
 */class t_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Jv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const n_={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},r_=H.INFO,i_={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},o_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=i_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ym{constructor(t){this.name=t,this._logLevel=r_,this._logHandler=o_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?n_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const s_=(e,t)=>t.some(n=>e instanceof n);let Gd,qd;function a_(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l_(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vm=new WeakMap,ql=new WeakMap,_m=new WeakMap,Fa=new WeakMap,lc=new WeakMap;function u_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(an(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&vm.set(n,e)}).catch(()=>{}),lc.set(t,e),t}function c_(e){if(ql.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ql.set(e,t)}let Kl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ql.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_m.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function d_(e){Kl=e(Kl)}function f_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(za(this),t,...n);return _m.set(r,t.sort?t.sort():[t]),an(r)}:l_().includes(e)?function(...t){return e.apply(za(this),t),an(vm.get(this))}:function(...t){return an(e.apply(za(this),t))}}function h_(e){return typeof e=="function"?f_(e):(e instanceof IDBTransaction&&c_(e),s_(e,a_())?new Proxy(e,Kl):e)}function an(e){if(e instanceof IDBRequest)return u_(e);if(Fa.has(e))return Fa.get(e);const t=h_(e);return t!==e&&(Fa.set(e,t),lc.set(t,e)),t}const za=e=>lc.get(e);function p_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=an(s);return r&&s.addEventListener("upgradeneeded",l=>{r(an(s.result),l.oldVersion,l.newVersion,an(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const m_=["get","getKey","getAll","getAllKeys","count"],g_=["put","add","delete","clear"],$a=new Map;function Kd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($a.get(t))return $a.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=g_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $a.set(t,o),o}d_(e=>({...e,get:(t,n,r)=>Kd(t,n)||e.get(t,n,r),has:(t,n)=>!!Kd(t,n)||e.has(t,n)}));/**
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
 */class y_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yl="@firebase/app",Yd="0.10.1";/**
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
 */const jn=new ym("@firebase/app"),__="@firebase/app-compat",w_="@firebase/analytics-compat",S_="@firebase/analytics",k_="@firebase/app-check-compat",E_="@firebase/app-check",I_="@firebase/auth",C_="@firebase/auth-compat",T_="@firebase/database",R_="@firebase/database-compat",x_="@firebase/functions",P_="@firebase/functions-compat",A_="@firebase/installations",O_="@firebase/installations-compat",N_="@firebase/messaging",b_="@firebase/messaging-compat",L_="@firebase/performance",D_="@firebase/performance-compat",U_="@firebase/remote-config",M_="@firebase/remote-config-compat",F_="@firebase/storage",z_="@firebase/storage-compat",$_="@firebase/firestore",B_="@firebase/firestore-compat",j_="firebase",H_="10.11.0";/**
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
 */const Ql="[DEFAULT]",W_={[Yl]:"fire-core",[__]:"fire-core-compat",[S_]:"fire-analytics",[w_]:"fire-analytics-compat",[E_]:"fire-app-check",[k_]:"fire-app-check-compat",[I_]:"fire-auth",[C_]:"fire-auth-compat",[T_]:"fire-rtdb",[R_]:"fire-rtdb-compat",[x_]:"fire-fn",[P_]:"fire-fn-compat",[A_]:"fire-iid",[O_]:"fire-iid-compat",[N_]:"fire-fcm",[b_]:"fire-fcm-compat",[L_]:"fire-perf",[D_]:"fire-perf-compat",[U_]:"fire-rc",[M_]:"fire-rc-compat",[F_]:"fire-gcs",[z_]:"fire-gcs-compat",[$_]:"fire-fst",[B_]:"fire-fst-compat","fire-js":"fire-js",[j_]:"fire-js-all"};/**
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
 */const Ss=new Map,V_=new Map,Xl=new Map;function Qd(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xr(e){const t=e.name;if(Xl.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Xl.set(t,e);for(const n of Ss.values())Qd(n,e);for(const n of V_.values())Qd(n,e);return!0}function uc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kt(e){return e.settings!==void 0}/**
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
 */const G_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ln=new Qi("app","Firebase",G_);/**
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
 */class q_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=H_;function wm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ql,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=mm()),!n)throw ln.create("no-options");const o=Ss.get(i);if(o){if(ws(n,o.options)&&ws(r,o.config))return o;throw ln.create("duplicate-app",{appName:i})}const s=new t_(i);for(const l of Xl.values())s.addComponent(l);const a=new q_(n,r,s);return Ss.set(i,a),a}function Sm(e=Ql){const t=Ss.get(e);if(!t&&e===Ql&&mm())return wm();if(!t)throw ln.create("no-app",{appName:e});return t}function un(e,t,n){var r;let i=(r=W_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}xr(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const K_="firebase-heartbeat-database",Y_=1,$i="firebase-heartbeat-store";let Ba=null;function km(){return Ba||(Ba=p_(K_,Y_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($i)}catch(n){console.warn(n)}}}}).catch(e=>{throw ln.create("idb-open",{originalErrorMessage:e.message})})),Ba}async function Q_(e){try{const n=(await km()).transaction($i),r=await n.objectStore($i).get(Em(e));return await n.done,r}catch(t){if(t instanceof bt)jn.warn(t.message);else{const n=ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function Xd(e,t){try{const r=(await km()).transaction($i,"readwrite");await r.objectStore($i).put(t,Em(e)),await r.done}catch(n){if(n instanceof bt)jn.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function Em(e){return`${e.name}!${e.options.appId}`}/**
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
 */const X_=1024,J_=30*24*60*60*1e3;class Z_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Jd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=J_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jd(),{heartbeatsToSend:r,unsentEntries:i}=ew(this._heartbeatsCache.heartbeats),o=_s(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Jd(){return new Date().toISOString().substring(0,10)}function ew(e,t=X_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Zd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Zd(e){return _s(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nw(e){xr(new Bn("platform-logger",t=>new y_(t),"PRIVATE")),xr(new Bn("heartbeat",t=>new Z_(t),"PRIVATE")),un(Yl,Yd,e),un(Yl,Yd,"esm2017"),un("fire-js","")}nw("");var rw="firebase",iw="10.11.0";/**
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
 */un(rw,iw,"app");function cc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Im(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ow=Im,Cm=new Qi("auth","Firebase",Im());/**
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
 */const ks=new ym("@firebase/auth");function sw(e,...t){ks.logLevel<=H.WARN&&ks.warn(`Auth (${$r}): ${e}`,...t)}function $o(e,...t){ks.logLevel<=H.ERROR&&ks.error(`Auth (${$r}): ${e}`,...t)}/**
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
 */function rt(e,...t){throw dc(e,...t)}function ft(e,...t){return dc(e,...t)}function Tm(e,t,n){const r=Object.assign(Object.assign({},ow()),{[t]:n});return new Qi("auth","Firebase",r).create(t,{appName:e.name})}function cn(e){return Tm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cm.create(e,...t)}function N(e,t,...n){if(!e)throw dc(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $o(t),new Error(t)}function Ot(e,t){e||Et(t)}/**
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
 */function Jl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function aw(){return ef()==="http:"||ef()==="https:"}function ef(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aw()||$v()||"connection"in navigator)?navigator.onLine:!0}function uw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ot(n>t,"Short delay should be less than long delay!"),this.isMobile=zv()||Bv()}get(){return lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fc(e,t){Ot(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Rm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dw=new Ji(3e4,6e4);function qn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function yn(e,t,n,r,i={}){return xm(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Xi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Rm.fetch()(Pm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function xm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},cw),t);try{const i=new hw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Eo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tm(e,c,u);rt(e,c)}}catch(i){if(i instanceof bt)throw i;rt(e,"network-request-failed",{message:String(i)})}}async function Ks(e,t,n,r,i={}){const o=await yn(e,t,n,r,i);return"mfaPendingCredential"in o&&rt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Pm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fc(e.config,i):`${e.config.apiScheme}://${i}`}function fw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),dw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(e,t,r);return i.customData._tokenResponse=n,i}function tf(e){return e!==void 0&&e.enterprise!==void 0}class pw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return fw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function mw(e,t){return yn(e,"GET","/v2/recaptchaConfig",qn(e,t))}/**
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
 */async function gw(e,t){return yn(e,"POST","/v1/accounts:delete",t)}async function Am(e,t){return yn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function vi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yw(e,t=!1){const n=ve(e),r=await n.getIdToken(t),i=hc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:vi(ja(i.auth_time)),issuedAtTime:vi(ja(i.iat)),expirationTime:vi(ja(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ja(e){return Number(e)*1e3}function hc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const i=hm(n);return i?JSON.parse(i):($o("Failed to decode base64 JWT payload"),null)}catch(i){return $o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nf(e){const t=hc(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Bi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof bt&&vw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _w{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Bi(e,Am(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Om(o.providerUserInfo):[],a=Sw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Zl(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function ww(e){const t=ve(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Sw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Om(e){return e.map(t=>{var{providerId:n}=t,r=cc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kw(e,t){const n=await xm(e,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Pm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ew(e,t){return yn(e,"POST","/v2/accounts:revokeToken",qn(e,t))}/**
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
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=nf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await kw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new yr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function zt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class It{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=cc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _w(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Zl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yw(this,t)}reload(){return ww(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new It(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(cn(this.auth));const t=await this.getIdToken();return await Bi(this,gw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:h,emailVerified:y,isAnonymous:E,providerData:k,stsTokenManager:S}=n;N(h&&S,t,"internal-error");const C=yr.fromJSON(this.name,S);N(typeof h=="string",t,"internal-error"),zt(f,t.name),zt(m,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof E=="boolean",t,"internal-error"),zt(g,t.name),zt(v,t.name),zt(w,t.name),zt(x,t.name),zt(p,t.name),zt(d,t.name);const M=new It({uid:h,auth:t,email:m,emailVerified:y,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:C,createdAt:p,lastLoginAt:d});return k&&Array.isArray(k)&&(M.providerData=k.map(D=>Object.assign({},D))),x&&(M._redirectEventId=x),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new yr;i.updateFromServerResponse(n);const o=new It({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Es(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Om(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new yr;a.updateFromIdToken(r);const l=new It({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const rf=new Map;function Ct(e){Ot(e instanceof Function,"Expected a class definition");let t=rf.get(e);return t?(Ot(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rf.set(e,t),t)}/**
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
 */class Nm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Nm.type="NONE";const of=Nm;/**
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
 */function Bo(e,t,n){return`firebase:${e}:${t}:${n}`}class vr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Bo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Bo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?It._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new vr(Ct(of),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ct(of);const s=Bo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=It._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new vr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new vr(o,t,r))}}/**
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
 */function sf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mm(t))return"Blackberry";if(Fm(t))return"Webos";if(pc(t))return"Safari";if((t.includes("chrome/")||Lm(t))&&!t.includes("edge/"))return"Chrome";if(Um(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bm(e=ye()){return/firefox\//i.test(e)}function pc(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lm(e=ye()){return/crios\//i.test(e)}function Dm(e=ye()){return/iemobile/i.test(e)}function Um(e=ye()){return/android/i.test(e)}function Mm(e=ye()){return/blackberry/i.test(e)}function Fm(e=ye()){return/webos/i.test(e)}function Ys(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Iw(e=ye()){var t;return Ys(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Cw(){return jv()&&document.documentMode===10}function zm(e=ye()){return Ys(e)||Um(e)||Fm(e)||Mm(e)||/windows phone/i.test(e)||Dm(e)}function Tw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $m(e,t=[]){let n;switch(e){case"Browser":n=sf(ye());break;case"Worker":n=`${sf(ye())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class Rw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xw(e,t={}){return yn(e,"GET","/v2/passwordPolicy",qn(e,t))}/**
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
 */const Pw=6;class Aw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Pw,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class Ow{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Am(this,{idToken:t}),r=await It._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kt(this.app))return Promise.reject(cn(this));const n=t?ve(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xw(this),n=new Aw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Qi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ew(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ct(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&sw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(e){return ve(e)}class af{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yv(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nw(e){Qs=e}function Bm(e){return Qs.loadJS(e)}function bw(){return Qs.recaptchaEnterpriseScript}function Lw(){return Qs.gapiScript}function Dw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Uw="recaptcha-enterprise",Mw="NO_RECAPTCHA";class Fw{constructor(t){this.type=Uw,this.auth=Br(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{mw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new pw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;tf(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Mw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&tf(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bw();l.length!==0&&(l+=a),Bm(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function lf(e,t,n,r=!1){const i=new Fw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function uf(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await lf(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function zw(e,t){const n=uc(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ws(o,t??{}))return i;rt(i,"already-initialized")}return n.initialize({options:t})}function $w(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bw(e,t,n){const r=Br(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=jm(t),{host:s,port:a}=jw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Hw()}function jm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function jw(e){const t=jm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:cf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:cf(s)}}}function cf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Hw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class mc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function Ww(e,t){return yn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Vw(e,t){return Ks(e,"POST","/v1/accounts:signInWithPassword",qn(e,t))}/**
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
 */async function Gw(e,t){return Ks(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}async function qw(e,t){return Ks(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}/**
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
 */class ji extends mc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ji(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ji(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(t,n,"signInWithPassword",Vw);case"emailLink":return Gw(t,{email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uf(t,r,"signUpPassword",Ww);case"emailLink":return qw(t,{idToken:n,email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function _r(e,t){return Ks(e,"POST","/v1/accounts:signInWithIdp",qn(e,t))}/**
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
 */const Kw="http://localhost";class Hn extends mc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=cc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Hn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return _r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_r(t,n)}buildRequest(){const t={requestUri:Kw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Xi(n)}return t}}/**
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
 */function Yw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qw(e){const t=si(ai(e)).link,n=t?si(ai(t)).deep_link_id:null,r=si(ai(e)).deep_link_id;return(r?si(ai(r)).link:null)||r||n||t||e}class gc{constructor(t){var n,r,i,o,s,a;const l=si(ai(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Yw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Qw(t);try{return new gc(n)}catch{return null}}}/**
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
 */class jr{constructor(){this.providerId=jr.PROVIDER_ID}static credential(t,n){return ji._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=gc.parseLink(n);return N(r,"argument-error"),ji._fromEmailAndCode(t,r.code,r.tenantId)}}jr.PROVIDER_ID="password";jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Zi{constructor(){super("facebook.com")}static credential(t){return Hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class qt extends Zi{constructor(){super("github.com")}static credential(t){return Hn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Kt extends Zi{constructor(){super("twitter.com")}static credential(t,n){return Hn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */class Pr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await It._fromIdTokenResponse(t,r,i),s=df(r);return new Pr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=df(r);return new Pr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function df(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Is extends bt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Is(t,n,r,i)}}function Wm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(e,o,t,r):o})}async function Xw(e,t,n=!1){const r=await Bi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pr._forOperation(e,"link",r)}/**
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
 */async function Jw(e,t,n=!1){const{auth:r}=e;if(kt(r.app))return Promise.reject(cn(r));const i="reauthenticate";try{const o=await Bi(e,Wm(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=hc(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Pr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),o}}/**
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
 */async function Vm(e,t,n=!1){if(kt(e.app))return Promise.reject(cn(e));const r="signIn",i=await Wm(e,r,t),o=await Pr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Zw(e,t){return Vm(Br(e),t)}/**
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
 */async function e1(e){const t=Br(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function t1(e,t,n){return kt(e.app)?Promise.reject(cn(e)):Zw(ve(e),jr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&e1(e),r})}function n1(e,t,n,r){return ve(e).onIdTokenChanged(t,n,r)}function r1(e,t,n){return ve(e).beforeAuthStateChanged(t,n)}function i1(e,t,n,r){return ve(e).onAuthStateChanged(t,n,r)}const Cs="__sak";/**
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
 */class Gm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function o1(){const e=ye();return pc(e)||Ys(e)}const s1=1e3,a1=10;class qm extends Gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=o1()&&Tw(),this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Cw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,a1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qm.type="LOCAL";const l1=qm;/**
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
 */class Km extends Gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Km.type="SESSION";const Ym=Km;/**
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
 */function u1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Xs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await u1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xs.receivers=[];/**
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
 */function yc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class c1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=yc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ht(){return window}function d1(e){ht().location.href=e}/**
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
 */function Qm(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function f1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function p1(){return Qm()?self:null}/**
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
 */const Xm="firebaseLocalStorageDb",m1=1,Ts="firebaseLocalStorage",Jm="fbase_key";class eo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Js(e,t){return e.transaction([Ts],t?"readwrite":"readonly").objectStore(Ts)}function g1(){const e=indexedDB.deleteDatabase(Xm);return new eo(e).toPromise()}function eu(){const e=indexedDB.open(Xm,m1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ts,{keyPath:Jm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ts)?t(r):(r.close(),await g1(),t(await eu()))})})}async function ff(e,t,n){const r=Js(e,!0).put({[Jm]:t,value:n});return new eo(r).toPromise()}async function y1(e,t){const n=Js(e,!1).get(t),r=await new eo(n).toPromise();return r===void 0?null:r.value}function hf(e,t){const n=Js(e,!0).delete(t);return new eo(n).toPromise()}const v1=800,_1=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xs._getInstance(p1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await f1(),!this.activeServiceWorker)return;this.sender=new c1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||h1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await eu();return await ff(t,Cs,"1"),await hf(t,Cs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ff(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>y1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Js(i,!1).getAll();return new eo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const w1=Zm;new Ji(3e4,6e4);/**
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
 */function S1(e,t){return t?Ct(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class vc extends mc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function k1(e){return Vm(e.auth,new vc(e),e.bypassAuthState)}function E1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Jw(n,new vc(e),e.bypassAuthState)}async function I1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Xw(n,new vc(e),e.bypassAuthState)}/**
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
 */class eg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return I1;case"reauthViaPopup":case"reauthViaRedirect":return E1;default:rt(this.auth,"internal-error")}}resolve(t){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const C1=new Ji(2e3,1e4);class ur extends eg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const t=yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,C1.get())};t()}}ur.currentPopupAction=null;/**
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
 */const T1="pendingRedirect",jo=new Map;class R1 extends eg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=jo.get(this.auth._key());if(!t){try{const r=await x1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}jo.set(this.auth._key(),t)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x1(e,t){const n=O1(t),r=A1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function P1(e,t){jo.set(e._key(),t)}function A1(e){return Ct(e._redirectPersistence)}function O1(e){return Bo(T1,e.config.apiKey,e.name)}async function N1(e,t,n=!1){if(kt(e.app))return Promise.reject(cn(e));const r=Br(e),i=S1(r,t),s=await new R1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const b1=10*60*1e3;class L1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!D1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=b1&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(t))}saveEventToCache(t){this.cachedEventUids.add(pf(t)),this.lastProcessedEventTime=Date.now()}}function pf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function D1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(e);default:return!1}}/**
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
 */async function U1(e,t={}){return yn(e,"GET","/v1/projects",t)}/**
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
 */const M1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F1=/^https?/;async function z1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await U1(e);for(const n of t)try{if($1(n))return}catch{}rt(e,"unauthorized-domain")}function $1(e){const t=Jl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!F1.test(n))return!1;if(M1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const B1=new Ji(3e4,6e4);function mf(){const e=ht().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function j1(e){return new Promise((t,n)=>{var r,i,o;function s(){mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mf(),n(ft(e,"network-request-failed"))},timeout:B1.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ht().gapi)===null||o===void 0)&&o.load)s();else{const a=Dw("iframefcb");return ht()[a]=()=>{gapi.load?s():n(ft(e,"network-request-failed"))},Bm(`${Lw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ho=null,t})}let Ho=null;function H1(e){return Ho=Ho||j1(e),Ho}/**
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
 */const W1=new Ji(5e3,15e3),V1="__/auth/iframe",G1="emulator/auth/iframe",q1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y1(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fc(t,G1):`https://${e.config.authDomain}/${V1}`,r={apiKey:t.apiKey,appName:e.name,v:$r},i=K1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Xi(r).slice(1)}`}async function Q1(e){const t=await H1(e),n=ht().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:Y1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ft(e,"network-request-failed"),a=ht().setTimeout(()=>{o(s)},W1.get());function l(){ht().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const X1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J1=500,Z1=600,eS="_blank",tS="http://localhost";class gf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nS(e,t,n,r=J1,i=Z1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},X1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ye().toLowerCase();n&&(a=Lm(u)?eS:n),bm(u)&&(t=t||tS,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[g,v])=>`${m}${g}=${v},`,"");if(Iw(u)&&a!=="_self")return rS(t||"",a),new gf(null);const f=window.open(t||"",a,c);N(f,e,"popup-blocked");try{f.focus()}catch{}return new gf(f)}function rS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iS="__/auth/handler",oS="emulator/auth/handler",sS=encodeURIComponent("fac");async function yf(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(t instanceof Hm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Kv(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(t instanceof Zi){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${sS}=${encodeURIComponent(l)}`:"";return`${aS(e)}?${Xi(a).slice(1)}${u}`}function aS({config:e}){return e.emulator?fc(e,oS):`https://${e.authDomain}/${iS}`}/**
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
 */const Ha="webStorageSupport";class lS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=N1,this._overrideRedirectResult=P1}async _openPopup(t,n,r,i){var o;Ot((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await yf(t,n,r,Jl(),i);return nS(t,s,yc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await yf(t,n,r,Jl(),i);return d1(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ot(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Q1(t),r=new L1(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ha,{type:Ha},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ha];s!==void 0&&n(!!s),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||pc()||Ys()}}const uS=lS;var vf="@firebase/auth",_f="1.7.1";/**
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
 */class cS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fS(e){xr(new Bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(e)},u=new Ow(r,i,o,l);return $w(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),xr(new Bn("auth-internal",t=>{const n=Br(t.getProvider("auth").getImmediate());return(r=>new cS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(vf,_f,dS(e)),un(vf,_f,"esm2017")}/**
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
 */const hS=5*60,pS=gm("authIdTokenMaxAge")||hS;let wf=null;const mS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pS)return;const i=n==null?void 0:n.token;wf!==i&&(wf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gS(e=Sm()){const t=uc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=zw(e,{popupRedirectResolver:uS,persistence:[w1,l1,Ym]}),r=gm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=mS(o.toString());r1(n,s,()=>s(n.currentUser)),n1(n,a=>s(a))}}const i=pm("auth");return i&&Bw(n,`http://${i}`),n}function yS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Nw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ft("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",yS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fS("Browser");const vS={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},ng=wm(vS),_c=gS(ng),_S=async(e,t)=>{try{return await t1(_c,e,t)}catch{return{error:!0,type:"Something went wrong"}}},wS=({children:e})=>{const[t,n]=A.useState(null);return A.useEffect(()=>{i1(_c,r=>{n(r)})},[]),_(sc.Provider,{value:t,children:e})},SS="modulepreload",kS=function(e,t){return new URL(e,t).href},Sf={},ES=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=kS(o,r),o in Sf)return;Sf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":SS,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},kf=""+new URL("awcy-ad680841.mp3",import.meta.url).href,IS=""+new URL("tee-647bc5ea.png",import.meta.url).href;/**
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
 */const rg="firebasestorage.googleapis.com",ig="storageBucket",CS=2*60*1e3,TS=10*60*1e3,RS=1e3;/**
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
 */class ee extends bt{constructor(t,n,r=0){super(Wa(t),`Firebase Storage: ${n} (${Wa(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Wa(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function Wa(e){return"storage/"+e}function wc(){const e="An unknown error occurred, please check the error payload for server response.";return new ee(K.UNKNOWN,e)}function xS(e){return new ee(K.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function PS(e){return new ee(K.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(K.UNAUTHENTICATED,e)}function OS(){return new ee(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NS(e){return new ee(K.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function og(){return new ee(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sg(){return new ee(K.CANCELED,"User canceled the upload/download.")}function bS(e){return new ee(K.INVALID_URL,"Invalid URL '"+e+"'.")}function LS(e){return new ee(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function DS(){return new ee(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ig+"' property when initializing the app?")}function ag(){return new ee(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function US(){return new ee(K.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function MS(){return new ee(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FS(e){return new ee(K.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tu(e){return new ee(K.INVALID_ARGUMENT,e)}function lg(){return new ee(K.APP_DELETED,"The Firebase app was deleted.")}function zS(e){return new ee(K.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _i(e,t){return new ee(K.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function ti(e){throw new ee(K.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class ke{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ke.makeFromUrl(t,n)}catch{return new ke(t,"")}if(r.path==="")return r;throw LS(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${m}`,"i"),v={bucket:1,path:3},w=n===rg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${x}`,"i"),h=[{regex:a,indices:l,postModify:o},{regex:g,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<h.length;y++){const E=h[y],k=E.regex.exec(t);if(k){const S=k[E.indices.bucket];let C=k[E.indices.path];C||(C=""),r=new ke(S,C),E.postModify(r);break}}if(r==null)throw bS(t);return r}}class $S{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function BS(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...x){u||(u=!0,t.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,e(g,l())},x)}function m(){o&&clearTimeout(o)}function g(x,...p){if(u){m();return}if(x){m(),c.call(null,x,...p);return}if(l()||s){m(),c.call(null,x,...p);return}r<64&&(r*=2);let h;a===1?(a=2,h=0):h=(r+Math.random())*1e3,f(h)}let v=!1;function w(x){v||(v=!0,m(),!u&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,w(!0)},n),w}function jS(e){e(!1)}/**
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
 */function HS(e){return e!==void 0}function WS(e){return typeof e=="function"}function VS(e){return typeof e=="object"&&!Array.isArray(e)}function Zs(e){return typeof e=="string"||e instanceof String}function Ef(e){return Sc()&&e instanceof Blob}function Sc(){return typeof Blob<"u"}function nu(e,t,n,r){if(r<t)throw tu(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw tu(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function vn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function ug(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var bn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(bn||(bn={}));/**
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
 */function cg(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class GS{constructor(t,n,r,i,o,s,a,l,u,c,f,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Io(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===bn.NO_ERROR,l=o.getStatus();if(!a||cg(l,this.additionalRetryCodes_)&&this.retry){const c=o.getErrorCode()===bn.ABORT;r(!1,new Io(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Io(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HS(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=wc();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?lg():sg();s(l)}else{const l=og();s(l)}};this.canceled_?n(!1,new Io(!1,null,!0)):this.backoffId_=BS(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&jS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Io{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function qS(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function KS(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function YS(e,t){t&&(e["X-Firebase-GMPID"]=t)}function QS(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function XS(e,t,n,r,i,o,s=!0){const a=ug(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return YS(u,t),qS(u,n),KS(u,o),QS(u,r),new GS(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function JS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZS(...e){const t=JS();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Sc())return new Blob(e);throw new ee(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ek(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function tk(e){if(typeof atob>"u")throw FS("base-64");return atob(e)}/**
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
 */const ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Va{constructor(t,n){this.data=t,this.contentType=n||null}}function nk(e,t){switch(e){case ut.RAW:return new Va(dg(t));case ut.BASE64:case ut.BASE64URL:return new Va(fg(e,t));case ut.DATA_URL:return new Va(ik(t),ok(t))}throw wc()}function dg(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,s=e.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function rk(e){let t;try{t=decodeURIComponent(e)}catch{throw _i(ut.DATA_URL,"Malformed data URL.")}return dg(t)}function fg(e,t){switch(e){case ut.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw _i(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ut.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw _i(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tk(t)}catch(i){throw i.message.includes("polyfill")?i:_i(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class hg{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw _i(ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function ik(e){const t=new hg(e);return t.base64?fg(ut.BASE64,t.rest):rk(t.rest)}function ok(e){return new hg(e).contentType}function sk(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Yt{constructor(t,n){let r=0,i="";Ef(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ef(this.data_)){const r=this.data_,i=ek(r,t,n);return i===null?null:new Yt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Yt(r,!0)}}static getBlob(...t){if(Sc()){const n=t.map(r=>r instanceof Yt?r.data_:r);return new Yt(ZS.apply(null,n))}else{const n=t.map(s=>Zs(s)?nk(ut.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new Yt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function kc(e){let t;try{t=JSON.parse(e)}catch{return null}return VS(t)?t:null}/**
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
 */function ak(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function lk(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function pg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function uk(e,t){return t}class _e{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||uk}}let Co=null;function ck(e){return!Zs(e)||e.length<2?e:pg(e)}function ea(){if(Co)return Co;const e=[];e.push(new _e("bucket")),e.push(new _e("generation")),e.push(new _e("metageneration")),e.push(new _e("name","fullPath",!0));function t(o,s){return ck(s)}const n=new _e("name");n.xform=t,e.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new _e("size");return i.xform=r,e.push(i),e.push(new _e("timeCreated")),e.push(new _e("updated")),e.push(new _e("md5Hash",null,!0)),e.push(new _e("cacheControl",null,!0)),e.push(new _e("contentDisposition",null,!0)),e.push(new _e("contentEncoding",null,!0)),e.push(new _e("contentLanguage",null,!0)),e.push(new _e("contentType",null,!0)),e.push(new _e("metadata","customMetadata",!0)),Co=e,Co}function dk(e,t){function n(){const r=e.bucket,i=e.fullPath,o=new ke(r,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function fk(e,t,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,t[s.server])}return dk(r,e),r}function mg(e,t,n){const r=kc(t);return r===null?null:fk(e,r,n)}function hk(e,t,n,r){const i=kc(t);if(i===null||!Zs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const c=e.bucket,f=e.fullPath,m="/b/"+s(c)+"/o/"+s(f),g=vn(m,n,r),v=ug({alt:"media",token:u});return g+v})[0]}function Ec(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const If="prefixes",Cf="items";function pk(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[If])for(const i of n[If]){const o=i.replace(/\/$/,""),s=e._makeStorageReference(new ke(t,o));r.prefixes.push(s)}if(n[Cf])for(const i of n[Cf]){const o=e._makeStorageReference(new ke(t,i.name));r.items.push(o)}return r}function mk(e,t,n){const r=kc(n);return r===null?null:pk(e,t,r)}class Lt{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pt(e){if(!e)throw wc()}function ta(e,t){function n(r,i){const o=mg(e,i,t);return pt(o!==null),o}return n}function gk(e,t){function n(r,i){const o=mk(e,t,i);return pt(o!==null),o}return n}function yk(e,t){function n(r,i){const o=mg(e,i,t);return pt(o!==null),hk(o,i,e.host,e._protocol)}return n}function Hr(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=OS():i=AS():n.getStatus()===402?i=PS(e.bucket):n.getStatus()===403?i=NS(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function na(e){const t=Hr(e);function n(r,i){let o=t(r,i);return r.getStatus()===404&&(o=xS(e.path)),o.serverResponse=i.serverResponse,o}return n}function gg(e,t,n){const r=t.fullServerUrl(),i=vn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Lt(i,o,ta(e,n),s);return a.errorHandler=na(t),a}function vk(e,t,n,r,i){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=t.bucketOnlyServerUrl(),a=vn(s,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,c=new Lt(a,l,gk(e,t.bucket),u);return c.urlParams=o,c.errorHandler=Hr(t),c}function _k(e,t,n){const r=t.fullServerUrl(),i=vn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Lt(i,o,yk(e,n),s);return a.errorHandler=na(t),a}function wk(e,t,n,r){const i=t.fullServerUrl(),o=vn(i,e.host,e._protocol),s="PATCH",a=Ec(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,c=new Lt(o,s,ta(e,r),u);return c.headers=l,c.body=a,c.errorHandler=na(t),c}function Sk(e,t){const n=t.fullServerUrl(),r=vn(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(l,u){}const a=new Lt(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=na(t),a}function kk(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function yg(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=kk(null,t)),r}function Ek(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let h="";for(let y=0;y<2;y++)h=h+Math.random().toString().slice(2);return h}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=yg(t,r,i),c=Ec(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",g=Yt.getBlob(f,r,m);if(g===null)throw ag();const v={name:u.fullPath},w=vn(o,e.host,e._protocol),x="POST",p=e.maxUploadRetryTime,d=new Lt(w,x,ta(e,n),p);return d.urlParams=v,d.headers=s,d.body=g.uploadData(),d.errorHandler=Hr(t),d}class Rs{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ic(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{pt(!1)}return pt(!!n&&(t||["active"]).indexOf(n)!==-1),n}function Ik(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=yg(t,r,i),a={name:s.fullPath},l=vn(o,e.host,e._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},f=Ec(s,n),m=e.maxUploadRetryTime;function g(w){Ic(w);let x;try{x=w.getResponseHeader("X-Goog-Upload-URL")}catch{pt(!1)}return pt(Zs(x)),x}const v=new Lt(l,u,g,m);return v.urlParams=a,v.headers=c,v.body=f,v.errorHandler=Hr(t),v}function Ck(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const c=Ic(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{pt(!1)}f||pt(!1);const m=Number(f);return pt(!isNaN(m)),new Rs(m,r.size(),c==="final")}const s="POST",a=e.maxUploadRetryTime,l=new Lt(n,s,o,a);return l.headers=i,l.errorHandler=Hr(t),l}const Tf=256*1024;function Tk(e,t,n,r,i,o,s,a){const l=new Rs(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw US();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const f=l.current,m=f+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const v={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},w=r.slice(f,m);if(w===null)throw ag();function x(y,E){const k=Ic(y,["active","final"]),S=l.current+c,C=r.size();let M;return k==="final"?M=ta(t,o)(y,E):M=null,new Rs(S,C,k==="final",M)}const p="POST",d=t.maxUploadRetryTime,h=new Lt(n,p,x,d);return h.headers=v,h.body=w.uploadData(),h.progressCallback=a||null,h.errorHandler=Hr(e),h}const Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ga(e){switch(e){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;case"error":return Te.ERROR;default:return Te.ERROR}}/**
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
 */class Rk{constructor(t,n,r){if(WS(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function Yn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class xk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw ti("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ti("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ti("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ti("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ti("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Pk extends xk{initXhr(){this.xhr_.responseType="text"}}function lt(){return new Pk}/**
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
 */class Ak{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=ea(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(K.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(cg(i.status,[]))if(o)i=og();else{this.sleepTime=Math.max(this.sleepTime*2,RS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(K.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=Ik(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=Ck(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,lt,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Tf*this._chunkMultiplier,n=new Rs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=Tk(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,lt,i,o,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Tf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=gg(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=Ek(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=sg(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ga(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const o=new Rk(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ga(this._state)){case Te.SUCCESS:Yn(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:const n=this._reject;Yn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ga(this._state)){case Te.RUNNING:case Te.PAUSED:t.next&&Yn(t.next.bind(t,this.snapshot))();break;case Te.SUCCESS:t.complete&&Yn(t.complete.bind(t))();break;case Te.CANCELED:case Te.ERROR:t.error&&Yn(t.error.bind(t,this._error))();break;default:t.error&&Yn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Wn{constructor(t,n){this._service=t,n instanceof ke?this._location=n:this._location=ke.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Wn(t,n)}get root(){const t=new ke(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pg(this._location.path)}get storage(){return this._service}get parent(){const t=ak(this._location.path);if(t===null)return null;const n=new ke(this._location.bucket,t);return new Wn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw zS(t)}}function Ok(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ak(e,new Yt(t),n)}function Nk(e){const t={prefixes:[],items:[]};return vg(e,t).then(()=>t)}async function vg(e,t,n){const i=await bk(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await vg(e,t,i.nextPageToken)}function bk(e,t){t!=null&&typeof t.maxResults=="number"&&nu("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=vk(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,lt)}function Lk(e){e._throwIfRoot("getMetadata");const t=gg(e.storage,e._location,ea());return e.storage.makeRequestWithTokens(t,lt)}function Dk(e,t){e._throwIfRoot("updateMetadata");const n=wk(e.storage,e._location,t,ea());return e.storage.makeRequestWithTokens(n,lt)}function Uk(e){e._throwIfRoot("getDownloadURL");const t=_k(e.storage,e._location,ea());return e.storage.makeRequestWithTokens(t,lt).then(n=>{if(n===null)throw MS();return n})}function Mk(e){e._throwIfRoot("deleteObject");const t=Sk(e.storage,e._location);return e.storage.makeRequestWithTokens(t,lt)}function Fk(e,t){const n=lk(e._location.path,t),r=new ke(e._location.bucket,n);return new Wn(e.storage,r)}/**
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
 */function zk(e){return/^[A-Za-z]+:\/\//.test(e)}function $k(e,t){return new Wn(e,t)}function _g(e,t){if(e instanceof Cc){const n=e;if(n._bucket==null)throw DS();const r=new Wn(n,n._bucket);return t!=null?_g(r,t):r}else return t!==void 0?Fk(e,t):e}function Bk(e,t){if(t&&zk(t)){if(e instanceof Cc)return $k(e,t);throw tu("To use ref(service, url), the first argument must be a Storage instance.")}else return _g(e,t)}function Rf(e,t){const n=t==null?void 0:t[ig];return n==null?null:ke.makeFromBucketSpec(n,e)}function jk(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Fv(i,e.app.options.projectId))}class Cc{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=rg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CS,this._maxUploadRetryTime=TS,this._requests=new Set,i!=null?this._bucket=ke.makeFromBucketSpec(i,this._host):this._bucket=Rf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ke.makeFromBucketSpec(this._url,t):this._bucket=Rf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){nu("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){nu("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Wn(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new $S(lg());{const s=XS(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const xf="@firebase/storage",Pf="0.12.4";/**
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
 */const wg="storage";function Hk(e,t,n){return e=ve(e),Ok(e,t,n)}function Wk(e){return e=ve(e),Lk(e)}function Sg(e,t){return e=ve(e),Dk(e,t)}function Vk(e){return e=ve(e),Nk(e)}function kg(e){return e=ve(e),Uk(e)}function Gk(e){return e=ve(e),Mk(e)}function Ar(e,t){return e=ve(e),Bk(e,t)}function qk(e=Sm(),t){e=ve(e);const r=uc(e,wg).getImmediate({identifier:t}),i=Uv("storage");return i&&Kk(r,...i),r}function Kk(e,t,n,r={}){jk(e,t,n,r)}function Yk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Cc(n,r,i,t,$r)}function Qk(){xr(new Bn(wg,Yk,"PUBLIC").setMultipleInstances(!0)),un(xf,Pf,""),un(xf,Pf,"esm2017")}Qk();const Or=qk(ng),Xk=async(e,t)=>{const n=Ar(Or,t.name);return await Hk(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t}).then(async o=>{const s=await kg(o.ref),a=o.metadata;return{downloadUrl:s,metadata:a}})},Jk=async()=>{const t=(await Vk(Ar(Or))).items.map(async r=>{const i=Ar(Or,r.fullPath),o=await kg(i),s=await Wk(i);return{downloadUrl:o,metadata:s}});return await Promise.all(t)},BC=async e=>{const t=Ar(Or,e);await Gk(t)},jC=async(e,t)=>{const n=Ar(Or,e);await Sg(n,{customMetadata:{caption:t}})},HC=async(e,t)=>{const n=Ar(Or,e);await Sg(n,{customMetadata:{pinned:t?"true":"false",pinnedAt:`${Date.now()}`}})};var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function Hi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",wi="-moz-",z="-webkit-",Eg="comm",ra="rule",Tc="decl",Zk="@import",Ig="@keyframes",eE="@layer",Cg=Math.abs,Rc=String.fromCharCode,ru=Object.assign;function tE(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Tg(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Wo(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function st(e){return e.length}function Rg(e){return e.length}function li(e,t){return t.push(e),e}function nE(e,t){return e.map(t).join("")}function Af(e,t){return e.filter(function(n){return!vt(n,t)})}var ia=1,br=1,xg=0,qe=0,re=0,Wr="";function oa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ia,column:br,length:s,return:"",siblings:a}}function $t(e,t){return ru(oa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=$t(e.root,{children:[e]});li(e,e.siblings)}function rE(){return re}function iE(){return re=qe>0?le(Wr,--qe):0,br--,re===10&&(br=1,ia--),re}function tt(){return re=qe<xg?le(Wr,qe++):0,br++,re===10&&(br=1,ia++),re}function Ln(){return le(Wr,qe)}function Vo(){return qe}function sa(e,t){return Nr(Wr,e,t)}function iu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function oE(e){return ia=br=1,xg=st(Wr=e),qe=0,[]}function sE(e){return Wr="",e}function qa(e){return Tg(sa(qe-1,ou(e===91?e+2:e===40?e+1:e)))}function aE(e){for(;(re=Ln())&&re<33;)tt();return iu(e)>2||iu(re)>3?"":" "}function lE(e,t){for(;--t&&tt()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return sa(e,Vo()+(t<6&&Ln()==32&&tt()==32))}function ou(e){for(;tt();)switch(re){case e:return qe;case 34:case 39:e!==34&&e!==39&&ou(re);break;case 40:e===41&&ou(e);break;case 92:tt();break}return qe}function uE(e,t){for(;tt()&&e+re!==47+10;)if(e+re===42+42&&Ln()===47)break;return"/*"+sa(t,qe-1)+"*"+Rc(e===47?e:tt())}function cE(e){for(;!iu(Ln());)tt();return sa(e,qe)}function dE(e){return sE(Go("",null,null,null,[""],e=oE(e),0,[0],e))}function Go(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,m=0,g=0,v=0,w=1,x=1,p=1,d=0,h="",y=i,E=o,k=r,S=h;x;)switch(v=d,d=tt()){case 40:if(v!=108&&le(S,f-1)==58){Wo(S+=L(qa(d),"&","&\f"),"&\f",Cg(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=qa(d);break;case 9:case 10:case 13:case 32:S+=aE(v);break;case 92:S+=lE(Vo()-1,7);continue;case 47:switch(Ln()){case 42:case 47:li(fE(uE(tt(),Vo()),t,n,l),l);break;default:S+="/"}break;case 123*w:a[u++]=st(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:p==-1&&(S=L(S,/\f/g,"")),g>0&&st(S)-f&&li(g>32?Nf(S+";",r,n,f-1,l):Nf(L(S," ","")+";",r,n,f-2,l),l);break;case 59:S+=";";default:if(li(k=Of(S,t,n,u,c,i,a,h,y=[],E=[],f,o),o),d===123)if(c===0)Go(S,t,k,k,y,o,f,a,E);else switch(m===99&&le(S,3)===110?100:m){case 100:case 108:case 109:case 115:Go(e,k,k,r&&li(Of(e,k,k,0,0,i,a,h,i,y=[],f,E),E),i,E,f,a,r?y:E);break;default:Go(S,k,k,k,[""],E,0,a,E)}}u=c=g=0,w=p=1,h=S="",f=s;break;case 58:f=1+st(S),g=v;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&iE()==125)continue}switch(S+=Rc(d),d*w){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(st(S)-1)*p,p=1;break;case 64:Ln()===45&&(S+=qa(tt())),m=Ln(),c=f=st(h=S+=cE(Vo())),d++;break;case 45:v===45&&st(S)==2&&(w=0)}}return o}function Of(e,t,n,r,i,o,s,a,l,u,c,f){for(var m=i-1,g=i===0?o:[""],v=Rg(g),w=0,x=0,p=0;w<r;++w)for(var d=0,h=Nr(e,m+1,m=Cg(x=s[w])),y=e;d<v;++d)(y=Tg(x>0?g[d]+" "+h:L(h,/&\f/g,g[d])))&&(l[p++]=y);return oa(e,t,n,i===0?ra:a,l,u,c,f)}function fE(e,t,n,r){return oa(e,t,n,Eg,Rc(rE()),Nr(e,2,-2),0,r)}function Nf(e,t,n,r,i){return oa(e,t,n,Tc,Nr(e,0,r),Nr(e,r+1,-1),r,i)}function Pg(e,t,n){switch(tE(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 4789:return wi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+wi+e+G+e+e;case 5936:switch(le(e,t+11)){case 114:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return z+e+G+e+e;case 6165:return z+e+G+"flex-"+e+e;case 5187:return z+e+L(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return z+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return z+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return z+e+G+L(e,"shrink","negative")+e;case 5292:return z+e+G+L(e,"basis","preferred-size")+e;case 6060:return z+"box-"+L(e,"-grow","")+z+e+G+L(e,"grow","positive")+e;case 4554:return z+L(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4200:if(!vt(e,/flex-|baseline/))return G+"grid-column-align"+Nr(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,vt(r.props,/grid-\w+-end/)})?~Wo(e+(n=n[t].value),"span",0)?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~Wo(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+wi+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wo(e,"stretch",0)?Pg(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(le(e,t+6)===121)return L(e,":",":"+z)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+(le(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function xs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hE(e,t,n,r){switch(e.type){case eE:if(e.children.length)break;case Zk:case Tc:return e.return=e.return||e.value;case Eg:return"";case Ig:return e.return=e.value+"{"+xs(e.children,r)+"}";case ra:if(!st(e.value=e.props.join(",")))return""}return st(n=xs(e.children,r))?e.return=e.value+"{"+n+"}":""}function pE(e){var t=Rg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function mE(e){return function(t){t.root||(t=t.return)&&e(t)}}function gE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Tc:e.return=Pg(e.value,e.length,n);return;case Ig:return xs([$t(e,{value:L(e.value,"@","@"+z)})],r);case ra:if(e.length)return nE(n=e.props,function(i){switch(vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn($t(e,{props:[L(i,/:(read-\w+)/,":"+wi+"$1")]})),Qn($t(e,{props:[i]})),ru(e,{props:Af(n,r)});break;case"::placeholder":Qn($t(e,{props:[L(i,/:(plac\w+)/,":"+z+"input-$1")]})),Qn($t(e,{props:[L(i,/:(plac\w+)/,":"+wi+"$1")]})),Qn($t(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),Qn($t(e,{props:[i]})),ru(e,{props:Af(n,r)});break}return""})}}var yE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ag="active",Og="data-styled-version",aa="6.1.8",xc=`/*!sc*/
`,Pc=typeof window<"u"&&"HTMLElement"in window,vE=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),la=Object.freeze([]),Dr=Object.freeze({});function _E(e,t,n){return n===void 0&&(n=Dr),e.theme!==n.theme&&e.theme||t||n.theme}var Ng=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SE=/(^-|-$)/g;function bf(e){return e.replace(wE,"-").replace(SE,"")}var kE=/(a)(d)/gi,To=52,Lf=function(e){return String.fromCharCode(e+(e>25?39:97))};function su(e){var t,n="";for(t=Math.abs(e);t>To;t=t/To|0)n=Lf(t%To)+n;return(Lf(t%To)+n).replace(kE,"$1-$2")}var Ka,bg=5381,cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lg=function(e){return cr(bg,e)};function Dg(e){return su(Lg(e)>>>0)}function EE(e){return e.displayName||e.name||"Component"}function Ya(e){return typeof e=="string"&&!0}var Ug=typeof Symbol=="function"&&Symbol.for,Mg=Ug?Symbol.for("react.memo"):60115,IE=Ug?Symbol.for("react.forward_ref"):60112,CE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RE=((Ka={})[IE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ka[Mg]=Fg,Ka);function Df(e){return("type"in(t=e)&&t.type.$$typeof)===Mg?Fg:"$$typeof"in e?RE[e.$$typeof]:CE;var t}var xE=Object.defineProperty,PE=Object.getOwnPropertyNames,Uf=Object.getOwnPropertySymbols,AE=Object.getOwnPropertyDescriptor,OE=Object.getPrototypeOf,Mf=Object.prototype;function zg(e,t,n){if(typeof t!="string"){if(Mf){var r=OE(t);r&&r!==Mf&&zg(e,r,n)}var i=PE(t);Uf&&(i=i.concat(Uf(t)));for(var o=Df(e),s=Df(t),a=0;a<i.length;++a){var l=i[a];if(!(l in TE||n&&n[l]||s&&l in s||o&&l in o)){var u=AE(t,l);try{xE(e,l,u)}catch{}}}}return e}function Ur(e){return typeof e=="function"}function Ac(e){return typeof e=="object"&&"styledComponentId"in e}function An(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function au(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lu(e,t,n){if(n===void 0&&(n=!1),!n&&!Wi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lu(e[r],t[r]);else if(Wi(t))for(var r in t)e[r]=lu(e[r],t[r]);return e}function Oc(e,t){Object.defineProperty(e,"toString",{value:t})}function to(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var NE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw to(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(xc);return n},e}(),qo=new Map,Ps=new Map,Ko=1,Ro=function(e){if(qo.has(e))return qo.get(e);for(;Ps.has(Ko);)Ko++;var t=Ko++;return qo.set(e,t),Ps.set(t,e),t},bE=function(e,t){Ko=t+1,qo.set(e,t),Ps.set(t,e)},LE="style[".concat(Lr,"][").concat(Og,'="').concat(aa,'"]'),DE=new RegExp("^".concat(Lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),UE=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},ME=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(xc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(DE);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(bE(c,u),UE(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function FE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Lr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,Ag),r.setAttribute(Og,aa);var s=FE();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},zE=function(){function e(t){this.element=$g(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw to(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$E=function(){function e(t){this.element=$g(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),BE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ff=Pc,jE={isServer:!Pc,useCSSOMInjection:!vE},Bg=function(){function e(t,n,r){t===void 0&&(t=Dr),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},jE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Pc&&Ff&&(Ff=!1,function(o){for(var s=document.querySelectorAll(LE),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Lr)!==Ag&&(ME(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Oc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var m=function(p){return Ps.get(p)}(f);if(m===void 0)return"continue";var g=o.names.get(m),v=s.getGroup(f);if(g===void 0||v.length===0)return"continue";var w="".concat(Lr,".g").concat(f,'[id="').concat(m,'"]'),x="";g!==void 0&&g.forEach(function(p){p.length>0&&(x+="".concat(p,","))}),l+="".concat(v).concat(w,'{content:"').concat(x,'"}').concat(xc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Ro(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new BE(i):r?new zE(i):new $E(i)}(this.options),new NE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ro(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),HE=/&/g,WE=/^\s*\/\/.*$/gm;function jg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jg(n.children,t)),n})}function VE(e){var t,n,r,i=e===void 0?Dr:e,o=i.options,s=o===void 0?Dr:o,a=i.plugins,l=a===void 0?la:a,u=function(m,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===ra&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(HE,n).replace(r,u))}),s.prefix&&c.push(gE),c.push(hE);var f=function(m,g,v,w){g===void 0&&(g=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var x=m.replace(WE,""),p=dE(v||g?"".concat(v," ").concat(g," { ").concat(x," }"):x);s.namespace&&(p=jg(p,s.namespace));var d=[];return xs(p,pE(c.concat(mE(function(h){return d.push(h)})))),d};return f.hash=l.length?l.reduce(function(m,g){return g.name||to(15),cr(m,g.name)},bg).toString():"",f}var GE=new Bg,uu=VE(),Hg=ki.createContext({shouldForwardProp:void 0,styleSheet:GE,stylis:uu});Hg.Consumer;ki.createContext(void 0);function zf(){return A.useContext(Hg)}var Wg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=uu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Oc(this,function(){throw to(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uu),this.name+t.hash},e}(),qE=function(e){return e>="A"&&e<="Z"};function $f(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;qE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vg=function(e){return e==null||e===!1||e===""},Gg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Vg(o)&&(Array.isArray(o)&&o.isCss||Ur(o)?r.push("".concat($f(i),":"),o,";"):Wi(o)?r.push.apply(r,Hi(Hi(["".concat(i," {")],Gg(o),!1),["}"],!1)):r.push("".concat($f(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in yE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(Vg(e))return[];if(Ac(e))return[".".concat(e.styledComponentId)];if(Ur(e)){if(!Ur(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var o;return e instanceof Wg?n?(e.inject(n,r),[e.getName(r)]):[e]:Wi(e)?Gg(e):Array.isArray(e)?Array.prototype.concat.apply(la,e.map(function(s){return Dn(s,t,n,r)})):[e.toString()]}function KE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ur(n)&&!Ac(n))return!1}return!0}var YE=Lg(aa),QE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KE(t),this.componentId=n,this.baseHash=cr(YE,n),this.baseStyle=r,Bg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var o=au(Dn(this.rules,t,n,r)),s=su(cr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=An(i,s),this.staticRulesId=s}else{for(var l=cr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=au(Dn(f,t,n,r));l=cr(l,m+c),u+=m}}if(u){var g=su(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=An(i,g)}}return i},e}(),qg=ki.createContext(void 0);qg.Consumer;var Qa={};function XE(e,t,n){var r=Ac(e),i=e,o=!Ya(e),s=t.attrs,a=s===void 0?la:s,l=t.componentId,u=l===void 0?function(y,E){var k=typeof y!="string"?"sc":bf(y);Qa[k]=(Qa[k]||0)+1;var S="".concat(k,"-").concat(Dg(aa+k+Qa[k]));return E?"".concat(E,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(y){return Ya(y)?"styled.".concat(y):"Styled(".concat(EE(y),")")}(e):c,m=t.displayName&&t.componentId?"".concat(bf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;v=function(y,E){return w(y,E)&&x(y,E)}}else v=w}var p=new QE(n,m,r?i.componentStyle:void 0);function d(y,E){return function(k,S,C){var M=k.attrs,D=k.componentStyle,be=k.defaultProps,_n=k.foldedComponentIds,wn=k.styledComponentId,ro=k.target,ua=ki.useContext(qg),Vr=zf(),Sn=k.shouldForwardProp||Vr.shouldForwardProp,T=_E(S,ua,be)||Dr,O=function(Ut,Le,gt){for(var Gr,En=Pe(Pe({},Le),{className:void 0,theme:gt}),ca=0;ca<Ut.length;ca+=1){var io=Ur(Gr=Ut[ca])?Gr(En):Gr;for(var Mt in io)En[Mt]=Mt==="className"?An(En[Mt],io[Mt]):Mt==="style"?Pe(Pe({},En[Mt]),io[Mt]):io[Mt]}return Le.className&&(En.className=An(En.className,Le.className)),En}(M,S,T),b=O.as||ro,B={};for(var j in O)O[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&O.theme===T||(j==="forwardedAs"?B.as=O.forwardedAs:Sn&&!Sn(j,b)||(B[j]=O[j]));var kn=function(Ut,Le){var gt=zf(),Gr=Ut.generateAndInjectStyles(Le,gt.styleSheet,gt.stylis);return Gr}(D,O),Ke=An(_n,wn);return kn&&(Ke+=" "+kn),O.className&&(Ke+=" "+O.className),B[Ya(b)&&!Ng.has(b)?"class":"className"]=Ke,B.ref=C,A.createElement(b,B)}(h,y,E)}d.displayName=f;var h=ki.forwardRef(d);return h.attrs=g,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=v,h.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var C=0,M=k;C<M.length;C++)lu(E,M[C],!0);return E}({},i.defaultProps,y):y}}),Oc(h,function(){return".".concat(h.styledComponentId)}),o&&zg(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Bf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var jf=function(e){return Object.assign(e,{isCss:!0})};function Kg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ur(e)||Wi(e))return jf(Dn(Bf(la,Hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Dn(r):jf(Dn(Bf(r,t)))}function cu(e,t,n){if(n===void 0&&(n=Dr),!t)throw to(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Kg.apply(void 0,Hi([i],o,!1)))};return r.attrs=function(i){return cu(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cu(e,t,Pe(Pe({},n),i))},r}var Yg=function(e){return cu(XE,e)},P=Yg;Ng.forEach(function(e){P[e]=Yg(e)});function mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=au(Kg.apply(void 0,Hi([e],t,!1))),i=Dg(r);return new Wg(i,r)}const JE=mt`
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
}`,ZE=P.article`
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
  animation: ${JE} 0.75s ease-in;
  position: relative;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`,WC=P.button`
  position: absolute;
  bottom: 0;
  right: 0;
`,VC=P.button`
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
`,GC=P.button`
  position: absolute;
  bottom: 0;
  left: 0;
`,qC=P.input`
  position: absolute;
  bottom: 0;
  left: 50%;
`,eI=P.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,KC=P.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,YC=P.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,tI=P.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,QC=P.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`,XC=P.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: hsla(0, 0%, 7%, 0.92);
`,JC=P.div`
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
`,nI=()=>_(ZE,{children:_(eI,{children:_(tI,{})})}),rI=P.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,iI=P.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`,oI=P.main`
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
`,sI=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,aI=P.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,lI=""+new URL("plus-70c42e58.svg",import.meta.url).href,uI=({onUpload:e})=>{const[t,n]=A.useState(!1),[r,i]=A.useState(""),[o,s]=A.useState(""),[a,l]=A.useState(null);return X(dn,{children:[_(aI,{onClick:()=>n(!t),src:lI,alt:"Add more content"}),t&&_(dn,{children:X(rI,{onSubmit:async f=>{if(f.preventDefault(),a){const m=await Xk(a,{name:o,caption:r});e(m),l(null),i(""),s(""),n(!1)}},children:[_("div",{children:_("label",{htmlFor:"caption",children:"Caption"})}),X("div",{children:[_("input",{id:"caption",value:r,onChange:f=>i(f.target.value)}),_("div",{children:_("label",{htmlFor:"name",children:"Name"})}),_("div",{children:_("input",{id:"name",value:o,onChange:f=>s(f.target.value),required:!0})})]}),_("div",{children:_("label",{htmlFor:"file",children:"Choose a file"})}),_("div",{children:_("input",{id:"file",type:"file",required:!0,onChange:f=>{f.target.files&&l(f.target.files[0])}})}),a&&_("button",{type:"submit",children:"Upload a file"})]})})]})},cI=()=>{const[e,t]=A.useState("eantwibawua1@gmail.com"),[n,r]=A.useState("");return X("div",{children:[_("h1",{children:"Hey Eman 🙂"}),_("p",{children:"Please sign-in:"}),X("form",{onSubmit:async o=>{o.preventDefault(),await _S(e,n)},children:[X("div",{children:[_("label",{htmlFor:"email-address",children:"Email address"}),_("input",{type:"email",id:"email-address",value:e,onChange:o=>t(o.target.value),required:!0,placeholder:"Email address"})]}),X("div",{children:[_("label",{htmlFor:"password",children:"Password"}),_("input",{type:"password",id:"password",value:n,onChange:o=>r(o.target.value),required:!0,placeholder:"Password"})]}),_("button",{type:"submit",children:"Sign in"})]})]})},Hf=990,dI=1320,Wf=()=>window.innerWidth<=Hf?2:window.innerWidth<=dI&&window.innerWidth>Hf?3:4,Vf=(e,t)=>{const n=Math.floor(e.length/t),r=e.length%t;let i=0;const o=[];for(let s=0;s<t;s++){const a=i+n+(s<r?1:0);o.push(e.slice(i,a)),i=a}return o},Gf=(e,t)=>{const n=e.filter(a=>{var l;return((l=a.metadata.customMetadata)==null?void 0:l.pinned)==="true"}).sort((a,l)=>{var u,c;return!((u=a.metadata.customMetadata)!=null&&u.pinnedAt)||!((c=l.metadata.customMetadata)!=null&&c.pinnedAt)?0:parseInt(a.metadata.customMetadata.pinnedAt)-parseInt(l.metadata.customMetadata.pinnedAt)}),r=e.filter(a=>{var l;return((l=a.metadata.customMetadata)==null?void 0:l.pinned)!=="true"}),i=Vf(n,t),o=Vf(r,t);return i.map((a,l)=>a.concat(o[l]))},no=mt`
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
}`,fI=P.p`
  color: rgba(12, 0, 0, 0.7);
  flex: 1;
  display: block;
  animation: ${no} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,hI=P.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
  animation: ${no} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,pI=P.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,mI=mt`
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
}`,gI=P.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${mI} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,yI=P.button`
  font-weight: 700;
  border-radius: 15px;
  width: 150px;
  height: 45px;
  background-color: #61c433;
  border: none;
  outline: none;
  color: black;
  animation: ${no} 0.5s ease-in-out;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`,vI=P.audio`
  width: 300px;
  max-width: 300px;
  animation: ${no} 0.5s ease-in-out;

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
`,_I=P.p`
  margin-top: 5px;
  animation: ${no} 0.5s ease-in-out;
`,wI=P.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`,SI=P.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`,kI=P.img`
  width: 100%;
  opacity: ${({$show:e})=>e?1:0};
`,qf=""+new URL("A-967cb442.png",import.meta.url).href,Kf=""+new URL("C-3c3e16d1.png",import.meta.url).href,Yf=""+new URL("W-17eb2e7f.png",import.meta.url).href,Qf=""+new URL("Y-967b8d34.png",import.meta.url).href,EI=({onEnded:e})=>{const[i,o]=A.useState([qf,Yf,Kf,Qf]),[s,a]=A.useState(!1),[l,u]=A.useState(0);return A.useEffect(()=>{const c=setTimeout(()=>{e()},4500);return()=>clearTimeout(c)},[]),A.useEffect(()=>{const c=setInterval(()=>{u(f=>(f+1)%4)},500);return setTimeout(()=>{o([qf,Yf,Kf,Qf]),a(!0),clearInterval(c)},4e3),()=>clearInterval(c)},[]),_(wI,{children:_(SI,{children:[0,1,2,3].map(c=>{const f=s?c:(l+c)%4;return _(kI,{$show:!0,src:i[f],alt:`loading computer ${c}`},c)})})})},II=A.lazy(()=>ES(()=>import("./index-6aeae3c8.js"),[],import.meta.url)),CI=()=>{const[e,t]=A.useState(0),n=A.useContext(sc),[r,i]=A.useState(Wf()),[o,s]=A.useState(null);A.useEffect(()=>{(async()=>{const f=await Jk(),m=Gf(f,r);s(m)})()},[]),A.useEffect(()=>{const c=()=>{const f=Wf();i(f)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),A.useEffect(()=>{if(!o)return;const c=Gf(o.flat(),r);s(c)},[r]);const a=()=>{t(0),_c.signOut()},[l,u]=A.useState(!1);return e>=10&&!n?_(cI,{}):!o||!l?_(EI,{onEnded:()=>u(!0)}):X(dn,{children:[X(pI,{children:[_(gI,{children:_("img",{src:IS,alt:"are we cool yet t-shirt"})}),_(hI,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),_(fI,{children:"YOU'RE ALL WELCOME"}),_("a",{href:"https://forms.gle/8dzX8f76mTJm69iw7",target:"_blank",rel:"noreferrer",children:_(yI,{children:"PLEASE RSVP! CLICK HERE"})}),_(vI,{controlsList:"nodownload noplaybackrate",controls:!0,src:kf,children:_("track",{default:!0,kind:"captions",src:kf})}),_(_I,{children:"stu$h Auntie - Pattern [Up]"}),n&&X(dn,{children:[_(uI,{onUpload:c=>{if(!o){s([[c]]);return}const f=o[o.length-1];s([...o.slice(0,-1),[...f,c]])}}),_("button",{onClick:a,children:"Log out"})]})]}),_(iI,{children:_(oI,{children:o&&o.map(c=>_(sI,{children:c.map(f=>_(A.Suspense,{fallback:_(nI,{}),children:_(II,{content:f,onDelete:m=>{const g=o.map(v=>v.filter(w=>w!==m));s(g)}})},f.downloadUrl))},c[0].downloadUrl))})})]})};var Se=(e=>(e.LOGIN="login",e.OUTSIDE_CLUB="outside-club",e.INSIDE_CLUB="inside-club",e.HOME="home",e))(Se||{});const Nc={name:"",email:"",health:2,outfit:null,stage:Se.LOGIN,mission:null,hasAccessToClub:!1,hasCompletedClub:!1,update:()=>{}},Dt=A.createContext(Nc),TI=({children:e})=>{const[t,n]=A.useState(Nc),r=A.useCallback(o=>{n({...t,...o})},[t]),i={...t,update:r};return _(Dt.Provider,{value:i,children:e})},RI=""+new URL("bouncer-pop-up-6042d44b.png",import.meta.url).href,xI=""+new URL("following-20746ba2.png",import.meta.url).href,PI=""+new URL("i-know-the-dj-9c753bb5.png",import.meta.url).href,AI=""+new URL("obey-0c910640.png",import.meta.url).href,OI=""+new URL("outside-club-85fbd6df.jpg",import.meta.url).href,NI=""+new URL("show-ig-f7adf784.png",import.meta.url).href,Qg=""+new URL("character-cc76f9ba.png",import.meta.url).href,bI=mt`
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
}`,du="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==",LI=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 40%;
  margin: 30px auto;

  @media screen and (max-device-width: 568px) {
    width: 95%;
  }
`,DI=P.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`,UI=P.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,MI=P.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`,bc=P.img`
  width: 100%;
  object-fit: cover;
`,FI=P.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${du});
  color: #96e3ff;
  border: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`,zI=P.form`
  width: 70%;
  padding: 20px;

  background: white;
  background-image: url(${du});
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
    background-image: url(${du});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
  }
`,Xf=P.div`
  max-height: 60%;
  object-fit: contain;
  align-self: center;
  @media screen and (max-device-width: 568px) {
    max-height: 50%;
  }
`,Jf=P.img`
  height: 100%;
`,$I=P.div`
  width: 12%;
  height: 27%;
  position: absolute;
  left: 43.5%;
  top: 58%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,Xg=mt`
0% {
    top: 50%;
}

50% {
  top: 51%
}

100% {
    top: 50%;
}`,BI=P.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  transform: scaleX(-1);
  animation: ${Xg} 1.5s infinite;
`,jI=P.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transform: scaleX(1);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  animation: ${Xg} 1.5s infinite;
`,HI=P.img`
  position: absolute;
  bottom: 0;
  right: 3%;
`,WI=P.div`
  margin-left: auto;
  margin-right: auto;
  top: 2%;
  left: 0;
  right: 0;
  max-width: 30%;
  height: 14%;
  animation: ${bI} 0.5s ease-in-out;
  position: absolute;
`,VI=P.div`
  width: 100%;
  height: 100%;
  position: relative;
`,GI=P.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`,qI=P.div`
  left: ${e=>e.$left};
  bottom: 32%;
  background-color: #57df00;
  width: 6%;
  height: 49%;
  position: absolute;
  z-index: 1;
`,KI=mt`
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
}`,YI=P.div`
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
  animation: ${KI} 0.5s ease-in-out;
`,QI=P.p`
  font-size: 20px;
  margin: 12px;
  @media screen and (max-device-width: 568px) {
    font-size: 12px;
    margin: 4px;
  }
`,XI=P.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`,JI=P.img`
  position: relative;
  height: 100%;
`,wr=P.img`
  position: absolute;
  width: 17.4%;
  cursor: pointer;

  &:nth-of-type(2) {
    top: 60.7%;
    right: 29.7%;
  }

  &:nth-of-type(3) {
    bottom: 8.7%;
    left: 29.1%;
  }

  &:nth-of-type(4) {
    top: 60.7%;
    left: 29.2%;
  }
`,ZI=P.div`
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
`,eC=P.div`
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
`,tC=P.div`
  width: 60%;
`,nC=P.h2`
  font-family: Nokia;
  font-size: 40px;
  margin: 0;
  margin-bottom: 8px;
  color: ${e=>e.$win?"yellow":"red"};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;

  @media screen and (max-device-width: 568px) {
    font-size: 24px;
  }
`,rC=P.h4`
  font-family: Nokia;
  font-size: 20px;
  color: white;
  margin: 0;
  @media screen and (max-device-width: 568px) {
    font-size: 10px;
  }
`,iC=P.button`
  font-family: Nokia;
  font-size: 16px;
  color: white;
  margin: 0;
  background: transparent;
  background-color: transparent;
  border: 1px solid white;
  padding: 8px;
  margin-top: 12px;
  cursor: pointer;

  @media screen and (max-device-width: 568px) {
    font-size: 8px;
  }
`,oC=P.div`
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
`,sC={width:"25%",height:"38%"},aC={width:"15%",height:"24%"},lC={width:"20%",height:"30%",left:"5%"},uC=e=>e===Se.INSIDE_CLUB?lC:e===Se.OUTSIDE_CLUB?aC:sC,Lc=()=>{const{stage:e,outfit:t}=A.useContext(Dt),n=t||Qg,r=uC(e);return _(HI,{style:r,src:n,alt:"character"})},cC=()=>mt`
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
}`,dC=P.p`
  font-family: Nokia;
  font-size: 28px;
  position: absolute;
  opacity: 0;
  color: ${e=>e.$color};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  animation: ${cC} 1.5s ease;

  @media screen and (max-device-width: 568px) {
    font-size: 18px;
  }
`,Dc=({healthChange:e})=>{const t=e>0?"#57df00":"red",n=e>0?"+":"";return _(dC,{$color:t,children:`${n+e}hp`})},Zf=""+new URL("arrow-134fdc26.png",import.meta.url).href,As=({onClick:e,right:t=!1})=>t?_(BI,{src:Zf,alt:"right arrow",onClick:e}):_(jI,{src:Zf,alt:"left arrow",onClick:e}),Jg=({backgroundSrc:e,children:t})=>X(XI,{children:[_(JI,{src:e,alt:"pop up screen for bouncer"}),t]}),fC=P.div`
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
`,Xa=mt`
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
}`,hC=P.img`
  width: 30%;
  cursor: pointer;

  &:nth-of-type(1) {
    animation: ${Xa} 1s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: ${Xa} 1.5s ease-in-out;
  }

  &:nth-of-type(3) {
    animation: ${Xa} 2s ease-in-out;
  }
`,pC=mt`
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
}`,mC=P.img`
  max-width: 20%;
  position: absolute;
  bottom: -15%;
  left: 6%;
  animation: ${pC} 0.5s ease-in-out;
  cursor: pointer;
  z-index: 190;
`,Zg=P.img`
  width: 100%;
  position: absolute;
  top: -15%;
  left: 0;
  cursor: pointer;
  z-index: 500;
`,gC=P.div`
  width: 18.5%;
  cursor: pointer;
  position: absolute;
  left: 8.2%;
  top: 32%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`,yC=""+new URL("pixel-click-c51f700e.png",import.meta.url).href,vC=mt`
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
`,_C=P.img`
  width: 40%;
  animation: ${vC} 2s infinite;
`,Os=()=>_(_C,{src:yC,alt:"pointer"}),wC=()=>{const{update:e,health:t,hasAccessToClub:n}=A.useContext(Dt),[r,i]=A.useState(!1),[o,s]=A.useState(!1),[a,l]=A.useState(!0),[u,c]=A.useState(null),f=()=>{i(!0)};return A.useEffect(()=>{n||e({mission:"Talk to the bouncer"})},[]),X(dn,{children:[u&&_(Dc,{healthChange:u}),_(As,{right:!1,onClick:()=>e({stage:Se.HOME,mission:null})}),n&&_(As,{right:!0,onClick:()=>e({stage:Se.INSIDE_CLUB})}),r&&X(Jg,{backgroundSrc:RI,children:[_(wr,{onClick:()=>{i(!1),c(1),e({mission:null}),l(!1),setTimeout(()=>{e({mission:null,health:t+1,hasAccessToClub:!0})},1500)},src:AI,alt:"obey"}),_(wr,{onClick:()=>{i(!1),c(-1),e({mission:null}),l(!1),setTimeout(()=>{e({mission:null,health:t-1,hasAccessToClub:!0})},1500)},src:PI,alt:"I know the dj"}),_(wr,{onClick:()=>{s(!0)},src:NI,alt:"show instagram"})]}),o&&_(Zg,{src:xI,onClick:()=>{s(!1),i(!1),c(-2),e({mission:null}),l(!1),setTimeout(()=>{e({mission:null,health:t-2,hasAccessToClub:!0})},1500)},alt:"instagram followers"}),_(bc,{src:OI,alt:"club"}),_(Lc,{}),(!n||a)&&_($I,{onClick:f,children:_(Os,{})})]})},eh=""+new URL("login-graphic-25c6ac92.png",import.meta.url).href,th=""+new URL("aol-dial-up-fae80fce.mp3",import.meta.url).href,SC=()=>{const{name:e,update:t,email:n}=A.useContext(Dt),r=s=>{s.preventDefault(),!(!e||!n)&&t({name:e,stage:Se.HOME})},i=window.innerWidth<=568,o=A.useRef(null);return A.useEffect(()=>{setTimeout(()=>{o&&o.current&&o.current.play&&o.current.play()},500)},[]),X(dn,{children:[_("audio",{ref:o,controls:!1,src:th,children:_("track",{default:!0,kind:"captions",src:th})}),X(FI,{children:[_("p",{children:"AWCY"}),i&&_(Xf,{children:_(Jf,{src:eh,alt:"aol mock graphic"})}),_("p",{children:"version 1.0"})]}),X(zI,{onSubmit:r,children:[!i&&_(Xf,{children:_(Jf,{src:eh,alt:"aol mock graphic"})}),_("label",{htmlFor:"name",children:"Name:"}),_("input",{required:!0,id:"name",onChange:s=>t({name:s.target.value}),value:e}),_("label",{htmlFor:"email",children:"Email:"}),_("input",{required:!0,id:"email",onChange:s=>t({email:s.target.value}),value:n}),_("button",{type:"submit",children:"Play"})]})]})},kC=""+new URL("hp-clout-2cc94eb9.png",import.meta.url).href,e0=({health:e})=>{const t=A.useMemo(()=>e>0?`${46-6.5*(e-1)}%`:`${53+6.5*Math.abs(e)}%`,[e]);return _(WI,{children:X(VI,{children:[_(GI,{src:kC,alt:"stat bar"}),_(qI,{$left:t})]})})},EC=""+new URL("message-1b61b993.png",import.meta.url).href,IC=""+new URL("phone-f2fde0e2.png",import.meta.url).href,CC=""+new URL("room-005b6ed8.jpg",import.meta.url).href,nh=""+new URL("sms-tone-58b1a562.mp3",import.meta.url).href,TC=""+new URL("big-drip-front-6601948a.png",import.meta.url).href,RC=""+new URL("steady-front-762c139a.png",import.meta.url).href,xC=[{src:TC,alt:"drippy outfit",health:-2},{src:RC,alt:"steady outfit",health:-1},{src:Qg,alt:"original outfit",health:1}],PC=()=>{const e=A.useRef(null),{update:t,outfit:n,health:r}=A.useContext(Dt),[i,o]=A.useState(!1),[s,a]=A.useState(null),l=()=>{t({health:2}),o(!0)},[u,c]=A.useState(!1);A.useEffect(()=>{setTimeout(()=>{n||e&&e.current&&e.current.play&&("vibrator"in navigator&&navigator.vibrate(500),c(!0),e.current.play())},2e3),setTimeout(()=>{n||c(!0)},3e3)},[]);const[f,m]=A.useState(!1),[g,v]=A.useState(!1),w=()=>{m(!0)},x=()=>{c(!1),m(!1),t({mission:"Get changed and head to the club"}),v(!0)},p=d=>{o(!1),a(d.health),t({outfit:d.src}),setTimeout(()=>{t({health:r+d.health,outfit:d.src}),a(null)},1e3)};return X(dn,{children:[_("audio",{ref:e,controls:!1,src:nh,children:_("track",{default:!0,kind:"captions",src:nh})}),s&&_(Dc,{healthChange:s}),n&&_(As,{right:!0,onClick:()=>t({stage:Se.OUTSIDE_CLUB,mission:null})}),u&&_(mC,{onClick:w,src:IC,alt:"message received"}),f&&_(Zg,{src:EC,onClick:x,alt:"Yo what are you up to! Come whisky it's live"}),_(bc,{src:CC,alt:"home"}),_(Lc,{}),g&&_(gC,{"data-testid":"cupboard",onClick:l,children:_(Os,{})}),i&&_(fC,{children:xC.map(d=>_(hC,{onClick:()=>p(d),src:d.src,alt:d.alt},d.src))})]})},AC=()=>{const{mission:e}=A.useContext(Dt);return _(YI,{children:_(QI,{children:e})})},OC=""+new URL("go-chat-b76c1fc7.png",import.meta.url).href,NC=""+new URL("inside-club-pop-up-711073c5.png",import.meta.url).href,bC=""+new URL("inside-club-bc7db19a.jpg",import.meta.url).href,LC=""+new URL("keep-moving-b892b001.png",import.meta.url).href,DC=""+new URL("wave-and-smile-a5d2f33c.png",import.meta.url).href,UC=()=>{const{health:e,update:t}=A.useContext(Dt),{title:n,subtitle:r}=A.useMemo(()=>e>0?{title:"Congrats",subtitle:"You made some good decisions"}:{title:"Game over",subtitle:"Ouch! The DJ's think you're doing too much, your night ends here"},[e]),i=()=>{t(Nc)};return _(eC,{children:X(tC,{children:[_(e0,{health:e}),_(nC,{$win:e>0,children:n}),_(rC,{children:r}),_(iC,{onClick:i,children:"Restart"})]})})},MC=()=>{const{update:e,health:t,hasCompletedClub:n,mission:r}=A.useContext(Dt),[i,o]=A.useState(!1),[s,a]=A.useState(!1),[l,u]=A.useState(null);A.useEffect(()=>{if(n){e({mission:"Talk to the DJ's try to get back stage"});return}else e({mission:"Chat to your friend E"})},[]);const c=()=>o(!1);return X(dn,{children:[s&&_(UC,{}),l&&_(Dc,{healthChange:l}),r==="Chat to your friend E"&&_(oC,{onClick:()=>o(!0),children:_(Os,{})}),n&&_(ZI,{onClick:()=>{e({mission:null}),a(!0)},children:_(Os,{})}),i&&X(Jg,{backgroundSrc:NC,children:[_(wr,{onClick:()=>{c(),u(1),setTimeout(()=>{e({health:t+1,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)},src:OC,alt:"go chat"}),_(wr,{onClick:()=>{c(),u(-1),setTimeout(()=>{e({health:t-1,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)},src:DC,alt:"wave and smile"}),_(wr,{onClick:()=>{c(),u(-2),setTimeout(()=>{e({health:t-2,hasCompletedClub:!0,mission:"Talk to the DJ's try to get back stage"})},1500)},src:LC,alt:"keep moving"})]}),_(As,{right:!1,onClick:()=>e({stage:Se.OUTSIDE_CLUB,mission:null})}),_(bc,{src:bC,alt:"club"}),_(Lc,{})]})},FC=()=>{const{health:e,stage:t,mission:n}=A.useContext(Dt);return _(LI,{children:_(DI,{children:_(UI,{children:X(MI,{children:[t===Se.LOGIN&&_(SC,{}),t===Se.OUTSIDE_CLUB&&_(wC,{}),t===Se.INSIDE_CLUB&&_(MC,{}),t===Se.HOME&&_(PC,{}),t!==Se.LOGIN&&_(e0,{health:e}),n&&t!==Se.LOGIN&&_(AC,{})]})})})})},zC=()=>A.useContext(sc)?_(TI,{children:_(FC,{})}):null,$C=()=>X(wS,{children:[_(CI,{}),_(zC,{})]});Ja.createRoot(document.getElementById("root")).render(_($C,{}));export{ZE as A,YC as B,QC as C,WC as D,qC as E,dn as F,XC as M,VC as P,eI as S,sc as U,_ as a,GC as b,JC as c,BC as d,KC as e,X as j,HC as p,A as r,jC as u};
