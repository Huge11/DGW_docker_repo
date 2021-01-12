import { 
  Videos,
  SingleVideo,
  Playlists,
  SinglePlaylist,
  Channels,
  SingleChannel
  } from 'sections';

const routes = [
  {
    path: "/",
    name: "Video Page",
    component: Videos,
    icon: "ni ni-active-40",
    exact: true,
    hidden: true
  },
  {
    path: "/VideosList",
    name: "Videos Page",
    component: Videos,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },
  {
    path: "/Video",
    name: "Single Video Page",
    component: SingleVideo,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },
  {
    path: "/PlaylistsList",
    name: "Playlists Page",
    component: Playlists,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },

  {
    path: "/Playlist",
    name: "Single Playlist Page",
    component: SinglePlaylist,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },

  {
    path: "/ChannelsList",
    name: "Channles Page",
    component: Channels,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },

  {
    path: "/Channel",
    name: "Single Channel Page",
    component: SingleChannel,
    icon: "ni ni-active-40",
    exact: true,
    hidden: false
  },

]


export default routes;
