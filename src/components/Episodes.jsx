import Pagination from "./Pagination.jsx";
import { getEpisodes } from "../services/RequestApi.jsx";
import { useEffect, useState } from "react";
import "./Episodes.css";

const EpisodesComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [episodes, setEpisodes] = useState([]);
  const [pagesNumber, setPagesNumber] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
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
          <li className="card" id="episodes" key={index}>
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
      <Pagination
        pagesNumber={pagesNumber}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </section>
  );
};

export default EpisodesComponent;
