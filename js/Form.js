import React from 'react';

function Form(props) {
    console.log(props.formFromState.titel[0])
    return (
        <form>
            <label className="col-1">
                <input type="radio" name="klass" />
                {props.formFromState.klass[0]}
            </label>

            <label className="col-1">
                <input type="radio" name="klass" />
                {props.formFromState.klass[1]}
            </label>
            <label className="col-1">
                Antal biljetter
            </label>
            <label className="col-1">
                Titel
            </label>
            <select className="col-1">
                <option value="1">{props.formFromState.AntalBiljetter[0]}</option>
                <option value="2">{props.formFromState.AntalBiljetter[1]}</option>
                <option value="3">{props.formFromState.AntalBiljetter[2]}</option>
                <option value="4">{props.formFromState.AntalBiljetter[3]}</option>
                <option value="5">{props.formFromState.AntalBiljetter[4]}</option>
            </select>
            <select className="col-1">
                <option value="mr">{props.formFromState.titel[0]}</option>
                <option value="mrs">{props.formFromState.titel[1]}</option>
                <option value="ms">{props.formFromState.titel[2]}</option>
                <option value="dr">{props.formFromState.titel[3]}</option>
            </select>
            <label className="col-2">
                Namn
            </label>
            <input type="text" className="col-2" />
            <label className="col-2">
                E-post
            </label>
            <input type="text" className="col-2" />
            <label className="col-2">
                <input type="checkbox" />
                Godkänner villkoren
            </label>
        </form>
    )
}

export default Form;