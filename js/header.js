import React, { Component } from 'react';

class Header extends Component {

    render () {
        return(
            <div className='header'>
                
                <StadName stadname='Stockholm' time='10:30'/>
                <StadName stadname='Göteborg' time='14:45'/>
                
            </div>
        )
    }
}

class StadName extends Component {
    render(){
        return (
            <div>
                <h3>{this.props.stadname}</h3>
                <h6>{this.props.time}</h6>
            </div>
            
           
        )
    }
}

export default Header;


