
var Validator = (function() {

    var rules = {
        name: /^[A-Za-z\-'\s]+$/,
        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        date: /^\d{4}\-\d{2}\-\d{2}$/,
        // userName: document.getElementById('nameInput').value,
        // userEmail: document.getElementById('emailInput').value,
        // userDate: document.getElementById('arriveInput','departureInput').value,
    }

    return {
        validate: function(value, ruleName) {
            if (!rules.hasOwnProperty(ruleName)) {
                throw "Unknown validation rule: " + ruleName;
            } else if (rules[ruleName].test(value)) {
                return true;
            } else {
                return false;
            }
        },
    }
})();

// Validator.validate("nastya491@gmail.com", "email");
// var v = new Validator();
// console.log(v.validate(foo, bar))