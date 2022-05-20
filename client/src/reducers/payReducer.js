import ACTIONS from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  focusOnElement: 'number',
};

const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_FOCUS_ON_CARD: {
      return {
        ...state,
        focusOnElement: action.data,
      };
    }
    case ACTIONS.PAYMENT_ACTION_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTIONS.PAYMENT_ACTION_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTIONS.CLEAR_PAYMENT_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}

export default payReducer