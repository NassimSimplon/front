import {GET_ALL_RÉALISATIONS_SUCCEED }from './actionTypes'
const réalisationState = {
    réalisation:[]
};

export  const réalisationReducer = (state = réalisationState, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   GET_ALL_RÉALISATIONS_SUCCEED :
            return {
                ...state,
                réalisation: payload 
              }
             
    }
return state
};