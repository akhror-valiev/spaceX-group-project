/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rocketSlice';
import RocketItem from '../components/RocketItem/RocketItem';
import './Rocket.css';

let loadFirstTime = false;

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockReducer);

  useEffect(() => {
    if (!loadFirstTime) {
      dispatch(getRockets());
      loadFirstTime = true;
    }
  }, [dispatch]);
  return (
    <ul className="rocket-ul">
      {
        rockets.map(({
          image, name, description, id, reserved,
        }) => (
          <RocketItem
            id={id}
            key={id}
            image={image}
            name={name}
            reserved={reserved}
            description={description}
          />
        ))
      }
    </ul>
  );
};

export default Rocket;
