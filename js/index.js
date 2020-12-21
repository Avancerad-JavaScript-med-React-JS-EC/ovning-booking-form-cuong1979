import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Header from './header'

class App extends Component {
    render(){
        return (
            <section className="wrapper">
               <Header />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));