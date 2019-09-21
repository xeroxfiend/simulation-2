import React, {Component} from "react";
import {Switch, Link, Route} from "react-router-dom";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
// import store, {
//     HANDLE_CHANGE_NAME,
//     HANDLE_CHANGE_ADDRESS,
//     HANDLE_CHANGE_CITY,
//     HANDLE_CHANGE_STATE,
//     HANDLE_CHANGE_ZIP
//   } from "../../store";

class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <header className="subheader-wizard">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </header>
        <div className="input-container"></div>
        <Switch>
          <Route path="/wizard/step1" component={Step1} />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </Switch>
      </div>
    );
  }
}

export default Wizard;
