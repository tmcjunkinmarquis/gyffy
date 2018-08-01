import React from 'react';
import { connect } from 'react-redux';
import './FilterMenu.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FilterMenu = (props)=>{
  const provideLinks = ()=>{
    return <div className="filter-menu">
      
      <Link to="/all" className="nav">All</Link>
      <Link to="/electric" className="nav">Electric</Link>
      <Link to="/lpg" className="nav">LPG</Link> 
    </div>;
  };

  return (
    <section className="FilterMenu">
      {props.location !== '' && provideLinks()}
    </section>
  );
};

export const mapStateToProps = (state) => ({
  location: state.location
});

export default withRouter(connect(mapStateToProps)(FilterMenu));

FilterMenu.propTypes = {
  location: PropTypes.number
};