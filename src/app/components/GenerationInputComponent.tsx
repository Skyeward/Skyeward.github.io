import GenerationCheckbox from "./GenerationCheckbox";
import { useState } from "react";

const GenerationInputComponent = () => {
    const generations: number[] = [];
    const includeArray: boolean[] = [];
    for (let i = 1; i < 10; i++) {
        generations.push(i);
        includeArray.push(true);
    };
    const [generationsToInclude, setGenerationsToInclude] = useState(includeArray)

    const updateGenerationState = (generation: number, include: boolean) => 
    {
        const newIncludeArray = [...generationsToInclude];
        newIncludeArray[generation -1] = include;
        setGenerationsToInclude(newIncludeArray);
    }

    const generateNewPuzzle = () => {
        console.log("Generating new puzzle and including generations: ");
        console.log(generationsToInclude);
    }

    return (
        <>
            <h3>Which generations would you like to include?</h3>
            <div style={{ display: "flex", width: "400px", flexDirection: "row", flexWrap: "wrap" }}>
                {generations.map(gen => {
                    return (<div key={gen}>
                        <GenerationCheckbox generation={gen} setGeneration={updateGenerationState} />
                    </div>);
                })}
            </div>
            <button onClick={generateNewPuzzle}>New puzzle!</button>
        </>
    );
}

export default GenerationInputComponent;