import React from "react";
import SidBar from "../../components/SidBar";
import StudentCard from "../../components/students/StudentCards";

const StdDashboard = () => {
  return (
    <div className="teacherList">
      <SidBar />
      <StudentCard />
    </div>
  );
};

export default StdDashboard;
