

function validate(inputEle, rule, message) {
    var errorMessage = rule.test(inputEle.value);
    if(errorMessage) { 
        message.innerText = errorMessage;
        console.log(message.parentElement); 
        message.parentElement.classList.add('invalid');
    } else { 
        message.innerText = '';
        console.log(message.parentElement);
        message.parentElement.classList.remove('invalid');
    }
}

function Validator(options) {
    console.log(options); // {form: '#form-1', rules: Array(2)}
    var formElement = document.querySelector(options.form); // bên kia gán là form-1
    if(formElement) { // nếu có giá trị tức là tìm thấy form-1
        options.rules.forEach(function(rule) { // đi qua phần tử thứ 2, do form là phần tử 1 đi rồi, duyệt các rule 
            var inputEle = document.querySelector(rule.option); // VÍ DỤ 1 ÔNG LÀ #fullname VÀ #email THÌ ĐI QUA TỪNG RULE ĐỂ LẤY CÁI ELE ĐÓ RA
            console.log(inputEle);
            //<input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control"></input>
            //<input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control">
            
            // **** hoặc có thể cho nó 1 key value bên html: selector : 'form-message' và khi dùng tới chỉ cần chấm giống dòng rule.option
            var message = inputEle.parentElement.querySelector('.form-message'); // có được ele của 2 input truy ra thằng cha là thẻ div to ở ngoài, xoNG TỪ THẺ DIV ĐÓ TRUY VÀO THẰNG MESSAGE
            console.log(message); // <span class="form-message">Vui lòng nhập trường này!</span> : những thẻ span được viết sẵn để xuống dưới chèn message vào

            // bỏ focus -> console log hiển thị
            // if(inputEle) { // NẾU TÌM ĐƯỢC 2 ID LÀ EMAIL VỚI FULLNAME THÌ HĂNG LÀM -> kIỂM TRA NGƯỜI DÙNG CÓ NHẬP HAY KHÔN NHẬP INPUT THÔNG QUA BLUR
            //     inputEle.onblur = function() { // do thẻ input nên có inputEle.value : bài trước 
            //         var errorMessage = rule.test(inputEle.value); // DO LÀ INPUT NÊN CÓ VALUE VÀ DO ĐÃ CONFIG SẴN HÀM Ở CODE TUỐT Ở DƯỚI ĐỂ TETS CÁI VALUE -> CALLBACK GỌI KÈM VALUE ĐỂ KIỂM TRA
            //         // console.log(errorMessage);
            //         if(errorMessage) { // Vui lòng .... 
            //             message.innerText = errorMessage;
            //             console.log(message.parentElement); // nó chính là cái form-group thêm 1 class invalid cho form nó đỏ
            //             message.parentElement.classList.add('invalid');
            //         } else { // undefined => '' remove cái class invalid nếu người dùng nhập lại do đã từng đỏ
            //             message.innerText = '';
            //             console.log(message.parentElement);
            //             message.parentElement.classList.remove('invalid');
            //         }
            //     }
            // }

            if(inputEle) {

                // season 2: thêm hàm validate : xử lý khi người dùng không còn focus vào form
                inputEle.onblur = function() { 
                    validate(inputEle, rule, message);
                }

                // xử lý khi người dùng bắt đầu nhập mà vẫn còn thông báo lỗi (tức đang nhập cũng bị thông báo lỗi)
                inputEle.oninput = function() {
                    message.innerText = '';
                    message.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Định nghĩa các rules
// Nguyên tắc các rules
// 1. khi có lỗi -> message lỗi
// 2. Không có lỗi thì ko trả gì (undefined)
Validator.isRequired = function(option, messageNotif) {
    return {
        option: option,
        test: function(value) {
            return value.trim() ? undefined : messageNotif || "Vui lòng nhập trường này!";
        }
    };
}
Validator.isEmail = function(option, messageNotif) {
    return {
        option: option,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : messageNotif || 'Trường này phải là email!'
        }
    }
}

Validator.minLength = function(option, min, messageNotif) {
    return {
        option: option,
        test: function(value) {
            return value.length >= min ? undefined : messageNotif || `Vui lòng nhập tối tiểu ${min} kí tự!`;
        }
    }
}

Validator.isConfirmed = function(option, getValueConfirmed, messageNotif) {
    return {
        option: option,
        test: function(value) {

            // lưu ý quan trọng là isConfirmed là hàm vào gọi vào 2 tham số
            // option là id, hàm là giá trị nhập
            // nhưng để lấy giá trị đó phải callback ngược lại là getValueConfirmed() chứ không phải getValueConfirm : aida hơi bị lú lẫn  cái này quá
            return value === getValueConfirmed() ? undefined : messageNotif || 'Giá trị nhập vào không chính xác';
        }
    }
}