// javascript array methods
var languages = [
    'Javascript',
    'Csharp',
    'C++',
    'Ruby'
];
console.log(languages.length); // 4
// 1. toString()
console.log(languages.toString()); // Javascript,Csharp,C++,Ruby

// 2. join
console.log(languages.join(', ')); // Javascript, Csharp, C++, Ruby -> thêm ', ' sau mỗi 1 -> <lenght - 1

// 3. pop xóa ele cuối arr và trả về phần tử đã xóa
console.log(languages.pop()); // Ruby
console.log(languages.toString() + ' ' + languages.length); // Javascript,Csharp,C++ 3

// xóa hết thì trả về undefined và nếu console thì ra [] : rỗng
console.log(languages.pop()); // C++
console.log(languages.pop()); // Csharp
console.log(languages.pop()); // Javascript
console.log(languages.pop()); // undefined

console.log(languages); // []
console.log(languages.toString()); // không in gì hết do rồng rồi còn gì in đâu :vvv

// 4. Push thêm phần từ cuối mảng
var languages_new = [
    'Java',
    'JS',
    'Csharp'
];
console.log(languages_new.toString()); // Java,JS,Csharp
console.log(languages_new.push('PHP')); // 4 : trả về số 4 độ dài chuỗi , nếu push 2 cái thì trả về 5 á ;))
console.log(languages_new.toString()); // Java,JS,Csharp,PHP
console.log(languages_new); // (4) ['Java', 'JS', 'Csharp', 'PHP']

// 5. Shift
console.log(languages_new.shift()); // Java : xóa phần tử đầu tiên của dãy và in ra nó
console.log(languages_new.toString()); // JS,Csharp,PHP -> nếu xóa hết thì trả về undefined
// nếu phát hiện ra undefined -> mảng hết rồi stop!!!!!

// 6. Unshift : thêm vào đầu mảng và trả về độ dài
console.log(languages_new.toString()); // JS,Csharp,PHP
console.log(languages_new.length); // 3

console.log(languages_new.unshift('Java', 'C++')); // 5
console.log(languages_new.toString()); // Java,C++,JS,Csharp,PHP

// 7. Splicing : xóa phần tử tại vị trí : xóa bao nhiêu kể từ vị trí đó, 1 là C++ xóa 2 C++ JS deleted
console.log(languages_new.splice(1,2)); // (2) ['C++', 'JS']
console.log(languages_new.toString()); // Java,Csharp,PHP

// ngoài ra có thể chèn, ví dụ 1 0 Javascript thì tại số 1, 0 xóa gì cả mà chèn Javascript
console.log(languages_new.splice(1,0,'Javascript')); // [] tức không xóa gì cả
console.log(languages_new.toString()); // Java,Javascript,Csharp,PHP

// thứ xóa 1 rồi chèn xem shao
console.log(languages_new.splice(1,1,'English', 'Korean')); // ['Javascript']
console.log(languages_new.toString()); // Java,English,Korean,Csharp,PHP

// 8. Concat : nối 2 array
console.log(languages.push('Japanese', 'Korean')); // 2
console.log(languages.toString()); // Japanese,Korean
console.log(languages_new.toString()); // Java,English,Korean,Csharp,PHP ******
console.log(languages.concat(languages_new)); // (7) ['Japanese', 'Korean', 'Java', 'English', 'Korean', 'Csharp', 'PHP']
console.log(languages.concat(languages_new).toString()); // Japanese,Korean,Java,English,Korean,Csharp,PHP

// 9. Splicing
console.log(languages_new.splice(1,2)); // (2) ['English', 'Korean']; ******
console.log(languages_new.toString()); // Java,Csharp,PHP ******