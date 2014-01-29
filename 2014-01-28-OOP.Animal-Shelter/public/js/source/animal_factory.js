/* global Animal:false */

(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos;

    photos = [];
    photos[0] = 'url(http://3.bp.blogspot.com/-f3UfNzWpXqY/T4VmGPiAk_I/AAAAAAAAAEU/x0N1uTnQwb0/s1600/a%2Bdark%2Bbrown%2Bdog.jpg)';
    photos[1] = 'url(http://b.vimeocdn.com/ps/875/875929_300.jpg)';
    animal = new Animal('Fido', 3, 'Male', 'Dog', 'Brown', 'Happy Dog', photos);
    animals.push(animal);
  
    photos = [];
    photos[0] = 'url(http://www.pawstbm.com/blog/assets/0_0_0_0_328_218_csupload_37972495.jpg)';
    photos[1] = 'url(http://www.dogwallpapers.net/wallpapers/siberian-husky-puppies-photo.jpg)';
    animal = new Animal('Fenrir', 1, 'Male', 'Dog', 'Black & White', 'Playful puppy', photos);
    animals.push(animal);
    
    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg)';
    animal = new Animal('Sir Freedrik Tippington', 1, 'Male', 'Cat', 'White', 'The Little Explorer', photos);
    animals.push(animal);
    
    photos = [];
    photos[0] = 'url(http://th01.deviantart.net/fs16/300W/f/2007/207/8/5/Little_Red_Fox_by_Nzeman.jpg)';
    animal = new Animal('Lucy', 3, 'Female', 'Fox', 'Red', 'A Classy Lady', photos);
    animals.push(animal);
    
    photos = [];
    photos[0] = 'url(http://fc02.deviantart.net/fs71/i/2011/273/3/1/female_snow_leopard_by_furlined-d4be8zs.jpg)';
    animal = new Animal('Snowflake', 4, 'Female', 'Cat', 'White', 'Friendly Snow Leopard', photos);
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/commons/a/a7/Silberfuchs_08.jpg)';
    animal = new Animal('Umbra', 4, 'Female', 'Fox', 'Silver', 'Friendly but often spends time alone', photos);
    animals.push(animal);

    return animals;
  };

})();

