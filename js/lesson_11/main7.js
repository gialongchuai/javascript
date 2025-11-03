// destructuring 

var courses = ['Java', 'Javascript', 'Csharp'];

var a = courses[0];
var b = courses[1];
var c = courses[2];

console.log(a,b,c); // Java Javascript Csharp

var [d,e,f] = courses;
console.log(d,e,f); // Java Javascript Csharp

var [m,,p] = courses;
console.log(m, p); // Java Csharp

var [a, ...rest] = courses;
console.log(rest); // (2) ['Javascript', 'Csharp']

rest.forEach(function(e) {
    console.log(e); // Javascript \n Csharp
})


var objCourses = {
    name: 'Java',
    price: 1000,
    description: 'Khoa hoc gia re',
    aboutTheCourse: {
        name: 'Son Dang',
        category: 'technology',
        year: 2014
    }
}

var {name, price} = objCourses;
console.log(name, price); // Java 1000

var {abc, ...p} = objCourses;
console.log(abc, p); // undefined {name: 'Java', price: 1000, description: 'Khoa hoc gia re'}


var {name, ...getPriceAndDescription} = objCourses;
console.log(getPriceAndDescription); // {price: 1000, description: 'Khoa hoc gia re'}

var {name: nameOfCourse, aboutTheCourse: {name: nameOfAuthor}} = objCourses;
console.log(nameOfCourse, nameOfAuthor); // Java Son Dang

var {name, sale = 'neu khong co thi khong giam'} = objCourses;

console.log(name, sale); // Java neu khong co thi khong giam : lấy giá trị mặc định