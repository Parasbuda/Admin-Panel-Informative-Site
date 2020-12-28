import React from "react";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  handleClick,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={() => handleClick("previous")}>
            Previous
          </button>
        </li>
        {pageNumbers.map((number, i) => (
          <li
            className={`page-item ${i + 1 === currentPage ? "active" : null}`}
            key={number}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button className="page-link" onClick={() => handleClick("next")}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

