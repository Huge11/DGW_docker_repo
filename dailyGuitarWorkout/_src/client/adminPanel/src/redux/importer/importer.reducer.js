import ImporterActionTypes from './importer.types'
// import axios from 'axios'

const INITIAL_STATE = {
	channelSnippet: null,
	playlistSnippet: null,
	videoSnippet: null,
	importerConfig: null
}

const importerReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case ImporterActionTypes.UPDATE_IMPORTER_CONFIG:

			return{
				...state,
				importerConfig: action.payload
			}
		case ImporterActionTypes.UPDATE_CHANNEL_SNIPPET:
			return{
				...state,
				channelSnippet: action.payload
			}
		case ImporterActionTypes.UPDATE_PLAYLIST_SNIPPET:
			return{
				...state,
				playlistSnippet: action.payload
			}
		case ImporterActionTypes.UPDATE_VIDEO_SNIPPET:
			return{
				...state,
				videoSnippet: action.payload
			}
		default:
			return state
	}
}

export default importerReducer