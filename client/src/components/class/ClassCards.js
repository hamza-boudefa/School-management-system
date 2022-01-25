import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClassList, addClass, deleteClass } from '../../redux/actions/AdminActions' 
import './ClassCard.css'
import {Modal ,Button} from'react-bootstrap'
import AddClass from './addClass'
import './AddClass.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ClassCards = () => {
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getClassList())
  
}, [dispatch])

const {loading,classe} = useSelector(state => state.getClass)

const [show, setShow] = useState(false)

const handleShow =()=>{
      setShow(true)}

      // addClass
    const [add, setAdd] = useState({})
    const handleAdd=()=>{
        dispatch(addClass(add))
}
const {}=useSelector(state=>state.addNewClass)
const {userInfo}=useSelector(state=>state.loginDetails)

const refreshPage = ()=>{
  window.location.reload();
}
const submit = () => {

  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => refreshPage()
      },
      {
        label: 'No',
      }
    ]
  });}

    return (
      
    <div className='teachers'>
    <div className="container">
			<h1 className="text-center">Our  <b>Classes</b></h1>
			<p className="text-center text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur harum nobis esse ex alias.</p>
			<br></br>
      {userInfo.adminId?
      <Button variant="success" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  onClick={handleShow}>
 Add new class
</Button> : null }
      <Modal show={show} onHide={setShow} >
  
              <div className="modal-body"> 
                <div className="column" id="main">
                  <h1 style={{fontSize:"30px"}} >Add new classe </h1>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputName">Class Name</label>
                      <input type="name" className="form-control" id="exampleInputName" placeholder="ex: Full Stack JS F3"  onChange={(e)=>setAdd({...add,classeName:e.target.value})} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" disabled={!add} onClick={handleAdd} >Add</button>
                  </form>
                </div>
                <div>
                  <svg width="35px" height="300px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                   
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#007bff" />
                    </g>
                  </svg>
                </div>
                <div className="column" id="secondary">
                  
                  </div>
                </div>
             
          </Modal>
      </div>
      {loading && "loading"}
      {classe && classe.map((el)=> <>

                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
          <div className="profile-card_image">
            <img src="https://image.pngaaa.com/306/81306-middle.png" alt="User" className="mb-4 shadow" />
          </div>
          <div className="profile-card_details">
            <h3 className="mb-0">{el.classeName}</h3>
            <p className="text-muted"> </p>
            <p className="text-muted">{el._id} </p>
          </div>
          <div className="profile-card_social text-center p-4">
            <a href="#!" className="d-inline-block">
              <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png" alt="logo" />
            </a>
            
          </div>
          <div className='btn'>
          { userInfo.adminId ?
          <Button variant="danger"onClick={()=>{dispatch( deleteClass(el._id));submit()}}>Delete</Button>: null }
          </div> 
        </div>
      </div>
              </>)}
        {/* {show &&   <AddClass handleShow={handleShow} /> } */}
    </div>
    )
}


export default ClassCards


