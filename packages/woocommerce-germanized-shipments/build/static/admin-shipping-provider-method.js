!function(){var i,e;window.shipments=window.shipments||{},window.shipments.admin=window.shipments.admin||{},i=jQuery,(e=window.shipments).admin.shipping_provider_method={params:{},currentProvider:"",init:function(){var n=e.admin.shipping_provider_method;n.params=wc_gzd_shipments_admin_shipping_provider_method_params,i(document).on("change","select[id$=shipping_provider]",n.showOrHideAll).on("click",".wc-gzd-shipping-provider-method-tabs .nav-tab-wrapper a.nav-tab",n.onChangeTab).on("change",".override-checkbox :input",n.onChangeOverride).on("change",".wc-gzd-shipping-provider-method-tab-content :input[id]",n.onChangeInput),i(document.body).on("wc_backbone_modal_loaded",n.onShippingMethodOpen),i("select[id$=shipping_provider]").length>0&&i("select[id$=shipping_provider]").trigger("change")},onChangeInput:function(){e.admin.shipment_settings.onChangeInput.call(i(this))},parseFieldId:function(i){return i.replace("[","_").replace("]","")},onChangeOverride:function(){e.admin.shipping_provider_method;var n=i(this),r=n.is(":checked"),t=n.parents(".wc-gzd-shipping-provider-override-wrapper");r?t.find(".wc-gzd-shipping-provider-override-inner-wrapper").addClass("has-override"):t.find(".wc-gzd-shipping-provider-override-inner-wrapper").removeClass("has-override")},onChangeTab:function(){e.admin.shipping_provider_method;var n=i(this),r=n.parents("form"),t=n.attr("href").replace("#",""),d=r.find('.wc-gzd-shipping-provider-method-tab-content[data-tab="'+t+'"]');return n.parents(".wc-gzd-shipping-provider-method-tabs").find(".nav-tab-active").removeClass("nav-tab-active"),r.find(".wc-gzd-shipping-provider-method-tab-content").removeClass("tab-content-active"),d.length>0&&(n.addClass("nav-tab-active"),d.addClass("tab-content-active"),d.find(":input:visible").trigger("change")),!1},getCleanInputId:function(i){var n=e.admin.shipping_provider_method.currentProvider,r=i.attr("id")?i.attr("id"):i.attr("name");return!!r&&(n&&r.toLowerCase().indexOf("-p-"+n+"-")>=0?r.substring(r.lastIndexOf("-p-"+n+"-"),r.length):r)},onShippingMethodOpen:function(e,n){"wc-modal-shipping-method-settings"===n&&($wrapper=i(".wc-modal-shipping-method-settings"),i("select[id$=shipping_provider]").length>0&&$wrapper.find("select[id$=shipping_provider]").trigger("change"))},showOrHideAll:function(){var n=e.admin.shipping_provider_method,r=i(this),t=r.parents("form");n.currentProvider=r.val(),t.find(".wc-gzd-shipping-provider-method-tabs").hide(),t.find(".wc-gzd-shipping-provider-method-tab-content").removeClass("tab-content-active"),n.currentProvider.length>0&&(t.find('.wc-gzd-shipping-provider-method-tabs[data-provider="'+n.currentProvider+'"]').show(),t.find('.wc-gzd-shipping-provider-method-tabs[data-provider="'+n.currentProvider+'"] .nav-tab-wrapper').find("a.nav-tab:first").trigger("click"))}},i(document).ready((function(){e.admin.shipping_provider_method.init()})),((window.wcGzdShipments=window.wcGzdShipments||{}).static=window.wcGzdShipments.static||{})["admin-shipping-provider-method"]={}}();