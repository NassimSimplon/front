import {GET_ALL_ACTUALITÉS_SUCCEED, GET_ALL_ACTUALITÉS_FAILED,GET_ACTUALITÉ_SUCCEED,GET_ACTUALITÉ_FAILED }from './actionType'
import {fetchAllActualités ,fetchGetActualité} from '../../Request/request'
import axios from 'axios'
//Get All  Actualités
     export const getAllActualités = () => {
        return dispatch => {
            fetchAllActualités()
            .then (Actualité => dispatch (
                {type: GET_ALL_ACTUALITÉS_SUCCEED,payload: Actualité}) 
            )
    
            .catch(err=>dispatch( {
                type: GET_ALL_ACTUALITÉS_FAILED,
                payload: err
              }))
        }
    
     }

     //Get Actualité
  
     export const getActualité=(id)=> async (dispatch)=> {
        try{
        const res = await axios.get(`http://localhost:4000/Nass_X/Actualite/get/${id}`)
        dispatch({
        type:GET_ACTUALITÉ_SUCCEED,
        payload:res.data 
        
        })
        console.log('getPubBy',res.data)
        }
        catch (error) {
                console.log(error);
               }
        }