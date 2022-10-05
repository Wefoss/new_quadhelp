import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes';
import { registerSaga, loginSaga } from './authSagas';
import {
  privateSaga, updateUserData, notAuthorizeSaga, headerRequest, getUsersSaga
} from './userSaga';
import { paymentSaga, cashoutSaga } from './paymentSaga';
import {
  activeContestsSaga,
  customerContestsSaga,
  updateContestSaga,
  dataForContestSaga,
  getContestByIdSaga,
  downloadContestFileSaga,
} from './contestsSagas';
import { changeMarkSaga, setOfferStatusSaga, addOfferSaga, getOffers } from './offerSagas';
import {
  previewSaga,
  getDialog,
  sendMessage,
  changeChatFavorite,
  changeChatBlock,
  getCatalogListSaga,
  addChatToCatalog,
  createCatalog,
  deleteCatalog,
  removeChatFromCatalogSaga,
  changeCatalogName,
} from './chatSagas';

function* rootSaga() {
  yield takeLatest(ACTIONS.AUTH_ACTION_REGISTER, registerSaga);
  yield takeLatest(ACTIONS.AUTH_ACTION_LOGIN, loginSaga);
  yield takeLatest(ACTIONS.PAYMENT_ACTION, paymentSaga);
  yield takeEvery(ACTIONS.GET_USER_ACTION, privateSaga);
  yield takeEvery(ACTIONS.GET_DATA_FOR_CONTEST_ACTION, dataForContestSaga);
  yield takeLatest(ACTIONS.CASHOUT_ACTION, cashoutSaga);
  yield takeLeading(ACTIONS.GET_CONTESTS_FOR_CUSTOMER, customerContestsSaga);
  yield takeLatest(ACTIONS.GET_CONTEST_BY_ID_ACTION, getContestByIdSaga);
  yield takeEvery(ACTIONS.GET_CONTESTS_FOR_CREATIVE, activeContestsSaga);
  yield takeLatest(ACTIONS.DOWNLOAD_CONTEST_FILE_ACTION, downloadContestFileSaga);
  yield takeLatest(ACTIONS.UPDATE_CONTEST_ACTION, updateContestSaga);
  yield takeEvery(ACTIONS.SET_OFFER_ACTION, addOfferSaga);
  yield takeLatest(ACTIONS.SET_OFFER_STATUS_ACTION, setOfferStatusSaga);
  yield takeLatest(ACTIONS.CHANGE_MARK_ACTION, changeMarkSaga);
  yield takeLatest(ACTIONS.UPDATE_USER_DATA, updateUserData);
  yield takeLatest(ACTIONS.ONLY_FOR_NOT_AUTHORIZE_USERS, notAuthorizeSaga);
  yield takeLatest(ACTIONS.HEADER_REQUEST_AUTHORIZE, headerRequest);
  yield takeLatest(ACTIONS.GET_PREVIEW_CHAT_ASYNC, previewSaga);
  yield takeLatest(ACTIONS.GET_DIALOG_MESSAGES_ASYNC, getDialog);
  yield takeLatest(ACTIONS.SEND_MESSAGE_ACTION, sendMessage);
  yield takeLatest(ACTIONS.SET_CHAT_FAVORITE_FLAG, changeChatFavorite);
  yield takeLatest(ACTIONS.SET_CHAT_BLOCK_FLAG, changeChatBlock);
  yield takeLatest(ACTIONS.GET_CATALOG_LIST_ASYNC, getCatalogListSaga);
  yield takeLatest(ACTIONS.ADD_CHAT_TO_CATALOG_ASYNC, addChatToCatalog);
  yield takeLatest(ACTIONS.CREATE_CATALOG_REQUEST, createCatalog);
  yield takeLatest(ACTIONS.DELETE_CATALOG_REQUEST, deleteCatalog);
  yield takeLatest(ACTIONS.REMOVE_CHAT_FROM_CATALOG_REQUEST, removeChatFromCatalogSaga);
  yield takeLatest(ACTIONS.CHANGE_CATALOG_NAME_REQUEST, changeCatalogName);
  yield takeLatest(ACTIONS.GET_ALL_OFFERS_REQUEST, getOffers);
  yield takeLatest(ACTIONS.GET_USERS_REQUEST, getUsersSaga);
}

export default rootSaga;
