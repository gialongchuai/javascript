
// IIFE : Immediately Invoked Function Expression
// Lưu ý là nhớ chấm phẩy ở cuối
// nhìn dòng số 18 và 22 để cái iife tiếp theo còn hoạt động nhé


let show = function() {
    console.log('Hello world!');
}

show(); // Hello world!
// -> Đây không phải nhé


// -> đây là iife
(function() {
    console.log('Hello universe!'); // Hello universe!
})();

(() => {
    console.log('Hello galaxy!'); // Hello galaxy!
})();

((msg)=>console.log('Message: ' + msg))('Chao ban!'); // Message: Chao ban!

// () là hàm gội hàm thì ()()

// PRIVATE

(function info() {
    console.log('Hello subway!');
})()

info(); // ***** lỗi nè Uncaught ReferenceError: info is not defined