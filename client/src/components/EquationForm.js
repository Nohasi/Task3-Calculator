import Combobox from "react-widgets/Combobox"
import {sendEquation} from "../services/sendEquation";

export const EquationForm = ({number1, number2, operator, setNumber1, setNumber2, setOperator, setErrorMessage, setResult}) => {
    
    return (
        <div style={{paddingBottom: '15px'}} className="Calc-row">
            <form onSubmit={sendEquation(number1, number2, operator, setErrorMessage, setResult)}>
                <input id="number1" type="text" value={number1} placeholder="Enter first number" onChange={(e)=> setNumber1(e.target.value)}/>
                <Combobox 
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                data={["+", "-", "*", "/"]}
                />
                <input id="number2" type="text" value={number2} placeholder="Enter second number" onChange={(e)=> setNumber2(e.target.value)}/>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}