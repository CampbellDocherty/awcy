(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pi={},yg={get exports(){return pi},set exports(e){pi=e}},Io={},ee={},_g={get exports(){return ee},set exports(e){ee=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),wg=Symbol.for("react.portal"),Sg=Symbol.for("react.fragment"),Eg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Rg=Symbol.for("react.suspense"),Pg=Symbol.for("react.memo"),Ag=Symbol.for("react.lazy"),_c=Symbol.iterator;function Ng(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rf=Object.assign,Pf={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Cf}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Af(){}Af.prototype=Nr.prototype;function Zl(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Cf}var eu=Zl.prototype=new Af;eu.constructor=Zl;Rf(eu,Nr.prototype);eu.isPureReactComponent=!0;var wc=Array.isArray,Nf=Object.prototype.hasOwnProperty,tu={current:null},Of={key:!0,ref:!0,__self:!0,__source:!0};function xf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Nf.call(t,r)&&!Of.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mi,type:e,key:s,ref:o,props:i,_owner:tu.current}}function Og(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function xg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sc=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xg(""+e.key):t.toString(36)}function ys(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Mi:case wg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ea(o,0):r,wc(i)?(n="",e!=null&&(n=e.replace(Sc,"$&/")+"/"),ys(i,t,n,"",function(u){return u})):i!=null&&(nu(i)&&(i=Og(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",wc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ea(s,a);o+=ys(s,t,n,l,i)}else if(l=Ng(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ea(s,a++),o+=ys(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qi(e,t,n){if(e==null)return e;var r=[],i=0;return ys(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},_s={transition:null},Lg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:_s,ReactCurrentOwner:tu};D.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!nu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Nr;D.Fragment=Sg;D.Profiler=kg;D.PureComponent=Zl;D.StrictMode=Eg;D.Suspense=Rg;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Nf.call(t,l)&&!Of.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mi,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Tg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ig,_context:e},e.Consumer=e};D.createElement=xf;D.createFactory=function(e){var t=xf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Cg,render:e}};D.isValidElement=nu;D.lazy=function(e){return{$$typeof:Ag,_payload:{_status:-1,_result:e},_init:Dg}};D.memo=function(e,t){return{$$typeof:Pg,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=_s.transition;_s.transition={};try{e()}finally{_s.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return we.current.useCallback(e,t)};D.useContext=function(e){return we.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return we.current.useDeferredValue(e)};D.useEffect=function(e,t){return we.current.useEffect(e,t)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return we.current.useMemo(e,t)};D.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};D.useRef=function(e){return we.current.useRef(e)};D.useState=function(e){return we.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(_g);const mi=vg(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=ee,bg=Symbol.for("react.element"),Mg=Symbol.for("react.fragment"),Fg=Object.prototype.hasOwnProperty,$g=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zg={key:!0,ref:!0,__self:!0,__source:!0};function Df(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fg.call(t,r)&&!zg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bg,type:e,key:s,ref:o,props:i,_owner:$g.current}}Io.Fragment=Mg;Io.jsx=Df;Io.jsxs=Df;(function(e){e.exports=Io})(yg);const za=pi.Fragment,L=pi.jsx,ot=pi.jsxs;var Ba={},ja={},Bg={get exports(){return ja},set exports(e){ja=e}},Me={},Ha={},jg={get exports(){return Ha},set exports(e){Ha=e}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,P){var N=T.length;T.push(P);e:for(;0<N;){var $=N-1>>>1,z=T[$];if(0<i(z,P))T[$]=P,T[N]=z,N=$;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],N=T.pop();if(N!==P){T[0]=N;e:for(var $=0,z=T.length,vn=z>>>1;$<vn;){var Ge=2*($+1)-1,xt=T[Ge],xe=Ge+1,ht=T[xe];if(0>i(xt,N))xe<z&&0>i(ht,xt)?(T[$]=ht,T[xe]=N,$=xe):(T[$]=xt,T[Ge]=N,$=Ge);else if(xe<z&&0>i(ht,N))T[$]=ht,T[xe]=N,$=xe;else break e}}return P}function i(T,P){var N=T.sortIndex-P.sortIndex;return N!==0?N:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,p=null,m=3,v=!1,y=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=T)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function g(T){if(_=!1,d(T),!y)if(n(l)!==null)y=!0,Fr(E);else{var P=n(u);P!==null&&gn(g,P.startTime-T)}}function E(T,P){y=!1,_&&(_=!1,h(I),I=-1),v=!0;var N=m;try{for(d(P),p=n(l);p!==null&&(!(p.expirationTime>P)||T&&!Oe());){var $=p.callback;if(typeof $=="function"){p.callback=null,m=p.priorityLevel;var z=$(p.expirationTime<=P);P=e.unstable_now(),typeof z=="function"?p.callback=z:p===n(l)&&r(l),d(P)}else r(l);p=n(l)}if(p!==null)var vn=!0;else{var Ge=n(u);Ge!==null&&gn(g,Ge.startTime-P),vn=!1}return vn}finally{p=null,m=N,v=!1}}var S=!1,w=null,I=-1,U=5,x=-1;function Oe(){return!(e.unstable_now()-x<U)}function pn(){if(w!==null){var T=e.unstable_now();x=T;var P=!0;try{P=w(!0,T)}finally{P?mn():(S=!1,w=null)}}else S=!1}var mn;if(typeof c=="function")mn=function(){c(pn)};else if(typeof MessageChannel<"u"){var qi=new MessageChannel,Jo=qi.port2;qi.port1.onmessage=pn,mn=function(){Jo.postMessage(null)}}else mn=function(){R(pn,0)};function Fr(T){w=T,S||(S=!0,mn())}function gn(T,P){I=R(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Fr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var N=m;m=P;try{return T()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=m;m=T;try{return P()}finally{m=N}},e.unstable_scheduleCallback=function(T,P,N){var $=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?$+N:$):N=$,T){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=N+z,T={id:f++,callback:P,priorityLevel:T,startTime:N,expirationTime:z,sortIndex:-1},N>$?(T.sortIndex=N,t(u,T),n(l)===null&&T===n(u)&&(_?(h(I),I=-1):_=!0,gn(g,N-$))):(T.sortIndex=z,t(l,T),y||v||(y=!0,Fr(E))),T},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(T){var P=m;return function(){var N=m;m=P;try{return T.apply(this,arguments)}finally{m=N}}}})(Lf);(function(e){e.exports=Lf})(jg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=ee,be=Ha;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bf=new Set,gi={};function zn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(gi[e]=t,e=0;e<t.length;e++)bf.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,Hg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},kc={};function Vg(e){return Va.call(kc,e)?!0:Va.call(Ec,e)?!1:Hg.test(e)?kc[e]=!0:(Ec[e]=!0,!1)}function Wg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gg(e,t,n,r){if(t===null||typeof t>"u"||Wg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gg(t,n,i,r)&&(n=null),r||i===null?Vg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Nt=Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),$f=Symbol.for("react.offscreen"),Ic=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ta;function Yr(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var na=!1;function ra(e,t){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Kg(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Kn:return"Portal";case Wa:return"Profiler";case ou:return"StrictMode";case Ga:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ff:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lu:return t=e.displayName||null,t!==null?t:qa(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return qa(e(t))}catch{}}return null}function qg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yg(e){var t=zf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=Yg(e))}function Bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jf(e,t){t=t.checked,t!=null&&su(e,"checked",t,!1)}function Qa(e,t){jf(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||$s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Qr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Hf(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function Gf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function Kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xg=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Xg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,lr=null,ur=null;function Ac(e){if(e=zi(e)){if(typeof rl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ao(t),rl(e.stateNode,e.type,t))}}function qf(e){lr?ur?ur.push(e):ur=[e]:lr=e}function Yf(){if(lr){var e=lr,t=ur;if(ur=lr=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function Qf(e,t){return e(t)}function Xf(){}var ia=!1;function Jf(e,t,n){if(ia)return e(t,n);ia=!0;try{return Qf(e,t,n)}finally{ia=!1,(lr!==null||ur!==null)&&(Xf(),Yf())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var il=!1;if(Tt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){il=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{il=!1}function Jg(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ri=!1,zs=null,Bs=!1,sl=null,Zg={onError:function(e){ri=!0,zs=e}};function ev(e,t,n,r,i,s,o,a,l){ri=!1,zs=null,Jg.apply(Zg,arguments)}function tv(e,t,n,r,i,s,o,a,l){if(ev.apply(this,arguments),ri){if(ri){var u=zs;ri=!1,zs=null}else throw Error(k(198));Bs||(Bs=!0,sl=u)}}function Bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(Bn(e)!==e)throw Error(k(188))}function nv(e){var t=e.alternate;if(!t){if(t=Bn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nc(i),e;if(s===r)return Nc(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function eh(e){return e=nv(e),e!==null?th(e):null}function th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=th(e);if(t!==null)return t;e=e.sibling}return null}var nh=be.unstable_scheduleCallback,Oc=be.unstable_cancelCallback,rv=be.unstable_shouldYield,iv=be.unstable_requestPaint,Z=be.unstable_now,sv=be.unstable_getCurrentPriorityLevel,cu=be.unstable_ImmediatePriority,rh=be.unstable_UserBlockingPriority,js=be.unstable_NormalPriority,ov=be.unstable_LowPriority,ih=be.unstable_IdlePriority,To=null,lt=null;function av(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:cv,lv=Math.log,uv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(lv(e)/uv|0)|0}var es=64,ts=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xr(a):(s&=o,s!==0&&(r=Xr(s)))}else o=n&~i,o!==0?r=Xr(o):s!==0&&(r=Xr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function dv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Xe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dv(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sh(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function hv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ah,fu,lh,uh,ch,al=!1,ns=[],qt=null,Yt=null,Qt=null,_i=new Map,wi=new Map,$t=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function jr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mv(e,t,n,r,i){switch(t){case"focusin":return qt=jr(qt,e,t,n,r,i),!0;case"dragenter":return Yt=jr(Yt,e,t,n,r,i),!0;case"mouseover":return Qt=jr(Qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _i.set(s,jr(_i.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wi.set(s,jr(wi.get(s)||null,e,t,n,r,i)),!0}return!1}function dh(e){var t=En(e.target);if(t!==null){var n=Bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zf(n),t!==null){e.blockedOn=t,ch(e.priority,function(){lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=zi(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function Dc(e,t,n){ws(e)&&n.delete(t)}function gv(){al=!1,qt!==null&&ws(qt)&&(qt=null),Yt!==null&&ws(Yt)&&(Yt=null),Qt!==null&&ws(Qt)&&(Qt=null),_i.forEach(Dc),wi.forEach(Dc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,gv)))}function Si(e){function t(i){return Hr(i,e)}if(0<ns.length){Hr(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Hr(qt,e),Yt!==null&&Hr(Yt,e),Qt!==null&&Hr(Qt,e),_i.forEach(t),wi.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)dh(n),n.blockedOn===null&&$t.shift()}var cr=Nt.ReactCurrentBatchConfig,Vs=!0;function vv(e,t,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=1,hu(e,t,n,r)}finally{F=i,cr.transition=s}}function yv(e,t,n,r){var i=F,s=cr.transition;cr.transition=null;try{F=4,hu(e,t,n,r)}finally{F=i,cr.transition=s}}function hu(e,t,n,r){if(Vs){var i=ll(e,t,n,r);if(i===null)ma(e,t,r,Ws,n),xc(e,r);else if(mv(i,e,t,n,r))r.stopPropagation();else if(xc(e,r),t&4&&-1<pv.indexOf(e)){for(;i!==null;){var s=zi(i);if(s!==null&&ah(s),s=ll(e,t,n,r),s===null&&ma(e,t,r,Ws,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ma(e,t,r,null,n)}}var Ws=null;function ll(e,t,n,r){if(Ws=null,e=uu(r),e=En(e),e!==null)if(t=Bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function fh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sv()){case cu:return 1;case rh:return 4;case js:case ov:return 16;case ih:return 536870912;default:return 16}default:return 16}}var Gt=null,pu=null,Ss=null;function hh(){if(Ss)return Ss;var e,t=pu,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ss=i.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Lc(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rs:Lc,this.isPropagationStopped=Lc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=Fe(Or),$i=Q({},Or,{view:0,detail:0}),_v=Fe($i),oa,aa,Vr,Co=Q({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(oa=e.screenX-Vr.screenX,aa=e.screenY-Vr.screenY):aa=oa=0,Vr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Uc=Fe(Co),wv=Q({},Co,{dataTransfer:0}),Sv=Fe(wv),Ev=Q({},$i,{relatedTarget:0}),la=Fe(Ev),kv=Q({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Fe(kv),Tv=Q({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cv=Fe(Tv),Rv=Q({},Or,{data:0}),bc=Fe(Rv),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nv[e])?!!t[e]:!1}function gu(){return Ov}var xv=Q({},$i,{key:function(e){if(e.key){var t=Pv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dv=Fe(xv),Lv=Q({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=Fe(Lv),Uv=Q({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),bv=Fe(Uv),Mv=Q({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=Fe(Mv),$v=Q({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Fe($v),Bv=[9,13,27,32],vu=Tt&&"CompositionEvent"in window,ii=null;Tt&&"documentMode"in document&&(ii=document.documentMode);var jv=Tt&&"TextEvent"in window&&!ii,ph=Tt&&(!vu||ii&&8<ii&&11>=ii),Fc=String.fromCharCode(32),$c=!1;function mh(e,t){switch(e){case"keyup":return Bv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Hv(e,t){switch(e){case"compositionend":return gh(t);case"keypress":return t.which!==32?null:($c=!0,Fc);case"textInput":return e=t.data,e===Fc&&$c?null:e;default:return null}}function Vv(e,t){if(Yn)return e==="compositionend"||!vu&&mh(e,t)?(e=hh(),Ss=pu=Gt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wv[e.type]:t==="textarea"}function vh(e,t,n,r){qf(r),t=Gs(t,"onChange"),0<t.length&&(n=new mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,Ei=null;function Gv(e){Ph(e,0)}function Ro(e){var t=Jn(e);if(Bf(t))return e}function Kv(e,t){if(e==="change")return t}var yh=!1;if(Tt){var ua;if(Tt){var ca="oninput"in document;if(!ca){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),ca=typeof Bc.oninput=="function"}ua=ca}else ua=!1;yh=ua&&(!document.documentMode||9<document.documentMode)}function jc(){si&&(si.detachEvent("onpropertychange",_h),Ei=si=null)}function _h(e){if(e.propertyName==="value"&&Ro(Ei)){var t=[];vh(t,Ei,e,uu(e)),Jf(Gv,t)}}function qv(e,t,n){e==="focusin"?(jc(),si=t,Ei=n,si.attachEvent("onpropertychange",_h)):e==="focusout"&&jc()}function Yv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(Ei)}function Qv(e,t){if(e==="click")return Ro(t)}function Xv(e,t){if(e==="input"||e==="change")return Ro(t)}function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Jv;function ki(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Va.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var n=Hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hc(n)}}function wh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sh(){for(var e=window,t=$s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$s(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zv(e){var t=Sh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wh(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Vc(n,s);var o=Vc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ey=Tt&&"documentMode"in document&&11>=document.documentMode,Qn=null,ul=null,oi=null,cl=!1;function Wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||Qn==null||Qn!==$s(r)||(r=Qn,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&ki(oi,r)||(oi=r,r=Gs(ul,"onSelect"),0<r.length&&(t=new mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},da={},Eh={};Tt&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Po(e){if(da[e])return da[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Eh)return da[e]=t[n];return e}var kh=Po("animationend"),Ih=Po("animationiteration"),Th=Po("animationstart"),Ch=Po("transitionend"),Rh=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Rh.set(e,t),zn(t,[e])}for(var fa=0;fa<Gc.length;fa++){var ha=Gc[fa],ty=ha.toLowerCase(),ny=ha[0].toUpperCase()+ha.slice(1);un(ty,"on"+ny)}un(kh,"onAnimationEnd");un(Ih,"onAnimationIteration");un(Th,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Ch,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tv(r,t,void 0,e),e.currentTarget=null}function Ph(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Kc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Kc(i,a,u),s=l}}}if(Bs)throw e=sl,Bs=!1,sl=null,e}function H(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var r=e+"__bubble";n.has(r)||(Ah(t,e,2,!1),n.add(r))}function pa(e,t,n){var r=0;t&&(r|=4),Ah(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ss]){e[ss]=!0,bf.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||pa(n,!1,e),pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,pa("selectionchange",!1,t))}}function Ah(e,t,n,r){switch(fh(t)){case 1:var i=vv;break;case 4:i=yv;break;default:i=hu}n=i.bind(null,t,n,e),i=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ma(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=En(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jf(function(){var u=s,f=uu(n),p=[];e:{var m=Rh.get(e);if(m!==void 0){var v=mu,y=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":v=Dv;break;case"focusin":y="focus",v=la;break;case"focusout":y="blur",v=la;break;case"beforeblur":case"afterblur":v=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bv;break;case kh:case Ih:case Th:v=Iv;break;case Ch:v=Fv;break;case"scroll":v=_v;break;case"wheel":v=zv;break;case"copy":case"cut":case"paste":v=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mc}var _=(t&4)!==0,R=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,h!==null&&(g=yi(c,h),g!=null&&_.push(Ti(c,g,d)))),R)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,f),p.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==nl&&(y=n.relatedTarget||n.fromElement)&&(En(y)||y[Ct]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?En(y):null,y!==null&&(R=Bn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Uc,g="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Mc,g="onPointerLeave",h="onPointerEnter",c="pointer"),R=v==null?m:Jn(v),d=y==null?m:Jn(y),m=new _(g,c+"leave",v,n,f),m.target=R,m.relatedTarget=d,g=null,En(f)===u&&(_=new _(h,c+"enter",y,n,f),_.target=d,_.relatedTarget=R,g=_),R=g,v&&y)t:{for(_=v,h=y,c=0,d=_;d;d=Vn(d))c++;for(d=0,g=h;g;g=Vn(g))d++;for(;0<c-d;)_=Vn(_),c--;for(;0<d-c;)h=Vn(h),d--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=Vn(_),h=Vn(h)}_=null}else _=null;v!==null&&qc(p,m,v,_,!1),y!==null&&R!==null&&qc(p,R,y,_,!0)}}e:{if(m=u?Jn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Kv;else if(zc(m))if(yh)E=Xv;else{E=Yv;var S=qv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Qv);if(E&&(E=E(e,u))){vh(p,E,n,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Xa(m,"number",m.value)}switch(S=u?Jn(u):window,e){case"focusin":(zc(S)||S.contentEditable==="true")&&(Qn=S,ul=u,oi=null);break;case"focusout":oi=ul=Qn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Wc(p,n,f);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":Wc(p,n,f)}var w;if(vu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Yn?mh(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(ph&&n.locale!=="ko"&&(Yn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Yn&&(w=hh()):(Gt=f,pu="value"in Gt?Gt.value:Gt.textContent,Yn=!0)),S=Gs(u,I),0<S.length&&(I=new bc(I,e,null,n,f),p.push({event:I,listeners:S}),w?I.data=w:(w=gh(n),w!==null&&(I.data=w)))),(w=jv?Hv(e,n):Vv(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(f=new bc("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=w))}Ph(p,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yi(e,n),s!=null&&r.unshift(Ti(e,s,i)),s=yi(e,t),s!=null&&r.push(Ti(e,s,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=yi(n,s),l!=null&&o.unshift(Ti(n,l,a))):i||(l=yi(n,s),l!=null&&o.push(Ti(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var iy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(iy,`
`).replace(sy,"")}function os(e,t,n){if(t=Yc(t),Yc(e)!==t&&n)throw Error(k(425))}function Ks(){}var dl=null,fl=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc<"u"?function(e){return Qc.resolve(null).then(e).catch(ly)}:pl;function ly(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),st="__reactFiber$"+xr,Ci="__reactProps$"+xr,Ct="__reactContainer$"+xr,ml="__reactEvents$"+xr,uy="__reactListeners$"+xr,cy="__reactHandles$"+xr;function En(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xc(e);e!==null;){if(n=e[st])return n;e=Xc(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[st]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ao(e){return e[Ci]||null}var gl=[],Zn=-1;function cn(e){return{current:e}}function W(e){0>Zn||(e.current=gl[Zn],gl[Zn]=null,Zn--)}function j(e,t){Zn++,gl[Zn]=e.current,e.current=t}var ln={},pe=cn(ln),Pe=cn(!1),On=ln;function vr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function qs(){W(Pe),W(pe)}function Jc(e,t,n){if(pe.current!==ln)throw Error(k(168));j(pe,t),j(Pe,n)}function Nh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,qg(e)||"Unknown",i));return Q({},n,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,On=pe.current,j(pe,e),j(Pe,Pe.current),!0}function Zc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Nh(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,W(Pe),W(pe),j(pe,e)):W(Pe),j(Pe,n)}var gt=null,No=!1,va=!1;function Oh(e){gt===null?gt=[e]:gt.push(e)}function dy(e){No=!0,Oh(e)}function dn(){if(!va&&gt!==null){va=!0;var e=0,t=F;try{var n=gt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,No=!1}catch(i){throw gt!==null&&(gt=gt.slice(e+1)),nh(cu,dn),i}finally{F=t,va=!1}}return null}var er=[],tr=0,Qs=null,Xs=0,$e=[],ze=0,xn=null,yt=1,_t="";function _n(e,t){er[tr++]=Xs,er[tr++]=Qs,Qs=e,Xs=t}function xh(e,t,n){$e[ze++]=yt,$e[ze++]=_t,$e[ze++]=xn,xn=e;var r=yt;e=_t;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var s=32-Xe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yt=1<<32-Xe(t)+i|n<<i|r,_t=s+e}else yt=1<<s|n<<i|r,_t=e}function _u(e){e.return!==null&&(_n(e,1),xh(e,1,0))}function wu(e){for(;e===Qs;)Qs=er[--tr],er[tr]=null,Xs=er[--tr],er[tr]=null;for(;e===xn;)xn=$e[--ze],$e[ze]=null,_t=$e[--ze],$e[ze]=null,yt=$e[--ze],$e[ze]=null}var Ue=null,Le=null,K=!1,Qe=null;function Dh(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Le=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:yt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Le=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(K){var t=Le;if(t){var n=t;if(!ed(e,t)){if(vl(e))throw Error(k(418));t=Xt(n.nextSibling);var r=Ue;t&&ed(e,t)?Dh(r,n):(e.flags=e.flags&-4097|2,K=!1,Ue=e)}}else{if(vl(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,Ue=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function as(e){if(e!==Ue)return!1;if(!K)return td(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=Le)){if(vl(e))throw Lh(),Error(k(418));for(;t;)Dh(e,t),t=Xt(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Ue?Xt(e.stateNode.nextSibling):null;return!0}function Lh(){for(var e=Le;e;)e=Xt(e.nextSibling)}function yr(){Le=Ue=null,K=!1}function Su(e){Qe===null?Qe=[e]:Qe.push(e)}var fy=Nt.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Js=cn(null),Zs=null,nr=null,Eu=null;function ku(){Eu=nr=Zs=null}function Iu(e){var t=Js.current;W(Js),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){Zs=e,Eu=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Zs===null)throw Error(k(308));nr=e,Zs.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var kn=null;function Tu(e){kn===null?kn=[e]:kn.push(e)}function Uh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,b&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Tu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}function nd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Ft=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,f=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=Q({},p,m);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=p):f=f.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=p}}function rd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Mh=new Uf.Component().refs;function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=en(e),s=It(r,i);s.payload=t,n!=null&&(s.callback=n),t=Jt(e,s,i),t!==null&&(Je(t,e,i,r),ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=en(e),s=It(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Jt(e,s,i),t!==null&&(Je(t,e,i,r),ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=en(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(Je(t,e,r,n),ks(t,e,r))}};function id(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,s):!0}function Fh(e,t,n){var r=!1,i=ln,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Ae(t)?On:pe.current,r=t.contextTypes,s=(r=r!=null)?vr(e,i):ln),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mh,Cu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Ae(t)?On:pe.current,i.context=vr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Mh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function od(e){var t=e._init;return t(e._payload)}function $h(e){function t(h,c){if(e){var d=h.deletions;d===null?(h.deletions=[c],h.flags|=16):d.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=tn(h,c),h.index=0,h.sibling=null,h}function s(h,c,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<c?(h.flags|=2,c):d):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,d,g){return c===null||c.tag!==6?(c=Ia(d,h.mode,g),c.return=h,c):(c=i(c,d),c.return=h,c)}function l(h,c,d,g){var E=d.type;return E===qn?f(h,c,d.props.children,g,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&od(E)===c.type)?(g=i(c,d.props),g.ref=Wr(h,c,d),g.return=h,g):(g=As(d.type,d.key,d.props,null,h.mode,g),g.ref=Wr(h,c,d),g.return=h,g)}function u(h,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ta(d,h.mode,g),c.return=h,c):(c=i(c,d.children||[]),c.return=h,c)}function f(h,c,d,g,E){return c===null||c.tag!==7?(c=Rn(d,h.mode,g,E),c.return=h,c):(c=i(c,d),c.return=h,c)}function p(h,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ia(""+c,h.mode,d),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xi:return d=As(c.type,c.key,c.props,null,h.mode,d),d.ref=Wr(h,null,c),d.return=h,d;case Kn:return c=Ta(c,h.mode,d),c.return=h,c;case Mt:var g=c._init;return p(h,g(c._payload),d)}if(Qr(c)||zr(c))return c=Rn(c,h.mode,d,null),c.return=h,c;ls(h,c)}return null}function m(h,c,d,g){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(h,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xi:return d.key===E?l(h,c,d,g):null;case Kn:return d.key===E?u(h,c,d,g):null;case Mt:return E=d._init,m(h,c,E(d._payload),g)}if(Qr(d)||zr(d))return E!==null?null:f(h,c,d,g,null);ls(h,d)}return null}function v(h,c,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return h=h.get(d)||null,a(c,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:return h=h.get(g.key===null?d:g.key)||null,l(c,h,g,E);case Kn:return h=h.get(g.key===null?d:g.key)||null,u(c,h,g,E);case Mt:var S=g._init;return v(h,c,d,S(g._payload),E)}if(Qr(g)||zr(g))return h=h.get(d)||null,f(c,h,g,E,null);ls(c,g)}return null}function y(h,c,d,g){for(var E=null,S=null,w=c,I=c=0,U=null;w!==null&&I<d.length;I++){w.index>I?(U=w,w=null):U=w.sibling;var x=m(h,w,d[I],g);if(x===null){w===null&&(w=U);break}e&&w&&x.alternate===null&&t(h,w),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x,w=U}if(I===d.length)return n(h,w),K&&_n(h,I),E;if(w===null){for(;I<d.length;I++)w=p(h,d[I],g),w!==null&&(c=s(w,c,I),S===null?E=w:S.sibling=w,S=w);return K&&_n(h,I),E}for(w=r(h,w);I<d.length;I++)U=v(w,h,I,d[I],g),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?I:U.key),c=s(U,c,I),S===null?E=U:S.sibling=U,S=U);return e&&w.forEach(function(Oe){return t(h,Oe)}),K&&_n(h,I),E}function _(h,c,d,g){var E=zr(d);if(typeof E!="function")throw Error(k(150));if(d=E.call(d),d==null)throw Error(k(151));for(var S=E=null,w=c,I=c=0,U=null,x=d.next();w!==null&&!x.done;I++,x=d.next()){w.index>I?(U=w,w=null):U=w.sibling;var Oe=m(h,w,x.value,g);if(Oe===null){w===null&&(w=U);break}e&&w&&Oe.alternate===null&&t(h,w),c=s(Oe,c,I),S===null?E=Oe:S.sibling=Oe,S=Oe,w=U}if(x.done)return n(h,w),K&&_n(h,I),E;if(w===null){for(;!x.done;I++,x=d.next())x=p(h,x.value,g),x!==null&&(c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return K&&_n(h,I),E}for(w=r(h,w);!x.done;I++,x=d.next())x=v(w,h,I,x.value,g),x!==null&&(e&&x.alternate!==null&&w.delete(x.key===null?I:x.key),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return e&&w.forEach(function(pn){return t(h,pn)}),K&&_n(h,I),E}function R(h,c,d,g){if(typeof d=="object"&&d!==null&&d.type===qn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Xi:e:{for(var E=d.key,S=c;S!==null;){if(S.key===E){if(E=d.type,E===qn){if(S.tag===7){n(h,S.sibling),c=i(S,d.props.children),c.return=h,h=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&od(E)===S.type){n(h,S.sibling),c=i(S,d.props),c.ref=Wr(h,S,d),c.return=h,h=c;break e}n(h,S);break}else t(h,S);S=S.sibling}d.type===qn?(c=Rn(d.props.children,h.mode,g,d.key),c.return=h,h=c):(g=As(d.type,d.key,d.props,null,h.mode,g),g.ref=Wr(h,c,d),g.return=h,h=g)}return o(h);case Kn:e:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(h,c.sibling),c=i(c,d.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Ta(d,h.mode,g),c.return=h,h=c}return o(h);case Mt:return S=d._init,R(h,c,S(d._payload),g)}if(Qr(d))return y(h,c,d,g);if(zr(d))return _(h,c,d,g);ls(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,d),c.return=h,h=c):(n(h,c),c=Ia(d,h.mode,g),c.return=h,h=c),o(h)):n(h,c)}return R}var _r=$h(!0),zh=$h(!1),Bi={},ut=cn(Bi),Ri=cn(Bi),Pi=cn(Bi);function In(e){if(e===Bi)throw Error(k(174));return e}function Ru(e,t){switch(j(Pi,t),j(Ri,e),j(ut,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Za(t,e)}W(ut),j(ut,t)}function wr(){W(ut),W(Ri),W(Pi)}function Bh(e){In(Pi.current);var t=In(ut.current),n=Za(t,e.type);t!==n&&(j(Ri,e),j(ut,n))}function Pu(e){Ri.current===e&&(W(ut),W(Ri))}var q=cn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function Au(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Is=Nt.ReactCurrentDispatcher,_a=Nt.ReactCurrentBatchConfig,Dn=0,Y=null,re=null,se=null,no=!1,ai=!1,Ai=0,hy=0;function de(){throw Error(k(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Ou(e,t,n,r,i,s){if(Dn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?vy:yy,e=n(r,i),ai){s=0;do{if(ai=!1,Ai=0,25<=s)throw Error(k(301));s+=1,se=re=null,t.updateQueue=null,Is.current=_y,e=n(r,i)}while(ai)}if(Is.current=ro,t=re!==null&&re.next!==null,Dn=0,se=re=Y=null,no=!1,t)throw Error(k(300));return e}function xu(){var e=Ai!==0;return Ai=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Y.memoizedState=se=e:se=se.next=e,se}function Ve(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=se===null?Y.memoizedState:se.next;if(t!==null)se=t,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?Y.memoizedState=se=e:se=se.next=e}return se}function Ni(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Dn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Y.lanes|=f,Ln|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,Ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Ce=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function jh(){}function Hh(e,t){var n=Y,r=Ve(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,Du(Gh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Oi(9,Wh.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));Dn&30||Vh(n,t,i)}return i}function Vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wh(e,t,n,r){t.value=n,t.getSnapshot=r,Kh(t)&&qh(e)}function Gh(e,t,n){return n(function(){Kh(t)&&qh(e)})}function Kh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function qh(e){var t=Rt(e,1);t!==null&&Je(t,e,1,-1)}function ad(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=gy.bind(null,Y,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yh(){return Ve().memoizedState}function Ts(e,t,n,r){var i=rt();Y.flags|=e,i.memoizedState=Oi(1|t,n,void 0,r===void 0?null:r)}function xo(e,t,n,r){var i=Ve();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Nu(r,o.deps)){i.memoizedState=Oi(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Oi(1|t,n,s,r)}function ld(e,t){return Ts(8390656,8,e,t)}function Du(e,t){return xo(2048,8,e,t)}function Qh(e,t){return xo(4,2,e,t)}function Xh(e,t){return xo(4,4,e,t)}function Jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,n){return n=n!=null?n.concat([e]):null,xo(4,4,Jh.bind(null,t,e),n)}function Lu(){}function ep(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tp(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function np(e,t,n){return Dn&21?(et(n,t)||(n=sh(),Y.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function py(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=_a.transition;_a.transition={};try{e(!1),t()}finally{F=n,_a.transition=r}}function rp(){return Ve().memoizedState}function my(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ip(e))sp(t,n);else if(n=Uh(e,t,n,r),n!==null){var i=_e();Je(n,e,r,i),op(n,t,r)}}function gy(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ip(e))sp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,Tu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Uh(e,t,i,r),n!==null&&(i=_e(),Je(n,e,r,i),op(n,t,r))}}function ip(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function sp(e,t){ai=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function op(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}var ro={readContext:He,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},vy={readContext:He,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:ld,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4194308,4,Jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ts(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=my.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ad,useDebugValue:Lu,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ad(!1),t=e[0];return e=py.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=rt();if(K){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));Dn&30||Vh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ld(Gh.bind(null,r,s,e),[e]),r.flags|=2048,Oi(9,Wh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(K){var n=_t,r=yt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yy={readContext:He,useCallback:ep,useContext:He,useEffect:Du,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Xh,useMemo:tp,useReducer:wa,useRef:Yh,useState:function(){return wa(Ni)},useDebugValue:Lu,useDeferredValue:function(e){var t=Ve();return np(t,re.memoizedState,e)},useTransition:function(){var e=wa(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Hh,useId:rp,unstable_isNewReconciler:!1},_y={readContext:He,useCallback:ep,useContext:He,useEffect:Du,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Xh,useMemo:tp,useReducer:Sa,useRef:Yh,useState:function(){return Sa(Ni)},useDebugValue:Lu,useDeferredValue:function(e){var t=Ve();return re===null?t.memoizedState=e:np(t,re.memoizedState,e)},useTransition:function(){var e=Sa(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:Hh,useId:rp,unstable_isNewReconciler:!1};function Sr(e,t){try{var n="",r=t;do n+=Kg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function ap(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,xl=r),El(e,t)},n}function lp(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ud(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ly.bind(null,e,t,n),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var Sy=Nt.ReactCurrentOwner,Ce=!1;function ve(e,t,n,r){t.child=e===null?zh(t,null,n,r):_r(t,e.child,n,r)}function fd(e,t,n,r,i){n=n.render;var s=t.ref;return dr(t,i),r=Ou(e,t,n,r,s,i),n=xu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(K&&n&&_u(t),t.flags|=1,ve(e,t,r,i),t.child)}function hd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ju(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,up(e,t,s,r,i)):(e=As(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(o,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=tn(s,r),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ki(s,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return kl(e,t,n,r,i)}function cp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(ir,De),De|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(ir,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(ir,De),De|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,j(ir,De),De|=r;return ve(e,t,i,n),t.child}function dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var s=Ae(n)?On:pe.current;return s=vr(t,s),dr(t,i),n=Ou(e,t,n,r,s,i),r=xu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(K&&r&&_u(t),t.flags|=1,ve(e,t,n,i),t.child)}function pd(e,t,n,r,i){if(Ae(n)){var s=!0;Ys(t)}else s=!1;if(dr(t,i),t.stateNode===null)Cs(e,t),Fh(t,n,r),Sl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Ae(n)?On:pe.current,u=vr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sd(t,o,r,u),Ft=!1;var m=t.memoizedState;o.state=m,eo(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Pe.current||Ft?(typeof f=="function"&&(wl(t,n,f,r),l=t.memoizedState),(a=Ft||id(t,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),o.props=u,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Ae(n)?On:pe.current,l=vr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&sd(t,o,r,l),Ft=!1,m=t.memoizedState,o.state=m,eo(t,r,o,i);var y=t.memoizedState;a!==p||m!==y||Pe.current||Ft?(typeof v=="function"&&(wl(t,n,v,r),y=t.memoizedState),(u=Ft||id(t,n,u,r,m,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,s,i)}function Il(e,t,n,r,i,s){dp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Zc(t,n,!1),Pt(e,t,s);r=t.stateNode,Sy.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,a,s)):ve(e,t,a,s),t.memoizedState=r.state,i&&Zc(t,n,!0),t.child}function fp(e){var t=e.stateNode;t.pendingContext?Jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jc(e,t.context,!1),Ru(e,t.containerInfo)}function md(e,t,n,r,i){return yr(),Su(i),t.flags|=256,ve(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hp(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(q,i&1),e===null)return yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uo(o,r,0,null),e=Rn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Cl(n),t.memoizedState=Tl,e):Uu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ey(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tn(a,s):(s=Rn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Cl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return s=e.child,e=s.sibling,r=tn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uu(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,r){return r!==null&&Su(r),_r(t,e.child,null,n),e=Uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ey(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ea(Error(k(422))),us(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Uo({mode:"visible",children:r.children},i,0,null),s=Rn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&_r(t,e.child,null,o),t.child.memoizedState=Cl(o),t.memoizedState=Tl,s);if(!(t.mode&1))return us(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Ea(s,r,void 0),us(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(e,i),Je(r,e,i,-1))}return Bu(),r=Ea(Error(k(421))),us(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Uy.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Xt(i.nextSibling),Ue=t,K=!0,Qe=null,e!==null&&($e[ze++]=yt,$e[ze++]=_t,$e[ze++]=xn,yt=e.id,_t=e.overflow,xn=t),t=Uu(t,r.children),t.flags|=4096,t)}function gd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function ka(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,t);else if(e.tag===19)gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ka(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ka(t,!0,n,null,s);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ky(e,t,n){switch(t.tag){case 3:fp(t),yr();break;case 5:Bh(t);break;case 1:Ae(t.type)&&Ys(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?hp(e,t,n):(j(q,q.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);j(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,cp(e,t,n)}return Pt(e,t,n)}var mp,Rl,gp,vp;mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};gp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(ut.current);var s=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Ja(e,i),r=Ja(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}el(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Iy(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ae(t.type)&&qs(),fe(t),null;case 3:return r=t.stateNode,wr(),W(Pe),W(pe),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Ul(Qe),Qe=null))),Rl(e,t),fe(t),null;case 5:Pu(t);var i=In(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=In(ut.current),as(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[Ci]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)H(Jr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Tc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Rc(r,s),H("invalid",r)}el(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",""+a]):gi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ji(r),Cc(r,s,!0);break;case"textarea":Ji(r),Pc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[st]=t,e[Ci]=r,mp(e,t,!1,!1),t.stateNode=e;e:{switch(o=tl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)H(Jr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Tc(e,r),i=Ya(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Rc(e,r),i=Ja(e,r),H("invalid",e);break;default:i=r}el(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vi(e,l):typeof l=="number"&&vi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&su(e,s,l,o))}switch(n){case"input":Ji(e),Cc(e,r,!1);break;case"textarea":Ji(e),Pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=In(Pi.current),In(ut.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return fe(t),null;case 13:if(W(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128))Lh(),yr(),t.flags|=98560,s=!1;else if(s=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[st]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),s=!1}else Qe!==null&&(Ul(Qe),Qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):Bu())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return wr(),Rl(e,t),e===null&&Ii(t.stateNode.containerInfo),fe(t),null;case 10:return Iu(t.type._context),fe(t),null;case 17:return Ae(t.type)&&qs(),fe(t),null;case 19:if(W(q),s=t.memoizedState,s===null)return fe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=to(e),o!==null){for(t.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Er&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=to(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return fe(t),null}else 2*Z()-s.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,j(q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Ty(e,t){switch(wu(t),t.tag){case 1:return Ae(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),W(Pe),W(pe),Au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pu(t),null;case 13:if(W(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(q),null;case 4:return wr(),null;case 10:return Iu(t.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var cs=!1,he=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,C=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){J(e,t,r)}}var vd=!1;function Ry(e,t){if(dl=Vs,e=Sh(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++f===r&&(l=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},Vs=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,R=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:qe(t.type,_),R);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){J(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=vd,vd=!1,y}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pl(t,n,s)}i=i.next}while(i!==r)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ci],delete t[ml],delete t[uy],delete t[cy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _p(e){return e.tag===5||e.tag===3||e.tag===4}function yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}var le=null,Ye=!1;function Lt(e,t,n){for(n=n.child;n!==null;)wp(e,t,n),n=n.sibling}function wp(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:he||rr(n,t);case 6:var r=le,i=Ye;le=null,Lt(e,t,n),le=r,Ye=i,le!==null&&(Ye?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ye?(e=le,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Si(e)):ga(le,n.stateNode));break;case 4:r=le,i=Ye,le=n.stateNode.containerInfo,Ye=!0,Lt(e,t,n),le=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pl(n,t,o),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!he&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Lt(e,t,n),he=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function _d(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cy),t.forEach(function(r){var i=by.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ye=!1;break e;case 3:le=a.stateNode.containerInfo,Ye=!0;break e;case 4:le=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(le===null)throw Error(k(160));wp(s,o,i),le=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sp(t,e),t=t.sibling}function Sp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),r&4){try{li(3,e,e.return),Do(3,e)}catch(_){J(e,e.return,_)}try{li(5,e,e.return)}catch(_){J(e,e.return,_)}}break;case 1:Ke(t,e),nt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Ke(t,e),nt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(_){J(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jf(i,s),tl(a,o);var u=tl(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?Kf(i,p):f==="dangerouslySetInnerHTML"?Wf(i,p):f==="children"?vi(i,p):su(i,f,p,u)}switch(a){case"input":Qa(i,s);break;case"textarea":Hf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ar(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ci]=s}catch(_){J(e,e.return,_)}}break;case 6:if(Ke(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){J(e,e.return,_)}}break;case 3:if(Ke(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(_){J(e,e.return,_)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=Z())),r&4&&_d(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||f,Ke(t,e),he=u):Ke(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(p=C=f;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:li(4,m,m.return);break;case 1:rr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){J(r,n,_)}}break;case 5:rr(m,m.return);break;case 22:if(m.memoizedState!==null){Sd(p);continue}}v!==null?(v.return=m,C=v):Sd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gf("display",o))}catch(_){J(e,e.return,_)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){J(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ke(t,e),nt(e),r&4&&_d(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_p(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var s=yd(e);Ol(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yd(e);Nl(e,a,o);break;default:throw Error(k(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Py(e,t,n){C=e,Ep(e)}function Ep(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=cs;var u=he;if(cs=o,(he=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Ed(i):l!==null?(l.return=o,C=l):Ed(i);for(;s!==null;)C=s,Ep(s),s=s.sibling;C=i,cs=a,he=u}wd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):wd(e)}}function wd(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Do(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&rd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Si(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&Al(t)}catch(m){J(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Sd(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ed(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Do(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var s=t.return;try{Al(t)}catch(l){J(t,s,l)}break;case 5:var o=t.return;try{Al(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Ay=Math.ceil,io=Nt.ReactCurrentDispatcher,bu=Nt.ReactCurrentOwner,je=Nt.ReactCurrentBatchConfig,b=0,ae=null,ne=null,ue=0,De=0,ir=cn(0),ie=0,xi=null,Ln=0,Lo=0,Mu=0,ui=null,Te=null,Fu=0,Er=1/0,pt=null,so=!1,xl=null,Zt=null,ds=!1,Kt=null,oo=0,ci=0,Dl=null,Rs=-1,Ps=0;function _e(){return b&6?Z():Rs!==-1?Rs:Rs=Z()}function en(e){return e.mode&1?b&2&&ue!==0?ue&-ue:fy.transition!==null?(Ps===0&&(Ps=sh()),Ps):(e=F,e!==0||(e=window.event,e=e===void 0?16:fh(e.type)),e):1}function Je(e,t,n,r){if(50<ci)throw ci=0,Dl=null,Error(k(185));Fi(e,n,r),(!(b&2)||e!==ae)&&(e===ae&&(!(b&2)&&(Lo|=n),ie===4&&zt(e,ue)),Ne(e,r),n===1&&b===0&&!(t.mode&1)&&(Er=Z()+500,No&&dn()))}function Ne(e,t){var n=e.callbackNode;fv(e,t);var r=Hs(e,e===ae?ue:0);if(r===0)n!==null&&Oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Oc(n),t===1)e.tag===0?dy(kd.bind(null,e)):Oh(kd.bind(null,e)),ay(function(){!(b&6)&&dn()}),n=null;else{switch(oh(r)){case 1:n=cu;break;case 4:n=rh;break;case 16:n=js;break;case 536870912:n=ih;break;default:n=js}n=Np(n,kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kp(e,t){if(Rs=-1,Ps=0,b&6)throw Error(k(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Hs(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=b;b|=2;var s=Tp();(ae!==e||ue!==t)&&(pt=null,Er=Z()+500,Cn(e,t));do try{xy();break}catch(a){Ip(e,a)}while(1);ku(),io.current=s,b=i,ne!==null?t=0:(ae=null,ue=0,t=ie)}if(t!==0){if(t===2&&(i=ol(e),i!==0&&(r=i,t=Ll(e,i))),t===1)throw n=xi,Cn(e,0),zt(e,r),Ne(e,Z()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ny(i)&&(t=ao(e,r),t===2&&(s=ol(e),s!==0&&(r=s,t=Ll(e,s))),t===1))throw n=xi,Cn(e,0),zt(e,r),Ne(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:wn(e,Te,pt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Fu+500-Z(),10<t)){if(Hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pl(wn.bind(null,e,Te,pt),t);break}wn(e,Te,pt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ay(r/1960))-r,10<r){e.timeoutHandle=pl(wn.bind(null,e,Te,pt),r);break}wn(e,Te,pt);break;case 5:wn(e,Te,pt);break;default:throw Error(k(329))}}}return Ne(e,Z()),e.callbackNode===n?kp.bind(null,e):null}function Ll(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ul(t)),e}function Ul(e){Te===null?Te=e:Te.push.apply(Te,e)}function Ny(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Mu,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function kd(e){if(b&6)throw Error(k(327));fr();var t=Hs(e,0);if(!(t&1))return Ne(e,Z()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=ol(e);r!==0&&(t=r,n=Ll(e,r))}if(n===1)throw n=xi,Cn(e,0),zt(e,t),Ne(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Te,pt),Ne(e,Z()),null}function $u(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Er=Z()+500,No&&dn())}}function Un(e){Kt!==null&&Kt.tag===0&&!(b&6)&&fr();var t=b;b|=1;var n=je.transition,r=F;try{if(je.transition=null,F=1,e)return e()}finally{F=r,je.transition=n,b=t,!(b&6)&&dn()}}function zu(){De=ir.current,W(ir)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oy(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:wr(),W(Pe),W(pe),Au();break;case 5:Pu(r);break;case 4:wr();break;case 13:W(q);break;case 19:W(q);break;case 10:Iu(r.type._context);break;case 22:case 23:zu()}n=n.return}if(ae=e,ne=e=tn(e.current,null),ue=De=t,ie=0,xi=null,Mu=Lo=Ln=0,Te=ui=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kn=null}return e}function Ip(e,t){do{var n=ne;try{if(ku(),Is.current=ro,no){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(Dn=0,se=re=Y=null,ai=!1,Ai=0,bu.current=null,n===null||n.return===null){ie=1,xi=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=cd(o);if(v!==null){v.flags&=-257,dd(v,o,a,s,t),v.mode&1&&ud(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){ud(s,u,t),Bu();break e}l=Error(k(426))}}else if(K&&a.mode&1){var R=cd(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),dd(R,o,a,s,t),Su(Sr(l,a));break e}}s=l=Sr(l,a),ie!==4&&(ie=2),ui===null?ui=[s]:ui.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=ap(s,l,t);nd(s,h);break e;case 1:a=l;var c=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Zt===null||!Zt.has(d)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=lp(s,a,t);nd(s,g);break e}}s=s.return}while(s!==null)}Rp(n)}catch(E){t=E,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Tp(){var e=io.current;return io.current=ro,e===null?ro:e}function Bu(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Ln&268435455)&&!(Lo&268435455)||zt(ae,ue)}function ao(e,t){var n=b;b|=2;var r=Tp();(ae!==e||ue!==t)&&(pt=null,Cn(e,t));do try{Oy();break}catch(i){Ip(e,i)}while(1);if(ku(),b=n,io.current=r,ne!==null)throw Error(k(261));return ae=null,ue=0,ie}function Oy(){for(;ne!==null;)Cp(ne)}function xy(){for(;ne!==null&&!rv();)Cp(ne)}function Cp(e){var t=Ap(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Rp(e):ne=t,bu.current=null}function Rp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ty(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=Iy(n,t,De),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function wn(e,t,n){var r=F,i=je.transition;try{je.transition=null,F=1,Dy(e,t,n,r)}finally{je.transition=i,F=r}return null}function Dy(e,t,n,r){do fr();while(Kt!==null);if(b&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(hv(e,s),e===ae&&(ne=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,Np(js,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=je.transition,je.transition=null;var o=F;F=1;var a=b;b|=4,bu.current=null,Ry(e,n),Sp(n,e),Zv(fl),Vs=!!dl,fl=dl=null,e.current=n,Py(n),iv(),b=a,F=o,je.transition=s}else e.current=n;if(ds&&(ds=!1,Kt=e,oo=i),s=e.pendingLanes,s===0&&(Zt=null),av(n.stateNode),Ne(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=xl,xl=null,e;return oo&1&&e.tag!==0&&fr(),s=e.pendingLanes,s&1?e===Dl?ci++:(ci=0,Dl=e):ci=0,dn(),null}function fr(){if(Kt!==null){var e=oh(oo),t=je.transition,n=F;try{if(je.transition=null,F=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,oo=0,b&6)throw Error(k(331));var i=b;for(b|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:li(8,f,s)}var p=f.child;if(p!==null)p.return=f,C=p;else for(;C!==null;){f=C;var m=f.sibling,v=f.return;if(yp(f),f===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:li(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}var c=e.current;for(C=c;C!==null;){o=C;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,C=d;else e:for(o=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(E){J(a,a.return,E)}if(a===o){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(b=i,dn(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{F=n,je.transition=t}}return!1}function Id(e,t,n){t=Sr(n,t),t=ap(e,t,1),e=Jt(e,t,1),t=_e(),e!==null&&(Fi(e,1,t),Ne(e,t))}function J(e,t,n){if(e.tag===3)Id(e,e,n);else for(;t!==null;){if(t.tag===3){Id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Sr(n,e),e=lp(t,e,1),t=Jt(t,e,1),e=_e(),t!==null&&(Fi(t,1,e),Ne(t,e));break}}t=t.return}}function Ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>Z()-Fu?Cn(e,0):Mu|=n),Ne(e,t)}function Pp(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=_e();e=Rt(e,t),e!==null&&(Fi(e,t,n),Ne(e,n))}function Uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pp(e,n)}function by(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Pp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,ky(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&xh(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cs(e,t),e=t.pendingProps;var i=vr(t,pe.current);dr(t,n),i=Ou(null,t,r,e,i,n);var s=xu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(s=!0,Ys(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cu(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,Sl(t,r,e,n),t=Il(null,t,r,!0,s,n)):(t.tag=0,K&&s&&_u(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fy(r),e=qe(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=pd(null,t,r,e,n);break e;case 11:t=fd(null,t,r,e,n);break e;case 14:t=hd(null,t,r,qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),pd(e,t,r,i,n);case 3:e:{if(fp(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,bh(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Sr(Error(k(423)),t),t=md(e,t,r,n,i);break e}else if(r!==i){i=Sr(Error(k(424)),t),t=md(e,t,r,n,i);break e}else for(Le=Xt(t.stateNode.containerInfo.firstChild),Ue=t,K=!0,Qe=null,n=zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){t=Pt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Bh(t),e===null&&yl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,hl(r,i)?o=null:s!==null&&hl(r,s)&&(t.flags|=32),dp(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&yl(t),null;case 13:return hp(e,t,n);case 4:return Ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),fd(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,j(Js,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!Pe.current){t=Pt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=It(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_l(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_l(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dr(t,n),i=He(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),hd(e,t,r,i,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Cs(e,t),t.tag=1,Ae(r)?(e=!0,Ys(t)):e=!1,dr(t,n),Fh(t,r,i),Sl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return pp(e,t,n);case 22:return cp(e,t,n)}throw Error(k(156,t.tag))};function Np(e,t){return nh(e,t)}function My(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new My(e,t,n,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fy(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===lu)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function As(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ju(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return Rn(n.children,i,s,t);case ou:o=8,i|=8;break;case Wa:return e=Be(12,n,t,i|2),e.elementType=Wa,e.lanes=s,e;case Ga:return e=Be(13,n,t,i),e.elementType=Ga,e.lanes=s,e;case Ka:return e=Be(19,n,t,i),e.elementType=Ka,e.lanes=s,e;case $f:return Uo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:o=10;break e;case Ff:o=9;break e;case au:o=11;break e;case lu:o=14;break e;case Mt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Be(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Rn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Uo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=$f,e.lanes=n,e.stateNode={isHidden:!1},e}function Ia(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Ta(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $y(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,s,o,a,l){return e=new $y(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Be(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(s),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Op(e){if(!e)return ln;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Nh(e,n,t)}return t}function xp(e,t,n,r,i,s,o,a,l){return e=Hu(n,r,!0,e,i,s,o,a,l),e.context=Op(null),n=e.current,r=_e(),i=en(n),s=It(r,i),s.callback=t??null,Jt(n,s,i),e.current.lanes=i,Fi(e,i,r),Ne(e,r),e}function bo(e,t,n,r){var i=t.current,s=_e(),o=en(i);return n=Op(n),t.context===null?t.context=n:t.pendingContext=n,t=It(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,o),e!==null&&(Je(e,i,o,s),ks(e,i,o)),o}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vu(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function By(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}Mo.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));bo(e,t,null,null)};Mo.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){bo(null,e,null,null)}),t[Ct]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&dh(e)}};function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function jy(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lo(o);s.call(u)}}var o=xp(t,r,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=o,e[Ct]=o.current,Ii(e.nodeType===8?e.parentNode:e),Un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lo(l);a.call(u)}}var l=Hu(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=l,e[Ct]=l.current,Ii(e.nodeType===8?e.parentNode:e),Un(function(){bo(t,l,n,r)}),l}function $o(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lo(o);a.call(l)}}bo(t,o,e,i)}else o=jy(n,t,e,i,r);return lo(o)}ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(du(t,n|1),Ne(t,Z()),!(b&6)&&(Er=Z()+500,dn()))}break;case 13:Un(function(){var r=Rt(e,1);if(r!==null){var i=_e();Je(r,e,1,i)}}),Vu(e,1)}};fu=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=_e();Je(t,e,134217728,n)}Vu(e,134217728)}};lh=function(e){if(e.tag===13){var t=en(e),n=Rt(e,t);if(n!==null){var r=_e();Je(n,e,t,r)}Vu(e,t)}};uh=function(){return F};ch=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};rl=function(e,t,n){switch(t){case"input":if(Qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(k(90));Bf(r),Qa(r,i)}}}break;case"textarea":Hf(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Qf=$u;Xf=Un;var Hy={usingClientEntryPoint:!1,Events:[zi,Jn,Ao,qf,Yf,$u]},Kr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vy={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{To=fs.inject(Vy),lt=fs}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(t))throw Error(k(200));return zy(e,t,null,n)};Me.createRoot=function(e,t){if(!Gu(e))throw Error(k(299));var n=!1,r="",i=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[Ct]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Wu(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=eh(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return Un(e)};Me.hydrate=function(e,t,n){if(!Fo(t))throw Error(k(200));return $o(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xp(t,null,e,1,n??null,i,!1,s,o),e[Ct]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};Me.render=function(e,t,n){if(!Fo(t))throw Error(k(200));return $o(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(k(40));return e._reactRootContainer?(Un(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Me.unstable_batchedUpdates=$u;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return $o(e,t,n,!1,r)};Me.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Me})(Bg);var Rd=ja;Ba.createRoot=Rd.createRoot,Ba.hydrateRoot=Rd.hydrateRoot;const Wy="modulepreload",Gy=function(e,t){return new URL(e,t).href},Pd={},Ky=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Gy(s,r),s in Pd)return;Pd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Wy,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
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
 */const Lp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},qy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):qy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new Yy;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Yy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qy=function(e){const t=Lp(e);return Up.encodeByteArray(t,!0)},uo=function(e){return Qy(e).replace(/\./g,"")},bp=function(e){try{return Up.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jy=()=>Xy().__FIREBASE_DEFAULTS__,Zy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},e0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bp(e[1]);return t&&JSON.parse(t)},Ku=()=>{try{return Jy()||Zy()||e0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Mp=e=>{var t,n;return(n=(t=Ku())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},t0=e=>{const t=Mp(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Fp=()=>{var e;return(e=Ku())===null||e===void 0?void 0:e.config},$p=e=>{var t;return(t=Ku())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class n0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function r0(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[uo(JSON.stringify(n)),uo(JSON.stringify(o)),a].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function s0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function o0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function a0(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function l0(){try{return typeof indexedDB=="object"}catch{return!1}}function u0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const c0="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=c0,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?d0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function d0(e,t){return e.replace(f0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const f0=/\{\$([^}]+)}/g;function h0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function co(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ad(s)&&Ad(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ad(e){return e!==null&&typeof e=="object"}/**
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
 */function Hi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ei(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function p0(e,t){const n=new m0(e,t);return n.subscribe.bind(n)}class m0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ca(){}/**
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
 */function Ee(e){return e&&e._delegate?e._delegate:e}class bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class v0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new n0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_0(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y0(e){return e===Sn?void 0:e}function _0(e){return e.instantiationMode==="EAGER"}/**
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
 */class w0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new v0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const S0={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},E0=B.INFO,k0={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},I0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=k0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zp{constructor(t){this.name=t,this._logLevel=E0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?S0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const T0=(e,t)=>t.some(n=>e instanceof n);let Nd,Od;function C0(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R0(){return Od||(Od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,bl=new WeakMap,jp=new WeakMap,Ra=new WeakMap,qu=new WeakMap;function P0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(nn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bp.set(n,e)}).catch(()=>{}),qu.set(t,e),t}function A0(e){if(bl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});bl.set(e,t)}let Ml={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function N0(e){Ml=e(Ml)}function O0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pa(this),t,...n);return jp.set(r,t.sort?t.sort():[t]),nn(r)}:R0().includes(e)?function(...t){return e.apply(Pa(this),t),nn(Bp.get(this))}:function(...t){return nn(e.apply(Pa(this),t))}}function x0(e){return typeof e=="function"?O0(e):(e instanceof IDBTransaction&&A0(e),T0(e,C0())?new Proxy(e,Ml):e)}function nn(e){if(e instanceof IDBRequest)return P0(e);if(Ra.has(e))return Ra.get(e);const t=x0(e);return t!==e&&(Ra.set(e,t),qu.set(t,e)),t}const Pa=e=>qu.get(e);function D0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const L0=["get","getKey","getAll","getAllKeys","count"],U0=["put","add","delete","clear"],Aa=new Map;function xd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Aa.get(t))return Aa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=U0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Aa.set(t,s),s}N0(e=>({...e,get:(t,n,r)=>xd(t,n)||e.get(t,n,r),has:(t,n)=>!!xd(t,n)||e.has(t,n)}));/**
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
 */class b0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function M0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fl="@firebase/app",Dd="0.10.1";/**
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
 */const Mn=new zp("@firebase/app"),F0="@firebase/app-compat",$0="@firebase/analytics-compat",z0="@firebase/analytics",B0="@firebase/app-check-compat",j0="@firebase/app-check",H0="@firebase/auth",V0="@firebase/auth-compat",W0="@firebase/database",G0="@firebase/database-compat",K0="@firebase/functions",q0="@firebase/functions-compat",Y0="@firebase/installations",Q0="@firebase/installations-compat",X0="@firebase/messaging",J0="@firebase/messaging-compat",Z0="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",n_="@firebase/remote-config-compat",r_="@firebase/storage",i_="@firebase/storage-compat",s_="@firebase/firestore",o_="@firebase/firestore-compat",a_="firebase",l_="10.11.0";/**
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
 */const $l="[DEFAULT]",u_={[Fl]:"fire-core",[F0]:"fire-core-compat",[z0]:"fire-analytics",[$0]:"fire-analytics-compat",[j0]:"fire-app-check",[B0]:"fire-app-check-compat",[H0]:"fire-auth",[V0]:"fire-auth-compat",[W0]:"fire-rtdb",[G0]:"fire-rtdb-compat",[K0]:"fire-fn",[q0]:"fire-fn-compat",[Y0]:"fire-iid",[Q0]:"fire-iid-compat",[X0]:"fire-fcm",[J0]:"fire-fcm-compat",[Z0]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[n_]:"fire-rc-compat",[r_]:"fire-gcs",[i_]:"fire-gcs-compat",[s_]:"fire-fst",[o_]:"fire-fst-compat","fire-js":"fire-js",[a_]:"fire-js-all"};/**
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
 */const fo=new Map,c_=new Map,zl=new Map;function Ld(e,t){try{e.container.addComponent(t)}catch(n){Mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kr(e){const t=e.name;if(zl.has(t))return Mn.debug(`There were multiple attempts to register component ${t}.`),!1;zl.set(t,e);for(const n of fo.values())Ld(n,e);for(const n of c_.values())Ld(n,e);return!0}function Yu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wt(e){return e.settings!==void 0}/**
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
 */const d_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},rn=new ji("app","Firebase",d_);/**
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
 */class f_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=l_;function Hp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:$l,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Fp()),!n)throw rn.create("no-options");const s=fo.get(i);if(s){if(co(n,s.options)&&co(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new w0(i);for(const l of zl.values())o.addComponent(l);const a=new f_(n,r,o);return fo.set(i,a),a}function Vp(e=$l){const t=fo.get(e);if(!t&&e===$l&&Fp())return Hp();if(!t)throw rn.create("no-app",{appName:e});return t}function sn(e,t,n){var r;let i=(r=u_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}kr(new bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const h_="firebase-heartbeat-database",p_=1,Di="firebase-heartbeat-store";let Na=null;function Wp(){return Na||(Na=D0(h_,p_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(e=>{throw rn.create("idb-open",{originalErrorMessage:e.message})})),Na}async function m_(e){try{const n=(await Wp()).transaction(Di),r=await n.objectStore(Di).get(Gp(e));return await n.done,r}catch(t){if(t instanceof Ot)Mn.warn(t.message);else{const n=rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(n.message)}}}async function Ud(e,t){try{const r=(await Wp()).transaction(Di,"readwrite");await r.objectStore(Di).put(t,Gp(e)),await r.done}catch(n){if(n instanceof Ot)Mn.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function Gp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const g_=1024,v_=30*24*60*60*1e3;class y_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=v_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bd(),{heartbeatsToSend:r,unsentEntries:i}=__(this._heartbeatsCache.heartbeats),s=uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bd(){return new Date().toISOString().substring(0,10)}function __(e,t=g_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Md(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class w_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l0()?u0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Md(e){return uo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function S_(e){kr(new bn("platform-logger",t=>new b0(t),"PRIVATE")),kr(new bn("heartbeat",t=>new y_(t),"PRIVATE")),sn(Fl,Dd,e),sn(Fl,Dd,"esm2017"),sn("fire-js","")}S_("");function Qu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Kp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E_=Kp,qp=new ji("auth","Firebase",Kp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new zp("@firebase/auth");function k_(e,...t){ho.logLevel<=B.WARN&&ho.warn(`Auth (${Dr}): ${e}`,...t)}function Ns(e,...t){ho.logLevel<=B.ERROR&&ho.error(`Auth (${Dr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,...t){throw Xu(e,...t)}function ct(e,...t){return Xu(e,...t)}function Yp(e,t,n){const r=Object.assign(Object.assign({},E_()),{[t]:n});return new ji("auth","Firebase",r).create(t,{appName:e.name})}function on(e){return Yp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qp.create(e,...t)}function A(e,t,...n){if(!e)throw Xu(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ns(t),new Error(t)}function At(e,t){e||St(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function I_(){return Fd()==="http:"||Fd()==="https:"}function Fd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||s0()||"connection"in navigator)?navigator.onLine:!0}function C_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=i0()||o0()}get(){return T_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Vi(3e4,6e4);function jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return Xp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Qp.fetch()(Jp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Xp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},R_),t);try{const i=new N_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw hs(e,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yp(e,f,u);tt(e,f)}}catch(i){if(i instanceof Ot)throw i;tt(e,"network-request-failed",{message:String(i)})}}async function zo(e,t,n,r,i={}){const s=await fn(e,t,n,r,i);return"mfaPendingCredential"in s&&tt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Jp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ju(e.config,i):`${e.config.apiScheme}://${i}`}function A_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class N_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),P_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(e,t,r);return i.customData._tokenResponse=n,i}function $d(e){return e!==void 0&&e.enterprise!==void 0}class O_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return A_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function x_(e,t){return fn(e,"GET","/v2/recaptchaConfig",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function Zp(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function L_(e,t=!1){const n=Ee(e),r=await n.getIdToken(t),i=Zu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:di(Oa(i.auth_time)),issuedAtTime:di(Oa(i.iat)),expirationTime:di(Oa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oa(e){return Number(e)*1e3}function Zu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const i=bp(n);return i?JSON.parse(i):(Ns("Failed to decode base64 JWT payload"),null)}catch(i){return Ns("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zd(e){const t=Zu(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&U_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function U_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Li(e,Zp(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?em(s.providerUserInfo):[],a=F_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function M_(e){const t=Ee(e);await po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function F_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function em(e){return e.map(t=>{var{providerId:n}=t,r=Qu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(e,t){const n=await Xp(e,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Jp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z_(e,t){return fn(e,"POST","/v2/accounts:revokeToken",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=zd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hr;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Et{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Qu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Li(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return L_(this,t)}reload(){return M_(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Et(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(on(this.auth));const t=await this.getIdToken();return await Li(this,D_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:d,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:w}=n;A(d&&w,t,"internal-error");const I=hr.fromJSON(this.name,w);A(typeof d=="string",t,"internal-error"),Ut(p,t.name),Ut(m,t.name),A(typeof g=="boolean",t,"internal-error"),A(typeof E=="boolean",t,"internal-error"),Ut(v,t.name),Ut(y,t.name),Ut(_,t.name),Ut(R,t.name),Ut(h,t.name),Ut(c,t.name);const U=new Et({uid:d,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:I,createdAt:h,lastLoginAt:c});return S&&Array.isArray(S)&&(U.providerData=S.map(x=>Object.assign({},x))),R&&(U._redirectEventId=R),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new hr;i.updateFromServerResponse(n);const s=new Et({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await po(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?em(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hr;a.updateFromIdToken(r);const l=new Et({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function kt(e){At(e instanceof Function,"Expected a class definition");let t=Bd.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bd.set(e,t),t)}/**
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
 */class tm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}tm.type="NONE";const jd=tm;/**
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
 */function Os(e,t,n){return`firebase:${e}:${t}:${n}`}class pr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Os(this.userKey,i.apiKey,s),this.fullPersistenceKey=Os("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Et._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new pr(kt(jd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(jd);const o=Os(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Et._fromJSON(t,f);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new pr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(im(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(om(t))return"Blackberry";if(am(t))return"Webos";if(ec(t))return"Safari";if((t.includes("chrome/")||rm(t))&&!t.includes("edge/"))return"Chrome";if(sm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nm(e=me()){return/firefox\//i.test(e)}function ec(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rm(e=me()){return/crios\//i.test(e)}function im(e=me()){return/iemobile/i.test(e)}function sm(e=me()){return/android/i.test(e)}function om(e=me()){return/blackberry/i.test(e)}function am(e=me()){return/webos/i.test(e)}function Bo(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function B_(e=me()){var t;return Bo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function j_(){return a0()&&document.documentMode===10}function lm(e=me()){return Bo(e)||sm(e)||am(e)||om(e)||/windows phone/i.test(e)||im(e)}function H_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(e,t=[]){let n;switch(e){case"Browser":n=Hd(me());break;case"Worker":n=`${Hd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class V_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function W_(e,t={}){return fn(e,"GET","/v2/passwordPolicy",jn(e,t))}/**
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
 */const G_=6;class K_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:G_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vd(this),this.idTokenSubscription=new Vd(this),this.beforeStateQueue=new V_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Zp(this,{idToken:t}),r=await Et._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(wt(this.app))return Promise.reject(on(this));const n=t?Ee(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return wt(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await W_(this),n=new K_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ji("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await z_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=um(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&k_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(e){return Ee(e)}class Vd{constructor(t){this.auth=t,this.observer=null,this.addObserver=p0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y_(e){jo=e}function cm(e){return jo.loadJS(e)}function Q_(){return jo.recaptchaEnterpriseScript}function X_(){return jo.gapiScript}function J_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Z_="recaptcha-enterprise",ew="NO_RECAPTCHA";class tw{constructor(t){this.type=Z_,this.auth=Lr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{x_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new O_(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$d(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(ew)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$d(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Q_();l.length!==0&&(l+=a),cm(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wd(e,t,n,r=!1){const i=new tw(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gd(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wd(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(e,t){const n=Yu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(co(s,t??{}))return i;tt(i,"already-initialized")}return n.initialize({options:t})}function rw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function iw(e,t,n){const r=Lr(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=dm(t),{host:o,port:a}=sw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ow()}function dm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function sw(e){const t=dm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kd(o)}}}function Kd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ow(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}async function aw(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(e,t){return zo(e,"POST","/v1/accounts:signInWithPassword",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(e,t){return zo(e,"POST","/v1/accounts:signInWithEmailLink",jn(e,t))}async function cw(e,t){return zo(e,"POST","/v1/accounts:signInWithEmailLink",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends tc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ui(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(t,n,"signInWithPassword",lw);case"emailLink":return uw(t,{email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gd(t,r,"signUpPassword",aw);case"emailLink":return cw(t,{idToken:n,email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e,t){return zo(e,"POST","/v1/accounts:signInWithIdp",jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="http://localhost";class Fn extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Qu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return mr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,mr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,mr(t,n)}buildRequest(){const t={requestUri:dw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hw(e){const t=Zr(ei(e)).link,n=t?Zr(ei(t)).deep_link_id:null,r=Zr(ei(e)).deep_link_id;return(r?Zr(ei(r)).link:null)||r||n||t||e}class nc{constructor(t){var n,r,i,s,o,a;const l=Zr(ei(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=fw((i=l.mode)!==null&&i!==void 0?i:null);A(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=hw(t);try{return new nc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=nc.parseLink(n);return A(r,"argument-error"),Ui._fromEmailAndCode(t,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Wi{constructor(){super("facebook.com")}static credential(t){return Fn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Fn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Wi{constructor(){super("github.com")}static credential(t){return Fn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Wi{constructor(){super("twitter.com")}static credential(t,n){return Fn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Et._fromIdTokenResponse(t,r,i),o=qd(r);return new Ir({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=qd(r);return new Ir({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function qd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Ot{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function hm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,s,t,r):s})}async function pw(e,t,n=!1){const r=await Li(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ir._forOperation(e,"link",r)}/**
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
 */async function mw(e,t,n=!1){const{auth:r}=e;if(wt(r.app))return Promise.reject(on(r));const i="reauthenticate";try{const s=await Li(e,hm(r,i,t,e),n);A(s.idToken,r,"internal-error");const o=Zu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(e.uid===a,r,"user-mismatch"),Ir._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(e,t,n=!1){if(wt(e.app))return Promise.reject(on(e));const r="signIn",i=await hm(e,r,t),s=await Ir._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function gw(e,t){return pm(Lr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(e){const t=Lr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function yw(e,t,n){return wt(e.app)?Promise.reject(on(e)):gw(Ee(e),Ur.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vw(e),r})}function _w(e,t,n,r){return Ee(e).onIdTokenChanged(t,n,r)}function ww(e,t,n){return Ee(e).beforeAuthStateChanged(t,n)}function Sw(e,t,n,r){return Ee(e).onAuthStateChanged(t,n,r)}const go="__sak";/**
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
 */class mm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){const e=me();return ec(e)||Bo(e)}const kw=1e3,Iw=10;class gm extends mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ew()&&H_(),this.fallbackToPolling=lm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);j_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Iw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gm.type="LOCAL";const Tw=gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}vm.type="SESSION";const ym=vm;/**
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
 */function Cw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ho{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ho(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Cw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Rw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function Pw(e){dt().location.href=e}/**
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
 */function _m(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Aw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ow(){return _m()?self:null}/**
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
 */const wm="firebaseLocalStorageDb",xw=1,vo="firebaseLocalStorage",Sm="fbase_key";class Gi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vo(e,t){return e.transaction([vo],t?"readwrite":"readonly").objectStore(vo)}function Dw(){const e=indexedDB.deleteDatabase(wm);return new Gi(e).toPromise()}function Hl(){const e=indexedDB.open(wm,xw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vo,{keyPath:Sm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vo)?t(r):(r.close(),await Dw(),t(await Hl()))})})}async function Yd(e,t,n){const r=Vo(e,!0).put({[Sm]:t,value:n});return new Gi(r).toPromise()}async function Lw(e,t){const n=Vo(e,!1).get(t),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function Qd(e,t){const n=Vo(e,!0).delete(t);return new Gi(n).toPromise()}const Uw=800,bw=3;class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(Ow()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Aw(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Nw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hl();return await Yd(t,go,"1"),await Qd(t,go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Lw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Vo(i,!1).getAll();return new Gi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Em.type="LOCAL";const Mw=Em;new Vi(3e4,6e4);/**
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
 */function Fw(e,t){return t?kt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ic extends tc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return mr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function $w(e){return pm(e.auth,new ic(e),e.bypassAuthState)}function zw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),mw(n,new ic(e),e.bypassAuthState)}async function Bw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),pw(n,new ic(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return $w;case"linkViaPopup":case"linkViaRedirect":return Bw;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:tt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=new Vi(2e3,1e4);class sr extends km{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,jw.get())};t()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="pendingRedirect",xs=new Map;class Vw extends km{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=xs.get(this.auth._key());if(!t){try{const r=await Ww(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}xs.set(this.auth._key(),t)}return this.bypassAuthState||xs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ww(e,t){const n=qw(t),r=Kw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Gw(e,t){xs.set(e._key(),t)}function Kw(e){return kt(e._redirectPersistence)}function qw(e){return Os(Hw,e.config.apiKey,e.name)}async function Yw(e,t,n=!1){if(wt(e.app))return Promise.reject(on(e));const r=Lr(e),i=Fw(r,t),o=await new Vw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=10*60*1e3;class Xw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Jw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Im(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xd(t))}saveEventToCache(t){this.cachedEventUids.add(Xd(t)),this.lastProcessedEventTime=Date.now()}}function Xd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Im({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Jw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Im(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t1=/^https?/;async function n1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zw(e);for(const n of t)try{if(r1(n))return}catch{}tt(e,"unauthorized-domain")}function r1(e){const t=Bl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t1.test(n))return!1;if(e1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const i1=new Vi(3e4,6e4);function Jd(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function s1(e){return new Promise((t,n)=>{var r,i,s;function o(){Jd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jd(),n(ct(e,"network-request-failed"))},timeout:i1.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const a=J_("iframefcb");return dt()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},cm(`${X_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ds=null,t})}let Ds=null;function o1(e){return Ds=Ds||s1(e),Ds}/**
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
 */const a1=new Vi(5e3,15e3),l1="__/auth/iframe",u1="emulator/auth/iframe",c1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f1(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ju(t,u1):`https://${e.config.authDomain}/${l1}`,r={apiKey:t.apiKey,appName:e.name,v:Dr},i=d1.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hi(r).slice(1)}`}async function h1(e){const t=await o1(e),n=dt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:f1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=dt().setTimeout(()=>{s(o)},a1.get());function l(){dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const p1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m1=500,g1=600,v1="_blank",y1="http://localhost";class Zd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _1(e,t,n,r=m1,i=g1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},p1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=me().toLowerCase();n&&(a=rm(u)?v1:n),nm(u)&&(t=t||y1,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(B_(u)&&a!=="_self")return w1(t||"",a),new Zd(null);const p=window.open(t||"",a,f);A(p,e,"popup-blocked");try{p.focus()}catch{}return new Zd(p)}function w1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S1="__/auth/handler",E1="emulator/auth/handler",k1=encodeURIComponent("fac");async function ef(e,t,n,r,i,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Dr,eventId:i};if(t instanceof fm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",h0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(t instanceof Wi){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${k1}=${encodeURIComponent(l)}`:"";return`${I1(e)}?${Hi(a).slice(1)}${u}`}function I1({config:e}){return e.emulator?Ju(e,E1):`https://${e.authDomain}/${S1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class T1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ym,this._completeRedirectFn=Yw,this._overrideRedirectResult=Gw}async _openPopup(t,n,r,i){var s;At((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ef(t,n,r,Bl(),i);return _1(t,o,rc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ef(t,n,r,Bl(),i);return Pw(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(At(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await h1(t),r=new Xw(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xa,{type:xa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xa];o!==void 0&&n(!!o),tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lm()||ec()||Bo()}}const C1=T1;var tf="@firebase/auth",nf="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A1(e){kr(new bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:um(e)},u=new q_(r,i,s,l);return rw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),kr(new bn("auth-internal",t=>{const n=Lr(t.getProvider("auth").getImmediate());return(r=>new R1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(tf,nf,P1(e)),sn(tf,nf,"esm2017")}/**
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
 */const N1=5*60,O1=$p("authIdTokenMaxAge")||N1;let rf=null;const x1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>O1)return;const i=n==null?void 0:n.token;rf!==i&&(rf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D1(e=Vp()){const t=Yu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=nw(e,{popupRedirectResolver:C1,persistence:[Mw,Tw,ym]}),r=$p("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=x1(s.toString());ww(n,o,()=>o(n.currentUser)),_w(n,a=>o(a))}}const i=Mp("auth");return i&&iw(n,`http://${i}`),n}function L1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Y_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",L1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A1("Browser");const U1=""+new URL("tee-647bc5ea.png",import.meta.url).href;var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Re.apply(this,arguments)};function yo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var V="-ms-",fi="-moz-",M="-webkit-",Tm="comm",Wo="rule",sc="decl",b1="@import",Cm="@keyframes",M1="@layer",Rm=Math.abs,oc=String.fromCharCode,Vl=Object.assign;function F1(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Pm(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ls(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Am(e){return e.length}function ti(e,t){return t.push(e),e}function $1(e,t){return e.map(t).join("")}function sf(e,t){return e.filter(function(n){return!mt(n,t)})}var Go=1,Cr=1,Nm=0,We=0,te=0,br="";function Ko(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Go,column:Cr,length:o,return:"",siblings:a}}function bt(e,t){return Vl(Ko("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wn(e){for(;e.root;)e=bt(e.root,{children:[e]});ti(e,e.siblings)}function z1(){return te}function B1(){return te=We>0?oe(br,--We):0,Cr--,te===10&&(Cr=1,Go--),te}function Ze(){return te=We<Nm?oe(br,We++):0,Cr++,te===10&&(Cr=1,Go++),te}function Pn(){return oe(br,We)}function Us(){return We}function qo(e,t){return Tr(br,e,t)}function Wl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j1(e){return Go=Cr=1,Nm=it(br=e),We=0,[]}function H1(e){return br="",e}function Da(e){return Pm(qo(We-1,Gl(e===91?e+2:e===40?e+1:e)))}function V1(e){for(;(te=Pn())&&te<33;)Ze();return Wl(e)>2||Wl(te)>3?"":" "}function W1(e,t){for(;--t&&Ze()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return qo(e,Us()+(t<6&&Pn()==32&&Ze()==32))}function Gl(e){for(;Ze();)switch(te){case e:return We;case 34:case 39:e!==34&&e!==39&&Gl(te);break;case 40:e===41&&Gl(e);break;case 92:Ze();break}return We}function G1(e,t){for(;Ze()&&e+te!==47+10;)if(e+te===42+42&&Pn()===47)break;return"/*"+qo(t,We-1)+"*"+oc(e===47?e:Ze())}function K1(e){for(;!Wl(Pn());)Ze();return qo(e,We)}function q1(e){return H1(bs("",null,null,null,[""],e=j1(e),0,[0],e))}function bs(e,t,n,r,i,s,o,a,l){for(var u=0,f=0,p=o,m=0,v=0,y=0,_=1,R=1,h=1,c=0,d="",g=i,E=s,S=r,w=d;R;)switch(y=c,c=Ze()){case 40:if(y!=108&&oe(w,p-1)==58){Ls(w+=O(Da(c),"&","&\f"),"&\f",Rm(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=Da(c);break;case 9:case 10:case 13:case 32:w+=V1(y);break;case 92:w+=W1(Us()-1,7);continue;case 47:switch(Pn()){case 42:case 47:ti(Y1(G1(Ze(),Us()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=it(w)*h;case 125*_:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+f:h==-1&&(w=O(w,/\f/g,"")),v>0&&it(w)-p&&ti(v>32?af(w+";",r,n,p-1,l):af(O(w," ","")+";",r,n,p-2,l),l);break;case 59:w+=";";default:if(ti(S=of(w,t,n,u,f,i,a,d,g=[],E=[],p,s),s),c===123)if(f===0)bs(w,t,S,S,g,s,p,a,E);else switch(m===99&&oe(w,3)===110?100:m){case 100:case 108:case 109:case 115:bs(e,S,S,r&&ti(of(e,S,S,0,0,i,a,d,i,g=[],p,E),E),i,E,p,a,r?g:E);break;default:bs(w,S,S,S,[""],E,0,a,E)}}u=f=v=0,_=h=1,d=w="",p=o;break;case 58:p=1+it(w),v=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&B1()==125)continue}switch(w+=oc(c),c*_){case 38:h=f>0?1:(w+="\f",-1);break;case 44:a[u++]=(it(w)-1)*h,h=1;break;case 64:Pn()===45&&(w+=Da(Ze())),m=Pn(),f=p=it(d=w+=K1(Us())),c++;break;case 45:y===45&&it(w)==2&&(_=0)}}return s}function of(e,t,n,r,i,s,o,a,l,u,f,p){for(var m=i-1,v=i===0?s:[""],y=Am(v),_=0,R=0,h=0;_<r;++_)for(var c=0,d=Tr(e,m+1,m=Rm(R=o[_])),g=e;c<y;++c)(g=Pm(R>0?v[c]+" "+d:O(d,/&\f/g,v[c])))&&(l[h++]=g);return Ko(e,t,n,i===0?Wo:a,l,u,f,p)}function Y1(e,t,n,r){return Ko(e,t,n,Tm,oc(z1()),Tr(e,2,-2),0,r)}function af(e,t,n,r,i){return Ko(e,t,n,sc,Tr(e,0,r),Tr(e,r+1,-1),r,i)}function Om(e,t,n){switch(F1(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+fi+e+V+e+e;case 5936:switch(oe(e,t+11)){case 114:return M+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+V+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+V+e+e;case 6165:return M+e+V+"flex-"+e+e;case 5187:return M+e+O(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return M+e+V+"flex-item-"+O(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":V+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return M+e+V+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+V+O(e,"shrink","negative")+e;case 5292:return M+e+V+O(e,"basis","preferred-size")+e;case 6060:return M+"box-"+O(e,"-grow","")+M+e+V+O(e,"grow","positive")+e;case 4554:return M+O(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!mt(e,/flex-|baseline/))return V+"grid-column-align"+Tr(e,t)+e;break;case 2592:case 3360:return V+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,mt(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span",0)?e:V+O(e,"-start","")+e+V+"grid-row-span:"+(~Ls(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":V+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:V+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+fi+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch",0)?Om(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return V+i+":"+s+u+(o?V+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(oe(e,t+6)===121)return O(e,":",":"+M)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(oe(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+V+"$2box$3")+e;case 100:return O(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function _o(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Q1(e,t,n,r){switch(e.type){case M1:if(e.children.length)break;case b1:case sc:return e.return=e.return||e.value;case Tm:return"";case Cm:return e.return=e.value+"{"+_o(e.children,r)+"}";case Wo:if(!it(e.value=e.props.join(",")))return""}return it(n=_o(e.children,r))?e.return=e.value+"{"+n+"}":""}function X1(e){var t=Am(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function J1(e){return function(t){t.root||(t=t.return)&&e(t)}}function Z1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sc:e.return=Om(e.value,e.length,n);return;case Cm:return _o([bt(e,{value:O(e.value,"@","@"+M)})],r);case Wo:if(e.length)return $1(n=e.props,function(i){switch(mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wn(bt(e,{props:[O(i,/:(read-\w+)/,":"+fi+"$1")]})),Wn(bt(e,{props:[i]})),Vl(e,{props:sf(n,r)});break;case"::placeholder":Wn(bt(e,{props:[O(i,/:(plac\w+)/,":"+M+"input-$1")]})),Wn(bt(e,{props:[O(i,/:(plac\w+)/,":"+fi+"$1")]})),Wn(bt(e,{props:[O(i,/:(plac\w+)/,V+"input-$1")]})),Wn(bt(e,{props:[i]})),Vl(e,{props:sf(n,r)});break}return""})}}var eS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xm="active",Dm="data-styled-version",Yo="6.1.8",ac=`/*!sc*/
`,lc=typeof window<"u"&&"HTMLElement"in window,tS=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Qo=Object.freeze([]),Pr=Object.freeze({});function nS(e,t,n){return n===void 0&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme}var Lm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iS=/(^-|-$)/g;function lf(e){return e.replace(rS,"-").replace(iS,"")}var sS=/(a)(d)/gi,ps=52,uf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kl(e){var t,n="";for(t=Math.abs(e);t>ps;t=t/ps|0)n=uf(t%ps)+n;return(uf(t%ps)+n).replace(sS,"$1-$2")}var La,Um=5381,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bm=function(e){return or(Um,e)};function oS(e){return Kl(bm(e)>>>0)}function aS(e){return e.displayName||e.name||"Component"}function Ua(e){return typeof e=="string"&&!0}var Mm=typeof Symbol=="function"&&Symbol.for,Fm=Mm?Symbol.for("react.memo"):60115,lS=Mm?Symbol.for("react.forward_ref"):60112,uS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dS=((La={})[lS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},La[Fm]=$m,La);function cf(e){return("type"in(t=e)&&t.type.$$typeof)===Fm?$m:"$$typeof"in e?dS[e.$$typeof]:uS;var t}var fS=Object.defineProperty,hS=Object.getOwnPropertyNames,df=Object.getOwnPropertySymbols,pS=Object.getOwnPropertyDescriptor,mS=Object.getPrototypeOf,ff=Object.prototype;function zm(e,t,n){if(typeof t!="string"){if(ff){var r=mS(t);r&&r!==ff&&zm(e,r,n)}var i=hS(t);df&&(i=i.concat(df(t)));for(var s=cf(e),o=cf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in cS||n&&n[l]||o&&l in o||s&&l in s)){var u=pS(t,l);try{fS(e,l,u)}catch{}}}}return e}function Ar(e){return typeof e=="function"}function uc(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function hf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function bi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ql(e,t,n){if(n===void 0&&(n=!1),!n&&!bi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ql(e[r],t[r]);else if(bi(t))for(var r in t)e[r]=ql(e[r],t[r]);return e}function cc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ki(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ac);return n},e}(),Ms=new Map,wo=new Map,Fs=1,ms=function(e){if(Ms.has(e))return Ms.get(e);for(;wo.has(Fs);)Fs++;var t=Fs++;return Ms.set(e,t),wo.set(t,e),t},vS=function(e,t){Fs=t+1,Ms.set(e,t),wo.set(t,e)},yS="style[".concat(Rr,"][").concat(Dm,'="').concat(Yo,'"]'),_S=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),wS=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},SS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ac),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(_S);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(vS(f,u),wS(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function ES(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Rr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Rr,xm),r.setAttribute(Dm,Yo);var o=ES();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},kS=function(){function e(t){this.element=Bm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ki(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),IS=function(){function e(t){this.element=Bm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),TS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),pf=lc,CS={isServer:!lc,useCSSOMInjection:!tS},jm=function(){function e(t,n,r){t===void 0&&(t=Pr),n===void 0&&(n={});var i=this;this.options=Re(Re({},CS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&lc&&pf&&(pf=!1,function(s){for(var o=document.querySelectorAll(yS),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Rr)!==xm&&(SS(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(p){var m=function(h){return wo.get(h)}(p);if(m===void 0)return"continue";var v=s.names.get(m),y=o.getGroup(p);if(v===void 0||y.length===0)return"continue";var _="".concat(Rr,".g").concat(p,'[id="').concat(m,'"]'),R="";v!==void 0&&v.forEach(function(h){h.length>0&&(R+="".concat(h,","))}),l+="".concat(y).concat(_,'{content:"').concat(R,'"}').concat(ac)},f=0;f<a;f++)u(f);return l}(i)})}return e.registerId=function(t){return ms(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TS(i):r?new kS(i):new IS(i)}(this.options),new gS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ms(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ms(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ms(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),RS=/&/g,PS=/^\s*\/\/.*$/gm;function Hm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Hm(n.children,t)),n})}function AS(e){var t,n,r,i=e===void 0?Pr:e,s=i.options,o=s===void 0?Pr:s,a=i.plugins,l=a===void 0?Qo:a,u=function(m,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===Wo&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(RS,n).replace(r,u))}),o.prefix&&f.push(Z1),f.push(Q1);var p=function(m,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(PS,""),h=q1(y||v?"".concat(y," ").concat(v," { ").concat(R," }"):R);o.namespace&&(h=Hm(h,o.namespace));var c=[];return _o(h,X1(f.concat(J1(function(d){return c.push(d)})))),c};return p.hash=l.length?l.reduce(function(m,v){return v.name||Ki(15),or(m,v.name)},Um).toString():"",p}var NS=new jm,Yl=AS(),Vm=mi.createContext({shouldForwardProp:void 0,styleSheet:NS,stylis:Yl});Vm.Consumer;mi.createContext(void 0);function mf(){return ee.useContext(Vm)}var OS=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Yl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cc(this,function(){throw Ki(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Yl),this.name+t.hash},e}(),xS=function(e){return e>="A"&&e<="Z"};function gf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;xS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wm=function(e){return e==null||e===!1||e===""},Gm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Wm(s)&&(Array.isArray(s)&&s.isCss||Ar(s)?r.push("".concat(gf(i),":"),s,";"):bi(s)?r.push.apply(r,yo(yo(["".concat(i," {")],Gm(s),!1),["}"],!1)):r.push("".concat(gf(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in eS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function An(e,t,n,r){if(Wm(e))return[];if(uc(e))return[".".concat(e.styledComponentId)];if(Ar(e)){if(!Ar(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return An(i,t,n,r)}var s;return e instanceof OS?n?(e.inject(n,r),[e.getName(r)]):[e]:bi(e)?Gm(e):Array.isArray(e)?Array.prototype.concat.apply(Qo,e.map(function(o){return An(o,t,n,r)})):[e.toString()]}function DS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!uc(n))return!1}return!0}var LS=bm(Yo),US=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DS(t),this.componentId=n,this.baseHash=or(LS,n),this.baseStyle=r,jm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Tn(i,this.staticRulesId);else{var s=hf(An(this.rules,t,n,r)),o=Kl(or(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Tn(i,o),this.staticRulesId=o}else{for(var l=or(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var m=hf(An(p,t,n,r));l=or(l,m+f),u+=m}}if(u){var v=Kl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Tn(i,v)}}return i},e}(),Km=mi.createContext(void 0);Km.Consumer;var ba={};function bS(e,t,n){var r=uc(e),i=e,s=!Ua(e),o=t.attrs,a=o===void 0?Qo:o,l=t.componentId,u=l===void 0?function(g,E){var S=typeof g!="string"?"sc":lf(g);ba[S]=(ba[S]||0)+1;var w="".concat(S,"-").concat(oS(Yo+S+ba[S]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,f=t.displayName,p=f===void 0?function(g){return Ua(g)?"styled.".concat(g):"Styled(".concat(aS(g),")")}(e):f,m=t.displayName&&t.componentId?"".concat(lf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;y=function(g,E){return _(g,E)&&R(g,E)}}else y=_}var h=new US(n,m,r?i.componentStyle:void 0);function c(g,E){return function(S,w,I){var U=S.attrs,x=S.componentStyle,Oe=S.defaultProps,pn=S.foldedComponentIds,mn=S.styledComponentId,qi=S.target,Jo=mi.useContext(Km),Fr=mf(),gn=S.shouldForwardProp||Fr.shouldForwardProp,T=nS(w,Jo,Oe)||Pr,P=function(xt,xe,ht){for(var $r,yn=Re(Re({},xe),{className:void 0,theme:ht}),Zo=0;Zo<xt.length;Zo+=1){var Yi=Ar($r=xt[Zo])?$r(yn):$r;for(var Dt in Yi)yn[Dt]=Dt==="className"?Tn(yn[Dt],Yi[Dt]):Dt==="style"?Re(Re({},yn[Dt]),Yi[Dt]):Yi[Dt]}return xe.className&&(yn.className=Tn(yn.className,xe.className)),yn}(U,w,T),N=P.as||qi,$={};for(var z in P)P[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&P.theme===T||(z==="forwardedAs"?$.as=P.forwardedAs:gn&&!gn(z,N)||($[z]=P[z]));var vn=function(xt,xe){var ht=mf(),$r=xt.generateAndInjectStyles(xe,ht.styleSheet,ht.stylis);return $r}(x,P),Ge=Tn(pn,mn);return vn&&(Ge+=" "+vn),P.className&&(Ge+=" "+P.className),$[Ua(N)&&!Lm.has(N)?"class":"className"]=Ge,$.ref=I,ee.createElement(N,$)}(d,g,E)}c.displayName=p;var d=mi.forwardRef(c);return d.attrs=v,d.componentStyle=h,d.displayName=p,d.shouldForwardProp=y,d.foldedComponentIds=r?Tn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=m,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(E){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var I=0,U=S;I<U.length;I++)ql(E,U[I],!0);return E}({},i.defaultProps,g):g}}),cc(d,function(){return".".concat(d.styledComponentId)}),s&&zm(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function vf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var yf=function(e){return Object.assign(e,{isCss:!0})};function MS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ar(e)||bi(e))return yf(An(vf(Qo,yo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?An(r):yf(An(vf(r,t)))}function Ql(e,t,n){if(n===void 0&&(n=Pr),!t)throw Ki(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,MS.apply(void 0,yo([i],s,!1)))};return r.attrs=function(i){return Ql(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ql(e,t,Re(Re({},n),i))},r}var qm=function(e){return Ql(bS,e)},ke=qm;Lm.forEach(function(e){ke[e]=qm(e)});const FS=ke.article`
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
`,$S=ke.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,Ok=ke.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,xk=ke.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,zS=ke.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,Dk=ke.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
`,BS=()=>L(FS,{children:L($S,{children:L(zS,{})})}),jS=ke.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 0;
    margin-top: 10px;
  }
`,HS=ke.main`
  max-width: 502px;
  flex: auto;
  display: flex;
  flex-direction: column;
  color: #444;

  & > article {
    margin-bottom: 30px;
  }
`,VS=ke.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,WS=""+new URL("plus-70c42e58.svg",import.meta.url).href;/**
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
 */const Ym="firebasestorage.googleapis.com",Qm="storageBucket",GS=2*60*1e3,KS=10*60*1e3,qS=1e3;/**
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
 */class X extends Ot{constructor(t,n,r=0){super(Ma(t),`Firebase Storage: ${n} (${Ma(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ma(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var G;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(G||(G={}));function Ma(e){return"storage/"+e}function dc(){const e="An unknown error occurred, please check the error payload for server response.";return new X(G.UNKNOWN,e)}function YS(e){return new X(G.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function QS(e){return new X(G.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(G.UNAUTHENTICATED,e)}function JS(){return new X(G.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ZS(e){return new X(G.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Xm(){return new X(G.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jm(){return new X(G.CANCELED,"User canceled the upload/download.")}function eE(e){return new X(G.INVALID_URL,"Invalid URL '"+e+"'.")}function tE(e){return new X(G.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function nE(){return new X(G.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Qm+"' property when initializing the app?")}function Zm(){return new X(G.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rE(){return new X(G.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function iE(){return new X(G.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function sE(e){return new X(G.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xl(e){return new X(G.INVALID_ARGUMENT,e)}function eg(){return new X(G.APP_DELETED,"The Firebase app was deleted.")}function oE(e){return new X(G.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hi(e,t){return new X(G.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function qr(e){throw new X(G.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class ye{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ye.makeFromUrl(t,n)}catch{return new ye(t,"")}if(r.path==="")return r;throw tE(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===Ym?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",h=new RegExp(`^https?://${_}/${i}/${R}`,"i"),d=[{regex:a,indices:l,postModify:s},{regex:v,indices:y,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<d.length;g++){const E=d[g],S=E.regex.exec(t);if(S){const w=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new ye(w,I),E.postModify(r);break}}if(r==null)throw eE(t);return r}}class aE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function lE(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function f(...R){u||(u=!0,t.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,e(v,l())},R)}function m(){s&&clearTimeout(s)}function v(R,...h){if(u){m();return}if(R){m(),f.call(null,R,...h);return}if(l()||o){m(),f.call(null,R,...h);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,p(d)}let y=!1;function _(R){y||(y=!0,m(),!u&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function uE(e){e(!1)}/**
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
 */function cE(e){return e!==void 0}function dE(e){return typeof e=="function"}function fE(e){return typeof e=="object"&&!Array.isArray(e)}function Xo(e){return typeof e=="string"||e instanceof String}function _f(e){return fc()&&e instanceof Blob}function fc(){return typeof Blob<"u"}function Jl(e,t,n,r){if(r<t)throw Xl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Xl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Hn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function tg(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Nn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Nn||(Nn={}));/**
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
 */function ng(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class hE{constructor(t,n,r,i,s,o,a,l,u,f,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new gs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nn.NO_ERROR,l=s.getStatus();if(!a||ng(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Nn.ABORT;r(!1,new gs(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new gs(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cE(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?eg():Jm();o(l)}else{const l=Xm();o(l)}};this.canceled_?n(!1,new gs(!1,null,!0)):this.backoffId_=lE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&uE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gs{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function pE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function mE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function gE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function vE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function yE(e,t,n,r,i,s,o=!0){const a=tg(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return gE(u,t),pE(u,n),mE(u,s),vE(u,r),new hE(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function _E(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wE(...e){const t=_E();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(fc())return new Blob(e);throw new X(G.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SE(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function EE(e){if(typeof atob>"u")throw sE("base-64");return atob(e)}/**
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
 */const at={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fa{constructor(t,n){this.data=t,this.contentType=n||null}}function kE(e,t){switch(e){case at.RAW:return new Fa(rg(t));case at.BASE64:case at.BASE64URL:return new Fa(ig(e,t));case at.DATA_URL:return new Fa(TE(t),CE(t))}throw dc()}function rg(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function IE(e){let t;try{t=decodeURIComponent(e)}catch{throw hi(at.DATA_URL,"Malformed data URL.")}return rg(t)}function ig(e,t){switch(e){case at.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw hi(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case at.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw hi(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EE(t)}catch(i){throw i.message.includes("polyfill")?i:hi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class sg{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw hi(at.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=RE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function TE(e){const t=new sg(e);return t.base64?ig(at.BASE64,t.rest):IE(t.rest)}function CE(e){return new sg(e).contentType}function RE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Wt{constructor(t,n){let r=0,i="";_f(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(_f(this.data_)){const r=this.data_,i=SE(r,t,n);return i===null?null:new Wt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Wt(r,!0)}}static getBlob(...t){if(fc()){const n=t.map(r=>r instanceof Wt?r.data_:r);return new Wt(wE.apply(null,n))}else{const n=t.map(o=>Xo(o)?kE(at.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function hc(e){let t;try{t=JSON.parse(e)}catch{return null}return fE(t)?t:null}/**
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
 */function PE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function AE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function og(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function NE(e,t){return t}class ge{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||NE}}let vs=null;function OE(e){return!Xo(e)||e.length<2?e:og(e)}function pc(){if(vs)return vs;const e=[];e.push(new ge("bucket")),e.push(new ge("generation")),e.push(new ge("metageneration")),e.push(new ge("name","fullPath",!0));function t(s,o){return OE(o)}const n=new ge("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ge("size");return i.xform=r,e.push(i),e.push(new ge("timeCreated")),e.push(new ge("updated")),e.push(new ge("md5Hash",null,!0)),e.push(new ge("cacheControl",null,!0)),e.push(new ge("contentDisposition",null,!0)),e.push(new ge("contentEncoding",null,!0)),e.push(new ge("contentLanguage",null,!0)),e.push(new ge("contentType",null,!0)),e.push(new ge("metadata","customMetadata",!0)),vs=e,vs}function xE(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new ye(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function DE(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return xE(r,e),r}function ag(e,t,n){const r=hc(t);return r===null?null:DE(e,r,n)}function LE(e,t,n,r){const i=hc(t);if(i===null||!Xo(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const f=e.bucket,p=e.fullPath,m="/b/"+o(f)+"/o/"+o(p),v=Hn(m,n,r),y=tg({alt:"media",token:u});return v+y})[0]}function lg(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}/**
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
 */const wf="prefixes",Sf="items";function UE(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[wf])for(const i of n[wf]){const s=i.replace(/\/$/,""),o=e._makeStorageReference(new ye(t,s));r.prefixes.push(o)}if(n[Sf])for(const i of n[Sf]){const s=e._makeStorageReference(new ye(t,i.name));r.items.push(s)}return r}function bE(e,t,n){const r=hc(n);return r===null?null:UE(e,t,r)}class hn{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(e){if(!e)throw dc()}function mc(e,t){function n(r,i){const s=ag(e,i,t);return ft(s!==null),s}return n}function ME(e,t){function n(r,i){const s=bE(e,t,i);return ft(s!==null),s}return n}function FE(e,t){function n(r,i){const s=ag(e,i,t);return ft(s!==null),LE(s,i,e.host,e._protocol)}return n}function Mr(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=JS():i=XS():n.getStatus()===402?i=QS(e.bucket):n.getStatus()===403?i=ZS(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function gc(e){const t=Mr(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=YS(e.path)),s.serverResponse=i.serverResponse,s}return n}function ug(e,t,n){const r=t.fullServerUrl(),i=Hn(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new hn(i,s,mc(e,n),o);return a.errorHandler=gc(t),a}function $E(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=t.bucketOnlyServerUrl(),a=Hn(o,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,f=new hn(a,l,ME(e,t.bucket),u);return f.urlParams=s,f.errorHandler=Mr(t),f}function zE(e,t,n){const r=t.fullServerUrl(),i=Hn(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new hn(i,s,FE(e,n),o);return a.errorHandler=gc(t),a}function BE(e,t){const n=t.fullServerUrl(),r=Hn(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(l,u){}const a=new hn(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=gc(t),a}function jE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function cg(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=jE(null,t)),r}function HE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let d="";for(let g=0;g<2;g++)d=d+Math.random().toString().slice(2);return d}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=cg(t,r,i),f=lg(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Wt.getBlob(p,r,m);if(v===null)throw Zm();const y={name:u.fullPath},_=Hn(s,e.host,e._protocol),R="POST",h=e.maxUploadRetryTime,c=new hn(_,R,mc(e,n),h);return c.urlParams=y,c.headers=o,c.body=v.uploadData(),c.errorHandler=Mr(t),c}class So{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function vc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{ft(!1)}return ft(!!n&&(t||["active"]).indexOf(n)!==-1),n}function VE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=cg(t,r,i),a={name:o.fullPath},l=Hn(s,e.host,e._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=lg(o,n),m=e.maxUploadRetryTime;function v(_){vc(_);let R;try{R=_.getResponseHeader("X-Goog-Upload-URL")}catch{ft(!1)}return ft(Xo(R)),R}const y=new hn(l,u,v,m);return y.urlParams=a,y.headers=f,y.body=p,y.errorHandler=Mr(t),y}function WE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const f=vc(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ft(!1)}p||ft(!1);const m=Number(p);return ft(!isNaN(m)),new So(m,r.size(),f==="final")}const o="POST",a=e.maxUploadRetryTime,l=new hn(n,o,s,a);return l.headers=i,l.errorHandler=Mr(t),l}const Ef=256*1024;function GE(e,t,n,r,i,s,o,a){const l=new So(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw rE();const u=l.total-l.current;let f=u;i>0&&(f=Math.min(f,i));const p=l.current,m=p+f;let v="";f===0?v="finalize":u===f?v="upload, finalize":v="upload";const y={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(p,m);if(_===null)throw Zm();function R(g,E){const S=vc(g,["active","final"]),w=l.current+f,I=r.size();let U;return S==="final"?U=mc(t,s)(g,E):U=null,new So(w,I,S==="final",U)}const h="POST",c=t.maxUploadRetryTime,d=new hn(n,h,R,c);return d.headers=y,d.body=_.uploadData(),d.progressCallback=a||null,d.errorHandler=Mr(e),d}const Ie={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function $a(e){switch(e){case"running":case"pausing":case"canceling":return Ie.RUNNING;case"paused":return Ie.PAUSED;case"success":return Ie.SUCCESS;case"canceled":return Ie.CANCELED;case"error":return Ie.ERROR;default:return Ie.ERROR}}/**
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
 */class KE{constructor(t,n,r){if(dE(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const s=t;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Gn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class qE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nn.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nn.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nn.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw qr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class YE extends qE{initXhr(){this.xhr_.responseType="text"}}function vt(){return new YE}/**
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
 */class QE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=pc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(G.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(ng(i.status,[]))if(s)i=Xm();else{this.sleepTime=Math.max(this.sleepTime*2,qS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(G.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=VE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=WE(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,vt,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Ef*this._chunkMultiplier,n=new So(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=GE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,vt,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ef*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=ug(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=HE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Jm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=$a(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const s=new KE(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch($a(this._state)){case Ie.SUCCESS:Gn(this._resolve.bind(null,this.snapshot))();break;case Ie.CANCELED:case Ie.ERROR:const n=this._reject;Gn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch($a(this._state)){case Ie.RUNNING:case Ie.PAUSED:t.next&&Gn(t.next.bind(t,this.snapshot))();break;case Ie.SUCCESS:t.complete&&Gn(t.complete.bind(t))();break;case Ie.CANCELED:case Ie.ERROR:t.error&&Gn(t.error.bind(t,this._error))();break;default:t.error&&Gn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class $n{constructor(t,n){this._service=t,n instanceof ye?this._location=n:this._location=ye.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $n(t,n)}get root(){const t=new ye(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return og(this._location.path)}get storage(){return this._service}get parent(){const t=PE(this._location.path);if(t===null)return null;const n=new ye(this._location.bucket,t);return new $n(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw oE(t)}}function XE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new QE(e,new Wt(t),n)}function JE(e){const t={prefixes:[],items:[]};return dg(e,t).then(()=>t)}async function dg(e,t,n){const i=await ZE(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await dg(e,t,i.nextPageToken)}function ZE(e,t){t!=null&&typeof t.maxResults=="number"&&Jl("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=$E(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,vt)}function ek(e){e._throwIfRoot("getMetadata");const t=ug(e.storage,e._location,pc());return e.storage.makeRequestWithTokens(t,vt)}function tk(e){e._throwIfRoot("getDownloadURL");const t=zE(e.storage,e._location,pc());return e.storage.makeRequestWithTokens(t,vt).then(n=>{if(n===null)throw iE();return n})}function nk(e){e._throwIfRoot("deleteObject");const t=BE(e.storage,e._location);return e.storage.makeRequestWithTokens(t,vt)}function rk(e,t){const n=AE(e._location.path,t),r=new ye(e._location.bucket,n);return new $n(e.storage,r)}/**
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
 */function ik(e){return/^[A-Za-z]+:\/\//.test(e)}function sk(e,t){return new $n(e,t)}function fg(e,t){if(e instanceof yc){const n=e;if(n._bucket==null)throw nE();const r=new $n(n,n._bucket);return t!=null?fg(r,t):r}else return t!==void 0?rk(e,t):e}function ok(e,t){if(t&&ik(t)){if(e instanceof yc)return sk(e,t);throw Xl("To use ref(service, url), the first argument must be a Storage instance.")}else return fg(e,t)}function kf(e,t){const n=t==null?void 0:t[Qm];return n==null?null:ye.makeFromBucketSpec(n,e)}function ak(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:r0(i,e.app.options.projectId))}class yc{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ym,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GS,this._maxUploadRetryTime=KS,this._requests=new Set,i!=null?this._bucket=ye.makeFromBucketSpec(i,this._host):this._bucket=kf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ye.makeFromBucketSpec(this._url,t):this._bucket=kf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Jl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Jl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $n(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new aE(eg());{const o=yE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const If="@firebase/storage",Tf="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="storage";function lk(e,t,n){return e=Ee(e),XE(e,t,n)}function uk(e){return e=Ee(e),ek(e)}function ck(e){return e=Ee(e),JE(e)}function pg(e){return e=Ee(e),tk(e)}function dk(e){return e=Ee(e),nk(e)}function Eo(e,t){return e=Ee(e),ok(e,t)}function fk(e=Vp(),t){e=Ee(e);const r=Yu(e,hg).getImmediate({identifier:t}),i=t0("storage");return i&&hk(r,...i),r}function hk(e,t,n,r={}){ak(e,t,n,r)}function pk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new yc(n,r,i,t,Dr)}function mk(){kr(new bn(hg,pk,"PUBLIC").setMultipleInstances(!0)),sn(If,Tf,""),sn(If,Tf,"esm2017")}mk();var gk="firebase",vk="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(gk,vk,"app");const yk={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},mg=Hp(yk),gg=D1(mg),_k=async(e,t)=>{try{return await yw(gg,e,t)}catch{return{error:!0,type:"Something went wrong"}}},ko=fk(mg),wk=async(e,t)=>{const n=Eo(ko,t.name);return await lk(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t}).then(async s=>{const o=await pg(s.ref),a=s.metadata;return{downloadUrl:o,metadata:a}})},Sk=async()=>{const t=(await ck(Eo(ko))).items.map(async r=>{const i=Eo(ko,r.fullPath),s=await pg(i),o=await uk(i);return{downloadUrl:s,metadata:o}});return await Promise.all(t)},Lk=async e=>{const t=Eo(ko,e);await dk(t)},Ek=ke.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,kk=({onUpload:e})=>{const[t,n]=ee.useState(!1),[r,i]=ee.useState(""),[s,o]=ee.useState(""),[a,l]=ee.useState(null);return ot(za,{children:[L(VS,{onClick:()=>n(!t),src:WS,alt:"Add more content"}),t&&L(za,{children:ot(Ek,{onSubmit:async p=>{if(p.preventDefault(),a){const m=await wk(a,{name:s,caption:r});e(m),l(null),i(""),o(""),n(!1)}},children:[L("div",{children:L("label",{htmlFor:"caption",children:"Caption"})}),ot("div",{children:[L("input",{id:"caption",value:r,onChange:p=>i(p.target.value)}),L("div",{children:L("label",{htmlFor:"name",children:"Name"})}),L("div",{children:L("input",{id:"name",value:s,onChange:p=>o(p.target.value),required:!0})})]}),L("div",{children:L("label",{htmlFor:"file",children:"Choose a file"})}),L("div",{children:L("input",{id:"file",type:"file",required:!0,onChange:p=>{p.target.files&&l(p.target.files[0])}})}),a&&L("button",{type:"submit",children:"Upload a file"})]})})]})},Ik=()=>{const[e,t]=ee.useState("eantwibawua1@gmail.com"),[n,r]=ee.useState("");return ot("div",{children:[L("h1",{children:"Hey Eman 🙂"}),L("p",{children:"Please sign-in:"}),ot("form",{onSubmit:async s=>{s.preventDefault(),await _k(e,n)},children:[ot("div",{children:[L("label",{htmlFor:"email-address",children:"Email address"}),L("input",{type:"email",id:"email-address",value:e,onChange:s=>t(s.target.value),required:!0,placeholder:"Email address"})]}),ot("div",{children:[L("label",{htmlFor:"password",children:"Password"}),L("input",{type:"password",id:"password",value:n,onChange:s=>r(s.target.value),required:!0,placeholder:"Password"})]}),L("button",{type:"submit",children:"Sign in"})]})]})},Tk=ke.p`
  margin-top: 10px;
  color: rgba(12, 0, 0, 0.7);
  display: block;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,Ck=ke.h1`
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
`,Rk=ke.header`
  padding: 1px 20px;
  padding-top: 140px;
`,Pk=ke.figure`
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
`,Ak=ee.lazy(()=>Ky(()=>import("./LazyContent-05740495.js"),[],import.meta.url)),Nk=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(null),[i,s]=ee.useState(null);return ee.useEffect(()=>{Sw(gg,o=>{r(o)})},[]),ee.useEffect(()=>{(async()=>{const a=await Sk();s(a)})()},[]),e>=10&&!n?L(Ik,{}):ot(za,{children:[ot(Rk,{children:[L(Pk,{onClick:()=>t(e+1),children:L("img",{src:U1,alt:"are we cool yet t-shirt"})}),L(Ck,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),L(Tk,{children:"YOU'RE ALL WELCOME"})]}),L(jS,{children:ot(HS,{children:[n&&L(kk,{onUpload:o=>{s([o,...i||[]])}}),i&&i.map(o=>L(ee.Suspense,{fallback:L(BS,{}),children:L(Ak,{content:o,user:n,onDelete:a=>{const l=i.filter(u=>u.downloadUrl!==a.downloadUrl);s(l)}})},o.downloadUrl))]})})]})};Ba.createRoot(document.getElementById("root")).render(L(Nk,{}));export{FS as A,xk as B,Dk as C,$S as S,L as a,Ok as b,Lk as d,ot as j};
