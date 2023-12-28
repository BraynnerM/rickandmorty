import { getCharacters } from "../services/requestapi";
//import React from "react";
import { useEffect, useState } from "react";
//import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import styled from 'styled-components';

const MainContentComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  //const { id } = useParams();
  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getCharacters(urlBase, page);
        setCharacters(data);
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
    <section>
      <ul>
        {characters.map((character, index) =>
          <li key={index}>
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
        <a href="" onClick={e => handlePageClick(e, 1)}>
          1
        </a>
        <a href="" onClick={e => handlePageClick(e, 2)}>
          2
        </a>
        <a href="" onClick={e => handlePageClick(e, 3)}>
          3
        </a>
      </div>
    </section>
  );
};

export default MainContentComponent;
