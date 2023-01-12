import React, { Component } from 'react';
import './App.css';

class Banner extends Component {
  render() {
      return (
          <div className="Banner">
              <h1>{this.props.text}</h1>
          </div>
      );
  }
}

class Exhibit extends Component {
  render() {
    return (
      <div className="Exhibit">
        <h2 className="ExhibitHeading">{this.props.name}</h2>
        <div className="ExhibitContent">{this.props.children}</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner text="Sextant" />
        <Exhibit name="Exhibit 1"></Exhibit>
        <Exhibit name="Exhibit 2"></Exhibit>
      </div>
    );
  }
}

export default App;
