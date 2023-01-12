import FetchRocketApi from '../projectApi/FetchRocketApi';

const ROCKET = 'redux/actions/get_rockets';

const rockets = (rockets) => ({
  type: ROCKET,
  payload: rockets,
});

export const getRockets = () => (dispatch) => {
  FetchRocketApi().then((rocket) => {
    dispatch(rockets(rocket));
  });
};

const rockReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rockReducer;
