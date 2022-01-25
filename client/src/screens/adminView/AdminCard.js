import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const AdminCard = () => {

const {userInfo}=useSelector(state=>state.loginDetails)
    // console.log(userInfo.adminId.listOfClasses.length);
  return (
  <div className='admin'>
  
  <Card className="card" style={{marginLeft:'200px', marginRight:'200px', backgroundColor:'gold'}} >
      <Card.Header>Number of classes</Card.Header>
    <Card.Body>
      <Card.Text>
        {userInfo.adminId.listOfClasses.length}
      </Card.Text>
    </Card.Body>
  </Card> 
 
  <br/>
  <Card className="card" style={{marginLeft:'200px', marginRight:'200px', backgroundColor:'palegoldenrod'}} >
      <Card.Header>Number of Teachers</Card.Header>
    <Card.Body>
      <Card.Text>
        {userInfo.adminId.listOfTeachers.length}
      </Card.Text>
    </Card.Body>
  </Card> 
 <br/>
      <Card className="card" style={{marginLeft:'200px', marginRight:'200px', backgroundColor:'bisque'}} >
      <Card.Header>Number of Students</Card.Header>
    <Card.Body>
      <Card.Text>
        {userInfo.adminId.listOfStudents.length}
      </Card.Text>
    </Card.Body>
  </Card> 
</div>
  );
};

export default AdminCard;
