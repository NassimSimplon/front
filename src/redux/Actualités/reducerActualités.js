import {GET_ALL_ACTUALITÉS_SUCCEED ,GET_ACTUALITÉ_SUCCEED}from './actionType'
const actualitéState = {
    actualité:[]
};

export  const actualitéReducer = (state = actualitéState, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All actualité
        case   GET_ALL_ACTUALITÉS_SUCCEED :
            return {
                ...state,
                actualité: payload 
              }
              
                // get actualité
        case   GET_ACTUALITÉ_SUCCEED :
            return {
                ...state,
                actualité: payload 
               }
             
    }
return state
};