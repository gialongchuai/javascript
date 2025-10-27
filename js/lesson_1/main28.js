// every : kiểm tra tất cả element thỏa đk -> true else false

var obj = [
    {
        id: '1',
        name: 'Java',
        isApplied: true
    },
    {
        id: '2',
        name: 'C++',
        isApplied: true
    },
    {
        id: '3',
        name: 'Csharp',
        isApplied: false
    }
]

var isEvery = obj.every(function(object, index, arr) {
    return object.isApplied;
});

console.log(isEvery); // false

Array.prototype.every2 = function(callback) {
    for(var ind in this) {
        if(this.hasOwnProperty(ind)) {
            if(callback(this[ind], ind, this) === false) return false;
        }
    }
    return true;
}

var isEvery2 = obj.every2(function(object, index, arr) {
    return object.isApplied;
});

console.log(isEvery2); // false