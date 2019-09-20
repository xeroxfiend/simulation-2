import React, {Component} from "react";
import House from "../House/House";
import {Link} from "react-router-dom";
import axios from 'axios'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
  }

  componentDidMount() {
    axios.get("/api/house").then(res => {
        this.setState({houseList: res.data});
        console.log(res)
    });
  }

  render() {
    const mappedHouse = this.state.houseList.map((house, index) => (
      <House houseData={house} key={index} />
    ));
    return (
      <div className="Dashboard">
        <header className="subheader-dash">
          Dashboard
          <Link to="/wizard">
            <button className="add-property">Add New Property</button>
          </Link>
        </header>
        <hr />
        {mappedHouse}
      </div>
    );
  }
}

export default Dashboard;
