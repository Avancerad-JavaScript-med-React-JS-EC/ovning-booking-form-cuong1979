import React, { Component } from 'react';

import Destination from './destination';
import Form from './form';
import Button from './button';

class App extends Component {
    constructor() {
        super()
        this.state = {
            appTitle: 'Åka tåg',
            from: 'Stockholm',
            to: 'Göteborg',
            form: {
                klass: ['2:a klass', '1:a klass'],
                AntalBiljetter: [1, 2, 3, 4, 5],
                titel:['Mr.','Mrs.','Ms.','Dr.']
            }
        }
    }
        GetFullName(name){

        }

    render() {
        return (
            <section className="booking">
                <h1>{this.state.appTitle}</h1>
                <Destination from={this.state.from} to={this.state.to} />
                <Form formFromState={this.state.form} getNameFromForm={this}/>
                <Button />
            </section>
        )
    }
}

export default App;