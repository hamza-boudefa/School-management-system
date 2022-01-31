import React from "react";
import ClassCards from "../../components/class/ClassCards";
import SidBar from "../../components/SidBar";

const StdDashboard = () => {
  return (
    <div className="admin">
      <SidBar />
      <ClassCards />
    </div>
  );
};

export default StdDashboard;
