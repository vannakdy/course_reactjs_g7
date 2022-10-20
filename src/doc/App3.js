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
  const [arrOption , setArrOption ] = useState([1,2,3,4,5,6,7,8,9,10,11,22])
  const [optionValue,setOptoinValue] = useState(1)

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
    setMynumber(mynumber-optionValue)
  }

  function onClickIncrease(){
    setMynumber(mynumber+optionValue)
    onClickBtn1();
  }

  function onClickChageOption(number){
    setOptoinValue(number)
  }

  var a = ( con1 ? (s1) : (con2 ? (st2) : (cond3 ? (s3) : (s4)) ))

  if(condition1){
    s1
  }else if(conditio2){
    s2
  }else if(condition3){
    s3
  }else{
    
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
      <h2>Option increase/decrease</h2>
      <h2>{optionValue}</h2>

      <div className='contain-item'>
        {arrOption.map((item,index)=>{
          return (
            <div onClick={()=>onClickChageOption(item)} className={item == optionValue ? "item-select-active" : "item-select"}>
              {item}
            </div>
          )
        })}
      </div>

      <div className='count-container'>
          <button onClick={onClickDecrease} className='btn'>-</button>
          <div className='txt-count'>{mynumber}</div>
          <button onClick={onClickIncrease} className='btn'>+</button>
      </div>

    </div>
  )
}

export default App;