// toán tử 3 ngôi - Ternary operator

var course = {
    name: 'Javascript',
    coin : 250
}
if(course.coin > 0) {
    console.log(`${course.coin} Coins`); // 250 Coins
} else {
    console.log('Free');
}

var res = course.coin > 0 ? (`${course.coin} Coins`) : ('Free');
console.log(res); // 250 Coins