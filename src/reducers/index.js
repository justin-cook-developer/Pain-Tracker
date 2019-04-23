import { combineReducers } from 'redux';

import header from './header';
import records from './records';
import allRecordsUI from './allRecordsUI';

export default combineReducers({
  header,
  records,
  allRecordsUI,
});
