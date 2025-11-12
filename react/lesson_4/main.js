
console.log('Hello world');

// JSX Javascript XML
// nhớ thêm script bên html link tới babel nhen!!!

// mặc định với thẻ script sẽ có thẻ type là text/javascript
// nên muốn chạy ông babel gì đó thì chuyển thành text/babel
// xem bên thẻ html

const ul = <ul>
    <li>Javascript</li>
    <li>Java</li>
</ul>

ReactDOM.render(ul, document.querySelector('#root'));

// Ông babel chuyển tất cả những gì đang viết thành bên dưới:
// 'use strict';

// console.log('Hello world');

// // JSX Javascript XML
// // nhớ thêm script bên html link tới babel nhen!!!

// // mặc định với thẻ script sẽ có thẻ type là text/javascript
// // nên muốn chạy ông babel gì đó thì chuyển thành text/babel
// // xem bên thẻ html

// var ul = React.createElement(
//     'ul',
//     null,
//     React.createElement(
//         'li',
//         null,
//         'Javascript'
//     ),
//     React.createElement(
//         'li',
//         null,
//         'Java'
//     )
// );

// ReactDOM.render(ul, document.querySelector('#root'));
// //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInVsIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7O0FBQ0FBLFFBQVFDLEdBQVIsQ0FBWSxhQUFaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLEtBQUs7QUFBQTtBQUFBO0FBQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURPO0FBRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZPLENBQVg7O0FBS0FDLFNBQVNDLE1BQVQsQ0FBZ0JGLEVBQWhCLEVBQW9CRyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQXBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJyk7XHJcblxyXG4vLyBKU1ggSmF2YXNjcmlwdCBYTUxcclxuLy8gbmjhu5sgdGjDqm0gc2NyaXB0IGLDqm4gaHRtbCBsaW5rIHThu5tpIGJhYmVsIG5oZW4hISFcclxuXHJcbi8vIG3hurdjIMSR4buLbmggduG7m2kgdGjhursgc2NyaXB0IHPhur0gY8OzIHRo4bq7IHR5cGUgbMOgIHRleHQvamF2YXNjcmlwdFxyXG4vLyBuw6puIG114buRbiBjaOG6oXkgw7RuZyBiYWJlbCBnw6wgxJHDsyB0aMOsIGNodXnhu4NuIHRow6BuaCB0ZXh0L2JhYmVsXHJcbi8vIHhlbSBiw6puIHRo4bq7IGh0bWxcclxuXHJcbmNvbnN0IHVsID0gPHVsPlxyXG4gICAgPGxpPkphdmFzY3JpcHQ8L2xpPlxyXG4gICAgPGxpPkphdmE8L2xpPlxyXG48L3VsPlxyXG5cclxuUmVhY3RET00ucmVuZGVyKHVsLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKTsiXX0=