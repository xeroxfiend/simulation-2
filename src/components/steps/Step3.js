import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import store, {STEP_3} from "../../store";

class Step3 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })
    })
  }

  buildRequest() {
    store.dispatch({
      type: STEP_3,
      payload: {
        mortgage: this.state.mortgage,
        rent: this.state.rent
      }
    })
    axios
      .post("/api/house/add", {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zip,
        img: this.state.img,
        mortgage: this.state.mortgage,
        rent: this.state.rent
      })
      .then(res => {
        this.props.history.push("/");
      });
  }

  handleChangeMortgage(value) {
    this.setState({mortgage: value});
  }

  handleChangeRent(value) {
    this.setState({rent: value});
  }

  render() {
    return (
      <div className="wizard">
        <div className="input-container2">
          <div className="mortgage-input">
            Monthly Mortgage Amount
            <input
              onChange={e => this.handleChangeMortgage(e.target.value)}
              type="text"
              className="mortgage input"
            />
          </div>
          <div className="rent-input">
            Desired Monthly Rent
            <input
              onChange={e => this.handleChangeRent(e.target.value)}
              type="text"
              className="rent input"
            />
          </div>
        </div>
        <div className="btns-container">
          <Link to="/wizard/step2">
            <button className="previous-step3">Previous Step</button>
          </Link>
          <button onClick={() => this.buildRequest()} className="complete">
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default Step3;
