import React, { Component } from 'react';
import './App.css';
import FilterMenu from '../../Components/FilterMenu/FilterMenu';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../../Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />        
        <FilterMenu />
        <CardContainer /> 
      </div>
    );
  }
}

export default App;
