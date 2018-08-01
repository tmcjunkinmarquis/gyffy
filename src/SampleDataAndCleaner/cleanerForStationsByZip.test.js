import { cleanerForStationsByZip } from './cleanerForStationsByZip';
import { sampleStationDataFromZip }  from './sampleStationDataFromZip';


 
it('was called', () => {
  // const rawData = sampleStationDataFromZip;
  const stations = {fuel_stations: 
    [
      {
        otherStuff: 'other unwanted stuff',
        station_name: "Uftring Nissan",
        city: "Peoria",
        street_address: "7400 N Allen Rd",
        fuel_type_code: "ELEC",
        ev_connector_types: [
          "J1772"
        ],
        longitude: -89.630469,
        latitude: 40.777601
      }
    ]   
  };

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

  expect(cleanerForStationsByZip(sampleStationDataFromZip)[0]).toEqual(expected)
});

