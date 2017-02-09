import React, {Component} from 'react';

export default class VideoListItem extends Component{
  constructor(props){
    super(props);

    this.onVideoClick = this.onVideoClick.bind(this)
  }

  onVideoClick(){
    this.props.onVideoSelect(this.props.video);
  }

  render(){
    const videoInfo = this.props.video.snippet;
    const videoImages = videoInfo.thumbnails.default;
    return(
      <li className="video-item list-group-item">
      	<div className="video-list media" onClick={this.onVideoClick}>
      	  <div className="media-left">
            <img className="media-object" src={videoImages.url} />
      	  </div>
      	  <div className="media-body">
      	    <div className="media-heading">{videoInfo.title}</div>
      	  </div>
      	</div>
      </li>
    )
  }
}
