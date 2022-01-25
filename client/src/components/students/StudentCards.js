import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentList,
  deleteStudent,
} from "../../redux/actions/AdminActions";
import { Alert, Button, Form, FormControl, Nav } from "react-bootstrap";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router";
import StudentProfile from "../../screens/stdView/StudentProfile";
import FeedBack from "./FeedBack";
import { TailSpin } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const StudentCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentList());
  }, [dispatch]);

  const { loading, student } = useSelector((state) => state.getStduents);
  const { userInfo } = useSelector((state) => state.loginDetails);

console.log(Object.keys(userInfo).length);

  const [show, setShow] = useState(false);
  const [put, setPut] = useState(false);
  const [id, setId] = useState(undefined);
  const [FbShow, setFbShow] = useState(false);

  const [search, setSearch] = useState("");
  // console.log(search);

  const searchStudent = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handlePut = (el) => {
    setPut(true);
    setId(el._id);
  };

  const handleFbShow = (el) => {
    setFbShow(true);
    setId(el._id);
  };

  const refreshPage = () => {
    window.location.reload();
  };
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
    <div className="teachers">
      <div class="container">
        <h1 class="text-center">
          Our <b>Students</b>
        </h1>
        <p class="text-center text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur
          harum nobis esse ex alias.
        </p>

        <br></br>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => searchStudent(e)}
        />

        {userInfo.adminId ? (
          <Button
            variant="success"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleShow}
          >
            Add new class
          </Button>
        ) : null}
      </div>
      {loading && <TailSpin color="#00BFFF" height={80} width={80} />}

      {student &&
        student
          .filter((el) =>
            el.firstName.toLowerCase().includes(search.toLowerCase())
          )
          .map((el) => (
            <>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
                  <div className="profile-card_image">
                    <img
                      src="https://image.pngaaa.com/306/81306-middle.png"
                      alt="User"
                      className="mb-4 shadow"
                    />
                  </div>
                  <div className="profile-card_details">
                    <h3 className="mb-0">
                      {el.firstName} {el.lastName}{" "}
                    </h3>
                    <p className="text-muted">{el.email}  </p>
                    <p className="text-muted">
                      {el.phoneNo}{" "}
                    </p>
                  </div>
                  <div className="profile-card_social text-center p-4">
                    <a href="#!" className="d-inline-block">
                      <img
                        src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  {userInfo.adminId ? (
                    <div className="btn">
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(deleteStudent(el._id));submit()
                          
                        }}
                      >
                        Delete
                      </Button>
                      <Button variant="info" onClick={() => handlePut(el)}>
                        Update
                      </Button>
                    </div>
                  ) : (
                    <Button variant="info" onClick={() => handleFbShow(el)}>
                      give feedBack
                    </Button>
                  )}
                </div>
              </div>
              {/* <UpdateStudent id={el._id} put={put} setPut={setPut} /> */}
            </>
          ))}
      <AddStudent show={show} setShow={setShow} />
      <UpdateStudent id={id} put={put} setPut={setPut} />
      <FeedBack id={id} FbShow={FbShow} setFbShow={setFbShow} />
    </div>
  );
};

export default StudentCard;
