import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = (page) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);
};

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);

  const { isError, data, isLoading, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>isLOADING MF</div>;
  }

  if (isError) {
    return <h1>Error {error.message}</h1>;
  }

  return (
    <div className="colors">
      {data?.data.map((color, index) => {
        return (
          <div className="color-item" key={index}>
            {color.label}
          </div>
        );
      })}
      <div className="btns">
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}>
          ----------previous-------
        </button>
        <h1>{pageNumber}</h1>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}>
          ----------next----------
        </button>
      </div>
    </div>
  );
};

export default Pagination;
