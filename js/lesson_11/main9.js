var arr1 = ['Java', 'C++'];
var arr2 = ['Javascript', 'Csharp'];

var arrRe1 = arr1.concat(arr2);
var arrRe2 = [...arr1, ...arr2];
console.log(arrRe1); // (4) ['Java', 'C++', 'Javascript', 'Csharp']
console.log(arrRe2); // (4) ['Java', 'C++', 'Javascript', 'Csharp']

var obj1 = {
    name: 'Son Dang',
    info: 'xin chao the gioi',
    url: 'sondang-khoahoc.com'
}

var obj2 = {
    age: 18
}

var obj = {
    ...obj1,
    ...obj2
}
console.log(obj); // {name: 'Son Dang', info: 'xin chao the gioi', url: 'sondang-khoahoc.com', age: 18}

var objContact = {
    ...obj1,
    url: 'sondang-contact.com'
}
console.log(objContact); // {name: 'Son Dang', info: 'xin chao the gioi', url: 'sondang-contact.com'}

var myArr = ['Java', 'C++', 'Csharp', 'Javascript'];

function show(...rest) { // rest parameters
    console.log(rest); // (4) ['Java', 'C++', 'Csharp', 'Javascript']
    for(let i=0; i<rest.length; i++) {
        console.log(rest[i]); // Java \n C++ \n Csharp \n Javascript
    }
}

show(...myArr); // spread
console.log(...myArr); // Java C++ Csharp Javascript

// chú ý dòng 41 và 34