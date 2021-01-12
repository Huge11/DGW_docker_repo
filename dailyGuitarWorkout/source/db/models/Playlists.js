 import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlaylistsSchema = new Schema({
  playlistId: String,
  watching: Boolean,
  videos: Array
})

const Playlists = mongoose.model('Playlists', PlaylistsSchema)

export default Playlists;