import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import authorReducer from './authorReducer';


export default combineReducers({posts:postsReducer, authors:authorReducer});

