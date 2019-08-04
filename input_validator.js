function inputValidator(value, ruleName) {

    var rules = {
        name: /^[A-Za-z\-'\s]+$/,
        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        date: /^\d{4}\-\d{2}\-\d{2}$/,
    }

    if (!rules.hasOwnProperty(ruleName)) {
        throw "Unknown validation rule: " + ruleName;
    } else if (rules[ruleName].test(value)) {
        return true;
    } else {
        return false;
    }
};

console.log(inputValidator("nastya", "name"))
