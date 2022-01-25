import axios from "axios";
import {TEACHER_LOGIN_REQUEST,TEACHER_LOGIN_SUCCESS,TEACHER_LOGIN_FAIL,TEACHER_LOGOUT,ADD_POST_SUCCESS,ADD_POST_FAIL} from '../constants/TeacherConstats'

// export const Teacherlogin = (userCred) => async (dispatch) => {
//     try {
//       dispatch({ type: TEACHER_LOGIN_REQUEST });
//       const { data } = await axios.post(
//         `http://localhost:4001/${userCred.role}/login`,
//         userCred
//       );
//       localStorage.setItem("cred", JSON.stringify(data));
//       dispatch({ type: TEACHER_LOGIN_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: TEACHER_LOGIN_FAIL });
//     }
//   };
  
//   export const TeacherLougOut = () => (dispatch) => {
//     dispatch({ type: TEACHER_LOGOUT });
//     localStorage.removeItem("cred");
//   };

export const addPost=(newPost)=>async(dispatch)=>{
    try {
        const { data } = await axios.post(
            "https://my-school-ms.herokuapp.com/postAPI/addPost",newPost
          );
          dispatch({ type: ADD_POST_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({type:ADD_POST_FAIL})
    }
}