var keystone = require('keystone');



exports = module.exports = function(req,res){

    var view = new keystone.View(req, res);
    var locals = res.locals;
  

    //Set locals
    locals.section='linea';
    locals.filters = {
       categoria:req.params.productCat,
      
    }
    locals.data = {
        prodfilter : [],
        vlinea : [],
        tipoprod: [],
    
    }
   
   view.on('init', function(next) {
    keystone.list('ProductType').model.find().exec(function(er,res){
            if(er) next(er);
            locals.data.tipoprod=res;
            //next();
    });
    keystone.list('Categoria').model.findOne().where('slug', locals.filters.categoria).exec(function (err1, re) {
         if (err1) next(err1);
        locals.data.vlinea = re;
    // query de los productos para la categoria
    keystone.list('Product').model.find().where('linea',locals.data.vlinea).exec(function(err,results){
        if (err) next(err);
        locals.data.prodfilter = results;      
        console.log(err) ; 
        next();
            });
         
        });
     // query categoria del parametro
     
    });
  
       
           // Render View
    view.render('productCat');
}