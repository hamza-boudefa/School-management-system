const mongoose=require('mongoose')
const {Schema}=mongoose;

const adminSchema=new Schema({
    admin:{type:String},
    email:{type:String, required:true},
    password:{type:String, required:true},
    schoolName:{type:String},
    schooleAdress:{type:String},
    listOfTeachers:[{type:Schema.Types.ObjectId,ref:'teacher'}],
    listOfStudents:[{type:Schema.Types.ObjectId,ref:'students'}],
    listOfClasses:[{type:Schema.Types.ObjectId,ref:'classes'}],


 
})

module.exports=mongoose.model('admin',adminSchema)