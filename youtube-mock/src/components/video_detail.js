import React from 'react';

const VideoDetail = (props) => {
  const videoId = props.videoToPlay ? props.videoToPlay.id.videoId : '';
  const videoInfo = props.videoToPlay ? props.videoToPlay.snippet : {};
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
       <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div>
       <div>{videoInfo.title}</div>
       <div>{videoInfo.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
