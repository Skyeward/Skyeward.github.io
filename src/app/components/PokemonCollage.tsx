import PokemonImage from "./PokemonImage";


type RandomIdsProps = {
    randomIds: number[],
}


const PokemonCollage = ({randomIds}: RandomIdsProps) => {
    return (<>
        {randomIds.map((id, index) => {return (<div key={index}><PokemonImage id={id}/></div>)})}
    </>)
}


export default PokemonCollage;