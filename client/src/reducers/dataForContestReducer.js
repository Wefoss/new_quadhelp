import ACTIONS from '../actions/actionTypes';

const initialState = {
  isFetching: true,
  data: null,
  error: null,
};

 const dataForContestReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_FOR_CONTEST_ACTION_REQUEST: {
      return {
        isFetching: true,
        data: null,
        error: null,
      };
    }
    case ACTIONS.GET_DATA_FOR_CONTEST_ACTION_SUCCESS: {
      return {
        isFetching: false,
        data: action.data,
        error: null,
      };
    }
    case ACTIONS.GET_DATA_FOR_CONTEST_ACTION_ERROR: {
      return {
        isFetching: false,
        data: null,
        error: action.error,
      };
    }
    case ACTIONS.CLEAR_PREFERENCE: {
      return initialState;
    }
    default:
      return state;
  }
}
export default dataForContestReducer