import {VideoActionTypes as Types} from './video.types';

const INITIAL_STATE = {
  video: null
}

const videoReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_VIDEO_DATA:
      return {
        ...state,
        video: action.payload
      }
    default:
      return state;
  }
}

export default videoReducer