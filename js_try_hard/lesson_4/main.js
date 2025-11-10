// THIS TẠO FUNC MỚI METHOD MỚI NÊN NGHĨ NHƯ NÓ GIỮ LẠI

console.log('Hello world!');

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => { // 1 cái iife để bảo mật các field không lộ ra ngoài, không mong muốn
    const cars = ['BMW', 'Honda'];
    const input = $('#input');
    const btn = $('#btn');
    const show = $('#show');

    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const htmls = cars.map((car, index) => { // map trả về 1 mảng những chiếc xe ta dùng join để tạo thành chuỗi thêm vào thẻ ul nhé
                return `<li>${car}
                <span class="delete" data-indexofcar="${index}">&times</span>
                </li>`
            }) // thêm nút x &times kèm index thực hiện chức năng xóa
            .join('');
            // console.log(htmls); // <li>BMW</li><li>Honda</li>
            show.innerHTML = htmls;
        },
        init() {
            this.add('Wave'); // the same app.add('Wave');
            // này là this mông đợi này

            const _this = this; // ông this ngoài này thì là app gọi tới ok
            // btn.onclick = function() {
            //     // trong này mà gọi this thì nó là btn bài cũ: nên phải nhờ _this giữ hộ
            //     // this btn là window nên lỗi ngay!!

            //     const nameCar = input.value; // tên xe người dùng nhập vào ô text
                
            //     // thêm vào mảng
            //     _this.add(nameCar);
            //     _this.render();

            //     input.value = '';
            //     input.focus();
            // }

            btn.onclick = () => { // nhớ lại bài cũ: arrow function không có context
                // nên nó lấy context bên ngoài là ông app như mông đợi luôn khỏi gán nhờ const _this = this chi cho mệt
                const nameCar = input.value;
                this.add(nameCar);
                this.render();

                input.value = '';
                input.focus();
            }
            // show.onclick = this.handleDelete; // delete thì ta lắng nghe nguyên thẻ ul vì nó luôn tồn tại
            show.onclick = this.handleDelete.bind(this); // delete thì ta lắng nghe nguyên thẻ ul vì nó luôn tồn tại
            // giữ bằng this hay app thì cũng là 1 chắc log hiêu mà 

            //NHƯNG NÊN DÙNG THIS KẺO APP THAY ĐỔI TÊN LÀ ĐÓI!!! THIS LUÔN ĐÚNG KHI THAY ĐỔI TÊN

            this.render(); // the same app.render(); này là this mông đợi này
        },
        handleDelete(e) {
            // console.log(this); // đây this là thẻ ul cơ // phải giữ bằng bind (this) thì nó mới là app

            // console.log(e); // PointerEvent
            // console.log(e.target); // ra từng thẻ, với cái dấu chấm của li hay tên car thì nó là li
            // còn nút x thì là thẻ span với id của mỗi chiếc xe đã được gán
            
            const eleSpan = e.target.closest('.delete'); // có thể span có nhiều class kiểm tra xem có phải class delete
            if(eleSpan) {
                const index = eleSpan.dataset.indexofcar;
                this.delete(index); // ăn ngay lỗi bởi vì handleDelete: function(e) {...} // thì nó là method ô cê gọi this lúc này sẽ là app
                // bắt buộc dòng show.onclick = this.handleDelete phải giữ this or app 
                this.render(); // nhớ render load lại nhen!!!
            } // nhưng có điều là bây giờ nó thông qua show.onclick cơ, nên this cha sẽ là show là thẻ ul
        }
    }
})()

app.render();
app.init(); // xử lý khi người dùng bấm vào btn thêm xe