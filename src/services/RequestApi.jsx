async function getCharacters(urlBase) {
  try {
    const response = await fetch(`${urlBase}/character`);
    const characters = await response.json();
    return characters.results;
  } catch (error) {
    console.error(error);
  }
}

async function getEpisodes(urlBase) {
  try {
    const response = await fetch(`${urlBase}/episode`);
    const episodes = await response.json();
    return episodes.results;
  } catch (error) {
    console.error(error);
  }
}

async function getLocations(urlBase) {
  try {
    const response = await fetch(`${urlBase}/location`);
    const locations = await response.json();
    return locations.results;
  } catch (error) {
    console.error(error);
  }
}

export { getCharacters, getEpisodes, getLocations };
