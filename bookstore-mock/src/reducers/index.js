import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SelectedBookReducer from './reducer_selected_book';

const RootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBookReducer,
});

export default RootReducer;
