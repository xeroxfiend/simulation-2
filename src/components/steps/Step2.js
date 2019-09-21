import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
// import store, {
//     HANDLE_CHANGE_NAME,
//     HANDLE_CHANGE_ADDRESS,
//     HANDLE_CHANGE_CITY,
//     HANDLE_CHANGE_STATE,
//     HANDLE_CHANGE_ZIP
//   } from "../../store";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
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
        <div className="previous-step2-container">
          <Link to='/wizard/step1'><button className="previous-step2">
            Previous Step
          </button>
          </Link>
        </div>
        <div className="next-step2-container">
          <Link to='/wizard/step3'><button className="next-step2">
            Next Step
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step2;
