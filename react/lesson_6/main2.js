// function App là React Component
//     <div id="wrapper"> trong function App nằm trong retunr là gì?
// là React element

// còn việc gọi <PostItem /> trong function app là gì -> react component

// PostItem.js

/**
 * Props
 * React elements
 *  sử dụng props giống như atrribute của thẻ HTML
 *  2 props class, for => className, htmlFor
 *  phải tuân thủ theo quy ước có sẵn
 * React components
 *  sử dụng props giống như đối số cho component
 *  tự do đặt tên props
 *   đặt theo camelCase => publishedAt
 *   có thể bao gồm dấu gạch ngang
 * Chú ý
 *  prop "key" là prop đặc biệt
 *  props cơ bản là đói số của Component
 *   => Props có thể là bất cứ kiểu dữ liệu gì
 *  Sử dụng destructuring 
 */


function PostItem(props) { // react component
    console.log(props) // 2 ông có object rỗng do không truyền gì cả
    
    if(typeof props.callback === 'function') // kiểm tra xem ông nào có callback tức là demo ông số 1 á thì gọi và truyền dữ liệu vào
        props.callback(Math.random())
    
    return (
            <div className="post-item">
            <label htmlFor="email">Email</label>
            <input id="email" />
            <br></br>
            <br></br>
            <img 
                style={{height: '200px'}}
                src={props.img} 
            alt=""/>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-desc">{props.description}</p>
            <p className="post-published">{props.publishedAt}</p>
        </div>
    )
}

// function PostItemVer02({
//     img,
//     title,
//     description,
//     publishedAt,
//     callback = () => {} // có thể theo kiểu destructuring và dùng bên dưới chỉ cần gội tên mà thôi
// }) { // nhờ đó có thể gán default cho callback khỏi cần kiểm tra là func
//     console.log(img);
// }

function PostItemVer02({
    img,
    title,
    description,
    publishedAt,
    callback = () => {}
}) { // react component
    callback(Math.random()); // ví dụ không có dòng này vẫn không có lỗi 
    // do đã truyền default rồi // có thể đọc chú thích ở trên
    return (
            <div className="post-item">
            <label htmlFor="email">Email</label>
            <input id="email" />
            <br></br>
            <br></br>
            <img 
                style={{height: '200px'}}
                src={img} 
            alt=""/>
            <h2 className="post-title">{title}</h2>
            <p className="post-desc">{description}</p>
            <p className="post-published">{publishedAt}</p>
        </div>
    )
}


// App.js 
function App() { // nhớ lại bài cũ là đù gọi extends cái React.Component tạo class
// hay dùng function PostItem thì console ra cũng là type f PostItem hết

// console.log(<PostItem tilte="Xin chào ngày mới"/>) // nên ta tận dụng điều đó truyền title vào
//     type: ƒ PostItem() => thì nó chuyển thành props // xem tiếp code bên dưới
//      props: {tilte: 'Xin chào ngày mới'}

    return ( // ví dụ cho props nhận vào 1 func callback
        <div id="wrapper"> 
            <PostItem 
                img="https://i0.wp.com/getmimo.wpcomstaging.com/wp-content/uploads/2024/06/react_header.png?fit=1920%2C1080&ssl=1"
                title="Csharp tương tác mạnh nào!"
                description="Bạn đã có kiến thức với Csharp chưa?"
                publishedAt="Một ngày trước"
                callback={
                    (data) => console.log('random: ' + data) // hứng và cout ra màn hình callback random: 0.13133711760111966
                }
            />
            <PostItem />
            <PostItem />
            <PostItemVer02 
                img="https://i0.wp.com/getmimo.wpcomstaging.com/wp-content/uploads/2024/06/react_header.png?fit=1920%2C1080&ssl=1"
                title="Verson 2 Csharp tương tác mạnh nào!"
                description="Verson 2 Bạn đã có kiến thức với Csharp chưa?"
                publishedAt="Verson 2 Một ngày trước"
                callback={
                    (data) => console.log('random: ' + data) // hứng và cout ra màn hình callback random: 0.13133711760111966
                }
            />

            
        </div>
    )
}

// index.js
ReactDOM.render(<App />, document.querySelector('#root'));