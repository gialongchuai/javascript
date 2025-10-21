// for of lấy ra giá trị thay vì for in lấy ra key toàn số mới đau

var myString = 'Hello world!';
var myArr = [
    'Japan',
    'Korea',
    'Vietnam',
    'Germany'
];


for(var x of myString) console.log(x); // H \n e \n l ....
for(var x of myArr) console.log(x); // Japan \n Korea \n ...

// for of lấy value của obj 
var myObj = {
    name : 'Son Dang',
    age: 18
};
console.log(Object.keys(myObj)); // (2) ['name', 'age'] mảng 0 1 với name và age 
for(var x in Object.keys(myObj)) {
    console.log(x); // 0 \n 1
}

for(var x of Object.keys(myObj)) {
    console.log(x); // name \n age
}

console.log(Object.values(myObj)); // (2) ['Son Dang', 18] với mảng 0 1
for(var x in Object.values(myObj)) {
    console.log(x); // 0 \n 1
}

for(var x of Object.values(myObj)) {
    console.log(x); // Son Dang \n 18
}