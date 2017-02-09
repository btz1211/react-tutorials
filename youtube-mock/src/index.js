import React from 'react';
import ReactDOM from 'react-dom';

import VideoPlayerContainer from './components/video_player_container';

const API_KEY = 'AIzaSyBLACP6iaWuaKRavYn6AEdFGGSzMAbP3ik';

//create a new component, should produce some html
const App = (props) => {
  return (
    <VideoPlayerContainer apiKey={API_KEY}/>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
