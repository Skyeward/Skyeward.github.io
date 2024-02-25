import Image from "next/image";
import { fetchImageById } from "../functions/fetchImageById";
import { useEffect, useState } from "react";

type PokemonImageProps = {
    id: number,
}

const PokemonImage = ({id}: PokemonImageProps) => {
    const [imageUrl, setImageUrl] = useState("");

    function fetchImageWrapper (): void {
        console.log(`fetching image with id ${id}`);
        
        if (id > 0)
        {
            fetchImageById(id).then(url => {setImageUrl(url)});
        }
    };

    useEffect(() => {
        fetchImageWrapper();
    }, [])

    if (imageUrl === "")
    {
        return <>Loading...</>
    }

    return (<Image id="pokemon-image" src={imageUrl} alt="random pokemon" width={100} height={100} />)
};

export default PokemonImage;