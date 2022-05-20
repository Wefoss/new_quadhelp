import ACTIONS from '../actions/actionTypes';
import CONSTANTS from '../constants';

const initialState = {
  isFetching: true,
  addChatId: null,
  isShowCatalogCreation: false,
  currentCatalog: null,
  chatData: null,
  messages: [],
  error: null,
  isExpanded: false,
  interlocutor: [],
  messagesPreview: [],
  isShow: false,
  chatMode: CONSTANTS.NORMAL_PREVIEW_CHAT_MODE,
  catalogList: [],
  isRenameCatalog: false,
  isShowChatsInCatalog: false,
  catalogCreationMode: CONSTANTS.ADD_CHAT_TO_OLD_CATALOG,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PREVIEW_CHAT: {
      return {
        ...state,
        messagesPreview: action.data,
        error: null,
      };
    }
    case ACTIONS.RECEIVE_CATALOG_LIST_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTIONS.GET_PREVIEW_CHAT_ERROR: {
      return {
        ...state,
        error: action.error,
        messagesPreview: [],
      };
    }
    case ACTIONS.SET_CHAT_BLOCK_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.ADD_CHAT_TO_CATALOG_ERROR: {
      return {
        ...state,
        error: action.error,
        isShowCatalogCreation: false,
      };
    }
    case ACTIONS.SET_CHAT_FAVORITE_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.BACK_TO_DIALOG_LIST: {
      return {
        ...state,
        isExpanded: false,
      };
    }
    case ACTIONS.GO_TO_EXPANDED_DIALOG: {
      return {
        ...state,
        interlocutor: { ...state.interlocutor, ...action.data.interlocutor },
        chatData: action.data.conversationData,
        isShow: true,
        isExpanded: true,
        messages: [],
      };
    }
    case ACTIONS.GET_DIALOG_MESSAGES: {
      return {
        ...state,
        messages: action.data.messages,
        interlocutor: action.data.interlocutor,
      };
    }
    case ACTIONS.GET_DIALOG_MESSAGES_ERROR: {
      return {
        ...state,
        messages: [],
        interlocutor: null,
        error: action.error,
      };
    }
    case ACTIONS.SEND_MESSAGE: {
      return {
        ...state,
        chatData: { ...state.chatData, ...action.data.chatData },
        messagesPreview: action.data.messagesPreview,
        messages: [...state.messages, action.data.message],
      };
    }
    case ACTIONS.SEND_MESSAGE_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.CLEAR_MESSAGE_LIST: {
      return {
        ...state,
        messages: [],
      };
    }
    case ACTIONS.CHANGE_CHAT_SHOW: {
      return {
        ...state,
        isShowCatalogCreation: false,
        isShow: !state.isShow,
      };
    }
    case ACTIONS.SET_CHAT_PREVIEW_MODE: {
      return {
        ...state,
        chatMode: action.mode,
      };
    }
    case ACTIONS.CHANGE_CHAT_FAVORITE: {
      return {
        ...state,
        chatData: action.data.changedPreview,
        messagesPreview: action.data.messagesPreview,
      };
    }
    case ACTIONS.CHANGE_CHAT_BLOCK: {
      return {
        ...state,
        chatData: action.data.chatData,
        messagesPreview: action.data.messagesPreview,
      };
    }
    case ACTIONS.RECEIVE_CATALOG_LIST: {
      return {
        ...state,
        isFetching: false,
        catalogList: [...action.data],
      };
    }
    case ACTIONS.CHANGE_SHOW_MODE_CATALOG: {
      return {
        ...state,
        currentCatalog: { ...state.currentCatalog, ...action.data },
        isShowChatsInCatalog: !state.isShowChatsInCatalog,
        isRenameCatalog: false,
      };
    }
    case ACTIONS.CHANGE_TYPE_ADDING_CHAT_IN_CATALOG: {
      return {
        ...state,
        catalogCreationMode: action.data,
      };
    }
    case ACTIONS.CHANGE_SHOW_ADD_CHAT_TO_CATALOG: {
      return {
        ...state,
        addChatId: action.data,
        isShowCatalogCreation: !state.isShowCatalogCreation,
      };
    }
    case ACTIONS.ADD_CHAT_TO_CATALOG: {
      return {
        ...state,
        isShowCatalogCreation: false,
        catalogList: [...action.data],
      };
    }
    case ACTIONS.CREATE_CATALOG_ERROR: {
      return {
        ...state,
        isShowCatalogCreation: false,
        error: action.error,
      };
    }
    case ACTIONS.CREATE_CATALOG_SUCCESS: {
      return {
        ...state,
        catalogList: [...state.catalogList, action.data],
        isShowCatalogCreation: false,
      };
    }
    case ACTIONS.DELETE_CATALOG_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.DELETE_CATALOG_SUCCESS: {
      return {
        ...state,
        catalogList: [...action.data],
      };
    }
    case ACTIONS.REMOVE_CHAT_FROM_CATALOG_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ACTIONS.REMOVE_CHAT_FROM_CATALOG_SUCCESS: {
      return {
        ...state,
        currentCatalog: action.data.currentCatalog,
        catalogList: [...action.data.catalogList],
      };
    }
    case ACTIONS.CHANGE_RENAME_CATALOG_MODE: {
      return {
        ...state,
        isRenameCatalog: !state.isRenameCatalog,
      };
    }
    case ACTIONS.CHANGE_CATALOG_NAME_ERROR: {
      return {
        ...state,
        isRenameCatalog: false,
      };
    }
    case ACTIONS.CHANGE_CATALOG_NAME_SUCCESS: {
      return {
        ...state,
        catalogList: [...action.data.catalogList],
        currentCatalog: action.data.currentCatalog,
        isRenameCatalog: false,
      };
    }
    case ACTIONS.CLEAR_CHAT_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
}

export default chatReducer