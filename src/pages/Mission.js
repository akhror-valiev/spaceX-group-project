import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import MissionList from './MissionList';
import './Missions.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <Table>


  return (
    <Table className="table">

      <thead>
        <tr>
          <th className="mission-name">Name</th>
          <th className="mission-description">Description</th>
          <th className="mission-status">Status</th>
          <th className="mission-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionList
            className="mission-list"
            name={mission.mission_name}
            description={mission.description}
            key={mission.mission_id}

            id={mission.mission_id}
            reserved={mission.reserved}


          />
        ))}
      </tbody>
    </Table>
  );
};
export default Mission;
