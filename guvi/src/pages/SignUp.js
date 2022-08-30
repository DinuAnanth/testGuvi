import React,{useState} from 'react'
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import style from "./SignUp.css"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';


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
            console.log(username)
        });}
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          The best Site <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>for learning</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Register Now and Enjoy !
        </p>

      </MDBCol>

      <MDBCol md='6' className='position-relative'>

        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>

            <MDBRow>
              <MDBCol col='8'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' onChange={(e)=>
        setName(e.target.value)}/>
              </MDBCol>

            </MDBRow>

            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e)=>
        setEmail(e.target.value)}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e)=>
        setPass(e.target.value)}/>

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='w-100 mb-4' size='md' onClick={done}>sign up</MDBBtn>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Already have an account? <Link to="/Login">  Sign In</Link></Form.Label>
        </Form.Group>

            <div className="text-center">

              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  )
}

export default SignUp;