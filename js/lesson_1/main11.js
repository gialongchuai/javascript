// == so sánh lỏng lẻo
// === so sánh chặt chữ 
// 2 == '2' : true
// 2 === '2' : false

// switch case mặc định dùng ===

var x = '2';
switch(x) {
    case 2:
        console.log('số ' + x);
        break;
    case '2':
        console.log('chữ số ' + x); // acc : chữ số 2
        break;
    default:
        console.log('Hello world!');
}

