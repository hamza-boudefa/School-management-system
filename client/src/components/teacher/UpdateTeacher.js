import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { updateTeacher } from '../../redux/actions/AdminActions'

const UpdateTeacher = ({id,upd, setUpd}) => {
    const dispatch = useDispatch()
const [cred, setCred] = useState({})
const handleUpdate=()=>{
    dispatch(updateTeacher(id,cred))
    
} 
    return (
        <div>
              <Modal show={upd} onHide={setUpd} >
  
  <div className="modal-body" style={{height:"800px"}} > 
    <div className="column" id="main">
      <h1>update student </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">first Name</label>
          <input type="name" className="form-control" id="exampleInputName"  onChange={(e)=>setCred({...cred,firstName:e.target.value})}     />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">last Name</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="student last name" onChange={(e)=>setCred({...cred,lastName:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">date of birth</label>
          <input type="number" className="form-control" id="exampleInputName" placeholder="date of birth" onChange={(e)=>setCred({...cred,dateOfBirth:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">gender</label>
          <input type="string" className="form-control" id="exampleInputName" placeholder="gender"  onChange={(e)=>setCred({...cred,gender:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">phoneNo</label>
          <input type="number" className="form-control" id="exampleInputName" placeholder="phone No" onChange={(e)=>setCred({...cred,phoneNo:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">adress</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="adress"  onChange={(e)=>setCred({...cred,adress:e.target.value})} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">email</label>
          <input type="string" className="form-control" id="exampleInputName" placeholder="email" onChange={(e)=>setCred({...cred,email:e.target.value})}  />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">password</label>
          <input type="password" className="form-control" id="exampleInputName" placeholder="password" onChange={(e)=>setCred({...cred,password:e.target.value})}  />
        </div>
        
        <Button type='submit'  className="btn btn-primary" onClick={handleUpdate} >update</Button>
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

export default UpdateTeacher
