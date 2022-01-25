const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentsSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String },
  phoneNo: { type: Number },
  adress: { type: String },
  email: { type: String },
  password: { type: String },
  photo: { type: String },
  listOfFeedBack: [{ type: mongoose.Schema.Types.ObjectId, ref: "TeacherFeedBack"}],
  classId:{ type: mongoose.Schema.Types.ObjectId, ref: "classes"}

});

module.exports = mongoose.model("Students", studentsSchema);
