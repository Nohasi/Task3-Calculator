const setDisplayOutput = (result, errorMessage) => {
    // if there is no error, then a valid result exists
    if(errorMessage == ""){
        return [result, ""]
    }
    else { // if an error exists, then no valid result was returned
        return [`Error: ${errorMessage}`, 'blink'];
    }
}

module.exports = setDisplayOutput;