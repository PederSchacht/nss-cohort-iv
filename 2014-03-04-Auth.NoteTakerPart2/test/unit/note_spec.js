/* jshint expr:true */

'use strict';

process.env.DBNAME = 'note2-test';
var expect = require('chai').expect;
var Mongo = require('mongodb');
var Note, User;
var sue;

describe('Note', function(){

  before(function(done){
    var initMongo = require('../../app/lib/init-mongo');
    initMongo.db(function(){
      Note = require('../../app/models/note');
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      sue = new User({email:'sue@aol.com', password:'abcd'});
      sue.hashPassword(function(){
        sue.insert(function(){
          done();
        });
      });
    });
  });

  describe('new', function(){
    it('should create a new Note object', function(){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hw, prog, code', userId:sue._id.toString()});
      expect(n1).to.be.instanceof(Note);
      expect(n1.title).to.equal('Node');
      expect(n1.body).to.equal('node info');
      expect(n1.dateCreated).to.be.instanceof(Date);
      expect(n1.tags).to.have.length(3);
      expect(n1.userId).to.be.instanceof(Mongo.ObjectID);
    });
    it('should create a new Note object with todays date', function(){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'', tags:'hw, prog, code', userId:sue._id.toString()});
      var d1 = new Date();
      expect(n1.dateCreated.toDateString()).to.equal(d1.toDateString());
    });
    it('should create a new Note object with no tags', function(){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'', tags:'', userIdyy:sue._id.toString()});
      expect(n1.tags).to.have.length(0);
    });
  });

  describe('#insert', function(){
    it('should insert a note into the database', function(done){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hw, prog, code', userId:sue._id.toString()});
      n1.insert(function(){
        expect(n1._id.toString()).to.have.length(24);
        done();
      });
    });
  });

  describe('findNotes', function(){
    it('should find all notes by the users ID', function(done){
      var n1 = new Note({title:'Node', body:'node info', dateCreated:'2014-03-24', tags:'hw, prog, code', userId:sue._id.toString()});
      n1.insert(function(){
        sue.findNotes(function(notes){
          expect(notes).to.have.length(1);
          expect(notes[0].userId).to.equal(sue._id);
          done();
        });
      });
    });
  });
});

