

import "./AnimalInfo.css"

const valuex = 100;
const product = [
    {
        name : "Women Jean",
        code : "120020",
        price : 12.33
    },
    {
        name : "Men Jean",
        code : "120020",
        price : 12.33
    },
    {
        name : "Girld Jean",
        code : "120020",
        price : 12.33
    }
]

function Template1(props){ 
        return (
            <div className="container-animal">
                <h1 style={{color:"red"}}>{props.name}</h1>
                <img className="animal" src={props.image} alt="imag" />
                <hr/>
                <p>{props.color} {props.age}</p>
                <p>Animals can be divided into five distinct groups: mammals, fish, birds, reptiles, and amphibians.</p>
                <a href="#">Details</a>
            </div>
        )
}

function Template2({name,image,color,age}){ 
    return (
        <div className="container-animal">
            <h1 style={{color:"black"}}>{name}</h1>
            <img className="animal" src={image} alt="imag" />
            <hr/>
            <p>{color} {age}</p>
            <p>Animals can be divided into five distinct groups: mammals, fish, birds, reptiles, and amphibians.</p>
            <a href="#">Details</a>
        </div>
    )
}

export  {
    Template1 ,
    Template2 ,
    valuex,
    product
};

// export default Template1