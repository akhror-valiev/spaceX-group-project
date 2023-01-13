import React from 'react';

import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missions/missions';
import './Missions.css';

const MissionList = ({
  name, description, reserved, id,
}) => {
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr className="mission-list">
      <td className="mission-name">{name}</td>
      <td className="mission-desc">{description}</td>
      <td className="mission">
        {
          reserved
            ? (<Badge className="badge-size info">Active Member</Badge>)
            : (<Badge className="badge-size secondary">Not A Member</Badge>)
        }
      </td>
      <td className="mission">
        {
          reserved
            ? (<Button onClick={() => handleLeaveMission(id)} className="leave-mission">Leave Mission</Button>)
            : (<Button onClick={() => handleJoinMission(id)} className="join-mission">Join Mission</Button>)
        }
      </td>
    </tr>
  );
};

export default MissionList;

MissionList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
=======
import './Missions.css';

const MissionList = () => (
  <div>mission list</div>
);

export default MissionList;
