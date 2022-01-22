 //initial State
 const servicetate = {
    service:[]
};
export  const serviceReducer = (state = servicetate, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All Services
        case   'GET_ALL_SERVICES_SUCCEED' :
            return {
                ...state,
                service: payload 
              }
              case   "DELETE_SERVICES_SUCCED":
                    
                return    {
                   
                   ...state,
                   service: state.service.filter(data => data._id !=  payload  ) 
                  }
                  case   "ADD_SERVICE_SUCCED":
                    return {
                        ...state,
                        service: [...state.service, payload]
                  
                       }
       
    }
return state
};