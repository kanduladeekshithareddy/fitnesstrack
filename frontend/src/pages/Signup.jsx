import React, { useState } from "react";
import styled from "styled-components";
import Backimg from "../components/Backimg";
import axios from 'axios'
import {useNavigate} from "react-router-dom";


export default function Signup() {
  const [uname, setUname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [pnum, setPnum] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/signup',{uname,lname,email,pnum,pass})
    .then(result => {
      console.log(result);
      navigate('/signinfo');
    })
    .catch(err => console.log(err))
  }
  return (
    <Container>
      <Backimg />
      <div className="formcontainer">
        <form action="" className="inner-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="formlabel">
            First Name:
          </label>
          <input
            placeholder="Enter FirstName"
            name="uname"
            type="text"
            className="username"
            onChange={(e) => setUname(e.target.value)}
          />
          <label htmlFor="lastname" className="formlabel">
            Last Name:
          </label>
          <input
            placeholder="Enter LastName"
            name="lname"
            type="text"
            className="lname"
            onChange={(e) => setLname(e.target.value)}
          />
          <label htmlFor="email" className="formlabel">
            Email:
          </label>
          <input
            placeholder="Enter Email Address"
            name="email"
            type="email"
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phonenum" className="phonenum">
            Phone number:
          </label>
          <input
            placeholder="Enter phonenumber"
            name="pnum"
            type="text"
            className="phonenum"
            onChange={(e) => setPnum(e.target.value)}
          />
          <label htmlFor="password" className="formlabel">
            Password:
          </label>
          <input
            placeholder="Enter Password "
            name="pass"
            type="password"
            className="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <label htmlFor="password" className="formlabel">
            Confirm Password :
          </label>
          <input
            placeholder="Re enter same password"
            name="cpass"
            type="password"
            className="password"
          />
          <a href="/login">Already have an account?</a>
          <button className="Signup">Sign Up</button>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  body {
    overflow: hidden;
    color: white;
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
    width: 25vw;
  }
  input [type="text"] {
    color: beige;
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
