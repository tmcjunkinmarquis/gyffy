// import React from 'react';
import { locationFetch } from './apiCalls';
import { apiKey } from '../apiKey';
import { sampleStationDataFromZip } from '../SampleDataAndCleaner/sampleStationDataFromZip';


describe('locationFetch', () => {
  let zipcode;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 200, json: () => Promise.resolve(sampleStationDataFromZip) }));
    zipcode = 61615
  });

  // below fails  
  it('should call locationFetch with the correct parameters', async () => {
    const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&location=${zipcode}`;
    await locationFetch(zipcode);
    expect(window.locationFetch).toHaveBeenCalledWith(url);
  });

  // below passes
  it('should return the correct data', async () => {
    const expected = sampleStationDataFromZip;
    const result = await locationFetch(zipcode);
    expect(result).toEqual(expected);
  });

  // below fails
  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(Error('Fetch failed')));
    const expected = 'Fetch failed';
    const result = await locationFetch(zipcode);
    expect(result).toEqual(expected);
  });

});