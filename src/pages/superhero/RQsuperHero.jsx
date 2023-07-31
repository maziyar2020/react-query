import React from "react";
import { useParams } from "react-router-dom";
import { fetchSingleSuperHero } from "../../api-hooks/superHero";

const RQsuperHero = () => {
  const { id } = useParams();
  const { isError, isLoading, data, error } = fetchSingleSuperHero(id);

  console.log(data);
  if (isLoading) {
    return <h2>Page is loading...</h2>;
  }

  if (isError) {
    return <h2>error equired.{error.message}</h2>;
  }

  return <div>{id}</div>;
};

export default RQsuperHero;
