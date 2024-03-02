type GenerationCheckboxProps = {
    generation: number,
    setGeneration: (generation: number, include: boolean) => void,
}

const GenerationCheckbox = ({ generation, setGeneration }: GenerationCheckboxProps) => {

    const updateStateOnClick= (e: React.ChangeEvent<HTMLInputElement>): void => {
        setGeneration(generation, e.target.checked);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", minWidth: "125px", height: "50px", alignItems: "center" }}>
            <input type="checkbox" id={`gen-${generation}`} name={`gen-${generation}`} value={generation} onChange={updateStateOnClick} defaultChecked/>
            <label htmlFor={`gen-${generation}`}>{`Gen ${generation}`}</label>
        </div>
    )

}

export default GenerationCheckbox;