/* eslint-disable react/prop-types */
import "./pagination.css"
const Pagination = ({pagesNumber, handlePageClick, currentPage} ) => {
    
  return (
    <div className="pagination">
      {Array.from({ length: pagesNumber }, (_, i) =>
        <div key={i}>
          <a
            href="#"
            onClick={e => handlePageClick(e, i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </a>
        </div>
      )}
    </div>
  );
};

export default Pagination;
