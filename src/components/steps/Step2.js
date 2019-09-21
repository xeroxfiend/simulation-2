import React, {Component} from "react";
import {Link} from "react-router-dom";
import store, {STEP_2} from "../../store";

class Step2 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      img: reduxState.img
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        img: reduxState.img
      });
    });
  }

  updateStoreState() {
    store
      .dispatch({
        type: STEP_2,
        payload: {
          img: this.state.img
        }
      })
      this.props.history.push("/wizard/step3")
  }

  handleChangeImg(value) {
    this.setState({img: value});
  }

  render() {
    return (
      <div className="step2">
        <div className="input-container1">
          <div className="img-input">
            Image URL
            <input
              onChange={e => this.handleChangeImg(e.target.value)}
              type="text"
              className="image-url"
            />
          </div>
        </div>
        <div className="steps2-container">
          <Link to="/wizard/step1">
            <button className="previous-step2">Previous Step</button>
          </Link>
          <button
            onClick={() => this.updateStoreState()}
            className="next-step2"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  }
}

export default Step2;
