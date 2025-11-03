// 

const User = function(name, age) {
    this.name = name;
    this.age = age;
}

const student = new User('Son Dang', 18);
console.log(student); // User {name: 'Son Dang', age: 18}

var nameItem = 'Sugar';
var priceItem = 1000;

var status = 'isActive'

var product = {
    nameItem,
    priceItem,
    [status]: true // deprecated
}

console.log(product); // {nameItem: 'Sugar', priceItem: 1000, isActive: true}
console.log('hello world');

function xinchao(status = 'ngon') {
    console.log(status);
}

xinchao(); // ngon
xinchao('abc'); // abc

function showInfo(mess, type='log') {
    console[type](mess);
}

showInfo('Message'); // Message kiểu normal
showInfo('Message', 'warn'); // Message kiểu warn

// truyền và gọi theo dòng số 19