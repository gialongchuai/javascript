var arr1 = ['Java', 'C++'];
var arr2 = ['Javascript', 'Csharp'];

var arrRe1 = arr1.concat(arr2);
var arrRe2 = [...arr1, ...arr2];
console.log(arrRe1); // (4) ['Java', 'C++', 'Javascript', 'Csharp']
console.log(arrRe2); // (4) ['Java', 'C++', 'Javascript', 'Csharp']