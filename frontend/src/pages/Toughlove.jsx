import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import homeimg from '../images/home9.jpeg'
import motoimg from '../images/home4.jpeg'
export default function Toughlove() {
  return (
    <Container>
       <Navbar/>
       <div className="homecontain">
        <img src={homeimg} alt="" className='mainimg'/>
        <h3 className="motto">Tough Love</h3>
       </div>
        <p className="quoteline">WORK For YOU, Be FIT For YOU</p>
        <button className="getstart">Get Started</button>
       <div className="motivate">
           <p className='motopara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi facilis et. Similique unde itaque aspernatur quod aperiam molestiae. Dolore quisquam ducimus sunt error, suscipit commodi eum expedita amet id quasi temporibus, autem fugiat sequi!</p>
          <input type="text" id="search" placeholder="search for workout here"/>
           <img src={motoimg} alt="" srcset="" />
       </div>
       <div className="search">
       </div>
    </Container>
  )
};
const Container=styled.div`
    .homecontain{
      position:absolute;
      display:flex;
      border:10px solid #ff5100;
      padding:3%;
      /* padding-bottom:5%; */
    }
    .motto{
      font-size:10em;
      font-family:monospace;
      padding-left:5%;
      padding-top:5%;
      color:#eee8cd;
    }
    .mainimg{
      position:static;
    }
    .getstart{
      position:relative;
      z-index:1;
      padding:10px;
      border-radius:5px;
      border:0px;
      color:black;
      font-size:1em;
      font-weight:700;
      /* margin-top:25%; */
      margin-left:7%;
      cursor:pointer;
      font-family:'Courier New', Courier, monospace;
      background-color:#ff5100;
    }
    .quoteline{
      position:relative;
      z-index:1;
      margin-top:18%;
      margin-left:2%;
      font-size:3em;
      padding:3%;
      margin-right:60%;
      font-family:Arial, Helvetica, sans-serif;
      color:#e6e1c7ff;
    }
    .motivate{
      display:flex;
      position:absolute;
      z-index:1;
      margin-top:8%;
    }
    .motopara{
      padding:5%;
      margin-top:5%;
    }
    input[type='text']{
      /* margin-top:30%; */
      /*margin-left:5%; */
      display:block;
      padding:1%;
      border:0px;
      /* background-color:#eee8cd; */
      /* color:#ff5100; */
    }
`;