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
            <header className='Header'>
                <img className='header-image' src={housericon} alt="Houser icon"/>
                Houser
            </header>
        )
    }
}

export default Header