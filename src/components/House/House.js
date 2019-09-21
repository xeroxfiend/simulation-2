import React, {Component} from "react";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "state"
    };
  }

  render() {
    return (
      <div className="house">
        <div className="img-container">
          <img src={this.props.houseData.image} alt="House"/>
        </div>
        <div className="info-container">
          <p className="pproperty">{this.props.houseData.name}</p>
          <p className="paddress">{this.props.houseData.address}</p>
          <p className="pcity">{this.props.houseData.city}</p>
          <p className="pstate">{this.props.houseData.state}</p>
          <p className="pzip">{this.props.houseData.zipcode}</p>
        </div>
        <div className="mortgage-rent-container">
          <p className='pmortgage'>{this.props.houseData.monthly_mortgage}</p>
          <p className='prent'>{this.props.houseData.desired_rent}</p>
        </div>
        <div className="button-container">
          <button
            onClick={() => this.props.deleteFn(this.props.houseData.house_id)}
            className="delete"
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default House;
