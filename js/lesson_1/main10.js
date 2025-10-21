// Đối tượng Date
// javascript date object mozilla 
// https://javascript.info/date

var date = new Date();

console.log(typeof date); // object
console.log(date); // Tue Oct 21 2025 10:03:08 GMT+0700 (Indochina Time)

var date1 = Date(); // bỏ new

console.log(typeof date1); // string
console.log(date1); // Tue Oct 21 2025 10:03:08 GMT+0700 (Indochina Time)

// khi không khai báo là đối tượng thì nó thành string và không hỗ trợ phương thức
var year = date.getFullYear();
console.log(year); // 2025

var month = date.getMonth();
console.log(month); // 9 ??? 
// => month + 1
var month_new = date.getMonth() + 1;
console.log(month_new); // 10

var day = date.getDate();
console.log(day); // 21

console.log(`${day}/${month}/${year}`); // 21/9/2025