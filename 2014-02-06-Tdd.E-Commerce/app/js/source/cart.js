/* exported Cart */

var Cart = (function(){
  'use strict';

  function Cart(){
    this.products=[];
  }

  Object.defineProperty(Cart.prototype, 'productCount', {
    get: function(){return this.products.length;}
  });

  Cart.prototype.add = function(product, quantity){
    for(var i = 0; i < quantity; i++){
      this.products.push(product);
    }
  };

  Object.defineProperty(Cart.prototype, 'total',{
    get: function(){
      var total = _.reduce(this.products, function(accumulator, product){
        return accumulator + product.price;
      }, 0);

      return Math.round(total) || 0;
    }
  });


  return Cart;
})();

