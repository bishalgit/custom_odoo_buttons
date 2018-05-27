# -*- coding: utf-8 -*-
from odoo import http

# class CustomOdooButtons(http.Controller):
#     @http.route('/custom_odoo_buttons/custom_odoo_buttons/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/custom_odoo_buttons/custom_odoo_buttons/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom_odoo_buttons.listing', {
#             'root': '/custom_odoo_buttons/custom_odoo_buttons',
#             'objects': http.request.env['custom_odoo_buttons.custom_odoo_buttons'].search([]),
#         })

#     @http.route('/custom_odoo_buttons/custom_odoo_buttons/objects/<model("custom_odoo_buttons.custom_odoo_buttons"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom_odoo_buttons.object', {
#             'object': obj
#         })