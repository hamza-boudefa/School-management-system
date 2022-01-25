import React from "react";
import { useSelector } from "react-redux";
import SidBar from "../../components/SidBar";
import TeacherCard from "../../components/teacher/TeacherCard";

const DashBoredTeacher = () => {

  return (
    <div className="teacherList">
      <SidBar />
      <TeacherCard />
    </div>
  );
};

export default DashBoredTeacher;
