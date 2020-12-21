import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './header'
import UserInput from './usersinput'

class App extends Component {
    render(){
        return (
            <section className="wrapper">
                <h1>Åka Tåg</h1>
                <Header />
                <UserInput />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));