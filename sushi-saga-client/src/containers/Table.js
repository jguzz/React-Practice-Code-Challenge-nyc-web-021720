import React, { Fragment } from "react";

class Table extends React.Component {
  state = {
    money: 0,
  };

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };
  handleChange = (e) => {
    this.setState({money: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(this.state.money)
  }
  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.budget} remaining!
          <form onSubmit={this.handleSubmit}>
            <label>
              Add More Money? 🍃
              <input onChange={this.handleChange} type="text" name="money" value={this.state.money} />
            </label>
            <input type="submit" value="Add" />
          </form>
        </h1>

        <div className="table">
          <div className="stack">
            {
              /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
              this.renderPlates(this.props.eaten)
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Table;
