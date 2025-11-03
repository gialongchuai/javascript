// tagged template literals

// ông strings gốc lúc nào cũng dẫn trước
// ông values 1 đơn vị, nêu duyệt tới values sau đó công phần tử cuối trong strings vào 

function hightlight(...params) {
    console.log(params);
}

var nameCourse = 'Javascrip';
var adjDesCour = 'kho hieu';

hightlight`${nameCourse} that la ngon ngu ${adjDesCour}`;

// (3) [Array(3), 'Javascrip', 'kho hieu']
// 0:(3) ['', ' that la ngon ngu ', '', raw: Array(3)]
// 1:"Javascrip"
// 2:"kho hieu"
// length:3

function highAgain(strings, ...value) {
    console.log(strings); // (3) ['', ' that la ngon ngu ', '!', raw: Array(3)]
    console.log(value); // (2) ['Javascrip', 'kho hieu']

    let result = '';
    for(let i=0; i<value.length; i++) {
        result += strings[i] + `<b>${value[i]}</b>`;
    }

    result += strings[strings.length - 1];

    return result; // <b>Javascrip</b> that la ngon ngu <b>kho hieu</b>!
}

const value = highAgain`${nameCourse} that la ngon ngu ${adjDesCour}!`;
console.log(value);

// (4) ['', ' voi so tuoi la ', ' da chinh phuc duoc ', ' giai dau lap trinh!', raw: Array(4)]
// (3) ['Son Dang', 18, 10]

var nameAuth = 'Son Dang';
var age = 18;
var awards = 10;

const value2 = highAgain`${nameAuth} voi so tuoi la ${age} da chinh phuc duoc ${awards} giai dau lap trinh!`;
console.log(value2); // <b>Son Dang</b> voi so tuoi la <b>18</b> da chinh phuc duoc <b>10</b> giai dau lap trinh!

// (2) ['Ngon ngu lap trinh la ', '', raw: Array(2)]
// ['Javascript']

var nameLanguage = 'Javascript';
var valuetp = highAgain`Ngon ngu lap trinh la ${nameLanguage}`;
console.log(valuetp); // Ngon ngu lap trinh la <b>Javascript</b>