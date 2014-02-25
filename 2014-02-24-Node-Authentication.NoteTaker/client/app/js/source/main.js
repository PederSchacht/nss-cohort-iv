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
    var url = generateUrl('/users');
    var data = $('#user').serialize();
    var type = 'POST';
    var success = displayRegistrationMessage;

    $.ajax({url:url, data:data, type:type, success:success});

    event.preventDefault();
  }

  function displayRegistrationMessage(){
/*
    if(status{
      alert('You have successfully registered');
    }else{
      alert('The email was already taken');
    }
  */
  }

  function clickLogin(){
    event.preventDefault();
  }

  function clickAuthentication(){
    $('#user').toggleClass('hide');
  }

})();

