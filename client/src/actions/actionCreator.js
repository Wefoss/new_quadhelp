import ACTIONS from './actionTypes';

export const authActionLogin = (data, history) => ({
  type: ACTIONS.AUTH_ACTION_LOGIN,
  data,
  history,
});

export const authActionRegister = (data, history) => ({
  type: ACTIONS.AUTH_ACTION_REGISTER,
  data,
  history,
});

export const payRequest = (data, history) => ({
  type: ACTIONS.PAYMENT_ACTION,
  data,
  history,
});

export const clearErrorSignUpAndLogin = () => ({
  type: ACTIONS.AUTH_ACTION_CLEAR_ERROR,
});

export const clearUserStore = () => ({
  type: ACTIONS.CLEAR_USER_STORE,
});

export const clearAddOfferError = () => ({
  type: ACTIONS.CLEAR_ADD_OFFER_ERROR,
});

export const clearChangeMarkError = () => ({
  type: ACTIONS.CLEAR_CHANGE_MARK_ERROR,
});

export const clearSetOfferStatusError = () => ({
  type: ACTIONS.CLEAR_SET_OFFER_STATUS_ERROR,
});

export const getUserAction = (data) => ({
  type: ACTIONS.GET_USER_ACTION,
  replace: data,
});

export const getDataForContest = (data) => ({
  type: ACTIONS.GET_DATA_FOR_CONTEST_ACTION,
  data,
});

export const clearDataForContest = () => ({ type: ACTIONS.CLEAR_DATA_FOR_SELECTS });

export const getContestsForCreative = (data) => ({
  type: ACTIONS.GET_CONTESTS_FOR_CREATIVE,
  data,
});

export const getContestsForCustomer = (data) => ({
  type: ACTIONS.GET_CONTESTS_FOR_CUSTOMER,
  data,
});

export const getContestById = (data) => ({
  type: ACTIONS.GET_CONTEST_BY_ID_ACTION,
  data,
});

export const selectBundle = (bundle) => ({
  type: ACTIONS.SELECT_BUNDLE_ACTION,
  bundle,
});

export const clearBundle = () => ({
  type: ACTIONS.CLEAR_BUNDLE_ACTION,
});

export const updateContest = (data) => ({
  type: ACTIONS.UPDATE_CONTEST_ACTION,
  data,
});

export const saveContestToStore = (data) => ({
  type: ACTIONS.SAVE_CONTEST_TO_STORE,
  data,
});

export const changeMark = (data) => ({
  type: ACTIONS.CHANGE_MARK_ACTION,
  data,
});

export const setOffer = (data) => ({
  type: ACTIONS.SET_OFFER_ACTION,
  data,
});

export const setOfferStatus = (data) => ({
  type: ACTIONS.SET_OFFER_STATUS_ACTION,
  data,
});

export const createCatalog = (data) => ({
  type: ACTIONS.CREATE_CATALOG_REQUEST,
  data,
});

export const updateUserData = (data) => ({
  type: ACTIONS.UPDATE_USER_DATA,
  data,
});

export const cashOut = (data) => ({
  type: ACTIONS.CASHOUT_ACTION,
  data,
});

export const clearContestList = () => ({
  type: ACTIONS.CLEAR_CONTESTS_LIST,
});

export const onlyForNotAuthorize = (data) => ({
  type: ACTIONS.ONLY_FOR_NOT_AUTHORIZE_USERS,
  replace: data,
});

export const headerRequest = () => ({
  type: ACTIONS.HEADER_REQUEST_AUTHORIZE,
});

export const clearAuth = () => ({
  type: ACTIONS.AUTH_ACTION_CLEAR,
});

export const getPreviewChat = () => ({
  type: ACTIONS.GET_PREVIEW_CHAT_ASYNC,
});

export const backToDialogList = () => ({
  type: ACTIONS.BACK_TO_DIALOG_LIST,
});

export const goToExpandedDialog = (data) => ({
  type: ACTIONS.GO_TO_EXPANDED_DIALOG,
  data,
});

export const getDialogMessages = (data) => ({

  type: ACTIONS.GET_DIALOG_MESSAGES_ASYNC,
  data,
});

export const sendMessageAction = (data) => ({
  type: ACTIONS.SEND_MESSAGE_ACTION,
  data,
});

export const addMessage = (data) => ({
  type: ACTIONS.SEND_MESSAGE,
  data,
});

export const clearMessageList = () => ({
  type: ACTIONS.CLEAR_MESSAGE_LIST,
});

