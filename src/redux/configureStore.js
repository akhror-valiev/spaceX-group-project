import { configureStore } from '@reduxjs/toolkit';
import fetchMissions, { missionReducer } from './missions/missions';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

store.dispatch(fetchMissions());

export default store;
