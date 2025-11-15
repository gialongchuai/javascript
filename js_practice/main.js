console.log('Xin chào cô giáo Minh Thu!');

const arr = ['Minh Thu', 'Huyền Trang']

const callback = (teacher, index) => {
    return console.log(`Top ${index} là cô giáo ${teacher}`);
}
arr.forEach(callback);

function loc(num) {
    return function (chan) {
        const arr = [];
        for (let i = 0; i <= num; i++) {
            if (chan(i))
                arr.push(i);
        }
        return arr;
    }
}

const func = (num) => (chan) => {
    const arr = [];
    for (let i = 0; i <= num; i++) {
        if (chan(i))
            arr.push(i);
    }
    return arr;
}


const res = loc(10)(number => number % 2 === 0);
const res1 = loc(10)(number => number % 2 === 1);
console.log(res); // (6) [0, 2, 4, 6, 8, 10]
console.log(res1); // (5) [1, 3, 5, 7, 9]
const res3 = func(10)(number => number % 2 === 0);
console.log(res3);

setTimeout(()=> console.log('Hello'), 0); // dù 1 giây cũng in sau do là bất đồng bộ
console.log('Xin chao!');

Promise.resolve().then(() => console.log(199));

const promise = () => new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Xin chào!'), 0)
});

var num = promise()
    .then(value => {
            console.log(value)
            return new Promise((resolve) => {
                setTimeout(()=>resolve('Sau so 2'), 0)
            }) 
        }
    )
    .catch((error) => {
        console.warn(error);
        return -100;
    }) 
    .finally(() => {
        console.log('The end!');
    }) 

num.then((value) => console.log(value));

console.log(1);

setTimeout(() => console.log(2),0);

Promise.resolve().then(() => console.log(3));

console.log(4);

// Xin chao!
// 1
// 4
// 199
// 3
// Console log!
// The end!
// Console log!
// The end!
// Hello
// Xin chào!
// The end!
// Sau so 2
// 2

// thứ tự ưu tiên, đồg bộ -> promise xong tới timeout timeinterval

// async / await
// await sử dụng trong async func mà thôi
// await đợi 1 promise ?

const test = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve('Console log!'), 0)
    })
}

const handle = async () => {
    try {
        const value = await test();
        console.log(value);
    } catch (error) {
        console.warn(error);
    } finally {
        console.log('The end!');
    }
}
handle();
// hoặc viết như sau cũng được với iife
(async() => {
    try {
        const value = await test();
        console.log(value);
    } catch (error) {
        console.warn(error);
    } finally {
        console.log('The end!');
    }
})()