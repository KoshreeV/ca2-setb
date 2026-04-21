import React, { createContext, useReducer, useContext, useEffect } from "react";
import { activityReducer, initialState } from "../reducer/ActivityReducer.jsx";
import { getToken, getDataset } from "../services/api.js";

export const ActivityContext = createContext();

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivity must be used within an ActivityProvider");
  }
  return context;
};

export const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const tokenRes = await getToken("E0123021", "240387", "setB");
        const dataset = await getDataset(tokenRes.token, tokenRes.dataUrl);
        
        if (dataset && dataset.activities) {
          dispatch({ type: "SET_ACTIVITIES", payload: dataset.activities });
        } else {
          dispatch({ type: "SET_ERROR", payload: "Invalid dataset format" });
        }
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }
    };

    fetchActivities();
  }, []);

  const toggleGoalAchieved = (activityID) => {
    dispatch({ type: "TOGGLE_GOAL_ACHIEVED", payload: activityID });
  };

  return (
    <ActivityContext.Provider
      value={{
        state,
        toggleGoalAchieved,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
