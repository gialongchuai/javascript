const courses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'Responsive web design'
    },
    {
        name: 'ReactJS'
    }
]

const jsx = (
    <ul>
        { // sẵn note cái arrow func lộn hỡm nay
            // nếu mà đằng sau => không có gì thì tức là tự động return
            // nếu mà có dấu {} thì phải có chữ return vì js6 coi nó là khối code
            // ở dưới dòng này có thể bỏ cái {}

            courses.map((course, index) => {
                return <li key={index}>{course.name}</li>
            })

            // hoặc
            // courses.map(course => {
            //     return <li>{course.name}</li>
            // })

            // hoặc
            // courses.map(course => <li>{course.name}</li>)

            // hoặc
            // courses.map(course => {
            //     return React.createElement('li', null, course.name);
            // })

            // hoặc
            // courses.map(course => React.createElement('li', null, course.name))
        }
    </ul>
)
console.log(jsx);
    
ReactDOM.render(jsx, document.querySelector('#root'));