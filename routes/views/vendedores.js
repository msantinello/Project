var keystone = require('keystone');


exports = module.exports = function(req,res){
    var view = new keystone.View(req, res);
    var locals=res.locals;

    //Set locals
    locals.section='vendedores';

    //Load Products
    view.query('vendedores',keystone.list('Vendedor').model.find());
    
    // Render View
    view.render('vendedores');



}