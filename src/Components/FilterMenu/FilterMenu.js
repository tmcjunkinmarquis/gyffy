import React from 'react';
import Filter from '../../Containers/Filter/Filter';
import './FilterMenu.css';

const FilterMenu = (props)=>{
  return (
    <section className="FilterMenu">
      <Filter  filter="SHOW_ALL">All Stations</Filter>
      <Filter  filter="SHOW_ELEC">Electric Stations</Filter>
      <Filter  filter="SHOW_LPG">LPG Stations</Filter>
    </section>
  );
};

export default FilterMenu;