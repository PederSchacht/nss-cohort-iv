'use strict';

module.exports = Note;
var notes = global.nss.db.collection('notes');
var _ = require('lodash');
var Mongo = require('mongodb');

function Note(note){
  this.title = note.title;
  this.body = note.body;
  this.dateCreated = note.dateCreated ? new Date(note.dateCreated) : new Date();
  this.tags = note.tags || '';
  this.tags = this.tags.split(',').map(function(tag){return tag.trim();});
  this.tags = _.compact(this.tags);
  this.userId = Mongo.ObjectID(note.userId);
}

Note.prototype.insert = function(fn){
  var self = this;
  notes.insert(self, function(err, records){
    fn(err);
  });
};

Note.findByUserId = function(userId, fn){
  userId = Mongo.ObjectID(userId);

  notes.find({userId:userId}).toArray(function(err, records){
    fn(records);
  });
};

