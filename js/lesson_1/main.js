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
var b2 = '10';
console.log(b1 == b2); // true : quan tâm đến value nên thấy 10 = 10
console.log(b1 === b2); // false : number != string


var p1 = 1;
var p2 = '1';
console.log(p1 != p2); // false : so sánh giá trị thấy 1 != 1 -> false
console.log(p1 !== p2); // true : so sánh giá trị tuyệt đối number != string
console.log(typeof p1); // number

console.log('========');
var r1 = 3;
var r2 = 4;

var isBool = r1 > r2 && r1 < r2;
console.log(isBool);

/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// false : 

var res1 = 'A' && 'B' && 'C'; // chạy từ trái qua phải tìm 6 ông false sau đó gán lại cho res1
console.log(res1); // C
// không có thì gán ông cuối


var res2 = 'A' && NaN && 'C'; // ví dụ tìm thấy NaN ở thứ 2
console.log(res2); // NaN

var tmp1 = 'A' || 'B' || NaN || 'C'; // chạy từ trái qua phải tìm ông nào khác 6 ông kia gán luôn
console.log(tmp1); // A

var tmp2 = NaN || false || '' || 'D' || 0 // ví dụ chạy đến D
console.log(tmp2); // D

var tmp3 = NaN || false || '' || 0 // ví dụ chạy đến 0
console.log(tmp3); // 0

var string1 = 'Ha Noi';
var string2 = new String('Ha Noi');
console.log(typeof string1); // string
console.log(typeof string2); // object

console.log('Son Dang la \'Sieu Nhan\''); // Son Dang la 'Sieu Nhan'

console.log(string1.length); // 6


// ES6
var lastName = 'Son';
var firstName = 'Dang'
console.log(`Toi la: ${lastName} ${firstName}`) // Toi la: Son Dang