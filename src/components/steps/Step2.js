import React, {Component} from "react";
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

  updateStoreState(str) {
    store.dispatch({
      type: STEP_2,
      payload: {
        img: this.state.img
      }
    })
    this.props.history.push(str);
  }

  handleChangeImg(value) {
    this.setState({img: value});
  }

  render() {
    return (
      <div className="step2">
        <div className="input-container1">
          <div className="img-input">
            <p className='pimageurl'>Image URL</p>
            <input
              defaultValue={this.state.img}
              onChange={e => this.handleChangeImg(e.target.value)}
              type="text"
              className="image-url"
            />
          </div>
        </div>
        <div className="steps2-container">
          <button
            onClick={() => this.updateStoreState("/wizard/step1")}
            className="previous-step2"
          >
            Previous Step
          </button>

          <button
            onClick={() => this.updateStoreState("/wizard/step3")}
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
