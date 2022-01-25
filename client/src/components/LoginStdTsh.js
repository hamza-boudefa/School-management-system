  import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
  import './logStd.css'
  import {Studentlogin} from '../redux/actions/StudentActions'
import { useNavigate } from 'react-router'
import NavBar from './home/NavBar'
import { Button, Form } from 'react-bootstrap'



  const LoginStdTsh = () => {
const [cred, setCred] = useState({})
const dispatch = useDispatch()

const handleSigneIn=()=>{
  
  dispatch(Studentlogin(cred))
}
const {user}= useSelector(state => state.stdLoginDetails)

const navigate=useNavigate()
const redirect=()=>{ 
if(user && user.token){
    navigate(`/`)
    } 
  }
  

// const navigate=useNavigate()
// useEffect(() => {
//   if( userInfo){
//   navigate("/")
//   }
//     })
    console.log(user)

      return (
        <div className="form-bg" id='login'>
        <div className="container">
          {/* <div className="roww"> */}
            <div >
              <div className="form-container">
                <div className="left-content">
                  <h3 className="title">Welcome</h3>
                  <h4 className="sub-title">Lorem ipsum dolor sit amet.</h4>
                </div>
                <div className="right-content">
                  <h3 className="form-title">Login</h3>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label>Username / Email</label>
                      <input type="email" className="form-control"  onChange={(e)=>setCred({...cred,email:e.target.value})}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control"  onChange={(e)=>setCred({...cred,password:e.target.value})}/>
                    </div>
                    <button className="btn signin" type="submit" onClick={()=> {handleSigneIn();redirect() }}>Login</button>
                   
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
      //   <Form className='logStd'>
      //   <Form.Group className="mb-3" controlId="formBasicEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control type="email" placeholder="Enter email" />
      //     <Form.Text className="text-muted">
      //       We'll never share your email with anyone else.
      //     </Form.Text>
      //   </Form.Group>
      
      //   <Form.Group className="mb-3" controlId="formBasicPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" />
      //   </Form.Group>
      //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
      //     <Form.Check type="checkbox" label="Check me out" />
      //   </Form.Group>
      //   <Button variant="primary" type="submit">
      //     Submit
      //   </Button>
      // </Form>
       


      )
  }

  export default LoginStdTsh
