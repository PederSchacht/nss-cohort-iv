/*global test:false, asyncTest:false, start:false, deepEqual:false, ok:false, Stock:false, Portfolio:false, portfolioFactory:false */

'use strict';

test('Stock#new', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.symbol ='x';
  s1.shares ='x';
  s1.purchaseAmount ='x';

  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.getSymbol(), 'AAPL', 's1 should be AAPL');
  deepEqual(s1.getShares(), 50, 's1 should have 50 shares');
  deepEqual(s1.getPurchaseAmount(), 25, 's1 was purchased at $25');
});

asyncTest('Stock#currentPrice', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.currentPrice(function(quote){
    ok(quote.LastPrice > 0, 'appl quote should be above zero');
    start();
  });
});

asyncTest('Stock#value', function(){
  var s1 = new Stock('AAPL', 50, 25);
  s1.value(function(value){
    ok(value > 0, 'appl total value should be above zero');
    start();
  });
});

test('Portfolio#new', function(){
  var p1 = portfolioFactory('Tech Stocks');

  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.name, 'Tech Stocks', 'p1 should have a name');
  deepEqual(p1.stockCount(), 0, 'p1 should have no stocks');
});

test('Portfolio#addStock', function(){
  var p1 = portfolioFactory('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  p1.addStock(s1);
  var s2 = new Stock('GOOG', 25, 50);
  p1.addStock(s2);
  var s3 = new Stock('AMZN', 15, 10);
  p1.addStock(s3);

  deepEqual(p1.stockCount(), 3, 'p1 should have 3  stocks');
});

test('Portfolio#removeStock', function(){
  var p1 = portfolioFactory('Tech Stocks');
  var s1 = new Stock('AAPL', 50, 25);
  p1.addStock(s1);
  var s2 = new Stock('GOOG', 25, 50);
  p1.addStock(s2);
  var s3 = new Stock('AMZN', 15, 10);
  p1.addStock(s3);
  p1.removeStock(s1);

  deepEqual(s1.name, 'AAPL', 's1 should be stock AAPL');
  deepEqual(p1.stockCount(), 2, 'p1 should have 2  stocks');
});