export const changeChatShow = () => ({
  type: ACTIONS.CHANGE_CHAT_SHOW,
});

export const setNewCustomerFilter = (filter) => ({
  type: ACTIONS.SET_NEW_CUSTOMER_FILTER,
  filter,
});

export const setNewCreatorFilter = (filter) => ({
  type: ACTIONS.SET_NEW_CREATOR_FILTER,
  filter,
});

export const setPreviewChatMode = (mode) => ({
  type: ACTIONS.SET_CHAT_PREVIEW_MODE,
  mode,
});

export const changeChatFavorite = (data) => ({
  type: ACTIONS.SET_CHAT_FAVORITE_FLAG,
  data,
});

export const changeChatBlock = (data) => ({
  type: ACTIONS.SET_CHAT_BLOCK_FLAG,
  data,
});

export const changeBlockStatusInStore = (data) => ({
  type: ACTIONS.CHANGE_CHAT_BLOCK,
  data,
});

export const getCatalogList = (data) => ({
  type: ACTIONS.GET_CATALOG_LIST_ASYNC,
  data,
});

export const changeShowModeCatalog = (data) => ({
  type: ACTIONS.CHANGE_SHOW_MODE_CATALOG,
  data,
});

export const changeTypeOfChatAdding = (data) => ({
  type: ACTIONS.CHANGE_TYPE_ADDING_CHAT_IN_CATALOG,
  data,
});

export const changeShowAddChatToCatalogMenu = (data) => ({
  type: ACTIONS.CHANGE_SHOW_ADD_CHAT_TO_CATALOG,
  data,
});

export const addChatToCatalog = (data) => ({
  type: ACTIONS.ADD_CHAT_TO_CATALOG_ASYNC,
  data,
});

export const deleteCatalog = (data) => ({
  type: ACTIONS.DELETE_CATALOG_REQUEST,
  data,
});

export const removeChatFromCatalog = (data) => ({
  type: ACTIONS.REMOVE_CHAT_FROM_CATALOG_REQUEST,
  data,
});

export const changeRenameCatalogMode = () => ({
  type: ACTIONS.CHANGE_RENAME_CATALOG_MODE,
});

export const changeCatalogName = (data) => ({
  type: ACTIONS.CHANGE_CATALOG_NAME_REQUEST,
  data,
});

export const changeEditContest = (data) => ({
  type: ACTIONS.CHANGE_EDIT_CONTEST,
  data,
});

export const changeContestViewMode = (data) => ({
  type: ACTIONS.CHANGE_CONTEST_VIEW_MODE,
  data,
});

export const changeShowImage = (data) => ({
  type: ACTIONS.CHANGE_SHOW_IMAGE,
  data,
});

export const changeFocusOnCard = (data) => ({
  type: ACTIONS.CHANGE_FOCUS_ON_CARD,
  data,
});

export const changeProfileModeView = (data) => ({
  type: ACTIONS.CHANGE_PROFILE_MODE_VIEW,
  data,
});

export const changeEditModeOnUserProfile = (data) => ({
  type: ACTIONS.CHANGE_EDIT_MODE_ON_USER_PROFILE,
  data,
});

export const clearPaymentStore = () => ({
  type: ACTIONS.CLEAR_PAYMENT_STORE,
});

export const clearUpdateContestStore = () => ({
  type: ACTIONS.CLEAR_UPDATE_CONTEST_STORE,
});

export const clearUserError = () => ({
  type: ACTIONS.CLEAR_USER_ERROR,
});

export const clearChatError = () => ({
  type: ACTIONS.CLEAR_CHAT_ERROR,
});

export const changeModalShow = (data) => ({
  type: ACTIONS.CHANGE_SHOW_MODAL,
  data,
});

export const checkValidationInput = (data) => ({
  type: ACTIONS.CHECK_VALIDATION_INPUT,
  data,
});


export const getOffersRequest = () => ({
  type: ACTIONS.GET_ALL_OFFERS_REQUEST,
});

export const getOffersSuccess = (data) => ({
  type: ACTIONS.GET_ALL_OFFERS_SUCCESS,
data
});

export const getOffersError = () => ({
  type: ACTIONS.GET_ALL_OFFERS_ERROR,
});


export const getUsersRequest = () => ({
  type: ACTIONS.GET_USERS_REQUEST,
});

export const getUsersSuccess = (data) => ({
  type: ACTIONS.GET_USERS_SUCCESS,
  data
});

export const getUsersError = () => ({
  type: ACTIONS.GET_USERS_ERROR,
});