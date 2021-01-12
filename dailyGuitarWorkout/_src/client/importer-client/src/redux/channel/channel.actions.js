
//  ____          _                 _        _   _                 
// |  _ \ ___  __| |_   ___  __    / \   ___| |_(_) ___  _ __  ___ 
// | |_) / _ \/ _` | | | \ \/ /   / _ \ / __| __| |/ _ \| '_ \/ __|
// |  _ <  __/ (_| | |_| |>  <   / ___ \ (__| |_| | (_) | | | \__ \
// |_| \_\___|\__,_|\__,_/_/\_\ /_/   \_\___|\__|_|\___/|_| |_|___/

import API from 'utils/apiRequests';
import { getChannelById } from 'utils/youtube';


export const Types = {
  REQUEST_CHANNEL_LIST: 'REQUEST_CHANNEL_LIST',
  RECEIVE_CHANNEL_LIST: 'RECEIVE_CHANNEL_LIST',
  REQUEST_CHANNEL_YOUTUBE_DATA: 'REQUEST_CHANNEL_YOUTUBE_DATA',
  RECEIVE_CHANNEL_YOUTUBE_DATA: 'RECEIVE_CHANNEL_YOUTUBE_DATA',
  START_CHANNEL_WATCH_REQUEST: 'START_CHANNEL_WATCH_REQUEST',
  FINISH_CHANNEL_WATCH_REQUEST: 'FINISH_CHANNEL_WATCH_REQUEST',
  START_CHANNEL_UNWATCH_REQUEST: 'START_CHANNEL_UNWATCH_REQUEST',
  FINISH_CHANNEL_UNWATCH_REQUEST: 'FINISH_CHANNEL_UNWATCH_REQUEST',
  START_CHANNEL_DELETE_REQUEST: 'START_CHANNEL_DELETE_REQUEST',
  FINISH_CHANNEL_DELETE_REQUEST: 'FINISH_CHANNEL_DELETE_REQUEST'

}
 
// ======= Fetch Channel List ===================
export const requestChannelList = () => ({
  type: Types.REQUEST_CHANNEL_LIST,
})

export const receiveChannelList = data => ({
  type: Types.RECEIVE_CHANNEL_LIST,
  payload: data,
})

export function fetchChannelList(){
  return function(dispatch){
    // set state to is fetching
    dispatch(requestChannelList());
    // sent request to server
    return API.fetchChannelList()
      .then(json => {
        // update local state with channel list 
        dispatch(receiveChannelList(json))
      })
  }
}


// ============== fetch Youtube Data For Channel =================
export const requestChannelYoutubeData = (channelId) => ({
  type: Types.REQUEST_CHANNEL_YOUTUBE_DATA,
  payload: channelId
})

export const receiveChannelYoutubeData = (data) => ({
  type: Types.RECEIVE_CHANNEL_YOUTUBE_DATA,
  payload: data
})

export function fetchChannelYoutubeData(channelId){
  return function(dispatch){
    dispatch(requestChannelYoutubeData(channelId));

    return getChannelById(channelId)
      .then(response => {
        if(response.data.items.length < 1){
          return
        }
        console.log(response.data.items[0])
        dispatch(receiveChannelYoutubeData(response.data.items[0]))
      })
  }
}

// ================== Watch Channel (update database) ======================
export const startChannelWatchRequest = (channelId) => ({
  type: Types.START_CHANNEL_WATCH_REQUEST,
  channelId: channelId
})

export const finishChannelWatchRequest = (response) => ({
  type: Types.FINISH_CHANNEL_WATCH_REQUEST,
  payload: response
  channelId: 
})

export function watchChannel(channelId){
  return function(dispatch){
    dispatch(startChannelWatchRequest(channelId));

    return API.watchChannel(channelId)
      .then(response => {
        dispatch(finishChannelWatchRequest(response))
      })
  }
}

// ================== Un-Watch Channel (update database) ======================
export const startChannelUnWatchRequest = (channelId) => ({
  type: Types.START_CHANNEL_UNWATCH_REQUEST,
  payload: channelId
})

export const finishChannelUnWatchRequest = (response) => ({
  type: Types.FINISH_CHANNEL_UNWATCH_REQUEST,
  payload: response
})

export function unWatchChannel(channelId){
  return function(dispatch){
    dispatch(startChannelUnWatchRequest(channelId));

    return API.unWatchChannel()
      .then(response => {
        dispatch(finishChannelUnWatchRequest(response))
      })
  }
}

// ================== Delete Channel (update database) ======================
export const startChannelDeleteRequest = (channelId) => ({
  type: Types.START_CHANNEL_DELETE_REQUEST,
  payload: channelId
})

export const finishChannelDeleteRequest = (response) => ({
  type: Types.FINISH_CHANNEL_DELETE_REQUEST,
  payload: response
})

export function deleteChannel(channelId){
  return function(dispatch){
    dispatch(startChannelDeleteRequest(channelId));

    return API.deleteChannel()
      .then(response => {
        dispatch(finishChannelDeleteRequest(response))
      })
  }
}