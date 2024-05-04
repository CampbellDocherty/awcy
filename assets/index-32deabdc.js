(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yi={},Wg={get exports(){return yi},set exports(e){yi=e}},As={},A={},Vg={get exports(){return A},set exports(e){A=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),Gg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Kg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Jg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),Nc=Symbol.iterator;function n0(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yf=Object.assign,Qf={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Kf}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xf(){}Xf.prototype=Lr.prototype;function uu(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Kf}var cu=uu.prototype=new Xf;cu.constructor=uu;Yf(cu,Lr.prototype);cu.isPureReactComponent=!0;var bc=Array.isArray,Jf=Object.prototype.hasOwnProperty,du={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Jf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Wi,type:e,key:o,ref:s,props:i,_owner:du.current}}function r0(e,t){return{$$typeof:Wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wi}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function Ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Wi:case Gg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ua(s,0):r,bc(i)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),Ro(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=r0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",bc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ua(o,a);s+=Ro(o,t,n,l,i)}else if(l=n0(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ua(o,a++),s+=Ro(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function o0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Po={transition:null},s0={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Po,ReactCurrentOwner:du};U.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Lr;U.Fragment=qg;U.Profiler=Yg;U.PureComponent=uu;U.StrictMode=Kg;U.Suspense=Zg;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Jf.call(t,l)&&!Zf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wi,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:Xg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qg,_context:e},e.Consumer=e};U.createElement=eh;U.createFactory=function(e){var t=eh.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Jg,render:e}};U.isValidElement=fu;U.lazy=function(e){return{$$typeof:t0,_payload:{_status:-1,_result:e},_init:o0}};U.memo=function(e,t){return{$$typeof:e0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Ie.current.useCallback(e,t)};U.useContext=function(e){return Ie.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ie.current.useEffect(e,t)};U.useId=function(){return Ie.current.useId()};U.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ie.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};U.useRef=function(e){return Ie.current.useRef(e)};U.useState=function(e){return Ie.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ie.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(Vg);const _i=Hg(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=A,l0=Symbol.for("react.element"),u0=Symbol.for("react.fragment"),c0=Object.prototype.hasOwnProperty,d0=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f0={key:!0,ref:!0,__self:!0,__source:!0};function th(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)c0.call(t,r)&&!f0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:l0,type:e,key:o,ref:s,props:i,_owner:d0.current}}As.Fragment=u0;As.jsx=th;As.jsxs=th;(function(e){e.exports=As})(Wg);const un=yi.Fragment,E=yi.jsx,oe=yi.jsxs;var Ya={},Qa={},h0={get exports(){return Qa},set exports(e){Qa=e}},ze={},Xa={},p0={get exports(){return Xa},set exports(e){Xa=e}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,x){var b=R.length;R.push(x);e:for(;0<b;){var B=b-1>>>1,j=R[B];if(0<i(j,x))R[B]=x,R[b]=j,b=B;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var x=R[0],b=R.pop();if(b!==x){R[0]=b;e:for(var B=0,j=R.length,En=j>>>1;B<En;){var Ke=2*(B+1)-1,Lt=R[Ke],Le=Ke+1,mt=R[Le];if(0>i(Lt,b))Le<j&&0>i(mt,Lt)?(R[B]=mt,R[Le]=b,B=Le):(R[B]=Lt,R[Ke]=b,B=Ke);else if(Le<j&&0>i(mt,b))R[B]=mt,R[Le]=b,B=Le;else break e}}return x}function i(R,x){var b=R.sortIndex-x.sortIndex;return b!==0?b:R.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,m=3,g=!1,y=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=R)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function v(R){if(_=!1,h(R),!y)if(n(l)!==null)y=!0,jr(k);else{var x=n(u);x!==null&&Sn(v,x.startTime-R)}}function k(R,x){y=!1,_&&(_=!1,p(C),C=-1),g=!0;var b=m;try{for(h(x),f=n(l);f!==null&&(!(f.expirationTime>x)||R&&!be());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var j=B(f.expirationTime<=x);x=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&r(l),h(x)}else r(l);f=n(l)}if(f!==null)var En=!0;else{var Ke=n(u);Ke!==null&&Sn(v,Ke.startTime-x),En=!1}return En}finally{f=null,m=b,g=!1}}var S=!1,w=null,C=-1,M=5,D=-1;function be(){return!(e.unstable_now()-D<M)}function _n(){if(w!==null){var R=e.unstable_now();D=R;var x=!0;try{x=w(!0,R)}finally{x?wn():(S=!1,w=null)}}else S=!1}var wn;if(typeof c=="function")wn=function(){c(_n)};else if(typeof MessageChannel<"u"){var no=new MessageChannel,aa=no.port2;no.port1.onmessage=_n,wn=function(){aa.postMessage(null)}}else wn=function(){T(_n,0)};function jr(R){w=R,S||(S=!0,wn())}function Sn(R,x){C=T(function(){R(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,jr(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var b=m;m=x;try{return R()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,x){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var b=m;m=R;try{return x()}finally{m=b}},e.unstable_scheduleCallback=function(R,x,b){var B=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?B+b:B):b=B,R){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=b+j,R={id:d++,callback:x,priorityLevel:R,startTime:b,expirationTime:j,sortIndex:-1},b>B?(R.sortIndex=b,t(u,R),n(l)===null&&R===n(u)&&(_?(p(C),C=-1):_=!0,Sn(v,b-B))):(R.sortIndex=j,t(l,R),y||g||(y=!0,jr(k))),R},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(R){var x=m;return function(){var b=m;m=x;try{return R.apply(this,arguments)}finally{m=b}}}})(nh);(function(e){e.exports=nh})(p0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=A,Fe=Xa;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ih=new Set,wi={};function Vn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(wi[e]=t,e=0;e<t.length;e++)ih.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc={},Uc={};function g0(e){return Ja.call(Uc,e)?!0:Ja.call(Dc,e)?!1:m0.test(e)?Uc[e]=!0:(Dc[e]=!0,!1)}function v0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y0(e,t,n,r){if(t===null||typeof t>"u"||v0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hu,pu);he[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hu,pu);he[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hu,pu);he[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y0(t,n,i,r)&&(n=null),r||i===null?g0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),gu=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),Mc=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=Mc&&e[Mc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ca;function Zr(e){if(ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ca=t&&t[1]||""}return`
`+ca+e}var da=!1;function fa(e,t){if(!e||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function _0(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=fa(e.type,!1),e;case 11:return e=fa(e.type.render,!1),e;case 1:return e=fa(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Xn:return"Portal";case Za:return"Profiler";case gu:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sh:return(e.displayName||"Context")+".Consumer";case oh:return(e._context.displayName||"Context")+".Provider";case vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yu:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function w0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=lh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=S0(e))}function uh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ch(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function il(e,t){ch(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ei(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function dh(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E0=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){E0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),si[t]=si[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}function mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var k0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(k0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,fr=null,hr=null;function jc(e){if(e=qi(e)){if(typeof dl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ds(t),dl(e.stateNode,e.type,t))}}function gh(e){fr?hr?hr.push(e):hr=[e]:fr=e}function vh(){if(fr){var e=fr,t=hr;if(hr=fr=null,jc(e),t)for(e=0;e<t.length;e++)jc(t[e])}}function yh(e,t){return e(t)}function _h(){}var ha=!1;function wh(e,t,n){if(ha)return e(t,n);ha=!0;try{return yh(e,t,n)}finally{ha=!1,(fr!==null||hr!==null)&&(_h(),vh())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var fl=!1;if(Ct)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){fl=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{fl=!1}function I0(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ai=!1,Yo=null,Qo=!1,hl=null,T0={onError:function(e){ai=!0,Yo=e}};function C0(e,t,n,r,i,o,s,a,l){ai=!1,Yo=null,I0.apply(T0,arguments)}function R0(e,t,n,r,i,o,s,a,l){if(C0.apply(this,arguments),ai){if(ai){var u=Yo;ai=!1,Yo=null}else throw Error(I(198));Qo||(Qo=!0,hl=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(Gn(e)!==e)throw Error(I(188))}function P0(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hc(i),e;if(o===r)return Hc(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Eh(e){return e=P0(e),e!==null?kh(e):null}function kh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kh(e);if(t!==null)return t;e=e.sibling}return null}var Ih=Fe.unstable_scheduleCallback,Wc=Fe.unstable_cancelCallback,x0=Fe.unstable_shouldYield,A0=Fe.unstable_requestPaint,te=Fe.unstable_now,O0=Fe.unstable_getCurrentPriorityLevel,wu=Fe.unstable_ImmediatePriority,Th=Fe.unstable_UserBlockingPriority,Xo=Fe.unstable_NormalPriority,N0=Fe.unstable_LowPriority,Ch=Fe.unstable_IdlePriority,Os=null,ct=null;function b0(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:U0,L0=Math.log,D0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(L0(e)/D0|0)|0}var lo=64,uo=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ti(a):(o&=s,o!==0&&(r=ti(o)))}else s=n&~i,s!==0?r=ti(s):o!==0&&(r=ti(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function M0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ze(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=M0(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rh(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function z0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Ph(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xh,Eu,Ah,Oh,Nh,ml=!1,co=[],Qt=null,Xt=null,Jt=null,ki=new Map,Ii=new Map,Bt=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(t.pointerId)}}function Gr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function B0(e,t,n,r,i){switch(t){case"focusin":return Qt=Gr(Qt,e,t,n,r,i),!0;case"dragenter":return Xt=Gr(Xt,e,t,n,r,i),!0;case"mouseover":return Jt=Gr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,Gr(ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ii.set(o,Gr(Ii.get(o)||null,e,t,n,r,i)),!0}return!1}function bh(e){var t=Rn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Sh(n),t!==null){e.blockedOn=t,Nh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return t=qi(n),t!==null&&Eu(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){xo(e)&&n.delete(t)}function j0(){ml=!1,Qt!==null&&xo(Qt)&&(Qt=null),Xt!==null&&xo(Xt)&&(Xt=null),Jt!==null&&xo(Jt)&&(Jt=null),ki.forEach(Gc),Ii.forEach(Gc)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,j0)))}function Ti(e){function t(i){return qr(i,e)}if(0<co.length){qr(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&qr(Qt,e),Xt!==null&&qr(Xt,e),Jt!==null&&qr(Jt,e),ki.forEach(t),Ii.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)bh(n),n.blockedOn===null&&Bt.shift()}var pr=Ot.ReactCurrentBatchConfig,Zo=!0;function H0(e,t,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=1,ku(e,t,n,r)}finally{$=i,pr.transition=o}}function W0(e,t,n,r){var i=$,o=pr.transition;pr.transition=null;try{$=4,ku(e,t,n,r)}finally{$=i,pr.transition=o}}function ku(e,t,n,r){if(Zo){var i=gl(e,t,n,r);if(i===null)Ia(e,t,r,es,n),Vc(e,r);else if(B0(i,e,t,n,r))r.stopPropagation();else if(Vc(e,r),t&4&&-1<$0.indexOf(e)){for(;i!==null;){var o=qi(i);if(o!==null&&xh(o),o=gl(e,t,n,r),o===null&&Ia(e,t,r,es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ia(e,t,r,null,n)}}var es=null;function gl(e,t,n,r){if(es=null,e=_u(r),e=Rn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function Lh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case wu:return 1;case Th:return 4;case Xo:case N0:return 16;case Ch:return 536870912;default:return 16}default:return 16}}var Kt=null,Iu=null,Ao=null;function Dh(){if(Ao)return Ao;var e,t=Iu,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function qc(){return!1}function $e(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:qc,this.isPropagationStopped=qc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=$e(Dr),Gi=J({},Dr,{view:0,detail:0}),V0=$e(Gi),ma,ga,Kr,Ns=J({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(ma=e.screenX-Kr.screenX,ga=e.screenY-Kr.screenY):ga=ma=0,Kr=e),ma)},movementY:function(e){return"movementY"in e?e.movementY:ga}}),Kc=$e(Ns),G0=J({},Ns,{dataTransfer:0}),q0=$e(G0),K0=J({},Gi,{relatedTarget:0}),va=$e(K0),Y0=J({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=$e(Y0),X0=J({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J0=$e(X0),Z0=J({},Dr,{data:0}),Yc=$e(Z0),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nv[e])?!!t[e]:!1}function Cu(){return rv}var iv=J({},Gi,{key:function(e){if(e.key){var t=ev[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ov=$e(iv),sv=J({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=$e(sv),av=J({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),lv=$e(av),uv=J({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=$e(uv),dv=J({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=$e(dv),hv=[9,13,27,32],Ru=Ct&&"CompositionEvent"in window,li=null;Ct&&"documentMode"in document&&(li=document.documentMode);var pv=Ct&&"TextEvent"in window&&!li,Uh=Ct&&(!Ru||li&&8<li&&11>=li),Xc=String.fromCharCode(32),Jc=!1;function Mh(e,t){switch(e){case"keyup":return hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function mv(e,t){switch(e){case"compositionend":return Fh(t);case"keypress":return t.which!==32?null:(Jc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Jc?null:e;default:return null}}function gv(e,t){if(Zn)return e==="compositionend"||!Ru&&Mh(e,t)?(e=Dh(),Ao=Iu=Kt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uh&&t.locale!=="ko"?null:t.data;default:return null}}var vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vv[e.type]:t==="textarea"}function zh(e,t,n,r){gh(r),t=ts(t,"onChange"),0<t.length&&(n=new Tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ui=null,Ci=null;function yv(e){Qh(e,0)}function bs(e){var t=nr(e);if(uh(t))return e}function _v(e,t){if(e==="change")return t}var $h=!1;if(Ct){var ya;if(Ct){var _a="oninput"in document;if(!_a){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),_a=typeof ed.oninput=="function"}ya=_a}else ya=!1;$h=ya&&(!document.documentMode||9<document.documentMode)}function td(){ui&&(ui.detachEvent("onpropertychange",Bh),Ci=ui=null)}function Bh(e){if(e.propertyName==="value"&&bs(Ci)){var t=[];zh(t,Ci,e,_u(e)),wh(yv,t)}}function wv(e,t,n){e==="focusin"?(td(),ui=t,Ci=n,ui.attachEvent("onpropertychange",Bh)):e==="focusout"&&td()}function Sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bs(Ci)}function Ev(e,t){if(e==="click")return bs(t)}function kv(e,t){if(e==="input"||e==="change")return bs(t)}function Iv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Iv;function Ri(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ja.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hh(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tv(e){var t=Hh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jh(n.ownerDocument.documentElement,n)){if(r!==null&&Pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rd(n,o);var s=rd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cv=Ct&&"documentMode"in document&&11>=document.documentMode,er=null,vl=null,ci=null,yl=!1;function id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yl||er==null||er!==Ko(r)||(r=er,"selectionStart"in r&&Pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ri(ci,r)||(ci=r,r=ts(vl,"onSelect"),0<r.length&&(t=new Tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},wa={},Wh={};Ct&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ls(e){if(wa[e])return wa[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return wa[e]=t[n];return e}var Vh=Ls("animationend"),Gh=Ls("animationiteration"),qh=Ls("animationstart"),Kh=Ls("transitionend"),Yh=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Yh.set(e,t),Vn(t,[e])}for(var Sa=0;Sa<od.length;Sa++){var Ea=od[Sa],Rv=Ea.toLowerCase(),Pv=Ea[0].toUpperCase()+Ea.slice(1);fn(Rv,"on"+Pv)}fn(Vh,"onAnimationEnd");fn(Gh,"onAnimationIteration");fn(qh,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Kh,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,R0(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;sd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;sd(i,a,u),o=l}}}if(Qo)throw e=hl,Qo=!1,hl=null,e}function V(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function ka(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[po]){e[po]=!0,ih.forEach(function(n){n!=="selectionchange"&&(xv.has(n)||ka(n,!1,e),ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,ka("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(Lh(t)){case 1:var i=H0;break;case 4:i=W0;break;default:i=ku}n=i.bind(null,t,n,e),i=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ia(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wh(function(){var u=o,d=_u(n),f=[];e:{var m=Yh.get(e);if(m!==void 0){var g=Tu,y=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":g=ov;break;case"focusin":y="focus",g=va;break;case"focusout":y="blur",g=va;break;case"beforeblur":case"afterblur":g=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lv;break;case Vh:case Gh:case qh:g=Q0;break;case Kh:g=cv;break;case"scroll":g=V0;break;case"wheel":g=fv;break;case"copy":case"cut":case"paste":g=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qc}var _=(t&4)!==0,T=!_&&e==="scroll",p=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,p!==null&&(v=Ei(c,p),v!=null&&_.push(xi(c,v,h)))),T)break;c=c.return}0<_.length&&(m=new g(m,y,null,n,d),f.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==cl&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Rt]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Rn(y):null,y!==null&&(T=Gn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Kc,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Qc,v="onPointerLeave",p="onPointerEnter",c="pointer"),T=g==null?m:nr(g),h=y==null?m:nr(y),m=new _(v,c+"leave",g,n,d),m.target=T,m.relatedTarget=h,v=null,Rn(d)===u&&(_=new _(p,c+"enter",y,n,d),_.target=h,_.relatedTarget=T,v=_),T=v,g&&y)t:{for(_=g,p=y,c=0,h=_;h;h=Kn(h))c++;for(h=0,v=p;v;v=Kn(v))h++;for(;0<c-h;)_=Kn(_),c--;for(;0<h-c;)p=Kn(p),h--;for(;c--;){if(_===p||p!==null&&_===p.alternate)break t;_=Kn(_),p=Kn(p)}_=null}else _=null;g!==null&&ad(f,m,g,_,!1),y!==null&&T!==null&&ad(f,T,y,_,!0)}}e:{if(m=u?nr(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=_v;else if(Zc(m))if($h)k=kv;else{k=Sv;var S=wv}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Ev);if(k&&(k=k(e,u))){zh(f,k,n,d);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&ol(m,"number",m.value)}switch(S=u?nr(u):window,e){case"focusin":(Zc(S)||S.contentEditable==="true")&&(er=S,vl=u,ci=null);break;case"focusout":ci=vl=er=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,id(f,n,d);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":id(f,n,d)}var w;if(Ru)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Zn?Mh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Uh&&n.locale!=="ko"&&(Zn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Zn&&(w=Dh()):(Kt=d,Iu="value"in Kt?Kt.value:Kt.textContent,Zn=!0)),S=ts(u,C),0<S.length&&(C=new Yc(C,e,null,n,d),f.push({event:C,listeners:S}),w?C.data=w:(w=Fh(n),w!==null&&(C.data=w)))),(w=pv?mv(e,n):gv(e,n))&&(u=ts(u,"onBeforeInput"),0<u.length&&(d=new Yc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}Qh(f,t)})}function xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ts(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(xi(e,o,i)),o=Ei(e,t),o!=null&&r.push(xi(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ad(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ei(n,o),l!=null&&s.unshift(xi(n,l,a))):i||(l=Ei(n,o),l!=null&&s.push(xi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Av=/\r\n?/g,Ov=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(Av,`
`).replace(Ov,"")}function mo(e,t,n){if(t=ld(t),ld(e)!==t&&n)throw Error(I(425))}function ns(){}var _l=null,wl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(Lv)}:El;function Lv(e){setTimeout(function(){throw e})}function Ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),at="__reactFiber$"+Ur,Ai="__reactProps$"+Ur,Rt="__reactContainer$"+Ur,kl="__reactEvents$"+Ur,Dv="__reactListeners$"+Ur,Uv="__reactHandles$"+Ur;function Rn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[at])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[at]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ds(e){return e[Ai]||null}var Il=[],rr=-1;function hn(e){return{current:e}}function q(e){0>rr||(e.current=Il[rr],Il[rr]=null,rr--)}function W(e,t){rr++,Il[rr]=e.current,e.current=t}var dn={},ve=hn(dn),Ae=hn(!1),Un=dn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function rs(){q(Ae),q(ve)}function dd(e,t,n){if(ve.current!==dn)throw Error(I(168));W(ve,t),W(Ae,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,w0(e)||"Unknown",i));return J({},n,r)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Un=ve.current,W(ve,e),W(Ae,Ae.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Jh(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,q(Ae),q(ve),W(ve,e)):q(Ae),W(Ae,n)}var yt=null,Us=!1,Ca=!1;function Zh(e){yt===null?yt=[e]:yt.push(e)}function Mv(e){Us=!0,Zh(e)}function pn(){if(!Ca&&yt!==null){Ca=!0;var e=0,t=$;try{var n=yt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,Us=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),Ih(wu,pn),i}finally{$=t,Ca=!1}}return null}var ir=[],or=0,os=null,ss=0,Be=[],je=0,Mn=null,_t=1,wt="";function In(e,t){ir[or++]=ss,ir[or++]=os,os=e,ss=t}function ep(e,t,n){Be[je++]=_t,Be[je++]=wt,Be[je++]=Mn,Mn=e;var r=_t;e=wt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_t=1<<32-Ze(t)+i|n<<i|r,wt=o+e}else _t=1<<o|n<<i|r,wt=e}function xu(e){e.return!==null&&(In(e,1),ep(e,1,0))}function Au(e){for(;e===os;)os=ir[--or],ir[or]=null,ss=ir[--or],ir[or]=null;for(;e===Mn;)Mn=Be[--je],Be[je]=null,wt=Be[--je],Be[je]=null,_t=Be[--je],Be[je]=null}var Me=null,Ue=null,Y=!1,Je=null;function tp(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ue=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mn!==null?{id:_t,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ue=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(Y){var t=Ue;if(t){var n=t;if(!hd(e,t)){if(Tl(e))throw Error(I(418));t=Zt(n.nextSibling);var r=Me;t&&hd(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,Y=!1,Me=e)}}else{if(Tl(e))throw Error(I(418));e.flags=e.flags&-4097|2,Y=!1,Me=e}}}function pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function go(e){if(e!==Me)return!1;if(!Y)return pd(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=Ue)){if(Tl(e))throw np(),Error(I(418));for(;t;)tp(e,t),t=Zt(t.nextSibling)}if(pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Me?Zt(e.stateNode.nextSibling):null;return!0}function np(){for(var e=Ue;e;)e=Zt(e.nextSibling)}function Er(){Ue=Me=null,Y=!1}function Ou(e){Je===null?Je=[e]:Je.push(e)}var Fv=Ot.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var as=hn(null),ls=null,sr=null,Nu=null;function bu(){Nu=sr=ls=null}function Lu(e){var t=as.current;q(as),e._currentValue=t}function Rl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){ls=e,Nu=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(Nu!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(ls===null)throw Error(I(308));sr=e,ls.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Pn=null;function Du(e){Pn===null?Pn=[e]:Pn.push(e)}function rp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Du(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Du(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function us(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(g,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(g,f,m):y,m==null)break e;f=J({},f,m);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=f}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var op=new rh.Component().refs;function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ms={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=nn(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(et(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=nn(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(et(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=nn(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(et(t,e,r,n),No(t,e,r))}};function vd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ri(n,r)||!Ri(i,o):!0}function sp(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ve(o):(i=Oe(t)?Un:ve.current,r=t.contextTypes,o=(r=r!=null)?Sr(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=op,Uu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ve(o):(o=Oe(t)?Un:ve.current,i.context=Sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ms.enqueueReplaceState(i,i.state,null),us(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===op&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _d(e){var t=e._init;return t(e._payload)}function ap(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=rn(p,c),p.index=0,p.sibling=null,p}function o(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,h,v){return c===null||c.tag!==6?(c=ba(h,p.mode,v),c.return=p,c):(c=i(c,h),c.return=p,c)}function l(p,c,h,v){var k=h.type;return k===Jn?d(p,c,h.props.children,v,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&_d(k)===c.type)?(v=i(c,h.props),v.ref=Yr(p,c,h),v.return=p,v):(v=Fo(h.type,h.key,h.props,null,p.mode,v),v.ref=Yr(p,c,h),v.return=p,v)}function u(p,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=La(h,p.mode,v),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function d(p,c,h,v,k){return c===null||c.tag!==7?(c=Nn(h,p.mode,v,k),c.return=p,c):(c=i(c,h),c.return=p,c)}function f(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ba(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oo:return h=Fo(c.type,c.key,c.props,null,p.mode,h),h.ref=Yr(p,null,c),h.return=p,h;case Xn:return c=La(c,p.mode,h),c.return=p,c;case zt:var v=c._init;return f(p,v(c._payload),h)}if(ei(c)||Wr(c))return c=Nn(c,p.mode,h,null),c.return=p,c;vo(p,c)}return null}function m(p,c,h,v){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(p,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return h.key===k?l(p,c,h,v):null;case Xn:return h.key===k?u(p,c,h,v):null;case zt:return k=h._init,m(p,c,k(h._payload),v)}if(ei(h)||Wr(h))return k!==null?null:d(p,c,h,v,null);vo(p,h)}return null}function g(p,c,h,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(h)||null,a(c,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oo:return p=p.get(v.key===null?h:v.key)||null,l(c,p,v,k);case Xn:return p=p.get(v.key===null?h:v.key)||null,u(c,p,v,k);case zt:var S=v._init;return g(p,c,h,S(v._payload),k)}if(ei(v)||Wr(v))return p=p.get(h)||null,d(c,p,v,k,null);vo(c,v)}return null}function y(p,c,h,v){for(var k=null,S=null,w=c,C=c=0,M=null;w!==null&&C<h.length;C++){w.index>C?(M=w,w=null):M=w.sibling;var D=m(p,w,h[C],v);if(D===null){w===null&&(w=M);break}e&&w&&D.alternate===null&&t(p,w),c=o(D,c,C),S===null?k=D:S.sibling=D,S=D,w=M}if(C===h.length)return n(p,w),Y&&In(p,C),k;if(w===null){for(;C<h.length;C++)w=f(p,h[C],v),w!==null&&(c=o(w,c,C),S===null?k=w:S.sibling=w,S=w);return Y&&In(p,C),k}for(w=r(p,w);C<h.length;C++)M=g(w,p,C,h[C],v),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?C:M.key),c=o(M,c,C),S===null?k=M:S.sibling=M,S=M);return e&&w.forEach(function(be){return t(p,be)}),Y&&In(p,C),k}function _(p,c,h,v){var k=Wr(h);if(typeof k!="function")throw Error(I(150));if(h=k.call(h),h==null)throw Error(I(151));for(var S=k=null,w=c,C=c=0,M=null,D=h.next();w!==null&&!D.done;C++,D=h.next()){w.index>C?(M=w,w=null):M=w.sibling;var be=m(p,w,D.value,v);if(be===null){w===null&&(w=M);break}e&&w&&be.alternate===null&&t(p,w),c=o(be,c,C),S===null?k=be:S.sibling=be,S=be,w=M}if(D.done)return n(p,w),Y&&In(p,C),k;if(w===null){for(;!D.done;C++,D=h.next())D=f(p,D.value,v),D!==null&&(c=o(D,c,C),S===null?k=D:S.sibling=D,S=D);return Y&&In(p,C),k}for(w=r(p,w);!D.done;C++,D=h.next())D=g(w,p,C,D.value,v),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?C:D.key),c=o(D,c,C),S===null?k=D:S.sibling=D,S=D);return e&&w.forEach(function(_n){return t(p,_n)}),Y&&In(p,C),k}function T(p,c,h,v){if(typeof h=="object"&&h!==null&&h.type===Jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:e:{for(var k=h.key,S=c;S!==null;){if(S.key===k){if(k=h.type,k===Jn){if(S.tag===7){n(p,S.sibling),c=i(S,h.props.children),c.return=p,p=c;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zt&&_d(k)===S.type){n(p,S.sibling),c=i(S,h.props),c.ref=Yr(p,S,h),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}h.type===Jn?(c=Nn(h.props.children,p.mode,v,h.key),c.return=p,p=c):(v=Fo(h.type,h.key,h.props,null,p.mode,v),v.ref=Yr(p,c,h),v.return=p,p=v)}return s(p);case Xn:e:{for(S=h.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=La(h,p.mode,v),c.return=p,p=c}return s(p);case zt:return S=h._init,T(p,c,S(h._payload),v)}if(ei(h))return y(p,c,h,v);if(Wr(h))return _(p,c,h,v);vo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=ba(h,p.mode,v),c.return=p,p=c),s(p)):n(p,c)}return T}var kr=ap(!0),lp=ap(!1),Ki={},dt=hn(Ki),Oi=hn(Ki),Ni=hn(Ki);function xn(e){if(e===Ki)throw Error(I(174));return e}function Mu(e,t){switch(W(Ni,t),W(Oi,e),W(dt,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}q(dt),W(dt,t)}function Ir(){q(dt),q(Oi),q(Ni)}function up(e){xn(Ni.current);var t=xn(dt.current),n=al(t,e.type);t!==n&&(W(Oi,e),W(dt,n))}function Fu(e){Oi.current===e&&(q(dt),q(Oi))}var Q=hn(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=[];function zu(){for(var e=0;e<Ra.length;e++)Ra[e]._workInProgressVersionPrimary=null;Ra.length=0}var bo=Ot.ReactCurrentDispatcher,Pa=Ot.ReactCurrentBatchConfig,Fn=0,X=null,ie=null,ae=null,ds=!1,di=!1,bi=0,zv=0;function pe(){throw Error(I(321))}function $u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Bu(e,t,n,r,i,o){if(Fn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?Hv:Wv,e=n(r,i),di){o=0;do{if(di=!1,bi=0,25<=o)throw Error(I(301));o+=1,ae=ie=null,t.updateQueue=null,bo.current=Vv,e=n(r,i)}while(di)}if(bo.current=fs,t=ie!==null&&ie.next!==null,Fn=0,ae=ie=X=null,ds=!1,t)throw Error(I(300));return e}function ju(){var e=bi!==0;return bi=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?X.memoizedState=ae=e:ae=ae.next=e,ae}function Ge(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?X.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(I(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?X.memoizedState=ae=e:ae=ae.next=e}return ae}function Li(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=Ge(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Fn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,X.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,zn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Aa(e){var t=Ge(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cp(){}function dp(e,t){var n=X,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,Hu(pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Di(9,hp.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(I(349));Fn&30||fp(n,t,i)}return i}function fp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&gp(e)}function pp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function gp(e){var t=Pt(e,1);t!==null&&et(t,e,1,-1)}function wd(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=jv.bind(null,X,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vp(){return Ge().memoizedState}function Lo(e,t,n,r){var i=ot();X.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&$u(r,s.deps)){i.memoizedState=Di(t,n,o,r);return}}X.flags|=e,i.memoizedState=Di(1|t,n,o,r)}function Sd(e,t){return Lo(8390656,8,e,t)}function Hu(e,t){return Fs(2048,8,e,t)}function yp(e,t){return Fs(4,2,e,t)}function _p(e,t){return Fs(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,4,wp.bind(null,t,e),n)}function Wu(){}function Ep(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ip(e,t,n){return Fn&21?(nt(n,t)||(n=Rh(),X.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function $v(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Pa.transition;Pa.transition={};try{e(!1),t()}finally{$=n,Pa.transition=r}}function Tp(){return Ge().memoizedState}function Bv(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(e))Rp(t,n);else if(n=rp(e,t,n,r),n!==null){var i=ke();et(n,e,r,i),Pp(n,t,r)}}function jv(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(e))Rp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,Du(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rp(e,t,i,r),n!==null&&(i=ke(),et(n,e,r,i),Pp(n,t,r))}}function Cp(e){var t=e.alternate;return e===X||t!==null&&t===X}function Rp(e,t){di=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Su(e,n)}}var fs={readContext:Ve,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},Hv={readContext:Ve,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bv.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:Wu,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=$v.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ot();if(Y){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ue===null)throw Error(I(349));Fn&30||fp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Sd(pp.bind(null,r,o,e),[e]),r.flags|=2048,Di(9,hp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=ue.identifierPrefix;if(Y){var n=wt,r=_t;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wv={readContext:Ve,useCallback:Ep,useContext:Ve,useEffect:Hu,useImperativeHandle:Sp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:kp,useReducer:xa,useRef:vp,useState:function(){return xa(Li)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ge();return Ip(t,ie.memoizedState,e)},useTransition:function(){var e=xa(Li)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1},Vv={readContext:Ve,useCallback:Ep,useContext:Ve,useEffect:Hu,useImperativeHandle:Sp,useInsertionEffect:yp,useLayoutEffect:_p,useMemo:kp,useReducer:Aa,useRef:vp,useState:function(){return Aa(Li)},useDebugValue:Wu,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:Ip(t,ie.memoizedState,e)},useTransition:function(){var e=Aa(Li)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:cp,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=_0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gv=typeof WeakMap=="function"?WeakMap:Map;function xp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ps||(ps=!0,$l=r),Al(e,t)},n}function Ap(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Al(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sy.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Id(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var qv=Ot.ReactCurrentOwner,Pe=!1;function Se(e,t,n,r){t.child=e===null?lp(t,null,n,r):kr(t,e.child,n,r)}function Td(e,t,n,r,i){n=n.render;var o=t.ref;return mr(t,i),r=Bu(e,t,n,r,o,i),n=ju(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Y&&n&&xu(t),t.flags|=1,Se(e,t,r,i),t.child)}function Cd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ju(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Op(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(s,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Op(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ri(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,xt(e,t,i)}return Ol(e,t,n,r,i)}function Np(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(lr,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(lr,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(lr,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(lr,De),De|=r;return Se(e,t,i,n),t.child}function bp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=Oe(n)?Un:ve.current;return o=Sr(t,o),mr(t,i),n=Bu(e,t,n,r,o,i),r=ju(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Y&&r&&xu(t),t.flags|=1,Se(e,t,n,i),t.child)}function Rd(e,t,n,r,i){if(Oe(n)){var o=!0;is(t)}else o=!1;if(mr(t,i),t.stateNode===null)Do(e,t),sp(t,n,r),xl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Oe(n)?Un:ve.current,u=Sr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yd(t,s,r,u),$t=!1;var m=t.memoizedState;s.state=m,us(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ae.current||$t?(typeof d=="function"&&(Pl(t,n,d,r),l=t.memoizedState),(a=$t||vd(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ip(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ve(l):(l=Oe(n)?Un:ve.current,l=Sr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&yd(t,s,r,l),$t=!1,m=t.memoizedState,s.state=m,us(t,r,s,i);var y=t.memoizedState;a!==f||m!==y||Ae.current||$t?(typeof g=="function"&&(Pl(t,n,g,r),y=t.memoizedState),(u=$t||vd(t,n,u,r,m,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){bp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&fd(t,n,!1),xt(e,t,o);r=t.stateNode,qv.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,a,o)):Se(e,t,a,o),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function Lp(e){var t=e.stateNode;t.pendingContext?dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dd(e,t.context,!1),Mu(e,t.containerInfo)}function Pd(e,t,n,r,i){return Er(),Ou(i),t.flags|=256,Se(e,t,n,r),t.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dp(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Bs(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ll(n),t.memoizedState=bl,e):Vu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kv(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=rn(a,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=bl,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Ou(r),kr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kv(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Oa(Error(I(422))),yo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bs({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&kr(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=bl,o);if(!(t.mode&1))return yo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Oa(o,r,void 0),yo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Pe||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),et(r,e,i,-1))}return Xu(),r=Oa(Error(I(421))),yo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ay.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=Zt(i.nextSibling),Me=t,Y=!0,Je=null,e!==null&&(Be[je++]=_t,Be[je++]=wt,Be[je++]=Mn,_t=e.id,wt=e.overflow,Mn=t),t=Vu(t,r.children),t.flags|=4096,t)}function xd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Rl(e.return,t,n)}function Na(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Up(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,n,t);else if(e.tag===19)xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&cs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Na(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Na(t,!0,n,null,o);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yv(e,t,n){switch(t.tag){case 3:Lp(t),Er();break;case 5:up(t);break;case 1:Oe(t.type)&&is(t);break;case 4:Mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(as,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Dp(e,t,n):(W(Q,Q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Up(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return xt(e,t,n)}var Mp,Dl,Fp,zp;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dl=function(){};Fp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(dt.current);var o=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=sl(e,i),r=sl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ns)}ll(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};zp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qv(e,t,n){var r=t.pendingProps;switch(Au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Oe(t.type)&&rs(),me(t),null;case 3:return r=t.stateNode,Ir(),q(Ae),q(ve),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Hl(Je),Je=null))),Dl(e,t),me(t),null;case 5:Fu(t);var i=xn(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Fp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return me(t),null}if(e=xn(dt.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[Ai]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)V(ni[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Fc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":$c(r,o),V("invalid",r)}ll(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",""+a]):wi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":so(r),zc(r,o,!0);break;case"textarea":so(r),Bc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ns)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[at]=t,e[Ai]=r,Mp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ul(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)V(ni[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Fc(e,r),i=rl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":$c(e,r),i=sl(e,r),V("invalid",e);break;default:i=r}ll(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Si(e,l):typeof l=="number"&&Si(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&mu(e,o,l,s))}switch(n){case"input":so(e),zc(e,r,!1);break;case"textarea":so(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dr(e,!!r.multiple,o,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)zp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=xn(Ni.current),xn(dt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return me(t),null;case 13:if(q(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ue!==null&&t.mode&1&&!(t.flags&128))np(),Er(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[at]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Je!==null&&(Hl(Je),Je=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?se===0&&(se=3):Xu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Ir(),Dl(e,t),e===null&&Pi(t.stateNode.containerInfo),me(t),null;case 10:return Lu(t.type._context),me(t),null;case 17:return Oe(t.type)&&rs(),me(t),null;case 19:if(q(Q),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Qr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=cs(e),s!==null){for(t.flags|=128,Qr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Cr&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=cs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return me(t),null}else 2*te()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Xv(e,t){switch(Au(t),t.tag){case 1:return Oe(t.type)&&rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),q(Ae),q(ve),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return Ir(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var _o=!1,ge=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,P=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Ad=!1;function Zv(e,t){if(_l=Zo,e=Hh(),Pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Zo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,T=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Qe(t.type,_),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=Ad,Ad=!1,y}function fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ul(t,n,o)}i=i.next}while(i!==r)}}function zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Ai],delete t[kl],delete t[Dv],delete t[Uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bp(e){return e.tag===5||e.tag===3||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}var ce=null,Xe=!1;function Ut(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Os,n)}catch{}switch(n.tag){case 5:ge||ar(n,t);case 6:var r=ce,i=Xe;ce=null,Ut(e,t,n),ce=r,Xe=i,ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Xe?(e=ce,n=n.stateNode,e.nodeType===8?Ta(e.parentNode,n):e.nodeType===1&&Ta(e,n),Ti(e)):Ta(ce,n.stateNode));break;case 4:r=ce,i=Xe,ce=n.stateNode.containerInfo,Xe=!0,Ut(e,t,n),ce=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ul(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!ge&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Ut(e,t,n),ge=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jv),t.forEach(function(r){var i=ly.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Xe=!1;break e;case 3:ce=a.stateNode.containerInfo,Xe=!0;break e;case 4:ce=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(ce===null)throw Error(I(160));jp(o,s,i),ce=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hp(t,e),t=t.sibling}function Hp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),it(e),r&4){try{fi(3,e,e.return),zs(3,e)}catch(_){ee(e,e.return,_)}try{fi(5,e,e.return)}catch(_){ee(e,e.return,_)}}break;case 1:Ye(t,e),it(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(Ye(t,e),it(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(_){ee(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(i,o),ul(a,s);var u=ul(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?mh(i,f):d==="dangerouslySetInnerHTML"?hh(i,f):d==="children"?Si(i,f):mu(i,d,f,u)}switch(a){case"input":il(i,o);break;case"textarea":dh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?dr(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?dr(i,!!o.multiple,o.defaultValue,!0):dr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ai]=o}catch(_){ee(e,e.return,_)}}break;case 6:if(Ye(t,e),it(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){ee(e,e.return,_)}}break;case 3:if(Ye(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(_){ee(e,e.return,_)}break;case 4:Ye(t,e),it(e);break;case 13:Ye(t,e),it(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ku=te())),r&4&&Nd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||d,Ye(t,e),ge=u):Ye(t,e),it(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(f=P=d;P!==null;){switch(m=P,g=m.child,m.tag){case 0:case 11:case 14:case 15:fi(4,m,m.return);break;case 1:ar(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){ee(r,n,_)}}break;case 5:ar(m,m.return);break;case 22:if(m.memoizedState!==null){Ld(f);continue}}g!==null?(g.return=m,P=g):Ld(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(_){ee(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){ee(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ye(t,e),it(e),r&4&&Nd(e);break;case 21:break;default:Ye(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=Od(e);zl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Od(e);Fl(e,a,s);break;default:throw Error(I(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ey(e,t,n){P=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_o;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=_o;var u=ge;if(_o=s,(ge=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?Dd(i):l!==null?(l.return=s,P=l):Dd(i);for(;o!==null;)P=o,Wp(o),o=o.sibling;P=i,_o=a,ge=u}bd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):bd(e)}}function bd(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||zs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ge||t.flags&512&&Ml(t)}catch(m){ee(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Ld(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Dd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zs(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Ml(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{Ml(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var ty=Math.ceil,hs=Ot.ReactCurrentDispatcher,Gu=Ot.ReactCurrentOwner,We=Ot.ReactCurrentBatchConfig,F=0,ue=null,re=null,fe=0,De=0,lr=hn(0),se=0,Ui=null,zn=0,$s=0,qu=0,hi=null,Re=null,Ku=0,Cr=1/0,gt=null,ps=!1,$l=null,tn=null,wo=!1,Yt=null,ms=0,pi=0,Bl=null,Uo=-1,Mo=0;function ke(){return F&6?te():Uo!==-1?Uo:Uo=te()}function nn(e){return e.mode&1?F&2&&fe!==0?fe&-fe:Fv.transition!==null?(Mo===0&&(Mo=Rh()),Mo):(e=$,e!==0||(e=window.event,e=e===void 0?16:Lh(e.type)),e):1}function et(e,t,n,r){if(50<pi)throw pi=0,Bl=null,Error(I(185));Vi(e,n,r),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&($s|=n),se===4&&jt(e,fe)),Ne(e,r),n===1&&F===0&&!(t.mode&1)&&(Cr=te()+500,Us&&pn()))}function Ne(e,t){var n=e.callbackNode;F0(e,t);var r=Jo(e,e===ue?fe:0);if(r===0)n!==null&&Wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wc(n),t===1)e.tag===0?Mv(Ud.bind(null,e)):Zh(Ud.bind(null,e)),bv(function(){!(F&6)&&pn()}),n=null;else{switch(Ph(r)){case 1:n=wu;break;case 4:n=Th;break;case 16:n=Xo;break;case 536870912:n=Ch;break;default:n=Xo}n=Jp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(Uo=-1,Mo=0,F&6)throw Error(I(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Jo(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gs(e,r);else{t=r;var i=F;F|=2;var o=qp();(ue!==e||fe!==t)&&(gt=null,Cr=te()+500,On(e,t));do try{iy();break}catch(a){Gp(e,a)}while(1);bu(),hs.current=o,F=i,re!==null?t=0:(ue=null,fe=0,t=se)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=jl(e,i))),t===1)throw n=Ui,On(e,0),jt(e,r),Ne(e,te()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ny(i)&&(t=gs(e,r),t===2&&(o=pl(e),o!==0&&(r=o,t=jl(e,o))),t===1))throw n=Ui,On(e,0),jt(e,r),Ne(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Tn(e,Re,gt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ku+500-te(),10<t)){if(Jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=El(Tn.bind(null,e,Re,gt),t);break}Tn(e,Re,gt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ty(r/1960))-r,10<r){e.timeoutHandle=El(Tn.bind(null,e,Re,gt),r);break}Tn(e,Re,gt);break;case 5:Tn(e,Re,gt);break;default:throw Error(I(329))}}}return Ne(e,te()),e.callbackNode===n?Vp.bind(null,e):null}function jl(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=gs(e,t),e!==2&&(t=Re,Re=n,t!==null&&Hl(t)),e}function Hl(e){Re===null?Re=e:Re.push.apply(Re,e)}function ny(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~qu,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Ud(e){if(F&6)throw Error(I(327));gr();var t=Jo(e,0);if(!(t&1))return Ne(e,te()),null;var n=gs(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=jl(e,r))}if(n===1)throw n=Ui,On(e,0),jt(e,t),Ne(e,te()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Re,gt),Ne(e,te()),null}function Yu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Cr=te()+500,Us&&pn())}}function $n(e){Yt!==null&&Yt.tag===0&&!(F&6)&&gr();var t=F;F|=1;var n=We.transition,r=$;try{if(We.transition=null,$=1,e)return e()}finally{$=r,We.transition=n,F=t,!(F&6)&&pn()}}function Qu(){De=lr.current,q(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nv(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rs();break;case 3:Ir(),q(Ae),q(ve),zu();break;case 5:Fu(r);break;case 4:Ir();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Lu(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(ue=e,re=e=rn(e.current,null),fe=De=t,se=0,Ui=null,qu=$s=zn=0,Re=hi=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Pn=null}return e}function Gp(e,t){do{var n=re;try{if(bu(),bo.current=fs,ds){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ds=!1}if(Fn=0,ae=ie=X=null,di=!1,bi=0,Gu.current=null,n===null||n.return===null){se=1,Ui=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=kd(s);if(g!==null){g.flags&=-257,Id(g,s,a,o,t),g.mode&1&&Ed(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){Ed(o,u,t),Xu();break e}l=Error(I(426))}}else if(Y&&a.mode&1){var T=kd(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Id(T,s,a,o,t),Ou(Tr(l,a));break e}}o=l=Tr(l,a),se!==4&&(se=2),hi===null?hi=[o]:hi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=xp(o,l,t);md(o,p);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ap(o,a,t);md(o,v);break e}}o=o.return}while(o!==null)}Yp(n)}catch(k){t=k,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function qp(){var e=hs.current;return hs.current=fs,e===null?fs:e}function Xu(){(se===0||se===3||se===2)&&(se=4),ue===null||!(zn&268435455)&&!($s&268435455)||jt(ue,fe)}function gs(e,t){var n=F;F|=2;var r=qp();(ue!==e||fe!==t)&&(gt=null,On(e,t));do try{ry();break}catch(i){Gp(e,i)}while(1);if(bu(),F=n,hs.current=r,re!==null)throw Error(I(261));return ue=null,fe=0,se}function ry(){for(;re!==null;)Kp(re)}function iy(){for(;re!==null&&!x0();)Kp(re)}function Kp(e){var t=Xp(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Yp(e):re=t,Gu.current=null}function Yp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=Qv(n,t,De),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function Tn(e,t,n){var r=$,i=We.transition;try{We.transition=null,$=1,oy(e,t,n,r)}finally{We.transition=i,$=r}return null}function oy(e,t,n,r){do gr();while(Yt!==null);if(F&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(z0(e,o),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Jp(Xo,function(){return gr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var s=$;$=1;var a=F;F|=4,Gu.current=null,Zv(e,n),Hp(n,e),Tv(wl),Zo=!!_l,wl=_l=null,e.current=n,ey(n),A0(),F=a,$=s,We.transition=o}else e.current=n;if(wo&&(wo=!1,Yt=e,ms=i),o=e.pendingLanes,o===0&&(tn=null),b0(n.stateNode),Ne(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ps)throw ps=!1,e=$l,$l=null,e;return ms&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===Bl?pi++:(pi=0,Bl=e):pi=0,pn(),null}function gr(){if(Yt!==null){var e=Ph(ms),t=We.transition,n=$;try{if(We.transition=null,$=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,ms=0,F&6)throw Error(I(331));var i=F;for(F|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:fi(8,d,o)}var f=d.child;if(f!==null)f.return=d,P=f;else for(;P!==null;){d=P;var m=d.sibling,g=d.return;if($p(d),d===u){P=null;break}if(m!==null){m.return=g,P=m;break}P=g}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){s=P;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,P=h;else e:for(s=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zs(9,a)}}catch(k){ee(a,a.return,k)}if(a===s){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(F=i,pn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Os,e)}catch{}r=!0}return r}finally{$=n,We.transition=t}}return!1}function Md(e,t,n){t=Tr(n,t),t=xp(e,t,1),e=en(e,t,1),t=ke(),e!==null&&(Vi(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)Md(e,e,n);else for(;t!==null;){if(t.tag===3){Md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Tr(n,e),e=Ap(t,e,1),t=en(t,e,1),e=ke(),t!==null&&(Vi(t,1,e),Ne(t,e));break}}t=t.return}}function sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>te()-Ku?On(e,0):qu|=n),Ne(e,t)}function Qp(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=ke();e=Pt(e,t),e!==null&&(Vi(e,t,n),Ne(e,n))}function ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function ly(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Qp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Yv(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Y&&t.flags&1048576&&ep(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Do(e,t),e=t.pendingProps;var i=Sr(t,ve.current);mr(t,n),i=Bu(null,t,r,e,i,n);var o=ju();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(o=!0,is(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uu(t),i.updater=Ms,t.stateNode=i,i._reactInternals=t,xl(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&xu(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cy(r),e=Qe(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Rd(null,t,r,e,n);break e;case 11:t=Td(null,t,r,e,n);break e;case 14:t=Cd(null,t,r,Qe(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Rd(e,t,r,i,n);case 3:e:{if(Lp(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ip(e,t),us(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tr(Error(I(423)),t),t=Pd(e,t,r,n,i);break e}else if(r!==i){i=Tr(Error(I(424)),t),t=Pd(e,t,r,n,i);break e}else for(Ue=Zt(t.stateNode.containerInfo.firstChild),Me=t,Y=!0,Je=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=xt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return up(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Sl(r,i)?s=null:o!==null&&Sl(r,o)&&(t.flags|=32),bp(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return Dp(e,t,n);case 4:return Mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Td(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(as,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!Ae.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=Ve(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Cd(e,t,r,i,n);case 15:return Op(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Do(e,t),t.tag=1,Oe(r)?(e=!0,is(t)):e=!1,mr(t,n),sp(t,r,i),xl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Up(e,t,n);case 22:return Np(e,t,n)}throw Error(I(156,t.tag))};function Jp(e,t){return Ih(e,t)}function uy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new uy(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cy(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vu)return 11;if(e===yu)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ju(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jn:return Nn(n.children,i,o,t);case gu:s=8,i|=8;break;case Za:return e=He(12,n,t,i|2),e.elementType=Za,e.lanes=o,e;case el:return e=He(13,n,t,i),e.elementType=el,e.lanes=o,e;case tl:return e=He(19,n,t,i),e.elementType=tl,e.lanes=o,e;case ah:return Bs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oh:s=10;break e;case sh:s=9;break e;case vu:s=11;break e;case yu:s=14;break e;case zt:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Bs(e,t,n,r){return e=He(22,e,r,t),e.elementType=ah,e.lanes=n,e.stateNode={isHidden:!1},e}function ba(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,o,s,a,l){return e=new dy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(o),e}function fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zp(e){if(!e)return dn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Jh(e,n,t)}return t}function em(e,t,n,r,i,o,s,a,l){return e=Zu(n,r,!0,e,i,o,s,a,l),e.context=Zp(null),n=e.current,r=ke(),i=nn(n),o=Tt(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,Vi(e,i,r),Ne(e,r),e}function js(e,t,n,r){var i=t.current,o=ke(),s=nn(i);return n=Zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,s),e!==null&&(et(e,i,s,o),No(e,i,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function hy(){return null}var tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}Hs.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));js(e,t,null,null)};Hs.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){js(null,e,null,null)}),t[Rt]=null}};function Hs(e){this._internalRoot=e}Hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&bh(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function py(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vs(s);o.call(u)}}var s=em(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=s,e[Rt]=s.current,Pi(e.nodeType===8?e.parentNode:e),$n(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vs(l);a.call(u)}}var l=Zu(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=l,e[Rt]=l.current,Pi(e.nodeType===8?e.parentNode:e),$n(function(){js(t,l,n,r)}),l}function Vs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vs(s);a.call(l)}}js(t,s,e,i)}else s=py(n,t,e,i,r);return vs(s)}xh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(Su(t,n|1),Ne(t,te()),!(F&6)&&(Cr=te()+500,pn()))}break;case 13:$n(function(){var r=Pt(e,1);if(r!==null){var i=ke();et(r,e,1,i)}}),ec(e,1)}};Eu=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}ec(e,134217728)}};Ah=function(e){if(e.tag===13){var t=nn(e),n=Pt(e,t);if(n!==null){var r=ke();et(n,e,t,r)}ec(e,t)}};Oh=function(){return $};Nh=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};dl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ds(r);if(!i)throw Error(I(90));uh(r),il(r,i)}}}break;case"textarea":dh(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};yh=Yu;_h=$n;var my={usingClientEntryPoint:!1,Events:[qi,nr,Ds,gh,vh,Yu]},Xr={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gy={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Os=So.inject(gy),ct=So}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(I(200));return fy(e,t,null,n)};ze.createRoot=function(e,t){if(!nc(e))throw Error(I(299));var n=!1,r="",i=tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new tc(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Eh(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $n(e)};ze.hydrate=function(e,t,n){if(!Ws(t))throw Error(I(200));return Vs(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=em(t,null,e,1,n??null,i,!1,o,s),e[Rt]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hs(t)};ze.render=function(e,t,n){if(!Ws(t))throw Error(I(200));return Vs(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(I(40));return e._reactRootContainer?($n(function(){Vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};ze.unstable_batchedUpdates=Yu;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Vs(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ze})(h0);var $d=Qa;Ya.createRoot=$d.createRoot,Ya.hydrateRoot=$d.hydrateRoot;const rc=A.createContext(null);/**
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
 */const nm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new yy;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(e){const t=nm(e);return rm.encodeByteArray(t,!0)},ys=function(e){return _y(e).replace(/\./g,"")},im=function(e){try{return rm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sy=()=>wy().__FIREBASE_DEFAULTS__,Ey=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ky=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&im(e[1]);return t&&JSON.parse(t)},ic=()=>{try{return Sy()||Ey()||ky()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},om=e=>{var t,n;return(n=(t=ic())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Iy=e=>{const t=om(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},sm=()=>{var e;return(e=ic())===null||e===void 0?void 0:e.config},am=e=>{var t;return(t=ic())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ty{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Cy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ys(JSON.stringify(n)),ys(JSON.stringify(s)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Py(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ay(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Oy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ny(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const by="FirebaseError";class Nt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=by,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Ly(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Nt(i,a,r)}}function Ly(e,t){return e.replace(Dy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Dy=/\{\$([^}]+)}/g;function Uy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _s(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Bd(o)&&Bd(s)){if(!_s(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bd(e){return e!==null&&typeof e=="object"}/**
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
 */function Qi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ii(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function My(e,t){const n=new Fy(e,t);return n.subscribe.bind(n)}class Fy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zy(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Da(){}/**
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
 */function _e(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class $y{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ty;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jy(t))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cn){return this.instances.has(t)}getOptions(t=Cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:By(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Cn){return this.component?this.component.multipleInstances?t:Cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(e){return e===Cn?void 0:e}function jy(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $y(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const Wy={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Vy=H.INFO,Gy={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},qy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Gy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lm{constructor(t){this.name=t,this._logLevel=Vy,this._logHandler=qy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const Ky=(e,t)=>t.some(n=>e instanceof n);let jd,Hd;function Yy(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,Wl=new WeakMap,cm=new WeakMap,Ua=new WeakMap,oc=new WeakMap;function Xy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(on(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&um.set(n,e)}).catch(()=>{}),oc.set(t,e),t}function Jy(e){if(Wl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Wl.set(e,t)}let Vl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zy(e){Vl=e(Vl)}function e_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ma(this),t,...n);return cm.set(r,t.sort?t.sort():[t]),on(r)}:Qy().includes(e)?function(...t){return e.apply(Ma(this),t),on(um.get(this))}:function(...t){return on(e.apply(Ma(this),t))}}function t_(e){return typeof e=="function"?e_(e):(e instanceof IDBTransaction&&Jy(e),Ky(e,Yy())?new Proxy(e,Vl):e)}function on(e){if(e instanceof IDBRequest)return Xy(e);if(Ua.has(e))return Ua.get(e);const t=t_(e);return t!==e&&(Ua.set(e,t),oc.set(t,e)),t}const Ma=e=>oc.get(e);function n_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=on(s);return r&&s.addEventListener("upgradeneeded",l=>{r(on(s.result),l.oldVersion,l.newVersion,on(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const r_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Fa=new Map;function Wd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fa.get(t))return Fa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=i_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Fa.set(t,o),o}Zy(e=>({...e,get:(t,n,r)=>Wd(t,n)||e.get(t,n,r),has:(t,n)=>!!Wd(t,n)||e.has(t,n)}));/**
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
 */class o_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function s_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gl="@firebase/app",Vd="0.10.1";/**
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
 */const jn=new lm("@firebase/app"),a_="@firebase/app-compat",l_="@firebase/analytics-compat",u_="@firebase/analytics",c_="@firebase/app-check-compat",d_="@firebase/app-check",f_="@firebase/auth",h_="@firebase/auth-compat",p_="@firebase/database",m_="@firebase/database-compat",g_="@firebase/functions",v_="@firebase/functions-compat",y_="@firebase/installations",__="@firebase/installations-compat",w_="@firebase/messaging",S_="@firebase/messaging-compat",E_="@firebase/performance",k_="@firebase/performance-compat",I_="@firebase/remote-config",T_="@firebase/remote-config-compat",C_="@firebase/storage",R_="@firebase/storage-compat",P_="@firebase/firestore",x_="@firebase/firestore-compat",A_="firebase",O_="10.11.0";/**
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
 */const ql="[DEFAULT]",N_={[Gl]:"fire-core",[a_]:"fire-core-compat",[u_]:"fire-analytics",[l_]:"fire-analytics-compat",[d_]:"fire-app-check",[c_]:"fire-app-check-compat",[f_]:"fire-auth",[h_]:"fire-auth-compat",[p_]:"fire-rtdb",[m_]:"fire-rtdb-compat",[g_]:"fire-fn",[v_]:"fire-fn-compat",[y_]:"fire-iid",[__]:"fire-iid-compat",[w_]:"fire-fcm",[S_]:"fire-fcm-compat",[E_]:"fire-perf",[k_]:"fire-perf-compat",[I_]:"fire-rc",[T_]:"fire-rc-compat",[C_]:"fire-gcs",[R_]:"fire-gcs-compat",[P_]:"fire-fst",[x_]:"fire-fst-compat","fire-js":"fire-js",[A_]:"fire-js-all"};/**
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
 */const ws=new Map,b_=new Map,Kl=new Map;function Gd(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rr(e){const t=e.name;if(Kl.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Kl.set(t,e);for(const n of ws.values())Gd(n,e);for(const n of b_.values())Gd(n,e);return!0}function sc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function St(e){return e.settings!==void 0}/**
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
 */const L_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},sn=new Yi("app","Firebase",L_);/**
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
 */class D_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=O_;function dm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ql,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=sm()),!n)throw sn.create("no-options");const o=ws.get(i);if(o){if(_s(n,o.options)&&_s(r,o.config))return o;throw sn.create("duplicate-app",{appName:i})}const s=new Hy(i);for(const l of Kl.values())s.addComponent(l);const a=new D_(n,r,s);return ws.set(i,a),a}function fm(e=ql){const t=ws.get(e);if(!t&&e===ql&&sm())return dm();if(!t)throw sn.create("no-app",{appName:e});return t}function an(e,t,n){var r;let i=(r=N_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}Rr(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const U_="firebase-heartbeat-database",M_=1,Mi="firebase-heartbeat-store";let za=null;function hm(){return za||(za=n_(U_,M_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Mi)}catch(n){console.warn(n)}}}}).catch(e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})})),za}async function F_(e){try{const n=(await hm()).transaction(Mi),r=await n.objectStore(Mi).get(pm(e));return await n.done,r}catch(t){if(t instanceof Nt)jn.warn(t.message);else{const n=sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function qd(e,t){try{const r=(await hm()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(t,pm(e)),await r.done}catch(n){if(n instanceof Nt)jn.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function pm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const z_=1024,$_=30*24*60*60*1e3;class B_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=$_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kd(),{heartbeatsToSend:r,unsentEntries:i}=j_(this._heartbeatsCache.heartbeats),o=ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Kd(){return new Date().toISOString().substring(0,10)}function j_(e,t=z_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class H_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oy()?Ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yd(e){return ys(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function W_(e){Rr(new Bn("platform-logger",t=>new o_(t),"PRIVATE")),Rr(new Bn("heartbeat",t=>new B_(t),"PRIVATE")),an(Gl,Vd,e),an(Gl,Vd,"esm2017"),an("fire-js","")}W_("");var V_="firebase",G_="10.11.0";/**
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
 */an(V_,G_,"app");function ac(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q_=mm,gm=new Yi("auth","Firebase",mm());/**
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
 */const Ss=new lm("@firebase/auth");function K_(e,...t){Ss.logLevel<=H.WARN&&Ss.warn(`Auth (${Mr}): ${e}`,...t)}function zo(e,...t){Ss.logLevel<=H.ERROR&&Ss.error(`Auth (${Mr}): ${e}`,...t)}/**
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
 */function rt(e,...t){throw lc(e,...t)}function ft(e,...t){return lc(e,...t)}function vm(e,t,n){const r=Object.assign(Object.assign({},q_()),{[t]:n});return new Yi("auth","Firebase",r).create(t,{appName:e.name})}function ln(e){return vm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gm.create(e,...t)}function N(e,t,...n){if(!e)throw lc(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zo(t),new Error(t)}function At(e,t){e||Et(t)}/**
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
 */function Yl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Y_(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Q_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y_()||Py()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Xi{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=Ry()||xy()}get(){return Q_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uc(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ym{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z_=new Xi(3e4,6e4);function qn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function mn(e,t,n,r,i={}){return _m(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Qi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ym.fetch()(wm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function _m(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},J_),t);try{const i=new tw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Eo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vm(e,d,u);rt(e,d)}}catch(i){if(i instanceof Nt)throw i;rt(e,"network-request-failed",{message:String(i)})}}async function Gs(e,t,n,r,i={}){const o=await mn(e,t,n,r,i);return"mfaPendingCredential"in o&&rt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?uc(e.config,i):`${e.config.apiScheme}://${i}`}function ew(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ft(this.auth,"network-request-failed")),Z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ft(e,t,r);return i.customData._tokenResponse=n,i}function Xd(e){return e!==void 0&&e.enterprise!==void 0}class nw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return ew(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function rw(e,t){return mn(e,"GET","/v2/recaptchaConfig",qn(e,t))}/**
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
 */async function iw(e,t){return mn(e,"POST","/v1/accounts:delete",t)}async function Sm(e,t){return mn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function mi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ow(e,t=!1){const n=_e(e),r=await n.getIdToken(t),i=cc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:mi($a(i.auth_time)),issuedAtTime:mi($a(i.iat)),expirationTime:mi($a(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function $a(e){return Number(e)*1e3}function cc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=im(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jd(e){const t=cc(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Fi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Nt&&sw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function sw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class aw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ql{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Fi(e,Sm(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Em(o.providerUserInfo):[],a=uw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ql(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function lw(e){const t=_e(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Em(e){return e.map(t=>{var{providerId:n}=t,r=ac(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cw(e,t){const n=await _m(e,{},async()=>{const r=Qi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=wm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ym.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dw(e,t){return mn(e,"POST","/v2/accounts:revokeToken",qn(e,t))}/**
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
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=Jd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await cw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new vr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Mt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ac(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ql(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ow(this,t)}reload(){return lw(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(ln(this.auth));const t=await this.getIdToken();return await Fi(this,iw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:v,isAnonymous:k,providerData:S,stsTokenManager:w}=n;N(h&&w,t,"internal-error");const C=vr.fromJSON(this.name,w);N(typeof h=="string",t,"internal-error"),Mt(f,t.name),Mt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof k=="boolean",t,"internal-error"),Mt(g,t.name),Mt(y,t.name),Mt(_,t.name),Mt(T,t.name),Mt(p,t.name),Mt(c,t.name);const M=new kt({uid:h,auth:t,email:m,emailVerified:v,displayName:f,isAnonymous:k,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:C,createdAt:p,lastLoginAt:c});return S&&Array.isArray(S)&&(M.providerData=S.map(D=>Object.assign({},D))),T&&(M._redirectEventId=T),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new vr;i.updateFromServerResponse(n);const o=new kt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Es(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];N(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Em(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new vr;a.updateFromIdToken(r);const l=new kt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ql(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Zd=new Map;function It(e){At(e instanceof Function,"Expected a class definition");let t=Zd.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zd.set(e,t),t)}/**
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
 */class km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}km.type="NONE";const ef=km;/**
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
 */function $o(e,t,n){return`firebase:${e}:${t}:${n}`}class yr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,o),this.fullPersistenceKey=$o("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new yr(It(ef),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||It(ef);const s=$o(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=kt._fromJSON(t,d);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new yr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new yr(o,t,r))}}/**
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
 */function tf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Im(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pm(t))return"Blackberry";if(xm(t))return"Webos";if(dc(t))return"Safari";if((t.includes("chrome/")||Tm(t))&&!t.includes("edge/"))return"Chrome";if(Rm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Im(e=ye()){return/firefox\//i.test(e)}function dc(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tm(e=ye()){return/crios\//i.test(e)}function Cm(e=ye()){return/iemobile/i.test(e)}function Rm(e=ye()){return/android/i.test(e)}function Pm(e=ye()){return/blackberry/i.test(e)}function xm(e=ye()){return/webos/i.test(e)}function qs(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fw(e=ye()){var t;return qs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hw(){return Ay()&&document.documentMode===10}function Am(e=ye()){return qs(e)||Rm(e)||xm(e)||Pm(e)||/windows phone/i.test(e)||Cm(e)}function pw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Om(e,t=[]){let n;switch(e){case"Browser":n=tf(ye());break;case"Worker":n=`${tf(ye())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class mw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gw(e,t={}){return mn(e,"GET","/v2/passwordPolicy",qn(e,t))}/**
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
 */const vw=6;class yw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:vw,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class _w{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nf(this),this.idTokenSubscription=new nf(this),this.beforeStateQueue=new mw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Sm(this,{idToken:t}),r=await kt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(St(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(St(this.app))return Promise.reject(ln(this));const n=t?_e(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return St(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await gw(this),n=new yw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Yi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Om(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&K_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(e){return _e(e)}class nf{constructor(t){this.auth=t,this.observer=null,this.addObserver=My(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ww(e){Ks=e}function Nm(e){return Ks.loadJS(e)}function Sw(){return Ks.recaptchaEnterpriseScript}function Ew(){return Ks.gapiScript}function kw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Iw="recaptcha-enterprise",Tw="NO_RECAPTCHA";class Cw{constructor(t){this.type=Iw,this.auth=Fr(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{rw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Xd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Tw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Xd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Sw();l.length!==0&&(l+=a),Nm(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function rf(e,t,n,r=!1){const i=new Cw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function of(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await rf(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function Rw(e,t){const n=sc(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(_s(o,t??{}))return i;rt(i,"already-initialized")}return n.initialize({options:t})}function Pw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xw(e,t,n){const r=Fr(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=bm(t),{host:s,port:a}=Aw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ow()}function bm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Aw(e){const t=bm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:sf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:sf(s)}}}function sf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ow(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class fc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function Nw(e,t){return mn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function bw(e,t){return Gs(e,"POST","/v1/accounts:signInWithPassword",qn(e,t))}/**
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
 */async function Lw(e,t){return Gs(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}async function Dw(e,t){return Gs(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}/**
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
 */class zi extends fc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new zi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new zi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return of(t,n,"signInWithPassword",bw);case"emailLink":return Lw(t,{email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return of(t,r,"signUpPassword",Nw);case"emailLink":return Dw(t,{idToken:n,email:this._email,oobCode:this._password});default:rt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function _r(e,t){return Gs(e,"POST","/v1/accounts:signInWithIdp",qn(e,t))}/**
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
 */const Uw="http://localhost";class Hn extends fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Hn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return _r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_r(t,n)}buildRequest(){const t={requestUri:Uw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qi(n)}return t}}/**
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
 */function Mw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fw(e){const t=ri(ii(e)).link,n=t?ri(ii(t)).deep_link_id:null,r=ri(ii(e)).deep_link_id;return(r?ri(ii(r)).link:null)||r||n||t||e}class hc{constructor(t){var n,r,i,o,s,a;const l=ri(ii(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Mw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Fw(t);try{return new hc(n)}catch{return null}}}/**
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
 */class zr{constructor(){this.providerId=zr.PROVIDER_ID}static credential(t,n){return zi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hc.parseLink(n);return N(r,"argument-error"),zi._fromEmailAndCode(t,r.code,r.tenantId)}}zr.PROVIDER_ID="password";zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends Lm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Ji{constructor(){super("facebook.com")}static credential(t){return Hn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Vt extends Ji{constructor(){super("github.com")}static credential(t){return Hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class Gt extends Ji{constructor(){super("twitter.com")}static credential(t,n){return Hn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
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
 */class Pr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await kt._fromIdTokenResponse(t,r,i),s=af(r);return new Pr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=af(r);return new Pr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ks extends Nt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ks(t,n,r,i)}}function Dm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(e,o,t,r):o})}async function zw(e,t,n=!1){const r=await Fi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pr._forOperation(e,"link",r)}/**
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
 */async function $w(e,t,n=!1){const{auth:r}=e;if(St(r.app))return Promise.reject(ln(r));const i="reauthenticate";try{const o=await Fi(e,Dm(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=cc(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),Pr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),o}}/**
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
 */async function Um(e,t,n=!1){if(St(e.app))return Promise.reject(ln(e));const r="signIn",i=await Dm(e,r,t),o=await Pr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Bw(e,t){return Um(Fr(e),t)}/**
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
 */async function jw(e){const t=Fr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Hw(e,t,n){return St(e.app)?Promise.reject(ln(e)):Bw(_e(e),zr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jw(e),r})}function Ww(e,t,n,r){return _e(e).onIdTokenChanged(t,n,r)}function Vw(e,t,n){return _e(e).beforeAuthStateChanged(t,n)}function Gw(e,t,n,r){return _e(e).onAuthStateChanged(t,n,r)}const Is="__sak";/**
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
 */class Mm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qw(){const e=ye();return dc(e)||qs(e)}const Kw=1e3,Yw=10;class Fm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qw()&&pw(),this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);hw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Yw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fm.type="LOCAL";const Qw=Fm;/**
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
 */class zm extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zm.type="SESSION";const $m=zm;/**
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
 */function Xw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ys{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ys(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Xw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
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
 */function pc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Jw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=pc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ht(){return window}function Zw(e){ht().location.href=e}/**
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
 */function Bm(){return typeof ht().WorkerGlobalScope<"u"&&typeof ht().importScripts=="function"}async function e1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function n1(){return Bm()?self:null}/**
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
 */const jm="firebaseLocalStorageDb",r1=1,Ts="firebaseLocalStorage",Hm="fbase_key";class Zi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qs(e,t){return e.transaction([Ts],t?"readwrite":"readonly").objectStore(Ts)}function i1(){const e=indexedDB.deleteDatabase(jm);return new Zi(e).toPromise()}function Xl(){const e=indexedDB.open(jm,r1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ts,{keyPath:Hm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ts)?t(r):(r.close(),await i1(),t(await Xl()))})})}async function lf(e,t,n){const r=Qs(e,!0).put({[Hm]:t,value:n});return new Zi(r).toPromise()}async function o1(e,t){const n=Qs(e,!1).get(t),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function uf(e,t){const n=Qs(e,!0).delete(t);return new Zi(n).toPromise()}const s1=800,a1=3;class Wm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>a1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(n1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await e1(),!this.activeServiceWorker)return;this.sender=new Jw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||t1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xl();return await lf(t,Is,"1"),await uf(t,Is),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>o1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Qs(i,!1).getAll();return new Zi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wm.type="LOCAL";const l1=Wm;new Xi(3e4,6e4);/**
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
 */function u1(e,t){return t?It(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class mc extends fc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function c1(e){return Um(e.auth,new mc(e),e.bypassAuthState)}function d1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),$w(n,new mc(e),e.bypassAuthState)}async function f1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),zw(n,new mc(e),e.bypassAuthState)}/**
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
 */class Vm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return c1;case"linkViaPopup":case"linkViaRedirect":return f1;case"reauthViaPopup":case"reauthViaRedirect":return d1;default:rt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const h1=new Xi(2e3,1e4);class ur extends Vm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,h1.get())};t()}}ur.currentPopupAction=null;/**
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
 */const p1="pendingRedirect",Bo=new Map;class m1 extends Vm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Bo.get(this.auth._key());if(!t){try{const r=await g1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Bo.set(this.auth._key(),t)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g1(e,t){const n=_1(t),r=y1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function v1(e,t){Bo.set(e._key(),t)}function y1(e){return It(e._redirectPersistence)}function _1(e){return $o(p1,e.config.apiKey,e.name)}async function w1(e,t,n=!1){if(St(e.app))return Promise.reject(ln(e));const r=Fr(e),i=u1(r,t),s=await new m1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const S1=10*60*1e3;class E1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!k1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=S1&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(t))}saveEventToCache(t){this.cachedEventUids.add(cf(t)),this.lastProcessedEventTime=Date.now()}}function cf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function k1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gm(e);default:return!1}}/**
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
 */async function I1(e,t={}){return mn(e,"GET","/v1/projects",t)}/**
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
 */const T1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C1=/^https?/;async function R1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await I1(e);for(const n of t)try{if(P1(n))return}catch{}rt(e,"unauthorized-domain")}function P1(e){const t=Yl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!C1.test(n))return!1;if(T1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const x1=new Xi(3e4,6e4);function df(){const e=ht().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function A1(e){return new Promise((t,n)=>{var r,i,o;function s(){df(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{df(),n(ft(e,"network-request-failed"))},timeout:x1.get()})}if(!((i=(r=ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ht().gapi)===null||o===void 0)&&o.load)s();else{const a=kw("iframefcb");return ht()[a]=()=>{gapi.load?s():n(ft(e,"network-request-failed"))},Nm(`${Ew()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw jo=null,t})}let jo=null;function O1(e){return jo=jo||A1(e),jo}/**
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
 */const N1=new Xi(5e3,15e3),b1="__/auth/iframe",L1="emulator/auth/iframe",D1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M1(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?uc(t,L1):`https://${e.config.authDomain}/${b1}`,r={apiKey:t.apiKey,appName:e.name,v:Mr},i=U1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Qi(r).slice(1)}`}async function F1(e){const t=await O1(e),n=ht().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:M1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ft(e,"network-request-failed"),a=ht().setTimeout(()=>{o(s)},N1.get());function l(){ht().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const z1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,B1=600,j1="_blank",H1="http://localhost";class ff{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W1(e,t,n,r=$1,i=B1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},z1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ye().toLowerCase();n&&(a=Tm(u)?j1:n),Im(u)&&(t=t||H1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if(fw(u)&&a!=="_self")return V1(t||"",a),new ff(null);const f=window.open(t||"",a,d);N(f,e,"popup-blocked");try{f.focus()}catch{}return new ff(f)}function V1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const G1="__/auth/handler",q1="emulator/auth/handler",K1=encodeURIComponent("fac");async function hf(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Mr,eventId:i};if(t instanceof Lm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Uy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(t instanceof Ji){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${K1}=${encodeURIComponent(l)}`:"";return`${Y1(e)}?${Qi(a).slice(1)}${u}`}function Y1({config:e}){return e.emulator?uc(e,q1):`https://${e.authDomain}/${G1}`}/**
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
 */const Ba="webStorageSupport";class Q1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$m,this._completeRedirectFn=w1,this._overrideRedirectResult=v1}async _openPopup(t,n,r,i){var o;At((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await hf(t,n,r,Yl(),i);return W1(t,s,pc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await hf(t,n,r,Yl(),i);return Zw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(At(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await F1(t),r=new E1(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ba,{type:Ba},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ba];s!==void 0&&n(!!s),rt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||dc()||qs()}}const X1=Q1;var pf="@firebase/auth",mf="1.7.1";/**
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
 */class J1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Z1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eS(e){Rr(new Bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;N(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Om(e)},u=new _w(r,i,o,l);return Pw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Rr(new Bn("auth-internal",t=>{const n=Fr(t.getProvider("auth").getImmediate());return(r=>new J1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(pf,mf,Z1(e)),an(pf,mf,"esm2017")}/**
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
 */const tS=5*60,nS=am("authIdTokenMaxAge")||tS;let gf=null;const rS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nS)return;const i=n==null?void 0:n.token;gf!==i&&(gf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iS(e=fm()){const t=sc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Rw(e,{popupRedirectResolver:X1,persistence:[l1,Qw,$m]}),r=am("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=rS(o.toString());Vw(n,s,()=>s(n.currentUser)),Ww(n,a=>s(a))}}const i=om("auth");return i&&xw(n,`http://${i}`),n}function oS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}ww({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ft("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",oS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eS("Browser");const sS={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},qm=dm(sS),gc=iS(qm),aS=async(e,t)=>{try{return await Hw(gc,e,t)}catch{return{error:!0,type:"Something went wrong"}}},lS=({children:e})=>{const[t,n]=A.useState(null);return A.useEffect(()=>{Gw(gc,r=>{n(r)})},[]),E(rc.Provider,{value:t,children:e})},uS="modulepreload",cS=function(e,t){return new URL(e,t).href},vf={},dS=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=cS(o,r),o in vf)return;vf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":uS,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},yf=""+new URL("awcy-ad680841.mp3",import.meta.url).href,fS=""+new URL("tee-647bc5ea.png",import.meta.url).href;/**
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
 */const Km="firebasestorage.googleapis.com",Ym="storageBucket",hS=2*60*1e3,pS=10*60*1e3,mS=1e3;/**
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
 */class Z extends Nt{constructor(t,n,r=0){super(ja(t),`Firebase Storage: ${n} (${ja(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ja(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function ja(e){return"storage/"+e}function vc(){const e="An unknown error occurred, please check the error payload for server response.";return new Z(K.UNKNOWN,e)}function gS(e){return new Z(K.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function vS(e){return new Z(K.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(K.UNAUTHENTICATED,e)}function _S(){return new Z(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wS(e){return new Z(K.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Qm(){return new Z(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xm(){return new Z(K.CANCELED,"User canceled the upload/download.")}function SS(e){return new Z(K.INVALID_URL,"Invalid URL '"+e+"'.")}function ES(e){return new Z(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function kS(){return new Z(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ym+"' property when initializing the app?")}function Jm(){return new Z(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IS(){return new Z(K.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function TS(){return new Z(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CS(e){return new Z(K.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jl(e){return new Z(K.INVALID_ARGUMENT,e)}function Zm(){return new Z(K.APP_DELETED,"The Firebase app was deleted.")}function RS(e){return new Z(K.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gi(e,t){return new Z(K.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Jr(e){throw new Z(K.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Ee{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ee.makeFromUrl(t,n)}catch{return new Ee(t,"")}if(r.path==="")return r;throw ES(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===Km?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${T}`,"i"),h=[{regex:a,indices:l,postModify:o},{regex:g,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<h.length;v++){const k=h[v],S=k.regex.exec(t);if(S){const w=S[k.indices.bucket];let C=S[k.indices.path];C||(C=""),r=new Ee(w,C),k.postModify(r);break}}if(r==null)throw SS(t);return r}}class PS{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xS(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function d(...T){u||(u=!0,t.apply(null,T))}function f(T){i=setTimeout(()=>{i=null,e(g,l())},T)}function m(){o&&clearTimeout(o)}function g(T,...p){if(u){m();return}if(T){m(),d.call(null,T,...p);return}if(l()||s){m(),d.call(null,T,...p);return}r<64&&(r*=2);let h;a===1?(a=2,h=0):h=(r+Math.random())*1e3,f(h)}let y=!1;function _(T){y||(y=!0,m(),!u&&(i!==null?(T||(a=2),clearTimeout(i),f(0)):T||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,_(!0)},n),_}function AS(e){e(!1)}/**
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
 */function OS(e){return e!==void 0}function NS(e){return typeof e=="function"}function bS(e){return typeof e=="object"&&!Array.isArray(e)}function Xs(e){return typeof e=="string"||e instanceof String}function _f(e){return yc()&&e instanceof Blob}function yc(){return typeof Blob<"u"}function Zl(e,t,n,r){if(r<t)throw Jl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Jl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function gn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function eg(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function tg(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class LS{constructor(t,n,r,i,o,s,a,l,u,d,f,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ko(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===bn.NO_ERROR,l=o.getStatus();if(!a||tg(l,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===bn.ABORT;r(!1,new ko(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ko(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());OS(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=vc();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Zm():Xm();s(l)}else{const l=Qm();s(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=xS(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&AS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function DS(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function US(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function MS(e,t){t&&(e["X-Firebase-GMPID"]=t)}function FS(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function zS(e,t,n,r,i,o,s=!0){const a=eg(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return MS(u,t),DS(u,n),US(u,o),FS(u,r),new LS(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function $S(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BS(...e){const t=$S();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(yc())return new Blob(e);throw new Z(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jS(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function HS(e){if(typeof atob>"u")throw CS("base-64");return atob(e)}/**
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
 */const ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ha{constructor(t,n){this.data=t,this.contentType=n||null}}function WS(e,t){switch(e){case ut.RAW:return new Ha(ng(t));case ut.BASE64:case ut.BASE64URL:return new Ha(rg(e,t));case ut.DATA_URL:return new Ha(GS(t),qS(t))}throw vc()}function ng(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,s=e.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function VS(e){let t;try{t=decodeURIComponent(e)}catch{throw gi(ut.DATA_URL,"Malformed data URL.")}return ng(t)}function rg(e,t){switch(e){case ut.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw gi(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ut.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw gi(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=HS(t)}catch(i){throw i.message.includes("polyfill")?i:gi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ig{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw gi(ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function GS(e){const t=new ig(e);return t.base64?rg(ut.BASE64,t.rest):VS(t.rest)}function qS(e){return new ig(e).contentType}function KS(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class qt{constructor(t,n){let r=0,i="";_f(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(_f(this.data_)){const r=this.data_,i=jS(r,t,n);return i===null?null:new qt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new qt(r,!0)}}static getBlob(...t){if(yc()){const n=t.map(r=>r instanceof qt?r.data_:r);return new qt(BS.apply(null,n))}else{const n=t.map(s=>Xs(s)?WS(ut.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new qt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function _c(e){let t;try{t=JSON.parse(e)}catch{return null}return bS(t)?t:null}/**
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
 */function YS(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function QS(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function og(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function XS(e,t){return t}class we{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||XS}}let Io=null;function JS(e){return!Xs(e)||e.length<2?e:og(e)}function Js(){if(Io)return Io;const e=[];e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));function t(o,s){return JS(s)}const n=new we("name");n.xform=t,e.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new we("size");return i.xform=r,e.push(i),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Io=e,Io}function ZS(e,t){function n(){const r=e.bucket,i=e.fullPath,o=new Ee(r,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function eE(e,t,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,t[s.server])}return ZS(r,e),r}function sg(e,t,n){const r=_c(t);return r===null?null:eE(e,r,n)}function tE(e,t,n,r){const i=_c(t);if(i===null||!Xs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const d=e.bucket,f=e.fullPath,m="/b/"+s(d)+"/o/"+s(f),g=gn(m,n,r),y=eg({alt:"media",token:u});return g+y})[0]}function wc(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const wf="prefixes",Sf="items";function nE(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[wf])for(const i of n[wf]){const o=i.replace(/\/$/,""),s=e._makeStorageReference(new Ee(t,o));r.prefixes.push(s)}if(n[Sf])for(const i of n[Sf]){const o=e._makeStorageReference(new Ee(t,i.name));r.items.push(o)}return r}function rE(e,t,n){const r=_c(n);return r===null?null:nE(e,t,r)}class bt{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pt(e){if(!e)throw vc()}function Zs(e,t){function n(r,i){const o=sg(e,i,t);return pt(o!==null),o}return n}function iE(e,t){function n(r,i){const o=rE(e,t,i);return pt(o!==null),o}return n}function oE(e,t){function n(r,i){const o=sg(e,i,t);return pt(o!==null),tE(o,i,e.host,e._protocol)}return n}function $r(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_S():i=yS():n.getStatus()===402?i=vS(e.bucket):n.getStatus()===403?i=wS(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function ea(e){const t=$r(e);function n(r,i){let o=t(r,i);return r.getStatus()===404&&(o=gS(e.path)),o.serverResponse=i.serverResponse,o}return n}function ag(e,t,n){const r=t.fullServerUrl(),i=gn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new bt(i,o,Zs(e,n),s);return a.errorHandler=ea(t),a}function sE(e,t,n,r,i){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=t.bucketOnlyServerUrl(),a=gn(s,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,d=new bt(a,l,iE(e,t.bucket),u);return d.urlParams=o,d.errorHandler=$r(t),d}function aE(e,t,n){const r=t.fullServerUrl(),i=gn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new bt(i,o,oE(e,n),s);return a.errorHandler=ea(t),a}function lE(e,t,n,r){const i=t.fullServerUrl(),o=gn(i,e.host,e._protocol),s="PATCH",a=wc(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,d=new bt(o,s,Zs(e,r),u);return d.headers=l,d.body=a,d.errorHandler=ea(t),d}function uE(e,t){const n=t.fullServerUrl(),r=gn(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(l,u){}const a=new bt(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=ea(t),a}function cE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function lg(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=cE(null,t)),r}function dE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let h="";for(let v=0;v<2;v++)h=h+Math.random().toString().slice(2);return h}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=lg(t,r,i),d=wc(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",g=qt.getBlob(f,r,m);if(g===null)throw Jm();const y={name:u.fullPath},_=gn(o,e.host,e._protocol),T="POST",p=e.maxUploadRetryTime,c=new bt(_,T,Zs(e,n),p);return c.urlParams=y,c.headers=s,c.body=g.uploadData(),c.errorHandler=$r(t),c}class Cs{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Sc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{pt(!1)}return pt(!!n&&(t||["active"]).indexOf(n)!==-1),n}function fE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=lg(t,r,i),a={name:s.fullPath},l=gn(o,e.host,e._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},f=wc(s,n),m=e.maxUploadRetryTime;function g(_){Sc(_);let T;try{T=_.getResponseHeader("X-Goog-Upload-URL")}catch{pt(!1)}return pt(Xs(T)),T}const y=new bt(l,u,g,m);return y.urlParams=a,y.headers=d,y.body=f,y.errorHandler=$r(t),y}function hE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const d=Sc(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{pt(!1)}f||pt(!1);const m=Number(f);return pt(!isNaN(m)),new Cs(m,r.size(),d==="final")}const s="POST",a=e.maxUploadRetryTime,l=new bt(n,s,o,a);return l.headers=i,l.errorHandler=$r(t),l}const Ef=256*1024;function pE(e,t,n,r,i,o,s,a){const l=new Cs(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw IS();const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const f=l.current,m=f+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const y={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(f,m);if(_===null)throw Jm();function T(v,k){const S=Sc(v,["active","final"]),w=l.current+d,C=r.size();let M;return S==="final"?M=Zs(t,o)(v,k):M=null,new Cs(w,C,S==="final",M)}const p="POST",c=t.maxUploadRetryTime,h=new bt(n,p,T,c);return h.headers=y,h.body=_.uploadData(),h.progressCallback=a||null,h.errorHandler=$r(e),h}const Ce={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Wa(e){switch(e){case"running":case"pausing":case"canceling":return Ce.RUNNING;case"paused":return Ce.PAUSED;case"success":return Ce.SUCCESS;case"canceled":return Ce.CANCELED;case"error":return Ce.ERROR;default:return Ce.ERROR}}/**
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
 */class mE{constructor(t,n,r){if(NS(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function Yn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class gE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Jr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class vE extends gE{initXhr(){this.xhr_.responseType="text"}}function lt(){return new vE}/**
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
 */class yE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=Js(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(K.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(tg(i.status,[]))if(o)i=Qm();else{this.sleepTime=Math.max(this.sleepTime*2,mS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(K.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=fE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=hE(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,lt,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Ef*this._chunkMultiplier,n=new Cs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=pE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,lt,i,o,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ef*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=ag(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=dE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Xm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Wa(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const o=new mE(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Wa(this._state)){case Ce.SUCCESS:Yn(this._resolve.bind(null,this.snapshot))();break;case Ce.CANCELED:case Ce.ERROR:const n=this._reject;Yn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Wa(this._state)){case Ce.RUNNING:case Ce.PAUSED:t.next&&Yn(t.next.bind(t,this.snapshot))();break;case Ce.SUCCESS:t.complete&&Yn(t.complete.bind(t))();break;case Ce.CANCELED:case Ce.ERROR:t.error&&Yn(t.error.bind(t,this._error))();break;default:t.error&&Yn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Wn{constructor(t,n){this._service=t,n instanceof Ee?this._location=n:this._location=Ee.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Wn(t,n)}get root(){const t=new Ee(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return og(this._location.path)}get storage(){return this._service}get parent(){const t=YS(this._location.path);if(t===null)return null;const n=new Ee(this._location.bucket,t);return new Wn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw RS(t)}}function _E(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new yE(e,new qt(t),n)}function wE(e){const t={prefixes:[],items:[]};return ug(e,t).then(()=>t)}async function ug(e,t,n){const i=await SE(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await ug(e,t,i.nextPageToken)}function SE(e,t){t!=null&&typeof t.maxResults=="number"&&Zl("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=sE(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,lt)}function EE(e){e._throwIfRoot("getMetadata");const t=ag(e.storage,e._location,Js());return e.storage.makeRequestWithTokens(t,lt)}function kE(e,t){e._throwIfRoot("updateMetadata");const n=lE(e.storage,e._location,t,Js());return e.storage.makeRequestWithTokens(n,lt)}function IE(e){e._throwIfRoot("getDownloadURL");const t=aE(e.storage,e._location,Js());return e.storage.makeRequestWithTokens(t,lt).then(n=>{if(n===null)throw TS();return n})}function TE(e){e._throwIfRoot("deleteObject");const t=uE(e.storage,e._location);return e.storage.makeRequestWithTokens(t,lt)}function CE(e,t){const n=QS(e._location.path,t),r=new Ee(e._location.bucket,n);return new Wn(e.storage,r)}/**
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
 */function RE(e){return/^[A-Za-z]+:\/\//.test(e)}function PE(e,t){return new Wn(e,t)}function cg(e,t){if(e instanceof Ec){const n=e;if(n._bucket==null)throw kS();const r=new Wn(n,n._bucket);return t!=null?cg(r,t):r}else return t!==void 0?CE(e,t):e}function xE(e,t){if(t&&RE(t)){if(e instanceof Ec)return PE(e,t);throw Jl("To use ref(service, url), the first argument must be a Storage instance.")}else return cg(e,t)}function kf(e,t){const n=t==null?void 0:t[Ym];return n==null?null:Ee.makeFromBucketSpec(n,e)}function AE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Cy(i,e.app.options.projectId))}class Ec{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Km,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hS,this._maxUploadRetryTime=pS,this._requests=new Set,i!=null?this._bucket=Ee.makeFromBucketSpec(i,this._host):this._bucket=kf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ee.makeFromBucketSpec(this._url,t):this._bucket=kf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Zl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Zl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Wn(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new PS(Zm());{const s=zS(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const If="@firebase/storage",Tf="0.12.4";/**
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
 */const dg="storage";function OE(e,t,n){return e=_e(e),_E(e,t,n)}function NE(e){return e=_e(e),EE(e)}function bE(e,t){return e=_e(e),kE(e,t)}function LE(e){return e=_e(e),wE(e)}function fg(e){return e=_e(e),IE(e)}function DE(e){return e=_e(e),TE(e)}function $i(e,t){return e=_e(e),xE(e,t)}function UE(e=fm(),t){e=_e(e);const r=sc(e,dg).getImmediate({identifier:t}),i=Iy("storage");return i&&ME(r,...i),r}function ME(e,t,n,r={}){AE(e,t,n,r)}function FE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Ec(n,r,i,t,Mr)}function zE(){Rr(new Bn(dg,FE,"PUBLIC").setMultipleInstances(!0)),an(If,Tf,""),an(If,Tf,"esm2017")}zE();const Bi=UE(qm),$E=async(e,t)=>{const n=$i(Bi,t.name);return await OE(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t}).then(async o=>{const s=await fg(o.ref),a=o.metadata;return{downloadUrl:s,metadata:a}})},BE=async()=>{const t=(await LE($i(Bi))).items.map(async r=>{const i=$i(Bi,r.fullPath),o=await fg(i),s=await NE(i);return{downloadUrl:o,metadata:s}});return await Promise.all(t)},vT=async e=>{const t=$i(Bi,e);await DE(t)},yT=async(e,t)=>{const n=$i(Bi,e);await bE(n,{customMetadata:{caption:t}})};var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function ji(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",vi="-moz-",z="-webkit-",hg="comm",ta="rule",kc="decl",jE="@import",pg="@keyframes",HE="@layer",mg=Math.abs,Ic=String.fromCharCode,eu=Object.assign;function WE(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function gg(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Ho(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function xr(e,t,n){return e.slice(t,n)}function st(e){return e.length}function vg(e){return e.length}function oi(e,t){return t.push(e),e}function VE(e,t){return e.map(t).join("")}function Cf(e,t){return e.filter(function(n){return!vt(n,t)})}var na=1,Ar=1,yg=0,qe=0,ne=0,Br="";function ra(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:na,column:Ar,length:s,return:"",siblings:a}}function Ft(e,t){return eu(ra("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=Ft(e.root,{children:[e]});oi(e,e.siblings)}function GE(){return ne}function qE(){return ne=qe>0?le(Br,--qe):0,Ar--,ne===10&&(Ar=1,na--),ne}function tt(){return ne=qe<yg?le(Br,qe++):0,Ar++,ne===10&&(Ar=1,na++),ne}function Ln(){return le(Br,qe)}function Wo(){return qe}function ia(e,t){return xr(Br,e,t)}function tu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function KE(e){return na=Ar=1,yg=st(Br=e),qe=0,[]}function YE(e){return Br="",e}function Va(e){return gg(ia(qe-1,nu(e===91?e+2:e===40?e+1:e)))}function QE(e){for(;(ne=Ln())&&ne<33;)tt();return tu(e)>2||tu(ne)>3?"":" "}function XE(e,t){for(;--t&&tt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return ia(e,Wo()+(t<6&&Ln()==32&&tt()==32))}function nu(e){for(;tt();)switch(ne){case e:return qe;case 34:case 39:e!==34&&e!==39&&nu(ne);break;case 40:e===41&&nu(e);break;case 92:tt();break}return qe}function JE(e,t){for(;tt()&&e+ne!==47+10;)if(e+ne===42+42&&Ln()===47)break;return"/*"+ia(t,qe-1)+"*"+Ic(e===47?e:tt())}function ZE(e){for(;!tu(Ln());)tt();return ia(e,qe)}function ek(e){return YE(Vo("",null,null,null,[""],e=KE(e),0,[0],e))}function Vo(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,f=s,m=0,g=0,y=0,_=1,T=1,p=1,c=0,h="",v=i,k=o,S=r,w=h;T;)switch(y=c,c=tt()){case 40:if(y!=108&&le(w,f-1)==58){Ho(w+=L(Va(c),"&","&\f"),"&\f",mg(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:w+=Va(c);break;case 9:case 10:case 13:case 32:w+=QE(y);break;case 92:w+=XE(Wo()-1,7);continue;case 47:switch(Ln()){case 42:case 47:oi(tk(JE(tt(),Wo()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=st(w)*p;case 125*_:case 59:case 0:switch(c){case 0:case 125:T=0;case 59+d:p==-1&&(w=L(w,/\f/g,"")),g>0&&st(w)-f&&oi(g>32?Pf(w+";",r,n,f-1,l):Pf(L(w," ","")+";",r,n,f-2,l),l);break;case 59:w+=";";default:if(oi(S=Rf(w,t,n,u,d,i,a,h,v=[],k=[],f,o),o),c===123)if(d===0)Vo(w,t,S,S,v,o,f,a,k);else switch(m===99&&le(w,3)===110?100:m){case 100:case 108:case 109:case 115:Vo(e,S,S,r&&oi(Rf(e,S,S,0,0,i,a,h,i,v=[],f,k),k),i,k,f,a,r?v:k);break;default:Vo(w,S,S,S,[""],k,0,a,k)}}u=d=g=0,_=p=1,h=w="",f=s;break;case 58:f=1+st(w),g=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&qE()==125)continue}switch(w+=Ic(c),c*_){case 38:p=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(st(w)-1)*p,p=1;break;case 64:Ln()===45&&(w+=Va(tt())),m=Ln(),d=f=st(h=w+=ZE(Wo())),c++;break;case 45:y===45&&st(w)==2&&(_=0)}}return o}function Rf(e,t,n,r,i,o,s,a,l,u,d,f){for(var m=i-1,g=i===0?o:[""],y=vg(g),_=0,T=0,p=0;_<r;++_)for(var c=0,h=xr(e,m+1,m=mg(T=s[_])),v=e;c<y;++c)(v=gg(T>0?g[c]+" "+h:L(h,/&\f/g,g[c])))&&(l[p++]=v);return ra(e,t,n,i===0?ta:a,l,u,d,f)}function tk(e,t,n,r){return ra(e,t,n,hg,Ic(GE()),xr(e,2,-2),0,r)}function Pf(e,t,n,r,i){return ra(e,t,n,kc,xr(e,0,r),xr(e,r+1,-1),r,i)}function _g(e,t,n){switch(WE(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 4789:return vi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+vi+e+G+e+e;case 5936:switch(le(e,t+11)){case 114:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return z+e+G+e+e;case 6165:return z+e+G+"flex-"+e+e;case 5187:return z+e+L(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return z+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return z+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return z+e+G+L(e,"shrink","negative")+e;case 5292:return z+e+G+L(e,"basis","preferred-size")+e;case 6060:return z+"box-"+L(e,"-grow","")+z+e+G+L(e,"grow","positive")+e;case 4554:return z+L(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4200:if(!vt(e,/flex-|baseline/))return G+"grid-column-align"+xr(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,vt(r.props,/grid-\w+-end/)})?~Ho(e+(n=n[t].value),"span",0)?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~Ho(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+vi+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ho(e,"stretch",0)?_g(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(le(e,t+6)===121)return L(e,":",":"+z)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+(le(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Rs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nk(e,t,n,r){switch(e.type){case HE:if(e.children.length)break;case jE:case kc:return e.return=e.return||e.value;case hg:return"";case pg:return e.return=e.value+"{"+Rs(e.children,r)+"}";case ta:if(!st(e.value=e.props.join(",")))return""}return st(n=Rs(e.children,r))?e.return=e.value+"{"+n+"}":""}function rk(e){var t=vg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function ik(e){return function(t){t.root||(t=t.return)&&e(t)}}function ok(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kc:e.return=_g(e.value,e.length,n);return;case pg:return Rs([Ft(e,{value:L(e.value,"@","@"+z)})],r);case ta:if(e.length)return VE(n=e.props,function(i){switch(vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(Ft(e,{props:[L(i,/:(read-\w+)/,":"+vi+"$1")]})),Qn(Ft(e,{props:[i]})),eu(e,{props:Cf(n,r)});break;case"::placeholder":Qn(Ft(e,{props:[L(i,/:(plac\w+)/,":"+z+"input-$1")]})),Qn(Ft(e,{props:[L(i,/:(plac\w+)/,":"+vi+"$1")]})),Qn(Ft(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),Qn(Ft(e,{props:[i]})),eu(e,{props:Cf(n,r)});break}return""})}}var sk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Or=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",wg="active",Sg="data-styled-version",oa="6.1.8",Tc=`/*!sc*/
`,Cc=typeof window<"u"&&"HTMLElement"in window,ak=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),sa=Object.freeze([]),Nr=Object.freeze({});function lk(e,t,n){return n===void 0&&(n=Nr),e.theme!==n.theme&&e.theme||t||n.theme}var Eg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ck=/(^-|-$)/g;function xf(e){return e.replace(uk,"-").replace(ck,"")}var dk=/(a)(d)/gi,To=52,Af=function(e){return String.fromCharCode(e+(e>25?39:97))};function ru(e){var t,n="";for(t=Math.abs(e);t>To;t=t/To|0)n=Af(t%To)+n;return(Af(t%To)+n).replace(dk,"$1-$2")}var Ga,kg=5381,cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ig=function(e){return cr(kg,e)};function Tg(e){return ru(Ig(e)>>>0)}function fk(e){return e.displayName||e.name||"Component"}function qa(e){return typeof e=="string"&&!0}var Cg=typeof Symbol=="function"&&Symbol.for,Rg=Cg?Symbol.for("react.memo"):60115,hk=Cg?Symbol.for("react.forward_ref"):60112,pk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gk=((Ga={})[hk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ga[Rg]=Pg,Ga);function Of(e){return("type"in(t=e)&&t.type.$$typeof)===Rg?Pg:"$$typeof"in e?gk[e.$$typeof]:pk;var t}var vk=Object.defineProperty,yk=Object.getOwnPropertyNames,Nf=Object.getOwnPropertySymbols,_k=Object.getOwnPropertyDescriptor,wk=Object.getPrototypeOf,bf=Object.prototype;function xg(e,t,n){if(typeof t!="string"){if(bf){var r=wk(t);r&&r!==bf&&xg(e,r,n)}var i=yk(t);Nf&&(i=i.concat(Nf(t)));for(var o=Of(e),s=Of(t),a=0;a<i.length;++a){var l=i[a];if(!(l in mk||n&&n[l]||s&&l in s||o&&l in o)){var u=_k(t,l);try{vk(e,l,u)}catch{}}}}return e}function br(e){return typeof e=="function"}function Rc(e){return typeof e=="object"&&"styledComponentId"in e}function An(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function iu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ou(e,t,n){if(n===void 0&&(n=!1),!n&&!Hi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ou(e[r],t[r]);else if(Hi(t))for(var r in t)e[r]=ou(e[r],t[r]);return e}function Pc(e,t){Object.defineProperty(e,"toString",{value:t})}function eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw eo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Tc);return n},e}(),Go=new Map,Ps=new Map,qo=1,Co=function(e){if(Go.has(e))return Go.get(e);for(;Ps.has(qo);)qo++;var t=qo++;return Go.set(e,t),Ps.set(t,e),t},Ek=function(e,t){qo=t+1,Go.set(e,t),Ps.set(t,e)},kk="style[".concat(Or,"][").concat(Sg,'="').concat(oa,'"]'),Ik=new RegExp("^".concat(Or,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tk=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Ck=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Tc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Ik);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Ek(d,u),Tk(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Rk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ag=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Or,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Or,wg),r.setAttribute(Sg,oa);var s=Rk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Pk=function(){function e(t){this.element=Ag(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw eo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),xk=function(){function e(t){this.element=Ag(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ak=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Lf=Cc,Ok={isServer:!Cc,useCSSOMInjection:!ak},Og=function(){function e(t,n,r){t===void 0&&(t=Nr),n===void 0&&(n={});var i=this;this.options=xe(xe({},Ok),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Cc&&Lf&&(Lf=!1,function(o){for(var s=document.querySelectorAll(kk),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Or)!==wg&&(Ck(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Pc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var m=function(p){return Ps.get(p)}(f);if(m===void 0)return"continue";var g=o.names.get(m),y=s.getGroup(f);if(g===void 0||y.length===0)return"continue";var _="".concat(Or,".g").concat(f,'[id="').concat(m,'"]'),T="";g!==void 0&&g.forEach(function(p){p.length>0&&(T+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(T,'"}').concat(Tc)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return Co(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ak(i):r?new Pk(i):new xk(i)}(this.options),new Sk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Co(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Co(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Co(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Nk=/&/g,bk=/^\s*\/\/.*$/gm;function Ng(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ng(n.children,t)),n})}function Lk(e){var t,n,r,i=e===void 0?Nr:e,o=i.options,s=o===void 0?Nr:o,a=i.plugins,l=a===void 0?sa:a,u=function(m,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=l.slice();d.push(function(m){m.type===ta&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Nk,n).replace(r,u))}),s.prefix&&d.push(ok),d.push(nk);var f=function(m,g,y,_){g===void 0&&(g=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var T=m.replace(bk,""),p=ek(y||g?"".concat(y," ").concat(g," { ").concat(T," }"):T);s.namespace&&(p=Ng(p,s.namespace));var c=[];return Rs(p,rk(d.concat(ik(function(h){return c.push(h)})))),c};return f.hash=l.length?l.reduce(function(m,g){return g.name||eo(15),cr(m,g.name)},kg).toString():"",f}var Dk=new Og,su=Lk(),bg=_i.createContext({shouldForwardProp:void 0,styleSheet:Dk,stylis:su});bg.Consumer;_i.createContext(void 0);function Df(){return A.useContext(bg)}var Lg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=su);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pc(this,function(){throw eo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=su),this.name+t.hash},e}(),Uk=function(e){return e>="A"&&e<="Z"};function Uf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Uk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dg=function(e){return e==null||e===!1||e===""},Ug=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Dg(o)&&(Array.isArray(o)&&o.isCss||br(o)?r.push("".concat(Uf(i),":"),o,";"):Hi(o)?r.push.apply(r,ji(ji(["".concat(i," {")],Ug(o),!1),["}"],!1)):r.push("".concat(Uf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in sk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(Dg(e))return[];if(Rc(e))return[".".concat(e.styledComponentId)];if(br(e)){if(!br(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var o;return e instanceof Lg?n?(e.inject(n,r),[e.getName(r)]):[e]:Hi(e)?Ug(e):Array.isArray(e)?Array.prototype.concat.apply(sa,e.map(function(s){return Dn(s,t,n,r)})):[e.toString()]}function Mk(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(br(n)&&!Rc(n))return!1}return!0}var Fk=Ig(oa),zk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mk(t),this.componentId=n,this.baseHash=cr(Fk,n),this.baseStyle=r,Og.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var o=iu(Dn(this.rules,t,n,r)),s=ru(cr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=An(i,s),this.staticRulesId=s}else{for(var l=cr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var m=iu(Dn(f,t,n,r));l=cr(l,m+d),u+=m}}if(u){var g=ru(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=An(i,g)}}return i},e}(),Mg=_i.createContext(void 0);Mg.Consumer;var Ka={};function $k(e,t,n){var r=Rc(e),i=e,o=!qa(e),s=t.attrs,a=s===void 0?sa:s,l=t.componentId,u=l===void 0?function(v,k){var S=typeof v!="string"?"sc":xf(v);Ka[S]=(Ka[S]||0)+1;var w="".concat(S,"-").concat(Tg(oa+S+Ka[S]));return k?"".concat(k,"-").concat(w):w}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(v){return qa(v)?"styled.".concat(v):"Styled(".concat(fk(v),")")}(e):d,m=t.displayName&&t.componentId?"".concat(xf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;y=function(v,k){return _(v,k)&&T(v,k)}}else y=_}var p=new zk(n,m,r?i.componentStyle:void 0);function c(v,k){return function(S,w,C){var M=S.attrs,D=S.componentStyle,be=S.defaultProps,_n=S.foldedComponentIds,wn=S.styledComponentId,no=S.target,aa=_i.useContext(Mg),jr=Df(),Sn=S.shouldForwardProp||jr.shouldForwardProp,R=lk(w,aa,be)||Nr,x=function(Lt,Le,mt){for(var Hr,kn=xe(xe({},Le),{className:void 0,theme:mt}),la=0;la<Lt.length;la+=1){var ro=br(Hr=Lt[la])?Hr(kn):Hr;for(var Dt in ro)kn[Dt]=Dt==="className"?An(kn[Dt],ro[Dt]):Dt==="style"?xe(xe({},kn[Dt]),ro[Dt]):ro[Dt]}return Le.className&&(kn.className=An(kn.className,Le.className)),kn}(M,w,R),b=x.as||no,B={};for(var j in x)x[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&x.theme===R||(j==="forwardedAs"?B.as=x.forwardedAs:Sn&&!Sn(j,b)||(B[j]=x[j]));var En=function(Lt,Le){var mt=Df(),Hr=Lt.generateAndInjectStyles(Le,mt.styleSheet,mt.stylis);return Hr}(D,x),Ke=An(_n,wn);return En&&(Ke+=" "+En),x.className&&(Ke+=" "+x.className),B[qa(b)&&!Eg.has(b)?"class":"className"]=Ke,B.ref=C,A.createElement(b,B)}(h,v,k)}c.displayName=f;var h=_i.forwardRef(c);return h.attrs=g,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var C=0,M=S;C<M.length;C++)ou(k,M[C],!0);return k}({},i.defaultProps,v):v}}),Pc(h,function(){return".".concat(h.styledComponentId)}),o&&xg(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Mf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ff=function(e){return Object.assign(e,{isCss:!0})};function Fg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(br(e)||Hi(e))return Ff(Dn(Mf(sa,ji([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Dn(r):Ff(Dn(Mf(r,t)))}function au(e,t,n){if(n===void 0&&(n=Nr),!t)throw eo(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Fg.apply(void 0,ji([i],o,!1)))};return r.attrs=function(i){return au(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return au(e,t,xe(xe({},n),i))},r}var zg=function(e){return au($k,e)},O=zg;Eg.forEach(function(e){O[e]=zg(e)});function vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=iu(Fg.apply(void 0,ji([e],t,!1))),i=Tg(r);return new Lg(i,r)}const Bk=vn`
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
}`,jk=O.article`
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
  animation: ${Bk} 0.75s ease-in;
  position: relative;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`,_T=O.button`
  position: absolute;
  bottom: 0;
  right: 0;
`,wT=O.button`
  position: absolute;
  bottom: 0;
  left: 0;
`,ST=O.input`
  position: absolute;
  bottom: 0;
  left: 50%;
`,Hk=O.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,ET=O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,kT=O.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,Wk=O.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,IT=O.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`,TT=O.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: hsla(0, 0%, 7%, 0.92);
`,CT=O.div`
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
`,Vk=()=>E(jk,{children:E(Hk,{children:E(Wk,{})})}),Gk=O.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,qk=O.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`,Kk=O.main`
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
`,Yk=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qk=O.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,Xk=""+new URL("plus-70c42e58.svg",import.meta.url).href,Jk=({onUpload:e})=>{const[t,n]=A.useState(!1),[r,i]=A.useState(""),[o,s]=A.useState(""),[a,l]=A.useState(null);return oe(un,{children:[E(Qk,{onClick:()=>n(!t),src:Xk,alt:"Add more content"}),t&&E(un,{children:oe(Gk,{onSubmit:async f=>{if(f.preventDefault(),a){const m=await $E(a,{name:o,caption:r});e(m),l(null),i(""),s(""),n(!1)}},children:[E("div",{children:E("label",{htmlFor:"caption",children:"Caption"})}),oe("div",{children:[E("input",{id:"caption",value:r,onChange:f=>i(f.target.value)}),E("div",{children:E("label",{htmlFor:"name",children:"Name"})}),E("div",{children:E("input",{id:"name",value:o,onChange:f=>s(f.target.value),required:!0})})]}),E("div",{children:E("label",{htmlFor:"file",children:"Choose a file"})}),E("div",{children:E("input",{id:"file",type:"file",required:!0,onChange:f=>{f.target.files&&l(f.target.files[0])}})}),a&&E("button",{type:"submit",children:"Upload a file"})]})})]})},Zk=()=>{const[e,t]=A.useState("eantwibawua1@gmail.com"),[n,r]=A.useState("");return oe("div",{children:[E("h1",{children:"Hey Eman 🙂"}),E("p",{children:"Please sign-in:"}),oe("form",{onSubmit:async o=>{o.preventDefault(),await aS(e,n)},children:[oe("div",{children:[E("label",{htmlFor:"email-address",children:"Email address"}),E("input",{type:"email",id:"email-address",value:e,onChange:o=>t(o.target.value),required:!0,placeholder:"Email address"})]}),oe("div",{children:[E("label",{htmlFor:"password",children:"Password"}),E("input",{type:"password",id:"password",value:n,onChange:o=>r(o.target.value),required:!0,placeholder:"Password"})]}),E("button",{type:"submit",children:"Sign in"})]})]})},zf=990,eI=1320,$f=()=>window.innerWidth<=zf?2:window.innerWidth<=eI&&window.innerWidth>zf?3:4,Bf=(e,t)=>{const n=e.find(l=>l.metadata.name==="flyer"),r=e.filter(l=>l.metadata.name!=="flyer"),i=Math.floor(e.length/t),o=e.length%t;let s=0;const a=[];for(let l=0;l<t;l++){const u=s+i+(l<o?1:0);a.push(r.slice(s,u)),s=u}if(n){const l=a[0].pop(),u=a.pop();return l&&u?(u.push(l),[[n,...a[0]],...a.slice(1),u]):[[n,...a[0]],...a.slice(1)]}return a},to=vn`
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
}`,tI=O.p`
  color: rgba(12, 0, 0, 0.7);
  flex: 1;
  display: block;
  animation: ${to} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,nI=O.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
  animation: ${to} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,rI=O.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,iI=vn`
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
}`,oI=O.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${iI} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,sI=O.button`
  font-weight: 700;
  border-radius: 15px;
  width: 150px;
  height: 45px;
  background-color: #61c433;
  border: none;
  outline: none;
  color: black;
  animation: ${to} 0.5s ease-in-out;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`,aI=O.audio`
  width: 300px;
  max-width: 300px;
  animation: ${to} 0.5s ease-in-out;

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
`,lI=O.p`
  margin-top: 5px;
  animation: ${to} 0.5s ease-in-out;
`,uI=O.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`,cI=O.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`,dI=O.img`
  width: 100%;
  opacity: ${({$show:e})=>e?1:0};
`,jf=""+new URL("A-967cb442.png",import.meta.url).href,Hf=""+new URL("C-3c3e16d1.png",import.meta.url).href,Wf=""+new URL("W-17eb2e7f.png",import.meta.url).href,Vf=""+new URL("Y-967b8d34.png",import.meta.url).href,fI=({onEnded:e})=>{const[i,o]=A.useState([jf,Wf,Hf,Vf]),[s,a]=A.useState(!1),[l,u]=A.useState(0);return A.useEffect(()=>{const d=setTimeout(()=>{e()},4500);return()=>clearTimeout(d)},[]),A.useEffect(()=>{const d=setInterval(()=>{u(f=>(f+1)%4)},500);return setTimeout(()=>{o([jf,Wf,Hf,Vf]),a(!0),clearInterval(d)},4e3),()=>clearInterval(d)},[]),E(uI,{children:E(cI,{children:[0,1,2,3].map(d=>{const f=s?d:(l+d)%4;return E(dI,{$show:!0,src:i[f],alt:`loading computer ${d}`},d)})})})},hI=A.lazy(()=>dS(()=>import("./index-befeca52.js"),[],import.meta.url)),pI=()=>{const[e,t]=A.useState(0),n=A.useContext(rc),[r,i]=A.useState($f()),[o,s]=A.useState(null);A.useEffect(()=>{(async()=>{const f=await BE(),m=Bf(f,r);s(m)})()},[]),A.useEffect(()=>{const d=()=>{const f=$f();i(f)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),A.useEffect(()=>{if(!o)return;const d=Bf(o.flat(),r);s(d)},[r]);const a=()=>{t(0),gc.signOut()},[l,u]=A.useState(!1);return e>=10&&!n?E(Zk,{}):!o||!l?E(fI,{onEnded:()=>u(!0)}):oe(un,{children:[oe(rI,{children:[E(oI,{children:E("img",{src:fS,alt:"are we cool yet t-shirt"})}),E(nI,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),E(tI,{children:"YOU'RE ALL WELCOME"}),E("a",{href:"https://forms.gle/8dzX8f76mTJm69iw7",target:"_blank",rel:"noreferrer",children:E(sI,{children:"PLEASE RSVP! CLICK HERE"})}),E(aI,{controlsList:"nodownload noplaybackrate",controls:!0,src:yf,children:E("track",{default:!0,kind:"captions",src:yf})}),E(lI,{children:"stu$h Auntie - Pattern [Up]"}),n&&oe(un,{children:[E(Jk,{onUpload:d=>{if(!o){s([[d]]);return}const f=o[o.length-1];s([...o.slice(0,-1),[...f,d]])}}),E("button",{onClick:a,children:"Log out"})]})]}),E(qk,{children:E(Kk,{children:o&&o.map(d=>E(Yk,{children:d.map(f=>E(A.Suspense,{fallback:E(Vk,{}),children:E(hI,{content:f,onDelete:m=>{const g=o.map(y=>y.filter(_=>_!==m));s(g)}})},f.downloadUrl))},d[0].downloadUrl))})})]})};var de=(e=>(e.LOGIN="login",e.OUTSIDE_CLUB="outside-club",e.INSIDE_CLUB="inside-club",e.HOME="home",e))(de||{});const $g={name:"",stats:null,outfit:null,stage:de.LOGIN,mission:null,update:()=>{}},yn=A.createContext($g),mI=({children:e})=>{const[t,n]=A.useState($g),r=A.useCallback(o=>{n({...t,...o})},[t]),i={...t,update:r};return E(yn.Provider,{value:i,children:e})},gI=""+new URL("bouncer-d5506b4d.png",import.meta.url).href,vI=""+new URL("outside-club-85fbd6df.jpg",import.meta.url).href,xs=""+new URL("arrow-134fdc26.png",import.meta.url).href,yI=vn`
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
}`,lu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==",_I=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
  margin: 30px auto;
`,wI=O.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`,SI=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,EI=O.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`,xc=O.img`
  width: 100%;
  object-fit: cover;
`,kI=O.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${lu});
  color: #96e3ff;
  border: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`,II=O.form`
  width: 70%;
  padding: 30px;

  background: white;
  background-image: url(${lu});
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;

  & > label {
    margin-bottom: 5px;
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
  }

  & > button {
    border: 2px solid #93bae3;
    padding: 4px;
    background: #005f9f;
    background-image: url(${lu});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
  }
`,TI=O.img`
  width: 9%;
  height: 28%;
  position: absolute;
  left: 44.5%;
  top: 58%;
  cursor: pointer;
`,Bg=vn`
0% {
    top: 50%;
}

50% {
  top: 51%
}

100% {
    top: 50%;
}`,CI=O.img`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  transform: scaleX(-1);
  animation: ${Bg} 1.5s infinite;
`,Ac=O.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  width: 10%;
  animation: ${Bg} 1.5s infinite;
`,RI=O.img`
  position: absolute;
  bottom: 0;
  right: 3%;
`,PI=O.img`
  margin-left: auto;
  margin-right: auto;
  top: 2%;
  left: 0;
  right: 0;
  max-width: 30%;
  animation: ${yI} 0.5s ease-in-out;
  position: absolute;
`,xI=vn`
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
}`,AI=O.div`
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
  animation: ${xI} 0.5s ease-in-out;
`,OI=O.p`
  font-size: 20px;
  margin: 12px;
  @media screen and (max-device-width: 568px) {
    font-size: 12px;
    margin: 4px;
  }
`,NI=O.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`,bI=O.img`
  position: relative;
  height: 100%;
`,LI=O.img`
  position: absolute;
  width: 17.4%;
  top: 60.7%;
  left: 29.2%;
  cursor: pointer;
`,DI=O.img`
  position: absolute;
  width: 17.4%;
  top: 60.7%;
  right: 29.7%;
  cursor: pointer;
`,UI=O.img`
  position: absolute;
  width: 17.4%;
  bottom: 8.7%;
  left: 29.1%;
  cursor: pointer;
`,MI=""+new URL("character-cc76f9ba.png",import.meta.url).href,FI={width:"25%",height:"38%"},zI={width:"15%",height:"24%"},$I={width:"20%",height:"30%",left:"5%"},BI=e=>e===de.INSIDE_CLUB?$I:e===de.OUTSIDE_CLUB?zI:FI,Oc=()=>{const{stage:e,outfit:t}=A.useContext(yn),n=t||MI,r=BI(e);return E(RI,{style:r,$stage:e,src:n,alt:"character"})},jI=""+new URL("bouncer-pop-up-a7961989.png",import.meta.url).href,HI=""+new URL("obey-0c910640.png",import.meta.url).href,WI=""+new URL("i-know-the-dj-9c753bb5.png",import.meta.url).href,VI=""+new URL("show-ig-f7adf784.png",import.meta.url).href,GI=""+new URL("following-20746ba2.png",import.meta.url).href,qI=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,Gf=vn`
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
}`,KI=O.img`
  width: 30%;
  cursor: pointer;

  &:nth-of-type(1) {
    animation: ${Gf} 1s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: ${Gf} 1.5s ease-in-out;
  }
`,YI=vn`
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
}`,QI=O.img`
  max-width: 20%;
  position: absolute;
  bottom: -15%;
  left: 6%;
  animation: ${YI} 0.5s ease-in-out;
  cursor: pointer;
  z-index: 190;
`,jg=O.img`
  width: 100%;
  position: absolute;
  top: -15%;
  left: 0;
  cursor: pointer;
  z-index: 200;
`,XI=O.img`
  width: 19%;
  cursor: pointer;
  position: absolute;
  left: 8.2%;
  top: 32%;

  &:hover {
    outline: 3px solid lightblue;
  }
`,JI=()=>{const{update:e}=A.useContext(yn),[t,n]=A.useState(!1),[r,i]=A.useState(!1),o=()=>{n(!0)};return A.useEffect(()=>{e({mission:"Talk to the bouncer"})},[]),oe(un,{children:[t&&oe(NI,{children:[E(bI,{src:jI,alt:"pop up screen for bouncer"}),E(LI,{onClick:()=>{n(!1),e({stage:de.INSIDE_CLUB,mission:null,stats:{health:3,clout:0}})},src:HI,alt:"obey"}),E(DI,{onClick:()=>{n(!1),e({stage:de.INSIDE_CLUB,mission:null,stats:{health:1,clout:0}})},src:WI,alt:"I know the dj"}),E(UI,{onClick:()=>{i(!0),n(!1)},src:VI,alt:"show instagram"})]}),r&&E(jg,{src:GI,onClick:()=>{i(!1),e({stage:de.INSIDE_CLUB,mission:null,stats:{health:0,clout:1}})},alt:"instagram followers"}),E(Ac,{src:xs,alt:"left arrow",onClick:()=>e({stage:de.HOME,mission:null})}),E(xc,{src:vI,alt:"club"}),E(Oc,{}),E(TI,{onClick:o,src:gI,alt:"bouncer"})]})},ZI=()=>{const{name:e,update:t}=A.useContext(yn);return oe(un,{children:[oe(kI,{children:[E("p",{children:"AWCY"}),E("p",{children:"version 1.0"})]}),oe(II,{onSubmit:r=>{r.preventDefault(),e&&t({name:e,stage:de.HOME})},children:[E("label",{style:{width:"60%",alignSelf:"center",textAlign:"left"},htmlFor:"name",children:"Name:"}),E("input",{style:{width:"60%",alignSelf:"center"},required:!0,id:"name",onChange:r=>t({name:r.target.value}),value:e}),E("button",{type:"submit",children:"Play"})]})]})},eT=""+new URL("hp-clout-2cc94eb9.png",import.meta.url).href,tT=({stats:e})=>(console.log(e),E(PI,{src:eT,alt:"stat bar"})),nT=""+new URL("cupboard-3d275509.jpg",import.meta.url).href,rT=""+new URL("message-1b61b993.png",import.meta.url).href,iT=""+new URL("phone-f2fde0e2.png",import.meta.url).href,oT=""+new URL("room-005b6ed8.jpg",import.meta.url).href,qf=""+new URL("sms-tone-58b1a562.mp3",import.meta.url).href,sT=({onClick:e,right:t=!1})=>t?E(CI,{src:xs,alt:"right arrow",onClick:e}):E(Ac,{src:xs,alt:"left arrow",onClick:e}),aT=""+new URL("big-drip-front-6601948a.png",import.meta.url).href,lT=""+new URL("steady-front-762c139a.png",import.meta.url).href,uT=[{src:aT,alt:"drippy outfit",stats:{health:20,clout:100}},{src:lT,alt:"steady outfit",stats:{health:60,clout:40}}],cT=()=>{const e=A.useRef(null),{update:t,stats:n,outfit:r}=A.useContext(yn),[i,o]=A.useState(!1),s=()=>{o(!0)},a=T=>{o(!1),t({stats:T.stats,outfit:T.src})},[l,u]=A.useState(!1);A.useEffect(()=>{setTimeout(()=>{n||e&&e.current&&e.current.play&&("vibrator"in navigator&&navigator.vibrate(500),u(!0),e.current.play())},1e3)},[]);const[d,f]=A.useState(!1),[m,g]=A.useState(!1);return oe(un,{children:[E("audio",{ref:e,controls:!1,src:qf,children:E("track",{default:!0,kind:"captions",src:qf})}),r&&E(sT,{right:!0,onClick:()=>t({stage:de.OUTSIDE_CLUB,mission:null})}),l&&E(QI,{onClick:()=>{f(!0)},src:iT,alt:"message received"}),d&&E(jg,{src:rT,onClick:()=>{u(!1),f(!1),t({mission:"Get changed and head to the club",stats:{health:2,clout:0}}),g(!0)},alt:"Yo what are you up to! Come whisky it's live"}),E(xc,{src:oT,alt:"home"}),E(Oc,{}),(m||n)&&E(XI,{onClick:s,src:nT,alt:"cupboard"}),i&&E(qI,{children:uT.map(T=>E(KI,{onClick:()=>a(T),src:T.src,alt:T.alt},T.src))})]})},dT=()=>{const{mission:e}=A.useContext(yn);return E(AI,{children:E(OI,{children:e})})},fT=""+new URL("inside-club-bc7db19a.jpg",import.meta.url).href,hT=()=>{const{update:e}=A.useContext(yn);return oe(un,{children:[E(Ac,{src:xs,alt:"left arrow",onClick:()=>e({stage:de.OUTSIDE_CLUB})}),E(xc,{src:fT,alt:"club"}),E(Oc,{})]})},pT=()=>{const{stats:e,stage:t,mission:n}=A.useContext(yn);return E(_I,{children:E(wI,{children:E(SI,{children:oe(EI,{children:[t===de.LOGIN&&E(ZI,{}),t===de.OUTSIDE_CLUB&&E(JI,{}),t===de.INSIDE_CLUB&&E(hT,{}),t===de.HOME&&E(cT,{}),e&&t!==de.LOGIN&&E(tT,{stats:e}),n&&t!==de.LOGIN&&E(dT,{})]})})})})},mT=()=>A.useContext(rc)?E(mI,{children:E(pT,{})}):null,gT=()=>oe(lS,{children:[E(pI,{}),E(mT,{})]});Ya.createRoot(document.getElementById("root")).render(E(gT,{}));export{jk as A,kT as B,IT as C,_T as D,ST as E,un as F,TT as M,Hk as S,rc as U,E as a,wT as b,CT as c,vT as d,ET as e,oe as j,A as r,yT as u};
