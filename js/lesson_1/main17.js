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

console.log(myCourse);

var i = 0;

// reduce nhận vào 2 giá trị là function và initialValue
function coinHandler(acc, currentValue, currentIndex, originArray) {
    i++;
    console.log(currentValue); // mỗi lượt chạy in ra object đang chạy : ex : {id: 2, name: 'Java', coin: 0}
    console.table({ // console thấy bảng với lượt chạy & biến tích trữ
        'Lượt chạy': i, // mỗi lần chạy tăng 1 đơn vị
        'Biến tích trữ': acc
    });
    return acc + currentValue.coin; // tích lũy dẫn với 0 cộng dồn với coin từng object
};

var totalCoin = myCourse.reduce(coinHandler, 0); // hàm : biến lưu trữ ban đầu


console.log(totalCoin); // 400 : 0 cộng coin từng object

function calc(acc, currentValue) {
    return acc + currentValue.coin;
}

var total1 = myCourse.reduce(calc,0);
console.log(total1); // hàm tổng coin

var total2 = myCourse.reduce((a,b) => a+b.coin, 0);
console.log(total2); // 400 hình như là es6