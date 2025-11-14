
function Button({title, primary}) { // Props default to "true"
    console.log(primary); // cô Minh Thu do không định nghĩa thì y chang commit vừa rồi trả undefined
    return ( // còn đối với Huyền Trang thì mặc định không nói gì là true
        <button>{title}</button>
    )
}

function App() {
    let title = 'Em chào cô Huyền Trang';

    return (
        <div className="wrapper">
            <Button title="Em chào cô Minh Thu" /> {/** truyền theo string literals */}

            <br></br>
            <br></br>

            <Button primary title={title} /> {/**truyền theo expression */}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));