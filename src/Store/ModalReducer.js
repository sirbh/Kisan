import * as Actions from "./Actions";

const initialState = {
  id:undefined,
  name:undefined,
  phone:undefined,
  type:undefined,
  message:undefined,
  showModal:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW_MODAL: {
      return {
        message:action.payload.message,
        type: action.payload.type,
        phone:action.payload.phone,
        name:action.payload.name,
        showModal:true,
        id:action.payload.id
      };
    }
    case Actions.HIDE_MODAL:{
        return {
            name:undefined,
            phone:undefined,
            type:undefined,
            message:undefined,
            showModal:false,
            id:undefined
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
