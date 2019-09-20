import React, {Component} from 'react'

class House extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return(
            <div className='house'>
                House
            </div>
        )
    }
}

export default House