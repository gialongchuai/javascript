// Object prototype - Basic

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${firstName} ${lastName}`;
    }
}

var author = new User('Son', 'Dang', 'jpg');
var user = new User('Hao', 'An', 'jng');
console.log(author); // User {firstName: 'Son', lastName: 'Dang', avatar: 'jpg', getName: ƒ}
console.log(user); // User {firstName: 'Hao', lastName: 'An', avatar: 'jng', getName: ƒ}

// config thuộc tính chung
User.className = 'f8';
console.log(author.className); // undefined không được

// map từng object
user.className = 'f8';
author.className = 'f8';
console.log(author); // User {firstName: 'Son', lastName: 'Dang', avatar: 'jpg', className: 'f8', getName: ƒ}
console.log(user); // User {firstName: 'Hao', lastName: 'An', avatar: 'jng', className: 'f8', getName: ƒ}

// khá lâu sinh ra prototype để map chug cho all obj
User.prototype.classTitle = 'xin chao the gioi';
console.log(author.classTitle); // xin chao the gioi : acc
console.log(user); // classTitle nằm trong prototype phải mở rộng ra trên trình duyệt mới thấy

User.prototype.getTile = function() {return `${this.classTitle}`};
console.log(author); // getTitle cũng nằm trong prototype phải mở rộng ra trên trình duyệt mới thấy
console.log(author.getTile()); // xin chao the gioi


// tóm tắt nếu khai báo thẳng trong hàm tạo thì ctrl + S là thấy liền qua console
// khai báo sau thì phải xổ cái prototype ra mới thấy nó