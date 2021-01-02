import React from "react";
import BackDrop from "./BackDrop";
import cssClasses from './Message.module.scss'
import {SimpleButton} from '../UIComponents/Button'
import { useDispatch, useSelector } from "react-redux";
import * as MessageActions from '../../Store/MessageActions'

export default () => {
    const messageType = useSelector(state=>state.message.type)
    const message = useSelector(state=>state.message.message)
    const dispatch = useDispatch()
    const style = {
        backgroundColor:messageType==='success'?'#567E3A':'#e03531'
    }
  return (
    <BackDrop zValue = {202}>
      <div className={cssClasses.Message}>
        <div className={cssClasses.Head} style = {style}>
        <h2>{messageType==='success'?'Success':'Error'}</h2>
        </div>
        <p>{message}</p>
        <div className = {cssClasses.btn}>
          <SimpleButton success = {messageType==='success'}onClick={()=>{dispatch(MessageActions.hideMessage())}} >{messageType==='success'?'Ok':'Cancal'}</SimpleButton>
        </div>
      </div>
    </BackDrop>
  );
};
