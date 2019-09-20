import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return(
            <div className='Dashboard'>
                Dashboard
                <Link to='/wizard'>
                <button className="add-property">
                    Add New Property
                </button>
                </Link>
                <House />
            </div>
        )
    }
}

export default Dashboard
