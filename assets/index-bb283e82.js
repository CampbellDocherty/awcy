(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function jg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vi={},Hg={get exports(){return vi},set exports(e){vi=e}},xs={},b={},Wg={get exports(){return b},set exports(e){b=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Vg=Symbol.for("react.portal"),Gg=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),Kg=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Xg=Symbol.for("react.forward_ref"),Jg=Symbol.for("react.suspense"),Zg=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),Ac=Symbol.iterator;function tv(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qf=Object.assign,Kf={};function Lr(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Gf}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yf(){}Yf.prototype=Lr.prototype;function cu(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Gf}var du=cu.prototype=new Yf;du.constructor=cu;qf(du,Lr.prototype);du.isPureReactComponent=!0;var Oc=Array.isArray,Qf=Object.prototype.hasOwnProperty,fu={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qf.call(t,r)&&!Xf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hi,type:e,key:o,ref:s,props:i,_owner:fu.current}}function nv(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function rv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nc=/\/+/g;function la(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rv(""+e.key):t.toString(36)}function Ro(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hi:case Vg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+la(s,0):r,Oc(i)?(n="",e!=null&&(n=e.replace(Nc,"$&/")+"/"),Ro(i,t,n,"",function(u){return u})):i!=null&&(hu(i)&&(i=nv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Nc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Oc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+la(o,a);s+=Ro(o,t,n,l,i)}else if(l=tv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+la(o,a++),s+=Ro(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function io(e,t,n){if(e==null)return e;var r=[],i=0;return Ro(e,r,"","",function(o){return t.call(n,o,i++)}),r}function iv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Po={transition:null},ov={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Po,ReactCurrentOwner:fu};U.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Lr;U.Fragment=Gg;U.Profiler=Kg;U.PureComponent=cu;U.StrictMode=qg;U.Suspense=Jg;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=fu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Qf.call(t,l)&&!Xf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:Qg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yg,_context:e},e.Consumer=e};U.createElement=Jf;U.createFactory=function(e){var t=Jf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Xg,render:e}};U.isValidElement=hu;U.lazy=function(e){return{$$typeof:ev,_payload:{_status:-1,_result:e},_init:iv}};U.memo=function(e,t){return{$$typeof:Zg,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return ke.current.useCallback(e,t)};U.useContext=function(e){return ke.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};U.useEffect=function(e,t){return ke.current.useEffect(e,t)};U.useId=function(){return ke.current.useId()};U.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ke.current.useMemo(e,t)};U.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};U.useRef=function(e){return ke.current.useRef(e)};U.useState=function(e){return ke.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return ke.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(Wg);const yi=jg(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=b,av=Symbol.for("react.element"),lv=Symbol.for("react.fragment"),uv=Object.prototype.hasOwnProperty,cv=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)uv.call(t,r)&&!dv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:av,type:e,key:o,ref:s,props:i,_owner:cv.current}}xs.Fragment=lv;xs.jsx=Zf;xs.jsxs=Zf;(function(e){e.exports=xs})(Hg);const Ln=vi.Fragment,I=vi.jsx,ne=vi.jsxs;var Qa={},Xa={},fv={get exports(){return Xa},set exports(e){Xa=e}},Fe={},Ja={},hv={get exports(){return Ja},set exports(e){Ja=e}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,x){var O=C.length;C.push(x);e:for(;0<O;){var B=O-1>>>1,j=C[B];if(0<i(j,x))C[B]=x,C[O]=j,O=B;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var x=C[0],O=C.pop();if(O!==x){C[0]=O;e:for(var B=0,j=C.length,_n=j>>>1;B<_n;){var qe=2*(B+1)-1,bt=C[qe],Le=qe+1,pt=C[Le];if(0>i(bt,O))Le<j&&0>i(pt,bt)?(C[B]=pt,C[Le]=O,B=Le):(C[B]=bt,C[qe]=O,B=qe);else if(Le<j&&0>i(pt,O))C[B]=pt,C[Le]=O,B=Le;else break e}}return x}function i(C,x){var O=C.sortIndex-x.sortIndex;return O!==0?O:C.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,y=!1,_=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=C)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function g(C){if(_=!1,h(C),!y)if(n(l)!==null)y=!0,Br(E);else{var x=n(u);x!==null&&yn(g,x.startTime-C)}}function E(C,x){y=!1,_&&(_=!1,p(T),T=-1),v=!0;var O=m;try{for(h(x),f=n(l);f!==null&&(!(f.expirationTime>x)||C&&!Ne());){var B=f.callback;if(typeof B=="function"){f.callback=null,m=f.priorityLevel;var j=B(f.expirationTime<=x);x=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&r(l),h(x)}else r(l);f=n(l)}if(f!==null)var _n=!0;else{var qe=n(u);qe!==null&&yn(g,qe.startTime-x),_n=!1}return _n}finally{f=null,m=O,v=!1}}var S=!1,w=null,T=-1,M=5,D=-1;function Ne(){return!(e.unstable_now()-D<M)}function gn(){if(w!==null){var C=e.unstable_now();D=C;var x=!0;try{x=w(!0,C)}finally{x?vn():(S=!1,w=null)}}else S=!1}var vn;if(typeof c=="function")vn=function(){c(gn)};else if(typeof MessageChannel<"u"){var no=new MessageChannel,sa=no.port2;no.port1.onmessage=gn,vn=function(){sa.postMessage(null)}}else vn=function(){P(gn,0)};function Br(C){w=C,S||(S=!0,vn())}function yn(C,x){T=P(function(){C(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Br(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var O=m;m=x;try{return C()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,x){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=m;m=C;try{return x()}finally{m=O}},e.unstable_scheduleCallback=function(C,x,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,C){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=O+j,C={id:d++,callback:x,priorityLevel:C,startTime:O,expirationTime:j,sortIndex:-1},O>B?(C.sortIndex=O,t(u,C),n(l)===null&&C===n(u)&&(_?(p(T),T=-1):_=!0,yn(g,O-B))):(C.sortIndex=j,t(l,C),y||v||(y=!0,Br(E))),C},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(C){var x=m;return function(){var O=m;m=x;try{return C.apply(this,arguments)}finally{m=O}}}})(eh);(function(e){e.exports=eh})(hv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=b,Me=Ja;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,_i={};function Hn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(_i[e]=t,e=0;e<t.length;e++)nh.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Za=Object.prototype.hasOwnProperty,pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lc={},bc={};function mv(e){return Za.call(bc,e)?!0:Za.call(Lc,e)?!1:pv.test(e)?bc[e]=!0:(Lc[e]=!0,!1)}function gv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vv(e,t,n,r){if(t===null||typeof t>"u"||gv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,mu);fe[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,mu);fe[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,mu);fe[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function gu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vv(t,n,i,r)&&(n=null),r||i===null?mv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),ih=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),oh=Symbol.for("react.offscreen"),Dc=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ua;function Jr(e){if(ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ua=t&&t[1]||""}return`
`+ua+e}var ca=!1;function da(e,t){if(!e||ca)return"";ca=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ca=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function yv(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=da(e.type,!1),e;case 11:return e=da(e.type.render,!1),e;case 1:return e=da(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Yn:return"Portal";case el:return"Profiler";case vu:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ih:return(e.displayName||"Context")+".Consumer";case rh:return(e._context.displayName||"Context")+".Provider";case yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function _v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wv(e){var t=sh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=wv(e))}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function il(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lh(e,t){t=t.checked,t!=null&&gu(e,"checked",t,!1)}function ol(e,t){lh(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sl(e,t.type,n):t.hasOwnProperty("defaultValue")&&sl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sl(e,t,n){(t!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function al(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Zr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function uh(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ch(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ch(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sv=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){Sv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function fh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function hh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ev=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(Ev[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fl=null,cr=null,dr=null;function $c(e){if(e=Gi(e)){if(typeof fl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=bs(t),fl(e.stateNode,e.type,t))}}function ph(e){cr?dr?dr.push(e):dr=[e]:cr=e}function mh(){if(cr){var e=cr,t=dr;if(dr=cr=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function gh(e,t){return e(t)}function vh(){}var fa=!1;function yh(e,t,n){if(fa)return e(t,n);fa=!0;try{return gh(e,t,n)}finally{fa=!1,(cr!==null||dr!==null)&&(vh(),mh())}}function Si(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var hl=!1;if(Ct)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){hl=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{hl=!1}function kv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var si=!1,Yo=null,Qo=!1,pl=null,Iv={onError:function(e){si=!0,Yo=e}};function Tv(e,t,n,r,i,o,s,a,l){si=!1,Yo=null,kv.apply(Iv,arguments)}function Cv(e,t,n,r,i,o,s,a,l){if(Tv.apply(this,arguments),si){if(si){var u=Yo;si=!1,Yo=null}else throw Error(k(198));Qo||(Qo=!0,pl=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bc(e){if(Wn(e)!==e)throw Error(k(188))}function Rv(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bc(i),e;if(o===r)return Bc(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function wh(e){return e=Rv(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var Eh=Me.unstable_scheduleCallback,jc=Me.unstable_cancelCallback,Pv=Me.unstable_shouldYield,xv=Me.unstable_requestPaint,te=Me.unstable_now,Av=Me.unstable_getCurrentPriorityLevel,Su=Me.unstable_ImmediatePriority,kh=Me.unstable_UserBlockingPriority,Xo=Me.unstable_NormalPriority,Ov=Me.unstable_LowPriority,Ih=Me.unstable_IdlePriority,As=null,ut=null;function Nv(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(As,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Dv,Lv=Math.log,bv=Math.LN2;function Dv(e){return e>>>=0,e===0?32:31-(Lv(e)/bv|0)|0}var lo=64,uo=4194304;function ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ei(a):(o&=s,o!==0&&(r=ei(o)))}else s=n&~i,s!==0?r=ei(s):o!==0&&(r=ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function Uv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Uv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Th(){var e=lo;return lo<<=1,!(lo&4194240)&&(lo=64),e}function ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Fv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rh,ku,Ph,xh,Ah,gl=!1,co=[],Qt=null,Xt=null,Jt=null,Ei=new Map,ki=new Map,Bt=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Vr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $v(e,t,n,r,i){switch(t){case"focusin":return Qt=Vr(Qt,e,t,n,r,i),!0;case"dragenter":return Xt=Vr(Xt,e,t,n,r,i),!0;case"mouseover":return Jt=Vr(Jt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ei.set(o,Vr(Ei.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ki.set(o,Vr(ki.get(o)||null,e,t,n,r,i)),!0}return!1}function Oh(e){var t=In(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,Ah(e.priority,function(){Ph(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dl=r,n.target.dispatchEvent(r),dl=null}else return t=Gi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){xo(e)&&n.delete(t)}function Bv(){gl=!1,Qt!==null&&xo(Qt)&&(Qt=null),Xt!==null&&xo(Xt)&&(Xt=null),Jt!==null&&xo(Jt)&&(Jt=null),Ei.forEach(Wc),ki.forEach(Wc)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Bv)))}function Ii(e){function t(i){return Gr(i,e)}if(0<co.length){Gr(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Gr(Qt,e),Xt!==null&&Gr(Xt,e),Jt!==null&&Gr(Jt,e),Ei.forEach(t),ki.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Oh(n),n.blockedOn===null&&Bt.shift()}var fr=Ot.ReactCurrentBatchConfig,Zo=!0;function jv(e,t,n,r){var i=$,o=fr.transition;fr.transition=null;try{$=1,Iu(e,t,n,r)}finally{$=i,fr.transition=o}}function Hv(e,t,n,r){var i=$,o=fr.transition;fr.transition=null;try{$=4,Iu(e,t,n,r)}finally{$=i,fr.transition=o}}function Iu(e,t,n,r){if(Zo){var i=vl(e,t,n,r);if(i===null)ka(e,t,r,es,n),Hc(e,r);else if($v(i,e,t,n,r))r.stopPropagation();else if(Hc(e,r),t&4&&-1<zv.indexOf(e)){for(;i!==null;){var o=Gi(i);if(o!==null&&Rh(o),o=vl(e,t,n,r),o===null&&ka(e,t,r,es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ka(e,t,r,null,n)}}var es=null;function vl(e,t,n,r){if(es=null,e=wu(r),e=In(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return es=e,null}function Nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case Su:return 1;case kh:return 4;case Xo:case Ov:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var Kt=null,Tu=null,Ao=null;function Lh(){if(Ao)return Ao;var e,t=Tu,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fo(){return!0}function Vc(){return!1}function ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fo:Vc,this.isPropagationStopped=Vc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=ze(br),Vi=J({},br,{view:0,detail:0}),Wv=ze(Vi),pa,ma,qr,Os=J({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(pa=e.screenX-qr.screenX,ma=e.screenY-qr.screenY):ma=pa=0,qr=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Gc=ze(Os),Vv=J({},Os,{dataTransfer:0}),Gv=ze(Vv),qv=J({},Vi,{relatedTarget:0}),ga=ze(qv),Kv=J({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=ze(Kv),Qv=J({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xv=ze(Qv),Jv=J({},br,{data:0}),qc=ze(Jv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function Ru(){return ny}var ry=J({},Vi,{key:function(e){if(e.key){var t=Zv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iy=ze(ry),oy=J({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=ze(oy),sy=J({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),ay=ze(sy),ly=J({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=ze(ly),cy=J({},Os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=ze(cy),fy=[9,13,27,32],Pu=Ct&&"CompositionEvent"in window,ai=null;Ct&&"documentMode"in document&&(ai=document.documentMode);var hy=Ct&&"TextEvent"in window&&!ai,bh=Ct&&(!Pu||ai&&8<ai&&11>=ai),Yc=String.fromCharCode(32),Qc=!1;function Dh(e,t){switch(e){case"keyup":return fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function py(e,t){switch(e){case"compositionend":return Uh(t);case"keypress":return t.which!==32?null:(Qc=!0,Yc);case"textInput":return e=t.data,e===Yc&&Qc?null:e;default:return null}}function my(e,t){if(Xn)return e==="compositionend"||!Pu&&Dh(e,t)?(e=Lh(),Ao=Tu=Kt=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bh&&t.locale!=="ko"?null:t.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gy[e.type]:t==="textarea"}function Mh(e,t,n,r){ph(r),t=ts(t,"onChange"),0<t.length&&(n=new Cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Ti=null;function vy(e){Kh(e,0)}function Ns(e){var t=er(e);if(ah(t))return e}function yy(e,t){if(e==="change")return t}var Fh=!1;if(Ct){var va;if(Ct){var ya="oninput"in document;if(!ya){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),ya=typeof Jc.oninput=="function"}va=ya}else va=!1;Fh=va&&(!document.documentMode||9<document.documentMode)}function Zc(){li&&(li.detachEvent("onpropertychange",zh),Ti=li=null)}function zh(e){if(e.propertyName==="value"&&Ns(Ti)){var t=[];Mh(t,Ti,e,wu(e)),yh(vy,t)}}function _y(e,t,n){e==="focusin"?(Zc(),li=t,Ti=n,li.attachEvent("onpropertychange",zh)):e==="focusout"&&Zc()}function wy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(Ti)}function Sy(e,t){if(e==="click")return Ns(t)}function Ey(e,t){if(e==="input"||e==="change")return Ns(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:ky;function Ci(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Za.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function $h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Iy(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=td(n,o);var s=td(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ty=Ct&&"documentMode"in document&&11>=document.documentMode,Jn=null,yl=null,ui=null,_l=!1;function nd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Jn==null||Jn!==Ko(r)||(r=Jn,"selectionStart"in r&&xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ci(ui,r)||(ui=r,r=ts(yl,"onSelect"),0<r.length&&(t=new Cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},_a={},jh={};Ct&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Ls(e){if(_a[e])return _a[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jh)return _a[e]=t[n];return e}var Hh=Ls("animationend"),Wh=Ls("animationiteration"),Vh=Ls("animationstart"),Gh=Ls("transitionend"),qh=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){qh.set(e,t),Hn(t,[e])}for(var wa=0;wa<rd.length;wa++){var Sa=rd[wa],Cy=Sa.toLowerCase(),Ry=Sa[0].toUpperCase()+Sa.slice(1);dn(Cy,"on"+Ry)}dn(Hh,"onAnimationEnd");dn(Wh,"onAnimationIteration");dn(Vh,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Gh,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));function id(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cv(r,t,void 0,e),e.currentTarget=null}function Kh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;id(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;id(i,a,u),o=l}}}if(Qo)throw e=pl,Qo=!1,pl=null,e}function V(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Yh(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),Yh(n,e,r,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[po]){e[po]=!0,nh.forEach(function(n){n!=="selectionchange"&&(Py.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Ea("selectionchange",!1,t))}}function Yh(e,t,n,r){switch(Nh(t)){case 1:var i=jv;break;case 4:i=Hv;break;default:i=Iu}n=i.bind(null,t,n,e),i=void 0,!hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ka(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=In(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yh(function(){var u=o,d=wu(n),f=[];e:{var m=qh.get(e);if(m!==void 0){var v=Cu,y=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":v=iy;break;case"focusin":y="focus",v=ga;break;case"focusout":y="blur",v=ga;break;case"beforeblur":case"afterblur":v=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ay;break;case Hh:case Wh:case Vh:v=Yv;break;case Gh:v=uy;break;case"scroll":v=Wv;break;case"wheel":v=dy;break;case"copy":case"cut":case"paste":v=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kc}var _=(t&4)!==0,P=!_&&e==="scroll",p=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,h;c!==null;){h=c;var g=h.stateNode;if(h.tag===5&&g!==null&&(h=g,p!==null&&(g=Si(c,p),g!=null&&_.push(Pi(c,g,h)))),P)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,d),f.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==dl&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Rt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?In(y):null,y!==null&&(P=Wn(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Gc,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Kc,g="onPointerLeave",p="onPointerEnter",c="pointer"),P=v==null?m:er(v),h=y==null?m:er(y),m=new _(g,c+"leave",v,n,d),m.target=P,m.relatedTarget=h,g=null,In(d)===u&&(_=new _(p,c+"enter",y,n,d),_.target=h,_.relatedTarget=P,g=_),P=g,v&&y)t:{for(_=v,p=y,c=0,h=_;h;h=Gn(h))c++;for(h=0,g=p;g;g=Gn(g))h++;for(;0<c-h;)_=Gn(_),c--;for(;0<h-c;)p=Gn(p),h--;for(;c--;){if(_===p||p!==null&&_===p.alternate)break t;_=Gn(_),p=Gn(p)}_=null}else _=null;v!==null&&od(f,m,v,_,!1),y!==null&&P!==null&&od(f,P,y,_,!0)}}e:{if(m=u?er(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=yy;else if(Xc(m))if(Fh)E=Ey;else{E=wy;var S=_y}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Sy);if(E&&(E=E(e,u))){Mh(f,E,n,d);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&sl(m,"number",m.value)}switch(S=u?er(u):window,e){case"focusin":(Xc(S)||S.contentEditable==="true")&&(Jn=S,yl=u,ui=null);break;case"focusout":ui=yl=Jn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,nd(f,n,d);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":nd(f,n,d)}var w;if(Pu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xn?Dh(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(bh&&n.locale!=="ko"&&(Xn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xn&&(w=Lh()):(Kt=d,Tu="value"in Kt?Kt.value:Kt.textContent,Xn=!0)),S=ts(u,T),0<S.length&&(T=new qc(T,e,null,n,d),f.push({event:T,listeners:S}),w?T.data=w:(w=Uh(n),w!==null&&(T.data=w)))),(w=hy?py(e,n):my(e,n))&&(u=ts(u,"onBeforeInput"),0<u.length&&(d=new qc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}Kh(f,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ts(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Si(e,n),o!=null&&r.unshift(Pi(e,o,i)),o=Si(e,t),o!=null&&r.push(Pi(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Si(n,o),l!=null&&s.unshift(Pi(n,l,a))):i||(l=Si(n,o),l!=null&&s.push(Pi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var xy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(Ay,"")}function mo(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(k(425))}function ns(){}var wl=null,Sl=null;function El(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(Ly)}:kl;function Ly(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),st="__reactFiber$"+Dr,xi="__reactProps$"+Dr,Rt="__reactContainer$"+Dr,Il="__reactEvents$"+Dr,by="__reactListeners$"+Dr,Dy="__reactHandles$"+Dr;function In(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[st])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[st]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function bs(e){return e[xi]||null}var Tl=[],tr=-1;function fn(e){return{current:e}}function q(e){0>tr||(e.current=Tl[tr],Tl[tr]=null,tr--)}function W(e,t){tr++,Tl[tr]=e.current,e.current=t}var cn={},ge=fn(cn),xe=fn(!1),bn=cn;function _r(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function rs(){q(xe),q(ge)}function ud(e,t,n){if(ge.current!==cn)throw Error(k(168));W(ge,t),W(xe,n)}function Qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,_v(e)||"Unknown",i));return J({},n,r)}function is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,bn=ge.current,W(ge,e),W(xe,xe.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Qh(e,t,bn),r.__reactInternalMemoizedMergedChildContext=e,q(xe),q(ge),W(ge,e)):q(xe),W(xe,n)}var vt=null,Ds=!1,Ta=!1;function Xh(e){vt===null?vt=[e]:vt.push(e)}function Uy(e){Ds=!0,Xh(e)}function hn(){if(!Ta&&vt!==null){Ta=!0;var e=0,t=$;try{var n=vt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Ds=!1}catch(i){throw vt!==null&&(vt=vt.slice(e+1)),Eh(Su,hn),i}finally{$=t,Ta=!1}}return null}var nr=[],rr=0,os=null,ss=0,$e=[],Be=0,Dn=null,yt=1,_t="";function Sn(e,t){nr[rr++]=ss,nr[rr++]=os,os=e,ss=t}function Jh(e,t,n){$e[Be++]=yt,$e[Be++]=_t,$e[Be++]=Dn,Dn=e;var r=yt;e=_t;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yt=1<<32-Je(t)+i|n<<i|r,_t=o+e}else yt=1<<o|n<<i|r,_t=e}function Au(e){e.return!==null&&(Sn(e,1),Jh(e,1,0))}function Ou(e){for(;e===os;)os=nr[--rr],nr[rr]=null,ss=nr[--rr],nr[rr]=null;for(;e===Dn;)Dn=$e[--Be],$e[Be]=null,_t=$e[--Be],$e[Be]=null,yt=$e[--Be],$e[Be]=null}var Ue=null,De=null,Y=!1,Xe=null;function Zh(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,De=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:yt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,De=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(Y){var t=De;if(t){var n=t;if(!dd(e,t)){if(Cl(e))throw Error(k(418));t=Zt(n.nextSibling);var r=Ue;t&&dd(e,t)?Zh(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ue=e)}}else{if(Cl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Ue=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function go(e){if(e!==Ue)return!1;if(!Y)return fd(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!El(e.type,e.memoizedProps)),t&&(t=De)){if(Cl(e))throw ep(),Error(k(418));for(;t;)Zh(e,t),t=Zt(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ue?Zt(e.stateNode.nextSibling):null;return!0}function ep(){for(var e=De;e;)e=Zt(e.nextSibling)}function wr(){De=Ue=null,Y=!1}function Nu(e){Xe===null?Xe=[e]:Xe.push(e)}var My=Ot.ReactCurrentBatchConfig;function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var as=fn(null),ls=null,ir=null,Lu=null;function bu(){Lu=ir=ls=null}function Du(e){var t=as.current;q(as),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){ls=e,Lu=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Lu!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(ls===null)throw Error(k(308));ir=e,ls.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Tn=null;function Uu(e){Tn===null?Tn=[e]:Tn.push(e)}function tp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Uu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function hd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function us(e,t,n,r){var i=e.updateQueue;$t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(v,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,f,m):y,m==null)break e;f=J({},f,m);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mn|=s,e.lanes=s,e.memoizedState=f}}function pd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var rp=new th.Component().refs;function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=nn(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(Ze(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=nn(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(Ze(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=nn(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(Ze(t,e,r,n),No(t,e,r))}};function md(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ci(n,r)||!Ci(i,o):!0}function ip(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=Ae(t)?bn:ge.current,r=t.contextTypes,o=(r=r!=null)?_r(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=rp,Mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=Ae(t)?bn:ge.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Us.enqueueReplaceState(i,i.state,null),us(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===rp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function op(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=rn(p,c),p.index=0,p.sibling=null,p}function o(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,h,g){return c===null||c.tag!==6?(c=Na(h,p.mode,g),c.return=p,c):(c=i(c,h),c.return=p,c)}function l(p,c,h,g){var E=h.type;return E===Qn?d(p,c,h.props.children,g,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&vd(E)===c.type)?(g=i(c,h.props),g.ref=Kr(p,c,h),g.return=p,g):(g=Fo(h.type,h.key,h.props,null,p.mode,g),g.ref=Kr(p,c,h),g.return=p,g)}function u(p,c,h,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=La(h,p.mode,g),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function d(p,c,h,g,E){return c===null||c.tag!==7?(c=xn(h,p.mode,g,E),c.return=p,c):(c=i(c,h),c.return=p,c)}function f(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Na(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case oo:return h=Fo(c.type,c.key,c.props,null,p.mode,h),h.ref=Kr(p,null,c),h.return=p,h;case Yn:return c=La(c,p.mode,h),c.return=p,c;case zt:var g=c._init;return f(p,g(c._payload),h)}if(Zr(c)||Hr(c))return c=xn(c,p.mode,h,null),c.return=p,c;vo(p,c)}return null}function m(p,c,h,g){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(p,c,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return h.key===E?l(p,c,h,g):null;case Yn:return h.key===E?u(p,c,h,g):null;case zt:return E=h._init,m(p,c,E(h._payload),g)}if(Zr(h)||Hr(h))return E!==null?null:d(p,c,h,g,null);vo(p,h)}return null}function v(p,c,h,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(h)||null,a(c,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oo:return p=p.get(g.key===null?h:g.key)||null,l(c,p,g,E);case Yn:return p=p.get(g.key===null?h:g.key)||null,u(c,p,g,E);case zt:var S=g._init;return v(p,c,h,S(g._payload),E)}if(Zr(g)||Hr(g))return p=p.get(h)||null,d(c,p,g,E,null);vo(c,g)}return null}function y(p,c,h,g){for(var E=null,S=null,w=c,T=c=0,M=null;w!==null&&T<h.length;T++){w.index>T?(M=w,w=null):M=w.sibling;var D=m(p,w,h[T],g);if(D===null){w===null&&(w=M);break}e&&w&&D.alternate===null&&t(p,w),c=o(D,c,T),S===null?E=D:S.sibling=D,S=D,w=M}if(T===h.length)return n(p,w),Y&&Sn(p,T),E;if(w===null){for(;T<h.length;T++)w=f(p,h[T],g),w!==null&&(c=o(w,c,T),S===null?E=w:S.sibling=w,S=w);return Y&&Sn(p,T),E}for(w=r(p,w);T<h.length;T++)M=v(w,p,T,h[T],g),M!==null&&(e&&M.alternate!==null&&w.delete(M.key===null?T:M.key),c=o(M,c,T),S===null?E=M:S.sibling=M,S=M);return e&&w.forEach(function(Ne){return t(p,Ne)}),Y&&Sn(p,T),E}function _(p,c,h,g){var E=Hr(h);if(typeof E!="function")throw Error(k(150));if(h=E.call(h),h==null)throw Error(k(151));for(var S=E=null,w=c,T=c=0,M=null,D=h.next();w!==null&&!D.done;T++,D=h.next()){w.index>T?(M=w,w=null):M=w.sibling;var Ne=m(p,w,D.value,g);if(Ne===null){w===null&&(w=M);break}e&&w&&Ne.alternate===null&&t(p,w),c=o(Ne,c,T),S===null?E=Ne:S.sibling=Ne,S=Ne,w=M}if(D.done)return n(p,w),Y&&Sn(p,T),E;if(w===null){for(;!D.done;T++,D=h.next())D=f(p,D.value,g),D!==null&&(c=o(D,c,T),S===null?E=D:S.sibling=D,S=D);return Y&&Sn(p,T),E}for(w=r(p,w);!D.done;T++,D=h.next())D=v(w,p,T,D.value,g),D!==null&&(e&&D.alternate!==null&&w.delete(D.key===null?T:D.key),c=o(D,c,T),S===null?E=D:S.sibling=D,S=D);return e&&w.forEach(function(gn){return t(p,gn)}),Y&&Sn(p,T),E}function P(p,c,h,g){if(typeof h=="object"&&h!==null&&h.type===Qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:e:{for(var E=h.key,S=c;S!==null;){if(S.key===E){if(E=h.type,E===Qn){if(S.tag===7){n(p,S.sibling),c=i(S,h.props.children),c.return=p,p=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&vd(E)===S.type){n(p,S.sibling),c=i(S,h.props),c.ref=Kr(p,S,h),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}h.type===Qn?(c=xn(h.props.children,p.mode,g,h.key),c.return=p,p=c):(g=Fo(h.type,h.key,h.props,null,p.mode,g),g.ref=Kr(p,c,h),g.return=p,p=g)}return s(p);case Yn:e:{for(S=h.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=La(h,p.mode,g),c.return=p,p=c}return s(p);case zt:return S=h._init,P(p,c,S(h._payload),g)}if(Zr(h))return y(p,c,h,g);if(Hr(h))return _(p,c,h,g);vo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=Na(h,p.mode,g),c.return=p,p=c),s(p)):n(p,c)}return P}var Sr=op(!0),sp=op(!1),qi={},ct=fn(qi),Ai=fn(qi),Oi=fn(qi);function Cn(e){if(e===qi)throw Error(k(174));return e}function Fu(e,t){switch(W(Oi,t),W(Ai,e),W(ct,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}q(ct),W(ct,t)}function Er(){q(ct),q(Ai),q(Oi)}function ap(e){Cn(Oi.current);var t=Cn(ct.current),n=ll(t,e.type);t!==n&&(W(Ai,e),W(ct,n))}function zu(e){Ai.current===e&&(q(ct),q(Ai))}var Q=fn(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=[];function $u(){for(var e=0;e<Ca.length;e++)Ca[e]._workInProgressVersionPrimary=null;Ca.length=0}var Lo=Ot.ReactCurrentDispatcher,Ra=Ot.ReactCurrentBatchConfig,Un=0,X=null,oe=null,ae=null,ds=!1,ci=!1,Ni=0,Fy=0;function he(){throw Error(k(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,i,o){if(Un=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?jy:Hy,e=n(r,i),ci){o=0;do{if(ci=!1,Ni=0,25<=o)throw Error(k(301));o+=1,ae=oe=null,t.updateQueue=null,Lo.current=Wy,e=n(r,i)}while(ci)}if(Lo.current=fs,t=oe!==null&&oe.next!==null,Un=0,ae=oe=X=null,ds=!1,t)throw Error(k(300));return e}function Hu(){var e=Ni!==0;return Ni=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?X.memoizedState=ae=e:ae=ae.next=e,ae}function Ve(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ae===null?X.memoizedState:ae.next;if(t!==null)ae=t,oe=e;else{if(e===null)throw Error(k(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ae===null?X.memoizedState=ae=e:ae=ae.next=e}return ae}function Li(e,t){return typeof t=="function"?t(e):t}function Pa(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Un&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,X.lanes|=d,Mn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,tt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xa(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);tt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lp(){}function up(e,t){var n=X,r=Ve(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,Wu(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,bi(9,dp.bind(null,n,r,i,t),void 0,null),ue===null)throw Error(k(349));Un&30||cp(n,t,i)}return i}function cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,hp(t)&&pp(e)}function fp(e,t,n){return n(function(){hp(t)&&pp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function pp(e){var t=Pt(e,1);t!==null&&Ze(t,e,1,-1)}function yd(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=By.bind(null,X,e),[t.memoizedState,e]}function bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mp(){return Ve().memoizedState}function bo(e,t,n,r){var i=it();X.flags|=e,i.memoizedState=bi(1|t,n,void 0,r===void 0?null:r)}function Ms(e,t,n,r){var i=Ve();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Bu(r,s.deps)){i.memoizedState=bi(t,n,o,r);return}}X.flags|=e,i.memoizedState=bi(1|t,n,o,r)}function _d(e,t){return bo(8390656,8,e,t)}function Wu(e,t){return Ms(2048,8,e,t)}function gp(e,t){return Ms(4,2,e,t)}function vp(e,t){return Ms(4,4,e,t)}function yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4,4,yp.bind(null,t,e),n)}function Vu(){}function wp(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sp(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return Un&21?(tt(n,t)||(n=Th(),X.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function zy(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Ra.transition;Ra.transition={};try{e(!1),t()}finally{$=n,Ra.transition=r}}function kp(){return Ve().memoizedState}function $y(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ip(e))Tp(t,n);else if(n=tp(e,t,n,r),n!==null){var i=Ee();Ze(n,e,r,i),Cp(n,t,r)}}function By(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))Tp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,s)){var l=t.interleaved;l===null?(i.next=i,Uu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=tp(e,t,i,r),n!==null&&(i=Ee(),Ze(n,e,r,i),Cp(n,t,r))}}function Ip(e){var t=e.alternate;return e===X||t!==null&&t===X}function Tp(e,t){ci=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var fs={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},jy={readContext:We,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:_d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bo(4194308,4,yp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){return bo(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$y.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:Vu,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=zy.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=it();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ue===null)throw Error(k(349));Un&30||cp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_d(fp.bind(null,r,o,e),[e]),r.flags|=2048,bi(9,dp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=ue.identifierPrefix;if(Y){var n=_t,r=yt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hy={readContext:We,useCallback:wp,useContext:We,useEffect:Wu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Sp,useReducer:Pa,useRef:mp,useState:function(){return Pa(Li)},useDebugValue:Vu,useDeferredValue:function(e){var t=Ve();return Ep(t,oe.memoizedState,e)},useTransition:function(){var e=Pa(Li)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:kp,unstable_isNewReconciler:!1},Wy={readContext:We,useCallback:wp,useContext:We,useEffect:Wu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:vp,useMemo:Sp,useReducer:xa,useRef:mp,useState:function(){return xa(Li)},useDebugValue:Vu,useDeferredValue:function(e){var t=Ve();return oe===null?t.memoizedState=e:Ep(t,oe.memoizedState,e)},useTransition:function(){var e=xa(Li)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:up,useId:kp,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=yv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ps||(ps=!0,Bl=r),Ol(e,t)},n}function Pp(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ol(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=o0.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Gy=Ot.ReactCurrentOwner,Re=!1;function we(e,t,n,r){t.child=e===null?sp(t,null,n,r):Sr(t,e.child,n,r)}function kd(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=ju(e,t,n,r,o,i),n=Hu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Y&&n&&Au(t),t.flags|=1,we(e,t,r,i),t.child)}function Id(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Zu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xp(e,t,o,r,i)):(e=Fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ci,n(s,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ci(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,xt(e,t,i)}return Nl(e,t,n,r,i)}function Ap(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sr,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sr,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(sr,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(sr,be),be|=r;return we(e,t,i,n),t.child}function Op(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,i){var o=Ae(n)?bn:ge.current;return o=_r(t,o),hr(t,i),n=ju(e,t,n,r,o,i),r=Hu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Y&&r&&Au(t),t.flags|=1,we(e,t,n,i),t.child)}function Td(e,t,n,r,i){if(Ae(n)){var o=!0;is(t)}else o=!1;if(hr(t,i),t.stateNode===null)Do(e,t),ip(t,n,r),Al(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ae(n)?bn:ge.current,u=_r(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gd(t,s,r,u),$t=!1;var m=t.memoizedState;s.state=m,us(t,r,s,i),l=t.memoizedState,a!==r||m!==l||xe.current||$t?(typeof d=="function"&&(xl(t,n,d,r),l=t.memoizedState),(a=$t||md(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,np(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ye(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Ae(n)?bn:ge.current,l=_r(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&gd(t,s,r,l),$t=!1,m=t.memoizedState,s.state=m,us(t,r,s,i);var y=t.memoizedState;a!==f||m!==y||xe.current||$t?(typeof v=="function"&&(xl(t,n,v,r),y=t.memoizedState),(u=$t||md(t,n,u,r,m,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ll(e,t,n,r,o,i)}function Ll(e,t,n,r,i,o){Op(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&cd(t,n,!1),xt(e,t,o);r=t.stateNode,Gy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,a,o)):we(e,t,a,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Fu(e,t.containerInfo)}function Cd(e,t,n,r,i){return wr(),Nu(i),t.flags|=256,we(e,t,n,r),t.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$s(s,r,0,null),e=xn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Dl(n),t.memoizedState=bl,e):Gu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=rn(a,o):(o=xn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=bl,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gu(e,t){return t=$s({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&Nu(r),Sr(t,e.child,null,n),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error(k(422))),yo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$s({mode:"visible",children:r.children},i,0,null),o=xn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,s),t.child.memoizedState=Dl(s),t.memoizedState=bl,o);if(!(t.mode&1))return yo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Aa(o,r,void 0),yo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Re||a){if(r=ue,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),Ze(r,e,i,-1))}return Ju(),r=Aa(Error(k(421))),yo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=s0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=Zt(i.nextSibling),Ue=t,Y=!0,Xe=null,e!==null&&($e[Be++]=yt,$e[Be++]=_t,$e[Be++]=Dn,yt=e.id,_t=e.overflow,Dn=t),t=Gu(t,r.children),t.flags|=4096,t)}function Rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Oa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,n,t);else if(e.tag===19)Rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&cs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&cs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oa(t,!0,n,null,o);break;case"together":Oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ky(e,t,n){switch(t.tag){case 3:Np(t),wr();break;case 5:ap(t);break;case 1:Ae(t.type)&&is(t);break;case 4:Fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(as,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(W(Q,Q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,n)}return xt(e,t,n)}var Dp,Ul,Up,Mp;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ul=function(){};Up=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(ct.current);var o=null;switch(n){case"input":i=il(e,i),r=il(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=al(e,i),r=al(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ns)}ul(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yy(e,t,n){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ae(t.type)&&rs(),pe(t),null;case 3:return r=t.stateNode,Er(),q(xe),q(ge),$u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Wl(Xe),Xe=null))),Ul(e,t),pe(t),null;case 5:zu(t);var i=Cn(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Cn(ct.current),go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[xi]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<ti.length;i++)V(ti[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Uc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Fc(r,o),V("invalid",r)}ul(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mo(r.textContent,a,e),i=["children",""+a]):_i.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":so(r),Mc(r,o,!0);break;case"textarea":so(r),zc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ns)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ch(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[xi]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(s=cl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<ti.length;i++)V(ti[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Uc(e,r),i=il(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Fc(e,r),i=al(e,r),V("invalid",e);break;default:i=r}ul(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?hh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wi(e,l):typeof l=="number"&&wi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&gu(e,o,l,s))}switch(n){case"input":so(e),Mc(e,r,!1);break;case"textarea":so(e),zc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ur(e,!!r.multiple,o,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Cn(Oi.current),Cn(ct.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return pe(t),null;case 13:if(q(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&De!==null&&t.mode&1&&!(t.flags&128))ep(),wr(),t.flags|=98560,o=!1;else if(o=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[st]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(Wl(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?se===0&&(se=3):Ju())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Er(),Ul(e,t),e===null&&Ri(t.stateNode.containerInfo),pe(t),null;case 10:return Du(t.type._context),pe(t),null;case 17:return Ae(t.type)&&rs(),pe(t),null;case 19:if(q(Q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Yr(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=cs(e),s!==null){for(t.flags|=128,Yr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Ir&&(t.flags|=128,r=!0,Yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=cs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return pe(t),null}else 2*te()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,Yr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Qy(e,t){switch(Ou(t),t.tag){case 1:return Ae(t.type)&&rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),q(xe),q(ge),$u(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return Er(),null;case 10:return Du(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var _o=!1,me=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,R=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ml(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Pd=!1;function Jy(e,t){if(wl=Zo,e=Bh(),xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:e,selectionRange:n},Zo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,P=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ye(t.type,_),P);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){ee(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Pd,Pd=!1,y}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ml(t,n,o)}i=i.next}while(i!==r)}}function Fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fp(e){var t=e.alternate;t!==null&&(e.alternate=null,Fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[xi],delete t[Il],delete t[by],delete t[Dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(r!==4&&(e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function $l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($l(e,t,n),e=e.sibling;e!==null;)$l(e,t,n),e=e.sibling}var ce=null,Qe=!1;function Ut(e,t,n){for(n=n.child;n!==null;)$p(e,t,n),n=n.sibling}function $p(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(As,n)}catch{}switch(n.tag){case 5:me||or(n,t);case 6:var r=ce,i=Qe;ce=null,Ut(e,t,n),ce=r,Qe=i,ce!==null&&(Qe?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Qe?(e=ce,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Ii(e)):Ia(ce,n.stateNode));break;case 4:r=ce,i=Qe,ce=n.stateNode.containerInfo,Qe=!0,Ut(e,t,n),ce=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ml(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!me&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Ut(e,t,n),me=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Ad(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xy),t.forEach(function(r){var i=a0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Qe=!1;break e;case 3:ce=a.stateNode.containerInfo,Qe=!0;break e;case 4:ce=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ce===null)throw Error(k(160));$p(o,s,i),ce=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),rt(e),r&4){try{di(3,e,e.return),Fs(3,e)}catch(_){ee(e,e.return,_)}try{di(5,e,e.return)}catch(_){ee(e,e.return,_)}}break;case 1:Ke(t,e),rt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Ke(t,e),rt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(_){ee(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lh(i,o),cl(a,s);var u=cl(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?hh(i,f):d==="dangerouslySetInnerHTML"?dh(i,f):d==="children"?wi(i,f):gu(i,d,f,u)}switch(a){case"input":ol(i,o);break;case"textarea":uh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ur(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[xi]=o}catch(_){ee(e,e.return,_)}}break;case 6:if(Ke(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){ee(e,e.return,_)}}break;case 3:if(Ke(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(_){ee(e,e.return,_)}break;case 4:Ke(t,e),rt(e);break;case 13:Ke(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=te())),r&4&&Ad(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||d,Ke(t,e),me=u):Ke(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(f=R=d;R!==null;){switch(m=R,v=m.child,m.tag){case 0:case 11:case 14:case 15:di(4,m,m.return);break;case 1:or(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){ee(r,n,_)}}break;case 5:or(m,m.return);break;case 22:if(m.memoizedState!==null){Nd(f);continue}}v!==null?(v.return=m,R=v):Nd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fh("display",s))}catch(_){ee(e,e.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){ee(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ke(t,e),rt(e),r&4&&Ad(e);break;case 21:break;default:Ke(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=xd(e);$l(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=xd(e);zl(e,a,s);break;default:throw Error(k(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zy(e,t,n){R=e,jp(e)}function jp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_o;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=_o;var u=me;if(_o=s,(me=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Ld(i):l!==null?(l.return=s,R=l):Ld(i);for(;o!==null;)R=o,jp(o),o=o.sibling;R=i,_o=a,me=u}Od(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Od(e)}}function Od(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Fs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ii(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&Fl(t)}catch(m){ee(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Nd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Ld(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fs(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Fl(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{Fl(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var e0=Math.ceil,hs=Ot.ReactCurrentDispatcher,qu=Ot.ReactCurrentOwner,He=Ot.ReactCurrentBatchConfig,F=0,ue=null,ie=null,de=0,be=0,sr=fn(0),se=0,Di=null,Mn=0,zs=0,Ku=0,fi=null,Ce=null,Yu=0,Ir=1/0,mt=null,ps=!1,Bl=null,tn=null,wo=!1,Yt=null,ms=0,hi=0,jl=null,Uo=-1,Mo=0;function Ee(){return F&6?te():Uo!==-1?Uo:Uo=te()}function nn(e){return e.mode&1?F&2&&de!==0?de&-de:My.transition!==null?(Mo===0&&(Mo=Th()),Mo):(e=$,e!==0||(e=window.event,e=e===void 0?16:Nh(e.type)),e):1}function Ze(e,t,n,r){if(50<hi)throw hi=0,jl=null,Error(k(185));Wi(e,n,r),(!(F&2)||e!==ue)&&(e===ue&&(!(F&2)&&(zs|=n),se===4&&jt(e,de)),Oe(e,r),n===1&&F===0&&!(t.mode&1)&&(Ir=te()+500,Ds&&hn()))}function Oe(e,t){var n=e.callbackNode;Mv(e,t);var r=Jo(e,e===ue?de:0);if(r===0)n!==null&&jc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jc(n),t===1)e.tag===0?Uy(bd.bind(null,e)):Xh(bd.bind(null,e)),Ny(function(){!(F&6)&&hn()}),n=null;else{switch(Ch(r)){case 1:n=Su;break;case 4:n=kh;break;case 16:n=Xo;break;case 536870912:n=Ih;break;default:n=Xo}n=Qp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(Uo=-1,Mo=0,F&6)throw Error(k(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=Jo(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gs(e,r);else{t=r;var i=F;F|=2;var o=Vp();(ue!==e||de!==t)&&(mt=null,Ir=te()+500,Pn(e,t));do try{r0();break}catch(a){Wp(e,a)}while(1);bu(),hs.current=o,F=i,ie!==null?t=0:(ue=null,de=0,t=se)}if(t!==0){if(t===2&&(i=ml(e),i!==0&&(r=i,t=Hl(e,i))),t===1)throw n=Di,Pn(e,0),jt(e,r),Oe(e,te()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!t0(i)&&(t=gs(e,r),t===2&&(o=ml(e),o!==0&&(r=o,t=Hl(e,o))),t===1))throw n=Di,Pn(e,0),jt(e,r),Oe(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:En(e,Ce,mt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Yu+500-te(),10<t)){if(Jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(En.bind(null,e,Ce,mt),t);break}En(e,Ce,mt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e0(r/1960))-r,10<r){e.timeoutHandle=kl(En.bind(null,e,Ce,mt),r);break}En(e,Ce,mt);break;case 5:En(e,Ce,mt);break;default:throw Error(k(329))}}}return Oe(e,te()),e.callbackNode===n?Hp.bind(null,e):null}function Hl(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=gs(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Wl(t)),e}function Wl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function t0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Ku,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function bd(e){if(F&6)throw Error(k(327));pr();var t=Jo(e,0);if(!(t&1))return Oe(e,te()),null;var n=gs(e,t);if(e.tag!==0&&n===2){var r=ml(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=Di,Pn(e,0),jt(e,t),Oe(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Ce,mt),Oe(e,te()),null}function Qu(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Ir=te()+500,Ds&&hn())}}function Fn(e){Yt!==null&&Yt.tag===0&&!(F&6)&&pr();var t=F;F|=1;var n=He.transition,r=$;try{if(He.transition=null,$=1,e)return e()}finally{$=r,He.transition=n,F=t,!(F&6)&&hn()}}function Xu(){be=sr.current,q(sr)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Oy(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rs();break;case 3:Er(),q(xe),q(ge),$u();break;case 5:zu(r);break;case 4:Er();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Du(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(ue=e,ie=e=rn(e.current,null),de=be=t,se=0,Di=null,Ku=zs=Mn=0,Ce=fi=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Tn=null}return e}function Wp(e,t){do{var n=ie;try{if(bu(),Lo.current=fs,ds){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ds=!1}if(Un=0,ae=oe=X=null,ci=!1,Ni=0,qu.current=null,n===null||n.return===null){se=1,Di=t,ie=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Sd(s);if(v!==null){v.flags&=-257,Ed(v,s,a,o,t),v.mode&1&&wd(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){wd(o,u,t),Ju();break e}l=Error(k(426))}}else if(Y&&a.mode&1){var P=Sd(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Ed(P,s,a,o,t),Nu(kr(l,a));break e}}o=l=kr(l,a),se!==4&&(se=2),fi===null?fi=[o]:fi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Rp(o,l,t);hd(o,p);break e;case 1:a=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Pp(o,a,t);hd(o,g);break e}}o=o.return}while(o!==null)}qp(n)}catch(E){t=E,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function Vp(){var e=hs.current;return hs.current=fs,e===null?fs:e}function Ju(){(se===0||se===3||se===2)&&(se=4),ue===null||!(Mn&268435455)&&!(zs&268435455)||jt(ue,de)}function gs(e,t){var n=F;F|=2;var r=Vp();(ue!==e||de!==t)&&(mt=null,Pn(e,t));do try{n0();break}catch(i){Wp(e,i)}while(1);if(bu(),F=n,hs.current=r,ie!==null)throw Error(k(261));return ue=null,de=0,se}function n0(){for(;ie!==null;)Gp(ie)}function r0(){for(;ie!==null&&!Pv();)Gp(ie)}function Gp(e){var t=Yp(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?qp(e):ie=t,qu.current=null}function qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qy(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}else if(n=Yy(n,t,be),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function En(e,t,n){var r=$,i=He.transition;try{He.transition=null,$=1,i0(e,t,n,r)}finally{He.transition=i,$=r}return null}function i0(e,t,n,r){do pr();while(Yt!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fv(e,o),e===ue&&(ie=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Qp(Xo,function(){return pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=$;$=1;var a=F;F|=4,qu.current=null,Jy(e,n),Bp(n,e),Iy(Sl),Zo=!!wl,Sl=wl=null,e.current=n,Zy(n),xv(),F=a,$=s,He.transition=o}else e.current=n;if(wo&&(wo=!1,Yt=e,ms=i),o=e.pendingLanes,o===0&&(tn=null),Nv(n.stateNode),Oe(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ps)throw ps=!1,e=Bl,Bl=null,e;return ms&1&&e.tag!==0&&pr(),o=e.pendingLanes,o&1?e===jl?hi++:(hi=0,jl=e):hi=0,hn(),null}function pr(){if(Yt!==null){var e=Ch(ms),t=He.transition,n=$;try{if(He.transition=null,$=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,ms=0,F&6)throw Error(k(331));var i=F;for(F|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:di(8,d,o)}var f=d.child;if(f!==null)f.return=d,R=f;else for(;R!==null;){d=R;var m=d.sibling,v=d.return;if(Fp(d),d===u){R=null;break}if(m!==null){m.return=v,R=m;break}R=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var P=_.sibling;_.sibling=null,_=P}while(_!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){s=R;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,R=h;else e:for(s=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fs(9,a)}}catch(E){ee(a,a.return,E)}if(a===s){R=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,R=g;break e}R=a.return}}if(F=i,hn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(As,e)}catch{}r=!0}return r}finally{$=n,He.transition=t}}return!1}function Dd(e,t,n){t=kr(n,t),t=Rp(e,t,1),e=en(e,t,1),t=Ee(),e!==null&&(Wi(e,1,t),Oe(e,t))}function ee(e,t,n){if(e.tag===3)Dd(e,e,n);else for(;t!==null;){if(t.tag===3){Dd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=kr(n,e),e=Pp(t,e,1),t=en(t,e,1),e=Ee(),t!==null&&(Wi(t,1,e),Oe(t,e));break}}t=t.return}}function o0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>te()-Yu?Pn(e,0):Ku|=n),Oe(e,t)}function Kp(e,t){t===0&&(e.mode&1?(t=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):t=1);var n=Ee();e=Pt(e,t),e!==null&&(Wi(e,t,n),Oe(e,n))}function s0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function a0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Kp(e,n)}var Yp;Yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Ky(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Y&&t.flags&1048576&&Jh(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Do(e,t),e=t.pendingProps;var i=_r(t,ge.current);hr(t,n),i=ju(null,t,r,e,i,n);var o=Hu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,is(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mu(t),i.updater=Us,t.stateNode=i,i._reactInternals=t,Al(t,r,e,n),t=Ll(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Au(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=u0(r),e=Ye(r,e),i){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=Td(null,t,r,e,n);break e;case 11:t=kd(null,t,r,e,n);break e;case 14:t=Id(null,t,r,Ye(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Nl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Td(e,t,r,i,n);case 3:e:{if(Np(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,np(e,t),us(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(k(423)),t),t=Cd(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(k(424)),t),t=Cd(e,t,r,n,i);break e}else for(De=Zt(t.stateNode.containerInfo.firstChild),Ue=t,Y=!0,Xe=null,n=sp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=xt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return ap(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,El(r,i)?s=null:o!==null&&El(r,o)&&(t.flags|=32),Op(e,t),we(e,t,s,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Lp(e,t,n);case 4:return Fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),kd(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(as,r._currentValue),r._currentValue=s,o!==null)if(tt(o.value,s)){if(o.children===i.children&&!xe.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=We(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Id(e,t,r,i,n);case 15:return xp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Do(e,t),t.tag=1,Ae(r)?(e=!0,is(t)):e=!1,hr(t,n),ip(t,r,i),Al(t,r,i,n),Ll(null,t,r,!0,e,n);case 19:return bp(e,t,n);case 22:return Ap(e,t,n)}throw Error(k(156,t.tag))};function Qp(e,t){return Eh(e,t)}function l0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new l0(e,t,n,r)}function Zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u0(e){if(typeof e=="function")return Zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yu)return 11;if(e===_u)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Zu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qn:return xn(n.children,i,o,t);case vu:s=8,i|=8;break;case el:return e=je(12,n,t,i|2),e.elementType=el,e.lanes=o,e;case tl:return e=je(13,n,t,i),e.elementType=tl,e.lanes=o,e;case nl:return e=je(19,n,t,i),e.elementType=nl,e.lanes=o,e;case oh:return $s(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rh:s=10;break e;case ih:s=9;break e;case yu:s=11;break e;case _u:s=14;break e;case zt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xn(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function $s(e,t,n,r){return e=je(22,e,r,t),e.elementType=oh,e.lanes=n,e.stateNode={isHidden:!1},e}function Na(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function c0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,o,s,a,l){return e=new c0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(o),e}function d0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return cn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Qh(e,n,t)}return t}function Jp(e,t,n,r,i,o,s,a,l){return e=ec(n,r,!0,e,i,o,s,a,l),e.context=Xp(null),n=e.current,r=Ee(),i=nn(n),o=Tt(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,Wi(e,i,r),Oe(e,r),e}function Bs(e,t,n,r){var i=t.current,o=Ee(),s=nn(i);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,s),e!==null&&(Ze(e,i,s,o),No(e,i,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tc(e,t){Ud(e,t),(e=e.alternate)&&Ud(e,t)}function f0(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nc(e){this._internalRoot=e}js.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Bs(e,t,null,null)};js.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Bs(null,e,null,null)}),t[Rt]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=xh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Oh(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function h0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vs(s);o.call(u)}}var s=Jp(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=s,e[Rt]=s.current,Ri(e.nodeType===8?e.parentNode:e),Fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vs(l);a.call(u)}}var l=ec(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=l,e[Rt]=l.current,Ri(e.nodeType===8?e.parentNode:e),Fn(function(){Bs(t,l,n,r)}),l}function Ws(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=vs(s);a.call(l)}}Bs(t,s,e,i)}else s=h0(n,t,e,i,r);return vs(s)}Rh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ei(t.pendingLanes);n!==0&&(Eu(t,n|1),Oe(t,te()),!(F&6)&&(Ir=te()+500,hn()))}break;case 13:Fn(function(){var r=Pt(e,1);if(r!==null){var i=Ee();Ze(r,e,1,i)}}),tc(e,1)}};ku=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Ee();Ze(t,e,134217728,n)}tc(e,134217728)}};Ph=function(e){if(e.tag===13){var t=nn(e),n=Pt(e,t);if(n!==null){var r=Ee();Ze(n,e,t,r)}tc(e,t)}};xh=function(){return $};Ah=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};fl=function(e,t,n){switch(t){case"input":if(ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bs(r);if(!i)throw Error(k(90));ah(r),ol(r,i)}}}break;case"textarea":uh(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};gh=Qu;vh=Fn;var p0={usingClientEntryPoint:!1,Events:[Gi,er,bs,ph,mh,Qu]},Qr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m0={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wh(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||f0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{As=So.inject(m0),ut=So}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(t))throw Error(k(200));return d0(e,t,null,n)};Fe.createRoot=function(e,t){if(!rc(e))throw Error(k(299));var n=!1,r="",i=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Ri(e.nodeType===8?e.parentNode:e),new nc(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=wh(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Fn(e)};Fe.hydrate=function(e,t,n){if(!Hs(t))throw Error(k(200));return Ws(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,i,!1,o,s),e[Rt]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new js(t)};Fe.render=function(e,t,n){if(!Hs(t))throw Error(k(200));return Ws(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(k(40));return e._reactRootContainer?(Fn(function(){Ws(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Fe.unstable_batchedUpdates=Qu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hs(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ws(e,t,n,!1,r)};Fe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Fe})(fv);var Fd=Xa;Qa.createRoot=Fd.createRoot,Qa.hydrateRoot=Fd.hydrateRoot;const ic=b.createContext(null);/**
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
 */const em=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},g0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(em(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):g0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new v0;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class v0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y0=function(e){const t=em(e);return tm.encodeByteArray(t,!0)},ys=function(e){return y0(e).replace(/\./g,"")},nm=function(e){try{return tm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w0=()=>_0().__FIREBASE_DEFAULTS__,S0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},E0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nm(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return w0()||S0()||E0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rm=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},k0=e=>{const t=rm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},im=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},om=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class I0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function T0(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ys(JSON.stringify(n)),ys(JSON.stringify(s)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function C0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function R0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function P0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x0(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A0(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const N0="FirebaseError";class Nt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=N0,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?L0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Nt(i,a,r)}}function L0(e,t){return e.replace(b0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const b0=/\{\$([^}]+)}/g;function D0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _s(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(zd(o)&&zd(s)){if(!_s(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zd(e){return e!==null&&typeof e=="object"}/**
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
 */function Yi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ni(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ri(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function U0(e,t){const n=new M0(e,t);return n.subscribe.bind(n)}class M0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");F0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ba(){}/**
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
 */function ye(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class z0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new I0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(B0(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $0(e){return e===kn?void 0:e}function B0(e){return e.instantiationMode==="EAGER"}/**
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
 */class j0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new z0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const H0={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},W0=H.INFO,V0={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},G0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=V0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sm{constructor(t){this.name=t,this._logLevel=W0,this._logHandler=G0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?H0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const q0=(e,t)=>t.some(n=>e instanceof n);let $d,Bd;function K0(){return $d||($d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y0(){return Bd||(Bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const am=new WeakMap,Vl=new WeakMap,lm=new WeakMap,Da=new WeakMap,sc=new WeakMap;function Q0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(on(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&am.set(n,e)}).catch(()=>{}),sc.set(t,e),t}function X0(e){if(Vl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Vl.set(e,t)}let Gl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||lm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function J0(e){Gl=e(Gl)}function Z0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ua(this),t,...n);return lm.set(r,t.sort?t.sort():[t]),on(r)}:Y0().includes(e)?function(...t){return e.apply(Ua(this),t),on(am.get(this))}:function(...t){return on(e.apply(Ua(this),t))}}function e_(e){return typeof e=="function"?Z0(e):(e instanceof IDBTransaction&&X0(e),q0(e,K0())?new Proxy(e,Gl):e)}function on(e){if(e instanceof IDBRequest)return Q0(e);if(Da.has(e))return Da.get(e);const t=e_(e);return t!==e&&(Da.set(e,t),sc.set(t,e)),t}const Ua=e=>sc.get(e);function t_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=on(s);return r&&s.addEventListener("upgradeneeded",l=>{r(on(s.result),l.oldVersion,l.newVersion,on(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const n_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],Ma=new Map;function jd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ma.get(t))return Ma.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=r_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ma.set(t,o),o}J0(e=>({...e,get:(t,n,r)=>jd(t,n)||e.get(t,n,r),has:(t,n)=>!!jd(t,n)||e.has(t,n)}));/**
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
 */class i_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ql="@firebase/app",Hd="0.10.1";/**
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
 */const $n=new sm("@firebase/app"),s_="@firebase/app-compat",a_="@firebase/analytics-compat",l_="@firebase/analytics",u_="@firebase/app-check-compat",c_="@firebase/app-check",d_="@firebase/auth",f_="@firebase/auth-compat",h_="@firebase/database",p_="@firebase/database-compat",m_="@firebase/functions",g_="@firebase/functions-compat",v_="@firebase/installations",y_="@firebase/installations-compat",__="@firebase/messaging",w_="@firebase/messaging-compat",S_="@firebase/performance",E_="@firebase/performance-compat",k_="@firebase/remote-config",I_="@firebase/remote-config-compat",T_="@firebase/storage",C_="@firebase/storage-compat",R_="@firebase/firestore",P_="@firebase/firestore-compat",x_="firebase",A_="10.11.0";/**
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
 */const Kl="[DEFAULT]",O_={[ql]:"fire-core",[s_]:"fire-core-compat",[l_]:"fire-analytics",[a_]:"fire-analytics-compat",[c_]:"fire-app-check",[u_]:"fire-app-check-compat",[d_]:"fire-auth",[f_]:"fire-auth-compat",[h_]:"fire-rtdb",[p_]:"fire-rtdb-compat",[m_]:"fire-fn",[g_]:"fire-fn-compat",[v_]:"fire-iid",[y_]:"fire-iid-compat",[__]:"fire-fcm",[w_]:"fire-fcm-compat",[S_]:"fire-perf",[E_]:"fire-perf-compat",[k_]:"fire-rc",[I_]:"fire-rc-compat",[T_]:"fire-gcs",[C_]:"fire-gcs-compat",[R_]:"fire-fst",[P_]:"fire-fst-compat","fire-js":"fire-js",[x_]:"fire-js-all"};/**
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
 */const ws=new Map,N_=new Map,Yl=new Map;function Wd(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tr(e){const t=e.name;if(Yl.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;Yl.set(t,e);for(const n of ws.values())Wd(n,e);for(const n of N_.values())Wd(n,e);return!0}function ac(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wt(e){return e.settings!==void 0}/**
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
 */const L_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},sn=new Ki("app","Firebase",L_);/**
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
 */class b_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ur=A_;function um(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=im()),!n)throw sn.create("no-options");const o=ws.get(i);if(o){if(_s(n,o.options)&&_s(r,o.config))return o;throw sn.create("duplicate-app",{appName:i})}const s=new j0(i);for(const l of Yl.values())s.addComponent(l);const a=new b_(n,r,s);return ws.set(i,a),a}function cm(e=Kl){const t=ws.get(e);if(!t&&e===Kl&&im())return um();if(!t)throw sn.create("no-app",{appName:e});return t}function an(e,t,n){var r;let i=(r=O_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}Tr(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const D_="firebase-heartbeat-database",U_=1,Ui="firebase-heartbeat-store";let Fa=null;function dm(){return Fa||(Fa=t_(D_,U_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ui)}catch(n){console.warn(n)}}}}).catch(e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})})),Fa}async function M_(e){try{const n=(await dm()).transaction(Ui),r=await n.objectStore(Ui).get(fm(e));return await n.done,r}catch(t){if(t instanceof Nt)$n.warn(t.message);else{const n=sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(n.message)}}}async function Vd(e,t){try{const r=(await dm()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(t,fm(e)),await r.done}catch(n){if(n instanceof Nt)$n.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function fm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const F_=1024,z_=30*24*60*60*1e3;class $_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=z_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gd(),{heartbeatsToSend:r,unsentEntries:i}=B_(this._heartbeatsCache.heartbeats),o=ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Gd(){return new Date().toISOString().substring(0,10)}function B_(e,t=F_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),qd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A0()?O0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await M_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qd(e){return ys(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function H_(e){Tr(new zn("platform-logger",t=>new i_(t),"PRIVATE")),Tr(new zn("heartbeat",t=>new $_(t),"PRIVATE")),an(ql,Hd,e),an(ql,Hd,"esm2017"),an("fire-js","")}H_("");var W_="firebase",V_="10.11.0";/**
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
 */an(W_,V_,"app");function lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function hm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G_=hm,pm=new Ki("auth","Firebase",hm());/**
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
 */const Ss=new sm("@firebase/auth");function q_(e,...t){Ss.logLevel<=H.WARN&&Ss.warn(`Auth (${Ur}): ${e}`,...t)}function zo(e,...t){Ss.logLevel<=H.ERROR&&Ss.error(`Auth (${Ur}): ${e}`,...t)}/**
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
 */function nt(e,...t){throw uc(e,...t)}function dt(e,...t){return uc(e,...t)}function mm(e,t,n){const r=Object.assign(Object.assign({},G_()),{[t]:n});return new Ki("auth","Firebase",r).create(t,{appName:e.name})}function ln(e){return mm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return pm.create(e,...t)}function A(e,t,...n){if(!e)throw uc(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw zo(t),new Error(t)}function At(e,t){e||St(t)}/**
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
 */function Ql(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function K_(){return Kd()==="http:"||Kd()==="https:"}function Kd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K_()||R0()||"connection"in navigator)?navigator.onLine:!0}function Q_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Qi{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=C0()||P0()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cc(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class gm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const X_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const J_=new Qi(3e4,6e4);function Vn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function pn(e,t,n,r,i={}){return vm(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Yi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),gm.fetch()(ym(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function vm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},X_),t);try{const i=new ew(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Eo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Eo(e,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mm(e,d,u);nt(e,d)}}catch(i){if(i instanceof Nt)throw i;nt(e,"network-request-failed",{message:String(i)})}}async function Vs(e,t,n,r,i={}){const o=await pn(e,t,n,r,i);return"mfaPendingCredential"in o&&nt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ym(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}function Z_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ew{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),J_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(e,t,r);return i.customData._tokenResponse=n,i}function Yd(e){return e!==void 0&&e.enterprise!==void 0}class tw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Z_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function nw(e,t){return pn(e,"GET","/v2/recaptchaConfig",Vn(e,t))}/**
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
 */async function rw(e,t){return pn(e,"POST","/v1/accounts:delete",t)}async function _m(e,t){return pn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function pi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iw(e,t=!1){const n=ye(e),r=await n.getIdToken(t),i=dc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:pi(za(i.auth_time)),issuedAtTime:pi(za(i.iat)),expirationTime:pi(za(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function za(e){return Number(e)*1e3}function dc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const i=nm(n);return i?JSON.parse(i):(zo("Failed to decode base64 JWT payload"),null)}catch(i){return zo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qd(e){const t=dc(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Mi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Nt&&ow(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ow({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class sw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Mi(e,_m(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?wm(o.providerUserInfo):[],a=lw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xl(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function aw(e){const t=ye(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function wm(e){return e.map(t=>{var{providerId:n}=t,r=lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uw(e,t){const n=await vm(e,{},async()=>{const r=Yi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ym(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cw(e,t){return pn(e,"POST","/v2/accounts:revokeToken",Vn(e,t))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Qd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=Qd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await uw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new mr;return r&&(A(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
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
 */function Mt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Et{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iw(this,t)}reload(){return aw(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Et(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ln(this.auth));const t=await this.getIdToken();return await Mi(this,rw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:w}=n;A(h&&w,t,"internal-error");const T=mr.fromJSON(this.name,w);A(typeof h=="string",t,"internal-error"),Mt(f,t.name),Mt(m,t.name),A(typeof g=="boolean",t,"internal-error"),A(typeof E=="boolean",t,"internal-error"),Mt(v,t.name),Mt(y,t.name),Mt(_,t.name),Mt(P,t.name),Mt(p,t.name),Mt(c,t.name);const M=new Et({uid:h,auth:t,email:m,emailVerified:g,displayName:f,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:T,createdAt:p,lastLoginAt:c});return S&&Array.isArray(S)&&(M.providerData=S.map(D=>Object.assign({},D))),P&&(M._redirectEventId=P),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new mr;i.updateFromServerResponse(n);const o=new Et({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Es(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?wm(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new mr;a.updateFromIdToken(r);const l=new Et({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Xd=new Map;function kt(e){At(e instanceof Function,"Expected a class definition");let t=Xd.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xd.set(e,t),t)}/**
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
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Sm.type="NONE";const Jd=Sm;/**
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
 */function $o(e,t,n){return`firebase:${e}:${t}:${n}`}class gr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,o),this.fullPersistenceKey=$o("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Et._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new gr(kt(Jd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||kt(Jd);const s=$o(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=Et._fromJSON(t,d);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new gr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new gr(o,t,r))}}/**
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
 */function Zd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Im(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Em(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cm(t))return"Blackberry";if(Rm(t))return"Webos";if(fc(t))return"Safari";if((t.includes("chrome/")||km(t))&&!t.includes("edge/"))return"Chrome";if(Tm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Em(e=ve()){return/firefox\//i.test(e)}function fc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function km(e=ve()){return/crios\//i.test(e)}function Im(e=ve()){return/iemobile/i.test(e)}function Tm(e=ve()){return/android/i.test(e)}function Cm(e=ve()){return/blackberry/i.test(e)}function Rm(e=ve()){return/webos/i.test(e)}function Gs(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dw(e=ve()){var t;return Gs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function fw(){return x0()&&document.documentMode===10}function Pm(e=ve()){return Gs(e)||Tm(e)||Rm(e)||Cm(e)||/windows phone/i.test(e)||Im(e)}function hw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xm(e,t=[]){let n;switch(e){case"Browser":n=Zd(ve());break;case"Worker":n=`${Zd(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
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
 */class pw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mw(e,t={}){return pn(e,"GET","/v2/passwordPolicy",Vn(e,t))}/**
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
 */const gw=6;class vw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:gw,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class yw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await _m(this,{idToken:t}),r=await Et._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(wt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Q_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(wt(this.app))return Promise.reject(ln(this));const n=t?ye(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return wt(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mw(this),n=new vw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ki("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&q_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(e){return ye(e)}class ef{constructor(t){this.auth=t,this.observer=null,this.addObserver=U0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _w(e){qs=e}function Am(e){return qs.loadJS(e)}function ww(){return qs.recaptchaEnterpriseScript}function Sw(){return qs.gapiScript}function Ew(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const kw="recaptcha-enterprise",Iw="NO_RECAPTCHA";class Tw{constructor(t){this.type=kw,this.auth=Mr(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{nw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tw(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Yd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Iw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Yd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ww();l.length!==0&&(l+=a),Am(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function tf(e,t,n,r=!1){const i=new Tw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function nf(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await tf(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
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
 */function Cw(e,t){const n=ac(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(_s(o,t??{}))return i;nt(i,"already-initialized")}return n.initialize({options:t})}function Rw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Pw(e,t,n){const r=Mr(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Om(t),{host:s,port:a}=xw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Aw()}function Om(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xw(e){const t=Om(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:rf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:rf(s)}}}function rf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Aw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class hc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}async function Ow(e,t){return pn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Nw(e,t){return Vs(e,"POST","/v1/accounts:signInWithPassword",Vn(e,t))}/**
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
 */async function Lw(e,t){return Vs(e,"POST","/v1/accounts:signInWithEmailLink",Vn(e,t))}async function bw(e,t){return Vs(e,"POST","/v1/accounts:signInWithEmailLink",Vn(e,t))}/**
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
 */class Fi extends hc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Fi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Fi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(t,n,"signInWithPassword",Nw);case"emailLink":return Lw(t,{email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(t,r,"signUpPassword",Ow);case"emailLink":return bw(t,{idToken:n,email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function vr(e,t){return Vs(e,"POST","/v1/accounts:signInWithIdp",Vn(e,t))}/**
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
 */const Dw="http://localhost";class Bn extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Bn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return vr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,vr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,vr(t,n)}buildRequest(){const t={requestUri:Dw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yi(n)}return t}}/**
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
 */function Uw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mw(e){const t=ni(ri(e)).link,n=t?ni(ri(t)).deep_link_id:null,r=ni(ri(e)).deep_link_id;return(r?ni(ri(r)).link:null)||r||n||t||e}class pc{constructor(t){var n,r,i,o,s,a;const l=ni(ri(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Uw((i=l.mode)!==null&&i!==void 0?i:null);A(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Mw(t);try{return new pc(n)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(t,n){return Fi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pc.parseLink(n);return A(r,"argument-error"),Fi._fromEmailAndCode(t,r.code,r.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xi extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Xi{constructor(){super("facebook.com")}static credential(t){return Bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class Vt extends Xi{constructor(){super("github.com")}static credential(t){return Bn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class Gt extends Xi{constructor(){super("twitter.com")}static credential(t,n){return Bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
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
 */class Cr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Et._fromIdTokenResponse(t,r,i),s=of(r);return new Cr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=of(r);return new Cr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function of(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ks extends Nt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ks(t,n,r,i)}}function Lm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(e,o,t,r):o})}async function Fw(e,t,n=!1){const r=await Mi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Cr._forOperation(e,"link",r)}/**
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
 */async function zw(e,t,n=!1){const{auth:r}=e;if(wt(r.app))return Promise.reject(ln(r));const i="reauthenticate";try{const o=await Mi(e,Lm(r,i,t,e),n);A(o.idToken,r,"internal-error");const s=dc(o.idToken);A(s,r,"internal-error");const{sub:a}=s;return A(e.uid===a,r,"user-mismatch"),Cr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),o}}/**
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
 */async function bm(e,t,n=!1){if(wt(e.app))return Promise.reject(ln(e));const r="signIn",i=await Lm(e,r,t),o=await Cr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function $w(e,t){return bm(Mr(e),t)}/**
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
 */async function Bw(e){const t=Mr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function jw(e,t,n){return wt(e.app)?Promise.reject(ln(e)):$w(ye(e),Fr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bw(e),r})}function Hw(e,t,n,r){return ye(e).onIdTokenChanged(t,n,r)}function Ww(e,t,n){return ye(e).beforeAuthStateChanged(t,n)}function Vw(e,t,n,r){return ye(e).onAuthStateChanged(t,n,r)}const Is="__sak";/**
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
 */class Dm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Is,"1"),this.storage.removeItem(Is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Gw(){const e=ve();return fc(e)||Gs(e)}const qw=1e3,Kw=10;class Um extends Dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gw()&&hw(),this.fallbackToPolling=Pm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);fw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Kw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Um.type="LOCAL";const Yw=Um;/**
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
 */class Mm extends Dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Mm.type="SESSION";const Fm=Mm;/**
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
 */function Qw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ks{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ks(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Qw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ks.receivers=[];/**
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
 */function mc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Xw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=mc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ft(){return window}function Jw(e){ft().location.href=e}/**
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
 */function zm(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function Zw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function t1(){return zm()?self:null}/**
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
 */const $m="firebaseLocalStorageDb",n1=1,Ts="firebaseLocalStorage",Bm="fbase_key";class Ji{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ys(e,t){return e.transaction([Ts],t?"readwrite":"readonly").objectStore(Ts)}function r1(){const e=indexedDB.deleteDatabase($m);return new Ji(e).toPromise()}function Jl(){const e=indexedDB.open($m,n1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ts,{keyPath:Bm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ts)?t(r):(r.close(),await r1(),t(await Jl()))})})}async function sf(e,t,n){const r=Ys(e,!0).put({[Bm]:t,value:n});return new Ji(r).toPromise()}async function i1(e,t){const n=Ys(e,!1).get(t),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function af(e,t){const n=Ys(e,!0).delete(t);return new Ji(n).toPromise()}const o1=800,s1=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>s1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ks._getInstance(t1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Zw(),!this.activeServiceWorker)return;this.sender=new Xw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||e1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Jl();return await sf(t,Is,"1"),await af(t,Is),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>i1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ys(i,!1).getAll();return new Ji(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const a1=jm;new Qi(3e4,6e4);/**
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
 */function l1(e,t){return t?kt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class gc extends hc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return vr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function u1(e){return bm(e.auth,new gc(e),e.bypassAuthState)}function c1(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),zw(n,new gc(e),e.bypassAuthState)}async function d1(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),Fw(n,new gc(e),e.bypassAuthState)}/**
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
 */class Hm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return u1;case"linkViaPopup":case"linkViaRedirect":return d1;case"reauthViaPopup":case"reauthViaRedirect":return c1;default:nt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const f1=new Qi(2e3,1e4);class ar extends Hm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,f1.get())};t()}}ar.currentPopupAction=null;/**
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
 */const h1="pendingRedirect",Bo=new Map;class p1 extends Hm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Bo.get(this.auth._key());if(!t){try{const r=await m1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Bo.set(this.auth._key(),t)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m1(e,t){const n=y1(t),r=v1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function g1(e,t){Bo.set(e._key(),t)}function v1(e){return kt(e._redirectPersistence)}function y1(e){return $o(h1,e.config.apiKey,e.name)}async function _1(e,t,n=!1){if(wt(e.app))return Promise.reject(ln(e));const r=Mr(e),i=l1(r,t),s=await new p1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const w1=10*60*1e3;class S1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!E1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Wm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=w1&&this.cachedEventUids.clear(),this.cachedEventUids.has(lf(t))}saveEventToCache(t){this.cachedEventUids.add(lf(t)),this.lastProcessedEventTime=Date.now()}}function lf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Wm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function E1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wm(e);default:return!1}}/**
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
 */async function k1(e,t={}){return pn(e,"GET","/v1/projects",t)}/**
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
 */const I1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T1=/^https?/;async function C1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await k1(e);for(const n of t)try{if(R1(n))return}catch{}nt(e,"unauthorized-domain")}function R1(e){const t=Ql(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!T1.test(n))return!1;if(I1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const P1=new Qi(3e4,6e4);function uf(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function x1(e){return new Promise((t,n)=>{var r,i,o;function s(){uf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uf(),n(dt(e,"network-request-failed"))},timeout:P1.get()})}if(!((i=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ft().gapi)===null||o===void 0)&&o.load)s();else{const a=Ew("iframefcb");return ft()[a]=()=>{gapi.load?s():n(dt(e,"network-request-failed"))},Am(`${Sw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw jo=null,t})}let jo=null;function A1(e){return jo=jo||x1(e),jo}/**
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
 */const O1=new Qi(5e3,15e3),N1="__/auth/iframe",L1="emulator/auth/iframe",b1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U1(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,L1):`https://${e.config.authDomain}/${N1}`,r={apiKey:t.apiKey,appName:e.name,v:Ur},i=D1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Yi(r).slice(1)}`}async function M1(e){const t=await A1(e),n=ft().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:U1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=dt(e,"network-request-failed"),a=ft().setTimeout(()=>{o(s)},O1.get());function l(){ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const F1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z1=500,$1=600,B1="_blank",j1="http://localhost";class cf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H1(e,t,n,r=z1,i=$1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},F1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ve().toLowerCase();n&&(a=km(u)?B1:n),Em(u)&&(t=t||j1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(dw(u)&&a!=="_self")return W1(t||"",a),new cf(null);const f=window.open(t||"",a,d);A(f,e,"popup-blocked");try{f.focus()}catch{}return new cf(f)}function W1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const V1="__/auth/handler",G1="emulator/auth/handler",q1=encodeURIComponent("fac");async function df(e,t,n,r,i,o){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(t instanceof Nm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",D0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(t instanceof Xi){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${q1}=${encodeURIComponent(l)}`:"";return`${K1(e)}?${Yi(a).slice(1)}${u}`}function K1({config:e}){return e.emulator?cc(e,G1):`https://${e.authDomain}/${V1}`}/**
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
 */const $a="webStorageSupport";class Y1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=_1,this._overrideRedirectResult=g1}async _openPopup(t,n,r,i){var o;At((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await df(t,n,r,Ql(),i);return H1(t,s,mc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await df(t,n,r,Ql(),i);return Jw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(At(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await M1(t),r=new S1(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($a,{type:$a},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[$a];s!==void 0&&n(!!s),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pm()||fc()||Gs()}}const Q1=Y1;var ff="@firebase/auth",hf="1.7.1";/**
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
 */class X1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function J1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z1(e){Tr(new zn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;A(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xm(e)},u=new yw(r,i,o,l);return Rw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tr(new zn("auth-internal",t=>{const n=Mr(t.getProvider("auth").getImmediate());return(r=>new X1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(ff,hf,J1(e)),an(ff,hf,"esm2017")}/**
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
 */const eS=5*60,tS=om("authIdTokenMaxAge")||eS;let pf=null;const nS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tS)return;const i=n==null?void 0:n.token;pf!==i&&(pf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rS(e=cm()){const t=ac(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Cw(e,{popupRedirectResolver:Q1,persistence:[a1,Yw,Fm]}),r=om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=nS(o.toString());Ww(n,s,()=>s(n.currentUser)),Hw(n,a=>s(a))}}const i=rm("auth");return i&&Pw(n,`http://${i}`),n}function iS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}_w({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=dt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",iS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z1("Browser");const oS={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},Vm=um(oS),vc=rS(Vm),sS=async(e,t)=>{try{return await jw(vc,e,t)}catch{return{error:!0,type:"Something went wrong"}}},aS=({children:e})=>{const[t,n]=b.useState(null);return b.useEffect(()=>{Vw(vc,r=>{n(r)})},[]),I(ic.Provider,{value:t,children:e})},lS="modulepreload",uS=function(e,t){return new URL(e,t).href},mf={},cS=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=uS(o,r),o in mf)return;mf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":lS,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},gf=""+new URL("awcy-ad680841.mp3",import.meta.url).href,dS=""+new URL("tee-647bc5ea.png",import.meta.url).href;/**
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
 */const Gm="firebasestorage.googleapis.com",qm="storageBucket",fS=2*60*1e3,hS=10*60*1e3,pS=1e3;/**
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
 */class Z extends Nt{constructor(t,n,r=0){super(Ba(t),`Firebase Storage: ${n} (${Ba(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ba(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function Ba(e){return"storage/"+e}function yc(){const e="An unknown error occurred, please check the error payload for server response.";return new Z(K.UNKNOWN,e)}function mS(e){return new Z(K.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function gS(e){return new Z(K.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(K.UNAUTHENTICATED,e)}function yS(){return new Z(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _S(e){return new Z(K.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Km(){return new Z(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ym(){return new Z(K.CANCELED,"User canceled the upload/download.")}function wS(e){return new Z(K.INVALID_URL,"Invalid URL '"+e+"'.")}function SS(e){return new Z(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function ES(){return new Z(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qm+"' property when initializing the app?")}function Qm(){return new Z(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kS(){return new Z(K.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function IS(){return new Z(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TS(e){return new Z(K.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zl(e){return new Z(K.INVALID_ARGUMENT,e)}function Xm(){return new Z(K.APP_DELETED,"The Firebase app was deleted.")}function CS(e){return new Z(K.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mi(e,t){return new Z(K.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Xr(e){throw new Z(K.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class Se{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Se.makeFromUrl(t,n)}catch{return new Se(t,"")}if(r.path==="")return r;throw SS(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===Gm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${P}`,"i"),h=[{regex:a,indices:l,postModify:o},{regex:v,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<h.length;g++){const E=h[g],S=E.regex.exec(t);if(S){const w=S[E.indices.bucket];let T=S[E.indices.path];T||(T=""),r=new Se(w,T),E.postModify(r);break}}if(r==null)throw wS(t);return r}}class RS{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function PS(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function d(...P){u||(u=!0,t.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,e(v,l())},P)}function m(){o&&clearTimeout(o)}function v(P,...p){if(u){m();return}if(P){m(),d.call(null,P,...p);return}if(l()||s){m(),d.call(null,P,...p);return}r<64&&(r*=2);let h;a===1?(a=2,h=0):h=(r+Math.random())*1e3,f(h)}let y=!1;function _(P){y||(y=!0,m(),!u&&(i!==null?(P||(a=2),clearTimeout(i),f(0)):P||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,_(!0)},n),_}function xS(e){e(!1)}/**
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
 */function AS(e){return e!==void 0}function OS(e){return typeof e=="function"}function NS(e){return typeof e=="object"&&!Array.isArray(e)}function Qs(e){return typeof e=="string"||e instanceof String}function vf(e){return _c()&&e instanceof Blob}function _c(){return typeof Blob<"u"}function eu(e,t,n,r){if(r<t)throw Zl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Zl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function mn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Jm(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var An;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(An||(An={}));/**
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
 */function Zm(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class LS{constructor(t,n,r,i,o,s,a,l,u,d,f,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ko(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===An.NO_ERROR,l=o.getStatus();if(!a||Zm(l,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===An.ABORT;r(!1,new ko(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ko(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());AS(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=yc();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Xm():Ym();s(l)}else{const l=Km();s(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=PS(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&xS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function bS(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function DS(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function US(e,t){t&&(e["X-Firebase-GMPID"]=t)}function MS(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function FS(e,t,n,r,i,o,s=!0){const a=Jm(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return US(u,t),bS(u,n),DS(u,o),MS(u,r),new LS(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function zS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $S(...e){const t=zS();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(_c())return new Blob(e);throw new Z(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BS(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function jS(e){if(typeof atob>"u")throw TS("base-64");return atob(e)}/**
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
 */const lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ja{constructor(t,n){this.data=t,this.contentType=n||null}}function HS(e,t){switch(e){case lt.RAW:return new ja(eg(t));case lt.BASE64:case lt.BASE64URL:return new ja(tg(e,t));case lt.DATA_URL:return new ja(VS(t),GS(t))}throw yc()}function eg(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,s=e.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function WS(e){let t;try{t=decodeURIComponent(e)}catch{throw mi(lt.DATA_URL,"Malformed data URL.")}return eg(t)}function tg(e,t){switch(e){case lt.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw mi(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case lt.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw mi(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jS(t)}catch(i){throw i.message.includes("polyfill")?i:mi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ng{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw mi(lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function VS(e){const t=new ng(e);return t.base64?tg(lt.BASE64,t.rest):WS(t.rest)}function GS(e){return new ng(e).contentType}function qS(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class qt{constructor(t,n){let r=0,i="";vf(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(vf(this.data_)){const r=this.data_,i=BS(r,t,n);return i===null?null:new qt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new qt(r,!0)}}static getBlob(...t){if(_c()){const n=t.map(r=>r instanceof qt?r.data_:r);return new qt($S.apply(null,n))}else{const n=t.map(s=>Qs(s)?HS(lt.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new qt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function wc(e){let t;try{t=JSON.parse(e)}catch{return null}return NS(t)?t:null}/**
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
 */function KS(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function YS(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function rg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function QS(e,t){return t}class _e{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||QS}}let Io=null;function XS(e){return!Qs(e)||e.length<2?e:rg(e)}function Xs(){if(Io)return Io;const e=[];e.push(new _e("bucket")),e.push(new _e("generation")),e.push(new _e("metageneration")),e.push(new _e("name","fullPath",!0));function t(o,s){return XS(s)}const n=new _e("name");n.xform=t,e.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new _e("size");return i.xform=r,e.push(i),e.push(new _e("timeCreated")),e.push(new _e("updated")),e.push(new _e("md5Hash",null,!0)),e.push(new _e("cacheControl",null,!0)),e.push(new _e("contentDisposition",null,!0)),e.push(new _e("contentEncoding",null,!0)),e.push(new _e("contentLanguage",null,!0)),e.push(new _e("contentType",null,!0)),e.push(new _e("metadata","customMetadata",!0)),Io=e,Io}function JS(e,t){function n(){const r=e.bucket,i=e.fullPath,o=new Se(r,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function ZS(e,t,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,t[s.server])}return JS(r,e),r}function ig(e,t,n){const r=wc(t);return r===null?null:ZS(e,r,n)}function eE(e,t,n,r){const i=wc(t);if(i===null||!Qs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const d=e.bucket,f=e.fullPath,m="/b/"+s(d)+"/o/"+s(f),v=mn(m,n,r),y=Jm({alt:"media",token:u});return v+y})[0]}function Sc(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const yf="prefixes",_f="items";function tE(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[yf])for(const i of n[yf]){const o=i.replace(/\/$/,""),s=e._makeStorageReference(new Se(t,o));r.prefixes.push(s)}if(n[_f])for(const i of n[_f]){const o=e._makeStorageReference(new Se(t,i.name));r.items.push(o)}return r}function nE(e,t,n){const r=wc(n);return r===null?null:tE(e,t,r)}class Lt{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ht(e){if(!e)throw yc()}function Js(e,t){function n(r,i){const o=ig(e,i,t);return ht(o!==null),o}return n}function rE(e,t){function n(r,i){const o=nE(e,t,i);return ht(o!==null),o}return n}function iE(e,t){function n(r,i){const o=ig(e,i,t);return ht(o!==null),eE(o,i,e.host,e._protocol)}return n}function zr(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=yS():i=vS():n.getStatus()===402?i=gS(e.bucket):n.getStatus()===403?i=_S(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function Zs(e){const t=zr(e);function n(r,i){let o=t(r,i);return r.getStatus()===404&&(o=mS(e.path)),o.serverResponse=i.serverResponse,o}return n}function og(e,t,n){const r=t.fullServerUrl(),i=mn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Lt(i,o,Js(e,n),s);return a.errorHandler=Zs(t),a}function oE(e,t,n,r,i){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=t.bucketOnlyServerUrl(),a=mn(s,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,d=new Lt(a,l,rE(e,t.bucket),u);return d.urlParams=o,d.errorHandler=zr(t),d}function sE(e,t,n){const r=t.fullServerUrl(),i=mn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Lt(i,o,iE(e,n),s);return a.errorHandler=Zs(t),a}function aE(e,t,n,r){const i=t.fullServerUrl(),o=mn(i,e.host,e._protocol),s="PATCH",a=Sc(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,d=new Lt(o,s,Js(e,r),u);return d.headers=l,d.body=a,d.errorHandler=Zs(t),d}function lE(e,t){const n=t.fullServerUrl(),r=mn(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(l,u){}const a=new Lt(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=Zs(t),a}function uE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function sg(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=uE(null,t)),r}function cE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let h="";for(let g=0;g<2;g++)h=h+Math.random().toString().slice(2);return h}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=sg(t,r,i),d=Sc(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=qt.getBlob(f,r,m);if(v===null)throw Qm();const y={name:u.fullPath},_=mn(o,e.host,e._protocol),P="POST",p=e.maxUploadRetryTime,c=new Lt(_,P,Js(e,n),p);return c.urlParams=y,c.headers=s,c.body=v.uploadData(),c.errorHandler=zr(t),c}class Cs{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ec(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{ht(!1)}return ht(!!n&&(t||["active"]).indexOf(n)!==-1),n}function dE(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=sg(t,r,i),a={name:s.fullPath},l=mn(o,e.host,e._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},f=Sc(s,n),m=e.maxUploadRetryTime;function v(_){Ec(_);let P;try{P=_.getResponseHeader("X-Goog-Upload-URL")}catch{ht(!1)}return ht(Qs(P)),P}const y=new Lt(l,u,v,m);return y.urlParams=a,y.headers=d,y.body=f,y.errorHandler=zr(t),y}function fE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const d=Ec(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ht(!1)}f||ht(!1);const m=Number(f);return ht(!isNaN(m)),new Cs(m,r.size(),d==="final")}const s="POST",a=e.maxUploadRetryTime,l=new Lt(n,s,o,a);return l.headers=i,l.errorHandler=zr(t),l}const wf=256*1024;function hE(e,t,n,r,i,o,s,a){const l=new Cs(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw kS();const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const f=l.current,m=f+d;let v="";d===0?v="finalize":u===d?v="upload, finalize":v="upload";const y={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(f,m);if(_===null)throw Qm();function P(g,E){const S=Ec(g,["active","final"]),w=l.current+d,T=r.size();let M;return S==="final"?M=Js(t,o)(g,E):M=null,new Cs(w,T,S==="final",M)}const p="POST",c=t.maxUploadRetryTime,h=new Lt(n,p,P,c);return h.headers=y,h.body=_.uploadData(),h.progressCallback=a||null,h.errorHandler=zr(e),h}const Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ha(e){switch(e){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;case"error":return Te.ERROR;default:return Te.ERROR}}/**
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
 */class pE{constructor(t,n,r){if(OS(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function qn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class mE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=An.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=An.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=An.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Xr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class gE extends mE{initXhr(){this.xhr_.responseType="text"}}function at(){return new gE}/**
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
 */class vE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=Xs(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(K.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Zm(i.status,[]))if(o)i=Km();else{this.sleepTime=Math.max(this.sleepTime*2,pS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(K.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=dE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,at,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=fE(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,at,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=wf*this._chunkMultiplier,n=new Cs(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=hE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,at,i,o,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){wf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=og(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,at,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=cE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,at,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Ym(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ha(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const o=new pE(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ha(this._state)){case Te.SUCCESS:qn(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:const n=this._reject;qn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ha(this._state)){case Te.RUNNING:case Te.PAUSED:t.next&&qn(t.next.bind(t,this.snapshot))();break;case Te.SUCCESS:t.complete&&qn(t.complete.bind(t))();break;case Te.CANCELED:case Te.ERROR:t.error&&qn(t.error.bind(t,this._error))();break;default:t.error&&qn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class jn{constructor(t,n){this._service=t,n instanceof Se?this._location=n:this._location=Se.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new jn(t,n)}get root(){const t=new Se(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rg(this._location.path)}get storage(){return this._service}get parent(){const t=KS(this._location.path);if(t===null)return null;const n=new Se(this._location.bucket,t);return new jn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw CS(t)}}function yE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new vE(e,new qt(t),n)}function _E(e){const t={prefixes:[],items:[]};return ag(e,t).then(()=>t)}async function ag(e,t,n){const i=await wE(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await ag(e,t,i.nextPageToken)}function wE(e,t){t!=null&&typeof t.maxResults=="number"&&eu("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=oE(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,at)}function SE(e){e._throwIfRoot("getMetadata");const t=og(e.storage,e._location,Xs());return e.storage.makeRequestWithTokens(t,at)}function EE(e,t){e._throwIfRoot("updateMetadata");const n=aE(e.storage,e._location,t,Xs());return e.storage.makeRequestWithTokens(n,at)}function kE(e){e._throwIfRoot("getDownloadURL");const t=sE(e.storage,e._location,Xs());return e.storage.makeRequestWithTokens(t,at).then(n=>{if(n===null)throw IS();return n})}function IE(e){e._throwIfRoot("deleteObject");const t=lE(e.storage,e._location);return e.storage.makeRequestWithTokens(t,at)}function TE(e,t){const n=YS(e._location.path,t),r=new Se(e._location.bucket,n);return new jn(e.storage,r)}/**
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
 */function CE(e){return/^[A-Za-z]+:\/\//.test(e)}function RE(e,t){return new jn(e,t)}function lg(e,t){if(e instanceof kc){const n=e;if(n._bucket==null)throw ES();const r=new jn(n,n._bucket);return t!=null?lg(r,t):r}else return t!==void 0?TE(e,t):e}function PE(e,t){if(t&&CE(t)){if(e instanceof kc)return RE(e,t);throw Zl("To use ref(service, url), the first argument must be a Storage instance.")}else return lg(e,t)}function Sf(e,t){const n=t==null?void 0:t[qm];return n==null?null:Se.makeFromBucketSpec(n,e)}function xE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:T0(i,e.app.options.projectId))}class kc{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Gm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fS,this._maxUploadRetryTime=hS,this._requests=new Set,i!=null?this._bucket=Se.makeFromBucketSpec(i,this._host):this._bucket=Sf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Se.makeFromBucketSpec(this._url,t):this._bucket=Sf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){eu("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){eu("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new jn(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new RS(Xm());{const s=FS(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Ef="@firebase/storage",kf="0.12.4";/**
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
 */const ug="storage";function AE(e,t,n){return e=ye(e),yE(e,t,n)}function OE(e){return e=ye(e),SE(e)}function NE(e,t){return e=ye(e),EE(e,t)}function LE(e){return e=ye(e),_E(e)}function cg(e){return e=ye(e),kE(e)}function bE(e){return e=ye(e),IE(e)}function zi(e,t){return e=ye(e),PE(e,t)}function DE(e=cm(),t){e=ye(e);const r=ac(e,ug).getImmediate({identifier:t}),i=k0("storage");return i&&UE(r,...i),r}function UE(e,t,n,r={}){xE(e,t,n,r)}function ME(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new kc(n,r,i,t,Ur)}function FE(){Tr(new zn(ug,ME,"PUBLIC").setMultipleInstances(!0)),an(Ef,kf,""),an(Ef,kf,"esm2017")}FE();const $i=DE(Vm),zE=async(e,t)=>{const n=zi($i,t.name);return await AE(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t}).then(async o=>{const s=await cg(o.ref),a=o.metadata;return{downloadUrl:s,metadata:a}})},$E=async()=>{const t=(await LE(zi($i))).items.map(async r=>{const i=zi($i,r.fullPath),o=await cg(i),s=await OE(i);return{downloadUrl:o,metadata:s}});return await Promise.all(t)},UI=async e=>{const t=zi($i,e);await bE(t)},MI=async(e,t)=>{const n=zi($i,e);await NE(n,{customMetadata:{caption:t}})};var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function Bi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",gi="-moz-",z="-webkit-",dg="comm",ea="rule",Ic="decl",BE="@import",fg="@keyframes",jE="@layer",hg=Math.abs,Tc=String.fromCharCode,tu=Object.assign;function HE(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function pg(e){return e.trim()}function gt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Ho(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function Rr(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function mg(e){return e.length}function ii(e,t){return t.push(e),e}function WE(e,t){return e.map(t).join("")}function If(e,t){return e.filter(function(n){return!gt(n,t)})}var ta=1,Pr=1,gg=0,Ge=0,re=0,$r="";function na(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ta,column:Pr,length:s,return:"",siblings:a}}function Ft(e,t){return tu(na("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Ft(e.root,{children:[e]});ii(e,e.siblings)}function VE(){return re}function GE(){return re=Ge>0?le($r,--Ge):0,Pr--,re===10&&(Pr=1,ta--),re}function et(){return re=Ge<gg?le($r,Ge++):0,Pr++,re===10&&(Pr=1,ta++),re}function On(){return le($r,Ge)}function Wo(){return Ge}function ra(e,t){return Rr($r,e,t)}function nu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qE(e){return ta=Pr=1,gg=ot($r=e),Ge=0,[]}function KE(e){return $r="",e}function Wa(e){return pg(ra(Ge-1,ru(e===91?e+2:e===40?e+1:e)))}function YE(e){for(;(re=On())&&re<33;)et();return nu(e)>2||nu(re)>3?"":" "}function QE(e,t){for(;--t&&et()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ra(e,Wo()+(t<6&&On()==32&&et()==32))}function ru(e){for(;et();)switch(re){case e:return Ge;case 34:case 39:e!==34&&e!==39&&ru(re);break;case 40:e===41&&ru(e);break;case 92:et();break}return Ge}function XE(e,t){for(;et()&&e+re!==47+10;)if(e+re===42+42&&On()===47)break;return"/*"+ra(t,Ge-1)+"*"+Tc(e===47?e:et())}function JE(e){for(;!nu(On());)et();return ra(e,Ge)}function ZE(e){return KE(Vo("",null,null,null,[""],e=qE(e),0,[0],e))}function Vo(e,t,n,r,i,o,s,a,l){for(var u=0,d=0,f=s,m=0,v=0,y=0,_=1,P=1,p=1,c=0,h="",g=i,E=o,S=r,w=h;P;)switch(y=c,c=et()){case 40:if(y!=108&&le(w,f-1)==58){Ho(w+=L(Wa(c),"&","&\f"),"&\f",hg(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:w+=Wa(c);break;case 9:case 10:case 13:case 32:w+=YE(y);break;case 92:w+=QE(Wo()-1,7);continue;case 47:switch(On()){case 42:case 47:ii(ek(XE(et(),Wo()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=ot(w)*p;case 125*_:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+d:p==-1&&(w=L(w,/\f/g,"")),v>0&&ot(w)-f&&ii(v>32?Cf(w+";",r,n,f-1,l):Cf(L(w," ","")+";",r,n,f-2,l),l);break;case 59:w+=";";default:if(ii(S=Tf(w,t,n,u,d,i,a,h,g=[],E=[],f,o),o),c===123)if(d===0)Vo(w,t,S,S,g,o,f,a,E);else switch(m===99&&le(w,3)===110?100:m){case 100:case 108:case 109:case 115:Vo(e,S,S,r&&ii(Tf(e,S,S,0,0,i,a,h,i,g=[],f,E),E),i,E,f,a,r?g:E);break;default:Vo(w,S,S,S,[""],E,0,a,E)}}u=d=v=0,_=p=1,h=w="",f=s;break;case 58:f=1+ot(w),v=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&GE()==125)continue}switch(w+=Tc(c),c*_){case 38:p=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(ot(w)-1)*p,p=1;break;case 64:On()===45&&(w+=Wa(et())),m=On(),d=f=ot(h=w+=JE(Wo())),c++;break;case 45:y===45&&ot(w)==2&&(_=0)}}return o}function Tf(e,t,n,r,i,o,s,a,l,u,d,f){for(var m=i-1,v=i===0?o:[""],y=mg(v),_=0,P=0,p=0;_<r;++_)for(var c=0,h=Rr(e,m+1,m=hg(P=s[_])),g=e;c<y;++c)(g=pg(P>0?v[c]+" "+h:L(h,/&\f/g,v[c])))&&(l[p++]=g);return na(e,t,n,i===0?ea:a,l,u,d,f)}function ek(e,t,n,r){return na(e,t,n,dg,Tc(VE()),Rr(e,2,-2),0,r)}function Cf(e,t,n,r,i){return na(e,t,n,Ic,Rr(e,0,r),Rr(e,r+1,-1),r,i)}function vg(e,t,n){switch(HE(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+gi+e+G+e+e;case 5936:switch(le(e,t+11)){case 114:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return z+e+G+e+e;case 6165:return z+e+G+"flex-"+e+e;case 5187:return z+e+L(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return z+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(gt(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return z+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return z+e+G+L(e,"shrink","negative")+e;case 5292:return z+e+G+L(e,"basis","preferred-size")+e;case 6060:return z+"box-"+L(e,"-grow","")+z+e+G+L(e,"grow","positive")+e;case 4554:return z+L(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4200:if(!gt(e,/flex-|baseline/))return G+"grid-column-align"+Rr(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,gt(r.props,/grid-\w+-end/)})?~Ho(e+(n=n[t].value),"span",0)?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~Ho(n,"span",0)?gt(n,/\d+/):+gt(n,/\d+/)-+gt(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gt(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+gi+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ho(e,"stretch",0)?vg(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(le(e,t+6)===121)return L(e,":",":"+z)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+(le(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Rs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function tk(e,t,n,r){switch(e.type){case jE:if(e.children.length)break;case BE:case Ic:return e.return=e.return||e.value;case dg:return"";case fg:return e.return=e.value+"{"+Rs(e.children,r)+"}";case ea:if(!ot(e.value=e.props.join(",")))return""}return ot(n=Rs(e.children,r))?e.return=e.value+"{"+n+"}":""}function nk(e){var t=mg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function rk(e){return function(t){t.root||(t=t.return)&&e(t)}}function ik(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ic:e.return=vg(e.value,e.length,n);return;case fg:return Rs([Ft(e,{value:L(e.value,"@","@"+z)})],r);case ea:if(e.length)return WE(n=e.props,function(i){switch(gt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Ft(e,{props:[L(i,/:(read-\w+)/,":"+gi+"$1")]})),Kn(Ft(e,{props:[i]})),tu(e,{props:If(n,r)});break;case"::placeholder":Kn(Ft(e,{props:[L(i,/:(plac\w+)/,":"+z+"input-$1")]})),Kn(Ft(e,{props:[L(i,/:(plac\w+)/,":"+gi+"$1")]})),Kn(Ft(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),Kn(Ft(e,{props:[i]})),tu(e,{props:If(n,r)});break}return""})}}var ok={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yg="active",_g="data-styled-version",ia="6.1.8",Cc=`/*!sc*/
`,Rc=typeof window<"u"&&"HTMLElement"in window,sk=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),oa=Object.freeze([]),Ar=Object.freeze({});function ak(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var wg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uk=/(^-|-$)/g;function Rf(e){return e.replace(lk,"-").replace(uk,"")}var ck=/(a)(d)/gi,To=52,Pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function iu(e){var t,n="";for(t=Math.abs(e);t>To;t=t/To|0)n=Pf(t%To)+n;return(Pf(t%To)+n).replace(ck,"$1-$2")}var Va,Sg=5381,lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Eg=function(e){return lr(Sg,e)};function kg(e){return iu(Eg(e)>>>0)}function dk(e){return e.displayName||e.name||"Component"}function Ga(e){return typeof e=="string"&&!0}var Ig=typeof Symbol=="function"&&Symbol.for,Tg=Ig?Symbol.for("react.memo"):60115,fk=Ig?Symbol.for("react.forward_ref"):60112,hk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mk=((Va={})[fk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Va[Tg]=Cg,Va);function xf(e){return("type"in(t=e)&&t.type.$$typeof)===Tg?Cg:"$$typeof"in e?mk[e.$$typeof]:hk;var t}var gk=Object.defineProperty,vk=Object.getOwnPropertyNames,Af=Object.getOwnPropertySymbols,yk=Object.getOwnPropertyDescriptor,_k=Object.getPrototypeOf,Of=Object.prototype;function Rg(e,t,n){if(typeof t!="string"){if(Of){var r=_k(t);r&&r!==Of&&Rg(e,r,n)}var i=vk(t);Af&&(i=i.concat(Af(t)));for(var o=xf(e),s=xf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in pk||n&&n[l]||s&&l in s||o&&l in o)){var u=yk(t,l);try{gk(e,l,u)}catch{}}}}return e}function Or(e){return typeof e=="function"}function Pc(e){return typeof e=="object"&&"styledComponentId"in e}function Rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ou(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ji(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function su(e,t,n){if(n===void 0&&(n=!1),!n&&!ji(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=su(e[r],t[r]);else if(ji(t))for(var r in t)e[r]=su(e[r],t[r]);return e}function xc(e,t){Object.defineProperty(e,"toString",{value:t})}function Zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var wk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Zi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Cc);return n},e}(),Go=new Map,Ps=new Map,qo=1,Co=function(e){if(Go.has(e))return Go.get(e);for(;Ps.has(qo);)qo++;var t=qo++;return Go.set(e,t),Ps.set(t,e),t},Sk=function(e,t){qo=t+1,Go.set(e,t),Ps.set(t,e)},Ek="style[".concat(xr,"][").concat(_g,'="').concat(ia,'"]'),kk=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ik=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Tk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Cc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(kk);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Sk(d,u),Ik(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ck(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(xr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(xr,yg),r.setAttribute(_g,ia);var s=Ck();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Rk=function(){function e(t){this.element=Pg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Pk=function(){function e(t){this.element=Pg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nf=Rc,Ak={isServer:!Rc,useCSSOMInjection:!sk},xg=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},Ak),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Rc&&Nf&&(Nf=!1,function(o){for(var s=document.querySelectorAll(Ek),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(xr)!==yg&&(Tk(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),xc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var m=function(p){return Ps.get(p)}(f);if(m===void 0)return"continue";var v=o.names.get(m),y=s.getGroup(f);if(v===void 0||y.length===0)return"continue";var _="".concat(xr,".g").concat(f,'[id="').concat(m,'"]'),P="";v!==void 0&&v.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(P,'"}').concat(Cc)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return Co(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new xk(i):r?new Rk(i):new Pk(i)}(this.options),new wk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Co(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Co(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Co(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ok=/&/g,Nk=/^\s*\/\/.*$/gm;function Ag(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ag(n.children,t)),n})}function Lk(e){var t,n,r,i=e===void 0?Ar:e,o=i.options,s=o===void 0?Ar:o,a=i.plugins,l=a===void 0?oa:a,u=function(m,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=l.slice();d.push(function(m){m.type===ea&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Ok,n).replace(r,u))}),s.prefix&&d.push(ik),d.push(tk);var f=function(m,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(Nk,""),p=ZE(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);s.namespace&&(p=Ag(p,s.namespace));var c=[];return Rs(p,nk(d.concat(rk(function(h){return c.push(h)})))),c};return f.hash=l.length?l.reduce(function(m,v){return v.name||Zi(15),lr(m,v.name)},Sg).toString():"",f}var bk=new xg,au=Lk(),Og=yi.createContext({shouldForwardProp:void 0,styleSheet:bk,stylis:au});Og.Consumer;yi.createContext(void 0);function Lf(){return b.useContext(Og)}var Ng=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=au);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xc(this,function(){throw Zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=au),this.name+t.hash},e}(),Dk=function(e){return e>="A"&&e<="Z"};function bf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Dk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lg=function(e){return e==null||e===!1||e===""},bg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Lg(o)&&(Array.isArray(o)&&o.isCss||Or(o)?r.push("".concat(bf(i),":"),o,";"):ji(o)?r.push.apply(r,Bi(Bi(["".concat(i," {")],bg(o),!1),["}"],!1)):r.push("".concat(bf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ok||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(Lg(e))return[];if(Pc(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Nn(i,t,n,r)}var o;return e instanceof Ng?n?(e.inject(n,r),[e.getName(r)]):[e]:ji(e)?bg(e):Array.isArray(e)?Array.prototype.concat.apply(oa,e.map(function(s){return Nn(s,t,n,r)})):[e.toString()]}function Uk(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Pc(n))return!1}return!0}var Mk=Eg(ia),Fk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Uk(t),this.componentId=n,this.baseHash=lr(Mk,n),this.baseStyle=r,xg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Rn(i,this.staticRulesId);else{var o=ou(Nn(this.rules,t,n,r)),s=iu(lr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Rn(i,s),this.staticRulesId=s}else{for(var l=lr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var m=ou(Nn(f,t,n,r));l=lr(l,m+d),u+=m}}if(u){var v=iu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Rn(i,v)}}return i},e}(),Dg=yi.createContext(void 0);Dg.Consumer;var qa={};function zk(e,t,n){var r=Pc(e),i=e,o=!Ga(e),s=t.attrs,a=s===void 0?oa:s,l=t.componentId,u=l===void 0?function(g,E){var S=typeof g!="string"?"sc":Rf(g);qa[S]=(qa[S]||0)+1;var w="".concat(S,"-").concat(kg(ia+S+qa[S]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(g){return Ga(g)?"styled.".concat(g):"Styled(".concat(dk(g),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Rf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;y=function(g,E){return _(g,E)&&P(g,E)}}else y=_}var p=new Fk(n,m,r?i.componentStyle:void 0);function c(g,E){return function(S,w,T){var M=S.attrs,D=S.componentStyle,Ne=S.defaultProps,gn=S.foldedComponentIds,vn=S.styledComponentId,no=S.target,sa=yi.useContext(Dg),Br=Lf(),yn=S.shouldForwardProp||Br.shouldForwardProp,C=ak(w,sa,Ne)||Ar,x=function(bt,Le,pt){for(var jr,wn=Pe(Pe({},Le),{className:void 0,theme:pt}),aa=0;aa<bt.length;aa+=1){var ro=Or(jr=bt[aa])?jr(wn):jr;for(var Dt in ro)wn[Dt]=Dt==="className"?Rn(wn[Dt],ro[Dt]):Dt==="style"?Pe(Pe({},wn[Dt]),ro[Dt]):ro[Dt]}return Le.className&&(wn.className=Rn(wn.className,Le.className)),wn}(M,w,C),O=x.as||no,B={};for(var j in x)x[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&x.theme===C||(j==="forwardedAs"?B.as=x.forwardedAs:yn&&!yn(j,O)||(B[j]=x[j]));var _n=function(bt,Le){var pt=Lf(),jr=bt.generateAndInjectStyles(Le,pt.styleSheet,pt.stylis);return jr}(D,x),qe=Rn(gn,vn);return _n&&(qe+=" "+_n),x.className&&(qe+=" "+x.className),B[Ga(O)&&!wg.has(O)?"class":"className"]=qe,B.ref=T,b.createElement(O,B)}(h,g,E)}c.displayName=f;var h=yi.forwardRef(c);return h.attrs=v,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?Rn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(E){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var T=0,M=S;T<M.length;T++)su(E,M[T],!0);return E}({},i.defaultProps,g):g}}),xc(h,function(){return".".concat(h.styledComponentId)}),o&&Rg(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Df(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Uf=function(e){return Object.assign(e,{isCss:!0})};function Ug(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Or(e)||ji(e))return Uf(Nn(Df(oa,Bi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nn(r):Uf(Nn(Df(r,t)))}function lu(e,t,n){if(n===void 0&&(n=Ar),!t)throw Zi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ug.apply(void 0,Bi([i],o,!1)))};return r.attrs=function(i){return lu(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lu(e,t,Pe(Pe({},n),i))},r}var Mg=function(e){return lu(zk,e)},N=Mg;wg.forEach(function(e){N[e]=Mg(e)});function eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ou(Ug.apply(void 0,Bi([e],t,!1))),i=kg(r);return new Ng(i,r)}const $k=eo`
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
}`,Bk=N.article`
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
  animation: ${$k} 0.75s ease-in;
  position: relative;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`,FI=N.button`
  position: absolute;
  bottom: 0;
  right: 0;
`,zI=N.button`
  position: absolute;
  bottom: 0;
  left: 0;
`,$I=N.input`
  position: absolute;
  bottom: 0;
  left: 50%;
`,jk=N.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,BI=N.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,jI=N.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`,Hk=N.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,HI=N.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`,WI=N.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: hsla(0, 0%, 7%, 0.92);
`,VI=N.div`
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
`,Wk=()=>I(Bk,{children:I(jk,{children:I(Hk,{})})}),Vk=N.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,Gk=N.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`,qk=N.main`
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
`,Kk=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yk=N.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,Qk=""+new URL("plus-70c42e58.svg",import.meta.url).href,Xk=({onUpload:e})=>{const[t,n]=b.useState(!1),[r,i]=b.useState(""),[o,s]=b.useState(""),[a,l]=b.useState(null);return ne(Ln,{children:[I(Yk,{onClick:()=>n(!t),src:Qk,alt:"Add more content"}),t&&I(Ln,{children:ne(Vk,{onSubmit:async f=>{if(f.preventDefault(),a){const m=await zE(a,{name:o,caption:r});e(m),l(null),i(""),s(""),n(!1)}},children:[I("div",{children:I("label",{htmlFor:"caption",children:"Caption"})}),ne("div",{children:[I("input",{id:"caption",value:r,onChange:f=>i(f.target.value)}),I("div",{children:I("label",{htmlFor:"name",children:"Name"})}),I("div",{children:I("input",{id:"name",value:o,onChange:f=>s(f.target.value),required:!0})})]}),I("div",{children:I("label",{htmlFor:"file",children:"Choose a file"})}),I("div",{children:I("input",{id:"file",type:"file",required:!0,onChange:f=>{f.target.files&&l(f.target.files[0])}})}),a&&I("button",{type:"submit",children:"Upload a file"})]})})]})},Jk=()=>{const[e,t]=b.useState("eantwibawua1@gmail.com"),[n,r]=b.useState("");return ne("div",{children:[I("h1",{children:"Hey Eman 🙂"}),I("p",{children:"Please sign-in:"}),ne("form",{onSubmit:async o=>{o.preventDefault(),await sS(e,n)},children:[ne("div",{children:[I("label",{htmlFor:"email-address",children:"Email address"}),I("input",{type:"email",id:"email-address",value:e,onChange:o=>t(o.target.value),required:!0,placeholder:"Email address"})]}),ne("div",{children:[I("label",{htmlFor:"password",children:"Password"}),I("input",{type:"password",id:"password",value:n,onChange:o=>r(o.target.value),required:!0,placeholder:"Password"})]}),I("button",{type:"submit",children:"Sign in"})]})]})},Mf=990,Zk=1320,Ff=()=>window.innerWidth<=Mf?2:window.innerWidth<=Zk&&window.innerWidth>Mf?3:4,zf=(e,t)=>{const n=Math.floor(e.length/t),r=e.length%t;let i=0;const o=[];for(let s=0;s<t;s++){const a=i+n+(s<r?1:0);o.push(e.slice(i,a)),i=a}return o},Nr=eo`
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
}`,eI=N.p`
  color: rgba(12, 0, 0, 0.7);
  flex: 1;
  display: block;
  animation: ${Nr} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,tI=N.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
  animation: ${Nr} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,nI=N.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,rI=eo`
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
}`,iI=N.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${rI} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,oI=N.button`
  font-weight: 700;
  border-radius: 15px;
  width: 150px;
  height: 45px;
  background-color: #61c433;
  border: none;
  outline: none;
  color: black;
  animation: ${Nr} 0.5s ease-in-out;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`,sI=N.audio`
  width: 300px;
  max-width: 300px;
  animation: ${Nr} 0.5s ease-in-out;

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
`,aI=N.p`
<<<<<<< HEAD
  animation: ${Nr} 0.5s ease-in-out;
  font-weight: 800;
=======
  margin-top: 5px;
  animation: ${Nr} 0.5s ease-in-out;
>>>>>>> 467b42c (Keep caption)
`,lI=N.div`
  width: 100vw;
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`,uI=N.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`,cI=N.img`
  width: 100%;
  opacity: ${({$show:e})=>e?1:0};
`,$f=""+new URL("A-967cb442.png",import.meta.url).href,Bf=""+new URL("C-3c3e16d1.png",import.meta.url).href,jf=""+new URL("W-17eb2e7f.png",import.meta.url).href,Hf=""+new URL("Y-967b8d34.png",import.meta.url).href,dI=({onEnded:e})=>{const[i,o]=b.useState([$f,jf,Bf,Hf]),[s,a]=b.useState(!1),[l,u]=b.useState(0);return b.useEffect(()=>{const d=setTimeout(()=>{e()},4500);return()=>clearTimeout(d)},[]),b.useEffect(()=>{const d=setInterval(()=>{u(f=>(f+1)%4)},500);return setTimeout(()=>{o([$f,jf,Bf,Hf]),a(!0),clearInterval(d)},4e3),()=>clearInterval(d)},[]),I(lI,{children:I(uI,{children:[0,1,2,3].map(d=>{const f=s?d:(l+d)%4;return I(cI,{$show:!0,src:i[f],alt:`loading computer ${d}`},d)})})})},fI=b.lazy(()=>cS(()=>import("./index-11d438af.js"),[],import.meta.url)),hI=()=>{const[e,t]=b.useState(0),n=b.useContext(ic),[r,i]=b.useState(Ff()),[o,s]=b.useState(null);b.useEffect(()=>{(async()=>{const f=await $E(),m=zf(f,r);s(m)})()},[]),b.useEffect(()=>{const d=()=>{const f=Ff();i(f)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),b.useEffect(()=>{if(!o)return;const d=zf(o.flat(),r);s(d)},[r]);const a=()=>{t(0),vc.signOut()},[l,u]=b.useState(!1);return e>=10&&!n?I(Jk,{}):!o||!l?I(dI,{onEnded:()=>u(!0)}):ne(Ln,{children:[ne(nI,{children:[I(iI,{children:I("img",{src:dS,alt:"are we cool yet t-shirt"})}),I(tI,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),I(eI,{children:"YOU'RE ALL WELCOME"}),I("a",{href:"https://forms.gle/8dzX8f76mTJm69iw7",target:"_blank",rel:"noreferrer",children:I(oI,{children:"PLEASE RSVP! CLICK HERE"})}),I(sI,{controlsList:"nodownload noplaybackrate",controls:!0,src:gf,children:I("track",{default:!0,kind:"captions",src:gf})}),I(aI,{children:"stu$h Auntie - Pattern [Up]"}),n&&ne(Ln,{children:[I(Xk,{onUpload:d=>{if(!o){s([[d]]);return}const f=o[o.length-1];s([...o.slice(0,-1),[...f,d]])}}),I("button",{onClick:a,children:"Log out"})]})]}),I(Gk,{children:I(qk,{children:o&&o.map(d=>I(Kk,{children:d.map(f=>I(b.Suspense,{fallback:I(Wk,{}),children:I(fI,{content:f,onDelete:m=>{const v=o.map(y=>y.filter(_=>_!==m));s(v)}})},f.downloadUrl))},d[0].downloadUrl))})})]})};var It=(e=>(e.LOGIN="login",e.CLUB="club",e.HOME="home",e))(It||{});const Fg={name:"",stats:null,outfit:null,stage:It.LOGIN,update:()=>{}},to=b.createContext(Fg),pI=({children:e})=>{const[t,n]=b.useState(Fg),r=b.useCallback(o=>{n({...t,...o})},[t]),i={...t,update:r};return I(to.Provider,{value:i,children:e})},mI=""+new URL("bouncer-da71ab54.png",import.meta.url).href,zg=""+new URL("character-cc76f9ba.png",import.meta.url).href,gI=""+new URL("club-e196994d.jpg",import.meta.url).href,uu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==",vI=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
  margin: 30px auto;
`,yI=N.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`,_I=N.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,wI=N.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`,SI=N.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${uu});
  color: #96e3ff;
  border: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`,EI=N.form`
  width: 70%;
  padding: 30px;

  background: white;
  background-image: url(${uu});
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
    background-image: url(${uu});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
  }
`,$g=N.img`
  width: 100%;
  object-fit: cover;
`,Bg=N.img`
  width: ${e=>e.$stage==="club"?"16%":"25%"};
  height: ${e=>e.$stage==="club"?"26%":"38%"};
  position: absolute;
  bottom: 0;
  right: 3%;
`,kI=N.img`
  width: 30%;
  height: 50%;
  position: absolute;
  left: 42%;
  top: 48%;
`,II=N.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`,TI=N.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`,CI=N.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,Ka=eo`
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
}`,Ya=N.img`
  width: 20%;
  height: 20%;
  border: 3px solid pink;
  border-radius: 50%;

  &:nth-of-type(1) {
    animation: ${Ka} 1s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: ${Ka} 1.5s ease-in-out;
  }

  &:nth-of-type(3) {
    animation: ${Ka} 2s ease-in-out;
  }
`,Wf=eo`
0% {
    opacity: 0;
    -webkit-transform: translate3d(-20px, 0, 0);
    -moz-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
}

100% {
    opacity: 1;
    -webkit-transform: translate(0, 0, 0);
    -moz-transform: translate(0, 0, 0);
    -o-transform: translate(0, 0, 0);
    transform: translate(0, 0, 0);
}`,RI=N.div`
  position: absolute;
  bottom: 4%;
  left: 2%;
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,Vf=N.progress`
  width: 100%;
  height: 40px;

  &:nth-of-type(1) {
    margin-bottom: 0.1em;
    animation: ${Wf} 0.7s ease-in;
  }

  &:nth-of-type(2) {
    margin-bottom: 0.1em;
    animation: ${Wf} 1s ease-in;
  }

  &[value] {
    border-radius: 5px;
  }

  &[value]::-webkit-progress-bar {
    border: 1px solid black;
    border-radius: 8px;
    background-color: white;
    padding: 2px;
  }
  &[value]::-webkit-progress-value {
    background: ${e=>e.$stat==="health"?"red":"green"};
    border-radius: 8px;
  }
  &[value]::-moz-progress-bar {
    border: 1px solid black;
    border-radius: 8px;
    background-color: white;
    padding: 2px;
  }
`,PI=()=>{const{stage:e,update:t}=b.useContext(to);return ne(Ln,{children:[I($g,{src:gI,alt:"club"}),I(Bg,{$stage:e,src:zg,alt:"character"}),I(kI,{src:mI,alt:"bouncer"}),I(II,{onClick:()=>t({stage:It.HOME}),children:">"})]})},xI=()=>{const{name:e,update:t}=b.useContext(to);return ne(Ln,{children:[ne(SI,{children:[I("p",{children:"AWCY"}),I("p",{children:"version 1.0"})]}),ne(EI,{onSubmit:r=>{r.preventDefault(),e&&t({name:e,stage:It.CLUB})},children:[I("label",{htmlFor:"name",children:"Select character name:"}),I("input",{required:!0,id:"name",onChange:r=>t({name:r.target.value}),value:e}),I("button",{type:"submit",children:"Play"})]})]})},AI=({stats:e})=>ne(RI,{children:[ne(Vf,{$stat:"health",max:"100",value:e.health,children:["Health: ",e.health]}),ne(Vf,{$stat:"clout",max:"100",value:e.clout,children:["Clout: ",e.clout]})]}),OI=""+new URL("room-005b6ed8.jpg",import.meta.url).href,NI=()=>{const{stage:e,update:t}=b.useContext(to),[n,r]=b.useState(!1),i=()=>{t({stats:null}),r(!0)},o=()=>{r(!1),t({stats:{health:80,clout:80}})};return ne(Ln,{children:[I(TI,{onClick:()=>t({stage:It.CLUB}),children:"<"}),I($g,{src:OI,alt:"home",onClick:i}),I(Bg,{$stage:e,src:zg,alt:"character"}),n&&ne(CI,{children:[I(Ya,{onClick:o,src:"",alt:"outfit-1"}),I(Ya,{onClick:o,src:"",alt:"outfit-2"}),I(Ya,{onClick:o,src:"",alt:"outfit-3"})]})]})},LI=()=>{const{stats:e,stage:t}=b.useContext(to);return I(vI,{children:I(yI,{children:I(_I,{children:ne(wI,{children:[t===It.LOGIN&&I(xI,{}),t===It.CLUB&&I(PI,{}),t===It.HOME&&I(NI,{}),e&&t!==It.LOGIN&&I(AI,{stats:e})]})})})})},bI=()=>b.useContext(ic)?I(pI,{children:I(LI,{})}):null,DI=()=>ne(aS,{children:[I(hI,{}),I(bI,{})]});Qa.createRoot(document.getElementById("root")).render(I(DI,{}));export{Bk as A,jI as B,HI as C,FI as D,$I as E,Ln as F,WI as M,jk as S,ic as U,I as a,zI as b,VI as c,UI as d,BI as e,ne as j,b as r,MI as u};
