import React, { useState } from "react";
import styled from "styled-components";
import Backimg from "../components/Backimg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/login',{email,pass})
    .then(result => {
      console.log(result);
      if (result.data ==="success"){
        navigate('/');
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <Container>
      <Backimg />
      <div className="formcontainer">
        <form action="" className="inner-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="formlabel">
            Email:
          </label>
          <input
            name="email"
            type="text"
            className="username"
            placeholder="Enter Email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label htmlFor="password" className="formlabel">
            Password:
          </label>
          <input
            name="pass"
            type="password"
            className="password"
            placeholder="Enter Password"
            onChange={(e)=>{setPass(e.target.value)}}
          />
          <a href="/signup">Don't have an account?</a>
          <button className="login">Login</button>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  body {
    overflow: hidden;
  }
  .formcontainer {
    /* background-color:red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    color: white;
  }
  .inner-form {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    padding: 2rem;
  }
  .formlabel {
    /* color:black; */
    padding: 0.2em;
    font-family: monospace;
    font-size: 1rem;
  }
  input {
    border: 0px;
    padding: 5px;
    border-bottom: 2px solid white;
    background-color: transparent;
    margin-bottom: 5px;
    width: 20vw;
  }
  a {
    padding: 1em;
    padding-left: 0px;
    font-size: small;
    color: beige;
    text-decoration: none;
    font-family: "Courier New", Courier, monospace;
  }
  button {
    padding: 0.5rem;
    background-color: #ff5100;
    border: 0px;
    color: white;
    border-radius: 5px;
    font-weight: 700;
  }
`;
