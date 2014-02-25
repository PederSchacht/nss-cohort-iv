(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#authentication').click(clickAuthentication);
    $('#register').click(clickRegister);
    $('#login').click(clickLogin);
  }

  function clickRegister(){
    event.preventDefault();
  }

  function clickLogin(){
    event.preventDefault();
  }

  function clickAuthentication(){
    $('#user').toggleClass('hide');
  }

})();

