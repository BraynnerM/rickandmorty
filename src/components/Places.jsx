import Pagination from "./Pagination.jsx";
import { getLocations } from "../services/RequestApi.jsx";
import { useEffect, useState } from "react";
import { PuffLoader } from 'react-spinners';
import "./Places.css";

const PlacesComponent = () => {
  const urlBase = "https://rickandmortyapi.com/api";
  const [places, setPlaces] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getLocations(urlBase, page);
          setTimeout( () => {            
            setPlaces(data.results);
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
      </>
      )}
    </section>
  );
};

export default PlacesComponent;
