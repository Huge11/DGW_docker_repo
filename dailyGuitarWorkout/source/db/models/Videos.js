 import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const VideosSchema = new Schema({
  videoId: {type: String, required: true},
  watching: {type: Boolean, defualt: true},
  live: {type: Boolean, default: true},
  status: {type: String, default: "new"},
  tags: {type: Array, default: []}
})


const Videos = mongoose.model('Videos', VideosSchema)

export default Videos;