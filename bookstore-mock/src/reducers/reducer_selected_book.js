const SelectedBookReducer = (state = null, action) => {
  switch(action.type){
    case 'BOOKS_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default SelectedBookReducer;
