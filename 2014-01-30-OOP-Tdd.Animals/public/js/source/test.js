/*global test:false, deepEqual:false, ok:false, Shelter:false, Animal:false, Client:false */

'use strict';

//shelter
test('Shelter', function(){
  var shelter = new Shelter();
  var s1 = new Shelter();
  var string = 'my string';

  ok(shelter instanceof Shelter, 'shelter should be an instance of Shelter');
  ok(s1 instanceof Shelter, 's1 should be an instance of Shelter');
  ok(!(string instanceof Shelter), 'string should not be an instance of Shelter');
});

test('Shelter#name', function(){
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.name, 'Green Hills Shelter', 's1 should have a name');
});

test('Shelter#location', function(){
  var s1 = new Shelter('Green Hills Shelter');
  s1.location = 'Main St';
  var s2 = new Shelter('GHS');

  deepEqual(s1.location, 'Main St', 's1 should have a location');
  deepEqual(s2.location, 'Not Defined', 's2 should have a default location');
});

test('Shelter#capacity', function(){
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.capacity, 0, 's1 should have a zero capacity');
});

test('Shelter#setHours()', function(){
  var s1 = new Shelter('Green Hills Shelter');
  s1.setHours([
    {day:'Mon', open:'8am', close:'5pm'},
    {day:'Wed', open:'11am', close:'2pm'},
    {day:'Fri', open:'9am', close:'4pm'}
  ]);

  s1.hours = 'blah';
  deepEqual(s1.getHours(), 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have set hours');
});

test('Shelter#addAnimal()', function(){
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fido');
  s1.addAnimal(a1);

  ok(s1.animalCount() === 1, 's1 should have 1 item array');
});

test('Shelter#placeAnimal()', function(){
  var s1 = new Shelter('Green Hills Shelter');
  var a1 = new Animal('fido');
  s1.addAnimal(a1);
  var a2 = new Animal('max');
  s1.addAnimal(a2);
  var a3 = new Animal('roxy');
  s1.addAnimal(a3);

  var a4 = s1.placeAnimal('fido');

  deepEqual(a4.name, 'fido', 'fido should be placed');
  deepEqual(s1.animalCount(), 2, 'there should be two animals left in the shelter');
});

//animal
test('Animal',function(){
  var a1 = new Animal();

  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
});

test('Animal#name',function(){
  var a1 = new Animal('fido');

  deepEqual(a1.name, 'fido', 'a1 should have a name');
});

test('Animal#species',function(){
  var a1 = new Animal('fido','dog');
  var a2 = new Animal('fido');

  deepEqual(a1.species, 'dog', 'a1 should have a species');
  deepEqual(a2.species, 'Not Set', 'a1 should not have a species set');
});

test('Animal#gender',function(){
  var a1 = new Animal('fido,','dog','male');
  var a2 = new Animal('fido');

  deepEqual(a1.gender, 'male', 'a1 should have a gender');
  deepEqual(a2.gender, 'Not Set', 'a1 should not have a gender set');
});

test('Animal#age',function(){
  var a1 = new Animal('fido','dog','male','3');
  var a2 = new Animal('fido');

  deepEqual(a1.age, '3', 'a1 should have a age');
  deepEqual(a2.age, 0, 'a1 should not  have an age set');
});

//client
test('Client',function(){
  var c1 = new Client();

  ok(c1 instanceof Client, 'c1 should be an instance of Client');
});

test('Client#name',function(){
  var c1 = new Client('bill');

  deepEqual(c1.name, 'bill', 'c1 should have a name');
});

test('Client#adoptAnimal()', function(){
  var c1 = new Client('bill');
  var a1 = new Animal('fido');
  c1.adoptAnimal(a1);

  ok(c1.animals.length === 1, 'c1 should have 1 item array');
  ok(c1.animals[0] instanceof Animal, 'c1 should have 1 animal');
  deepEqual(c1.animals[0].name, 'fido', 'fido should be in the client animals array');
});

