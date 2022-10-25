import { useState } from "react";
import "./AppTest.css";
import { BiArchive, BiBarcodeReader } from "react-icons/bi";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function App() {
  const [arrSize, setArrSize] = useState([
    {
      id: 1,
      title: "S",
    },
    {
      id: 2,
      title: "M",
    },
    {
      id: 3,
      title: "L",
    },
    {
      id: 4,
      title: "XL",
    },
    {
      id: 5,
      title: "2XL",
    },
  ]);
  const [sizeId, setSizeId] = useState(1);

  const [arrColor, setArrColor] = useState([
    {
      id: 1,
      title: "Black",
    },
    {
      id: 2,
      title: "Rel",
    },
    {
      id: 3,
      title: "Blue",
    },
    {
      id: 4,
      title: "Gray",
    },
    {
      id: 5,
      title: "White",
    },
  ]);
  const [colorId, setColorId] = useState(1);

  const [arrBrand, setArrBrand] = useState([
    {
      id: 1,
      title: "ZARA",
    },
    {
      id: 2,
      title: "Routin",
    },
    {
      id: 3,
      title: "TE11",
    },
    {
      id: 4,
      title: "LV",
    },
    {
      id: 5,
      title: "361",
    },
  ]);
  const [brandId, setBrandId] = useState(1);
  const [qty,setQty] = useState(1)
  const [price,setPrice] = useState(10)

  const [arrProduct,setArrProduct] = useState([])

  function onClickSize(id) {
    setSizeId(id);
  }

  function onClickColor(id) {
    setColorId(id);
  }

  function onClickBrand(id) {
    setBrandId(id);
  }

  function onClickMinu(){
    if(qty > 1){
      setQty(qty-1)
    }
  }

  function onClickPlus(){
    setQty(qty+1)
  }

  function onClickAddToBag(){
    var itemProduct = {
      pname : "Women Jen",
      code : "45679997",
      price : 10,
      size : "S",
      color : "Black",
      brand : "ZARA",
      qty : 2,
      total : 20
    }
    var arrTmp = [...arrProduct,itemProduct]; // concat item to array
    
    setArrProduct(arrTmp)
  }

  return (
    <div className="container">
      <div className="txtTitle">Women Jean</div>
      <div className="txtTitle">Code. 45679997</div>
      <div className="txtTitle">Price : {price}$</div>

      <div className="container-size">
        <div className="txtTitle">Size</div>
        <div className="row">
          {arrSize.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onClickSize(item.id)}
                className={
                  item.id === sizeId ? "boxSizeColorActive" : "boxSizeColor"
                }
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-size">
        <div className="txtTitle">Color</div>
        <div className="row">
          {arrColor.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onClickColor(item.id)}
                className={
                  item.id === colorId ? "boxSizeColorActive" : "boxSizeColor"
                }
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-size">
        <div className="txtTitle">Brand</div>
        <div className="row">
          {arrBrand.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onClickBrand(item.id)}
                className={
                  item.id === brandId ? "boxSizeColorActive" : "boxSizeColor"
                }
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="row containerQty">
        <div className="txtTitle">QTY</div>
        <button onClick={onClickMinu} className="btn">
          <AiFillMinusCircle />
        </button>
        <div className="txtQty">{qty}</div>
        <button onClick={onClickPlus} className="btn">
          <AiFillPlusCircle />
        </button>
      </div>
      
      <br/>
      <button onClick={onClickAddToBag} className="btn">
        <AiFillPlusCircle /> Add to Bag
      </button>

      {/* vannak */}
      <h1>List Cart ({arrProduct.length})</h1>
      {arrProduct.map((item,index)=>{
        return (
          <div className="listCart" key={index}>
            <div>
              <div>{item.pname}</div>
              <div>{item.code}</div>
              <div>{item.size} / {item.color} / {item.brand}</div>
            </div>
            <div style={{marginLeft: 20}}>
              <div>1 * {item.price}$</div>
              <div>{item.total}$</div>
            </div>
            
          </div>
        )
      })}

      {/* <div>
        <BiArchive
          style={{
            fontSize: 124,
            color: "blue",
            marginRight: 20,
          }}
        />
        <BiBarcodeReader
          style={{
            fontSize: 124,
            color: "blue",
            marginRight: 20,
          }}
        />
        <AiFillCloseCircle
          style={{
            fontSize: 124,
            color: "blue",
            marginRight: 20,
          }}
        />
      </div> */}
    </div>
  );
}

export default App;
