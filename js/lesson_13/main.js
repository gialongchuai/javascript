var users = [
    {
        id: 1,
        name: 'Son Dang'
    },
    {
        id: 2,
        name: 'Hung Dam'
    },
    {
        id: 3,
        name: 'Kien Dam'
    }
]

var comments = [
    {
        id: 1,
        user_id: 3,
        name: 'Ra video moi chua anh :('
    },
    {
        id: 2,
        user_id: 1,
        name: 'Vua ra video moi roi em!'
    },
    {
        id: 3,
        user_id: 3,
        name: 'Cam on anh a ^^^'
    }
]

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        },1000);
    })    
}

function getUsersByIds(ids) {
    return new Promise(function(resolve) {
        var res = users.filter(user => ids.includes(user.id));
        setTimeout(function() {
            resolve(res);
        }, 1000);
    });
}

getComments()
    .then(function(cmt) {
        // console.log(cmt); // mảng chứa các obj của cmt
        var userIds = cmt.map(e => e.user_id);

        console.log(cmt);
        console.log(userIds);

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    cmts: cmt,
                    users: users
                }
            })
        })
    .then(function(data) {
        // data: cmts, users
        console.log(data);
        var commentBlock = document.getElementById('comments_user');
        var html = '';

        data.cmts.forEach(function(cmt) {
            var ur = users.find(function(user) {
                return user.id === cmt.user_id
            })
            html += `<li>${ur.name}: ${cmt.name}</li>`
        })

        commentBlock.innerHTML = html;
    });


    
// cmts: Array(2)
// 0: {id: 1, user_id: 2, name: 'Ra video moi chua anh :('}
// 1: {id: 2, user_id: 1, name: 'Vua ra video moi'}
// length: 2
// [[Prototype]]: Array(0)
// users: Array(2)
// 0: {id: 1, name: 'Son Dang'}
// 1: {id: 2, name: 'Hung Dam'}
// length: 2