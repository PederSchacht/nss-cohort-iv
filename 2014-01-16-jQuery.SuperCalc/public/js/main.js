$(document).ready(initalize);

function initalize(){
  $('.number').click(displayNumber);
}

function displayNumber(){
  var display = $('#answer').text();
  var current = this.textContent;
  var output;

  if(current === '.' && display.indexOf('.') !== -1)return;

  if(display === '0' && current !== '.')
    output = current;
  else
    output = display + current;
  
 $('#answer').text(output);
}

