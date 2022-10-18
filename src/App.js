import {useState} from 'react';
import "./AppTest.css";

function App () {
  // sytax
  // const [stateName,setter] = useState(default_value)
  // default_value : number , string, boolean, object array....
  const [x,setX] = useState(0); // completed declare state in react
  const [y,setY] = useState(1);
  const [name,setName] = useState("Sok Dara");
  const [arrName,setArrName] = useState(["Join","Jully","Som"])
  const [mynumber,setMynumber] = useState(0);

  function onClickBtn1(){
    // // alert(99)
    // var a = 10;
    // var b = 20;
    // var sum = a + b;
    // console.log("sum = "+sum)
    setX(1000000);
    setY(100);
    setName("KOKO")
    setArrName(["AA","BB","CC"])
  }

  function onClickDecrease(){
    setMynumber(mynumber-2)
  }

  function onClickIncrease(){
    setMynumber(mynumber+2)
    onClickBtn1();
  }

  return (
    <div>
      {/* <h1>value x = {x}</h1>
      <h1>value y = {y}</h1>
      <h1>value name = {name}</h1>
      {arrName.map((item,index)=>{
        return (
          <div>
            <h1>{item}</h1>
          </div>
        )
      })}
      <button onClick={onClickBtn1} className='btn'>Click</button> */}

      <div className='count-container'>
          <button onClick={onClickDecrease} className='btn'>-</button>
          <div className='txt-count'>{mynumber}</div>
          <button onClick={onClickIncrease} className='btn'>+</button>
      </div>

    </div>
  )
}

export default App;