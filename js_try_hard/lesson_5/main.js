function random() {
    console.log(Math.random());
}

random();
console.dir(Function); // thì call nằm kế bind

// nghe nói là khi gọi hàm thì engine gì js gọi tới call() để thực thi
// the same

random.call();

// nhưng nó khác sau đây
const user = {
    name: 'Son Dang',
    getFullName() {
        console.log(this);
        console.log(this.name);
    }
}

const user2 = {
    name: 'Hello world'
}
user.getFullName(); // {name: 'Son Dang', getFullName: ƒ}
user.getFullName.call(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 1 ông là Sơn Đặng còn call thì là phạm vi window

user.getFullName.call(user); // Son Dang

user.getFullName.call(user2); // Hello world -> có nghĩa là bind ông user2 và gọi getFullName và lấy ông name của user2

const orders = [
  { id: 1, customer: "Nam", amount: 200, status: "shipped" },
  { id: 2, customer: "Lan", amount: 90, status: "pending" },
  { id: 3, customer: "Hung", amount: 150, status: "shipped" }
];


var ordersShipped = orders.filter(order => order.status === 'shipped');
console.log(ordersShipped);

var total = ordersShipped.reduce((init, order) => {
},0);
console.log(total);

// tên danh sách khách hàng
var arrCus = ordersShipped.map(ordersShippe => ordersShippe.customer);
console.log(arrCus); // (2) ['Nam', 'Hung']