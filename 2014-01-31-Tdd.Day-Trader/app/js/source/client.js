/* exported Client */
/* global Stock:false */

var Client = (function(){

  'use strict';

  function Client(name, cash){
    this.name = name;
    this._portfolios = [];
    this.cash = cash;
  }

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.purchaseStock = function(symbol, shares, fn){
    var stock = {};
    var that = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
    $.getJSON(url, function(quote){
      var total = quote.LastPrice * shares;
      if(total < that.cash){
        that.cash = that.cash - total;
        stock = new Stock(symbol, shares, stock.LastPrice);
        fn(stock);
      }else{
        fn(undefined);
      }
    });
  };
  
  Client.prototype.sellStock = function(stockObject, shares, fn){
    var that = this;
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + stockObject.symbol + '&callback=?';
    $.getJSON(url, function(quote){
      var total = shares * quote.LastPrice;
      if(shares <=  stockObject.shares){
        that.cash += total;
        stockObject.shares -= shares;
      }
      fn(stockObject);
    });
  };

  Client.prototype.addPortfolio = function(input){
    this._portfolios = this._portfolios.concat(input);
  };

  Client.prototype.getPortfolio = function(input){
    var names = [].concat(input);

    var output = _.filter(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  Client.prototype.delPortfolio = function(input){
    var names = [].concat(input);

    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(names, portfolio.name);
    });

    if(typeof input === 'string'){ output = output[0]; }

    return output;
  };

  return Client;
})();
 
