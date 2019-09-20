import React, {Component} from 'react'
import House from '../House/House'

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
                <House />
            </div>
        )
    }
}

export default Dashboard
