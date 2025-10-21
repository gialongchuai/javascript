// object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new User('Son', 'Dang', 'url: ....jpg');
var user = new User('Hao', 'An', 'url: ....jpg');
console.log(author); // User {firstName: 'Son', lastName: 'Dang', avatar: 'url: ....jpg'}
console.log(user); // User {firstName: 'Hao', lastName: 'An', avatar: 'url: ....jpg'}

console.log(author.constructor);
// out 
// ƒ User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }

console.log(author.constructor === User); // true 

author.title = 'Hom nay toi buon';
user.comment = 'Khoa hoc bo ich khong anh';

console.log(author); // User {firstName: 'Son', lastName: 'Dang', avatar: 'url: ....jpg', title: 'Hom nay toi buon'}
console.log(user); // User {firstName: 'Hao', lastName: 'An', avatar: 'url: ....jpg', comment: 'Khoa hoc bo ich khong anh'}

function sayMyName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var user2 = new sayMyName('Son', 'Dang');
console.log(user2); // sayMyName {firstName: 'Son', lastName: 'Dang', getName: ƒ}
console.log(user2.getName()); // Son Dang