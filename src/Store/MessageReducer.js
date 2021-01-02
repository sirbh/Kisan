import * as Actions from "./Actions";

const initialState = {
  showMessage:false,
  type:undefined,
  message:undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW_MESSAGE: {
      return {
        showMessage: true,
        type: action.payload.type,
        message:action.payload.message
      };
    }
    case Actions.HIDE_MESSAGE:{
        return {
            showMessage:false,
            type:undefined,
            message:undefined
        }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer
