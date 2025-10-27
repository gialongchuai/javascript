
//preventDefault ; stopPropagation 

var aElements = document.querySelectorAll('a');
// console.log(aElements);

for(var i=0; i<aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(e.target.href.startsWith('https://fullstack.edu.vn/') === false) {
            e.preventDefault();
        }
    }
}

document.querySelector('ul').onclick = function(e) {
    console.log(e.target); // không kịp click do focus không còn thì display none -> mất ul
}

// nhờ có preventDefault ngăn chặn hành vi mặc định là display none mất thẻ
// var ulElement = document.querySelector('ul');
// console.log(ulElement);

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target);
// }


// mô phỏng vấn lại vấn nạn trên dùng js riêng chứ không code sự kiện onclick atrribute trong 1 element
var divElement = document.querySelector('.content');
console.log(divElement);

var butElement = document.querySelector('.button');
console.log(butElement);

divElement.onclick = function(e) {
    console.log('DIV');
}

butElement.onclick = function(e) { 
    // khi bấm vào button này thì CLICK ME hiển thị và sau đó nổi bọt ra div
    // ngăn chặn hiện tượng này thì dùng stopPropagation...
    e.stopPropagation(); // 
    console.log('CLICK ME!'); // 
}