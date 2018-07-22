import { apiKey } from '../apiKey';

export const locationFetch = async (location)=>{
  const zipcode = location;
  const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&location=${zipcode}`;
  const response = await fetch(url);
  const stationData = await response.json();
  return stationData.results;
};

