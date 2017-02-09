import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  return (
   <ul className="video-list list-group col-md-4">
    {props.videoList.map((video) => {
        return <VideoListItem key={video.etag} video={video}
		onVideoSelect={props.onVideoSelect} />
      }
    )}
   </ul>
  )
}

export default VideoList;
