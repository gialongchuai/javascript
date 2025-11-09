// ## Value types and Reference types

// ### Value types (Primitive data types)
// - String
// - Number
// - Boolean
// - BigInt
// - Symbol
// - undefined
// - null

// ### Reference types (Non-primitive data types)
// - Object
// - Array
// - Function

// ### Data types with functions 
// - Value types
// - Reference types

let u = true;
let y = u;
y = false;

console.log(u); // true
console.log(y); // false
// này kiểm nguyên thủy nên dẽ òi nhen

let a = {
    name: 'Son Dang'
}

let b = a;
a.name = 'Dang Son'

console.log(b.name); // Dang Son

// tạo obj mới thì lưu cái địa chỉ, nên truy cập chung luôn // 

var user = {
    name: 'Son Dang',
    profile: {
        firstName: 'Dang',
        lastName: 'Son',
        age: 18
    }
}

var name_c = user.name;

name_c = 'Nguyen Van A';
console.log(user.name); // Son Dang
console.log(name_c); // Nguyen Van A

// ok nhưng đối với object con thì sao

var obj_c = user.profile;
obj_c.age = 20;

console.log(user.profile.age); // 20
console.log(obj_c.age); // 20

// => đối với Reference types thì khi copy nó lưu địa chỉ ví dụ như trên là lưu địa chỉ obj nên việc thay đổi các value của key bên trong cũng thay đổi 2 thằng do 2 thằng cùng tham chiếu 1 ô nhớ ;)) có lẽ z

// demo tiep ne`
// nhận 1 obj và tạo 1 obj mới trả về

function traDoiTuongMoi(doiTuongNhan) {
    var tmp = doiTuongNhan;
    tmp.name = 'BMW';

    return tmp;
} 

var doiTuong = {
    name: 'Ford'
}

var doiTuongMoi = traDoiTuongMoi(doiTuong);
console.log(doiTuongMoi); // {name: 'BMW'}
console.log(doiTuong); // {name: 'BMW'}

// ô cê nhận được đối tượng mới nhưng đối tượng cũ thay đổi luôn do reference type không mong đợi

// resolve như sau:
// cach 01: 

function doiTuong_Cach_01(param) {
    var p = JSON.parse(JSON.stringify(param));
    // Cách này tốn thời gian đấy nhé !!!!!!!!!!!!!!!!

    // stringify thành chuỗi json sau đó chuyển
    // chuỗi json thành obj 
    // tức là tạo đối tượng mới bộ nhớ mới vùng nhớ mới hay gì gì đó nên không thay đổi thằng cũ

    // Ví dụ này triệt để tức là tạo vùng nhớ mới cho obj cha tức user và profile tạo mới luôn
    // không như cách 02 bên dưới chỉ cho cha, thay đổi con thì obj cũ thay đổi con theo
    p.name = 'Exciter';
    p.year = 2020;

    return p;
}

var cach_01 = {
    name: 'Wave alpha',
    profile: {
        year: 2019
    }
}

var doiTuongMoi_Cach_01 = doiTuong_Cach_01(cach_01);

console.log(cach_01); // {name: 'Wave alpha', profile: {…}} name: "Wave alpha" profile: {year: 2019}
console.log(doiTuongMoi_Cach_01); // {name: 'Exciter', profile: {…}, year: 2020} name: "Exciter" profile: {year: 2019} year: 2020

// cach 02:

function sonNew(o) {
    var i = {...o}; // giải từng cái trong obj cho i

    i.lastName = 'Son dep trai';
    i.profile.fullName = 'Son Dang (Mr. Son)';

    return i;
}

var son = {
    lastName: 'Son',
    firstName: 'Dang',
    profile: {
        fullName: 'Son Dang'
    }
}

var new_Son = sonNew(son);
console.log(son); // { lastName: 'Son', firstName: 'Dang', profile: { fullName: 'Son Dang (Mr. Son)' } }
console.log(new_Son); // { lastName: 'Son dep trai', firstName: 'Dang', profile: { fullName: 'Son Dang (Mr. Son)' } }

// đối với kiểu ...obj này thì chỉ tạo đối tượng 1 cấp mà thôi
// ví dụ thay đổi lastName => pass 
// nhưng đối obj con là profile có fullName thay đổi thì 2 thằng thay đổi cùng giá trị tức là địa chỉ ô nhớ á => Son Dang (Mr. Son)


var m = {
    name: 'abc'
}

var n = {
    name: 'abc'
}

console.log(m == n); // false
console.log(m === n); // false

// but

var x = m;

console.log(x == m); // true
console.log(x === m); // true