// Promise

// status
// 1. pending nếu không gọi
// 2. fulired tức là hoàn thành
// 3. rejected đã tạch

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic với resolve ->  pass ; reject -> fail
        // fake fetch call api
        // resolve(123);


        resolve(); // lần lượt in 1 2 3 Done
    }
);

promise
    .then(function(data) {
        return 1;
    })
    .then(function(data) {
        console.log(data); // 1
        return 2;
    })
    .then(function(data) {
        console.log(data); // 2
        return 3;
    })
    .then(function(data) {
        console.log(data); // 3
    })
    .catch(function(error) {
        console.log('failure! ' + error)
    }) 
    .finally(function() {
        console.log('done!')
    });

function sleep(ms) {
    
}