import { useSelector } from 'react-redux';
import ReadyFlyRockets from '../components/ReadyFlyRockets/ReadyFlyRockets';
import JoinMissions from '../components/JoinMission/JoinMissions';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockReducer);
  const missions = useSelector((state) => state.missions);

  const readyFlyRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="reserve-rockets">
      <ReadyFlyRockets readyRockets={readyFlyRockets} object="Rockets" />
      <JoinMissions joinedMissions={joinedMissions} object="Mission" />
    </div>
  );
};

export default MyProfile;
