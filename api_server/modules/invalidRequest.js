const invalidRequest = (req, res) => {

    // To catch if an entered value is empty
    if(req.body.number1.length === 0){
        return 'No value entered for number 1';
    }
    if(req.body.number2.length === 0){
        return 'No value entered for number 2';
    }
    if(req.body.operator.length === 0){
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

    return null;
}

module.exports = invalidRequest;