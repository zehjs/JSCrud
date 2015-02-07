module.exports = function(app){
	var clientes = app.controllers.clientes;

	app.get('/clientes', clientes.index);
	app.get('/clientes/create', clientes.create);
	app.post('/clientes/insert', clientes.insert);
	app.get('/clientes/remove/:id', clientes.remove);
	app.get('/clientes/edit/:id', clientes.edit);
}