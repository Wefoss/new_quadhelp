import ACTIONS from '../actions/actionTypes';


const initialState = {
  isFetching: true,
  contestData: null,
  isEditContest: false,
  error: null,
  offers: [],
  changeMarkError: null,
  addOfferError: null,
  setOfferStatusError: null,
  isBrief: true,
  isShowOnFull: false,
  imagePath: null,
  isShowModal: false,
  valid: false
};

const getContestByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_CONTEST_BY_ID_REQUEST: {
      return {
        ...state,
        isFetching: true,
        contestData: null,
        error: null,
        offers: [],
      };
    }
    case ACTIONS.GET_CONTEST_BY_ID_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        contestData: action.data.contestData,
        error: null,
        offers: action.data.offers,
        
      };
    }
    case ACTIONS.CHANGE_CONTEST_VIEW_MODE: {
      return {
        ...state,
        isEditContest: false,
        isBrief: action.data,
      };
    }
    case ACTIONS.CHANGE_EDIT_CONTEST: {
      return {
        ...state,
        isEditContest: action.data,
      };
    }
    case ACTIONS.GET_CONTEST_BY_ID_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTIONS.UPDATE_STORE_AFTER_UPDATE_CONTEST: {
      return {
        ...state,
        error: null,
        isEditContest: false,
        contestData: { ...state.contestData, ...action.data },
      };
    }
    case ACTIONS.ADD_NEW_OFFER_TO_STORE: {
      return {
        ...state,
        error: null,
        offers: [...action.data],
        
      };
    }
    case ACTIONS.CHANGE_MARK_SUCCESS: {
      return {
        ...state,
        error: null,
        offers: [...action.data],
        
      };
    }
    case ACTIONS.CHANGE_STORE_FOR_STATUS: {
      return {
        ...state,
        error: null,
        offers: [...action.data],
      };
    }
    case ACTIONS.CHANGE_MARK_ERROR: {
      return {
        ...state,
        changeMarkError: action.error,
      };
    }
    case ACTIONS.ADD_OFFER_ERROR: {
      return {
        ...state,
        addOfferError: action.error,
      };
    }
    case ACTIONS.SET_OFFER_STATUS_ERROR: {
      return {
        ...state,
        setOfferStatusError: action.error,
      };
    }
    case ACTIONS.CLEAR_ADD_OFFER_ERROR: {
      return {
        ...state,
        addOfferError: null,
      };
    }
    case ACTIONS.CLEAR_SET_OFFER_STATUS_ERROR: {
      return {
        ...state,
        setOfferStatusError: null,
      };
    }
    case ACTIONS.CLEAR_CHANGE_MARK_ERROR: {
      return {
        ...state,
        changeMarkError: null,
      };
    }
    case ACTIONS.CHANGE_SHOW_IMAGE: {
      return {
        ...state,
        isShowOnFull: action.data.isShowOnFull,
        imagePath: action.data.imagePath,
        
      };
    }
    case ACTIONS.CHANGE_SHOW_MODAL: {
      return {
        ...state,
        isShowModal: action.data,
      };
    }
    case ACTIONS.CHECK_VALIDATION_INPUT: {
      return {
        ...state,
        valid: action.data.isValid,
      };
    }
    default:
      return state;
  }
}

export default getContestByIdReducer