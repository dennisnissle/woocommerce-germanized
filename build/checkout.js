!function(){var e,t={105:function(e,t,r){"use strict";r.r(t);var n=window.React,c=window.wp.blocks,o=window.wp.element,i=function(e){let{icon:t,size:r=24,...n}=e;return(0,o.cloneElement)(t,{width:r,height:r,...n})},a=window.wp.primitives,s=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.Path,{d:"M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm.8-4l.7.7 2-2V12h1V9.2l2 2 .7-.7-2-2H12v-1H9.2l2-2-.7-.7-2 2V4h-1v2.8l-2-2-.7.7 2 2H4v1h2.8l-2 2z"})),l=window.wp.i18n,u=window.wp.blockEditor,m=window.wp.components,d=window.wc.blocksCheckout,f=window.wc.wcSettings,p=window.wp.dom;const w=["BUTTON","FIELDSET","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA","A"];var h=({children:e,style:t={},...r})=>{const c=(0,o.useRef)(),i=()=>{c.current&&p.focus.focusable.find(c.current).forEach((e=>{w.includes(e.nodeName)&&e.setAttribute("tabindex","-1"),e.hasAttribute("contenteditable")&&e.setAttribute("contenteditable","false")}))},a=function(e,t,r){var c=this,o=(0,n.useRef)(null),i=(0,n.useRef)(0),a=(0,n.useRef)(null),s=(0,n.useRef)([]),l=(0,n.useRef)(),u=(0,n.useRef)(),m=(0,n.useRef)(e),d=(0,n.useRef)(!0);(0,n.useEffect)((function(){m.current=e}),[e]);var f=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var p=!!(r=r||{}).leading,w=!("trailing"in r)||!!r.trailing,h="maxWait"in r,g=h?Math.max(+r.maxWait||0,t):null;(0,n.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]);var b=(0,n.useMemo)((function(){var e=function(e){var t=s.current,r=l.current;return s.current=l.current=null,i.current=e,u.current=m.current.apply(r,t)},r=function(e,t){f&&cancelAnimationFrame(a.current),a.current=f?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!d.current)return!1;var r=e-o.current;return!o.current||r>=t||r<0||h&&e-i.current>=g},b=function(t){return a.current=null,w&&s.current?e(t):(s.current=l.current=null,u.current)},v=function e(){var c=Date.now();if(n(c))return b(c);if(d.current){var a=t-(c-o.current),s=h?Math.min(a,g-(c-i.current)):a;r(e,s)}},k=function(){var m=Date.now(),f=n(m);if(s.current=[].slice.call(arguments),l.current=c,o.current=m,f){if(!a.current&&d.current)return i.current=o.current,r(v,t),p?e(o.current):u.current;if(h)return r(v,t),e(o.current)}return a.current||r(v,t),u.current};return k.cancel=function(){a.current&&(f?cancelAnimationFrame(a.current):clearTimeout(a.current)),i.current=0,s.current=o.current=l.current=a.current=null},k.isPending=function(){return!!a.current},k.flush=function(){return a.current?b(Date.now()):u.current},k}),[p,h,t,g,w,f]);return b}(i,0,{leading:!0});return(0,o.useLayoutEffect)((()=>{let e;return i(),c.current&&(e=new window.MutationObserver(a),e.observe(c.current,{childList:!0,attributes:!0,subtree:!0})),()=>{e&&e.disconnect(),a.cancel()}}),[a]),(0,n.createElement)("div",{ref:c,"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal",...t},...r},e)},g=r(184),b=r.n(g),v=window.wp.data,k=window.wc.wcBlocksData,E=({checkbox:e,setShowModal:t,setModalUrl:r,onChangeCheckbox:c})=>{const i="checkbox-"+e.id,{setValidationErrors:a,clearValidationError:s}=(0,v.useDispatch)(k.VALIDATION_STORE_KEY),l=!!e.hidden&&e.hidden,u=(0,v.useSelect)((e=>e(k.VALIDATION_STORE_KEY).getValidationError(i))),m=!(!u?.message||u?.hidden);(0,o.useEffect)((()=>{if(e.has_checkbox)return!0===e.checked||!0===e.hidden?s(i):e.is_required&&a({[i]:{message:e.error_message,hidden:!0}}),()=>{s(i)}}),[e.is_required,e.checked,e.hidden,i,s,a]);const f={id:`checkbox-${e.html_id}`,className:"wc-gzd-checkbox",name:`${e.name}`,checked:!!e.checked,hasError:e.is_required&&m,required:e.is_required};return l?null:(0,n.createElement)("div",{className:b()(`wc-gzd-block-checkout-checkboxes__${e.id}`,Object.values(e.wrapper_classes).join(" ")),key:`wrapper-${e.id}`},e.has_checkbox?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(d.CheckboxControl,{key:`checkbox-${e.id}`,...f,onChange:t=>{c({...e,checked:t})}},(0,n.createElement)("span",{onClick:e=>{const n=e.target.closest("a");if(n&&e.currentTarget.contains(n)&&n.classList.contains("wc-gzd-modal")){e.stopPropagation(),e.preventDefault();let c=n.getAttribute("href");c&&(r(c),t(!0))}},dangerouslySetInnerHTML:{__html:e.label}}))):(0,n.createElement)("div",{className:"wc-gzd-checkbox has-no-checkbox"},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e.label}})))},y=JSON.parse('{"apiVersion":2,"name":"woocommerce-germanized/checkout-checkboxes","version":"2.0.0","title":"Legal Checkboxes","category":"woocommerce","description":"Adds your checkboxes, registered via Germanized, to your checkout.","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"parent":["woocommerce/checkout-fields-block","woocommerce/checkout-totals-block"],"textdomain":"woocommerce-germanized","attributes":{"className":{"type":"string","default":""}}}');(0,c.registerBlockType)(y,{icon:{src:(0,n.createElement)(i,{icon:s,className:"wc-block-editor-components-block-icon"})},edit:({attributes:e,setAttributes:t})=>{const{text:r}=e,c=(0,u.useBlockProps)(),o={id:"preview",label:(0,l.__)("This is a label being printed next to your legal checkbox.","woocommerce-germanized"),hidden:!1,checked:!1,is_required:!0,name:"preview",has_checkbox:!0,wrapper_classes:[]};return(0,n.createElement)("div",{...c},(0,n.createElement)(u.InspectorControls,null,(0,n.createElement)(m.PanelBody,{title:(0,l.__)("Checkboxes","woocommerce-germanized")},(0,n.createElement)(m.ExternalLink,{href:`${f.ADMIN_URL}admin.php?page=wc-settings&tab=germanized-checkboxes`},(0,l.__)("Manage checkboxes","woocommerce-germanized")))),(0,n.createElement)("div",{className:"wc-gzd-editor-checkboxes"},(0,n.createElement)(h,null,(0,n.createElement)(E,{checkbox:o,key:o.id,onChangeCheckbox:()=>{}}))))},save:({attributes:e})=>{const{text:t}=e;return(0,n.createElement)("div",{...u.useBlockProps.save()})}});var x=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),_=JSON.parse('{"apiVersion":2,"name":"woocommerce-germanized/checkout-photovoltaic-system-notice","version":"2.0.0","title":"Photovoltaic system notice","category":"woocommerce","description":"Remind your customers of a possible vat exempt for a photovoltaic system contained within the current cart.","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"parent":["woocommerce/checkout-totals-block","woocommerce/checkout","woocommerce/checkout-fields-block"],"textdomain":"woocommerce-germanized","attributes":{"className":{"type":"string","default":""},"text":{"type":"string","required":false},"title":{"type":"string","required":false},"lock":{"type":"object","default":{"remove":false,"move":false}}}}');(0,c.registerBlockType)(_,{icon:{src:(0,n.createElement)(i,{icon:x,className:"wc-block-editor-components-block-icon"})},edit:({attributes:e,setAttributes:t})=>{const{text:r,title:c}=e,o=(0,u.useBlockProps)(),i=r||(0,l.sprintf)((0,l.__)("To benefit from the tax exemption, please confirm the VAT exemption according to {legal_text} by activating the checkbox.","woocommerce-germanized")),a=c||(0,l.__)("Your shopping cart is eligible for VAT exemption","woocommerce-germanized");return(0,n.createElement)("div",{...o},(0,n.createElement)("div",{className:"wc-gzd-block-checkout__photovoltaic-system-notice wc-block-components-notice-banner is-info"},(0,n.createElement)(u.RichText,{tagName:"h4",className:"wc-block-components-title",value:a,onChange:e=>t({title:e})}),(0,n.createElement)(u.RichText,{tagName:"p",value:i,onChange:e=>t({text:e})})))},save:()=>(0,n.createElement)("div",{...u.useBlockProps.save()})});var z=window.wp.plugins,T=window.wcGzd.blocks.wcGzdBlocksSettings,O=({extensions:e,cart:t})=>(0,T.getSetting)("isSmallBusiness")&&(0,T.getSetting)("smallBusinessNotice")?(0,n.createElement)("div",{className:"wc-gzd-small-business-info",dangerouslySetInnerHTML:{__html:(0,T.getSetting)("smallBusinessNotice")}}):null;const S=({extensions:e,cart:t})=>((0,o.useEffect)((()=>{(0,v.select)(k.CHECKOUT_STORE_KEY).getExtensionData().hasOwnProperty("woocommerce-germanized")||(0,v.dispatch)(k.CHECKOUT_STORE_KEY).__internalSetExtensionData("woocommerce-germanized",{})}),[]),(0,o.useEffect)((()=>{const e=document.getElementsByClassName("wc-block-components-order-summary-item");for(let t of e){const e=t.getElementsByClassName("wc-block-components-product-details__gzd-unit-price")[0],r=t.querySelectorAll("li:not([class*=__gzd])")[0];if(r&&r.classList.add("wc-not-gzd-summary-item-first"),e){const r=t.getElementsByClassName("wc-block-components-order-summary-item__total-price")[0],n=r.getElementsByClassName("wc-gzd-unit-price")[0];n&&r.removeChild(n);const c=document.createElement("div");c.className="wc-gzd-unit-price",c.innerHTML=e.innerHTML,e.classList.add("wc-gzd-unit-price-moved"),r.appendChild(c)}}}),[t.cartItems]),(0,o.useEffect)((()=>{const e=document.getElementsByClassName("wp-block-woocommerce-checkout-order-summary-block");for(let t of e){const e=t.getElementsByClassName("wc-block-components-totals-wrapper");let r=t.parentNode.classList.contains("wc-gzd-checkout-submit");for(let t of e)null!=t.querySelector(".wc-block-components-totals-footer-item")&&(r=!r),r?(t.classList.remove("wc-gzd-show-total-wrapper"),t.classList.add("wc-gzd-hide-total-wrapper")):(t.classList.remove("wc-gzd-hide-total-wrapper"),t.classList.add("wc-gzd-show-total-wrapper"))}}),[t.cartTotals]),null);(0,z.registerPlugin)("woocommerce-germanized-checkout-order-meta",{render:()=>(0,n.createElement)(d.ExperimentalOrderMeta,null,(0,n.createElement)(O,null),(0,n.createElement)(S,null)),scope:"woocommerce-checkout"}),(0,d.registerCheckoutFilters)("woocommerce-germanized",{placeOrderButtonLabel:(e,t,r)=>(0,T.getSetting)("buyNowButtonText")})},184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=c.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var c=r[e];if(void 0!==c)return c.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,c,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],c=e[u][1],o=e[u][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var l=c();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,c,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={231:0,863:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var c,o,i=r[0],a=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(c in a)n.o(a,c)&&(n.m[c]=a[c]);if(s)var u=s(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackWcGzdBlocksJsonp=self.webpackWcGzdBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var c=n.O(void 0,[863],(function(){return n(105)}));c=n.O(c),((window.wcGzd=window.wcGzd||{}).blocks=window.wcGzd.blocks||{}).checkout=c}();