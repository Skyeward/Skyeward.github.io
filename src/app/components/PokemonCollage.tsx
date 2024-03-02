import PokemonImage from "./PokemonImage";


type RandomIdsProps = {
    randomIds: number[],
}


const PokemonCollage = ({randomIds}: RandomIdsProps) => {
    return (<div style={{display: "flex", flexDirection: "column", padding: "0px", gap: 0}}>
        {randomIds.map((id, index) => {return (<div key={index}><PokemonImage id={id}/></div>)})}
    </div>)
}


export default PokemonCollage;