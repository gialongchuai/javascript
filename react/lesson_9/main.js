
function Button({title, primary}) { // Props default to "true"
    console.log(primary); // cô Minh Thu do không định nghĩa thì y chang commit vừa rồi trả undefined
    return ( // còn đối với Huyền Trang thì mặc định không nói gì là true
        <button>{title}</button>
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
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));