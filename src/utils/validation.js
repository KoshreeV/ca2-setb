export const getActivityId = (activity) =>
  activity.activityID ??
  activity.activityId ??
  activity.activityld ??
  activity.activityLd ??
  activity.id;

export const isValidActivity = (activity) => {
  return (
    activity.steps > 0 &&
    activity.caloriesBurned > 0 &&
    activity.workoutMinutes > 0 &&
    typeof activity.goalAchieved === "boolean"
  );
};

export const getValidActivities = (activities) => {
  if (!activities) return [];
  return activities.filter(isValidActivity);
};

export const computeStats = (activities) => {
  const validActivities = getValidActivities(activities);

  const stats = validActivities.reduce(
    (acc, activity) => {
      return {
        totalActivities: acc.totalActivities + 1,
        goalAchievedCount:
          acc.goalAchievedCount + (activity.goalAchieved ? 1 : 0),
        goalNotAchievedCount:
          acc.goalNotAchievedCount + (activity.goalAchieved ? 0 : 1),
      };
    },
    { totalActivities: 0, goalAchievedCount: 0, goalNotAchievedCount: 0 }
  );

  return stats;
};

export const calculateEfficiency = (caloriesBurned, workoutMinutes) => {
  if (workoutMinutes === 0) return 0;
  return (caloriesBurned / workoutMinutes).toFixed(2);
};
