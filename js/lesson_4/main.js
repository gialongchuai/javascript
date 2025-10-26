

// lấy text từ ele

var x = document.querySelector('h1');
var y = document.querySelector('.heading');


console.log(x.innerText); // Hello world!
console.log(y.textContent); // Hello world!

var z = document.querySelectorAll('h1');
console.log(z); // NodeList(2) [h1.heading, h1.heading]

console.log(z[1]); // <h1 class="heading">Xin chào thế giới!</h1>