'use strict';

var albums = global.nss.db.collection('albums');
module.exports = Album;
var fs = require('fs');
var path = require('path');
var Mongo = require('mongodb');

function Album(album){
  if(typeof album._id === 'string'){
    album._id = Mongo.ObjectID(album._id);
  }

  this._id = album._id;
  this.title = album.title;
  this.taken = new Date(album.taken);
  this.photos = [];
}

Album.prototype.addCover = function(oldpath){
  var dirname = this.title.replace(/\s/g, '').toLowerCase();
  var abspath = __dirname + '/../static';
  var relpath = '/img/' + dirname;
  fs.mkdirSync(abspath + relpath);

  var extension = path.extname(oldpath);
  relpath += '/cover' + extension;
  fs.renameSync(oldpath, abspath + relpath);

  this.cover = relpath;
};

Album.prototype.insert = function(fn){
  albums.insert(this, function(err, records){
    fn(err);
  });
};

Album.findAll = function(fn){
  albums.find().toArray(function(err, records){
    fn(records);

  });
};

Album.findById = function(id, fn){
  var _id = Mongo.ObjectID(id);
  albums.findOne({_id:_id}, function(err, record){
    fn(record ? new Album(record) : null);
  });
};

Album.addPhoto('albums/'+req.params.id, req.params.title);
  var _id = Mongo.ObjectID(req.id);


