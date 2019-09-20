import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import store, {
//     HANDLE_CHANGE_NAME,
//     HANDLE_CHANGE_ADDRESS,
//     HANDLE_CHANGE_CITY,
//     HANDLE_CHANGE_STATE,
//     HANDLE_CHANGE_ZIP
//   } from "../../store";

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
    }

    handleChangeName (value) {
        this.setState({name: value })
        console.log(this.state.name)
    }

    handleChangeAddress (value) {
        this.setState({address: value })
        console.log(this.state.address)
    }

    handleChangeCity (value) {
        this.setState({city: value })
        console.log(this.state.city)
    }

    handleChangeState (value) {
        this.setState({state: value })
        console.log(this.state.state)
    }

    handleChangeZip (value) {
        this.setState({zip: value })
        console.log(this.state.zip)
    }

    render() {
        return(
            <div className='wizard'>
                <header className="subheader-wizard">
                    <h1>Add New Listing</h1>
                <Link to='/'>
                <button className="cancel-btn">
                    Cancel
                </button>
                </Link>
                </header>
                <div className="input-container">
                    <div className="property-input">
                        Property name
                        <input onChange={(e) => this.handleChangeName(e.target.value)} type="text" className="property-name input"/>
                    </div>
                    <div className="address-input">
                        Address
                        <input onChange={(e) => this.handleChangeAddress(e.target.value)} type="text" className="address input"/>
                    </div>
                    <div className="city-input">
                        City
                        <input onChange={(e) => this.handleChangeCity(e.target.value)} type="text" className="city input"/>
                    </div>
                    <div className="state-input">
                        State
                        <input onChange={(e) => this.handleChangeState(e.target.value)} type="text" className="state input"/>
                    </div>
                    <div className="zip-input">
                        Zip
                        <input onChange={(e) => this.handleChangeZip(e.target.value)} type="text" className="zip input"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wizard