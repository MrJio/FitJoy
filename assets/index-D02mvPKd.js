function SS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X0={exports:{}},qu={},J0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),AS=Symbol.for("react.portal"),CS=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),PS=Symbol.for("react.profiler"),kS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),bS=Symbol.for("react.forward_ref"),NS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),DS=Symbol.for("react.lazy"),Mg=Symbol.iterator;function LS(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var Z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},e_=Object.assign,t_={};function Os(t,e,n){this.props=t,this.context=e,this.refs=t_,this.updater=n||Z0}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function n_(){}n_.prototype=Os.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=t_,this.updater=n||Z0}var jf=Ff.prototype=new n_;jf.constructor=Ff;e_(jf,Os.prototype);jf.isPureReactComponent=!0;var Vg=Array.isArray,r_=Object.prototype.hasOwnProperty,Uf={current:null},i_={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)r_.call(e,r)&&!i_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:Uf.current}}function MS(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function VS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fg=/\/+/g;function ah(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VS(""+t.key):e.toString(36)}function Cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case AS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ah(o,0):r,Vg(i)?(n="",t!=null&&(n=t.replace(Fg,"$&/")+"/"),Cl(i,e,n,"",function(c){return c})):i!=null&&(zf(i)&&(i=MS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ah(s,l);o+=Cl(s,e,n,u,i)}else if(u=LS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ah(s,l++),o+=Cl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mt={current:null},xl={transition:null},jS={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Uf};function o_(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Os;ie.Fragment=CS;ie.Profiler=PS;ie.PureComponent=Ff;ie.StrictMode=xS;ie.Suspense=NS;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;ie.act=o_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=e_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)r_.call(e,u)&&!i_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:RS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kS,_context:t},t.Consumer=t};ie.createElement=s_;ie.createFactory=function(t){var e=s_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:bS,render:t}};ie.isValidElement=zf;ie.lazy=function(t){return{$$typeof:DS,_payload:{_status:-1,_result:t},_init:FS}};ie.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};ie.unstable_act=o_;ie.useCallback=function(t,e){return mt.current.useCallback(t,e)};ie.useContext=function(t){return mt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return mt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return mt.current.useEffect(t,e)};ie.useId=function(){return mt.current.useId()};ie.useImperativeHandle=function(t,e,n){return mt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return mt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return mt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return mt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return mt.current.useReducer(t,e,n)};ie.useRef=function(t){return mt.current.useRef(t)};ie.useState=function(t){return mt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return mt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return mt.current.useTransition()};ie.version="18.3.1";J0.exports=ie;var M=J0.exports;const Bf=Y0(M),US=SS({__proto__:null,default:Bf},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=M,BS=Symbol.for("react.element"),$S=Symbol.for("react.fragment"),WS=Object.prototype.hasOwnProperty,HS=zS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qS={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WS.call(e,r)&&!qS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BS,type:t,key:s,ref:o,props:i,_owner:HS.current}}qu.Fragment=$S;qu.jsx=a_;qu.jsxs=a_;X0.exports=qu;var g=X0.exports,l_={exports:{}},Ot={},u_={exports:{}},c_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ne=$.length;$.push(X);e:for(;0<ne;){var B=ne-1>>>1,J=$[B];if(0<i(J,X))$[B]=X,$[ne]=J,ne=B;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ne=$.pop();if(ne!==X){$[0]=ne;e:for(var B=0,J=$.length,G=J>>>1;B<G;){var ce=2*(B+1)-1,fe=$[ce],Le=ce+1,Xe=$[Le];if(0>i(fe,ne))Le<J&&0>i(Xe,fe)?($[B]=Xe,$[Le]=ne,B=Le):($[B]=fe,$[ce]=ne,B=ce);else if(Le<J&&0>i(Xe,ne))$[B]=Xe,$[Le]=ne,B=Le;else break e}}return X}function i($,X){var ne=$.sortIndex-X.sortIndex;return ne!==0?ne:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,A=!1,P=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function b($){if(k=!1,w($),!P)if(n(u)!==null)P=!0,sn(L);else{var X=n(c);X!==null&&Ht(b,X.startTime-$)}}function L($,X){P=!1,k&&(k=!1,I(v),v=-1),A=!0;var ne=m;try{for(w(X),p=n(u);p!==null&&(!(p.expirationTime>X)||$&&!x());){var B=p.callback;if(typeof B=="function"){p.callback=null,m=p.priorityLevel;var J=B(p.expirationTime<=X);X=t.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),w(X)}else r(u);p=n(u)}if(p!==null)var G=!0;else{var ce=n(c);ce!==null&&Ht(b,ce.startTime-X),G=!1}return G}finally{p=null,m=ne,A=!1}}var F=!1,E=null,v=-1,S=5,T=-1;function x(){return!(t.unstable_now()-T<S)}function N(){if(E!==null){var $=t.unstable_now();T=$;var X=!0;try{X=E(!0,$)}finally{X?C():(F=!1,E=null)}}else F=!1}var C;if(typeof _=="function")C=function(){_(N)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,In=ct.port2;ct.port1.onmessage=N,C=function(){In.postMessage(null)}}else C=function(){R(N,0)};function sn($){E=$,F||(F=!0,C())}function Ht($,X){v=R(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,sn(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ne=m;m=X;try{return $()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=m;m=$;try{return X()}finally{m=ne}},t.unstable_scheduleCallback=function($,X,ne){var B=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?B+ne:B):ne=B,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ne+J,$={id:d++,callback:X,priorityLevel:$,startTime:ne,expirationTime:J,sortIndex:-1},ne>B?($.sortIndex=ne,e(c,$),n(u)===null&&$===n(c)&&(k?(I(v),v=-1):k=!0,Ht(b,ne-B))):($.sortIndex=J,e(u,$),P||A||(P=!0,sn(L))),$},t.unstable_shouldYield=x,t.unstable_wrapCallback=function($){var X=m;return function(){var ne=m;m=X;try{return $.apply(this,arguments)}finally{m=ne}}}})(c_);u_.exports=c_;var KS=u_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GS=M,Nt=KS;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h_=new Set,zo={};function Ei(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(zo[t]=e,t=0;t<e.length;t++)h_.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,QS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jg={},Ug={};function YS(t){return ed.call(Ug,t)?!0:ed.call(jg,t)?!1:QS.test(t)?Ug[t]=!0:(jg[t]=!0,!1)}function XS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JS(t,e,n,r){if(e===null||typeof e>"u"||XS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $f=/[\-:]([a-z])/g;function Wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($f,Wf);Qe[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($f,Wf);Qe[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($f,Wf);Qe[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(JS(e,n,i,r)&&(n=null),r||i===null?YS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=GS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),d_=Symbol.for("react.provider"),f_=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),p_=Symbol.for("react.offscreen"),zg=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=zg&&t[zg]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,lh;function ho(t){if(lh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lh=e&&e[1]||""}return`
`+lh+t}var uh=!1;function ch(t,e){if(!t||uh)return"";uh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{uh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function ZS(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=ch(t.type,!1),t;case 11:return t=ch(t.type.render,!1),t;case 1:return t=ch(t.type,!0),t;default:return""}}function id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Bi:return"Portal";case td:return"Profiler";case qf:return"StrictMode";case nd:return"Suspense";case rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f_:return(t.displayName||"Context")+".Consumer";case d_:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:id(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return id(t(e))}catch{}}return null}function eA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return id(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tA(t){var e=m_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=tA(t))}function g_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=m_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function y_(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function od(t,e){y_(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&ad(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $g(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ad(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(fo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function v_(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function __(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?__(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,w_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nA=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){nA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function E_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function T_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=E_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rA=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(t,e){if(e){if(rA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fd=null,is=null,ss=null;function qg(t){if(t=Sa(t)){if(typeof fd!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Xu(e),fd(t.stateNode,t.type,e))}}function I_(t){is?ss?ss.push(t):ss=[t]:is=t}function S_(){if(is){var t=is,e=ss;if(ss=is=null,qg(t),e)for(t=0;t<e.length;t++)qg(e[t])}}function A_(t,e){return t(e)}function C_(){}var hh=!1;function x_(t,e,n){if(hh)return t(e,n);hh=!0;try{return A_(t,e,n)}finally{hh=!1,(is!==null||ss!==null)&&(C_(),S_())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var pd=!1;if(Fn)try{var io={};Object.defineProperty(io,"passive",{get:function(){pd=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{pd=!1}function iA(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ao=!1,Xl=null,Jl=!1,md=null,sA={onError:function(t){Ao=!0,Xl=t}};function oA(t,e,n,r,i,s,o,l,u){Ao=!1,Xl=null,iA.apply(sA,arguments)}function aA(t,e,n,r,i,s,o,l,u){if(oA.apply(this,arguments),Ao){if(Ao){var c=Xl;Ao=!1,Xl=null}else throw Error(U(198));Jl||(Jl=!0,md=c)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kg(t){if(Ti(t)!==t)throw Error(U(188))}function lA(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kg(i),t;if(s===r)return Kg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function k_(t){return t=lA(t),t!==null?R_(t):null}function R_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R_(t);if(e!==null)return e;t=t.sibling}return null}var b_=Nt.unstable_scheduleCallback,Gg=Nt.unstable_cancelCallback,uA=Nt.unstable_shouldYield,cA=Nt.unstable_requestPaint,Ne=Nt.unstable_now,hA=Nt.unstable_getCurrentPriorityLevel,Yf=Nt.unstable_ImmediatePriority,N_=Nt.unstable_UserBlockingPriority,Zl=Nt.unstable_NormalPriority,dA=Nt.unstable_LowPriority,O_=Nt.unstable_IdlePriority,Ku=null,fn=null;function fA(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:gA,pA=Math.log,mA=Math.LN2;function gA(t){return t>>>=0,t===0?32:31-(pA(t)/mA|0)|0}var al=64,ll=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=po(l):(s&=o,s!==0&&(r=po(s)))}else o=n&~i,o!==0?r=po(o):s!==0&&(r=po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function yA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=yA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function D_(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function _A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function L_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M_,Jf,V_,F_,j_,yd=!1,ul=[],gr=null,yr=null,vr=null,Wo=new Map,Ho=new Map,sr=[],wA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&Jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function EA(t,e,n,r,i){switch(e){case"focusin":return gr=so(gr,t,e,n,r,i),!0;case"dragenter":return yr=so(yr,t,e,n,r,i),!0;case"mouseover":return vr=so(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,so(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,so(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function U_(t){var e=Zr(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=P_(n),e!==null){t.blockedOn=e,j_(t.priority,function(){V_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dd=r,n.target.dispatchEvent(r),dd=null}else return e=Sa(n),e!==null&&Jf(e),t.blockedOn=n,!1;e.shift()}return!0}function Yg(t,e,n){Pl(t)&&n.delete(e)}function TA(){yd=!1,gr!==null&&Pl(gr)&&(gr=null),yr!==null&&Pl(yr)&&(yr=null),vr!==null&&Pl(vr)&&(vr=null),Wo.forEach(Yg),Ho.forEach(Yg)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,yd||(yd=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,TA)))}function qo(t){function e(i){return oo(i,t)}if(0<ul.length){oo(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&oo(gr,t),yr!==null&&oo(yr,t),vr!==null&&oo(vr,t),Wo.forEach(e),Ho.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)U_(n),n.blockedOn===null&&sr.shift()}var os=Gn.ReactCurrentBatchConfig,tu=!0;function IA(t,e,n,r){var i=pe,s=os.transition;os.transition=null;try{pe=1,Zf(t,e,n,r)}finally{pe=i,os.transition=s}}function SA(t,e,n,r){var i=pe,s=os.transition;os.transition=null;try{pe=4,Zf(t,e,n,r)}finally{pe=i,os.transition=s}}function Zf(t,e,n,r){if(tu){var i=vd(t,e,n,r);if(i===null)Th(t,e,r,nu,n),Qg(t,r);else if(EA(i,t,e,n,r))r.stopPropagation();else if(Qg(t,r),e&4&&-1<wA.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&M_(s),s=vd(t,e,n,r),s===null&&Th(t,e,r,nu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Th(t,e,r,null,n)}}var nu=null;function vd(t,e,n,r){if(nu=null,t=Qf(r),t=Zr(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function z_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hA()){case Yf:return 1;case N_:return 4;case Zl:case dA:return 16;case O_:return 536870912;default:return 16}default:return 16}}var hr=null,ep=null,kl=null;function B_(){if(kl)return kl;var t,e=ep,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function Xg(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:Xg,this.isPropagationStopped=Xg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=Dt(Ds),Ia=Ae({},Ds,{view:0,detail:0}),AA=Dt(Ia),fh,ph,ao,Gu=Ae({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(fh=t.screenX-ao.screenX,ph=t.screenY-ao.screenY):ph=fh=0,ao=t),fh)},movementY:function(t){return"movementY"in t?t.movementY:ph}}),Jg=Dt(Gu),CA=Ae({},Gu,{dataTransfer:0}),xA=Dt(CA),PA=Ae({},Ia,{relatedTarget:0}),mh=Dt(PA),kA=Ae({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),RA=Dt(kA),bA=Ae({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NA=Dt(bA),OA=Ae({},Ds,{data:0}),Zg=Dt(OA),DA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MA[t])?!!e[t]:!1}function np(){return VA}var FA=Ae({},Ia,{key:function(t){if(t.key){var e=DA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jA=Dt(FA),UA=Ae({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ey=Dt(UA),zA=Ae({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),BA=Dt(zA),$A=Ae({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),WA=Dt($A),HA=Ae({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qA=Dt(HA),KA=[9,13,27,32],rp=Fn&&"CompositionEvent"in window,Co=null;Fn&&"documentMode"in document&&(Co=document.documentMode);var GA=Fn&&"TextEvent"in window&&!Co,$_=Fn&&(!rp||Co&&8<Co&&11>=Co),ty=" ",ny=!1;function W_(t,e){switch(t){case"keyup":return KA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function QA(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(ny=!0,ty);case"textInput":return t=e.data,t===ty&&ny?null:t;default:return null}}function YA(t,e){if(Wi)return t==="compositionend"||!rp&&W_(t,e)?(t=B_(),kl=ep=hr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $_&&e.locale!=="ko"?null:e.data;default:return null}}var XA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ry(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XA[t.type]:e==="textarea"}function q_(t,e,n,r){I_(r),e=ru(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Ko=null;function JA(t){rw(t,0)}function Qu(t){var e=Ki(t);if(g_(e))return t}function ZA(t,e){if(t==="change")return e}var K_=!1;if(Fn){var gh;if(Fn){var yh="oninput"in document;if(!yh){var iy=document.createElement("div");iy.setAttribute("oninput","return;"),yh=typeof iy.oninput=="function"}gh=yh}else gh=!1;K_=gh&&(!document.documentMode||9<document.documentMode)}function sy(){xo&&(xo.detachEvent("onpropertychange",G_),Ko=xo=null)}function G_(t){if(t.propertyName==="value"&&Qu(Ko)){var e=[];q_(e,Ko,t,Qf(t)),x_(JA,e)}}function eC(t,e,n){t==="focusin"?(sy(),xo=e,Ko=n,xo.attachEvent("onpropertychange",G_)):t==="focusout"&&sy()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(Ko)}function nC(t,e){if(t==="click")return Qu(e)}function rC(t,e){if(t==="input"||t==="change")return Qu(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:iC;function Go(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ed.call(e,i)||!en(t[i],e[i]))return!1}return!0}function oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ay(t,e){var n=oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oy(n)}}function Q_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Q_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Y_(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sC(t){var e=Y_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Q_(n.ownerDocument.documentElement,n)){if(r!==null&&ip(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ay(n,s);var o=ay(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oC=Fn&&"documentMode"in document&&11>=document.documentMode,Hi=null,_d=null,Po=null,wd=!1;function ly(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wd||Hi==null||Hi!==Yl(r)||(r=Hi,"selectionStart"in r&&ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Go(Po,r)||(Po=r,r=ru(_d,"onSelect"),0<r.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},vh={},X_={};Fn&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Yu(t){if(vh[t])return vh[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X_)return vh[t]=e[n];return t}var J_=Yu("animationend"),Z_=Yu("animationiteration"),ew=Yu("animationstart"),tw=Yu("transitionend"),nw=new Map,uy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){nw.set(t,e),Ei(e,[t])}for(var _h=0;_h<uy.length;_h++){var wh=uy[_h],aC=wh.toLowerCase(),lC=wh[0].toUpperCase()+wh.slice(1);jr(aC,"on"+lC)}jr(J_,"onAnimationEnd");jr(Z_,"onAnimationIteration");jr(ew,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(tw,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uC=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function cy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aA(r,e,void 0,t),t.currentTarget=null}function rw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;cy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;cy(i,l,c),s=u}}}if(Jl)throw t=md,Jl=!1,md=null,t}function ve(t,e){var n=e[Ad];n===void 0&&(n=e[Ad]=new Set);var r=t+"__bubble";n.has(r)||(iw(e,t,2,!1),n.add(r))}function Eh(t,e,n){var r=0;e&&(r|=4),iw(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[dl]){t[dl]=!0,h_.forEach(function(n){n!=="selectionchange"&&(uC.has(n)||Eh(n,!1,t),Eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Eh("selectionchange",!1,e))}}function iw(t,e,n,r){switch(z_(e)){case 1:var i=IA;break;case 4:i=SA;break;default:i=Zf}n=i.bind(null,e,n,t),i=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Zr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}x_(function(){var c=s,d=Qf(n),p=[];e:{var m=nw.get(t);if(m!==void 0){var A=tp,P=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":A=jA;break;case"focusin":P="focus",A=mh;break;case"focusout":P="blur",A=mh;break;case"beforeblur":case"afterblur":A=mh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=BA;break;case J_:case Z_:case ew:A=RA;break;case tw:A=WA;break;case"scroll":A=AA;break;case"wheel":A=qA;break;case"copy":case"cut":case"paste":A=NA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=ey}var k=(e&4)!==0,R=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,w;_!==null;){w=_;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,I!==null&&(b=$o(_,I),b!=null&&k.push(Yo(_,b,w)))),R)break;_=_.return}0<k.length&&(m=new A(m,P,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==dd&&(P=n.relatedTarget||n.fromElement)&&(Zr(P)||P[jn]))break e;if((A||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=c,P=P?Zr(P):null,P!==null&&(R=Ti(P),P!==R||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=c),A!==P)){if(k=Jg,b="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=ey,b="onPointerLeave",I="onPointerEnter",_="pointer"),R=A==null?m:Ki(A),w=P==null?m:Ki(P),m=new k(b,_+"leave",A,n,d),m.target=R,m.relatedTarget=w,b=null,Zr(d)===c&&(k=new k(I,_+"enter",P,n,d),k.target=w,k.relatedTarget=R,b=k),R=b,A&&P)t:{for(k=A,I=P,_=0,w=k;w;w=Mi(w))_++;for(w=0,b=I;b;b=Mi(b))w++;for(;0<_-w;)k=Mi(k),_--;for(;0<w-_;)I=Mi(I),w--;for(;_--;){if(k===I||I!==null&&k===I.alternate)break t;k=Mi(k),I=Mi(I)}k=null}else k=null;A!==null&&hy(p,m,A,k,!1),P!==null&&R!==null&&hy(p,R,P,k,!0)}}e:{if(m=c?Ki(c):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var L=ZA;else if(ry(m))if(K_)L=rC;else{L=tC;var F=eC}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=nC);if(L&&(L=L(t,c))){q_(p,L,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&ad(m,"number",m.value)}switch(F=c?Ki(c):window,t){case"focusin":(ry(F)||F.contentEditable==="true")&&(Hi=F,_d=c,Po=null);break;case"focusout":Po=_d=Hi=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,ly(p,n,d);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":ly(p,n,d)}var E;if(rp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wi?W_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&($_&&n.locale!=="ko"&&(Wi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Wi&&(E=B_()):(hr=d,ep="value"in hr?hr.value:hr.textContent,Wi=!0)),F=ru(c,v),0<F.length&&(v=new Zg(v,t,null,n,d),p.push({event:v,listeners:F}),E?v.data=E:(E=H_(n),E!==null&&(v.data=E)))),(E=GA?QA(t,n):YA(t,n))&&(c=ru(c,"onBeforeInput"),0<c.length&&(d=new Zg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}rw(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$o(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=$o(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=$o(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=$o(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cC=/\r\n?/g,hC=/\u0000|\uFFFD/g;function dy(t){return(typeof t=="string"?t:""+t).replace(cC,`
`).replace(hC,"")}function fl(t,e,n){if(e=dy(e),dy(t)!==e&&n)throw Error(U(425))}function iu(){}var Ed=null,Td=null;function Id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,dC=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(t){return fy.resolve(null).then(t).catch(pC)}:Sd;function pC(t){setTimeout(function(){throw t})}function Ih(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function py(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),un="__reactFiber$"+Ls,Xo="__reactProps$"+Ls,jn="__reactContainer$"+Ls,Ad="__reactEvents$"+Ls,mC="__reactListeners$"+Ls,gC="__reactHandles$"+Ls;function Zr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=py(t);t!==null;){if(n=t[un])return n;t=py(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[un]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Xu(t){return t[Xo]||null}var Cd=[],Gi=-1;function Ur(t){return{current:t}}function _e(t){0>Gi||(t.current=Cd[Gi],Cd[Gi]=null,Gi--)}function ge(t,e){Gi++,Cd[Gi]=t.current,t.current=e}var Rr={},at=Ur(Rr),wt=Ur(!1),ui=Rr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function su(){_e(wt),_e(at)}function my(t,e,n){if(at.current!==Rr)throw Error(U(168));ge(at,e),ge(wt,n)}function sw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,eA(t)||"Unknown",i));return Ae({},n,r)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ui=at.current,ge(at,t),ge(wt,wt.current),!0}function gy(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=sw(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,_e(wt),_e(at),ge(at,t)):_e(wt),ge(wt,n)}var xn=null,Ju=!1,Sh=!1;function ow(t){xn===null?xn=[t]:xn.push(t)}function yC(t){Ju=!0,ow(t)}function zr(){if(!Sh&&xn!==null){Sh=!0;var t=0,e=pe;try{var n=xn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Ju=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),b_(Yf,zr),i}finally{pe=e,Sh=!1}}return null}var Qi=[],Yi=0,au=null,lu=0,Vt=[],Ft=0,ci=null,Pn=1,kn="";function Qr(t,e){Qi[Yi++]=lu,Qi[Yi++]=au,au=t,lu=e}function aw(t,e,n){Vt[Ft++]=Pn,Vt[Ft++]=kn,Vt[Ft++]=ci,ci=t;var r=Pn;t=kn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Jt(e)+i|n<<i|r,kn=s+t}else Pn=1<<s|n<<i|r,kn=t}function sp(t){t.return!==null&&(Qr(t,1),aw(t,1,0))}function op(t){for(;t===au;)au=Qi[--Yi],Qi[Yi]=null,lu=Qi[--Yi],Qi[Yi]=null;for(;t===ci;)ci=Vt[--Ft],Vt[Ft]=null,kn=Vt[--Ft],Vt[Ft]=null,Pn=Vt[--Ft],Vt[Ft]=null}var xt=null,Ct=null,Ee=!1,Yt=null;function lw(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,Ct=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:Pn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,Ct=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(Ee){var e=Ct;if(e){var n=e;if(!yy(t,e)){if(xd(t))throw Error(U(418));e=_r(n.nextSibling);var r=xt;e&&yy(t,e)?lw(r,n):(t.flags=t.flags&-4097|2,Ee=!1,xt=t)}}else{if(xd(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ee=!1,xt=t}}}function vy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function pl(t){if(t!==xt)return!1;if(!Ee)return vy(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Id(t.type,t.memoizedProps)),e&&(e=Ct)){if(xd(t))throw uw(),Error(U(418));for(;e;)lw(t,e),e=_r(e.nextSibling)}if(vy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=xt?_r(t.stateNode.nextSibling):null;return!0}function uw(){for(var t=Ct;t;)t=_r(t.nextSibling)}function ys(){Ct=xt=null,Ee=!1}function ap(t){Yt===null?Yt=[t]:Yt.push(t)}var vC=Gn.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _y(t){var e=t._init;return e(t._payload)}function cw(t){function e(I,_){if(t){var w=I.deletions;w===null?(I.deletions=[_],I.flags|=16):w.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Ir(I,_),I.index=0,I.sibling=null,I}function s(I,_,w){return I.index=w,t?(w=I.alternate,w!==null?(w=w.index,w<_?(I.flags|=2,_):w):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,w,b){return _===null||_.tag!==6?(_=bh(w,I.mode,b),_.return=I,_):(_=i(_,w),_.return=I,_)}function u(I,_,w,b){var L=w.type;return L===$i?d(I,_,w.props.children,b,w.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rr&&_y(L)===_.type)?(b=i(_,w.props),b.ref=lo(I,_,w),b.return=I,b):(b=Vl(w.type,w.key,w.props,null,I.mode,b),b.ref=lo(I,_,w),b.return=I,b)}function c(I,_,w,b){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=Nh(w,I.mode,b),_.return=I,_):(_=i(_,w.children||[]),_.return=I,_)}function d(I,_,w,b,L){return _===null||_.tag!==7?(_=si(w,I.mode,b,L),_.return=I,_):(_=i(_,w),_.return=I,_)}function p(I,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=bh(""+_,I.mode,w),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case il:return w=Vl(_.type,_.key,_.props,null,I.mode,w),w.ref=lo(I,null,_),w.return=I,w;case Bi:return _=Nh(_,I.mode,w),_.return=I,_;case rr:var b=_._init;return p(I,b(_._payload),w)}if(fo(_)||ro(_))return _=si(_,I.mode,w,null),_.return=I,_;ml(I,_)}return null}function m(I,_,w,b){var L=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:l(I,_,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case il:return w.key===L?u(I,_,w,b):null;case Bi:return w.key===L?c(I,_,w,b):null;case rr:return L=w._init,m(I,_,L(w._payload),b)}if(fo(w)||ro(w))return L!==null?null:d(I,_,w,b,null);ml(I,w)}return null}function A(I,_,w,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(w)||null,l(_,I,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case il:return I=I.get(b.key===null?w:b.key)||null,u(_,I,b,L);case Bi:return I=I.get(b.key===null?w:b.key)||null,c(_,I,b,L);case rr:var F=b._init;return A(I,_,w,F(b._payload),L)}if(fo(b)||ro(b))return I=I.get(w)||null,d(_,I,b,L,null);ml(_,b)}return null}function P(I,_,w,b){for(var L=null,F=null,E=_,v=_=0,S=null;E!==null&&v<w.length;v++){E.index>v?(S=E,E=null):S=E.sibling;var T=m(I,E,w[v],b);if(T===null){E===null&&(E=S);break}t&&E&&T.alternate===null&&e(I,E),_=s(T,_,v),F===null?L=T:F.sibling=T,F=T,E=S}if(v===w.length)return n(I,E),Ee&&Qr(I,v),L;if(E===null){for(;v<w.length;v++)E=p(I,w[v],b),E!==null&&(_=s(E,_,v),F===null?L=E:F.sibling=E,F=E);return Ee&&Qr(I,v),L}for(E=r(I,E);v<w.length;v++)S=A(E,I,v,w[v],b),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),F===null?L=S:F.sibling=S,F=S);return t&&E.forEach(function(x){return e(I,x)}),Ee&&Qr(I,v),L}function k(I,_,w,b){var L=ro(w);if(typeof L!="function")throw Error(U(150));if(w=L.call(w),w==null)throw Error(U(151));for(var F=L=null,E=_,v=_=0,S=null,T=w.next();E!==null&&!T.done;v++,T=w.next()){E.index>v?(S=E,E=null):S=E.sibling;var x=m(I,E,T.value,b);if(x===null){E===null&&(E=S);break}t&&E&&x.alternate===null&&e(I,E),_=s(x,_,v),F===null?L=x:F.sibling=x,F=x,E=S}if(T.done)return n(I,E),Ee&&Qr(I,v),L;if(E===null){for(;!T.done;v++,T=w.next())T=p(I,T.value,b),T!==null&&(_=s(T,_,v),F===null?L=T:F.sibling=T,F=T);return Ee&&Qr(I,v),L}for(E=r(I,E);!T.done;v++,T=w.next())T=A(E,I,v,T.value,b),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),_=s(T,_,v),F===null?L=T:F.sibling=T,F=T);return t&&E.forEach(function(N){return e(I,N)}),Ee&&Qr(I,v),L}function R(I,_,w,b){if(typeof w=="object"&&w!==null&&w.type===$i&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case il:e:{for(var L=w.key,F=_;F!==null;){if(F.key===L){if(L=w.type,L===$i){if(F.tag===7){n(I,F.sibling),_=i(F,w.props.children),_.return=I,I=_;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rr&&_y(L)===F.type){n(I,F.sibling),_=i(F,w.props),_.ref=lo(I,F,w),_.return=I,I=_;break e}n(I,F);break}else e(I,F);F=F.sibling}w.type===$i?(_=si(w.props.children,I.mode,b,w.key),_.return=I,I=_):(b=Vl(w.type,w.key,w.props,null,I.mode,b),b.ref=lo(I,_,w),b.return=I,I=b)}return o(I);case Bi:e:{for(F=w.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(I,_.sibling),_=i(_,w.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Nh(w,I.mode,b),_.return=I,I=_}return o(I);case rr:return F=w._init,R(I,_,F(w._payload),b)}if(fo(w))return P(I,_,w,b);if(ro(w))return k(I,_,w,b);ml(I,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,w),_.return=I,I=_):(n(I,_),_=bh(w,I.mode,b),_.return=I,I=_),o(I)):n(I,_)}return R}var vs=cw(!0),hw=cw(!1),uu=Ur(null),cu=null,Xi=null,lp=null;function up(){lp=Xi=cu=null}function cp(t){var e=uu.current;_e(uu),t._currentValue=e}function kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){cu=t,lp=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(cu===null)throw Error(U(308));Xi=t,cu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var ei=null;function hp(t){ei===null?ei=[t]:ei.push(t)}function dw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,hp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}function wy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,k=l;switch(m=e,A=n,k.tag){case 1:if(P=k.payload,typeof P=="function"){p=P.call(A,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=k.payload,m=typeof P=="function"?P.call(A,p,m):P,m==null)break e;p=Ae({},p,m);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=A,u=p):d=d.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=p}}function Ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Aa={},pn=Ur(Aa),Jo=Ur(Aa),Zo=Ur(Aa);function ti(t){if(t===Aa)throw Error(U(174));return t}function fp(t,e){switch(ge(Zo,e),ge(Jo,t),ge(pn,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ud(e,t)}_e(pn),ge(pn,e)}function _s(){_e(pn),_e(Jo),_e(Zo)}function pw(t){ti(Zo.current);var e=ti(pn.current),n=ud(e,t.type);e!==n&&(ge(Jo,t),ge(pn,n))}function pp(t){Jo.current===t&&(_e(pn),_e(Jo))}var Ie=Ur(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ah=[];function mp(){for(var t=0;t<Ah.length;t++)Ah[t]._workInProgressVersionPrimary=null;Ah.length=0}var Nl=Gn.ReactCurrentDispatcher,Ch=Gn.ReactCurrentBatchConfig,hi=0,Se=null,Me=null,ze=null,fu=!1,ko=!1,ea=0,_C=0;function tt(){throw Error(U(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function yp(t,e,n,r,i,s){if(hi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?IC:SC,t=n(r,i),ko){s=0;do{if(ko=!1,ea=0,25<=s)throw Error(U(301));s+=1,ze=Me=null,e.updateQueue=null,Nl.current=AC,t=n(r,i)}while(ko)}if(Nl.current=pu,e=Me!==null&&Me.next!==null,hi=0,ze=Me=Se=null,fu=!1,e)throw Error(U(300));return t}function vp(){var t=ea!==0;return ea=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Se.memoizedState=ze=t:ze=ze.next=t,ze}function Wt(){if(Me===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?Se.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(U(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?Se.memoizedState=ze=t:ze=ze.next=t}return ze}function ta(t,e){return typeof e=="function"?e(t):e}function xh(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((hi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=d,di|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,en(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,di|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ph(t){var e=Wt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function mw(){}function gw(t,e){var n=Se,r=Wt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,_p(_w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,na(9,vw.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(U(349));hi&30||yw(n,e,i)}return i}function yw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vw(t,e,n,r){e.value=n,e.getSnapshot=r,ww(e)&&Ew(t)}function _w(t,e,n){return n(function(){ww(e)&&Ew(t)})}function ww(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Ew(t){var e=Un(t,1);e!==null&&Zt(e,t,1,-1)}function Ty(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=TC.bind(null,Se,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Tw(){return Wt().memoizedState}function Ol(t,e,n,r){var i=an();Se.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&gp(r,o.deps)){i.memoizedState=na(e,n,s,r);return}}Se.flags|=t,i.memoizedState=na(1|e,n,s,r)}function Iy(t,e){return Ol(8390656,8,t,e)}function _p(t,e){return Zu(2048,8,t,e)}function Iw(t,e){return Zu(4,2,t,e)}function Sw(t,e){return Zu(4,4,t,e)}function Aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cw(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,Aw.bind(null,e,t),n)}function wp(){}function xw(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pw(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kw(t,e,n){return hi&21?(en(n,e)||(n=D_(),Se.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function wC(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Ch.transition;Ch.transition={};try{t(!1),e()}finally{pe=n,Ch.transition=r}}function Rw(){return Wt().memoizedState}function EC(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bw(t))Nw(e,n);else if(n=dw(t,e,n,r),n!==null){var i=pt();Zt(n,t,r,i),Ow(n,e,r)}}function TC(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bw(t))Nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(i.next=i,hp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=dw(t,e,i,r),n!==null&&(i=pt(),Zt(n,t,r,i),Ow(n,e,r))}}function bw(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function Nw(t,e){ko=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ow(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xf(t,n)}}var pu={readContext:$t,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},IC={readContext:$t,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Iy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,Aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Ty,useDebugValue:wp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Ty(!1),e=t[0];return t=wC.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=an();if(Ee){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));hi&30||yw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Iy(_w.bind(null,r,s,t),[t]),r.flags|=2048,na(9,vw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Be.identifierPrefix;if(Ee){var n=kn,r=Pn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_C++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SC={readContext:$t,useCallback:xw,useContext:$t,useEffect:_p,useImperativeHandle:Cw,useInsertionEffect:Iw,useLayoutEffect:Sw,useMemo:Pw,useReducer:xh,useRef:Tw,useState:function(){return xh(ta)},useDebugValue:wp,useDeferredValue:function(t){var e=Wt();return kw(e,Me.memoizedState,t)},useTransition:function(){var t=xh(ta)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:mw,useSyncExternalStore:gw,useId:Rw,unstable_isNewReconciler:!1},AC={readContext:$t,useCallback:xw,useContext:$t,useEffect:_p,useImperativeHandle:Cw,useInsertionEffect:Iw,useLayoutEffect:Sw,useMemo:Pw,useReducer:Ph,useRef:Tw,useState:function(){return Ph(ta)},useDebugValue:wp,useDeferredValue:function(t){var e=Wt();return Me===null?e.memoizedState=t:kw(e,Me.memoizedState,t)},useTransition:function(){var t=Ph(ta)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:mw,useSyncExternalStore:gw,useId:Rw,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Tr(t),s=On(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Zt(e,t,i,r),bl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=Tr(t),s=On(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(Zt(e,t,i,r),bl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=Tr(t),i=On(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(Zt(e,t,r,n),bl(e,t,r))}};function Sy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function Dw(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=Et(e)?ui:at.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ay(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function bd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=Et(e)?ui:at.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ec.enqueueReplaceState(i,i.state,null),hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=ZS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function Lw(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gu||(gu=!0,Bd=r),Nd(t,e)},n}function Mw(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UC.bind(null,t,e,n),e.then(t,t))}function xy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var xC=Gn.ReactCurrentOwner,_t=!1;function ft(t,e,n,r){e.child=t===null?hw(e,null,n,r):vs(e,t.child,n,r)}function ky(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=yp(t,e,n,r,s,i),n=vp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Ee&&n&&sp(e),e.flags|=1,ft(t,e,r,i),e.child)}function Ry(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vw(t,e,s,r,i)):(t=Vl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=Ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function Vw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,zn(t,e,i)}return Od(t,e,n,r,i)}function Fw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Zi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Zi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Zi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Zi,At),At|=r;return ft(t,e,i,n),e.child}function jw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,r,i){var s=Et(n)?ui:at.current;return s=gs(e,s),as(e,i),n=yp(t,e,n,r,s,i),r=vp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(Ee&&r&&sp(e),e.flags|=1,ft(t,e,n,i),e.child)}function by(t,e,n,r,i){if(Et(n)){var s=!0;ou(e)}else s=!1;if(as(e,i),e.stateNode===null)Dl(t,e),Dw(e,n,r),bd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=Et(n)?ui:at.current,c=gs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ay(e,o,r,c),ir=!1;var m=e.memoizedState;o.state=m,hu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||wt.current||ir?(typeof d=="function"&&(Rd(e,n,d,r),u=e.memoizedState),(l=ir||Sy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,fw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Gt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=Et(n)?ui:at.current,u=gs(e,u));var A=n.getDerivedStateFromProps;(d=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ay(e,o,r,u),ir=!1,m=e.memoizedState,o.state=m,hu(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||wt.current||ir?(typeof A=="function"&&(Rd(e,n,A,r),P=e.memoizedState),(c=ir||Sy(e,n,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Dd(t,e,n,r,s,i)}function Dd(t,e,n,r,i,s){jw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gy(e,n,!1),zn(t,e,s);r=e.stateNode,xC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&gy(e,n,!0),e.child}function Uw(t){var e=t.stateNode;e.pendingContext?my(t,e.pendingContext,e.pendingContext!==e.context):e.context&&my(t,e.context,!1),fp(t,e.containerInfo)}function Ny(t,e,n,r,i){return ys(),ap(i),e.flags|=256,ft(t,e,n,r),e.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function zw(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ie,i&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Ld,t):Ep(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return PC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ld,r}return s=t.child,t=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ep(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&ap(r),vs(e,t.child,null,n),t=Ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kh(Error(U(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=Ld,s);if(!(e.mode&1))return gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=kh(s,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Zt(r,t,i,-1))}return xp(),r=kh(Error(U(421))),gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=_r(i.nextSibling),xt=e,Ee=!0,Yt=null,t!==null&&(Vt[Ft++]=Pn,Vt[Ft++]=kn,Vt[Ft++]=ci,Pn=t.id,kn=t.overflow,ci=e),e=Ep(e,r.children),e.flags|=4096,e)}function Oy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kd(t.return,e,n)}function Rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oy(t,n,e);else if(t.tag===19)Oy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rh(e,!0,n,null,s);break;case"together":Rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kC(t,e,n){switch(e.tag){case 3:Uw(e),ys();break;case 5:pw(e);break;case 1:Et(e.type)&&ou(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(uu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?zw(t,e,n):(ge(Ie,Ie.current&1),t=zn(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Fw(t,e,n)}return zn(t,e,n)}var $w,Vd,Ww,Hw;$w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};Ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ti(pn.current);var s=null;switch(n){case"input":i=sd(t,i),r=sd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=ld(t,i),r=ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}cd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hw=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RC(t,e,n){var r=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Et(e.type)&&su(),nt(e),null;case 3:return r=e.stateNode,_s(),_e(wt),_e(at),mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Hd(Yt),Yt=null))),Vd(t,e),nt(e),null;case 5:pp(e);var i=ti(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return nt(e),null}if(t=ti(pn.current),pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)ve(mo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Bg(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Wg(r,s),ve("invalid",r)}cd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),i=["children",""+l]):zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":sl(r),$g(r,s,!0);break;case"textarea":sl(r),Hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=__(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Xo]=r,$w(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)ve(mo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Bg(t,r),i=sd(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Wg(t,r),i=ld(t,r),ve("invalid",t);break;default:i=r}cd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?T_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&w_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bo(t,u):typeof u=="number"&&Bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&Hf(t,s,u,o))}switch(n){case"input":sl(t),$g(t,r,!1);break;case"textarea":sl(t),Hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)Hw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ti(Zo.current),ti(pn.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return nt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))uw(),ys(),e.flags|=98560,s=!1;else if(s=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[un]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Yt!==null&&(Hd(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):xp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return _s(),Vd(t,e),t===null&&Qo(e.stateNode.containerInfo),nt(e),null;case 10:return cp(e.type._context),nt(e),null;case 17:return Et(e.type)&&su(),nt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Es&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return nt(e),null}else 2*Ne()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return Cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function bC(t,e){switch(op(e),e.tag){case 1:return Et(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),_e(wt),_e(at),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return _s(),null;case 10:return cp(e.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var yl=!1,st=!1,NC=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Fd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Dy=!1;function OC(t,e){if(Ed=tu,t=Y_(),ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},tu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var k=P.memoizedProps,R=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Gt(e.type,k),R);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Pe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=Dy,Dy=!1,P}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qw(t){var e=t.alternate;e!==null&&(t.alternate=null,qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Xo],delete e[Ad],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kw(t){return t.tag===5||t.tag===3||t.tag===4}function Ly(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}var He=null,Qt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)Gw(t,e,n),n=n.sibling}function Gw(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:st||Ji(n,e);case 6:var r=He,i=Qt;He=null,Zn(t,e,n),He=r,Qt=i,He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?Ih(t.parentNode,n):t.nodeType===1&&Ih(t,n),qo(t)):Ih(He,n.stateNode));break;case 4:r=He,i=Qt,He=n.stateNode.containerInfo,Qt=!0,Zn(t,e,n),He=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!st&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Zn(t,e,n),st=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function My(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NC),e.forEach(function(r){var i=BC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Qt=!1;break e;case 3:He=l.stateNode.containerInfo,Qt=!0;break e;case 4:He=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(He===null)throw Error(U(160));Gw(s,o,i),He=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qw(e,t),e=e.sibling}function Qw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),on(t),r&4){try{Ro(3,t,t.return),tc(3,t)}catch(k){Pe(t,t.return,k)}try{Ro(5,t,t.return)}catch(k){Pe(t,t.return,k)}}break;case 1:Kt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(Kt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(k){Pe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&y_(i,s),hd(l,o);var c=hd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?T_(i,p):d==="dangerouslySetInnerHTML"?w_(i,p):d==="children"?Bo(i,p):Hf(i,d,p,c)}switch(l){case"input":od(i,s);break;case"textarea":v_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?rs(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(k){Pe(t,t.return,k)}}break;case 6:if(Kt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Pe(t,t.return,k)}}break;case 3:if(Kt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(k){Pe(t,t.return,k)}break;case 4:Kt(e,t),on(t);break;case 13:Kt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sp=Ne())),r&4&&My(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||d,Kt(e,t),st=c):Kt(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(p=H=d;H!==null;){switch(m=H,A=m.child,m.tag){case 0:case 11:case 14:case 15:Ro(4,m,m.return);break;case 1:Ji(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(k){Pe(r,n,k)}}break;case 5:Ji(m,m.return);break;case 22:if(m.memoizedState!==null){Fy(p);continue}}A!==null?(A.return=m,H=A):Fy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=E_("display",o))}catch(k){Pe(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Pe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kt(e,t),on(t),r&4&&My(t);break;case 21:break;default:Kt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=Ly(t);zd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ly(t);Ud(t,l,o);break;default:throw Error(U(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DC(t,e,n){H=t,Yw(t)}function Yw(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||st;l=yl;var c=st;if(yl=o,(st=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?jy(i):u!==null?(u.return=o,H=u):jy(i);for(;s!==null;)H=s,Yw(s),s=s.sibling;H=i,yl=l,st=c}Vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Vy(t)}}function Vy(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ey(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ey(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}st||e.flags&512&&jd(e)}catch(m){Pe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Fy(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function jy(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{jd(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{jd(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var LC=Math.ceil,mu=Gn.ReactCurrentDispatcher,Tp=Gn.ReactCurrentOwner,zt=Gn.ReactCurrentBatchConfig,ue=0,Be=null,De=null,Ge=0,At=0,Zi=Ur(0),Fe=0,ra=null,di=0,nc=0,Ip=0,bo=null,vt=null,Sp=0,Es=1/0,Cn=null,gu=!1,Bd=null,Er=null,vl=!1,dr=null,yu=0,No=0,$d=null,Ll=-1,Ml=0;function pt(){return ue&6?Ne():Ll!==-1?Ll:Ll=Ne()}function Tr(t){return t.mode&1?ue&2&&Ge!==0?Ge&-Ge:vC.transition!==null?(Ml===0&&(Ml=D_()),Ml):(t=pe,t!==0||(t=window.event,t=t===void 0?16:z_(t.type)),t):1}function Zt(t,e,n,r){if(50<No)throw No=0,$d=null,Error(U(185));Ta(t,n,r),(!(ue&2)||t!==Be)&&(t===Be&&(!(ue&2)&&(nc|=n),Fe===4&&or(t,Ge)),Tt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Es=Ne()+500,Ju&&zr()))}function Tt(t,e){var n=t.callbackNode;vA(t,e);var r=eu(t,t===Be?Ge:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?yC(Uy.bind(null,t)):ow(Uy.bind(null,t)),fC(function(){!(ue&6)&&zr()}),n=null;else{switch(L_(r)){case 1:n=Yf;break;case 4:n=N_;break;case 16:n=Zl;break;case 536870912:n=O_;break;default:n=Zl}n=iE(n,Xw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xw(t,e){if(Ll=-1,Ml=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=eu(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vu(t,r);else{e=r;var i=ue;ue|=2;var s=Zw();(Be!==t||Ge!==e)&&(Cn=null,Es=Ne()+500,ii(t,e));do try{FC();break}catch(l){Jw(t,l)}while(!0);up(),mu.current=s,ue=i,De!==null?e=0:(Be=null,Ge=0,e=Fe)}if(e!==0){if(e===2&&(i=gd(t),i!==0&&(r=i,e=Wd(t,i))),e===1)throw n=ra,ii(t,0),or(t,r),Tt(t,Ne()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!MC(i)&&(e=vu(t,r),e===2&&(s=gd(t),s!==0&&(r=s,e=Wd(t,s))),e===1))throw n=ra,ii(t,0),or(t,r),Tt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Yr(t,vt,Cn);break;case 3:if(or(t,r),(r&130023424)===r&&(e=Sp+500-Ne(),10<e)){if(eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sd(Yr.bind(null,t,vt,Cn),e);break}Yr(t,vt,Cn);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LC(r/1960))-r,10<r){t.timeoutHandle=Sd(Yr.bind(null,t,vt,Cn),r);break}Yr(t,vt,Cn);break;case 5:Yr(t,vt,Cn);break;default:throw Error(U(329))}}}return Tt(t,Ne()),t.callbackNode===n?Xw.bind(null,t):null}function Wd(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=vu(t,e),t!==2&&(e=vt,vt=n,e!==null&&Hd(e)),t}function Hd(t){vt===null?vt=t:vt.push.apply(vt,t)}function MC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Ip,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Uy(t){if(ue&6)throw Error(U(327));ls();var e=eu(t,0);if(!(e&1))return Tt(t,Ne()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var r=gd(t);r!==0&&(e=r,n=Wd(t,r))}if(n===1)throw n=ra,ii(t,0),or(t,e),Tt(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,vt,Cn),Tt(t,Ne()),null}function Ap(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Es=Ne()+500,Ju&&zr())}}function fi(t){dr!==null&&dr.tag===0&&!(ue&6)&&ls();var e=ue;ue|=1;var n=zt.transition,r=pe;try{if(zt.transition=null,pe=1,t)return t()}finally{pe=r,zt.transition=n,ue=e,!(ue&6)&&zr()}}function Cp(){At=Zi.current,_e(Zi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&su();break;case 3:_s(),_e(wt),_e(at),mp();break;case 5:pp(r);break;case 4:_s();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:cp(r.type._context);break;case 22:case 23:Cp()}n=n.return}if(Be=t,De=t=Ir(t.current,null),Ge=At=e,Fe=0,ra=null,Ip=nc=di=0,vt=bo=null,ei!==null){for(e=0;e<ei.length;e++)if(n=ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return t}function Jw(t,e){do{var n=De;try{if(up(),Nl.current=pu,fu){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fu=!1}if(hi=0,ze=Me=Se=null,ko=!1,ea=0,Tp.current=null,n===null||n.return===null){Fe=1,ra=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var A=xy(o);if(A!==null){A.flags&=-257,Py(A,o,l,s,e),A.mode&1&&Cy(s,c,e),e=A,u=c;var P=e.updateQueue;if(P===null){var k=new Set;k.add(u),e.updateQueue=k}else P.add(u);break e}else{if(!(e&1)){Cy(s,c,e),xp();break e}u=Error(U(426))}}else if(Ee&&l.mode&1){var R=xy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Py(R,o,l,s,e),ap(ws(u,l));break e}}s=u=ws(u,l),Fe!==4&&(Fe=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Lw(s,u,e);wy(s,I);break e;case 1:l=u;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Er===null||!Er.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Mw(s,l,e);wy(s,b);break e}}s=s.return}while(s!==null)}tE(n)}catch(L){e=L,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Zw(){var t=mu.current;return mu.current=pu,t===null?pu:t}function xp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(di&268435455)&&!(nc&268435455)||or(Be,Ge)}function vu(t,e){var n=ue;ue|=2;var r=Zw();(Be!==t||Ge!==e)&&(Cn=null,ii(t,e));do try{VC();break}catch(i){Jw(t,i)}while(!0);if(up(),ue=n,mu.current=r,De!==null)throw Error(U(261));return Be=null,Ge=0,Fe}function VC(){for(;De!==null;)eE(De)}function FC(){for(;De!==null&&!uA();)eE(De)}function eE(t){var e=rE(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?tE(t):De=e,Tp.current=null}function tE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=RC(n,e,At),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Yr(t,e,n){var r=pe,i=zt.transition;try{zt.transition=null,pe=1,jC(t,e,n,r)}finally{zt.transition=i,pe=r}return null}function jC(t,e,n,r){do ls();while(dr!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_A(t,s),t===Be&&(De=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,iE(Zl,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Tp.current=null,OC(t,n),Qw(n,t),sC(Td),tu=!!Ed,Td=Ed=null,t.current=n,DC(n),cA(),ue=l,pe=o,zt.transition=s}else t.current=n;if(vl&&(vl=!1,dr=t,yu=i),s=t.pendingLanes,s===0&&(Er=null),fA(n.stateNode),Tt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gu)throw gu=!1,t=Bd,Bd=null,t;return yu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===$d?No++:(No=0,$d=t):No=0,zr(),null}function ls(){if(dr!==null){var t=L_(yu),e=zt.transition,n=pe;try{if(zt.transition=null,pe=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,yu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ro(8,d,s)}var p=d.child;if(p!==null)p.return=d,H=p;else for(;H!==null;){d=H;var m=d.sibling,A=d.return;if(qw(d),d===c){H=null;break}if(m!==null){m.return=A,H=m;break}H=A}}}var P=s.alternate;if(P!==null){var k=P.child;if(k!==null){P.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,H=w;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tc(9,l)}}catch(L){Pe(l,l.return,L)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ue=i,zr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{pe=n,zt.transition=e}}return!1}function zy(t,e,n){e=ws(n,e),e=Lw(t,e,1),t=wr(t,e,1),e=pt(),t!==null&&(Ta(t,1,e),Tt(t,e))}function Pe(t,e,n){if(t.tag===3)zy(t,t,n);else for(;e!==null;){if(e.tag===3){zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ws(n,t),t=Mw(e,t,1),e=wr(e,t,1),t=pt(),e!==null&&(Ta(e,1,t),Tt(e,t));break}}e=e.return}}function UC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>Ne()-Sp?ii(t,0):Ip|=n),Tt(t,e)}function nE(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=pt();t=Un(t,e),t!==null&&(Ta(t,e,n),Tt(t,n))}function zC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nE(t,n)}function BC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),nE(t,n)}var rE;rE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,kC(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ee&&e.flags&1048576&&aw(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var i=gs(e,at.current);as(e,n),i=yp(null,e,r,t,i,n);var s=vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,ou(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dp(e),i.updater=ec,e.stateNode=i,i._reactInternals=e,bd(e,r,t,n),e=Dd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&sp(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WC(r),t=Gt(r,t),i){case 0:e=Od(null,e,r,t,n);break e;case 1:e=by(null,e,r,t,n);break e;case 11:e=ky(null,e,r,t,n);break e;case 14:e=Ry(null,e,r,Gt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Od(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),by(t,e,r,i,n);case 3:e:{if(Uw(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fw(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(U(423)),e),e=Ny(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(U(424)),e),e=Ny(t,e,r,n,i);break e}else for(Ct=_r(e.stateNode.containerInfo.firstChild),xt=e,Ee=!0,Yt=null,n=hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=zn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return pw(e),t===null&&Pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Id(r,i)?o=null:s!==null&&Id(r,s)&&(e.flags|=32),jw(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return zw(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),ky(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(uu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!wt.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=On(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=$t(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),Ry(t,e,r,i,n);case 15:return Vw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Dl(t,e),e.tag=1,Et(r)?(t=!0,ou(e)):t=!1,as(e,n),Dw(e,r,i),bd(e,r,i,n),Dd(null,e,r,!0,t,n);case 19:return Bw(t,e,n);case 22:return Fw(t,e,n)}throw Error(U(156,e.tag))};function iE(t,e){return b_(t,e)}function $C(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new $C(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WC(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Gf)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return si(n.children,i,s,e);case qf:o=8,i|=8;break;case td:return t=Ut(12,n,e,i|2),t.elementType=td,t.lanes=s,t;case nd:return t=Ut(13,n,e,i),t.elementType=nd,t.lanes=s,t;case rd:return t=Ut(19,n,e,i),t.elementType=rd,t.lanes=s,t;case p_:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d_:o=10;break e;case f_:o=9;break e;case Kf:o=11;break e;case Gf:o=14;break e;case rr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=p_,t.lanes=n,t.stateNode={isHidden:!1},t}function bh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Nh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dh(0),this.expirationTimes=dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kp(t,e,n,r,i,s,o,l,u){return t=new HC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(s),t}function qC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sE(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Et(n))return sw(t,n,e)}return e}function oE(t,e,n,r,i,s,o,l,u){return t=kp(n,r,!0,t,i,s,o,l,u),t.context=sE(null),n=t.current,r=pt(),i=Tr(n),s=On(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,Ta(t,i,r),Tt(t,r),t}function ic(t,e,n,r){var i=e.current,s=pt(),o=Tr(i);return n=sE(n),e.context===null?e.context=n:e.pendingContext=n,e=On(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(Zt(t,i,o,s),bl(t,i,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function By(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){By(t,e),(t=t.alternate)&&By(t,e)}function KC(){return null}var aE=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}sc.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ic(t,e,null,null)};sc.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){ic(null,t,null,null)}),e[jn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=F_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&U_(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $y(){}function GC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_u(o);s.call(c)}}var o=oE(e,r,t,0,null,!1,!1,"",$y);return t._reactRootContainer=o,t[jn]=o.current,Qo(t.nodeType===8?t.parentNode:t),fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_u(u);l.call(c)}}var u=kp(t,0,!1,null,null,!1,!1,"",$y);return t._reactRootContainer=u,t[jn]=u.current,Qo(t.nodeType===8?t.parentNode:t),fi(function(){ic(e,u,n,r)}),u}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_u(o);l.call(u)}}ic(e,o,t,i)}else o=GC(n,e,t,i,r);return _u(o)}M_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Xf(e,n|1),Tt(e,Ne()),!(ue&6)&&(Es=Ne()+500,zr()))}break;case 13:fi(function(){var r=Un(t,1);if(r!==null){var i=pt();Zt(r,t,1,i)}}),Rp(t,1)}};Jf=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=pt();Zt(e,t,134217728,n)}Rp(t,134217728)}};V_=function(t){if(t.tag===13){var e=Tr(t),n=Un(t,e);if(n!==null){var r=pt();Zt(n,t,e,r)}Rp(t,e)}};F_=function(){return pe};j_=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};fd=function(t,e,n){switch(e){case"input":if(od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(U(90));g_(r),od(r,i)}}}break;case"textarea":v_(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};A_=Ap;C_=fi;var QC={usingClientEntryPoint:!1,Events:[Sa,Ki,Xu,I_,S_,Ap]},co={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YC={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k_(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||KC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Ku=_l.inject(YC),fn=_l}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(U(200));return qC(t,e,null,n)};Ot.createRoot=function(t,e){if(!Np(t))throw Error(U(299));var n=!1,r="",i=aE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kp(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new bp(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=k_(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return fi(t)};Ot.hydrate=function(t,e,n){if(!oc(e))throw Error(U(200));return ac(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=aE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oE(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};Ot.render=function(t,e,n){if(!oc(e))throw Error(U(200));return ac(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!oc(t))throw Error(U(40));return t._reactRootContainer?(fi(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ot.unstable_batchedUpdates=Ap;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return ac(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function lE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lE)}catch(t){console.error(t)}}lE(),l_.exports=Ot;var XC=l_.exports,uE,Wy=XC;uE=Wy.createRoot,Wy.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const Hy="popstate";function JC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return qd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wu(i)}return ex(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ZC(){return Math.random().toString(36).substr(2,8)}function qy(t,e){return{usr:t.state,key:t.key,idx:e}}function qd(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||ZC()})}function wu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ex(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=fr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ia({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=fr.Pop;let R=d(),I=R==null?null:R-c;c=R,u&&u({action:l,location:k.location,delta:I})}function m(R,I){l=fr.Push;let _=qd(k.location,R,I);c=d()+1;let w=qy(_,c),b=k.createHref(_);try{o.pushState(w,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(b)}s&&u&&u({action:l,location:k.location,delta:1})}function A(R,I){l=fr.Replace;let _=qd(k.location,R,I);c=d();let w=qy(_,c),b=k.createHref(_);o.replaceState(w,"",b),s&&u&&u({action:l,location:k.location,delta:0})}function P(R){let I=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof R=="string"?R:wu(R);return _=_.replace(/ $/,"%20"),Re(I,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,I)}let k={get action(){return l},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hy,p),u=R,()=>{i.removeEventListener(Hy,p),u=null}},createHref(R){return e(i,R)},createURL:P,encodeLocation(R){let I=P(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:A,go(R){return o.go(R)}};return k}var Ky;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ky||(Ky={}));function tx(t,e,n){return n===void 0&&(n="/"),nx(t,e,n,!1)}function nx(t,e,n,r){let i=typeof e=="string"?Ms(e):e,s=Ts(i.pathname||"/",n);if(s==null)return null;let o=hE(t);rx(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=px(s);l=dx(o[u],c,r)}return l}function hE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Sr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),hE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cx(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of dE(s.path))i(s,o,u)}),e}function dE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function rx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ix=/^:[\w-]+$/,sx=3,ox=2,ax=1,lx=10,ux=-2,Gy=t=>t==="*";function cx(t,e){let n=t.split("/"),r=n.length;return n.some(Gy)&&(r+=ux),e&&(r+=ox),n.filter(i=>!Gy(i)).reduce((i,s)=>i+(ix.test(s)?sx:s===""?ax:lx),r)}function hx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function dx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Eu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Eu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Sr([s,p.pathname]),pathnameBase:vx(Sr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Sr([s,p.pathnameBase]))}return o}function Eu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:A}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const P=l[p];return A&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function px(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ts(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:gx(n,e):e,search:_x(r),hash:wx(i)}}function gx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fE(t,e){let n=yx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ms(t):(i=ia({},t),Re(!i.pathname||!i.pathname.includes("?"),Oh("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Oh("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=mx(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),vx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_x=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ex(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const mE=["post","put","patch","delete"];new Set(mE);const Tx=["get",...mE];new Set(Tx);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}const lc=M.createContext(null),gE=M.createContext(null),Br=M.createContext(null),uc=M.createContext(null),Ii=M.createContext({outlet:null,matches:[],isDataRoute:!1}),yE=M.createContext(null);function Ix(t,e){let{relative:n}=e===void 0?{}:e;Ca()||Re(!1);let{basename:r,navigator:i}=M.useContext(Br),{hash:s,pathname:o,search:l}=cc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Sr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ca(){return M.useContext(uc)!=null}function Si(){return Ca()||Re(!1),M.useContext(uc).location}function vE(t){M.useContext(Br).static||M.useLayoutEffect(t)}function xa(){let{isDataRoute:t}=M.useContext(Ii);return t?Mx():Sx()}function Sx(){Ca()||Re(!1);let t=M.useContext(lc),{basename:e,future:n,navigator:r}=M.useContext(Br),{matches:i}=M.useContext(Ii),{pathname:s}=Si(),o=JSON.stringify(fE(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return vE(()=>{l.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=pE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Sr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function cc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Br),{matches:i}=M.useContext(Ii),{pathname:s}=Si(),o=JSON.stringify(fE(i,r.v7_relativeSplatPath));return M.useMemo(()=>pE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Ax(t,e){return Cx(t,e)}function Cx(t,e,n,r){Ca()||Re(!1);let{navigator:i}=M.useContext(Br),{matches:s}=M.useContext(Ii),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Si(),d;if(e){var p;let R=typeof e=="string"?Ms(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||Re(!1),d=R}else d=c;let m=d.pathname||"/",A=m;if(u!=="/"){let R=u.replace(/^\//,"").split("/");A="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let P=tx(t,{pathname:A}),k=bx(P&&P.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:Sr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Sr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&k?M.createElement(uc.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:fr.Pop}},k):k}function xx(){let t=Lx(),e=Ex(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const Px=M.createElement(xx,null);class kx extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Ii.Provider,{value:this.props.routeContext},M.createElement(yE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rx(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(lc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Ii.Provider,{value:e},r)}function bx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Re(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:A}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let A,P=!1,k=null,R=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||Px,u&&(c<0&&m===0?(P=!0,R=null):c===m&&(P=!0,R=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),_=()=>{let w;return A?w=k:P?w=R:p.route.Component?w=M.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=d,M.createElement(Rx,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?M.createElement(kx,{location:n.location,revalidation:n.revalidation,component:k,error:A,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):_()},null)}var _E=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_E||{}),Tu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Tu||{});function Nx(t){let e=M.useContext(lc);return e||Re(!1),e}function Ox(t){let e=M.useContext(gE);return e||Re(!1),e}function Dx(t){let e=M.useContext(Ii);return e||Re(!1),e}function wE(t){let e=Dx(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function Lx(){var t;let e=M.useContext(yE),n=Ox(Tu.UseRouteError),r=wE(Tu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Mx(){let{router:t}=Nx(_E.UseNavigateStable),e=wE(Tu.UseNavigateStable),n=M.useRef(!1);return vE(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sa({fromRouteId:e},s)))},[t,e])}function nr(t){Re(!1)}function Vx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fr.Pop,navigator:s,static:o=!1,future:l}=t;Ca()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:d="/",search:p="",hash:m="",state:A=null,key:P="default"}=r,k=M.useMemo(()=>{let R=Ts(d,u);return R==null?null:{location:{pathname:R,search:p,hash:m,state:A,key:P},navigationType:i}},[u,d,p,m,A,P,i]);return k==null?null:M.createElement(Br.Provider,{value:c},M.createElement(uc.Provider,{children:n,value:k}))}function Fx(t){let{children:e,location:n}=t;return Ax(Kd(e),n)}new Promise(()=>{});function Kd(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Kd(r.props.children,s));return}r.type!==nr&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iu(){return Iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Iu.apply(this,arguments)}function EE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ux(t,e){return t.button===0&&(!e||e==="_self")&&!jx(t)}const zx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Bx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],$x="6";try{window.__reactRouterVersion=$x}catch{}const Wx=M.createContext({isTransitioning:!1}),Hx="startTransition",Qy=US[Hx];function qx(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=JC({window:i,v5Compat:!0}));let o=s.current,[l,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(p=>{c&&Qy?Qy(()=>u(p)):u(p)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.createElement(Vx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qx=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,m=EE(e,zx),{basename:A}=M.useContext(Br),P,k=!1;if(typeof c=="string"&&Gx.test(c)&&(P=c,Kx))try{let w=new URL(window.location.href),b=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=Ts(b.pathname,A);b.origin===w.origin&&L!=null?c=L+b.search+b.hash:k=!0}catch{}let R=Ix(c,{relative:i}),I=Xx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(w){r&&r(w),w.defaultPrevented||I(w)}return M.createElement("a",Iu({},m,{href:P||R,onClick:k||s?r:_,ref:n,target:u}))}),Vi=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,unstable_viewTransition:c,children:d}=e,p=EE(e,Bx),m=cc(u,{relative:p.relative}),A=Si(),P=M.useContext(gE),{navigator:k,basename:R}=M.useContext(Br),I=P!=null&&Jx(m)&&c===!0,_=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,w=A.pathname,b=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;i||(w=w.toLowerCase(),b=b?b.toLowerCase():null,_=_.toLowerCase()),b&&R&&(b=Ts(b,R)||b);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=w===_||!o&&w.startsWith(_)&&w.charAt(L)==="/",E=b!=null&&(b===_||!o&&b.startsWith(_)&&b.charAt(_.length)==="/"),v={isActive:F,isPending:E,isTransitioning:I},S=F?r:void 0,T;typeof s=="function"?T=s(v):T=[s,F?"active":null,E?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let x=typeof l=="function"?l(v):l;return M.createElement(Qx,Iu({},p,{"aria-current":S,className:T,ref:n,style:x,to:u,unstable_viewTransition:c}),typeof d=="function"?d(v):d)});var Gd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gd||(Gd={}));var Yy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yy||(Yy={}));function Yx(t){let e=M.useContext(lc);return e||Re(!1),e}function Xx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=xa(),c=Si(),d=cc(t,{relative:o});return M.useCallback(p=>{if(Ux(p,n)){p.preventDefault();let m=r!==void 0?r:wu(c)===wu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function Jx(t,e){e===void 0&&(e={});let n=M.useContext(Wx);n==null&&Re(!1);let{basename:r}=Yx(Gd.useViewTransitionState),i=cc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ts(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ts(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Eu(i.pathname,o)!=null||Eu(i.pathname,s)!=null}const Zx="/FitJoy/assets/logo-CL7mzWpS.jpg",eP="/FitJoy/assets/logo2-rR1O5odo.png",tP="/FitJoy/assets/stock_pfp-DAFPmnws.jpg",nP="/FitJoy/assets/bg_vid-Qzadn02T.mp4",rP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEUtLS1XV1cqKipaWlpWVlY2NjZHR0dBQUFPT08+Pj4uLi5LS0syMjJCQkJNTU05OTklJSVPHreoAAAEMklEQVR4nO3ZDXOjOAyAYSwbgwHj/v9fe5JsGno3czOb27lsMu/T2RQCzVZC/uw0AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL9I5NW/we91zPN89G9+YPx4vt1wXZgs/rnUWg55XByO6U1JjjHuIjWa0yM7/DiMO4KdpOvJS016KcSwWhZkiQ/1XatDcgghiwYTzHa9FULqNxS/EEdVHKnfZ5pMUh6n4UNyEBd7uOmWA1l7gLsHuPklK5Kel56DD6uDVeNo8ZaD43rQfrMnJC1zy9Ye9McsB2vp5n/9j/5gf8uBPds9PHIg1RKjoceiZ7PddNqoIC3ux2gLq3QvjuR59xwkP5xCP+o5SBZ+7RXi9/a3RTaLeuRgc68N5D+452C3UvejegVrTz5u1iDi0ZtCttYyqr/86A/aq2N51j0Hp0YUmwaaLGjLgbcLrfXk3X4vCn366zUc3seFD8mBWMR2fuXA2oVG7b1C6qlY5Hus0KL5vBx89e4wHvPIgYeord8bw+yx76MO+ihiN6TcfcS4cEoboY0c9AceR8S7l0PQKfHc2tz7ho8bF85e7TpRGjk4HpXuUwQ/T4cFvHg32XPw9Vk5qH061HPQzx4Nvkj2pJy1rtELo7eF/XTl1bE862cOpi16ix858GlCb+ypDxDrrTKssdz7xI+YK6/e5dvyyHPgLUIbhsuhTxHOK+i4bh+Ug+Q50G+2cm7BlslzSCnp5CClcG0p2LFGKTp/sE5yLR5xsRu79103Tld3dvVq16vNhO893fex2MbJ91aSPPzfvznwu2nR/zizl227NYzvK9vt9LtpyD8/481oZ6hDQNP+z0+Ld4nbqZ3e1veTZNV3Du30becxzXL4yrHYUNnEJ5JxG5/x4lCepoPiroP/dPaNot13UdaYa1wl2dxAw+w5yHFfdJjYom2rFfup2PSi3jJVP3vbDQTNwayjfOt1ICHrY55tl6wdknwWrDkQy4Emxa5cOdDHrrPkNdktVT9jeeN1o+Vgj3PPQYtNS7/2cLQOaq7+qPdYZ5sDSVinKwc2X+p1YDmY9vi+60adIGrjF28LWu96ftQejvYH+qVh6gQo1mZ7zloatxzslgO7xRdQ5zv3B7mWaeQgpSXHpdhmkXb4yXaZr7ZwaAOZtnB6DsRzsPYOU9dWMVuv8a68LUwjB4fVhJX7qgHujxx4n6j9odZJ2a4c6L/968rBUfxPE+9JeuH7WigttoO+xklrO2lM/jelkYNs+ytJG41vKS22Vopp83Vk3KxPTOnVoTyvZV8VFe3basmbvTFL23ft96stmmXJWiBZS3/O+6JzB3uzzfpSrIrsbNPPkJLf9m+u03Rb/IxJ4jRmfzJWTtdN98WVPNZWMn7kBb87AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/iR/ARR5HgNmW21IAAAAAElFTkSuQmCC",Mt={logo1:Zx,logo2:eP,pfp:tP,bg_vid:nP,ph:rP},Xy=()=>{};let Op={},TE={},IE=null,SE={mark:Xy,measure:Xy};try{typeof window<"u"&&(Op=window),typeof document<"u"&&(TE=document),typeof MutationObserver<"u"&&(IE=MutationObserver),typeof performance<"u"&&(SE=performance)}catch{}const{userAgent:Jy=""}=Op.navigator||{},br=Op,we=TE,Zy=IE,wl=SE;br.document;const Qn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",AE=~Jy.indexOf("MSIE")||~Jy.indexOf("Trident/");var Te="classic",CE="duotone",Pt="sharp",kt="sharp-duotone",iP=[Te,CE,Pt,kt],sP={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ev={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},oP=["kit"],aP=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,lP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,uP={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},cP={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},hP={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},dP={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},fP={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},pP={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},mP=["solid","regular","light","thin","duotone","brands"],PE=[1,2,3,4,5,6,7,8,9,10],gP=PE.concat([11,12,13,14,15,16,17,18,19,20]),go={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yP=[...Object.keys(dP),...mP,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",go.GROUP,go.SWAP_OPACITY,go.PRIMARY,go.SECONDARY].concat(PE.map(t=>"".concat(t,"x"))).concat(gP.map(t=>"w-".concat(t))),vP={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_P={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},wP={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},tv={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Bn="___FONT_AWESOME___",Qd=16,kE="fa",RE="svg-inline--fa",pi="data-fa-i2svg",Yd="data-fa-pseudo-element",EP="data-fa-pseudo-element-pending",Dp="data-prefix",Lp="data-icon",nv="fontawesome-i2svg",TP="async",IP=["HTML","HEAD","STYLE","SCRIPT"],bE=(()=>{try{return!0}catch{return!1}})(),NE=[Te,Pt,kt];function Pa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Te]}})}const OE={...xE};OE[Te]={...xE[Te],...ev.kit,...ev["kit-duotone"]};const oi=Pa(OE),Xd={...pP};Xd[Te]={...Xd[Te],...tv.kit,...tv["kit-duotone"]};const oa=Pa(Xd),Jd={...fP};Jd[Te]={...Jd[Te],...wP.kit};const ai=Pa(Jd),Zd={...hP};Zd[Te]={...Zd[Te],..._P.kit};const SP=Pa(Zd),AP=aP,DE="fa-layers-text",CP=lP,xP={...sP};Pa(xP);const PP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dh=go,Is=new Set;Object.keys(oa[Te]).map(Is.add.bind(Is));Object.keys(oa[Pt]).map(Is.add.bind(Is));Object.keys(oa[kt]).map(Is.add.bind(Is));const kP=[...oP,...yP],Oo=br.FontAwesomeConfig||{};function RP(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}we&&typeof we.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=bP(RP(n));i!=null&&(Oo[r]=i)});const LE={styleDefault:"solid",familyDefault:"classic",cssPrefix:kE,replacementClass:RE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oo.familyPrefix&&(Oo.cssPrefix=Oo.familyPrefix);const Ss={...LE,...Oo};Ss.autoReplaceSvg||(Ss.observeMutations=!1);const q={};Object.keys(LE).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){Ss[t]=e,Do.forEach(n=>n(q))},get:function(){return Ss[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){Ss.cssPrefix=t,Do.forEach(e=>e(q))},get:function(){return Ss.cssPrefix}});br.FontAwesomeConfig=q;const Do=[];function NP(t){return Do.push(t),()=>{Do.splice(Do.indexOf(t),1)}}const er=Qd,cn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function OP(t){if(!t||!Qn)return;const e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=we.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}const DP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){let t=12,e="";for(;t-- >0;)e+=DP[Math.random()*62|0];return e}function Vs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mp(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ME(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function LP(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ME(t[n]),'" '),"").trim()}function hc(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Vp(t){return t.size!==cn.size||t.x!==cn.x||t.y!==cn.y||t.rotate!==cn.rotate||t.flipX||t.flipY}function MP(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function VP(t){let{transform:e,width:n=Qd,height:r=Qd,startCentered:i=!1}=t,s="";return i&&AE?s+="translate(".concat(e.x/er-n/2,"em, ").concat(e.y/er-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/er,"em), calc(-50% + ").concat(e.y/er,"em)) "):s+="translate(".concat(e.x/er,"em, ").concat(e.y/er,"em) "),s+="scale(".concat(e.size/er*(e.flipX?-1:1),", ").concat(e.size/er*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var FP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function VE(){const t=kE,e=RE,n=q.cssPrefix,r=q.replacementClass;let i=FP;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let rv=!1;function Lh(){q.autoAddCss&&!rv&&(OP(VE()),rv=!0)}var jP={mixout(){return{dom:{css:VE,insertCss:Lh}}},hooks(){return{beforeDOMElementCreation(){Lh()},beforeI2svg(){Lh()}}}};const $n=br||{};$n[Bn]||($n[Bn]={});$n[Bn].styles||($n[Bn].styles={});$n[Bn].hooks||($n[Bn].hooks={});$n[Bn].shims||($n[Bn].shims=[]);var hn=$n[Bn];const FE=[],jE=function(){we.removeEventListener("DOMContentLoaded",jE),Su=1,FE.map(t=>t())};let Su=!1;Qn&&(Su=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Su||we.addEventListener("DOMContentLoaded",jE));function UP(t){Qn&&(Su?setTimeout(t,0):FE.push(t))}function ka(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?ME(t):"<".concat(e," ").concat(LP(n),">").concat(r.map(ka).join(""),"</").concat(e,">")}function iv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mh=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=l(d,e[c],c,e);return d};function zP(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ef(t){const e=zP(t);return e.length===1?e[0].toString(16):null}function BP(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function sv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function tf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=sv(e);typeof hn.hooks.addPack=="function"&&!r?hn.hooks.addPack(t,sv(e)):hn.styles[t]={...hn.styles[t]||{},...i},t==="fas"&&tf("fa",e)}const{styles:Jr,shims:$P}=hn,WP={[Te]:Object.values(ai[Te]),[Pt]:Object.values(ai[Pt]),[kt]:Object.values(ai[kt])};let Fp=null,UE={},zE={},BE={},$E={},WE={};const HP={[Te]:Object.keys(oi[Te]),[Pt]:Object.keys(oi[Pt]),[kt]:Object.keys(oi[kt])};function qP(t){return~kP.indexOf(t)}function KP(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qP(i)?i:null}const HE=()=>{const t=r=>Mh(Jr,(i,s,o)=>(i[o]=Mh(s,r,{}),i),{});UE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),zE=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),WE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in Jr||q.autoFetchSvg,n=Mh($P,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});BE=n.names,$E=n.unicodes,Fp=dc(q.styleDefault,{family:q.familyDefault})};NP(t=>{Fp=dc(t.styleDefault,{family:q.familyDefault})});HE();function jp(t,e){return(UE[t]||{})[e]}function GP(t,e){return(zE[t]||{})[e]}function pr(t,e){return(WE[t]||{})[e]}function qE(t){return BE[t]||{prefix:null,iconName:null}}function QP(t){const e=$E[t],n=jp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Nr(){return Fp}const Up=()=>({prefix:null,iconName:null,rest:[]});function dc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Te}=e,r=oi[n][t],i=oa[n][t]||oa[n][r],s=t in hn.styles?t:null;return i||s||null}const YP={[Te]:Object.keys(ai[Te]),[Pt]:Object.keys(ai[Pt]),[kt]:Object.keys(ai[kt])};function fc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Te]:"".concat(q.cssPrefix,"-").concat(Te),[Pt]:"".concat(q.cssPrefix,"-").concat(Pt),[kt]:"".concat(q.cssPrefix,"-").concat(kt)};let i=null,s=Te;const o=iP.filter(u=>u!==CE);o.forEach(u=>{(t.includes(r[u])||t.some(c=>YP[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const d=KP(q.cssPrefix,c);if(Jr[c]?(c=WP[s].includes(c)?SP[s][c]:c,i=c,u.prefix=c):HP[s].indexOf(c)>-1?(i=c,u.prefix=dc(c,{family:s})):d?u.iconName=d:c!==q.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?qE(u.iconName):{},m=pr(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Jr.far&&Jr.fas&&!q.autoFetchSvg&&(u.prefix="fas")}return u},Up());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Pt&&(Jr.fass||q.autoFetchSvg)&&(l.prefix="fass",l.iconName=pr(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===kt&&(Jr.fasds||q.autoFetchSvg)&&(l.prefix="fasds",l.iconName=pr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Nr()||"fas"),l}class XP{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},tf(s,i[s]);const o=ai[Te][s];o&&tf(o,i[s]),HE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let ov=[],es={};const us={},JP=Object.keys(us);function ZP(t,e){let{mixoutsTo:n}=e;return ov=t,es={},Object.keys(us).forEach(r=>{JP.indexOf(r)===-1&&delete us[r]}),ov.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{es[o]||(es[o]=[]),es[o].push(s[o])})}r.provides&&r.provides(us)}),n}function nf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(es[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function mi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(es[t]||[]).forEach(s=>{s.apply(null,n)})}function Or(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return us[t]?us[t].apply(null,e):void 0}function rf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Nr();if(e)return e=pr(n,e)||e,iv(KE.definitions,n,e)||iv(hn.styles,n,e)}const KE=new XP,ek=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,mi("noAuto")},tk={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qn?(mi("beforeI2svg",t),Or("pseudoElements2svg",t),Or("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,UP(()=>{rk({autoReplaceSvgRoot:e}),mi("watch",t)})}},nk={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=dc(t[0]);return{prefix:n,iconName:pr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(AP))){const e=fc(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Nr(),iconName:pr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Nr();return{prefix:e,iconName:pr(e,t)||t}}}},Lt={noAuto:ek,config:q,dom:tk,parse:nk,library:KE,findIconDefinition:rf,toHtml:ka},rk=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=we}=t;(Object.keys(hn.styles).length>0||q.autoFetchSvg)&&Qn&&q.autoReplaceSvg&&Lt.dom.i2svg({node:e})};function pc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ka(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Qn)return;const n=we.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ik(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Vp(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=hc({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function sk(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function zp(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:m,height:A}=n.found?n:e,P=r==="fak",k=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(L=>d.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(d.classes).join(" ");let R={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(A)}};const I=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/A*16*.0625,"em")}:{};p&&(R.attributes[pi]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[l]}),delete R.attributes.title);const _={...R,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...I,...d.styles}},{children:w,attributes:b}=n.found&&e.found?Or("generateAbstractMask",_)||{children:[],attributes:{}}:Or("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=w,_.attributes=b,o?sk(_):ik(_)}function av(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[pi]="");const c={...o.styles};Vp(i)&&(c.transform=VP({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=hc(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function ok(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=hc(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Vh}=hn;function sf(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Dh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const ak={found:!1,width:512,height:512};function lk(t,e){!bE&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function of(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=Nr()),new Promise((r,i)=>{if(n==="fa"){const s=qE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vh[e]&&Vh[e][t]){const s=Vh[e][t];return r(sf(s))}lk(t,e),r({...ak,icon:q.showMissingIcons&&t?Or("missingIconAbstract")||{}:{}})})}const lv=()=>{},af=q.measurePerformance&&wl&&wl.mark&&wl.measure?wl:{mark:lv,measure:lv},yo='FA "6.6.0"',uk=t=>(af.mark("".concat(yo," ").concat(t," begins")),()=>GE(t)),GE=t=>{af.mark("".concat(yo," ").concat(t," ends")),af.measure("".concat(yo," ").concat(t),"".concat(yo," ").concat(t," begins"),"".concat(yo," ").concat(t," ends"))};var Bp={begin:uk,end:GE};const Fl=()=>{};function uv(t){return typeof(t.getAttribute?t.getAttribute(pi):null)=="string"}function ck(t){const e=t.getAttribute?t.getAttribute(Dp):null,n=t.getAttribute?t.getAttribute(Lp):null;return e&&n}function hk(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function dk(){return q.autoReplaceSvg===!0?jl.replace:jl[q.autoReplaceSvg]||jl.replace}function fk(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function pk(t){return we.createElement(t)}function QE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?fk:pk}=e;if(typeof t=="string")return we.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(QE(s,{ceFn:n}))}),r}function mk(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const jl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(QE(n),e)}),e.getAttribute(pi)===null&&q.keepOriginalSource){let n=we.createComment(mk(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Mp(e).indexOf(q.replacementClass))return jl.replace(t);const r=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===q.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ka(s)).join(`
`);e.setAttribute(pi,""),e.innerHTML=i}};function cv(t){t()}function YE(t,e){const n=typeof e=="function"?e:Fl;if(t.length===0)n();else{let r=cv;q.mutateApproach===TP&&(r=br.requestAnimationFrame||cv),r(()=>{const i=dk(),s=Bp.begin("mutate");t.map(i),s(),n()})}}let $p=!1;function XE(){$p=!0}function lf(){$p=!1}let Au=null;function hv(t){if(!Zy||!q.observeMutations)return;const{treeCallback:e=Fl,nodeCallback:n=Fl,pseudoElementsCallback:r=Fl,observeMutationsRoot:i=we}=t;Au=new Zy(s=>{if($p)return;const o=Nr();Vs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!uv(l.addedNodes[0])&&(q.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&q.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&uv(l.target)&&~PP.indexOf(l.attributeName))if(l.attributeName==="class"&&ck(l.target)){const{prefix:u,iconName:c}=fc(Mp(l.target));l.target.setAttribute(Dp,u||o),c&&l.target.setAttribute(Lp,c)}else hk(l.target)&&n(l.target)})}),Qn&&Au.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function gk(){Au&&Au.disconnect()}function yk(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function vk(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=fc(Mp(t));return i.prefix||(i.prefix=Nr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=GP(i.prefix,t.innerText)||jp(i.prefix,ef(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function _k(t){const e=Vs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function wk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:cn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=vk(t),s=_k(t),o=nf("parseNodeAttributes",{},t);let l=e.styleParser?yk(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:cn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:Ek}=hn;function JE(t){const e=q.autoReplaceSvg==="nest"?dv(t,{styleParser:!1}):dv(t);return~e.extra.classes.indexOf(DE)?Or("generateLayersText",t,e):Or("generateSvgReplacementMutation",t,e)}let _n=new Set;NE.map(t=>{_n.add("fa-".concat(t))});Object.keys(oi[Te]).map(_n.add.bind(_n));Object.keys(oi[Pt]).map(_n.add.bind(_n));Object.keys(oi[kt]).map(_n.add.bind(_n));_n=[..._n];function fv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qn)return Promise.resolve();const n=we.documentElement.classList,r=d=>n.add("".concat(nv,"-").concat(d)),i=d=>n.remove("".concat(nv,"-").concat(d)),s=q.autoFetchSvg?_n:NE.map(d=>"fa-".concat(d)).concat(Object.keys(Ek));s.includes("fa")||s.push("fa");const o=[".".concat(DE,":not([").concat(pi,"])")].concat(s.map(d=>".".concat(d,":not([").concat(pi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Vs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=Bp.begin("onTree"),c=l.reduce((d,p)=>{try{const m=JE(p);m&&d.push(m)}catch(m){bE||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{YE(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function Tk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;JE(t).then(n=>{n&&YE([n],e)})}function Ik(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:rf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:rf(i||{})),t(r,{...n,mask:i})}}const Sk=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=cn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:A}=t;return pc({type:"icon",...t},()=>(mi("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?c["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(l||aa()):(c["aria-hidden"]="true",c.focusable="false")),zp({icons:{main:sf(A),mask:i?sf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...cn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var Ak={mixout(){return{icon:Ik(Sk)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=fv,t.nodeCallback=Tk,t}}},provides(t){t.i2svg=function(e){const{node:n=we,callback:r=()=>{}}=e;return fv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,A)=>{Promise.all([of(r,o),c.iconName?of(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[k,R]=P;m([e,zp({icons:{main:k,mask:R},prefix:o,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=hc(o);l.length>0&&(r.style=l);let u;return Vp(s)&&(u=Or("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Ck={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pc({type:"layer"},()=>{mi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},xk={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return pc({type:"counter",content:t},()=>(mi("beforeDOMElementCreation",{content:t,params:e}),ok({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(q.cssPrefix,"-layers-counter"),...r]}})))}}}},Pk={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=cn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return pc({type:"text",content:t},()=>(mi("beforeDOMElementCreation",{content:t,params:e}),av({content:t,transform:{...cn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(AE){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return q.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,av({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const kk=new RegExp('"',"ug"),pv=[1105920,1112319],mv={FontAwesome:{normal:"fas",400:"fas"},...cP,...uP,...vP},uf=Object.keys(mv).reduce((t,e)=>(t[e.toLowerCase()]=mv[e],t),{}),Rk=Object.keys(uf).reduce((t,e)=>{const n=uf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function bk(t){const e=t.replace(kk,""),n=BP(e,0),r=n>=pv[0]&&n<=pv[1],i=e.length===2?e[0]===e[1]:!1;return{value:ef(i?e[0]:e),isSecondary:r||i}}function Nk(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(uf[n]||{})[i]||Rk[n]}function gv(t,e){const n="".concat(EP).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Vs(t.children).filter(m=>m.getAttribute(Yd)===e)[0],l=br.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(CP),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let A=Nk(u,d);const{value:P,isSecondary:k}=bk(m),R=c[0].startsWith("FontAwesome");let I=jp(A,P),_=I;if(R){const w=QP(P);w.iconName&&w.prefix&&(I=w.iconName,A=w.prefix)}if(I&&!k&&(!o||o.getAttribute(Dp)!==A||o.getAttribute(Lp)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const w=wk(),{extra:b}=w;b.attributes[Yd]=e,of(I,A).then(L=>{const F=zp({...w,icons:{main:L,mask:Up()},prefix:A,iconName:_,extra:b,watchable:!0}),E=we.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=F.map(v=>ka(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ok(t){return Promise.all([gv(t,"::before"),gv(t,"::after")])}function Dk(t){return t.parentNode!==document.head&&!~IP.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yv(t){if(Qn)return new Promise((e,n)=>{const r=Vs(t.querySelectorAll("*")).filter(Dk).map(Ok),i=Bp.begin("searchPseudoElements");XE(),Promise.all(r).then(()=>{i(),lf(),e()}).catch(()=>{i(),lf(),n()})})}var Lk={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=yv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=we}=e;q.searchPseudoElements&&yv(n)}}};let vv=!1;var Mk={mixout(){return{dom:{unwatch(){XE(),vv=!0}}}},hooks(){return{bootstrap(){hv(nf("mutationObserverCallbacks",{}))},noAuto(){gk()},watch(t){const{observeMutationsRoot:e}=t;vv?lf():hv(nf("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const _v=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Vk={mixout(){return{parse:{transform:t=>_v(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=_v(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Fh={x:0,y:0,width:"100%",height:"100%"};function wv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Fk(t){return t.tag==="g"?t.children:[t]}var jk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?fc(n.split(" ").map(i=>i.trim())):Up();return r.prefix||(r.prefix=Nr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,m=MP({transform:l,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:{...Fh,fill:"white"}},P=c.children?{children:c.children.map(wv)}:{},k={tag:"g",attributes:{...m.inner},children:[wv({tag:c.tag,attributes:{...c.attributes,...m.path},...P})]},R={tag:"g",attributes:{...m.outer},children:[k]},I="mask-".concat(o||aa()),_="clip-".concat(o||aa()),w={tag:"mask",attributes:{...Fh,id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[A,R]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Fk(p)},w]};return n.push(b,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(I,")"),...Fh}}),{children:n,attributes:r}}}},Uk={provides(t){let e=!1;br.matchMedia&&(e=br.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},zk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Bk=[jP,Ak,Ck,xk,Pk,Lk,Mk,Vk,jk,Uk,zk];ZP(Bk,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;const cf=Lt.parse;Lt.findIconDefinition;Lt.toHtml;const $k=Lt.icon;Lt.layer;Lt.text;Lt.counter;var ZE={exports:{}},Wk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Hk=Wk,qk=Hk;function e1(){}function t1(){}t1.resetWarningCache=e1;var Kk=function(){function t(r,i,s,o,l,u){if(u!==qk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:t1,resetWarningCache:e1};return n.PropTypes=n,n};ZE.exports=Kk();var Gk=ZE.exports;const re=Y0(Gk);function Ev(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ln(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ev(Object(n),!0).forEach(function(r){ts(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ev(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cu(t){"@babel/helpers - typeof";return Cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cu(t)}function ts(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Yk(t,e){if(t==null)return{};var n=Qk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function hf(t){return Xk(t)||Jk(t)||Zk(t)||eR()}function Xk(t){if(Array.isArray(t))return df(t)}function Jk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zk(t,e){if(t){if(typeof t=="string")return df(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return df(t,e)}}function df(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function eR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tR(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,A=t.inverse,P=t.border,k=t.listItem,R=t.flip,I=t.size,_=t.rotation,w=t.pull,b=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":A,"fa-border":P,"fa-li":k,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},ts(e,"fa-".concat(I),typeof I<"u"&&I!==null),ts(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),ts(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ts(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(b).map(function(L){return b[L]?L:null}).filter(function(L){return L})}function nR(t){return t=t-0,t===t}function n1(t){return nR(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var rR=["style"];function iR(t){return t.charAt(0).toUpperCase()+t.slice(1)}function sR(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=n1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[iR(i)]=s:e[i]=s,e},{})}function r1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return r1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=sR(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[n1(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=Yk(n,rR);return i.attrs.style=ln(ln({},i.attrs.style),o),t.apply(void 0,[e.tag,ln(ln({},i.attrs),l)].concat(hf(r)))}var i1=!1;try{i1=!0}catch{}function oR(){if(!i1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Tv(t){if(t&&Cu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(cf.icon)return cf.icon(t);if(t===null)return null;if(t&&Cu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function jh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ts({},t,e):{}}var Iv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},As=Bf.forwardRef(function(t,e){var n=ln(ln({},Iv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,d=Tv(r),p=jh("classes",[].concat(hf(tR(n)),hf((o||"").split(" ")))),m=jh("transform",typeof n.transform=="string"?cf.transform(n.transform):n.transform),A=jh("mask",Tv(i)),P=$k(d,ln(ln(ln(ln({},p),m),A),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!P)return oR("Could not find icon",d),null;var k=P.abstract,R={ref:e};return Object.keys(n).forEach(function(I){Iv.hasOwnProperty(I)||(R[I]=n[I])}),aR(k[0],R)});As.displayName="FontAwesomeIcon";As.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var aR=r1.bind(null,Bf.createElement);const lR={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Sv={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Av={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},uR={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},cR={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},hR=cR;var Cv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},o1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(m=64)),r.push(n[d],n[p],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new fR;const m=s<<2|l>>4;if(r.push(m),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pR=function(t){const e=s1(t);return o1.encodeByteArray(e,!0)},xu=function(t){return pR(t).replace(/\./g,"")},a1=function(t){try{return o1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gR=()=>mR().__FIREBASE_DEFAULTS__,yR=()=>{if(typeof process>"u"||typeof Cv>"u")return;const t=Cv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a1(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return gR()||yR()||vR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l1=t=>{var e,n;return(n=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_R=t=>{const e=l1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u1=()=>{var t;return(t=mc())===null||t===void 0?void 0:t.config},c1=t=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ER(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xu(JSON.stringify(n)),xu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function IR(){var t;const e=(t=mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function h1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CR(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xR(){return!IR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d1(){try{return typeof indexedDB=="object"}catch{return!1}}function f1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function PR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kR,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new rn(i,l,r)}}function RR(t,e){return t.replace(bR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bR=/\{\$([^}]+)}/g;function NR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xv(s)&&xv(o)){if(!la(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _o(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function OR(t,e){const n=new DR(t,e);return n.subscribe.bind(n)}class DR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uh),i.error===void 0&&(i.error=Uh),i.complete===void 0&&(i.complete=Uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uh(){}/**
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
 */const MR=1e3,VR=2,FR=4*60*60*1e3,jR=.5;function Pv(t,e=MR,n=VR){const r=e*Math.pow(n,t),i=Math.round(jR*r*(Math.random()-.5)*2);return Math.min(FR,r+i)}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class UR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BR(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zR(t){return t===Xr?void 0:t}function BR(t){return t.instantiationMode==="EAGER"}/**
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
 */class $R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const WR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},HR=se.INFO,qR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},KR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=HR,this._logHandler=KR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const GR=(t,e)=>e.some(n=>t instanceof n);let kv,Rv;function QR(){return kv||(kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YR(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p1=new WeakMap,ff=new WeakMap,m1=new WeakMap,zh=new WeakMap,Wp=new WeakMap;function XR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p1.set(n,t)}).catch(()=>{}),Wp.set(e,t),e}function JR(t){if(ff.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ff.set(t,e)}let pf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZR(t){pf=t(pf)}function eb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bh(this),e,...n);return m1.set(r,e.sort?e.sort():[e]),Ar(r)}:YR().includes(t)?function(...e){return t.apply(Bh(this),e),Ar(p1.get(this))}:function(...e){return Ar(t.apply(Bh(this),e))}}function tb(t){return typeof t=="function"?eb(t):(t instanceof IDBTransaction&&JR(t),GR(t,QR())?new Proxy(t,pf):t)}function Ar(t){if(t instanceof IDBRequest)return XR(t);if(zh.has(t))return zh.get(t);const e=tb(t);return e!==t&&(zh.set(t,e),Wp.set(e,t)),e}const Bh=t=>Wp.get(t);function g1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const nb=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],$h=new Map;function bv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return $h.set(e,s),s}ZR(t=>({...t,get:(e,n,r)=>bv(e,n)||t.get(e,n,r),has:(e,n)=>!!bv(e,n)||t.has(e,n)}));/**
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
 */class ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mf="@firebase/app",Nv="0.10.15";/**
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
 */const Wn=new gc("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",ub="@firebase/app-check-compat",cb="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",mb="@firebase/database-compat",gb="@firebase/functions",yb="@firebase/functions-compat",vb="@firebase/installations",_b="@firebase/installations-compat",wb="@firebase/messaging",Eb="@firebase/messaging-compat",Tb="@firebase/performance",Ib="@firebase/performance-compat",Sb="@firebase/remote-config",Ab="@firebase/remote-config-compat",Cb="@firebase/storage",xb="@firebase/storage-compat",Pb="@firebase/firestore",kb="@firebase/vertexai",Rb="@firebase/firestore-compat",bb="firebase",Nb="11.0.1";/**
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
 */const gf="[DEFAULT]",Ob={[mf]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[cb]:"fire-app-check",[ub]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[mb]:"fire-rtdb-compat",[gb]:"fire-fn",[yb]:"fire-fn-compat",[vb]:"fire-iid",[_b]:"fire-iid-compat",[wb]:"fire-fcm",[Eb]:"fire-fcm-compat",[Tb]:"fire-perf",[Ib]:"fire-perf-compat",[Sb]:"fire-rc",[Ab]:"fire-rc-compat",[Cb]:"fire-gcs",[xb]:"fire-gcs-compat",[Pb]:"fire-fst",[Rb]:"fire-fst-compat",[kb]:"fire-vertex","fire-js":"fire-js",[bb]:"fire-js-all"};/**
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
 */const Pu=new Map,Db=new Map,yf=new Map;function Ov(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(yf.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;yf.set(e,t);for(const n of Pu.values())Ov(n,t);for(const n of Db.values())Ov(n,t);return!0}function Ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const Lb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new Ai("app","Firebase",Lb);/**
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
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=Nb;function y1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=u1()),!n)throw Cr.create("no-options");const s=Pu.get(i);if(s){if(la(n,s.options)&&la(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new $R(i);for(const u of yf.values())o.addComponent(u);const l=new Mb(n,r,o);return Pu.set(i,l),l}function Hp(t=gf){const e=Pu.get(t);if(!e&&t===gf&&u1())return y1();if(!e)throw Cr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=Ob[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}wn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vb="firebase-heartbeat-database",Fb=1,ua="firebase-heartbeat-store";let Wh=null;function v1(){return Wh||(Wh=g1(Vb,Fb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),Wh}async function jb(t){try{const n=(await v1()).transaction(ua),r=await n.objectStore(ua).get(_1(t));return await n.done,r}catch(e){if(e instanceof rn)Wn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Dv(t,e){try{const r=(await v1()).transaction(ua,"readwrite");await r.objectStore(ua).put(e,_1(t)),await r.done}catch(n){if(n instanceof rn)Wn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function _1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ub=1024,zb=30*24*60*60*1e3;class Bb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lv(),{heartbeatsToSend:r,unsentEntries:i}=$b(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Wn.warn(n),""}}}function Lv(){return new Date().toISOString().substring(0,10)}function $b(t,e=Ub){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d1()?f1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mv(t){return xu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hb(t){wn(new tn("platform-logger",e=>new ib(e),"PRIVATE")),wn(new tn("heartbeat",e=>new Bb(e),"PRIVATE")),Bt(mf,Nv,t),Bt(mf,Nv,"esm2017"),Bt("fire-js","")}Hb("");function qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function w1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qb=w1,E1=new Ai("auth","Firebase",w1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new gc("@firebase/auth");function Kb(t,...e){ku.logLevel<=se.WARN&&ku.warn(`Auth (${Fs}): ${t}`,...e)}function Ul(t,...e){ku.logLevel<=se.ERROR&&ku.error(`Auth (${Fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Kp(t,...e)}function mn(t,...e){return Kp(t,...e)}function T1(t,e,n){const r=Object.assign(Object.assign({},qb()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return T1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E1.create(t,...e)}function Y(t,e,...n){if(!t)throw Kp(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ul(e),new Error(e)}function Hn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gb(){return Vv()==="http:"||Vv()==="https:"}function Vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gb()||h1()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=TR()||AR()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new ba(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,i={}){return S1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ra(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return SR()||(c.referrerPolicy="no-referrer"),I1.fetch()(A1(t,t.config.apiHost,n,l),c)})}async function S1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xb),e);try{const i=new e2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw El(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw El(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw El(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw El(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw T1(t,d,c);nn(t,d)}}catch(i){if(i instanceof rn)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,n,r,i={}){const s=await Wr(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function A1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}function Zb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),Jb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function El(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}function Fv(t){return t!==void 0&&t.enterprise!==void 0}class t2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function n2(t,e){return Wr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function C1(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i2(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=Qp(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Lo(Hh(i.auth_time)),issuedAtTime:Lo(Hh(i.iat)),expirationTime:Lo(Hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hh(t){return Number(t)*1e3}function Qp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=a1(n);return i?JSON.parse(i):(Ul("Failed to decode base64 JWT payload"),null)}catch(i){return Ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(t){const e=Qp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&s2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function s2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,C1(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?x1(s.providerUserInfo):[],l=l2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new _f(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function a2(t){const e=ut(t);await Ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function x1(t){return t.map(e=>{var{providerId:n}=e,r=qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){const n=await S1(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=A1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",I1.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c2(t,e){return Wr(t,"POST","/v2/accounts:revokeToken",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=jv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await u2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _f(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i2(this,e)}reload(){return a2(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await ca(this,r2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:b,isAnonymous:L,providerData:F,stsTokenManager:E}=n;Y(w&&E,e,"internal-error");const v=cs.fromJSON(this.name,E);Y(typeof w=="string",e,"internal-error"),tr(p,e.name),tr(m,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof L=="boolean",e,"internal-error"),tr(A,e.name),tr(P,e.name),tr(k,e.name),tr(R,e.name),tr(I,e.name),tr(_,e.name);const S=new bn({uid:w,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:L,photoURL:P,phoneNumber:A,tenantId:k,stsTokenManager:v,createdAt:I,lastLoginAt:_});return F&&Array.isArray(F)&&(S.providerData=F.map(T=>Object.assign({},T))),R&&(S._redirectEventId=R),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?x1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new cs;l.updateFromIdToken(r);const u=new bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _f(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Map;function Nn(t){Hn(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
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
 */class P1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}P1.type="NONE";const zv=P1;/**
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
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Nn(zv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nn(zv);const o=zl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=bn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new hs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new hs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(N1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D1(e))return"Blackberry";if(L1(e))return"Webos";if(R1(e))return"Safari";if((e.includes("chrome/")||b1(e))&&!e.includes("edge/"))return"Chrome";if(O1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function k1(t=lt()){return/firefox\//i.test(t)}function R1(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b1(t=lt()){return/crios\//i.test(t)}function N1(t=lt()){return/iemobile/i.test(t)}function O1(t=lt()){return/android/i.test(t)}function D1(t=lt()){return/blackberry/i.test(t)}function L1(t=lt()){return/webos/i.test(t)}function Yp(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function h2(t=lt()){var e;return Yp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d2(){return CR()&&document.documentMode===10}function M1(t=lt()){return Yp(t)||O1(t)||L1(t)||D1(t)||/windows phone/i.test(t)||N1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e=[]){let n;switch(t){case"Browser":n=Bv(lt());break;case"Worker":n=`${Bv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class f2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function p2(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const m2=6;class g2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:m2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new f2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await C1(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Dn(this));const n=e?ut(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p2(this),n=new g2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return ut(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=OR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v2(t){yc=t}function F1(t){return yc.loadJS(t)}function _2(){return yc.recaptchaEnterpriseScript}function w2(){return yc.gapiScript}function E2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class T2{constructor(){this.enterprise=new I2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class I2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const S2="recaptcha-enterprise",j1="NO_RECAPTCHA";class A2{constructor(e){this.type=S2,this.auth=xi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{n2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new t2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(j1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_2();u.length!==0&&(u+=l),F1(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wv(t,e,n,r=!1,i=!1){const s=new A2(t);let o;if(i)o=j1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wf(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Wv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t,e){const n=Ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(la(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function x2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P2(t,e,n){const r=xi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=U1(e),{host:o,port:l}=k2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),R2()}function U1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function k2(t){const e=U1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hv(o)}}}function Hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function b2(t,e){return Wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function D2(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Xp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wf(e,n,"signInWithPassword",N2);case"emailLink":return O2(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wf(e,r,"signUpPassword",b2);case"emailLink":return D2(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="http://localhost";class gi extends Xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V2(t){const e=vo(_o(t)).link,n=e?vo(_o(e)).deep_link_id:null,r=vo(_o(t)).deep_link_id;return(r?vo(_o(r)).link:null)||r||n||e||t}class Jp{constructor(e){var n,r,i,s,o,l;const u=vo(_o(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=M2((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=V2(e);try{return new Jp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jp.parseLink(n);return Y(r,"argument-error"),ha._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends z1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Oa{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Oa{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Oa{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e){return Na(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=qv(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qv(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bu(e,n,r,i)}}function B1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(t,s,e,r):s})}async function j2(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function U2(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await ca(t,B1(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Qp(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e,n=!1){if(dn(t.app))return Promise.reject(Dn(t));const r="signIn",i=await B1(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function z2(t,e){return $1(xi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t){const e=xi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B2(t,e,n){if(dn(t.app))return Promise.reject(Dn(t));const r=xi(t),o=await wf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&W1(t),u}),l=await yi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $2(t,e,n){return dn(t.app)?Promise.reject(Dn(t)):z2(ut(t),js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&W1(t),r})}function W2(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function H2(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function Zp(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function q2(t){return ut(t).signOut()}const Nu="__sak";/**
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
 */class H1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nu,"1"),this.storage.removeItem(Nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=1e3,G2=10;class q1 extends H1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);d2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,G2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q1.type="LOCAL";const Q2=q1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1 extends H1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K1.type="SESSION";const G1=K1;/**
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
 */function Y2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Y2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=em("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function J2(t){gn().location.href=t}/**
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
 */function Q1(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function Z2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tN(){return Q1()?self:null}/**
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
 */const Y1="firebaseLocalStorageDb",nN=1,Ou="firebaseLocalStorage",X1="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([Ou],e?"readwrite":"readonly").objectStore(Ou)}function rN(){const t=indexedDB.deleteDatabase(Y1);return new Da(t).toPromise()}function Ef(){const t=indexedDB.open(Y1,nN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ou,{keyPath:X1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ou)?e(r):(r.close(),await rN(),e(await Ef()))})})}async function Kv(t,e,n){const r=_c(t,!0).put({[X1]:e,value:n});return new Da(r).toPromise()}async function iN(t,e){const n=_c(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=_c(t,!0).delete(e);return new Da(n).toPromise()}const sN=800,oN=3;class J1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ef(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(tN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z2(),!this.activeServiceWorker)return;this.sender=new X2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ef();return await Kv(e,Nu,"1"),await Gv(e,Nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_c(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J1.type="LOCAL";const aN=J1;new ba(3e4,6e4);/**
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
 */function lN(t,e){return e?Nn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tm extends Xp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uN(t){return $1(t.auth,new tm(t),t.bypassAuthState)}function cN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),U2(n,new tm(t),t.bypassAuthState)}async function hN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),j2(n,new tm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uN;case"linkViaPopup":case"linkViaRedirect":return hN;case"reauthViaPopup":case"reauthViaRedirect":return cN;default:nn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=new ba(2e3,1e4);class ns extends Z1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dN.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="pendingRedirect",Bl=new Map;class pN extends Z1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await mN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mN(t,e){const n=vN(e),r=yN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gN(t,e){Bl.set(t._key(),e)}function yN(t){return Nn(t._redirectPersistence)}function vN(t){return zl(fN,t.config.apiKey,t.name)}async function _N(t,e,n=!1){if(dn(t.app))return Promise.reject(Dn(t));const r=xi(t),i=lN(r,e),o=await new pN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=10*60*1e3;class EN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AN=/^https?/;async function CN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IN(t);for(const n of e)try{if(xN(n))return}catch{}nn(t,"unauthorized-domain")}function xN(t){const e=vf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AN.test(n))return!1;if(SN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const PN=new ba(3e4,6e4);function Yv(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kN(t){return new Promise((e,n)=>{var r,i,s;function o(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),n(mn(t,"network-request-failed"))},timeout:PN.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const l=E2("iframefcb");return gn()[l]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},F1(`${w2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $l=null,e})}let $l=null;function RN(t){return $l=$l||kN(t),$l}/**
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
 */const bN=new ba(5e3,15e3),NN="__/auth/iframe",ON="emulator/auth/iframe",DN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,ON):`https://${t.config.authDomain}/${NN}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},i=LN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ra(r).slice(1)}`}async function VN(t){const e=await RN(t),n=gn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:MN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=gn().setTimeout(()=>{s(o)},bN.get());function u(){gn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const FN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jN=500,UN=600,zN="_blank",BN="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $N(t,e,n,r=jN,i=UN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},FN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(l=b1(c)?zN:n),k1(c)&&(e=e||BN,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[A,P])=>`${m}${A}=${P},`,"");if(h2(c)&&l!=="_self")return WN(e||"",l),new Xv(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new Xv(p)}function WN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HN="__/auth/handler",qN="emulator/auth/handler",KN=encodeURIComponent("fac");async function Jv(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:i};if(e instanceof z1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Oa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${KN}=${encodeURIComponent(u)}`:"";return`${GN(t)}?${Ra(l).slice(1)}${c}`}function GN({config:t}){return t.emulator?Gp(t,qN):`https://${t.authDomain}/${HN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="webStorageSupport";class QN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=G1,this._completeRedirectFn=_N,this._overrideRedirectResult=gN}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jv(e,n,r,vf(),i);return $N(e,o,em())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jv(e,n,r,vf(),i);return J2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VN(e),r=new EN(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qh,{type:qh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qh];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M1()||R1()||Yp()}}const YN=QN;var Zv="@firebase/auth",e0="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZN(t){wn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V1(t)},c=new y2(r,i,s,u);return x2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new tn("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(r=>new XN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Zv,e0,JN(t)),Bt(Zv,e0,"esm2017")}/**
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
 */const eO=5*60,tO=c1("authIdTokenMaxAge")||eO;let t0=null;const nO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tO)return;const i=n==null?void 0:n.token;t0!==i&&(t0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rO(t=Hp()){const e=Ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C2(t,{popupRedirectResolver:YN,persistence:[aN,Q2,G1]}),r=c1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nO(s.toString());H2(n,o,()=>o(n.currentUser)),W2(n,l=>o(l))}}const i=l1("auth");return i&&P2(n,`http://${i}`),n}function iO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}v2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZN("Browser");var sO="firebase",oO="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(sO,oO,"app");const tT="@firebase/installations",nm="0.6.10";/**
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
 */const nT=1e4,rT=`w:${nm}`,iT="FIS_v2",aO="https://firebaseinstallations.googleapis.com/v1",lO=60*60*1e3,uO="installations",cO="Installations";/**
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
 */const hO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vi=new Ai(uO,cO,hO);function sT(t){return t instanceof rn&&t.code.includes("request-failed")}/**
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
 */function oT({projectId:t}){return`${aO}/projects/${t}/installations`}function aT(t){return{token:t.token,requestStatus:2,expiresIn:fO(t.expiresIn),creationTime:Date.now()}}async function lT(t,e){const r=(await e.json()).error;return vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function uT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dO(t,{refreshToken:e}){const n=uT(t);return n.append("Authorization",pO(e)),n}async function cT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fO(t){return Number(t.replace("s","000"))}function pO(t){return`${iT} ${t}`}/**
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
 */async function mO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=oT(t),i=uT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:iT,appId:t.appId,sdkVersion:rT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:aT(c.authToken)}}else throw await lT("Create Installation",u)}/**
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
 */function hT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function gO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yO=/^[cdef][\w-]{21}$/,Tf="";function vO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_O(t);return yO.test(n)?n:Tf}catch{return Tf}}function _O(t){return gO(t).substr(0,22)}/**
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
 */function wc(t){return`${t.appName}!${t.appId}`}/**
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
 */const dT=new Map;function fT(t,e){const n=wc(t);pT(n,e),wO(n,e)}function pT(t,e){const n=dT.get(t);if(n)for(const r of n)r(e)}function wO(t,e){const n=EO();n&&n.postMessage({key:t,fid:e}),TO()}let ni=null;function EO(){return!ni&&"BroadcastChannel"in self&&(ni=new BroadcastChannel("[Firebase] FID Change"),ni.onmessage=t=>{pT(t.data.key,t.data.fid)}),ni}function TO(){dT.size===0&&ni&&(ni.close(),ni=null)}/**
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
 */const IO="firebase-installations-database",SO=1,_i="firebase-installations-store";let Kh=null;function rm(){return Kh||(Kh=g1(IO,SO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_i)}}})),Kh}async function Du(t,e){const n=wc(t),i=(await rm()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&fT(t,e.fid),e}async function mT(t){const e=wc(t),r=(await rm()).transaction(_i,"readwrite");await r.objectStore(_i).delete(e),await r.done}async function Ec(t,e){const n=wc(t),i=(await rm()).transaction(_i,"readwrite"),s=i.objectStore(_i),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&fT(t,l.fid),l}/**
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
 */async function im(t){let e;const n=await Ec(t.appConfig,r=>{const i=AO(r),s=CO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Tf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function AO(t){const e=t||{fid:vO(),registrationStatus:0};return gT(e)}function CO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:PO(t)}:{installationEntry:e}}async function xO(t,e){try{const n=await mO(t,e);return Du(t.appConfig,n)}catch(n){throw sT(n)&&n.customData.serverCode===409?await mT(t.appConfig):await Du(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function PO(t){let e=await n0(t.appConfig);for(;e.registrationStatus===1;)await hT(100),e=await n0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await im(t);return r||n}return e}function n0(t){return Ec(t,e=>{if(!e)throw vi.create("installation-not-found");return gT(e)})}function gT(t){return kO(t)?{fid:t.fid,registrationStatus:0}:t}function kO(t){return t.registrationStatus===1&&t.registrationTime+nT<Date.now()}/**
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
 */async function RO({appConfig:t,heartbeatServiceProvider:e},n){const r=bO(t,n),i=dO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:rT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await cT(()=>fetch(r,l));if(u.ok){const c=await u.json();return aT(c)}else throw await lT("Generate Auth Token",u)}function bO(t,{fid:e}){return`${oT(t)}/${e}/authTokens:generate`}/**
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
 */async function sm(t,e=!1){let n;const r=await Ec(t.appConfig,s=>{if(!yT(s))throw vi.create("not-registered");const o=s.authToken;if(!e&&DO(o))return s;if(o.requestStatus===1)return n=NO(t,e),s;{if(!navigator.onLine)throw vi.create("app-offline");const l=MO(s);return n=OO(t,l),l}});return n?await n:r.authToken}async function NO(t,e){let n=await r0(t.appConfig);for(;n.authToken.requestStatus===1;)await hT(100),n=await r0(t.appConfig);const r=n.authToken;return r.requestStatus===0?sm(t,e):r}function r0(t){return Ec(t,e=>{if(!yT(e))throw vi.create("not-registered");const n=e.authToken;return VO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OO(t,e){try{const n=await RO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Du(t.appConfig,r),n}catch(n){if(sT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Du(t.appConfig,r)}throw n}}function yT(t){return t!==void 0&&t.registrationStatus===2}function DO(t){return t.requestStatus===2&&!LO(t)}function LO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+lO}function MO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VO(t){return t.requestStatus===1&&t.requestTime+nT<Date.now()}/**
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
 */async function FO(t){const e=t,{installationEntry:n,registrationPromise:r}=await im(e);return r?r.catch(console.error):sm(e).catch(console.error),n.fid}/**
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
 */async function jO(t,e=!1){const n=t;return await UO(n),(await sm(n,e)).token}async function UO(t){const{registrationPromise:e}=await im(t);e&&await e}/**
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
 */function zO(t){if(!t||!t.options)throw Gh("App Configuration");if(!t.name)throw Gh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Gh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Gh(t){return vi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="installations",BO="installations-internal",$O=t=>{const e=t.getProvider("app").getImmediate(),n=zO(e),r=Ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WO=t=>{const e=t.getProvider("app").getImmediate(),n=Ci(e,vT).getImmediate();return{getId:()=>FO(n),getToken:i=>jO(n,i)}};function HO(){wn(new tn(vT,$O,"PUBLIC")),wn(new tn(BO,WO,"PRIVATE"))}HO();Bt(tT,nm);Bt(tT,nm,"esm2017");/**
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
 */const Lu="analytics",qO="firebase_id",KO="origin",GO=60*1e3,QO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",om="https://www.googletagmanager.com/gtag/js";/**
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
 */const It=new gc("@firebase/analytics");/**
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
 */const YO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Ai("analytics","Analytics",YO);/**
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
 */function XO(t){if(!t.startsWith(om)){const e=Rt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function _T(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZO(t,e){const n=JO("firebase-js-sdk-policy",{createScriptURL:XO}),r=document.createElement("script"),i=`${om}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await _T(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){It.error(l)}t("config",i,s)}async function nD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await _T(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function rD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await nD(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await tD(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){It.error(l)}}return i}function iD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=rD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function sD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(om)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=30,aD=1e3;class lD{constructor(e={},n=aD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wT=new lD;function uD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:uD(r)},s=QO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function hD(t,e=wT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Rt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new pD;return setTimeout(async()=>{l.abort()},GO),ET({appId:r,apiKey:i,measurementId:s},o,l,e)}async function ET(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=wT){var s;const{appId:o,measurementId:l}=t;try{await dD(r,e)}catch(u){if(l)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await cD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!fD(c)){if(i.deleteThrottleMetadata(o),l)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pv(n,i.intervalMillis,oD):Pv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),It.debug(`Calling attemptFetch again in ${d} millis`),ET(t,p,r,i)}}function dD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fD(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(){if(d1())try{await f1()}catch(t){return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yD(t,e,n,r,i,s,o){var l;const u=hD(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>It.error(A)),e.push(u);const c=gD().then(A=>{if(A)return r.getId()}),[d,p]=await Promise.all([u,c]);sD(s)||ZO(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[KO]="firebase",m.update=!0,p!=null&&(m[qO]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class vD{constructor(e){this.app=e}_delete(){return delete Mo[this.app.options.appId],Promise.resolve()}}let Mo={},i0=[];const s0={};let Qh="dataLayer",_D="gtag",o0,TT,a0=!1;function wD(){const t=[];if(h1()&&t.push("This is a browser extension environment."),PR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Rt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function ED(t,e,n){wD();const r=t.options.appId;if(!r)throw Rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(Mo[r]!=null)throw Rt.create("already-exists",{id:r});if(!a0){eD(Qh);const{wrappedGtag:s,gtagCore:o}=iD(Mo,i0,s0,Qh,_D);TT=s,o0=o,a0=!0}return Mo[r]=yD(t,i0,s0,e,o0,Qh,n),new vD(t)}function TD(t=Hp()){t=ut(t);const e=Ci(t,Lu);return e.isInitialized()?e.getImmediate():ID(t)}function ID(t,e={}){const n=Ci(t,Lu);if(n.isInitialized()){const i=n.getImmediate();if(la(e,n.getOptions()))return i;throw Rt.create("already-initialized")}return n.initialize({options:e})}function SD(t,e,n,r){t=ut(t),mD(TT,Mo[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const l0="@firebase/analytics",u0="0.10.9";function AD(){wn(new tn(Lu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return ED(r,i,n)},"PUBLIC")),wn(new tn("analytics-internal",t,"PRIVATE")),Bt(l0,u0),Bt(l0,u0,"esm2017");function t(e){try{const n=e.getProvider(Lu).getImmediate();return{logEvent:(r,i,s)=>SD(n,r,i,s)}}catch(n){throw Rt.create("interop-component-reg-failed",{reason:n})}}}AD();var c0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li,IT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function S(){}S.prototype=v.prototype,E.D=v.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(T,x,N){for(var C=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)C[ct-2]=arguments[ct];return v.prototype[x].apply(T,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,S){S||(S=0);var T=Array(16);if(typeof v=="string")for(var x=0;16>x;++x)T[x]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(x=0;16>x;++x)T[x]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=E.g[0],S=E.g[1],x=E.g[2];var N=E.g[3],C=v+(N^S&(x^N))+T[0]+3614090360&4294967295;v=S+(C<<7&4294967295|C>>>25),C=N+(x^v&(S^x))+T[1]+3905402710&4294967295,N=v+(C<<12&4294967295|C>>>20),C=x+(S^N&(v^S))+T[2]+606105819&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(v^x&(N^v))+T[3]+3250441966&4294967295,S=x+(C<<22&4294967295|C>>>10),C=v+(N^S&(x^N))+T[4]+4118548399&4294967295,v=S+(C<<7&4294967295|C>>>25),C=N+(x^v&(S^x))+T[5]+1200080426&4294967295,N=v+(C<<12&4294967295|C>>>20),C=x+(S^N&(v^S))+T[6]+2821735955&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(v^x&(N^v))+T[7]+4249261313&4294967295,S=x+(C<<22&4294967295|C>>>10),C=v+(N^S&(x^N))+T[8]+1770035416&4294967295,v=S+(C<<7&4294967295|C>>>25),C=N+(x^v&(S^x))+T[9]+2336552879&4294967295,N=v+(C<<12&4294967295|C>>>20),C=x+(S^N&(v^S))+T[10]+4294925233&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(v^x&(N^v))+T[11]+2304563134&4294967295,S=x+(C<<22&4294967295|C>>>10),C=v+(N^S&(x^N))+T[12]+1804603682&4294967295,v=S+(C<<7&4294967295|C>>>25),C=N+(x^v&(S^x))+T[13]+4254626195&4294967295,N=v+(C<<12&4294967295|C>>>20),C=x+(S^N&(v^S))+T[14]+2792965006&4294967295,x=N+(C<<17&4294967295|C>>>15),C=S+(v^x&(N^v))+T[15]+1236535329&4294967295,S=x+(C<<22&4294967295|C>>>10),C=v+(x^N&(S^x))+T[1]+4129170786&4294967295,v=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(v^S))+T[6]+3225465664&4294967295,N=v+(C<<9&4294967295|C>>>23),C=x+(v^S&(N^v))+T[11]+643717713&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^v&(x^N))+T[0]+3921069994&4294967295,S=x+(C<<20&4294967295|C>>>12),C=v+(x^N&(S^x))+T[5]+3593408605&4294967295,v=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(v^S))+T[10]+38016083&4294967295,N=v+(C<<9&4294967295|C>>>23),C=x+(v^S&(N^v))+T[15]+3634488961&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^v&(x^N))+T[4]+3889429448&4294967295,S=x+(C<<20&4294967295|C>>>12),C=v+(x^N&(S^x))+T[9]+568446438&4294967295,v=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(v^S))+T[14]+3275163606&4294967295,N=v+(C<<9&4294967295|C>>>23),C=x+(v^S&(N^v))+T[3]+4107603335&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^v&(x^N))+T[8]+1163531501&4294967295,S=x+(C<<20&4294967295|C>>>12),C=v+(x^N&(S^x))+T[13]+2850285829&4294967295,v=S+(C<<5&4294967295|C>>>27),C=N+(S^x&(v^S))+T[2]+4243563512&4294967295,N=v+(C<<9&4294967295|C>>>23),C=x+(v^S&(N^v))+T[7]+1735328473&4294967295,x=N+(C<<14&4294967295|C>>>18),C=S+(N^v&(x^N))+T[12]+2368359562&4294967295,S=x+(C<<20&4294967295|C>>>12),C=v+(S^x^N)+T[5]+4294588738&4294967295,v=S+(C<<4&4294967295|C>>>28),C=N+(v^S^x)+T[8]+2272392833&4294967295,N=v+(C<<11&4294967295|C>>>21),C=x+(N^v^S)+T[11]+1839030562&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^v)+T[14]+4259657740&4294967295,S=x+(C<<23&4294967295|C>>>9),C=v+(S^x^N)+T[1]+2763975236&4294967295,v=S+(C<<4&4294967295|C>>>28),C=N+(v^S^x)+T[4]+1272893353&4294967295,N=v+(C<<11&4294967295|C>>>21),C=x+(N^v^S)+T[7]+4139469664&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^v)+T[10]+3200236656&4294967295,S=x+(C<<23&4294967295|C>>>9),C=v+(S^x^N)+T[13]+681279174&4294967295,v=S+(C<<4&4294967295|C>>>28),C=N+(v^S^x)+T[0]+3936430074&4294967295,N=v+(C<<11&4294967295|C>>>21),C=x+(N^v^S)+T[3]+3572445317&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^v)+T[6]+76029189&4294967295,S=x+(C<<23&4294967295|C>>>9),C=v+(S^x^N)+T[9]+3654602809&4294967295,v=S+(C<<4&4294967295|C>>>28),C=N+(v^S^x)+T[12]+3873151461&4294967295,N=v+(C<<11&4294967295|C>>>21),C=x+(N^v^S)+T[15]+530742520&4294967295,x=N+(C<<16&4294967295|C>>>16),C=S+(x^N^v)+T[2]+3299628645&4294967295,S=x+(C<<23&4294967295|C>>>9),C=v+(x^(S|~N))+T[0]+4096336452&4294967295,v=S+(C<<6&4294967295|C>>>26),C=N+(S^(v|~x))+T[7]+1126891415&4294967295,N=v+(C<<10&4294967295|C>>>22),C=x+(v^(N|~S))+T[14]+2878612391&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~v))+T[5]+4237533241&4294967295,S=x+(C<<21&4294967295|C>>>11),C=v+(x^(S|~N))+T[12]+1700485571&4294967295,v=S+(C<<6&4294967295|C>>>26),C=N+(S^(v|~x))+T[3]+2399980690&4294967295,N=v+(C<<10&4294967295|C>>>22),C=x+(v^(N|~S))+T[10]+4293915773&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~v))+T[1]+2240044497&4294967295,S=x+(C<<21&4294967295|C>>>11),C=v+(x^(S|~N))+T[8]+1873313359&4294967295,v=S+(C<<6&4294967295|C>>>26),C=N+(S^(v|~x))+T[15]+4264355552&4294967295,N=v+(C<<10&4294967295|C>>>22),C=x+(v^(N|~S))+T[6]+2734768916&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~v))+T[13]+1309151649&4294967295,S=x+(C<<21&4294967295|C>>>11),C=v+(x^(S|~N))+T[4]+4149444226&4294967295,v=S+(C<<6&4294967295|C>>>26),C=N+(S^(v|~x))+T[11]+3174756917&4294967295,N=v+(C<<10&4294967295|C>>>22),C=x+(v^(N|~S))+T[2]+718787259&4294967295,x=N+(C<<15&4294967295|C>>>17),C=S+(N^(x|~v))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var S=v-this.blockSize,T=this.B,x=this.h,N=0;N<v;){if(x==0)for(;N<=S;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<v;)if(T[x++]=E.charCodeAt(N++),x==this.blockSize){i(this,T),x=0;break}}else for(;N<v;)if(T[x++]=E[N++],x==this.blockSize){i(this,T),x=0;break}}this.h=x,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var S=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=S&255,S/=256;for(this.u(E),E=Array(16),v=S=0;4>v;++v)for(var T=0;32>T;T+=8)E[S++]=this.g[v]>>>T&255;return E};function s(E,v){var S=l;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=v(E)}function o(E,v){this.h=v;for(var S=[],T=!0,x=E.length-1;0<=x;x--){var N=E[x]|0;T&&N==v||(S[x]=N,T=!1)}this.g=S}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return R(c(-E));for(var v=[],S=1,T=0;E>=S;T++)v[T]=E/S|0,S*=4294967296;return new o(v,0)}function d(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return R(d(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),T=p,x=0;x<E.length;x+=8){var N=Math.min(8,E.length-x),C=parseInt(E.substring(x,x+N),v);8>N?(N=c(Math.pow(v,N)),T=T.j(N).add(c(C))):(T=T.j(S),T=T.add(c(C)))}return T}var p=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var E=0,v=1,S=0;S<this.g.length;S++){var T=this.i(S);E+=(0<=T?T:4294967296+T)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var v=c(Math.pow(E,6)),S=this,T="";;){var x=b(S,v).g;S=I(S,x.j(v));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=x,P(S))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=I(this,E),k(E)?-1:P(E)?0:1};function R(E){for(var v=E.g.length,S=[],T=0;T<v;T++)S[T]=~E.g[T];return new o(S,~E.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],T=0,x=0;x<=v;x++){var N=T+(this.i(x)&65535)+(E.i(x)&65535),C=(N>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);T=C>>>16,N&=65535,C&=65535,S[x]=C<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(E,v){return E.add(R(v))}t.j=function(E){if(P(this)||P(E))return p;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(A)&&0>E.l(A))return c(this.m()*E.m());for(var v=this.g.length+E.g.length,S=[],T=0;T<2*v;T++)S[T]=0;for(T=0;T<this.g.length;T++)for(var x=0;x<E.g.length;x++){var N=this.i(T)>>>16,C=this.i(T)&65535,ct=E.i(x)>>>16,In=E.i(x)&65535;S[2*T+2*x]+=C*In,_(S,2*T+2*x),S[2*T+2*x+1]+=N*In,_(S,2*T+2*x+1),S[2*T+2*x+1]+=C*ct,_(S,2*T+2*x+1),S[2*T+2*x+2]+=N*ct,_(S,2*T+2*x+2)}for(T=0;T<v;T++)S[T]=S[2*T+1]<<16|S[2*T];for(T=v;T<2*v;T++)S[T]=0;return new o(S,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function w(E,v){this.g=E,this.h=v}function b(E,v){if(P(v))throw Error("division by zero");if(P(E))return new w(p,p);if(k(E))return v=b(R(E),v),new w(R(v.g),R(v.h));if(k(v))return v=b(E,R(v)),new w(R(v.g),v.h);if(30<E.g.length){if(k(E)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,T=v;0>=T.l(E);)S=L(S),T=L(T);var x=F(S,1),N=F(T,1);for(T=F(T,2),S=F(S,2);!P(T);){var C=N.add(T);0>=C.l(E)&&(x=x.add(S),N=C),T=F(T,1),S=F(S,1)}return v=I(E,x.j(v)),new w(x,v)}for(x=p;0<=E.l(v);){for(S=Math.max(1,Math.floor(E.m()/v.m())),T=Math.ceil(Math.log(S)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=c(S),C=N.j(v);k(C)||0<C.l(E);)S-=T,N=c(S),C=N.j(v);P(N)&&(N=m),x=x.add(N),E=I(E,C)}return new w(x,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],T=0;T<v;T++)S[T]=this.i(T)&E.i(T);return new o(S,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],T=0;T<v;T++)S[T]=this.i(T)|E.i(T);return new o(S,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),S=[],T=0;T<v;T++)S[T]=this.i(T)^E.i(T);return new o(S,this.h^E.h)};function L(E){for(var v=E.g.length+1,S=[],T=0;T<v;T++)S[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(S,E.h)}function F(E,v){var S=v>>5;v%=32;for(var T=E.g.length-S,x=[],N=0;N<T;N++)x[N]=0<v?E.i(N+S)>>>v|E.i(N+S+1)<<32-v:E.i(N+S);return new o(x,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,IT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,li=o}).apply(typeof c0<"u"?c0:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ST,wo,AT,Wl,If,CT,xT,PT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in f))break e;f=f[O]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,O={next:function(){if(!y&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function A(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,O,D){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return h.prototype[O].apply(y,z)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const O=a.length||0,D=y.length||0;a.length=O+D;for(let z=0;z<D;z++)a[O+z]=y[z]}else a.push(y)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)a[f]=y[f];for(let D=0;D<S.length;D++)f=S[D],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function x(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ct{constructor(){this.h=this.g=null}add(h,f){const y=In.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var In=new I(()=>new sn,a=>a.reset());class sn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,$=!1,X=new ct,ne=()=>{const a=l.Promise.resolve(void 0);Ht=()=>{a.then(B)}};var B=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){N(f)}var h=In;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function fe(a,h){if(G.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{b(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Le[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fe.aa.h.call(this)}}P(fe,G);var Le={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Mm=0;function GI(a,h,f,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=O,this.key=++Mm,this.da=this.fa=!1}function ja(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ua(a){this.src=a,this.g={},this.h=0}Ua.prototype.add=function(a,h,f,y,O){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=jc(a,h,y,O);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new GI(h,this.src,D,!!y,O),h.fa=f,a.push(h)),h};function Fc(a,h){var f=h.type;if(f in a.g){var y=a.g[f],O=Array.prototype.indexOf.call(y,h,void 0),D;(D=0<=O)&&Array.prototype.splice.call(y,O,1),D&&(ja(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function jc(a,h,f,y){for(var O=0;O<a.length;++O){var D=a[O];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==y)return O}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),zc={};function Vm(a,h,f,y,O){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Vm(a,h[D],f,y,O);return null}return f=Um(f),a&&a[Xe]?a.K(h,f,c(y)?!!y.capture:!!y,O):QI(a,h,f,!1,y,O)}function QI(a,h,f,y,O,D){if(!h)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,me=$c(a);if(me||(a[Uc]=me=new Ua(a)),f=me.add(h,f,y,z,D),f.proxy)return f;if(y=YI(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)ce||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(jm(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function YI(){function a(f){return h.call(a.src,a.listener,f)}const h=XI;return a}function Fm(a,h,f,y,O){if(Array.isArray(h))for(var D=0;D<h.length;D++)Fm(a,h[D],f,y,O);else y=c(y)?!!y.capture:!!y,f=Um(f),a&&a[Xe]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=jc(D,f,y,O),-1<f&&(ja(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=$c(a))&&(h=a.g[h.toString()],a=-1,h&&(a=jc(h,f,y,O)),(f=-1<a?h[a]:null)&&Bc(f))}function Bc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Xe])Fc(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(jm(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=$c(h))?(Fc(f,a),f.h==0&&(f.src=null,h[Uc]=null)):ja(a)}}}function jm(a){return a in zc?zc[a]:zc[a]="on"+a}function XI(a,h){if(a.da)a=!0;else{h=new fe(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Bc(a),a=f.call(y,h)}return a}function $c(a){return a=a[Uc],a instanceof Ua?a:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Um(a){return typeof a=="function"?a:(a[Wc]||(a[Wc]=function(h){return a.handleEvent(h)}),a[Wc])}function Je(){J.call(this),this.i=new Ua(this),this.M=this,this.F=null}P(Je,J),Je.prototype[Xe]=!0,Je.prototype.removeEventListener=function(a,h,f,y){Fm(this,a,h,f,y)};function ht(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new G(h,a);else if(h instanceof G)h.target=h.target||a;else{var O=h;h=new G(y,a),T(h,O)}if(O=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];O=za(z,y,!0,h)&&O}if(z=h.g=a,O=za(z,y,!0,h)&&O,O=za(z,y,!1,h)&&O,f)for(D=0;D<f.length;D++)z=h.g=f[D],O=za(z,y,!1,h)&&O}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)ja(f[y]);delete a.g[h],a.h--}}this.F=null},Je.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Je.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function za(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var me=z.listener,We=z.ha||z.src;z.fa&&Fc(a.i,z),O=me.call(We,y)!==!1&&O}}return O&&!y.defaultPrevented}function zm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Bm(a){a.g=zm(()=>{a.g=null,a.i&&(a.i=!1,Bm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class JI extends J{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Bm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ws(a){J.call(this),this.h=a,this.g={}}P(Ws,J);var $m=[];function Wm(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bc(h)},a),a.g={}}Ws.prototype.N=function(){Ws.aa.N.call(this),Wm(this)},Ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hc=l.JSON.stringify,ZI=l.JSON.parse,eS=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qc(){}qc.prototype.h=null;function Hm(a){return a.h||(a.h=a.i())}function qm(){}var Hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kc(){G.call(this,"d")}P(Kc,G);function Gc(){G.call(this,"c")}P(Gc,G);var Hr={},Km=null;function Ba(){return Km=Km||new Je}Hr.La="serverreachability";function Gm(a){G.call(this,Hr.La,a)}P(Gm,G);function qs(a){const h=Ba();ht(h,new Gm(h))}Hr.STAT_EVENT="statevent";function Qm(a,h){G.call(this,Hr.STAT_EVENT,a),this.stat=h}P(Qm,G);function dt(a){const h=Ba();ht(h,new Qm(h,a))}Hr.Ma="timingevent";function Ym(a,h){G.call(this,Hr.Ma,a),this.size=h}P(Ym,G);function Ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function tS(a,h,f,y,O,D){a.info(function(){if(a.g)if(D)for(var z="",me=D.split("&"),We=0;We<me.length;We++){var he=me[We].split("=");if(1<he.length){var Ze=he[0];he=he[1];var et=Ze.split("_");z=2<=et.length&&et[1]=="type"?z+(Ze+"="+he+"&"):z+(Ze+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+f+`
`+z})}function nS(a,h,f,y,O,D,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+f+`
`+D+" "+z})}function Ni(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+iS(a,f)+(y?" "+y:"")})}function rS(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function iS(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return Hc(f)}catch{return h}}var $a={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qc;function Wa(){}P(Wa,qc),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},Qc=new Wa;function Yn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new Ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jm}function Jm(){this.i=null,this.g="",this.h=!1}var Zm={},Yc={};function Xc(a,h,f){a.L=1,a.v=Ga(Sn(h)),a.m=f,a.P=!0,eg(a,null)}function eg(a,h){a.F=Date.now(),Ha(a),a.A=Sn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),pg(f.i,"t",y),a.C=0,f=a.j.J,a.h=new Jm,a.g=Ng(a.j,f?h:null,!a.m),0<a.O&&(a.M=new JI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&($m[0]=O.toString()),O=$m);for(var D=0;D<O.length;D++){var z=Vm(f,O[D],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),qs(),tS(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const et=An(this.g);var h=this.g.Ba();const Li=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Eg(this.g)))){this.J||et!=4||h==7||(h==8||0>=Li?qs(3):qs(2)),Jc(this);var f=this.g.Z();this.X=f;t:if(tg(this)){var y=Eg(this.g);a="";var O=y.length,D=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),Qs(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(D&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,nS(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,We=this.g;if((me=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(me)){var he=me;break t}}he=null}if(f=he)Ni(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zc(this,f);else{this.o=!1,this.s=3,dt(12),qr(this),Qs(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<z.length;)if(qt=sS(this,z),qt==Yc){et==4&&(this.s=4,dt(14),f=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Zm){this.s=4,dt(15),Ni(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Ni(this.i,this.l,qt,null),Zc(this,qt);if(tg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||z.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Ni(this.i,this.l,z,"[Invalid Chunked Response]"),qr(this),Qs(this);else if(0<z.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),sh(Ze),Ze.M=!0,dt(11))}}else Ni(this.i,this.l,z,null),Zc(this,z);et==4&&qr(this),this.o&&!this.J&&(et==4?Pg(this.j,this):(this.o=!1,Ha(this)))}else TS(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),qr(this),Qs(this)}}}catch{}finally{}};function tg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sS(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Yc:(f=Number(h.substring(f,y)),isNaN(f)?Zm:(y+=1,y+f>h.length?Yc:(h=h.slice(y,y+f),a.C=y+f,h)))}Yn.prototype.cancel=function(){this.J=!0,qr(this)};function Ha(a){a.S=Date.now()+a.I,ng(a,a.I)}function ng(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ks(m(a.ba,a),h)}function Jc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(rS(this.i,this.A),this.L!=2&&(qs(),dt(17)),qr(this),this.s=2,Qs(this)):ng(this,this.S-a)};function Qs(a){a.j.G==0||a.J||Pg(a.j,a)}function qr(a){Jc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Zc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||eh(f.h,a))){if(!a.K&&eh(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)el(f),Ja(f);else break e;ih(f),dt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ks(m(f.Za,f),6e3));if(1>=sg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Gr(f,11)}else if((a.K||f.g==a)&&el(f),!_(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let he=O[h];if(f.T=he[0],he=he[1],f.G==2)if(he[0]=="c"){f.K=he[1],f.ia=he[2];const Ze=he[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=he[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const Li=he[5];Li!=null&&typeof Li=="number"&&0<Li&&(y=1.5*Li,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const qt=a.g;if(qt){const nl=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var D=y.h;D.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(th(D,D.h),D.h=null))}if(y.D){const oh=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;oh&&(y.ya=oh,ye(y.I,y.D,oh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=a;if(y.qa=bg(y,y.J?y.ia:null,y.W),z.K){og(y.h,z);var me=z,We=y.L;We&&(me.I=We),me.B&&(Jc(me),Ha(me)),y.g=z}else Cg(y);0<f.i.length&&Za(f)}else he[0]!="stop"&&he[0]!="close"||Gr(f,7);else f.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Gr(f,7):rh(f):he[0]!="noop"&&f.l&&f.l.ta(he),f.v=0)}}qs(4)}catch{}}var oS=class{constructor(a,h){this.g=a,this.map=h}};function rg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ig(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sg(a){return a.h?1:a.g?a.g.size:0}function eh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function th(a,h){a.g?a.g.add(h):a.h=h}function og(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rg.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ag(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function aS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function lS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function lg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=lS(a),y=aS(a),O=y.length,D=0;D<O;D++)h.call(void 0,y[D],f&&f[D],a)}var ug=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),O=null;if(0<=y){var D=a[f].substring(0,y);O=a[f].substring(y+1)}else D=a[f];h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Kr){this.h=a.h,qa(this,a.j),this.o=a.o,this.g=a.g,Ka(this,a.s),this.l=a.l;var h=a.i,f=new Js;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),cg(this,f),this.m=a.m}else a&&(h=String(a).match(ug))?(this.h=!1,qa(this,h[1]||"",!0),this.o=Ys(h[2]||""),this.g=Ys(h[3]||"",!0),Ka(this,h[4]),this.l=Ys(h[5]||"",!0),cg(this,h[6]||"",!0),this.m=Ys(h[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}Kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Xs(h,hg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xs(h,hg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Xs(f,f.charAt(0)=="/"?dS:hS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Xs(f,pS)),a.join("")};function Sn(a){return new Kr(a)}function qa(a,h,f){a.j=f?Ys(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ka(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function cg(a,h,f){h instanceof Js?(a.i=h,mS(a.i,a.h)):(f||(h=Xs(h,fS)),a.i=new Js(h,a.h))}function ye(a,h,f){a.i.set(h,f)}function Ga(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ys(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,cS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hg=/[#\/\?@]/g,hS=/[#\?:]/g,dS=/[#\?]/g,fS=/[#\?@]/g,pS=/#/g;function Js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&uS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Js.prototype,t.add=function(a,h){Xn(this),this.i=null,a=Oi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function dg(a,h){Xn(a),h=Oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function fg(a,h){return Xn(a),h=Oi(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,y){f.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const O=a[y];for(let D=0;D<O.length;D++)f.push(h[y])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")fg(this,a)&&(h=h.concat(this.g.get(Oi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=Oi(this,a),fg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function pg(a,h,f){dg(a,h),0<f.length&&(a.i=null,a.g.set(Oi(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const D=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var O=D;z[y]!==""&&(O+="="+encodeURIComponent(String(z[y]))),a.push(O)}}return this.i=a.join("&")};function Oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function mS(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,y){var O=y.toLowerCase();y!=O&&(dg(this,y),pg(this,O,f))},a)),a.j=h}function gS(a,h){const f=new Gs;if(l.Image){const y=new Image;y.onload=A(Jn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=A(Jn,f,"TestLoadImage: error",!1,h,y),y.onabort=A(Jn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=A(Jn,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function yS(a,h){const f=new Gs,y=new AbortController,O=setTimeout(()=>{y.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(O),D.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function vS(){this.g=new eS}function _S(a,h,f){const y=f||"";try{lg(a,function(O,D){let z=O;c(O)&&(z=Hc(O)),h.push(y+D+"="+encodeURIComponent(z))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function Qa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Qa,qc),Qa.prototype.g=function(){return new Ya(this.l,this.j)},Qa.prototype.i=function(a){return function(){return a}}({});function Ya(a,h){Je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ya,Je),t=Ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,eo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):eo(this),this.readyState==3&&mg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Qa=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,eo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function eo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gg(a){let h="";return F(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function nh(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=gg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ye(a,h,f))}function xe(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(xe,Je);var wS=/^https?$/i,ES=["POST","PUT"];t=xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qc.g(),this.v=this.o?Hm(this.o):Hm(Qc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){yg(this,D);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())f.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ES,h,void 0))||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){yg(this,D)}};function yg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,vg(a),Xa(a)}function vg(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_g(this):this.bb())},t.bb=function(){_g(this)};function _g(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)zm(a.Ea,0,a);else if(ht(a,"readystatechange"),An(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=z===0){var O=String(a.D).match(ug)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!wS.test(O?O.toLowerCase():"")}f=y}if(f)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var D=2<An(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",vg(a)}}finally{Xa(a)}}}}function Xa(a,h){if(a.g){wg(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ht(a,"ready");try{f.onreadystatechange=y}catch{}}}function wg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ZI(h)}};function Eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function TS(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=x(a[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[O]||[];h[O]=D,D.push(f)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Tg(a){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,a),this.cb=to("retryDelaySeedMs",1e4,a),this.Wa=to("forwardChannelMaxRetries",2,a),this.wa=to("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rg(a&&a.concurrentRequestLimit),this.Da=new vS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Tg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){dt(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=bg(this,null,this.W),Za(this)};function rh(a){if(Ig(a),a.G==3){var h=a.U++,f=Sn(a.I);if(ye(f,"SID",a.K),ye(f,"RID",h),ye(f,"TYPE","terminate"),no(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Ga(Sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ng(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ha(h)}Rg(a)}function Ja(a){a.g&&(sh(a),a.g.cancel(),a.g=null)}function Ig(a){Ja(a),a.u&&(l.clearTimeout(a.u),a.u=null),el(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Za(a){if(!ig(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ht||ne(),$||(Ht(),$=!0),X.add(h,a),a.B=0}}function IS(a,h){return sg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ks(m(a.Ga,a,h),kg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Yn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ag(this,O,h),f=Sn(this.I),ye(f,"RID",a),ye(f,"CVER",22),this.D&&ye(f,"X-HTTP-Session-Id",this.D),no(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(gg(D)))+"&"+h:this.m&&nh(f,this.m,D)),th(this.h,O),this.Ua&&ye(f,"TYPE","init"),this.P?(ye(f,"$req",h),ye(f,"SID","null"),O.T=!0,Xc(O,f,null)):Xc(O,f,h),this.G=2}}else this.G==3&&(a?Sg(this,a):this.i.length==0||ig(this.h)||Sg(this))};function Sg(a,h){var f;h?f=h.l:f=a.U++;const y=Sn(a.I);ye(y,"SID",a.K),ye(y,"RID",f),ye(y,"AID",a.T),no(a,y),a.m&&a.o&&nh(y,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ag(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),th(a.h,f),Xc(f,y,h)}function no(a,h){a.H&&F(a.H,function(f,y){ye(h,y,f)}),a.l&&lg({},function(f,y){ye(h,y,f)})}function Ag(a,h,f){f=Math.min(a.i.length,f);var y=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=O[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let me=!0;for(let We=0;We<f;We++){let he=O[We].g;const Ze=O[We].map;if(he-=D,0>he)D=Math.max(0,O[We].g-100),me=!1;else try{_S(Ze,z,"req"+he+"_")}catch{y&&y(Ze)}}if(me){y=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function Cg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ht||ne(),$||(Ht(),$=!0),X.add(h,a),a.v=0}}function ih(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ks(m(a.Fa,a),kg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,xg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ks(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Ja(this),xg(this))};function sh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function xg(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),no(a,h),a.m&&a.o&&nh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ga(Sn(h)),f.m=null,f.P=!0,eg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),ih(this),dt(19))};function el(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pg(a,h){var f=null;if(a.g==h){el(a),sh(a),a.g=null;var y=2}else if(eh(a.h,h))f=h.D,og(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Ba(),ht(y,new Ym(y,f)),Za(a)}else Cg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&IS(a,h)||y==2&&ih(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function kg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Gr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),y=a.Xa;const O=!y;y=new Kr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qa(y,"https"),Ga(y),O?gS(y.toString(),f):yS(y.toString(),f)}else dt(2);a.G=0,a.l&&a.l.sa(h),Rg(a),Ig(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Rg(a){if(a.G=0,a.ka=[],a.l){const h=ag(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function bg(a,h,f){var y=f instanceof Kr?Sn(f):new Kr(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ka(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var D=new Kr(null);y&&qa(D,y),h&&(D.g=h),O&&Ka(D,O),f&&(D.l=f),y=D}return f=a.D,h=a.ya,f&&h&&ye(y,f,h),ye(y,"VER",a.la),no(a,y),y}function Ng(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new Qa({eb:f})):new xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Og(){}t=Og.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Je.call(this),this.g=new Tg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Di(this)}P(St,Je),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){rh(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Hc(a),a=f);h.i.push(new oS(h.Ya++,a)),h.G==3&&Za(h)},St.prototype.N=function(){this.g.l=null,delete this.j,rh(this.g),delete this.g,St.aa.N.call(this)};function Dg(a){Kc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Dg,Kc);function Lg(){Gc.call(this),this.status=1}P(Lg,Gc);function Di(a){this.g=a}P(Di,Og),Di.prototype.ua=function(){ht(this.g,"a")},Di.prototype.ta=function(a){ht(this.g,new Dg(a))},Di.prototype.sa=function(a){ht(this.g,new Lg)},Di.prototype.ra=function(){ht(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,PT=function(){return new tl},xT=function(){return Ba()},CT=Hr,If={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$a.NO_ERROR=0,$a.TIMEOUT=8,$a.HTTP_ERROR=6,Wl=$a,Xm.COMPLETE="complete",AT=Xm,qm.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",Je.prototype.listen=Je.prototype.K,wo=qm,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,ST=xe}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});const h0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new gc("@firebase/firestore");function Fi(){return wi.logLevel}function W(t,...e){if(wi.logLevel<=se.DEBUG){const n=e.map(am);wi.debug(`Firestore (${Us}): ${t}`,...n)}}function qn(t,...e){if(wi.logLevel<=se.ERROR){const n=e.map(am);wi.error(`Firestore (${Us}): ${t}`,...n)}}function Cs(t,...e){if(wi.logLevel<=se.WARN){const n=e.map(am);wi.warn(`Firestore (${Us}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function de(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class xD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PD{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new kT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new it(e)}}class kD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ND{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new bD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=OD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return da.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof da?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends da{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const DD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends da{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return DD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ke.fromString(e))}static fromName(e){return new Q(ke.fromString(e).popFirst(5))}static empty(){return new Q(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ke(e.slice()))}}function LD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Dr(i,Q.empty(),e)}function MD(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ee.min(),Q.empty(),-1)}static max(){return new Dr(ee.max(),Q.empty(),-1)}}function VD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==FD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function UD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tc.oe=-1;function Ic(t){return t==null}function Mu(t){return t===0&&1/t==-1/0}function zD(t){return typeof t=="number"&&Number.isInteger(t)&&!Mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=d0(e)),e=$D(t.get(n),e);return d0(e)}function $D(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function d0(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new p0(this.data.getIterator())}getIteratorFrom(e){return new p0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class p0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new $e(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NT("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const WD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(de(!!t),typeof t=="string"){let e=0;const n=WD.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sc(t){const e=t.mapValue.fields.__previous_value__;return lm(e)?Sc(e):e}function fa(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lm(t)?4:KD(t)?9007199254740991:qD(t)?10:11:Z()}function En(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),l=Lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Mu(o)===Mu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(f0(o)!==f0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function ma(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return m0(t.timestampValue,e.timestampValue);case 4:return m0(fa(t),fa(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Mr(s),u=Mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=le(l[c],u[c]);if(d!==0)return d}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(be(s.latitude),be(o.latitude));return l!==0?l:le(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return g0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=le(((c=A==null?void 0:A.values)===null||c===void 0?void 0:c.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:g0(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Sl.mapValue&&o===Sl.mapValue)return 0;if(s===Sl.mapValue)return 1;if(o===Sl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=le(u[p],d[p]);if(m!==0)return m;const A=Ps(l[u[p]],c[d[p]]);if(A!==0)return A}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function m0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Lr(t),r=Lr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function g0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ps(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function ks(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sf(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Hl(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sc(t);return e?16+Hl(e):16;case 5:return 2*t.stringValue.length;case 6:return Mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Hl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Pi(r.fields,(s,o)=>{i+=s.length+Hl(o)}),i}(t.mapValue);default:throw Z()}}function Af(t){return!!t&&"integerValue"in t}function um(t){return!!t&&"arrayValue"in t}function y0(t){return!!t&&"nullValue"in t}function v0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function qD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ql(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Vo(this.value))}}function OT(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new Ke([n]);if(ql(r)){const s=OT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,ee.min(),ee.min(),ee.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,ee.min(),ee.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,ee.min(),ee.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vu{constructor(e,n){this.position=e,this.inclusive=n}}function _0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function w0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fu{constructor(e,n="asc"){this.field=e,this.dir=n}}function GD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class DT{}class Ve extends DT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YD(e,n,r):n==="array-contains"?new ZD(e,r):n==="in"?new eL(e,r):n==="not-in"?new tL(e,r):n==="array-contains-any"?new nL(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XD(e,r):new JD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends DT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return LT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LT(t){return t.op==="and"}function MT(t){return QD(t)&&LT(t)}function QD(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Cf(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(MT(t))return t.filters.map(e=>Cf(e)).join(",");{const e=t.filters.map(n=>Cf(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&VT(o,i.filters[l]),!0):!1}(t,e):void Z()}function FT(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(FT).join(" ,")+"}"}(t):"Filter"}class YD extends Ve{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class XD extends Ve{constructor(e,n){super(e,"in",n),this.keys=jT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JD extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=jT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class ZD extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return um(n)&&ma(n.arrayValue,this.value)}}class eL extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ma(this.value.arrayValue,n)}}class tL extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ma(this.value.arrayValue,n)}}class nL extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!um(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ma(this.value.arrayValue,r))}}/**
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
 */class rL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function E0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rL(t,e,n,r,i,s,o)}function cm(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!w0(t.startAt,e.startAt)&&w0(t.endAt,e.endAt)}function xf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iL(t,e,n,r,i,s,o,l){return new Ac(t,e,n,r,i,s,o,l)}function Cc(t){return new Ac(t)}function T0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sL(t){return t.collectionGroup!==null}function Fo(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Ke.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Fu(s,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new Fu(Ke.keyField(),r))}return e.ce}function yn(t){const e=te(t);return e.le||(e.le=oL(e,Fo(t))),e.le}function oL(t,e){if(t.limitType==="F")return E0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fu(i.field,s)});const n=t.endAt?new Vu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vu(t.startAt.position,t.startAt.inclusive):null;return E0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pf(t,e,n){return new Ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return hm(yn(t),yn(e))&&t.limitType===e.limitType}function UT(t){return`${cm(yn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FT(i)).join(", ")}]`),Ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ks(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=_0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Fo(r),i)||r.endAt&&!function(o,l,u){const c=_0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Fo(r),i))}(t,e)}function aL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zT(t){return(e,n)=>{let r=!1;for(const i of Fo(t)){const s=lL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lL(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ps(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL=new Ce(Q.comparator);function Kn(){return uL}const BT=new Ce(Q.comparator);function Eo(...t){let e=BT;for(const n of t)e=e.insert(n.key,n);return e}function $T(t){let e=BT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ri(){return jo()}function WT(){return jo()}function jo(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const cL=new Ce(Q.comparator),hL=new $e(Q.comparator);function oe(...t){let e=hL;for(const n of t)e=e.add(n);return e}const dL=new $e(le);function fL(){return dL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mu(e)?"-0":e}}function HT(t){return{integerValue:""+t}}function pL(t,e){return zD(e)?HT(e):dm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this._=void 0}}function mL(t,e,n){return t instanceof ju?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lm(s)&&(s=Sc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ga?KT(t,e):t instanceof ya?GT(t,e):function(i,s){const o=qT(i,s),l=I0(o)+I0(i.Pe);return Af(o)&&Af(i.Pe)?HT(l):dm(i.serializer,l)}(t,e)}function gL(t,e,n){return t instanceof ga?KT(t,e):t instanceof ya?GT(t,e):n}function qT(t,e){return t instanceof Uu?function(r){return Af(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ju extends kc{}class ga extends kc{constructor(e){super(),this.elements=e}}function KT(t,e){const n=QT(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class ya extends kc{constructor(e){super(),this.elements=e}}function GT(t,e){let n=QT(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class Uu extends kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function I0(t){return be(t.integerValue||t.doubleValue)}function QT(t){return um(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ga&&i instanceof ga||r instanceof ya&&i instanceof ya?xs(r.elements,i.elements,En):r instanceof Uu&&i instanceof Uu?En(r.Pe,i.Pe):r instanceof ju&&i instanceof ju}(t.transform,e.transform)}class vL{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rc{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new JT(t.key,Ln.none()):new La(t.key,t.data,Ln.none());{const n=t.data,r=jt.empty();let i=new $e(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ri(t.key,r,new Xt(i.toArray()),Ln.none())}}function _L(t,e,n){t instanceof La?function(i,s,o){const l=i.value.clone(),u=A0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,s,o){if(!Kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=A0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(XT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,r){return t instanceof La?function(s,o,l,u){if(!Kl(s.precondition,o))return l;const c=s.value.clone(),d=C0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(s,o,l,u){if(!Kl(s.precondition,o))return l;const c=C0(s.fieldTransforms,u,o),d=o.data;return d.setAll(XT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qT(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function S0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>yL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends Rc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Rc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function A0(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gL(o,l,n[i]))}return r}function C0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mL(s,o,e))}return r}class JT extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EL extends Rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_L(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=YT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>S0(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>S0(n,r))}}class fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return cL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new fm(e,n,r,i)}}/**
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
 */class IL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ae;function AL(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function ZT(t){if(t===void 0)return qn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Oe.OK:return j.OK;case Oe.CANCELLED:return j.CANCELLED;case Oe.UNKNOWN:return j.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return j.INTERNAL;case Oe.UNAVAILABLE:return j.UNAVAILABLE;case Oe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Oe.NOT_FOUND:return j.NOT_FOUND;case Oe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Oe.ABORTED:return j.ABORTED;case Oe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Oe.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(ae=Oe||(Oe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CL(){return new TextEncoder}/**
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
 */const xL=new li([4294967295,4294967295],0);function x0(t){const e=CL().encode(t),n=new IT;return n.update(e),new Uint8Array(n.digest())}function P0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new li([n,r],0),new li([i,s],0)]}class pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=li.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(li.fromNumber(r)));return i.compare(xL)===1&&(i=new li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=x0(e),[r,i]=P0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=x0(e),[r,i]=P0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bc(ee.min(),i,new Ce(le),Kn(),oe())}}class Ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ma(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class eI{constructor(e,n){this.targetId=e,this.me=n}}class tI{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k0{constructor(){this.fe=0,this.ge=b0(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ma(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=b0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=R0(),this.Qe=new Ce(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xf(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,ot.newNoDocument(o,ee.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(u){if(u instanceof NT)return Cs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pm(o,i,s)}catch(u){return Cs(u instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&xf(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ot.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bc(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=R0(),this.Qe=new Ce(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new k0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new k0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function R0(){return new Ce(Q.comparator)}function b0(){return new Ce(Q.comparator)}const kL={asc:"ASCENDING",desc:"DESCENDING"},RL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bL={and:"AND",or:"OR"};class NL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kf(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OL(t,e){return zu(t,e.toTimestamp())}function vn(t){return de(!!t),ee.fromTimestamp(function(n){const r=Lr(n);return new je(r.seconds,r.nanos)}(t))}function mm(t,e){return Rf(t,e).canonicalString()}function Rf(t,e){const n=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function rI(t){const e=ke.fromString(t);return de(lI(e)),e}function bf(t,e){return mm(t.databaseId,e.path)}function Yh(t,e){const n=rI(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(sI(n))}function iI(t,e){return mm(t.databaseId,e)}function DL(t){const e=rI(t);return e.length===4?ke.emptyPath():sI(e)}function Nf(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sI(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function N0(t,e,n){return{name:bf(t,e),fields:n.value.mapValue.fields}}function LL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string"),Ye.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:ZT(c.code);return new K(d,c.message||"")}(o);n=new tI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yh(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ee.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Gl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yh(t,r.document),s=r.readTime?vn(r.readTime):ee.min(),o=ot.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yh(t,r.document),s=r.removedTargetIds||[];n=new Gl([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SL(i,s),l=r.targetId;n=new eI(l,o)}}return n}function ML(t,e){let n;if(e instanceof La)n={update:N0(t,e.key,e.value)};else if(e instanceof JT)n={delete:bf(t,e.key)};else if(e instanceof Ri)n={update:N0(t,e.key,e.data),updateMask:HL(e.fieldMask)};else{if(!(e instanceof EL))return Z();n={verify:bf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ju)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Uu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function VL(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(ee.min())&&(o=vn(s)),new vL(o,i.transformResults||[])}(n,e))):[]}function FL(t,e){return{documents:[iI(t,e.path)]}}function jL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iI(t,i);const s=function(c){if(c.length!==0)return aI(Tn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ui(m.field),direction:BL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function UL(t){let e=DL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=oI(p);return m instanceof Tn&&MT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Fu(zi(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ic(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,A=p.values||[];return new Vu(A,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,A=p.values||[];return new Vu(A,m)}(n.endAt)),iL(e,i,o,s,l,"F",u,c)}function zL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>oI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function BL(t){return kL[t]}function $L(t){return RL[t]}function WL(t){return bL[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function zi(t){return Ke.fromServerFormat(t.fieldPath)}function aI(t){return t instanceof Ve?function(n){if(n.op==="=="){if(v0(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(y0(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(v0(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(y0(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:$L(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>aI(i));return r.length===1?r[0]:{compositeFilter:{op:WL(n.op),filters:r}}}(t):Z()}function HL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.ct=e}}function KL(t){const e=UL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
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
 */class GL{constructor(){this.un=new QL}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Dr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class QL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Rs(0)}static kn(){return new Rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0([t,e],[n,r]){const i=le(t,n);return i===0?le(e,r):i}class YL{constructor(e){this.Un=e,this.buffer=new $e(D0),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();D0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XL{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){W("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Hn(3e5)})}}class JL{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Tc.oe);const r=new YL(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(O0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),O0):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Fi()<=se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function ZL(t,e){return new JL(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Uo(r.mutation,i,Xt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ri();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Eo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ri();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Kn();const o=jo(),l=function(){return jo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ri)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Uo(d.mutation,c,d.mutation.getFieldMask(),je.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new t4(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=jo();let i=new Ce((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Xt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=WT();d.forEach(m=>{if(!s.has(m)){const A=YT(n.get(m),r.get(m));A!==null&&p.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(ri());let l=-1,u=s;return o.next(c=>V.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:l,changes:$T(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Eo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const c=function(p,m){return new Ac(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ot.newInvalidDocument(d)))});let l=Eo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Uo(d.mutation,c,Xt.empty(),je.now()),Pc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:KL(i.bundledQuery),readTime:vn(i.readTime)}}(n)),V.resolve()}}/**
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
 */class i4{constructor(){this.overlays=new Ce(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ri();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ri(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ri(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ri(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IL(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.Tr=new $e(Ue.Er),this.dr=new $e(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new ke([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new ke([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ue.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(le);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new Q(s),0);let l=new $e(le);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.Mr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VD(MD(d),r)<=0||(i.has(d.key)||Pc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new l4(this)}getSize(e){return V.resolve(this.size)}}class l4 extends e4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e){this.persistence=e,this.Nr=new ki(n=>cm(n),hm),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gm,this.targetCount=0,this.kr=Rs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Tc(0),this.Kr=!1,this.Kr=!0,this.$r=new s4,this.referenceDelegate=e(this),this.Ur=new u4(this),this.indexManager=new GL,this.remoteDocumentCache=function(i){return new a4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qL(n),this.Gr=new r4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new i4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new o4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new c4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class c4 extends jD{constructor(e){super(),this.currentSequenceNumber=e}}class ym{constructor(e){this.persistence=e,this.Jr=new gm,this.Yr=null}static Zr(e){return new ym(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Bu{constructor(e,n){this.persistence=e,this.ti=new ki(r=>BD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=ZL(this,n)}static Zr(e,n){return new Bu(e,n)}zr(){}jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return V.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),V.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hl(e.data.value)),n}nr(e,n,r){return V.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vm(e,n.fromCache,r,i)}}/**
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
 */class h4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class d4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xR()?8:UD(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new h4;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fi()<=se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Fi()<=se.DEBUG&&W("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fi()<=se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):V.resolve())}Yi(e,n){if(T0(n))return V.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pf(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Pf(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return T0(n)||i.isEqual(ee.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Fi()<=se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ji(n)),this.rs(e,o,n,LD(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(zT(e));return n.forEach((i,s)=>{Pc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fi()<=se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ji(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(le),this._s=new ki(s=>cm(s),hm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function p4(t,e,n,r){return new f4(t,e,n,r)}async function cI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function m4(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let A=V.resolve();return m.forEach(P=>{A=A.next(()=>d.getEntry(u,P)).next(k=>{const R=c.docVersions.get(P);de(R!==null),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function g4(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ye.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),i=i.insert(p,A),function(k,R,I){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,A,d)&&l.push(n.Ur.updateTargetData(s,A))});let u=Kn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(y4(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ee.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function y4(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function v4(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _4(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Of(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bs(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function L0(t,e,n){const r=te(t);let i=ee.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=te(u),m=p._s.get(d);return m!==void 0?V.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:oe())).next(l=>(w4(r,aL(e),l),{documents:l,Ts:s})))}function w4(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class M0{constructor(){this.activeTargetIds=fL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E4{constructor(){this.so=new M0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new M0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T4{_o(e){}shutdown(){}}/**
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
 */class V0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Al=null;function Xh(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class A4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Xh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Cs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=I4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Xh();return new Promise((o,l)=>{const u=new ST;u.setWithCredentials(!0),u.listenOnce(AT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wl.NO_ERROR:const d=u.getResponseJson();W(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Wl.TIMEOUT:W(rt,`RPC '${e}' ${s} timed out`),l(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const p=u.getStatus();if(W(rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const P=function(R){const I=R.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(A.status);l(new K(P,A.message))}else l(new K(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{W(rt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(rt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Xh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PT(),l=xT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(rt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,A=!1;const P=new S4({Io:R=>{A?W(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(W(rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(rt,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},To:()=>p.close()}),k=(R,I,_)=>{R.listen(I,w=>{try{_(w)}catch(b){setTimeout(()=>{throw b},0)}})};return k(p,wo.EventType.OPEN,()=>{A||(W(rt,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),k(p,wo.EventType.CLOSE,()=>{A||(A=!0,W(rt,`RPC '${e}' stream ${i} transport closed`),P.So())}),k(p,wo.EventType.ERROR,R=>{A||(A=!0,Cs(rt,`RPC '${e}' stream ${i} transport errored:`,R),P.So(new K(j.UNAVAILABLE,"The operation could not be completed")))}),k(p,wo.EventType.MESSAGE,R=>{var I;if(!A){const _=R.data[0];de(!!_);const w=_,b=w.error||((I=w[0])===null||I===void 0?void 0:I.error);if(b){W(rt,`RPC '${e}' stream ${i} received error:`,b);const L=b.status;let F=function(S){const T=Oe[S];if(T!==void 0)return ZT(T)}(L),E=b.message;F===void 0&&(F=j.INTERNAL,E="Unknown error status: "+L+" with message "+b.message),A=!0,P.So(new K(F,E)),p.close()}else W(rt,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),k(l,CT.STAT_EVENT,R=>{R.stat===If.PROXY?W(rt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===If.NOPROXY&&W(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Jh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){return new NL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new dI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C4 extends fI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=LL(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?vn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=xf(u)?{documents:FL(s,u)}:{query:jL(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=nI(s,o.resumeToken);const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=zu(s,o.snapshotVersion.toTimestamp());const c=kf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=zL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.a_(n)}}class x4 extends fI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VL(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Nf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ML(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Rf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Rf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class k4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{bi(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.L_.add(4),await Va(c),c.q_.set("Unknown"),c.L_.delete(4),await Oc(c)}(this))})}),this.q_=new k4(r,i)}}async function Oc(t){if(bi(t))for(const e of t.B_)await e(!0)}async function Va(t){for(const e of t.B_)await e(!1)}function pI(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Tm(n)?Em(n):$s(n).r_()&&wm(n,e))}function _m(t,e){const n=te(t),r=$s(n);n.N_.delete(e),r.r_()&&mI(n,e),n.N_.size===0&&(r.r_()?r.o_():bi(n)&&n.q_.set("Unknown"))}function wm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).A_(e)}function mI(t,e){t.Q_.xe(e),$s(t).R_(e)}function Em(t){t.Q_=new PL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.q_.v_()}function Tm(t){return bi(t)&&!$s(t).n_()&&t.N_.size>0}function bi(t){return te(t).L_.size===0}function gI(t){t.Q_=void 0}async function b4(t){t.q_.set("Online")}async function N4(t){t.N_.forEach((e,n)=>{wm(t,e)})}async function O4(t,e){gI(t),Tm(t)?(t.q_.M_(e),Em(t)):t.q_.set("Unknown")}async function D4(t,e,n){if(t.q_.set("Online"),e instanceof tI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof Gl?t.Q_.Ke(e):e instanceof eI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await hI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),mI(s,u);const p=new mr(d.target,u,c,d.sequenceNumber);wm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!Bs(e))throw e;t.L_.add(1),await Va(t),t.q_.set("Offline"),n||(n=()=>hI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Oc(t)})}function yI(t,e){return e().catch(n=>$u(t,n,e))}async function Dc(t){const e=te(t),n=Fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;L4(e);)try{const i=await v4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,M4(e,i)}catch(i){await $u(e,i)}vI(e)&&_I(e)}function L4(t){return bi(t)&&t.O_.length<10}function M4(t,e){t.O_.push(e);const n=Fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vI(t){return bi(t)&&!Fr(t).n_()&&t.O_.length>0}function _I(t){Fr(t).start()}async function V4(t){Fr(t).p_()}async function F4(t){const e=Fr(t);for(const n of t.O_)e.m_(n.mutations)}async function j4(t,e,n){const r=t.O_.shift(),i=fm.from(r,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Dc(t)}async function U4(t,e){e&&Fr(t).V_&&await async function(r,i){if(function(o){return AL(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Fr(r).s_(),await yI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dc(r)}}(t,e),vI(t)&&_I(t)}async function F0(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=bi(n);n.L_.add(3),await Va(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Oc(n)}async function z4(t,e){const n=te(t);e?(n.L_.delete(2),await Oc(n)):e||(n.L_.add(2),await Va(n),n.q_.set("Unknown"))}function $s(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new C4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:b4.bind(null,t),Ro:N4.bind(null,t),mo:O4.bind(null,t),d_:D4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Tm(t)?Em(t):t.q_.set("Unknown")):(await t.K_.stop(),gI(t))})),t.K_}function Fr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new x4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:V4.bind(null,t),mo:U4.bind(null,t),f_:F4.bind(null,t),g_:j4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Dc(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Im(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sm(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Bs(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.W_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $4{constructor(){this.queries=U0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=U0(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function U0(){return new ki(t=>UT(t),xc)}async function wI(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new B4,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Sm(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Am(n)}async function EI(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function W4(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Am(n)}function H4(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Am(t){t.Y_.forEach(e=>{e.next()})}var Df,z0;(z0=Df||(Df={})).ea="default",z0.Cache="cache";class TI{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Df.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.key=e}}class SI{constructor(e){this.key=e}}class q4{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=zT(e),this.Ra=new fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new j0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),A=Pc(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;m&&A?m.data.isEqual(A.data)?P!==k&&(r.track({type:3,doc:A}),R=!0):this.ga(m,A)||(r.track({type:2,doc:A}),R=!0,(u&&this.Aa(A,u)>0||c&&this.Aa(A,c)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),R=!0):m&&!A&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(l=!0)),R&&(A?(o=o.add(A),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(A,P){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return k(A)-k(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new bs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new j0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new SI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new II(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return bs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class K4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class G4{constructor(e){this.key=e,this.va=!1}}class Q4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ki(l=>UT(l),xc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(Q.comparator),this.Na=new Map,this.La=new gm,this.Ba={},this.ka=new Map,this.qa=Rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Y4(t,e,n=!0){const r=RI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AI(r,e,n,!0),i}async function X4(t,e){const n=RI(t);await AI(n,e,!0,!1)}async function AI(t,e,n,r){const i=await _4(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await J4(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pI(t.remoteStore,i),l}async function J4(t,e,n,r,i){t.Ka=(p,m,A)=>async function(k,R,I,_){let w=R.view.ma(I);w.ns&&(w=await L0(k.localStore,R.query,!1).then(({documents:E})=>R.view.ma(E,w)));const b=_&&_.targetChanges.get(R.targetId),L=_&&_.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(w,k.isPrimaryClient,b,L);return $0(k,R.targetId,F.wa),F.snapshot}(t,p,m,A);const s=await L0(t.localStore,e,!0),o=new q4(e,s.Ts),l=o.ma(s.documents),u=Ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);$0(t,n,c.wa);const d=new K4(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Z4(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Of(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_m(r.remoteStore,i.targetId),Lf(r,i.targetId)}).catch(zs)):(Lf(r,i.targetId),await Of(r.localStore,i.targetId,!0))}async function eM(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_m(n.remoteStore,r.targetId))}async function tM(t,e,n){const r=lM(t);try{const i=await function(o,l){const u=te(o),c=je.now(),d=l.reduce((A,P)=>A.add(P.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Kn(),k=oe();return u.cs.getEntries(A,d).next(R=>{P=R,P.forEach((I,_)=>{_.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(R=>{p=R;const I=[];for(const _ of l){const w=wL(_,p.get(_.key).overlayedDocument);w!=null&&I.push(new Ri(_.key,w,OT(w.value.mapValue),Ln.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,I,l)}).next(R=>{m=R;const I=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(A,R.batchId,I)})}).then(()=>({batchId:m.batchId,changes:$T(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ce(le)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Fa(r,i.changes),await Dc(r.remoteStore)}catch(i){const s=Sm(i,"Failed to persist write");n.reject(s)}}async function CI(t,e){const n=te(t);try{const r=await g4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await Fa(n,r,e)}catch(r){await zs(r)}}function B0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Am(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,ot.newNoDocument(s,ee.min()));const l=oe().add(s),u=new bc(ee.min(),new Map,new Ce(le),o,l);await CI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Cm(r)}else await Of(r.localStore,e,!1).then(()=>Lf(r,e,n)).catch(zs)}async function rM(t,e){const n=te(t),r=e.batch.batchId;try{const i=await m4(n.localStore,e);PI(n,r,null),xI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,i)}catch(i){await zs(i)}}async function iM(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(de(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);PI(r,e,n),xI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,i)}catch(i){await zs(i)}}function xI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function PI(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Lf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||kI(t,r)})}function kI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(_m(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Cm(t))}function $0(t,e,n){for(const r of n)r instanceof II?(t.La.addReference(r.key,e),sM(t,r)):r instanceof SI?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||kI(t,r.key)):Z()}function sM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Cm(t))}function Cm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(ke.fromString(e)),r=t.qa.next();t.Na.set(r,new G4(n)),t.Oa=t.Oa.insert(n,r),pI(t.remoteStore,new mr(yn(Cc(n.path)),r,"TargetPurposeLimboResolution",Tc.oe))}}async function Fa(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=vm.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,m=>V.forEach(m.$i,A=>d.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>V.forEach(m.Ui,A=>d.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!Bs(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const A=d.os.get(m),P=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function oM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await cI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.hs)}}function aM(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function RI(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=CI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.Ca.d_=W4.bind(null,e.eventManager),e.Ca.$a=H4.bind(null,e.eventManager),e}function lM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class Wu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return p4(this.persistence,new d4,e.initialUser,this.serializer)}Ga(e){return new uI(ym.Zr,this.serializer)}Wa(e){return new E4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wu.provider={build:()=>new Wu};class uM extends Wu{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){de(this.persistence.referenceDelegate instanceof Bu);const r=this.persistence.referenceDelegate.garbageCollector;return new XL(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new uI(r=>Bu.Zr(r,n),this.serializer)}}class Mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await z4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $4}()}createDatastore(e){const n=Nc(e.databaseInfo.databaseId),r=function(s){return new A4(s)}(e.databaseInfo);return function(s,o,l,u){return new P4(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new R4(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>B0(this.syncEngine,n,0),function(){return V0.D()?new V0:new T4}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Q4(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Va(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mf.provider={build:()=>new Mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=RT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function W0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hM(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>F0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>F0(e.remoteStore,i)),t._onlineComponents=e}async function hM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await Zh(t,new Wu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Zh(t,new uM(void 0));return t._offlineComponents}async function NI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await W0(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await W0(t,new Mf))),t._onlineComponents}function dM(t){return NI(t).then(e=>e.syncEngine)}async function Vf(t){const e=await NI(t),n=e.eventManager;return n.onListen=Y4.bind(null,e.syncEngine),n.onUnlisten=Z4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=X4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eM.bind(null,e.syncEngine),n}function fM(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new bI({next:m=>{d.Za(),o.enqueueAndForget(()=>EI(s,p));const A=m.docs.has(l);!A&&m.fromCache?c.reject(new K(j.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&u&&u.source==="server"?c.reject(new K(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new TI(Cc(l.path),d,{includeMetadataChanges:!0,_a:!0});return wI(s,p)}(await Vf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function OI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mM(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function q0(t){if(!Q.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Pr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xm(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=OI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CD;switch(r.type){case"firstParty":return new RD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H0.get(n);r&&(W("ComponentProvider","Removing Datastore"),H0.delete(n),r.terminate())}(this),Promise.resolve()}}function gM(t,e,n,r={}){var i;const s=(t=Pr(t,Pm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=ER(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new xD(new kT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lc(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class va extends Lc{constructor(e,n,r){super(e,n,Cc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Q(e))}withConverter(e){return new va(this.firestore,e,this._path)}}function Mn(t,e,...n){if(t=ut(t),arguments.length===1&&(e=RT.newId()),pM("doc","path",e),t instanceof Pm){const r=ke.fromString(e,...n);return q0(r),new bt(t,null,new Q(r))}{if(!(t instanceof bt||t instanceof va))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return q0(r),new bt(t.firestore,t instanceof va?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new dI(this,"async_queue_retry"),this.Vu=()=>{const r=Jh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Jh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Jh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Bs(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Q0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _a extends Pm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new G0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G0(e),this._firestoreClient=void 0,await e}}}function yM(t,e){const n=typeof t=="object"?t:Hp(),r=typeof t=="string"?t:"(default)",i=Ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_R("firestore");s&&gM(i,...s)}return i}function km(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vM(t),t._firestoreClient}function vM(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new HD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,OI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new cM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(Ye.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^__.*__$/;class wM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}function LI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Om{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Hu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(LI(this.Cu)&&_M.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nc(e)}Qu(e,n,r,i=!1){return new Om({Cu:e,methodName:n,qu:r,path:Ke.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TM(t){const e=t._freezeSettings(),n=Nc(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);jI("Data must be an object, but it was:",o,r);const l=VI(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=SM(e,p,n);if(!o.contains(m))throw new K(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);CM(d,m)||d.push(m)}u=new Xt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new wM(new jt(l),u,c)}function MI(t,e){if(FI(t=ut(t)))return jI("Unsupported field value:",e,t),VI(t,e);if(t instanceof DI)return function(r,i){if(!LI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=MI(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:zu(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zu(i.serializer,s)}}if(r instanceof bm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:nI(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return dm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${xm(r)}`)}(t,e)}function VI(t,e){const n={};return bT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=MI(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof bm||t instanceof Ns||t instanceof bt||t instanceof DI||t instanceof Nm)}function jI(t,e,n){if(!FI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function SM(t,e,n){if((e=ut(e))instanceof Rm)return e._internalPath;if(typeof e=="string")return UI(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const AM=new RegExp("[~\\*/\\[\\]]");function UI(t,e,n){if(e.search(AM)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rm(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function CM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(BI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xM extends zI{data(){return super.data()}}function BI(t,e){return typeof e=="string"?UI(t,e):e instanceof Rm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kM{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new Nm(s)}convertGeoPoint(e){return new bm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fa(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);de(lI(r));const i=new pa(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $I extends zI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(BI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ql extends $I{data(e={}){return super.data(e)}}class bM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ql(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ql(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:NM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function NM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){t=Pr(t,bt);const e=Pr(t.firestore,_a);return fM(km(e),t._key).then(n=>HI(e,t,n))}class WI extends kM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function Mc(t,e,n){t=Pr(t,bt);const r=Pr(t.firestore,_a),i=RM(t.converter,e,n);return DM(r,[IM(TM(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ln.none())])}function OM(t,...e){var n,r,i;t=ut(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Q0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Q0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof bt)c=Pr(t.firestore,_a),d=Cc(t._key.path),u={next:p=>{e[o]&&e[o](HI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Pr(t,Lc);c=Pr(p.firestore,_a),d=p._query;const m=new WI(c);u={next:A=>{e[o]&&e[o](new bM(c,m,p,A))},error:e[o+1],complete:e[o+2]},PM(t._query)}return function(m,A,P,k){const R=new bI(k),I=new TI(A,R,P);return m.asyncQueue.enqueueAndForget(async()=>wI(await Vf(m),I)),()=>{R.Za(),m.asyncQueue.enqueueAndForget(async()=>EI(await Vf(m),I))}}(km(c),d,l,u)}function DM(t,e){return function(r,i){const s=new xr;return r.asyncQueue.enqueueAndForget(async()=>tM(await dM(r),i,s)),s.promise}(km(t),e)}function HI(t,e,n){const r=n.docs.get(e._key),i=new WI(t);return new $I(t,i,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Us=i})(Fs),wn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _a(new PD(r.getProvider("auth-internal")),new ND(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(h0,"4.7.4",e),Bt(h0,"4.7.4","esm2017")})();const LM={apiKey:"AIzaSyD3kK9NB0qcl3JhTwEMgGaoFc46nCPBwOA",authDomain:"fitjoy-be.firebaseapp.com",projectId:"fitjoy-be",storageBucket:"fitjoy-be.firebasestorage.app",messagingSenderId:"224126269200",appId:"1:224126269200:web:a5e5500fecabdb5ea85795",measurementId:"G-GCLZFD9X5W"},Dm=y1(LM);TD(Dm);const ps=rO(Dm),Vn=yM(Dm),MM=()=>{const t=xa(),[e,n]=M.useState(!1),[r,i]=M.useState(!1),[s,o]=M.useState(!1),[l,u]=M.useState(!1),c=Si(),d=()=>{n(!e),i(!1),o(!1)},p=()=>{i(!r),n(!1),o(!1)},m=()=>{o(!s),n(!1),i(!1)},A=()=>{u(!l)},P=()=>{q2(ps).then(()=>{console.log("Sign out successful"),t("/")}).catch(_=>console.log(_))},k=()=>{n(!1),i(!1),o(!1),u(!1)},R=c.pathname.includes("/food-logger")||c.pathname.includes("/recipes"),I=c.pathname.includes("/bmi-calculator")||c.pathname.includes("/workouts");return g.jsxs("div",{className:"flex items-center justify-between text-sm py-4 mb-5 mx-10 z-50 relative",children:[g.jsx("img",{onClick:()=>t("/home"),className:"w-20 cursor-pointer",src:Mt.logo2,alt:"nav_logo"}),g.jsxs("ul",{className:`flex-col ${l?"flex":"hidden"} md:flex md:flex-row md:items-center md:gap-8 font-medium bg-white md:bg-transparent w-full md:w-auto absolute md:static top-16 left-0 right-0 z-50 shadow-lg md:shadow-none rounded-lg md:rounded-none p-4 md:p-0 md:justify-center`,children:[g.jsx(Vi,{to:"/home",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-1",children:"Home"})}),g.jsxs("li",{className:`relative py-1 cursor-pointer ${R?"active":""}`,onClick:d,children:[g.jsxs("div",{className:"dropdown-content",children:[g.jsx("span",{children:"Nutrition"}),g.jsx("span",{className:"ml-2 md:inline hidden dropdown-arrow",children:e?"▲":"▼"})]}),e&&g.jsxs("ul",{className:"md:absolute md:left-0 md:top-full bg-white shadow-lg rounded-xl mt-2 md:mt-0 md:bg-white flex flex-col space-y-2 ml-4 p-2 md:ml-0 z-50",children:[g.jsx(Vi,{to:"/FoodLogger",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left",children:"Food Logger"})}),g.jsx(Vi,{to:"/FoodLogger",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left",children:"Recipes"})})]})]}),g.jsxs("li",{className:`relative py-1 cursor-pointer ${I?"active":""}`,onClick:p,children:[g.jsxs("div",{className:"dropdown-content",children:[g.jsx("span",{children:"Fitness"}),g.jsx("span",{className:"ml-2 md:inline hidden dropdown-arrow",children:r?"▲":"▼"})]}),r&&g.jsxs("ul",{className:"md:absolute md:right-0 md:top-full bg-white shadow-lg rounded-xl mt-2 md:mt-0 md:bg-white flex flex-col space-y-2 ml-4 p-2 md:ml-0 z-50",children:[g.jsx(Vi,{to:"/CalorieCalculator",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left",children:"Calorie Calculator"})}),g.jsx(Vi,{to:"/CalorieCalculator",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-2 px-2 hover:bg-gray-200 rounded-xl text-center md:text-left",children:"Workouts"})})]})]}),g.jsx(Vi,{to:"/contact",className:({isActive:_})=>_?"active":"",onClick:k,children:g.jsx("li",{className:"py-1",children:"Contact"})})]}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsxs("div",{className:"relative cursor-pointer",onClick:m,children:[g.jsx(As,{icon:uR,size:"2x",style:{color:"#232323"}}),s&&g.jsxs("ul",{className:"absolute right-0 top-full bg-white shadow-lg rounded mt-2 p-2 z-50",children:[g.jsx("li",{onClick:()=>{t("/user-profile"),k()},className:"py-2 px-4 hover:bg-gray-200 rounded-xl",children:"My Profile"}),g.jsx("li",{onClick:()=>{t("/"),k()},className:"py-2 px-4 hover:bg-gray-200 rounded-xl",children:"Friends"}),g.jsx("li",{onClick:()=>{P(),k()},className:"py-2 px-4 hover:bg-gray-200 rounded-xl",children:"Logout"})]})]}),g.jsx("button",{className:"md:hidden",onClick:A,children:g.jsx(As,{icon:l?hR:lR,size:"lg"})})]})]})},VM=()=>{const[t,e]=M.useState(null),[n,r]=M.useState(!0);M.useEffect(()=>{const s=Zp(ps,o=>{e(o||null)});return()=>s()},[]);const i=t?t.email.split("@")[0]:"";return M.useEffect(()=>{let s=0;const o=()=>{const l=window.scrollY||document.documentElement.scrollTop;l>s?r(!1):r(!0),s=l};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),g.jsx("div",{className:"flex items-center justify-center h-screen",children:t?g.jsxs("h1",{className:`text-5xl font-bold text-center ${n?"fade-in-animation":"fade-out-animation"}`,children:["Hello, ",i,"!"]}):g.jsx("p",{className:"text-2xl text-center",children:"Signed Out"})})},Lm=M.createContext(),qI=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);return M.useEffect(()=>Zp(ps,o=>{n(o),i(!1)}),[]),g.jsx(Lm.Provider,{value:{currentUser:e},children:!r&&t})};qI.propTypes={children:re.node.isRequired};const Vc=()=>M.useContext(Lm),FM=()=>{const t=xa(),{currentUser:e}=Vc(),[n,r]=M.useState({calories:0,protein:0,fat:0,carbs:0}),[i,s]=M.useState({calories:0,protein:0,fat:0,carbs:0});M.useEffect(()=>{if(!e)return;(async()=>{var A,P,k;const c=Mn(Vn,"users",e.uid,"foodLogs","currentLog"),d=await wa(c);if(d.exists()){const R=d.data();r(R.totals||{calories:0,protein:0,fat:0,carbs:0})}const p=Mn(Vn,"users",e.uid),m=await wa(p);if(m.exists()){const R=m.data();s({calories:R.calories||0,protein:((A=R.macros)==null?void 0:A.protein)||0,fat:((P=R.macros)==null?void 0:P.fat)||0,carbs:((k=R.macros)==null?void 0:k.carbs)||0})}})()},[e]);const o=(u,c)=>Math.min(u/c*100,100),l=i.calories>0||i.protein>0||i.fat>0||i.carbs>0;return g.jsxs("div",{className:"flex flex-col items-center p-6 relative",children:[g.jsx(VM,{}),!l&&g.jsxs("div",{className:"flex flex-col items-center z-20 mb-4",children:[g.jsx("p",{className:"text-sm italic mb-2 text-center",children:"**You need to calculate macros before using this feature**"}),g.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded-lg font-semibold",onClick:()=>t("/CalorieCalculator"),children:"Calculate Macros"})]}),g.jsxs("div",{className:`relative ${l?"":"blur-sm"}`,children:[g.jsxs("div",{className:"relative w-60 h-60 flex items-center justify-center",children:[g.jsxs("svg",{className:"w-full h-full transform -rotate-90",children:[g.jsx("circle",{cx:"50%",cy:"50%",r:"90",strokeWidth:"12",fill:"transparent"}),g.jsx("circle",{cx:"50%",cy:"50%",r:"90",stroke:"#00bbe5",strokeWidth:"12",strokeDasharray:"565",strokeDashoffset:565-565*o(n.calories,i.calories)/100,fill:"transparent"})]}),g.jsxs("div",{className:"absolute text-center",children:[g.jsxs("p",{className:"text-3xl font-bold",children:[n.calories," / ",i.calories]}),g.jsx("p",{className:"text-lg",children:"Calories Left"})]})]}),g.jsx("div",{className:"w-full max-w-md mt-8 space-y-6",children:[{label:"Protein",total:n.protein,goal:i.protein},{label:"Fat",total:n.fat,goal:i.fat},{label:"Carbs",total:n.carbs,goal:i.carbs}].map((u,c)=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex justify-between text-lg font-semibold",children:[g.jsx("span",{children:u.label}),g.jsxs("span",{children:[u.total," / ",u.goal,"g"]})]}),g.jsxs("div",{className:"w-full h-6 bg-gray-200 rounded-full overflow-hidden",children:[" ",g.jsx("div",{className:"h-full bg-secondary rounded-full",style:{width:`${o(u.total,u.goal)}%`}})]})]},c))})]})]})},jM=()=>{const t=xa(),[e,n]=M.useState(""),[r,i]=M.useState(""),[s,o]=M.useState(""),[l,u]=M.useState(""),[c,d]=M.useState(!1),[p,m]=M.useState(!1),[A,P]=M.useState(!1);M.useEffect(()=>{const _=Zp(ps,w=>{w&&t("/home")});return()=>_()},[t]);const k=()=>{d(!c)},R=async _=>{_.preventDefault();try{await $2(ps,e,r)}catch(w){console.log(w),alert("Error logging in: "+w.message)}},I=async _=>{_.preventDefault();try{const b=(await B2(ps,s,l)).user;await Mc(Mn(Vn,"users",b.uid),{email:b.email,createdAt:new Date,macros:{protein:0,carbs:0,fat:0,calories:0},selectedPlan:"Balanced"}),console.log("User data saved to Firestore")}catch(w){w.code==="auth/email-already-in-use"?alert("This email is already registered. Please try logging in."):(console.error("Error signing up:",w.message),alert("Error signing up: "+w.message))}};return g.jsx("div",{className:"relative w-full h-screen flex justify-center items-center mx-0",children:g.jsxs("div",{className:"relative w-full h-full lg:w-3/4 md:h-5/6 bg-white shadow-gray-300 shadow-lg rounded-none md:rounded-3xl overflow-hidden z-10 opacity-95",children:[g.jsxs("div",{className:`${c?"hidden md:flex":"flex"} flex-col justify-center items-center w-full h-full p-10 md:absolute md:left-0 md:w-1/2`,children:[g.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"FitJoy"}),g.jsxs("form",{onSubmit:R,className:"flex flex-col items-center w-full",children:[g.jsx("input",{type:"text",placeholder:"Email",className:"w-3/4 p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary",value:e,onChange:_=>n(_.target.value)}),g.jsxs("div",{className:"relative w-3/4",children:[g.jsx("input",{type:p?"text":"password",placeholder:"Password",className:"w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary",value:r,onChange:_=>i(_.target.value)}),g.jsx("button",{type:"button",onClick:()=>m(!p),className:"absolute right-3 mt-3 text-gray-500 hover:text-gray-700",children:g.jsx(As,{icon:p?Av:Sv})})]}),g.jsx("button",{type:"submit",className:"w-3/6 bg-primary hover:bg-secondary text-white py-2 rounded-3xl mx-auto",children:"Sign In"})]}),g.jsxs("p",{className:"text-center mt-4",children:["Don’t have an account?"," ",g.jsx("span",{onClick:k,className:"text-primary cursor-pointer hover:underline",children:"Register now"})]})]}),g.jsxs("div",{className:`${c?"flex":"hidden md:flex"} flex-col justify-center items-center w-full h-full p-10 md:absolute md:right-0 md:w-1/2`,children:[g.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"Create Account"}),g.jsxs("form",{onSubmit:I,className:"flex flex-col items-center w-full",children:[g.jsx("input",{type:"email",placeholder:"Email",className:"w-3/4 p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary",value:s,onChange:_=>o(_.target.value)}),g.jsxs("div",{className:"relative w-3/4",children:[g.jsx("input",{type:A?"text":"password",placeholder:"Password",className:"w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:border-primary",value:l,onChange:_=>u(_.target.value)}),g.jsx("button",{type:"button",onClick:()=>P(!A),className:"absolute right-3 mt-3 text-gray-500 hover:text-gray-700",children:g.jsx(As,{icon:A?Av:Sv})})]}),g.jsx("button",{type:"submit",className:"w-3/6 bg-primary hover:bg-secondary text-white py-2 rounded-3xl mx-auto",children:"Sign Up"})]}),g.jsxs("p",{className:"text-center mt-4",children:["Already registered?"," ",g.jsx("span",{onClick:k,className:"text-primary cursor-pointer hover:underline",children:"Login"})]})]}),g.jsx("div",{className:`hidden md:flex absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary to-neutral-200 text-white p-10 flex-col justify-center items-center z-10 transition-transform duration-700 ease-in-out transform ${c?"":"translate-x-full"}`,children:c?g.jsxs(g.Fragment,{children:[g.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Welcome Back!"}),g.jsx("p",{className:"mb-6",children:"To keep connected with us please login with your personal info"}),g.jsx("button",{onClick:k,className:"w-3/6 bg-transparent border border-white py-2 px-4 rounded-full text-white hover:bg-white hover:text-secondary transition",children:"Sign In"})]}):g.jsxs(g.Fragment,{children:[g.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Welcome To FITJOY"}),g.jsx("p",{className:"mb-6",children:"Enter your personal details and start your journey with us"}),g.jsx("button",{onClick:k,className:"w-3/6 bg-transparent border border-white py-2 px-4 rounded-full text-white hover:bg-white hover:text-secondary transition",children:"Sign Up"})]})})]})})},UM=()=>g.jsx("div",{children:"Dashboard"}),zM=()=>{const{currentUser:t}=Vc(),e=t!=null&&t.email?t.email.split("@")[0]:"";return g.jsxs("div",{className:"profile-page",children:[g.jsxs("div",{className:"profile-header flex flex-col items-center py-6 px-4 sm:px-8",children:[g.jsx("img",{src:Mt.ph,alt:"Profile",className:"w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white mb-4"}),g.jsxs("div",{className:"text-center mt-2",children:[g.jsx("h2",{className:"text-xl sm:text-2xl font-semibold",children:e}),g.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Maryland, USA"})]}),g.jsxs("div",{className:"flex justify-around w-full max-w-sm sm:max-w-md mt-6",children:[g.jsxs("div",{className:"text-center",children:[g.jsx("span",{className:"text-lg sm:text-xl font-bold",children:"9"}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm",children:"Posts"})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("span",{className:"text-lg sm:text-xl font-bold",children:"1M"}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm",children:"Followers"})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("span",{className:"text-lg sm:text-xl font-bold",children:"0"}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm",children:"Following"})]})]}),g.jsx("hr",{className:"xl:w-6/12 md:w-11/12 w-full border-t-2 border-gray-300 mt-6"})]}),g.jsxs("div",{className:"photo-gallery mt-6 px-4 sm:px-8 max-w-4xl mx-auto",children:[g.jsx("h2",{className:"text-xl sm:text-2xl font-semibold mb-4 text-center",children:"Posts"}),g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:[g.jsx("img",{src:Mt.ph,alt:"photo1",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo2",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo3",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo4",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo5",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo6",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo7",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo8",className:"w-full h-32 sm:h-40 object-cover rounded"}),g.jsx("img",{src:Mt.ph,alt:"photo9",className:"w-full h-32 sm:h-40 object-cover rounded"})]})]})]})},BM=()=>g.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen px-4",children:g.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8 max-w-lg w-full",children:[g.jsx("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-6",children:"Contact Us"}),g.jsxs("form",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Full Name"}),g.jsx("input",{type:"text",placeholder:"John Doe",className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Phone Number"}),g.jsx("input",{type:"tel",placeholder:"(123) 456-7890",className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email"}),g.jsx("input",{type:"email",placeholder:"you@example.com",className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Why are you reaching out?"}),g.jsx("textarea",{placeholder:"Let us know how we can help...",className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none",required:!0})]}),g.jsx("div",{className:"text-center",children:g.jsx("button",{type:"submit",className:"w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition duration-200",children:"Submit"})})]})]})}),$M=()=>g.jsxs("div",{className:"md:mx-10",children:[g.jsxs("div",{className:"flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm items-center sm:items-start text-center sm:text-left",children:[g.jsx("div",{children:g.jsx("img",{className:"mb-5 w-32 mx-auto sm:mx-0",src:Mt.logo1,alt:"our-logo"})}),g.jsxs("div",{children:[g.jsx("p",{className:"text-xl font-medium mb-3",children:"COMPANY"}),g.jsxs("ul",{className:"flex flex-col gap-2 text-gray-600",children:[g.jsx("li",{children:"Home"}),g.jsx("li",{children:"About"}),g.jsx("li",{children:"Contact Us"}),g.jsx("li",{children:"Privacy Policy"})]})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-xl font-medium mb-3",children:"GET IN TOUCH"}),g.jsxs("ul",{className:"flex flex-col gap-2 text-gray-600",children:[g.jsx("li",{children:"+1-123-800-1234"}),g.jsx("li",{children:"Reppjio@gmail.com"})]})]})]}),g.jsxs("div",{children:[g.jsx("hr",{}),g.jsx("p",{className:"py-5 text-sm text-center text-gray-300",children:"Copyright 2024 FitJoy - All Rights Reserved."})]})]}),WM=()=>{const{currentUser:t}=M.useContext(Lm),[e,n]=M.useState(""),[r,i]=M.useState(""),[s,o]=M.useState(""),[l,u]=M.useState(""),[c,d]=M.useState(""),[p,m]=M.useState("lbs"),[A,P]=M.useState(""),[k,R]=M.useState(""),[I,_]=M.useState(null),[w,b]=M.useState({protein:0,carbs:0,fat:0}),[L,F]=M.useState(!1),[E,v]=M.useState({protein:30,carbs:40,fat:30}),[S,T]=M.useState("Balanced"),[x,N]=M.useState(""),C={Sedentary:1.2,"Lightly active":1.375,"Moderately active":1.55,"Highly active":1.725},ct={Balanced:{protein:30,carbs:40,fat:30},"Low Fat":{protein:35,carbs:45,fat:20},"Low Carb":{protein:45,carbs:10,fat:45},"High Protein":{protein:50,carbs:25,fat:25}},In=(B,J,G,ce,fe)=>(ce==="male"?88.362+13.397*B+4.799*J-5.677*G:447.593+9.247*B+3.098*J-4.33*G)*fe*({"Extreme weight loss":.8,"Weight loss":.9,"Maintain weight":1,"Weight gain":1.1,"Extreme weight gain":1.2}[k]||1),sn=(B,J,G,ce)=>{const fe=Math.round(B*(J/100)/4),Le=Math.round(B*(G/100)/4),Xe=Math.round(B*(ce/100)/9);return{protein:fe,carbs:Le,fat:Xe}},Ht=B=>{B.preventDefault();const J=p==="kg"?parseFloat(c):parseFloat(c)*.453592,G=parseInt(s)*30.48+parseInt(l)*2.54,ce=C[A]||1,fe=In(J,G,parseInt(e),r,ce);if(_(Math.round(fe)),S!=="Custom"){const Le=ct[S];b(sn(fe,Le.protein,Le.carbs,Le.fat))}else b(sn(fe,E.protein,E.carbs,E.fat));F(!0)},$=(B,J)=>{J>80&&(J=80);let G={...E,[B]:J};const ce=100-G[B],fe=["protein","carbs","fat"].filter(Xe=>Xe!==B),Le=G[fe[0]]+G[fe[1]];if(Le>0&&(G[fe[0]]=Math.min(Math.round(ce*G[fe[0]]/Le),80),G[fe[1]]=Math.min(100-G[B]-G[fe[0]],80)),G[fe[0]]+G[fe[1]]+G[B]>100){const Xe=G[fe[0]]+G[fe[1]]+G[B]-100;G[fe[1]]-=Xe}v(G),b(sn(I,G.protein,G.carbs,G.fat))},X=B=>{if(T(B),B!=="Custom"){const J=ct[B];v(J),b(sn(I,J.protein,J.carbs,J.fat))}},ne=async()=>{try{const B=Mn(Vn,"users",t.uid);await Mc(B,{selectedPlan:S,customMacros:E,macros:w,calories:I,age:e,gender:r,heightFeet:s,heightInches:l,weight:c,weightUnit:p,activityLevel:A,goal:k},{merge:!0}),N(S),alert("Macros saved successfully!")}catch(B){console.error("Error saving macros: ",B)}};return M.useEffect(()=>{t&&(async()=>{try{const J=Mn(Vn,"users",t.uid),G=await wa(J);if(G.exists()){const ce=G.data();n(ce.age||""),i(ce.gender||""),o(ce.heightFeet||""),u(ce.heightInches||""),d(ce.weight||""),m(ce.weightUnit||"lbs"),P(ce.activityLevel||""),R(ce.goal||""),_(Math.round(ce.calories||0)),b(ce.macros||{protein:0,carbs:0,fat:0}),T(ce.selectedPlan||"Balanced"),v(ce.customMacros||{protein:30,carbs:40,fat:30}),N(ce.selectedPlan||""),F(ce.calories>0)}}catch(J){console.error("Error fetching user data: ",J)}})()},[t]),g.jsx("div",{className:`max-w-lg mx-auto p-10 rounded-2xl shadow-lg border border-gray-200 ${L?"bg-primary":"bg-white"}`,children:L?g.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl shadow-md text-center space-y-6",children:[g.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Your Daily Recommendations"}),g.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:["Balanced","Low Fat","Low Carb","High Protein","Custom"].map(B=>g.jsx("button",{onClick:()=>X(B),className:`min-w-[80px] px-4 py-2 rounded-full font-semibold transition ${S===B?"bg-primary text-white shadow":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:B},B))}),g.jsxs("div",{className:"text-xl font-medium text-gray-800 space-y-1",children:[g.jsxs("p",{children:[g.jsx("span",{className:"font-semibold",children:"Calories:"})," ",I," kcal"]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-semibold",children:"Protein:"})," ",w.protein," grams"]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-semibold",children:"Carbs:"})," ",w.carbs," grams"]}),g.jsxs("p",{children:[g.jsx("span",{className:"font-semibold",children:"Fat:"})," ",w.fat," grams"]})]}),S==="Custom"&&g.jsxs("div",{className:"mt-6 space-y-4",children:[g.jsx("h4",{className:"font-bold text-gray-800",children:"Adjust Macronutrients"}),g.jsxs("div",{children:[g.jsxs("label",{children:["Protein (",E.protein,"%)"]}),g.jsx("input",{type:"range",min:"0",max:"80",value:E.protein,onChange:B=>$("protein",parseInt(B.target.value)),className:"w-full accent-primary"})]}),g.jsxs("div",{children:[g.jsxs("label",{children:["Carbs (",E.carbs,"%)"]}),g.jsx("input",{type:"range",min:"0",max:"80",value:E.carbs,onChange:B=>$("carbs",parseInt(B.target.value)),className:"w-full accent-primary"})]}),g.jsxs("div",{children:[g.jsxs("label",{children:["Fat (",E.fat,"%)"]}),g.jsx("input",{type:"range",min:"0",max:"80",value:E.fat,onChange:B=>$("fat",parseInt(B.target.value)),className:"w-full accent-primary"})]})]}),g.jsxs("div",{className:"space-y-4 mt-8",children:[g.jsx("button",{onClick:ne,className:"w-full py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-secondary",children:"Save Macros"}),g.jsx("button",{onClick:()=>F(!1),className:"w-full py-3 bg-gray-200 text-white font-semibold rounded-lg transition hover:bg-slate-300",children:"Recalculate Macros"})]})]}):g.jsxs("form",{onSubmit:Ht,className:"space-y-6",children:[g.jsx("h2",{className:"text-2xl font-semibold text-gray-800 text-center",children:"Macro & Calorie Calculator"}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Age"}),g.jsx("input",{type:"number",value:e,onChange:B=>n(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Gender"}),g.jsxs("select",{value:r,onChange:B=>i(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0,children:[g.jsx("option",{value:"",children:"Select"}),g.jsx("option",{value:"male",children:"Male"}),g.jsx("option",{value:"female",children:"Female"})]})]}),g.jsxs("div",{className:"flex gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Height (Feet)"}),g.jsx("input",{type:"number",value:s,onChange:B=>o(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0,min:"3",max:"8"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Height (Inches)"}),g.jsx("input",{type:"number",value:l,onChange:B=>u(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0,min:"0",max:"11"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Weight"}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("input",{type:"number",value:c,onChange:B=>d(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0,min:"40",max:"700"}),g.jsxs("select",{value:p,onChange:B=>m(B.target.value),className:"p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",children:[g.jsx("option",{value:"kg",children:"kg"}),g.jsx("option",{value:"lbs",children:"lbs"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Activity Level"}),g.jsxs("select",{value:A,onChange:B=>P(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",required:!0,children:[g.jsx("option",{value:"",children:"Select"}),g.jsx("option",{value:"Sedentary",children:"Sedentary"}),g.jsx("option",{value:"Lightly active",children:"Lightly active"}),g.jsx("option",{value:"Moderately active",children:"Moderately active"}),g.jsx("option",{value:"Highly active",children:"Highly active"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block font-medium text-gray-700",children:"Goal"}),g.jsxs("select",{value:k,onChange:B=>R(B.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none",children:[g.jsx("option",{value:"",children:"Select Goal"}),g.jsx("option",{value:"Extreme weight loss",children:"Extreme weight loss"}),g.jsx("option",{value:"Weight loss",children:"Weight loss"}),g.jsx("option",{value:"Maintain weight",children:"Maintain weight"}),g.jsx("option",{value:"Weight gain",children:"Weight gain"}),g.jsx("option",{value:"Extreme weight gain",children:"Extreme weight gain"})]})]}),g.jsx("button",{type:"submit",className:"w-full py-3 bg-primary text-white font-semibold rounded-lg transition hover:bg-secondary",children:"Calculate"})]})})},HM=async t=>{const r=`https://api.edamam.com/api/food-database/v2/parser?app_id=a054b204&app_key=58b51be60f295c9b0ba3bcaa45057a85&ingr=${encodeURIComponent(t)}`;try{const i=await fetch(r);if(!i.ok)throw new Error("Failed to fetch data from Edamam API");return(await i.json()).hints.map(l=>({name:l.food.label,calories:Math.round(l.food.nutrients.ENERC_KCAL||0),protein:Math.round(l.food.nutrients.PROCNT||0),fat:Math.round(l.food.nutrients.FAT||0),carbs:Math.round(l.food.nutrients.CHOCDF||0)}))}catch(i){console.error("Error:",i)}},KI=({onFoodSelect:t})=>{const{currentUser:e}=Vc(),[n,r]=M.useState(""),[i,s]=M.useState([]),[o,l]=M.useState([]),[u,c]=M.useState(5),[d,p]=M.useState(!1),[m,A]=M.useState({name:"",calories:0,protein:0,fat:0,carbs:0}),P="a054b204",k="58b51be60f295c9b0ba3bcaa45057a85",R=async T=>{const x=`https://api.edamam.com/auto-complete?app_id=${P}&app_key=${k}&q=${encodeURIComponent(T)}`;try{const N=await fetch(x);if(N.ok){const C=await N.json();l(C)}}catch(N){console.error("Error fetching autocomplete suggestions:",N)}},I=T=>{const x=T.target.value;r(x),x.length>1?R(x):l([])},_=async T=>{T.preventDefault();const x=await HM(n);s(x),c(5),l([])},w=T=>{t(T),r(""),s([])},b=()=>{c(T=>T+5)},L=T=>{r(T),l([])},F=()=>p(!0),E=()=>p(!1),v=T=>{const{name:x,value:N}=T.target;A(C=>({...C,[x]:N}))},S=async T=>{T.preventDefault();const x={name:m.name,calories:Number(m.calories),protein:Number(m.protein),fat:Number(m.fat),carbs:Number(m.carbs)};if(e){const N=Mn(Vn,"users",e.uid,"foodLogs","customFoods");await Mc(N,{[x.name]:x},{merge:!0})}t(x),A({name:"",calories:0,protein:0,fat:0,carbs:0}),E()};return g.jsxs("div",{className:"text-center",children:[g.jsxs("form",{onSubmit:_,className:"flex flex-col items-center",children:[g.jsx("input",{type:"text",placeholder:"Search for food...",value:n,onChange:I,className:"p-2 border rounded mb-2 w-full max-w-xs"}),g.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded w-full max-w-xs",children:"Search"})]}),o.length>0&&g.jsx("ul",{className:"border border-gray-300 rounded mt-2 bg-white shadow-md max-h-32 overflow-y-auto w-full max-w-xs mx-auto",children:o.map((T,x)=>g.jsx("li",{className:"p-2 cursor-pointer hover:bg-gray-100",onClick:()=>L(T),children:T},x))}),i.length>0&&g.jsxs("div",{className:"mt-4 border rounded p-4 bg-white shadow-md max-h-64 overflow-y-auto w-full max-w-xs mx-auto",children:[g.jsx("ul",{children:i.slice(0,u).map((T,x)=>g.jsxs("li",{className:"p-2 border-b last:border-0 cursor-pointer",onClick:()=>w(T),children:[T.name," - ",T.calories," kcal, ",T.protein,"g protein, ",T.fat,"g fat, ",T.carbs,"g carbs"]},x))}),u<i.length&&g.jsx("button",{onClick:b,className:"mt-4 w-full p-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-700",children:"Load More"})]}),g.jsx("button",{onClick:F,className:"mt-4 p-2 bg-gray-500 text-white rounded w-full max-w-xs",children:"Not seeing food here?"}),d&&g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50",children:g.jsxs("div",{className:"bg-white rounded-lg w-11/12 max-w-md p-6 relative",children:[g.jsx("h2",{className:"text-xl font-bold mb-4",children:"Add Custom Food"}),g.jsxs("form",{onSubmit:S,className:"flex flex-col space-y-4",children:[g.jsx("label",{className:"text-left text-gray-700",children:"Food Name"}),g.jsx("input",{type:"text",name:"name",placeholder:"Enter food name",value:m.name,onChange:v,className:"p-2 border rounded",required:!0}),g.jsx("label",{className:"text-left text-gray-700",children:"Calories"}),g.jsx("input",{type:"number",name:"calories",placeholder:"Enter calories",value:m.calories,onChange:v,className:"p-2 border rounded",required:!0}),g.jsx("label",{className:"text-left text-gray-700",children:"Protein (g)"}),g.jsx("input",{type:"number",name:"protein",placeholder:"Enter protein in grams",value:m.protein,onChange:v,className:"p-2 border rounded",required:!0}),g.jsx("label",{className:"text-left text-gray-700",children:"Fat (g)"}),g.jsx("input",{type:"number",name:"fat",placeholder:"Enter fat in grams",value:m.fat,onChange:v,className:"p-2 border rounded",required:!0}),g.jsx("label",{className:"text-left text-gray-700",children:"Carbs (g)"}),g.jsx("input",{type:"number",name:"carbs",placeholder:"Enter carbs in grams",value:m.carbs,onChange:v,className:"p-2 border rounded",required:!0}),g.jsx("button",{type:"submit",className:"p-2 bg-blue-500 text-white rounded",children:"Submit"})]}),g.jsx("button",{onClick:E,className:"absolute top-2 right-2 text-gray-500",children:"×"})]})})]})};KI.propTypes={onFoodSelect:re.func.isRequired};const qM=()=>{const t=xa(),{currentUser:e}=Vc(),[n,r]=M.useState(!1),[i,s]=M.useState(""),[o,l]=M.useState({Breakfast:[],Lunch:[],Dinner:[],Snacks:[]}),[u,c]=M.useState({calories:0,carbs:0,fat:0,protein:0}),[d,p]=M.useState({calories:0,carbs:0,fat:0,protein:0}),m=w=>{s(w),r(!0)},A=()=>{r(!1),s("")},P=w=>{const b={...o,[i]:[...o[i],w]};l(b);const L={calories:u.calories+w.calories,carbs:u.carbs+w.carbs,fat:u.fat+w.fat,protein:u.protein+w.protein};c(L),I(b,L),A()},k=(w,b)=>{const L=o[w][b],F=o[w].filter((S,T)=>T!==b),E={...o,[w]:F};l(E);const v={calories:u.calories-L.calories,carbs:u.carbs-L.carbs,fat:u.fat-L.fat,protein:u.protein-L.protein};c(v),I(E,v)},R=(w,b)=>{const L={...o,[w]:[...o[w],b]};l(L);const F={calories:u.calories+b.calories,carbs:u.carbs+b.carbs,fat:u.fat+b.fat,protein:u.protein+b.protein};c(F),I(L,F)},I=async(w=o,b=u)=>{if(!e){alert("You need to be logged in to save your food data.");return}try{const L=Mn(Vn,"users",e.uid,"foodLogs","currentLog");await Mc(L,{foodItems:w,totals:b,timestamp:new Date},{merge:!0})}catch(L){console.error("Error saving to Firebase:",L),alert("Failed to save food log. Please try again.")}};M.useEffect(()=>{if(!e)return;const w=Mn(Vn,"users",e.uid),b=async()=>{var v,S,T;const E=await wa(w);if(E.exists()){const x=E.data();p({calories:x.calories||0,carbs:((v=x.macros)==null?void 0:v.carbs)||0,fat:((S=x.macros)==null?void 0:S.fat)||0,protein:((T=x.macros)==null?void 0:T.protein)||0})}},L=async()=>{const E=Mn(Vn,"users",e.uid,"foodLogs","currentLog"),v=await wa(E);if(v.exists()){const S=v.data();l(S.foodItems||{Breakfast:[],Lunch:[],Dinner:[],Snacks:[]}),c(S.totals||{calories:0,carbs:0,fat:0,protein:0})}};b(),L();const F=OM(w,E=>{var v,S,T;if(E.exists()){const x=E.data();p({calories:x.calories||0,carbs:((v=x.macros)==null?void 0:v.carbs)||0,fat:((S=x.macros)==null?void 0:S.fat)||0,protein:((T=x.macros)==null?void 0:T.protein)||0})}});return()=>F()},[e]);const _=d.calories>0;return g.jsxs("div",{className:"flex flex-col items-center p-6 relative",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Your Food Diary"}),!_&&g.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-10",children:[g.jsx("p",{className:"text-sm italic mb-2 text-center",children:"**You need to calculate macros before using this feature**"}),g.jsx("button",{className:"px-4 py-2 bg-secondary text-white rounded-lg font-semibold",onClick:()=>t("/CalorieCalculator"),children:"Calculate Macros"})]}),g.jsxs("div",{className:`${_?"":"blur-sm"} w-full max-w-md`,children:[g.jsxs("div",{className:"w-full bg-white shadow-md rounded-lg p-4 mb-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-center",children:"Macros Left for Today"}),g.jsxs("table",{className:"w-full text-center mt-4",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-2",children:"Calories"}),g.jsx("th",{className:"p-2",children:"Carbs"}),g.jsx("th",{className:"p-2",children:"Fat"}),g.jsx("th",{className:"p-2",children:"Protein"})]})}),g.jsx("tbody",{children:g.jsxs("tr",{className:"text-primary font-semibold",children:[g.jsx("td",{children:Math.max((d.calories||0)-u.calories,0)}),g.jsx("td",{children:Math.max((d.carbs||0)-u.carbs,0)}),g.jsx("td",{children:Math.max((d.fat||0)-u.fat,0)}),g.jsx("td",{children:Math.max((d.protein||0)-u.protein,0)})]})})]})]}),g.jsx("div",{className:"w-full max-w-md bg-white shadow-md rounded-lg p-4",children:["Breakfast","Lunch","Dinner","Snacks"].map(w=>g.jsxs("div",{className:"mb-4",children:[g.jsx("h2",{className:"text-lg font-semibold",children:w}),g.jsx("button",{className:"text-primary hover:text-secondary",onClick:()=>m(w),children:"Add Food"}),g.jsx("ul",{className:"mt-2 flex flex-wrap gap-2",children:o[w].map((b,L)=>g.jsxs("li",{className:"inline-flex items-center py-2 bg-gray-100 text-left rounded-2xl min-w-[250px]",children:[g.jsx("div",{className:"flex-grow ml-3",children:b.name}),g.jsxs("span",{className:"text-sm text-gray-500 mr-3 ml-4",children:[b.calories," kcal"]}),g.jsx("button",{onClick:()=>R(w,b),className:"text-gray-400 hover:text-primary mr-2",children:"+"}),g.jsx("button",{onClick:()=>k(w,L),className:"text-red-500 hover:text-red-700 mr-3 mb-1",children:"x"})]},L))})]},w))}),g.jsxs("div",{className:"w-full max-w-md bg-white shadow-md rounded-lg p-4 mt-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-center",children:"Total Macros Consumed"}),g.jsxs("table",{className:"w-full text-center mt-4",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-2",children:"Calories"}),g.jsx("th",{className:"p-2",children:"Carbs"}),g.jsx("th",{className:"p-2",children:"Fat"}),g.jsx("th",{className:"p-2",children:"Protein"})]})}),g.jsx("tbody",{children:g.jsxs("tr",{className:"font-semibold",children:[g.jsx("td",{children:u.calories}),g.jsx("td",{children:u.carbs}),g.jsx("td",{children:u.fat}),g.jsx("td",{children:u.protein})]})})]})]})]}),n&&g.jsx("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white rounded-lg w-11/12 max-w-md p-6 relative",children:[g.jsxs("h2",{className:"text-xl font-bold mb-4",children:[i," Item"]}),g.jsx("button",{className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700",onClick:A,children:"X"}),g.jsx(KI,{onFoodSelect:P})]})})]})},KM=()=>{const e=Si().pathname==="/";return g.jsxs(qI,{children:[" ",g.jsxs("div",{className:"sm:max-[10%]:",children:[!e&&g.jsx(MM,{}),g.jsxs(Fx,{children:[g.jsx(nr,{path:"/",element:g.jsx(jM,{})}),g.jsx(nr,{path:"/home",element:g.jsx(FM,{})}),g.jsx(nr,{path:"/dashboard",element:g.jsx(UM,{})}),g.jsx(nr,{path:"/user-profile",element:g.jsx(zM,{})}),g.jsx(nr,{path:"/contact",element:g.jsx(BM,{})}),g.jsx(nr,{path:"/CalorieCalculator",element:g.jsx(WM,{})}),g.jsx(nr,{path:"/FoodLogger",element:g.jsx(qM,{})})]}),!e&&g.jsx($M,{})]})]})};uE(document.getElementById("root")).render(g.jsx(qx,{basename:"/FitJoy",children:g.jsx(KM,{})}));
