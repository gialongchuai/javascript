// nói chug map nhận vào func viết ngoài nhớ có return nhé.

var myCourse = [
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

// reduce
// thêm 1 key value cho mỗi object trong mỗi phần tử mảng
// bổ sung thêm property coinText
// map nhận vào 1 function 

var ex1 = myCourse.map(function() { // ok nhận trực tiếp 1 func

});
var myFun = function abc() {};

var ex2 = myCourse.map(myFun); // ok nhận qua expre func

function def() {};
var ex2 = myCourse.map(def); // ok nhận qua decla func

function courseHandler(myCourse) {
    console.log(myCourse);/**
 *  main16.js:45 {id: 1, name: 'Javascript', coin: 100}
    main16.js:45 {id: 2, name: 'Java', coin: 0}
    main16.js:45 {id: 3, name: 'Ruby', coin: 150}
    main16.js:45 {id: 4, name: 'Csharp', coin: 0}
    main16.js:45 {id: 5, name: 'PHP', coin: 150}
 */

};

var courses = myCourse.map(courseHandler); // sẽ duyệt qua từng khóa học trong myCourse
// mỗi lần duyệt qua 1 object gọi tới func courseHandler yêu cầu làm gì đó

// ví dụ như sau:
function abc123(myCourse) {
    return 'abc123';
}

var example1 = myCourse.map(abc123);
console.log(example1); // (5) ['abc123', 'abc123', 'abc123', 'abc123', 'abc123']

// từ đó làm yêu cầu : 
// thêm 1 key value cho mỗi object trong mỗi phần tử mảng
// bổ sung thêm property coinText
// map nhận vào 1 function 
function config(myCourse) {
    return {
        id: myCourse.id,
        name: `Khoa hoc ${myCourse.name}`,
        coin: myCourse.coin,
        coinText: `So coin: ${myCourse.coin}`
    }
}

var configCourse = myCourse.map(config);
console.log(configCourse);

/**
 * 
(5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{id: 1, name: 'Khoa hoc Javascript', coin: 100, coinText: 'So coin: 100'}
1
: 
{id: 2, name: 'Khoa hoc Java', coin: 0, coinText: 'So coin: 0'}
2
: 
{id: 3, name: 'Khoa hoc Ruby', coin: 150, coinText: 'So coin: 150'}
3
: 
{id: 4, name: 'Khoa hoc Csharp', coin: 0, coinText: 'So coin: 0'}
4
: 
{id: 5, name: 'Khoa hoc PHP', coin: 150, coinText: 'So coin: 150'}
length
: 
5
 */

// ngoài ra còn nhận vào 2 tham số nữa là index, originArray

function configArray(myCourse, index, originArray) { // đặt tên gì cũng được không nhất thiết là myCourse
    return {
        id: myCourse.id,
        name: myCourse.name,
        coin: myCourse.coin,
        index: index,
        originArray: originArray // or originArray: myCourse
    }
}

var xinchaoCourse = myCourse.map(configArray); // map : reduce
console.log(xinchaoCourse);

/**
 * (5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{id: 1, name: 'Javascript', coin: 100, index: 0, originArray: Array(5)}
1
: 
{id: 2, name: 'Java', coin: 0, index: 1, originArray: Array(5)}
2
: 
{id: 3, name: 'Ruby', coin: 150, index: 2, originArray: Array(5)}
3
: 
{id: 4, name: 'Csharp', coin: 0, index: 3, originArray: Array(5)}
4
: 
{id: 5, name: 'PHP', coin: 150, index: 4, originArray: Array(5)}
length
: 
5
[[Prototype]]
: 
Array(0)
 */

var totalCoin = 0;
for(var course of myCourse) {
    totalCoin+=course.coin;
}
console.log(totalCoin); // 400
console.log(myCourse); // tự tra nha hình như là 150 + 150 + 100

