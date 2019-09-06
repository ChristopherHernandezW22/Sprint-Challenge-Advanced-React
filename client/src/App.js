import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    console.log("first render (mounting)")
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(data => this.setState({ players:data }));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        < />
      </div>
    );
  }

}

export default App;
