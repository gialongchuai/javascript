console.log('Hello world!');

// 1. document.createElement()
// 2. document.body.appendChild()
// 3. console.dir()
// 4. innerText, id, className, style

const h1 = document.createElement('h1');
h1.innerText = 'Hello world!';
console.log(h1);

document.body.appendChild(h1);

const root = document.querySelector('#root');
const h2 = document.createElement('h2');
h2.innerText = 'Hello universe!';
h2.id = 'heading';
h2.className = 'test test-heading'; // <h2 id="heading" class="test test-heading">Hello universe!</h2>

Object.assign(h1.style, {
    color: 'purple',
    backgroundColor: '#ccc'
})

root.appendChild(h2);