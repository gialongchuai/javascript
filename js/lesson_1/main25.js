var courses = [
    'Javascript',
    'C++'
]

var output = courses.forEach(function(course, index, array) {
    console.log(course, index, array); // Javascript 0 (2) ['Javascript', 'C++'] \n C++ 1 (2) ['Javascript', 'C++']
})

console.log(output); // undefined -> forEach không return

// forEach dù cho length = 100 thì forEach biết và // empty * 100

Array.prototype.forEach2 = function(call) {
    for(var val in this) {
        console.log(val); // 0 1 forEach2 -> khá lạ thay vì for in chỉ duyệt 0 1 mà có cả forEach2
        if(this.hasOwnProperty(val)) { // đây là kiểm tra val tại đó có true hay không, do forEach duyệt cả property nên chỉ có 0 1 là true còn property xổ ra cái đó là false nhé (hàm f) ...
            call(this[val], val, this); // truyền giá trị tại vị trí index val : index : và nguyên 1 object
        }
    }
}

console.log(courses); // khi khai báo là prototype arraay thì mặc định console là cái prototype
// của ông courses sẽ sáng lên, và khi vòng "for in" ngoài chạy những index thì chạy ông trong prototype và in ra forEach2 luôn
/**
 * (2) ['Javascript', 'C++']
0
: 
"Javascript"
1
: 
"C++"
length
: 
2
[[Prototype]]
: 
Array(0)
forEach2
: 
ƒ (call)
 */

courses.forEach2(function(course, index, arr) {
    console.log(course, index, arr); // Javascript 0 (2) ['Javascript', 'C++'] \n C++ 1 (2) ['Javascript', 'C++']
});