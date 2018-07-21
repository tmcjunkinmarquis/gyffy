import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="gyffy">gyffy</h1>
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
