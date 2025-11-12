console.log('He')

function PostItem() {
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

const app = (
    <div className="post-list">
        <PostItem />
        <PostItem />
    </div>
)

ReactDOM.render(app, document.querySelector('#root'));