import React from 'react'
import { lougout } from '../redux/actions/AdminActions'
import { useDispatch, useSelector,  } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {Link } from 'react-router-dom'
import './SidBar.css'
import { useNavigate } from 'react-router'
const SidBar = () => {
    
    const dispatch = useDispatch()
    const handleLogOut=()=>{
        dispatch(lougout())
    }
    
    const navigate=useNavigate()

    const {userInfo} = useSelector(state => state.loginDetails)

  
     

    return (
        <div className="d-flex flex-column flex-shrink-0 bg-light vh-100" style={{width: '100px'}}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          
          <li className="nav-item">{userInfo && userInfo.adminId? <Link to={`/DashBoard/${userInfo.adminId._id}` } className="nav-link active py-3 border-bottom"> <i className="fa fa-home" /> <small>Home</small> </Link>: null} </li>
          <li> <Link to={"/Dashboard/StudentList" } className="nav-link py-3 border-bottom"> <i className="fa fa-graduation-cap" /> <small>Stuent List</small> </Link> </li>
          
          <li> { userInfo.adminId ?<Link to={"/Dashboard/TeacherList"}  className="nav-link py-3 border-bottom"> <i className="fa fa-user" /> <small>Teachers</small> </Link> :null} </li>
          
          <li> <Link to={"/Dashboard/ClassList"} className="nav-link py-3 border-bottom"> <i class="fa-light fa-chalkboard"/> <small>Classes</small> </Link> </li>
          {/* <li> <a href="#" className="nav-link py-3 border-bottom"> <i className="fa fa-bookmark" /> <small>Bookmark</small> </a> </li> */}
          <div className="dropdown border-top" >   
            <LinkContainer to="/login" style={{position:'fixed',left:'0', bottom:'0'}} > 
            <li > <a href="#" className="nav-link active py-3 border-bottom"  onClick={()=> {handleLogOut();navigate("/login")}}> <i className="fa fa-window-close" /> <small>logOut</small> </a> </li>
        </LinkContainer>
          
        </div>
        </ul>
        
                {/* <i  class="fa fa-times-circle-o" aria-hidden="true" onClick={()=> {handleLogOut();navigate("/login")}}  ><small>logOut</small></i> */}

      </div>
       
    )
} 

export default SidBar
