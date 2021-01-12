import {getChannelById, getChannelSectionsById, getPlaylistById, getPlaylistsByChannelId, getPlaylistItemsById, getVideoById} from './youtube.js';


const channelId = 'UCmnlTWVJysjWPFiZhQ5uudg';

getPlaylistsByChannelId(channelId, ["contentDetails"]).then(response=>{
    // console.log(response.data)
    return;
    const playlist = response.data.items[0].id

    getPlaylistItemsById(playlist, ['snippet']).then(response=>{
        response.data.items.forEach(item=>{
            console.log(item.snippet)
            console.log(item.contentDetails)
        })
    })

    response.data.items.forEach(item=>{
        console.log(item)
    })
})

getVideoById("iza-N93S3xs").then(response=>{
    console.log(response.data.items[0])
})

getChannelById(channelId).then(response=>{
    return;
    console.log(response.data)
})


getChannelSectionsById(channelId, ['contentDetails']).then(response => {

    return;
    const baseData = response.data;
    // console.log(baseData);
    // return;

    baseData.items.forEach(item=>{
        // console.log(item.snippet);
        // console.log(item.contentDetails);
        if(item && item.contentDetails){
            // console.log(item.contentDetails)
            item = item.contentDetails;
        }else{
            return;
        }


        // return;
        if(item && item.playlists){
            item.playlists.forEach(playlist=>{
                getPlaylistById(playlist).then(res=>{
                    console.log(res.data);
                }).catch(e=>console.log(e));
            });
        }
    });

    // getPlaylistById(baseData.contentDetails.relatedPlaylists.uploads).then(res=>{
    //     console.log(res.data.items[0])
    // })

}).catch(err=>console.log(err));

