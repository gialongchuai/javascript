function Validator(formSelector) {
    var _this = this;
    
    var formRules = {};
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
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập ít nhất ${max} kí tự!`;
            }
        }
    }
    
    
    var formElement = document.querySelector(formSelector);

    formElement.onsubmit = function(event) {
        event.preventDefault();

        var isValid = false;
        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs) {
            if(handleValidate({target: input})) {
                isValid = true;
            }
        }
        if(isValid) {
            if(typeof _this.onSubmit === 'function') {
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
                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }

    if(formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');

        for(var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                var opRule = rule.includes(':');
                if(opRule) {
                    var ruleValues = rule.split(':');
                    rule = ruleValues[0];
                }

                var valueValidatorRules = validatorRules[rule];

                if(opRule) {
                    valueValidatorRules = valueValidatorRules(ruleValues[1]);
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(valueValidatorRules);
                } else {
                    formRules[input.name] = [valueValidatorRules];
                }
            }

            input.onblur = handleValidate;

            input.oninput = handleClearMessage;
        }
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
        var elementInput = event.target;
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