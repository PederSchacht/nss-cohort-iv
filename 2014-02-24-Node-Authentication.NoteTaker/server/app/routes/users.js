'use strict';

var User = require('../models/user');

exports.create = function(req, res){
  var user = new User(req.body);
  user.hash(function(){
    user.insert(function(u){
      res.send(u);
    });
  });
};

exports.login = function(req, res){
  res.send({login:true});
};

