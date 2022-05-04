import React, { useContext } from "react";
import { UserContext } from "./userContext";
import { userDetails } from "./mock-data";

const Home = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <div className="container-fluid mt-5 ms-2">
      <h1 className="text-center"> Welcome {userName}!...</h1>
      <img
        src="https://www.teacheracademy.eu/wp-content/uploads/2020/02/english-classroom.jpg"
        className="img-responsive rounded mx-auto d-block"
        alt="classroom image"
      ></img>
    </div>
  );
};

export default Home;
