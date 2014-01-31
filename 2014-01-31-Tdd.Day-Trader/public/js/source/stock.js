/* jshint unused: false */

var Stock = (function(){

  'use strict';

  var symbol, shares, purchaseAmount;

  function Stock(iSymbol, iShares, iPurchaseAmount){
    symbol = iSymbol;
    shares = iShares;
    purchaseAmount = iPurchaseAmount;
  }

  Stock.prototype.currentPrice = function(fn){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
    $.getJSON(url, fn);
  };

  Stock.prototype.value = function(fn){
    this.currentPrice(function(quote){
      var total = quote.LastPrice * shares;
      fn(total);
    });
  };

  Stock.prototype.getSymbol = function(){
    return symbol;
  };

  Stock.prototype.getShares = function(){
    return shares;
  };

  Stock.prototype.getPurchaseAmount = function(){
    return purchaseAmount;
  };

  return Stock;
})();
