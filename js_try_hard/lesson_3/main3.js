const iPhone7 = {
    name: 'iphone 7',
    color: 'pink',

    takePhoto() {
        console.log(this);
    },

    child: {
        methodChild() {
            console.log(this);
        }
    }
}

iPhone7.takePhoto(); // lúc này this chính là obj gọi tới this này: {name: 'iphone 7', color: 'pink', child: {…}, takePhoto: ƒ}
iPhone7.child.methodChild(); // {methodChild: ƒ} lúc này this chính là cái gọi đến nó trong này là child là obj nên this hiên thị obj của nó.

function Car(name, color) {
    this.name = name;
    this.color = color;
    this.run = function() {
        console.log('Car is running...', this);
    }
}

const ford = new Car('Ford', 'Pink');
ford.run(); // Car is running... Car {name: 'Ford', color: 'Pink', run: ƒ}
// run là method được định nghĩa nằm trong obj Car nên gọi this 
// cout ra màn hình thì đó là Car

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function run() {
    console.log(this);
}

run(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// thường ta phải từ obj gội tới method chứa this thì cout màn hình sẽ thấy obj gọi
// còn đối với func này thì không có obj nào bao bọc cả nên this sẽ là window

// trong strict mode => undefined thay vì window nhé

function abc() {
    'use strict'
    function runningMan() {
        console.log(this); // undefined
    }
    runningMan();
}

abc(); // undefined

// hàm và phương thức (function and method)

// this đối với : 
// đối với function thì dù nó nằm trong obj của 1 method thì nó cũng là window
// chỉ có method thuộc về đối tượng thì gọi thì mới cout màn hình nó là obj chứa

var user = {
    name: 'Son Dang',
    say() { // method viết tắt kiểu say: function say()
        console.log(this); // user
        function abc() {
            console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
        }
        abc();

        const def = () => {
            console.log(this);
        }
        def(); // {name: 'Son Dang', say: ƒ, say2: ƒ}
    },
    say2: () => {
        console.log(this);
    }
}
user.say(); 
// 2 log là :
// {name: 'Son Dang', say: ƒ} do user gọi tới say() sau this nên obj user
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// do abc() lúc này func không thuộc obj nào gọi cả. Nó là hàm riêng mà.

// nói sao tak: có thể hiểu là this nó thuộc về 1 context khi gọi
// ví dụ gọi tới say nó là method là context this thuộc về obj gọi
// function trong method là abc được gọi vậy context nó thuộc về window chứ không thuộc đối tượng
// đối với arrow function thì không có context nên sẽ trả ra this bên ngoài!!!!!

user.say2(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

lmn = () => {
    console.log(this);
}

lmn(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}