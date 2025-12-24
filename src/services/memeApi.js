export async function fetchMemes() {
    const response = await fetch("https://api.imgflip.com/get_memes");

    if(!response.ok) {
        throw new Error("Failed to fetch Memes");
    }
    const memejson = await response.json();

    const data = memejson.data.memes; // memes array.

    const cleanedMemes = data.map((meme) => (
        {
            id: meme.id,
            name: meme.name,
            url: meme.url
        }
    ))

    return cleanedMemes;
}
