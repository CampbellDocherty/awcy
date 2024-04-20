(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pi={},vg={get exports(){return pi},set exports(e){pi=e}},Eo={},ee={},yg={get exports(){return ee},set exports(e){ee=e}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),_g=Symbol.for("react.portal"),wg=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),Eg=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Tg=Symbol.for("react.forward_ref"),Cg=Symbol.for("react.suspense"),Rg=Symbol.for("react.memo"),Pg=Symbol.for("react.lazy"),yc=Symbol.iterator;function Ag(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cf=Object.assign,Rf={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Rf,this.updater=n||Tf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pf(){}Pf.prototype=Ar.prototype;function Zl(e,t,n){this.props=e,this.context=t,this.refs=Rf,this.updater=n||Tf}var eu=Zl.prototype=new Pf;eu.constructor=Zl;Cf(eu,Ar.prototype);eu.isPureReactComponent=!0;var _c=Array.isArray,Af=Object.prototype.hasOwnProperty,tu={current:null},Nf={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Af.call(t,r)&&!Nf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:bi,type:e,key:s,ref:o,props:i,_owner:tu.current}}function Ng(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function Og(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wc=/\/+/g;function Jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Og(""+e.key):t.toString(36)}function ys(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bi:case _g:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Jo(o,0):r,_c(i)?(n="",e!=null&&(n=e.replace(wc,"$&/")+"/"),ys(i,t,n,"",function(u){return u})):i!=null&&(nu(i)&&(i=Ng(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",_c(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Jo(s,a);o+=ys(s,t,n,l,i)}else if(l=Ag(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Jo(s,a++),o+=ys(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qi(e,t,n){if(e==null)return e;var r=[],i=0;return ys(e,r,"","",function(s){return t.call(n,s,i++)}),r}function xg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},_s={transition:null},Lg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:_s,ReactCurrentOwner:tu};L.Children={map:Qi,forEach:function(e,t,n){Qi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qi(e,function(){t++}),t},toArray:function(e){return Qi(e,function(t){return t})||[]},only:function(e){if(!nu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Ar;L.Fragment=wg;L.Profiler=Eg;L.PureComponent=Zl;L.StrictMode=Sg;L.Suspense=Cg;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Af.call(t,l)&&!Nf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:bi,type:e.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Ig,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kg,_context:e},e.Consumer=e};L.createElement=Of;L.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Tg,render:e}};L.isValidElement=nu;L.lazy=function(e){return{$$typeof:Pg,_payload:{_status:-1,_result:e},_init:xg}};L.memo=function(e,t){return{$$typeof:Rg,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=_s.transition;_s.transition={};try{e()}finally{_s.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return we.current.useCallback(e,t)};L.useContext=function(e){return we.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return we.current.useDeferredValue(e)};L.useEffect=function(e,t){return we.current.useEffect(e,t)};L.useId=function(){return we.current.useId()};L.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return we.current.useMemo(e,t)};L.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};L.useRef=function(e){return we.current.useRef(e)};L.useState=function(e){return we.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return we.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(yg);const mi=gg(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=ee,Ug=Symbol.for("react.element"),Mg=Symbol.for("react.fragment"),bg=Object.prototype.hasOwnProperty,Fg=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zg={key:!0,ref:!0,__self:!0,__source:!0};function xf(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bg.call(t,r)&&!zg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ug,type:e,key:s,ref:o,props:i,_owner:Fg.current}}Eo.Fragment=Mg;Eo.jsx=xf;Eo.jsxs=xf;(function(e){e.exports=Eo})(vg);const Fa=pi.Fragment,D=pi.jsx,ot=pi.jsxs;var za={},$a={},$g={get exports(){return $a},set exports(e){$a=e}},be={},Ba={},Bg={get exports(){return Ba},set exports(e){Ba=e}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,P){var N=T.length;T.push(P);e:for(;0<N;){var z=N-1>>>1,$=T[z];if(0<i($,P))T[z]=P,T[N]=$,N=z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var P=T[0],N=T.pop();if(N!==P){T[0]=N;e:for(var z=0,$=T.length,gn=$>>>1;z<gn;){var Ge=2*(z+1)-1,Ot=T[Ge],xe=Ge+1,ht=T[xe];if(0>i(Ot,N))xe<$&&0>i(ht,Ot)?(T[z]=ht,T[xe]=N,z=xe):(T[z]=Ot,T[Ge]=N,z=Ge);else if(xe<$&&0>i(ht,N))T[z]=ht,T[xe]=N,z=xe;else break e}}return P}function i(T,P){var N=T.sortIndex-P.sortIndex;return N!==0?N:T.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,p=null,m=3,v=!1,y=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=T)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function g(T){if(_=!1,f(T),!y)if(n(l)!==null)y=!0,Fr(E);else{var P=n(u);P!==null&&mn(g,P.startTime-T)}}function E(T,P){y=!1,_&&(_=!1,h(I),I=-1),v=!0;var N=m;try{for(f(P),p=n(l);p!==null&&(!(p.expirationTime>P)||T&&!Oe());){var z=p.callback;if(typeof z=="function"){p.callback=null,m=p.priorityLevel;var $=z(p.expirationTime<=P);P=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(l)&&r(l),f(P)}else r(l);p=n(l)}if(p!==null)var gn=!0;else{var Ge=n(u);Ge!==null&&mn(g,Ge.startTime-P),gn=!1}return gn}finally{p=null,m=N,v=!1}}var S=!1,w=null,I=-1,U=5,x=-1;function Oe(){return!(e.unstable_now()-x<U)}function hn(){if(w!==null){var T=e.unstable_now();x=T;var P=!0;try{P=w(!0,T)}finally{P?pn():(S=!1,w=null)}}else S=!1}var pn;if(typeof c=="function")pn=function(){c(hn)};else if(typeof MessageChannel<"u"){var qi=new MessageChannel,Qo=qi.port2;qi.port1.onmessage=hn,pn=function(){Qo.postMessage(null)}}else pn=function(){R(hn,0)};function Fr(T){w=T,S||(S=!0,pn())}function mn(T,P){I=R(function(){T(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Fr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var N=m;m=P;try{return T()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,P){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=m;m=T;try{return P()}finally{m=N}},e.unstable_scheduleCallback=function(T,P,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,T){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=N+$,T={id:d++,callback:P,priorityLevel:T,startTime:N,expirationTime:$,sortIndex:-1},N>z?(T.sortIndex=N,t(u,T),n(l)===null&&T===n(u)&&(_?(h(I),I=-1):_=!0,mn(g,N-z))):(T.sortIndex=$,t(l,T),y||v||(y=!0,Fr(E))),T},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(T){var P=m;return function(){var N=m;m=P;try{return T.apply(this,arguments)}finally{m=N}}}})(Lf);(function(e){e.exports=Lf})(Bg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=ee,Me=Ba;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uf=new Set,gi={};function zn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(gi[e]=t,e=0;e<t.length;e++)Uf.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,jg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},Ec={};function Hg(e){return ja.call(Ec,e)?!0:ja.call(Sc,e)?!1:jg.test(e)?Ec[e]=!0:(Sc[e]=!0,!1)}function Vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wg(e,t,n,r){if(t===null||typeof t>"u"||Vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,iu);ce[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wg(t,n,i,r)&&(n=null),r||i===null?Hg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Ff=Symbol.for("react.offscreen"),kc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Zo;function Yr(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var ea=!1;function ta(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Gg(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=ta(e.type,!1),e;case 11:return e=ta(e.type.render,!1),e;case 1:return e=ta(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Gn:return"Portal";case Ha:return"Profiler";case ou:return"StrictMode";case Va:return"Suspense";case Wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lu:return t=e.displayName||null,t!==null?t:Ga(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Ga(e(t))}catch{}}return null}function Kg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qg(e){var t=zf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=qg(e))}function $f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ic(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bf(e,t){t=t.checked,t!=null&&su(e,"checked",t,!1)}function qa(e,t){Bf(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Qr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function jf(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yg=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){Yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function Wf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function Gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qg=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ja(e,t){if(t){if(Qg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var el=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,ar=null,lr=null;function Pc(e){if(e=$i(e)){if(typeof tl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ro(t),tl(e.stateNode,e.type,t))}}function Kf(e){ar?lr?lr.push(e):lr=[e]:ar=e}function qf(){if(ar){var e=ar,t=lr;if(lr=ar=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Yf(e,t){return e(t)}function Qf(){}var na=!1;function Xf(e,t,n){if(na)return e(t,n);na=!0;try{return Yf(e,t,n)}finally{na=!1,(ar!==null||lr!==null)&&(Qf(),qf())}}function yi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var nl=!1;if(It)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){nl=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{nl=!1}function Xg(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ri=!1,$s=null,Bs=!1,rl=null,Jg={onError:function(e){ri=!0,$s=e}};function Zg(e,t,n,r,i,s,o,a,l){ri=!1,$s=null,Xg.apply(Jg,arguments)}function ev(e,t,n,r,i,s,o,a,l){if(Zg.apply(this,arguments),ri){if(ri){var u=$s;ri=!1,$s=null}else throw Error(k(198));Bs||(Bs=!0,rl=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ac(e){if($n(e)!==e)throw Error(k(188))}function tv(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ac(i),e;if(s===r)return Ac(i),t;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Zf(e){return e=tv(e),e!==null?eh(e):null}function eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eh(e);if(t!==null)return t;e=e.sibling}return null}var th=Me.unstable_scheduleCallback,Nc=Me.unstable_cancelCallback,nv=Me.unstable_shouldYield,rv=Me.unstable_requestPaint,Z=Me.unstable_now,iv=Me.unstable_getCurrentPriorityLevel,cu=Me.unstable_ImmediatePriority,nh=Me.unstable_UserBlockingPriority,js=Me.unstable_NormalPriority,sv=Me.unstable_LowPriority,rh=Me.unstable_IdlePriority,ko=null,lt=null;function ov(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:uv,av=Math.log,lv=Math.LN2;function uv(e){return e>>>=0,e===0?32:31-(av(e)/lv|0)|0}var es=64,ts=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xr(a):(s&=o,s!==0&&(r=Xr(s)))}else o=n&~i,o!==0?r=Xr(o):s!==0&&(r=Xr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),i=1<<n,r|=e[n],t&=~i;return r}function cv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Xe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cv(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ih(){var e=es;return es<<=1,!(es&4194240)&&(es=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function fv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function sh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oh,fu,ah,lh,uh,sl=!1,ns=[],qt=null,Yt=null,Qt=null,_i=new Map,wi=new Map,Ft=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(t.pointerId)}}function jr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=$i(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pv(e,t,n,r,i){switch(t){case"focusin":return qt=jr(qt,e,t,n,r,i),!0;case"dragenter":return Yt=jr(Yt,e,t,n,r,i),!0;case"mouseover":return Qt=jr(Qt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _i.set(s,jr(_i.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wi.set(s,jr(wi.get(s)||null,e,t,n,r,i)),!0}return!1}function ch(e){var t=Sn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=Jf(n),t!==null){e.blockedOn=t,uh(e.priority,function(){ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);el=r,n.target.dispatchEvent(r),el=null}else return t=$i(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function xc(e,t,n){ws(e)&&n.delete(t)}function mv(){sl=!1,qt!==null&&ws(qt)&&(qt=null),Yt!==null&&ws(Yt)&&(Yt=null),Qt!==null&&ws(Qt)&&(Qt=null),_i.forEach(xc),wi.forEach(xc)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,mv)))}function Si(e){function t(i){return Hr(i,e)}if(0<ns.length){Hr(ns[0],e);for(var n=1;n<ns.length;n++){var r=ns[n];r.blockedOn===e&&(r.blockedOn=null)}}for(qt!==null&&Hr(qt,e),Yt!==null&&Hr(Yt,e),Qt!==null&&Hr(Qt,e),_i.forEach(t),wi.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&Ft.shift()}var ur=At.ReactCurrentBatchConfig,Vs=!0;function gv(e,t,n,r){var i=F,s=ur.transition;ur.transition=null;try{F=1,hu(e,t,n,r)}finally{F=i,ur.transition=s}}function vv(e,t,n,r){var i=F,s=ur.transition;ur.transition=null;try{F=4,hu(e,t,n,r)}finally{F=i,ur.transition=s}}function hu(e,t,n,r){if(Vs){var i=ol(e,t,n,r);if(i===null)ha(e,t,r,Ws,n),Oc(e,r);else if(pv(i,e,t,n,r))r.stopPropagation();else if(Oc(e,r),t&4&&-1<hv.indexOf(e)){for(;i!==null;){var s=$i(i);if(s!==null&&oh(s),s=ol(e,t,n,r),s===null&&ha(e,t,r,Ws,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var Ws=null;function ol(e,t,n,r){if(Ws=null,e=uu(r),e=Sn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case cu:return 1;case nh:return 4;case js:case sv:return 16;case rh:return 536870912;default:return 16}default:return 16}}var Gt=null,pu=null,Ss=null;function fh(){if(Ss)return Ss;var e,t=pu,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ss=i.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Lc(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rs:Lc,this.isPropagationStopped=Lc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=Fe(Nr),zi=Q({},Nr,{view:0,detail:0}),yv=Fe(zi),ia,sa,Vr,Io=Q({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ia=e.screenX-Vr.screenX,sa=e.screenY-Vr.screenY):sa=ia=0,Vr=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Dc=Fe(Io),_v=Q({},Io,{dataTransfer:0}),wv=Fe(_v),Sv=Q({},zi,{relatedTarget:0}),oa=Fe(Sv),Ev=Q({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=Fe(Ev),Iv=Q({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tv=Fe(Iv),Cv=Q({},Nr,{data:0}),Uc=Fe(Cv),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Av[e])?!!t[e]:!1}function gu(){return Nv}var Ov=Q({},zi,{key:function(e){if(e.key){var t=Rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xv=Fe(Ov),Lv=Q({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=Fe(Lv),Dv=Q({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Uv=Fe(Dv),Mv=Q({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Fe(Mv),Fv=Q({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Fe(Fv),$v=[9,13,27,32],vu=It&&"CompositionEvent"in window,ii=null;It&&"documentMode"in document&&(ii=document.documentMode);var Bv=It&&"TextEvent"in window&&!ii,hh=It&&(!vu||ii&&8<ii&&11>=ii),bc=String.fromCharCode(32),Fc=!1;function ph(e,t){switch(e){case"keyup":return $v.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function jv(e,t){switch(e){case"compositionend":return mh(t);case"keypress":return t.which!==32?null:(Fc=!0,bc);case"textInput":return e=t.data,e===bc&&Fc?null:e;default:return null}}function Hv(e,t){if(qn)return e==="compositionend"||!vu&&ph(e,t)?(e=fh(),Ss=pu=Gt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hh&&t.locale!=="ko"?null:t.data;default:return null}}var Vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vv[e.type]:t==="textarea"}function gh(e,t,n,r){Kf(r),t=Gs(t,"onChange"),0<t.length&&(n=new mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,Ei=null;function Wv(e){Rh(e,0)}function To(e){var t=Xn(e);if($f(t))return e}function Gv(e,t){if(e==="change")return t}var vh=!1;if(It){var aa;if(It){var la="oninput"in document;if(!la){var $c=document.createElement("div");$c.setAttribute("oninput","return;"),la=typeof $c.oninput=="function"}aa=la}else aa=!1;vh=aa&&(!document.documentMode||9<document.documentMode)}function Bc(){si&&(si.detachEvent("onpropertychange",yh),Ei=si=null)}function yh(e){if(e.propertyName==="value"&&To(Ei)){var t=[];gh(t,Ei,e,uu(e)),Xf(Wv,t)}}function Kv(e,t,n){e==="focusin"?(Bc(),si=t,Ei=n,si.attachEvent("onpropertychange",yh)):e==="focusout"&&Bc()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Ei)}function Yv(e,t){if(e==="click")return To(t)}function Qv(e,t){if(e==="input"||e==="change")return To(t)}function Xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Xv;function ki(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!et(e[i],t[i]))return!1}return!0}function jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var n=jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jc(n)}}function _h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wh(){for(var e=window,t=zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zs(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jv(e){var t=wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_h(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Hc(n,s);var o=Hc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zv=It&&"documentMode"in document&&11>=document.documentMode,Yn=null,al=null,oi=null,ll=!1;function Vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ll||Yn==null||Yn!==zs(r)||(r=Yn,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&ki(oi,r)||(oi=r,r=Gs(al,"onSelect"),0<r.length&&(t=new mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionend:is("Transition","TransitionEnd")},ua={},Sh={};It&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Co(e){if(ua[e])return ua[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sh)return ua[e]=t[n];return e}var Eh=Co("animationend"),kh=Co("animationiteration"),Ih=Co("animationstart"),Th=Co("transitionend"),Ch=new Map,Wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Ch.set(e,t),zn(t,[e])}for(var ca=0;ca<Wc.length;ca++){var da=Wc[ca],ey=da.toLowerCase(),ty=da[0].toUpperCase()+da.slice(1);un(ey,"on"+ty)}un(Eh,"onAnimationEnd");un(kh,"onAnimationIteration");un(Ih,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Th,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ev(r,t,void 0,e),e.currentTarget=null}function Rh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Gc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Gc(i,a,u),s=l}}}if(Bs)throw e=rl,Bs=!1,rl=null,e}function H(e,t){var n=t[hl];n===void 0&&(n=t[hl]=new Set);var r=e+"__bubble";n.has(r)||(Ph(t,e,2,!1),n.add(r))}function fa(e,t,n){var r=0;t&&(r|=4),Ph(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ss]){e[ss]=!0,Uf.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||fa(n,!1,e),fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,fa("selectionchange",!1,t))}}function Ph(e,t,n,r){switch(dh(t)){case 1:var i=gv;break;case 4:i=vv;break;default:i=hu}n=i.bind(null,t,n,e),i=void 0,!nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xf(function(){var u=s,d=uu(n),p=[];e:{var m=Ch.get(e);if(m!==void 0){var v=mu,y=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":v=xv;break;case"focusin":y="focus",v=oa;break;case"focusout":y="blur",v=oa;break;case"beforeblur":case"afterblur":v=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Uv;break;case Eh:case kh:case Ih:v=kv;break;case Th:v=bv;break;case"scroll":v=yv;break;case"wheel":v=zv;break;case"copy":case"cut":case"paste":v=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Mc}var _=(t&4)!==0,R=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,h!==null&&(g=yi(c,h),g!=null&&_.push(Ti(c,g,f)))),R)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,d),p.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==el&&(y=n.relatedTarget||n.fromElement)&&(Sn(y)||y[Tt]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Sn(y):null,y!==null&&(R=$n(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Dc,g="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Mc,g="onPointerLeave",h="onPointerEnter",c="pointer"),R=v==null?m:Xn(v),f=y==null?m:Xn(y),m=new _(g,c+"leave",v,n,d),m.target=R,m.relatedTarget=f,g=null,Sn(d)===u&&(_=new _(h,c+"enter",y,n,d),_.target=f,_.relatedTarget=R,g=_),R=g,v&&y)t:{for(_=v,h=y,c=0,f=_;f;f=Hn(f))c++;for(f=0,g=h;g;g=Hn(g))f++;for(;0<c-f;)_=Hn(_),c--;for(;0<f-c;)h=Hn(h),f--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=Hn(_),h=Hn(h)}_=null}else _=null;v!==null&&Kc(p,m,v,_,!1),y!==null&&R!==null&&Kc(p,R,y,_,!0)}}e:{if(m=u?Xn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Gv;else if(zc(m))if(vh)E=Qv;else{E=qv;var S=Kv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Yv);if(E&&(E=E(e,u))){gh(p,E,n,d);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Ya(m,"number",m.value)}switch(S=u?Xn(u):window,e){case"focusin":(zc(S)||S.contentEditable==="true")&&(Yn=S,al=u,oi=null);break;case"focusout":oi=al=Yn=null;break;case"mousedown":ll=!0;break;case"contextmenu":case"mouseup":case"dragend":ll=!1,Vc(p,n,d);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Vc(p,n,d)}var w;if(vu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else qn?ph(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(hh&&n.locale!=="ko"&&(qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&qn&&(w=fh()):(Gt=d,pu="value"in Gt?Gt.value:Gt.textContent,qn=!0)),S=Gs(u,I),0<S.length&&(I=new Uc(I,e,null,n,d),p.push({event:I,listeners:S}),w?I.data=w:(w=mh(n),w!==null&&(I.data=w)))),(w=Bv?jv(e,n):Hv(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(d=new Uc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=w))}Rh(p,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yi(e,n),s!=null&&r.unshift(Ti(e,s,i)),s=yi(e,t),s!=null&&r.push(Ti(e,s,i))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=yi(n,s),l!=null&&o.unshift(Ti(n,l,a))):i||(l=yi(n,s),l!=null&&o.push(Ti(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ry=/\r\n?/g,iy=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(ry,`
`).replace(iy,"")}function os(e,t,n){if(t=qc(t),qc(e)!==t&&n)throw Error(k(425))}function Ks(){}var ul=null,cl=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(ay)}:fl;function ay(e){setTimeout(function(){throw e})}function pa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),st="__reactFiber$"+Or,Ci="__reactProps$"+Or,Tt="__reactContainer$"+Or,hl="__reactEvents$"+Or,ly="__reactListeners$"+Or,uy="__reactHandles$"+Or;function Sn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[st])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function $i(e){return e=e[st]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ro(e){return e[Ci]||null}var pl=[],Jn=-1;function cn(e){return{current:e}}function W(e){0>Jn||(e.current=pl[Jn],pl[Jn]=null,Jn--)}function j(e,t){Jn++,pl[Jn]=e.current,e.current=t}var ln={},pe=cn(ln),Ce=cn(!1),Nn=ln;function gr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function qs(){W(Ce),W(pe)}function Xc(e,t,n){if(pe.current!==ln)throw Error(k(168));j(pe,t),j(Ce,n)}function Ah(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Kg(e)||"Unknown",i));return Q({},n,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Nn=pe.current,j(pe,e),j(Ce,Ce.current),!0}function Jc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Ah(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(pe),j(pe,e)):W(Ce),j(Ce,n)}var gt=null,Po=!1,ma=!1;function Nh(e){gt===null?gt=[e]:gt.push(e)}function cy(e){Po=!0,Nh(e)}function dn(){if(!ma&&gt!==null){ma=!0;var e=0,t=F;try{var n=gt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,Po=!1}catch(i){throw gt!==null&&(gt=gt.slice(e+1)),th(cu,dn),i}finally{F=t,ma=!1}}return null}var Zn=[],er=0,Qs=null,Xs=0,ze=[],$e=0,On=null,vt=1,yt="";function yn(e,t){Zn[er++]=Xs,Zn[er++]=Qs,Qs=e,Xs=t}function Oh(e,t,n){ze[$e++]=vt,ze[$e++]=yt,ze[$e++]=On,On=e;var r=vt;e=yt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var s=32-Xe(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vt=1<<32-Xe(t)+i|n<<i|r,yt=s+e}else vt=1<<s|n<<i|r,yt=e}function _u(e){e.return!==null&&(yn(e,1),Oh(e,1,0))}function wu(e){for(;e===Qs;)Qs=Zn[--er],Zn[er]=null,Xs=Zn[--er],Zn[er]=null;for(;e===On;)On=ze[--$e],ze[$e]=null,yt=ze[--$e],ze[$e]=null,vt=ze[--$e],ze[$e]=null}var Ue=null,De=null,K=!1,Qe=null;function xh(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,De=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=On!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,De=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(K){var t=De;if(t){var n=t;if(!Zc(e,t)){if(ml(e))throw Error(k(418));t=Xt(n.nextSibling);var r=Ue;t&&Zc(e,t)?xh(r,n):(e.flags=e.flags&-4097|2,K=!1,Ue=e)}}else{if(ml(e))throw Error(k(418));e.flags=e.flags&-4097|2,K=!1,Ue=e}}}function ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function as(e){if(e!==Ue)return!1;if(!K)return ed(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=De)){if(ml(e))throw Lh(),Error(k(418));for(;t;)xh(e,t),t=Xt(t.nextSibling)}if(ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ue?Xt(e.stateNode.nextSibling):null;return!0}function Lh(){for(var e=De;e;)e=Xt(e.nextSibling)}function vr(){De=Ue=null,K=!1}function Su(e){Qe===null?Qe=[e]:Qe.push(e)}var dy=At.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Js=cn(null),Zs=null,tr=null,Eu=null;function ku(){Eu=tr=Zs=null}function Iu(e){var t=Js.current;W(Js),e._currentValue=t}function vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Zs=e,Eu=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Zs===null)throw Error(k(308));tr=e,Zs.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var En=null;function Tu(e){En===null?En=[e]:En.push(e)}function Dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Tu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Tu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}function td(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=u=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=Q({},p,m);break e;case 2:bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=p):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=p}}function nd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Mh=new Df.Component().refs;function yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),i=en(e),s=kt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Jt(e,s,i),t!==null&&(Je(t,e,i,r),ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),i=en(e),s=kt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Jt(e,s,i),t!==null&&(Je(t,e,i,r),ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=en(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(Je(t,e,r,n),ks(t,e,r))}};function rd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,s):!0}function bh(e,t,n){var r=!1,i=ln,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Re(t)?Nn:pe.current,r=t.contextTypes,s=(r=r!=null)?gr(e,i):ln),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function id(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Mh,Cu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Re(t)?Nn:pe.current,i.context=gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(yl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ao.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Mh&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function Fh(e){function t(h,c){if(e){var f=h.deletions;f===null?(h.deletions=[c],h.flags|=16):f.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=tn(h,c),h.index=0,h.sibling=null,h}function s(h,c,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<c?(h.flags|=2,c):f):(h.flags|=2,c)):(h.flags|=1048576,c)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,f,g){return c===null||c.tag!==6?(c=Ea(f,h.mode,g),c.return=h,c):(c=i(c,f),c.return=h,c)}function l(h,c,f,g){var E=f.type;return E===Kn?d(h,c,f.props.children,g,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&sd(E)===c.type)?(g=i(c,f.props),g.ref=Wr(h,c,f),g.return=h,g):(g=As(f.type,f.key,f.props,null,h.mode,g),g.ref=Wr(h,c,f),g.return=h,g)}function u(h,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ka(f,h.mode,g),c.return=h,c):(c=i(c,f.children||[]),c.return=h,c)}function d(h,c,f,g,E){return c===null||c.tag!==7?(c=Cn(f,h.mode,g,E),c.return=h,c):(c=i(c,f),c.return=h,c)}function p(h,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ea(""+c,h.mode,f),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xi:return f=As(c.type,c.key,c.props,null,h.mode,f),f.ref=Wr(h,null,c),f.return=h,f;case Gn:return c=ka(c,h.mode,f),c.return=h,c;case Mt:var g=c._init;return p(h,g(c._payload),f)}if(Qr(c)||$r(c))return c=Cn(c,h.mode,f,null),c.return=h,c;ls(h,c)}return null}function m(h,c,f,g){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(h,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xi:return f.key===E?l(h,c,f,g):null;case Gn:return f.key===E?u(h,c,f,g):null;case Mt:return E=f._init,m(h,c,E(f._payload),g)}if(Qr(f)||$r(f))return E!==null?null:d(h,c,f,g,null);ls(h,f)}return null}function v(h,c,f,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return h=h.get(f)||null,a(c,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xi:return h=h.get(g.key===null?f:g.key)||null,l(c,h,g,E);case Gn:return h=h.get(g.key===null?f:g.key)||null,u(c,h,g,E);case Mt:var S=g._init;return v(h,c,f,S(g._payload),E)}if(Qr(g)||$r(g))return h=h.get(f)||null,d(c,h,g,E,null);ls(c,g)}return null}function y(h,c,f,g){for(var E=null,S=null,w=c,I=c=0,U=null;w!==null&&I<f.length;I++){w.index>I?(U=w,w=null):U=w.sibling;var x=m(h,w,f[I],g);if(x===null){w===null&&(w=U);break}e&&w&&x.alternate===null&&t(h,w),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x,w=U}if(I===f.length)return n(h,w),K&&yn(h,I),E;if(w===null){for(;I<f.length;I++)w=p(h,f[I],g),w!==null&&(c=s(w,c,I),S===null?E=w:S.sibling=w,S=w);return K&&yn(h,I),E}for(w=r(h,w);I<f.length;I++)U=v(w,h,I,f[I],g),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?I:U.key),c=s(U,c,I),S===null?E=U:S.sibling=U,S=U);return e&&w.forEach(function(Oe){return t(h,Oe)}),K&&yn(h,I),E}function _(h,c,f,g){var E=$r(f);if(typeof E!="function")throw Error(k(150));if(f=E.call(f),f==null)throw Error(k(151));for(var S=E=null,w=c,I=c=0,U=null,x=f.next();w!==null&&!x.done;I++,x=f.next()){w.index>I?(U=w,w=null):U=w.sibling;var Oe=m(h,w,x.value,g);if(Oe===null){w===null&&(w=U);break}e&&w&&Oe.alternate===null&&t(h,w),c=s(Oe,c,I),S===null?E=Oe:S.sibling=Oe,S=Oe,w=U}if(x.done)return n(h,w),K&&yn(h,I),E;if(w===null){for(;!x.done;I++,x=f.next())x=p(h,x.value,g),x!==null&&(c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return K&&yn(h,I),E}for(w=r(h,w);!x.done;I++,x=f.next())x=v(w,h,I,x.value,g),x!==null&&(e&&x.alternate!==null&&w.delete(x.key===null?I:x.key),c=s(x,c,I),S===null?E=x:S.sibling=x,S=x);return e&&w.forEach(function(hn){return t(h,hn)}),K&&yn(h,I),E}function R(h,c,f,g){if(typeof f=="object"&&f!==null&&f.type===Kn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Xi:e:{for(var E=f.key,S=c;S!==null;){if(S.key===E){if(E=f.type,E===Kn){if(S.tag===7){n(h,S.sibling),c=i(S,f.props.children),c.return=h,h=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&sd(E)===S.type){n(h,S.sibling),c=i(S,f.props),c.ref=Wr(h,S,f),c.return=h,h=c;break e}n(h,S);break}else t(h,S);S=S.sibling}f.type===Kn?(c=Cn(f.props.children,h.mode,g,f.key),c.return=h,h=c):(g=As(f.type,f.key,f.props,null,h.mode,g),g.ref=Wr(h,c,f),g.return=h,h=g)}return o(h);case Gn:e:{for(S=f.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(h,c.sibling),c=i(c,f.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=ka(f,h.mode,g),c.return=h,h=c}return o(h);case Mt:return S=f._init,R(h,c,S(f._payload),g)}if(Qr(f))return y(h,c,f,g);if($r(f))return _(h,c,f,g);ls(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,f),c.return=h,h=c):(n(h,c),c=Ea(f,h.mode,g),c.return=h,h=c),o(h)):n(h,c)}return R}var yr=Fh(!0),zh=Fh(!1),Bi={},ut=cn(Bi),Ri=cn(Bi),Pi=cn(Bi);function kn(e){if(e===Bi)throw Error(k(174));return e}function Ru(e,t){switch(j(Pi,t),j(Ri,e),j(ut,Bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xa(t,e)}W(ut),j(ut,t)}function _r(){W(ut),W(Ri),W(Pi)}function $h(e){kn(Pi.current);var t=kn(ut.current),n=Xa(t,e.type);t!==n&&(j(Ri,e),j(ut,n))}function Pu(e){Ri.current===e&&(W(ut),W(Ri))}var q=cn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ga=[];function Au(){for(var e=0;e<ga.length;e++)ga[e]._workInProgressVersionPrimary=null;ga.length=0}var Is=At.ReactCurrentDispatcher,va=At.ReactCurrentBatchConfig,xn=0,Y=null,re=null,se=null,no=!1,ai=!1,Ai=0,fy=0;function de(){throw Error(k(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Ou(e,t,n,r,i,s){if(xn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?gy:vy,e=n(r,i),ai){s=0;do{if(ai=!1,Ai=0,25<=s)throw Error(k(301));s+=1,se=re=null,t.updateQueue=null,Is.current=yy,e=n(r,i)}while(ai)}if(Is.current=ro,t=re!==null&&re.next!==null,xn=0,se=re=Y=null,no=!1,t)throw Error(k(300));return e}function xu(){var e=Ai!==0;return Ai=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Y.memoizedState=se=e:se=se.next=e,se}function Ve(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=se===null?Y.memoizedState:se.next;if(t!==null)se=t,re=e;else{if(e===null)throw Error(k(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?Y.memoizedState=se=e:se=se.next=e}return se}function Ni(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((xn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Y.lanes|=d,Ln|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,Ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Bh(){}function jh(e,t){var n=Y,r=Ve(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ie=!0),r=r.queue,Lu(Wh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Oi(9,Vh.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));xn&30||Hh(n,t,i)}return i}function Hh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vh(e,t,n,r){t.value=n,t.getSnapshot=r,Gh(t)&&Kh(e)}function Wh(e,t,n){return n(function(){Gh(t)&&Kh(e)})}function Gh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Kh(e){var t=Ct(e,1);t!==null&&Je(t,e,1,-1)}function od(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=my.bind(null,Y,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qh(){return Ve().memoizedState}function Ts(e,t,n,r){var i=rt();Y.flags|=e,i.memoizedState=Oi(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var i=Ve();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Nu(r,o.deps)){i.memoizedState=Oi(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Oi(1|t,n,s,r)}function ad(e,t){return Ts(8390656,8,e,t)}function Lu(e,t){return No(2048,8,e,t)}function Yh(e,t){return No(4,2,e,t)}function Qh(e,t){return No(4,4,e,t)}function Xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jh(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,Xh.bind(null,t,e),n)}function Du(){}function Zh(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ep(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tp(e,t,n){return xn&21?(et(n,t)||(n=ih(),Y.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function hy(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=va.transition;va.transition={};try{e(!1),t()}finally{F=n,va.transition=r}}function np(){return Ve().memoizedState}function py(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rp(e))ip(t,n);else if(n=Dh(e,t,n,r),n!==null){var i=_e();Je(n,e,r,i),sp(n,t,r)}}function my(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rp(e))ip(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,Tu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Dh(e,t,i,r),n!==null&&(i=_e(),Je(n,e,r,i),sp(n,t,r))}}function rp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ip(e,t){ai=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}var ro={readContext:He,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},gy={readContext:He,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:ad,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ts(4194308,4,Xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ts(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=py.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:od,useDebugValue:Du,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=od(!1),t=e[0];return e=hy.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=rt();if(K){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));xn&30||Hh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ad(Wh.bind(null,r,s,e),[e]),r.flags|=2048,Oi(9,Vh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(K){var n=yt,r=vt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vy={readContext:He,useCallback:Zh,useContext:He,useEffect:Lu,useImperativeHandle:Jh,useInsertionEffect:Yh,useLayoutEffect:Qh,useMemo:ep,useReducer:ya,useRef:qh,useState:function(){return ya(Ni)},useDebugValue:Du,useDeferredValue:function(e){var t=Ve();return tp(t,re.memoizedState,e)},useTransition:function(){var e=ya(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:jh,useId:np,unstable_isNewReconciler:!1},yy={readContext:He,useCallback:Zh,useContext:He,useEffect:Lu,useImperativeHandle:Jh,useInsertionEffect:Yh,useLayoutEffect:Qh,useMemo:ep,useReducer:_a,useRef:qh,useState:function(){return _a(Ni)},useDebugValue:Du,useDeferredValue:function(e){var t=Ve();return re===null?t.memoizedState=e:tp(t,re.memoizedState,e)},useTransition:function(){var e=_a(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:jh,useId:np,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=Gg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function op(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,Nl=r),wl(e,t)},n}function ap(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wl(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ld(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _y;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ly.bind(null,e,t,n),t.then(e,e))}function ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var wy=At.ReactCurrentOwner,Ie=!1;function ve(e,t,n,r){t.child=e===null?zh(t,null,n,r):yr(t,e.child,n,r)}function dd(e,t,n,r,i){n=n.render;var s=t.ref;return cr(t,i),r=Ou(e,t,n,r,s,i),n=xu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(K&&n&&_u(t),t.flags|=1,ve(e,t,r,i),t.child)}function fd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ju(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,lp(e,t,s,r,i)):(e=As(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(o,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=tn(s,r),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ki(s,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return Sl(e,t,n,r,i)}function up(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(rr,Le),Le|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(rr,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(rr,Le),Le|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,j(rr,Le),Le|=r;return ve(e,t,i,n),t.child}function cp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,i){var s=Re(n)?Nn:pe.current;return s=gr(t,s),cr(t,i),n=Ou(e,t,n,r,s,i),r=xu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(K&&r&&_u(t),t.flags|=1,ve(e,t,n,i),t.child)}function hd(e,t,n,r,i){if(Re(n)){var s=!0;Ys(t)}else s=!1;if(cr(t,i),t.stateNode===null)Cs(e,t),bh(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Re(n)?Nn:pe.current,u=gr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&id(t,o,r,u),bt=!1;var m=t.memoizedState;o.state=m,eo(t,r,o,i),l=t.memoizedState,a!==r||m!==l||Ce.current||bt?(typeof d=="function"&&(yl(t,n,d,r),l=t.memoizedState),(a=bt||rd(t,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Uh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),o.props=u,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Re(n)?Nn:pe.current,l=gr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&id(t,o,r,l),bt=!1,m=t.memoizedState,o.state=m,eo(t,r,o,i);var y=t.memoizedState;a!==p||m!==y||Ce.current||bt?(typeof v=="function"&&(yl(t,n,v,r),y=t.memoizedState),(u=bt||rd(t,n,u,r,m,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,s,i)}function El(e,t,n,r,i,s){cp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Jc(t,n,!1),Rt(e,t,s);r=t.stateNode,wy.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=yr(t,e.child,null,s),t.child=yr(t,null,a,s)):ve(e,t,a,s),t.memoizedState=r.state,i&&Jc(t,n,!0),t.child}function dp(e){var t=e.stateNode;t.pendingContext?Xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xc(e,t.context,!1),Ru(e,t.containerInfo)}function pd(e,t,n,r,i){return vr(),Su(i),t.flags|=256,ve(e,t,n,r),t.child}var kl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(q,i&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lo(o,r,0,null),e=Cn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Il(n),t.memoizedState=kl,e):Uu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Sy(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tn(a,s):(s=Cn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Il(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=kl,r}return s=e.child,e=s.sibling,r=tn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uu(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function us(e,t,n,r){return r!==null&&Su(r),yr(t,e.child,null,n),e=Uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sy(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(k(422))),us(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),s=Cn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&yr(t,e.child,null,o),t.child.memoizedState=Il(o),t.memoizedState=kl,s);if(!(t.mode&1))return us(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=wa(s,r,void 0),us(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ie||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(e,i),Je(r,e,i,-1))}return Bu(),r=wa(Error(k(421))),us(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dy.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,De=Xt(i.nextSibling),Ue=t,K=!0,Qe=null,e!==null&&(ze[$e++]=vt,ze[$e++]=yt,ze[$e++]=On,vt=e.id,yt=e.overflow,On=t),t=Uu(t,r.children),t.flags|=4096,t)}function md(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vl(e.return,t,n)}function Sa(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function hp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sa(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sa(t,!0,n,null,s);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ey(e,t,n){switch(t.tag){case 3:dp(t),vr();break;case 5:$h(t);break;case 1:Re(t.type)&&Ys(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?fp(e,t,n):(j(q,q.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);j(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,up(e,t,n)}return Rt(e,t,n)}var pp,Tl,mp,gp;pp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};mp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(ut.current);var s=null;switch(n){case"input":i=Ka(e,i),r=Ka(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Qa(e,i),r=Qa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ks)}Ja(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ky(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Re(t.type)&&qs(),fe(t),null;case 3:return r=t.stateNode,_r(),W(Ce),W(pe),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(as(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Ll(Qe),Qe=null))),Tl(e,t),fe(t),null;case 5:Pu(t);var i=kn(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)mp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return fe(t),null}if(e=kn(ut.current),as(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[st]=t,r[Ci]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)H(Jr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ic(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Cc(r,s),H("invalid",r)}Ja(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&os(r.textContent,a,e),i=["children",""+a]):gi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ji(r),Tc(r,s,!0);break;case"textarea":Ji(r),Rc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ks)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[st]=t,e[Ci]=r,pp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Za(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)H(Jr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Ic(e,r),i=Ka(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Cc(e,r),i=Qa(e,r),H("invalid",e);break;default:i=r}Ja(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vf(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vi(e,l):typeof l=="number"&&vi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&su(e,s,l,o))}switch(n){case"input":Ji(e),Tc(e,r,!1);break;case"textarea":Ji(e),Rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?or(e,!!r.multiple,s,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ks)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=kn(Pi.current),kn(ut.current),as(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(s=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:os(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&os(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return fe(t),null;case 13:if(W(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&De!==null&&t.mode&1&&!(t.flags&128))Lh(),vr(),t.flags|=98560,s=!1;else if(s=as(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[st]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),s=!1}else Qe!==null&&(Ll(Qe),Qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):Bu())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return _r(),Tl(e,t),e===null&&Ii(t.stateNode.containerInfo),fe(t),null;case 10:return Iu(t.type._context),fe(t),null;case 17:return Re(t.type)&&qs(),fe(t),null;case 19:if(W(q),s=t.memoizedState,s===null)return fe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=to(e),o!==null){for(t.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Sr&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=to(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return fe(t),null}else 2*Z()-s.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,j(q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return $u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Iy(e,t){switch(wu(t),t.tag){case 1:return Re(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),W(Ce),W(pe),Au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pu(t),null;case 13:if(W(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(q),null;case 4:return _r(),null;case 10:return Iu(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var cs=!1,he=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,C=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Cl(e,t,n){try{n()}catch(r){J(e,t,r)}}var gd=!1;function Cy(e,t){if(ul=Vs,e=wh(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++d===r&&(l=o),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cl={focusedElem:e,selectionRange:n},Vs=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,R=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:qe(t.type,_),R);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){J(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=gd,gd=!1,y}function li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cl(t,n,s)}i=i.next}while(i!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vp(e){var t=e.alternate;t!==null&&(e.alternate=null,vp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ci],delete t[hl],delete t[ly],delete t[uy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yp(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ks));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var le=null,Ye=!1;function Lt(e,t,n){for(n=n.child;n!==null;)_p(e,t,n),n=n.sibling}function _p(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:he||nr(n,t);case 6:var r=le,i=Ye;le=null,Lt(e,t,n),le=r,Ye=i,le!==null&&(Ye?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ye?(e=le,n=n.stateNode,e.nodeType===8?pa(e.parentNode,n):e.nodeType===1&&pa(e,n),Si(e)):pa(le,n.stateNode));break;case 4:r=le,i=Ye,le=n.stateNode.containerInfo,Ye=!0,Lt(e,t,n),le=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cl(n,t,o),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!he&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Lt(e,t,n),he=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ty),t.forEach(function(r){var i=Uy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ye=!1;break e;case 3:le=a.stateNode.containerInfo,Ye=!0;break e;case 4:le=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(le===null)throw Error(k(160));_p(s,o,i),le=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}function wp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),nt(e),r&4){try{li(3,e,e.return),Oo(3,e)}catch(_){J(e,e.return,_)}try{li(5,e,e.return)}catch(_){J(e,e.return,_)}}break;case 1:Ke(t,e),nt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(Ke(t,e),nt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var i=e.stateNode;try{vi(i,"")}catch(_){J(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bf(i,s),Za(a,o);var u=Za(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?Gf(i,p):d==="dangerouslySetInnerHTML"?Vf(i,p):d==="children"?vi(i,p):su(i,d,p,u)}switch(a){case"input":qa(i,s);break;case"textarea":jf(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?or(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?or(i,!!s.multiple,s.defaultValue,!0):or(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ci]=s}catch(_){J(e,e.return,_)}}break;case 6:if(Ke(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){J(e,e.return,_)}}break;case 3:if(Ke(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(_){J(e,e.return,_)}break;case 4:Ke(t,e),nt(e);break;case 13:Ke(t,e),nt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=Z())),r&4&&yd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||d,Ke(t,e),he=u):Ke(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(C=e,d=e.child;d!==null;){for(p=C=d;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:li(4,m,m.return);break;case 1:nr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){J(r,n,_)}}break;case 5:nr(m,m.return);break;case 22:if(m.memoizedState!==null){wd(p);continue}}v!==null?(v.return=m,C=v):wd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wf("display",o))}catch(_){J(e,e.return,_)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){J(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ke(t,e),nt(e),r&4&&yd(e);break;case 21:break;default:Ke(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vi(i,""),r.flags&=-33);var s=vd(e);Al(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vd(e);Pl(e,a,o);break;default:throw Error(k(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ry(e,t,n){C=e,Sp(e)}function Sp(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||he;a=cs;var u=he;if(cs=o,(he=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Sd(i):l!==null?(l.return=o,C=l):Sd(i);for(;s!==null;)C=s,Sp(s),s=s.sibling;C=i,cs=a,he=u}_d(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):_d(e)}}function _d(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&nd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nd(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Si(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&Rl(t)}catch(m){J(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function wd(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Sd(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var s=t.return;try{Rl(t)}catch(l){J(t,s,l)}break;case 5:var o=t.return;try{Rl(t)}catch(l){J(t,o,l)}}}catch(l){J(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Py=Math.ceil,io=At.ReactCurrentDispatcher,Mu=At.ReactCurrentOwner,je=At.ReactCurrentBatchConfig,M=0,ae=null,ne=null,ue=0,Le=0,rr=cn(0),ie=0,xi=null,Ln=0,xo=0,bu=0,ui=null,ke=null,Fu=0,Sr=1/0,pt=null,so=!1,Nl=null,Zt=null,ds=!1,Kt=null,oo=0,ci=0,Ol=null,Rs=-1,Ps=0;function _e(){return M&6?Z():Rs!==-1?Rs:Rs=Z()}function en(e){return e.mode&1?M&2&&ue!==0?ue&-ue:dy.transition!==null?(Ps===0&&(Ps=ih()),Ps):(e=F,e!==0||(e=window.event,e=e===void 0?16:dh(e.type)),e):1}function Je(e,t,n,r){if(50<ci)throw ci=0,Ol=null,Error(k(185));Fi(e,n,r),(!(M&2)||e!==ae)&&(e===ae&&(!(M&2)&&(xo|=n),ie===4&&zt(e,ue)),Pe(e,r),n===1&&M===0&&!(t.mode&1)&&(Sr=Z()+500,Po&&dn()))}function Pe(e,t){var n=e.callbackNode;dv(e,t);var r=Hs(e,e===ae?ue:0);if(r===0)n!==null&&Nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nc(n),t===1)e.tag===0?cy(Ed.bind(null,e)):Nh(Ed.bind(null,e)),oy(function(){!(M&6)&&dn()}),n=null;else{switch(sh(r)){case 1:n=cu;break;case 4:n=nh;break;case 16:n=js;break;case 536870912:n=rh;break;default:n=js}n=Ap(n,Ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ep(e,t){if(Rs=-1,Ps=0,M&6)throw Error(k(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=Hs(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=M;M|=2;var s=Ip();(ae!==e||ue!==t)&&(pt=null,Sr=Z()+500,Tn(e,t));do try{Oy();break}catch(a){kp(e,a)}while(1);ku(),io.current=s,M=i,ne!==null?t=0:(ae=null,ue=0,t=ie)}if(t!==0){if(t===2&&(i=il(e),i!==0&&(r=i,t=xl(e,i))),t===1)throw n=xi,Tn(e,0),zt(e,r),Pe(e,Z()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ay(i)&&(t=ao(e,r),t===2&&(s=il(e),s!==0&&(r=s,t=xl(e,s))),t===1))throw n=xi,Tn(e,0),zt(e,r),Pe(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:_n(e,ke,pt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Fu+500-Z(),10<t)){if(Hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fl(_n.bind(null,e,ke,pt),t);break}_n(e,ke,pt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Xe(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Py(r/1960))-r,10<r){e.timeoutHandle=fl(_n.bind(null,e,ke,pt),r);break}_n(e,ke,pt);break;case 5:_n(e,ke,pt);break;default:throw Error(k(329))}}}return Pe(e,Z()),e.callbackNode===n?Ep.bind(null,e):null}function xl(e,t){var n=ui;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=ke,ke=n,t!==null&&Ll(t)),e}function Ll(e){ke===null?ke=e:ke.push.apply(ke,e)}function Ay(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~bu,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Ed(e){if(M&6)throw Error(k(327));dr();var t=Hs(e,0);if(!(t&1))return Pe(e,Z()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=il(e);r!==0&&(t=r,n=xl(e,r))}if(n===1)throw n=xi,Tn(e,0),zt(e,t),Pe(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,ke,pt),Pe(e,Z()),null}function zu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Sr=Z()+500,Po&&dn())}}function Dn(e){Kt!==null&&Kt.tag===0&&!(M&6)&&dr();var t=M;M|=1;var n=je.transition,r=F;try{if(je.transition=null,F=1,e)return e()}finally{F=r,je.transition=n,M=t,!(M&6)&&dn()}}function $u(){Le=rr.current,W(rr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sy(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:_r(),W(Ce),W(pe),Au();break;case 5:Pu(r);break;case 4:_r();break;case 13:W(q);break;case 19:W(q);break;case 10:Iu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(ae=e,ne=e=tn(e.current,null),ue=Le=t,ie=0,xi=null,bu=xo=Ln=0,ke=ui=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}En=null}return e}function kp(e,t){do{var n=ne;try{if(ku(),Is.current=ro,no){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(xn=0,se=re=Y=null,ai=!1,Ai=0,Mu.current=null,n===null||n.return===null){ie=1,xi=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ud(o);if(v!==null){v.flags&=-257,cd(v,o,a,s,t),v.mode&1&&ld(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){ld(s,u,t),Bu();break e}l=Error(k(426))}}else if(K&&a.mode&1){var R=ud(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),cd(R,o,a,s,t),Su(wr(l,a));break e}}s=l=wr(l,a),ie!==4&&(ie=2),ui===null?ui=[s]:ui.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=op(s,l,t);td(s,h);break e;case 1:a=l;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Zt===null||!Zt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=ap(s,a,t);td(s,g);break e}}s=s.return}while(s!==null)}Cp(n)}catch(E){t=E,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Ip(){var e=io.current;return io.current=ro,e===null?ro:e}function Bu(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Ln&268435455)&&!(xo&268435455)||zt(ae,ue)}function ao(e,t){var n=M;M|=2;var r=Ip();(ae!==e||ue!==t)&&(pt=null,Tn(e,t));do try{Ny();break}catch(i){kp(e,i)}while(1);if(ku(),M=n,io.current=r,ne!==null)throw Error(k(261));return ae=null,ue=0,ie}function Ny(){for(;ne!==null;)Tp(ne)}function Oy(){for(;ne!==null&&!nv();)Tp(ne)}function Tp(e){var t=Pp(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Cp(e):ne=t,Mu.current=null}function Cp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Iy(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,ne=null;return}}else if(n=ky(n,t,Le),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ie===0&&(ie=5)}function _n(e,t,n){var r=F,i=je.transition;try{je.transition=null,F=1,xy(e,t,n,r)}finally{je.transition=i,F=r}return null}function xy(e,t,n,r){do dr();while(Kt!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(fv(e,s),e===ae&&(ne=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ds||(ds=!0,Ap(js,function(){return dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=je.transition,je.transition=null;var o=F;F=1;var a=M;M|=4,Mu.current=null,Cy(e,n),wp(n,e),Jv(cl),Vs=!!ul,cl=ul=null,e.current=n,Ry(n),rv(),M=a,F=o,je.transition=s}else e.current=n;if(ds&&(ds=!1,Kt=e,oo=i),s=e.pendingLanes,s===0&&(Zt=null),ov(n.stateNode),Pe(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=Nl,Nl=null,e;return oo&1&&e.tag!==0&&dr(),s=e.pendingLanes,s&1?e===Ol?ci++:(ci=0,Ol=e):ci=0,dn(),null}function dr(){if(Kt!==null){var e=sh(oo),t=je.transition,n=F;try{if(je.transition=null,F=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,oo=0,M&6)throw Error(k(331));var i=M;for(M|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:li(8,d,s)}var p=d.child;if(p!==null)p.return=d,C=p;else for(;C!==null;){d=C;var m=d.sibling,v=d.return;if(vp(d),d===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:li(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,C=h;break e}C=s.return}}var c=e.current;for(C=c;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oo(9,a)}}catch(E){J(a,a.return,E)}if(a===o){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(M=i,dn(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(ko,e)}catch{}r=!0}return r}finally{F=n,je.transition=t}}return!1}function kd(e,t,n){t=wr(n,t),t=op(e,t,1),e=Jt(e,t,1),t=_e(),e!==null&&(Fi(e,1,t),Pe(e,t))}function J(e,t,n){if(e.tag===3)kd(e,e,n);else for(;t!==null;){if(t.tag===3){kd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=wr(n,e),e=ap(t,e,1),t=Jt(t,e,1),e=_e(),t!==null&&(Fi(t,1,e),Pe(t,e));break}}t=t.return}}function Ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>Z()-Fu?Tn(e,0):bu|=n),Pe(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=ts,ts<<=1,!(ts&130023424)&&(ts=4194304)):t=1);var n=_e();e=Ct(e,t),e!==null&&(Fi(e,t,n),Pe(e,n))}function Dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function Uy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Rp(e,n)}var Pp;Pp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,Ey(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,K&&t.flags&1048576&&Oh(t,Xs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Cs(e,t),e=t.pendingProps;var i=gr(t,pe.current);cr(t,n),i=Ou(null,t,r,e,i,n);var s=xu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(s=!0,Ys(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cu(t),i.updater=Ao,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=El(null,t,r,!0,s,n)):(t.tag=0,K&&s&&_u(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=by(r),e=qe(r,e),i){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=hd(null,t,r,e,n);break e;case 11:t=dd(null,t,r,e,n);break e;case 14:t=fd(null,t,r,qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),hd(e,t,r,i,n);case 3:e:{if(dp(t),e===null)throw Error(k(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Uh(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wr(Error(k(423)),t),t=pd(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(k(424)),t),t=pd(e,t,r,n,i);break e}else for(De=Xt(t.stateNode.containerInfo.firstChild),Ue=t,K=!0,Qe=null,n=zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=Rt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return $h(t),e===null&&gl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,dl(r,i)?o=null:s!==null&&dl(r,s)&&(t.flags|=32),cp(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&gl(t),null;case 13:return fp(e,t,n);case 4:return Ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),dd(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,j(Js,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!Ce.current){t=Rt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vl(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vl(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=He(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=qe(r,t.pendingProps),i=qe(r.type,i),fd(e,t,r,i,n);case 15:return lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qe(r,i),Cs(e,t),t.tag=1,Re(r)?(e=!0,Ys(t)):e=!1,cr(t,n),bh(t,r,i),_l(t,r,i,n),El(null,t,r,!0,e,n);case 19:return hp(e,t,n);case 22:return up(e,t,n)}throw Error(k(156,t.tag))};function Ap(e,t){return th(e,t)}function My(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new My(e,t,n,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function by(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===lu)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function As(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")ju(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Cn(n.children,i,s,t);case ou:o=8,i|=8;break;case Ha:return e=Be(12,n,t,i|2),e.elementType=Ha,e.lanes=s,e;case Va:return e=Be(13,n,t,i),e.elementType=Va,e.lanes=s,e;case Wa:return e=Be(19,n,t,i),e.elementType=Wa,e.lanes=s,e;case Ff:return Lo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:o=10;break e;case bf:o=9;break e;case au:o=11;break e;case lu:o=14;break e;case Mt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Be(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Cn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Ff,e.lanes=n,e.stateNode={isHidden:!1},e}function Ea(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,s,o,a,l){return e=new Fy(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Be(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(s),e}function zy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return ln;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Re(n))return Ah(e,n,t)}return t}function Op(e,t,n,r,i,s,o,a,l){return e=Hu(n,r,!0,e,i,s,o,a,l),e.context=Np(null),n=e.current,r=_e(),i=en(n),s=kt(r,i),s.callback=t??null,Jt(n,s,i),e.current.lanes=i,Fi(e,i,r),Pe(e,r),e}function Do(e,t,n,r){var i=t.current,s=_e(),o=en(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,o),e!==null&&(Je(e,i,o,s),ks(e,i,o)),o}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vu(e,t){Id(e,t),(e=e.alternate)&&Id(e,t)}function $y(){return null}var xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}Uo.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Do(e,t,null,null)};Uo.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Do(null,e,null,null)}),t[Tt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&ch(e)}};function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Td(){}function By(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lo(o);s.call(u)}}var o=Op(t,r,e,0,null,!1,!1,"",Td);return e._reactRootContainer=o,e[Tt]=o.current,Ii(e.nodeType===8?e.parentNode:e),Dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lo(l);a.call(u)}}var l=Hu(e,0,!1,null,null,!1,!1,"",Td);return e._reactRootContainer=l,e[Tt]=l.current,Ii(e.nodeType===8?e.parentNode:e),Dn(function(){Do(t,l,n,r)}),l}function bo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lo(o);a.call(l)}}Do(t,o,e,i)}else o=By(n,t,e,i,r);return lo(o)}oh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(du(t,n|1),Pe(t,Z()),!(M&6)&&(Sr=Z()+500,dn()))}break;case 13:Dn(function(){var r=Ct(e,1);if(r!==null){var i=_e();Je(r,e,1,i)}}),Vu(e,1)}};fu=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=_e();Je(t,e,134217728,n)}Vu(e,134217728)}};ah=function(e){if(e.tag===13){var t=en(e),n=Ct(e,t);if(n!==null){var r=_e();Je(n,e,t,r)}Vu(e,t)}};lh=function(){return F};uh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};tl=function(e,t,n){switch(t){case"input":if(qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ro(r);if(!i)throw Error(k(90));$f(r),qa(r,i)}}}break;case"textarea":jf(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};Yf=zu;Qf=Dn;var jy={usingClientEntryPoint:!1,Events:[$i,Xn,Ro,Kf,qf,zu]},Kr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hy={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{ko=fs.inject(Hy),lt=fs}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(t))throw Error(k(200));return zy(e,t,null,n)};be.createRoot=function(e,t){if(!Gu(e))throw Error(k(299));var n=!1,r="",i=xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[Tt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Wu(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Zf(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Dn(e)};be.hydrate=function(e,t,n){if(!Mo(t))throw Error(k(200));return bo(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Op(t,null,e,1,n??null,i,!1,s,o),e[Tt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};be.render=function(e,t,n){if(!Mo(t))throw Error(k(200));return bo(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(k(40));return e._reactRootContainer?(Dn(function(){bo(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1};be.unstable_batchedUpdates=zu;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return bo(e,t,n,!1,r)};be.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=be})($g);var Cd=$a;za.createRoot=Cd.createRoot,za.hydrateRoot=Cd.hydrateRoot;const Vy="modulepreload",Wy=function(e,t){return new URL(e,t).href},Rd={},Gy=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Wy(s,r),s in Rd)return;Rd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const p=i[d];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Vy,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
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
 */const Lp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ky=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(m=64)),r.push(n[d],n[p],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ky(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new qy;const m=s<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),p!==64){const y=u<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yy=function(e){const t=Lp(e);return Dp.encodeByteArray(t,!0)},uo=function(e){return Yy(e).replace(/\./g,"")},Up=function(e){try{return Dp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xy=()=>Qy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Up(e[1]);return t&&JSON.parse(t)},Ku=()=>{try{return Xy()||Jy()||Zy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Mp=e=>{var t,n;return(n=(t=Ku())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},e0=e=>{const t=Mp(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bp=()=>{var e;return(e=Ku())===null||e===void 0?void 0:e.config},Fp=e=>{var t;return(t=Ku())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class t0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function n0(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[uo(JSON.stringify(n)),uo(JSON.stringify(o)),a].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function r0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function i0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o0(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function a0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const u0="FirebaseError";class Nt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=u0,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?c0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function c0(e,t){return e.replace(d0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const d0=/\{\$([^}]+)}/g;function f0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function co(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Pd(s)&&Pd(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pd(e){return e!==null&&typeof e=="object"}/**
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
 */function Hi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ei(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function h0(e,t){const n=new p0(e,t);return n.subscribe.bind(n)}class p0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ia),i.error===void 0&&(i.error=Ia),i.complete===void 0&&(i.complete=Ia);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ia(){}/**
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
 */function Ae(e){return e&&e._delegate?e._delegate:e}class Un{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class g0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new t0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(y0(t))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=wn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wn){return this.instances.has(t)}getOptions(t=wn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:v0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=wn){return this.component?this.component.multipleInstances?t:wn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function v0(e){return e===wn?void 0:e}function y0(e){return e.instantiationMode==="EAGER"}/**
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
 */class _0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new g0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const w0={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},S0=B.INFO,E0={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},k0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=E0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zp{constructor(t){this.name=t,this._logLevel=S0,this._logHandler=k0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?w0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const I0=(e,t)=>t.some(n=>e instanceof n);let Ad,Nd;function T0(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C0(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $p=new WeakMap,Dl=new WeakMap,Bp=new WeakMap,Ta=new WeakMap,qu=new WeakMap;function R0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(nn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$p.set(n,e)}).catch(()=>{}),qu.set(t,e),t}function P0(e){if(Dl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Dl.set(e,t)}let Ul={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function A0(e){Ul=e(Ul)}function N0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ca(this),t,...n);return Bp.set(r,t.sort?t.sort():[t]),nn(r)}:C0().includes(e)?function(...t){return e.apply(Ca(this),t),nn($p.get(this))}:function(...t){return nn(e.apply(Ca(this),t))}}function O0(e){return typeof e=="function"?N0(e):(e instanceof IDBTransaction&&P0(e),I0(e,T0())?new Proxy(e,Ul):e)}function nn(e){if(e instanceof IDBRequest)return R0(e);if(Ta.has(e))return Ta.get(e);const t=O0(e);return t!==e&&(Ta.set(e,t),qu.set(t,e)),t}const Ca=e=>qu.get(e);function x0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const L0=["get","getKey","getAll","getAllKeys","count"],D0=["put","add","delete","clear"],Ra=new Map;function Od(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ra.get(t))return Ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=D0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ra.set(t,s),s}A0(e=>({...e,get:(t,n,r)=>Od(t,n)||e.get(t,n,r),has:(t,n)=>!!Od(t,n)||e.has(t,n)}));/**
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
 */class U0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function M0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ml="@firebase/app",xd="0.10.1";/**
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
 */const Mn=new zp("@firebase/app"),b0="@firebase/app-compat",F0="@firebase/analytics-compat",z0="@firebase/analytics",$0="@firebase/app-check-compat",B0="@firebase/app-check",j0="@firebase/auth",H0="@firebase/auth-compat",V0="@firebase/database",W0="@firebase/database-compat",G0="@firebase/functions",K0="@firebase/functions-compat",q0="@firebase/installations",Y0="@firebase/installations-compat",Q0="@firebase/messaging",X0="@firebase/messaging-compat",J0="@firebase/performance",Z0="@firebase/performance-compat",e_="@firebase/remote-config",t_="@firebase/remote-config-compat",n_="@firebase/storage",r_="@firebase/storage-compat",i_="@firebase/firestore",s_="@firebase/firestore-compat",o_="firebase",a_="10.11.0";/**
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
 */const bl="[DEFAULT]",l_={[Ml]:"fire-core",[b0]:"fire-core-compat",[z0]:"fire-analytics",[F0]:"fire-analytics-compat",[B0]:"fire-app-check",[$0]:"fire-app-check-compat",[j0]:"fire-auth",[H0]:"fire-auth-compat",[V0]:"fire-rtdb",[W0]:"fire-rtdb-compat",[G0]:"fire-fn",[K0]:"fire-fn-compat",[q0]:"fire-iid",[Y0]:"fire-iid-compat",[Q0]:"fire-fcm",[X0]:"fire-fcm-compat",[J0]:"fire-perf",[Z0]:"fire-perf-compat",[e_]:"fire-rc",[t_]:"fire-rc-compat",[n_]:"fire-gcs",[r_]:"fire-gcs-compat",[i_]:"fire-fst",[s_]:"fire-fst-compat","fire-js":"fire-js",[o_]:"fire-js-all"};/**
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
 */const fo=new Map,u_=new Map,Fl=new Map;function Ld(e,t){try{e.container.addComponent(t)}catch(n){Mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Er(e){const t=e.name;if(Fl.has(t))return Mn.debug(`There were multiple attempts to register component ${t}.`),!1;Fl.set(t,e);for(const n of fo.values())Ld(n,e);for(const n of u_.values())Ld(n,e);return!0}function Yu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function _t(e){return e.settings!==void 0}/**
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
 */const c_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},rn=new ji("app","Firebase",c_);/**
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
 */class d_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=a_;function jp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:bl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=bp()),!n)throw rn.create("no-options");const s=fo.get(i);if(s){if(co(n,s.options)&&co(r,s.config))return s;throw rn.create("duplicate-app",{appName:i})}const o=new _0(i);for(const l of Fl.values())o.addComponent(l);const a=new d_(n,r,o);return fo.set(i,a),a}function Hp(e=bl){const t=fo.get(e);if(!t&&e===bl&&bp())return jp();if(!t)throw rn.create("no-app",{appName:e});return t}function sn(e,t,n){var r;let i=(r=l_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}Er(new Un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const f_="firebase-heartbeat-database",h_=1,Li="firebase-heartbeat-store";let Pa=null;function Vp(){return Pa||(Pa=x0(f_,h_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Li)}catch(n){console.warn(n)}}}}).catch(e=>{throw rn.create("idb-open",{originalErrorMessage:e.message})})),Pa}async function p_(e){try{const n=(await Vp()).transaction(Li),r=await n.objectStore(Li).get(Wp(e));return await n.done,r}catch(t){if(t instanceof Nt)Mn.warn(t.message);else{const n=rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(n.message)}}}async function Dd(e,t){try{const r=(await Vp()).transaction(Li,"readwrite");await r.objectStore(Li).put(t,Wp(e)),await r.done}catch(n){if(n instanceof Nt)Mn.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function Wp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const m_=1024,g_=30*24*60*60*1e3;class v_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new __(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ud();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=g_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ud(),{heartbeatsToSend:r,unsentEntries:i}=y_(this._heartbeatsCache.heartbeats),s=uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ud(){return new Date().toISOString().substring(0,10)}function y_(e,t=m_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Md(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class __{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Md(e){return uo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function w_(e){Er(new Un("platform-logger",t=>new U0(t),"PRIVATE")),Er(new Un("heartbeat",t=>new v_(t),"PRIVATE")),sn(Ml,xd,e),sn(Ml,xd,"esm2017"),sn("fire-js","")}w_("");function Qu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S_=Gp,Kp=new ji("auth","Firebase",Gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new zp("@firebase/auth");function E_(e,...t){ho.logLevel<=B.WARN&&ho.warn(`Auth (${xr}): ${e}`,...t)}function Ns(e,...t){ho.logLevel<=B.ERROR&&ho.error(`Auth (${xr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,...t){throw Xu(e,...t)}function ct(e,...t){return Xu(e,...t)}function qp(e,t,n){const r=Object.assign(Object.assign({},S_()),{[t]:n});return new ji("auth","Firebase",r).create(t,{appName:e.name})}function on(e){return qp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kp.create(e,...t)}function A(e,t,...n){if(!e)throw Xu(t,...n)}function wt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ns(t),new Error(t)}function Pt(e,t){e||wt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function k_(){return bd()==="http:"||bd()==="https:"}function bd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k_()||i0()||"connection"in navigator)?navigator.onLine:!0}function T_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pt(n>t,"Short delay should be less than long delay!"),this.isMobile=r0()||s0()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Vi(3e4,6e4);function Bn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return Qp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Yp.fetch()(Xp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},C_),t);try{const i=new A_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hs(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw hs(e,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qp(e,d,u);tt(e,d)}}catch(i){if(i instanceof Nt)throw i;tt(e,"network-request-failed",{message:String(i)})}}async function Fo(e,t,n,r,i={}){const s=await fn(e,t,n,r,i);return"mfaPendingCredential"in s&&tt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ju(e.config,i):`${e.config.apiScheme}://${i}`}function P_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),R_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(e,t,r);return i.customData._tokenResponse=n,i}function Fd(e){return e!==void 0&&e.enterprise!==void 0}class N_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return P_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function O_(e,t){return fn(e,"GET","/v2/recaptchaConfig",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function Jp(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function L_(e,t=!1){const n=Ae(e),r=await n.getIdToken(t),i=Zu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:di(Aa(i.auth_time)),issuedAtTime:di(Aa(i.iat)),expirationTime:di(Aa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Aa(e){return Number(e)*1e3}function Zu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ns("JWT malformed, contained fewer than 3 sections"),null;try{const i=Up(n);return i?JSON.parse(i):(Ns("Failed to decode base64 JWT payload"),null)}catch(i){return Ns("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zd(e){const t=Zu(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Nt&&D_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function D_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Di(e,Jp(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Zp(s.providerUserInfo):[],a=b_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $l(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}async function M_(e){const t=Ae(e);await po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function b_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zp(e){return e.map(t=>{var{providerId:n}=t,r=Qu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(e,t){const n=await Qp(e,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Xp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z_(e,t){return fn(e,"POST","/v2/accounts:revokeToken",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=zd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await F_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fr;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class St{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Qu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $l(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Di(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return L_(this,t)}reload(){return M_(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new St(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(on(this.auth));const t=await this.getIdToken();return await Di(this,x_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:f,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:w}=n;A(f&&w,t,"internal-error");const I=fr.fromJSON(this.name,w);A(typeof f=="string",t,"internal-error"),Dt(p,t.name),Dt(m,t.name),A(typeof g=="boolean",t,"internal-error"),A(typeof E=="boolean",t,"internal-error"),Dt(v,t.name),Dt(y,t.name),Dt(_,t.name),Dt(R,t.name),Dt(h,t.name),Dt(c,t.name);const U=new St({uid:f,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:I,createdAt:h,lastLoginAt:c});return S&&Array.isArray(S)&&(U.providerData=S.map(x=>Object.assign({},x))),R&&(U._redirectEventId=R),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new St({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await po(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new fr;a.updateFromIdToken(r);const l=new St({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $l(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map;function Et(e){Pt(e instanceof Function,"Expected a class definition");let t=$d.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$d.set(e,t),t)}/**
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
 */class em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}em.type="NONE";const Bd=em;/**
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
 */function Os(e,t,n){return`firebase:${e}:${t}:${n}`}class hr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Os(this.userKey,i.apiKey,s),this.fullPersistenceKey=Os("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?St._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new hr(Et(Bd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Et(Bd);const o=Os(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const p=St._fromJSON(t,d);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new hr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new hr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sm(t))return"Blackberry";if(om(t))return"Webos";if(ec(t))return"Safari";if((t.includes("chrome/")||nm(t))&&!t.includes("edge/"))return"Chrome";if(im(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tm(e=me()){return/firefox\//i.test(e)}function ec(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nm(e=me()){return/crios\//i.test(e)}function rm(e=me()){return/iemobile/i.test(e)}function im(e=me()){return/android/i.test(e)}function sm(e=me()){return/blackberry/i.test(e)}function om(e=me()){return/webos/i.test(e)}function zo(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $_(e=me()){var t;return zo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function B_(){return o0()&&document.documentMode===10}function am(e=me()){return zo(e)||im(e)||om(e)||sm(e)||/windows phone/i.test(e)||rm(e)}function j_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(e,t=[]){let n;switch(e){case"Browser":n=jd(me());break;case"Worker":n=`${jd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class H_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function V_(e,t={}){return fn(e,"GET","/v2/passwordPolicy",Bn(e,t))}/**
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
 */const W_=6;class G_{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Jp(this,{idToken:t}),r=await St._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=T_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(_t(this.app))return Promise.reject(on(this));const n=t?Ae(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return _t(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await V_(this),n=new G_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ji("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await z_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&E_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(e){return Ae(e)}class Hd{constructor(t){this.auth=t,this.observer=null,this.addObserver=h0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q_(e){$o=e}function um(e){return $o.loadJS(e)}function Y_(){return $o.recaptchaEnterpriseScript}function Q_(){return $o.gapiScript}function X_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const J_="recaptcha-enterprise",Z_="NO_RECAPTCHA";class ew{constructor(t){this.type=J_,this.auth=Lr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{O_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new N_(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Z_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Fd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Y_();l.length!==0&&(l+=a),um(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Vd(e,t,n,r=!1){const i=new ew(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wd(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Vd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vd(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(e,t){const n=Yu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(co(s,t??{}))return i;tt(i,"already-initialized")}return n.initialize({options:t})}function nw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function rw(e,t,n){const r=Lr(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=cm(t),{host:o,port:a}=iw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sw()}function cm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iw(e){const t=cm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gd(o)}}}function Gd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function sw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(t){return wt("not implemented")}_linkToIdToken(t,n){return wt("not implemented")}_getReauthenticationResolver(t){return wt("not implemented")}}async function ow(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(e,t){return Fo(e,"POST","/v1/accounts:signInWithPassword",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(e,t){return Fo(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))}async function uw(e,t){return Fo(e,"POST","/v1/accounts:signInWithEmailLink",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends tc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ui(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(t,n,"signInWithPassword",aw);case"emailLink":return lw(t,{email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(t,r,"signUpPassword",ow);case"emailLink":return uw(t,{idToken:n,email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t){return Fo(e,"POST","/v1/accounts:signInWithIdp",Bn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="http://localhost";class bn extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Qu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return pr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,pr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,pr(t,n)}buildRequest(){const t={requestUri:cw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(e){const t=Zr(ei(e)).link,n=t?Zr(ei(t)).deep_link_id:null,r=Zr(ei(e)).deep_link_id;return(r?Zr(ei(r)).link:null)||r||n||t||e}class nc{constructor(t){var n,r,i,s,o,a;const l=Zr(ei(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=dw((i=l.mode)!==null&&i!==void 0?i:null);A(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=fw(t);try{return new nc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.providerId=Dr.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=nc.parseLink(n);return A(r,"argument-error"),Ui._fromEmailAndCode(t,r.code,r.tenantId)}}Dr.PROVIDER_ID="password";Dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends dm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Wi{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Wi{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Wi{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await St._fromIdTokenResponse(t,r,i),o=Kd(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Kd(r);return new kr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Kd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Nt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function fm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,s,t,r):s})}async function hw(e,t,n=!1){const r=await Di(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kr._forOperation(e,"link",r)}/**
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
 */async function pw(e,t,n=!1){const{auth:r}=e;if(_t(r.app))return Promise.reject(on(r));const i="reauthenticate";try{const s=await Di(e,fm(r,i,t,e),n);A(s.idToken,r,"internal-error");const o=Zu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(e.uid===a,r,"user-mismatch"),kr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(e,t,n=!1){if(_t(e.app))return Promise.reject(on(e));const r="signIn",i=await fm(e,r,t),s=await kr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function mw(e,t){return hm(Lr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(e){const t=Lr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function vw(e,t,n){return _t(e.app)?Promise.reject(on(e)):mw(Ae(e),Dr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gw(e),r})}function yw(e,t,n,r){return Ae(e).onIdTokenChanged(t,n,r)}function _w(e,t,n){return Ae(e).beforeAuthStateChanged(t,n)}function ww(e,t,n,r){return Ae(e).onAuthStateChanged(t,n,r)}const go="__sak";/**
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
 */class pm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){const e=me();return ec(e)||zo(e)}const Ew=1e3,kw=10;class mm extends pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sw()&&j_(),this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);B_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}mm.type="LOCAL";const Iw=mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm extends pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}gm.type="SESSION";const vm=gm;/**
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
 */function Tw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Bo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Tw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function Rw(e){dt().location.href=e}/**
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
 */function ym(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Aw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Nw(){return ym()?self:null}/**
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
 */const _m="firebaseLocalStorageDb",Ow=1,vo="firebaseLocalStorage",wm="fbase_key";class Gi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jo(e,t){return e.transaction([vo],t?"readwrite":"readonly").objectStore(vo)}function xw(){const e=indexedDB.deleteDatabase(_m);return new Gi(e).toPromise()}function Bl(){const e=indexedDB.open(_m,Ow);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vo,{keyPath:wm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vo)?t(r):(r.close(),await xw(),t(await Bl()))})})}async function qd(e,t,n){const r=jo(e,!0).put({[wm]:t,value:n});return new Gi(r).toPromise()}async function Lw(e,t){const n=jo(e,!1).get(t),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function Yd(e,t){const n=jo(e,!0).delete(t);return new Gi(n).toPromise()}const Dw=800,Uw=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Uw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ym()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(Nw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new Cw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Aw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bl();return await qd(t,go,"1"),await Yd(t,go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Lw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=jo(i,!1).getAll();return new Gi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const Mw=Sm;new Vi(3e4,6e4);/**
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
 */function bw(e,t){return t?Et(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ic extends tc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return pr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return pr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Fw(e){return hm(e.auth,new ic(e),e.bypassAuthState)}function zw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),pw(n,new ic(e),e.bypassAuthState)}async function $w(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),hw(n,new ic(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Fw;case"linkViaPopup":case"linkViaRedirect":return $w;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:tt(this.auth,"internal-error")}}resolve(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=new Vi(2e3,1e4);class ir extends Em{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const t=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bw.get())};t()}}ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="pendingRedirect",xs=new Map;class Hw extends Em{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=xs.get(this.auth._key());if(!t){try{const r=await Vw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}xs.set(this.auth._key(),t)}return this.bypassAuthState||xs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vw(e,t){const n=Kw(t),r=Gw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ww(e,t){xs.set(e._key(),t)}function Gw(e){return Et(e._redirectPersistence)}function Kw(e){return Os(jw,e.config.apiKey,e.name)}async function qw(e,t,n=!1){if(_t(e.app))return Promise.reject(on(e));const r=Lr(e),i=bw(r,t),o=await new Hw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=10*60*1e3;class Qw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Xw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!km(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qd(t))}saveEventToCache(t){this.cachedEventUids.add(Qd(t)),this.lastProcessedEventTime=Date.now()}}function Qd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function km({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Xw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return km(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e1=/^https?/;async function t1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Jw(e);for(const n of t)try{if(n1(n))return}catch{}tt(e,"unauthorized-domain")}function n1(e){const t=zl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!e1.test(n))return!1;if(Zw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const r1=new Vi(3e4,6e4);function Xd(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function i1(e){return new Promise((t,n)=>{var r,i,s;function o(){Xd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(ct(e,"network-request-failed"))},timeout:r1.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)o();else{const a=X_("iframefcb");return dt()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},um(`${Q_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ls=null,t})}let Ls=null;function s1(e){return Ls=Ls||i1(e),Ls}/**
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
 */const o1=new Vi(5e3,15e3),a1="__/auth/iframe",l1="emulator/auth/iframe",u1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d1(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ju(t,l1):`https://${e.config.authDomain}/${a1}`,r={apiKey:t.apiKey,appName:e.name,v:xr},i=c1.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hi(r).slice(1)}`}async function f1(e){const t=await s1(e),n=dt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:d1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=dt().setTimeout(()=>{s(o)},o1.get());function l(){dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const h1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p1=500,m1=600,g1="_blank",v1="http://localhost";class Jd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y1(e,t,n,r=p1,i=m1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},h1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=me().toLowerCase();n&&(a=nm(u)?g1:n),tm(u)&&(t=t||v1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if($_(u)&&a!=="_self")return _1(t||"",a),new Jd(null);const p=window.open(t||"",a,d);A(p,e,"popup-blocked");try{p.focus()}catch{}return new Jd(p)}function _1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const w1="__/auth/handler",S1="emulator/auth/handler",E1=encodeURIComponent("fac");async function Zd(e,t,n,r,i,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(t instanceof dm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",f0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(t instanceof Wi){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),u=l?`#${E1}=${encodeURIComponent(l)}`:"";return`${k1(e)}?${Hi(a).slice(1)}${u}`}function k1({config:e}){return e.emulator?Ju(e,S1):`https://${e.authDomain}/${w1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="webStorageSupport";class I1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vm,this._completeRedirectFn=qw,this._overrideRedirectResult=Ww}async _openPopup(t,n,r,i){var s;Pt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zd(t,n,r,zl(),i);return y1(t,o,rc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Zd(t,n,r,zl(),i);return Rw(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await f1(t),r=new Qw(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Na,{type:Na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Na];o!==void 0&&n(!!o),tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return am()||ec()||zo()}}const T1=I1;var ef="@firebase/auth",tf="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P1(e){Er(new Un("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lm(e)},u=new K_(r,i,s,l);return nw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Er(new Un("auth-internal",t=>{const n=Lr(t.getProvider("auth").getImmediate());return(r=>new C1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(ef,tf,R1(e)),sn(ef,tf,"esm2017")}/**
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
 */const A1=5*60,N1=Fp("authIdTokenMaxAge")||A1;let nf=null;const O1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>N1)return;const i=n==null?void 0:n.token;nf!==i&&(nf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function x1(e=Hp()){const t=Yu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=tw(e,{popupRedirectResolver:T1,persistence:[Mw,Iw,vm]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=O1(s.toString());_w(n,o,()=>o(n.currentUser)),yw(n,a=>o(a))}}const i=Mp("auth");return i&&rw(n,`http://${i}`),n}function L1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}q_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",L1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P1("Browser");const D1=""+new URL("tee-647bc5ea.png",import.meta.url).href;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Te.apply(this,arguments)};function yo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var V="-ms-",fi="-moz-",b="-webkit-",Im="comm",Ho="rule",sc="decl",U1="@import",Tm="@keyframes",M1="@layer",Cm=Math.abs,oc=String.fromCharCode,jl=Object.assign;function b1(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Rm(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ds(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Ir(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Pm(e){return e.length}function ti(e,t){return t.push(e),e}function F1(e,t){return e.map(t).join("")}function rf(e,t){return e.filter(function(n){return!mt(n,t)})}var Vo=1,Tr=1,Am=0,We=0,te=0,Ur="";function Wo(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Vo,column:Tr,length:o,return:"",siblings:a}}function Ut(e,t){return jl(Wo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vn(e){for(;e.root;)e=Ut(e.root,{children:[e]});ti(e,e.siblings)}function z1(){return te}function $1(){return te=We>0?oe(Ur,--We):0,Tr--,te===10&&(Tr=1,Vo--),te}function Ze(){return te=We<Am?oe(Ur,We++):0,Tr++,te===10&&(Tr=1,Vo++),te}function Rn(){return oe(Ur,We)}function Us(){return We}function Go(e,t){return Ir(Ur,e,t)}function Hl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B1(e){return Vo=Tr=1,Am=it(Ur=e),We=0,[]}function j1(e){return Ur="",e}function Oa(e){return Rm(Go(We-1,Vl(e===91?e+2:e===40?e+1:e)))}function H1(e){for(;(te=Rn())&&te<33;)Ze();return Hl(e)>2||Hl(te)>3?"":" "}function V1(e,t){for(;--t&&Ze()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Go(e,Us()+(t<6&&Rn()==32&&Ze()==32))}function Vl(e){for(;Ze();)switch(te){case e:return We;case 34:case 39:e!==34&&e!==39&&Vl(te);break;case 40:e===41&&Vl(e);break;case 92:Ze();break}return We}function W1(e,t){for(;Ze()&&e+te!==47+10;)if(e+te===42+42&&Rn()===47)break;return"/*"+Go(t,We-1)+"*"+oc(e===47?e:Ze())}function G1(e){for(;!Hl(Rn());)Ze();return Go(e,We)}function K1(e){return j1(Ms("",null,null,null,[""],e=B1(e),0,[0],e))}function Ms(e,t,n,r,i,s,o,a,l){for(var u=0,d=0,p=o,m=0,v=0,y=0,_=1,R=1,h=1,c=0,f="",g=i,E=s,S=r,w=f;R;)switch(y=c,c=Ze()){case 40:if(y!=108&&oe(w,p-1)==58){Ds(w+=O(Oa(c),"&","&\f"),"&\f",Cm(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=Oa(c);break;case 9:case 10:case 13:case 32:w+=H1(y);break;case 92:w+=V1(Us()-1,7);continue;case 47:switch(Rn()){case 42:case 47:ti(q1(W1(Ze(),Us()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=it(w)*h;case 125*_:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+d:h==-1&&(w=O(w,/\f/g,"")),v>0&&it(w)-p&&ti(v>32?of(w+";",r,n,p-1,l):of(O(w," ","")+";",r,n,p-2,l),l);break;case 59:w+=";";default:if(ti(S=sf(w,t,n,u,d,i,a,f,g=[],E=[],p,s),s),c===123)if(d===0)Ms(w,t,S,S,g,s,p,a,E);else switch(m===99&&oe(w,3)===110?100:m){case 100:case 108:case 109:case 115:Ms(e,S,S,r&&ti(sf(e,S,S,0,0,i,a,f,i,g=[],p,E),E),i,E,p,a,r?g:E);break;default:Ms(w,S,S,S,[""],E,0,a,E)}}u=d=v=0,_=h=1,f=w="",p=o;break;case 58:p=1+it(w),v=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&$1()==125)continue}switch(w+=oc(c),c*_){case 38:h=d>0?1:(w+="\f",-1);break;case 44:a[u++]=(it(w)-1)*h,h=1;break;case 64:Rn()===45&&(w+=Oa(Ze())),m=Rn(),d=p=it(f=w+=G1(Us())),c++;break;case 45:y===45&&it(w)==2&&(_=0)}}return s}function sf(e,t,n,r,i,s,o,a,l,u,d,p){for(var m=i-1,v=i===0?s:[""],y=Pm(v),_=0,R=0,h=0;_<r;++_)for(var c=0,f=Ir(e,m+1,m=Cm(R=o[_])),g=e;c<y;++c)(g=Rm(R>0?v[c]+" "+f:O(f,/&\f/g,v[c])))&&(l[h++]=g);return Wo(e,t,n,i===0?Ho:a,l,u,d,p)}function q1(e,t,n,r){return Wo(e,t,n,Im,oc(z1()),Ir(e,2,-2),0,r)}function of(e,t,n,r,i){return Wo(e,t,n,sc,Ir(e,0,r),Ir(e,r+1,-1),r,i)}function Nm(e,t,n){switch(b1(e,t)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+fi+e+V+e+e;case 5936:switch(oe(e,t+11)){case 114:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+V+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return b+e+V+e+e;case 6165:return b+e+V+"flex-"+e+e;case 5187:return b+e+O(e,/(\w+).+(:[^]+)/,b+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return b+e+V+"flex-item-"+O(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":V+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return b+e+V+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return b+e+V+O(e,"shrink","negative")+e;case 5292:return b+e+V+O(e,"basis","preferred-size")+e;case 6060:return b+"box-"+O(e,"-grow","")+b+e+V+O(e,"grow","positive")+e;case 4554:return b+O(e,/([^-])(transform)/g,"$1"+b+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4200:if(!mt(e,/flex-|baseline/))return V+"grid-column-align"+Ir(e,t)+e;break;case 2592:case 3360:return V+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,mt(r.props,/grid-\w+-end/)})?~Ds(e+(n=n[t].value),"span",0)?e:V+O(e,"-start","")+e+V+"grid-row-span:"+(~Ds(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":V+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:V+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+fi+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ds(e,"stretch",0)?Nm(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return V+i+":"+s+u+(o?V+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(oe(e,t+6)===121)return O(e,":",":"+b)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(oe(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+V+"$2box$3")+e;case 100:return O(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function _o(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Y1(e,t,n,r){switch(e.type){case M1:if(e.children.length)break;case U1:case sc:return e.return=e.return||e.value;case Im:return"";case Tm:return e.return=e.value+"{"+_o(e.children,r)+"}";case Ho:if(!it(e.value=e.props.join(",")))return""}return it(n=_o(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q1(e){var t=Pm(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function X1(e){return function(t){t.root||(t=t.return)&&e(t)}}function J1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sc:e.return=Nm(e.value,e.length,n);return;case Tm:return _o([Ut(e,{value:O(e.value,"@","@"+b)})],r);case Ho:if(e.length)return F1(n=e.props,function(i){switch(mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vn(Ut(e,{props:[O(i,/:(read-\w+)/,":"+fi+"$1")]})),Vn(Ut(e,{props:[i]})),jl(e,{props:rf(n,r)});break;case"::placeholder":Vn(Ut(e,{props:[O(i,/:(plac\w+)/,":"+b+"input-$1")]})),Vn(Ut(e,{props:[O(i,/:(plac\w+)/,":"+fi+"$1")]})),Vn(Ut(e,{props:[O(i,/:(plac\w+)/,V+"input-$1")]})),Vn(Ut(e,{props:[i]})),jl(e,{props:rf(n,r)});break}return""})}}var Z1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Om="active",xm="data-styled-version",Ko="6.1.8",ac=`/*!sc*/
`,lc=typeof window<"u"&&"HTMLElement"in window,eS=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),qo=Object.freeze([]),Rr=Object.freeze({});function tS(e,t,n){return n===void 0&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var Lm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rS=/(^-|-$)/g;function af(e){return e.replace(nS,"-").replace(rS,"")}var iS=/(a)(d)/gi,ps=52,lf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wl(e){var t,n="";for(t=Math.abs(e);t>ps;t=t/ps|0)n=lf(t%ps)+n;return(lf(t%ps)+n).replace(iS,"$1-$2")}var xa,Dm=5381,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Um=function(e){return sr(Dm,e)};function sS(e){return Wl(Um(e)>>>0)}function oS(e){return e.displayName||e.name||"Component"}function La(e){return typeof e=="string"&&!0}var Mm=typeof Symbol=="function"&&Symbol.for,bm=Mm?Symbol.for("react.memo"):60115,aS=Mm?Symbol.for("react.forward_ref"):60112,lS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cS=((xa={})[aS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xa[bm]=Fm,xa);function uf(e){return("type"in(t=e)&&t.type.$$typeof)===bm?Fm:"$$typeof"in e?cS[e.$$typeof]:lS;var t}var dS=Object.defineProperty,fS=Object.getOwnPropertyNames,cf=Object.getOwnPropertySymbols,hS=Object.getOwnPropertyDescriptor,pS=Object.getPrototypeOf,df=Object.prototype;function zm(e,t,n){if(typeof t!="string"){if(df){var r=pS(t);r&&r!==df&&zm(e,r,n)}var i=fS(t);cf&&(i=i.concat(cf(t)));for(var s=uf(e),o=uf(t),a=0;a<i.length;++a){var l=i[a];if(!(l in uS||n&&n[l]||o&&l in o||s&&l in s)){var u=hS(t,l);try{dS(e,l,u)}catch{}}}}return e}function Pr(e){return typeof e=="function"}function uc(e){return typeof e=="object"&&"styledComponentId"in e}function In(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ff(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Gl(e,t,n){if(n===void 0&&(n=!1),!n&&!Mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Gl(e[r],t[r]);else if(Mi(t))for(var r in t)e[r]=Gl(e[r],t[r]);return e}function cc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ki(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mS=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Ki(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ac);return n},e}(),bs=new Map,wo=new Map,Fs=1,ms=function(e){if(bs.has(e))return bs.get(e);for(;wo.has(Fs);)Fs++;var t=Fs++;return bs.set(e,t),wo.set(t,e),t},gS=function(e,t){Fs=t+1,bs.set(e,t),wo.set(t,e)},vS="style[".concat(Cr,"][").concat(xm,'="').concat(Ko,'"]'),yS=new RegExp("^".concat(Cr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_S=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},wS=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ac),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(yS);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(gS(d,u),_S(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function SS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Cr,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Cr,Om),r.setAttribute(xm,Ko);var o=SS();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ES=function(){function e(t){this.element=$m(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ki(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),kS=function(){function e(t){this.element=$m(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),IS=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),hf=lc,TS={isServer:!lc,useCSSOMInjection:!eS},Bm=function(){function e(t,n,r){t===void 0&&(t=Rr),n===void 0&&(n={});var i=this;this.options=Te(Te({},TS),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&lc&&hf&&(hf=!1,function(s){for(var o=document.querySelectorAll(vS),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Cr)!==Om&&(wS(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(p){var m=function(h){return wo.get(h)}(p);if(m===void 0)return"continue";var v=s.names.get(m),y=o.getGroup(p);if(v===void 0||y.length===0)return"continue";var _="".concat(Cr,".g").concat(p,'[id="').concat(m,'"]'),R="";v!==void 0&&v.forEach(function(h){h.length>0&&(R+="".concat(h,","))}),l+="".concat(y).concat(_,'{content:"').concat(R,'"}').concat(ac)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return ms(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new IS(i):r?new ES(i):new kS(i)}(this.options),new mS(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ms(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ms(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ms(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),CS=/&/g,RS=/^\s*\/\/.*$/gm;function jm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jm(n.children,t)),n})}function PS(e){var t,n,r,i=e===void 0?Rr:e,s=i.options,o=s===void 0?Rr:s,a=i.plugins,l=a===void 0?qo:a,u=function(m,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=l.slice();d.push(function(m){m.type===Ho&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(CS,n).replace(r,u))}),o.prefix&&d.push(J1),d.push(Y1);var p=function(m,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(RS,""),h=K1(y||v?"".concat(y," ").concat(v," { ").concat(R," }"):R);o.namespace&&(h=jm(h,o.namespace));var c=[];return _o(h,Q1(d.concat(X1(function(f){return c.push(f)})))),c};return p.hash=l.length?l.reduce(function(m,v){return v.name||Ki(15),sr(m,v.name)},Dm).toString():"",p}var AS=new Bm,Kl=PS(),Hm=mi.createContext({shouldForwardProp:void 0,styleSheet:AS,stylis:Kl});Hm.Consumer;mi.createContext(void 0);function pf(){return ee.useContext(Hm)}var NS=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Kl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cc(this,function(){throw Ki(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kl),this.name+t.hash},e}(),OS=function(e){return e>="A"&&e<="Z"};function mf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;OS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vm=function(e){return e==null||e===!1||e===""},Wm=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Vm(s)&&(Array.isArray(s)&&s.isCss||Pr(s)?r.push("".concat(mf(i),":"),s,";"):Mi(s)?r.push.apply(r,yo(yo(["".concat(i," {")],Wm(s),!1),["}"],!1)):r.push("".concat(mf(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Z1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pn(e,t,n,r){if(Vm(e))return[];if(uc(e))return[".".concat(e.styledComponentId)];if(Pr(e)){if(!Pr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Pn(i,t,n,r)}var s;return e instanceof NS?n?(e.inject(n,r),[e.getName(r)]):[e]:Mi(e)?Wm(e):Array.isArray(e)?Array.prototype.concat.apply(qo,e.map(function(o){return Pn(o,t,n,r)})):[e.toString()]}function xS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pr(n)&&!uc(n))return!1}return!0}var LS=Um(Ko),DS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xS(t),this.componentId=n,this.baseHash=sr(LS,n),this.baseStyle=r,Bm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=In(i,this.staticRulesId);else{var s=ff(Pn(this.rules,t,n,r)),o=Wl(sr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=In(i,o),this.staticRulesId=o}else{for(var l=sr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var m=ff(Pn(p,t,n,r));l=sr(l,m+d),u+=m}}if(u){var v=Wl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=In(i,v)}}return i},e}(),Gm=mi.createContext(void 0);Gm.Consumer;var Da={};function US(e,t,n){var r=uc(e),i=e,s=!La(e),o=t.attrs,a=o===void 0?qo:o,l=t.componentId,u=l===void 0?function(g,E){var S=typeof g!="string"?"sc":af(g);Da[S]=(Da[S]||0)+1;var w="".concat(S,"-").concat(sS(Ko+S+Da[S]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(g){return La(g)?"styled.".concat(g):"Styled(".concat(oS(g),")")}(e):d,m=t.displayName&&t.componentId?"".concat(af(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;y=function(g,E){return _(g,E)&&R(g,E)}}else y=_}var h=new DS(n,m,r?i.componentStyle:void 0);function c(g,E){return function(S,w,I){var U=S.attrs,x=S.componentStyle,Oe=S.defaultProps,hn=S.foldedComponentIds,pn=S.styledComponentId,qi=S.target,Qo=mi.useContext(Gm),Fr=pf(),mn=S.shouldForwardProp||Fr.shouldForwardProp,T=tS(w,Qo,Oe)||Rr,P=function(Ot,xe,ht){for(var zr,vn=Te(Te({},xe),{className:void 0,theme:ht}),Xo=0;Xo<Ot.length;Xo+=1){var Yi=Pr(zr=Ot[Xo])?zr(vn):zr;for(var xt in Yi)vn[xt]=xt==="className"?In(vn[xt],Yi[xt]):xt==="style"?Te(Te({},vn[xt]),Yi[xt]):Yi[xt]}return xe.className&&(vn.className=In(vn.className,xe.className)),vn}(U,w,T),N=P.as||qi,z={};for(var $ in P)P[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&P.theme===T||($==="forwardedAs"?z.as=P.forwardedAs:mn&&!mn($,N)||(z[$]=P[$]));var gn=function(Ot,xe){var ht=pf(),zr=Ot.generateAndInjectStyles(xe,ht.styleSheet,ht.stylis);return zr}(x,P),Ge=In(hn,pn);return gn&&(Ge+=" "+gn),P.className&&(Ge+=" "+P.className),z[La(N)&&!Lm.has(N)?"class":"className"]=Ge,z.ref=I,ee.createElement(N,z)}(f,g,E)}c.displayName=p;var f=mi.forwardRef(c);return f.attrs=v,f.componentStyle=h,f.displayName=p,f.shouldForwardProp=y,f.foldedComponentIds=r?In(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=m,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(E){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var I=0,U=S;I<U.length;I++)Gl(E,U[I],!0);return E}({},i.defaultProps,g):g}}),cc(f,function(){return".".concat(f.styledComponentId)}),s&&zm(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function gf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var vf=function(e){return Object.assign(e,{isCss:!0})};function MS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Pr(e)||Mi(e))return vf(Pn(gf(qo,yo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pn(r):vf(Pn(gf(r,t)))}function ql(e,t,n){if(n===void 0&&(n=Rr),!t)throw Ki(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,MS.apply(void 0,yo([i],s,!1)))};return r.attrs=function(i){return ql(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ql(e,t,Te(Te({},n),i))},r}var Km=function(e){return ql(US,e)},Ne=Km;Lm.forEach(function(e){Ne[e]=Km(e)});const bS=Ne.article`
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
`,FS=Ne.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,Pk=Ne.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ak=Ne.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,zS=Ne.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,$S=()=>D(bS,{children:D(FS,{children:D(zS,{})})}),BS=Ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 0;
    margin-top: 10px;
  }
`,jS=Ne.main`
  max-width: 502px;
  flex: auto;
  display: flex;
  flex-direction: column;
  color: #444;

  & > article {
    margin-bottom: 30px;
  }
`,HS=Ne.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,VS=""+new URL("plus-70c42e58.svg",import.meta.url).href;/**
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
 */const qm="firebasestorage.googleapis.com",Ym="storageBucket",WS=2*60*1e3,GS=10*60*1e3,KS=1e3;/**
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
 */class X extends Nt{constructor(t,n,r=0){super(Ua(t),`Firebase Storage: ${n} (${Ua(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ua(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var G;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(G||(G={}));function Ua(e){return"storage/"+e}function dc(){const e="An unknown error occurred, please check the error payload for server response.";return new X(G.UNKNOWN,e)}function qS(e){return new X(G.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function YS(e){return new X(G.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(G.UNAUTHENTICATED,e)}function XS(){return new X(G.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JS(e){return new X(G.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Qm(){return new X(G.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xm(){return new X(G.CANCELED,"User canceled the upload/download.")}function ZS(e){return new X(G.INVALID_URL,"Invalid URL '"+e+"'.")}function eE(e){return new X(G.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function tE(){return new X(G.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ym+"' property when initializing the app?")}function Jm(){return new X(G.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nE(){return new X(G.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function rE(){return new X(G.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iE(e){return new X(G.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yl(e){return new X(G.INVALID_ARGUMENT,e)}function Zm(){return new X(G.APP_DELETED,"The Firebase app was deleted.")}function sE(e){return new X(G.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hi(e,t){return new X(G.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function qr(e){throw new X(G.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class ye{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ye.makeFromUrl(t,n)}catch{return new ye(t,"")}if(r.path==="")return r;throw eE(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===qm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",h=new RegExp(`^https?://${_}/${i}/${R}`,"i"),f=[{regex:a,indices:l,postModify:s},{regex:v,indices:y,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<f.length;g++){const E=f[g],S=E.regex.exec(t);if(S){const w=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new ye(w,I),E.postModify(r);break}}if(r==null)throw ZS(t);return r}}class oE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function aE(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...R){u||(u=!0,t.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,e(v,l())},R)}function m(){s&&clearTimeout(s)}function v(R,...h){if(u){m();return}if(R){m(),d.call(null,R,...h);return}if(l()||o){m(),d.call(null,R,...h);return}r<64&&(r*=2);let f;a===1?(a=2,f=0):f=(r+Math.random())*1e3,p(f)}let y=!1;function _(R){y||(y=!0,m(),!u&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function lE(e){e(!1)}/**
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
 */function uE(e){return e!==void 0}function cE(e){return typeof e=="function"}function dE(e){return typeof e=="object"&&!Array.isArray(e)}function Yo(e){return typeof e=="string"||e instanceof String}function yf(e){return fc()&&e instanceof Blob}function fc(){return typeof Blob<"u"}function Ql(e,t,n,r){if(r<t)throw Yl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Yl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Mr(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function eg(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function tg(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class fE{constructor(t,n,r,i,s,o,a,l,u,d,p,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new gs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===An.NO_ERROR,l=s.getStatus();if(!a||tg(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===An.ABORT;r(!1,new gs(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new gs(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());uE(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=dc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Zm():Xm();o(l)}else{const l=Qm();o(l)}};this.canceled_?n(!1,new gs(!1,null,!0)):this.backoffId_=aE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&lE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gs{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function hE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function pE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function mE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function gE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function vE(e,t,n,r,i,s,o=!0){const a=eg(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return mE(u,t),hE(u,n),pE(u,s),gE(u,r),new fE(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function yE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _E(...e){const t=yE();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(fc())return new Blob(e);throw new X(G.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wE(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function SE(e){if(typeof atob>"u")throw iE("base-64");return atob(e)}/**
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
 */const at={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ma{constructor(t,n){this.data=t,this.contentType=n||null}}function EE(e,t){switch(e){case at.RAW:return new Ma(ng(t));case at.BASE64:case at.BASE64URL:return new Ma(rg(e,t));case at.DATA_URL:return new Ma(IE(t),TE(t))}throw dc()}function ng(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function kE(e){let t;try{t=decodeURIComponent(e)}catch{throw hi(at.DATA_URL,"Malformed data URL.")}return ng(t)}function rg(e,t){switch(e){case at.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw hi(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case at.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw hi(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=SE(t)}catch(i){throw i.message.includes("polyfill")?i:hi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ig{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw hi(at.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=CE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function IE(e){const t=new ig(e);return t.base64?rg(at.BASE64,t.rest):kE(t.rest)}function TE(e){return new ig(e).contentType}function CE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Vt{constructor(t,n){let r=0,i="";yf(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(yf(this.data_)){const r=this.data_,i=wE(r,t,n);return i===null?null:new Vt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Vt(r,!0)}}static getBlob(...t){if(fc()){const n=t.map(r=>r instanceof Vt?r.data_:r);return new Vt(_E.apply(null,n))}else{const n=t.map(o=>Yo(o)?EE(at.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Vt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function hc(e){let t;try{t=JSON.parse(e)}catch{return null}return dE(t)?t:null}/**
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
 */function RE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function PE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function sg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function AE(e,t){return t}class ge{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||AE}}let vs=null;function NE(e){return!Yo(e)||e.length<2?e:sg(e)}function pc(){if(vs)return vs;const e=[];e.push(new ge("bucket")),e.push(new ge("generation")),e.push(new ge("metageneration")),e.push(new ge("name","fullPath",!0));function t(s,o){return NE(o)}const n=new ge("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ge("size");return i.xform=r,e.push(i),e.push(new ge("timeCreated")),e.push(new ge("updated")),e.push(new ge("md5Hash",null,!0)),e.push(new ge("cacheControl",null,!0)),e.push(new ge("contentDisposition",null,!0)),e.push(new ge("contentEncoding",null,!0)),e.push(new ge("contentLanguage",null,!0)),e.push(new ge("contentType",null,!0)),e.push(new ge("metadata","customMetadata",!0)),vs=e,vs}function OE(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new ye(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function xE(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return OE(r,e),r}function og(e,t,n){const r=hc(t);return r===null?null:xE(e,r,n)}function LE(e,t,n,r){const i=hc(t);if(i===null||!Yo(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=e.bucket,p=e.fullPath,m="/b/"+o(d)+"/o/"+o(p),v=Mr(m,n,r),y=eg({alt:"media",token:u});return v+y})[0]}function ag(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}/**
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
 */const _f="prefixes",wf="items";function DE(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[_f])for(const i of n[_f]){const s=i.replace(/\/$/,""),o=e._makeStorageReference(new ye(t,s));r.prefixes.push(o)}if(n[wf])for(const i of n[wf]){const s=e._makeStorageReference(new ye(t,i.name));r.items.push(s)}return r}function UE(e,t,n){const r=hc(n);return r===null?null:DE(e,t,r)}class jn{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(e){if(!e)throw dc()}function mc(e,t){function n(r,i){const s=og(e,i,t);return ft(s!==null),s}return n}function ME(e,t){function n(r,i){const s=UE(e,t,i);return ft(s!==null),s}return n}function bE(e,t){function n(r,i){const s=og(e,i,t);return ft(s!==null),LE(s,i,e.host,e._protocol)}return n}function br(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=XS():i=QS():n.getStatus()===402?i=YS(e.bucket):n.getStatus()===403?i=JS(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function lg(e){const t=br(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=qS(e.path)),s.serverResponse=i.serverResponse,s}return n}function ug(e,t,n){const r=t.fullServerUrl(),i=Mr(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new jn(i,s,mc(e,n),o);return a.errorHandler=lg(t),a}function FE(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=t.bucketOnlyServerUrl(),a=Mr(o,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,d=new jn(a,l,ME(e,t.bucket),u);return d.urlParams=s,d.errorHandler=br(t),d}function zE(e,t,n){const r=t.fullServerUrl(),i=Mr(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new jn(i,s,bE(e,n),o);return a.errorHandler=lg(t),a}function $E(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function cg(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=$E(null,t)),r}function BE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let f="";for(let g=0;g<2;g++)f=f+Math.random().toString().slice(2);return f}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=cg(t,r,i),d=ag(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Vt.getBlob(p,r,m);if(v===null)throw Jm();const y={name:u.fullPath},_=Mr(s,e.host,e._protocol),R="POST",h=e.maxUploadRetryTime,c=new jn(_,R,mc(e,n),h);return c.urlParams=y,c.headers=o,c.body=v.uploadData(),c.errorHandler=br(t),c}class So{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function gc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{ft(!1)}return ft(!!n&&(t||["active"]).indexOf(n)!==-1),n}function jE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=cg(t,r,i),a={name:o.fullPath},l=Mr(s,e.host,e._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=ag(o,n),m=e.maxUploadRetryTime;function v(_){gc(_);let R;try{R=_.getResponseHeader("X-Goog-Upload-URL")}catch{ft(!1)}return ft(Yo(R)),R}const y=new jn(l,u,v,m);return y.urlParams=a,y.headers=d,y.body=p,y.errorHandler=br(t),y}function HE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const d=gc(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ft(!1)}p||ft(!1);const m=Number(p);return ft(!isNaN(m)),new So(m,r.size(),d==="final")}const o="POST",a=e.maxUploadRetryTime,l=new jn(n,o,s,a);return l.headers=i,l.errorHandler=br(t),l}const Sf=256*1024;function VE(e,t,n,r,i,s,o,a){const l=new So(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw nE();const u=l.total-l.current;let d=u;i>0&&(d=Math.min(d,i));const p=l.current,m=p+d;let v="";d===0?v="finalize":u===d?v="upload, finalize":v="upload";const y={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(p,m);if(_===null)throw Jm();function R(g,E){const S=gc(g,["active","final"]),w=l.current+d,I=r.size();let U;return S==="final"?U=mc(t,s)(g,E):U=null,new So(w,I,S==="final",U)}const h="POST",c=t.maxUploadRetryTime,f=new jn(n,h,R,c);return f.headers=y,f.body=_.uploadData(),f.progressCallback=a||null,f.errorHandler=br(e),f}const Ee={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ba(e){switch(e){case"running":case"pausing":case"canceling":return Ee.RUNNING;case"paused":return Ee.PAUSED;case"success":return Ee.SUCCESS;case"canceled":return Ee.CANCELED;case"error":return Ee.ERROR;default:return Ee.ERROR}}/**
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
 */class WE{constructor(t,n,r){if(cE(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const s=t;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Wn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class GE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=An.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=An.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=An.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw qr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class KE extends GE{initXhr(){this.xhr_.responseType="text"}}function Wt(){return new KE}/**
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
 */class qE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=pc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(G.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(tg(i.status,[]))if(s)i=Qm();else{this.sleepTime=Math.max(this.sleepTime*2,KS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(G.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=jE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=HE(this._ref.storage,this._ref._location,t,this._blob),s=this._ref.storage._makeRequest(i,Wt,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Sf*this._chunkMultiplier,n=new So(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=VE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Wt,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Sf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=ug(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Wt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=BE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Wt,t,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Xm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ba(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const s=new WE(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(ba(this._state)){case Ee.SUCCESS:Wn(this._resolve.bind(null,this.snapshot))();break;case Ee.CANCELED:case Ee.ERROR:const n=this._reject;Wn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(ba(this._state)){case Ee.RUNNING:case Ee.PAUSED:t.next&&Wn(t.next.bind(t,this.snapshot))();break;case Ee.SUCCESS:t.complete&&Wn(t.complete.bind(t))();break;case Ee.CANCELED:case Ee.ERROR:t.error&&Wn(t.error.bind(t,this._error))();break;default:t.error&&Wn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class Fn{constructor(t,n){this._service=t,n instanceof ye?this._location=n:this._location=ye.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Fn(t,n)}get root(){const t=new ye(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sg(this._location.path)}get storage(){return this._service}get parent(){const t=RE(this._location.path);if(t===null)return null;const n=new ye(this._location.bucket,t);return new Fn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw sE(t)}}function YE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new qE(e,new Vt(t),n)}function QE(e){const t={prefixes:[],items:[]};return dg(e,t).then(()=>t)}async function dg(e,t,n){const i=await XE(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await dg(e,t,i.nextPageToken)}function XE(e,t){t!=null&&typeof t.maxResults=="number"&&Ql("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=FE(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Wt)}function JE(e){e._throwIfRoot("getMetadata");const t=ug(e.storage,e._location,pc());return e.storage.makeRequestWithTokens(t,Wt)}function ZE(e){e._throwIfRoot("getDownloadURL");const t=zE(e.storage,e._location,pc());return e.storage.makeRequestWithTokens(t,Wt).then(n=>{if(n===null)throw rE();return n})}function ek(e,t){const n=PE(e._location.path,t),r=new ye(e._location.bucket,n);return new Fn(e.storage,r)}/**
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
 */function tk(e){return/^[A-Za-z]+:\/\//.test(e)}function nk(e,t){return new Fn(e,t)}function fg(e,t){if(e instanceof vc){const n=e;if(n._bucket==null)throw tE();const r=new Fn(n,n._bucket);return t!=null?fg(r,t):r}else return t!==void 0?ek(e,t):e}function rk(e,t){if(t&&tk(t)){if(e instanceof vc)return nk(e,t);throw Yl("To use ref(service, url), the first argument must be a Storage instance.")}else return fg(e,t)}function Ef(e,t){const n=t==null?void 0:t[Ym];return n==null?null:ye.makeFromBucketSpec(n,e)}function ik(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:n0(i,e.app.options.projectId))}class vc{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WS,this._maxUploadRetryTime=GS,this._requests=new Set,i!=null?this._bucket=ye.makeFromBucketSpec(i,this._host):this._bucket=Ef(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ye.makeFromBucketSpec(this._url,t):this._bucket=Ef(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ql("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ql("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Fn(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new oE(Zm());{const o=vE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const kf="@firebase/storage",If="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="storage";function sk(e,t,n){return e=Ae(e),YE(e,t,n)}function ok(e){return e=Ae(e),JE(e)}function ak(e){return e=Ae(e),QE(e)}function lk(e){return e=Ae(e),ZE(e)}function Xl(e,t){return e=Ae(e),rk(e,t)}function uk(e=Hp(),t){e=Ae(e);const r=Yu(e,hg).getImmediate({identifier:t}),i=e0("storage");return i&&ck(r,...i),r}function ck(e,t,n,r={}){ik(e,t,n,r)}function dk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new vc(n,r,i,t,xr)}function fk(){Er(new Un(hg,dk,"PUBLIC").setMultipleInstances(!0)),sn(kf,If,""),sn(kf,If,"esm2017")}fk();var hk="firebase",pk="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(hk,pk,"app");const mk={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},pg=jp(mk),mg=x1(pg),gk=async(e,t)=>{try{return await vw(mg,e,t)}catch{return{error:!0,type:"Something went wrong"}}},Jl=uk(pg),vk=(e,t)=>{const n=Xl(Jl,t.name);sk(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t})},yk=async()=>{const t=(await ak(Xl(Jl))).items.map(async r=>{const i=Xl(Jl,r.fullPath),s=await lk(i),o=await ok(i);return{downloadUrl:s,metadata:o}});return await Promise.all(t)},_k=Ne.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,wk=()=>{const[e,t]=ee.useState(!1),[n,r]=ee.useState(""),[i,s]=ee.useState(""),[o,a]=ee.useState(null);return ot(Fa,{children:[D(HS,{onClick:()=>t(!e),src:VS,alt:"Add more content"}),e&&D(Fa,{children:ot(_k,{onSubmit:async d=>{d.preventDefault(),o&&(vk(o,{name:i,caption:n}),a(null),r(""),s(""),t(!1))},children:[D("div",{children:D("label",{htmlFor:"caption",children:"Caption"})}),ot("div",{children:[D("input",{id:"caption",value:n,onChange:d=>r(d.target.value)}),D("div",{children:D("label",{htmlFor:"name",children:"Name"})}),D("div",{children:D("input",{id:"name",value:i,onChange:d=>s(d.target.value),required:!0})})]}),D("div",{children:D("label",{htmlFor:"file",children:"Choose a file"})}),D("div",{children:D("input",{id:"file",type:"file",required:!0,onChange:d=>{d.target.files&&a(d.target.files[0])}})}),o&&D("button",{type:"submit",children:"Upload a file"})]})})]})},Sk=()=>{const[e,t]=ee.useState("eantwibawua1@gmail.com"),[n,r]=ee.useState("");return ot("div",{children:[D("h1",{children:"Hey Eman 🙂"}),D("p",{children:"Please sign-in:"}),ot("form",{onSubmit:async s=>{s.preventDefault(),await gk(e,n)},children:[ot("div",{children:[D("label",{htmlFor:"email-address",children:"Email address"}),D("input",{type:"email",id:"email-address",value:e,onChange:s=>t(s.target.value),required:!0,placeholder:"Email address"})]}),ot("div",{children:[D("label",{htmlFor:"password",children:"Password"}),D("input",{type:"password",id:"password",value:n,onChange:s=>r(s.target.value),required:!0,placeholder:"Password"})]}),D("button",{type:"submit",children:"Sign in"})]})]})},Ek=Ne.p`
  margin-top: 10px;
  color: rgba(12, 0, 0, 0.7);
  display: block;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,kk=Ne.h1`
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
`,Ik=Ne.header`
  padding: 1px 20px;
  padding-top: 140px;
`,Tk=Ne.figure`
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
`,Ck=ee.lazy(()=>Gy(()=>import("./LazyContent-48b2bd13.js"),[],import.meta.url)),Rk=()=>{const[e,t]=ee.useState(0),[n,r]=ee.useState(null),[i,s]=ee.useState(null);return ee.useEffect(()=>{ww(mg,o=>{r(o)})},[]),ee.useEffect(()=>{(async()=>{const a=await yk();s(a)})()},[]),e>=10&&!n?D(Sk,{}):ot(Fa,{children:[ot(Ik,{children:[D(Tk,{onClick:()=>t(e+1),children:D("img",{src:D1,alt:"are we cool yet t-shirt"})}),D(kk,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),D(Ek,{children:"YOU'RE ALL WELCOME"})]}),D(BS,{children:ot(jS,{children:[n&&D(wk,{}),i&&i.map(o=>D(ee.Suspense,{fallback:D($S,{}),children:D(Ck,{content:o})},o.downloadUrl))]})})]})};za.createRoot(document.getElementById("root")).render(D(Rk,{}));export{bS as A,Ak as B,FS as S,ot as a,Pk as b,D as j};
