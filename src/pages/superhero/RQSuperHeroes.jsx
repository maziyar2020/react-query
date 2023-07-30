import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  // sideEffects based on api call success or failed
  const onSuccess = () => {};
  const onError = () => {};

  const { isLoading, data, isError, error, refetch } = useQuery(
    "super-heroes",
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      // // set cache timer
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount : true
      // refetchOnWindowFocus: true,
      // refetchInterval : 2000,
      // // api call with btn
      // enabled: false,
      // // set api callback for times of success or failed
      // onSuccess,
      // onError,
      // // filter for just name of data
      // select: (data) => {
      //   const superHeroName = data.data.map((hero) => hero.name);
      //   return superHeroName;
      // },
    }
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
