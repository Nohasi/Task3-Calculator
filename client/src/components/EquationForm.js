// import Combobox from "react-widgets/Combobox"
import DropdownList from "react-widgets/DropdownList"
import {sendEquation} from "../services/sendEquation";
import NumberPicker from "react-widgets/NumberPicker"

export const EquationForm = ({number1, number2, operator, setNumber1, setNumber2, setOperator, setErrorMessage, setResult}) => {
    
    // let callModule = async (data) => {
    //     data.preventDefault();
    //     await sendEquation(number1, number2, operator, setErrorMessage, setResult);
    // }

    // Function that makes the API request on submit
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
            // If there is no error, display the result
            if (resJson.errorMessage == null){
                setErrorMessage("");
                setResult(resJson.result);
            }
            else { //else display the error
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
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 0 }}>
                    <div>
                        <NumberPicker 
                        value={number1}
                        onChange={e => {setNumber1(e)}}
                        />
                        {/* <input id="number1" type="text" value={number1} placeholder="Enter first number" onChange={(e)=> setNumber1(e.target.value)}/> */}
                    </div>
                    {/* DropdownList to select the operator */}
                    <div>
                        <DropdownList
                        value={operator}
                        onChange={e => setOperator(e)}
                        data={["+", "-", "*", "/"]}
                        filter={false}
                        />
                    </div>
                    <div>
                        {/* <input id="number2" type="text" value={number2} placeholder="Enter second number" onChange={(e)=> setNumber2(e.target.value)}/> */}
                        <NumberPicker 
                        value={number2}
                        onChange={e => {setNumber2(e)}}
                        />
                    </div>
                    <div>
                        <button type="submit">Calculate</button>
                    </div>
                </div>
            </form>
        </div>
    );
}