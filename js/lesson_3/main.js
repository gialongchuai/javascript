var ele = document.querySelector('h1');

console.log(ele); // <h1>Heading ne</h1>

ele.className = 'abc'; // <h1 class="abc">Heading ne</h1> nhưng nó chỉ hiện thị với console , còn khi mà inspect page (view source page á) đó ra là y chang index.html luôn (nó không có attribute clasName đó nha)


var bamButton = document.querySelector('a');

bamButton.href = 'google.com';

console.log(bamButton); // <a href="google.com">Bấm</a>

// tức mấy cái trên là setter á.
//ngoài ra

ele.setAttribute('id', '_ele_id'); // dùng set để set trực tiếp khỏi qua dot .

console.log(ele); // <h1 class="abc" id="_ele_id">Heading ne</h1>

// lấy atribute
console.log(ele.getAttribute('class')); // abc
console.log(bamButton.getAttribute('href')); // google.com