var courses = [
    {
        id: '1',
        name: 'Java',
        price: 100
    },
    {
        id: '2',
        name: 'Javascript',
        price: 730
    },
    {
        id: '3',
        name: 'Csharp',
        price: 800
    }
]

for(var x of courses) {
    console.log(x); // {id: '1', name: 'Java'} {id: '2', name: 'Javascript'} {id: '3', name: 'Csharp'}
}

var filterCourses = courses.filter(function(course, index, arr) {
    return course.price > 700;
});

console.log(filterCourses); // filter trả về array chứa obj thỏa

/**
 * 
(2) [{…}, {…}]
0
: 
{id: '2', name: 'Javascript', price: 730}
1
: 
{id: '3', name: 'Csharp', price: 800}
length
: 
2
 */

Array.prototype.filter2 = function(call) { // filter 2 được định nghĩa nhận vào 1 func từ dòng 54 function(course, ind, arr)
    var out = []; // tạo mảng hứng object thỏa để continue dòng 51
    for(var ind in this) { // this là courses do dùng . filter : ind là từng index trong courses
        if(this.hasOwnProperty(ind)) { // kiểm tra từng index đó không phải false, tức là chỉ nhận ta khai báo, không được nhận trong scope prototype (bỏ filter2)
            var res = call(this[ind], ind, this); // mỗi index gọi lại hàm dòng 54 với tham số như sau: courses[ind], index duyệt từng cái, và nguyên 1 cái courses luôn
            if(res) out.push(this[ind]); // ta chỉ xét 55: với giá trị tại index với price > 700 thì push vào out
        }
    }
    return out; // trả về cho filterCourses2
};

var filterCourses2 = courses.filter2(function(course, ind, arr) {
    return course.price > 700;
});
console.log(filterCourses2); // (2) [{…}, {…}]  : y chang filter mặc định