$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
  $('#product').click(product);
}

function sum(){
  var s = 0;

  $('.numbers').each(function(index, element){
  s += parseFloat(element.value);
  });

  $('#result').text(s);
}

function clear(){
    $('#num1').val('');
    $('#num2').val('');
    $('#num3').val('');
    $('#num4').val('');
    $('#num5').val('');
    $('#op').val('');
    $('#result').text('');
}

function calculate(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val(); 

  var result = compute(num1,num2,op);
  $('#result').text(result);
}

function compute(x,y,op){
  var result;

  switch(op){
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
  }
return result;
}
/*
function sum(){
  var result;

  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var num3 = $('#num3').val();
  num3 = parseFloat(num3);
  var num4 = $('#num4').val();
  num4 = parseFloat(num4);
  var num5 = $('#num5').val();
  num5 = parseFloat(num5);

  var result = num1 + num2 + num3 + num4 + num5;
  $('#result').text(result);
}
*/
function product(){
  var result;

  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var num3 = $('#num3').val();
  num3 = parseFloat(num3);
  var num4 = $('#num4').val();
  num4 = parseFloat(num4);
  var num5 = $('#num5').val();
  num5 = parseFloat(num5);

  var result = num1 * num2 * num3 * num4 * num5;
  $('#result').text(result);
}

