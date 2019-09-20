import React, {Component} from 'react'
import housericon from '../../assets/housericon.JPG'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            placeholder: 'state'
        }
    }

    render() {
        return (
            <div className='Header'>
                <img className='header-image' src={housericon} alt="Houser icon"/>
                Houser
            </div>
        )
    }
}

export default Header