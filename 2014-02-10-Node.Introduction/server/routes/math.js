'use strict';

var _ = require('lodash');

exports.product = function(req, res){
  var numbers = req.query.numbers.split(', ');
  var prod = _.reduce(numbers, function(acc, num){return acc*num;}, 1);
  res.jsonp({product:prod});
};

exports.calcnames = function(req, res){
  var names = req.query.names.split(', ');
  var odds = _.filter(names, function(name){return name.length % 2 !== 0;});
  res.jsonp({calcnames:odds});
};

