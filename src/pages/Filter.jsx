import React, { useContext, useState } from "react";
import { ActivityContext } from "../context/ActivityContext";
import ActivityItem from "../components/ActivityItem";
import { getActivityId, getValidActivities } from "../utils/validation";

const Filter = () => {
  const { state, toggleGoalAchieved } = useContext(ActivityContext);
  const [stepsInput, setStepsInput] = useState("");

  if (state.loading) return <div>Loading activities...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  const trimmedInput = stepsInput.trim();
  const hasInput = trimmedInput !== "";
  const parsedSteps = Number(trimmedInput);
  const hasError = hasInput && (!Number.isInteger(parsedSteps) || parsedSteps < 0);
  const errorMessage = hasError
    ? "Please enter a valid non-negative number"
    : "";
  const validActivities = getValidActivities(state.activities);
  const filteredActivities =
    hasInput && !hasError
      ? validActivities.filter((activity) => activity.steps >= parsedSteps)
      : [];

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Filter Activities by Steps</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter minimum steps"
          value={stepsInput}
          onChange={(e) => setStepsInput(e.target.value)}
          min="0"
          style={{
            textAlign: "center"
          }}
        />
      </div>

      {hasError && <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>}

      {hasInput && !hasError && (
        <p>
          Found {filteredActivities.length} activities 
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {filteredActivities.map((activity) => (
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

export default Filter;
