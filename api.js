var Docu = require('./models.js');

exports.docu = function(req, res) {
   var z = new Docu({title: req.body.title, author: req.body.author}).save();
	console.log(req.get);
	res.render("index", {"title": req.query['title']});
}
