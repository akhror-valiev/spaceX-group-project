/* eslint-disable camelcase */
import { useEffect } from 'react';

import { getRockets } from '../redux/rocketSlice';

import './Rocket.css';

const Rocket = () => {
  useEffect(() => {
    getRockets();
  });
  return (

    <>
      <h1>Rocket</h1>
      <h1>Rocket</h1>
    </>

  );
};

export default Rocket;
