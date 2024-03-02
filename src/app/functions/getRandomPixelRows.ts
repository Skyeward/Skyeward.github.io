import { transparentPixelsPerRowPerPokemon } from "../constants/transparentPixelsPerRowPerPokemon.ts";

export const getRandomPixelRows = (id: number): number[] => {
    const transparentPixelsPerRow: number[] = transparentPixelsPerRowPerPokemon[id];
    let firstRowWithColours: number = 0;
    let lastRowWithColours: number = 0;

    for (let i: number = 0;; i++)
    {
        if (transparentPixelsPerRow[i] < 96)
        {
            firstRowWithColours = i;
            break;
        }
    }

    for (let i: number = 95;; i--)
    {
        if (transparentPixelsPerRow[i] < 96)
        {
            lastRowWithColours = i;
            break;
        }
    }

    const lastAvailableStartRow: number = lastRowWithColours - 3;
    const startRow: number = Math.floor(Math.random() * (lastAvailableStartRow - firstRowWithColours + 1) + firstRowWithColours);
    
    return [startRow, startRow + 1, startRow + 2, startRow + 3];
}