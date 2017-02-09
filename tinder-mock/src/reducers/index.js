import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

const RootReducer = combineReducers({
  books: BooksReducer,
});

export default RootReducer;
