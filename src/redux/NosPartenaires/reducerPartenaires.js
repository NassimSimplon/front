import {GET_ALL_PARTENAIRES_SUCCEED }from './actionType'
//initial State
const partenaireState = {
    partenaires:[]
};
export  const partenairesReducer = (state = partenaireState, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All Partenaires
        case   GET_ALL_PARTENAIRES_SUCCEED :
            return {
                ...state,
                partenaires: payload 
              }
             
    }
return state
};