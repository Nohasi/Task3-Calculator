import setDisplayOutput from "../services/setDisplayOutput";

export const ResultDisplay = ({result, errorMessage}) => {
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