import { apiKey } from '../apiKey.json';

export const locationFetch = async (location)=>{
  const zipcode = location;
  // const url = https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85,ELEC&state=CA&limit=2&api_key=${apiKey}
  const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&location=${zipcode}`;
  const response = await fetch(url);
  const stationData = await response.json();
  return stationData;
};

