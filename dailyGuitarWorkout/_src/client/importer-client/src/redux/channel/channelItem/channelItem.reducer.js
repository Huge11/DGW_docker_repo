import {Types} from './channelItem.actions';

const INITIAL_STATE = {
  isUpdating: false,
  data: null
}

const channelItemReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case Types.START_CHANNEL_WATCH_REQUEST:
      return {
        ...state,
        isUpdating: true
      }
    case Types.FINISH_CHANNEL_WATCH_REQUEST:
      return {
        ...state,
        data: action.payload,
        isUpdating: false
      }
    case Types.START_CHANNEL_UNWATCH_REQUEST:
      return {
        ...state,
        isUpdating: true
      }
    case Types.FINISH_CHANNEL_UNWATCH_REQUEST:
      return {
        ...state,
        data: action.payload,
        isUpdating: false
      }
    case Types.START_CHANNEL_DELETE_REQUEST:
      return {
        ...state,
        isUpdating: true
      }
    case Types.FINISH_CHANNEL_DELETE_REQUEST:
      return {}
    default:
      return state;
  }
}

export default channelItemReducer;