import axios from 'axios';

const apiKey = 'AIzaSyBIu2X_4xJXicVITTkDtjKV_BHJZVldfIU';
const baseURL = 'https://www.googleapis.com/youtube/v3' ;

const baseParams = {
	key: apiKey,
	maxResults: 50
}

export const getChannelById = (id, parts = ['snippet'])=>{
	const url = '/channels';
	const params = {
		...baseParams,
		id: id,
		part: parts.join(',')
	};

	const config = { baseURL, url, params };

	return axios(config);
};


export const getChannelSectionsById = (id, parts = ['snippet']) => {
	const url = '/channelSections';
	const params = {
		...baseParams,
		channelId: id,
		part: parts.join(',')
	};
	
	const config = { baseURL, url, params };
	
	return axios(config);
};

export const getPlaylistsByChannelId = (id, parts = ['snippet', 'contentDetails'])=>{
	const url = '/playlists';
	const params = {
		...baseParams,
		channelId: id,
		part: parts.join(','),
	};

	const config = { baseURL, url, params };
	return axios(config);
}

export const getPlaylistById = (id, parts = ['snippet'])=>{
	const url = '/playlists';
	const params = {
		...baseParams,
		id: id,
		part: parts.join(',')
	};

	const config = { baseURL, url, params };
	return axios(config);
};

export const getPlaylistItemsById = (id, parts =['snippet']) => {
	const url = '/playlistItems';
	const params = {
		...baseParams,
		playlistId: id,
		part: parts.join(',')
	};

	const config = { baseURL, url, params };

	return axios(config);
};

export const getVideoById = (id, parts = ['snippet']) => {
	const url = '/videos';
	const params = {
		...baseParams,
		id: id,
		part: parts.join(',')
	};

	const config = { baseURL, url, params };

	return axios(config);
};