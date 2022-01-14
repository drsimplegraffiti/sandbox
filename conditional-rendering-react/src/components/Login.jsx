import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email Handler
  const addMail = (evt) => {
    setEmail(evt.target.value);
    console.log(email);
  };

  // Password Handler
  const addPassword = (evt) => {
    setPassword(evt.target.value);
    console.log(password);
  };

  // match data
  const data = {
    email: email,
    password: password,
  };

  const baseUrl = "https://godanlogistics.herokuapp.com/user/auth/login";
  //  use onSubmit: Form or onClick:button
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: baseUrl,
        data: data,
      });

      console.log(response);
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
