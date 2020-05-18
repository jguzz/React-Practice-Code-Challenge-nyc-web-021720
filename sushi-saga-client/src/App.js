import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
//JG
// Endpoint!
const API = "http://localhost:3002/sushis"

class App extends Component {
  state = {
    sushi: []
  }

  componentDidMount(){
    //Deliverable 1
    fetch(API)
    .then( res => res.json())
    .then( sushi => this.setState({sushi}))
  }

  render() {
    console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;