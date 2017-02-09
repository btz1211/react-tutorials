import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.onTextUpdate = this.onTextUpdate.bind(this);
  }

  onTextUpdate(event){
    this.props.onTextUpdate(event.target.value);
  }

  render(){
    return(
      <div className="search-bar">
        <input type="text" value={this.props.searchText} onChange={this.onTextUpdate}/>
      </div>
    )
  }
}
