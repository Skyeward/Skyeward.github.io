"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { getRandomSpeciesIds } from "./functions/getRandomSpeciesIds";
import GenerationInputComponent from "./components/GenerationInputComponent";
import PokemonCollage from "./components/PokemonCollage";


export default function Home() {
  const [randomSpeciesIds, setRandomSpeciesIds] = useState<number[]>([-1]);

  useEffect(() => {
    console.log("setting random species ids...");
    setRandomSpeciesIds(getRandomSpeciesIds(2, [2, 4]));
    console.log(`random ids set! ${randomSpeciesIds}`)
  }, [])
  
  return (
    <>
      <GenerationInputComponent/>
      <PokemonCollage randomIds={randomSpeciesIds} />
    </>
  );
}
