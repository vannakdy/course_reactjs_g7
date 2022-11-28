import axios from "axios";
import { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import {Button, Table, Stack} from 'react-bootstrap';
import {MdDelete} from "react-icons/md"


function TeacherPage() {
  const [listTeacher, setListTeacher] = useState([]);

  useEffect(() => {
    getListTeacher();
  }, []);

  const getListTeacher = () => {
    axios({
      url: "http://localhost:8080/api/teacher",
      method: "GET",
      data: {},
      headers: {},
    }).then((res) => {
      var data = res.data;
      console.log(data)
      setListTeacher(data.list);
    });
  };

  return (
    <div>
      <div>
        <h1>Teacher {listTeacher.length}</h1>
        <Button variant="primary" size="sm"><MdDelete/>New</Button>
      </div>
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
                listTeacher.map((item,index)=>{
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
                                <Stack gap={1} direction="horizontal">
                                    <Button variant="primary" size="sm"><MdDelete/>Edit</Button>
                                    <Button variant="danger" size="sm">Remove</Button>
                                </Stack>
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

export default TeacherPage;
