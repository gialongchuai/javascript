function Validator(options) {
    var optionRules = {};
    
    function validate(inputEle, rule, message) {
        var errorMessage;
        
        var arrayRules = optionRules[rule.option];
        for(var i=0; i<arrayRules.length; i++) {
            switch(inputEle.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = arrayRules[i](formElement.querySelector(rule.option + ':checked'));
                    break;
                default:
                    errorMessage = arrayRules[i](inputEle.value);
            }
            if(errorMessage) break;
        }

        if(errorMessage) { 
            message.innerText = errorMessage;
            getParent(message,options.formGroup).classList.add('invalid');
        } else { 
            message.innerText = '';
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

    var formElement = document.querySelector(options.form);
    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var noError = true;
            options.rules.forEach(function(rule) {
                var inputEle = document.querySelector(rule.option);
                var message = getParent(inputEle, options.formGroup).querySelector(options.formMessage);
                var flag = validate(inputEle, rule, message);
                if(!flag) {
                    noError = false;
                }
            });

            if(noError) {
                if(typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    console.log(enableInputs);
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

        options.rules.forEach(function(rule) {
            if(Array.isArray(optionRules[rule.option])) {
                optionRules[rule.option].push(rule.test);
            } else {
                optionRules[rule.option] = [rule.test];
            }

            var inputEles = document.querySelectorAll(rule.option);
            Array.from(inputEles).forEach(function(inputEle) {
                var message = getParent(inputEle, '.form-group').querySelector('.form-message');
                if(inputEle) {
                    inputEle.onblur = function() { 
                        validate(inputEle, rule, message);
                    }

                    inputEle.oninput = function() {
                        message.innerText = '';
                        getParent(message,options.formGroup).classList.remove('invalid');
                    }
                }
            })
        });
    }
}

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
            return value === getValueConfirmed() ? undefined : messageNotif || 'Giá trị nhập vào không chính xác';
        }
    }
}