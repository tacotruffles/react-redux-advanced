import * as actionTypes from './action';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_PERSON:
            //console.log(actionTypes.ADD_PERSON);

            // Create a new Person object
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }

            // Immutable State: Use concat to return a brand new persons property
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DEL_PERSON:
            //console.log(actionTypes.DEL_PERSON + ": " +  action.value)

            // Immutable state: use .filter to return a completely new array without the action.value at index
            return {
                ...state,
                persons: state.persons.filter((person, index) => person.id !== action.personId)
            };
        default:
            //console.log('action: default')
            return state;
    }
};

export default reducer;