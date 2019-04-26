import React from 'react';
import { connect } from 'react-redux';

import ChangePage from './ChangePageButtons';
import { changePageNumber } from '../../../actions/allRecordsUI';

const ChangePageSmart = props => <ChangePage {...props} />

const mapStateToProps = ({ allRecordsUI: ui }) => {
  const { pageNumber } = ui
  return { pageNumber }
}

const mapDispatchToProps = dispatch => ({
  changePage: number => {
    const action = changePageNumber(number)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePageSmart)
