//     _    ____ ___    ____      _ _     
//    / \  |  _ \_ _|  / ___|__ _| | |___ 
//   / _ \ | |_) | |  | |   / _` | | / __|
//  / ___ \|  __/| |  | |__| (_| | | \__ \
// /_/   \_\_|  |___|  \____\__,_|_|_|___/
                                       


// for more realistic prototyping purposes
import {getChannelById} from 'utils/youtube';

// fetch from server || mock function
async function fetchChannelList(){


  // mock function-> fetches youtube data and puts it into proper format
  return getChannelById('UCmnlTWVJysjWPFiZhQ5uudg')
    .then(response => {
      const channelList = {
        UCmnlTWVJysjWPFiZhQ5uudg: {
          ...response.data.items[0],
          watching: true
        }
      }
      return channelList
    })
}

async function watchChannel(channelId){
  // calls API to update Database -> Server response with success or failure

  // prototype response from youtube
  return getChannelById(channelId)
    .then(response => {
      response.data.items[0].watching = true
      return response.data.items[0]
    })
}

async function unWatchChannel(channelId){
  // calls API to update Database -> Server response with success or failure

  // prototype response from youtube
  return getChannelById(channelId)
    .then(response => {
      response.data.items[0].watching = false
      return response.data.items[0]
    })
}

async function deleteChannel(channelId){
  // calls API to update Database -> Server response with success or failure
  return await true
}


export default { fetchChannelList, watchChannel, unWatchChannel, deleteChannel}