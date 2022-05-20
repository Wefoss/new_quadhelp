import ACTIONS from '../actions/actionTypes';

const initialState = {
  bundle: null,
};

const bundleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_BUNDLE_ACTION: {
      return {
        bundle: action.bundle,
      };
    }
    case ACTIONS.CLEAR_BUNDLE_ACTION: {
      return {
        bundle: null,
      };
    }
    default:
      return state;
  }
}

export default bundleReducer