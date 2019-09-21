import React, {Component} from "react";
import {Switch, Link, Route} from "react-router-dom";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import store, {CLEAR} from "../../store";

class Wizard extends Component {
  constructor() {
    super();
  }

  // todo make this work

  // updateStoreState() {
  //   store.dispatch({
  //     type: CLEAR,
  //     payload: {
  //       name: "",
  //       address: "",
  //       city: "",
  //       state: "",
  //       zip: null,
  //       img: "",
  //       mortgage: null,
  //       rent: null
  //     }
  //   });
  //   this.props.history.push("/");
  // }

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
