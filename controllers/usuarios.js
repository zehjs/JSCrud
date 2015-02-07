module.exports = function(app){

	var Usuario = app.models.usuarios;


	var usuariosController = {
		
		index: function(req, res)
		{
			Usuario.find(function(err, data)
			{
				if(err){ 
					console.log("Erro ao ler: "+err);
				}
				res.render('usuarios/index', {lista: data});
			});
			
		},
		create: function(req, res)
		{
			res.render('usuarios/create');
		},
		insert: function(req, res){
			var model = new Usuario(req.body);
			model.save(function(err){
				if (err)
				{
					console.log(err);
				};
				res.redirect('/usuarios');
			});
		},
		lista: function(req, res)
		{
			Usuario.find(function(err, user){
				if(err) console.log('erro ao uscar usuario '+err);
				res.json(user);
			});
		},
		edit: function(req, res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}
				res.render('usuarios/edit', {value: data});
			});
		},
		update: function(req, res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}
				var model = data;
				model.nome = req.body.nome;
				model.login = req.body.login;
				model.save(function(err){
					if (err){
						console.log(err);
					}else{
						res.redirect('/usuarios');
					}
				});
				
			});
		},
		remove: function(req, res){
			Usuario.findById(req.params.id, function(err, data){
				var model = data;

				model.remove();

				res.redirect('/usuarios');
			})
		}
	}

	return usuariosController;
}