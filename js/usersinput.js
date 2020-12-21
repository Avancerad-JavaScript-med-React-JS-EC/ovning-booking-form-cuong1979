import React, {Component} from 'react';

class UserInput extends Component {
    render(){
        return (
            <section className='section'>
                <form>
                    <div>
                        <input type='radio'/>
                        <label>2:a klass</label>
                        <input type='radio'/>
                        <label>1:a klass</label>
                    </div>
                    <div>
                        <div>
                            <label>Antal biljetter</label>
                            <h4>1</h4>
                        </div>
                        <div>
                            <label>Titel</label>
                            <h4>Ms.</h4>
                        </div>
                        <div>
                            <label>Förnamn</label>
                            <input type="text" placeholder="Greta" />
                            <label>efternamn</label>
                            <input type="text" placeholder="Thunberg" />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label> Godkänner villkoren</label>
                        </div>
                        <div>
                            <input type='submit' value='Boka Biljetter' />
                        </div>

                    </div>
                </form>
            </section>
        )
    }
}

export default UserInput;