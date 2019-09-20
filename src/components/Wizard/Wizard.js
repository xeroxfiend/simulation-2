import React, {Component} from 'react'

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return(
            <div className='wizard'>
                Wizard
            </div>
        )
    }
}

export default Wizard