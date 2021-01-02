import React from 'react'
import styled from 'styled-components'

export const CentredButton =  styled.button`
   width:${props=>props.width?props.width:'120px'};
   height:${props=>props.height?props.height:'40px'};
   color:${props=>props.success?'#567E3A':'#e03531'};
   border:${props=>props.success?'2px solid #567E3A':'2px solid #e03531'};
   font-size:${props=>props.fontSize?props.fontSize:'15px'};
   background-color: transparent;
   position:absolute;
   bottom:0px;
   top: 89%;
   left: 50%;
   transform: translate(-50%, -50%);
   &:hover
   {
    background-color:${props=>props.success?'#567E3A':'#e03531'};
    color:white;
    cursor:pointer;
   }
   &:focus
   {
       outline:none
   }

   @media only screen and (max-width: 600px)
   {
    top: 50%;
    left: 87%;
    width:79px;
   }
`
export const SimpleButton =  styled.button`
   width:${props=>props.width?props.width:'120px'};
   height:${props=>props.height?props.height:'40px'};
   color:${props=>props.success?'#567E3A':'#e03531'};
   border:${props=>props.success?'2px solid #567E3A':'2px solid #e03531'};
   font-size:${props=>props.fontSize?props.fontSize:'15px'};
   background-color: transparent;

   &:hover
   {
    background-color:${props=>props.success?'#567E3A':'#e03531'};
    color:white;
    cursor:pointer;
   }
   &:focus
   {
       outline:none
   }
`