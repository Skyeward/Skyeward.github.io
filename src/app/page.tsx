"use client"
import Image from "next/image";
import styles from "./page.module.css";
import PokemonImage from "./components/PokemonImage";

export default function Home() {
  return (
      <PokemonImage id={15} />
  );
}
