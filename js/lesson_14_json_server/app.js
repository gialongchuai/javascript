const apiCourses = 'http://localhost:3000/courses';

// ids

// name_course
// description_course
// confirm_course

function start() {
    getCourses(renderCourses);

    handelCreateCourses();
    handleDeleteCourse();
}

start();

function getCourses(callback) {
    fetch(apiCourses)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function renderCourses(courses) {
    var id_courses = document.getElementById('list_courses');
    var htmls = '';

    courses.forEach(function(course) {
        htmls += `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `
    });
    id_courses.innerHTML = htmls;
    
}

function handelCreateCourses() {
    var elementConfirmCourse = document.getElementById('confirm_course');
    console.log(elementConfirmCourse);

    elementConfirmCourse.onclick = function() {
        var nameCourse = document.getElementById('name_course');
        var descriptionCourse = document.getElementById('description_course');

        console.log(nameCourse.value, descriptionCourse.value);
        console.log(nameCourse, descriptionCourse);

        var newData = {
            name: nameCourse.value,
            description: descriptionCourse.value
        }

        fetch(apiCourses, {
            method: 'POST',
            body: JSON.stringify(newData)
        })
    }
}

function deleteCourse(valueIdCourse) {
    var newApiDeleteCourse = apiCourses + '/' + valueIdCourse;
    fetch(newApiDeleteCourse, {
        method: 'DELETE'
    });
}

function handleDeleteCourse() {
    var elementDeleteCourse = document.getElementById('btnDeleteCourse');
    elementDeleteCourse.onclick = function() {
        var valueIdCourse = document.getElementById('id_course').value;
        deleteCourse(valueIdCourse);
    }
}