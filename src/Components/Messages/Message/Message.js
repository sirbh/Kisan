import React from 'react'
import cssClasses from './Message.module.scss'
import {SimpleButton} from '../../UIComponents/Button'

export default (props)=>{

   const date = new Date(props.date).toUTCString()
   return  <div className = {cssClasses.Block}>
   <div className = {cssClasses.Name}>
      <span>To:</span> {props.name}
   </div>
   <div className = {cssClasses.Date}>
   <span>Date:</span> {date}
   </div>
   <div className = {cssClasses.Btn}>
   <SimpleButton success onClick = {()=>{props.viewHandler(props.id)}}> View Message</SimpleButton>
   </div>
</div>
}