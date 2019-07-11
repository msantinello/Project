var keystone = require('keystone');


exports = module.exports = function(req,res){
    var view = new keystone.View(req, res);
    var locals=res.locals;

    //Set locals
    locals.section ='productos';

    //Set filter
    locals.filters = {
        tipoProd: req.params.tipo,
    }; 

    //set variables
    locals.data = {
        prod:[],
        tipo: [],
        vtipo:[],
    };
     
    view.on('init', function (next) {
        //Cargas los tipos de producto
        
        (keystone.list('ProductType').model.find().sort('sortOrder')).exec(function(error,result){
            if (error) return next(error);
            locals.data.tipo = result;    
            //console.log("tipos1",locals.data.tipo)
            
         });
        if(locals.filters.tipoProd==null){
        //muestra todos los productos
            (keystone.list('Product').model.find().sort('sortOrder')).populate('tipos').exec(function(error,result){
                if (error) return next(error);
                locals.data.prod = result;
                next();
                });
              }
        else{ 
            keystone.list('ProductType').model.findOne().where('key', locals.filters.tipoProd).exec(function (err1, re) {
            if (err1) next(err1);
            locals.data.vtipo = re;
            // query de los productos para la tipo
            keystone.list('Product').model.find().where('tipos',locals.data.vtipo).exec(function(err,results){
                if (err) next(err);
                locals.data.prod = results;      
            next();
            });
        });
        }
      
        
        });

      
		
          
  
    // Render View
    view.render('products');



}