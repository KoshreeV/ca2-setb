import React from "react";
import { useActivity } from "../context/ActivityContext";

const Stats = () => {
  const { activities } = useActivity();

  const validActivities = activities.filter((activity) => {
    const goalVal = activity.goalAchieved !== undefined ? activity.goalAchieved : activity.goalAcheived;
    return (
      Number(activity.steps) > 0 &&
      Number(activity.caloriesBurned) > 0 &&
      Number(activity.workoutMinutes) > 0 &&
      typeof goalVal === "boolean"
    );
  });

  const totalActivities = validActivities.length;
  const goalAchievedCount = validActivities.filter(a => {
      const goalVal = a.goalAchieved !== undefined ? a.goalAchieved : a.goalAcheived;
      return goalVal === true;
  }).length;
  const goalNotAchievedCount = totalActivities - goalAchievedCount;

  return (
    <div>
      <h1>Fitness Stats</h1>
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
  );
};

export default Stats;
