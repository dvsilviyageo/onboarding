import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({
  userName,
  setUserName,
}: {
  userName: string;
  setUserName: (userName: string) => void;
}) => {
  const [loginName, setLoginName] = useState("");

  const navigate = useNavigate();

  const onLogin = () => {
    setUserName(loginName);
    navigate("/home");
  };

  const onLoginChange = (e: any) => {
    setLoginName(e.target.value);
  };

  return (
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
        reprehenderit aliquam fugit suscipit fuga. Laudantium aperiam obcaecati
        consequatur, quas molestias itaque ea veniam labore quod officiis illum
        velit fuga quia!
      </p>
      {/* <React.Fragment>
        if(userName === '')
        { */}
      <div>
        <input
          className="align-self-center justify-self-center mt-5"
          onChange={onLoginChange}
        ></input>
        <button
          className="btn btn-primary ms-1"
          type="button"
          onClick={onLogin}
        >
          {/* <Link className="nav-link" to="/home"> */}
          Login
          {/* </Link> */}
        </button>
      </div>
      {/* } */}
      {/* else {<h2>Welcome {userName} !!!</h2>}
      </React.Fragment> */}
    </div>
  );
};

export default Login;
