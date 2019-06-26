var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var ProductType = new keystone.List('ProductType', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProductType.add({
	name: { type: String, required: true },
});

ProductType.relationship({ ref: 'Product', path: 'product', refPath: 'tipos' });

ProductType.register();
