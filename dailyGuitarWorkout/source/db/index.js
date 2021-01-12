import mongoose from 'mongoose';

import Videos from './models/Videos.js';
import Playlists from './models/Playlists.js';
import Channels from './models/Channels.js';


mongoose.connect(process.env.DB_ADDRESS || 'mongodb://localhost:27017/DGW', {  useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;


// =================== Videos functions ====================
// create
export const createVideoDoc = (data) => {
  return Videos.create(...data);
}
// read
export const getVideoDoc = (id) => {
  return Videos.findOne({videoId: id});
}
export const readVideoDoc = (id) => {
  return Videos.findOne({videoId: id}).lean()
}
// update
export const updateVideoDoc = (id, newData) => {
  return Videos.findOneAndUpdate({videoId: id}, newData)
}
// delete
export const deleteVideoDoc = (id) => {
  return Videos.findOneAndRemove({videoId: id})
}

// ==================== Playlist functions =======================
// create
export const createPlaylistDoc = (data) => {
  return Playlists.create(...data)
}
// read
export const getPlaylistDoc = (id) => {
  return Playlists.findOne({playlistId: id});
}
export const readPlaylistDoc = (id) => {
  return Playlists.findOne({playlistId: id}).lean()
}
// update
export const updatePlaylistDoc = (id, newData) => {
  return Playlists.findOneAndUpdate({playlistId: id}, newData)
}
// delete
export const deletePlaylistDoc = (id) => {
  return Playlists.findOneAndRemove({playlistId: id})
}


// ===================== Channel functions =============================
// get all channels
export const readAllChannels = () => {
  return Channels.find({}).lean()
}
// create
export const createChannelDoc = (data) => {
  return Channels.create(...data)
}
// read
export const getChannelDoc = (id) => {
  return Channels.findOne({channelId: id});
}
export const readChannelDoc = (id) => {
  return Channels.findOne({channelId: id}).lean()
}
// update
export const updateChannelDoc = (id, newData) => {
  return Channels.findOneAndUpdate({channelId: id}, newData)
}
// delete
export const deleteChannelDoc = (id) => {
  return Channels.findOneAndRemove({channelId: id})
}







