import React, { useContext } from "react";
import { useParams } from "react-router";

import { DataContext } from "../Context/DataContext";
import Video from "../Components/Video/Video";

const PlaylistVideos = () => {
  const { id } = useParams();
  const { playlist } = useContext(DataContext);

  const playlistVideo = playlist.find((item) => item._id === id);

  console.log(playlistVideo, "single Playlist video");
  return (
    <div className="playlist-videos">
      {playlistVideo.videos?.map((video) => (
        <Video video={video} />
      ))}
    </div>
  );
};

export default PlaylistVideos;
