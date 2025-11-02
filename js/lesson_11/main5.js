function logger(mess) {
    console.log(mess);
}
logger('Hello world'); // Hello world

let b = (logger) => {
    console.log(logger);
}
b('one two three'); // one two three

var getObj = (a,b) => ({a: a, b: b});

var obj = getObj(2,3);
console.log(obj); // {a: 2, b: 3}
console.log(getObj(10,4)); // {a: 10, b: 4}

var _obj = {
    name: 'Son Dang',
    getName: function() {
        return this.name;
    }
}

console.log(_obj.getName); // ƒ () {return this.name;}
console.log(_obj.getName()); // Son Dang

var _obj_v = {
    name: 'Son Dang',
    getName: () => {
        return this.name;
    }
}

console.log(_obj_v.getName); // () => {return this.name;}
console.log(_obj_v.getName()); // trống lỗng khôn có gì cả ;))