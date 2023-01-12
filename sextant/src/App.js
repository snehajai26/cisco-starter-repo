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

class GetIP extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url: props.url,
        ipAddress: null
    };
  }
  componentDidMount() {
    fetch(this.state.url)
       .then(response => response.json())
       .then(data => this.setState( {ipAddress: data.ip} ));
  }
  render() {
    return (
      <span className="GetIP">
        {this.state.ipAddress}
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner text="Sextant" />
        <Exhibit name="IPv4">
          <GetIP url= "https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit name="IPv6">
          <GetIP url= "https://api64.ipify.org?format=json" />
        </Exhibit>
      </div>
    );
  }
}

export default App;
