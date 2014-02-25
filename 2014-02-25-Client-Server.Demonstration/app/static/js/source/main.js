(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(clickAdd);
    $('#product').click(clickProduct);
  }

  function clickAdd(){
    var x = $('#a').val();
    var y = $('#b').val();
    var url = '/calc/add?x=' + x + '&y=' + y;
    $.getJSON(url, function(data){
      $('#sum').text(data.sum);
    });
  }

  function clickProduct(){
    var numbers = $('#numbers').val();
    var url = 'calc/product?numbers='+numbers;
    $.getJSON(url, function(data){
      $('#product-answer').text(data.product);
    });
  }

})();

