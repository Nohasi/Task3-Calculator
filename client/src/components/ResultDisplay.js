import setDisplayOutput from "../services/setDisplayOutput";

export const ResultDisplay = ({result, errorMessage}) => {
    // function call to determine whether to display the result or error message
    let [outputString, className] = setDisplayOutput(result, errorMessage);
    
    return (
        <div>
            <h2>Result = </h2>
            <div className={className}>
                <h3>
                    {outputString}
                </h3>
            </div>
        </div>
    );
}