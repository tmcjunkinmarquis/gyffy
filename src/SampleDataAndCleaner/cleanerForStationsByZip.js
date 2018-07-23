import {sampleStationDataFromZip} from './sampleStationDataFromZip';

export const cleanerForStationsByZip = (stations) => {
  // console.log(stations.fuel_stations);
  
  return stations.fuel_stations.reduce((acc, station) => {
    const newStation = {
      name: station.station_name,
      city: station.city,
      address: station.street_address,
      fuelType: station.fuel_type_code,
      connectorTypes: station.ev_connector_types
    };
    acc.push(newStation);
    return acc;
  }, []);
    
};