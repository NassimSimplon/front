 //initial State
const usertate = {
    user:[]
};
export  const userReducer = (state = usertate, action ) => {
    const { type, payload } = action;
    switch( type) {
        // get All User
        case   'GET_ALL_USERS_SUCCEED' :
            return {
                ...state,
                user: payload 
              }
             
    }
return state
};