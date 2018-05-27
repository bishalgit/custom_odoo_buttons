odoo.define("custom_odoo_buttons.CustomAddItem", function (require) {
	"use strict";

	var Widget = require('web.Widget');

	var CustomAddItemButton = Widget.extend({
		start: function (parent, value) {
			/**
			 * $("").length checks if the element exists
			 * if the novo_custom_add class exists
			 */
			 /**
			  * TODO: How to address if there are multiple add an item
			  * button in a single render of page?
			  */
			$(document).ready(function(){
	            if($(".custom_add_item_button").length){
	            	$(".custom_add_item_button").first().attr("name")
	            	$(".o_field_x2many_list_row_add").first().find("a").text("Add a " + $(".custom_add_item_button").first().attr("name").split("_")[0]);
	            }
			});
        },
	});

	/**
	 * To use this widget add custom_add_item_button class
	 * to the field
	 */
	var customAddItemButton = new CustomAddItemButton();
	customAddItemButton.appendTo("body");

	return CustomAddItemButton
})