import React from "react";
import { useParams } from "react-router-dom";
import { useActivity } from "../context/ActivityContext";

const ActivityDetail = () => {
  const { id } = useParams();
  const { activities } = useActivity();
  const activity = activities.find(a => a.activityID === id);

  if (!activity) return <div>Activity not found</div>;

  return (
    <div>
      <h1>Activity Detail</h1>
      <p>ID: {activity.activityID}</p>
      <p>Name: {activity.name}</p>
      {/* ... other details ... */}
    </div>
  );
};

export default ActivityDetail;
