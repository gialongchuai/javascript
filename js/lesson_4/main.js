

// lấy text từ ele

var x = document.querySelector('h1');
var y = document.querySelector('.heading');


console.log(x.innerText); // Hello world!
console.log(y.textContent); // Hello world!

var z = document.querySelectorAll('h1');
console.log(z); // NodeList(2) [h1.heading, h1.heading]

console.log(z[1]); // <h1 class="heading">Xin chào thế giới!</h1>

z.textContent = 'Hello universe'; // dùng để set lại cho text node lưu ý z.innerText thì lỗi á
console.log(z.textContent); // Hello universe

// hay nói cách khác textContent là vừa getter và setter
// vừa lấy in ra và vừa gán lại


var tmp = document.querySelector('h2');


console.log(tmp.innerText); // Xin chào // ông này chỉ lấy text mà thôi
console.log(tmp.textContent); // ông này lấy y chang cái thẻ bên file index.html luôn

/**
 * 

        Xin
        chào
    
    
 */

// innerText hiển thị cái gì localhost hiển thị
// textContent hiển thị hết dù có display: none cũng hiển thị và có khoảng cách giữa các dòng luôn như chú thích ở trên,
// hiên thị thêm nội dung trong thẻ style luôn