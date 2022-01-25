import { GET_TEACHERS_LIST_REQUEST } from "../constants/AdminConstants";
import { GET_STUDENT_FAIL, GET_STUDENT_SUCCESS, STUDENT_LOGIN_FAIL, STUDENT_LOGIN_REQUEST, STUDENT_LOGIN_SUCCESS, STUDENT_LOGOUT } from "../constants/StudentConstants";

export const StdloginReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_LOGIN_REQUEST:
        return { loading: true };
      case STUDENT_LOGIN_SUCCESS:
        return { loading: true, student: action.payload };
      case STUDENT_LOGIN_FAIL:
        return { loading: false, error: "bad cred front" };
      case STUDENT_LOGOUT:
        return {};
      default:
        return state;
    }
  };


  export const GetOneStudentReducer=(state={},action)=>{
    switch (action.type) {
        case GET_TEACHERS_LIST_REQUEST:
            return {loading:true}
        case GET_STUDENT_SUCCESS:
            return {loading:false,student:action.payload}
        case GET_STUDENT_FAIL:
            return {loading:false}
        default:
            return state
    }
}