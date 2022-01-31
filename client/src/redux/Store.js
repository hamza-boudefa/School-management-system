import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  loginReducer,
  getTeachersReducers,
  getStudentReducers,
  getClassReducers,
  addNewClassReducer,
  DeleteClassReducer,
  getAdminReducers,
  addNewStduentReducer,
  addNewTeacherReducer,
  DeleteTeacherReducer,
  DeleteStudentReducer,
  UpdateStudentReducer,
  UpdateTeacherReducer,

} from "./reducers/AdminReducers";
import { StdloginReducer,GetOneStudentReducer } from "./reducers/StudentReducer";
import { AddNewPostReducer } from "./reducers/TeacherReducer"; 

const reducer = combineReducers({
  loginDetails: loginReducer,
  getTeachers: getTeachersReducers,
  getStduents: getStudentReducers,
  getClass: getClassReducers,
  addNewClass: addNewClassReducer,
  // getAdmin:getAdminReducers,
  DeleteClass: DeleteClassReducer,
  addNewStduent: addNewStduentReducer,
  addNewTeacher:addNewTeacherReducer,
  DeleteTeacher:DeleteTeacherReducer,
  DeleteStudent:DeleteStudentReducer,
  UpdateStudent:UpdateStudentReducer,
  stdLoginDetails:StdloginReducer,
  GetOneStudent:GetOneStudentReducer,
  AddPost:AddNewPostReducer,
  UpdateTeacher:UpdateTeacherReducer
});

const FromLocalStorage = localStorage.getItem("cred")
  ? JSON.parse(localStorage.getItem("cred"))
  : null;

const initState = {
  loginDetails: { userInfo: FromLocalStorage },
  stdLoginDetails: { user: FromLocalStorage }

};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
