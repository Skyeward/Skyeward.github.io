"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { getRandomSpeciesIds } from "./functions/getRandomSpeciesIds";
import PokemonImage from "./components/PokemonImage";


export default function Home() {
  const [randomSpeciesIds, setRandomSpeciesIds] = useState<number[]>([-1]);

  useEffect(() => {
    console.log("setting random species ids...");
    setRandomSpeciesIds(getRandomSpeciesIds(1, [2, 4]));
    console.log(`random ids set! ${randomSpeciesIds}`)
  }, [])
  
  return (
      <PokemonImage id={randomSpeciesIds[0]} />
  );
}
