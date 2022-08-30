import { combineReducers } from 'redux';
import user from './user';
import post from './post';
import theme from './theme';

export default combineReducers({ user, post, theme });
