import { configureStore } from '@reduxjs/toolkit';
import fetchMissions, { missionReducer } from './missions/missions';
import rockReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rockReducer,
    missions: missionReducer,
  },
});

store.dispatch(fetchMissions());

export default store;
