

const app = (function() { // rõ ràng là cars nằm trong iife đáng lẽ return về 
    const cars= []; // thì chỉ còn add edit get delete còn sống
     // còn cars mất nhưng do các method đó còn trỏ tới cars nên nó không bị dọn dẹp
    
    return { // IIFE trả về object chứa 3 func, chứ không trả về cars nên không thể 
        add(car) { // gán cars = null, tính PRIVATE kiểm soát nó
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        },
        get(index) {
            return cars[index];
        }
    }
})()

app.add('BMW');
console.log(app.get(0)); // BMW