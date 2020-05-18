import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
//JG
// Endpoint!
const API = "http://localhost:3002/sushis"

class App extends Component {
  state = {
    sushi: [],
    beggining: 0,
    end: 4,
    eaten: [],
    budget: 40
  }

  componentDidMount(){
    //Deliverable 1
    fetch(API)
    .then( res => res.json())
    .then( sushi => this.setState({sushi}))
  }

  handleMore = () => {
    console.log(this.state.end)
    this.state.end + 4 > this.state.sushi.length ? this.setState({ beggining: 0, end: 4}) : this.setState({ beggining: this.state.beggining + 4, end: this.state.end + 4})
  }
  addMoney = (amount) => {
    console.log(amount)
    this.setState({budget: parseInt(this.state.budget) + parseInt(amount)})
  }

  updateSushi = (id) => {
    const eaten = this.state.sushi.find(sushi => sushi.id === id)
    eaten.eaten = true 
    this.setState({sushi: [...this.state.sushi, {eaten}]})
  }
  eatSushi = (price, id) => {

    price > this.state.budget ? alert("YOU DONT HAVE ENOUGH MONEY") : this.setState({eaten:[...this.state.eaten, "eaten"], budget: this.state.budget - price},this.updateSushi(id))
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer  eatSushi={this.eatSushi} handleMore={this.handleMore} sushi={this.state.sushi} beggining={this.state.beggining} end={this.state.end}/>
        <Table budget={this.state.budget} eaten={this.state.eaten} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;