'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name:'my name is node'});
};

exports.favcolor = function(req, res){
  res.jsonp({color:'Dark Green'});
};

exports.sum = function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum:total});
};

exports.canDrink = function(req, res){
  var name = req.params.name;
  var age = parseInt(req.params.age);
  var answer;
  if(age < 18){
    answer = 'No';
  }else if(age > 17 && age < 21){
    answer = 'Maybe';
  }else {
    answer = 'Yes';
  }

  var drinkResult = 'Can ' + name + ' drink? ' + answer;

  res.jsonp({canDrink:drinkResult});
};

