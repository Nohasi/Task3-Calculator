import { useState } from "react";

export const CalculatorPage = () => {
    // Setting states to alter the page dynamically
    let [number1, setNumber1] = useState("");
    let [number2, setNumber2] = useState("");
    let [operator, setOperator] = useState("+");
    let [errorMessage, setErrorMessage] = useState("");
    return (
        <div className="App">
            <div className="row">

            </div>
        </div>
    );
}