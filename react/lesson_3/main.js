
// <div class="post-item">
//     <h2 title="Học React tại F8">Học React</h2> 
//     <p>Học ReactJS từ cơ bản tới nâng cao</p>
// </div>

const divReact = React.createElement(
    'div', // type thẻ là div
    {
        className: 'post-item' // chèn class hay id gì đó vào đây nhé
    }, // children bên dưới
    React.createElement('h2', {
        title: 'Học React tại F8'
    }, 'Học React'),
    React.createElement('p', null, 'Học ReactJS từ cơ bản tới nâng cao')
);  

const root = document.querySelector('#root');
const root2 = document.querySelector('#root2');
const root3 = document.querySelector('#root3');

// ReactDOM -> render UI

ReactDOM.render(divReact, root);

// <h1 title="Hello" class="heading">Hello guys!</h1>

// <ul>
//     <li>Javascript</li>
//     <li>ReactJS</li>
// </ul>

const h1React = React.createElement(
    'h1',
    {
        title: 'Hello',
        className: 'heading'
    }, 'Hello guys!'
)

const ulReact = React.createElement(
    'ul',
    null,
    React.createElement(
        'li',
        null,
        'Javascript'
    ),
    React.createElement(
        'li',
        null,
        'ReactJS'
    )
)
ReactDOM.render(h1React, root2);
ReactDOM.render(ulReact, root3);