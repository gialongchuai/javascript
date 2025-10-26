var test = document.querySelectorAll('h1');

console.log(test);

// for(var x=0; x<test.length; x++) {
//     console.log(x);
//     test[x].onclick = function(e) {
//         console.log('hi ' + test[x]);
//     }
// }
// console.log(x); // x dung` chug ra ngoài === 3

for(let y=0; y<test.length; y++) { // y bằng let mỗi lần khác nên không gọi lại 3
    console.log(y);
    test[y].onclick = function(e) {
        console.log(test[y]); // <h1>DOM events 2</h1> ....
        console.log(e.target); // <h1>DOM events 2</h1> ....
    }
}

// for chạy trước sự kiện onclick nên ra ngoài x = 3 rồi
/// onclick lúc đó gọi tới 3 nên sai
/// let tạo mới hoàn toàn, lưu trữ mỗi lần chạy trong for