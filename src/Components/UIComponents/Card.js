import React from "react";
import cssClasses from "./Card.module.scss";
import img1 from "../../Images/Kat.jpg";
import {CentredButton} from "./Button";
import { BASE_URL } from "../../Utilities/appConstants";

export default (props) => {
  return (
    <div className={cssClasses.Main}>
      <div
        className={cssClasses.Card}
        onClick={() => {
          props.clickHandler(props.Id)
        }}
      >
        <div
          className={cssClasses.Image}
          style={{ backgroundImage: `url(${BASE_URL + props.imageUrl})` }}
        ></div>
        <p className={cssClasses.Title}>{props.name}</p>
      </div>
      <CentredButton
        onClick={() => {
          props.messageHandler(props.Id)
        }}
        success
        fontSize="17px"
      >
        Message
      </CentredButton>
    </div>
  );
};
