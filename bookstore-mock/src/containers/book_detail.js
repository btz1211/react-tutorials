import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    return (
      <div>
        <h3>Detail for:</h3>
        <div>
          {this.props.selectedBook ?
            this.props.selectedBook.title :
            ''
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps)(BookDetail);
