import React, {Component} from "react";
import {Link} from "react-router-dom";
import store, {STEP_1} from "../../store";

class Step1 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      });
    });
  }

  updateStoreState() {
    store
      .dispatch({
        type: STEP_1,
        payload: {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        }
      })
      this.props.history.push("/wizard/step2")
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  handleChangeAddress(value) {
    this.setState({address: value});
  }

  handleChangeCity(value) {
    this.setState({city: value});
  }

  handleChangeState(value) {
    this.setState({state: value});
  }

  handleChangeZip(value) {
    this.setState({zip: value});
  }

  render() {
    return (
      <div className="step1">
        <div className="input-container">
          <div className="property-input">
            Property name
            <input
              onChange={e => this.handleChangeName(e.target.value)}
              type="text"
              className="property-name input"
            />
          </div>
          <div className="address-input">
            Address
            <input
              onChange={e => this.handleChangeAddress(e.target.value)}
              type="text"
              className="address input"
            />
          </div>
          <div className="city-input">
            City
            <input
              onChange={e => this.handleChangeCity(e.target.value)}
              type="text"
              className="city input"
            />
          </div>
          <div className="state-input">
            State
            <input
              onChange={e => this.handleChangeState(e.target.value)}
              type="text"
              className="state input"
            />
          </div>
          <div className="zip-input">
            Zip
            <input
              onChange={e => this.handleChangeZip(e.target.value)}
              type="text"
              className="zip input"
            />
          </div>
        </div>
        <div className="steps1-container">
          <button
            onClick={() => this.updateStoreState()}
            className="next-step1"
          >
            Next Step
          </button>
        </div>
      </div>
    )
  }
}

export default Step1;
