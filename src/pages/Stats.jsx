import React from "react";
import { useActivity } from "../context/ActivityContext";
import { getValidActivities } from "../utils/validation";

const Stats = () => {
  const { state } = useActivity();

  if (state.loading) return <div>Loading...</div>;

  const validActivities = getValidActivities(state.activities);

  const totalActivities = validActivities.length;
  const goalAchievedCount = validActivities.filter(a => a.goalAchieved === true).length;
  const goalNotAchievedCount = totalActivities - goalAchievedCount;

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Fitness Stats</h1>
      <div className="activity-item">
        <div data-testid="total-activities">
            Total Activities: {totalActivities}
        </div>
        <div data-testid="goal-achieved">
            Goal Achieved Count: {goalAchievedCount}
        </div>
        <div data-testid="goal-not-achieved">
            Goal Not Achieved Count: {goalNotAchievedCount}
        </div>
      </div>
    </div>
  );
};

export default Stats;
