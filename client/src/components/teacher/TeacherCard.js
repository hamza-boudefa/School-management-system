import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTeacher,
  getTeachersList,
} from "../../redux/actions/AdminActions";
import { Button, FormControl } from "react-bootstrap";
import AddTeacher from "./AddTeacher";
import "./Teacher.css";
import UpdateTeacher from "./UpdateTeacher";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const TeacherCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachersList());
  }, [dispatch]);
  const { loading, teachers } = useSelector((state) => state.getTeachers);
  const [show, setShow] = useState(false);
  const [upd, setUpd] = useState(false);
  const [id, setId] = useState(undefined);
  const [search, setSearch] = useState("");

  const searchTeacher = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleUpd = (el) => {
    setUpd(true);
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
      <div className="container">
        <h1 className="text-center">
          Our <b>Teachers</b>
        </h1>
        <p className="text-center text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tenetur
          harum nobis esse ex alias.
        </p>
        <br></br>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => searchTeacher(e)}
        />
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
        {loading && "loading"}
      </div>
      {teachers &&
        teachers.filter((el)=>el.firstName.toLowerCase().includes(search.toLowerCase())).map((el) => (
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
                  <p className="text-muted">{el.subject} </p>
                  <p className="text-muted">
                    {el.email} {el.phoneNo}{" "}
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
                <div className="btn">
                  <Button
                    variant="danger"
                    type='submit'
                    onClick={() => {
                      dispatch(deleteTeacher(el._id));submit()
                      
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="info" onClick={() => handleUpd(el)}>
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </>
        )).sort((a,b)=> b.lastName-a.lastName)}
      <AddTeacher show={show} setShow={setShow} />
      <UpdateTeacher id={id} upd={upd} setUpd={setUpd} />
    </div>
  );
};

export default TeacherCard;
