// <h1 title="Hello" class="heading">Hello guys!</h1>

// Dom  
const h1DOM = document.createElement('h1');
h1DOM.title = 'Hello';
h1DOM.className = 'heading'
h1DOM.innerHTML = 'Hello universe!';

document.body.appendChild(h1DOM);

const h1React = React.createElement('h1', { // type 
    title: 'Hello', // có thể là các attribute id class
    className: 'heading'
}, 'Hello universe!'); // children trong prop trên console log 

console.dir(h1DOM);
console.dir(h1React);


// bài 2 tạo ul chứa 2 thẻ li xem nào !!!

{/* <ul>
    <li>Javascript</li>
    <li>React</li>
</ul> */}

const ulDOM = document.createElement('ul');
// nếu thẻ ul có id và màu đỏ thì sao 

ulDOM.id = 'ul-id';
ulDOM.style = 'color: red';

const liDOM1 = document.createElement('li');
liDOM1.innerText = 'Javascript';

const liDOM2 = document.createElement('li');
liDOM2.innerText = 'React';

ulDOM.appendChild(liDOM1);
ulDOM.appendChild(liDOM2);

document.body.appendChild(ulDOM);

const ulReact = React.createElement(
    'ul', // type là thẻ ul
    null, // không thêm gì vào thẻ ul cả

    // vậy thì phải bỏ ông null thay bằng như sau cho đỏ và có id
    // ,{
        // id: 'ul-id',
        // style: 'color: red'
    // }

    React.createElement('li', null, 'Javascript'), // type là li, ko thêm gì vào li ngoại trừ innerText
    React.createElement('li', null, 'React')
);

console.dir(ulDOM);
console.dir(ulReact); // trên console nên có 1 thì nó hiện 14 là Hello universe
// nhưng đối với 2 con là 2 thẻ li như trên thì nó là mảng chứa 2 object