import {GET_ALL_SERVICES_SUCCEED }from './actionsType'
const statez = {
    service:[]
};

export  const ServicesReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   GET_ALL_SERVICES_SUCCEED :
            return {
                ...state,
                service: payload 
              }
              
             
    }
return state
};