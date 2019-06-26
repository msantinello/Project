var keystone = require('keystone');


exports = module.exports = function(req,res){
    var view = new keystone.View(req, res);
    var locals=res.locals;

    //Set locals
    locals.section='linea';

    //Load Products
    view.query('categorias',keystone.list('Categoria').model.find().sort('orden'));
    
    // Render View
    view.render('lineaProd');



}