import { getCharacters } from "../services/requestapi";
//import React from "react";
import { useEffect, useState } from "react";
//import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import styled from 'styled-components';
import "./MainContent.css";
const MainContentComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [characters, setCharacters] = useState([]);
  const [pagesNumber, setPagesNumber] = useState([]);
  const [page, setPage] = useState(1);
  //const { id } = useParams();
  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getCharacters(urlBase, page);
        setCharacters(data.results);
        setPagesNumber(data.info.pages);
        window.scrollTo({ top: 0 });
      };
      fetchData();
    },
    [page]
  );

  const handlePageClick = (e, pageNumber) => {
    e.preventDefault();
    setPage(pageNumber);
  };

  return (
    <section className="main-content">
      <ul className="cards-list">
        {characters.map((character, index) =>
          <li className="card" key={index}>
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
      </ul>
      <div className="pagination">
        {Array.from({ length: pagesNumber }, (_, i) =>
          <div key={i}>
            <a href="#" onClick={e => handlePageClick(e, i + 1)}>
              {i + 1}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainContentComponent;
