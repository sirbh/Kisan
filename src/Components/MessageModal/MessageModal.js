import React, { useState } from "react";
import GenralModal from "../UIComponents/GenralModal";
import cssClasses from "./MessageModal.module.scss";
import { SimpleButton } from "../UIComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import * as ModalActions from "../../Store/ModalActions";
import * as MessageActions from "../../Store/MessageActions";
import axios from "../../Utilities/axios";
import Loader from '../UIComponents/Loader'

export default () => {
  const [messageText, setMessageText] = useState(
    "Hi. Your OTP is: " + Math.floor(100000 + Math.random() * 900000)
  );
  const name = useSelector((state) => state.modal.name);
  const id = useSelector((state) => state.modal.id);
  const phone = useSelector((state) => state.modal.phone);
  const type = useSelector((state) => state.modal.type);
  const message = useSelector((state) => state.modal.message);
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false);

  const Header = type === "compose" ? "Compose Message" : "Sent Message";

  const sendHandler = () => {
    if (messageText.trim().length === 0) {
      dispatch(MessageActions.showMessage("danger", "Body cannot be empty!!"));
      return
    }
    setLoader(true)
    axios
      .post("/message", {
        message: messageText,
        id: id
      })
      .then((resp) => {
        setLoader(false)
        if (resp.status === 200) {
          dispatch(ModalActions.hideMessage());
          dispatch(
            MessageActions.showMessage("success", "Message sent successfully")
          );
        }
      })
      .catch((err) => {
        setLoader(false)
        console.log(err.response)
        if (err.response.status === 400) {
          dispatch(
            MessageActions.showMessage("danger", "Body cannot be empty!!")
          );
        } else {
          dispatch(
            MessageActions.showMessage("danger", "Something went wrong!!")
          );
        }
      });
  };

  return (
    <>
    {loader&&<Loader></Loader>}
    <GenralModal Heading={Header}>
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

          {type === "compose" ? (
            <textarea
              value={messageText}
              onChange={(e) => {
                setMessageText(e.target.value);
              }}
              id="w3review"
              name="textArea"
              rows="4"
              cols="50"
            ></textarea>
          ) : (
            <p>{message}</p>
          )}
          <div className={cssClasses.btn}>
            <SimpleButton
              onClick={() => {
                dispatch(ModalActions.hideMessage());
              }}
            >
              Cancal
            </SimpleButton>
            {type === "compose" ? (
              <SimpleButton success onClick={() => sendHandler()}>
                Send
              </SimpleButton>
            ) : null}
          </div>
        </div>
      </div>
    </GenralModal>
    </>
  );
};
