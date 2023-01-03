const setDisplayOutput = (result, errorMessage) => {
    if(errorMessage == ""){
        return [result, ""]
    }
    else {
        return [errorMessage, 'blink'];
    }
}

module.exports = setDisplayOutput;