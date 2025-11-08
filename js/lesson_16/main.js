const numbers = [1,2,3,4,5];

Array.prototype.reduce2 = function(callback, value) {
    let i = 0; 
    if(arguments.length < 2) {
        i=1;
        value = this[0];
    }
    for(;i<this.length; i++) {
        value = callback(value, this[i], i, this);
    }
    return value; // ông này return về cho ông sum và sum2
}

var sum = numbers.reduce2(function(init, value, index, array){
    return init += value; // ông này return về cho value dòng số 10
}, 10);

console.log(sum); // 25

var sum2 = numbers.reduce2(function(init, value, index, array){
    return init += value; // ông này return về cho value dòng số 10
});

console.log(sum2); // 15