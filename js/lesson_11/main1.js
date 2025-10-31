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


        reject(error);
    }
);

promise
    .then(function(data) {
        console.log('successfully! ' + data)
    })
    .catch(function(error) {
        console.log('failure! ' + error)
    }) 
    .finally(function() {
        console.log('done!')
    });