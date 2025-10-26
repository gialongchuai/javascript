

//add : thêm 1 class
//contains : có chứa class đó không
//remove : xóa class đang có
//toggle : chuyển khắng định thành phủ định hoặc ngược lại

var tmp = document.querySelector('.box');
console.log(tmp); // <div class="box">Heading</div>
console.log(tmp.classList); // DOMTokenList ['box', value: 'box']

var tmp2 = document.querySelector('.test');
console.log(tmp2.classList); // DOMTokenList(2) ['test', 'test-1', value: 'test test-1']

console.log(tmp2.classList.length); // 2
console.log(tmp2.classList[0]); // test
console.log(tmp2.classList[1]); // test-1
console.log(tmp2.classList.value); // test test-1 // trả về value nằm trong class ví dụ có nhiều space cũng return y chang : test      test-1

tmp2.classList.add('red');
console.log(tmp2.classList.add('red', 'italic')); // add multi class


console.log(tmp2.classList.contains('red')); // true
console.log(tmp2.classList.contains('green')); // false

setTimeout(() => {
    tmp2.classList.remove('red');
},3000); // đang đỏ sau 3s chuyển thành nguyên hình
/// khôn có class thì cũng ko sao ko error

setTimeout(() => {
    tmp.classList.toggle('green');
},3000) // sau 3s chuyển thành xanh

var x = document.querySelector('.testx');
setInterval(()=> {
    x.classList.toggle('red');
},2000); // cứ 2s chuyển sang đỏ đen xanh đỏ