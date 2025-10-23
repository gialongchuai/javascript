var courses = [
    'Javascript',
    'C++'
]

var output = courses.forEach(function(course, index, array) {
    console.log(course, index, array); // Javascript 0 (2) ['Javascript', 'C++'] \n C++ 1 (2) ['Javascript', 'C++']
})

console.log(output); // undefined -> forEach không return

