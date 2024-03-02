const lastIdPerGen: number[] = [
    0, 151, 251, 386, 493, 649, 721, 809, 905, 1025
];


export const getRandomSpeciesIds = (idCount: number, gensIncluded: boolean[]): number[] => {
    console.log(`getting random species ids with count of ${idCount}, for gens ${gensIncluded}`);
    
    if (idCount < 1 || idCount > 32 || gensIncluded.length < 1)
    {
        console.log("bad arguments");
        return []; // some simple validation
    }

    const possibleIds: number[] = getPossibleIds(gensIncluded);
    return getRandomIdsFromPossibilities(idCount, possibleIds);
}


const getPossibleIds = (gensIncluded: boolean[]): number[] => {
    const possibleIds: number[] = [];
    
    for (let gen: number = 1; gen < lastIdPerGen.length; gen++)
    {
        if (!gensIncluded[gen - 1])
        {
            continue;
        }

        for (let id: number = lastIdPerGen[gen - 1]; id <= lastIdPerGen[gen]; id++)
        {
            possibleIds.push(id);
        }

        console.log(`after checking gen ${gen}, there are ${possibleIds.length} ids available`);
    }

    console.log(`possible ids: ${possibleIds}`);
    return possibleIds;
}


const getRandomIdsFromPossibilities = (idCount: number, possibleIds: number[]): number[] => {
    const randomIds: number[] = [];
    
    while (randomIds.length < idCount)
    {
        const randomIndex: number = Math.floor(Math.random() * possibleIds.length);
        randomIds.push(possibleIds[randomIndex]);
        console.log(`new randomId: ${possibleIds[randomIndex]}`);
        possibleIds.splice(randomIndex, 1);
    }

    console.log(`randomIds: ${randomIds}`);

    return randomIds;
}