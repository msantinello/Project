var keystone = require('keystone');
var Types = keystone.Field.Types;


// Objeto Categoria
var Categoria=new keystone.List('Categoria',{
      autokey: { path: 'slug', from: 'name', unique: true },
      map: {name:'name'},
    });

    var storage = new keystone.Storage({
        adapter: keystone.Storage.Adapters.FS,
        fs: {
            path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
              publicPath: '/public/uploads/files', // path where files will be served
        }
    });

Categoria.add({
	name: { type: String, required: true},
    subname: {type: String },
    description: { type: Types.Html, wysiwyg:true, height: 300 },
    heroImage:{type: Types.CloudinaryImage},
    publilshedDate: { type:Date, default:Date.now},
    pdfCatalog:{type:Types.File, storage: storage },
    orden:{type: Number},
    });

Categoria.relationship({ ref: 'Product', path: 'product', refPath: 'linea' })
/**
 * Guardar una categoria
 * 
 */
Categoria.register();


