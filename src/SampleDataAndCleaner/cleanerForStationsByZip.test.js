import { cleanerForStationsByZip } from './cleanerForStationsByZip';
// import { sampleStationDataFromZip }  from './sampleStationDataFromZip';
import * as Cleaner from './cleanerForStationsByZip';



 
it.skip('was called', () => {
  // const rawData = sampleStationDataFromZip;
  const stations = {fuel_stations: {
    otherStuff: 'other unwanted stuff',
    id: 47221,
    name: "Uftring Nissan",
    city: "Peoria",
    address: "7400 N Allen Rd",
    fuelType: "ELEC",
    connectorTypes: [
      "J1772"
    ],
    longitude: -89.630469,
    latitude: 40.777601
  }};

  const expected = {
    id: 47221,
    name: "Uftring Nissan",
    city: "Peoria",
    address: "7400 N Allen Rd",
    fuelType: "ELEC",
    connectorTypes: [
      "J1772"
    ],
    longitude: -89.630469,
    latitude: 40.777601
  }; 

  
});

