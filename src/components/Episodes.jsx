import Pagination from "./Pagination.jsx";
import { getEpisodes } from "../services/RequestApi.jsx";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import "./Episodes.css";

const EpisodesComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [episodes, setEpisodes] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const data = await getEpisodes(urlBase, page);
          setTimeout(() => {
            setEpisodes(data.results);
            setPagesNumber(data.info.pages);
            setCurrentPage(page);
            setLoading(false);
            window.scrollTo({ top: 0 });
          }, 1000);
        } catch (error) {
          console.error("Erro ao obter dados da API:", error);
          setLoading(false);
        }
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
      {loading ? ( 
        <div className="loading-container">
          <PuffLoader color="#FFF" loading={loading} size={60} />
        </div>
      ) : (
        <>
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
      </>
      )}
    </section>
  );
};

export default EpisodesComponent;
