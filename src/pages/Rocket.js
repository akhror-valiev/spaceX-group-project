/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rocketSlice';
import RocketItem from '../components/RocketItem/RocketItem';
import './Rocket.css';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockReducer);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <ul className="rocket-ul">
      {
        rockets.map(({
          flickr_images, rocket_name, description, id,
        }) => (
          <RocketItem
            key={id}
            flickr_images={flickr_images}
            rocket_name={rocket_name}
            description={description}
          />
        ))
      }
    </ul>
  );
};

export default Rocket;
