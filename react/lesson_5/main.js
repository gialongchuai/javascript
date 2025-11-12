console.log('Hello world!');

// HOOK ** function / class component ?

function Header() { // type func
    return (
        <div className="heading">Heading</div>
    )
}

class Content extends React.Component { // type func
    render() {
        return (
            <div className="content">Content</div>
        )
    }
}

const app = (
    <div className="wrapper">
        <Header />
        <Content />
        <div className="footer">Footer</div>
    </div>
)

console.log(app);
// 

ReactDOM.render(app, document.querySelector('#root'));
// children: (3) [{…}, {…}, {…}]
// div -> f -> f