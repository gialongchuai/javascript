// rest parameters

function showInfo(...params) {
    console.log(params)
}

showInfo(1,2,3,4,5); // (5) [1, 2, 3, 4, 5]

function showInfo2(a, ...params) {{
    console.log(params);
}}

showInfo2(1,2,3,3,4); // (4) [2, 3, 3, 4]

function showInfoObj(obj) {
    console.log(obj);
}

showInfoObj({
    name: 'Son Dang',
    age: 18
}); // {name: 'Son Dang', age: 18}

function showCourse({name, desc = 'Mac dinh'}) {
    console.log(`${name} voi mo ta ${desc}`);
}

showCourse({
    name: 'Son Dang',
    age: 18
}); // Son Dang voi mo ta Mac dinh
// không truyền là undefined nên truyền mặc định cho chắc cốp

function showCourseRest({name, ...rest}) {
    console.log(name); // Son Dang
    console.log(rest); // {age: 18, desc: 'luon'}
}

showCourseRest({
    name: 'Son Dang',
    age: 18,
    desc: 'luon'
});

function showArr([a, b, ...params]) {
    console.log(a, b); // 1 2
    console.log(params); // (4) [3, 4, 4, 5]
}

showArr([1,2,3,4,4,5]);


var arr1 = ['Java', 'C++'];
var arr2 = ['Javascript', 'Csharp'];

var arrRe1 = arr1.concat(arr2);
var arrRe2 = [...arr1, ...arr2];
console.log(arrRe1);
console.log(arrRe2);