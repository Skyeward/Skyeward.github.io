import { transparentPixelsPerRowPerPokemon } from "../constants/transparentPixelsPerRowPerPokemon";

export const getRandomPixelRows = (id: number): number[] => {
    const transparentPixelsPerRow: number[] = transparentPixelsPerRowPerPokemon[id - 1];
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
    
    console.log(`For species ID ${id}, here are all row values:`);
    console.log(transparentPixelsPerRow);
    console.log(`For species ID ${id}, first visible row is ${firstRowWithColours}, last is ${lastRowWithColours}, thus last available starting row is ${lastAvailableStartRow}. Random starting row is ${startRow}.`);
    
    return [startRow, startRow + 1, startRow + 2, startRow + 3];
}