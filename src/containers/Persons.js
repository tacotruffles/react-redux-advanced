import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/action';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.people.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDelPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        people: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDelPerson: (id) => dispatch({type: actionTypes.DEL_PERSON, personId: id})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);