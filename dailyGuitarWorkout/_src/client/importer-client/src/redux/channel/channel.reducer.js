
import {Types} from './channel.actions';
import channelItemReducer from './channelItem/channelItem.reducer';
import { combineReducers } from 'redux';



const channelListReducer = (state={isFetching: false}, action) => {
  switch(action.type){
    case Types.REQUEST_CHANNEL_LIST:
      return {
        ...state,
        isFetching: true
      }
    case Types.RECEIVE_CHANNEL_LIST:
      return {
        ...state,
        isFetching: false,
        ...action.payload
      }
    case Types.START_CHANNEL_WATCH_REQUEST:
    case Types.FINISH_CHANNEL_WATCH_REQUEST:
    case Types.START_CHANNEL_UNWATCH_REQUEST:
    case Types.FINISH_CHANNEL_UNWATCH_REQUEST:
    case Types.START_CHANNEL_DELETE_REQUEST:
    case Types.FINISH_CHANNEL_DELETE_REQUEST:
      return {
        ...state,
        [action.channelId]: channelItemReducer(state[action.channelId], action)
      }
    default:
      return state;
  }
}

const youtubeReducer = (state={isFetching: false, data: null}, action) => {
  switch(action.type){
    case Types.REQUEST_CHANNEL_YOUTUBE_DATA:
      return {
        ...state,
        isFetching: true
      }
    case Types.RECEIVE_CHANNEL_YOUTUBE_DATA:
      return {
        ...state,
        isFetching:false,
        data: action.payload
      }
    default:
      return state;
  }
}


const channelReducer = combineReducers({
  channelList: channelListReducer,
  youtube: youtubeReducer
})

export default channelReducer;