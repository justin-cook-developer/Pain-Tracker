import React from 'react';
import { connect } from 'react-redux';

import AllRecordsDumb from './AllRecordsDumb';
import { sortRecords } from '../../../utilities/index';

const AllRecordsSmart = props => <AllRecordsDumb {...props} />;

const mapStateToProps = ({ records, allRecordsUI }) => {
  const sortedRecords = sortRecords(records, allRecordsUI.sortBy)
  return { records: sortedRecords }
};

export default connect(mapStateToProps)(AllRecordsSmart);
