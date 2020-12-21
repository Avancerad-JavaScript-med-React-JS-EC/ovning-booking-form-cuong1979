import React, { Component } from 'react';

class Header extends Component {

    render () {
        return(
            <div>
                <h1>Åka Tåg</h1>
                <StadName stadname='Stockholm'/>
                <StadName stadname='Göteborg'/>
            </div>
        )
    }
}

class StadName extends Component {
    render(){
        return (
            <h3>{this.props.stadname}</h3>
        )
    }
}

export default Header;


