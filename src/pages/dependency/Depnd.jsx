import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCourseByChanellId = (chanellId) => {
  return axios.get(`http://localhost:4000/chanells/${chanellId}`);
};

export const Depnd = ({ email }) => {
  const { data: user } = useQuery(["fetch-user", email], () =>
    fetchUserByEmail(email)
  );

  const chanellId = user?.data.chanellId;

  useQuery(["courses", chanellId], () => fetchCourseByChanellId(chanellId), {
    enabled: !!chanellId,
  });

  return <div>{chanellId}</div>;
};
