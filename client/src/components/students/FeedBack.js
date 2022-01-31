import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/actions/TeacherActions";

const FeedBack = ({ id, FbShow, setFbShow }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.loginDetails);
const studentId=id

  const [cred, setCred] = useState({ studentId });
  console.log(cred);
  
  useEffect(() => {
    setCred({ studentId });
  }, [studentId]);


  const handleFeedBack = () => {
    dispatch(addPost(cred));
  };

 

  return (
    <div>
      <Modal show={FbShow} onHide={setFbShow}>
        <div className="modal-body" style={{ height: "800px" }}>
          <div className="column" id="main">
            <h1>update student </h1>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName">Teacher name</label>
                <input
                  type="string"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="teacher name"
                  onChange={(e) =>
                    setCred({ ...cred, teacherName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName">feedback content</label>
                <input
                  type="string"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="texte"
                  onChange={(e) =>
                    setCred({ ...cred, content: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName">Teacher email</label>
                <input
                  className="form-control"
                  placeholder="example@example.com"
                  type="text"
                  onChange={(e) =>
                    setCred({ ...cred, teacherEmail: e.target.value })
                  }
                  
                />
              </div>

              <Button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  handleFeedBack();
                }}
              >
                post
              </Button>
            </form>
          </div>
          <div>
            <svg
              width="35px"
              height="300px"
              viewBox="0 0 67 578"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z"
                  id="Path"
                  fill="#007bff"
                />
              </g>
            </svg>
          </div>
          <div className="column" id="secondary"></div>
        </div>
      </Modal>
    </div>
  );
};

export default FeedBack;
// title:{type:String},
// content: { type: String},
// authorId: { type: mongoose.Schema.Types.ObjectId, ref:"teacher"},
// studentId:{type: mongoose.Schema.Types.ObjectId, ref:"Students"}
