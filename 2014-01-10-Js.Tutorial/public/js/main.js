// this is a single line comment
// another comment...

/*
 * this is
 * very
 * cool
 */

console.log('hello from javascript');
console.log('Peder Schacht');

// debugger

var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a);

var power = Math.pow(2, 8);

console.log('e is ' + e);
console.log('2 to the 8th power is ' + power);

// example
// you have a room that is 8ft by 12ft
// write the code that will compute the area of
// the room and print that out to the console

var width = 8;
var length = 12;
var area = width * length;
var areaMessage = 'the area of 8x12 feet is ' + area + ' square feet ' ;
console.log(areaMessage);

// example
// you have a cylinder with radius 5in, height of 9in..
// what is the volume in cu. in.

var radius = 5;
var height = 9;
var circleArea = Math.PI * Math.pow(radius, 2);
var volume = circleArea * height;
console.log('the volume of a cylinder with radius 5in. and height 9in. is ' + volume + 'cu.in.');

// you are a floor painter
// you have an exceptionally large bucket of paint
// you can paint 29,572 square feet of surface without having to refill.
// every house you encounter has 3 rooms. here are the dimensions.
// 3 x 5
// 7 x 9
// 6 x 2
// how many full houses can you paint before running out of paint.

var maxArea = 29572;
var houseArea = (3*5) + (7*9) + (6*2);
var housesPainted = maxArea / houseArea;
var houseInteger = Math.floor(housesPainted);
console.log('the number of full houses you can paint is ' + houseInteger );

// you are a spaceperson, with lasers
// you can travel the speed of light
// you are in the andromeda galaxy, somewhere
// you want to destroy justin bieber
// if you leave tomorrow
// when will you arrive to meet the bieb.
// i.e., how many days will it take you to get here
// please hurry!

var distanceLightyears = 2538000;
var lengthLightyear = 9460730472580800;
var speedLight = 25902068371200;
var distanceMeters = distanceLightyears * lengthLightyear;
var timeDays = distanceMeters / speedLight
console.log('the number of days untill you arrive is ' + timeDays);

//other code solution

var years = 2538000;
var daysPerYear = 365;
var totalDays = years * 365;
console.log(totalDays);

//var firstName = prompt('Enter your first name');

//console.log('your first name is ' + firstName);

//var lastName = prompt('Enter your last name');

//console.log('your full name is ' + firstName + ' ' + lastName);

l = prompt('Enter the length of your room');
l = parseInt(l);
w= prompt('Enter the width of your room');
w = parseInt(w);
h = prompt('Enter the height of your room');
h = parseInt(h);

var volumeRoom = l * w * h;
console.log('the volume of your room is ' + volumeRoom );

var age = prompt('what is your age');
age = parseInt(age);
if(age < 18)
  console.log('you cannot vote');
else
  console.log('you can vote');

