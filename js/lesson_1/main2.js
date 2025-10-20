// làm việc với số Javascript number method

var age = 18;
var PI = 3.14

var otherAge = new Number(18);
console.log(typeof age);// number
console.log(typeof PI); //  number

console.log(typeof otherAge); // object

var res = 20 / 'ABC';
console.log(res); // NaN đại diện cho 1 kiểu số hông hợp lệ

console.log(isNaN == NaN); // false 
console.log(isNaN === NaN); // false 
console.log(isNaN(res)); // true -> dùng để kiểm tra NaN


// convert number to string : toString()
console.log(age); // 18 đậm là số
console.log(age.toString()); // 18 nhạt là string 

console.log(typeof age); // number
console.log(typeof age.toString()); // string

// toFixed
console.log(PI.toFixed()); // 3 : default là số 0 được truyền vào

const api = 19.5; // làm tròn lên và làm tròn xuống
console.log(api.toFixed()); // 20 sau đó biến thành string hết

console.log(typeof api.toFixed()); // string 
console.log(typeof PI.toFixed()); // string 

const api2 = 39.21391293123;
console.log(api2.toFixed(5)); // 39.21391 làm tròn 5 chữ số thập phân vào -> string