import "./AppTest.css"

function App() {
  // ... block variable, function ...
  // const var let
  
  var x = 200;
  var y = 100;
  var sum = x + y;
  var sub = x - y;
  var name = "sok";
  var price = 10.20;
  var name1 = name+100;
  var status = true;
  var arrNumber = [12,4,5,6,7,5,6,7,100,45,34,400];
  var arrName = ["sok","som","so","sa","messi","ronaldo"];

  var obj2 = {
    "x" : 10,
    y : 20,
    z : 30,
    obj3 : {
      a1 : 1,
      a2 : 2,
      dara : {
        x1 : 2,
        x2 : 8888
      }
    }
  }
  obj2.a = 100; // create new create
  obj2["a"] = 100 //

  obj2.x = 1000;

  var person = {
    id : 101,
    "name" : 'sok',
    "gender" : "male",
    "tel"   : "09999999",
    salary : 888.99,
    statu : false,
    email : ["sok1@gmail.com","sok2@gmail.com"],
    photo : {
      image1 : "https://nit/image/1.png",
      image2 : "https://nit/image/1.png",
      image3 : "https://nit/image/1.png",
    }
  } // id name  gender = properties or key , person = object

  var arrPerson = [
    {
      "id" : 101,
      "name" : 'sok',
      "gender" : "male",
      "tel"   : "09999999",
      "image" : "https://zandokh.com/image/cache/catalog/products/2022-10/2222209071/IMG_0373-cr-450x672.jpg"
    },
    {
      "id" : 102,
      "name" : 'some',
      "gender" : "male",
      "tel"   : "08888888",
      "image" : "https://zandokh.com/image/cache/catalog/products/2022-10/2222209070/Floral-Jumpsuit%20(5)-cr-450x672.jpg"
    },
    {
      "id" : 102,
      "name" : 'join',
      "gender" : "male",
      "tel"   : "08888888",
      "image" : "https://zandokh.com/image/cache/catalog/products/2022-10/2222209070/Floral-Jumpsuit%20(5)-cr-450x672.jpg"
    },
    {
      "id" : 102,
      "name" : 'Messi',
      "gender" : "male",
      "tel"   : "08888888",
      "image" : "https://zandokh.com/image/cache/catalog/products/2022-09/4122208002/Routine/LBL/Textured-Polo%20Shirt%20(41)-cr-450x672.jpg"
    }
  ]

  

  return (
    <div style={{paddingLeft : 20}}>
      <h1>x = {x}</h1>
      <h1>y = {y}</h1>
      <h1>sum = {x+y}</h1>
      <h1>sum = {sum}</h1>
      <h1>sub = {sub}</h1>
      <h1>name = {name}</h1>
      <h1>price = {price}</h1>
      <h1>name1 = {name1}</h1>
      <h1>type x = {typeof(arrNumber)}</h1>
      <h1>length arrNumber = {arrNumber.length}</h1>
      <h1>arrNumber[0] = {arrNumber[0]}</h1>
      <h1>arrNumber[1] = {arrNumber[1]}</h1>
      <h1>arrNumber[1] = {arrNumber[arrNumber.length - 1]}</h1>

      <h1>{obj2.x}</h1>
      <h1>{obj2.y}</h1>
      <h1>{obj2.z+""}</h1>
      <h1>{obj2["x"]}</h1>
      <h1>{obj2["a"]}</h1>
      <h1>{obj2['a']}</h1>
      <h1>Person info : {person.id} {person.name} {person.gender} {person.tel} {person.email[0]} {person.email[1]}</h1>
      <h1>{person.photo.image1}</h1>
      <h1>{person.photo.image2}</h1>
      <h1>{person.photo.image3}</h1>
      <h1>{obj2.obj3.dara.x2}</h1>

      <h1>{arrPerson[1].id}</h1>
      <h1>{arrPerson[1].name}</h1>
      <h1>{arrPerson[1].gender}</h1>
      <h1>{arrPerson[1].tel}</h1>

      <div>==== List data from array=== </div>

      {arrName.map((item,index)=>{
        return (
          <div className="arr-name">
            <div style={{fontSize:22,color:'white',padding:10,marginTop:10}}>{index+1}. {item}</div>
          </div>
        )
      })}
      <br/>
      {arrNumber.map((item,index)=>{
        return (
          <div className="arr-name">
            <div>{item}</div>
          </div>
        )
      })}

      <h1>List Person</h1>
      {arrPerson.map((item,index)=>{
        return (
          <div style={{
            padding:10,
            borderBottom:"1px solid gray",
            display:'flex'
          }}>
            <div>
              <img
                src={item.image}
                width={60}
              />
            </div>
            
            <div style={{paddingLeft:20}}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.gender}</div>
              <div>{item.tel}</div>
            </div>
            
          </div>
        )
      })}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Tel</th>
          </tr>
        </thead>
        <tbody>
          {arrPerson.map((item,index)=>{
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.tel}</td>
              </tr>
            )
          })}
        </tbody>
        
      </table>

    </div>
  )
}

export default App;





// // Home 
// Modify in App.js

// ថែម ៖ div,p, h1 -> h6, button, input, table li, image 