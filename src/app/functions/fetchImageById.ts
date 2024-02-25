export const fetchImageById = async (id: number): Promise<string> => {
    console.log("fecthing image by id...");
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log("Fetched!");
      return data.sprites.front_default;
    })
    .catch(error => {
      console.log(error);
      return ""
    });
}