import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login () {
    const[username, setName]= useState("")
    const navigate = useNavigate();
    const[pass, setPas]= useState("")
    const [validated, setValidated] = useState(false);
    const [loginStatus, setLoginStatus] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    const log=()=>{
        Axios.post("http://localhost:3001/show", {username: username,pass: pass}).then((response)=>{
            if (!response.data.message) {
                setLoginStatus( response.data.message);
             } else {
                setLoginStatus (response.data[0].message);
             }
        });
    }
    
  return (
    <div className="d-flex align-items-center justify-content-center">
        <Container fluid>
        <Row className="justify-content-md-center">
        <Col xs lg="3"/>
        <Col xs lg="6">
        <Form className="layouts" noValidate validated={validated} onSubmit={handleSubmit}> 
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" onChange={(e)=>
        setName(e.target.value)} />
        <Form.Control.Feedback type="invalid">
              Please Enter a valid Email-Id.
            </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" onChange={(e)=>
        setPas(e.target.value)}/>
        <Form.Control.Feedback type="invalid">
              Please Enter a valid Password.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Don't have an account? <Link to="/SignUp">  Sign up</Link></Form.Label>
        </Form.Group>

      

      <Button variant="primary" type="submit" onClick={log}>
        Submit
      </Button>
      <h1>{loginStatus}</h1>
    </Form>
    </Col>
    <Col xs lg="3"/>
    </Row>
    </Container>
    </div>
  )
}

export default Login