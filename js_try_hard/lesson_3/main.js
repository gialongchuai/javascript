// tính chất đưa khai báo lên trên đầu
// việc gọi hàm trước khi khởi tạo hàm
// hay việc return trước khi khởi tạo hàm 
// => hoàn toàn an toàn nhé
// lưu ý với let var
// nó chỉ khai báo mang lên thôi chứ không mang theo giá trị

// cũng hông biết nữa, khi nào gặp bug thì chatgpt

// hoisting 

const number = creatNumber();

console.log(number());

function creatNumber() {
    let cnt = 0;

    return increaseNumber;

    function increaseNumber() {
        cnt++;
        return cnt;
    }
}

// the same code below

function creatNumber_new() {
    let cnt_new = 0;
    
    function increaseNumber_new() {
        cnt_new++;
        return cnt_new;
    }

    return increaseNumber_new;
}

const number2_new = creatNumber_new();

console.log(number2_new());

