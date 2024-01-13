import Pagination from "./Pagination.jsx";
import { useEffect, useState } from "react";
import { getCharacters } from "../services/RequestApi.jsx";
import "./MainContent.css";

const MainContentComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [characters, setCharacters] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [showImage, setShowImage] = useState(false);
  const [imagePath, setImagePath] = useState("");

  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getCharacters(urlBase, page);
        setCharacters(data.results);
        setPagesNumber(data.info.pages);
        setCurrentPage(page);
        window.scrollTo({ top: 0 });
      };
      fetchData();
    },
    [page, urlBase]
  );

  const toggleImage = imagePath => {
    setImagePath(imagePath);
    setShowImage(!showImage);
  };

  const handlePageClick = (e, pageNumber) => {
    e.preventDefault();
    setPage(pageNumber);
  };

  return (
    <section className="main-content">
      <ul className="cards-list">
        {characters.map((character, index) =>
          <li
            className="card"
            key={index}
            onClick={() => toggleImage(character.image)}
          >
            <img src={character.image} alt="character-img" />
            <span>
              Name: {character.name}
            </span>
            <span>
              Episodes: {character.episode.length}
            </span>
            <span>
              Gender: {character.gender}
            </span>
            <span>
              Location: {character.location.name}
            </span>
            <span>
              Origin: {character.origin.name}
            </span>
            <span>
              Specie: {character.species}
            </span>
            <span>
              Status: {character.status}
            </span>
          </li>
        )}
        {showImage &&
          <div className="overlay" onClick={() => toggleImage("")}>
            <span className="close-btn" onClick={() => toggleImage("")} />
            <img src={imagePath} alt="Imagem em Tamanho Grande" />
          </div>}
      </ul>
      <Pagination
        pagesNumber={pagesNumber}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </section>
  );
};

export default MainContentComponent;
