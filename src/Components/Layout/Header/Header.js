import React from 'react'
import cssClasses from './Header.module.scss'
import {NavLink, useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import * as appConstants from '../../../Utilities/appConstants'
import { useDispatch } from 'react-redux';
import * as ContactActions from '../../../Store/ContactActions'


export default ()=>{
    const history = useHistory();
    const dispatch = useDispatch()
    return <div className = {cssClasses.Header}>
         <div className={cssClasses.Holder}>{appConstants.APP_TITLE}</div>
         <div className={cssClasses.SearchBar}>
        <input
          type="text"
          placeholder="search name / search phone"
          className={cssClasses.Input}
          onClick = {()=>{history.push('/')}}
          onChange = {(e)=>{dispatch(ContactActions.fetchItems(e.target.value))}}
        ></input>
      </div>
      <div className = {cssClasses.Nav}>
          <NavLink to = '/' exact activeClassName = {cssClasses.Active} className = {cssClasses.NavLink}>
              <FontAwesomeIcon
                className = {cssClasses.Icon}
                icon = {faUser}
                size = "lg"
              ></FontAwesomeIcon>
              Contacts
          </NavLink>
          <NavLink to = '/messages' activeClassName = {cssClasses.Active} className = {cssClasses.NavLink}>
              <FontAwesomeIcon
                className = {cssClasses.Icon}
                icon = {faEnvelope}
                size = "lg"
              ></FontAwesomeIcon>
              Messages
          </NavLink>
          
      </div>
    </div>
}
