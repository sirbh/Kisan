import * as Actions from "./Actions";

const initialState = {
  contactList:[],
  loading:false,
  error:{code:undefined,message:undefined}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_CONTACTS: {
      return {
        contactList: action.payload.data,
        loading: false,
        error:{code:undefined,message:undefined}
      };
    }
    case Actions.SEND_REQ:{
        return {
            ...state,
            error:{code:undefined,message:undefined},
            loading:true
        }
    }
    case Actions.SET_ERROR:{
        return {
            contactList:[],
            loading:false,
            error:{code:action.payload.code,message:action.payload.message},
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
