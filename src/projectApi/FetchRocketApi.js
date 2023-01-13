const FETCH_ROCKET_API = 'https://api.spacexdata.com/v3/rockets';

const FetchRocketApi = async () => {
  const data = await fetch(FETCH_ROCKET_API);
  const getResult = await data.json();
  return getResult;
};

export default FetchRocketApi;
