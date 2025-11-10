// bind()


window.firstName = 'Dang'
window.lastName = 'Son'

var user = {
    firstName: 'Java',
    lastName: 'Script',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    showName() {
        console.log(this.firstName);
    }
}

console.log(user.getFullName()); // Java Script

const funcGetFullName = user.getFullName;
console.log(funcGetFullName()); // Dang Son

// có thể hiểu là lúc gội getFullName qua user.
// thì this trả về obj gọi nó là user nên first và last lúc đó là Java và Scipt

// còn việc gán 1 func rồi gọi func đó lúc sau
// thì lúc đó func không thuộc về obj gọi nữa lúc đó this là window bài cũ
// mặc dù gán là kiểu reference types có thể kiểm tra === thì cout true 
// nhưng việc gọi this như vậy là window.

// khắc phục điều đó thì trong function nào cũng hỗ trợ bind
// có thể xem console.dir(Function);

// ta muốn nó là JavaScript không là Dang Son nữa thì bind giữ nó lại
const fixMethodGetFullName = user.getFullName.bind(user);
console.log(fixMethodGetFullName()); // Java Script
// this lúc này là user gọi tới firstName và lastName của user.

// === lúc này sẽ false vì tạo cái mới hoàn toàn

var eleButton_bandau = document.querySelector('#btn2');
console.log(eleButton_bandau);

eleButton_bandau.onclick = user.showName; // undefined

var eleButton = document.querySelector('#btn');
console.log(eleButton);

eleButton.onclick = user.showName.bind(user); // Java

// nguyên nhân là việc goi showName mà không bind là gọi tới window showName nên undefined
// nhớ bind để dịnh nó lại, có lẽ z