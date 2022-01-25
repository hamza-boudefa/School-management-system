import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT,
  GET_TEACHERS_LIST_REQUEST,
  GET_TEACHERS_LIST_SUCCESS,
  GET_STUDENT_LIST_REQUEST,
  GET_STUDENT_LIST_SUCCESS,
  GET_CLASS_LIST_REQUEST,
  GET_CLASS_LIST_SUCCESS,
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAIL,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_FAIL,
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  ADD_TEACHER_REQUEST,
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAIL,
  DELETE_TEACHER_REQUEST,
  DELETE_TEACHER_SUCCESS,
  DELETE_TEACHER_FAIL,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_TEACHER_REQUEST,
  UPDATE_TEACHER_SUCCESS,
} from "../constants/AdminConstants";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload };
    case LOGIN_FAIL:
      return { loading: false, error: "bad cred front" };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
// get admin
// export const getAdminReducers=(state={},action)=>{
//     switch (action.type) {
//         case GET_ADMIN_REQUEST:
//             return {loading:true}
//         case GET_ADMIN_SUCCESS:
//             return {loading:false,userInfo:action.payload}
//         case GET_ADMIN_REQUEST:
//             return {loading:false}
//         default:
//             return state
//     }
// }

// get teacher list
export const getTeachersReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_TEACHERS_LIST_REQUEST:
      return { loading: true };
    case GET_TEACHERS_LIST_SUCCESS:
      return { loading: false, teachers: action.payload };
    case GET_TEACHERS_LIST_REQUEST:
      return { loading: false };
    default:
      return state;
  }
};

// get student list
export const getStudentReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENT_LIST_REQUEST:
      return { loading: true };
    case GET_STUDENT_LIST_SUCCESS:
      return { loading: false, student: action.payload };
    case GET_STUDENT_LIST_REQUEST:
      return { loading: false };
    default:
      return state;
  }
};

// add class
export const addNewClassReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CLASS_REQUEST:
      return { loading: true };
    case ADD_CLASS_SUCCESS:
      return { laoding: false, message: action.payload };
    case ADD_CLASS_FAIL:
      return { loading: false, error: "class already exists" };
    default:
      return state;
  }
};

// delete class
export const DeleteClassReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CLASS_REQUEST:
      return;
    case DELETE_CLASS_SUCCESS:
      return { loading: false, classe: action.payload };
    case DELETE_CLASS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// get calss list

export const getClassReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_CLASS_LIST_REQUEST:
      return { loading: true };
    case GET_CLASS_LIST_SUCCESS:
      return { loading: false, classe: action.payload };
    case GET_CLASS_LIST_REQUEST:
      return { loading: false };
    default:
      return state;
  }
};

// add student
export const addNewStduentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:
      return { loading: true };
    case ADD_STUDENT_SUCCESS:
      return { laoding: false, message: action.payload };
    case ADD_STUDENT_FAIL:
      return { loading: false, error: "student already exists" };
    default:
      return state;
  }
};

// add teacher
export const addNewTeacherReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TEACHER_REQUEST:
      return { loading: true };
    case ADD_TEACHER_SUCCESS:
      return { laoding: false, message: action.payload };
    case ADD_TEACHER_FAIL:
      return { loading: false, error: "teacher already exists" };
    default:
      return state;
  }
};

// delete teacher
export const DeleteTeacherReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TEACHER_REQUEST:
      return;
    case DELETE_TEACHER_SUCCESS:
      return { loading: false, teacher: action.payload };
    case DELETE_TEACHER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// delete student
export const DeleteStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STUDENT_REQUEST:
      return;
    case DELETE_STUDENT_SUCCESS:
      return { loading: false, teacher: action.payload };
    case DELETE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
 
// update student
export const UpdateStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_REQUEST:
      return {loading:true}
    case UPDATE_STUDENT_SUCCESS:
      return { loading: false, student: action.payload };
    case DELETE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
 
// update teacher
export const UpdateTeacherReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TEACHER_REQUEST:
      return {loading:true}
    case UPDATE_TEACHER_SUCCESS:
      return { loading: false, teacher: action.payload };
    case DELETE_TEACHER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
 
