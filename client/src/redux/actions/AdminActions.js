import axios from "axios";
import {
  ADD_CLASS_FAIL,
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_STUDENT_FAIL,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_TEACHER_FAIL,
  ADD_TEACHER_REQUEST,
  ADD_TEACHER_SUCCESS,
  DELETE_CLASS_FAIL,
  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_STUDENT_FAIL,
  DELETE_STUDENT_SUCCESS,
  DELETE_TEACHER_FAIL,
  DELETE_TEACHER_SUCCESS,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  GET_CLASS_LIST_REQUEST,
  GET_CLASS_LIST_SUCCESS,
  GET_STUDENT_LIST_FAIL,
  GET_STUDENT_LIST_REQUEST,
  GET_STUDENT_LIST_SUCCESS,
  GET_TEACHERS_LIST_FAIL,
  GET_TEACHERS_LIST_REQUEST,
  GET_TEACHERS_LIST_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_FAIL,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_TEACHER_REQUEST,
  UPDATE_TEACHER_SUCCESS,
  UPDATE_TEACHER_FAIL,
} from "../constants/AdminConstants";

export const login = (userCred) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(
      `http://localhost:4001/${userCred.role}/login`,
      userCred
    );
    localStorage.setItem("cred", JSON.stringify(data));
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};
// export const login = (userCred) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });
//     const { data } = await axios.post(
//       "http://localhost:4001/adminAPI/login",
//       userCred
//     );
//     localStorage.setItem("cred", JSON.stringify(data));
//     dispatch({ type: LOGIN_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: LOGIN_FAIL });
//   }
// };

export const lougout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("cred");
};

// get teacher list

export const getTeachersList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEACHERS_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:4001/teacherAPI/");
    dispatch({ type: GET_TEACHERS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_TEACHERS_LIST_FAIL });
  }
};

// get student list
export const getStudentList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_LIST_REQUEST });
    const { data } = await axios.get(
      "http://localhost:4001/studentAPI/getStudentsList"
    );
    dispatch({ type: GET_STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_STUDENT_LIST_FAIL });
  }
};

// get admin
// export const getAdmin=(id)=>async(dispatch)=>{
//     try {
//         dispatch({type:GET_ADMIN_REQUEST})
//         const {data}= await axios.get(`http://localhost:4001/adminAPI/getAdmin/${id}`)
//         dispatch({type:GET_ADMIN_SUCCESS,payload:data})

//     } catch (error) {
//         dispatch({type:GET_ADMIN_SUCCESS})

//     }
// }

// add Class

export const addClass = (newClass) => async (dispatch) => {
  try {
    // dispatch({type:ADD_CLASS_REQUEST})

    const { data } = await axios.post(
      "http://localhost:4001/classAPI/addClasse",
      newClass
    );
    dispatch({ type: ADD_CLASS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_CLASS_FAIL });
  }
};

// delete class

export const deleteClass = (id) => async (dispatch, getState) => {
  try {
    const { getClass } = getState();

    const { data } = await axios.delete(
      `http://localhost:4001/classAPI/deleteClasse/${id}`
    );
    dispatch({ type: DELETE_CLASS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_CLASS_FAIL });
  }
};

// get class list
export const getClassList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CLASS_LIST_SUCCESS });
    const { data } = await axios.get(
      "http://localhost:4001/classAPI/getClassesList"
    );
    dispatch({ type: GET_CLASS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CLASS_LIST_SUCCESS });
  }
};

// add student
export const addStudent = (newStudent) => async (dispatch) => {
  try {
    dispatch({ type: ADD_STUDENT_REQUEST });

    const { data } = await axios.post(
      "http://localhost:4001/studentAPI/addStudent",
      newStudent
    );
    dispatch({ type: ADD_STUDENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_STUDENT_FAIL });
  }
};

// add teacher
export const addTeacher = (newTeacher) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_TEACHER_REQUEST });
    const {
      loginDetails: { userInfo },
    } = getState();
    const config = { headers: { auth: userInfo.token } };
    const { data } = await axios.post(
      "http://localhost:4001/teacherAPI/addNewTeacher",
      newTeacher,
      config
    );
    dispatch({ type: ADD_TEACHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_TEACHER_FAIL });
  }
};

// delete student

export const deleteTeacher = (id) => async (dispatch, getState) => {
  try {
    const {
      loginDetails: { userInfo },
    } = getState();
    const config = { headers: { auth: userInfo.token } };

    const { data } = await axios.delete(
      `http://localhost:4001/teacherAPI/${id}`,
      config
    );
    dispatch({ type: DELETE_TEACHER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_TEACHER_FAIL });
  }
};

// delete student

export const deleteStudent = (id) => async (dispatch, getState) => {
  try {
    const {
      loginDetails: { userInfo },
    } = getState();
    const config = { headers: { auth: userInfo.token } };

    const { data } = await axios.delete(
      `http://localhost:4001/studentAPI/deleteStudent/${id}`,
      config
    );
    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_STUDENT_FAIL });
  }
};

// update student
export const updateStudent = (id,newCred) => async (dispatch, getState) => {
  try {
    
      dispatch({type:UPDATE_STUDENT_REQUEST})
    const {
      loginDetails: { userInfo },
    } = getState();
    const config = { headers: { auth: userInfo.token } };
    const { data } = await axios.put(
      `http://localhost:4001/studentAPI/updateStudent/${id}`,
    newCred,config
    );
    dispatch({ type: UPDATE_STUDENT_SUCCESS, pyaload:data  });
  } catch (error) {

    dispatch({ type: UPDATE_STUDENT_FAIL  });
  }
};

// update teacher
export const updateTeacher = (id,newCred) => async (dispatch, getState) => {
  try {
    
      dispatch({type:UPDATE_TEACHER_REQUEST})
    const {
      loginDetails: { userInfo },
    } = getState();
    const config = { headers: { auth: userInfo.token } };
    const { data } = await axios.put(
      `http://localhost:4001/teacherAPI/updateTeacher/${id}`,
    newCred,config
    );
    dispatch({ type:UPDATE_TEACHER_SUCCESS, pyaload:data  });
  } catch (error) {

    dispatch({ type: UPDATE_TEACHER_FAIL });
  }
};
