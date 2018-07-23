import React from 'react';

const Station = (props)=>{

  console.log(props);
  
  return <div>
    <h2>{props.station.name}</h2>
    <h3>{props.station.address}</h3>
  </div>
}

export default Station;