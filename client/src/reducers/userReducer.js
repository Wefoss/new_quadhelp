import ACTIONS from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null,
      };
    }
    case ACTIONS.GET_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    case ACTIONS.GET_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
        data: null,
      };
    }
    case ACTIONS.CLEAR_USER_STORE: {
      return {
        ...state,
        data: null,
        error: null,
      };
    }
    case ACTIONS.UPDATE_USER_DATA_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, ...action.data },
        error: null,
      };
    }
    case ACTIONS.UPDATE_USER_DATA_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.CLEAR_USER_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
}


export default userReducer