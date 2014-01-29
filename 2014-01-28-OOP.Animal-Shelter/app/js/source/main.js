/* global Animal:false, animalFactory:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  var animals= [];

  function initialize(){
    $('#add-photo').click(clickAddPhoto);
    $('#add-animal').click(clickAddAnimal);

    animals = animalFactory();
    fillDataTable();
  }

  function fillDataTable(){
    $('tbody').empty();
    for(var i=0; i<animals.length; i++){
      var row = $('<tr>');
      var name = $('<td>');
      var age = $('<td>');
      var gender = $('<td>');
      var species = $('<td>');
      var color = $('<td>');
      var description = $('<td>');
      var photos = $('<td>');

      name.text(animals[i].name);
      age.text(animals[i].age);
      gender.text(animals[i].gender);
      species.text(animals[i].species);
      color.text(animals[i].color);
      description.text(animals[i].description);
      for(var z=0; z<photos.length; z++){
        var image = animals[i].photos[z];
        var front = image.indexOf('(')+1;
        var imageUrl = image.slice(front,-1);
        $(photos).append('<img src="'+imageUrl+'">');
        photos.addClass('imageBig');
      }
      $(row).append(name);
      $(row).append(age);
      $(row).append(gender);
      $(row).append(species);
      $(row).append(color);
      $(row).append(description);
      $(row).append(photos);
      $('tbody').append(row);
    }
  }

  function clickAddPhoto(){
    var url = $('#photo').val();
    var $img = $('<img>');
    $img.addClass('th image');
    $img.attr('src', url);

    $('#photos').prepend($img);
    event.preventDefault();
  }

  function clickAddAnimal(){
    var name = $('#name').val();
    var age = $('#age').val() * 1;
    var gender = $('#gender').val();
    var species = $('#species').val();
    var color = $('#color').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();
    var animal= new Animal(name, age, gender, species, color, description, photos);
    animals.push(animal);

    event.preventDefault();
  }

  function getAnimalPhotos(){
    var $photos = $('#photos>img');
    return _.map($photos, function(photo){
      return $(photo).attr('src');
    });
  }


})();

