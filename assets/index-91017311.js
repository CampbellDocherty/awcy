(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ng(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mi={},Og={get exports(){return mi},set exports(e){mi=e}},Ts={},z={},Lg={get exports(){return z},set exports(e){z=e}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),Dg=Symbol.for("react.portal"),bg=Symbol.for("react.fragment"),Ug=Symbol.for("react.strict_mode"),Mg=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),Bg=Symbol.for("react.suspense"),jg=Symbol.for("react.memo"),Hg=Symbol.for("react.lazy"),Tc=Symbol.iterator;function Wg(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var Ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zf=Object.assign,$f={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Ff}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bf(){}Bf.prototype=Nr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Ff}var nu=tu.prototype=new Bf;nu.constructor=tu;zf(nu,Nr.prototype);nu.isPureReactComponent=!0;var Cc=Array.isArray,jf=Object.prototype.hasOwnProperty,ru={current:null},Hf={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jf.call(t,r)&&!Hf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zi,type:e,key:o,ref:s,props:i,_owner:ru.current}}function Vg(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function Gg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rc=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gg(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zi:case Dg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ta(s,0):r,Cc(i)?(n="",e!=null&&(n=e.replace(Rc,"$&/")+"/"),So(i,t,n,"",function(u){return u})):i!=null&&(iu(i)&&(i=Vg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Rc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Cc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+ta(o,a);s+=So(o,t,n,l,i)}else if(l=Wg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+ta(o,a++),s+=So(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ji(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function qg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Eo={transition:null},Kg={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:ru};D.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Nr;D.Fragment=bg;D.Profiler=Mg;D.PureComponent=tu;D.StrictMode=Ug;D.Suspense=Bg;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jf.call(t,l)&&!Hf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zi,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};D.createElement=Wf;D.createFactory=function(e){var t=Wf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:$g,render:e}};D.isValidElement=iu;D.lazy=function(e){return{$$typeof:Hg,_payload:{_status:-1,_result:e},_init:qg}};D.memo=function(e,t){return{$$typeof:jg,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Ee.current.useCallback(e,t)};D.useContext=function(e){return Ee.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ee.current.useEffect(e,t)};D.useId=function(){return Ee.current.useId()};D.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ee.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};D.useRef=function(e){return Ee.current.useRef(e)};D.useState=function(e){return Ee.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ee.current.useTransition()};D.version="18.2.0";(function(e){e.exports=D})(Lg);const gi=Ng(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=z,Qg=Symbol.for("react.element"),Xg=Symbol.for("react.fragment"),Jg=Object.prototype.hasOwnProperty,Zg=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ev={key:!0,ref:!0,__self:!0,__source:!0};function Vf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jg.call(t,r)&&!ev.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Qg,type:e,key:o,ref:s,props:i,_owner:Zg.current}}Ts.Fragment=Xg;Ts.jsx=Vf;Ts.jsxs=Vf;(function(e){e.exports=Ts})(Og);const Cn=mi.Fragment,P=mi.jsx,ce=mi.jsxs;var Ba={},ja={},tv={get exports(){return ja},set exports(e){ja=e}},Fe={},Ha={},nv={get exports(){return Ha},set exports(e){Ha=e}},Gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var N=T.length;T.push(A);e:for(;0<N;){var B=N-1>>>1,j=T[B];if(0<i(j,A))T[B]=A,T[N]=j,N=B;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],N=T.pop();if(N!==A){T[0]=N;e:for(var B=0,j=T.length,vn=j>>>1;B<vn;){var qe=2*(B+1)-1,Ot=T[qe],Le=qe+1,ht=T[Le];if(0>i(Ot,N))Le<j&&0>i(ht,Ot)?(T[B]=ht,T[Le]=N,B=Le):(T[B]=Ot,T[qe]=N,B=qe);else if(Le<j&&0>i(ht,N))T[B]=ht,T[Le]=N,B=Le;else break e}}return A}function i(T,A){var N=T.sortIndex-A.sortIndex;return N!==0?N:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,m=3,v=!1,y=!1,_=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function g(T){if(_=!1,d(T),!y)if(n(l)!==null)y=!0,zr(E);else{var A=n(u);A!==null&&gn(g,A.startTime-T)}}function E(T,A){y=!1,_&&(_=!1,p(I),I=-1),v=!0;var N=m;try{for(d(A),h=n(l);h!==null&&(!(h.expirationTime>A)||T&&!Oe());){var B=h.callback;if(typeof B=="function"){h.callback=null,m=h.priorityLevel;var j=B(h.expirationTime<=A);A=e.unstable_now(),typeof j=="function"?h.callback=j:h===n(l)&&r(l),d(A)}else r(l);h=n(l)}if(h!==null)var vn=!0;else{var qe=n(u);qe!==null&&gn(g,qe.startTime-A),vn=!1}return vn}finally{h=null,m=N,v=!1}}var S=!1,w=null,I=-1,b=5,L=-1;function Oe(){return!(e.unstable_now()-L<b)}function pn(){if(w!==null){var T=e.unstable_now();L=T;var A=!0;try{A=w(!0,T)}finally{A?mn():(S=!1,w=null)}}else S=!1}var mn;if(typeof c=="function")mn=function(){c(pn)};else if(typeof MessageChannel<"u"){var Qi=new MessageChannel,Zs=Qi.port2;Qi.port1.onmessage=pn,mn=function(){Zs.postMessage(null)}}else mn=function(){R(pn,0)};function zr(T){w=T,S||(S=!0,mn())}function gn(T,A){I=R(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,zr(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var N=m;m=A;try{return T()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=m;m=T;try{return A()}finally{m=N}},e.unstable_scheduleCallback=function(T,A,N){var B=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?B+N:B):N=B,T){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=N+j,T={id:f++,callback:A,priorityLevel:T,startTime:N,expirationTime:j,sortIndex:-1},N>B?(T.sortIndex=N,t(u,T),n(l)===null&&T===n(u)&&(_?(p(I),I=-1):_=!0,gn(g,N-B))):(T.sortIndex=j,t(l,T),y||v||(y=!0,zr(E))),T},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(T){var A=m;return function(){var N=m;m=A;try{return T.apply(this,arguments)}finally{m=N}}}})(Gf);(function(e){e.exports=Gf})(nv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=z,Me=Ha;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,vi={};function Bn(e,t){vr(e,t),vr(e+"Capture",t)}function vr(e,t){for(vi[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pc={},Ac={};function iv(e){return Wa.call(Ac,e)?!0:Wa.call(Pc,e)?!1:rv.test(e)?Ac[e]=!0:(Pc[e]=!0,!1)}function ov(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sv(e,t,n,r){if(t===null||typeof t>"u"||ov(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var ou=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ou,su);fe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ou,su);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ou,su);fe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sv(t,n,i,r)&&(n=null),r||i===null?iv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Va=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Xf=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,na;function Qr(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function ia(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function av(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Kn:return"Portal";case Va:return"Profiler";case lu:return"StrictMode";case Ga:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qf:return(e.displayName||"Context")+".Consumer";case Yf:return(e._context.displayName||"Context")+".Provider";case uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:Ka(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Ka(e(t))}catch{}}return null}function lv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ka(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uv(e){var t=Jf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=uv(e))}function Zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eh(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function Qa(e,t){eh(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Xr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function th(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,rh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(e){cv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ri[t]=ri[e]})});function ih(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ri.hasOwnProperty(e)&&ri[e]?(""+t).trim():t+"px"}function oh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ih(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dv=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,ur=null,cr=null;function bc(e){if(e=ji(e)){if(typeof rl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=xs(t),rl(e.stateNode,e.type,t))}}function sh(e){ur?cr?cr.push(e):cr=[e]:ur=e}function ah(){if(ur){var e=ur,t=cr;if(cr=ur=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function lh(e,t){return e(t)}function uh(){}var oa=!1;function ch(e,t,n){if(oa)return e(t,n);oa=!0;try{return lh(e,t,n)}finally{oa=!1,(ur!==null||cr!==null)&&(uh(),ah())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=xs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var il=!1;if(Tt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){il=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{il=!1}function fv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ii=!1,Ho=null,Wo=!1,ol=null,hv={onError:function(e){ii=!0,Ho=e}};function pv(e,t,n,r,i,o,s,a,l){ii=!1,Ho=null,fv.apply(hv,arguments)}function mv(e,t,n,r,i,o,s,a,l){if(pv.apply(this,arguments),ii){if(ii){var u=Ho;ii=!1,Ho=null}else throw Error(k(198));Wo||(Wo=!0,ol=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uc(e){if(jn(e)!==e)throw Error(k(188))}function gv(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Uc(i),e;if(o===r)return Uc(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function fh(e){return e=gv(e),e!==null?hh(e):null}function hh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hh(e);if(t!==null)return t;e=e.sibling}return null}var ph=Me.unstable_scheduleCallback,Mc=Me.unstable_cancelCallback,vv=Me.unstable_shouldYield,yv=Me.unstable_requestPaint,te=Me.unstable_now,_v=Me.unstable_getCurrentPriorityLevel,fu=Me.unstable_ImmediatePriority,mh=Me.unstable_UserBlockingPriority,Vo=Me.unstable_NormalPriority,wv=Me.unstable_LowPriority,gh=Me.unstable_IdlePriority,Cs=null,lt=null;function Sv(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Iv,Ev=Math.log,kv=Math.LN2;function Iv(e){return e>>>=0,e===0?32:31-(Ev(e)/kv|0)|0}var no=64,ro=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Jr(a):(o&=s,o!==0&&(r=Jr(o)))}else s=n&~i,s!==0?r=Jr(s):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function Tv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Tv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vh(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Rv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function yh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _h,pu,wh,Sh,Eh,al=!1,io=[],Kt=null,Yt=null,Qt=null,wi=new Map,Si=new Map,zt=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fc(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Hr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Av(e,t,n,r,i){switch(t){case"focusin":return Kt=Hr(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=Hr(Yt,e,t,n,r,i),!0;case"mouseover":return Qt=Hr(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wi.set(o,Hr(wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Hr(Si.get(o)||null,e,t,n,r,i)),!0}return!1}function kh(e){var t=En(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=dh(n),t!==null){e.blockedOn=t,Eh(e.priority,function(){wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=ji(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function zc(e,t,n){ko(e)&&n.delete(t)}function xv(){al=!1,Kt!==null&&ko(Kt)&&(Kt=null),Yt!==null&&ko(Yt)&&(Yt=null),Qt!==null&&ko(Qt)&&(Qt=null),wi.forEach(zc),Si.forEach(zc)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,xv)))}function Ei(e){function t(i){return Wr(i,e)}if(0<io.length){Wr(io[0],e);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Wr(Kt,e),Yt!==null&&Wr(Yt,e),Qt!==null&&Wr(Qt,e),wi.forEach(t),Si.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)kh(n),n.blockedOn===null&&zt.shift()}var dr=xt.ReactCurrentBatchConfig,qo=!0;function Nv(e,t,n,r){var i=F,o=dr.transition;dr.transition=null;try{F=1,mu(e,t,n,r)}finally{F=i,dr.transition=o}}function Ov(e,t,n,r){var i=F,o=dr.transition;dr.transition=null;try{F=4,mu(e,t,n,r)}finally{F=i,dr.transition=o}}function mu(e,t,n,r){if(qo){var i=ll(e,t,n,r);if(i===null)ga(e,t,r,Ko,n),Fc(e,r);else if(Av(i,e,t,n,r))r.stopPropagation();else if(Fc(e,r),t&4&&-1<Pv.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&_h(o),o=ll(e,t,n,r),o===null&&ga(e,t,r,Ko,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var Ko=null;function ll(e,t,n,r){if(Ko=null,e=du(r),e=En(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ko=e,null}function Ih(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_v()){case fu:return 1;case mh:return 4;case Vo:case wv:return 16;case gh:return 536870912;default:return 16}default:return 16}}var Gt=null,gu=null,Io=null;function Th(){if(Io)return Io;var e,t=gu,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Io=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function $c(){return!1}function ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oo:$c,this.isPropagationStopped=$c,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=ze(Or),Bi=J({},Or,{view:0,detail:0}),Lv=ze(Bi),aa,la,Vr,Rs=J({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(aa=e.screenX-Vr.screenX,la=e.screenY-Vr.screenY):la=aa=0,Vr=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Bc=ze(Rs),Dv=J({},Rs,{dataTransfer:0}),bv=ze(Dv),Uv=J({},Bi,{relatedTarget:0}),ua=ze(Uv),Mv=J({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=ze(Mv),zv=J({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=ze(zv),Bv=J({},Or,{data:0}),jc=ze(Bv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function yu(){return Vv}var Gv=J({},Bi,{key:function(e){if(e.key){var t=jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qv=ze(Gv),Kv=J({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=ze(Kv),Yv=J({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),Qv=ze(Yv),Xv=J({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=ze(Xv),Zv=J({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ey=ze(Zv),ty=[9,13,27,32],_u=Tt&&"CompositionEvent"in window,oi=null;Tt&&"documentMode"in document&&(oi=document.documentMode);var ny=Tt&&"TextEvent"in window&&!oi,Ch=Tt&&(!_u||oi&&8<oi&&11>=oi),Wc=String.fromCharCode(32),Vc=!1;function Rh(e,t){switch(e){case"keyup":return ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function ry(e,t){switch(e){case"compositionend":return Ph(t);case"keypress":return t.which!==32?null:(Vc=!0,Wc);case"textInput":return e=t.data,e===Wc&&Vc?null:e;default:return null}}function iy(e,t){if(Qn)return e==="compositionend"||!_u&&Rh(e,t)?(e=Th(),Io=gu=Gt=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ch&&t.locale!=="ko"?null:t.data;default:return null}}var oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oy[e.type]:t==="textarea"}function Ah(e,t,n,r){sh(r),t=Yo(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var si=null,ki=null;function sy(e){$h(e,0)}function Ps(e){var t=Zn(e);if(Zf(t))return e}function ay(e,t){if(e==="change")return t}var xh=!1;if(Tt){var ca;if(Tt){var da="oninput"in document;if(!da){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),da=typeof qc.oninput=="function"}ca=da}else ca=!1;xh=ca&&(!document.documentMode||9<document.documentMode)}function Kc(){si&&(si.detachEvent("onpropertychange",Nh),ki=si=null)}function Nh(e){if(e.propertyName==="value"&&Ps(ki)){var t=[];Ah(t,ki,e,du(e)),ch(sy,t)}}function ly(e,t,n){e==="focusin"?(Kc(),si=t,ki=n,si.attachEvent("onpropertychange",Nh)):e==="focusout"&&Kc()}function uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(ki)}function cy(e,t){if(e==="click")return Ps(t)}function dy(e,t){if(e==="input"||e==="change")return Ps(t)}function fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:fy;function Ii(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wa.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function Oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lh(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hy(e){var t=Lh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Oh(n.ownerDocument.documentElement,n)){if(r!==null&&wu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qc(n,o);var s=Qc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var py=Tt&&"documentMode"in document&&11>=document.documentMode,Xn=null,ul=null,ai=null,cl=!1;function Xc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cl||Xn==null||Xn!==jo(r)||(r=Xn,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Ii(ai,r)||(ai=r,r=Yo(ul,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},fa={},Dh={};Tt&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function As(e){if(fa[e])return fa[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dh)return fa[e]=t[n];return e}var bh=As("animationend"),Uh=As("animationiteration"),Mh=As("animationstart"),Fh=As("transitionend"),zh=new Map,Jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){zh.set(e,t),Bn(t,[e])}for(var ha=0;ha<Jc.length;ha++){var pa=Jc[ha],my=pa.toLowerCase(),gy=pa[0].toUpperCase()+pa.slice(1);un(my,"on"+gy)}un(bh,"onAnimationEnd");un(Uh,"onAnimationIteration");un(Mh,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Fh,"onTransitionEnd");vr("onMouseEnter",["mouseout","mouseover"]);vr("onMouseLeave",["mouseout","mouseover"]);vr("onPointerEnter",["pointerout","pointerover"]);vr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function Zc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mv(r,t,void 0,e),e.currentTarget=null}function $h(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Zc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Zc(i,a,u),o=l}}}if(Wo)throw e=ol,Wo=!1,ol=null,e}function V(e,t){var n=t[ml];n===void 0&&(n=t[ml]=new Set);var r=e+"__bubble";n.has(r)||(Bh(t,e,2,!1),n.add(r))}function ma(e,t,n){var r=0;t&&(r|=4),Bh(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Ti(e){if(!e[ao]){e[ao]=!0,Kf.forEach(function(n){n!=="selectionchange"&&(vy.has(n)||ma(n,!1,e),ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,ma("selectionchange",!1,t))}}function Bh(e,t,n,r){switch(Ih(t)){case 1:var i=Nv;break;case 4:i=Ov;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=En(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}ch(function(){var u=o,f=du(n),h=[];e:{var m=zh.get(e);if(m!==void 0){var v=vu,y=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":v=qv;break;case"focusin":y="focus",v=ua;break;case"focusout":y="blur",v=ua;break;case"beforeblur":case"afterblur":v=ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Qv;break;case bh:case Uh:case Mh:v=Fv;break;case Fh:v=Jv;break;case"scroll":v=Lv;break;case"wheel":v=ey;break;case"copy":case"cut":case"paste":v=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Hc}var _=(t&4)!==0,R=!_&&e==="scroll",p=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,d;c!==null;){d=c;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,p!==null&&(g=_i(c,p),g!=null&&_.push(Ci(c,g,d)))),R)break;c=c.return}0<_.length&&(m=new v(m,y,null,n,f),h.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==nl&&(y=n.relatedTarget||n.fromElement)&&(En(y)||y[Ct]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?En(y):null,y!==null&&(R=jn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(_=Bc,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Hc,g="onPointerLeave",p="onPointerEnter",c="pointer"),R=v==null?m:Zn(v),d=y==null?m:Zn(y),m=new _(g,c+"leave",v,n,f),m.target=R,m.relatedTarget=d,g=null,En(f)===u&&(_=new _(p,c+"enter",y,n,f),_.target=d,_.relatedTarget=R,g=_),R=g,v&&y)t:{for(_=v,p=y,c=0,d=_;d;d=Vn(d))c++;for(d=0,g=p;g;g=Vn(g))d++;for(;0<c-d;)_=Vn(_),c--;for(;0<d-c;)p=Vn(p),d--;for(;c--;){if(_===p||p!==null&&_===p.alternate)break t;_=Vn(_),p=Vn(p)}_=null}else _=null;v!==null&&ed(h,m,v,_,!1),y!==null&&R!==null&&ed(h,R,y,_,!0)}}e:{if(m=u?Zn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=ay;else if(Gc(m))if(xh)E=dy;else{E=uy;var S=ly}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=cy);if(E&&(E=E(e,u))){Ah(h,E,n,f);break e}S&&S(e,m,u),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Xa(m,"number",m.value)}switch(S=u?Zn(u):window,e){case"focusin":(Gc(S)||S.contentEditable==="true")&&(Xn=S,ul=u,ai=null);break;case"focusout":ai=ul=Xn=null;break;case"mousedown":cl=!0;break;case"contextmenu":case"mouseup":case"dragend":cl=!1,Xc(h,n,f);break;case"selectionchange":if(py)break;case"keydown":case"keyup":Xc(h,n,f)}var w;if(_u)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Qn?Rh(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Ch&&n.locale!=="ko"&&(Qn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Qn&&(w=Th()):(Gt=f,gu="value"in Gt?Gt.value:Gt.textContent,Qn=!0)),S=Yo(u,I),0<S.length&&(I=new jc(I,e,null,n,f),h.push({event:I,listeners:S}),w?I.data=w:(w=Ph(n),w!==null&&(I.data=w)))),(w=ny?ry(e,n):iy(e,n))&&(u=Yo(u,"onBeforeInput"),0<u.length&&(f=new jc("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=w))}$h(h,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_i(e,n),o!=null&&r.unshift(Ci(e,o,i)),o=_i(e,t),o!=null&&r.push(Ci(e,o,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ed(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=_i(n,o),l!=null&&s.unshift(Ci(n,l,a))):i||(l=_i(n,o),l!=null&&s.push(Ci(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var yy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(_y,"")}function lo(e,t,n){if(t=td(t),td(e)!==t&&n)throw Error(k(425))}function Qo(){}var dl=null,fl=null;function hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(Ey)}:pl;function Ey(e){setTimeout(function(){throw e})}function va(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),st="__reactFiber$"+Lr,Ri="__reactProps$"+Lr,Ct="__reactContainer$"+Lr,ml="__reactEvents$"+Lr,ky="__reactListeners$"+Lr,Iy="__reactHandles$"+Lr;function En(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rd(e);e!==null;){if(n=e[st])return n;e=rd(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[st]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xs(e){return e[Ri]||null}var gl=[],er=-1;function cn(e){return{current:e}}function q(e){0>er||(e.current=gl[er],gl[er]=null,er--)}function W(e,t){er++,gl[er]=e.current,e.current=t}var ln={},ge=cn(ln),Ae=cn(!1),On=ln;function yr(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Xo(){q(Ae),q(ge)}function id(e,t,n){if(ge.current!==ln)throw Error(k(168));W(ge,t),W(Ae,n)}function jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,lv(e)||"Unknown",i));return J({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,On=ge.current,W(ge,e),W(Ae,Ae.current),!0}function od(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=jh(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,q(Ae),q(ge),W(ge,e)):q(Ae),W(Ae,n)}var gt=null,Ns=!1,ya=!1;function Hh(e){gt===null?gt=[e]:gt.push(e)}function Ty(e){Ns=!0,Hh(e)}function dn(){if(!ya&&gt!==null){ya=!0;var e=0,t=F;try{var n=gt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,Ns=!1}catch(i){throw gt!==null&&(gt=gt.slice(e+1)),ph(fu,dn),i}finally{F=t,ya=!1}}return null}var tr=[],nr=0,Zo=null,es=0,$e=[],Be=0,Ln=null,yt=1,_t="";function _n(e,t){tr[nr++]=es,tr[nr++]=Zo,Zo=e,es=t}function Wh(e,t,n){$e[Be++]=yt,$e[Be++]=_t,$e[Be++]=Ln,Ln=e;var r=yt;e=_t;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yt=1<<32-Je(t)+i|n<<i|r,_t=o+e}else yt=1<<o|n<<i|r,_t=e}function Su(e){e.return!==null&&(_n(e,1),Wh(e,1,0))}function Eu(e){for(;e===Zo;)Zo=tr[--nr],tr[nr]=null,es=tr[--nr],tr[nr]=null;for(;e===Ln;)Ln=$e[--Be],$e[Be]=null,_t=$e[--Be],$e[Be]=null,yt=$e[--Be],$e[Be]=null}var Ue=null,be=null,Y=!1,Xe=null;function Vh(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,be=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:yt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,be=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(Y){var t=be;if(t){var n=t;if(!sd(e,t)){if(vl(e))throw Error(k(418));t=Xt(n.nextSibling);var r=Ue;t&&sd(e,t)?Vh(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ue=e)}}else{if(vl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Y=!1,Ue=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function uo(e){if(e!==Ue)return!1;if(!Y)return ad(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hl(e.type,e.memoizedProps)),t&&(t=be)){if(vl(e))throw Gh(),Error(k(418));for(;t;)Vh(e,t),t=Xt(t.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ue?Xt(e.stateNode.nextSibling):null;return!0}function Gh(){for(var e=be;e;)e=Xt(e.nextSibling)}function _r(){be=Ue=null,Y=!1}function ku(e){Xe===null?Xe=[e]:Xe.push(e)}var Cy=xt.ReactCurrentBatchConfig;function Ye(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ts=cn(null),ns=null,rr=null,Iu=null;function Tu(){Iu=rr=ns=null}function Cu(e){var t=ts.current;q(ts),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){ns=e,Iu=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(Iu!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(ns===null)throw Error(k(308));rr=e,ns.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var kn=null;function Ru(e){kn===null?kn=[e]:kn.push(e)}function qh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rs(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,_=a;switch(m=t,v=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(v,h,m);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,m=typeof y=="function"?y.call(v,h,m):y,m==null)break e;h=J({},h,m);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=v,l=h):f=f.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bn|=s,e.lanes=s,e.memoizedState=h}}function ud(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Yh=new qf.Component().refs;function wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Os={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=en(e),o=It(r,i);o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(Ze(t,e,i,r),Co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=en(e),o=It(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Jt(e,o,i),t!==null&&(Ze(t,e,i,r),Co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=en(e),i=It(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(Ze(t,e,r,n),Co(t,e,r))}};function cd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function Qh(e,t,n){var r=!1,i=ln,o=t.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=xe(t)?On:ge.current,r=t.contextTypes,o=(r=r!=null)?yr(e,i):ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yh,Pu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=xe(t)?On:ge.current,i.context=yr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Os.enqueueReplaceState(i,i.state,null),rs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Yh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fd(e){var t=e._init;return t(e._payload)}function Xh(e){function t(p,c){if(e){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=tn(p,c),p.index=0,p.sibling=null,p}function o(p,c,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=2,c):d):(p.flags|=2,c)):(p.flags|=1048576,c)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,d,g){return c===null||c.tag!==6?(c=Ta(d,p.mode,g),c.return=p,c):(c=i(c,d),c.return=p,c)}function l(p,c,d,g){var E=d.type;return E===Yn?f(p,c,d.props.children,g,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&fd(E)===c.type)?(g=i(c,d.props),g.ref=Gr(p,c,d),g.return=p,g):(g=Oo(d.type,d.key,d.props,null,p.mode,g),g.ref=Gr(p,c,d),g.return=p,g)}function u(p,c,d,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ca(d,p.mode,g),c.return=p,c):(c=i(c,d.children||[]),c.return=p,c)}function f(p,c,d,g,E){return c===null||c.tag!==7?(c=Pn(d,p.mode,g,E),c.return=p,c):(c=i(c,d),c.return=p,c)}function h(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ta(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Zi:return d=Oo(c.type,c.key,c.props,null,p.mode,d),d.ref=Gr(p,null,c),d.return=p,d;case Kn:return c=Ca(c,p.mode,d),c.return=p,c;case Mt:var g=c._init;return h(p,g(c._payload),d)}if(Xr(c)||Br(c))return c=Pn(c,p.mode,d,null),c.return=p,c;co(p,c)}return null}function m(p,c,d,g){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(p,c,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Zi:return d.key===E?l(p,c,d,g):null;case Kn:return d.key===E?u(p,c,d,g):null;case Mt:return E=d._init,m(p,c,E(d._payload),g)}if(Xr(d)||Br(d))return E!==null?null:f(p,c,d,g,null);co(p,d)}return null}function v(p,c,d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(d)||null,a(c,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zi:return p=p.get(g.key===null?d:g.key)||null,l(c,p,g,E);case Kn:return p=p.get(g.key===null?d:g.key)||null,u(c,p,g,E);case Mt:var S=g._init;return v(p,c,d,S(g._payload),E)}if(Xr(g)||Br(g))return p=p.get(d)||null,f(c,p,g,E,null);co(c,g)}return null}function y(p,c,d,g){for(var E=null,S=null,w=c,I=c=0,b=null;w!==null&&I<d.length;I++){w.index>I?(b=w,w=null):b=w.sibling;var L=m(p,w,d[I],g);if(L===null){w===null&&(w=b);break}e&&w&&L.alternate===null&&t(p,w),c=o(L,c,I),S===null?E=L:S.sibling=L,S=L,w=b}if(I===d.length)return n(p,w),Y&&_n(p,I),E;if(w===null){for(;I<d.length;I++)w=h(p,d[I],g),w!==null&&(c=o(w,c,I),S===null?E=w:S.sibling=w,S=w);return Y&&_n(p,I),E}for(w=r(p,w);I<d.length;I++)b=v(w,p,I,d[I],g),b!==null&&(e&&b.alternate!==null&&w.delete(b.key===null?I:b.key),c=o(b,c,I),S===null?E=b:S.sibling=b,S=b);return e&&w.forEach(function(Oe){return t(p,Oe)}),Y&&_n(p,I),E}function _(p,c,d,g){var E=Br(d);if(typeof E!="function")throw Error(k(150));if(d=E.call(d),d==null)throw Error(k(151));for(var S=E=null,w=c,I=c=0,b=null,L=d.next();w!==null&&!L.done;I++,L=d.next()){w.index>I?(b=w,w=null):b=w.sibling;var Oe=m(p,w,L.value,g);if(Oe===null){w===null&&(w=b);break}e&&w&&Oe.alternate===null&&t(p,w),c=o(Oe,c,I),S===null?E=Oe:S.sibling=Oe,S=Oe,w=b}if(L.done)return n(p,w),Y&&_n(p,I),E;if(w===null){for(;!L.done;I++,L=d.next())L=h(p,L.value,g),L!==null&&(c=o(L,c,I),S===null?E=L:S.sibling=L,S=L);return Y&&_n(p,I),E}for(w=r(p,w);!L.done;I++,L=d.next())L=v(w,p,I,L.value,g),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?I:L.key),c=o(L,c,I),S===null?E=L:S.sibling=L,S=L);return e&&w.forEach(function(pn){return t(p,pn)}),Y&&_n(p,I),E}function R(p,c,d,g){if(typeof d=="object"&&d!==null&&d.type===Yn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Zi:e:{for(var E=d.key,S=c;S!==null;){if(S.key===E){if(E=d.type,E===Yn){if(S.tag===7){n(p,S.sibling),c=i(S,d.props.children),c.return=p,p=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&fd(E)===S.type){n(p,S.sibling),c=i(S,d.props),c.ref=Gr(p,S,d),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}d.type===Yn?(c=Pn(d.props.children,p.mode,g,d.key),c.return=p,p=c):(g=Oo(d.type,d.key,d.props,null,p.mode,g),g.ref=Gr(p,c,d),g.return=p,p=g)}return s(p);case Kn:e:{for(S=d.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(p,c.sibling),c=i(c,d.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Ca(d,p.mode,g),c.return=p,p=c}return s(p);case Mt:return S=d._init,R(p,c,S(d._payload),g)}if(Xr(d))return y(p,c,d,g);if(Br(d))return _(p,c,d,g);co(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,d),c.return=p,p=c):(n(p,c),c=Ta(d,p.mode,g),c.return=p,p=c),s(p)):n(p,c)}return R}var wr=Xh(!0),Jh=Xh(!1),Hi={},ut=cn(Hi),Pi=cn(Hi),Ai=cn(Hi);function In(e){if(e===Hi)throw Error(k(174));return e}function Au(e,t){switch(W(Ai,t),W(Pi,e),W(ut,Hi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Za(t,e)}q(ut),W(ut,t)}function Sr(){q(ut),q(Pi),q(Ai)}function Zh(e){In(Ai.current);var t=In(ut.current),n=Za(t,e.type);t!==n&&(W(Pi,e),W(ut,n))}function xu(e){Pi.current===e&&(q(ut),q(Pi))}var Q=cn(0);function is(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function Nu(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var Ro=xt.ReactCurrentDispatcher,wa=xt.ReactCurrentBatchConfig,Dn=0,X=null,ie=null,se=null,os=!1,li=!1,xi=0,Ry=0;function he(){throw Error(k(321))}function Ou(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,i,o){if(Dn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?Ny:Oy,e=n(r,i),li){o=0;do{if(li=!1,xi=0,25<=o)throw Error(k(301));o+=1,se=ie=null,t.updateQueue=null,Ro.current=Ly,e=n(r,i)}while(li)}if(Ro.current=ss,t=ie!==null&&ie.next!==null,Dn=0,se=ie=X=null,os=!1,t)throw Error(k(300));return e}function Du(){var e=xi!==0;return xi=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?X.memoizedState=se=e:se=se.next=e,se}function Ve(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?X.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(k(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?X.memoizedState=se=e:se=se.next=e}return se}function Ni(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Dn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,X.lanes|=f,bn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,tt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,bn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=Ve(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);tt(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ep(){}function tp(e,t){var n=X,r=Ve(),i=t(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,bu(ip.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Oi(9,rp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(k(349));Dn&30||np(n,t,i)}return i}function np(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rp(e,t,n,r){t.value=n,t.getSnapshot=r,op(t)&&sp(e)}function ip(e,t,n){return n(function(){op(t)&&sp(e)})}function op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function sp(e){var t=Rt(e,1);t!==null&&Ze(t,e,1,-1)}function hd(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=xy.bind(null,X,e),[t.memoizedState,e]}function Oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ap(){return Ve().memoizedState}function Po(e,t,n,r){var i=it();X.flags|=e,i.memoizedState=Oi(1|t,n,void 0,r===void 0?null:r)}function Ls(e,t,n,r){var i=Ve();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&Ou(r,s.deps)){i.memoizedState=Oi(t,n,o,r);return}}X.flags|=e,i.memoizedState=Oi(1|t,n,o,r)}function pd(e,t){return Po(8390656,8,e,t)}function bu(e,t){return Ls(2048,8,e,t)}function lp(e,t){return Ls(4,2,e,t)}function up(e,t){return Ls(4,4,e,t)}function cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dp(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4,4,cp.bind(null,t,e),n)}function Uu(){}function fp(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ou(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ou(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pp(e,t,n){return Dn&21?(tt(n,t)||(n=vh(),X.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Py(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=wa.transition;wa.transition={};try{e(!1),t()}finally{F=n,wa.transition=r}}function mp(){return Ve().memoizedState}function Ay(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gp(e))vp(t,n);else if(n=qh(e,t,n,r),n!==null){var i=Se();Ze(n,e,r,i),yp(n,t,r)}}function xy(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gp(e))vp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,s)){var l=t.interleaved;l===null?(i.next=i,Ru(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qh(e,t,i,r),n!==null&&(i=Se(),Ze(n,e,r,i),yp(n,t,r))}}function gp(e){var t=e.alternate;return e===X||t!==null&&t===X}function vp(e,t){li=os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var ss={readContext:We,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Ny={readContext:We,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ay.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Uu,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=Py.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=it();if(Y){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));Dn&30||np(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,pd(ip.bind(null,r,o,e),[e]),r.flags|=2048,Oi(9,rp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=le.identifierPrefix;if(Y){var n=_t,r=yt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Oy={readContext:We,useCallback:fp,useContext:We,useEffect:bu,useImperativeHandle:dp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:hp,useReducer:Sa,useRef:ap,useState:function(){return Sa(Ni)},useDebugValue:Uu,useDeferredValue:function(e){var t=Ve();return pp(t,ie.memoizedState,e)},useTransition:function(){var e=Sa(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1},Ly={readContext:We,useCallback:fp,useContext:We,useEffect:bu,useImperativeHandle:dp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:hp,useReducer:Ea,useRef:ap,useState:function(){return Ea(Ni)},useDebugValue:Uu,useDeferredValue:function(e){var t=Ve();return ie===null?t.memoizedState=e:pp(t,ie.memoizedState,e)},useTransition:function(){var e=Ea(Ni)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=av(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function El(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function _p(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ls||(ls=!0,Ol=r),El(e,t)},n}function wp(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){El(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){El(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ky.bind(null,e,t,n),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e)}var by=xt.ReactCurrentOwner,Re=!1;function _e(e,t,n,r){t.child=e===null?Jh(t,null,n,r):wr(t,e.child,n,r)}function yd(e,t,n,r,i){n=n.render;var o=t.ref;return fr(t,i),r=Lu(e,t,n,r,o,i),n=Du(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(Y&&n&&Su(t),t.flags|=1,_e(e,t,r,i),t.child)}function _d(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Wu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Sp(e,t,o,r,i)):(e=Oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(s,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Sp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ii(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return kl(e,t,n,r,i)}function Ep(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(or,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(or,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(or,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(or,De),De|=r;return _e(e,t,i,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var o=xe(n)?On:ge.current;return o=yr(t,o),fr(t,i),n=Lu(e,t,n,r,o,i),r=Du(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(Y&&r&&Su(t),t.flags|=1,_e(e,t,n,i),t.child)}function wd(e,t,n,r,i){if(xe(n)){var o=!0;Jo(t)}else o=!1;if(fr(t,i),t.stateNode===null)Ao(e,t),Qh(t,n,r),Sl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=xe(n)?On:ge.current,u=yr(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&dd(t,s,r,u),Ft=!1;var m=t.memoizedState;s.state=m,rs(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ae.current||Ft?(typeof f=="function"&&(wl(t,n,f,r),l=t.memoizedState),(a=Ft||cd(t,n,a,r,m,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ye(t.type,a),s.props=u,h=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=xe(n)?On:ge.current,l=yr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==l)&&dd(t,s,r,l),Ft=!1,m=t.memoizedState,s.state=m,rs(t,r,s,i);var y=t.memoizedState;a!==h||m!==y||Ae.current||Ft?(typeof v=="function"&&(wl(t,n,v,r),y=t.memoizedState),(u=Ft||cd(t,n,u,r,m,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,i)}function Il(e,t,n,r,i,o){kp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&od(t,n,!1),Pt(e,t,o);r=t.stateNode,by.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=wr(t,e.child,null,o),t.child=wr(t,null,a,o)):_e(e,t,a,o),t.memoizedState=r.state,i&&od(t,n,!0),t.child}function Ip(e){var t=e.stateNode;t.pendingContext?id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&id(e,t.context,!1),Au(e,t.containerInfo)}function Sd(e,t,n,r,i){return _r(),ku(i),t.flags|=256,_e(e,t,n,r),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tp(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Q,i&1),e===null)return yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Us(s,r,0,null),e=Pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cl(n),t.memoizedState=Tl,e):Mu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Uy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=tn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=tn(a,o):(o=Pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Cl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Tl,r}return o=e.child,e=o.sibling,r=tn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mu(e,t){return t=Us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&ku(r),wr(t,e.child,null,n),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(k(422))),fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Us({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&wr(t,e.child,null,s),t.child.memoizedState=Cl(s),t.memoizedState=Tl,o);if(!(t.mode&1))return fo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=ka(o,r,void 0),fo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Re||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(e,i),Ze(r,e,i,-1))}return Hu(),r=ka(Error(k(421))),fo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,be=Xt(i.nextSibling),Ue=t,Y=!0,Xe=null,e!==null&&($e[Be++]=yt,$e[Be++]=_t,$e[Be++]=Ln,yt=e.id,_t=e.overflow,Ln=t),t=Mu(t,r.children),t.flags|=4096,t)}function Ed(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Ia(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Cp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);else if(e.tag===19)Ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&is(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ia(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&is(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ia(t,!0,n,null,o);break;case"together":Ia(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function My(e,t,n){switch(t.tag){case 3:Ip(t),_r();break;case 5:Zh(t);break;case 1:xe(t.type)&&Jo(t);break;case 4:Au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(ts,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Tp(e,t,n):(W(Q,Q.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);W(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Cp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Ep(e,t,n)}return Pt(e,t,n)}var Rp,Rl,Pp,Ap;Rp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};Pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,In(ut.current);var o=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ja(e,i),r=Ja(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}el(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fy(e,t,n){var r=t.pendingProps;switch(Eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return xe(t.type)&&Xo(),pe(t),null;case 3:return r=t.stateNode,Sr(),q(Ae),q(ge),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(bl(Xe),Xe=null))),Rl(e,t),pe(t),null;case 5:xu(t);var i=In(Ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=In(ut.current),uo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[Ri]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)V(Zr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Nc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Lc(r,o),V("invalid",r)}el(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":eo(r),Oc(r,o,!0);break;case"textarea":eo(r),Dc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[Ri]=r,Rp(e,t,!1,!1),t.stateNode=e;e:{switch(s=tl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)V(Zr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Nc(e,r),i=Ya(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Lc(e,r),i=Ja(e,r),V("invalid",e);break;default:i=r}el(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?oh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yi(e,l):typeof l=="number"&&yi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&au(e,o,l,s))}switch(n){case"input":eo(e),Oc(e,r,!1);break;case"textarea":eo(e),Dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=In(Ai.current),In(ut.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return pe(t),null;case 13:if(q(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&be!==null&&t.mode&1&&!(t.flags&128))Gh(),_r(),t.flags|=98560,o=!1;else if(o=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[st]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Xe!==null&&(bl(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?oe===0&&(oe=3):Hu())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Sr(),Rl(e,t),e===null&&Ti(t.stateNode.containerInfo),pe(t),null;case 10:return Cu(t.type._context),pe(t),null;case 17:return xe(t.type)&&Xo(),pe(t),null;case 19:if(q(Q),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)qr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=is(e),s!==null){for(t.flags|=128,qr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>kr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=is(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return pe(t),null}else 2*te()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,n=Q.current,W(Q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function zy(e,t){switch(Eu(t),t.tag){case 1:return xe(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),q(Ae),q(ge),Nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xu(t),null;case 13:if(q(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Q),null;case 4:return Sr(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ho=!1,me=!1,$y=typeof WeakSet=="function"?WeakSet:Set,C=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){ee(e,t,r)}}var kd=!1;function By(e,t){if(dl=qo,e=Lh(),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=e,m=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},qo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,R=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ye(t.type,_),R);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(g){ee(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=kd,kd=!1,y}function ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pl(t,n,o)}i=i.next}while(i!==r)}}function Ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xp(e){var t=e.alternate;t!==null&&(e.alternate=null,xp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ri],delete t[ml],delete t[ky],delete t[Iy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Np(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}function Nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}var ue=null,Qe=!1;function Dt(e,t,n){for(n=n.child;n!==null;)Op(e,t,n),n=n.sibling}function Op(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:me||ir(n,t);case 6:var r=ue,i=Qe;ue=null,Dt(e,t,n),ue=r,Qe=i,ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Qe?(e=ue,n=n.stateNode,e.nodeType===8?va(e.parentNode,n):e.nodeType===1&&va(e,n),Ei(e)):va(ue,n.stateNode));break;case 4:r=ue,i=Qe,ue=n.stateNode.containerInfo,Qe=!0,Dt(e,t,n),ue=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Pl(n,t,s),i=i.next}while(i!==r)}Dt(e,t,n);break;case 1:if(!me&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Dt(e,t,n),me=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function Td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $y),t.forEach(function(r){var i=Qy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Qe=!1;break e;case 3:ue=a.stateNode.containerInfo,Qe=!0;break e;case 4:ue=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(ue===null)throw Error(k(160));Op(o,s,i),ue=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),rt(e),r&4){try{ui(3,e,e.return),Ds(3,e)}catch(_){ee(e,e.return,_)}try{ui(5,e,e.return)}catch(_){ee(e,e.return,_)}}break;case 1:Ke(t,e),rt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ke(t,e),rt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(_){ee(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&eh(i,o),tl(a,s);var u=tl(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?oh(i,h):f==="dangerouslySetInnerHTML"?rh(i,h):f==="children"?yi(i,h):au(i,f,h,u)}switch(a){case"input":Qa(i,o);break;case"textarea":th(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?lr(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?lr(i,!!o.multiple,o.defaultValue,!0):lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ri]=o}catch(_){ee(e,e.return,_)}}break;case 6:if(Ke(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){ee(e,e.return,_)}}break;case 3:if(Ke(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(_){ee(e,e.return,_)}break;case 4:Ke(t,e),rt(e);break;case 13:Ke(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($u=te())),r&4&&Td(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(me=(u=me)||f,Ke(t,e),me=u):Ke(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(h=C=f;C!==null;){switch(m=C,v=m.child,m.tag){case 0:case 11:case 14:case 15:ui(4,m,m.return);break;case 1:ir(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){ee(r,n,_)}}break;case 5:ir(m,m.return);break;case 22:if(m.memoizedState!==null){Rd(h);continue}}v!==null?(v.return=m,C=v):Rd(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ih("display",s))}catch(_){ee(e,e.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ee(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ke(t,e),rt(e),r&4&&Td(e);break;case 21:break;default:Ke(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Np(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=Id(e);Nl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Id(e);xl(e,a,s);break;default:throw Error(k(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jy(e,t,n){C=e,Dp(e)}function Dp(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ho;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=ho;var u=me;if(ho=s,(me=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?Pd(i):l!==null?(l.return=s,C=l):Pd(i);for(;o!==null;)C=o,Dp(o),o=o.sibling;C=i,ho=a,me=u}Cd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Cd(e)}}function Cd(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ud(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ud(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ei(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||t.flags&512&&Al(t)}catch(m){ee(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Rd(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Pd(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ds(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Al(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{Al(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Hy=Math.ceil,as=xt.ReactCurrentDispatcher,Fu=xt.ReactCurrentOwner,He=xt.ReactCurrentBatchConfig,U=0,le=null,re=null,de=0,De=0,or=cn(0),oe=0,Li=null,bn=0,bs=0,zu=0,ci=null,Ce=null,$u=0,kr=1/0,pt=null,ls=!1,Ol=null,Zt=null,po=!1,qt=null,us=0,di=0,Ll=null,xo=-1,No=0;function Se(){return U&6?te():xo!==-1?xo:xo=te()}function en(e){return e.mode&1?U&2&&de!==0?de&-de:Cy.transition!==null?(No===0&&(No=vh()),No):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ih(e.type)),e):1}function Ze(e,t,n,r){if(50<di)throw di=0,Ll=null,Error(k(185));$i(e,n,r),(!(U&2)||e!==le)&&(e===le&&(!(U&2)&&(bs|=n),oe===4&&$t(e,de)),Ne(e,r),n===1&&U===0&&!(t.mode&1)&&(kr=te()+500,Ns&&dn()))}function Ne(e,t){var n=e.callbackNode;Cv(e,t);var r=Go(e,e===le?de:0);if(r===0)n!==null&&Mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mc(n),t===1)e.tag===0?Ty(Ad.bind(null,e)):Hh(Ad.bind(null,e)),Sy(function(){!(U&6)&&dn()}),n=null;else{switch(yh(r)){case 1:n=fu;break;case 4:n=mh;break;case 16:n=Vo;break;case 536870912:n=gh;break;default:n=Vo}n=jp(n,bp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bp(e,t){if(xo=-1,No=0,U&6)throw Error(k(327));var n=e.callbackNode;if(hr()&&e.callbackNode!==n)return null;var r=Go(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cs(e,r);else{t=r;var i=U;U|=2;var o=Mp();(le!==e||de!==t)&&(pt=null,kr=te()+500,Rn(e,t));do try{Gy();break}catch(a){Up(e,a)}while(1);Tu(),as.current=o,U=i,re!==null?t=0:(le=null,de=0,t=oe)}if(t!==0){if(t===2&&(i=sl(e),i!==0&&(r=i,t=Dl(e,i))),t===1)throw n=Li,Rn(e,0),$t(e,r),Ne(e,te()),n;if(t===6)$t(e,r);else{if(i=e.current.alternate,!(r&30)&&!Wy(i)&&(t=cs(e,r),t===2&&(o=sl(e),o!==0&&(r=o,t=Dl(e,o))),t===1))throw n=Li,Rn(e,0),$t(e,r),Ne(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:wn(e,Ce,pt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=$u+500-te(),10<t)){if(Go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pl(wn.bind(null,e,Ce,pt),t);break}wn(e,Ce,pt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hy(r/1960))-r,10<r){e.timeoutHandle=pl(wn.bind(null,e,Ce,pt),r);break}wn(e,Ce,pt);break;case 5:wn(e,Ce,pt);break;default:throw Error(k(329))}}}return Ne(e,te()),e.callbackNode===n?bp.bind(null,e):null}function Dl(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=cs(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&bl(t)),e}function bl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~zu,t&=~bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(U&6)throw Error(k(327));hr();var t=Go(e,0);if(!(t&1))return Ne(e,te()),null;var n=cs(e,t);if(e.tag!==0&&n===2){var r=sl(e);r!==0&&(t=r,n=Dl(e,r))}if(n===1)throw n=Li,Rn(e,0),$t(e,t),Ne(e,te()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ce,pt),Ne(e,te()),null}function Bu(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kr=te()+500,Ns&&dn())}}function Un(e){qt!==null&&qt.tag===0&&!(U&6)&&hr();var t=U;U|=1;var n=He.transition,r=F;try{if(He.transition=null,F=1,e)return e()}finally{F=r,He.transition=n,U=t,!(U&6)&&dn()}}function ju(){De=or.current,q(or)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Sr(),q(Ae),q(ge),Nu();break;case 5:xu(r);break;case 4:Sr();break;case 13:q(Q);break;case 19:q(Q);break;case 10:Cu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(le=e,re=e=tn(e.current,null),de=De=t,oe=0,Li=null,zu=bs=bn=0,Ce=ci=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}kn=null}return e}function Up(e,t){do{var n=re;try{if(Tu(),Ro.current=ss,os){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}os=!1}if(Dn=0,se=ie=X=null,li=!1,xi=0,Fu.current=null,n===null||n.return===null){oe=1,Li=t,re=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=gd(s);if(v!==null){v.flags&=-257,vd(v,s,a,o,t),v.mode&1&&md(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){md(o,u,t),Hu();break e}l=Error(k(426))}}else if(Y&&a.mode&1){var R=gd(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),vd(R,s,a,o,t),ku(Er(l,a));break e}}o=l=Er(l,a),oe!==4&&(oe=2),ci===null?ci=[o]:ci.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=_p(o,l,t);ld(o,p);break e;case 1:a=l;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Zt===null||!Zt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=wp(o,a,t);ld(o,g);break e}}o=o.return}while(o!==null)}zp(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Mp(){var e=as.current;return as.current=ss,e===null?ss:e}function Hu(){(oe===0||oe===3||oe===2)&&(oe=4),le===null||!(bn&268435455)&&!(bs&268435455)||$t(le,de)}function cs(e,t){var n=U;U|=2;var r=Mp();(le!==e||de!==t)&&(pt=null,Rn(e,t));do try{Vy();break}catch(i){Up(e,i)}while(1);if(Tu(),U=n,as.current=r,re!==null)throw Error(k(261));return le=null,de=0,oe}function Vy(){for(;re!==null;)Fp(re)}function Gy(){for(;re!==null&&!vv();)Fp(re)}function Fp(e){var t=Bp(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?zp(e):re=t,Fu.current=null}function zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zy(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=Fy(n,t,De),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function wn(e,t,n){var r=F,i=He.transition;try{He.transition=null,F=1,qy(e,t,n,r)}finally{He.transition=i,F=r}return null}function qy(e,t,n,r){do hr();while(qt!==null);if(U&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rv(e,o),e===le&&(re=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,jp(Vo,function(){return hr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=F;F=1;var a=U;U|=4,Fu.current=null,By(e,n),Lp(n,e),hy(fl),qo=!!dl,fl=dl=null,e.current=n,jy(n),yv(),U=a,F=s,He.transition=o}else e.current=n;if(po&&(po=!1,qt=e,us=i),o=e.pendingLanes,o===0&&(Zt=null),Sv(n.stateNode),Ne(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,e=Ol,Ol=null,e;return us&1&&e.tag!==0&&hr(),o=e.pendingLanes,o&1?e===Ll?di++:(di=0,Ll=e):di=0,dn(),null}function hr(){if(qt!==null){var e=yh(us),t=He.transition,n=F;try{if(He.transition=null,F=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,us=0,U&6)throw Error(k(331));var i=U;for(U|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:ui(8,f,o)}var h=f.child;if(h!==null)h.return=f,C=h;else for(;C!==null;){f=C;var m=f.sibling,v=f.return;if(xp(f),f===u){C=null;break}if(m!==null){m.return=v,C=m;break}C=v}}}var y=o.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var R=_.sibling;_.sibling=null,_=R}while(_!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var c=e.current;for(C=c;C!==null;){s=C;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,C=d;else e:for(s=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ds(9,a)}}catch(E){ee(a,a.return,E)}if(a===s){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(U=i,dn(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Cs,e)}catch{}r=!0}return r}finally{F=n,He.transition=t}}return!1}function xd(e,t,n){t=Er(n,t),t=_p(e,t,1),e=Jt(e,t,1),t=Se(),e!==null&&($i(e,1,t),Ne(e,t))}function ee(e,t,n){if(e.tag===3)xd(e,e,n);else for(;t!==null;){if(t.tag===3){xd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Er(n,e),e=wp(t,e,1),t=Jt(t,e,1),e=Se(),t!==null&&($i(t,1,e),Ne(t,e));break}}t=t.return}}function Ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(oe===4||oe===3&&(de&130023424)===de&&500>te()-$u?Rn(e,0):zu|=n),Ne(e,t)}function $p(e,t){t===0&&(e.mode&1?(t=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):t=1);var n=Se();e=Rt(e,t),e!==null&&($i(e,t,n),Ne(e,n))}function Yy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$p(e,n)}function Qy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),$p(e,n)}var Bp;Bp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,My(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Y&&t.flags&1048576&&Wh(t,es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=yr(t,ge.current);fr(t,n),i=Lu(null,t,r,e,i,n);var o=Du();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pu(t),i.updater=Os,t.stateNode=i,i._reactInternals=t,Sl(t,r,e,n),t=Il(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Su(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jy(r),e=Ye(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=wd(null,t,r,e,n);break e;case 11:t=yd(null,t,r,e,n);break e;case 14:t=_d(null,t,r,Ye(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),wd(e,t,r,i,n);case 3:e:{if(Ip(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kh(e,t),rs(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Er(Error(k(423)),t),t=Sd(e,t,r,n,i);break e}else if(r!==i){i=Er(Error(k(424)),t),t=Sd(e,t,r,n,i);break e}else for(be=Xt(t.stateNode.containerInfo.firstChild),Ue=t,Y=!0,Xe=null,n=Jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Pt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Zh(t),e===null&&yl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,hl(r,i)?s=null:o!==null&&hl(r,o)&&(t.flags|=32),kp(e,t),_e(e,t,s,n),t.child;case 6:return e===null&&yl(t),null;case 13:return Tp(e,t,n);case 4:return Au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),yd(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(ts,r._currentValue),r._currentValue=s,o!==null)if(tt(o.value,s)){if(o.children===i.children&&!Ae.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=It(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_l(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),_l(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=We(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),_d(e,t,r,i,n);case 15:return Sp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ao(e,t),t.tag=1,xe(r)?(e=!0,Jo(t)):e=!1,fr(t,n),Qh(t,r,i),Sl(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return Cp(e,t,n);case 22:return Ep(e,t,n)}throw Error(k(156,t.tag))};function jp(e,t){return ph(e,t)}function Xy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Xy(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jy(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===cu)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Wu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Yn:return Pn(n.children,i,o,t);case lu:s=8,i|=8;break;case Va:return e=je(12,n,t,i|2),e.elementType=Va,e.lanes=o,e;case Ga:return e=je(13,n,t,i),e.elementType=Ga,e.lanes=o,e;case qa:return e=je(19,n,t,i),e.elementType=qa,e.lanes=o,e;case Xf:return Us(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yf:s=10;break e;case Qf:s=9;break e;case uu:s=11;break e;case cu:s=14;break e;case Mt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pn(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Us(e,t,n,r){return e=je(22,e,r,t),e.elementType=Xf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,o,s,a,l){return e=new Zy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(o),e}function e0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hp(e){if(!e)return ln;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return jh(e,n,t)}return t}function Wp(e,t,n,r,i,o,s,a,l){return e=Vu(n,r,!0,e,i,o,s,a,l),e.context=Hp(null),n=e.current,r=Se(),i=en(n),o=It(r,i),o.callback=t??null,Jt(n,o,i),e.current.lanes=i,$i(e,i,r),Ne(e,r),e}function Ms(e,t,n,r){var i=t.current,o=Se(),s=en(i);return n=Hp(n),t.context===null?t.context=n:t.pendingContext=n,t=It(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,s),e!==null&&(Ze(e,i,s,o),Co(e,i,s)),s}function ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function t0(){return null}var Vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}Fs.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ms(e,t,null,null)};Fs.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Ms(null,e,null,null)}),t[Ct]=null}};function Fs(e){this._internalRoot=e}Fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&kh(e)}};function Ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function n0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ds(s);o.call(u)}}var s=Wp(t,r,e,0,null,!1,!1,"",Od);return e._reactRootContainer=s,e[Ct]=s.current,Ti(e.nodeType===8?e.parentNode:e),Un(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ds(l);a.call(u)}}var l=Vu(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=l,e[Ct]=l.current,Ti(e.nodeType===8?e.parentNode:e),Un(function(){Ms(t,l,n,r)}),l}function $s(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ds(s);a.call(l)}}Ms(t,s,e,i)}else s=n0(n,t,e,i,r);return ds(s)}_h=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(hu(t,n|1),Ne(t,te()),!(U&6)&&(kr=te()+500,dn()))}break;case 13:Un(function(){var r=Rt(e,1);if(r!==null){var i=Se();Ze(r,e,1,i)}}),Gu(e,1)}};pu=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Se();Ze(t,e,134217728,n)}Gu(e,134217728)}};wh=function(e){if(e.tag===13){var t=en(e),n=Rt(e,t);if(n!==null){var r=Se();Ze(n,e,t,r)}Gu(e,t)}};Sh=function(){return F};Eh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};rl=function(e,t,n){switch(t){case"input":if(Qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xs(r);if(!i)throw Error(k(90));Zf(r),Qa(r,i)}}}break;case"textarea":th(e,n);break;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}};lh=Bu;uh=Un;var r0={usingClientEntryPoint:!1,Events:[ji,Zn,xs,sh,ah,Bu]},Kr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},i0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fh(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Cs=mo.inject(i0),lt=mo}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(t))throw Error(k(200));return e0(e,t,null,n)};Fe.createRoot=function(e,t){if(!Ku(e))throw Error(k(299));var n=!1,r="",i=Vp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,null,n,!1,r,i),e[Ct]=t.current,Ti(e.nodeType===8?e.parentNode:e),new qu(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=fh(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Un(e)};Fe.hydrate=function(e,t,n){if(!zs(t))throw Error(k(200));return $s(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Ku(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Vp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Wp(t,null,e,1,n??null,i,!1,o,s),e[Ct]=t.current,Ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fs(t)};Fe.render=function(e,t,n){if(!zs(t))throw Error(k(200));return $s(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!zs(e))throw Error(k(40));return e._reactRootContainer?(Un(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Fe.unstable_batchedUpdates=Bu;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zs(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return $s(e,t,n,!1,r)};Fe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Fe})(tv);var Ld=ja;Ba.createRoot=Ld.createRoot,Ba.hydrateRoot=Ld.hydrateRoot;const Yu=z.createContext(null);/**
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
 */const Gp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},o0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},qp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[f],n[h],n[m],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new s0;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class s0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a0=function(e){const t=Gp(e);return qp.encodeByteArray(t,!0)},fs=function(e){return a0(e).replace(/\./g,"")},Kp=function(e){try{return qp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function l0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u0=()=>l0().__FIREBASE_DEFAULTS__,c0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},d0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Kp(e[1]);return t&&JSON.parse(t)},Qu=()=>{try{return u0()||c0()||d0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yp=e=>{var t,n;return(n=(t=Qu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},f0=e=>{const t=Yp(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Qp=()=>{var e;return(e=Qu())===null||e===void 0?void 0:e.config},Xp=e=>{var t;return(t=Qu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class h0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function p0(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[fs(JSON.stringify(n)),fs(JSON.stringify(s)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function g0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function v0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y0(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _0(){try{return typeof indexedDB=="object"}catch{return!1}}function w0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const S0="FirebaseError";class Nt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=S0,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?E0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Nt(i,a,r)}}function E0(e,t){return e.replace(k0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const k0=/\{\$([^}]+)}/g;function I0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Dd(o)&&Dd(s)){if(!hs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dd(e){return e!==null&&typeof e=="object"}/**
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
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ei(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ti(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function T0(e,t){const n=new C0(e,t);return n.subscribe.bind(n)}class C0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");R0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ra),i.error===void 0&&(i.error=Ra),i.complete===void 0&&(i.complete=Ra);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ra(){}/**
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
 */function Ie(e){return e&&e._delegate?e._delegate:e}class Mn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class P0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new h0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(x0(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:A0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A0(e){return e===Sn?void 0:e}function x0(e){return e.instantiationMode==="EAGER"}/**
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
 */class N0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new P0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const O0={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},L0=H.INFO,D0={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},b0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=D0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jp{constructor(t){this.name=t,this._logLevel=L0,this._logHandler=b0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?O0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const U0=(e,t)=>t.some(n=>e instanceof n);let bd,Ud;function M0(){return bd||(bd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F0(){return Ud||(Ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zp=new WeakMap,Ul=new WeakMap,em=new WeakMap,Pa=new WeakMap,Xu=new WeakMap;function z0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(nn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Zp.set(n,e)}).catch(()=>{}),Xu.set(t,e),t}function $0(e){if(Ul.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ul.set(e,t)}let Ml={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ul.get(e);if(t==="objectStoreNames")return e.objectStoreNames||em.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function B0(e){Ml=e(Ml)}function j0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Aa(this),t,...n);return em.set(r,t.sort?t.sort():[t]),nn(r)}:F0().includes(e)?function(...t){return e.apply(Aa(this),t),nn(Zp.get(this))}:function(...t){return nn(e.apply(Aa(this),t))}}function H0(e){return typeof e=="function"?j0(e):(e instanceof IDBTransaction&&$0(e),U0(e,M0())?new Proxy(e,Ml):e)}function nn(e){if(e instanceof IDBRequest)return z0(e);if(Pa.has(e))return Pa.get(e);const t=H0(e);return t!==e&&(Pa.set(e,t),Xu.set(t,e)),t}const Aa=e=>Xu.get(e);function W0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=nn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(nn(s.result),l.oldVersion,l.newVersion,nn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const V0=["get","getKey","getAll","getAllKeys","count"],G0=["put","add","delete","clear"],xa=new Map;function Md(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xa.get(t))return xa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=G0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xa.set(t,o),o}B0(e=>({...e,get:(t,n,r)=>Md(t,n)||e.get(t,n,r),has:(t,n)=>!!Md(t,n)||e.has(t,n)}));/**
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
 */class q0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(K0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function K0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fl="@firebase/app",Fd="0.10.1";/**
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
 */const Fn=new Jp("@firebase/app"),Y0="@firebase/app-compat",Q0="@firebase/analytics-compat",X0="@firebase/analytics",J0="@firebase/app-check-compat",Z0="@firebase/app-check",e_="@firebase/auth",t_="@firebase/auth-compat",n_="@firebase/database",r_="@firebase/database-compat",i_="@firebase/functions",o_="@firebase/functions-compat",s_="@firebase/installations",a_="@firebase/installations-compat",l_="@firebase/messaging",u_="@firebase/messaging-compat",c_="@firebase/performance",d_="@firebase/performance-compat",f_="@firebase/remote-config",h_="@firebase/remote-config-compat",p_="@firebase/storage",m_="@firebase/storage-compat",g_="@firebase/firestore",v_="@firebase/firestore-compat",y_="firebase",__="10.11.0";/**
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
 */const zl="[DEFAULT]",w_={[Fl]:"fire-core",[Y0]:"fire-core-compat",[X0]:"fire-analytics",[Q0]:"fire-analytics-compat",[Z0]:"fire-app-check",[J0]:"fire-app-check-compat",[e_]:"fire-auth",[t_]:"fire-auth-compat",[n_]:"fire-rtdb",[r_]:"fire-rtdb-compat",[i_]:"fire-fn",[o_]:"fire-fn-compat",[s_]:"fire-iid",[a_]:"fire-iid-compat",[l_]:"fire-fcm",[u_]:"fire-fcm-compat",[c_]:"fire-perf",[d_]:"fire-perf-compat",[f_]:"fire-rc",[h_]:"fire-rc-compat",[p_]:"fire-gcs",[m_]:"fire-gcs-compat",[g_]:"fire-fst",[v_]:"fire-fst-compat","fire-js":"fire-js",[y_]:"fire-js-all"};/**
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
 */const ps=new Map,S_=new Map,$l=new Map;function zd(e,t){try{e.container.addComponent(t)}catch(n){Fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ir(e){const t=e.name;if($l.has(t))return Fn.debug(`There were multiple attempts to register component ${t}.`),!1;$l.set(t,e);for(const n of ps.values())zd(n,e);for(const n of S_.values())zd(n,e);return!0}function Ju(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wt(e){return e.settings!==void 0}/**
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
 */const E_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},rn=new Wi("app","Firebase",E_);/**
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
 */class k_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=__;function tm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Qp()),!n)throw rn.create("no-options");const o=ps.get(i);if(o){if(hs(n,o.options)&&hs(r,o.config))return o;throw rn.create("duplicate-app",{appName:i})}const s=new N0(i);for(const l of $l.values())s.addComponent(l);const a=new k_(n,r,s);return ps.set(i,a),a}function nm(e=zl){const t=ps.get(e);if(!t&&e===zl&&Qp())return tm();if(!t)throw rn.create("no-app",{appName:e});return t}function on(e,t,n){var r;let i=(r=w_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}Ir(new Mn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const I_="firebase-heartbeat-database",T_=1,Di="firebase-heartbeat-store";let Na=null;function rm(){return Na||(Na=W0(I_,T_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(e=>{throw rn.create("idb-open",{originalErrorMessage:e.message})})),Na}async function C_(e){try{const n=(await rm()).transaction(Di),r=await n.objectStore(Di).get(im(e));return await n.done,r}catch(t){if(t instanceof Nt)Fn.warn(t.message);else{const n=rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fn.warn(n.message)}}}async function $d(e,t){try{const r=(await rm()).transaction(Di,"readwrite");await r.objectStore(Di).put(t,im(e)),await r.done}catch(n){if(n instanceof Nt)Fn.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function im(e){return`${e.name}!${e.options.appId}`}/**
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
 */const R_=1024,P_=30*24*60*60*1e3;class A_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Bd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=P_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bd(),{heartbeatsToSend:r,unsentEntries:i}=x_(this._heartbeatsCache.heartbeats),o=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Bd(){return new Date().toISOString().substring(0,10)}function x_(e,t=R_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),jd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class N_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _0()?w0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function jd(e){return fs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function O_(e){Ir(new Mn("platform-logger",t=>new q0(t),"PRIVATE")),Ir(new Mn("heartbeat",t=>new A_(t),"PRIVATE")),on(Fl,Fd,e),on(Fl,Fd,"esm2017"),on("fire-js","")}O_("");var L_="firebase",D_="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(L_,D_,"app");function Zu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function om(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=om,sm=new Wi("auth","Firebase",om());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Jp("@firebase/auth");function U_(e,...t){ms.logLevel<=H.WARN&&ms.warn(`Auth (${Dr}): ${e}`,...t)}function Lo(e,...t){ms.logLevel<=H.ERROR&&ms.error(`Auth (${Dr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw ec(e,...t)}function ct(e,...t){return ec(e,...t)}function am(e,t,n){const r=Object.assign(Object.assign({},b_()),{[t]:n});return new Wi("auth","Firebase",r).create(t,{appName:e.name})}function sn(e){return am(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ec(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return sm.create(e,...t)}function x(e,t,...n){if(!e)throw ec(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Lo(t),new Error(t)}function At(e,t){e||St(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function M_(){return Hd()==="http:"||Hd()==="https:"}function Hd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M_()||g0()||"connection"in navigator)?navigator.onLine:!0}function z_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=m0()||v0()}get(){return F_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Gi(3e4,6e4);function Hn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,r,i={}){return um(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Vi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),lm.fetch()(cm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function um(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$_),t);try{const i=new H_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw go(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw go(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw go(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw am(e,f,u);nt(e,f)}}catch(i){if(i instanceof Nt)throw i;nt(e,"network-request-failed",{message:String(i)})}}async function Bs(e,t,n,r,i={}){const o=await fn(e,t,n,r,i);return"mfaPendingCredential"in o&&nt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function cm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?tc(e.config,i):`${e.config.apiScheme}://${i}`}function j_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class H_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),B_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(e,t,r);return i.customData._tokenResponse=n,i}function Wd(e){return e!==void 0&&e.enterprise!==void 0}class W_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return j_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function V_(e,t){return fn(e,"GET","/v2/recaptchaConfig",Hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function dm(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function q_(e,t=!1){const n=Ie(e),r=await n.getIdToken(t),i=nc(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fi(Oa(i.auth_time)),issuedAtTime:fi(Oa(i.iat)),expirationTime:fi(Oa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Oa(e){return Number(e)*1e3}function nc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kp(n);return i?JSON.parse(i):(Lo("Failed to decode base64 JWT payload"),null)}catch(i){return Lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vd(e){const t=nc(e);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Nt&&K_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function K_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await bi(e,dm(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?fm(o.providerUserInfo):[],a=X_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new jl(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,h)}async function Q_(e){const t=Ie(e);await gs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function fm(e){return e.map(t=>{var{providerId:n}=t,r=Zu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(e,t){const n=await um(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=cm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z_(e,t){return fn(e,"POST","/v2/accounts:revokeToken",Hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Vd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){x(t.length!==0,"internal-error");const n=Vd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await J_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new pr;return r&&(x(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(x(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){x(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Et{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new jl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await bi(this,this.stsTokenManager.getToken(this.auth,t));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return q_(this,t)}reload(){return Q_(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Et(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(sn(this.auth));const t=await this.getIdToken();return await bi(this,G_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:d,emailVerified:g,isAnonymous:E,providerData:S,stsTokenManager:w}=n;x(d&&w,t,"internal-error");const I=pr.fromJSON(this.name,w);x(typeof d=="string",t,"internal-error"),bt(h,t.name),bt(m,t.name),x(typeof g=="boolean",t,"internal-error"),x(typeof E=="boolean",t,"internal-error"),bt(v,t.name),bt(y,t.name),bt(_,t.name),bt(R,t.name),bt(p,t.name),bt(c,t.name);const b=new Et({uid:d,auth:t,email:m,emailVerified:g,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:v,tenantId:_,stsTokenManager:I,createdAt:p,lastLoginAt:c});return S&&Array.isArray(S)&&(b.providerData=S.map(L=>Object.assign({},L))),R&&(b._redirectEventId=R),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new pr;i.updateFromServerResponse(n);const o=new Et({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await gs(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?fm(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new pr;a.updateFromIdToken(r);const l=new Et({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new jl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;function kt(e){At(e instanceof Function,"Expected a class definition");let t=Gd.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Gd.set(e,t),t)}/**
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
 */class hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hm.type="NONE";const qd=hm;/**
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
 */function Do(e,t,n){return`firebase:${e}:${t}:${n}`}class mr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,o),this.fullPersistenceKey=Do("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Et._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new mr(kt(qd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||kt(qd);const s=Do(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=Et._fromJSON(t,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new mr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new mr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ym(t))return"Blackberry";if(_m(t))return"Webos";if(rc(t))return"Safari";if((t.includes("chrome/")||mm(t))&&!t.includes("edge/"))return"Chrome";if(vm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pm(e=ve()){return/firefox\//i.test(e)}function rc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mm(e=ve()){return/crios\//i.test(e)}function gm(e=ve()){return/iemobile/i.test(e)}function vm(e=ve()){return/android/i.test(e)}function ym(e=ve()){return/blackberry/i.test(e)}function _m(e=ve()){return/webos/i.test(e)}function js(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ew(e=ve()){var t;return js(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function tw(){return y0()&&document.documentMode===10}function wm(e=ve()){return js(e)||vm(e)||_m(e)||ym(e)||/windows phone/i.test(e)||gm(e)}function nw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e,t=[]){let n;switch(e){case"Browser":n=Kd(ve());break;case"Worker":n=`${Kd(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class rw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iw(e,t={}){return fn(e,"GET","/v2/passwordPolicy",Hn(e,t))}/**
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
 */const ow=6;class sw{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:ow,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yd(this),this.idTokenSubscription=new Yd(this),this.beforeStateQueue=new rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await dm(this,{idToken:t}),r=await Et._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(wt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await gs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=z_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(wt(this.app))return Promise.reject(sn(this));const n=t?Ie(t):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return wt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await iw(this),n=new sw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Wi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kt(t)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&U_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function br(e){return Ie(e)}class Yd{constructor(t){this.auth=t,this.observer=null,this.addObserver=T0(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lw(e){Hs=e}function Em(e){return Hs.loadJS(e)}function uw(){return Hs.recaptchaEnterpriseScript}function cw(){return Hs.gapiScript}function dw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const fw="recaptcha-enterprise",hw="NO_RECAPTCHA";class pw{constructor(t){this.type=fw,this.auth=br(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{V_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new W_(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(hw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Wd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uw();l.length!==0&&(l+=a),Em(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Qd(e,t,n,r=!1){const i=new pw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Xd(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qd(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Qd(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(e,t){const n=Ju(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(hs(o,t??{}))return i;nt(i,"already-initialized")}return n.initialize({options:t})}function gw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function vw(e,t,n){const r=br(e);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=km(t),{host:s,port:a}=yw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_w()}function km(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function yw(e){const t=km(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Jd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Jd(s)}}}function Jd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function _w(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}async function ww(e,t){return fn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(e,t){return Bs(e,"POST","/v1/accounts:signInWithPassword",Hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(e,t){return Bs(e,"POST","/v1/accounts:signInWithEmailLink",Hn(e,t))}async function kw(e,t){return Bs(e,"POST","/v1/accounts:signInWithEmailLink",Hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends ic{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ui(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(t,n,"signInWithPassword",Sw);case"emailLink":return Ew(t,{email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(t,r,"signUpPassword",ww);case"emailLink":return kw(t,{idToken:n,email:this._email,oobCode:this._password});default:nt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(e,t){return Bs(e,"POST","/v1/accounts:signInWithIdp",Hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="http://localhost";class zn extends ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Zu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new zn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return gr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gr(t,n)}buildRequest(){const t={requestUri:Iw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cw(e){const t=ei(ti(e)).link,n=t?ei(ti(t)).deep_link_id:null,r=ei(ti(e)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||t||e}class oc{constructor(t){var n,r,i,o,s,a;const l=ei(ti(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Tw((i=l.mode)!==null&&i!==void 0?i:null);x(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Cw(t);try{return new oc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=oc.parseLink(n);return x(r,"argument-error"),Ui._fromEmailAndCode(t,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qi extends Im{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends qi{constructor(){super("facebook.com")}static credential(t){return zn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return zn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends qi{constructor(){super("github.com")}static credential(t){return zn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends qi{constructor(){super("twitter.com")}static credential(t,n){return zn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Et._fromIdTokenResponse(t,r,i),s=Zd(r);return new Tr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Zd(r);return new Tr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Zd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Nt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vs(t,n,r,i)}}function Tm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(e,o,t,r):o})}async function Rw(e,t,n=!1){const r=await bi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tr._forOperation(e,"link",r)}/**
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
 */async function Pw(e,t,n=!1){const{auth:r}=e;if(wt(r.app))return Promise.reject(sn(r));const i="reauthenticate";try{const o=await bi(e,Tm(r,i,t,e),n);x(o.idToken,r,"internal-error");const s=nc(o.idToken);x(s,r,"internal-error");const{sub:a}=s;return x(e.uid===a,r,"user-mismatch"),Tr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(e,t,n=!1){if(wt(e.app))return Promise.reject(sn(e));const r="signIn",i=await Tm(e,r,t),o=await Tr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Aw(e,t){return Cm(br(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(e){const t=br(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Nw(e,t,n){return wt(e.app)?Promise.reject(sn(e)):Aw(Ie(e),Ur.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xw(e),r})}function Ow(e,t,n,r){return Ie(e).onIdTokenChanged(t,n,r)}function Lw(e,t,n){return Ie(e).beforeAuthStateChanged(t,n)}function Dw(e,t,n,r){return Ie(e).onAuthStateChanged(t,n,r)}const ys="__sak";/**
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
 */class Rm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ys,"1"),this.storage.removeItem(ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){const e=ve();return rc(e)||js(e)}const Uw=1e3,Mw=10;class Pm extends Rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bw()&&nw(),this.fallbackToPolling=wm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);tw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Mw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pm.type="LOCAL";const Fw=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Am.type="SESSION";const xm=Am;/**
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
 */function zw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ws(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await zw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class $w{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=sc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function Bw(e){dt().location.href=e}/**
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
 */function Nm(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function jw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ww(){return Nm()?self:null}/**
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
 */const Om="firebaseLocalStorageDb",Vw=1,_s="firebaseLocalStorage",Lm="fbase_key";class Ki{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vs(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function Gw(){const e=indexedDB.deleteDatabase(Om);return new Ki(e).toPromise()}function Hl(){const e=indexedDB.open(Om,Vw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_s,{keyPath:Lm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_s)?t(r):(r.close(),await Gw(),t(await Hl()))})})}async function ef(e,t,n){const r=Vs(e,!0).put({[Lm]:t,value:n});return new Ki(r).toPromise()}async function qw(e,t){const n=Vs(e,!1).get(t),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function tf(e,t){const n=Vs(e,!0).delete(t);return new Ki(n).toPromise()}const Kw=800,Yw=3;class Dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Yw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Ww()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await jw(),!this.activeServiceWorker)return;this.sender=new $w(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Hw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hl();return await ef(t,ys,"1"),await tf(t,ys),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>qw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Vs(i,!1).getAll();return new Ki(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dm.type="LOCAL";const Qw=Dm;new Gi(3e4,6e4);/**
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
 */function Xw(e,t){return t?kt(t):(x(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ac extends ic{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Jw(e){return Cm(e.auth,new ac(e),e.bypassAuthState)}function Zw(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),Pw(n,new ac(e),e.bypassAuthState)}async function e1(e){const{auth:t,user:n}=e;return x(n,t,"internal-error"),Rw(n,new ac(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Jw;case"linkViaPopup":case"linkViaRedirect":return e1;case"reauthViaPopup":case"reauthViaRedirect":return Zw;default:nt(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=new Gi(2e3,1e4);class sr extends bm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,t1.get())};t()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="pendingRedirect",bo=new Map;class r1 extends bm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bo.get(this.auth._key());if(!t){try{const r=await i1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bo.set(this.auth._key(),t)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i1(e,t){const n=a1(t),r=s1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function o1(e,t){bo.set(e._key(),t)}function s1(e){return kt(e._redirectPersistence)}function a1(e){return Do(n1,e.config.apiKey,e.name)}async function l1(e,t,n=!1){if(wt(e.app))return Promise.reject(sn(e));const r=br(e),i=Xw(r,t),s=await new r1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=10*60*1e3;class c1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!d1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Um(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(t))}saveEventToCache(t){this.cachedEventUids.add(nf(t)),this.lastProcessedEventTime=Date.now()}}function nf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Um({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function d1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Um(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function m1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await f1(e);for(const n of t)try{if(g1(n))return}catch{}nt(e,"unauthorized-domain")}function g1(e){const t=Bl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!p1.test(n))return!1;if(h1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const v1=new Gi(3e4,6e4);function rf(){const e=dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function y1(e){return new Promise((t,n)=>{var r,i,o;function s(){rf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(ct(e,"network-request-failed"))},timeout:v1.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=dt().gapi)===null||o===void 0)&&o.load)s();else{const a=dw("iframefcb");return dt()[a]=()=>{gapi.load?s():n(ct(e,"network-request-failed"))},Em(`${cw()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Uo=null,t})}let Uo=null;function _1(e){return Uo=Uo||y1(e),Uo}/**
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
 */const w1=new Gi(5e3,15e3),S1="__/auth/iframe",E1="emulator/auth/iframe",k1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(e){const t=e.config;x(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?tc(t,E1):`https://${e.config.authDomain}/${S1}`,r={apiKey:t.apiKey,appName:e.name,v:Dr},i=I1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function C1(e){const t=await _1(e),n=dt().gapi;return x(n,e,"internal-error"),t.open({where:document.body,url:T1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ct(e,"network-request-failed"),a=dt().setTimeout(()=>{o(s)},w1.get());function l(){dt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const R1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P1=500,A1=600,x1="_blank",N1="http://localhost";class of{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O1(e,t,n,r=P1,i=A1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},R1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ve().toLowerCase();n&&(a=mm(u)?x1:n),pm(u)&&(t=t||N1,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[v,y])=>`${m}${v}=${y},`,"");if(ew(u)&&a!=="_self")return L1(t||"",a),new of(null);const h=window.open(t||"",a,f);x(h,e,"popup-blocked");try{h.focus()}catch{}return new of(h)}function L1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const D1="__/auth/handler",b1="emulator/auth/handler",U1=encodeURIComponent("fac");async function sf(e,t,n,r,i,o){x(e.config.authDomain,e,"auth-domain-config-required"),x(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Dr,eventId:i};if(t instanceof Im){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",I0(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,h]of Object.entries(o||{}))s[f]=h}if(t instanceof qi){const f=t.getScopes().filter(h=>h!=="");f.length>0&&(s.scopes=f.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${U1}=${encodeURIComponent(l)}`:"";return`${M1(e)}?${Vi(a).slice(1)}${u}`}function M1({config:e}){return e.emulator?tc(e,b1):`https://${e.authDomain}/${D1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class F1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xm,this._completeRedirectFn=l1,this._overrideRedirectResult=o1}async _openPopup(t,n,r,i){var o;At((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await sf(t,n,r,Bl(),i);return O1(t,s,sc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await sf(t,n,r,Bl(),i);return Bw(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(At(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await C1(t),r=new c1(t);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(La,{type:La},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[La];s!==void 0&&n(!!s),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return wm()||rc()||js()}}const z1=F1;var af="@firebase/auth",lf="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(e){Ir(new Mn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;x(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sm(e)},u=new aw(r,i,o,l);return gw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ir(new Mn("auth-internal",t=>{const n=br(t.getProvider("auth").getImmediate());return(r=>new $1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(af,lf,B1(e)),on(af,lf,"esm2017")}/**
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
 */const H1=5*60,W1=Xp("authIdTokenMaxAge")||H1;let uf=null;const V1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const i=n==null?void 0:n.token;uf!==i&&(uf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G1(e=nm()){const t=Ju(e,"auth");if(t.isInitialized())return t.getImmediate();const n=mw(e,{popupRedirectResolver:z1,persistence:[Qw,Fw,xm]}),r=Xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=V1(o.toString());Lw(n,s,()=>s(n.currentUser)),Ow(n,a=>s(a))}}const i=Yp("auth");return i&&vw(n,`http://${i}`),n}function q1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}lw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ct("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",q1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");const K1={apiKey:"AIzaSyDnxKM18oUWFNsxVbWu8LUNJUL7VzxdskA",authDomain:"awcy-12b0e.firebaseapp.com",projectId:"awcy-12b0e",storageBucket:"awcy-12b0e.appspot.com",messagingSenderId:"892936445118",appId:"1:892936445118:web:26f5f360048186f43a92ef"},Mm=tm(K1),lc=G1(Mm),Y1=async(e,t)=>{try{return await Nw(lc,e,t)}catch{return{error:!0,type:"Something went wrong"}}},Q1=({children:e})=>{const[t,n]=z.useState(null);return z.useEffect(()=>{Dw(lc,r=>{n(r)})},[]),P(Yu.Provider,{value:t,children:e})},X1="modulepreload",J1=function(e,t){return new URL(e,t).href},cf={},Z1=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=J1(o,r),o in cf)return;cf[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const h=i[f];if(h.href===o&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":X1,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},df=""+new URL("awcy-ad680841.mp3",import.meta.url).href,eS=""+new URL("tee-647bc5ea.png",import.meta.url).href;/**
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
 */const Fm="firebasestorage.googleapis.com",zm="storageBucket",tS=2*60*1e3,nS=10*60*1e3,rS=1e3;/**
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
 */class Z extends Nt{constructor(t,n,r=0){super(Da(t),`Firebase Storage: ${n} (${Da(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Z.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Da(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function Da(e){return"storage/"+e}function uc(){const e="An unknown error occurred, please check the error payload for server response.";return new Z(K.UNKNOWN,e)}function iS(e){return new Z(K.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function oS(e){return new Z(K.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sS(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Z(K.UNAUTHENTICATED,e)}function aS(){return new Z(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lS(e){return new Z(K.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function $m(){return new Z(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bm(){return new Z(K.CANCELED,"User canceled the upload/download.")}function uS(e){return new Z(K.INVALID_URL,"Invalid URL '"+e+"'.")}function cS(e){return new Z(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function dS(){return new Z(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zm+"' property when initializing the app?")}function jm(){return new Z(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fS(){return new Z(K.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function hS(){return new Z(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function pS(e){return new Z(K.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wl(e){return new Z(K.INVALID_ARGUMENT,e)}function Hm(){return new Z(K.APP_DELETED,"The Firebase app was deleted.")}function mS(e){return new Z(K.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hi(e,t){return new Z(K.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Yr(e){throw new Z(K.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class we{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=we.makeFromUrl(t,n)}catch{return new we(t,"")}if(r.path==="")return r;throw cS(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const f="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${h}/${f}/b/${i}/o${m}`,"i"),y={bucket:1,path:3},_=n===Fm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${R}`,"i"),d=[{regex:a,indices:l,postModify:o},{regex:v,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<d.length;g++){const E=d[g],S=E.regex.exec(t);if(S){const w=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new we(w,I),E.postModify(r);break}}if(r==null)throw uS(t);return r}}class gS{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function vS(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function f(...R){u||(u=!0,t.apply(null,R))}function h(R){i=setTimeout(()=>{i=null,e(v,l())},R)}function m(){o&&clearTimeout(o)}function v(R,...p){if(u){m();return}if(R){m(),f.call(null,R,...p);return}if(l()||s){m(),f.call(null,R,...p);return}r<64&&(r*=2);let d;a===1?(a=2,d=0):d=(r+Math.random())*1e3,h(d)}let y=!1;function _(R){y||(y=!0,m(),!u&&(i!==null?(R||(a=2),clearTimeout(i),h(0)):R||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,_(!0)},n),_}function yS(e){e(!1)}/**
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
 */function _S(e){return e!==void 0}function wS(e){return typeof e=="function"}function SS(e){return typeof e=="object"&&!Array.isArray(e)}function Gs(e){return typeof e=="string"||e instanceof String}function ff(e){return cc()&&e instanceof Blob}function cc(){return typeof Blob<"u"}function Vl(e,t,n,r){if(r<t)throw Wl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Wl(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Wn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Wm(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function Vm(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class ES{constructor(t,n,r,i,o,s,a,l,u,f,h,m=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=h,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,y)=>{this.resolve_=v,this.reject_=y,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new vo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===An.NO_ERROR,l=o.getStatus();if(!a||Vm(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===An.ABORT;r(!1,new vo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new vo(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_S(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=uc();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Hm():Bm();s(l)}else{const l=$m();s(l)}};this.canceled_?n(!1,new vo(!1,null,!0)):this.backoffId_=vS(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&yS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function kS(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function IS(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function TS(e,t){t&&(e["X-Firebase-GMPID"]=t)}function CS(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function RS(e,t,n,r,i,o,s=!0){const a=Wm(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return TS(u,t),kS(u,n),IS(u,o),CS(u,r),new ES(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function PS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function AS(...e){const t=PS();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(cc())return new Blob(e);throw new Z(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xS(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function NS(e){if(typeof atob>"u")throw pS("base-64");return atob(e)}/**
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
 */const at={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ba{constructor(t,n){this.data=t,this.contentType=n||null}}function OS(e,t){switch(e){case at.RAW:return new ba(Gm(t));case at.BASE64:case at.BASE64URL:return new ba(qm(e,t));case at.DATA_URL:return new ba(DS(t),bS(t))}throw uc()}function Gm(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=r,s=e.charCodeAt(++n);r=65536|(o&1023)<<10|s&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function LS(e){let t;try{t=decodeURIComponent(e)}catch{throw hi(at.DATA_URL,"Malformed data URL.")}return Gm(t)}function qm(e,t){switch(e){case at.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw hi(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case at.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw hi(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=NS(t)}catch(i){throw i.message.includes("polyfill")?i:hi(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Km{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw hi(at.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=US(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function DS(e){const t=new Km(e);return t.base64?qm(at.BASE64,t.rest):LS(t.rest)}function bS(e){return new Km(e).contentType}function US(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Vt{constructor(t,n){let r=0,i="";ff(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(ff(this.data_)){const r=this.data_,i=xS(r,t,n);return i===null?null:new Vt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Vt(r,!0)}}static getBlob(...t){if(cc()){const n=t.map(r=>r instanceof Vt?r.data_:r);return new Vt(AS.apply(null,n))}else{const n=t.map(s=>Gs(s)?OS(at.RAW,s).data:s.data_);let r=0;n.forEach(s=>{r+=s.byteLength});const i=new Uint8Array(r);let o=0;return n.forEach(s=>{for(let a=0;a<s.length;a++)i[o++]=s[a]}),new Vt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function dc(e){let t;try{t=JSON.parse(e)}catch{return null}return SS(t)?t:null}/**
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
 */function MS(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function FS(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Ym(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function zS(e,t){return t}class ye{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||zS}}let yo=null;function $S(e){return!Gs(e)||e.length<2?e:Ym(e)}function fc(){if(yo)return yo;const e=[];e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));function t(o,s){return $S(s)}const n=new ye("name");n.xform=t,e.push(n);function r(o,s){return s!==void 0?Number(s):s}const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),yo=e,yo}function BS(e,t){function n(){const r=e.bucket,i=e.fullPath,o=new we(r,i);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function jS(e,t,n){const r={};r.type="file";const i=n.length;for(let o=0;o<i;o++){const s=n[o];r[s.local]=s.xform(r,t[s.server])}return BS(r,e),r}function Qm(e,t,n){const r=dc(t);return r===null?null:jS(e,r,n)}function HS(e,t,n,r){const i=dc(t);if(i===null||!Gs(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const s=encodeURIComponent;return o.split(",").map(u=>{const f=e.bucket,h=e.fullPath,m="/b/"+s(f)+"/o/"+s(h),v=Wn(m,n,r),y=Wm({alt:"media",token:u});return v+y})[0]}function Xm(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const hf="prefixes",pf="items";function WS(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[hf])for(const i of n[hf]){const o=i.replace(/\/$/,""),s=e._makeStorageReference(new we(t,o));r.prefixes.push(s)}if(n[pf])for(const i of n[pf]){const o=e._makeStorageReference(new we(t,i.name));r.items.push(o)}return r}function VS(e,t,n){const r=dc(n);return r===null?null:WS(e,t,r)}class hn{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(e){if(!e)throw uc()}function hc(e,t){function n(r,i){const o=Qm(e,i,t);return ft(o!==null),o}return n}function GS(e,t){function n(r,i){const o=VS(e,t,i);return ft(o!==null),o}return n}function qS(e,t){function n(r,i){const o=Qm(e,i,t);return ft(o!==null),HS(o,i,e.host,e._protocol)}return n}function Mr(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=aS():i=sS():n.getStatus()===402?i=oS(e.bucket):n.getStatus()===403?i=lS(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function pc(e){const t=Mr(e);function n(r,i){let o=t(r,i);return r.getStatus()===404&&(o=iS(e.path)),o.serverResponse=i.serverResponse,o}return n}function Jm(e,t,n){const r=t.fullServerUrl(),i=Wn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new hn(i,o,hc(e,n),s);return a.errorHandler=pc(t),a}function KS(e,t,n,r,i){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);const s=t.bucketOnlyServerUrl(),a=Wn(s,e.host,e._protocol),l="GET",u=e.maxOperationRetryTime,f=new hn(a,l,GS(e,t.bucket),u);return f.urlParams=o,f.errorHandler=Mr(t),f}function YS(e,t,n){const r=t.fullServerUrl(),i=Wn(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new hn(i,o,qS(e,n),s);return a.errorHandler=pc(t),a}function QS(e,t){const n=t.fullServerUrl(),r=Wn(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(l,u){}const a=new hn(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=pc(t),a}function XS(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Zm(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=XS(null,t)),r}function JS(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let d="";for(let g=0;g<2;g++)d=d+Math.random().toString().slice(2);return d}const l=a();s["Content-Type"]="multipart/related; boundary="+l;const u=Zm(t,r,i),f=Xm(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Vt.getBlob(h,r,m);if(v===null)throw jm();const y={name:u.fullPath},_=Wn(o,e.host,e._protocol),R="POST",p=e.maxUploadRetryTime,c=new hn(_,R,hc(e,n),p);return c.urlParams=y,c.headers=s,c.body=v.uploadData(),c.errorHandler=Mr(t),c}class ws{constructor(t,n,r,i){this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}}function mc(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{ft(!1)}return ft(!!n&&(t||["active"]).indexOf(n)!==-1),n}function ZS(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=Zm(t,r,i),a={name:s.fullPath},l=Wn(o,e.host,e._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},h=Xm(s,n),m=e.maxUploadRetryTime;function v(_){mc(_);let R;try{R=_.getResponseHeader("X-Goog-Upload-URL")}catch{ft(!1)}return ft(Gs(R)),R}const y=new hn(l,u,v,m);return y.urlParams=a,y.headers=f,y.body=h,y.errorHandler=Mr(t),y}function eE(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(u){const f=mc(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ft(!1)}h||ft(!1);const m=Number(h);return ft(!isNaN(m)),new ws(m,r.size(),f==="final")}const s="POST",a=e.maxUploadRetryTime,l=new hn(n,s,o,a);return l.headers=i,l.errorHandler=Mr(t),l}const mf=256*1024;function tE(e,t,n,r,i,o,s,a){const l=new ws(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw fS();const u=l.total-l.current;let f=u;i>0&&(f=Math.min(f,i));const h=l.current,m=h+f;let v="";f===0?v="finalize":u===f?v="upload, finalize":v="upload";const y={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(h,m);if(_===null)throw jm();function R(g,E){const S=mc(g,["active","final"]),w=l.current+f,I=r.size();let b;return S==="final"?b=hc(t,o)(g,E):b=null,new ws(w,I,S==="final",b)}const p="POST",c=t.maxUploadRetryTime,d=new hn(n,p,R,c);return d.headers=y,d.body=_.uploadData(),d.progressCallback=a||null,d.errorHandler=Mr(e),d}const Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ua(e){switch(e){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;case"error":return Te.ERROR;default:return Te.ERROR}}/**
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
 */class nE{constructor(t,n,r){if(wS(t)||n!=null||r!=null)this.next=t,this.error=n??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
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
 */function Gn(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class rE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=An.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=An.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=An.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Yr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class iE extends rE{initXhr(){this.xhr_.responseType="text"}}function vt(){return new iE}/**
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
 */class oE{constructor(t,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=r,this._mappings=fc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(K.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(Vm(i.status,[]))if(o)i=$m();else{this.sleepTime=Math.max(this.sleepTime*2,rS),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(K.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,o)=>{this._resolve=i,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":t(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const r=ZS(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,r)=>{const i=eE(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(i,vt,n,r);this._request=o,o.getPromise().then(s=>{s=s,this._request=void 0,this._updateProgress(s.current),this._needToFetchStatus=!1,s.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=mf*this._chunkMultiplier,n=new ws(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,o)=>{let s;try{s=tE(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(s,vt,i,o,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){mf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const r=Jm(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const r=JS(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,vt,t,n);this._request=i,i.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Bm(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Ua(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,r,i){const o=new nE(n||void 0,r||void 0,i||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Ua(this._state)){case Te.SUCCESS:Gn(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:const n=this._reject;Gn(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Ua(this._state)){case Te.RUNNING:case Te.PAUSED:t.next&&Gn(t.next.bind(t,this.snapshot))();break;case Te.SUCCESS:t.complete&&Gn(t.complete.bind(t))();break;case Te.CANCELED:case Te.ERROR:t.error&&Gn(t.error.bind(t,this._error))();break;default:t.error&&Gn(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
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
 */class $n{constructor(t,n){this._service=t,n instanceof we?this._location=n:this._location=we.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new $n(t,n)}get root(){const t=new we(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ym(this._location.path)}get storage(){return this._service}get parent(){const t=MS(this._location.path);if(t===null)return null;const n=new we(this._location.bucket,t);return new $n(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw mS(t)}}function sE(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new oE(e,new Vt(t),n)}function aE(e){const t={prefixes:[],items:[]};return eg(e,t).then(()=>t)}async function eg(e,t,n){const i=await lE(e,{pageToken:n});t.prefixes.push(...i.prefixes),t.items.push(...i.items),i.nextPageToken!=null&&await eg(e,t,i.nextPageToken)}function lE(e,t){t!=null&&typeof t.maxResults=="number"&&Vl("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=KS(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,vt)}function uE(e){e._throwIfRoot("getMetadata");const t=Jm(e.storage,e._location,fc());return e.storage.makeRequestWithTokens(t,vt)}function cE(e){e._throwIfRoot("getDownloadURL");const t=YS(e.storage,e._location,fc());return e.storage.makeRequestWithTokens(t,vt).then(n=>{if(n===null)throw hS();return n})}function dE(e){e._throwIfRoot("deleteObject");const t=QS(e.storage,e._location);return e.storage.makeRequestWithTokens(t,vt)}function fE(e,t){const n=FS(e._location.path,t),r=new we(e._location.bucket,n);return new $n(e.storage,r)}/**
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
 */function hE(e){return/^[A-Za-z]+:\/\//.test(e)}function pE(e,t){return new $n(e,t)}function tg(e,t){if(e instanceof gc){const n=e;if(n._bucket==null)throw dS();const r=new $n(n,n._bucket);return t!=null?tg(r,t):r}else return t!==void 0?fE(e,t):e}function mE(e,t){if(t&&hE(t)){if(e instanceof gc)return pE(e,t);throw Wl("To use ref(service, url), the first argument must be a Storage instance.")}else return tg(e,t)}function gf(e,t){const n=t==null?void 0:t[zm];return n==null?null:we.makeFromBucketSpec(n,e)}function gE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:p0(i,e.app.options.projectId))}class gc{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Fm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tS,this._maxUploadRetryTime=nS,this._requests=new Set,i!=null?this._bucket=we.makeFromBucketSpec(i,this._host):this._bucket=gf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=we.makeFromBucketSpec(this._url,t):this._bucket=gf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new $n(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new gS(Hm());{const s=RS(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const vf="@firebase/storage",yf="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="storage";function vE(e,t,n){return e=Ie(e),sE(e,t,n)}function yE(e){return e=Ie(e),uE(e)}function _E(e){return e=Ie(e),aE(e)}function rg(e){return e=Ie(e),cE(e)}function wE(e){return e=Ie(e),dE(e)}function Ss(e,t){return e=Ie(e),mE(e,t)}function SE(e=nm(),t){e=Ie(e);const r=Ju(e,ng).getImmediate({identifier:t}),i=f0("storage");return i&&EE(r,...i),r}function EE(e,t,n,r={}){gE(e,t,n,r)}function kE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new gc(n,r,i,t,Dr)}function IE(){Ir(new Mn(ng,kE,"PUBLIC").setMultipleInstances(!0)),on(vf,yf,""),on(vf,yf,"esm2017")}IE();const Es=SE(Mm),TE=async(e,t)=>{const n=Ss(Es,t.name);return await vE(n,e,{contentType:e.type,cacheControl:"public,max-age=3600",customMetadata:t}).then(async o=>{const s=await rg(o.ref),a=o.metadata;return{downloadUrl:s,metadata:a}})},CE=async()=>{const t=(await _E(Ss(Es))).items.map(async r=>{const i=Ss(Es,r.fullPath),o=await rg(i),s=await yE(i);return{downloadUrl:o,metadata:s}});return await Promise.all(t)},uI=async e=>{const t=Ss(Es,e);await wE(t)};var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function Mi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",pi="-moz-",M="-webkit-",ig="comm",qs="rule",vc="decl",RE="@import",og="@keyframes",PE="@layer",sg=Math.abs,yc=String.fromCharCode,Gl=Object.assign;function AE(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function ag(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function ae(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function lg(e){return e.length}function ni(e,t){return t.push(e),e}function xE(e,t){return e.map(t).join("")}function _f(e,t){return e.filter(function(n){return!mt(n,t)})}var Ks=1,Rr=1,ug=0,Ge=0,ne=0,Fr="";function Ys(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ks,column:Rr,length:s,return:"",siblings:a}}function Ut(e,t){return Gl(Ys("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Ut(e.root,{children:[e]});ni(e,e.siblings)}function NE(){return ne}function OE(){return ne=Ge>0?ae(Fr,--Ge):0,Rr--,ne===10&&(Rr=1,Ks--),ne}function et(){return ne=Ge<ug?ae(Fr,Ge++):0,Rr++,ne===10&&(Rr=1,Ks++),ne}function xn(){return ae(Fr,Ge)}function Fo(){return Ge}function Qs(e,t){return Cr(Fr,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LE(e){return Ks=Rr=1,ug=ot(Fr=e),Ge=0,[]}function DE(e){return Fr="",e}function Ma(e){return ag(Qs(Ge-1,Kl(e===91?e+2:e===40?e+1:e)))}function bE(e){for(;(ne=xn())&&ne<33;)et();return ql(e)>2||ql(ne)>3?"":" "}function UE(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Qs(e,Fo()+(t<6&&xn()==32&&et()==32))}function Kl(e){for(;et();)switch(ne){case e:return Ge;case 34:case 39:e!==34&&e!==39&&Kl(ne);break;case 40:e===41&&Kl(e);break;case 92:et();break}return Ge}function ME(e,t){for(;et()&&e+ne!==47+10;)if(e+ne===42+42&&xn()===47)break;return"/*"+Qs(t,Ge-1)+"*"+yc(e===47?e:et())}function FE(e){for(;!ql(xn());)et();return Qs(e,Ge)}function zE(e){return DE(zo("",null,null,null,[""],e=LE(e),0,[0],e))}function zo(e,t,n,r,i,o,s,a,l){for(var u=0,f=0,h=s,m=0,v=0,y=0,_=1,R=1,p=1,c=0,d="",g=i,E=o,S=r,w=d;R;)switch(y=c,c=et()){case 40:if(y!=108&&ae(w,h-1)==58){Mo(w+=O(Ma(c),"&","&\f"),"&\f",sg(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:w+=Ma(c);break;case 9:case 10:case 13:case 32:w+=bE(y);break;case 92:w+=UE(Fo()-1,7);continue;case 47:switch(xn()){case 42:case 47:ni($E(ME(et(),Fo()),t,n,l),l);break;default:w+="/"}break;case 123*_:a[u++]=ot(w)*p;case 125*_:case 59:case 0:switch(c){case 0:case 125:R=0;case 59+f:p==-1&&(w=O(w,/\f/g,"")),v>0&&ot(w)-h&&ni(v>32?Sf(w+";",r,n,h-1,l):Sf(O(w," ","")+";",r,n,h-2,l),l);break;case 59:w+=";";default:if(ni(S=wf(w,t,n,u,f,i,a,d,g=[],E=[],h,o),o),c===123)if(f===0)zo(w,t,S,S,g,o,h,a,E);else switch(m===99&&ae(w,3)===110?100:m){case 100:case 108:case 109:case 115:zo(e,S,S,r&&ni(wf(e,S,S,0,0,i,a,d,i,g=[],h,E),E),i,E,h,a,r?g:E);break;default:zo(w,S,S,S,[""],E,0,a,E)}}u=f=v=0,_=p=1,d=w="",h=s;break;case 58:h=1+ot(w),v=y;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&OE()==125)continue}switch(w+=yc(c),c*_){case 38:p=f>0?1:(w+="\f",-1);break;case 44:a[u++]=(ot(w)-1)*p,p=1;break;case 64:xn()===45&&(w+=Ma(et())),m=xn(),f=h=ot(d=w+=FE(Fo())),c++;break;case 45:y===45&&ot(w)==2&&(_=0)}}return o}function wf(e,t,n,r,i,o,s,a,l,u,f,h){for(var m=i-1,v=i===0?o:[""],y=lg(v),_=0,R=0,p=0;_<r;++_)for(var c=0,d=Cr(e,m+1,m=sg(R=s[_])),g=e;c<y;++c)(g=ag(R>0?v[c]+" "+d:O(d,/&\f/g,v[c])))&&(l[p++]=g);return Ys(e,t,n,i===0?qs:a,l,u,f,h)}function $E(e,t,n,r){return Ys(e,t,n,ig,yc(NE()),Cr(e,2,-2),0,r)}function Sf(e,t,n,r,i){return Ys(e,t,n,vc,Cr(e,0,r),Cr(e,r+1,-1),r,i)}function cg(e,t,n){switch(AE(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+pi+e+G+e+e;case 5936:switch(ae(e,t+11)){case 114:return M+e+G+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+G+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+G+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+G+e+e;case 6165:return M+e+G+"flex-"+e+e;case 5187:return M+e+O(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return M+e+G+"flex-item-"+O(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":G+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return M+e+G+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+G+O(e,"shrink","negative")+e;case 5292:return M+e+G+O(e,"basis","preferred-size")+e;case 6060:return M+"box-"+O(e,"-grow","")+M+e+G+O(e,"grow","positive")+e;case 4554:return M+O(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!mt(e,/flex-|baseline/))return G+"grid-column-align"+Cr(e,t)+e;break;case 2592:case 3360:return G+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,mt(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:G+O(e,"-start","")+e+G+"grid-row-span:"+(~Mo(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":G+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:G+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+pi+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?cg(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ae(e,t+6)===121)return O(e,":",":"+M)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(ae(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+G+"$2box$3")+e;case 100:return O(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function ks(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function BE(e,t,n,r){switch(e.type){case PE:if(e.children.length)break;case RE:case vc:return e.return=e.return||e.value;case ig:return"";case og:return e.return=e.value+"{"+ks(e.children,r)+"}";case qs:if(!ot(e.value=e.props.join(",")))return""}return ot(n=ks(e.children,r))?e.return=e.value+"{"+n+"}":""}function jE(e){var t=lg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function HE(e){return function(t){t.root||(t=t.return)&&e(t)}}function WE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vc:e.return=cg(e.value,e.length,n);return;case og:return ks([Ut(e,{value:O(e.value,"@","@"+M)})],r);case qs:if(e.length)return xE(n=e.props,function(i){switch(mt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Ut(e,{props:[O(i,/:(read-\w+)/,":"+pi+"$1")]})),qn(Ut(e,{props:[i]})),Gl(e,{props:_f(n,r)});break;case"::placeholder":qn(Ut(e,{props:[O(i,/:(plac\w+)/,":"+M+"input-$1")]})),qn(Ut(e,{props:[O(i,/:(plac\w+)/,":"+pi+"$1")]})),qn(Ut(e,{props:[O(i,/:(plac\w+)/,G+"input-$1")]})),qn(Ut(e,{props:[i]})),Gl(e,{props:_f(n,r)});break}return""})}}var VE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",dg="active",fg="data-styled-version",Xs="6.1.8",_c=`/*!sc*/
`,wc=typeof window<"u"&&"HTMLElement"in window,GE=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Js=Object.freeze([]),Ar=Object.freeze({});function qE(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var hg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),KE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YE=/(^-|-$)/g;function Ef(e){return e.replace(KE,"-").replace(YE,"")}var QE=/(a)(d)/gi,_o=52,kf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yl(e){var t,n="";for(t=Math.abs(e);t>_o;t=t/_o|0)n=kf(t%_o)+n;return(kf(t%_o)+n).replace(QE,"$1-$2")}var Fa,pg=5381,ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mg=function(e){return ar(pg,e)};function gg(e){return Yl(mg(e)>>>0)}function XE(e){return e.displayName||e.name||"Component"}function za(e){return typeof e=="string"&&!0}var vg=typeof Symbol=="function"&&Symbol.for,yg=vg?Symbol.for("react.memo"):60115,JE=vg?Symbol.for("react.forward_ref"):60112,ZE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ek={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tk=((Fa={})[JE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fa[yg]=_g,Fa);function If(e){return("type"in(t=e)&&t.type.$$typeof)===yg?_g:"$$typeof"in e?tk[e.$$typeof]:ZE;var t}var nk=Object.defineProperty,rk=Object.getOwnPropertyNames,Tf=Object.getOwnPropertySymbols,ik=Object.getOwnPropertyDescriptor,ok=Object.getPrototypeOf,Cf=Object.prototype;function wg(e,t,n){if(typeof t!="string"){if(Cf){var r=ok(t);r&&r!==Cf&&wg(e,r,n)}var i=rk(t);Tf&&(i=i.concat(Tf(t)));for(var o=If(e),s=If(t),a=0;a<i.length;++a){var l=i[a];if(!(l in ek||n&&n[l]||s&&l in s||o&&l in o)){var u=ik(t,l);try{nk(e,l,u)}catch{}}}}return e}function xr(e){return typeof e=="function"}function Sc(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ql(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xl(e,t,n){if(n===void 0&&(n=!1),!n&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xl(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=Xl(e[r],t[r]);return e}function Ec(e,t){Object.defineProperty(e,"toString",{value:t})}function Yi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Yi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(_c);return n},e}(),$o=new Map,Is=new Map,Bo=1,wo=function(e){if($o.has(e))return $o.get(e);for(;Is.has(Bo);)Bo++;var t=Bo++;return $o.set(e,t),Is.set(t,e),t},ak=function(e,t){Bo=t+1,$o.set(e,t),Is.set(t,e)},lk="style[".concat(Pr,"][").concat(fg,'="').concat(Xs,'"]'),uk=new RegExp("^".concat(Pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ck=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},dk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_c),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(uk);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(ak(f,u),ck(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function fk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Pr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Pr,dg),r.setAttribute(fg,Xs);var s=fk();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},hk=function(){function e(t){this.element=Sg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Yi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),pk=function(){function e(t){this.element=Sg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rf=wc,gk={isServer:!wc,useCSSOMInjection:!GE},Eg=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},gk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wc&&Rf&&(Rf=!1,function(o){for(var s=document.querySelectorAll(lk),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Pr)!==dg&&(dk(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ec(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(h){var m=function(p){return Is.get(p)}(h);if(m===void 0)return"continue";var v=o.names.get(m),y=s.getGroup(h);if(v===void 0||y.length===0)return"continue";var _="".concat(Pr,".g").concat(h,'[id="').concat(m,'"]'),R="";v!==void 0&&v.forEach(function(p){p.length>0&&(R+="".concat(p,","))}),l+="".concat(y).concat(_,'{content:"').concat(R,'"}').concat(_c)},f=0;f<a;f++)u(f);return l}(i)})}return e.registerId=function(t){return wo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mk(i):r?new hk(i):new pk(i)}(this.options),new sk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(wo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(wo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vk=/&/g,yk=/^\s*\/\/.*$/gm;function kg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kg(n.children,t)),n})}function _k(e){var t,n,r,i=e===void 0?Ar:e,o=i.options,s=o===void 0?Ar:o,a=i.plugins,l=a===void 0?Js:a,u=function(m,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===qs&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(vk,n).replace(r,u))}),s.prefix&&f.push(WE),f.push(BE);var h=function(m,v,y,_){v===void 0&&(v=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(yk,""),p=zE(y||v?"".concat(y," ").concat(v," { ").concat(R," }"):R);s.namespace&&(p=kg(p,s.namespace));var c=[];return ks(p,jE(f.concat(HE(function(d){return c.push(d)})))),c};return h.hash=l.length?l.reduce(function(m,v){return v.name||Yi(15),ar(m,v.name)},pg).toString():"",h}var wk=new Eg,Jl=_k(),Ig=gi.createContext({shouldForwardProp:void 0,styleSheet:wk,stylis:Jl});Ig.Consumer;gi.createContext(void 0);function Pf(){return z.useContext(Ig)}var Tg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Jl);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ec(this,function(){throw Yi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Jl),this.name+t.hash},e}(),Sk=function(e){return e>="A"&&e<="Z"};function Af(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Sk(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cg=function(e){return e==null||e===!1||e===""},Rg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Cg(o)&&(Array.isArray(o)&&o.isCss||xr(o)?r.push("".concat(Af(i),":"),o,";"):Fi(o)?r.push.apply(r,Mi(Mi(["".concat(i," {")],Rg(o),!1),["}"],!1)):r.push("".concat(Af(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in VE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(Cg(e))return[];if(Sc(e))return[".".concat(e.styledComponentId)];if(xr(e)){if(!xr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Nn(i,t,n,r)}var o;return e instanceof Tg?n?(e.inject(n,r),[e.getName(r)]):[e]:Fi(e)?Rg(e):Array.isArray(e)?Array.prototype.concat.apply(Js,e.map(function(s){return Nn(s,t,n,r)})):[e.toString()]}function Ek(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(xr(n)&&!Sc(n))return!1}return!0}var kk=mg(Xs),Ik=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ek(t),this.componentId=n,this.baseHash=ar(kk,n),this.baseStyle=r,Eg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Tn(i,this.staticRulesId);else{var o=Ql(Nn(this.rules,t,n,r)),s=Yl(ar(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Tn(i,s),this.staticRulesId=s}else{for(var l=ar(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var h=this.rules[f];if(typeof h=="string")u+=h;else if(h){var m=Ql(Nn(h,t,n,r));l=ar(l,m+f),u+=m}}if(u){var v=Yl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Tn(i,v)}}return i},e}(),Pg=gi.createContext(void 0);Pg.Consumer;var $a={};function Tk(e,t,n){var r=Sc(e),i=e,o=!za(e),s=t.attrs,a=s===void 0?Js:s,l=t.componentId,u=l===void 0?function(g,E){var S=typeof g!="string"?"sc":Ef(g);$a[S]=($a[S]||0)+1;var w="".concat(S,"-").concat(gg(Xs+S+$a[S]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):l,f=t.displayName,h=f===void 0?function(g){return za(g)?"styled.".concat(g):"Styled(".concat(XE(g),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Ef(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;y=function(g,E){return _(g,E)&&R(g,E)}}else y=_}var p=new Ik(n,m,r?i.componentStyle:void 0);function c(g,E){return function(S,w,I){var b=S.attrs,L=S.componentStyle,Oe=S.defaultProps,pn=S.foldedComponentIds,mn=S.styledComponentId,Qi=S.target,Zs=gi.useContext(Pg),zr=Pf(),gn=S.shouldForwardProp||zr.shouldForwardProp,T=qE(w,Zs,Oe)||Ar,A=function(Ot,Le,ht){for(var $r,yn=Pe(Pe({},Le),{className:void 0,theme:ht}),ea=0;ea<Ot.length;ea+=1){var Xi=xr($r=Ot[ea])?$r(yn):$r;for(var Lt in Xi)yn[Lt]=Lt==="className"?Tn(yn[Lt],Xi[Lt]):Lt==="style"?Pe(Pe({},yn[Lt]),Xi[Lt]):Xi[Lt]}return Le.className&&(yn.className=Tn(yn.className,Le.className)),yn}(b,w,T),N=A.as||Qi,B={};for(var j in A)A[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&A.theme===T||(j==="forwardedAs"?B.as=A.forwardedAs:gn&&!gn(j,N)||(B[j]=A[j]));var vn=function(Ot,Le){var ht=Pf(),$r=Ot.generateAndInjectStyles(Le,ht.styleSheet,ht.stylis);return $r}(L,A),qe=Tn(pn,mn);return vn&&(qe+=" "+vn),A.className&&(qe+=" "+A.className),B[za(N)&&!hg.has(N)?"class":"className"]=qe,B.ref=I,z.createElement(N,B)}(d,g,E)}c.displayName=h;var d=gi.forwardRef(c);return d.attrs=v,d.componentStyle=p,d.displayName=h,d.shouldForwardProp=y,d.foldedComponentIds=r?Tn(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=m,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(E){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var I=0,b=S;I<b.length;I++)Xl(E,b[I],!0);return E}({},i.defaultProps,g):g}}),Ec(d,function(){return".".concat(d.styledComponentId)}),o&&wg(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function xf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Nf=function(e){return Object.assign(e,{isCss:!0})};function Ag(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(xr(e)||Fi(e))return Nf(Nn(xf(Js,Mi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Nn(r):Nf(Nn(xf(r,t)))}function Zl(e,t,n){if(n===void 0&&(n=Ar),!t)throw Yi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ag.apply(void 0,Mi([i],o,!1)))};return r.attrs=function(i){return Zl(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Zl(e,t,Pe(Pe({},n),i))},r}var xg=function(e){return Zl(Tk,e)},$=xg;hg.forEach(function(e){$[e]=xg(e)});function kc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ql(Ag.apply(void 0,Mi([e],t,!1))),i=gg(r);return new Tg(i,r)}const Ic=kc`
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
}`,Ck=$.p`
  color: rgba(12, 0, 0, 0.7);
  flex: 1;
  display: block;
  animation: ${Ic} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 15px;
  }
`,Rk=$.h1`
  font-family: 'Typewriter FS', serif, 'Helvetica Neue', HelveticaNeue, Arial,
    sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.2;
  margin: 10px 0 0;
  word-wrap: break-word;
  animation: ${Ic} 0.5s ease-in-out;

  @media screen and (max-device-width: 568px) {
    font-size: 36px;
  }
`,Pk=$.header`
  padding: 1px 20px;
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ak=kc`
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
}`,xk=$.figure`
  max-width: 106px;
  max-height: 106px;
  left: 50%;
  margin-left: -57px;
  position: absolute;
  top: 20px;
  animation: ${Ak} 0.5s ease-in-out;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`,Nk=$.audio`
  width: 300px;
  max-width: 300px;
  animation: ${Ic} 0.5s ease-in-out;

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
`,Ok=$.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1px 20px;
  margin-top: 35px;

  @media screen and (max-device-width: 568px) {
    padding: 1px 10px;
    margin-top: 10px;
  }
`,Lk=$.main`
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
`,Dk=$.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,bk=$.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-bottom: 30px;
  cursor: pointer;
`,Uk=kc`
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
}`,Mk=$.article`
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
  animation: ${Uk} 0.75s ease-in;

  @media (max-width: 660px) {
    padding-bottom: 20px;
    margin-bottom: 15px;
  }
`,Fk=$.section`
  overflow: hidden;
  display: block;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`,cI=$.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,dI=$.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,zk=$.div`
  background-color: lightgrey;
  opacity: 0.2;
  width: 100%;
  height: 100%;
`,fI=$.p`
  margin-top: 15px;
  text-align: left;
  padding: 0px 20px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0px;
  @media (max-width: 660px) {
    padding-left: 10px;
  }
`,$k=()=>P(Mk,{children:P(Fk,{children:P(zk,{})})}),Bk=$.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`,jk=""+new URL("plus-70c42e58.svg",import.meta.url).href,Hk=({onUpload:e})=>{const[t,n]=z.useState(!1),[r,i]=z.useState(""),[o,s]=z.useState(""),[a,l]=z.useState(null);return ce(Cn,{children:[P(bk,{onClick:()=>n(!t),src:jk,alt:"Add more content"}),t&&P(Cn,{children:ce(Bk,{onSubmit:async h=>{if(h.preventDefault(),a){const m=await TE(a,{name:o,caption:r});e(m),l(null),i(""),s(""),n(!1)}},children:[P("div",{children:P("label",{htmlFor:"caption",children:"Caption"})}),ce("div",{children:[P("input",{id:"caption",value:r,onChange:h=>i(h.target.value)}),P("div",{children:P("label",{htmlFor:"name",children:"Name"})}),P("div",{children:P("input",{id:"name",value:o,onChange:h=>s(h.target.value),required:!0})})]}),P("div",{children:P("label",{htmlFor:"file",children:"Choose a file"})}),P("div",{children:P("input",{id:"file",type:"file",required:!0,onChange:h=>{h.target.files&&l(h.target.files[0])}})}),a&&P("button",{type:"submit",children:"Upload a file"})]})})]})},Wk=()=>{const[e,t]=z.useState("eantwibawua1@gmail.com"),[n,r]=z.useState("");return ce("div",{children:[P("h1",{children:"Hey Eman 🙂"}),P("p",{children:"Please sign-in:"}),ce("form",{onSubmit:async o=>{o.preventDefault(),await Y1(e,n)},children:[ce("div",{children:[P("label",{htmlFor:"email-address",children:"Email address"}),P("input",{type:"email",id:"email-address",value:e,onChange:o=>t(o.target.value),required:!0,placeholder:"Email address"})]}),ce("div",{children:[P("label",{htmlFor:"password",children:"Password"}),P("input",{type:"password",id:"password",value:n,onChange:o=>r(o.target.value),required:!0,placeholder:"Password"})]}),P("button",{type:"submit",children:"Sign in"})]})]})},Of=(e,t)=>{const n=Math.floor(e.length/t),r=e.length%t;let i=0;const o=[];for(let s=0;s<t;s++){const a=i+n+(s<r?1:0);o.push(e.slice(i,a)),i=a}return o},Lf=990,Vk=1320,Df=()=>window.innerWidth<=Lf?2:window.innerWidth<=Vk&&window.innerWidth>Lf?3:4,Gk=z.lazy(()=>Z1(()=>import("./LazyContent-554965df.js"),[],import.meta.url)),qk=()=>{const[e,t]=z.useState(0),n=z.useContext(Yu),[r,i]=z.useState(Df()),[o,s]=z.useState(null);return z.useEffect(()=>{(async()=>{const u=await CE(),f=Of(u,r);s(f)})()},[]),z.useEffect(()=>{const l=()=>{const u=Df();i(u)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),z.useEffect(()=>{if(!o)return;const l=Of(o.flat(),r);s(l)},[r]),e>=10&&!n?P(Wk,{}):ce(Cn,{children:[ce(Pk,{children:[P(xk,{onClick:()=>t(e+1),children:P("img",{src:eS,alt:"are we cool yet t-shirt"})}),P(Rk,{onClick:()=>t(e+1),children:"arewecoolyet.blog"}),P(Ck,{children:"YOU'RE ALL WELCOME"}),P(Nk,{controlsList:"nodownload noplaybackrate",controls:!0,src:df,children:P("track",{default:!0,kind:"captions",src:df})}),n&&ce(Cn,{children:[P(Hk,{onUpload:l=>{if(!o){s([[l]]);return}const u=o[o.length-1];s([...o.slice(0,-1),[...u,l]])}}),P("button",{onClick:()=>{t(0),lc.signOut()},children:"Log out"})]})]}),P(Ok,{children:P(Lk,{children:o&&o.map(l=>P(Dk,{children:l.map(u=>P(z.Suspense,{fallback:P($k,{}),children:P(Gk,{content:u,onDelete:f=>{const h=o.map(m=>m.filter(v=>v!==f));s(h)}})},u.downloadUrl))},l[0].downloadUrl))})})]})},Kk=""+new URL("bouncer-da71ab54.png",import.meta.url).href,bf=""+new URL("character-cc76f9ba.png",import.meta.url).href,Yk=""+new URL("club-e196994d.jpg",import.meta.url).href,Qk=""+new URL("room-005b6ed8.jpg",import.meta.url).href,eu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==",Xk=$.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
  margin: 30px auto;
`,Jk=$.div`
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`,Zk=$.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,eI=$.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
`,tI=$.div`
  width: 30%;
  background: #005f9f;
  background-image: url(${eu});
  color: #96e3ff;
  border: 3px solid #04214d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1px;
`,nI=$.form`
  width: 70%;
  padding: 30px;

  background: white;
  background-image: url(${eu});
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
    background-image: url(${eu});
    color: #c4fffe;
    width: 80px;
    height: 30px;
    align-self: center;
    -webkit-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    -moz-box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
    box-shadow: 8px 6px 4px 1px rgba(189, 174, 177, 1);
  }
`,Uf=$.img`
  width: 100%;
  object-fit: cover;
`,Mf=$.img`
  width: ${e=>e.$stage==="club"?"16%":"25%"};
  height: ${e=>e.$stage==="club"?"26%":"38%"};
  position: absolute;
  bottom: 0;
  right: 3%;
`,rI=$.img`
  width: 30%;
  height: 50%;
  position: absolute;
  left: 42%;
  top: 48%;
`,iI=$.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`,oI=$.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`,sI=()=>{const[e,t]=z.useState(""),[n,r]=z.useState("login");return P(Xk,{children:P(Jk,{children:P(Zk,{children:ce(eI,{children:[n==="login"&&ce(Cn,{children:[ce(tI,{children:[P("p",{children:"AWCY"}),P("p",{children:"version 1.0"})]}),ce(nI,{onSubmit:o=>{o.preventDefault(),e&&r("club")},children:[P("label",{htmlFor:"name",children:"Select character name:"}),P("input",{required:!0,id:"name",onChange:o=>t(o.target.value),value:e}),P("button",{type:"submit",children:"Play"})]})]}),n==="club"&&ce(Cn,{children:[P(Uf,{src:Yk,alt:"club"}),P(Mf,{$stage:n,src:bf,alt:"character"}),P(rI,{src:Kk,alt:"bouncer"}),P(iI,{onClick:()=>r("home"),children:">"})]}),n==="home"&&ce(Cn,{children:[P(oI,{onClick:()=>r("club"),children:"<"}),P(Uf,{src:Qk,alt:"home"}),P(Mf,{$stage:n,src:bf,alt:"character"})]})]})})})})},aI=()=>z.useContext(Yu)?P(sI,{}):null,lI=()=>ce(Q1,{children:[P(qk,{}),P(aI,{})]});Ba.createRoot(document.getElementById("root")).render(P(lI,{}));export{Mk as A,dI as B,fI as C,Fk as S,Yu as U,P as a,cI as b,uI as d,ce as j,z as r};
