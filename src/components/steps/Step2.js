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

class Step2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
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

    handleChangeImg (value) {
        this.setState({img: value })
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
                <div className="input-container1">
                    <div className="img-input">
                        Image URL
                        <input onChange={(e) => this.handleChangeImg(e.target.value)} type="text" className="image-url"/>                      
                    </div>
                </div>
                <div className="complete-btn-container">
                <button onClick={() => this.buildRequest()} className="complete">Complete</button>
                </div>
            </div>
        )
    }
}

export default Step2