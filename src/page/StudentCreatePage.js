import {useState} from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const StudentCreatePage = () => {
    const navigate = useNavigate()

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("")
    const [gender,setGender] = useState(0)
    const [tel,setTel] = useState("")
    const [email,setEmail] = useState("")
    const [description,setDescription] = useState("")

    const onChangeFname = (event) => {
        // console.log(event.target.value)
        setFirstname(event.target.value)
    }

    const onChangeLastName = (event) => {
        setLastname(event.target.value)
    }

    const onChangeGender = (event) => {
        setGender(event.target.value)
    }

    const onChangeTel = (event) => {
        setTel(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeDes = (event) => {
        setDescription(event.target.value)
    }

    const onClickSave = () => {
        axios({
            url: "http://localhost:8080/api/student",
            method: "POST",
            data: {
              "firstname" : firstname,
              "lastname" : lastname,
              "gender" : gender,
              "tel" :tel,
              "email" : email,
              "description" : description
            },
            headers: {},
          }).then((res) => {
            var data = res.data;
            navigate("/student")
          }).catch(err=>{
            console.log(err)
          })
    }

    return (
        <div>
            <h1>New student</h1>

            {/* <div>firstname : {firstname}</div>
            <div>lastname : {lastname}</div>
            <div>gender : {gender}</div>
            <div>tel : {tel}</div>
            <div>email : {email}</div>
            <div>description : {description}</div> */}

            <hr/>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">First name</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={onChangeFname} type="text" placeholder="First name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Last name</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={onChangeLastName} type="text" placeholder="Last name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Gender</Form.Label>
                    <Col sm="10">
                        <Form.Select onChange={onChangeGender} aria-label="Default select example">
                            <option value="0">Female</option>
                            <option value="1">Male</option>
                            <option value="2">Other</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Tel</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={onChangeTel} type="text" placeholder="Tel" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Email</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={onChangeEmail} type="text" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={onChangeDes} as="textarea" placeholder="Description" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2"></Form.Label>
                    <Col sm="10">
                        <Stack gap={1} direction="horizontal">
                            <Button onClick={onClickSave}>Save</Button>
                            <Button>Save New</Button>
                            <Button variant="secondary">Back</Button>
                        </Stack>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default StudentCreatePage;