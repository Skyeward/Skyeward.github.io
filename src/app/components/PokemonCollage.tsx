import PokemonImage from "./PokemonImage";


type RandomIdsProps = {
    randomIds: number[],
}


const PokemonCollage = ({randomIds}: RandomIdsProps) => {
    return (<>
        {randomIds.map(id => {return (<PokemonImage id={id}/>)})}
    </>)
}


export default PokemonCollage;