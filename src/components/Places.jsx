import Pagination from "./Pagination.jsx";
import { getLocations } from "../services/RequestApi.jsx";
import { useEffect, useState } from "react";
import "./Places.css";

const PlacesComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [places, setPlaces] = useState([]);
  const [pagesNumber, setPagesNumber] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(
    () => {
      const fetchData = async () => {
        const data = await getLocations(urlBase, page);
        setPlaces(data.results);
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
        {places.map((place, index) =>
          <li className="card places" key={index}>
            <span>
              Name: {place.name}
            </span>
            <span>
              Type: {place.type}
            </span>
            <span>
              Dimension: {place.dimension}
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

export default PlacesComponent;
