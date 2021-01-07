import React, { useEffect, useState } from 'react'
import cssClasses from './UserDetails.module.scss'
import {CentredButton} from '../UIComponents/Button'
import {BASE_URL} from '../../Utilities/appConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'
import axios from '../../Utilities/axios'
import * as ModalActions from '../../Store/ModalActions'

export default (props)=>{
    const history = useHistory()
    const {id} = useParams();
    const [user,setUser] = useState({})
    const dispatch = useDispatch()

    const messageHandler = ()=>{
        dispatch(ModalActions.showMessage("compose",null,user.firstName+" "+user.lastName,user.phone,user._id))
    }
    
    useEffect(()=>{
        axios.get('/usercontact/',{params:{
            id
        }})
             .then(data=>{
                 setUser(data.data)
             })
             .catch(err=>{
                 history.push('/')
             })
    },[id,history])

    return (
        <div className={cssClasses.Main}>
          <div
            className={cssClasses.Card}
            onClick={() => {
              console.log("card");
            }}
          >
            <div
              className={cssClasses.Image}
              style={{ backgroundImage: `url(${BASE_URL + user.images})` }}
            ></div>
            <p className={cssClasses.Title}>NAME: {user.firstName+ " "+ user.lastName}</p>
            <p className={cssClasses.Title} style = {{marginBottom:'80px'}}>PHONE: {user.phone}</p>
          </div>
          <div className = {cssClasses.Temp}>
          <CentredButton
            onClick={() => {
              messageHandler()
            }}
            success
            fontSize="17px"
          >
            Message
          </CentredButton>
          </div>
         
        </div>
      );
   
}