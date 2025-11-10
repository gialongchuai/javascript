// bind

const $ = document.querySelector;

console.log(document.querySelector('#heading1')); // <div id="heading1">Heading ne</div>
// querySelector lúc này có gọi tới this, và this gọi tới document tìm 
// sau đó ở console log sẽ có thẻ heading1 như mong đợi

// nhưng đối với ông $ ta gọi như sau:
console.log($('#heading2')); // Uncaught TypeError: Illegal invocation at main5.js:10:13
// sẽ lỗi do lúc này sẽ gọi tới this mà lúc này this là window nên không phải document nên lỗi ngay
// phải tìm được ông document không ấy báo lỗi

// khắc phục giữ document bằng bind

const $$ = document.querySelector.bind(document);
console.log($$('#heading2')); // <div id="heading2">Heading ne</div>