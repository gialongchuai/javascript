// return trong hàm
function cong(a, b) {
    return a + b;
    console.log('Hi'); // được bỏ qua
}

function cong_un(a,b) {
    a+b;
}

var res = cong(5,6);
console.log(res); // 11

var res_un = cong_un(5,6);
console.log(res_un); // undefined or return unde thì cũng trả về undefined


function mess() {
    console.log('Mess 1')
}

function mess() {
    console.log('Mess 2')
}

function mess() {
    console.log('Mess 3')
}

mess(); // Mess 3 : in ra func trùng tên func cuối cùng

// 1. Declaration func
function funct1() {};

// 2. Expression func : có thể có tên hoặc không cũng được (có tên để chỉ rõ chi tiết hơn việc hàm đó làm gì)
// nếu không tên cũng được acc là Expre fun
var show = function() {

};

setTimeout(function() {});

var myObject = {
    myFunction: function() {

    }
};

// Khái niệm quan trọng: 2 cái phải được gọi thì mới thực khi, còn khác nhau là với Decl thì gọi trước cũng được
// còn Expr thì phải gọi sau ví dụ:

hello1(); // Hi1
// chec(); // Uncaught TypeError: chec is not a function
    // at main6.js:53:1

    // lỗi bắt buộc phải sử dụng sau khi được định nghĩa

function hello1() {
    console.log('Hi1');
}
var chec = function hello2() {
    console.log('Hi2');
}
hello1(); // Hi1
chec(); // Hi2