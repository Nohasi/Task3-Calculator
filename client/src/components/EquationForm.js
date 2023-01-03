// import Combobox from "react-widgets/Combobox"
import DropdownList from "react-widgets/DropdownList"
import {sendEquation} from "../services/sendEquation";

export const EquationForm = ({number1, number2, operator, setNumber1, setNumber2, setOperator, setErrorMessage, setResult}) => {
    
    // const callModule = async(data) =>{
    //     sendEquation(number1, number2, operator, setErrorMessage, setResult);
    // }

    let sending = async (data) => {
        data.preventDefault();
        try{
            const response = await fetch('/calculator', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    number1: number1,
                    number2: number2,
                    operator: operator
                })
            });
            let resJson = await response.json();
            if (resJson.errorMessage == null){
                setErrorMessage("");
                setResult(resJson.result);
            }
            else {
                console.log('returned error?');
                setErrorMessage(resJson.errorMessage);
                setResult("");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{paddingBottom: '15px'}} className="Calc-row">
            <form onSubmit={sending}>
                <input id="number1" type="text" value={number1} placeholder="Enter first number" onChange={(e)=> setNumber1(e.target.value)}/>
                <DropdownList
                value={operator}
                onChange={e => setOperator(e)}
                data={["+", "-", "*", "/"]}
                filter={false}
                />
                <input id="number2" type="text" value={number2} placeholder="Enter second number" onChange={(e)=> setNumber2(e.target.value)}/>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}