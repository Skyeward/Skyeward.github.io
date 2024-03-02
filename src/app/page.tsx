"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { getRandomSpeciesIds } from "./functions/getRandomSpeciesIds";
import GenerationInputComponent from "./components/GenerationInputComponent";
import PokemonCollage from "./components/PokemonCollage";


export default function Home() {
  const [randomSpeciesIds, setRandomSpeciesIds] = useState<number[]>([-1]);

  const generateNewPuzzle = (numberOfPokemon: number, generationsToInclude: boolean[]) => {
    setRandomSpeciesIds(getRandomSpeciesIds(numberOfPokemon, generationsToInclude));
  } ;
  
  return (
    <>
      <GenerationInputComponent generateNewPuzzle={generateNewPuzzle}/>
      <PokemonCollage randomIds={randomSpeciesIds} />
    </>
  );
}
