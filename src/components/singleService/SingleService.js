import { useParams } from "react-router-dom";

import "./Single.css";
const SingleService = () => {
  let { userId } = useParams();

  return (
    <div id="center">
      <h1>Srevices- {userId}</h1>
    </div>
  );
};

export default SingleService;
