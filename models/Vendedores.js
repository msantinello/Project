var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Vendedor Model
 * =============
 */

var Vendedor = new keystone.List('Vendedor', {
    autokey: { from: 'name', path: 'key', unique: true },
});

Vendedor.add({
	name: { type: String, required: true },
	email: { type: Types.Email },
	telefono: { type: String },
    direccion:{type:String},
    logo:{type: Types.CloudinaryImage},
});

Vendedor.register();
