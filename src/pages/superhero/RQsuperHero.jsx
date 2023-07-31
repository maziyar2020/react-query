import React from "react";
import { useParams } from "react-router-dom";

const RQsuperHero = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default RQsuperHero;
