import React from "react";
import { getActivityId } from "../utils/validation";

const ActivityItem = ({ activity, onToggle }) => {
  const activityId = getActivityId(activity);

  return (
    <div data-testid="activity-item" style={{ textAlign: "center", margin: "20px 0" }}>
      <h3 style={{ marginTop: 0 }}>{activity.name || "Unknown"}</h3>
      <p>
        <strong>Activity ID:</strong> {activityId}
      </p>
      <p>
        <strong>Steps:</strong> {activity.steps}
      </p>
      <p>
        <strong>Calories Burned:</strong> {activity.caloriesBurned}
      </p>
      <p>
        <strong>Workout Minutes:</strong> {activity.workoutMinutes}
      </p>
      <p>
        <strong>Date:</strong> {activity.date || "No date"}
      </p>
      <p>
        <strong>Goal Achieved:</strong>{" "}
        {activity.goalAchieved ? "true" : "false"}
      </p>
      <button onClick={() => onToggle(activityId)}>
        Toggle Goal Status
      </button>
    </div>
  );
};

export default ActivityItem;
