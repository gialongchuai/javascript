/**
 * Array methods:
    forEach() // nhiều object
    every() // trả về kiểu boolean
    some()
    find() // trả về 1 object ứng với điều kiện
    filter() // trả về nhiều object thỏa mãn , tìm nhiều hơn find
    map()
    reduce()
 */

var myArray = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 150
    },
    {
        id: 4,
        name: 'Csharp',
        coin: 0
    },
    {
        id: 5,
        name: 'PHP',
        coin: 150
    }
];

myArray.forEach(
    function(myArray) {
        console.log(myArray); // {id: 1, name: 'Javascript', coin: 100} {id: 2, name: 'Java', coin: 0} {id: 3, name: 'Ruby', coin: 150} ....
    }
);

myArray.forEach(
    function(myArray, index) {
        console.log(index, myArray); // {id: 1, name: 'Javascript', coin: 100} {id: 2, name: 'Java', coin: 0} {id: 3, name: 'Ruby', coin: 150} ....
    }
);
/**
 * 0 {id: 1, name: 'Javascript', coin: 100}
   1 {id: 2, name: 'Java', coin: 0}
   2 {id: 3, name: 'Ruby', coin: 150}
   3 {id: 4, name: 'Csharp', coin: 0}
   4 {id: 5, name: 'PHP', coin: 150}
 */


var isFreeAll = myArray.every(function(myArray, index) {
    return myArray.coin ===0;
});
console.log(isFreeAll); // false

var course = myArray.find(function(myArray) {
    return myArray.name === 'Ruby';
})
console.log(course); // {id: 3, name: 'Ruby', coin: 150}

var course1 = myArray.find(function(myArray) {
    return myArray.coin === 150;
})
console.log(course1); // {id: 3, name: 'Ruby', coin: 150} // do return là chỉ lấy 1 mà thôi

var course2 = myArray.filter(function(myArray) {
    return myArray.coin === 150;
})
console.log(course2); 
/**
 * (2) [{…}, {…}]
0 : {id: 3, name: 'Ruby', coin: 150}
1 : {id: 5, name: 'PHP', coin: 150}
 */ 