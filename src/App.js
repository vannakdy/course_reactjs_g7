
import { useState } from "react";
import "./AppTest.css";

function App(){
  const [arrSize,setArrSize] = useState([
    {
      id : 1,
      title : "S"
    },
    {
      id : 2,
      title : "M"
    },
    {
      id : 3,
      title : "L"
    },
    {
      id : 4,
      title : "XL"
    },
    {
      id : 5,
      title : "2XL"
    },
  ])
  const [sizeId,setSizeId] = useState(1);

  const [arrColor,setArrColor] = useState([
    {
      id : 1,
      title : "Black"
    },
    {
      id : 2,
      title : "Rel"
    },
    {
      id : 3,
      title : "Blue"
    },
    {
      id : 4,
      title : "Gray"
    },
    {
      id : 5,
      title : "White"
    },
  ])
  const [colorId,setColorId] = useState(1)

  const [arrBrand,setArrBrand] = useState([
    {
      id : 1,
      title : "ZARA"
    },
    {
      id : 2,
      title : "Routin"
    },
    {
      id : 3,
      title : "TE11"
    },
    {
      id : 4,
      title : "LV"
    },
    {
      id : 5,
      title : "361"
    },
  ])
  const [brandId,setBrandId] = useState(1)


  function onClickSize (id) {
    setSizeId(id)
  }

  function onClickColor (id) {
    setColorId(id)
  }

  function onClickBrand(id){
    setBrandId(id)
  }

  return (
    <div className="container">

      <div className="container-size">
        <div className="txtTitle">Size</div>
        <div className="row">
          {arrSize.map((item,index)=>{
            return (
              <div 
                key={index} 
                onClick={()=>onClickSize(item.id)} 
                className={item.id === sizeId ? "boxSizeColorActive" : "boxSizeColor"}
              >
                {item.title}
              </div>
            )
          })}
        </div>
      </div>


      <div className="container-size">
        <div className="txtTitle">Color</div>
        <div className="row">
          {arrColor.map((item,index)=>{
            return (
              <div 
                key={index} 
                onClick={()=>onClickColor(item.id)} 
                className={item.id === colorId ? "boxSizeColorActive" : "boxSizeColor"}
              >
                {item.title}
              </div>
            )
          })}
        </div>
      </div>

      <div className="container-size">
        <div className="txtTitle">Brand</div>
        <div className="row">
          {arrBrand.map((item,index)=>{
            return (
              <div 
                key={index} 
                onClick={()=>onClickBrand(item.id)} 
                className={item.id === brandId ? "boxSizeColorActive" : "boxSizeColor"}
              >
                {item.title}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App;