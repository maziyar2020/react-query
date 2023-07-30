import { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>SuperHero page</h2>
      {data.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </>
  );
};

export default SuperHeroes;
