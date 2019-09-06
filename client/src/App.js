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
        <SoccerPlayer players={this.state.players}/>
      </div>
    );
  }
}

function SoccerPlayer(props) {
  return (
    <div>
      {props.players.map(player => (
        <div key={player.id}> {player.name}
                              {player.id}
                              {player.country}
                              {player.searches} 
        </div>))}
    </div>
  )
}

export default App;
