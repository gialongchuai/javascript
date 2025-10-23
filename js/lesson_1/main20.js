// includes method : string với array

var title = 'Responsive web design';

console.log(title.includes('web')); // true
console.log(title.includes('web design')); // true
console.log(title.includes('css')); // false

var courses = ['Java','Ruby','Js'];

console.log(courses.includes('Java')); // true
console.log(courses.includes('C++')); // false

// ngoài ra có chỉ số thứ 2 để bắt đầu kiểm tra includes từ chỉ số index số mấy
