
'use strict' // or "use strict"
// nếu muốn sử dụng nó từ đâu thì thêm nó và từ đó
// ví dụ này để đầu cho toàn file
// còn để trong 1 func thì chỉ hữu dụng trong func đó 

// strict mode lỗi tới đâu user fix tới đó

// problem 01:
function show() {
    a = 10;
}

show();
console.log(a); // in ra 10 nếu hàm chạy và a trở thành global

fullName = 'Son Dang';
console.log(fullName); // in ra Son Dang nếu không có strict mode


// problem 02:|
function sum(a,a) {
    return a + a;
}

console.log(sum(6,9)); // 18  do a lúc đầu bằng 6 sau đó gán lại bằng 9 cout ra 18
// bật strict mode thì thông báo lỗi để user fixs

// problem 03
{
    function sum2(a, b) {{
        return a + b;
    }}
}
console.log(sum2(10,15)); // 25 nếu không stict mode 
// không cho sử dụng func bên ngoài scope, chỉ sử dụng trong 1 scope
// user biết để fix

// problem 04
const protected = 10; // tương lai có thể có từ protected, private
console.log(protected); // nhờ có strict mode nó không cho đặt tên như vậy

