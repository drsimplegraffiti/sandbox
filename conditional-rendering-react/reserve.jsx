import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  //  TODO: Added mail
  const addMail = (evt) => {
    setEmail(evt.target.value);
    console.log(email);
  };

  const addPassword = (evt) => {
    setPassword(evt.target.value);
    console.log(password);
  };

  const data = {
    email: email,
    password: password,
  };

  //  use onSubmit: Form or onClick:button
  const baseUrl = "https://godanlogistics.herokuapp.com/user/auth/login";
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log(data);
      const response = await axios({
        method: "POST",
        url: baseUrl,
        data: data,
      });
      console.log(response);
      if (response.status === 202) {
        localStorage.setItem("token", response.data.data.token);
        navigate("/dashboard");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" placeholder="enter email" onChange={addMail} />
        <br />
        <label>password</label>
        <input
          type="text"
          placeholder="enter password"
          onChange={addPassword}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
