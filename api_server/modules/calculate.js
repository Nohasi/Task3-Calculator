const calculate = (x1, x2, operator) => {
    // To ensure that strings would be converted to numbers
    let number1 = x1 * 1;
    let number2 = x2 * 1;

    // Switch-case to select the correct operator
    switch(operator){
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}

module.exports = calculate;