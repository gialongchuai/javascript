// innerHTML, outerHTML : chat để đọc thêm ;(((

var boxEle = document.querySelector('.box');
console.log(boxEle); // <div class="box"></div>

boxEle.innerHTML = '<p>Heading</p>'; // <div class="box"><p>Heading</p></div>

console.log(document.querySelector('p').innerText); // Heading

// set 1 ele bên trong class box là thẻ p với text là Heading
// và cout nó ra màn hình thông qua innerText
// innerHTML có thể thêm attribute luôn class, id ...


console.log(boxEle.innerHTML); // <p>Heading</p>
// vừa gán vừa lấy

// continue

var tmp = document.querySelector('.box');

Object.assign(tmp.style, {
    width: '200px',
    height: '100px',
    backgroundColor: '#ccc'
})

console.log(tmp.classList); // DOMTokenList ['box', value: 'box']