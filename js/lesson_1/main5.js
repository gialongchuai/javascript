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

writeArgu('hello world!', 'hello universe'); // Arguments(2) ['hello world!', 'hello universe', callee: ƒ, Symbol(Symbol.iterator): ƒ]