import { apiKey } from '../apiKey';

export const locationFetch = async (location)=>{
  const zipcode = location;
  const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&location=${zipcode}`;
  // const url = 'https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=8gIFYN4zAfGe58aAF4mxE9A8j0AFcSdZGavbO55G&location=61615'
  
  const response = await fetch(url);
  
  const stationData = await response.json();
  // return stationData.fuel_stations;
  return stationData;
};

