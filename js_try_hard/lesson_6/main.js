// call and apply and bind
//  3 ông thường dùng khi đi mượn hàm và khi kế thừa

console.log('Hello world!');

const teacher = {
    firstName: 'Minh',
    lastName: 'Thu'
}

function greet(greeting, message) {
    console.log(`${greeting} ${this.firstName} ${this.lastName}. ${message}`);
}

// tham số đầu để bind cái ông teacher lại gọi this
// đối với call có thể vừa bind và truyền vào 2 tham số greeting và message
greet.call(teacher, 'Em chào cô', 'Cô dạy môn gì vậy ạ?'); // Em chào cô Minh Thu. Cô dạy môn gì vậy ạ?

greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì vậy ạ?']); // Em chào cô Minh Thu. Cô dạy môn gì vậy ạ?

greet.bind(teacher, 'Em chào cô', 'Cô dạy môn gì vậy ạ?')(); // Em chào cô Minh Thu. Cô dạy môn gì vậy ạ?

// Điểm giống thứ nhất cả call avaf apply đều bind được teacher 
// nhưng đối với ông apply phải truyền qua mảng để nhận 2 tham số

// Ví dụ 2 mượn hàm cô giáo qua bind me cho cả apply và call

const coGiao = {
    firstName: 'Minh',
    lastName: 'Thu',
    isOnline: false,
    online() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online: ${this.isOnline}`);
    }
}

const hocSinh = {
    firstName: 'Son',
    lastName: 'Dang',
    isOnline: false
}

console.log(coGiao.isOnline); // false
coGiao.online(); // Minh Thu is Online: true
console.log(coGiao.isOnline); // true

// nhưng ở đây hocSinh không có func online nên mượn của cô giáo
// và bind hocSinh để lấy 3 thông tin học sinh.
// có thể dùng call hay apply thì cũng như nhau do 2 ông bind giống mà 

console.log(hocSinh.isOnline); // false
coGiao.online.apply(hocSinh); // Son Dang is Online: true
console.log(hocSinh.isOnline); // true

// Khác biệt là đối với bind thì phải hứng lại sau đó mới gọi như dòng 20
// , tức là không ấy phải thêm () ngoài sau đuôi để gọi còn đối với
// 2 ông kia gọi hàm luôn

// ví dụ truyền tham số vào bind sẽ được ưu tiên hơn
function fn() {}
var thamso1, thamso2, thamso3, thamso4;
const newFn = fn.bind(this, thamso1, thamso2);
newFn(thamso3, thamso4);

// lúc này thì thamso1, thamso2 được ưu tiên hiển thị mặc dù ta truyền 
// thamso3 và thamso4 mới => ưu tiên chọn tham số bind cùng this

// => nếu muốn thamso3, thamso4 hoạt động thì ko truyền 1 2 vào cùng this


// extends

function Animal(name, weight) {
    this.name = name;
    this.weight = weight
}

function conVet(name, weight) {
    Animal.apply(this, arguments);
    function speak() {
        console.log(`${this.name} với ${this.weight} đang nói xin chào!`);
    }
    speak();
}

const xin = conVet('Con vẹt', 300); // Con vẹt với 300 đang nói xin chào!