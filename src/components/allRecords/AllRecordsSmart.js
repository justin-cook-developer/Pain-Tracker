import React from 'react';
import { connect } from 'react-redux';

import AllRecordsDumb from './AllRecordsDumb';

const AllRecordsSmart = props => <AllRecordsDumb {...props} />;

const mapStateToProps = ({ records }) => ({
  records,
});

export default connect(mapStateToProps)(AllRecordsSmart);
