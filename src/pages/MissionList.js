import React from 'react';
import './Missions.css';
import { PropTypes } from 'prop-types';

const MissionList = ({ name, description }) => (
  <tr className="mission-list">
    <td className="mission-name">{name}</td>
    <td className="mission-desc">{description}</td>
    <td className="mission">***</td>
    <td className="mission">***</td>
  </tr>
);

export default MissionList;

MissionList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
