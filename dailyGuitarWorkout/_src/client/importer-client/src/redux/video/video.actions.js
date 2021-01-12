import VideoActionTypes from './video.actions';

export const setVideoData = data => ({
  type: VideoActionTypes.SET_VIDEO_DATA,
  payload: data
})