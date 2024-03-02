import Image from "next/image";
import { fetchImageById } from "../functions/fetchImageById";
import { getRandomPixelRows } from "../functions/getRandomPixelRows";
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

    const pixelRows: number[] = getRandomPixelRows(id);

    console.log(`For Pokemon ID ${id}, using pixel rows: ${pixelRows}`)
    const positionString = `100% ${pixelRows[0]*1.0869565217}%`

    return (<Image id="pokemon-image" src={imageUrl} alt="random pokemon" width={960} height={40} style={{
        imageRendering: "pixelated",
        objectFit: "cover",
        objectPosition: positionString,
        margin: "0px", 
        padding: "0px",
        display: "block",
    }}/>)
};


export default PokemonImage;