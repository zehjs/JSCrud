module.exports = function(app){
	var usuarios = app.controllers.usuarios;
	app.get('/usuarios', usuarios.index);
	app.post('/usuarios/insert', usuarios.insert);
	app.get('/usuarios/create', usuarios.create);
	app.get('/usuarios/lista', usuarios.lista);
	app.get('/usuarios/edit/:id', usuarios.edit);
	app.post('/usuarios/edit/:id', usuarios.update);
	app.get('/usuarios/remove/:id', usuarios.remove);
}