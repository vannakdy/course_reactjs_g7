import { useState } from "react";
import "./AppTest.css";
import { BiArchive, BiBarcodeReader } from "react-icons/bi";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {MdDelete} from "react-icons/md"
import {AiOutlineCloud} from "react-icons/ai"

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
      title: "Red",
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
  const [pname,setPname] = useState("Women Jean")
  const [code,setCode] = useState(45679997)

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

  function getOptionLabel(idSelected,arrOption){
    var name = ""
    for(var i = 0 ; i < arrOption.length ; i++){
      if(idSelected == arrOption[i].id){
        name = arrOption[i].title;
        break;
      }
    }
    return name;
  }

  function onClickAddToBag(){
    var size = getOptionLabel(sizeId,arrSize);
    var color = getOptionLabel(colorId,arrColor);
    var brand = getOptionLabel(brandId,arrBrand);
    var itemProduct = {
      pname : pname,
      code :code,
      price : price,
      size : size,
      color : color,
      brand : brand ,
      qty : qty,
      total : qty * price
    }
    var arrTmp = [...arrProduct,itemProduct]; // concat item to array
    
    setArrProduct(arrTmp)
  }

  function onClickRemove(item,index){
    // // way 1
    // var newItem = arrProduct 
    // newItem.splice(index,1)
    // way 2
    var newItem = arrProduct.filter((item,indexItem)=>indexItem != index) // way2
    setArrProduct([...newItem])
    alert("Remove success!")
  }

  return (
    <div className="container">
      <input 
        className="input"
        placeholder="Product Name"
        onChange={(e)=>setPname(e.target.value)}
      /><br/>
      <input 
        className="input"
        placeholder="Code"
        onChange={(e)=>setCode(e.target.value)}
      /><br/>
      <input 
        className="input"
        placeholder="Price"
        onChange={(e)=>setPrice(Number(e.target.value))}
      /><br/>
      {/* <div className="txtTitle">Women Jean</div>
      <div className="txtTitle">Code. 45679997</div>
      <div className="txtTitle">Price : {price}$</div> */}

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

      {arrProduct.length == 0 && 
        <div>
          <AiOutlineCloud style={{fontSize:22}} />
          <div>No Iitem</div>
        </div>
      }

      {arrProduct.map((item,index)=>{
        return (
          <div className="listCart" key={index}>
            <div>
              <div style={{fontSize:18,fontWeight:"bold",marginBottom:5}}>{item.pname}</div>
              <div>{item.code}</div>
              <div>{item.size} / {item.color} / {item.brand}</div>
            </div>
            <div style={{marginLeft: 20}}>
              <div>{item.qty} * {item.price}$</div>
              <div>{item.total}$</div>
            </div>

            <div style={{marginLeft: 20}}>
              <MdDelete onClick={()=>onClickRemove(item,index)} style={{fontSize:18,color:'brown'}}/>
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
