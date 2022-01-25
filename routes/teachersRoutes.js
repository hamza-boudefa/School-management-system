const express=require('express')
const Router=express.Router()
const {addNewTeacher,getTeacher,getTeachersList,updateTeacher,deleteTeacher,logIn}=require('../controllers/teacherControllers')
const teacherMiddleware=require('../middlewares/teacherMiddleware')
const adminMiddleware=require('../middlewares/adminMiddleware')


Router.post('/addNewTeacher',adminMiddleware ,addNewTeacher)
Router.post('/login',logIn)
Router.get('/:id',getTeacher) 
Router.get('/',getTeachersList)
Router.put('/updateTeacher/:id',updateTeacher)
Router.delete('/:id', adminMiddleware,deleteTeacher) 
 

module.exports=Router 