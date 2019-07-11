var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * PostCategory Model
 * ==================
 */


var ProductType = new keystone.List('ProductType', {
	autokey: { from: 'name', path: 'key', unique: true },
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
		  publicPath: '/public/uploads/files', // path where files will be served
	}
});


ProductType.add({
	name: { type: String, required: true },
	pdfManual:{ type: Types.File, storage: storage },
});

ProductType.relationship({ ref: 'Product', path: 'product', refPath: 'tipos' });

ProductType.register();
