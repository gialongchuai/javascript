
function sleep(ms) {
    return new Promise(function(resolve) {
        if(ms === 2000) {
            console.log('Hehe');
        }
        setTimeout(resolve,ms) 
    })  
}

sleep(6000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return new Promise(function(resolve, reject) {
            reject('Co loi');
        });
    })
    .then(function() {
        console.log(33);
    })
    .catch(function(error) {
        console.log(error);
    })
