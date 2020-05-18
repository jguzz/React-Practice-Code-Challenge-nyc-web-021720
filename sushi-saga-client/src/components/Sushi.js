import React, { Fragment } from "react";

class Sushi extends React.Component {
  toggleEaten = () => {
    this.props.eaten
      ? null
      : this.props.eatSushi(this.props.price, this.props.id);
  };
  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.toggleEaten}>
          {
            /* Tell me if this sushi has been eaten! */

            this.props.eaten ? null : (
              <img src={this.props.img_url} width="100%" />
            )
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
