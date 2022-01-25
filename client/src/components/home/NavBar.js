import React, { useRef } from "react";
import "./NavBar.css";
import { Button, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {StudentLougOut} from "../../redux/actions/StudentActions"
import { useNavigate } from "react-router";
import About from "../About";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
// import {link as button} from


const NAvBar = () => {

  const user = useSelector(state => state.stdLoginDetails)
  // console.log(userInfo.userInfo.studentId)

// const tokenn=userInfo.userInfo.token

  const dispatch = useDispatch()
  const LougOut=()=>{
      dispatch(StudentLougOut())
  }
  const navigate = useNavigate()



  return (
    <div>
      <div id="blurry-filter" />
      <header style={{ display: "flex" }}>
        <div>
            <img src="https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png" style={{height:'100px'}} alt="logo" ></img>
          
         
        </div>
        <div className="navBtn">
          
          
          
          {user && user.user  ?
          <Button variant="outline-dark" onClick={() => navigate(`/profil/${user.user.studentId}`)} >profile</Button>:
         <Link to='about' >
         <Button variant="outline-dark"href='#About'   >about</Button> 
         </Link> }
         <Link to="Footer" >
          <Button  variant="outline-dark">contact</Button>
          </Link>
          {user && user.user  ?
          <Button variant="outline-dark"  onClick={()=>{LougOut();navigate("/") }} >logOut</Button>:
          <Link to='login' >
                   <Button variant="outline-dark"  >Student Login</Button>
                   </Link>

         }
 <LinkContainer to="/login" >
                   <Button variant="outline-dark"  >Admin Login</Button>
                   </LinkContainer>
                  
        </div>
      </header>

      <Carousel className="crl">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "1000px" }}
            src="https://images.unsplash.com/photo-1616512659455-111d3367649f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "1000px" }}
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHNjaG9vbHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "1000px" }}
            src="https://images.unsplash.com/photo-1628243426757-b092ba839ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <footer />
    </div>
  );
};

export default NAvBar;
