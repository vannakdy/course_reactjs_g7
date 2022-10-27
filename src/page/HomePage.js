import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function HomePage(){

    const navigate = useNavigate();
    const [number , setNumber] = useState(0)

    function onClickBtn(){
        navigate("/about")
        // window.location.href = "/about"
    }

    return (
        <div style={{padding : 30}}>
            <h1 onClick={()=>setNumber(number-1)}>-</h1>
            <h1>{number}</h1>
            <h1 onClick={()=>setNumber(number+1)}>+</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>

           
            <button onClick={onClickBtn} style={{color:'red'}}>About</button>
          

            <Link to="/login">
                <button style={{color:'red'}}>Click to login page</button>
            </Link>

            <a href="/login">
                <button>Click to login page</button>
            </a>

        </div>
    )
}

export default HomePage;