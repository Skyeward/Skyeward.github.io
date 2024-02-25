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
    }, [id])

    if (imageUrl === "")
    {
        return <>Loading...</>
    }

    return (<Image id="pokemon-image" src={imageUrl} alt="random pokemon" width={800} height={800} />)
};

export default PokemonImage;