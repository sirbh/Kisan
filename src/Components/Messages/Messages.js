import React, { useEffect, useState } from 'react'
import cssClasses from './Messages.module.scss'
import axios from '../../Utilities/axios'
import Message from './Message/Message'
import { useDispatch } from 'react-redux'
import * as MessageActions from '../../Store/MessageActions'
import * as ModalActions from '../../Store/ModalActions'
import Loader from '../UIComponents/Loader'

export default (props)  =>{
    const [messages,setMessages] = useState([])
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch();

    const viewHandler = (id)=>{
       const message = messages.find(message=>message._id===id)
       dispatch(ModalActions.showMessage('message',message.message,message.userId.firstName+ " "+message.userId.lastName,message.userId.phone))
    }

    useEffect(()=>{
       setLoading(true)
       axios.get('/messages')
            .then(data=>{
                setLoading(false)
                setMessages(data.data)
            })
            .catch(err=>{
                setLoading(false)
                dispatch(MessageActions.showMessage('danger','Something went try agian later !!'))
            })
    },[])

    return <div className = {cssClasses.Messages}>
            {loading&&<Loader></Loader>}
            <h1>Sent Messages</h1>
            <hr/>
            {messages.length===0?<div>No Messages Sent</div>:messages.map((message,id)=>{
                  return <Message key = {id} id = {message._id} viewHandler = {viewHandler}name= {message.userId.firstName+" "+message.userId.lastName} date = {message.createdAt} message = {message.message} ></Message>
            })}
    </div>
}