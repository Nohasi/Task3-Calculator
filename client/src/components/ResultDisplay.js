import setDisplayOutput from "../services/setDisplayOutput";

export const ResultDisplay = ({result, errorMessage}) => {
    console.log(`result: ${result}\nerrorMessage: ${errorMessage}`);
    let [outputString, className] = setDisplayOutput(result, errorMessage);
    console.log(`outputString: ${outputString}\nclassName: ${className}`);
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