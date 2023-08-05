import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

const InfinitQuery = () => {
  const {
    isLoading,
    error,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log();
  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>isLoading</div>;
  }

  return (
    <>
      {data?.pages.map((group, i) => {
        return group.data.map((item) => {
          return <div key={item.id}>{item.label}</div>;
        });
      })}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        load more
      </button>
      <div>{isFetching && !isFetchingNextPage ? "fetching ...." : null}</div>
    </>
  );
};

export default InfinitQuery;
