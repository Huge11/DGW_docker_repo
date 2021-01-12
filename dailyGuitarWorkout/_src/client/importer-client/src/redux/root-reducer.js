import { combineReducers } from 'redux';

import videoReducer from "./video/video.reducer";
import userReducer from "./user/user.reducer";
import generalReducer from "./general/general.reducer";
import channelReducer from "./channel/channel.reducer";


export default combineReducers({
  video: videoReducer,
  channels: channelReducer,
  user: userReducer,
  general: generalReducer
});