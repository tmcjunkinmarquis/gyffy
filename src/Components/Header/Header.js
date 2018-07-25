import React from 'react';
import './Header.css';
import { Route } from 'react-router-dom';
import SearchForm from '../../Containers/SearchForm/SearchForm';

const Header = ()=>{
  return (
    <div className="app-header">
      <h1 className="gyffy-logo">gyffy</h1>
      <Route
        exact path="/"
        component={SearchForm}
      />
    </div>
  );
};

export default Header;