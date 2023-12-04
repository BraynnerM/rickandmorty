import {getCharacters, getEpisodes, getLocations} from '../services/requestapi'

const MainContent = () => {
    const urlBase = "https://rickandmortyapi.com/api";
    console.log(getCharacters(urlBase));
    console.log(getLocations(urlBase));
    console.log(getEpisodes(urlBase));
    return (
        <section>
            Conteudo
        </section>
    )
}

export {MainContent};