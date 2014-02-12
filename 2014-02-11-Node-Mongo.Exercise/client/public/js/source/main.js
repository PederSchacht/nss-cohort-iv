(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#create-exercise').click(createExercise);
    $('#new-exercise').click(newExercise);
    $('#done').click(done);
    getExercises();
    getFilters();
  }
  
  function done(){
    $('#new-create').addClass('hidden');
  }

  function newExercise(){
    $('#new-create').removeClass('hidden');
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var cals = $('#cals').val();
    var date = $('#date').val();
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    var options = {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:cals, date:date};
    options.success = exerciseCreated;
    $.ajax(options);
  }

  function exerciseCreated(){
    $('#exercises > tbody').empty();
    getExercises();
  }

  function getFilters(){
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    $.getJSON(url, filtersGet);
  }

  function filtersGet(data){
    for(var i = 0; i < data.exercises.length; i++){
      var $name = $('<option>');
      var $time = $('<option>');
      var $calories = $('<option>');
      var $date = $('<option>');
    
      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $calories.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      var nameOption = data.exercises[i].name;
      nameOption.text = data.exercises[i].name;
      $('#name-select').add(nameOption);
      var timeOption = data.exercises[i].time;
      timeOption.text = data.exercises[i].time;
      $('#time-select').add(timeOption);
      var calsOption = data.exercises[i].calories;
      calsOption.text = data.exercises[i].calories;
      $('#cals-select').add(calsOption);
      var dateOption = data.exercises[i].date;
      dateOption.text = data.exercises[i].date;
      $('#date-select').add(dateOption);
    }
  }

  function getExercises(){
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    $.getJSON(url, displayExercises);
  }

  function displayExercises(data){
    for(var i = 0; i < data.exercises.length; i++){
      var $name = $('<td>');
      var $time = $('<td>');
      var $calories = $('<td>');
      var $date = $('<td>');
    
      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $calories.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      var $row = $('<tr>');

      $row.append($name, $time, $calories, $date);
      $('#exercises > tbody').prepend($row);
    }
  }

})();

