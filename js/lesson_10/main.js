function Validator(options) {

    //object với key value : key lưu option còn value là các rules
    var optionRules = {};
    
    function validate(inputEle, rule, message) {
        //var errorMessage = rule.test(inputEle.value);
        var errorMessage;
        
        // truy cập option trong object ở trên để lấy all rules của option
        var arrayRules = optionRules[rule.option];
        for(var i=0; i<arrayRules.length; i++) {
            switch(inputEle.type) {
                case 'radio':
                case 'checkbox': // nhưng đối với radio và checkbox thì truyền và kiểm tra cái checked
                    // errorMessage = arrayRules[i](formElement.querySelector(rule.option) + ':checked');
                    // trời ơi là trời truyền cái value mà viết nhầm dòng trên ngồi mò cả buổi
                    // như này này 
                    errorMessage = arrayRules[i](formElement.querySelector(rule.option + ':checked'));
                    break;
                default: // mặc định gọi tới test call back kiểm tra value của input nhập
                    errorMessage = arrayRules[i](inputEle.value); // hàm khá lạ so với dòng số 7
            }
            if(errorMessage) break; // nếu bắt gặp lỗi đầu tiên thì break luôn khỏi xét lỗi thứ 2
        }

        if(errorMessage) { 
            message.innerText = errorMessage;
            // console.log(message.parentElement); 
            getParent(message,options.formGroup).classList.add('invalid');
        } else { 
            message.innerText = '';
            // console.log(message.parentElement);
            getParent(message,options.formGroup).classList.remove('invalid');
        }

        return !errorMessage;
    }

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    // console.log(options); // {form: '#form-1', rules: Array(2)}
    var formElement = document.querySelector(options.form); // bên kia gán là form-1
    if(formElement) { // nếu có giá trị tức là tìm thấy form-1

        // xử lý với form cho nút Đăng kí
        formElement.onsubmit = function(e) {
            e.preventDefault(); // ngăn chặn không nhảy trang lỗi nữa khi click vào nút Đăng ký 

            var noError = true;

            // bên cạnh đó khi nhấn vào lặp qua từng rule rồi validate tất cả
            options.rules.forEach(function(rule) {
                var inputEle = document.querySelector(rule.option);

                // trường hợp getParent thành công khi thẻ cha vừa chạm 1 phát là đụng, tuy nhiên còn nhiều trường hợp thẻ lồng nên cần duyệt ra bên ngoài để chạm đến form_message nhé
                // var message = inputEle.parentElement.querySelector('.form-message');

                // 1 cái form-group ôm input và message,
                // ta phải từ input tìm lần ra thằng cha là form-group, từ form-group mới 
                // select lấy cái message, có thể đọc code ở trên, nên selector pải là form-group
                // var message = getParent(inputEle, '.form-group').querySelector('.form-message');
                // SỬA LẠI CODE MẤY CÁI KHÔNG FOCUS VÀO FORM, VÀ FOCUS VÀO FORM KHI NHẬP
                // SỬA THÀNH ví dụ: getParent(message,options.formGroup).classList.remove('invalid');
                // sửa all

                // không nên hard-code như trên lỡ tên sai thì khó fix, tạo thêm 1 key value có gì sửa bên html và bên này không cần sửa nữa
                var message = getParent(inputEle, options.formGroup).querySelector(options.formMessage);
                var flag = validate(inputEle, rule, message);
                if(!flag) {
                    noError = false;
                }
            });

            // if(noError) {
            //     console.log('Không có lỗi');
            // } else {
            //     console.log('Có lỗi');
            // }
            if(noError) { // check kiểm tra bắt buộc phải đúng hết thì cho onSubmit bên html thành chữ Son Dang -> thành all dữ liệu người dùng nhập qua các 'name'
                
                // Trường hợp có submit với javascript nhé, tức có khai báo bên html
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]'); // NodeList nên không hỗ trợ reduce
                    console.log(enableInputs);
                    /**
                     * NodeList(4) [input#fullname.form-control, input#email.form-control, input#password.form-control, input#password_confirmation.form-control]
                     */
                    var formValues = Array.from(enableInputs).reduce(function(value, input) {
                        // nếu có 1 trường không nhập '' thì nó sẽ lấy và không return vế sau value nữa
                        // do && tìm kiếm từ trái sang phải cái nào là false thì nó lụm
                        // nếu có 1 số trường không yêu cầu nhập mà return như vậy là cout chuỗi rỗng
                        // return (value[input.name] = input.value) && value;

                        switch(input.type) {
                            case 'checkbox':
                                if(!value[input.name]) {
                                    value[input.name] = [];
                                }
                                if(input.checked) {
                                    value[input.name].push(input.value);
                                }
                                break;
                            case 'radio':
                                if(input.checked) {
                                    value[input.name] = input.value; 
                                }
                                break;
                            case 'file':
                                value[input.name] = input.files;
                                break;
                            default:
                                value[input.name] = input.value; 
                        }

                        return value; // oke nếu ngdung ko nhập email: {fullname: '123', email: '', password: '123123', password_confirmation: '123123'}
                    }, {});

                    options.onSubmit(formValues); // options đó gọi tới onSubmit bên html mà bên đó tức là console.log(formValues);
                } else {
                    // xét trường hợp sẽ submit mặc định với trình duyệt
                    formElement.submit(); // This page isn't working
                }
            }
        }

        options.rules.forEach(function(rule) { // đi qua phần tử thứ 2, do form là phần tử 1 đi rồi, duyệt các rule 
            
            // Lưu lại các rules cho mỗi input
            // optionRules[rule.option] = rule.test; // here : gán cho optin tức
            // ví dụ : option : #fullName = cái hàm test(); coi code cuối cùng trang
            // console.log(rule.option);

            if(Array.isArray(optionRules[rule.option])) { // khi mà chưa ó gì thì nó là undefined
                optionRules[rule.option].push(rule.test); // đã từng tồn tại phần tử rồi nên chỉ cần push vào
            } else {
                optionRules[rule.option] = [rule.test]; // do lần nó là 1 object rỗng nên
            } // nó là undefined và ta tạo với option đó là 1 cái mảng để lần sau có thể push thêm rule vào

        

            // lấy nhiều thẻ chứ không còn 1 thẻ như trước nữa: ví dụ bây giờ nhiều thẻ gender
            // sau đó đi qua forEach để if từng cái
            var inputEles = document.querySelectorAll(rule.option); // VÍ DỤ 1 ÔNG LÀ #fullname VÀ #email THÌ ĐI QUA TỪNG RULE ĐỂ LẤY CÁI ELE ĐÓ RA

            // console.log(message); // <span class="form-message">Vui lòng nhập trường này!</span> : những thẻ span được viết sẵn để xuống dưới chèn message vào

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

            Array.from(inputEles).forEach(function(inputEle) {
                // với mỗi rule nó là 1 cái hàm bên dưới cùng code gồm có option và test (above)
                // var inputEle = document.querySelector(rule.option); // VÍ DỤ 1 ÔNG LÀ #fullname VÀ #email THÌ ĐI QUA TỪNG RULE ĐỂ LẤY CÁI ELE ĐÓ RA
                // console.log(inputEle);
                //<input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control"></input>
                //<input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control">
                // **** hoặc có thể cho nó 1 key value bên html: selector : 'form-message' và khi dùng tới chỉ cần chấm giống dòng rule.form
                //var message = inputEle.parentElement.querySelector('.form-message'); // có được ele của 2 input truy ra thằng cha là thẻ div to ở ngoài, xoNG TỪ THẺ DIV ĐÓ TRUY VÀO THẰNG MESSAGE
                
                // tượng tự như trên kia, get lần ra ngoài tìm cha hợp lệ
                var message = getParent(inputEle, '.form-group').querySelector('.form-message');
                if(inputEle) {
                    // season 2: thêm hàm validate : xử lý khi người dùng không còn focus vào form
                    inputEle.onblur = function() { 
                        validate(inputEle, rule, message);
                    }

                    // xử lý khi người dùng bắt đầu nhập mà vẫn còn thông báo lỗi (tức đang nhập cũng bị thông báo lỗi)
                    inputEle.oninput = function() {
                        message.innerText = '';
                        getParent(message,options.formGroup).classList.remove('invalid');
                    }
                }
            })
        });
        // console.log(optionRules);
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
            return value ? undefined : messageNotif || "Vui lòng nhập trường này!";
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