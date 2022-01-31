import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getOneStuden } from "../../redux/actions/StudentActions";
import "./StudentProfile.css";
import { Card } from "react-bootstrap";

const StudentProfile = () => {
  let { studentId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneStuden(studentId));
  }, [dispatch]);

  const { student } = useSelector((state) => state.GetOneStudent);
  const navigate = useNavigate();

  return (
    <div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{student && student.firstName} {student && student.lastName} </h5>
                <br/>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      List of feedbacks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-warning"
                onClick={() => navigate("/")}
              >
                home{" "}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                {/* {student && student.listOfFeedBack.map((el)=><p>{el.title}</p>)} */}
                <a href>Student ID: {student && student._id}</a>
                <br />
                <a href>First Name : {student && student.firstName}</a>
                <br />
                <a href>Last Name : {student && student.lastName} </a>
                <br />
                <a href>Gender : {student && student.gender}</a>
                <br />
                <a href>Phone Number : {student && student.phoneNo}</a>
                <br />
                <a href>Email : {student && student.email}</a>
                <br />
                {/* <button type="submit" className="btn btn-info">
                  update
                </button> */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                {student &&
                  student.listOfFeedBack.map((el) => (
                    <Card style={{ marginBottom: "40px" }}>
                      <Card.Header>{el.teacherName}</Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <p>{el.content}</p>
                          <footer className="blockquote-footer" >
                            {el.teacherEmail}
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
