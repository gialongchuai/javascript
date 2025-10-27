/**
 * 1. DOM event (mấy bài trước) / Event Listener (bài này)
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local Storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best practices
 * 9. Mistakes
 * 10. Performance
 */

var btnElement = document.getElementById('btn');
console.log(btnElement); // <button id="btn">Click me!</button>

// bài trước dùng DOM events
// btnElement.onclick = function(e) {
//     console.log(Math.random());
// }

// Event Listener : onclick bây giờ chỉ còn click
btnElement.addEventListener('click', function(e) {
    console.log('Hi 1');
});
btnElement.addEventListener('click', function(e) {
    console.log('Hi 2');
});
btnElement.addEventListener('click', function(e) {
    console.log('Hi 3');
});     
// ông nào được add trước thì cout màn hình trước
/**
Hi 1
Hi 2
Hi 3
 */

var btn2Element = document.getElementById('btn2');
console.log(btn2Element); // <button id="btn2">Click me 2 !</button>

function cv1() {
    console.log('Hello world!');
}

function cv2() {
    console.log('Hello universe!');
}

btn2Element.addEventListener('click', cv1);
btn2Element.addEventListener('click', cv2);

// click trong 3s đầu ok nhưng sau 3s thì bị remove cv1 trông khi đó cv2 vẫn còn nguyên
setTimeout(function() {
    btn2Element.removeEventListener('click', cv1);
},3000);