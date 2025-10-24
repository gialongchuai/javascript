var obj = [
    {
        id: '1',
        name: 'Java',
        isApplied: true
    },
    {
        id: '2',
        name: 'C++',
        isApplied: false
    },
    {
        id: '3',
        name: 'Csharp',
        isApplied: false
    }
]

var isPassed = obj.some(function(object, index, arr) {
    return object.isApplied === true;
});

console.log(isPassed); // true

Array.prototype.some2 = function(callback) {
    var res = false;
    for(var ind in this) {
        if(this.hasOwnProperty(ind)) {
            if(callback(this[ind], ind, this)) return true;
        }
    }
    return res;
};

var isPassed2 = obj.some2(function(object, index, arr) {
    return object.isApplied;
});
console.log(isPassed2); // // true : coi 26 .js để hiểu nhé.