import { addSuperHeroData, fetchSuperHero } from "../../api-hooks/superHero.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./superheroes.css";

export const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [ego, setEgo] = useState("");

  const onSuccess = () => {};
  const onError = () => {};
  // usequery
  const { isLoading, data, isError, error } = fetchSuperHero(
    onSuccess,
    onError
  );
  // use mutation
  const { mutate: addHero } = addSuperHeroData();

  const handleAddHero = () => {
    const hero = { name, ego };
    addHero({ name: hero.name, alterEgo: hero.ego });
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        <h2>React query superHero page</h2>
        <div className="form">
          <label>name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>ego</label>
          <input
            type="text"
            value={ego}
            onChange={(e) => setEgo(e.target.value)}
          />
          <button onClick={handleAddHero}>Click me</button>
        </div>
        {data?.data.map((item, index) => {
          return (
            <div key={index}>
              <NavLink to={`/rq-superhero/${item.id}`}>{item.name}</NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};
