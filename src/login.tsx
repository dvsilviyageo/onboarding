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
    <div className="container mt-5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
        reprehenderit aliquam fugit suscipit fuga. Laudantium aperiam obcaecati
        consequatur, quas molestias itaque ea veniam labore quod officiis illum
        velit fuga quia!
      </p>

      <div>
        <input
          className="align-self-center justify-self-center mt-5 me-2"
          placeholder="Enter your name"
          onChange={onLoginChange}
        ></input>

        <button className="btn btn-dark ms-1" type="button" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
