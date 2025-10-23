var courses = [
    'Java',
    'C++'
]

courses.length = 5; // chú ý các đoạn bên dưới khi cố ý thay đổi length nhé
for(var i=0; i<courses.length; i++) {
    console.log(courses[i]); // Java C++  3 undefined
}

for(var val of courses) {
    console.log(val); // Java C++  3 undefined
}

for(var index in courses) {
    console.log(courses[index]); // in đúng với 2: Java C++
}