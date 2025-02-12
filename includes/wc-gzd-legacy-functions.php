<?php
/**
 * Legacy Functions
 *
 * WC_GZD legacy functions.
 *
 * @author        Vendidero
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

function wc_gzd_get_crud_data( $object, $key, $suppress_suffix = false ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return '';
}

function wc_gzd_set_crud_data( $object, $key, $value ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $object;
}

function wc_gzd_set_crud_meta_data( $object, $key, $value ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $object;
}

function wc_gzd_unset_crud_meta_data( $object, $key ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $object;
}

function wc_gzd_set_crud_term_data( $object, $term, $taxonomy ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $object;
}

function wc_gzd_unset_crud_term_data( $object, $taxonomy ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $object;
}

function wc_gzd_get_order_item_product( $item, $order ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $item->get_product();
}

function wc_gzd_get_variable_visible_children( $product ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $product->get_visible_children();
}

function wc_gzd_get_price_including_tax( $product, $args = array() ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_get_price_including_tax( $product, $args );
}

function wc_gzd_get_price_excluding_tax( $product, $args = array() ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_get_price_excluding_tax( $product, $args );
}

function wc_gzd_get_variation( $parent, $variation ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_get_product( $variation );
}

function wc_gzd_get_order_currency( $order ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $order->get_currency();
}

function wc_gzd_reduce_order_stock( $order_id ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	wc_maybe_reduce_stock_levels( $order_id );
}

function wc_gzd_get_product_type( $id ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return WC_Product_Factory::get_product_type( $id );
}

function wc_gzd_get_product_name( $product ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return $product->get_name();
}

function wc_gzd_get_cart_url() {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_get_cart_url();
}

function wc_gzd_get_checkout_url() {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_get_checkout_url();
}

function wc_gzd_help_tip( $tip, $allow_html = false ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	wc_help_tip( $tip, $allow_html );
}

function wc_gzd_string_to_bool( $string ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_string_to_bool( $string );
}

function wc_gzd_bool_to_string( $bool ) {
	wc_deprecated_function( __FUNCTION__, '3.0' );

	return wc_bool_to_string( $bool );
}

add_action(
	'init',
	function () {
		if ( ! function_exists( 'wc_ts_set_crud_data' ) ) {
			function wc_ts_set_crud_data( $object, $key, $value ) {
				wc_deprecated_function( __FUNCTION__, '3.10' );

				return $object;
			}
		}

		if ( ! function_exists( 'wc_ts_get_crud_data' ) ) {
			function wc_ts_get_crud_data( $object, $key, $suppress_suffix = false ) {
				wc_deprecated_function( __FUNCTION__, '3.10' );

				return '';
			}
		}
	},
	0
);

function wc_gzd_get_formatted_state( $country = '', $state = '' ) {
	return wc_stc_get_formatted_state( $country, $state );
}

function wc_gzd_country_to_alpha3( $country ) {
	return wc_stc_country_to_alpha3( $country );
}

function wc_gzd_get_customer_preferred_shipping_provider( $user_id ) {
	return wc_stc_get_customer_preferred_shipping_provider( $user_id );
}

function wc_gzd_country_to_alpha2( $country ) {
	return wc_stc_country_to_alpha2( $country );
}

function wc_gzd_get_shipment_order( $order ) {
	return wc_stc_get_shipment_order( $order );
}

function wc_gzd_get_shipment_label_title( $type, $plural = false ) {
	return wc_stc_get_shipment_label_title( $type, $plural );
}

function wc_gzd_get_shipping_label_zones() {
	return wc_stc_get_shipping_label_zones();
}

function wc_gzd_get_shipping_label_zone_title( $zone ) {
	return wc_stc_get_shipping_label_zone_title( $zone );
}

function wc_gzd_get_shipping_shipments_label_zone_title( $zone ) {
	return wc_stc_get_shipping_shipments_label_zone_title( $zone );
}

function wc_gzd_get_shipment_types() {
	return wc_stc_get_shipment_types();
}

function wc_gzd_get_shipment_type_data( $type = false ) {
	return wc_stc_get_shipment_type_data( $type );
}

function wc_gzd_get_shipments_by_order( $order ) {
	return wc_stc_get_shipments_by_order( $order );
}

function wc_gzd_get_shipment_order_shipping_statuses() {
	return wc_stc_get_shipment_order_shipping_statuses();
}

function wc_gzd_get_shipment_order_return_statuses() {
	return wc_stc_get_shipment_order_return_statuses();
}

function wc_gzd_get_shipping_provider_method( $instance_id ) {
	return wc_stc_get_shipping_provider_method( $instance_id );
}

function wc_gzd_get_current_shipping_method_id() {
	return wc_stc_get_current_shipping_method_id();
}

function wc_gzd_get_current_shipping_provider_method() {
	return wc_stc_get_current_shipping_provider_method();
}

function wc_gzd_get_shipment_order_shipping_status_name( $status ) {
	if ( 'gzd-' !== substr( $status, 0, 4 ) ) {
		$status = 'gzd-' . $status;
	}

	return wc_stc_get_shipment_order_shipping_status_name( $status );
}

function wc_gzd_get_shipment_order_return_status_name( $status ) {
	if ( 'gzd-' !== substr( $status, 0, 4 ) ) {
		$status = 'gzd-' . $status;
	}

	return wc_stc_get_shipment_order_return_status_name( $status );
}

function wc_gzd_get_shipments( $args ) {
	return wc_stc_get_shipments( $args );
}

function wc_gzd_get_shipment_customer_visible_statuses( $shipment_type = 'simple' ) {
	return wc_stc_get_shipment_customer_visible_statuses( $shipment_type );
}

function wc_gzd_get_shipment( $the_shipment ) {
	return wc_stc_get_shipment( $the_shipment );
}

function wc_gzd_get_shipment_statuses() {
	return wc_stc_get_shipment_statuses();
}

function wc_gzd_get_shipment_selectable_statuses( $shipment ) {
	return wc_stc_get_shipment_selectable_statuses( $shipment );
}

function wc_gzd_create_return_shipment( $order_shipment, $args = array() ) {
	return wc_stc_create_return_shipment( $order_shipment, $args );
}

function wc_gzd_create_shipment( $order_shipment, $args = array() ) {
	return wc_stc_create_shipment( $order_shipment, $args );
}

function wc_gzd_create_shipment_item( $shipment, $order_item, $args = array() ) {
	return wc_stc_create_shipment_item( $shipment, $order_item, $args );
}

function wc_gzd_allow_customer_return_empty_return_reason( $order ) {
	return wc_stc_allow_customer_return_empty_return_reason( $order );
}

function wc_gzd_get_return_shipment_reasons( $order_item = false ) {
	return wc_stc_get_return_shipment_reasons( $order_item );
}

function wc_gzd_return_shipment_reason_exists( $maybe_reason, $shipment = false ) {
	return wc_stc_return_shipment_reason_exists( $maybe_reason, $shipment );
}

function _wc_gzd_sort_return_shipment_reasons( $a, $b ) {
	return _wc_stc_sort_return_shipment_reasons( $a, $b );
}

function wc_gzd_shipment_wp_error_has_errors( $error ) {
	return wc_stc_shipment_wp_error_has_errors( $error );
}

function wc_gzd_create_return_shipment_item( $shipment, $shipment_item, $args = array() ) {
	return wc_stc_create_return_shipment_item( $shipment, $shipment_item, $args );
}

function wc_gzd_get_shipment_editable_statuses() {
	return wc_stc_get_shipment_editable_statuses();
}

function wc_gzd_get_shipment_address_addition( $shipment ) {
	return wc_stc_get_shipment_address_addition( $shipment );
}

function wc_gzd_split_shipment_street( $street_str ) {
	return wc_stc_split_shipment_street( $street_str );
}

function wc_gzd_get_shipping_providers() {
	wc_stc_get_shipping_providers();
}

function wc_gzd_get_available_shipping_providers() {
	return wc_stc_get_available_shipping_providers();
}

function wc_gzd_get_shipping_provider( $name ) {
	return wc_stc_get_shipping_provider( $name );
}

function wc_gzd_get_default_shipping_provider() {
	return wc_stc_get_default_shipping_provider();
}

function wc_gzd_get_shipping_provider_select( $include_none = true ) {
	return wc_stc_get_shipping_provider_select( $include_none );
}

function wc_gzd_get_shipping_provider_title( $slug ) {
	return wc_stc_get_shipping_provider_title( $slug );
}

function wc_gzd_get_shipment_shipping_provider_title( $shipment ) {
	return wc_stc_get_shipment_shipping_provider_title( $shipment );
}

function wc_gzd_get_shipping_provider_service_locations() {
	return wc_stc_get_shipping_provider_service_locations();
}

function wc_gzd_get_shipping_provider_slug( $provider ) {
	return wc_stc_get_shipping_provider_slug( $provider );
}

function _wc_gzd_shipments_keep_force_filename( $new_filename ) {
	return _wc_shiptastic_keep_force_filename( $new_filename );
}

function wc_gzd_shipments_upload_data( $filename, $bits, $relative = true ) {
	return wc_shiptastic_upload_data( $filename, $bits, $relative );
}

function wc_gzd_get_shipment_setting_default_address_fields( $type = 'shipper' ) {
	return wc_stc_get_shipment_setting_default_address_fields( $type );
}

function wc_gzd_get_shipment_setting_address_fields( $address_type = 'shipper' ) {
	return wc_stc_get_shipment_setting_address_fields( $address_type );
}

function wc_gzd_get_shipment_return_address( $shipment_order = false ) {
	return wc_stc_get_shipment_return_address( $shipment_order );
}

function wc_gzd_get_shipment_order_shipping_method( $order ) {
	return wc_stc_get_shipment_order_shipping_method( $order );
}

function wc_gzd_get_shipment_order_shipping_method_id( $order ) {
	return wc_stc_get_shipment_order_shipping_method_id( $order );
}

function wc_gzd_render_shipment_action_buttons( $actions ) {
	return wc_stc_render_shipment_action_buttons( $actions );
}

function wc_gzd_get_shipment_status_name( $status ) {
	return wc_stc_get_shipment_status_name( $status );
}

function wc_gzd_get_shipment_sent_statuses() {
	return wc_stc_get_shipment_sent_statuses();
}

function wc_gzd_get_shipment_counts( $type = '' ) {
	return wc_stc_get_shipment_counts( $type );
}

function wc_gzd_get_shipment_count( $status, $type = '' ) {
	return wc_stc_get_shipment_count( $status, $type );
}

function wc_gzd_is_shipment_status( $maybe_status ) {
	return wc_stc_is_shipment_status( $maybe_status );
}

function wc_gzd_get_shipment_item( $the_item = false, $item_type = 'simple' ) {
	return wc_stc_get_shipment_item( $the_item, $item_type );
}

function wc_gzd_get_shipment_item_id( $item ) {
	return wc_stc_get_shipment_item_id( $item );
}

function wc_gzd_format_shipment_dimensions( $dimensions, $unit = '' ) {
	return wc_stc_format_shipment_dimensions( $dimensions, $unit );
}

function wc_gzd_format_shipment_weight( $weight, $unit = '' ) {
	return wc_stc_format_shipment_weight( $weight, $unit );
}

function wc_gzd_get_account_shipments_columns( $type = 'simple' ) {
	return wc_stc_get_account_shipments_columns( $type );
}

function wc_gzd_get_order_customer_add_return_url( $order ) {
	return wc_stc_get_order_customer_add_return_url( $order );
}

function wc_gzd_order_is_customer_returnable( $order, $check_date = true ) {
	return wc_stc_order_is_customer_returnable( $order, $check_date );
}

function wc_gzd_get_order_shipping_provider( $order ) {
	return wc_stc_get_order_shipping_provider( $order );
}

function wc_gzd_get_customer_order_return_request_key() {
	return wc_stc_get_customer_order_return_request_key();
}

function wc_gzd_shipments_additional_costs_include_tax() {
	return wc_shiptastic_additional_costs_include_tax();
}

function wc_gzd_customer_can_add_return_shipment( $order_id ) {
	return wc_stc_customer_can_add_return_shipment( $order_id );
}

function wc_gzd_customer_return_needs_manual_confirmation( $order ) {
	return wc_stc_customer_return_needs_manual_confirmation( $order );
}

function wc_gzd_get_account_shipments_actions( $shipment ) {
	return wc_stc_get_account_shipments_actions( $shipment );
}

function wc_gzd_shipments_get_product( $the_product ) {
	return wc_shiptastic_get_product( $the_product );
}

function wc_gzd_get_volume_dimension( $dimension, $to_unit, $from_unit = '' ) {
	return wc_stc_get_volume_dimension( $dimension, $to_unit, $from_unit );
}

function wc_gzd_shipments_allow_deferred_sync( $type = 'shipments' ) {
	return wc_shiptastic_allow_deferred_sync( $type );
}

function wc_gzd_get_shipment_error( $error ) {
	return wc_stc_get_shipment_error( $error );
}

function wc_gzd_shipments_substring( $str, $start, $length = null ) {
	return wc_shiptastic_substring( $str, $start, $length );
}
