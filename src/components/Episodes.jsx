//import React from 'react'
import { getEpisodes } from "../services/RequestApi.jsx";
import { useEffect, useState } from "react";
import "./Episodes.css";
const EpisodesComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [episodes, setEpisodes] = useState([]);
  const [pagesNumber, setPagesNumber] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  //const { id } = useParams();
  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getEpisodes(urlBase, page);
        setEpisodes(data.results);
        setPagesNumber(data.info.pages);
        setCurrentPage(page);
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
        {episodes.map((episode, index) =>
          <li className="card" id='episodes' key={index}>
            <span>
              Name: {episode.name}
            </span>
            <span>
              Episode: {episode.episode}
            </span>
            <span>
              Air date: {episode.air_date}
            </span>
          </li>
        )}
      </ul>
      <div className="pagination">
        {Array.from({ length: pagesNumber }, (_, i) =>
          <div key={i}>
            <a href="#" onClick={e => handlePageClick(e, i + 1)} 
            className={currentPage === i + 1 ? "active" : ""}>
              {i + 1}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default EpisodesComponent;
