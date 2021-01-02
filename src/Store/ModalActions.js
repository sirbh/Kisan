import * as Actions from './Actions'

export const showMessage =  (type,message,name,phone,id)=>{
    return {type:Actions.SHOW_MODAL,payload:{type,message,name,phone,id}}
}

export const hideMessage = ()=>{
    return {type:Actions.HIDE_MODAL}
}
