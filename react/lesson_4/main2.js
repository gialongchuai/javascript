
// xử lý khi thêm vào root mà không có thẻ cha bao bọc

var root = document.querySelector('#root');

const dom = React.createElement(
    React.Fragment,
    null,
    React.createElement('h1', null, 'heading 1'),
    React.createElement('h2', null, 'heading 2')
)

ReactDOM.render(dom, root); // ông root ôm 2 ông h1 và h2

const jsx = ( // ông jsx cũng vậy, nhận vào thẻ bao bọc các con
    // nếu không muốn thì tạo Fragment
    <React.Fragment>
        <h1>heading abc</h1>
        <h2>heading def</h2>
    </React.Fragment>
)

ReactDOM.render(jsx, root); // ông root ôm 2 ông h1 và h2
