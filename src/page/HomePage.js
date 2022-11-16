import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import {Template1} from "../components/Animal/AnimalInfo"
import { Button,Table,Modal } from 'react-bootstrap';
import axios from 'axios'

function HomePage(){



    const navigate = useNavigate();
    const [visibel,setVisible] = useState(false);
    const [number , setNumber] = useState(0)
    const [arrAnimal,setArrAnimal] = useState([
        {
            name : "Pig",
            color : "Red",
            age : 12,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2M346rnNl-r3kzYahiRZlZZin6PzYvxQ8A&usqp=CAU"

        },
        {
            name : "Cat",
            color : "White",
            age : 14,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnue2c08l9I7rxort9vJTAdHEp0bp3XO04A&usqp=CAU"
        },
        {
            name : "Tiger",
            color : "Ted",
            age : 16,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2M346rnNl-r3kzYahiRZlZZin6PzYvxQ8A&usqp=CAU"
        },
        {
            name : "Caw",
            color : "White",
            age : 26,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2M346rnNl-r3kzYahiRZlZZin6PzYvxQ8A&usqp=CAU"
        }
    ]);

    const [list,setList]  = useState([]);

    useEffect(()=>{
        // fetch()
        axios("http://localhost:8080/api/student",{
            method : "GET",
            data : {

            },
            headers : {}
        }).then(res=>{
            var data = res.data;
            console.log(data)
            setList(data.list)

        })

    },[])

    function onClickBtn(){
        navigate("/about")
        // window.location.href = "/about"
    }

    function handleClose(){
        setVisible(false)
    }

    function handleShow(){
        setVisible(true)
    }



    return (
        <div style={{padding : 30}}>
            <h1>total student = {list.length}</h1>
            {list.map((item,index)=>{
                return (
                    <p>
                        <div>{item.firstname} - {item.lastname}</div>
                        <div>{item.tel}</div>
                        <div>{item.email}</div>
                    </p>
                )
            })}
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
            </> 

            <Button variant="primary" onClick={handleShow}>
            Launch demo modal
            </Button>

            <Modal show={visibel} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Tel</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,index)=>{
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.tel}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
                </Table>
            {arrAnimal.map((item,index)=>{
                return (
                    <Template1
                        key={index} 
                        name={item.name}
                        color={item.color}
                        age={item.age}
                        image={item.image}
                    />
                )
            })}

            {/* <img src={} width={} height={} alt={} />
            <img src={} width={} height={} alt={} />
            <img src={} width={} height={} alt={} /> */}

            <h1 onClick={()=>setNumber(number-1)}>-</h1>
            <h1>{number}</h1>
            <h1 onClick={()=>setNumber(number+1)}>+</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>
            <h1>HomePage</h1>

           
            <button onClick={onClickBtn} style={{color:'red'}}>About</button>
            <Link to="about">About</Link>
          

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