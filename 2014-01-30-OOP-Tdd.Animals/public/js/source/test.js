/*global test:false, deepEqual:false, ok:false, Shelter:false, Animal:false */

'use strict';

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

  deepEqual(s1.hours, 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have a zero capacity');
});

test('Animal',function(){
  var a1 = new Animal();

  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
});

