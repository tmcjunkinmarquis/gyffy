import { apiKey } from '../../apiKey'

export const locationFetch = (location)=>{
  const zipcode = location;
  const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&location=${zipcode}``
  const response = fetch(url)
}