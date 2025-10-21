// function : hàm
function showDialog() {
    console.log('Hello world!');
}
showDialog(); // Hello world!

function writeLog(message) { // tham số
    console.log(message);
};  

writeLog('Test mesage'); // đối số // Test mesage

function helloLimit(hello1, hello2) {
    console.log(hello1 + ' ' + hello2);
}

helloLimit('world', 'universe'); // world universe

// arguments

function writeArgu() {
    console.log(arguments);
};

writeArgu('hello world!', 'hello universe'); // Arguments(2) ['hello world!', 'hello universe'ẽi callee: ƒ, Symbol(Symbol.iterator): ƒ]

console.log(1,2,3,4,5); // 1 2 3 4 5

function run() {
    var myO = '';
    for(var par of arguments) {
        console.log(par);
        myO += `${par} - `;
    }
    console.log(myO); // xin chao - hello world - 
}

run('xin chao', 'hello world'); // 2 dòng: xin chao : hello world