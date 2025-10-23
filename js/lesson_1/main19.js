var depthArray = [1,2,3,[4,5,6],8,9];

var x = depthArray.reduce(function(num, currentValue) {/*console.log(num + ' ' + currentValue)*/; return num.concat(currentValue)}, []);
console.log(x); // (8) [1, 2, 3, 4, 5, 6, 8, 9]

var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'React'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'Nodejs'
            },
            {
                id: 2,
                title: 'PHP'
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);

/*(4) [{…}, {…}, {…}, {…}]
0
: 
{id: 1, title: 'HTML, CSS'}
1
: 
{id: 2, title: 'React'}
2
: 
{id: 1, title: 'Nodejs'}
3
: 
{id: 2, title: 'PHP'}
length
: 
4
[[Prototype]]
: 
Array(0)*/


/**
 * (2) [{…}, {…}]
0
: 
{topic: 'Front-end', courses: Array(2)}
1
: 
{topic: 'Back-end', courses: Array(2)}
length
: 
2
[[Prototype]]
: 
Array(0)
 */
var newCou = topics.reduce(function(bienluutru, topic) {
    return bienluutru.concat(topic.courses);
}, []);
console.log(newCou);

var html = '';

var nameCourses = newCou.map(function(newCou) {
    html+= `
        <p>${newCou.title}</p>
    `;
    return newCou.title;
});
console.log(nameCourses); // (4) ['HTML, CSS', 'React', 'Nodejs', 'PHP']

console.log(html);

/**
 *      <p>HTML, CSS</p>
    
        <p>React</p>
    
        <p>Nodejs</p>
    
        <p>PHP</p>
 */