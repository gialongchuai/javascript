// callback

// là hàm function được truyền qua đối số
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) { // param nhận 1 number 123
    console.log(typeof param); // number
}
myFunction(123);


function myCallback() {
    
}
function myFunction1 (myCallback) { // param nhận myCallback là 1 function
    console.log(typeof myCallback); // function
}
myFunction1(myCallback);

// testing
function p(func) {
    func('100');
}

function wor(val) {
    console.log('Giá trị: ' + val);
}

p(wor); // Giá trị: 100
// func p nhận vào 1 func, sau đó dòng 25 thực thi func đó.
// mà lúc nhận là nhận func wor nên thực thi wor('100') -> 29 in ra