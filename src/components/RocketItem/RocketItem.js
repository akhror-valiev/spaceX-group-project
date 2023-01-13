/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './RocketItem.css';
import { useDispatch } from 'react-redux';
import { reserveAction } from '../../redux/rocketSlice';

const RocketItem = ({
  image,
  name,
  description,
  reserved,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="rocket-li">
      <img className="rocket-img" src={image} alt="rocket-img" />
      <div className="rocket-container">
        <h1 className="rocket-name">{name}</h1>
        <p className="rocket-desc">
          {reserved && <span className="Rocket__reserved">Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button onClick={() => dispatch(reserveAction(id))} type="button" className="cancel-btn">
            Cancel Reservation
          </button>
        ) : (
          <button onClick={() => dispatch(reserveAction(id))} type="button" className="reserve-btn">
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketItem;
