// Polyfill : tìm hiểu thêm rằng những trình duyệt không còn hỗ trợ (thường nằm trong đoạn if để kiểm tra)
// lên mạng đọc thêm ;))

console.log('javascript course'.includes('javascript', 0)); // true

// Object trong js
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi'
};

console.log(myInfo); // {name: 'Son Dang', age: 18, address: 'Ha Noi'}
console.log(myInfo.toString()); // [object Object] ??

// add key value mới
myInfo.email = 'sondn@fullstack.edu.vn';
console.log(myInfo); // {name: 'Son Dang', age: 18, address: 'Ha Noi', email: 'sondn@fullstack.edu.vn'}

// lấy value ra
console.log(myInfo.address); // Ha Noi
console.log(myInfo['hometown']); // undefined không có
console.log(myInfo['name']); // Son Dang

// lấy thông qua khai báo
var myKey = 'name';
console.log(myInfo.myKey); // undefined
console.log(myInfo[myKey]); // Son Dang -> acc

var nickNameKey = 'nickName';
myInfo[nickNameKey] = 'Son hen som';
console.log(myInfo); // {name: 'Son Dang', age: 18, address: 'Ha Noi', email: 'sondn@fullstack.edu.vn', nickName: 'Son hen som'}

// nói chug là khá giống map bên c++ nhỉ :))

// thêm key vào onject lúc tạo tay:
var n = 'email';

var myObj = {
    name : 'Son Dang',
    [n] : 'sondang@backend.edu.vn',
    n : 10
}

console.log(myObj); // {name: 'Son Dang', email: 'sondang@backend.edu.vn', n: 10}
// mất dấu [] thì coi như nó thành key 'n' á

// xóa key
delete myObj.n;
console.log(myObj); // {name: 'Son Dang', email: 'sondang@backend.edu.vn'}

// func trong obj
var myObject = {
    name : 'Son Dang',
    getName: function() {
        return this.name;
    }
}
console.log(myObject.getName);
// out khá lạ
// () {
//         return this.name;
//     }

console.log(myObject.getName()); // Son Dang
console.log(typeof myObject.getName); // function
console.log(typeof myObject); // object

// function -> phương thức trong obj
// others -> thuộc tính / property trong obj