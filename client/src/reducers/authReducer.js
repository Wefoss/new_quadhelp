import ACTIONS from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_ACTION_REQUEST: {
      return {
        isFetching: true,
        error: null,
      };
    }
    case ACTIONS.AUTH_ACTION_SUCCESS: {
      return {
        isFetching: false,
        error: null,
      };
    }
    case ACTIONS.AUTH_ACTION_ERROR: {
      return {
        isFetching: false,
        error: action.error,
      };
    }
    case ACTIONS.AUTH_ACTION_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case ACTIONS.AUTH_ACTION_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
}

export default authReducer