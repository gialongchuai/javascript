// javascript string method

// 1. Length
var myString = 'Xin chao the gioi! chao chao';
console.log(myString.length); // 28

// 2. Find index
console.log(myString.indexOf('chao')); // 4
console.log(myString.indexOf('son')); // -1 la khong tim thay

console.log(myString.indexOf('chao', 10)); // 19 tìm từ thứ 10 trở đi thấy chữ chao thứ 2 tại vị trí 19
console.log(myString.lastIndexOf('chao')); // 24 chữ chao cuối cùng
console.log(myString.lastIndexOf('elon')); // -1 khi ko tim thay

// search khá giống indexof 
// nhưng khác thứ 1: không hỗ trợ index đi kèm ví dụ 10 như indexOf ở trên
console.log(myString.search('chao')); // 4

var myS = "10 ngan nam";
console.log(myS.slice(3,7)); // ngan
