import {fetchAdmin} from "../Requests/requests"
import jwt_decode from "jwt-decode";

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
 

export const loginAdmin =(token)=> async(dispatch) =>{
    
    try{
        
       
     const res =  await fetchAdmin(token)
            if (res.status === 200){
              
                const {token} = res.data
                 const result = jwt_decode(token)
if(result.role === 'admin')

localStorage.setItem('token',token)
                
                 
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:{
                        token 
                    }
                   
                })
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_FAILED",
                        payload:{error:res.data.error}
                    })
                }
    
            }
          
        
       
       
    }
    catch (error) {
              console.log(error);
             }
}

export const isAdminLoggedIn = () =>{
    return async dispatch =>{
        const result = localStorage.getItem('token')
        if(result){
            const token = jwt_decode(result)

           dispatch({
                type:'LOGIN_SUCCESS',
                payload:{
                    token 
                }
            })
        }else{
            dispatch({type:'LOGIN_FAILED',
                payload:{
                    
                    error:'Failed to login'
                }
            })
        }
    }

}

export const signout = () =>{
    return async dispatch =>{
        localStorage.clear()
        dispatch({
            type:'LOGOUT_REQUEST'
        })
    }
}

