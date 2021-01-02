import * as Actions from './Actions'
import * as MessageActions from './MessageActions'
import axios from '../Utilities/axios'
import mainAxios from 'axios'

export const loadContacts = (data)=>{
    return {type:Actions.LOAD_CONTACTS,payload:{data}}
}

export const sendReq = ()=>{
    return {type:Actions.SEND_REQ}
}

export const setError = (code,message)=>{
    return {type:Actions.SET_ERROR,payload:{code,message}}
}

let cancal;
export const fetchItems = (query)=>{
   return dispatch =>{
       
       if(cancal)
       {
           console.log('cancaled')
           cancal()
       }
       dispatch(sendReq());
       axios.post('/querycontacts',{
           query:query||""
       },{
           cancelToken: new mainAxios.CancelToken(c=>cancal = c)
       })
            .then(data=>{
                // console.log(data.data)
                dispatch(loadContacts(data.data))
            })
            .catch(error=>{
                if(mainAxios.isCancel(error)) return
                if(error.response)
            
                    // console.log(error.response.status)
                    dispatch(setError(error.response.status,error.response.data.message))
                    dispatch(MessageActions.showMessage('danger','Something went wrong try again later'))
                
                // dispatch(setError('Something Went Wrong'))
            })
   }
}

