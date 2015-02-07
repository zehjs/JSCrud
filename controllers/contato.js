module.exports = function(app){
	var contatoController = {
		index: function(req, res){
			res.render('contato/index');
		}
	}

	return contatoController;
}