var Document = require('../models.js');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', 'gay':Document });
};
