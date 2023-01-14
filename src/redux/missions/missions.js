import missionData from '../../pages/missionsData';

const FETCH_MISSION = 'spacex/missions/FETCH_MISSION';
const JOIN_MISSION = 'spacex/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacex/missions/LEAVE_MISSION';

const initialState = [];

// ACTIONS
export const loadMissions = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

const fetchMissions = () => async (dispatch) => {
  const missions = missionData.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,

  }));
  dispatch(loadMissions(missions));
};

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return [
        ...action.payload,
      ];

    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newState];
    }

    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...newState];
    }

    default:
      return state;
  }
};

export default fetchMissions;
