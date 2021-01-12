import ImporterActionTypes from './importer.types'

export const updateChannelSnippet = snippet=>({
	type: ImporterActionTypes.UPDATE_CHANNEL_SNIPPET,
	payload: snippet
})

export const updatePlaylistSnippet = snippet=>({
	type: ImporterActionTypes.UPDATE_PLAYLIST_SNIPPET,
	payload: snippet
})

export const updateVideoSnippet = snippet=>({
	type: ImporterActionTypes.UPDATE_VIDEO_SNIPPET,
	payload: snippet
})

export const updateImporterConfig = json=>({
	type: ImporterActionTypes.UPDATE_IMPORTER_CONFIG,
	payload: json
})