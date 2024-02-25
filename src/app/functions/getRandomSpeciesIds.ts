const lastIdPerGen: number[] = [
    0, 151, 251, 386, 493, 649, 721, 809, 905, 1025
];


export const getRandomSpeciesIds = (idCount: number, gensIncluded: number[]): number[] => {
    if (idCount < 1 || idCount > 32 || gensIncluded.length < 1)
    {
        return []; // some simple validation
    }

    const possibleIds: number[] = getPossibleIds(gensIncluded);
    return getRandomIdsFromPossibilities(idCount, possibleIds);
}


const getPossibleIds = (gensIncluded: number[]): number[] => {
    const possibleIds: number[] = [];
    
    for (let gen: number = 1; gen < lastIdPerGen.length; gen++)
    {
        if (!gensIncluded.includes(gen))
        {
            continue;
        }

        for (let id: number = lastIdPerGen[gen - 1]; id <= lastIdPerGen[gen]; id++)
        {
            possibleIds.push(id);
        }
    }

    return possibleIds;
}


const getRandomIdsFromPossibilities = (idCount: number, possibleIds: number[]): number[] => {
    const randomIds: number[] = [];
    
    while (randomIds.length < idCount)
    {
        const randomIndex: number = Math.floor(Math.random() * possibleIds.length);
        randomIds.push(possibleIds[randomIndex]);
        possibleIds.splice(randomIndex, 1);
    }

    return randomIds;
}