
function Button({title, primary, children}) { // Props default to "true"
    console.log(primary); // cô Minh Thu do không định nghĩa thì y chang commit vừa rồi trả undefined
    return ( // còn đối với Huyền Trang thì mặc định không nói gì là true
        <button>{title||children}</button>
    )
}

function Input({title, type, placeholder}) {
    return (
        <div>
            <label>{title}</label>
            <input type={type} name="" id="" placeholder={placeholder} />
            <br></br><br></br>

            {/**truyền theo kiểu  * Spreadd/Rest props */}
            <Input2 title={title} type={type} placeholder={placeholder} />
        </div> 
    )
}

function Input2({title, ...rest}) { // có nghĩa hứng qua ... truyền vào hết cho input cho khỏe
    return (
        <div> {/**truyền theo kiểu  * Spreadd/Rest props */}
            <label>{title}</label>
            <input {...rest} />
        </div> 
        
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
            <br></br><br></br>
            
            <Input 
                title={"Nhập tên giảng viên: "} 
                type="text"
                placeholder="...Huyền Trang"
            /> {/**truyền theo expression nè! */}

            {/**Children prop  *    
             *  <YourComponent>String literals</YourComponent>
             *  <YourComponent>{expression}</YourComponent>
             * 
             * Nhớ lại mấy bài trước thì việc viết <Button /> là viết tắt bên dưới
             * tức là gọi tới func com truyền vào 1 string literals mà console log thì 
             * đó là children, nên func Button bổ sung thêm 1 children nếu có, lưu ý tên phải giống do nó nhận là object với key
             * là children từ đó nếu không có title thì || lấy vế sau là xin chào các em
            */}
            <Button>Xin chào các em!</Button>
            <Button>{title}</Button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));