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

var total1 = myCourse.reduce(function(acc, currentValue) {
    return acc+currentValue.coin;
}, 0);
console.log(total1); // 400

var total2 = myCourse.reduce(function(acc, currentValue) {
    return acc+currentValue.coin;
});
console.log(total2); // 400

var myArr = [100,200,300];
var totalI = myArr.reduce(function(total, currentValue) {
    return total + currentValue; // do nó là giá trị trong mảng chứ không phải object dùng . để access dữ liệu
}, 0); // 0được truyền lần đầu vào total để lưu trữ total
console.log(totalI); // 600

// flat - làm phẳng mảng Depth Arr
var depthArray = [1,2,[3,4],5,6,[7,8,9]];

var flatArr = depthArray.reduce(function(flatA, depthItem) {
    return flatA.concat(depthItem);
}, []);

console.log(flatArr); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]