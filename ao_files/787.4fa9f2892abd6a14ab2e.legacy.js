(self.wpJsonpPcmallPcpagevoucherdetail=self.wpJsonpPcmallPcpagevoucherdetail||[]).push([[787],{62801:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(40770),o=r(63804),i=r.n(o);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}var c=(0,n.Z)({Icon:function(t){return i().createElement("svg",a({width:"36",height:"36",viewBox:"0 0 36 36"},t),i().createElement("path",{d:"M14.825 31.685L8.437 36l.922-6.532C4.932 26.622 2 21.654 2 16 2 7.163 9.163 0 18 0s16 7.163 16 16-7.163 16-16 16c-1.087 0-2.149-.108-3.175-.315zM17.003 5a1 1 0 0 0-.999 1.049l.585 12a1 1 0 0 0 .999.951h.824a1 1 0 0 0 .999-.951l.585-12A1 1 0 0 0 18.997 5h-1.994zM18 26.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",fill:"#FFF"}))},iconClassNames:["icon-bubble-info"]})},83172:function(t,e,r){"use strict";r.a(t,(function(t){var n,o,i,a,c,u,s,l,f,h,p,v,d,m;return regeneratorRuntime.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(d=function(t){var e=t.children,r=(0,n.useMemo)((function(){return{env:(0,a.dU)(),language:(0,a.of)(),locale:(0,a.Kd)(),platform:"pc",featureToggles:{VOUCHER_DRAWER_TNC_OK_CTA:(0,u.isFeatureEnabled)(s.xC2),VOUCHER_SHOW_FREE_SHIPPING_MIN_SPEND_IN_VOUCHER_WALLET:(0,u.isFeatureEnabled)(s.inS),VOUCHER_SHOW_FREE_SHIPPING_MIN_SPEND_IN_VOUCHER_SELECTION_PAGE:(0,u.isFeatureEnabled)(s.xkh),SELLER_VOUCHER_DISPLAY_LIMITED_RIBBON:(0,u.isFeatureEnabled)(s.V6n),VOUCHER_TWO_LABEL_ROWS:(0,u.isFeatureEnabled)(s.QNI),VOUCHER_LANDING_PAGE_PC:(0,u.isFeatureEnabled)(s.v_0),VOUCHER_USE_ENCODED_URL:(0,u.isFeatureEnabled)(s.RRm),FSV_SHOW_LIMITED_REDEMPTION_FLAG:(0,u.isFeatureEnabled)(s.Kml),FSV_SHOW_PRODUCT_SCOPE:(0,u.isFeatureEnabled)(s.Xqm)}}}),[]),c=r.env,p=r.language,d=r.locale,m=r.platform,g=r.featureToggles;return o().createElement(i.VoucherCardEnvProvider,{env:c,language:p,locale:d,t:v,platform:m,featureToggles:g,useTrackClick:f.Z,useTrackImpression:h.Z,getVariateConfig:l.getVariateConfig},e)},r.d(e,{x:function(){return m}}),n=r(63804),o=r.n(n),i=r(96370),a=r(33914),c=r(86704),u=r(71437),s=r(54705),l=r(51408),f=r(53783),h=r(17602),!(p=t([i])).then){g.next=22;break}return g.next=19,regeneratorRuntime.awrap(p);case 19:g.t0=g.sent,g.next=23;break;case 22:g.t0=p;case 23:i=g.t0[0],v=c.I18n.t,m=(0,n.memo)(d);case 27:case"end":return g.stop()}}),null,null,null,Promise)}))},72302:function(t,e,r){"use strict";r.d(e,{z:function(){return c}});var n=r(54777),o=r(95325),i=r(41064),a=r(63804);function c(t){var e=t.voucher,r=t.onClaim,c=t.onServerError,u=t.onClaimSuccess,s=t.onClaimFailure,l=(0,o.useDispatch)();return{claim:(0,a.useCallback)((function(){l((0,n.Ek)({promotionid:e.promotionid,voucher_code:e.voucher_code||"",shopid:e.shop_id})).then((function(t){var n,o,a=t.error,l=t.response;n=i.eg.CLAIM_ERROR_OK,o=null,a||!l||l.error||!l.data?n=i.eg.CLAIM_ERROR_UNKNOWN:(n=l.data.invalid_message_code||n,o=l.data.error_config),null==r||r(e,n,o),function(){if(l&&!a){var t=l.data;if(t){var r=t.invalid_message_code;r?null==s||s(e,r):null==u||u(e)}else null==c||c()}else null==c||c()}()}))}),[l,r,s,u,c,e])}}},66974:function(t,e,r){"use strict";r.a(t,(function(t){var n,o,i;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.d(e,{x:function(){return n.x},z:function(){return o.z}}),n=r(83172),o=r(72302),!(i=t([n])).then){a.next=10;break}return a.next=7,regeneratorRuntime.awrap(i);case 7:a.t0=a.sent,a.next=11;break;case 10:a.t0=i;case 11:n=a.t0[0];case 12:case"end":return a.stop()}}),null,null,null,Promise)}))},6787:function(t,e,r){"use strict";r.microfeA(t,(function(){return Promise.all([r.microfeM(0),r.microfeM(2),r.microfeM(1),r.microfeM(4),r.microfeM(3)]).then((function(){t.exports=e,r.a(t,(function(t){var n,o,i,a,c,u,s,l,f,h,p,v,d,m,g,y,_,E,w,x,b,L,O,C,P,R;return regeneratorRuntime.async((function(I){for(;;)switch(I.prev=I.next){case 0:if(R=function(t){var e=t.voucher,r=t.isShopeeMart,u=t.className,h=t.accountStatus,v=t.voucherLocation,m=(0,f.useDispatch)(),y=(0,n.useContext)(p.jm),E=y.setError,x=y.setErrorConfig,b=(0,n.useCallback)((function(t){function r(){return(r=C(L().mark((function t(){var r,n,o,i;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m((0,l.AU)({voucher_code:e.voucher_code||"",voucher_promotionid:e.voucher_promotionid||e.promotionid,promotion_signature:e.signature||""}));case 2:r=t.sent,n=r.data,o=r.error_msg,(i=n&&n.error_config)?i.use_link?x(i):E(i.content||(0,s.t)("voucher_cust_err_msg_content")):o&&E(o||(0,s.t)("msg_voucher_server_error"));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.stopPropagation(),function(){r.apply(this,arguments)}()}),[m,e,E,x]),O=(0,f.useSelector)((function(t){return(0,a.Au)(t.featureToggles,d.v_0)})),R=(0,g.oW)(),I=(0,f.useSelector)((function(t){return e&&e.voucher_code&&t.voucher.claimProgress[e.voucher_code]||P}));return o().createElement(i.ProductDetailPageProductShopVoucher,{isLoggedIn:h===c.d.LOGGED_IN,className:_()(u,w.Z.voucher),voucher:e,isValid:!0,claimProgress:I.progress,enableEncodeUrl:R,useVLP:O,isShopeeMart:r,onClaim:b,voucherLocation:v})},C=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){O(i,n,o,a,c,"next",t)}function c(t){O(i,n,o,a,c,"throw",t)}a(void 0)}))}},O=function(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)},L=function(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new b(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(O([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=p.prototype=f.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(_.prototype),c(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t},n=r(63804),o=r.n(n),i=r(96370),a=r(4225),c=r(89620),u=r(26842),s=r(86704),l=r(10739),f=r(95325),h=r(79861),p=r(87203),v=r(17561),d=r(54705),m=r(25632),g=r(2704),y=r(10616),_=r.n(y),E=r(84857),w=r(21752),!(x=t([p,i])).then){I.next=33;break}return I.next=30,regeneratorRuntime.awrap(x);case 30:I.t0=I.sent,I.next=34;break;case 33:I.t0=x;case 34:b=I.t0,p=b[0],i=b[1],P={progress:v.Z.INIT},e.Z=(0,E.compose)(h.Z,(0,u.u)(),p.O5,(0,s.withI18nCollections)([m.L]))(R);case 40:case"end":return I.stop()}}),null,null,null,Promise)}))}))}))},87203:function(t,e,r){"use strict";r.a(t,(function(t){var n,o,i,a,c,u,s,l,f,h,p,v;return regeneratorRuntime.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(v=function(t){return o().forwardRef((function(e,r){return o().createElement(p,null,o().createElement(s.x,null,o().createElement(t,f({},e,{ref:r}))))}))},p=function(t){var e=t.children,r=(0,n.useState)(""),s=r[0],l=r[1],f=(0,n.useState)(),p=f[0],v=f[1];return o().createElement(h.Provider,{value:{setError:l,setErrorConfig:v}},o().createElement(a.i8,{isOpen:Boolean(p),errorConfig:p,onClose:function(){return v()}}),o().createElement(c.ZP,{toastDuration:2e3,showToast:Boolean(s),toastText:s,onToastDismiss:function(){return l("")},classNames:u.Z.toastContent,toastIcon:o().createElement(i.Z,null),overlayClassname:u.Z.toast,zIndex:600}),e)},f=function(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f.apply(this,arguments)},r.d(e,{jm:function(){return h},O5:function(){return v}}),n=r(63804),o=r.n(n),i=r(62801),a=r(15935),c=r(84614),u=r(62680),s=r(66974),!(l=t([s])).then){d.next=18;break}return d.next=15,regeneratorRuntime.awrap(l);case 15:d.t0=d.sent,d.next=19;break;case 18:d.t0=l;case 19:s=d.t0[0],(h=o().createContext({setError:function(){},setErrorConfig:function(){}})).Consumer;case 22:case"end":return d.stop()}}),null,null,null,Promise)}))},21752:function(t,e){"use strict";e.Z={voucher:"Y56Uu-"}},62680:function(t,e){"use strict";e.Z={toast:"vGoxCe",toastContent:"_9UwfvC",container:"xIT-CJ"}}}]);
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-voucher/_/787.4fa9f2892abd6a14ab2e.legacy.js.map