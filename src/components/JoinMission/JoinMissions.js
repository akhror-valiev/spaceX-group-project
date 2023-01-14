import React from 'react';
import PropTypes from 'prop-types';

const JoinMissions = ({ joinedMissions, object }) => (
  <div className="container">
    <h1>
      My
      {object}
    </h1>
    {joinedMissions.length ? (
      <ul className="list">
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id} className="list-item">
            {mission.mission_name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="no-reserve">No Mission Joined</p>
    )}
  </div>
);

export default JoinMissions;

JoinMissions.propTypes = {
  joinedMissions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
  })).isRequired,
  object: PropTypes.string,
};

JoinMissions.defaultProps = {
  object: '',
};
