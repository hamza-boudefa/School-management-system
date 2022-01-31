import axios from "axios";
import { GET_STUDENT_FAIL, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT } from "../constants/StudentConstants";

export const Studentlogin = (studentCred) => async (dispatch) => {
    try {
      dispatch({ type: STUDENT_LOGIN_REQUEST });
      const { data } = await axios.post(
        "http://localhost:4001/studentAPI/logIn",
        studentCred
      );
      localStorage.setItem("cred", JSON.stringify(data));
      dispatch({ type: STUDENT_LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: STUDENT_LOGIN_FAIL });
    }
  };
  
  export const StudentLougOut = () => (dispatch) => {
    dispatch({ type: STUDENT_LOGOUT });
    localStorage.removeItem("cred");
  };
  

export const getOneStuden=(id)=>async(dispatch)=>{
  try {
    dispatch({type:GET_STUDENT_REQUEST})
        const {data}= await axios.get(`http://localhost:4001/studentAPI/getStudent/${id}`)
        dispatch({type:GET_STUDENT_SUCCESS,payload:data})

    
  } catch (error) {
    dispatch({type:GET_STUDENT_FAIL})
  }
}