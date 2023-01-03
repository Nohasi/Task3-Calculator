const sendEquation = (number1, number2, operator, setErrorMessage, setResult) => {
    let sending = async (data) => {
        data.preventDefault();
        try{
            const response = await fetch('/calculate', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    number1: number1,
                    number2: number2,
                    operator: operator
                })
            });
            let resJson = await response.json();
            if (resJson.error == null){
                setErrorMessage("");
                setResult(resJson.result);
            }
            else {
                setErrorMessage(resJson.error);
                setResult("");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
} 

module.exports = sendEquation;
