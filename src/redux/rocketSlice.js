import FetchRocketApi from '../projectApi/FetchRocketApi';

const ROCKET = 'redux/actions/get_rockets';
const RESERVE_ROCKET = 'redux/actions/reserve_rockets';

const rocketsAction = (rockets) => ({
  type: ROCKET,
  payload: rockets,
});

export const reserveAction = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: rocketId,
});

export const getRockets = () => (dispatch) => {
  FetchRocketApi().then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch(rocketsAction(rockets));
  });
};

const rockReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved } : { ...rocket }));
    default:
      return state;
  }
};

export default rockReducer;
