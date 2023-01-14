import React from 'react';
import PropTypes from 'prop-types';
import './ReadyFlyRockets.css';

const ReadyFlyRockets = ({ readyRockets, object }) => (

  <div className="container">
    <h1>
      My
      {object}
    </h1>

    {
            readyRockets.length ? (
              <ul className="list">
                {readyRockets.map((rocket) => (
                  <li key={rocket.id} className="list-item">
                    {rocket.name}

                  </li>
                ))}

              </ul>
            ) : (
              <p className="no-reserve">No Reservation</p>

            )
        }

  </div>
);

ReadyFlyRockets.propTypes = {
  readyRockets: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,

};

export default ReadyFlyRockets;
