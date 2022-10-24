import {useState} from 'react';
import "./AppTest.css";

function App () {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  const [opSym,setOpSym] = useState("+")
  const [result,setResult] = useState(0)


  function onChageA(e){
    // console.log("a",e.target.value)
    setA(e.target.value)
    if(opSym == "+"){
      setResult(Number(e.target.value) + Number(b))
    }else if(opSym == "-"){
      setResult(Number(e.target.value) - Number(b))
    }else if(opSym == "*"){
      setResult(Number(e.target.value) * Number(b))
    }else if(opSym == "/"){
      setResult(Number(e.target.value) / Number(b))
    }
    
  }

  function onChageB(e){
    // console.log("b",e.target.value)
    setB(e.target.value)
    if(opSym == "+"){
      setResult(Number(a)  +  Number(e.target.value))
    }else if(opSym == "-"){
      setResult(Number(a)  -  Number(e.target.value))
    }else if(opSym == "*"){
      setResult(Number(a)  *  Number(e.target.value))
    }else if(opSym == "/"){
      setResult(Number(a)  /  Number(e.target.value))
    }
   
  }

  function onClickAdd(){
    // var sum = Number(a) + Number(b)
    setResult(Number(a) + Number(b));
    setOpSym("+")
  }

  function onClickSub(){
    var sub = Number(a) - Number(b)
    setResult(sub);
    setOpSym("-")
  }

  function onClickMul(){
    var mul = Number(a) * Number(b)
    setResult(mul);
    setOpSym("*")
  }

  function onClickDel(){
    var dev = Number(a) / Number(b)
    setResult(dev);
    setOpSym("/")
  }

  function onClickClear(){
    setA(0);
    setB(0);
    setResult(0);
  }

  return (
    <div className='content'>
        <h2>Demo state</h2>
        <input
          className='input'
          placeholder='Input Value A'
          value={a}
          onChange={onChageA}
        />
        <br/>
        <input
          value={b}
          className='input'
          placeholder='Input Value B'
          onChange={onChageB}
        />
        <h2>Result = {a} {opSym} {b} = {result}</h2>

        <div>
          <button onClick={onClickAdd} className='btn'>Add</button>
          <button onClick={onClickSub} className='btn'>Sub</button> <br/>
          <button onClick={onClickMul} className='btn'>Mul</button>
          <button onClick={onClickDel} className='btn'>Dev</button> <br/>
          <button onClick={onClickClear} className='btn'>Clear</button>
        </div>
    </div>
  )
}

export default App;