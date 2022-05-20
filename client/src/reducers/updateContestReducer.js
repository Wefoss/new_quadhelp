import ACTIONS from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  error: null,
  data: null,
};

const updateContestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CONTEST_REQUEST: {
      return {
        isFetching: true,
        error: null,
        data: null,
      };
    }
    case ACTIONS.UPDATE_CONTEST_SUCCESS: {
      return {
        isFetching: false,
        error: null,
        data: action.data,
      };
    }
    case ACTIONS.UPDATE_CONTEST_ERROR: {
      return {
        isFetching: false,
        error: action.error,
        data: null,
      };
    }
    case ACTIONS.CLEAR_UPDATE_CONTEST_STORE: {
      return initialState;
    }
    default:
      return state;
  }
}

export default updateContestReducer