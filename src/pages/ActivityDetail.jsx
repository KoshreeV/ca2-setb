import React from "react";
import { useParams } from "react-router-dom";
import { useActivity } from "../context/ActivityContext";
import { getActivityId } from "../utils/validation";

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useActivity();

  if (state.loading) return <div>Loading...</div>;

  const activity = state.activities.find(a => String(getActivityId(a)) === String(id));

  if (!activity) return <div>Activity not found</div>;

  return (
    <div>
      <h1>Activity Detail</h1>
      <p>ID: {getActivityId(activity)}</p>
      <p>Name: {activity.name}</p>
      {/* ... other details ... */}
    </div>
  );
};

export default ActivityDetail;
