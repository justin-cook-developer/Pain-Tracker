import { combineReducers } from 'redux';

import header from './header';
import records from './records';

export default combineReducers({
  header,
  records,
})
