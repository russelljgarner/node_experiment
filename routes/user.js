//var Document = require('../models.js');
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render("test", {"gay": Document});
};
