


import API from 'utils/apiRequests';
// import {getChannelById} from 'utils/youtube';

export const Types = {
  START_CHANNEL_WATCH_REQUEST: 'START_CHANNEL_WATCH_REQUEST',
  FINISH_CHANNEL_WATCH_REQUEST: 'FINISH_CHANNEL_WATCH_REQUEST',
  START_CHANNEL_UNWATCH_REQUEST: 'START_CHANNEL_UNWATCH_REQUEST',
  FINISH_CHANNEL_UNWATCH_REQUEST: 'FINISH_CHANNEL_UNWATCH_REQUEST',
  START_CHANNEL_DELETE_REQUEST: 'START_CHANNEL_DELETE_REQUEST',
  FINISH_CHANNEL_DELETE_REQUEST: 'FINISH_CHANNEL_DELETE_REQUEST'
}

export const startChannelWatchRequest = channelId => ({
  type: Types.START_CHANNEL_WATCH_REQUEST,
  payload: channelId
})

export const finishChannelWatchRequest = channelData => ({
  type: Types.FINISH_CHANNEL_WATCH_REQUEST,
  payload: channelData
})

export const watchChannel = channelId => {
  return dispatch => {
    dispatch(startChannelWatchRequest(channelId));

    return API.watchChannel(channelId)
      .then(data => {
        console.log(data)
        dispatch(finishChannelWatchRequest(data))
      })
      .catch(e => {
        // handle the error
        console.error(e)
      })
  }
}

export const startChannelUnWatchRequest = channelId => ({
  type: Types.START_CHANNEL_UNWATCH_REQUEST,
  payload: channelId
})

export const finishChannelUnWatchRequest = channelData => ({
  type: Types.FINISH_CHANNEL_UNWATCH_REQUEST,
  payload: channelData
})

export const unWatchChannel = channelId => {
  return dispatch => {
    dispatch(startChannelUnWatchRequest(channelId));

    return API.unWatchChannel(channelId)
      .then(data => {
        console.log(data)
        dispatch(finishChannelUnWatchRequest(data))
      })
      .catch(e => {
        // handle the error
        console.error(e)
      })
  }
}