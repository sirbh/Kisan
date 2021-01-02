import React, { useState } from "react";
import GenralModal from "../UIComponents/GenralModal";
import cssClasses from "./MessageModal.module.scss";
import {SimpleButton} from '../UIComponents/Button'
import { useDispatch, useSelector } from "react-redux";
import * as ModalActions from '../../Store/ModalActions'
import * as MessageActions from '../../Store/MessageActions'
import axios from '../../Utilities/axios'

export default () => {

  const [messageText,setMessageText] = useState('Hi. Your OTP is: '+Math.floor(100000 + Math.random() * 900000))
  const name  = useSelector(state=>state.modal.name)
  const id  = useSelector(state=>state.modal.id)
  const phone  = useSelector(state=>state.modal.phone)
  const type  = useSelector(state=>state.modal.type)
  const message  = useSelector(state=>state.modal.message)
  const dispatch = useDispatch()
  
  const Header =  type ==='compose'?'Compose Message':'Sent Message';

  const sendHandler = ()=>{
       axios.post('/message',{
         message:messageText,
         id:id,
         date:new Date(),
         name,
         phone
       }).then(resp=>{
           if(resp.status === 200)
           {
            dispatch(ModalActions.hideMessage());
            dispatch(MessageActions.showMessage('success','Message sent successfully'))
           }
       }).catch(err=>{
          dispatch(MessageActions.showMessage('danger','Something went try agian later !!'))
       })
  }

  return (
    <GenralModal Heading = {Header}>
      <div className={cssClasses.MessageForm}>
        <table>
          <tbody>
          <tr>
            <th>To:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{phone}</td>
          </tr>

          </tbody>
        </table>
        <div className={cssClasses.Message}>
          <label>Message:</label>

          {type === 'compose'?<textarea value = {messageText} onChange = {(e)=>{setMessageText(e.target.value)}}id="w3review" name="textArea" rows="4" cols="50"></textarea>
                             :<p>{message}</p>   }
          <div className = {cssClasses.btn}>
              <SimpleButton onClick = {()=>{dispatch(ModalActions.hideMessage())}} >Cancal</SimpleButton>
              {type==='compose'?<SimpleButton success onClick = {()=>sendHandler()}>Send</SimpleButton>:null}
          </div>
        </div>
      </div>
    </GenralModal>
  );
};
