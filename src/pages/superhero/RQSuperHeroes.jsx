import { fetchSuperHero } from "../../api-hooks/superHero.js";

const RQSuperHeroes = () => {
  // sideEffects based on api call success or failed
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
        {/* //  when you wanna set api call based on click on btn  \\ */}
        {/* <button onClick={refetch}>click me</button> */}

        {/* // when you wanna set filter based on data specific key \\ */}
        {/* {data.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })} */}

        {data?.data.map((item, index) => {
          return <h2 key={index}>{item.name}</h2>;
        })}
      </div>
    </>
  );
};

export default RQSuperHeroes;
