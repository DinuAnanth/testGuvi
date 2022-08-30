import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Axios from 'axios';
import {useNavigate}  from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  let Navigate=useNavigate();
  const[username, setName]= useState("")
  const[pass, setPas]= useState("")
  const [validated, setValidated] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    return "hi"
    
  }
  else{
     
    Navigate("/Profile")
      Axios.post("http://localhost:3001/show", {username: username,pass: pass}).then((response)=>{
          console.log(response)
          if (response.status===200) {
              Navigate("/Profile")
              console.log("sucess",response)
           } if(response.status===500){
              try{
                  Navigate("/SignUp")
              }
              catch(err){
                  Navigate("/SignUp")
              }
           }
      });
      setValidated(true);
      return "no"
  }


};

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
          </div>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>
        setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>
        setPas(e.target.value)}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Link to="/SignUp">  Forget Password </Link>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSubmit}>Sign in</MDBBtn>


        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;