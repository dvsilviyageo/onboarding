import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";

const Navigation = () => {
  // const userName = useContext(UserContext);
  const { userName, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    navigate("/");
    // change the user name to null
    setUserName("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="text-white"> Onboarding</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarItems"
          aria-controls="navbarItems"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarItems">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/detailedView">
                DETAILED VIEW
              </Link>
            </li>
          </ul>

          {/* <span className="navbar-text">
            Navbar text with an inline element
          </span> */}
          <span>
            <p className="text-white mt-3 me-2">{userName}</p>
          </span>
          <span>
            <button onClick={onLogOut}>LogOut</button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
