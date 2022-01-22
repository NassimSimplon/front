import {GET_ALL_TÉMOIGNAGES_SUCCEED }from './actionType'
const statez = {
    témoignage:[]
};

export  const témoignagesReducer = (state = statez, action ) => {
    const { type, payload } = action;
    switch( type) {
        case   GET_ALL_TÉMOIGNAGES_SUCCEED :
            return {
                ...state,
                témoignage: payload 
              }
              case   "DELETE_SERVICES_SUCCED":
                    
                return    {
                   
                   ...state,
                   témoignage: state.témoignage.filter(data => data._id !=  payload  ) 
                  }
                  case   "ADD_CONTACT_SUCCEED":
                    return {
                        ...state,
                        témoignage: [...state.témoignage, payload]
                  
                       }
             
    }
return state
};