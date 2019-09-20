import React, {Component} from "react";
import House from "../House/House";
import {Link} from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    }
    this.getData = this.getData.bind(this)
  }

  getData() {
    axios.get("/api/house").then(res => {
      this.setState({houseList: res.data});
    });
  }

  componentDidMount() {
   this.getData()
  }

  delete(id) {
    axios.delete(`/api/house/${id}`).then(() => {
        this.getData()      
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
        <p className="home-listings">Home Listings</p>
        {mappedHouse}
      </div>
    );
  }
}

export default Dashboard;
