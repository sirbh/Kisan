import React, { useEffect, useState } from 'react'
import cssClasses from './Messages.module.scss'
import axios from '../../Utilities/axios'
import Message from './Message/Message'
import { useDispatch } from 'react-redux'
import * as MessageActions from '../../Store/MessageActions'
import * as ModalActions from '../../Store/ModalActions'

export default (props)  =>{
    const [messages,setMessages] = useState([])
    const dispatch = useDispatch();

    const viewHandler = (id)=>{
       const message = messages.find(message=>message.id===id)
       dispatch(ModalActions.showMessage('message',message.message,message.to.name,message.phone,message.to.UserId))
    }

    useEffect(()=>{
       axios.get('/messages')
            .then(data=>{
                setMessages(data.data)
            })
            .catch(err=>{
                dispatch(MessageActions.showMessage('danger','Something went try agian later !!'))
            })
    },[])

    return <div className = {cssClasses.Messages}>
            <h1>Sent Messages</h1>
            <hr/>
            {messages.length===0?<div>No Messages Sent</div>:messages.map((message,id)=>{
                  return <Message key = {id} id = {message.id} viewHandler = {viewHandler}name= {message.to.name} date = {message.date} message = {message.message} date = {message.date}></Message>
            })}
    </div>
}