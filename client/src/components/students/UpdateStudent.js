import React, {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {updateStudent} from'../../redux/actions/AdminActions'

const UpdateStudent = ({id,put ,setPut}) => {

const dispatch = useDispatch()
const [cred, setCred] = useState({})
const handleUpdate=()=>{
    dispatch(updateStudent(id,cred))
    
} 

    return (
        <div>
             <Modal show={put} onHide={setPut} >
  
  <div className="modal-body" style={{height:"900px"}} > 
    <div className="column" id="main"  >
      <h1 style={{fontSize:'30px'}} >update student </h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">first Name</label>
          <input type="name" className="form-control" id="exampleInputName" placeholder="student first name"  onChange={(e)=>setCred({...cred,firstName:e.target.value})}     />
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
        
        <Button  className="btn btn-primary" onClick={handleUpdate} >update</Button>
      </form>
    </div>
  
    <div className="column" id="secondary">
      
      </div>
    </div>
 
</Modal>
        </div>
    )
}

export default UpdateStudent
