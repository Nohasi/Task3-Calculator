import { useState } from "react";
import { EquationForm } from "./EquationForm";
import { ResultDisplay } from "./ResultDisplay";

export const CalculatorPage = () => {
    // Setting states to alter the page dynamically
    let [number1, setNumber1] = useState("");
    let [number2, setNumber2] = useState("");
    let [operator, setOperator] = useState("+");
    let [errorMessage, setErrorMessage] = useState("");
    let [result, setResult] = useState("");

    return (
        <div className="App">
                <h1>Simple Calculator</h1>
                {/* State variables and setters sent as props */}
                <div>
                    <EquationForm
                        number1 = {number1}
                        number2  = {number2}
                        operator = {operator}
    
                        setNumber1 = {setNumber1}
                        setNumber2 = {setNumber2}
                        setOperator = {setOperator}
                        setErrorMessage = {setErrorMessage}
                        setResult = {setResult}
                    >
                    </EquationForm>
                </div>
                <div>
                    <ResultDisplay
                        result = {result}
                        errorMessage = {errorMessage}
                    >
                    </ResultDisplay>
                </div>
        </div>
    );
}