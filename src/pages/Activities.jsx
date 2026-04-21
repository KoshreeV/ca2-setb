import React from "react";
import { useActivity } from "../context/ActivityContext";
import { getValidActivities, getActivityId } from "../utils/validation";
import ActivityItem from "../components/ActivityItem";

const Activities = () => {
  const { state, toggleGoalAchieved } = useActivity();

  if (state.loading) return <div>Loading activities...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const validActivities = getValidActivities(state.activities);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Activities List</h1>
      <p>Showing {validActivities.length} valid activities.</p>
      <div className="activities-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {validActivities.map((activity) => (
          <ActivityItem 
            key={getActivityId(activity)} 
            activity={activity} 
            onToggle={toggleGoalAchieved}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
