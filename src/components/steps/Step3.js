import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import store, {
//     HANDLE_CHANGE_NAME,
//     HANDLE_CHANGE_ADDRESS,
//     HANDLE_CHANGE_CITY,
//     HANDLE_CHANGE_STATE,
//     HANDLE_CHANGE_ZIP
//   } from "../../store";

class Step3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mortgage: '',
            rent: ''
        }
    }

    buildRequest() {
        axios.post('/api/house/add', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zip
        }).then(res => {
            this.props.history.push('/')
        })
    }

    handleChangeMortgage (value) {
        this.setState({mortgage: value })
    }

    handleChangeRent (value) {
        this.setState({rent: value })
    }

    render() {
        return(
            <div className='wizard'>
                
                <div className="input-container2">
                    <div className="mortgage-input">
                        Monthly Mortgage Amount
                        <input onChange={(e) => this.handleChangeMortgage(e.target.value)} type="text" className="mortgage input"/>
                    </div>                    
                    <div className="rent-input">
                        Desired Monthly Rent
                        <input onChange={(e) => this.handleChangeRent(e.target.value)} type="text" className="rent input"/>
                    </div>
                </div>
                <div className="complete-btn-container">
                <button onClick={() => this.buildRequest()} className="complete">Complete</button>
                </div>
            </div>
        )
    }
}

export default Step3