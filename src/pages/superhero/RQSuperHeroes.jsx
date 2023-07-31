import { fetchSuperHero } from "../../api-hooks/superHero.js";
import { NavLink } from "react-router-dom";

export const RQSuperHeroes = () => {
  const onSuccess = () => {};
  const onError = () => {};
  const { isLoading, data, isError, error, refetch } = fetchSuperHero(
    onSuccess,
    onError
  );

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
        {/* <button onClick={refetch}>Click me</button> */}
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
