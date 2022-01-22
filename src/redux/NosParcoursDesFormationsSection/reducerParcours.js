import {GET_ALL_PARCOURS_SUCCEED }from './actionType'
const parcoursState = {
    parcours:[]
};

export  const parcoursReducer = (state = parcoursState, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All Parcours
        case   GET_ALL_PARCOURS_SUCCEED :
            return {
                ...state,
                parcours: payload 
              }
             
    }
return state
};