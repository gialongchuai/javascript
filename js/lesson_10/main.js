function Validator(formSelector, options) {
    if(!options) {
        options = {};
    }
    var formRules = {
        // mong muốn như sau:
        // fullname: 'required',
        // email: 'required|email'

        // mong muốn tiếp:
        // fullname: [functions]
    };

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì return `error message`
     * - Nếu không có lỗi thì return `undefined`
     */
    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này!'
        },
        email: function(value) {
            var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regax.test(value) ? undefined : 'Trường này phải là email!'
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự!`;
            }
        },
        max: function(max) { // max là số 8
            return function(value) { // value nhập vào
                return value.length <= max ? undefined : `Vui lòng nhập ít nhất ${max} kí tự!`;
            }
        }
    }
    
    var formElement = document.querySelector(formSelector);

    formElement.onsubmit = function(event) {
        event.preventDefault();

        var isValid = false;
        var inputs = formElement.querySelectorAll('[name][rules]'); // nodelist
        for(var input of inputs) {
            if(handleValidate({target: input})) {
                isValid = true;
            }
        }
        if(isValid) {
            if(typeof options.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce(function(value, input) {
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

                    return value;
                }, {});
                options.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }

    // console.log(formElement); // chỉ xử lý nếu fomr tồn tại, nếu truyền không đúng id sẽ là null
    if(formElement) { // đã lấy đúng form đó -> tìm input trong fomr đó nên query từ formEle
        var inputs = formElement.querySelectorAll('[name][rules]'); // nodelist
        // console.log(inputs);

        for(var input of inputs) {
            // console.log(input.name); như mong đợi phần key rồi nè: fullname \n email \n password
            // console.log(input.getAttribute('rules')); // như mong đợi phần value rồi nè: required \n required|email \n required|min:6
        
            // đưa vào formRules
            // formRules[input.name] = input.getAttribute('rules');
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                // console.log(rule); // required email required min:6

                var opRule = rule.includes(':');
                if(opRule) { // kiểm tra nếu các rule tồn tại thêm giá trị ví dụ thay vì required thì min:8
                    var ruleValues = rule.split(':');
                    rule = ruleValues[0]; // gán lại ví dụ mảng gồm 2 phần từ [0]:min [1]:8
                }

                var valueValidatorRules = validatorRules[rule];
                // console.log(valueValidatorRules);

                if(opRule) { // nếu tồn tại trường hợp rule có điều kiện ví dụ min:8
                    // thay vì chỉ bằng 1 func nhưng ta đã config bên trong nó còn thêm 1 hàm nữa
                    // var valueValidatorRules = validatorRules[rule];

                    // nhưng đối với trường hợp này value nó là 1 func return 1 funce nên ta truyền số 8 vào
                    valueValidatorRules = valueValidatorRules(ruleValues[1]);
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(valueValidatorRules);
                } else {
                    // formRules[input.name] = valueValidatorRules; // viết như này là sai nhé, 
                    // đây là gán 1 phần tử trong mảng chỉ chứa 1 phần tử
                    // chứ không phải là gán phần tử đó chứa 1 cái mảng chứa nhiều phần tử

                    formRules[input.name] = [valueValidatorRules];
                }
            }

            // Lắng nghe các sự kiến (blur, change, ...)
            input.onblur = handleValidate; // valid khi người dùng bỏ focus

            input.oninput = handleClearMessage; // khi người dùng nhập lại phải clear mess error
        }
        // Kiểm tra formRules đúng nguyện vọng
        // console.log(formRules); // {fullname: 'required', email: 'required|email', password: 'required|min:6'}
        // for(var formRule in formRules) { // fullname required \n email required|email \n password required|min:6
        //     console.log(formRule + ' ' + formRules[formRule]);
        // }
    }

    function handleClearMessage(event) {
        var elementInput = event.target;
        var elementFormGroup = findFamily(elementInput, '.form-group');
        if(elementFormGroup.classList.contains('invalid')) {
            elementFormGroup.classList.remove('invalid');
        }
        var message = elementFormGroup.querySelector('.form-message');
        if(message) {
            message.innerHTML = '';
            elementFormGroup.classList.remove('invalid');
        }
    }

    function handleValidate(event) {
        var elementInput = event.target; // trả về cái thẻ input
        var rules = formRules[elementInput.name];
        
        var errorMessage;
        for(var rule of rules) {
            errorMessage = rule(elementInput.value);
            if(errorMessage) break;
        }

        var elementFormGroup = findFamily(elementInput, '.form-group');
        if(elementFormGroup) {
            var message = elementFormGroup.querySelector('.form-message');
            if(errorMessage) {
                message.innerHTML = errorMessage;
                elementFormGroup.classList.add('invalid');
            } else {
                message.innerHTML = '';
                elementFormGroup.classList.remove('invalid');
            }
        }
        return !errorMessage;
    }

    function findFamily(child, family) {
        while(child.parentElement) {
            if(child.parentElement.matches(family)) {
                return child.parentElement;
            }
            child = child.parentElement;
        } 
    }
}