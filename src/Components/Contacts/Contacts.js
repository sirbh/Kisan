import React, { useEffect } from "react";
import cssClasses from "./Contacts.module.scss";
import Card from "../UIComponents/Card";
import { useDispatch, useSelector } from "react-redux";
import * as ContactAction from "../../Store/ContactActions";
import Loader from '../UIComponents/Loader'
import * as ModalActions from '../../Store/ModalActions'
import { useHistory } from "react-router-dom";



export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const contacts = useSelector(state=>state.contacts.contactList)
  const loading = useSelector(state=>state.contacts.loading)
  const error = useSelector(state=>state.contacts.error)

  const messageHandler = (id)=>{
      const user = contacts.find(ele=>ele.Id===id)
      dispatch(ModalActions.showMessage("compose",null,user.firstName+" "+user.lastName,user.phone,user.Id))
  }

  const clickHandler = (id)=>{
    history.push('contact/'+id)
  }

  useEffect(() => {
    dispatch(ContactAction.fetchItems());
  }, [dispatch]);

  const cards = contacts.length===0?<div className = {cssClasses.Other}>No Contact Found</div>:  contacts.map((contact,id)=>{
    return < Card clickHandler = {clickHandler} messageHandler = {messageHandler} name = {contact.firstName+" "+contact.lastName||""} imageUrl = {contact.images} key = {id} Id = {contact.Id}></Card>
})

  return (
    <div className={cssClasses.Contacts}>
        {
            loading?<Loader></Loader>
                   : error.code?<div className = {cssClasses.Other}>There was some error</div>
                               :cards
        }  
    </div>
  );
};
