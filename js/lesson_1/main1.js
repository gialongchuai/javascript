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

// 3. Cut String
var myS = "10 ngan nam";
console.log(myS.slice(3,7)); // ngan
console.log(myS.slice(0)); // 10 ngan nam

console.log(myS.slice(-3)); // nam

// 4. Replace
var mySt = "10 ngan nam hay 10 nghin nam";
console.log(mySt.replace('nam', 'năm')); // 10 ngan năm hay 10 nghin nam // chỉ thay thế kí tự đầu mà hoai

// biểu thức chính quy -> replace all á 
console.log(mySt.replace(/nam/g, 'năm')); // 10 ngan năm hay 10 nghin năm

// 5. Convert to uppercase, lowercase
var vutru = '10 NgAn nAM';
console.log(vutru.toLowerCase()); // 10 ngan nam
console.log(vutru.toUpperCase()); // 10 NGAN NAM

// 6. Trim cắt bỏ khoảng trắng đầu cuối
var thegioi = "    Over night ! I feel     ";
console.log(thegioi.trim()); // Over night ! I feel

// 7. Split
var languages = 'C++, Javascript, Csharp';
console.log(languages.split(', ')); // (3) ['C++', 'Javascript', 'Csharp']
console.log(languages.split(',')); // (3) ['C++', ' Javascript', ' Csharp'] // dư khoảng trắng đầu
// nên cần phải tìm điểm chug kĩ càng

// 8. Get char by index
console.log(languages.charAt(10)); // c
console.log(languages.charAt(100)); // không có gì hiểu thị luôn thử dòng dưới
console.log(typeof languages.charAt(100)); // string :Vvv

console.log(languages[10]); // c
console.log(typeof languages[10]); // string
console.log(languages[100]); // undefined nhạt
console.log(typeof languages[100]); // undefined đậm 