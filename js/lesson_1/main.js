// var fullName = "Hello world!";

// alert(fullName);
// console.log('Hello world!');
// confirm('Hello universe!');
// prompt('Xac nhan du tuoi!');

// setTimeout(function() {
//     alert("Hi galaxy!");
// }, 3000); // 3 giay hien thi thong bao

// setInterval(function() {
//     alert("Day la log check!");
// }, 5000); // cu moi 5s hien thi thong bao

var a = 6;
console.log(a++); // 6

var b = 6;
console.log(++b); // 7

// falsy và truthy

/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// false


// ngoai tat ca la truthy true

var a = 10;
var lastName = 'He'
var isSuccess = false;


var x;
console.log(x); // undefined

var isNull = null;
console.log(isNull); // null

// function custom
var myFunction = function() {
    alert('My function');
}

myFunction();

var myObject = {
    name: "Dang Son",
    age: 18,
    address: 'Ha Noi',
    myFunction: function() {
        console.log('Xin chao');
    }
};

/**
 * myObject 
{name: 'Dang Son', age: 18, address: 'Ha Noi', myFunction: ƒ}
address
: 
"Ha Noi"
age
: 
18
myFunction
: 
ƒ ()
name
: 
"Dang Son"
[[Prototype]]
: 
Object
 */

console.log('myObject', myObject);

var myArray = [
    'Javascrip',
    'Ruby',
    'C++'
];

/*
(3) ['Javascrip', 'Ruby', 'C++']
0
: 
"Javascrip"
1
: 
"Ruby"
2
: 
"C++"
length
: 
3
[[Prototype]]
: 
Array(0)
*/

console.log(myArray);

console.log(typeof myObject); // object
console.log(typeof myFunction); // function
console.log(typeof x); // undefined
console.log(typeof isSuccess); // boolean
console.log(typeof isNull); // object khá lạ

var b1 = 10;
var b2 = 10;
console.log(b1 == b2); // true
console.log(b1 == '10'); // true ...
console.log(b1 === '10'); // false
