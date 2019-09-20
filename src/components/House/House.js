import React, {Component} from 'react'

class House extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return(
            <div className='house'>
                {this.props.houseData.name}
            </div>
        )
    }
}

export default House