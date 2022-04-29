import React, { useContext } from "react";
import { UserContext } from "./userContext";
import { userDetails } from "./mock-data";

const Home = () => {
  const { userName, setUserName } = useContext(UserContext);
  // const userName = useContext(UserContext);

  return (
    <div className="container mt-5 ms-2 vh-100 test">
      <h1> Welcome {userName}!...</h1>
    </div>
  );
};

export default Home;
