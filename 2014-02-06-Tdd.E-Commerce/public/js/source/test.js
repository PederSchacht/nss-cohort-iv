/* global test:false, ok:false, deepEqual:false, Product:false, Cart:false, Person:false */

'use strict';

test('Product#new', function(){
  var p1 = new Product ('CD', 3);

  ok(p1 instanceof Product, 'p1 is a Product');
  deepEqual(p1.price, 3, 'p1 has a price of $3');
});

test('Person#new', function(){
  var r1 = new Person ('Bob', 300);

  ok(r1 instanceof Person, 'r1 is a Person');
  deepEqual(r1.cash, 300, 'r1 has $300');
});

test('Cart#new', function(){
  var r1 = new Person ('Bob', 300);

  ok(r1.cart instanceof Cart, 'cart is a Cart');
  deepEqual(r1.cart.products, [], 'cart has an array of products');
});

test('Cart#add', function(){
  var r1 = new Person ('Bob', 300);
  var CD = new Product('CD', 3);
  var DVD = new Product('DVD', 5);
  var BLURAY = new Product('BLURAY', 9);

  r1.cart.add(CD, 2);
  r1.cart.add(DVD, 5);
  r1.cart.add(BLURAY, 1);

  deepEqual(r1.cart.productCount, 8, 'cart has an array of 8 products');
});

test('Cart#total', function(){
  var r1 = new Person ('Bob', 300);
  var CD = new Product('CD', 3);
  var DVD = new Product('DVD', 5);
  var BLURAY = new Product('BLURAY', 9);

  r1.cart.add(CD, 2);
  r1.cart.add(DVD, 5);
  r1.cart.add(BLURAY, 1);

  deepEqual(r1.cart.productCount, 8, 'cart has an array of 8 products');
  deepEqual(r1.cart.total, 40, 'cart has a total of $40');
});

test('Cart#remove', function(){
  var r1 = new Person ('Bob', 300);
  var CD = new Product('CD', 3);
  var DVD = new Product('DVD', 5);
  var BLURAY = new Product('BLURAY', 9);

  r1.cart.add(CD, 2);
  r1.cart.add(DVD, 5);
  r1.cart.add(BLURAY, 1);

  r1.cart.remove(CD, 1);
  r1.cart.remove(DVD, 2);

  deepEqual(r1.cart.productCount, 5, 'cart has an array of 5 products');
  deepEqual(r1.cart.total, 27, 'cart has a total of $32');
});

