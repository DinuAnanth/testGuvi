import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import Axios from 'axios';


function SignUp () {
    const[username, setName]= useState("")
    const[pass, setPass]= useState("")
    const[email,setEmail]=useState("")
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    const done=()=>{
        Axios.post("http://localhost:3001/insert", {username: username,pass: pass,email:email}).then(()=>{
            alert("You Made it")
        });}
  return (
    <div>
        <Container fluid>
        <Row className="justify-content-md-center">
        <Col xs lg="3"/>
        <Col xs lg="6">
        <Form className="layouts" noValidate validated={validated} onSubmit={handleSubmit} > 
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" onChange={(e)=>
        setEmail(e.target.value)} />
        <Form.Control.Feedback type="invalid">
              Please Enter a valid Email-Id.
            </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter Username" onChange={(e)=>
        setName(e.target.value)}/>
        <Form.Control.Feedback type="invalid">
              Please Enter a valid username.
            </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" onChange={(e)=>
        setPass(e.target.value)}/>
        <Form.Control.Feedback type="invalid">
              Please Enter a valid Password.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Already have an account? <Link to="/Login">  Sign In</Link></Form.Label>
        </Form.Group>
      

      <Button variant="primary" type="submit" onClick={done}>
        Submit
      </Button>
    </Form>
    </Col>
    <Col xs lg="3"/>
    </Row>
    </Container>
    </div>
  )
}

export default SignUp;