

function Validator(options) {
    console.log(options); // {form: '#form-1', rules: Array(2)}
    var formElement = document.querySelector(options.form); // bên kia gán là form-1
    if(formElement) { // nếu có giá trị tức là tìm thấy form-1
        options.rules.forEach(function(rule) { // đi qua phần tử thứ 2, do form là phần tử 1 đi rồi, duyệt các rule 
            var inputEle = document.querySelector(rule.option); // VÍ DỤ 1 ÔNG LÀ #fullname VÀ #email THÌ ĐI QUA TỪNG RULE ĐỂ LẤY CÁI ELE ĐÓ RA
            console.log(inputEle);
            //<input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control"></input>
            //<input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control">
            
            var message = inputEle.parentElement.querySelector('.form-message'); // có được ele của 2 input truy ra thằng cha là thẻ div to ở ngoài, xoNG TỪ THẺ DIV ĐÓ TRUY VÀO THẰNG MESSAGE
            console.log(message); // <span class="form-message">Vui lòng nhập trường này!</span> : những thẻ span được viết sẵn để xuống dưới chèn message vào

            // bỏ focus -> console log hiển thị
            if(inputEle) { // NẾU TÌM ĐƯỢC 2 ID LÀ EMAIL VỚI FULLNAME THÌ HĂNG LÀM -> kIỂM TRA NGƯỜI DÙNG CÓ NHẬP HAY KHÔN NHẬP INPUT THÔNG QUA BLUR
                inputEle.onblur = function() { // do thẻ input nên có inputEle.value : bài trước 
                    var errorMessage = rule.test(inputEle.value); // DO LÀ INPUT NÊN CÓ VALUE VÀ DO ĐÃ CONFIG SẴN HÀM Ở CODE TUỐT Ở DƯỚI ĐỂ TETS CÁI VALUE -> CALLBACK GỌI KÈM VALUE ĐỂ KIỂM TRA
                    // console.log(errorMessage);
                    if(errorMessage) { // Vui lòng .... 
                        message.innerText = errorMessage;
                        console.log(message.parentElement); // nó chính là cái form-group thêm 1 class invalid cho form nó đỏ
                        message.parentElement.classList.add('invalid');
                    } else { // undefined => '' remove cái class invalid nếu người dùng nhập lại do đã từng đỏ
                        message.innerText = '';
                        console.log(message.parentElement);
                        message.parentElement.classList.remove('invalid');
                    }
                }
            }
        });
    }
}

// Định nghĩa các rules
// Nguyên tắc các rules
// 1. khi có lỗi -> message lỗi
// 2. Không có lỗi thì ko trả gì (undefined)
Validator.isRequired = function(option) {
    return {
        option: option,
        test: function(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này!";
        }
    };
}
Validator.isEmail = function(option) {
    return {
        option: option,
        test: function(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này!";
        }
    }
}