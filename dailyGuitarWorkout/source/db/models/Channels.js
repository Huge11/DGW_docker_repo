 import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ChannelsSchema = new Schema({
  channelId: String,
  watching: Boolean,
  playlists: Array
})

const Channels = mongoose.model('Channels', ChannelsSchema)

export default Channels