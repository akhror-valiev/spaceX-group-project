/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './RocketItem.css';

const RocketItem = ({
  flickr_images,
  rocket_name,
  description,
  reserved = false,
}) => (
  <li className="rocket-li">
    <img className="rocket-img" src={flickr_images[0]} alt="rocket-img" />
    <div className="rocket-container">
      <h1 className="rocket-name">{rocket_name}</h1>
      <p className="rocket-desc">
        {reserved ? <span className="Rocket__reserved">Reserved</span> : null}
        {description}
      </p>
      {reserved ? (
        <button type="button" className="cancel-btn">
          Cancel Reservation
        </button>
      ) : (
        <button type="button" className="reserve-btn">
          Reserve Rocket
        </button>
      )}
    </div>
  </li>
);

RocketItem.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

RocketItem.default = {
  reserved: true,
};

export default RocketItem;
