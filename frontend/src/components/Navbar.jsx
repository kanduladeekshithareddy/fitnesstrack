import React from 'react'
import styled from 'styled-components'
export default function Navbar() {
  return (
    <Container>
        <nav>
            <div class="navbar-container">
                <a href="#" class="navbar-brand">Tough Love</a>
                <ul class="navbar-links">
                    <li><a href="#">Workouts</a></li>
                    <li><a href="#">Nutrition</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                    {/* <li><a href="#">Signup</a></li> */}
                </ul>
            </div>
        </nav>
    </Container>
  )
}
const Container=styled.div`
    body{
        background-color: antiquewhite;
        margin: 0px;
    }

    .navbar-container{
        background-color: black;
        color:white;
        padding:2rem;
        margin:0px;
        width:100%;
    }
    .navbar-links{
        list-style-type: none;
        display:flex;
        align-items: center;
        justify-content: right;
        margin-right: 10%;
    }
    .navbar-brand{
        text-decoration: none;
        color:white;
        font-family:monospace;
        text-align: center;
        /* background-color: aqua; */
        /* margin:0.75rem; */
        display:inline-flex;
        padding: 5px;
        position:absolute;
        font-size: large;
        font-weight: 500;
        /* position:absolute; */
    }
    .navbar-links a{
        padding:1.5rem;
        text-decoration: none;
        color:white;
        /* border:solid pink; */
        padding-bottom: 1rem;
        /* border: */
        /* font-family: 'Courier New', Courier, monospace; */
        /* font-size: medium; */
    }
    .navbar-links a:hover{
        border-bottom: 3px solid #ff5100;
    }
`;
