import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/AdminActions";

import './LogIn.css'


const LogIn = () => {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSigneIn = (e) => {
    e.preventDefault();
    dispatch(login(cred));
  };

  const { userInfo } = useSelector((state) => state.loginDetails);
  

  useEffect(() => {
    if (userInfo && userInfo.adminId) {
      navigate(`/Dashboard/${userInfo.adminId._id}`);
    } else if (userInfo && userInfo.teacherId) {
      navigate(`/DashBoard/StudentList`);
    }
    return;
  }, [userInfo]);
  


  return (
    <div>
      <div className="container-fluid ps-md-0" >
        <div className="row g-0" style={{height:"900px"}} >
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
          <div className="col-md-8 col-lg-6">
            <div >
            <Link to="/" >
            <i class="fas fa-arrow-left"></i>
            </Link>
                                   <div className="container">
                
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto" style={{marginTop:'200px'}} >
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    {/* Sign In Form */}
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          onChange={(e) =>
                            setCred({ ...cred, email: e.target.value })
                          }
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={(e) =>
                            setCred({ ...cred, password: e.target.value })
                          }
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-check mb-3">
                        
                        <label
                          className="form-check-label"
                          htmlFor="rememberPasswordCheck"
                        >
                          are you an Administrator or a Teacher ?
                        </label>
                      </div>
                      <DropdownButton 
                      title="Shoose here"
                      variant="secondary" 
                      
                    >
                      <Dropdown.Item  onClick={(e) =>
                          setCred({ ...cred, role:'adminAPI' })}>Admin</Dropdown.Item>
                      <Dropdown.Item onClick={(e) =>
                          setCred({ ...cred, role:'teacherAPI'})}> 
                        Teacher
                      </Dropdown.Item>
                     
                    </DropdownButton>
                      <div className="d-grid">
                        <button
                          className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                          onClick={handleSigneIn}
                          style={{height:"50px", width: "300px",borderRadius: "30px"}}
                        >
                          Sign in
                        </button>
                        <div className="text-center">
                          {/* <a className="small" href="#">Forgot password?</a> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
