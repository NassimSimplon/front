
 import {ADD_CONTACT_SUCCEED }from './actionType'
 import {fetchAddContact } from '../../Request/request'
export const addContact=(name, email, subject, message)=> async (dispatch) =>{
    try{
        const res=await fetchAddContact (name, email, subject, message)
        dispatch ({
            type:"ADD_CONTACT_SUCCEED",
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}