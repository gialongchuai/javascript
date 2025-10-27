// dom events 

// input ; select
// key up : key down -> tìm hiểu thêm nhé

var inputElementText = document.querySelector('input[type="text"]');

console.log(inputElementText); // <input type="text">

// lắng nghe sự kiện thay đổi khi nhập text và bấm ra ngoài (tức là ko focus vào ô text thì console log hiện ra)
inputElementText.onchange = function(e) {
    console.log(e.target.value);
}

// còn muốn gõ đến đâu ăn đến đó thì onchange -> oninput


var inputElementCheckbox = document.querySelector('input[type="checkbox"]');
console.log(inputElementCheckbox); // <input type="checkbox">

inputElementCheckbox.onchange = function(e) {
    console.log(e); // Event {isTrusted: true, type: 'change', target: input, currentTarget: input, eventPhase: 2, …}
    console.log(e.target); // <input type="checkbox">
    console.log(e.target.checked); // true or false while checking
}

var inputElementSelect = document.querySelector('select');
console.log(inputElementSelect); // 
/**
 * <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
 */

inputElementSelect.onchange = function(e) {
    console.log(e); // Event {isTrusted: true, type: 'change', target: select, currentTarget: select, eventPhase: 2, …}
    console.log(e.target); // giống dòng 26 tới 32
    console.log(e.target.value); // value1 value2 value3 : in ra value trong thẻ chứ không phải giá trị thẻ
}

// ví dụ: <option value="1">Javascript</option>
// trên web hiển thị là Javascript và người dùng nhấn vào, mình chỉ quan tâm và lấy là value 1 thôi ;))