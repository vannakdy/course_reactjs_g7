import axios from "axios";
import { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import {Button, Table} from 'react-bootstrap';


function StudentPage() {
  const [listStudent, setListStudent] = useState([]);

  useEffect(() => {
    getListStudent();
  }, []);

  const getListStudent = () => {
    axios({
      url: "http://localhost:8080/api/student",
      method: "GET",
      data: {},
      headers: {},
    }).then((res) => {
      var data = res.data;
      console.log(data)
      setListStudent(data.list);
    });
  };

//   {
//     "student_id": 1,
//     "firstname": "Sok",
//     "lastname": "Rolnaldo",
//     "gender": 1,
//     "tel": "0996789544",
//     "email": "somang@gmail",
//     "description": "",
//     "create_at": "2022-08-04T14:04:33.000Z",
//     "status": 1
// }

  return (
    <div>
      <h1>Student {listStudent.length}</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Tel</th>
            <th>Email</th>
            <th>Status</th>
            <th>Craete At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                listStudent.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.gender === 1 ? "Male" : "Female"}</td>
                            <td>{item.tel}</td>
                            <td>{item.email}</td>
                            <td>{item.status === 1 ? "Actived" : "Disabled"}</td>
                            <td>{item.create_at}</td>
                            <td>
                                <Button variant="primary" size="sm">Edit</Button>
                                <Button variant="danger" size="sm">Remove</Button>
                            </td>
                        </tr>
                    )
                })
            }
         
        </tbody>
      </Table>
    </div>
  );
}

export default StudentPage;
