import { getActivityId } from "../utils/validation";

export const initialState = {
  activities: [],
  loading: true,
  error: null,
};

export const activityReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };

    case "TOGGLE_GOAL_ACHIEVED":
      if (action.payload == null) {
        return state;
      }
      return {
        ...state,
        activities: state.activities.map((activity) =>
          String(getActivityId(activity)) === String(action.payload)
            ? {
                ...activity,
                goalAchieved: !activity.goalAchieved,
              }
            : activity
        ),
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
