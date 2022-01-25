const mongoose=require('mongoose')
const {Schema}=mongoose;

const TeacherFeedBack=new Schema({
    teacherName:{type:String},
    content: { type: String},
    // teacherName:{type:String},
    teacherEmail:{type:String},
    // authorId: { type: mongoose.Schema.Types.ObjectId, ref:"teacher"},
    studentId:{type: mongoose.Schema.Types.ObjectId, ref:"Students"}
})

module.exports=mongoose.model('TeacherFeedBack',TeacherFeedBack)