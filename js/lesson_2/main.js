var idData = document.getElementById('heading');
console.log({
    ele: idData // {ele: p#heading}
});

console.log(idData); // p#heading

var dataFromClassName = document.getElementsByClassName("xin");

console.log(dataFromClassName); // HTMLCollection(3) [h1.xin, h1.xin, h1.xin]

var arr = document.querySelectorAll('.box .head');
console.log(arr); // NodeList(3) [h2.head, h2.head, h2.head]

var arr1 = document.querySelector('.box .head:first-child')

console.log(arr1); // <h2 class="head">a</h2>


var form_a = document.forms;

console.log(form_a);

// HTMLCollection(3) [form#form_1, form#form_2, form#form_3, form_1: form#form_1, form_2: form#form_2, form_3: form#form_3]


console.log(form_a[1]); // <form action="" id="form_2">Sang Su</form>

console.log(form_a['form_3']); // <form action="" id="form_3">Lao Cung</form>

console.log(document.anchors);

var x = document.querySelector('.box_2');
var con = x.getElementsByTagName('li');
console.log(con); // HTMLCollection(3) [li, li, li]