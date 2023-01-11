const FETCH_MISSION = 'spacex/missions/FETCH_MISSION';

// api url
const baseURL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

// ACTIONS
export const loadMissions = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

const fetchMissions = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();

  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));

  dispatch(loadMissions(missions));
};

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default fetchMissions;
