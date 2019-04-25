import React from 'react';
import { connect } from 'react-redux';

import AllRecordsDumb from './AllRecordsDumb';
import { sortRecords } from '../../../utilities/index';
import { getRecords } from '../../actions/records';

class AllRecordsSmart extends React.Component {
  constructor(props) {
    super(props)
  }

  loadRecords = () => this.props.loadRecords(this.props.pageNumber)

  componentDidMount() {
    this.loadRecords()
  }

  componentDidUpdate(oldProps) {
    if (oldProps.pageNumber === this.props.pageNumber) {
      return
    } else {
      this.loadRecords()
    }
  }

  render() {
    return (
      <AllRecordsDumb {...this.props} />
    )
  }
}

const mapStateToProps = ({ records, allRecordsUI }) => {
  const { sortBy, pageNumber } = allRecordsUI
  const sortedRecords = sortRecords(records, sortBy)
  return { records: sortedRecords, pageNumber }
};

const mapDispatchToProps = dispatch => ({
  loadRecords: pageNumber => {
    const action = getRecords(pageNumber);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRecordsSmart);
