odoo.define("custom_odoo_buttons.CustomAddItem", function (require) {
	"use strict";

	var Widget = require('web.Widget');

	var CustomAddItemButton = Widget.extend({
		start: function (parent, value) {
			/**
			 * check if the document is ready and 
			 * if the novo_custom_add class exists
			 */
            if($(.custom_add_item_button)){
            	$(".o_field_x2many_list_row_add").find("a").text("Add a " + $(".custom_add_item_button").text());
            }
        },
	});

	/**
	 * To use this widget add custom_add_item_button to the field
	 */
	var customAddItemButton = new CustomAddItemButton();
	customAddItemButton.appendTo("body");

	return CustomAddItemButton
})