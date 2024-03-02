import GenerationCheckbox from "./GenerationCheckbox";
import { useState } from "react";

type GenerationInputComponentProps = {
    generateNewPuzzle: (numberOfPokemon: number, gensToInclude: boolean[]) => void
}

const GenerationInputComponent = ({generateNewPuzzle}: GenerationInputComponentProps) => {
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

    const onClickGenerateNewPuzzle = () => {
        console.log("Generating new puzzle and including generations: ");
        console.log(generationsToInclude);
        generateNewPuzzle(8, generationsToInclude);
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
            <button onClick={onClickGenerateNewPuzzle}>New puzzle!</button>
        </>
    );
}

export default GenerationInputComponent;