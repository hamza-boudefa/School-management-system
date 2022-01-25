import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import {addTeacher} from '../../redux/actions/AdminActions'

const AddTeacher = ({show , setShow}) => {
const dispatch = useDispatch()

const [add, setAdd] = useState({})
const handleAdd=()=>{
    dispatch(addTeacher(add))}
    const {loading,message}=useSelector(state=>state.addNewTeacher)
    

    return (
        <div>
            {loading && 'loading'}
             <Modal show={show} onHide={setShow} >
  
  <div className="modal-body" style={{height:"900px"}} > 
    <div className="column" id="main">
      <h1 style={{fontSize:"30px"}}>Add new student </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">first Name</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="student first name"   onChange={(e)=>setAdd({...add,firstName:e.target.value})}   />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">last Name</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="student last name"   onChange={(e)=>setAdd({...add,lastName:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">age</label>
          <input type="date" className="form-control" id="exampleInputName" placeholder="date of birth" onChange={(e)=>setAdd({...add,dateOfBirth:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">gender</label>
          <input type="gender" className="form-control" id="exampleInputName" placeholder="gender" onChange={(e)=>setAdd({...add,gender:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">phoneNo</label>
          <input type="number" className="form-control" id="exampleInputName" placeholder="phone No"  onChange={(e)=>setAdd({...add,phoneNo:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">adress</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="adress"   onChange={(e)=>setAdd({...add,adress:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">email</label>
          <input type="email" className="form-control" id="exampleInputName" placeholder="email" onChange={(e)=>setAdd({...add,email:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">password</label>
          <input type="password" className="form-control" id="exampleInputName" placeholder="password"  onChange={(e)=>setAdd({...add,password:e.target.value})} />
        </div>
        
        <Button  className="btn btn-primary" onClick={handleAdd}  >Add</Button>
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
    )
}

export default AddTeacher
