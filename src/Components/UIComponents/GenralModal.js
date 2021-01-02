import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BackDrop from "../UIComponents/BackDrop";
import cssClasses from './GenralModal.module.scss'
import * as ModalActions from '../../Store/ModalActions'
import { useDispatch } from "react-redux";

export default (props) => {
  const dispatch = useDispatch()
  return (
    <BackDrop zValue = {200}>
      <div className={cssClasses.Modal}>
        <div className={cssClasses.Side}>
          <div className={cssClasses.Cross}>
          <FontAwesomeIcon
            icon={faWindowClose}
            onClick={() => {
              dispatch(ModalActions.hideMessage());
            }}
            size="lg"
            color="white"
          ></FontAwesomeIcon>
        </div>
          <div className={cssClasses.Content}>
          <div>
            <h2>{props.Heading}</h2>
            {/* {points && points.map((line, id) => <p key={id}>{line}</p>)}
            {clickHandler && (
              <button onClick={clickHandler} style={btnStyle}>
                {btnType}
              </button>
            )} */}
          </div>
        </div>
        </div>
        <div className={cssClasses.Main}>
          {props.children}

          {/* <p onClick={props.formHandler}>New to FarmLeed?Create an account</p> */}
        </div>
      </div>
    </BackDrop>
  );
};
