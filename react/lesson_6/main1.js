

function PostItem() { // react component
    return (
            <div className="post-item">
            <img 
                style={{height: '200px'}}
                src="https://i0.wp.com/getmimo.wpcomstaging.com/wp-content/uploads/2024/06/react_header.png?fit=1920%2C1080&ssl=1" 
            alt=""/>
            <h2 className="post-title">Csharp tương tác mạnh nào!</h2>
            <p className="post-desc">Bạn đã có kiến thức với Csharp chưa?</p>
            <p className="post-published">Một ngày trước</p>
        </div>
    )
}


// App.js 
function App() {
    return (
        <div id="wrapper">
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}

// index.js
ReactDOM.render(<App />, document.querySelector('#root'));