
var urlComments = 'https://jsonplaceholder.typicode.com/comments';

fetch(urlComments)
    .then(function(response) {
        return response.json();
    })
    .then(function(comments) {
        var res = document.getElementById('comments');
        var html = '';
        comments.map(function(comment) {
            html += `
                <h2>${comment.name}</h2>
                <li>${comment.body}</li>
            `
        });
        res.innerHTML = html;
    })

    // lấy được 500 commets