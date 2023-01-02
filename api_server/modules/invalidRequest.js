const invalidRequest = (req, res) => {

    // To catch if an entered value is empty
    if(String(req.body.number1).replace(/\s+/g, "").length == 0){
        return 'No value entered for number 1';
    }
    if(String(req.body.number2).replace(/\s+/g, "").length == 0){
        return 'No value entered for number 2';
    }
    if(String(req.body.operator).replace(/\s+/g, "").length == 0){
        return 'No value entered for operator';
    }

    // To ensure a number is sent in numbers 1 and 2
    if(isNaN(req.body.number1)){
        return "Invalid value entered for number 1";
    }
    if(isNaN(req.body.number2)){
        return "Invalid value entered for number 2";
    }

    // If length is 1 and correct operator is passed, value is valid
    if(req.body.operator.length != 1 || !/\+|\-|\/|\*/g.test(req.body.operator)){
        return "Invalid operator passed";
    }

    // So that dividing by 0 is not allowed
    if(req.body.operator === '/' && req.body.number2*1 == 0){
        return "Attempting to divide by 0"
    }

    return null;
}

module.exports = invalidRequest;