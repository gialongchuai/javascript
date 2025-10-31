// 1. Event listener -> Ok
// 2. Json
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 9. Mistakes
// 10. Performance

// Là một định dạng kiểu dữ liệu (nó là 1 chuỗi)
// Javascript Object Notation
// Json: Number, Boolean, Null, Array, Object

// Encode / Decode
// mã hóa / giải mã
// Stringify : từ Javascript types => JSON
// / Parse : Từ Json sang Javascript types

// json phải có nháy kép cho key khác với key of object
var json_v1 = '["Javascript", "Java"]';
var json_v2 = '{ "name" : "Son Dang","age" : 18}';

console.log(json_v1); // ["Javascript", "Java"]
console.log(JSON.parse(json_v1)); // (2) ['Javascript', 'Java']
console.log(typeof JSON.parse(json_v1)); // object

console.log(json_v2); // { "name" : "Son Dang","age" : 18}
console.log(JSON.parse(json_v2)); // {name: 'Son Dang', age: 18}
console.log(typeof JSON.parse(json_v2)); // object

var a = '1';
var b = 'true';

console.log(a); // 1
console.log(typeof a); // string

console.log(JSON.parse(a)); // 1
console.log(typeof JSON.parse(a)); // number

console.log(JSON.parse(b)); // true
console.log(typeof JSON.parse(b)); // boolean

var c = 'null';

console.log(c); // null
console.log(JSON.parse(c)); // null
console.log(typeof JSON.parse(c)); // object

var d = '"abc"';

console.log(d); // "abc"
console.log(JSON.parse(d)); // abc
console.log(typeof JSON.parse(d)); // string

// chuyển đổi từ dữ liệu javascipt -> json (thành chuỗi hết)
console.log(JSON.stringify(1)); // 1
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify('1')); // "1"
console.log(JSON.stringify(['def', 'abc', 'mn"p'])); // ["def","abc","mn\"p"] : javascript tự động thêm \" vào chuỗi
console.log(JSON.stringify({
    name: "Son Dang",
    age: 18
})); // {"name":"Son Dang","age":18}