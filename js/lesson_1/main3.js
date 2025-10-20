// làm việc với mảng : Array
var languages = [
    'Javascript',
    'C++',
    'Csharp',
    NaN,
    0,
    false,
    null,
    undefined,
    function() {}
];

console.log(languages); // (9) ['Javascript', 'C++', 'Csharp', NaN, 0, false, null, undefined, ƒ]
// array trong js có thể đưa cái gì cũng được

var languages_new = new Array(
    'Javascript',
    'C++',
    'Csharp',
    NaN,
    0,
    false,
    null,
    undefined,
    function() {}
);
console.log(languages_new); // (9) ['Javascript', 'C++', 'Csharp', NaN, 0, false, null, undefined, ƒ]

// vẫn y chang như việc new String, new Number nhưng kiểu này không được 
// khuyến cáo do tạo đối tượng có thể chậm hơn thì phải

console.log(typeof languages); // object 
console.log(typeof languages_new); // object

console.log(Array.isArray(languages)); // true
console.log(Array.isArray(languages_new)); // true

var myObj = {
    name: 'Son',
    age: 18
};

console.log(Array.isArray(myObj)); // false không phải array
console.log(Array.isArray({})); // fasle không phải array
console.log(Array.isArray(new Array)); // true
console.log(Array.isArray(new Array(1,2,3))); // true

console.log(languages.length); // 9
console.log(languages[3]); // NaN
console.log(languages[2]); // Csharp
console.log(languages[100]); // undefined
