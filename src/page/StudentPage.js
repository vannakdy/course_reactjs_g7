import axios from "axios";
import { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import {Button, Table, Stack,Spinner} from 'react-bootstrap';
import {MdDelete,MdNewLabel} from "react-icons/md";
import {useNavigate} from "react-router-dom"

const base_url = "https://nodejs-course-g2.vercel.app/";

function StudentPage() {

  const navigate = useNavigate()

  const [listStudent, setListStudent] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    getListStudent();
  }, []);

  const getListStudent = () => {
    setLoading(true);
    axios({
      url: base_url + "api/student",
      method: "GET",
      data: {},
      headers: {},
    }).then((res) => {
      var data = res.data;
      console.log(data)
      setLoading(false)
      setListStudent(data.list);
    });
  };

  const onClickNew = () => {
    navigate("/student/create")
    // axios({
    //   url: "http://localhost:8080/api/student",
    //   method: "POST",
    //   data: {
    //     "firstname" : "Sa",
    //     "lastname" : "Solo",
    //     "gender" : 1,
    //     "tel" : "095686890",
    //     "email" : "",
    //     "description" : "Student year 1 from RUPP"
    //   },
    //   headers: {},
    // }).then((res) => {
    //   var data = res.data;
    //   console.log(data)
    // }).catch(err=>{
    //   console.log(err)
    // })
  }

  const onClickDelete = (student_id) => {
    setLoading(true);
    axios({
      url: base_url + "api/student",
      method: "DELETE",
      data: {
        "student_id": student_id
      },
      headers: {},
    }).then((res) => {
      var data = res.data;
      console.log(data)
      getListStudent();
    });
  }

  const onClickToEdit = (student_id) => {
    navigate("/student/create/"+student_id)
  }

  return (
    <div>
      
      <div className="row-between">
        <h1>Student {listStudent.length}</h1>
        <Button onClick={onClickNew} variant="primary" size="sm"><MdNewLabel/>New</Button>
      </div>

      {loading && <div style={{textAlign:'center'}}>
        <Spinner animation="border" variant="secondary" /> 
      </div>}

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
                                <Stack gap={1} direction="horizontal">
                                    <Button onClick={()=>onClickToEdit(item.student_id)} variant="primary" size="sm">Edit</Button>
                                    <Button onClick={()=>onClickDelete(item.student_id)} variant="danger" size="sm"><MdDelete/>Remove</Button>
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

export default StudentPage;
