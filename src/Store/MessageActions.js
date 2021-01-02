import * as Actions from './Actions'

export const showMessage =  (type,message)=>{
    return {type:Actions.SHOW_MESSAGE,payload:{type,message}}
}

export const hideMessage = ()=>{
    return {type:Actions.HIDE_MESSAGE}
}
