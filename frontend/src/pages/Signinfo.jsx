import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Backimg from '../components/Backimg'
export default function Signinfo() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
      if (weight && height) {
          let bmiValue = parseFloat(weight) / Math.pow(parseFloat(height), 2);
          setBMI(bmiValue.toFixed(2));
      } else {
          setBMI(null);
      }
  }, [weight, height]);

  const isBMIValid = () => {
      if (bmi) {
          // return bmi >= 18.5 && bmi <= 24.9;
          if (bmi<18.5){
            return -1
          }
          else if(bmi >= 18.5 && bmi <= 24.9){
            return 0;
          }
          else{
            return 1;
          }
      }
      return 2;
  };

  return (
    <Container>
      <Backimg/>
      <div className="formcontainer">
      <form action="" className="inner-form">
            <label className="formlabel">
                Weight (kg):
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder='in kg'
                />
            </label>
            <br />
            <label className="formlabel">
                Height (m):
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder='in meters'
                />
            </label>
            <br />
            {bmi && <p> BMI: {bmi}</p>}
            
            {(isBMIValid()==0) ? (
                <p>correct weight</p>
            ) : (isBMIValid()==1) ? (<p>overweight</p>) :
                ((isBMIValid()==2) ? (<p>To check BMI enter height and weight</p>):
                    (<p>Underweight</p>)
            )}
            <button >Let's Go</button>
            </form>
        </div>
    </Container>
  )
}
const Container=styled.div`
 body{
      overflow:hidden;
      color:white;
    }
    .formcontainer{
      /* background-color:red; */
      display:flex;
      align-items:center;
      justify-content:center;
      height:100vh;
      position: relative;
      color:white;
    }
    .inner-form{
      background-color:rgba(0,0,0,0.5);
      display:flex;
      border-radius:5px;
      flex-direction:column;
      padding:2rem;
    }
    .formlabel{
      /* color:black; */
      padding:0.2em;
      font-family:monospace;
      font-size:1rem;
    }
    input{
      border:0px;
      padding:5px;
      border-bottom:2px solid white;
      background-color:transparent;
      margin-bottom:5px;
      width:20vw;
    }
    input[type="number"] {
      color: beige; 
    }
    a{
      padding:1em;
      padding-left:0px;
      font-size:small;
      color:beige;
      text-decoration:none;
      font-family:'Courier New', Courier, monospace
    }
    p{
      padding:1em;
    }
    button{
      padding:0.5rem;
      background-color:#ff5100;
      border:0px;
      color:white;
      border-radius:5px;
      font-weight:700;
    }
`;
