import { put } from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes';
import * as restController from '../api/rest/restController';
import { controller } from '../api/ws/socketController';

export function* privateSaga(action) {
  yield put({ type: ACTIONS.GET_USER_REQUEST });
  try {
    const { data } = yield restController.getUser();
    yield put({ type: ACTIONS.GET_USER_SUCCESS, data });
    controller.subscribe(data.id);
  } catch (e) {
    yield put({ type: ACTIONS.GET_USER_ERROR, error: e.response });
  }
}

export function* notAuthorizeSaga(action) {
  yield put({ type: ACTIONS.GET_USER_REQUEST });
  try {
    const { data } = yield restController.getUser();
    action.replace('/');
    yield put({ type: ACTIONS.GET_USER_SUCCESS, data });
  } catch (e) {
    yield put({ type: ACTIONS.GET_USER_ERROR, error: e });
  }
}

export function* updateUserData(action) {
  try {
    const { data } = yield restController.updateUser(action.data);
    yield put({ type: ACTIONS.UPDATE_USER_DATA_SUCCESS, data });
    yield put({ type: ACTIONS.CHANGE_EDIT_MODE_ON_USER_PROFILE, data: false });
  } catch (e) {
    yield put({ type: ACTIONS.UPDATE_USER_DATA_ERROR, error: e.response });
  }
}

export function* headerRequest() {
  yield put({ type: ACTIONS.GET_USER_REQUEST });
  try {
    const { data } = yield restController.getUser();
    yield put({ type: ACTIONS.GET_USER_SUCCESS, data });
    controller.subscribe(data.id);
  } catch (e) {
    yield put({ type: ACTIONS.GET_USER_ERROR, error: e.response });
  }
}
