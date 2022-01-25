// import { TEACHER_LOGIN_FAIL, TEACHER_LOGIN_REQUEST, TEACHER_LOGIN_SUCCESS, TEACHER_LOGOUT } from "../constants/TEACHERConstants";
import { ADD_POST_FAIL, ADD_POST_REQUEST, ADD_POST_SUCCESS } from "../constants/TeacherConstats";

// export const teacherloginReducer = (state = {}, action) => {
//     switch (action.type) {
//       case TEACHER_LOGIN_REQUEST:
//         return { loading: true };
//       case TEACHER_LOGIN_SUCCESS:
//         return { loading: true, userInfo: action.payload };
//       case TEACHER_LOGIN_FAIL:
//         return { loading: false, error: "bad cred front" };
//       case TEACHER_LOGOUT:
//         return {};
//       default:
//         return state;
//     }
//   };


export const AddNewPostReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        return { loading: true };
      case ADD_POST_SUCCESS:
        return { loading: true, post: action.payload }; 
      case ADD_POST_FAIL:
        return { loading: false, error: 'add post failed' };
      default:
        return state;
    }
  };
