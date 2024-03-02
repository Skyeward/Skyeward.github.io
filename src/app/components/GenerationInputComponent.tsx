const GenerationInputComponent = () => {
    const generations: number[] = [];
    for (let i = 1; i < 10; i++) {
        generations.push(i);
    };
    return (
        <>
            <h3>Which generations would you like to include?</h3>
            <div style={{display: "flex", width: "400px", flexDirection: "row", flexWrap: "wrap"}}>
                {generations.map(gen => {
                    return (<div key={gen} style={{ display: "flex", flexDirection: "row", minWidth: "125px", height: "50px", alignItems: "center"}}>
                        <input type="checkbox" id={`gen-${gen}`} name={`gen-${gen}`} value={gen} checked={true} />
                        <label htmlFor={`gen-${gen}`}>{`Gen ${gen}`}</label>
                    </div>);
                })}
            </div>
        </>
    );
}

export default GenerationInputComponent;