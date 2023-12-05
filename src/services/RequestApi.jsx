async function getCharacters(urlBase, page) {
  try {
    const response = await fetch(`${urlBase}/character?page=${page}`);
    const characters = await response.json();
    return characters.results;
  } catch (error) {
    console.error(error);
  }
}

async function getEpisodes(urlBase, page) {
  try {
    const response = await fetch(`${urlBase}/episode?page=${page}`);
    const episodes = await response.json();
    return episodes.results;
  } catch (error) {
    console.error(error);
  }
}

async function getLocations(urlBase, page) {
  try {
    const response = await fetch(`${urlBase}/location?page=${page}`);
    const locations = await response.json();
    return locations.results;
  } catch (error) {
    console.error(error);
  }
}

export { getCharacters, getEpisodes, getLocations };
