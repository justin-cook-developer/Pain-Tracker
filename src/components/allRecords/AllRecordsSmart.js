import React from 'react';
import { connect } from 'react-redux';

import AllRecordsDumb from './AllRecordsDumb';
import { sortRecords } from '../../../utilities/index';
import { getRecords } from '../../actions/records';
import { changePageNumber } from '../../actions/allRecordsUI';

class AllRecordsSmart extends React.Component {
  constructor(props) {
    super(props)
  }

  getPageNumber = () => this.props.match.params.pageNumber

  loadRecords = () => this.props.loadRecords(Number(this.getPageNumber()))

  updatePage = () => this.props.updatePage(Number(this.getPageNumber()))

  componentDidMount() {
    this.updatePage()
    this.loadRecords()
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.pageNumber === this.getPageNumber()) {
      return
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      this.updatePage()
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
  const { sortBy, count } = allRecordsUI
  const sortedRecords = sortRecords(records, sortBy)
  return { records: sortedRecords, count }
};

const mapDispatchToProps = dispatch => ({
  loadRecords: pageNumber => {
    if (isNaN(pageNumber)) {
      return
    }
    const action = getRecords(pageNumber);
    dispatch(action);
  },
  updatePage: pageNumber => {
    if (isNaN(pageNumber)) {
      return
    }
    const action = changePageNumber(pageNumber)
    dispatch(action)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRecordsSmart);
