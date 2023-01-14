import { useSelector } from 'react-redux';
import ReadyFlyRockets from '../components/ReadyFlyRockets/ReadyFlyRockets';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockReducer);

  const readyFlyRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="reserve-rockets">
      <ReadyFlyRockets readyRockets={readyFlyRockets} object="Rockets" />
    </div>
  );
};

export default MyProfile;
