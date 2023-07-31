import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const Paralel = () => {
  const { data: superHeroData } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friendsData } = useQuery("friends", fetchFriends);

  return (
    <div>
      <div className="paralel-item">
        {friendsData?.data.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};
