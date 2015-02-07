module.exports = function(app){

	var Cliente = app.models.clientes;


	var clientesController = {

		index: function(req, res){
			var lista = Cliente.find(function(err, data){
				res.render('clientes/index', {lista: data});
			});
		},
		create: function(req, res){
			res.render('clientes/create');
		},
		insert: function(req, res){
			var model = new Cliente(req.body);
			model.save(function(err){
				res.redirect('/clientes');
			})
		},
		remove: function(req, res){
			Cliente.findById(req.params.id, function(err, data){
				data.remove();
			});
			res.redirect('/clientes');
		},
		edit: function(req, res){

			var model = Cliente.findById(req.params.id, function(err, data){
				res.render('clientes/edit', {value: data});
			});
		}
	}

	return clientesController;
}