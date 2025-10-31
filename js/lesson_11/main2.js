/**
 * 
 *  1
    Hehe
    Hello
    2
    3 
    // nị kê quê thiệc, code căng quá mới hiểu cái luồng ý
 */

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
        return sleep(2000)
                .then(function() {
                    console.log('Hello');
                });
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
    })
