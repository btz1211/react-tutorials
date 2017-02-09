import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

export default class VideoPlayerContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      videoList: [],
      videoToPlay: null
    }

    this.onTextUpdate = this.onTextUpdate.bind(this);
    this.onSearchComplete = this.onSearchComplete.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onTextUpdate(text){
    this.setState({searchText: text});
    YTSearch({key: this.props.apiKey, term: text}, this.onSearchComplete);
  }

  onSearchComplete(data){
    this.setState({videoList: data});
  }

  onVideoSelect(video){
    this.setState({videoToPlay: video});
  }

  render(){
    return(
      <div>
        <SearchBar searchText={this.state.searchText} onTextUpdate={this.onTextUpdate}/>
	      <div className="row col-md-12">
	       <VideoDetail videoToPlay={this.state.videoToPlay} />
         <VideoList videoList={this.state.videoList} onVideoSelect={this.onVideoSelect}/>
	      </div>
      </div>
    )
  }
}
