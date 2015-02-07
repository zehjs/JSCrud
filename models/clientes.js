module.exports = function(){
	
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;

	var cliente = new Schema({
		nome: String,
		cidade: String,
		estado: String,
		data_cad: {type: Date, default: Date.now}
	});

	return mongoose.model('Clientes', cliente);
}