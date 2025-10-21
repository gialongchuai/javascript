// for loop

for(var i=1; i<=100; i++) {
    console.log(i);
}

function snt(n) {
    if(n<2) return false;
    for(var i=2; i*i<=n; i++) {
        if(n%i === 0) return false;
    }
    return true;
}

console.log(snt(12));

var myArray = [
    'Hello world!',
    'Hello universe',
    'Hello galaxy',
    'Hello the sun'
];

for(var i=0; i<myArray.length; i++) {
    console.log(myArray[i]);
}

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi'
};

for(var x in myInfo) {
    console.log(x); // name \n age \n address : key của obj
    console.log(myInfo[x]); // Son Dang \n 18 \n Ha Noi
}

// dùng for cho array

var languages = [
    'Javascript',
    'Java',
    'C++',
    'Ruby'
];

for(var x in languages) {
    console.log(x); // 0 1 2 3
    console.log(languages[x]); // Javascript Java C++ Ruby
}

var myString = "Hello world";
var new1 = '';
var new2 = '';
for(var x in myString) {
    console.log(x);
    console.log(myString[x]);
    new1+=x;
    new2+=myString[x];
}
console.log(new1 + ' ' + new2); // 012345678910 Hello world